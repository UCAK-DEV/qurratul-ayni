'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface NavItem {
  slug: string;       // e.g. "9-b" → /partie/9/b
  label: string;      // Section title to display
}

interface ChapterNavProps {
  prev?: NavItem;
  next?: NavItem;
  summarySlug?: string; // e.g. "9" for the parent chapter overview
  currentTitle: string;
}

// Build the URL path from a slug string (e.g. "9-b" → "/partie/9/b")
const slugToPath = (slug: string) => `/partie/${slug.replace(/-/g, '/')}`;

export const ChapterNav: React.FC<ChapterNavProps> = ({ prev, next, summarySlug, currentTitle }) => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Show nav after a short delay so it slides in
    const timer = setTimeout(() => setVisible(true), 600);
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 200, delay: 0.1 }}
          aria-label="Navigation entre parties"
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2 md:pb-6"
        >
          {/* Blur gradient fade from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#010302] via-[#010302]/80 to-transparent pointer-events-none" />

          <div className="relative max-w-3xl mx-auto">
            <div className="flex items-stretch gap-2">
              {/* Previous Button */}
              {prev ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => router.push(slugToPath(prev.slug))}
                  className="group flex items-center gap-3 flex-1 px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all text-left"
                  aria-label={`Partie précédente: ${prev.label}`}
                >
                  <span className="material-symbols-rounded text-white/50 group-hover:text-gold transition-colors text-xl flex-shrink-0">
                    arrow_back
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-white/30 leading-none mb-0.5">
                      Précédent
                    </p>
                    <p className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors truncate">
                      {prev.label}
                    </p>
                  </div>
                </motion.button>
              ) : (
                /* Sommaire fallback if no prev */
                summarySlug && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => router.push(slugToPath(summarySlug))}
                    className="group flex items-center gap-3 flex-1 px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all text-left"
                    aria-label="Retour au sommaire du chapitre"
                  >
                    <span className="material-symbols-rounded text-white/50 group-hover:text-gold transition-colors text-xl flex-shrink-0">
                      list
                    </span>
                    <div className="min-w-0">
                      <p className="text-[9px] uppercase tracking-widest font-bold text-white/30 leading-none mb-0.5">
                        Sommaire
                      </p>
                      <p className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors truncate">
                        Revenir à l'aperçu
                      </p>
                    </div>
                  </motion.button>
                )
              )}

              {/* Scroll to Top — center pill */}
              <AnimatePresence>
                {scrolled && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    aria-label="Revenir en haut"
                    className="w-14 h-full flex-shrink-0 flex items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 hover:border-gold/30 hover:text-gold text-white/40 transition-all"
                  >
                    <span className="material-symbols-rounded text-xl">vertical_align_top</span>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Next Button */}
              {next ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => router.push(slugToPath(next.slug))}
                  className="group flex items-center gap-3 flex-1 px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-gold/10 border border-gold/30 hover:bg-gold/15 hover:border-gold/50 transition-all text-right justify-end"
                  aria-label={`Partie suivante: ${next.label}`}
                >
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-gold/50 leading-none mb-0.5">
                      Suivant
                    </p>
                    <p className="text-xs font-semibold text-gold/80 group-hover:text-gold transition-colors truncate">
                      {next.label}
                    </p>
                  </div>
                  <span className="material-symbols-rounded text-gold/70 group-hover:text-gold transition-colors text-xl flex-shrink-0">
                    arrow_forward
                  </span>
                </motion.button>
              ) : (
                /* Accueil fallback if no next */
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => router.push('/accueil')}
                  className="group flex items-center gap-3 flex-1 px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-gold/10 border border-gold/30 hover:bg-gold/15 hover:border-gold/50 transition-all text-right justify-end"
                  aria-label="Retour au sommaire général"
                >
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-gold/50 leading-none mb-0.5">
                      Fin du chapitre
                    </p>
                    <p className="text-xs font-semibold text-gold/80 group-hover:text-gold transition-colors truncate">
                      Retour au sommaire
                    </p>
                  </div>
                  <span className="material-symbols-rounded text-gold/70 group-hover:text-gold transition-colors text-xl flex-shrink-0">
                    home
                  </span>
                </motion.button>
              )}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
