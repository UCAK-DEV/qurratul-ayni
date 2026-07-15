'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import Icon from '@/components/Icon';
import { SeekBar } from '@/components/SeekBar';

export const Player = () => {
  const {
    currentChapter, isPlaying, isLoading, error,
    togglePlay, playNext, playPrevious, quitPlayback,
  } = useAudio();
  const router = useRouter();
  const pathname = usePathname();

  if (!currentChapter || pathname === '/audio') return null;

  const playIcon = isLoading ? 'progress_activity' : isPlaying ? 'pause' : 'play_arrow';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        className="fixed z-[150] bottom-[78px] md:bottom-5 left-3 right-3 md:left-1/2 md:-translate-x-1/2 md:w-[560px] rounded-2xl border overflow-hidden"
        style={{
          background: 'var(--bg-surface)',
          borderColor: 'var(--border-subtle)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div className="flex items-center gap-3 p-2.5 pr-3">
          {/* Pochette (motif + icône du chapitre) */}
          <button
            onClick={() => router.push('/audio')}
            className="relative w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--accent-gradient)' }}
            aria-label="Ouvrir le lecteur"
          >
            <span className="absolute inset-0" style={{ backgroundImage: 'var(--pattern-islamic)' }} />
            <Icon name={currentChapter.icon || 'menu_book'} className="relative text-2xl" style={{ color: 'var(--accent-contrast)' }} />
          </button>

          {/* Titres — cliquer ouvre le lecteur plein écran */}
          <button onClick={() => router.push('/audio')} className="flex-1 min-w-0 text-left" aria-label="Ouvrir le lecteur complet">
            <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
              {currentChapter.titleFr}
            </p>
            <p className="text-xs font-amiri truncate" style={{ color: 'var(--color-gold)' }} lang="ar" dir="rtl">
              {currentChapter.titleAr}
            </p>
          </button>

          {/* Contrôles */}
          <div className="flex items-center gap-1">
            <button onClick={playPrevious} className="one-icon-btn !w-9 !h-9" aria-label="Piste précédente">
              <Icon name="skip_previous" className="text-xl" />
            </button>
            <button
              onClick={togglePlay}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-transform active:scale-90"
              style={{ background: 'var(--accent-gradient)', color: 'var(--accent-contrast)' }}
              aria-label={isPlaying ? 'Pause' : 'Lecture'}
            >
              <Icon name={playIcon} className={`text-2xl ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button onClick={playNext} className="one-icon-btn !w-9 !h-9" aria-label="Piste suivante">
              <Icon name="skip_next" className="text-xl" />
            </button>
            <button onClick={quitPlayback} className="one-icon-btn !w-8 !h-8 ml-1" aria-label="Fermer le lecteur">
              <Icon name="close" className="text-base" />
            </button>
          </div>
        </div>

        {/* Seek fin, fonctionnel (tactile + souris) */}
        <div className="px-3 pb-2 -mt-1">
          <SeekBar compact />
        </div>

        {/* Erreur de lecture éventuelle */}
        {error && (
          <p className="px-3 pb-2 text-xs text-red-400 flex items-center gap-1.5">
            <Icon name="error" className="text-sm" />
            {error}
          </p>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Player;
