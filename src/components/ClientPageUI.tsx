'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '@/context/AudioContext';
import { BlockRenderer } from '@/components/BlockRenderer';
import { useLearning } from '@/context/LearningContext';
import { useTheme } from '@/context/ThemeContext';
import { PageContent } from '@/types/content';
import { Chapter } from '@/data/chapters';
import { ReadingProgress } from '@/components/ReadingProgress';
import { ChapterNav } from '@/components/ChapterNav';
import { ReadingToolbar } from '@/components/ReadingToolbar';
import { QuizSection, ZAKAT_QUIZ_DEMO } from '@/components/QuizSection';
import Icon from '@/components/Icon';

// ─── Navigation map: slug → { prev, next, label } ────────────────────────────
// Build the ordered sequence of all known slugs so we can compute prev/next
const ORDERED_SLUGS: Array<{ id: string; label: string }> = [
  { id: '1', label: "Notes sur l'auteur" },
  { id: '2', label: "Préface & Avant-propos" },
  { id: '3', label: "De l'unicité de Dieu" },
  { id: '4', label: "Mouhammadoune Rassoul Loulahi" },
  { id: '5', label: "Les Pratiques Religieuses" },
  { id: '5-a', label: "La purification du corps" },
  { id: '5-b', label: "Les ablutions" },
  { id: '5-c', label: "Le Tayamoum" },
  { id: '5-d', label: "Les souillures" },
  { id: '5-e', label: "Les menstrues" },
  { id: '5-f', label: "Les lochies" },
  { id: '6', label: "La Prière" },
  { id: '6-a', label: "L'appel à la prière" },
  { id: '6-b', label: "La prière rituelle" },
  { id: '6-c', label: "Les cinq prières" },
  { id: '6-d', label: "Pratiques Obligatoires" },
  { id: '6-e', label: "Pratiques Traditionnelles" },
  { id: '6-f', label: "La prière du Vendredi" },
  { id: '6-g', label: "Prières non effectuées" },
  { id: '6-h', label: "La prière du voyageur" },
  { id: '6-i', label: "Actes durant la prière" },
  { id: '6-j', label: "Prières surérogatoires" },
  { id: '6-k', label: "Les prières des fêtes" },
  { id: '7', label: "Le malade mourant" },
  { id: '8', label: "Le mort" },
  { id: '8-a', label: "Le lavage mortuaire" },
  { id: '9', label: "La Zakat" },
  { id: '9-a', label: "L'argent épargné" },
  { id: '10', label: "Le mois de Ramadan" },
  { id: '10-a', label: "Qu'est-ce que le jeûne ?" },
  { id: '10-b', label: "Qui doit jeûner ?" },
  { id: '10-c', label: "Actes blâmables" },
  { id: '10-d', label: "Petit déjeuner de l'aube" },
  { id: '11', label: "Le Pèlerinage" },
  { id: '11-a', label: "Le petit pèlerinage" },
  { id: '12', label: "Le Mariage" },
  { id: '12-a', label: "Les obligations" },
  { id: '12-b', label: "La célébration" },
  { id: '12-c', label: "L'acte conjugal" },
  { id: '12-d', label: "La femme enceinte" },
  { id: '12-e', label: "Le baptême" },
  { id: '12-f', label: "Quelques remèdes" },
  { id: '12-g', label: "Le sevrage" },
  { id: '12-h', label: "L'éducation" },
  { id: '13', label: "Le Divorce" },
  { id: '13-a', label: "La retraite légale" },
  { id: '13-b', label: "Les cas de divorce" },
  { id: '14', label: "Crédit prohibé" },
  { id: '15', label: "L'acte d'égorger" },
  { id: '15-a', label: "Le chasseur" },
  { id: '15-b', label: "Tabaski" },
  { id: '16', label: "La circoncision" },
  { id: '17', label: "Conseils pratiques" },
  { id: '17-a', label: "Pratiques interdites" },
  { id: '17-b', label: "Interdictions formelles" },
  { id: '17-c', label: "Causes de pauvreté" },
  { id: '17-d', label: "Aisance matérielle" },
  { id: '17-e', label: "Santé et longévité" },
  { id: '17-f', label: "La Sounna" },
  { id: '17-g', label: "Jours recommandés" },
  { id: '17-h', label: "Le repentir" },
  { id: '18', label: "Nafilas du Ramadan" },
  { id: '19', label: "Invocations et Sourates" },
  { id: '19-a', label: "L'aumône" },
  { id: '19-b', label: "Lecture du Coran" },
  { id: '19-c', label: "Sourates et versets" },
  { id: '19-d', label: "Invocations & Wirds" },
];

function getNavItems(fullId: string) {
  const idx = ORDERED_SLUGS.findIndex(s => s.id === fullId);
  const prev = idx > 0 ? ORDERED_SLUGS[idx - 1] : undefined;
  const next = idx < ORDERED_SLUGS.length - 1 ? ORDERED_SLUGS[idx + 1] : undefined;
  return { prev, next };
}

// Demo quiz only on chapter 9 sections for now
function getQuizForSlug(slug: string) {
  if (slug.startsWith('9')) return ZAKAT_QUIZ_DEMO;
  return null;
}

interface ClientPageUIProps {
  pageContent: PageContent;
  chapterData: Chapter;
  fullId: string;
  chapterId: string;
  slugArray: string[];
}

export const ClientPageUI: React.FC<ClientPageUIProps> = ({ 
  pageContent, 
  chapterData, 
  fullId, 
  chapterId,
  slugArray 
}) => {
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const { markAsCompleted, setLastVisited, isCompleted } = useLearning();
  const { isFocusMode, toggleFocusMode } = useTheme();

  React.useEffect(() => {
    if (pageContent) setLastVisited(fullId);
  }, [fullId, pageContent, setLastVisited]);

  const targetAudio = pageContent.audioUrl || chapterData.audioUrl;
  const hasAudio = !!targetAudio;
  const isThisChapterPlaying = hasAudio && currentChapter?.audioUrl === targetAudio && isPlaying;

  const handleAudioAction = () => {
    if (!hasAudio) return;
    if (currentChapter?.audioUrl === targetAudio) {
      togglePlay();
    } else {
      setChapter({
        ...chapterData,
        audioUrl: targetAudio
      });
    }
  };

  // Navigation
  const { prev, next } = getNavItems(fullId);
  const navPrev = prev ? { slug: prev.id, label: prev.label } : undefined;
  const navNext = next ? { slug: next.id, label: next.label } : undefined;
  const parentChapterSlug = slugArray.length > 1 ? chapterId : undefined;

  // Quiz data (if applicable)
  const quizData = pageContent.quiz ?? getQuizForSlug(fullId);

  return (
    <main
      className={`min-h-screen pt-8 md:pt-24 pb-40 px-6 selection:bg-gold/30 transition-all duration-700 ${isFocusMode ? 'pt-8 md:pt-12' : ''}`}
      style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      
      {/* Scroll progress bar (top of page) */}
      <ScrollProgressBar />

      {/* Reading Toolbar (floating right) */}
      {!isFocusMode && <ReadingToolbar />}

      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${isFocusMode ? 'max-w-4xl' : ''}`}>
        
        {/* Focus Mode Toggle */}
        <div className="fixed top-8 right-20 z-50 hidden md:block">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleFocusMode}
            className={`p-4 rounded-2xl backdrop-blur-xl border transition-all ${
              isFocusMode 
              ? 'bg-gold border-gold text-black shadow-lg shadow-gold/20' 
              : 'bg-white/5 border-white/10 text-white/40 hover:text-gold hover:border-gold/30'
            }`}
            aria-label={isFocusMode ? 'Quitter le mode focus' : 'Mode lecture immersive'}
          >
            <Icon name={isFocusMode ? 'visibility' : 'visibility_off'} />
          </motion.button>
        </div>

        {/* Page Header */}
        <header className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 w-full"
          >
            {pageContent.basmala && (
               <p className="font-amiri text-4xl text-gold-light mb-8" lang="ar" dir="rtl">
                 بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
               </p>
            )}
            
            <div className="flex items-center justify-center gap-4">
              <span className="h-[1px] w-8 bg-gold/50" />
              <span className="text-gold tracking-[0.14em] text-sm uppercase font-semibold">
                {slugArray.length > 1 ? `Chapitre ${chapterId} — Section ${slugArray[1].toUpperCase()}` : `Chapitre ${chapterId}`}
              </span>
              <span className="h-[1px] w-8 bg-gold/50" />
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] break-words px-2">
              {pageContent.titleFr}
            </h1>

            {!pageContent.blocks.some(b => b.type === 'bio_header') && (
              <motion.button
                whileHover={hasAudio ? { scale: 1.02 } : {}}
                whileTap={hasAudio ? { scale: 0.98 } : {}}
                onClick={handleAudioAction}
                disabled={!hasAudio}
                className={`group relative inline-flex items-center gap-6 px-10 py-5 border rounded-2xl transition-all shadow-2xl mt-8 ${
                  hasAudio 
                  ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-gold/40 shadow-gold/10' 
                  : 'bg-white/[0.01] border-white/5 opacity-50 cursor-not-allowed'
                }`}
              >
                {/* État de lecture : bordure accentuée, sans halo */}
                <Icon 
                  name={!hasAudio ? 'volume_off' : isThisChapterPlaying ? 'pause_circle' : 'play_circle'} 
                  className={`text-4xl relative z-10 ${hasAudio ? 'text-gold' : 'text-white/20'}`} 
                />
                <span className={`text-base font-medium tracking-tight relative z-10 ${hasAudio ? '' : 'text-white/50'}`}>
                  {!hasAudio ? 'Audio non disponible' : isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
                </span>
              </motion.button>
            )}

            {/* Reading Progress Bar */}
            <div className="pt-4">
              <ReadingProgress
                chapterId={chapterId}
                chapterTitle={chapterData.titleFr}
              />
            </div>
          </motion.div>
        </header>

        {/* Main Content */}
        <BlockRenderer blocks={pageContent.blocks} slug={fullId} chapterTitle={pageContent.titleFr} />

        {/* Mark as Complete Button */}
        <div className="mt-24 border-t border-white/5 pt-16 flex flex-col items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => markAsCompleted(fullId)}
            className={`flex items-center gap-4 px-12 py-6 rounded-2xl border transition-all ${
              isCompleted(fullId) 
              ? 'bg-gold/10 border-gold text-gold'
              : 'bg-white/5 border-white/10 text-white/60 hover:border-gold/50 hover:text-white'
            }`}
          >
            <Icon 
              name={isCompleted(fullId) ? 'task_alt' : 'check_circle'} 
              className="text-3xl" 
            />
            <span className="text-base font-semibold tracking-wide">
              {isCompleted(fullId) ? 'Leçon mémorisée ✓' : 'Marquer comme lu'}
            </span>
          </motion.button>
        </div>

        {/* Quiz & Flashcards Section */}
        {quizData && <QuizSection quiz={quizData} chapterTitle={pageContent.titleFr} />}
      </div>

      {/* Chapter Navigation (bottom fixed bar) */}
      {!isFocusMode && (
        <ChapterNav
          prev={navPrev}
          next={navNext}
          summarySlug={parentChapterSlug}
        />
      )}
    </main>
  );
};

// ─── Scroll Progress Indicator ─────────────────────────────────────────────────
const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0);
    };
    // Listen on both window and document for cross-browser support
    window.addEventListener('scroll', update, { passive: true });
    document.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      document.removeEventListener('scroll', update);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[200] bg-white/5" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-gold/60 to-gold transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

