'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particules d'ambiance dorées */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-gold rounded-full opacity-20"
          animate={{ y: [0, -100, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, delay: p.delay }}
          style={{ top: p.top, left: p.left }}
        />
      ))}

      <div className="container relative z-10 px-6 flex flex-col items-center">
        {/* Portrait avec effet de lueur circulaire */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative mb-12"
        >
          <div className="absolute -inset-8 border border-gold/10 rounded-full animate-pulse" />
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-2 border border-gold/30">
            <img 
              src="/author.jpg" 
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              alt="Serigne Souhinbou Mbacké"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-9xl font-bold text-gold mb-4 tracking-tight">Qurratul Ayni</h1>
          <p className="text-xl md:text-3xl text-white/80 font-light mb-12 tracking-widest uppercase">Serigne Chouhinbou Mbacké</p>

          <Link href="/accueil">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201, 169, 97, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-emerald-950 px-12 py-5 rounded-full font-bold text-lg flex items-center gap-4 transition-all"
            >
              Explorer l'œuvre
              <span className="material-symbols-rounded">arrow_right_alt</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}