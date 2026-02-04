'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter(); // Initialize router
  
  // Adaptations fluides au scroll
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-emerald-950-dynamic overflow-x-hidden selection:bg-gold/30">
      
      {/* BACKGROUND DYNAMIQUE */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-gold/10 rounded-full blur-[80px] md:blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px] opacity-30" />
      </div>

      {/* SECTION HÉRO - Le coeur du design */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-20">
        
        {/* PORTRAIT - Redimensionné pour Nest Hub (max-h) */}
        <motion.div 
          style={{ opacity: opacityText, scale: scaleImage }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mb-6 md:mb-10"
        >
          {/* Taille adaptée : plus petite sur mobile et écrans courts (Nest Hub) */}
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 max-h-[30vh] max-w-[30vh]">
            {/* Anneau rotatif */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 md:-inset-4 border border-dashed border-gold/30 rounded-full" 
            />
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold via-transparent to-gold/40 rounded-full blur-[2px]" />
            
            <div className="relative w-full h-full overflow-hidden rounded-full shadow-[0_0_50px_rgba(201,169,97,0.2)] border-2 border-gold/20">
              <Image 
                src="/author.jpg" 
                alt="Serigne Shouhaïbou Mbacké"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* TITRES */}
        <motion.div
          style={{ y: y1 }}
          className="relative z-10 text-center space-y-3 md:space-y-6 max-w-4xl px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-gold tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-xs uppercase font-black mb-2 block opacity-80">
              Œuvre Spirituelle Majeure
            </span>
            {/* Taille de texte fluide pour Nest Hub */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-2 tracking-tighter leading-none">
              Qurratul <span className="text-gold gold-gradient-text">Ayni</span>
            </h1>
            <p className="text-lg md:text-3xl lg:text-4xl font-serif text-white/70 italic leading-tight">
              Serigne Shouhaïbou Mbacké
            </p>
          </motion.div>

          {/* ACTIONS - Adaptatives au tactile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-6 md:pt-10"
          >
            <Link href="/accueil" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:px-10 py-4 md:py-5 rounded-full bg-gold text-emerald-950-dynamic font-black text-[10px] md:text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 shadow-lg"
              >
                Commencer
                <span className="material-symbols-rounded text-lg">menu_book</span>
              </motion.button>
            </Link>
            
            <button 
               onClick={() => router.push('/partie/1')}
               className="w-full sm:px-10 py-4 md:py-5 rounded-full border border-white/10 text-white font-bold text-[10px] md:text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              L&apos;Auteur
            </button>
          </motion.div>
        </motion.div>

        {/* INDICATEUR DE SCROLL - Masqué si l'écran est trop court (Nest Hub) */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 md:gap-3 opacity-40"
        >
          <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-white">Découvrir</span>
          <div className="w-[1px] h-6 md:h-10 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* SECTION PRÉSENTATION - Grille Responsive */}
      <section className="relative px-6 py-16 md:py-32 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight">
              Une Voie vers la <br />
              <span className="gold-gradient-text italic font-serif">Lumière Divine</span>
            </h2>
            <p className="text-white/60 text-base md:text-xl leading-relaxed font-serif">
              Qurratul Ayni est un guide méthodique structuré, alliant poésie mystique et enseignements pratiques pour le croyant.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-gold/20 transition-all">
                <h3 className="text-gold text-3xl md:text-5xl font-black mb-1">19</h3>
                <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Chapitres</p>
              </div>
              <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-gold/20 transition-all">
                <h3 className="text-gold text-3xl md:text-5xl font-black mb-1">HD</h3>
                <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Audio</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <Image 
                src="/mosque.png" 
                alt="Ambiance" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-emerald-950-dynamic/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-bold">
          © 2026 Qurratul Ayni
        </p>
      </footer>
    </main>
  );
}