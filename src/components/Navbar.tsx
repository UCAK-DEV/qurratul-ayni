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

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 bg-emerald-950-dynamic/60 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* LOGO - Design Luxe */}
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className="w-10 h-10 border border-gold rounded-lg flex items-center justify-center bg-gold/5 group-hover:bg-gold/15 transition-all duration-500 shadow-[0_0_15px_rgba(201,169,97,0.1)]">
            <span className="material-symbols-rounded text-gold group-hover:scale-110 transition-transform">auto_stories</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-bold tracking-widest text-white leading-none uppercase">Qurratul <span className="text-gold">Ayni</span></span>
            <span className="text-[9px] text-white/30 uppercase tracking-[0.3em]">Enseignements Sacrés</span>
          </div>
        </Link>

        {/* NAVIGATION & ACTIONS */}
        <div className="flex items-center gap-4 md:gap-10">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path} className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative group ${
                  pathname === link.path ? 'text-gold' : 'text-white/50 hover:text-white'
                }`}>
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-500 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </li>
            ))}
            <li className="relative" ref={chaptersRef}>
              <button
                onClick={() => setIsChaptersDropdownOpen(!isChaptersDropdownOpen)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative group flex items-center gap-1 ${
                  isChaptersDropdownOpen ? 'text-gold' : 'text-white/50 hover:text-white'
                }`}
              >
                Chapitres
                <span className="material-symbols-rounded text-base">
                  {isChaptersDropdownOpen ? 'expand_less' : 'expand_more'}
                </span>
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-500 ${isChaptersDropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
              <AnimatePresence>
                {isChaptersDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-emerald-950-dynamic/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg p-3 z-50 max-h-80 overflow-y-auto custom-scrollbar"
                  >
                    <ul className="space-y-1">
                      {CHAPTERS.map((chapter) => (
                        <li key={chapter.id}>
                          <Link
                            href={`/partie/${chapter.id}`}
                            onClick={() => setIsChaptersDropdownOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-lg text-white/70 hover:bg-white/5 hover:text-gold transition-colors text-xs font-medium"
                          >
                            <span className="text-gold text-opacity-70">{chapter.id}.</span>
                            <span>{chapter.titleFr}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* SYSTÈME DE RECHERCHE "DEEP LOOK" */}
          <div className="relative" ref={searchRef}>
            <motion.div 
              initial={false}
              animate={{ 
                width: isSearchOpen ? 'clamp(200px, 50vw, 350px)' : '42px',
                borderColor: isSearchOpen ? 'rgba(201, 169, 97, 0.4)' : 'rgba(255, 255, 255, 0.1)'
              }}
              className="h-10 bg-white/5 border rounded-full flex items-center overflow-hidden transition-colors shadow-inner"
            >
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`w-10 h-10 flex-shrink-0 flex items-center justify-center transition-all ${
                  isSearchOpen ? 'text-gold' : 'text-white/40 hover:text-white'
                }`}
              >
                <span className={`material-symbols-rounded text-xl ${isSearchOpen ? 'drop-shadow-[0_0_8px_rgba(201,169,97,0.6)]' : ''}`}>
                  {isSearchOpen ? 'close' : 'search'}
                </span>
              </button>
              <input 
                type="text"
                placeholder="Explorer l'œuvre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                className="bg-transparent border-none outline-none text-xs text-white w-full pr-4 placeholder:text-white/20"
              />
            </motion.div>

            {/* DROPDOWN DE RÉSULTATS DÉTAILLÉS */}
            <AnimatePresence>
              {isSearchOpen && searchQuery.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  className="absolute top-14 right-0 w-[320px] sm:w-[500px] bg-emerald-950-dynamic/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.7)] z-50"
                >
                  <div className="p-6 max-h-[500px] overflow-y-auto custom-scrollbar">
                    <div className="flex items-center justify-between mb-6 px-2">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold/60 font-black">Archives Spirituelles</p>
                      <p className="text-[10px] text-white/20 font-mono">{results.length} PARTIES TROUVÉES</p>
                    </div>

                    {results.length > 0 ? (
                      <div className="space-y-3">
                        {results.map((chapter) => (
                          <button
                            key={chapter.id}
                            onClick={() => {
                              router.push(`/partie/${chapter.id}`);
                              setIsSearchOpen(false);
                            }}
                            className="w-full flex items-start gap-5 p-4 rounded-2xl hover:bg-white/[0.04] transition-all text-left group border border-transparent hover:border-gold/10"
                          >
                            <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center text-gold font-bold text-lg group-hover:bg-gold/20 transition-all shrink-0">
                              {chapter.id}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="text-white text-sm font-bold truncate group-hover:text-gold transition-colors">{chapter.titleFr}</h4>
                                <p className="text-gold/40 text-[11px] font-amiri ml-4 shrink-0">{chapter.titleAr}</p>
                              </div>
                              {/* APERÇU DU CONTENU (Nouveauté) */}
                              <p className="text-white/30 text-[11px] leading-relaxed line-clamp-2 font-light">
                                {chapter.desc}
                              </p>
                            </div>
                            <div className="self-center">
                              <span className="material-symbols-rounded text-white/10 group-hover:text-gold text-lg transition-all group-hover:translate-x-1">
                                chevron_right
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="py-16 text-center">
                        <span className="material-symbols-rounded text-white/5 text-5xl mb-3">search_off</span>
                        <p className="text-white/30 text-xs italic px-10 leading-relaxed">
                          Aucun résultat pour "<span className="text-white/60">{searchQuery}</span>". <br/>Essayez un autre mot-clé sacré.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* LANGUAGE SELECTOR */}
          <div className="hidden sm:flex bg-white/5 p-1 rounded-full border border-white/10 ml-2">
            {['FR', 'AR'].map((l) => (
              <button key={l} className={`px-3 py-1.5 text-[10px] font-black rounded-full transition-all ${
                l === 'FR' ? 'text-white bg-gold/10' : 'text-white/20 hover:text-white/50'
              }`}>{l}</button>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/60 hover:text-white transition-colors p-2"
          >
            <span className="material-symbols-rounded text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};