'use client';

import React from 'react';
import { CHAPTERS } from '@/data/chapters';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#010302] text-white pt-24 pb-32 px-6 md:px-16 overflow-x-hidden selection:bg-gold/30">
      
      {/* Arrière-plan cinématique */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header - Style Magazine de Luxe */}
        <header className="mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="h-[1px] w-12 bg-gold/50" />
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">
                Bibliothèque Numérique
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
              Sommaire <br />
              <span className="gold-gradient-text opacity-90">Général</span>
            </h1>
          </motion.div>
        </header>

        {/* Grille de Navigation - Ultra Fluide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHAPTERS.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="group"
            >
              <Link href={`/partie/${chapter.id}`}>
                <div className="relative h-48 w-full rounded-2xl bg-white/[0.03] border border-white/10 p-6 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.06] hover:border-gold/50 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.2)] overflow-hidden">
                  
                  {/* Effet de brillance au survol */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* L'Icône - Positionnée comme un bijou */}
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-white/5 group-hover:text-gold/10 transition-colors duration-500">
                           {chapter.id.toString().padStart(2, '0')}
                        </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-gold/80 group-hover:text-gold group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                      <span className="material-symbols-rounded text-2xl leading-none">
                        {chapter.icon}
                      </span>
                    </div>
                  </div>

                  {/* Textes - Focus sur la lisibilité */}
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                       <h3 className="text-lg font-bold text-white/90 group-hover:text-white">
                        {chapter.titleFr}
                      </h3>
                      <span className="text-xl font-amiri text-gold/40 group-hover:text-gold/90 transition-colors">
                        {chapter.titleAr}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                        <span className="text-[10px] font-bold text-gold uppercase tracking-tighter">Découvrir la partie</span>
                        <span className="material-symbols-rounded text-sm text-gold">arrow_forward</span>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Minimaliste Flottant */}
      <footer className="mt-24 border-t border-white/5 pt-12 text-center opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-[10px] tracking-[0.2em] uppercase">
          Projet Khouratoul Ayni • 2024
        </p>
      </footer>
    </div>
  );
}