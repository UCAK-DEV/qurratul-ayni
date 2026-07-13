import React from 'react';
import { AppProviders } from '@/components/AppProviders';
import './globals.css';

export const metadata = {
  title: 'Qurratul Ayni Digital',
  description: 'Bibliothèque Spirituelle Digitale - Enseignements de Serigne Shouhaïbou Mbacké',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" data-theme="dark">
      <head>
        {/* Applique le thème sauvegardé avant le premier rendu (anti-scintillement) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <meta name="theme-color" content="#05100b" />
        <link rel="apple-touch-icon" href="/mosque-192.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inter = UI/texte lisible · Lora = lecture long format · Playfair = grands titres · Amiri = arabe */}
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Playfair+Display:wght@600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="gemini-bg" aria-hidden="true">
          <div className="gemini-aura">
            <div className="aura-spot spot-1" />
            <div className="aura-spot spot-2" />
            <div className="aura-spot spot-3" />
          </div>
        </div>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
