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

  const fuse = useMemo(() => {
    return new Fuse(CHAPTERS, {
      keys: ['titleFr', 'titleAr', 'desc'],
      threshold: 0.3,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (debouncedSearchQuery.length > 1) {
      const fuseResults = fuse.search(debouncedSearchQuery);
      setResults(fuseResults.map(result => result.item));
    } else {
      setResults([]);
    }
  }, [debouncedSearchQuery, fuse]);

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

  // Fonction utilitaire pour fermer le menu mobile lors d'un clic
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ease-in-out ${
        isScrolled ? 'py-3 bg-emerald-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -15 }}
              className="w-10 h-10 border border-gold/50 rounded-lg flex items-center justify-center bg-gold/10 shadow-[0_0_20px_rgba(201,169,97,0.2)]"
            >
              <span className="material-symbols-rounded text-gold text-2xl">auto_stories</span>
            </motion.div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold tracking-widest text-white leading-none uppercase">Qurratul <span className="text-gold">Ayni</span></span>
              <span className="text-[9px] text-white/40 uppercase tracking-[0.3em]">Enseignements Sacrés</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/accueil" className={`text-xs uppercase tracking-widest font-bold transition-all relative group flex items-center gap-2 ${
                  pathname === '/accueil' ? 'text-gold' : 'text-white/60 hover:text-white'
                }`}>
                  <span className= "material-symbols-rounded text-base">home</span>
                  Accueil
                  <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300 ${pathname === '/accueil' ? 'w-1/2' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </li>
              <li className="relative" ref={chaptersRef}>
                <button
                  onClick={() => setIsChaptersDropdownOpen(!isChaptersDropdownOpen)}
                  className={`text-xs uppercase tracking-widest font-bold transition-all relative group flex items-center gap-1 ${
                    isChaptersDropdownOpen ? 'text-gold' : 'text-white/60 hover:text-white'
                  }`}
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-emerald-950/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-lg p-2 z-50 max-h-96 overflow-y-auto custom-scrollbar"
                    >
                      {Object.entries(groupedChapters).map(([group, chapters]) => (
                        <div key={group} className="mb-4">
                          <p className="px-3 pt-2 pb-1 text-[10px] uppercase font-bold tracking-widest text-gold/60">{group}</p>
                          {chapters.map((chapter) => (
                            <Link
                              key={chapter.id}
                              href={`/partie/${chapter.id}`}
                              onClick={() => setIsChaptersDropdownOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-gold transition-colors text-sm font-medium"
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

            <div className="h-6 w-px bg-white/10" />

            <div className="relative" ref={searchRef}>
              <motion.div 
                animate={{ width: isSearchOpen ? '250px' : '40px' }}
                className="h-10 bg-white/5 border border-white/10 rounded-full flex items-center overflow-hidden"
              >
                <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-white/60 hover:text-gold">
                  <span className="material-symbols-rounded text-xl">{isSearchOpen ? 'close' : 'search'}</span>
                </button>
                <input 
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm text-white w-full pr-4"
                />
              </motion.div>
              {/* Résultats de recherche... */}
            </div>
          </div>

          {/* Burger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/60 hover:text-white transition-colors z-50"
          >
            <span className="material-symbols-rounded text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[99] md:hidden"
            onClick={closeMobileMenu} // Fermer si on clique sur l'overlay
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-4/5 h-full bg-[#0A1A14] border-l border-white/10 shadow-2xl p-6 pt-24"
              onClick={(e) => e.stopPropagation()} // Empêcher la fermeture si on clique à l'intérieur
            >
              <ul className="space-y-6">
                <li>
                  <Link 
                    href="/accueil" 
                    onClick={closeMobileMenu} 
                    className={`text-lg uppercase tracking-widest font-bold flex items-center gap-3 ${pathname === '/accueil' ? 'text-gold' : 'text-white/80'}`}
                  >
                    <span className="material-symbols-rounded text-xl">home</span>
                    Accueil
                  </Link>
                </li>
                
                <li className="border-t border-white/5 pt-6">
                  <div className="flex items-center justify-between text-gold/60 mb-4">
                    <span className="text-[10px] uppercase font-black tracking-widest">Chapitres</span>
                    <span className="material-symbols-rounded text-xl">menu_book</span>
                  </div>
                  
                  <div className="space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
                    {Object.entries(groupedChapters).map(([group, chapters]) => (
                      <div key={group} className="space-y-2">
                        <p className="text-[9px] uppercase font-bold text-white/20 tracking-[0.2em]">{group}</p>
                        <div className="grid gap-2">
                          {chapters.map(chapter => (
                            <Link 
                              key={chapter.id} 
                              href={`/partie/${chapter.id}`} 
                              onClick={closeMobileMenu} // FERMETURE ET REDIRECTION ICI
                              className="flex items-center gap-3 p-3 bg-white/5 rounded-xl text-white/70 active:bg-gold/10 active:text-gold"
                            >
                              <span className="material-symbols-rounded text-lg text-gold/60">{chapter.icon}</span>
                              <span className="text-sm font-medium">{chapter.titleFr}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
