'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#010503] text-white flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-2xl w-full text-center"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold gold-gradient-text mb-4">
          À Propos des Développeurs
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-12">
          Cette application a été conçue et développée avec passion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gold mb-2">Pape Makhtar Aidara</h2>
            <p className="text-white/60">Étudiant</p>
          </div>
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gold mb-2">Makhtar Wade</h2>
            <p className="text-white/60">Étudiant</p>
          </div>
        </div>

        <p className="text-md text-white/80 font-serif italic mb-8">
          Étudiants à l'Université Cheikh Ahmadoul Khadim de Touba.
        </p>

        <Link href="/accueil">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gold/10 text-gold font-semibold border border-gold/30"
          >
            Retour à l'accueil
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutPage;
