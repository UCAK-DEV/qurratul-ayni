'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CHAPTERS, Chapter } from '@/data/chapters';
import { useTheme } from '@/context/ThemeContext';
import Fuse from 'fuse.js';
import { useDebounce } from '@/hooks/useDebounce';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300); // Debounce search query by 300ms
  const [results, setResults] = useState<Chapter[]>([]);
  const [isChaptersDropdownOpen, setIsChaptersDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Configure Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(CHAPTERS, {
      keys: ['titleFr', 'titleAr', 'desc'],
      threshold: 0.3, // Fuzziness (0.0 = perfect match, 1.0 = any match)
      includeScore: true, // Include score in results
    });
  }, []);

  // Détection du scroll pour l'effet de transparence dynamique
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/accueil' },
  ];

  const chaptersRef = useRef<HTMLLIElement>(null);

  // Moteur de recherche en temps réel avec filtrage multicritères
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (debouncedSearchQuery.length > 1) {
      const fuseResults = fuse.search(debouncedSearchQuery);
      setResults(fuseResults.map(result => result.item)); // Get original Chapter objects
    } else {
      setResults([]);
    }
  }, [debouncedSearchQuery, fuse]); // Depend on debounced query and fuse instance


  // Fermeture automatique au clic extérieur
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
  }, [searchRef, chaptersRef]);

  const groupedChapters = useMemo(() => {
    return CHAPTERS.reduce((acc, chapter) => {
      (acc[chapter.group] = acc[chapter.group] || []).push(chapter);
      return acc;
    }, {} as Record<string, Chapter[]>);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ease-in-out ${
        isScrolled ? 'py-3 bg-emerald-950/70 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'
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
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className={`text-xs uppercase tracking-widest font-bold transition-all relative group flex items-center gap-2 ${
                    pathname === link.path ? 'text-gold' : 'text-white/60 hover:text-white'
                  }`}>
                    <span className="material-symbols-rounded text-base">home</span>
                    {link.name}
                    <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300 ${pathname === link.path ? 'w-1/2' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                </li>
              ))}
              <li className="relative" ref={chaptersRef}>
                <button
                  onClick={() => setIsChaptersDropdownOpen(!isChaptersDropdownOpen)}
                  className={`text-xs uppercase tracking-widest font-bold transition-all relative group flex items-center gap-1 ${
                    isChaptersDropdownOpen ? 'text-gold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <span className="material-symbols-rounded text-base">menu_book</span>
                  Chapitres
                  <motion.span animate={{ rotate: isChaptersDropdownOpen ? 180 : 0 }} className="material-symbols-rounded text-base">
                    expand_more
                  </motion.span>
                  <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300 ${isChaptersDropdownOpen ? 'w-1/2' : 'w-0 group-hover:w-full'}`} />
                </button>
                <AnimatePresence>
                  {isChaptersDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-[#0A1A14]/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-lg p-2 z-50 max-h-96 overflow-y-auto custom-scrollbar"
                    >
                      <ul className="space-y-2">
                        {Object.entries(groupedChapters).map(([group, chapters]) => (
                          <li key={group}>
                            <p className="px-3 pt-2 pb-1 text-[10px] uppercase font-bold tracking-widest text-gold/60">{group}</p>
                            <ul className="space-y-1">
                              {chapters.map((chapter) => (
                                <li key={chapter.id}>
                                  <Link
                                    href={`/partie/${chapter.id}`}
                                    onClick={() => setIsChaptersDropdownOpen(false)}
                                    className="flex items-center gap-3 p-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-gold transition-colors text-sm font-medium"
                                  >
                                    <span className="material-symbols-rounded text-gold/80 text-lg w-6 text-center">{chapter.icon}</span>
                                    <span>{chapter.titleFr}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>

            <div className="h-6 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <div className="relative" ref={searchRef}>
                <motion.div 
                  initial={false}
                  animate={{ 
                    width: isSearchOpen ? '250px' : '40px',
                  }}
                  className="h-10 bg-white/5 border border-white/10 rounded-full flex items-center overflow-hidden transition-colors shadow-inner"
                >
                   <button 
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center transition-all text-white/60 hover:text-gold"
                  >
                    <span className="material-symbols-rounded text-xl">
                      {isSearchOpen ? 'close' : 'search'}
                    </span>
                  </button>
                  <input 
                    type="text"
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchOpen(true)}
                    className="bg-transparent border-none outline-none text-sm text-white w-full pr-4 placeholder:text-white/40"
                  />
                </motion.div>

                <AnimatePresence>
                  {isSearchOpen && searchQuery.length > 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute top-14 right-0 w-[450px] bg-[#0A1A14]/95 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50"
                    >
                       <div className="p-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                        {results.length > 0 ? (
                          <div className="space-y-2">
                            {results.map((chapter) => (
                              <button
                                key={chapter.id}
                                onClick={() => {
                                  router.push(`/partie/${chapter.id}`);
                                  setIsSearchOpen(false);
                                }}
                                className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all text-left group"
                              >
                                <div className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center text-gold font-bold text-sm group-hover:bg-gold/20 transition-all shrink-0">
                                  {chapter.id}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-white text-sm font-bold group-hover:text-gold transition-colors truncate">{chapter.titleFr}</h4>
                                  <p className="text-white/40 text-xs leading-relaxed line-clamp-1">
                                    {chapter.desc}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="py-12 text-center">
                            <p className="text-white/40 text-sm">Aucun résultat</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/60 hover:text-white transition-colors z-50"
          >
            <span className="material-symbols-rounded text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-emerald-950/50 backdrop-blur-2xl z-[99] md:hidden"
          >
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full bg-[#0A1A14] border-b border-white/10 shadow-2xl p-6 pt-24"
            >
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-lg uppercase tracking-widest font-bold transition-all flex items-center gap-3 ${
                      pathname === link.path ? 'text-gold' : 'text-white/80 hover:text-white'
                    }`}>
                      <span className="material-symbols-rounded text-xl">home</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setIsChaptersDropdownOpen(!isChaptersDropdownOpen)}
                    className="text-lg uppercase tracking-widest font-bold text-white/80 hover:text-white w-full flex justify-between items-center"
                  >
                    <span className="flex items-center gap-3">
                      <span className="material-symbols-rounded text-xl">menu_book</span>
                      Chapitres
                    </span>
                    <motion.span animate={{ rotate: isChaptersDropdownOpen ? 180 : 0 }} className="material-symbols-rounded">
                      expand_more
                    </motion.span>
                  </button>
                  {isChaptersDropdownOpen && (
                    <div className="mt-4 pl-4 space-y-1 max-h-60 overflow-y-auto custom-scrollbar">
                      {Object.entries(groupedChapters).map(([group, chapters]) => (
                        <div key={group} className="py-2">
                          <p className="px-2 pb-2 text-sm uppercase font-bold tracking-widest text-gold/60">{group}</p>
                          {chapters.map(chapter => (
                            <Link key={chapter.id} href={`/partie/${chapter.id}`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-2 text-white/60 hover:text-gold rounded-md">
                              <span className="material-symbols-rounded text-lg w-6 text-center">{chapter.icon}</span>
                              {chapter.titleFr}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};