import type { ContentBlock } from '@/types/content';

/**
 * Collecte récursivement les chaînes de texte d'un contenu de bloc
 * (la forme de `content` varie selon le type de bloc).
 */
const collectStrings = (value: unknown, out: string[], depth = 0): void => {
  if (depth > 4 || out.join(' ').length > 400) return;
  if (typeof value === 'string') {
    const clean = value.trim();
    // Ignorer les chaînes purement arabes ou trop courtes pour une description
    if (clean.length > 20 && /[a-zA-Zàâéèêëîïôùûç]/.test(clean)) out.push(clean);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach(v => collectStrings(v, out, depth + 1));
    return;
  }
  if (value && typeof value === 'object') {
    Object.values(value).forEach(v => collectStrings(v, out, depth + 1));
  }
};

/**
 * Extrait un résumé textuel (~160 caractères) des blocs d'une page,
 * pour servir de meta description riche en contenu réel.
 */
export const extractExcerpt = (blocks: ContentBlock[] | undefined, maxLength = 160): string | null => {
  if (!blocks || blocks.length === 0) return null;
  const texts: string[] = [];
  for (const block of blocks) {
    if (block.type === 'summary_grid') continue; // grilles de navigation : pas de texte utile
    collectStrings(block.content, texts);
    if (texts.join(' ').length >= maxLength) break;
  }
  const full = texts.join(' ').replace(/\s+/g, ' ').trim();
  if (!full) return null;
  if (full.length <= maxLength) return full;
  const cut = full.slice(0, maxLength);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
};

/**
 * Génère des mots-clés thématiques à partir des titres d'une page et de son
 * chapitre, pour que la page ressorte sur les recherches par sujet
 * (ex: « mariage en islam », « règles du jeûne »).
 */
export const buildKeywords = (pageTitle: string, chapterTitle: string): string[] => {
  // Retirer les parenthèses pour obtenir le sujet nu : "Mariage et Vie Familiale"
  const bareTopic = chapterTitle.replace(/\s*\([^)]*\)/g, '').trim();
  const keywords = new Set<string>([
    pageTitle,
    chapterTitle,
    `${bareTopic} en islam`,
    `${bareTopic} islam`,
    `règles ${bareTopic.toLowerCase()} islam`,
    'fiqh',
    'jurisprudence islamique',
    'islam',
    'Qurratul Ayni',
    'Serigne Shouhaïbou Mbacké',
    'mouride',
  ]);
  // Mots entre parenthèses (termes arabes : Salat, Zakat, Sawm, Hajj…)
  const arabicTerms = chapterTitle.match(/\(([^)]+)\)/g) ?? [];
  arabicTerms.forEach(t => keywords.add(t.replace(/[()]/g, '').trim()));
  return Array.from(keywords);
};
