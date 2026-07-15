import React from 'react';
import type { Metadata } from 'next';
import { Inter, Lora, Amiri } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { AppProviders } from '@/components/AppProviders';
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, OG_IMAGE, DEVELOPERS } from '@/utils/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-next',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif-next',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic'],
  variable: '--font-amiri-next',
  weight: ['400', '700'],
  display: 'swap',
});

const SITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: 'قرة العين',
      description: SITE_DESCRIPTION,
      inLanguage: 'fr',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon-512.png`,
      founder: DEVELOPERS.map(dev => ({
        '@type': 'Person',
        name: dev.name,
        alternateName: dev.alias,
        url: dev.url,
        jobTitle: dev.role,
        sameAs: [dev.url],
      })),
    },
    {
      '@type': 'WebApplication',
      name: SITE_NAME,
      url: SITE_URL,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      inLanguage: 'fr',
      description: SITE_DESCRIPTION,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'XOF' },
      author: DEVELOPERS.map(dev => ({
        '@type': 'Person',
        name: dev.name,
        alternateName: dev.alias,
        url: dev.url,
      })),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Titre & description ── */
  title: {
    default: SITE_TITLE,
    template: '%s · Qurratul Ayni',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Qurratul Ayni',
    'قرة العين',
    'Serigne Shouhaibou Mbacké',
    'Serigne Shouhaïbou Mbacké',
    'mouride',
    'mouridisme',
    'Touba',
    'islam',
    'fiqh',
    'jurisprudence islamique',
    'piliers de l\'islam',
    'prière en islam',
    'salat',
    'zakat',
    'jeûne du ramadan',
    'pèlerinage hajj',
    'mariage en islam',
    'divorce en islam',
    'purification taharah',
    'nafilas',
    'nafila ramadan',
    'wird',
    'invocations islamiques',
    'bibliothèque islamique',
    'enseignements islamiques en français',
  ],

  /* ── Auteurs & application ── */
  applicationName: SITE_NAME,
  authors: DEVELOPERS.map(dev => ({ name: dev.name, url: dev.url })),
  creator: 'Makhtar Wade (almuxtaardev) & Pape Makhtar Aidara',
  publisher: SITE_NAME,
  category: 'education',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    telephone: false,
  },

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
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  /* ── Vérification moteurs de recherche (Search Console) ── */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${lora.variable} ${amiri.variable} scroll-smooth`} data-theme="dark" suppressHydrationWarning>
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
      </head>
      <body className="antialiased">
        {/* Données structurées schema.org (WebSite + Organization + WebApplication) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSON_LD) }}
        />
        <AppProviders>
          {children}
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
