/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * parse_and_update_full_book.js
 * 
 * Lit le fichier full_book_raw.txt extrait du docx, détecte intelligemment les sections
 * à l'aide d'expressions régulières, découpe le texte en parties logiques, et met à jour
 * toutes les pages Supabase avec le texte intégral exact sans résumé.
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

// ── Définition des pages et de leurs expressions régulières associées ──────────
const PAGE_DEFINITIONS = [
  { id: '2', title: 'PRÉFACE & AVANT-PROPOS', regex: /^\s*PREFACE/mi },
  { id: '3', title: 'DE L’UNICITÉ DE DIEU', regex: /^\s*DE L[’']UNICITE DE DIEU/mi },
  { id: '4', title: 'MOUHAMMADOUNE RASSOUL LOULAHI', regex: /^\s*MOUHAMMADOUNE RASSOUL\s*LOULAHI/mi },
  { id: '5', title: 'LES PRATIQUES RELIGIEUSES (INTRO)', regex: /^\s*LES PRATIQUES RELIGIEUSES/mi },
  { id: '5-a', title: 'LA PURIFICATION DU CORPS', regex: /^\s*[A-Z\.]*\s*LA PURIFICATION/mi },
  { id: '5-b', title: 'LES ABLUTIONS', regex: /^\s*LES ABLUTIONS/mi },
  { id: '5-c', title: 'LE TAYAMOUM', regex: /^\s*LE TAYAMOUM/mi },
  { id: '5-d', title: 'LES SOUILLURES', regex: /^\s*LES SOUILLURES/mi },
  { id: '5-e', title: 'LES MENSTRUES', regex: /^\s*LES MENSTRUES/mi },
  { id: '5-f', title: 'LES LOCHIES', regex: /^\s*LES LOCHIES/mi },
  { id: '6', title: 'LA PRIÈRE (INTRO)', regex: /^\s*LA PRI[EÈÉ]RE/mi },
  { id: '6-a', title: 'L\'APPEL À LA PRIÈRE', regex: /^\s*LE NODD\s*:\s*APPEL/mi },
  { id: '6-b', title: 'LA PRIÈRE RITUELLE', regex: /^\s*LA PRI[EÈÉ]RE RITUELLE/mi },
  { id: '6-c', title: 'LES CINQ PRIÈRES', regex: /^\s*LES CINQ PRI[EÈÉ]RES OBLIGATOIRES/mi },
  { id: '6-d', title: 'PRATIQUES OBLIGATOIRES', regex: /^\s*LES PRATIQUES OBLIGATOIRES/mi },
  { id: '6-e', title: 'PRATIQUES TRADITIONNELLES', regex: /^\s*LES PRATIQUES TRADITIONNELLES/mi },
  { id: '6-f', title: 'LA PRIÈRE DU VENDREDI', regex: /^\s*LA PRI[EÈÉ]RE DU VENDREDI/mi },
  { id: '6-g', title: 'PRIÈRES NON EFFECTUÉES', regex: /^\s*LES PRI[EÈÉ]RES OBLIGATOIRES NON EFFECTU[EÉ]ES/mi },
  { id: '6-h', title: 'LA PRIÈRE DU VOYAGEUR', regex: /^\s*LA PRI[EÈÉ]RE DU VOYAGEUR/mi },
  { id: '6-i', title: 'ACTES DURANT LA PRIÈRE', regex: /^\s*DE CERTAINS ACTES DURANT LA PRI[EÈÉ]RE/mi },
  { id: '6-j', title: 'PRIÈRES SURÉROGATOIRES', regex: /^\s*LES PRI[EÈÉ]RES SUR[EÉ]ROGATOIRES/mi },
  { id: '6-k', title: 'LES PRIÈRES DES FÊTES', regex: /^\s*LES PRI[EÈÉ]RES DES F[EÊ]TES/mi },
  { id: '7', title: 'LE MALADE MOURANT', regex: /^\s*LE MALADE MOURANT/mi },
  { id: '8', title: 'LE MORT', regex: /^\s*LE MORT/mi },
  { id: '8-a', title: 'LE LAVAGE MORTUAIRE', regex: /^\s*LE LAVAGE MORTUAIRE/mi },
  { id: '9', title: 'LA ZAKAT', regex: /^\s*LA ZAKAT\s*:\s*UNE OBLIGATION/mi },
  { id: '9-a', title: 'L\'ARGENT ÉPARGNÉ', regex: /^\s*ARGENT [EÉ]PARGN[EÉ]/mi },
  { id: '10', title: 'LE JEÛNE', regex: /^\s*LE MOIS DE RAMADAN/mi },
  { id: '10-a', title: 'QU\'EST-CE QUE LE JEÛNE ?', regex: /^\s*QU[’']EST-CE QUE LE JE[UÛ]NE/mi },
  { id: '10-b', title: 'QUI DOIT JEÛNER ?', regex: /^\s*QUI DOIT JE[UÛ]NER/mi },
  { id: '10-c', title: 'ACTES BLÂMABLES', regex: /^\s*(AUTRES\s+)?ACTES BL\u00C2MABLES POUR/mi },
  { id: '10-d', title: 'PETIT DÉJEUNER DE L’AUBE', regex: /^\s*DU PETIT D[EÉ]JEUNER DE L[’']AUBE/mi },
  { id: '11', title: 'LE PÈLERINAGE', regex: /^\s*LE P[EÈÉ]LERINAGE/mi },
  { id: '12', title: 'LE MARIAGE', regex: /^\s*LE MARIAGE/mi },
  { id: '12-a', title: 'LES OBLIGATIONS', regex: /LES OBLIGATIONS/mi },
  { id: '12-b', title: 'LA CÉLÉBRATION', regex: /^\s*LA C[EÉ]L[EÉ]BRATION DU MARIAGE/mi },
  { id: '12-c', title: 'L\'ACTE CONJUGAL', regex: /^\s*L['’]ACTE CONJUGAL/mi },
  { id: '12-d', title: 'LA FEMME ENCEINTE', regex: /^\s*(PR[EÉ]CAUTIONS \u00C0 PRENDRE POUR )?LA FEMME ENCEINTE/mi },
  { id: '12-e', title: 'LE BAPTÊME', regex: /^\s*LE BAPT[EÊ]ME/mi },
  { id: '12-f', title: 'QUELQUES REMÈDES', regex: /^\s*QUELQUES REM[EÈÉ]DES/mi },
  { id: '12-g', title: 'LE SEVRAGE', regex: /^\s*LE SEVRAGE/mi },
  { id: '12-h', title: 'L\'ÉDUCATION', regex: /^\s*L['’][EÉ]DUCATION DE L['’]ENFANT/mi },
  { id: '13', title: 'LE DIVORCE', regex: /^\s*LE DIVORCE/mi },
  { id: '13-a', title: 'LA RETRAITE LÉGALE', regex: /^\s*LA RETRAITE L[EÉ]GALE/mi },
  { id: '13-b', title: 'LES CAS DE DIVORCE', regex: /^\s*LES CAS DE DIVORCE/mi },
  { id: '14', title: 'CRÉDIT PROHIBÉ', regex: /^\s*DES PRODUITS DONT LE CR[EÉ]DIT EST PROHIB[EÉ]/mi },
  { id: '15', title: 'L\'ACTE D\'ÉGORGER', regex: /^\s*CONCERNANT L['’]ACTE D['’][EÉ]GORGER/mi },
  { id: '15-a', title: 'LE CHASSEUR', regex: /^\s*LE CHASSEUR/mi },
  { id: '15-b', title: 'TABASKI', regex: /^\s*TABASKI/mi },
  { id: '16', title: 'LA CIRCONCISION', regex: /^\s*DE LA CIRCONCISION/mi },
  { id: '17', title: 'CONSEILS PRATIQUES', regex: /^\s*CONSEILS PRATIQUES/mi },
  { id: '17-a', title: 'PRATIQUES INTERDITES', regex: /^\s*PRATIQUES INTERDITES/mi },
  { id: '17-b', title: 'INTERDICTIONS FORMELLES', regex: /^\s*CELA EST FORMELLEMENT INTERDIT/mi },
  { id: '17-c', title: 'CAUSES DE PAUVRETÉ', regex: /^\s*LES PRATIQUES POUVANT ENTRA[IÎ]NER LA PAUVRET[EÉ]/mi },
  { id: '17-d', title: 'AISANCE MATÉRIELLE', regex: /^\s*LES PRATIQUES ET LES ATTITUDES POUVANT ENTRA[IÎ]NER UNE AISANCE/mi },
  { id: '17-e', title: 'SANTÉ ET LONGÉVITÉ', regex: /^\s*CONSEILS PRATIQUES PERMETTANT DE VIVRE LONGTEMPS/mi },
  { id: '17-f', title: 'LA SOUNNA', regex: /^\s*SOUNNA/mi },
  { id: '17-g', title: 'JOURS RECOMMANDÉS', regex: /^\s*LES JOURS RECOMMAND[EÉ]S/mi },
  { id: '17-h', title: 'LE REPENTIR', regex: /^\s*LE REPENTIR/mi },
  { id: '19', title: 'INVOCATIONS & SOURATES', regex: /^\s*DES SIGNES PR[EÉ]CURSEURS DE LA FIN DU MONDE/mi }
];

function makeBlocks(textContent) {
  // Découpe par lignes vides (paragraphes)
  const paragraphs = textContent
    .split(/\n{2,}/)
    .map(p => p.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(p => p.length > 0);

  return paragraphs.map(p => ({ type: 'text_block', content: p }));
}

async function run() {
  console.log('📖 Chargement du fichier full_book_raw.txt...');
  const txtPath = path.join(__dirname, 'full_book_raw.txt');
  if (!fs.existsSync(txtPath)) {
    console.error('❌ Fichier full_book_raw.txt manquant !');
    return;
  }
  const fullText = fs.readFileSync(txtPath, 'utf8').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  console.log('🔍 Détection des positions de début de chaque section...');
  const matches = [];

  for (const def of PAGE_DEFINITIONS) {
    // On réinitialise la regex
    def.regex.lastIndex = 0;
    
    // On effectue une recherche globale sur le texte
    // Afin de trouver la meilleure correspondance
    let match;
    let foundIndex = -1;
    
    // On fait un scan ligne par ligne pour plus de sûreté
    const lines = fullText.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (def.regex.test(lines[i])) {
        // Calculer l'index du caractère global dans fullText
        let charIndex = 0;
        for (let j = 0; j < i; j++) {
          charIndex += lines[j].length + 1;
        }
        foundIndex = charIndex;
        break;
      }
    }

    if (foundIndex !== -1) {
      matches.push({
        id: def.id,
        title: def.title,
        index: foundIndex
      });
    } else {
      console.warn(`  ⚠️  Marqueur introuvable pour la page ${def.id}: "${def.title}" (Regex: ${def.regex})`);
    }
  }

  // Trier les correspondances par index croissant pour couper le livre dans l'ordre d'écriture
  matches.sort((a, b) => a.index - b.index);

  console.log(`\n📌 Découpage du livre en ${matches.length} sections...`);
  
  const pagesData = [];
  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const next = matches[i + 1];
    
    const start = current.index;
    const end = next ? next.index : fullText.length;
    
    const rawContent = fullText.slice(start, end).trim();
    
    pagesData.push({
      id: current.id,
      title: current.title,
      content: rawContent,
      blocks: makeBlocks(rawContent)
    });
  }

  console.log('\n🚀 Envoi du contenu complet vers Supabase...');
  let successCount = 0;
  let failCount = 0;

  for (const page of pagesData) {
    process.stdout.write(`  Page ${page.id.padEnd(6)} | ${page.title.padEnd(40)} : `);
    
    const { error } = await supabase
      .from('pages')
      .update({ blocks: page.blocks })
      .eq('id', page.id);

    if (error) {
      console.log(`❌ Supabase Error: ${error.message}`);
      failCount++;
    } else {
      console.log(`✅ ${page.blocks.length} paragraphes importés (${page.content.length} chars)`);
      successCount++;
    }
  }

  console.log(`\n🎉 Import complet terminé !`);
  console.log(`✅ Succès: ${successCount} pages`);
  if (failCount > 0) {
    console.log(`❌ Échecs: ${failCount} pages`);
  }
}

run().catch(console.error);
