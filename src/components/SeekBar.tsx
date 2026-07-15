'use client';

import React, { useState } from 'react';
import { useAudio } from '@/context/AudioContext';

/**
 * Barre de recherche (seek) fiable — souris, tactile et clavier.
 * Pendant le glissement, la valeur locale prime sur currentTime ;
 * la position est appliquée au relâchement.
 */
export const SeekBar: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
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

export default SeekBar;
