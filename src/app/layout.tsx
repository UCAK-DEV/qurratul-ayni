import { AudioProvider } from '@/context/AudioContext';
import { Player } from '@/components/Player';
import { Navbar } from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AudioProvider>
          <Navbar />
          {children}
          <Player />
        </AudioProvider>
      </body>
    </html>
  );
}