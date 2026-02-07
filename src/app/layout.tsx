import { AudioProvider } from '@/context/AudioContext';
import { Player } from '@/components/Player';
import { Navbar } from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from '@/context/ThemeContext';
import { PWAProvider } from '@/context/PWAContext';
import { AppPWAProvider } from '@/components/AppPWAProvider';
import './globals.css';

export const metadata = {
  title: 'Qurratul Ayni — Serigne Chouhinbou Mbacké',
  description: 'Une immersion spirituelle dans l’œuvre majeure de Serigne Chouhinbou Mbacké.',
  manifest: '/manifest.json',
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
        <PWAProvider>
          <ThemeProvider>
            <AudioProvider>
              <AppPWAProvider>
                <div className="flex h-screen text-gray-900 dark:text-gray-100">
                  <Sidebar />
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <Navbar />
                    <main className="flex-1 overflow-y-auto">
                      {children}
                    </main>
                    <Player />
                  </div>
                </div>
              </AppPWAProvider>
            </AudioProvider>
          </ThemeProvider>
        </PWAProvider>
      </body>
    </html>
  );
}