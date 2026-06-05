'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

type FontChoice = 'playfair' | 'georgia' | 'inter';

const FONT_OPTIONS: { value: FontChoice; label: string; className: string }[] = [
  { value: 'playfair', label: 'Playfair', className: 'font-serif' },
  { value: 'georgia',  label: 'Georgia',  className: '' },
  { value: 'inter',    label: 'Sans',      className: 'font-sans' },
];

export const ReadingToolbar: React.FC = () => {
  const { readingSettings, setReadingSettings } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [font, setFont] = useState<FontChoice>('playfair');

  const decreaseFontSize = () => {
    const next = Math.max(80, readingSettings.fontSize - 10);
    setReadingSettings({ ...readingSettings, fontSize: next });
  };

  const increaseFontSize = () => {
    const next = Math.min(160, readingSettings.fontSize + 10);
    setReadingSettings({ ...readingSettings, fontSize: next });
  };

  const resetFontSize = () => {
    setReadingSettings({ ...readingSettings, fontSize: 100 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2"
    >
      {/* Toggle handle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setExpanded(!expanded)}
        className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all backdrop-blur-xl shadow-lg ${
          expanded
            ? 'bg-gold border-gold text-black'
            : 'bg-black/60 border-white/10 text-white/50 hover:text-gold hover:border-gold/30'
        }`}
        aria-label={expanded ? 'Fermer les réglages de lecture' : 'Réglages de lecture rapides'}
        aria-expanded={expanded}
      >
        <span className="material-symbols-rounded text-lg">text_fields</span>
      </motion.button>

      {/* Controls Panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.7, y: -10 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.7, y: -10 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            style={{ transformOrigin: 'top' }}
            className="flex flex-col gap-2 items-center bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl"
          >
            {/* Font Size Controls */}
            <div className="flex flex-col gap-1 items-center">
              <p className="text-[8px] uppercase tracking-widest text-white/30 font-bold mb-1">Taille</p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={increaseFontSize}
                disabled={readingSettings.fontSize >= 160}
                aria-label="Augmenter la taille du texte"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-white/60 hover:text-gold hover:border-gold/30 disabled:opacity-20 transition-all font-black text-lg"
              >
                A+
              </motion.button>

              {/* Current size indicator */}
              <button
                onClick={resetFontSize}
                className="text-[10px] text-gold/60 font-bold hover:text-gold transition-colors"
                aria-label="Réinitialiser la taille"
                title="Réinitialiser"
              >
                {readingSettings.fontSize}%
              </button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={decreaseFontSize}
                disabled={readingSettings.fontSize <= 80}
                aria-label="Réduire la taille du texte"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-white/60 hover:text-gold hover:border-gold/30 disabled:opacity-20 transition-all font-black text-sm"
              >
                A-
              </motion.button>
            </div>

            {/* Divider */}
            <div className="w-6 h-px bg-white/10" />

            {/* Line Height */}
            <div className="flex flex-col gap-1 items-center">
              <p className="text-[8px] uppercase tracking-widest text-white/30 font-bold mb-1">Lignes</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setReadingSettings({ ...readingSettings, lineHeight: Math.min(2.4, readingSettings.lineHeight + 0.2) })}
                disabled={readingSettings.lineHeight >= 2.4}
                aria-label="Augmenter l'interlignage"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-white/60 hover:text-gold hover:border-gold/30 disabled:opacity-20 transition-all"
              >
                <span className="material-symbols-rounded text-base">format_line_spacing</span>
              </motion.button>
              <span className="text-[10px] text-gold/60 font-bold">
                {readingSettings.lineHeight.toFixed(1)}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setReadingSettings({ ...readingSettings, lineHeight: Math.max(1.2, readingSettings.lineHeight - 0.2) })}
                disabled={readingSettings.lineHeight <= 1.2}
                aria-label="Réduire l'interlignage"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-white/60 hover:text-gold hover:border-gold/30 disabled:opacity-20 transition-all"
              >
                <span className="material-symbols-rounded text-base" style={{ transform: 'scaleY(-1)' }}>format_line_spacing</span>
              </motion.button>
            </div>

            {/* Divider */}
            <div className="w-6 h-px bg-white/10" />

            {/* Font Picker */}
            <div className="flex flex-col gap-1 items-center w-full">
              <p className="text-[8px] uppercase tracking-widest text-white/30 font-bold mb-1">Police</p>
              {FONT_OPTIONS.map((opt) => (
                <motion.button
                  key={opt.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFont(opt.value)}
                  className={`w-full px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${opt.className} ${
                    font === opt.value
                      ? 'bg-gold/20 border border-gold/40 text-gold'
                      : 'bg-white/[0.04] border border-transparent text-white/40 hover:text-white/70'
                  }`}
                >
                  {opt.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
