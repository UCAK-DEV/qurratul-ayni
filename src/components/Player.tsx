'use client';

import { useAudio } from '@/context/AudioContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Player = () => {
  const { currentChapter, isPlaying, togglePlay, progress } = useAudio();

  return (
    <AnimatePresence>
      {currentChapter && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-lg"
        >
          <div className="glass-card p-4 rounded-3xl border border-gold/20 shadow-2xl flex items-center gap-5 backdrop-blur-2xl">
            <button 
              onClick={togglePlay}
              className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-emerald-950 shadow-lg hover:scale-105 transition-transform"
            >
              <span className="material-symbols-rounded text-4xl">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
            
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-1">
                Lecture en cours
              </p>
              <p className="text-sm font-bold text-white truncate">
                {currentChapter.titleFr}
              </p>
              <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                <motion.div 
                  className="h-full bg-gold shadow-[0_0_10px_#C9A961]" 
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-end gap-1 h-6 pr-2">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: isPlaying ? [8, 20, 8] : 8 }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                  className="w-1 bg-gold/40 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};