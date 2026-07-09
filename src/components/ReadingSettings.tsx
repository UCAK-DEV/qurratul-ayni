'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ReadingSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReadingSettings: React.FC<ReadingSettingsProps> = ({ isOpen, onClose }) => {
  const { readingSettings, setReadingSettings, theme, toggleTheme } = useTheme();

  const fontSizes = [90, 100, 115, 130, 145];
  const lineHeights = [1.4, 1.6, 1.8, 2.0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[150]"
            style={{ background: 'var(--bg-overlay)', backdropFilter: 'blur(4px)' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-sm rounded-[2rem] shadow-2xl p-7 z-[160]"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-medium)' }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-7">
              <div className="flex items-center gap-2">
                <span className="material-symbols-rounded text-[#c9a961] text-lg">tune</span>
                <h2 className="font-black text-xs uppercase tracking-[0.35em]" style={{ color: '#c9a961' }}>
                  Réglages
                </h2>
              </div>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                style={{ background: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                <span className="material-symbols-rounded text-base">close</span>
              </button>
            </div>

            <div className="space-y-7">



              {/* Taille de police */}
              <div className="space-y-3">
                <p className="text-[10px] uppercase font-black tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  Taille du texte
                </p>
                <div className="flex gap-2">
                  {fontSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setReadingSettings({ ...readingSettings, fontSize: size })}
                      className="flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all"
                      style={readingSettings.fontSize === size
                        ? { background: 'rgba(201,169,97,0.15)', borderColor: '#c9a961', color: '#c9a961' }
                        : { background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }
                      }
                    >
                      {size === 90 ? 'XS' : size === 100 ? 'S' : size === 115 ? 'M' : size === 130 ? 'L' : 'XL'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interlignage */}
              <div className="space-y-3">
                <p className="text-[10px] uppercase font-black tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  Espacement des lignes
                </p>
                <div className="flex gap-2">
                  {lineHeights.map(h => (
                    <button
                      key={h}
                      onClick={() => setReadingSettings({ ...readingSettings, lineHeight: h })}
                      className="flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all"
                      style={readingSettings.lineHeight === h
                        ? { background: 'rgba(201,169,97,0.15)', borderColor: '#c9a961', color: '#c9a961' }
                        : { background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }
                      }
                    >
                      {h === 1.4 ? 'Compact' : h === 1.6 ? 'Normal' : h === 1.8 ? 'Aéré' : 'Large'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                <p className="text-[9px] text-center font-serif italic" style={{ color: 'var(--text-muted)' }}>
                  Réglages sauvegardés automatiquement
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
