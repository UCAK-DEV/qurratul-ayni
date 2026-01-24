'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Gestion du scroll pour l'esthétique dynamique
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/accueil' },
    { name: 'L\'Œuvre', path: '/partie/1' },
    { name: 'Auteur', path: '#auteur' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-emerald-950/40 backdrop-blur-xl border-b border-white/5' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO : Style Minimaliste Luxe */}
        <Link href="/" className="group flex items-center gap-3 outline-none">
          <div className="relative">
            <motion.div 
              animate={{ rotate: isScrolled ? 0 : 45 }}
              className="w-10 h-10 border-2 border-gold rounded-xl flex items-center justify-center overflow-hidden"
            >
              <span className="material-symbols-rounded text-gold text-2xl group-hover:scale-110 transition-transform">
                auto_stories
              </span>
            </motion.div>
            {isScrolled && (
              <motion.div 
                layoutId="dot"
                className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full border-2 border-emerald-950" 
              />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.2em] text-white uppercase leading-none">
              Qurratul <span className="text-gold">Ayni</span>
            </span>
            <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase font-medium">
              Immersion Spirituelle
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path}
                  className="relative text-xs uppercase tracking-[0.2em] font-bold transition-colors group"
                >
                  <span className={`${pathname === link.path ? 'text-gold' : 'text-white/60 group-hover:text-white'}`}>
                    {link.name}
                  </span>
                  {pathname === link.path && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-gold shadow-[0_0_8px_#c9a961]" 
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Langue & Action */}
          <div className="flex items-center gap-6 border-l border-white/10 pl-8">
             <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
              {['FR', 'AR'].map((lang) => (
                <button 
                  key={lang} 
                  className={`px-3 py-1.5 text-[10px] font-black rounded-full transition-all ${
                    lang === 'FR' ? 'bg-gold text-emerald-950 shadow-lg' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 hover:bg-white/10 p-2.5 rounded-full border border-white/10 text-white transition-all"
            >
              <span className="material-symbols-rounded text-xl">search</span>
            </motion.button>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
        >
          <motion.div 
            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
            className="w-6 h-0.5 bg-gold rounded-full" 
          />
          <motion.div 
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-gold rounded-full" 
          />
          <motion.div 
            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
            className="w-6 h-0.5 bg-gold rounded-full" 
          />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-emerald-950 z-[40] flex flex-col justify-center px-10 gap-12"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-bold text-white hover:text-gold transition-colors flex items-center gap-4"
                  >
                    <span className="text-gold/20 text-lg font-mono">0{i+1}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-12 border-t border-white/5 space-y-6">
              <p className="text-white/20 uppercase tracking-widest text-xs">Langue de l'interface</p>
              <div className="flex gap-4">
                {['Français', 'Arabe', 'Wolof'].map((l) => (
                  <button key={l} className="text-white font-bold text-sm hover:text-gold">{l}</button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};