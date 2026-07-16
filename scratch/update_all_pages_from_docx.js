/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * update_all_pages_from_docx.js
 * 
 * Lit le fichier full_book_raw.txt (extrait du docx) et met à jour
 * toutes les pages Supabase avec le texte intégral du livre.
 * 
 * Stratégie: parse le texte ligne par ligne en identifiant les sections
 * par leurs titres, puis construit les blocs pour chaque page.
 */

const fs   = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// ── Supabase client ──────────────────────────────────────────────────────────
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const eq = line.indexOf('=');
  if (eq > 0) env[line.slice(0, eq).trim()] = line.slice(eq + 1).trim();
});
const supabase = createClient(env['NEXT_PUBLIC_SUPABASE_URL'], env['NEXT_PUBLIC_SUPABASE_ANON_KEY']);

// ── Helpers ──────────────────────────────────────────────────────────────────
function makeBlocks(textContent) {
  /**
   * Découpe le contenu textuel en blocs pour le renderer.
   * Les lignes vides séparent les paragraphes.
   */
  const paragraphs = textContent
    .split(/\n{2,}/)
    .map(p => p.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(p => p.length > 0);

  return paragraphs.map(p => ({ type: 'text_block', content: p }));
}

function cleanText(raw) {
  return raw
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');
}

// ── Parse the book text ──────────────────────────────────────────────────────
const rawText = cleanText(fs.readFileSync(path.join(__dirname, 'full_book_raw.txt'), 'utf8'));

/**
 * Sections du livre avec leurs marqueurs (texte brut) et l'ID de la page Supabase.
 * On identifie chaque section par son titre unique dans le texte brut.
 * L'ordre doit correspondre à l'ordre d'apparition dans le livre.
 */
const SECTION_MARKERS = [
  // Page 2: Préface + Avant-propos
  { id: '2', startMarker: 'PREFACE', endMarker: 'Bismil lahi rahmani rahimi.\nDE L\'UNICITE DE DIEU' },
  // Page 3: Unicité de Dieu
  { id: '3', startMarker: 'Bismil lahi rahmani rahimi.\nDE L\'UNICITE DE DIEU', endMarker: 'MOUHAMMADOUNE RASSOUL LOULAHI' },
  // Page 4: L'Envoyé
  { id: '4', startMarker: 'MOUHAMMADOUNE RASSOUL LOULAHI', endMarker: 'LES PRATIQUES RELIGIEUSES' },
  // Page 5: Intro Pratiques Religieuses  
  { id: '5', startMarker: 'LES PRATIQUES RELIGIEUSES', endMarker: 'A. LA PURIFICATION' },
  // Page 5-a: La Purification
  { id: '5-a', startMarker: 'A. LA PURIFICATION', endMarker: 'LES ABLUTIONS' },
  // Page 5-b: Les Ablutions
  { id: '5-b', startMarker: 'LES ABLUTIONS\n', endMarker: 'LE TAYAMOUM (TIIM)' },
  // Page 5-c: Le Tayamoum
  { id: '5-c', startMarker: 'LE TAYAMOUM (TIIM)', endMarker: 'LES SOUILLURES' },
  // Page 5-d: Les Souillures
  { id: '5-d', startMarker: 'LES SOUILLURES\n', endMarker: 'LES MENSTRUES' },
  // Page 5-e: Les Menstrues
  { id: '5-e', startMarker: 'LES MENSTRUES\n', endMarker: 'LES LOCHIES' },
  // Page 5-f: Les Lochies
  { id: '5-f', startMarker: 'LES LOCHIES\n', endMarker: 'LA PRIERE' },
  // Page 6: La Prière (intro)
  { id: '6', startMarker: 'LA PRIERE\n', endMarker: 'LE NODD : APPEL À LA PRIÈRE' },
  // Page 6-a: L'Appel à la prière
  { id: '6-a', startMarker: 'LE NODD : APPEL À LA PRIÈRE', endMarker: 'LES RAKKAS' },
  // Page 6-b: La Prière rituelle / Les Rakkas
  { id: '6-b', startMarker: 'LES RAKKAS\n', endMarker: 'LES CINQ PRIERES OBLIGATOIRES' },
  // Page 6-c: Les 5 prières obligatoires
  { id: '6-c', startMarker: 'LES CINQ PRIERES OBLIGATOIRES\n', endMarker: 'LES PRATIQUES OBLIGATOIRES' },
  // Page 6-d: Pratiques obligatoires de la prière
  { id: '6-d', startMarker: 'LES PRATIQUES OBLIGATOIRES\n\nElles sont au nombre de quinze', endMarker: 'LES PRATIQUES TRADITIONNELLES\n\nElles sont au nombre de dix-huit' },
  // Page 6-e: Pratiques traditionnelles
  { id: '6-e', startMarker: 'LES PRATIQUES TRADITIONNELLES\n\nElles sont au nombre de dix-huit', endMarker: 'LA PRIERE DU VENDREDI' },
  // Page 6-f: La Prière du Vendredi
  { id: '6-f', startMarker: 'LA PRIERE DU VENDREDI', endMarker: 'LES PRIÈRES OBLIGATOIRES NON EFFECTUÉES' },
  // Page 6-g: Prières non effectuées
  { id: '6-g', startMarker: 'LES PRIÈRES OBLIGATOIRES NON EFFECTUÉES', endMarker: 'LA PRIÈRE DU VOYAGEUR' },
  // Page 6-h: Prière du voyageur
  { id: '6-h', startMarker: 'LA PRIÈRE DU VOYAGEUR', endMarker: 'DE CERTAINS ACTES DURANT LA PRIÈRE' },
  // Page 6-i: Actes durant la prière
  { id: '6-i', startMarker: 'DE CERTAINS ACTES DURANT LA PRIÈRE', endMarker: 'LES PRIÈRES SURÉROGATOIRES' },
  // Page 6-j: Prières surérogatoires
  { id: '6-j', startMarker: 'LES PRIÈRES SURÉROGATOIRES\n', endMarker: 'LES PRIÈRES DES FÊTES' },
  // Page 6-k: Prières des fêtes
  { id: '6-k', startMarker: 'LES PRIÈRES DES FÊTES', endMarker: 'LE MALADE MOURANT' },
  // Page 7: Le Malade Mourant
  { id: '7', startMarker: 'LE MALADE MOURANT\n', endMarker: 'LE MORT\n' },
  // Page 8: Le Mort
  { id: '8', startMarker: 'LE MORT\n', endMarker: 'LE LAVAGE MORTUAIRE' },
  // Page 8-a: Le Lavage Mortuaire
  { id: '8-a', startMarker: 'LE LAVAGE MORTUAIRE\n', endMarker: 'LA ZAKAT' },
  // Page 9: La Zakat
  { id: '9', startMarker: 'LA ZAKAT\n', endMarker: 'L\'ARGENT ÉPARGNÉ' },
  // Page 9-a: L'Argent épargné
  { id: '9-a', startMarker: 'L\'ARGENT ÉPARGNÉ', endMarker: 'LE JEÛNE' },
  // Page 10: Le Jeûne
  { id: '10', startMarker: 'LE JEÛNE\n', endMarker: 'COMMENT EFFECTUER LE JEÛNE' },
  // Page 10-a: Comment effectuer le jeûne
  { id: '10-a', startMarker: 'COMMENT EFFECTUER LE JEÛNE', endMarker: 'COMMENT ROMPRE LE JEÛNE' },
  // Page 10-b: Comment rompre le jeûne
  { id: '10-b', startMarker: 'COMMENT ROMPRE LE JEÛNE', endMarker: 'CE QUI ANNULE LE JEÛNE' },
  // Page 10-c: Ce qui annule le jeûne
  { id: '10-c', startMarker: 'CE QUI ANNULE LE JEÛNE', endMarker: 'LE PÈLERINAGE À LA MECQUE' },
  // Page 11: Le Pèlerinage
  { id: '11', startMarker: 'LE PÈLERINAGE À LA MECQUE', endMarker: 'LE MARIAGE' },
  // Page 12: Le Mariage
  { id: '12', startMarker: 'LE MARIAGE\n', endMarker: 'L\'ACTE CONJUGAL' },
  // Page 12-a: L'acte conjugal (conditions)
  { id: '12-a', startMarker: 'LES CONDITIONS DU MARIAGE', endMarker: 'LES FEMMES QU\'IL EST INTERDIT D\'ÉPOUSER' },
  // Page 12-b: Femmes interdites
  { id: '12-b', startMarker: 'LES FEMMES QU\'IL EST INTERDIT D\'ÉPOUSER', endMarker: 'L\'ACTE CONJUGAL' },
  // Page 12-c: L'acte conjugal
  { id: '12-c', startMarker: 'L\'ACTE CONJUGAL\n', endMarker: 'LA FEMME ENCEINTE' },
  // Page 12-d: La femme enceinte
  { id: '12-d', startMarker: 'LA FEMME ENCEINTE\n', endMarker: 'LE BAPTÊME' },
  // Page 12-e: Le Baptême
  { id: '12-e', startMarker: 'LE BAPTÊME\n', endMarker: 'QUELQUES REMÈDES POUR L\'ENFANT' },
  // Page 12-f: Quelques remèdes
  { id: '12-f', startMarker: 'QUELQUES REMÈDES POUR L\'ENFANT', endMarker: 'LE SEVRAGE' },
  // Page 12-g: Le sevrage
  { id: '12-g', startMarker: 'LE SEVRAGE\n', endMarker: 'L\'ÉDUCATION DE L\'ENFANT' },
  // Page 12-h: L'éducation
  { id: '12-h', startMarker: 'L\'ÉDUCATION DE L\'ENFANT', endMarker: 'LE DIVORCE' },
  // Page 13: Le Divorce
  { id: '13', startMarker: 'LE DIVORCE\n', endMarker: 'LA RETRAITE LÉGALE' },
  // Page 13-a: La Retraite légale
  { id: '13-a', startMarker: 'LA RETRAITE LÉGALE\n', endMarker: 'LES CAS DE DIVORCE' },
  // Page 13-b: Les cas de divorce
  { id: '13-b', startMarker: 'LES CAS DE DIVORCE\n', endMarker: 'DES PRODUITS DONT LE CRÉDIT EST PROHIBÉ' },
  // Page 14: Crédit prohibé
  { id: '14', startMarker: 'DES PRODUITS DONT LE CRÉDIT EST PROHIBÉ', endMarker: 'CONCERNANT L\'ACTE D\'ÉGORGER' },
  // Page 15: L'acte d'égorger
  { id: '15', startMarker: 'CONCERNANT L\'ACTE D\'ÉGORGER', endMarker: 'LE CHASSEUR' },
  // Page 15-a: Le Chasseur
  { id: '15-a', startMarker: 'LE CHASSEUR\n', endMarker: 'TABASKI' },
  // Page 15-b: Tabaski
  { id: '15-b', startMarker: 'TABASKI\n', endMarker: 'DE LA CIRCONCISION' },
  // Page 16: La Circoncision
  { id: '16', startMarker: 'DE LA CIRCONCISION\n', endMarker: 'CONSEILS PRATIQUES' },
  // Page 17: Conseils pratiques
  { id: '17', startMarker: 'CONSEILS PRATIQUES\n', endMarker: 'PRATIQUES INTERDITES' },
  // Page 17-a: Pratiques interdites
  { id: '17-a', startMarker: 'PRATIQUES INTERDITES\n', endMarker: 'CELA EST FORMELLEMENT INTERDIT' },
  // Page 17-b: Formellement interdit
  { id: '17-b', startMarker: 'CELA EST FORMELLEMENT INTERDIT', endMarker: 'LES PRATIQUES POUVANT ENTRAÎNER LA PAUVRETÉ' },
  // Page 17-c: Causes de pauvreté
  { id: '17-c', startMarker: 'LES PRATIQUES POUVANT ENTRAÎNER LA PAUVRETÉ', endMarker: 'LES PRATIQUES ET LES ATTITUDES POUVANT ENTRAÎNER UNE AISANCE MATÉRIELLE' },
  // Page 17-d: Aisance matérielle
  { id: '17-d', startMarker: 'LES PRATIQUES ET LES ATTITUDES POUVANT ENTRAÎNER UNE AISANCE MATÉRIELLE', endMarker: 'CONSEILS PRATIQUES PERMETTANT DE VIVRE LONGTEMPS' },
  // Page 17-e: Santé et longévité
  { id: '17-e', startMarker: 'CONSEILS PRATIQUES PERMETTANT DE VIVRE LONGTEMPS', endMarker: 'SOUNNA\n' },
  // Page 17-f: La Sounna / Bienséance
  { id: '17-f', startMarker: 'SOUNNA\n', endMarker: 'LES JOURS RECOMMANDÉS POUR CERTAINES CHOSES' },
  // Page 17-g: Jours recommandés
  { id: '17-g', startMarker: 'LES JOURS RECOMMANDÉS POUR CERTAINES CHOSES', endMarker: 'LE REPENTIR' },
  // Page 17-h: Le Repentir
  { id: '17-h', startMarker: 'LE REPENTIR\n', endMarker: 'DES SIGNES PRÉCURSEURS DE LA FIN DU MONDE' },
  // Page 19: Invocations / Fin du livre
  { id: '19', startMarker: 'DES SIGNES PRÉCURSEURS DE LA FIN DU MONDE', endMarker: null },
];

// ── Extract section text ──────────────────────────────────────────────────────
function extractSection(text, startMarker, endMarker) {
  const startIdx = text.indexOf(startMarker);
  if (startIdx === -1) {
    console.warn(`  ⚠️  Marqueur de début non trouvé: "${startMarker.slice(0, 50)}"`);
    return null;
  }
  
  let content;
  if (endMarker) {
    const endIdx = text.indexOf(endMarker, startIdx + startMarker.length);
    if (endIdx === -1) {
      console.warn(`  ⚠️  Marqueur de fin non trouvé: "${endMarker.slice(0, 50)}"`);
      content = text.slice(startIdx);
    } else {
      content = text.slice(startIdx, endIdx);
    }
  } else {
    content = text.slice(startIdx);
  }
  
  return content.trim();
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('📚 Mise à jour de toutes les pages depuis le fichier full_book_raw.txt\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const section of SECTION_MARKERS) {
    process.stdout.write(`  Page ${section.id.padEnd(6)}: `);
    
    const sectionText = extractSection(rawText, section.startMarker, section.endMarker);
    if (!sectionText) {
      console.log('❌ Section introuvable dans le texte');
      failCount++;
      continue;
    }
    
    const blocks = makeBlocks(sectionText);
    if (blocks.length === 0) {
      console.log('❌ Aucun bloc généré');
      failCount++;
      continue;
    }
    
    const { error } = await supabase
      .from('pages')
      .update({ blocks })
      .eq('id', section.id);
    
    if (error) {
      console.log(`❌ Erreur Supabase: ${error.message}`);
      failCount++;
    } else {
      console.log(`✅ ${blocks.length} blocs mis à jour (${sectionText.length} chars)`);
      successCount++;
    }
  }
  
  console.log(`\n✅ Succès: ${successCount} pages`);
  if (failCount > 0) {
    console.log(`❌ Échecs: ${failCount} pages`);
  }
  console.log('\n🎉 Mise à jour terminée !');
}

main().catch(console.error);
