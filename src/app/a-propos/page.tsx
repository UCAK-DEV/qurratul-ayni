'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DEVELOPERS } from '@/utils/site';

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
          Qurratul Ayni a été conçue et développée avec passion par deux
          étudiants de l&apos;Université Cheikh Ahmadoul Khadim (UCAK) de Touba.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {DEVELOPERS.map(dev => (
            <div key={dev.name} className="glass-card p-8 rounded-2xl flex flex-col items-center gap-2">
              <h2 className="text-2xl font-bold text-gold">{dev.name}</h2>
              <p className="text-white/50 text-sm">@{dev.alias}</p>
              <p className="text-white/60">{dev.role}</p>
              <a
                href={dev.url}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-block px-5 py-2 rounded-lg bg-gold/10 text-gold text-sm font-semibold border border-gold/30 hover:bg-gold/20 transition-colors"
              >
                Voir le portfolio ↗
              </a>
            </div>
          ))}
        </div>

        <p className="text-md text-white/80 font-reading mb-8">
          Cette plateforme numérise l&apos;œuvre de Serigne Shouhaïbou Mbacké —
          jurisprudence islamique, prières, wirds et nafilas — pour la rendre
          accessible à tous, gratuitement, en français et en arabe.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gold/10 text-gold font-semibold border border-gold/30"
          >
            Retour à l&apos;accueil
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutPage;
