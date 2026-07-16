'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { useNotifications } from '@/context/NotificationContext';
import { DEVELOPERS } from '@/utils/site';
import Icon from '@/components/Icon';

const FONT_SIZES = [90, 100, 115, 130, 145];
const FONT_LABELS = ['XS', 'S', 'M', 'L', 'XL'];
const LINE_HEIGHTS = [1.4, 1.6, 1.8, 2.0];
const LINE_LABELS = ['Compact', 'Normal', 'Aéré', 'Large'];

export default function SettingsPage() {
  const { readingSettings, setReadingSettings, theme, toggleTheme } = useTheme();
  const {
    notifications,
    unreadCount,
    permission: notificationPermission,
    markAllAsRead,
    clearAll,
    requestPermission,
  } = useNotifications();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
                <Icon name={!mounted ? 'dark_mode' : theme === 'dark' ? 'dark_mode' : 'light_mode'} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="one-ui-row-title">Mode sombre</p>
                <p className="one-ui-row-sub">{!mounted ? 'Activé' : theme === 'dark' ? 'Activé' : 'Désactivé — mode clair'}</p>
              </div>
              <button
                role="switch"
                aria-checked={!mounted ? true : theme === 'dark'}
                aria-label="Basculer le mode sombre"
                className="one-toggle"
                data-on={!mounted ? true : theme === 'dark'}
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

        {/* Groupe : Notifications */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="one-ui-group-label">Notifications</p>
            {notifications.length > 0 && (
              <div className="flex gap-3 text-xs pr-1">
                {unreadCount > 0 && (
                  <button onClick={markAllAsRead} className="text-gold hover:underline">Tout lire</button>
                )}
                <button onClick={clearAll} className="text-gold hover:underline">Effacer</button>
              </div>
            )}
          </div>
          <div className="one-ui-list">
            {notifications.length === 0 ? (
              <p className="text-sm text-adaptive-muted italic text-center py-6">Aucune notification.</p>
            ) : (
              notifications.map((n, i) => (
                <React.Fragment key={n.id}>
                  {i > 0 && <div className="one-ui-row-divider" />}
                  <div className="one-ui-row items-start">
                    <div className="one-ui-row-icon mt-0.5">
                      <Icon name="notifications" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <p className="one-ui-row-title">{n.title}</p>
                        <span className="text-[11px] text-adaptive-muted whitespace-nowrap shrink-0">{n.time}</span>
                      </div>
                      <p className="one-ui-row-sub leading-relaxed">{n.body}</p>
                    </div>
                    {!n.read && <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-1.5" />}
                  </div>
                </React.Fragment>
              ))
            )}
          </div>

          {notificationPermission === 'default' && (
            <button
              onClick={requestPermission}
              className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-gold transition-all"
              style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--border-gold)' }}
            >
              Activer les notifications
            </button>
          )}
        </section>

        {/* Groupe : À propos */}
        <section className="space-y-3">
          <p className="one-ui-group-label">À propos</p>
          <div className="one-ui-list">
            <Link href="/a-propos" className="one-ui-row">
              <div className="one-ui-row-icon">
                <Icon name="info" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="one-ui-row-title">À propos des développeurs</p>
                <p className="one-ui-row-sub">Qui a créé Qurratul Ayni</p>
              </div>
              <Icon name="chevron_right" className="text-adaptive-muted" />
            </Link>

            {DEVELOPERS.map(dev => (
              <React.Fragment key={dev.name}>
                <div className="one-ui-row-divider" />
                <a href={dev.url} target="_blank" rel="noopener" className="one-ui-row">
                  <div className="one-ui-row-icon">
                    <Icon name="school" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="one-ui-row-title">{dev.name}</p>
                    <p className="one-ui-row-sub">Portfolio · @{dev.alias}</p>
                  </div>
                  <Icon name="open_in_new" className="text-adaptive-muted text-base" />
                </a>
              </React.Fragment>
            ))}
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
