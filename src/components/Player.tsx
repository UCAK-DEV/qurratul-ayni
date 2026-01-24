'use client';

import { useAudio } from "@/context/AudioContext";
import { motion, AnimatePresence } from "framer-motion";

export const Player = () => {
  const { currentTrack, isPlaying, togglePlay } = useAudio();

  return (
    <AnimatePresence>
      {currentTrack && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          className="fixed bottom-4 inset-x-6 z-50 max-w-2xl mx-auto"
        >
          <div className="bg-emerald-900/95 backdrop-blur-2xl border border-gold/20 rounded-2xl p-4 shadow-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <span className="material-symbols-rounded text-gold animate-pulse">equalizer</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{currentTrack.title}</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">En cours d'écoute</p>
              </div>
            </div>

            <button 
              onClick={togglePlay}
              className="w-12 h-12 bg-gold text-emerald-950 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-gold/20"
            >
              <span className="material-symbols-rounded text-2xl">
                {isPlaying ? "pause" : "play_arrow"}
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};