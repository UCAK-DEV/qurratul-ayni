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
  content?: any; // Dépend du type de bloc
}

export interface PageContent {
  id: string;         // slug ex: "10-a" ou "1"
  chapterId: string;  // ex: "10"
  sectionId?: string; // ex: "a"
  titleFr: string;
  titleAr: string;
  subtitleFr?: string;
  basmala?: boolean;
  audioUrl?: string;  // Nouveau champ pour l'audio spécifique de la section
  blocks: ContentBlock[];
}
