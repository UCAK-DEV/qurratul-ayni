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
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#c9a961" />
        <link rel="apple-touch-icon" href="/mosque-192.png"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-gold/30 dark:selection:text-gray-900 bg-white dark:bg-gray-950">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
