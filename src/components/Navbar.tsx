// src/components/Navbar.tsx
"use client";
import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-emerald-900/80 backdrop-blur-md border-b border-gold/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo avec l'icône du livre */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="material-symbols-rounded text-white">menu_book</span>
          </div>
          <span className="text-2xl font-bold text-gold tracking-tight">Qurratul Ayni</span>
        </div>

        {/* Actions : Recherche & Langues */}
        <div className="flex items-center gap-6">
          {/* Barre de recherche discrète style "Pro" */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 focus-within:border-gold/50 transition-colors">
            <span className="material-symbols-rounded text-white/40 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="bg-transparent border-none focus:outline-none text-sm text-white px-2 w-48"
            />
          </div>

          {/* Sélecteur de langue */}
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
            {['AR', 'FR', 'WO'].map((lang) => (
              <button key={lang} className="px-3 py-1 text-xs font-bold rounded-full hover:bg-white/10 transition-all text-white/70 hover:text-white">
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};