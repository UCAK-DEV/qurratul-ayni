'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Icon from '@/components/Icon';

interface ReadingSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReadingSettings: React.FC<ReadingSettingsProps> = ({ isOpen, onClose }) => {
  const { readingSettings, setReadingSettings, theme, setTheme } = useTheme();

  const fontSizes = [90, 100, 115, 130, 145];
  const lineHeights = [1.4, 1.6, 1.8, 2.0];

  const selectTheme = (target: 'dark' | 'light' | 'sepia') => {
    setTheme(target);
  };

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
                <Icon name="tune" className="text-gold text-lg" />
                <h2 className="font-black text-xs uppercase tracking-[0.35em]" style={{ color: 'var(--accent)' }}>
                  Réglages
                </h2>
              </div>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                style={{ background: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                <Icon name="close" className="text-base" />
              </button>
            </div>

            <div className="space-y-7">

              {/* Thème */}
              <div className="space-y-3">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                  Apparence
                </p>
                <div className="flex gap-2">
                  {([
                    { key: 'light', label: 'Clair', icon: 'light_mode' },
                    { key: 'sepia', label: 'Sépia', icon: 'auto_stories' },
                    { key: 'dark', label: 'Sombre', icon: 'dark_mode' },
                  ] as const).map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => selectTheme(opt.key)}
                      className="flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-center gap-2"
                      style={theme === opt.key
                        ? { background: 'color-mix(in srgb, var(--accent) 15%, transparent)', borderColor: 'var(--accent)', color: 'var(--accent)' }
                        : { background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }
                      }
                    >
                      <Icon name={opt.icon} className="text-lg" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Taille de police */}
              <div className="space-y-3">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                  Taille du texte
                </p>
                <div className="flex gap-2">
                  {fontSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setReadingSettings({ ...readingSettings, fontSize: size })}
                      className="flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all"
                      style={readingSettings.fontSize === size
                        ? { background: 'color-mix(in srgb, var(--accent) 15%, transparent)', borderColor: 'var(--accent)', color: 'var(--accent)' }
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
                <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                  Espacement des lignes
                </p>
                <div className="flex gap-2">
                  {lineHeights.map(h => (
                    <button
                      key={h}
                      onClick={() => setReadingSettings({ ...readingSettings, lineHeight: h })}
                      className="flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all"
                      style={readingSettings.lineHeight === h
                        ? { background: 'color-mix(in srgb, var(--accent) 15%, transparent)', borderColor: 'var(--accent)', color: 'var(--accent)' }
                        : { background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }
                      }
                    >
                      {h === 1.4 ? 'Compact' : h === 1.6 ? 'Normal' : h === 1.8 ? 'Aéré' : 'Large'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                <p className="text-xs text-center font-reading" style={{ color: 'var(--text-muted)' }}>
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
