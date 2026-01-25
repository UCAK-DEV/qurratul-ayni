import { AudioProvider } from '@/context/AudioContext';
import { Player } from '@/components/Player';
import { Navbar } from '@/components/Navbar';
import './globals.css';

/**
 * Layout racine de l'application.
 * Gère les importations de polices, les métadonnées et les fournisseurs de contexte.
 */
export const metadata = {
  title: 'Qurratul Ayni — Serigne Chouhinbou Mbacké',
  description: 'Une immersion spirituelle dans l’œuvre majeure de Serigne Chouhinbou Mbacké.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Icônes Google Material Symbols */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        />
        {/* Polices Google : Amiri (Arabe) et Playfair Display (Sérif de luxe) */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased selection:bg-gold/30 selection:text-white">
        {/* Fournisseur de contexte audio pour la lecture globale */}
        <AudioProvider>
          {/* Barre de navigation fixe */}
          <Navbar />
          
          {/* Contenu principal de la page */}
          <main>
            {children}
          </main>
          
          {/* Lecteur audio flottant (apparaît lorsqu'une piste est lancée) */}
          <Player />
        </AudioProvider>
      </body>
    </html>
  );
}