'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Effet de parallaxe doux pour le texte
  const y1 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-emerald-950 overflow-x-hidden">
      {/* Section Héro - Optimisée pour Nest Hub (Paysage court) */}
      <section className="relative min-h-screen md:h-[100vh] flex flex-col items-center justify-center overflow-hidden px-6 py-10">
        
        {/* Background Dynamique - Performance optimisée */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[100px]" />
        </div>

        {/* Portrait - Taille fluide pour écrans tactiles et Hubs */}
        <motion.div 
          style={{ opacity }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mb-6 md:mb-10"
        >
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80">
            {/* Cercles de décoration animés */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 border border-dashed border-gold/20 rounded-full" 
            />
            <div className="absolute -inset-1 bg-gradient-to-tr from-gold via-transparent to-gold/20 rounded-full blur-sm" />
            
            <div className="relative w-full h-full overflow-hidden rounded-full shadow-2xl border-2 border-gold/10">
              <Image 
                src="/author.jpg" 
                alt="Serigne Chouhinbou Mbacké"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Titres et Call to Action */}
        <motion.div
          style={{ y: y1 }}
          className="relative z-10 text-center space-y-4 md:space-y-6 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gold tracking-[0.4em] text-[10px] md:text-sm uppercase font-medium mb-2 block">
              Œuvre Spirituelle Majeure
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-2 tracking-tighter">
              Qurratul <span className="text-gold">Ayni</span>
            </h1>
            <p className="text-lg md:text-3xl font-serif text-white/60 italic leading-relaxed">
              Serigne Chouhinbou Mbacké
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-8"
          >
            <Link href="/accueil" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-gold text-emerald-950 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-3 shadow-lg"
              >
                Commencer l'immersion
                <span className="material-symbols-rounded text-lg">menu_book</span>
              </motion.button>
            </Link>
            
            <button className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full border border-white/10 text-white/80 font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">
              Découvrir l'auteur
            </button>
          </motion.div>
        </motion.div>

        {/* Indicateur de Scroll - Masqué sur écrans très courts */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent" />
        </motion.div>
      </section>

      {/* Section Présentation Moderne */}
      <section className="relative px-6 py-20 md:py-32 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight">
              Une Voie vers la <br />
              <span className="gold-gradient-text italic">Lumière Divine</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed font-light">
              Qurratul Ayni est bien plus qu'un recueil de textes. C'est un guide méthodique structuré en huit parties fondamentales, alliant poésie mystique et enseignements pratiques.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="p-4 md:p-6 rounded-3xl bg-white/[0.02] border border-white/5 glass-card">
                <h3 className="text-gold text-2xl md:text-3xl font-bold mb-1">08</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-wider">Chapitres Sacrés</p>
              </div>
              <div className="p-4 md:p-6 rounded-3xl bg-white/[0.02] border border-white/5 glass-card">
                <h3 className="text-gold text-2xl md:text-3xl font-bold mb-1">HD</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-wider">Audio Haute Qualité</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl rotate-2">
              <Image 
                src="/mosque.png" 
                alt="Ambiance" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
            
            {/* Badge Flottant - Uniquement sur grands écrans */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -left-6 glass-card p-6 rounded-3xl shadow-2xl border border-gold/20 hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-emerald-950 font-black text-xl font-amiri">ق</div>
                <div>
                  <p className="text-white font-bold text-sm">Sagesse Éternelle</p>
                  <p className="text-white/40 text-[10px]">Explorez les profondeurs du Tawhid</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] tracking-widest uppercase mb-4">
          © 2026 Qurratul Ayni — Tous droits réservés
        </p>
      </footer>
    </main>
  );
}