'use client';

import React from 'react';
import { CHAPTERS } from '@/data/chapters';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#020504] text-white pt-32 pb-40 px-4 md:px-12 overflow-x-hidden">
      
      {/* Background Ambiancé */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        
        {/* Header Minimaliste & Puissant */}
        <header className="mb-24 text-center md:text-left md:pl-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-[0.7em] text-[10px] md:text-xs uppercase font-black mb-4 block">
              Sommaire Numérique
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
              Les <span className="gold-gradient-text">13 Parties</span>
            </h1>
            <div className="h-[2px] w-24 bg-gold/30 hidden md:block" />
          </motion.div>
        </header>

        {/* Grille Intelligente : 1 col (mobile), 2 cols (Nest Hub), 3/4 cols (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {CHAPTERS.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: [0.23, 1, 0.32, 1] 
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative h-[400px] md:h-[450px] group"
            >
              <Link href={`/partie/${chapter.id}`} className="block h-full w-full">
                {/* La Carte Luxe */}
                <div className="h-full w-full rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-8 md:p-10 flex flex-col justify-between overflow-hidden relative backdrop-blur-xl group-hover:border-gold/40 transition-all duration-500 shadow-2xl">
                  
                  {/* Effet de Lumière Interne au survol */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Top : Numéro et Titre Arabe */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-4xl font-black text-white/10 group-hover:text-gold/20 transition-colors">
                      {chapter.id.toString().padStart(2, '0')}
                    </span>
                    <span className="text-3xl md:text-4xl font-amiri text-gold-light group-hover:scale-110 transition-transform duration-700 origin-right">
                      {chapter.titleAr}
                    </span>
                  </div>

                  {/* Bottom : Textes */}
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                      {chapter.titleFr}
                    </h3>
                    <p className="text-white/40 text-xs md:text-sm leading-relaxed line-clamp-3 mb-8 font-serif italic">
                      {chapter.desc}
                    </p>

                    {/* Bouton Action Dynamique */}
                    <div className="flex items-center gap-4">
                      <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-gold/30 transition-all" />
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-emerald-950-dynamic transition-all duration-500">
                        <span className="material-symbols-rounded text-lg">play_arrow</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Navigation (Flottant pour Nest Hub) */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-8 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-black text-white/60 hover:text-gold transition-all"
        >
          Remonter au Sommaire
        </button>
      </motion.div>
    </div>
  );
}