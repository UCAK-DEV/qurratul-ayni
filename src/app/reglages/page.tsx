'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import Icon from '@/components/Icon';

const FONT_SIZES = [90, 100, 115, 130, 145];
const FONT_LABELS = ['XS', 'S', 'M', 'L', 'XL'];
const LINE_HEIGHTS = [1.4, 1.6, 1.8, 2.0];
const LINE_LABELS = ['Compact', 'Normal', 'Aéré', 'Large'];

export default function SettingsPage() {
  const { readingSettings, setReadingSettings, theme, toggleTheme } = useTheme();
  const router = useRouter();

  const fontIndex = Math.max(0, FONT_SIZES.indexOf(readingSettings.fontSize));
  const lineIndex = Math.max(0, LINE_HEIGHTS.indexOf(readingSettings.lineHeight));

  const handleFontIndex = (i: number) => {
    setReadingSettings({ ...readingSettings, fontSize: FONT_SIZES[i] });
  };
  const handleLineIndex = (i: number) => {
    setReadingSettings({ ...readingSettings, lineHeight: LINE_HEIGHTS[i] });
  };

  return (
    <main className="min-h-screen pt-8 md:pt-14 pb-24 px-4">
      <div className="max-w-xl mx-auto space-y-8">

        {/* Barre du haut */}
        <div className="-ml-1">
          <button onClick={() => router.back()} className="one-icon-btn" aria-label="Retour">
            <Icon name="arrow_back" className="text-xl" />
          </button>
        </div>

        {/* Grand titre plein écran (langage One UI) */}
        <header className="px-1 space-y-1.5">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Réglages</h1>
          <p className="text-adaptive-secondary">Personnalisez votre expérience de lecture et d’écoute</p>
        </header>

        {/* Groupe : Apparence */}
        <section className="space-y-3">
          <p className="one-ui-group-label">Apparence</p>
          <div className="one-ui-list">
            <div className="one-ui-row">
              <div className="one-ui-row-icon">
                <Icon name={theme === 'dark' ? 'dark_mode' : 'light_mode'} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="one-ui-row-title">Mode sombre</p>
                <p className="one-ui-row-sub">{theme === 'dark' ? 'Activé' : 'Désactivé — mode clair'}</p>
              </div>
              <button
                role="switch"
                aria-checked={theme === 'dark'}
                aria-label="Basculer le mode sombre"
                className="one-toggle"
                data-on={theme === 'dark'}
                onClick={toggleTheme}
              >
                <span className="one-toggle-thumb" />
              </button>
            </div>
          </div>
        </section>

        {/* Groupe : Lecture */}
        <section className="space-y-3">
          <p className="one-ui-group-label">Lecture</p>
          <div className="one-ui-list">

            {/* Taille du texte */}
            <div className="one-ui-row items-start">
              <div className="one-ui-row-icon mt-0.5">
                <Icon name="text_fields" />
              </div>
              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="one-ui-row-title">Taille du texte</p>
                    <p className="one-ui-row-sub">{FONT_LABELS[fontIndex]} · {readingSettings.fontSize}%</p>
                  </div>
                  <span
                    className="font-reading text-adaptive-primary shrink-0"
                    style={{ fontSize: `${1.1 * (readingSettings.fontSize / 100)}rem` }}
                    aria-hidden="true"
                  >
                    Aa
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={FONT_SIZES.length - 1}
                  step={1}
                  value={fontIndex}
                  onChange={e => handleFontIndex(Number(e.target.value))}
                  className="one-slider"
                  aria-label="Taille du texte"
                />
              </div>
            </div>

            <div className="one-ui-row-divider" />

            {/* Espacement des lignes */}
            <div className="one-ui-row items-start">
              <div className="one-ui-row-icon mt-0.5">
                <Icon name="format_line_spacing" />
              </div>
              <div className="flex-1 min-w-0 space-y-3">
                <div>
                  <p className="one-ui-row-title">Espacement des lignes</p>
                  <p className="one-ui-row-sub">{LINE_LABELS[lineIndex]} · {LINE_HEIGHTS[lineIndex].toFixed(1)}</p>
                </div>
                <input
                  type="range"
                  min={0}
                  max={LINE_HEIGHTS.length - 1}
                  step={1}
                  value={lineIndex}
                  onChange={e => handleLineIndex(Number(e.target.value))}
                  className="one-slider"
                  aria-label="Espacement des lignes"
                />
              </div>
            </div>

          </div>
        </section>

        <p className="text-center text-sm text-adaptive-muted flex items-center justify-center gap-1.5 pt-2">
          <Icon name="check_circle" className="text-gold text-base" />
          Réglages sauvegardés automatiquement
        </p>
      </div>
    </main>
  );
}
