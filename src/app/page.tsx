'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();
  
  // Effets de parallaxe fluides
  const yHero = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);
  const scalePortrait = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Variantes d'animation pour les textes (Cascade/Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const // <--- Ajoutez ceci
      }
    },
  };

  return (
    <main className="relative min-h-[100dvh] bg-[#010503] overflow-x-hidden selection:bg-gold/30 flex flex-col font-sans">
      
      {/* FOND AMBIANT DYNAMIQUE (GPU Optimized) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-gold/5 rounded-full blur-[100px]" 
        />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-emerald-900/10 rounded-full blur-[100px]" />
      </div>

      {/* SECTION HÉRO */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 py-12">
        
        <motion.div 
          style={{ opacity: opacityHero, y: yHero, scale: scalePortrait }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-4xl flex flex-col items-center"
        >
          {/* PORTRAIT AVEC EFFET DE RÉVÉLATION */}
          <motion.div variants={itemVariants} className="relative mb-8 md:mb-12">
            <div className="relative w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-gold/10 rounded-full"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute -inset-1 bg-gradient-to-b from-gold/40 to-transparent rounded-full" 
              />
              <div className="relative w-full h-full overflow-hidden rounded-full border border-gold/20 shadow-2xl shadow-gold/5">
                <Image 
                  src="/author.jpg" 
                  alt="Serigne Shouhaïbou Mbacké"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* TEXTES AVEC CLAMP ET STAGGER */}
          <div className="space-y-4 px-2 text-center">
            <motion.span 
              variants={itemVariants}
              className="text-gold text-[9px] sm:text-xs uppercase font-black tracking-[0.6em] block opacity-70"
            >
              Œuvre Spirituelle Majeure
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-[clamp(2.8rem,9vw,6.5rem)] font-serif font-black text-white tracking-tighter leading-[1] uppercase"
            >
              Qurratul <span className="gold-gradient-text ">Ayni</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-4xl font-serif text-white/60 italic leading-tight"
            >
              Serigne Shouhaïbou Mbacké
            </motion.p>
          </div>

          {/* ACTIONS FLUIDES */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full max-w-sm sm:max-w-none"
          >
            <Link href="/accueil" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:px-12 py-4 md:py-5 rounded-2xl bg-gold text-[#010503] font-black text-[11px] sm:text-sm tracking-[0.3em] uppercase flex items-center justify-center gap-3 shadow-2xl"
              >
                Commencer
                <span className="material-symbols-rounded text-lg">menu_book</span>
              </motion.button>
            </Link>
            
            <motion.button 
               whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
               onClick={() => router.push('/partie/1')}
               className="w-full sm:px-12 py-4 md:py-5 rounded-2xl border border-white/10 text-white font-bold text-[11px] sm:text-sm tracking-[0.3em] uppercase transition-all backdrop-blur-md"
            >
              L&apos;Auteur
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION PRÉSENTATION (Fade-in on scroll) */}
      <section className="relative px-6 py-20 bg-black/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight tracking-tighter">
              Une Voie vers la <br />
              <span className="gold-gradient-text italic font-serif">Lumière Divine</span>
            </h2>
            <p className="text-white/50 text-lg sm:text-xl leading-relaxed font-serif italic max-w-lg mx-auto lg:mx-0">
              Qurratul Ayni est un guide méthodique structuré, alliant poésie mystique et enseignements pratiques pour le croyant.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "19", label: "Chapitres" },
                { val: "HD", label: "Audio" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 text-center"
                >
                  <span className="text-gold text-4xl font-black block">{stat.val}</span>
                  <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative aspect-video sm:aspect-square max-h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image 
              src="/mosque.png" 
              alt="Atmosphère" 
              fill 
              className="object-cover opacity-70 scale-110 hover:scale-100 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010503] via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-white/5 text-center mt-auto bg-black/20">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-white/20 text-[10px] tracking-[0.5em] uppercase font-bold px-4"
        >
          © 2026 Qurratul Ayni • Bibliothèque Spirituelle Digitale
        </motion.p>
      </footer>
    </main>
  );
}