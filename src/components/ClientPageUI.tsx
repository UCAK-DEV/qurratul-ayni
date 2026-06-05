'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
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

// ─── Navigation map: slug → { prev, next, label } ────────────────────────────
// Build the ordered sequence of all known slugs so we can compute prev/next
const ORDERED_SLUGS: Array<{ id: string; label: string }> = [
  { id: '1',    label: 'Cheikh Ibrahim Niasse' },
  { id: '2',    label: 'La Foi (Aqida)' },
  { id: '3',    label: 'La Pureté Rituelle' },
  { id: '4',    label: 'La Prière' },
  { id: '5',    label: 'Le Jeûne (Siyam)' },
  { id: '6',    label: 'Le Pèlerinage (Hajj)' },
  { id: '7',    label: 'Le Mariage' },
  { id: '8',    label: 'L\'Héritage' },
  { id: '9',    label: 'La Zakat — Aperçu' },
  { id: '9-a',  label: 'L\'Argent Épargné' },
  { id: '9-b',  label: 'Produits Agricoles' },
  { id: '9-c',  label: 'Le Bétail' },
  { id: '9-d',  label: 'Qui a droit à la Zakat ?' },
  { id: '9-e',  label: 'Zakat al-Fitr' },
  { id: '10',   label: 'La Médecine Prophétique' },
  { id: '10-a', label: 'Al-Fatiha comme remède' },
  { id: '10-b', label: 'Le Miel' },
  { id: '10-c', label: 'La Cupping (Hijama)' },
  { id: '10-d', label: 'La Nigelle' },
  { id: '11',   label: 'L\'Éducation Islamique' },
  { id: '11-a', label: 'Fondements Pédagogiques' },
  { id: '11-b', label: 'L\'Éducation de l\'Enfant' },
  { id: '11-c', label: 'Vertus du Savoir' },
  { id: '12',   label: 'La Spiritualité (Tasawwuf)' },
  { id: '12-a', label: 'Purification du Cœur' },
  { id: '12-b', label: 'Le Dhikr' },
  { id: '12-c', label: 'Les Stations Spirituelles' },
  { id: '12-d', label: 'L\'Amour Divin' },
  { id: '13',   label: 'La Mort et l\'Au-delà' },
  { id: '13-a', label: 'Les Signes Annonciateurs' },
  { id: '13-b', label: 'Le Jour du Jugement' },
  { id: '14',   label: 'Les Invocations (Dou\'as)' },
  { id: '14-a', label: 'Dou\'a du Matin' },
  { id: '14-b', label: 'Dou\'a du Soir' },
  { id: '14-c', label: 'Dou\'a après la Prière' },
  { id: '15',   label: 'Le Commerce Licite' },
  { id: '16',   label: 'La Famille en Islam' },
  { id: '17',   label: 'Les Droits des Voisins' },
  { id: '18',   label: 'La Politique Islamique' },
  { id: '19',   label: 'Épilogue' },
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
  const router = useRouter();
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
      className={`min-h-screen pt-24 pb-40 px-6 selection:bg-gold/30 transition-all duration-700 ${isFocusMode ? 'pt-12' : ''}`}
      style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      
      {/* Background ambient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none ambient-gradient">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-3xl" />
      </div>

      {/* Scroll progress bar (top of page) */}
      <ScrollProgressBar />

      {/* Reading Toolbar (floating right) */}
      {!isFocusMode && <ReadingToolbar />}

      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${isFocusMode ? 'max-w-4xl' : ''}`}>
        
        {/* Focus Mode Toggle */}
        <div className="fixed top-8 right-20 z-50">
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
            <span className="material-symbols-rounded">
              {isFocusMode ? 'visibility' : 'visibility_off'}
            </span>
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
               <p className="font-amiri text-4xl text-gold-light mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" lang="ar" dir="rtl">
                 بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
               </p>
            )}
            
            <div className="flex items-center justify-center gap-4">
              <span className="h-[1px] w-8 bg-gold/50" />
              <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">
                {slugArray.length > 1 ? `Chapitre ${chapterId} — Section ${slugArray[1].toUpperCase()}` : `Chapitre ${chapterId}`}
              </span>
              <span className="h-[1px] w-8 bg-gold/50" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
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
                {hasAudio && <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-20' : 'opacity-0'}`} />}
                <span className={`material-symbols-rounded text-4xl relative z-10 ${hasAudio ? 'text-gold' : 'text-white/20'}`}>
                  {!hasAudio ? 'volume_off' : isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
                </span>
                <span className={`text-sm font-bold tracking-tight relative z-10 italic font-serif ${hasAudio ? '' : 'text-white/40'}`}>
                  {!hasAudio ? 'Audio non disponible' : isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
                </span>
              </motion.button>
            )}

            {/* Reading Progress Bar */}
            <div className="pt-4">
              <ReadingProgress
                chapterId={chapterId}
                currentSlug={fullId}
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
              : 'bg-white/5 border-white/10 text-white/40 hover:border-gold/50 hover:text-white'
            }`}
          >
            <span className="material-symbols-rounded text-3xl">
              {isCompleted(fullId) ? 'task_alt' : 'check_circle'}
            </span>
            <span className="text-sm font-black uppercase tracking-[0.2em]">
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
          currentTitle={pageContent.titleFr}
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

