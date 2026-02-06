'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CHAPTERS, Chapter } from '@/data/chapters';
import { useTheme } from '@/context/ThemeContext';
import Fuse from 'fuse.js';
import { useDebounce } from '@/hooks/useDebounce';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [results, setResults] = useState<Chapter[]>([]);
  const [isChaptersDropdownOpen, setIsChaptersDropdownOpen] = useState(false);
  const pathname = usePathname();
  const searchRef = useRef<HTMLDivElement>(null);
  const chaptersRef = useRef<HTMLLIElement>(null);
  const { theme, toggleTheme } = useTheme();

  const fuse = useMemo(() => {
    return new Fuse(CHAPTERS, {
      keys: ['titleFr', 'titleAr', 'desc', 'id'],
      threshold: 0.3,
    });
  }, []);

  useEffect(() => {
    const mainContent = document.querySelector('.overflow-y-auto');
    const handleScroll = () => {
      if (mainContent) {
        setIsScrolled(mainContent.scrollTop > 20);
      }
    };
    mainContent?.addEventListener('scroll', handleScroll);
    return () => mainContent?.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (isSearchOpen && debouncedSearchQuery.length > 1) {
      const fuseResults = fuse.search(debouncedSearchQuery);
      setResults(fuseResults.map(result => result.item));
    } else {
      setResults([]);
    }
  }, [debouncedSearchQuery, fuse, isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navClasses = isScrolled
    ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg'
    : 'bg-transparent';
  
  const linkColor = isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white';
  const linkColorHover = isScrolled ? 'hover:text-black dark:hover:text-white' : 'hover:text-white';
  const iconColor = isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/70';

  return (
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
                <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300 ${pathname === '/accueil' ? 'w-1/2' : 'w-0 group-hover:w-full'}`} />
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

          <button onClick={toggleTheme} className={`${iconColor} ${linkColorHover} transition-colors`}>
            <span className="material-symbols-rounded text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <div className="relative" ref={searchRef}>
            <motion.div
              animate={{ width: isSearchOpen ? 250 : 40 }}
              className={`h-10 border rounded-full flex items-center overflow-hidden transition-colors bg-gray-100/80 dark:bg-white/5 border-gray-200 dark:border-white/10`}
            >
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`w-10 h-10 flex-shrink-0 flex items-center justify-center transition-colors text-gray-600 dark:text-white/60 hover:text-gold`}
              >
                <span className="material-symbols-rounded text-xl">{isSearchOpen ? 'close' : 'search'}</span>
              </button>
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`bg-transparent border-none outline-none text-sm w-full pr-4 transition-colors text-gray-800 dark:text-white placeholder:text-gray-500`}
              />
            </motion.div>
            <AnimatePresence>
              {isSearchOpen && results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-2 z-50 max-h-80 overflow-y-auto custom-scrollbar"
                >
                  {results.map((chapter) => (
                    <Link
                      key={chapter.id}
                      href={`/partie/${chapter.id}`}
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                      className="flex items-center gap-3 p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gold dark:hover:text-gold transition-colors text-sm font-medium"
                    >
                      <span className="material-symbols-rounded text-gold/80 text-lg w-6 text-center">{chapter.icon}</span>
                      <span>{chapter.titleFr}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden z-50 transition-colors ${iconColor} ${linkColorHover}`}>
          <span className="material-symbols-rounded text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl z-30 md:hidden"
            onClick={closeMobileMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-4/5 h-full bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 shadow-2xl p-6 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Content Here, adapted for themes */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};