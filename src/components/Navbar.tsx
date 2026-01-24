'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CHAPTERS, Chapter } from '@/data/chapters';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Chapter[]>([]);
  
  const pathname = usePathname();
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = CHAPTERS.filter(c => 
        c.titleFr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.titleAr.includes(searchQuery) ||
        c.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/accueil' },
    { name: 'Bibliothèque', path: '/accueil#chapters' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 bg-emerald-950/60 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="w-10 h-10 border border-gold rounded-lg flex items-center justify-center bg-gold/5 group hover:bg-gold/10 transition-colors">
            <span className="material-symbols-rounded text-gold group-hover:scale-110 transition-transform">auto_stories</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-bold tracking-widest text-white leading-none uppercase">Qurratul <span className="text-gold">Ayni</span></span>
            <span className="text-[9px] text-white/30 uppercase tracking-[0.3em]">Enseignements Sacrés</span>
          </div>
        </Link>

        {/* ACTIONS & NAVIGATION */}
        <div className="flex items-center gap-4 md:gap-10">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path} className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative ${
                  pathname === link.path ? 'text-gold' : 'text-white/50 hover:text-white'
                }`}>
                  {link.name}
                  {pathname === link.path && (
                    <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Système de Recherche Dynamique - STYLE OPTIMISÉ */}
          <div className="relative" ref={searchRef}>
            <motion.div 
              initial={false}
              animate={{ 
                width: isSearchOpen ? 'clamp(180px, 40vw, 320px)' : '42px',
                borderColor: isSearchOpen ? 'rgba(201, 169, 97, 0.5)' : 'rgba(255, 255, 255, 0.1)'
              }}
              className="h-10 bg-white/5 border rounded-full flex items-center overflow-hidden transition-colors shadow-inner"
            >
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`w-10 h-10 flex-shrink-0 flex items-center justify-center transition-colors ${
                  isSearchOpen ? 'text-gold' : 'text-white/40 hover:text-white'
                }`}
              >
                <span className={`material-symbols-rounded text-xl ${isSearchOpen ? 'drop-shadow-[0_0_8px_rgba(201,169,97,0.8)]' : ''}`}>
                  {isSearchOpen ? 'close' : 'search'}
                </span>
              </button>
              <input 
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                className="bg-transparent border-none outline-none text-xs text-white w-full pr-4 placeholder:text-white/20"
              />
            </motion.div>

            {/* Dropdown de résultats */}
            <AnimatePresence>
              {isSearchOpen && searchQuery.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="absolute top-14 right-0 w-[300px] sm:w-[450px] bg-emerald-950/95 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-50"
                >
                  <div className="p-5 max-h-[450px] overflow-y-auto custom-scrollbar">
                    <div className="flex items-center justify-between mb-4 px-2">
                      <p className="text-[10px] uppercase tracking-widest text-gold/60 font-bold">Exploration</p>
                      <p className="text-[10px] text-white/20">{results.length} résultats</p>
                    </div>
                    {results.length > 0 ? (
                      <div className="space-y-1">
                        {results.map((chapter) => (
                          <button
                            key={chapter.id}
                            onClick={() => {
                              router.push(`/partie/${chapter.id}`);
                              setIsSearchOpen(false);
                            }}
                            className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all text-left group border border-transparent hover:border-white/5"
                          >
                            <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center text-gold font-bold group-hover:bg-gold/20 transition-colors">
                              {chapter.id}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white text-sm font-bold truncate group-hover:text-gold transition-colors">{chapter.titleFr}</h4>
                              <p className="text-white/40 text-[10px] truncate font-amiri tracking-wider">{chapter.titleAr}</p>
                            </div>
                            <span className="material-symbols-rounded text-white/10 group-hover:text-gold text-sm transition-colors">arrow_forward_ios</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="py-12 text-center">
                        <span className="material-symbols-rounded text-white/10 text-4xl mb-2">find_in_page</span>
                        <p className="text-white/40 text-xs italic font-light px-6">Aucun chapitre ne correspond à votre recherche spirituelle.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden sm:flex bg-white/5 p-1 rounded-full border border-white/10 ml-2">
            {['FR', 'AR'].map((l) => (
              <button key={l} className={`px-3 py-1 text-[9px] font-black rounded-full transition-all ${
                l === 'FR' ? 'text-white' : 'text-white/20 hover:text-white/50'
              }`}>{l}</button>
            ))}
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/60 hover:text-white transition-colors"
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