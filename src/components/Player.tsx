'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '@/context/AudioContext';
import { useData } from '@/context/DataContext';
import Icon from '@/components/Icon';

const SPEEDS = [1.0, 1.25, 1.5, 2.0, 0.75];

/**
 * Barre de recherche (seek) fiable — souris, tactile et clavier.
 * Pendant le glissement, la valeur locale prime sur currentTime ;
 * la position est appliquée au relâchement.
 */
const SeekBar: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { currentTime, duration, seekTo, formatTime } = useAudio();
  const [drag, setDrag] = useState<number | null>(null);

  const value = drag ?? currentTime;
  const commit = () => {
    if (drag != null) {
      seekTo(drag);
      setDrag(null);
    }
  };

  return (
    <div className={compact ? '' : 'space-y-1.5'}>
      <input
        type="range"
        min={0}
        max={duration || 0}
        step={1}
        value={Number.isFinite(value) ? value : 0}
        onChange={e => setDrag(Number(e.target.value))}
        onPointerUp={commit}
        onPointerCancel={() => setDrag(null)}
        onKeyUp={commit}
        onBlur={commit}
        className="one-slider w-full"
        style={compact ? { height: 4 } : undefined}
        aria-label="Position de lecture"
        aria-valuetext={formatTime(value)}
      />
      {!compact && (
        <div className="flex justify-between text-xs tabular-nums" style={{ color: 'var(--text-muted)' }}>
          <span>{formatTime(value)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      )}
    </div>
  );
};

export const Player = () => {
  const {
    currentChapter, isPlaying, isLoading, isLooping, playbackRate, error,
    togglePlay, toggleLoop, setPlaybackRate, playNext, playPrevious,
    quitPlayback, setChapter,
  } = useAudio();
  const { chapters } = useData();

  const [expanded, setExpanded] = useState(false);

  if (!currentChapter) return null;

  const playlist = chapters.filter(c => !!c.audioUrl);

  const cycleSpeed = () => {
    const idx = SPEEDS.indexOf(playbackRate);
    setPlaybackRate(SPEEDS[(idx + 1) % SPEEDS.length]);
  };

  const playIcon = isLoading ? 'progress_activity' : isPlaying ? 'pause' : 'play_arrow';

  return (
    <>
      {/* ══ MINI PLAYER (barre flottante) ══════════════════════════════ */}
      <AnimatePresence>
        {!expanded && (
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
                onClick={() => setExpanded(true)}
                className="relative w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent-gradient)' }}
                aria-label="Ouvrir le lecteur"
              >
                <span className="absolute inset-0" style={{ backgroundImage: 'var(--pattern-islamic)' }} />
                <Icon name={currentChapter.icon || 'menu_book'} className="relative text-2xl" style={{ color: 'var(--accent-contrast)' }} />
              </button>

              {/* Titres — cliquer déplie le player */}
              <button onClick={() => setExpanded(true)} className="flex-1 min-w-0 text-left" aria-label="Ouvrir le lecteur complet">
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
        )}
      </AnimatePresence>

      {/* ══ PLAYER PLEIN ÉCRAN (style Boomplay) ═══════════════════════ */}
      <AnimatePresence>
        {expanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200]"
              style={{ background: 'var(--bg-overlay)', backdropFilter: 'blur(4px)' }}
              onClick={() => setExpanded(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
              className="fixed inset-x-0 bottom-0 z-[201] rounded-t-3xl border-t flex flex-col"
              style={{
                background: 'var(--bg-surface)',
                borderColor: 'var(--border-medium)',
                maxHeight: '92vh',
              }}
              role="dialog"
              aria-label="Lecteur audio"
            >
              {/* Poignée + réduire */}
              <div className="flex items-center justify-between px-5 pt-3 pb-1 flex-shrink-0">
                <span className="w-8" />
                <div className="bottom-sheet-handle !m-0" />
                <button onClick={() => setExpanded(false)} className="one-icon-btn !w-8 !h-8" aria-label="Réduire le lecteur">
                  <Icon name="expand_more" className="text-xl" />
                </button>
              </div>

              <div className="overflow-y-auto px-5 pb-8" style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom))' }}>

                {/* Pochette majeure — motif khatam sur dégradé Touba */}
                <div className="max-w-xs mx-auto mt-4">
                  <div
                    className="relative aspect-square rounded-3xl flex flex-col items-center justify-center gap-4 overflow-hidden"
                    style={{ background: 'var(--accent-gradient)', boxShadow: 'var(--shadow-card)' }}
                  >
                    <span className="absolute inset-0 opacity-70" style={{ backgroundImage: 'var(--pattern-islamic)' }} />
                    <Icon name={currentChapter.icon || 'menu_book'} className="relative text-6xl" style={{ color: 'var(--accent-contrast)' }} />
                    <p className="relative font-amiri text-3xl px-6 text-center leading-relaxed" style={{ color: 'var(--accent-contrast)' }} lang="ar" dir="rtl">
                      {currentChapter.titleAr}
                    </p>
                  </div>
                </div>

                {/* Titres */}
                <div className="text-center mt-6 space-y-1">
                  <h2 className="font-display text-2xl font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {currentChapter.titleFr}
                  </h2>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Qurratul Ayni · Audio wolof
                  </p>
                </div>

                {/* Seek complet avec minutages */}
                <div className="max-w-md mx-auto mt-6">
                  <SeekBar />
                </div>

                {/* Contrôles principaux */}
                <div className="flex items-center justify-center gap-3 sm:gap-5 mt-4">
                  <button
                    onClick={toggleLoop}
                    className="one-icon-btn"
                    style={isLooping ? { color: 'var(--accent)', background: 'var(--accent-soft)' } : undefined}
                    aria-label="Lecture en boucle"
                    aria-pressed={isLooping}
                  >
                    <Icon name="repeat" className="text-xl" />
                  </button>

                  <button onClick={playPrevious} className="one-icon-btn !w-12 !h-12" aria-label="Piste précédente">
                    <Icon name="skip_previous" className="text-3xl" />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform active:scale-90"
                    style={{ background: 'var(--accent-gradient)', color: 'var(--accent-contrast)', boxShadow: 'var(--shadow-card)' }}
                    aria-label={isPlaying ? 'Pause' : 'Lecture'}
                  >
                    <Icon name={playIcon} className={`text-4xl ${isLoading ? 'animate-spin' : ''}`} />
                  </button>

                  <button onClick={playNext} className="one-icon-btn !w-12 !h-12" aria-label="Piste suivante">
                    <Icon name="skip_next" className="text-3xl" />
                  </button>

                  <button
                    onClick={cycleSpeed}
                    className="one-icon-btn text-sm font-bold tabular-nums"
                    style={playbackRate !== 1.0 ? { color: 'var(--accent)', background: 'var(--accent-soft)' } : undefined}
                    aria-label={`Vitesse de lecture : ${playbackRate}x`}
                  >
                    {playbackRate}x
                  </button>
                </div>

                {/* ── Liste des audios disponibles ── */}
                <section className="max-w-md mx-auto mt-8 space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <p className="one-ui-group-label !p-0 flex items-center gap-2">
                      <Icon name="library_music" className="text-base" />
                      Liste des audios
                    </p>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {playlist.length} pistes
                    </span>
                  </div>

                  <div className="one-ui-list">
                    {playlist.map((chapter, i) => {
                      const isCurrent = currentChapter.id === chapter.id;
                      return (
                        <React.Fragment key={chapter.id}>
                          {i > 0 && <div className="one-ui-row-divider" />}
                          <button
                            onClick={() => setChapter(chapter)}
                            className="one-ui-row"
                            style={isCurrent ? { background: 'var(--accent-soft)' } : undefined}
                            aria-current={isCurrent ? 'true' : undefined}
                          >
                            <div className="one-ui-row-icon !w-9 !h-9 text-sm">
                              {isCurrent ? (
                                <span className="eq-bars" data-paused={!isPlaying}>
                                  <span /><span /><span />
                                </span>
                              ) : (
                                <Icon name={chapter.icon || 'music_note'} className="text-lg" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className="text-sm font-medium truncate"
                                style={{ color: isCurrent ? 'var(--accent)' : 'var(--text-primary)' }}
                              >
                                {chapter.titleFr}
                              </p>
                              <p className="text-xs font-amiri truncate" style={{ color: 'var(--text-muted)' }} lang="ar" dir="rtl">
                                {chapter.titleAr}
                              </p>
                            </div>
                            {isCurrent && isPlaying ? (
                              <Icon name="pause" className="text-lg flex-shrink-0" style={{ color: 'var(--accent)' }} />
                            ) : (
                              <Icon name="play_arrow" className="text-lg flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                            )}
                          </button>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </section>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
