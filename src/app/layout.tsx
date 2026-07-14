import React from 'react';
import type { Metadata } from 'next';
import { AppProviders } from '@/components/AppProviders';
import './globals.css';

const SITE_URL = 'https://qurratul-ayni.vercel.app';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Titre & description ── */
  title: {
    default: 'Qurratul Ayni — قرة العين',
    template: '%s · Qurratul Ayni',
  },
  description:
    'Bibliothèque spirituelle digitale des enseignements de Serigne Shouhaïbou Mbacké — jurisprudence islamique, prières, nafilas quotidiennes.',
  keywords: [
    'Qurratul Ayni',
    'قرة العين',
    'Serigne Shouhaibou Mbacké',
    'mouride',
    'islam',
    'jurisprudence islamique',
    'nafilas',
    'wird',
    'bibliothèque islamique',
  ],

  /* ── Open Graph (WhatsApp · Telegram · Discord · iMessage) ── */
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Qurratul Ayni',
    title: 'Qurratul Ayni — قرة العين',
    description:
      'Enseignements spirituels de Serigne Shouhaïbou Mbacké. Jurisprudence, prières et nafilas quotidiennes.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Qurratul Ayni — Bibliothèque Spirituelle Digitale',
        type: 'image/png',
      },
    ],
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: 'summary_large_image',
    title: 'Qurratul Ayni — قرة العين',
    description:
      'Enseignements de Serigne Shouhaïbou Mbacké. Jurisprudence, prières et nafilas quotidiennes.',
    images: [OG_IMAGE],
  },

  /* ── Icônes & PWA ── */
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Applique le thème sauvegardé avant le premier rendu (anti-scintillement) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <meta name="theme-color" content="#0b1710" />
        {/* PWA: Android install support */}
        <meta name="mobile-web-app-capable" content="yes" />
        {/* PWA: iOS install support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Qurratul Ayni" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inter = UI/texte lisible · Lora = lecture long format · Amiri = arabe */}
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
