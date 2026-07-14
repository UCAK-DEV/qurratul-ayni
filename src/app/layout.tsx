import React from 'react';
import { AppProviders } from '@/components/AppProviders';
import './globals.css';

export const metadata = {
  title: 'Qurratul Ayni Digital',
  description: 'Bibliothèque Spirituelle Digitale - Enseignements de Serigne Shouhaïbou Mbacké',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
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
