'use client';
import { useAudio } from "@/context/AudioContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Player = () => {
  const { currentTrack, isPlaying, togglePlay } = useAudio();
  const [progress, setProgress] = useState(0);

  // Simulation de progression (à lier à audioRef.current.currentTime plus tard)
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => setProgress(p => (p < 100 ? p + 0.1 : 0)), 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <AnimatePresence>
      {currentTrack && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 inset-x-6 z-50 max-w-4xl mx-auto px-4"
        >
          <div className="glass-card rounded-3xl p-4 shadow-2xl flex flex-col md:flex-row items-center gap-6 border border-gold/20">
            {/* Visualiseur & Info */}
            <div className="flex items-center gap-4 flex-1 w-full">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-emerald-900 flex items-center justify-center border border-gold/30">
                <motion.div 
                   animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="material-symbols-rounded text-gold text-3xl"
                >
                  music_note
                </motion.div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-sm truncate">{currentTrack.title}</h4>
                <p className="text-gold/60 text-[10px] uppercase tracking-[0.2em] font-medium">Serigne Chouhinbou Mbacké</p>
              </div>
            </div>

            {/* Barre de progression centrale */}
            <div className="flex-[2] w-full px-4">
              <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer group">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_10px_#c9a961]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-white/40 font-mono">
                <span>2:15</span>
                <span>4:30</span>
              </div>
            </div>

            {/* Contrôles */}
            <div className="flex items-center gap-5">
              <button className="text-white/40 hover:text-gold transition-colors">
                <span className="material-symbols-rounded">skip_previous</span>
              </button>
              <button 
                onClick={togglePlay}
                className="w-14 h-14 bg-gold text-emerald-950 rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-lg shadow-gold/20"
              >
                <span className="material-symbols-rounded text-3xl">
                  {isPlaying ? "pause" : "play_arrow"}
                </span>
              </button>
              <button className="text-white/40 hover:text-gold transition-colors">
                <span className="material-symbols-rounded">skip_next</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};