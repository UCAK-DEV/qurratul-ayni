'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import Icon from '@/components/Icon';

export default function SettingsPage() {
  const { readingSettings, setReadingSettings, theme, toggleTheme } = useTheme();
  const router = useRouter();

  const fontSizes = [90, 100, 115, 130, 145];
  const lineHeights = [1.4, 1.6, 1.8, 2.0];

  const selectTheme = (target: 'dark' | 'light') => {
    if (theme !== target) toggleTheme();
  };

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-lg m3-card relative overflow-hidden">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 p-2 rounded-full hover:bg-white/5 transition-all text-white/60 hover:text-gold flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider active:scale-95 cursor-pointer"
        >
          <Icon name="arrow_back" className="text-base" />
          Retour
        </button>

        <div className="pt-8 text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3 text-gold">
            <Icon name="tune" className="text-2xl" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white mb-2">Réglages</h1>
          <p className="text-sm text-white/50">Personnalisez votre expérience de lecture et d'écoute</p>
        </div>

        <div className="space-y-8">
          {/* Appearance */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gold/60 border-l border-gold/30 pl-3">Apparence</h2>
            <div className="grid grid-cols-2 gap-3">
              {([
                { key: 'light', label: 'Mode Clair', icon: 'light_mode' },
                { key: 'dark', label: 'Mode Sombre', icon: 'dark_mode' },
              ] as const).map(opt => (
                <button
                  key={opt.key}
                  onClick={() => selectTheme(opt.key)}
                  className="py-4 rounded-2xl border text-sm font-bold transition-all flex items-center justify-center gap-2.5 active:scale-[0.98] cursor-pointer"
                  style={theme === opt.key
                    ? { background: 'rgba(201,169,97,0.15)', borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }
                    : { background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }
                  }
                >
                  <Icon name={opt.icon} className="text-xl" />
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gold/60 border-l border-gold/30 pl-3">Taille du texte</h2>
            <div className="grid grid-cols-5 gap-2">
              {fontSizes.map(size => (
                <button
                  key={size}
                  onClick={() => setReadingSettings({ ...readingSettings, fontSize: size })}
                  className="py-3.5 rounded-xl border text-xs font-black transition-all active:scale-[0.98] cursor-pointer"
                  style={readingSettings.fontSize === size
                    ? { background: 'rgba(201,169,97,0.15)', borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }
                    : { background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }
                  }
                >
                  {size === 90 ? 'XS' : size === 100 ? 'S' : size === 115 ? 'M' : size === 130 ? 'L' : 'XL'}
                  <span className="block text-[9px] opacity-40 font-mono mt-0.5">{size}%</span>
                </button>
              ))}
            </div>
          </div>

          {/* Line Height */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gold/60 border-l border-gold/30 pl-3">Espacement des lignes</h2>
            <div className="grid grid-cols-4 gap-2">
              {lineHeights.map(h => (
                <button
                  key={h}
                  onClick={() => setReadingSettings({ ...readingSettings, lineHeight: h })}
                  className="py-3.5 rounded-xl border text-xs font-black transition-all active:scale-[0.98] cursor-pointer"
                  style={readingSettings.lineHeight === h
                    ? { background: 'rgba(201,169,97,0.15)', borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }
                    : { background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }
                  }
                >
                  {h === 1.4 ? 'Compact' : h === 1.6 ? 'Normal' : h === 1.8 ? 'Aéré' : 'Large'}
                  <span className="block text-[9px] opacity-40 font-mono mt-0.5">{h.toFixed(1)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t text-center" style={{ borderColor: 'var(--border-subtle)' }}>
            <p className="text-xs font-reading text-white/30 flex items-center justify-center gap-1.5">
              <Icon name="check_circle" className="text-gold text-sm" />
              Réglages sauvegardés automatiquement
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
