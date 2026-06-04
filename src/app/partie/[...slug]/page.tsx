'use client';

import React, { use } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';
import { PAGES_CONTENT } from '@/data/pages_content';
import { BlockRenderer } from '@/components/BlockRenderer';
import { useLearning } from '@/context/LearningContext';
import { useTheme } from '@/context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default function DynamicPage({ params }: PageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const { markAsCompleted, setLastVisited, isCompleted } = useLearning();
  const { isFocusMode, toggleFocusMode } = useTheme();

  const fullId = slug.join('-'); // ex: "10-a" or "1"
  const pageContent = PAGES_CONTENT[fullId];
  const chapterId = slug[0];
  const chapterData = CHAPTERS.find(c => c.id === chapterId) || CHAPTERS[0];

  React.useEffect(() => {
    if (pageContent) setLastVisited(fullId);
  }, [fullId, pageContent, setLastVisited]);

  if (!pageContent) {
    return (
      <div className="min-h-screen bg-[#010302] text-white flex items-center justify-center flex-col gap-4">
        <p className="text-xl font-serif italic">Contenu en cours de migration...</p>
        <button onClick={() => router.push('/accueil')} className="text-gold uppercase tracking-widest text-xs font-bold">Retour à l'accueil</button>
      </div>
    );
  }

  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    // Si un audio spécifique à la section existe, on l'utilise, sinon l'audio du chapitre
    const targetAudio = pageContent.audioUrl || chapterData.audioUrl;
    
    if (currentChapter?.audioUrl === targetAudio) {
      togglePlay();
    } else {
      setChapter({
        ...chapterData,
        audioUrl: targetAudio
      });
    }
  };

  return (
    <main className={`min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 transition-all duration-700 ${isFocusMode ? 'pt-12' : ''}`}>
      
      {/* Background Decoratif */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-3xl" />
      </div>

      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${isFocusMode ? 'max-w-4xl' : ''}`}>
        
        {/* Bouton Focus */}
        <div className="fixed top-8 right-8 z-50">
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

        {/* Header Style "Fine Art" */}
        <header className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {pageContent.basmala && (
               <p className="font-amiri text-4xl text-gold-light mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" lang="ar" dir="rtl">
                 بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
               </p>
            )}
            
            <div className="flex items-center justify-center gap-4">
              <span className="h-[1px] w-8 bg-gold/50" />
              <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">
                {slug.length > 1 ? `Chapitre ${chapterId} — Section ${slug[1].toUpperCase()}` : `Chapitre ${chapterId}`}
              </span>
              <span className="h-[1px] w-8 bg-gold/50" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              {pageContent.titleFr}
            </h1>

            {pageContent.type !== 'bio_header' && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAudioAction}
                className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl mt-8"
                aria-label={isPlaying ? 'Pause' : 'Lecture'}
                aria-pressed={isThisChapterPlaying}
              >
                <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-20' : 'opacity-0'}`} />
                <span className="material-symbols-rounded text-4xl relative z-10 text-gold">
                  {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
                </span>
                <span className="text-sm font-bold tracking-tight relative z-10 italic font-serif">
                  {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
                </span>
              </motion.button>
            )}
          </motion.div>
        </header>

        {/* Renderer de blocs */}
        <BlockRenderer blocks={pageContent.blocks} slug={fullId} chapterTitle={pageContent.titleFr} />

        {/* Validation de lecture */}
        <div className="mt-32 border-t border-white/5 pt-16 flex flex-col items-center">
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
              {isCompleted(fullId) ? 'Leçon mémorisée' : 'Marquer comme lu'}
            </span>
          </motion.button>
          <p className="mt-6 text-[10px] text-white/20 uppercase tracking-widest font-bold">L'apprentissage constant est la clé de la réussite</p>
        </div>

      </div>

      {/* Navigation Flottante */}
      <AnimatePresence>
        {!isFocusMode && (
          <motion.nav 
            initial={{ y: 100, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            exit={{ y: 100, x: '-50%' }}
            className="fixed bottom-10 left-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50"
          >
            <button 
              onClick={() => router.push('/accueil')} 
              className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
              aria-label="Retour au sommaire"
            >
              Sommaire
            </button>
            <div className="w-[1px] h-4 bg-white/10 mx-2" />
          </motion.nav>
        )}
      </AnimatePresence>
    </main>
  );
}
