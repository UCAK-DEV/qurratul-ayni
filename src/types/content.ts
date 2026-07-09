export type BlockType = 
  | 'bio_header'      // Portrait collé + bio (Chapitre 1)
  | 'split_text'      // Label à gauche, texte à droite (Chapitre 2)
  | 'text_block'      // Paragraphe simple ou stylisé
  | 'summary_grid'    // Grille de navigation vers sous-sections (Chapitres 10, 6, 12...)
  | 'procedure'      // Liste d'étapes numérotées (Purification)
  | 'comparison'     // Farata vs Souna (Deux colonnes)
  | 'grid_options'    // Options de réparation (Kafaar)
  | 'timeline'        // Étapes chronologiques (Éducation)
  | 'quote'           // Citation ou avertissement important
  | 'arabic_call'     // Basmala ou autre texte arabe centré

export interface ContentBlock {
  type: BlockType;
  titleFr?: string;
  titleAr?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any; // Dépend du type de bloc
}

// ─── Quiz & Mémorisation ───────────────────────────────────────────────────────

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string; // Explication affichée après réponse
}

export interface Flashcard {
  id: string;
  front: string;        // Question / terme (français ou arabe)
  frontAr?: string;     // Terme arabe optionnel
  back: string;         // Réponse / définition
  category?: string;    // Ex: "Zakat al-Fitr", "Bétail"
}

export interface QuizData {
  flashcards?: Flashcard[];
  questions?: QuizQuestion[];
}

// ─── Page Content ─────────────────────────────────────────────────────────────

export interface PageContent {
  id: string;         // slug ex: "10-a" ou "1"
  chapterId: string;  // ex: "10"
  sectionId?: string; // ex: "a"
  titleFr: string;
  titleAr: string;
  subtitleFr?: string;
  basmala?: boolean;
  audioUrl?: string;  // Audio spécifique à la section
  blocks: ContentBlock[];
  quiz?: QuizData;    // Données de révision (optionnel)
  nextSlug?: string;  // Slug de la partie suivante ex: "9-b"
  prevSlug?: string;  // Slug de la partie précédente ex: "8"
}
