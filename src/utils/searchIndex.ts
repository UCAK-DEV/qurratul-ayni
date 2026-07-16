import Fuse from 'fuse.js';
import { PageContent, ContentBlock } from '@/types/content';

export interface SearchResultItem {
  id: string; // ex: "5-a"
  chapterId: string; // ex: "5"
  titleFr: string;
  titleAr: string;
  chapterTitleFr?: string;
  excerpt: string; // Un snippet contenant la correspondance
  score?: number;
}

// Extrait tout le texte brut en français d'un bloc de contenu
export const extractTextFromBlock = (block: ContentBlock): string => {
  if (!block) return '';
  let text = '';

  if (block.type === 'text_block') {
    if (typeof block.content === 'string') {
      text += block.content + ' ';
    } else if (Array.isArray(block.content)) {
      text += block.content.join(' ') + ' ';
    }
  } else if (block.type === 'procedure') {
    if (block.titleFr) text += block.titleFr + ' ';
    if (Array.isArray(block.content)) {
      text += block.content.join(' ') + ' ';
    }
  } else if (block.type === 'quote') {
    if (Array.isArray(block.content)) {
      text += block.content.join(' ') + ' ';
    }
  } else if (block.type === 'comparison') {
    if (Array.isArray(block.content)) {
      block.content.forEach((col: any) => {
        if (col.titleFr) text += col.titleFr + ' ';
        if (Array.isArray(col.items)) {
          text += col.items.join(' ') + ' ';
        }
      });
    }
  } else if (block.type === 'split_text') {
    if (Array.isArray(block.content)) {
      block.content.forEach((item: any) => {
        if (item.label) text += item.label + ' ';
        if (item.translation) text += item.translation + ' ';
        if (Array.isArray(item.paragraphs)) {
          text += item.paragraphs.join(' ') + ' ';
        }
      });
    }
  } else if (block.type === 'summary_grid') {
    if (Array.isArray(block.content)) {
      block.content.forEach((card: any) => {
        if (card.title) text += card.title + ' ';
        if (card.description) text += card.description + ' ';
      });
    }
  }

  return text.trim();
};

export interface IndexablePage {
  id: string;
  chapterId: string;
  titleFr: string;
  titleAr: string;
  subtitleFr?: string;
  fullText: string;
}

// Prépare les pages pour l'indexation par Fuse.js
export const prepareIndexablePages = (pages: PageContent[]): IndexablePage[] => {
  return pages.map(page => {
    const blockTexts = (page.blocks || []).map(extractTextFromBlock).join(' ');
    return {
      id: page.id,
      chapterId: page.chapterId,
      titleFr: page.titleFr || '',
      titleAr: page.titleAr || '',
      subtitleFr: page.subtitleFr || '',
      fullText: blockTexts
    };
  });
};

// Extrait un snippet contenant le mot clé recherché
export const getSearchSnippet = (text: string, query: string, maxLength: number = 140): string => {
  if (!text) return '';
  if (!query) return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) {
    return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
  }

  const start = Math.max(0, index - Math.floor(maxLength / 2));
  const end = Math.min(text.length, start + maxLength);
  
  let snippet = text.substring(start, end);
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';

  return snippet;
};

// Initialise et exécute la recherche
export const searchInPages = (
  query: string,
  pages: PageContent[],
  chapters: { id: string; titleFr: string }[]
): SearchResultItem[] => {
  const indexable = prepareIndexablePages(pages);
  
  const options = {
    keys: [
      { name: 'titleFr', weight: 0.5 },
      { name: 'subtitleFr', weight: 0.3 },
      { name: 'fullText', weight: 0.2 }
    ],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
  };

  const fuse = new Fuse(indexable, options);
  const results = fuse.search(query);

  return results.map(res => {
    const item = res.item;
    const chapter = chapters.find(c => c.id === item.chapterId);
    
    return {
      id: item.id,
      chapterId: item.chapterId,
      titleFr: item.titleFr,
      titleAr: item.titleAr,
      chapterTitleFr: chapter?.titleFr,
      excerpt: getSearchSnippet(item.fullText, query),
      score: res.score
    };
  });
};
