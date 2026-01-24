'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Effets de parallaxe pour le texte et l'image
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-[200vh] bg-emerald-950">
      {/* Section Héro - Mobile First */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Background Dynamique */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]" />
        </div>

        {/* Portrait Principal avec Animation de Lueur */}
        <motion.div 
          style={{ opacity }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mb-10"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Cercles de décoration */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-gold/20 rounded-full" 
            />
            <div className="absolute -inset-1 bg-gradient-to-tr from-gold via-transparent to-gold/20 rounded-full blur-sm" />
            
            <img 
              src="/author.jpg" 
              className="relative w-full h-full object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              alt="Serigne Chouhinbou Mbacké"
            />
          </div>
        </motion.div>

        {/* Titres et Call to Action */}
        <motion.div
          style={{ y: y1 }}
          className="relative z-10 text-center space-y-6 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-gold tracking-[0.5em] text-xs md:text-sm uppercase font-medium mb-4 block">
              Œuvre Spirituelle Majeure
            </span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-2 tracking-tighter">
              Qurratul <span className="text-gold">Ayni</span>
            </h1>
            <p className="text-xl md:text-3xl font-amiri text-white/60 italic leading-relaxed">
              Serigne Chouhinbou Mbacké
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link href="/accueil" className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-gold text-emerald-950 px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(201,169,97,0.3)]"
              >
                Commencer l'immersion
                <span className="material-symbols-rounded">menu_book</span>
              </motion.button>
            </Link>
            
            <button className="w-full md:w-auto px-10 py-5 rounded-full border border-white/10 text-white/80 font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">
              Découvrir l'auteur
            </button>
          </motion.div>
        </motion.div>

        {/* Indicateur de Scroll */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </motion.div>
      </section>

      {/* Section de Présentation Moderne (Apparaît au scroll) */}
      <section className="relative px-6 py-32 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Une Voie vers la <br />
              <span className="gold-gradient-text italic">Lumière Divine</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed font-light">
              Qurratul Ayni est bien plus qu'un recueil de textes. C'est un guide méthodique structuré en huit parties fondamentales, alliant poésie mystique et enseignements pratiques pour l'élévation de l'âme.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                <h3 className="text-gold text-3xl font-bold mb-1">08</h3>
                <p className="text-white/40 text-xs uppercase tracking-wider">Chapitres Sacrés</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                <h3 className="text-gold text-3xl font-bold mb-1">HD</h3>
                <p className="text-white/40 text-xs uppercase tracking-wider">Audio Haute Qualité</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl rotate-3">
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
              <img src="/mosque.jpg" alt="Ambiance" className="w-full h-full object-cover" />
            </div>
            {/* Badge Flottant */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl shadow-2xl border border-gold/20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-emerald-950 font-black text-xl">
                  {/* Symbole calligraphique ou icône */}
                  ق
                </div>
                <div>
                  <p className="text-white font-bold">Sagesse Éternelle</p>
                  <p className="text-white/40 text-xs">Explorez les profondeurs du Tawhid</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer minimaliste */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs tracking-widest uppercase mb-4">
          © 2026 Qurratul Ayni — Tous droits réservés
        </p>
        <div className="flex justify-center gap-6">
          {['LinkedIn', 'Instagram', 'Contact'].map(link => (
            <a key={link} href="#" className="text-white/40 hover:text-gold text-[10px] uppercase font-bold transition-colors">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}