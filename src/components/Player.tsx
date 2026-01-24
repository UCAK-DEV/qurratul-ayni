'use client';
import { useAudio } from "@/context/AudioContext";
import { motion, AnimatePresence } from "framer-motion";

export const Player = () => {
  const { currentTrack, isPlaying, togglePlay, progress, duration, currentTime, seek } = useAudio();

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      {currentTrack && (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed bottom-8 inset-x-6 z-50 max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-4 shadow-2xl flex flex-col md:flex-row items-center gap-6 border border-gold/20">
            <div className="flex items-center gap-4 flex-1 w-full">
              <div className="w-14 h-14 rounded-2xl bg-emerald-900 flex items-center justify-center border border-gold/30">
                <span className={`material-symbols-rounded text-gold text-3xl ${isPlaying ? 'animate-pulse' : ''}`}>music_note</span>
              </div>
              <div className="flex-1 min-w-0"><h4 className="text-white font-bold text-sm truncate">{currentTrack.title}</h4><p className="text-gold/60 text-[10px] uppercase tracking-widest">Serigne Chouhinbou Mbacké</p></div>
            </div>

            <div className="flex-[2] w-full px-4">
              <input type="range" min="0" max={duration || 0} value={currentTime} onChange={(e) => seek(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-gold" />
              <div className="flex justify-between mt-2 text-[10px] text-white/40 font-mono"><span>{formatTime(currentTime)}</span><span>{formatTime(duration || 0)}</span></div>
            </div>

            <div className="flex items-center gap-5">
              <button onClick={togglePlay} className="w-14 h-14 bg-gold text-emerald-950 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg shadow-gold/20">
                <span className="material-symbols-rounded text-3xl">{isPlaying ? "pause" : "play_arrow"}</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};