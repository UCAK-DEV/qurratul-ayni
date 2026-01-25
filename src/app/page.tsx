'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Effets de parallaxe et d'opacité fluides
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen transition-colors duration-500 bg-emerald-950 dark:bg-emerald-950 light:bg-slate-50 overflow-x-hidden">
      
      {/* BACKGROUND DYNAMIQUE - Adaptatif au thème */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-gold/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] opacity-30" />
      </div>

      {/* SECTION HÉRO - Mobile First & Responsive Hub */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-20">
        
        {/* PORTRAIT - Design Épuré */}
        <motion.div 
          style={{ opacity: opacityText, scale: scaleImage }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mb-8 md:mb-14"
        >
          <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80">
            {/* Anneau de lumière rotatif */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-gold/30 rounded-full" 
            />
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold via-transparent to-gold/40 rounded-full blur-[2px]" />
            
            <div className="relative w-full h-full overflow-hidden rounded-full shadow-[0_0_50px_rgba(201,169,97,0.2)] border-2 border-gold/20">
              <Image 
                src="/author.jpg" 
                alt="Serigne Chouhinbou Mbacké"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* TITRES - Hiérarchie Visuelle Moderne */}
        <motion.div
          style={{ y: y1 }}
          className="relative z-10 text-center space-y-4 md:space-y-8 max-w-4xl px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-gold tracking-[0.5em] text-[10px] md:text-xs uppercase font-black mb-3 block opacity-80">
              Œuvre Spirituelle Majeure
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-white dark:text-white light:text-emerald-950 mb-3 tracking-tighter leading-none">
              Qurratul <span className="text-gold gold-gradient-text">Ayni</span>
            </h1>
            <p className="text-xl md:text-4xl font-serif text-white/70 dark:text-white/70 light:text-emerald-900/70 italic leading-tight">
              Serigne Chouhinbou Mbacké
            </p>
          </motion.div>

          {/* ACTIONS - Mobile First (Boutons larges) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 md:pt-10"
          >
            <Link href="/accueil" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(201,169,97,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gold text-emerald-950 px-10 py-5 rounded-full font-black text-xs md:text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all"
              >
                Commencer l'immersion
                <span className="material-symbols-rounded text-xl">menu_book</span>
              </motion.button>
            </Link>
            
            <button className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/10 dark:border-white/10 light:border-emerald-950/10 text-white dark:text-white light:text-emerald-950 font-bold text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-all backdrop-blur-sm">
              Découvrir l'auteur
            </button>
          </motion.div>
        </motion.div>

        {/* INDICATEUR DE SCROLL - Design Minimaliste */}
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-40"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-white">Découvrir</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* SECTION PRÉSENTATION - Grille Moderne & Responsive */}
      <section className="relative px-6 py-24 md:py-40 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 md:space-y-10"
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white dark:text-white light:text-emerald-950 leading-[1.1] tracking-tight">
              Une Voie vers la <br />
              <span className="gold-gradient-text italic font-serif">Lumière Divine</span>
            </h2>
            <p className="text-white/60 dark:text-white/60 light:text-emerald-900/60 text-lg md:text-2xl leading-relaxed font-light font-serif">
              Qurratul Ayni est bien plus qu'un recueil de textes. C'est un guide méthodique structuré en huit parties fondamentales, alliant poésie mystique et enseignements pratiques.
            </p>
            
            {/* STATS / FEATURES - Glassmorphism Adaptatif */}
            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6">
              <div className="p-6 md:p-8 rounded-[2.5rem] glass-card border border-white/5 hover:border-gold/30 transition-all duration-500 group">
                <h3 className="text-gold text-4xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform origin-left">08</h3>
                <p className="text-white/40 dark:text-white/40 light:text-emerald-900/40 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">Chapitres Sacrés</p>
              </div>
              <div className="p-6 md:p-8 rounded-[2.5rem] glass-card border border-white/5 hover:border-gold/30 transition-all duration-500 group">
                <h3 className="text-gold text-4xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform origin-left">HD</h3>
                <p className="text-white/40 dark:text-white/40 light:text-emerald-900/40 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">Audio Haute Qualité</p>
              </div>
            </div>
          </motion.div>

          {/* VISUEL DROIT - Composition Artistique */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:rotate-0 rotate-2">
              <Image 
                src="/mosque.png" 
                alt="Ambiance spirituelle" 
                fill 
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
            
            {/* BADGE FLOTTANT - Uniquement Desktop */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 glass-card p-8 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-gold/20 hidden xl:block"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-emerald-950 font-black text-3xl font-amiri shadow-lg shadow-gold/20">ق</div>
                <div>
                  <p className="text-white font-black text-sm tracking-wider uppercase">Sagesse Éternelle</p>
                  <p className="text-white/40 text-[10px] tracking-wide">Explorez les profondeurs du Tawhid</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER - Minimaliste & Adaptatif */}
      <footer className="py-20 border-t border-white/5 dark:border-white/5 light:border-emerald-950/5 text-center">
        <p className="text-white/20 dark:text-white/20 light:text-emerald-950/20 text-[10px] tracking-[0.5em] uppercase font-bold mb-4">
          © 2026 Qurratul Ayni — Tous droits réservés
        </p>
        <div className="h-1 w-12 bg-gold/30 mx-auto rounded-full" />
      </footer>
    </main>
  );
}