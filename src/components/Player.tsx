'use client';

import { useAudio } from '@/context/AudioContext';
import Icon from '@/components/Icon';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export const Player = () => {
  const { 
    currentChapter, isPlaying, progress, currentTime, duration,
    playbackRate, isLooping, isLoading, error,
    togglePlay, seekTo, setPlaybackRate,
    toggleLoop, playNext, playPrevious, quitPlayback, formatTime
  } = useAudio();

  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false); // New state for options menu

  // Handle seeking interaction
  const handleSeekStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsSeeking(true);
    handleSeek(e);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isSeeking && progressBarRef.current && duration > 0) {
      const rect = progressBarRef.current.getBoundingClientRect();
      let offsetX = e.clientX - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width));
      const time = (offsetX / rect.width) * duration;
      setSeekTime(time);
    }
  };

  const handleSeekEnd = () => {
    if (isSeeking && duration > 0) {
      seekTo(seekTime);
    }
    setIsSeeking(false);
    setSeekTime(0);
  };

  const handlePlaybackRateChange = (rate: number) => {
    setPlaybackRate(rate);
  };

  if (!currentChapter) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 150, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 150, opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed z-[150] bottom-[80px] md:bottom-8 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-auto md:min-w-[600px] flex flex-col overflow-hidden rounded-3xl border border-[var(--border-gold)] shadow-[var(--shadow-gold)]"
        style={{ background: 'var(--bg-nav)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        onMouseUp={handleSeekEnd}
        onMouseLeave={handleSeekEnd}
      >
        {/* Progress Bar (integrated at the very top of the pill) */}
        <div 
          ref={progressBarRef} 
          className="relative w-full h-1.5 bg-black/5 dark:bg-white/5 cursor-pointer group"
          onMouseDown={handleSeekStart}
          onMouseMove={handleSeek}
          onMouseUp={handleSeekEnd}
        >
          <motion.div 
            className="h-full bg-gold rounded-r-full relative" 
            style={{ width: `${isSeeking ? (seekTime / duration) * 100 : progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(201,169,97,0.8)] opacity-0 group-hover:opacity-100 transition-opacity translate-x-1/2" />
          </motion.div>
        </div>

        <div className="flex items-center justify-between p-3 md:px-6 md:py-4 gap-4">
          
          {/* Left: Info & Close */}
          <div className="flex items-center gap-3 w-1/3 md:w-[200px]">
            <button 
              onClick={quitPlayback} 
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500/10 text-[var(--text-muted)] hover:text-red-500 transition-colors"
              aria-label="Fermer le lecteur"
            >
              <Icon name="close" className="text-lg" />
            </button>
            <div className="min-w-0 flex flex-col justify-center">
              <p className="text-sm font-semibold text-gold truncate">
                {currentChapter.titleFr}
              </p>
              <p className="text-xs text-[var(--text-secondary)] font-amiri truncate" lang="ar" dir="rtl">
                {currentChapter.titleAr}
              </p>
            </div>
          </div>

          {/* Center: Playback Controls */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <button 
              onClick={playPrevious} 
              className="text-[var(--text-muted)] hover:text-gold transition-colors p-2"
              aria-label="Chapitre précédent"
            >
              <Icon name="skip_previous" className="text-2xl" />
            </button>
            
            <button 
              onClick={togglePlay} 
              className="w-12 h-12 md:w-14 md:h-14 bg-gold rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(201,169,97,0.3)] hover:scale-105 transition-transform text-[#05110d]"
              aria-label={isPlaying ? 'Pause' : 'Lecture'}
            >
              {isLoading ? (
                <Icon name="progress_activity" className="text-3xl animate-spin" />
              ) : (
                <Icon 
                  name={isPlaying ? 'pause' : 'play_arrow'} 
                  className="text-3xl md:text-4xl translate-x-[1px]" 
                />
              )}
            </button>
            
            <button 
              onClick={playNext} 
              className="text-[var(--text-muted)] hover:text-gold transition-colors p-2"
              aria-label="Chapitre suivant"
            >
              <Icon name="skip_next" className="text-2xl" />
            </button>
          </div>

          {/* Right: Secondary Controls */}
          <div className="flex items-center justify-end gap-1 md:gap-3 w-1/3 md:w-[200px]">
            <p className="hidden lg:block text-xs text-[var(--text-muted)] font-mono tracking-tighter w-20 text-right">
              {formatTime(isSeeking ? seekTime : currentTime)}
            </p>
            
            {/* Speed Control */}
            <div className="relative group hidden sm:block">
              <button className="text-[var(--text-muted)] hover:text-gold transition-colors p-2 font-black text-xs tracking-widest uppercase">
                {playbackRate}x
              </button>
              <div className="absolute bottom-full mb-4 right-1/2 translate-x-1/2 p-2 bg-[var(--bg-surface)] rounded-2xl shadow-xl border border-[var(--border-subtle)] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1 pointer-events-none group-hover:pointer-events-auto">
                {[2.0, 1.5, 1.25, 1.0, 0.75].map(rate => (
                  <button 
                    key={rate} 
                    onClick={() => handlePlaybackRateChange(rate)} 
                    className={`text-xs px-4 py-2 rounded-xl text-center font-bold transition-colors ${playbackRate === rate ? 'bg-gold text-[#241c07]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-base)]'}`}
                  > {rate}x </button>
                ))}
              </div>
            </div>

            {/* Mobile Options Menu */}
            <div className="sm:hidden relative">
              <button 
                onClick={() => setIsOptionsMenuOpen(!isOptionsMenuOpen)} 
                className={`p-2 rounded-full transition-colors ${isOptionsMenuOpen ? 'text-gold' : 'text-[var(--text-muted)] hover:text-gold'}`}
              >
                <Icon name="more_vert" />
              </button>
              <AnimatePresence>
                {isOptionsMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute bottom-full right-0 mb-4 p-4 min-w-[200px] bg-[var(--bg-surface)] backdrop-blur-xl rounded-2xl shadow-2xl border border-[var(--border-subtle)] flex flex-col gap-5 origin-bottom-right"
                  >
                    <div className="text-[var(--text-primary)] font-bold text-xs uppercase tracking-widest text-center border-b border-[var(--border-subtle)] pb-2 mb-1">Options audio</div>
                    <div className="flex items-center gap-3">
                      <Icon name="speed" className="text-xl text-gold" />
                      <div className="flex flex-wrap gap-1 flex-1 justify-end">
                        {[0.75, 1.0, 1.25, 1.5, 2.0].map(rate => (
                          <button key={rate} onClick={() => handlePlaybackRateChange(rate)} className={`text-xs font-bold px-2 py-1 rounded-full ${playbackRate === rate ? 'bg-gold text-[#241c07]' : 'bg-[var(--bg-base)] text-[var(--text-secondary)]'}`} > {rate}x </button>
                        ))}
                      </div>
                    </div>
                    <button onClick={toggleLoop} className={`flex items-center justify-between w-full p-2 rounded-xl transition-colors ${isLooping ? 'bg-gold/10 text-gold' : 'hover:bg-[var(--bg-base)] text-[var(--text-secondary)]'}`}>
                      <span className="text-xs font-bold uppercase tracking-widest">En Boucle</span>
                      <Icon name="repeat" className="text-xl" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-red-500 text-white font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg"
          >
            {error}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};