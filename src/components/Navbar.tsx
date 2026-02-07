'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CHAPTERS, Chapter } from '@/data/chapters';
import { useTheme } from '@/context/ThemeContext';
import { usePWA } from '@/context/PWAContext';
import { SearchOverlay } from '@/components/SearchOverlay';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChaptersDropdownOpen, setIsChaptersDropdownOpen] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  
  const pathname = usePathname();
  const chaptersRef = useRef<HTMLLIElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { isOfflineReady } = usePWA();

  useEffect(() => {
    const mainContent = document.querySelector('.overflow-y-auto');
    const handleScroll = () => {
      if (mainContent) setIsScrolled(mainContent.scrollTop > 20);
    };
    mainContent?.addEventListener('scroll', handleScroll);
    return () => mainContent?.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (chaptersRef.current && !chaptersRef.current.contains(e.target as Node)) {
        setIsChaptersDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const groupedChapters = useMemo(() => {
    return CHAPTERS.reduce((acc, chapter) => {
      (acc[chapter.group] = acc[chapter.group] || []).push(chapter);
      return acc;
    }, {} as Record<string, Chapter[]>);
  }, []);

  const navClasses = isScrolled
    ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg'
    : 'bg-transparent';
  const linkColor = isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white';
  const linkColorHover = isScrolled ? 'hover:text-black dark:hover:text-white' : 'hover:text-white';
  const iconColor = isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/70';

  return (
    <>
      <SearchOverlay isOpen={isSearchOverlayOpen} onClose={() => setIsSearchOverlayOpen(false)} />
      
      <header className={`sticky top-0 w-full z-40 transition-all duration-300 ease-in-out ${navClasses}`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -15 }}
              className="w-10 h-10 border border-gold/50 rounded-lg flex items-center justify-center bg-gold/10 shadow-[0_0_20px_rgba(201,169,97,0.2)]"
            >
              <span className="material-symbols-rounded text-gold text-2xl">auto_stories</span>
            </motion.div>
            <div className="hidden sm:flex flex-col">
              <span className={`text-lg font-bold tracking-widest leading-none uppercase ${linkColor}`}>Qurratul <span className="text-gold">Ayni</span></span>
              <span className={`text-[9px] uppercase tracking-[0.3em] ${isScrolled ? 'text-gray-500 dark:text-gray-400' : 'text-white/60'}`}>Enseignements Sacrés</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/accueil" className={`text-xs uppercase tracking-widest font-bold transition-all relative group flex items-center gap-2 ${pathname === '/accueil' ? 'text-gold' : `${iconColor} ${linkColorHover}`}`}>
                  <span className="material-symbols-rounded text-base">home</span>
                  Accueil
                </Link>
              </li>
              <li className="relative" ref={chaptersRef}>
                <button
                  onClick={() => setIsChaptersDropdownOpen(!isChaptersDropdownOpen)}
                  className={`text-xs uppercase tracking-widest font-bold transition-all relative group flex items-center gap-1 ${isChaptersDropdownOpen ? 'text-gold' : `${iconColor} ${linkColorHover}`}`}
                >
                  <span className="material-symbols-rounded text-base">menu_book</span>
                  Chapitres
                  <motion.span animate={{ rotate: isChaptersDropdownOpen ? 180 : 0 }} className="material-symbols-rounded text-base">expand_more</motion.span>
                </button>
                <AnimatePresence>
                  {isChaptersDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-2 z-50 max-h-96 overflow-y-auto custom-scrollbar"
                    >
                      {Object.entries(groupedChapters).map(([group, chapters]) => (
                        <div key={group} className="mb-4">
                          <p className="px-3 pt-2 pb-1 text-[10px] uppercase font-bold tracking-widest text-gold/80 dark:text-gold/60">{group}</p>
                          {chapters.map((chapter) => (
                            <Link
                              key={chapter.id}
                              href={`/partie/${chapter.id}`}
                              onClick={() => setIsChaptersDropdownOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gold dark:hover:text-gold transition-colors text-sm font-medium"
                            >
                              <span className="material-symbols-rounded text-gold/80 text-lg w-6 text-center">{chapter.icon}</span>
                              <span>{chapter.titleFr}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>

            <div className={`h-6 w-px bg-gray-200 dark:bg-gray-700`} />

            <AnimatePresence>
              {isOfflineReady && (
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="relative group flex items-center">
                  <span className="material-symbols-rounded text-xl text-emerald-500">cloud_done</span>
                  <div className="absolute bottom-full mb-2 -translate-x-1/2 left-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Prêt hors-ligne
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button onClick={toggleTheme} className={`${iconColor} ${linkColorHover} transition-colors`}>
              <span className="material-symbols-rounded text-xl">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
            
            <button onClick={() => setIsSearchOverlayOpen(true)} className={`${iconColor} ${linkColorHover} transition-colors`}>
              <span className="material-symbols-rounded text-xl">search</span>
            </button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(false)} className={`md:hidden z-50 transition-colors ${iconColor} ${linkColorHover}`}>
            <span className="material-symbols-rounded text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>
    </>
  );
};