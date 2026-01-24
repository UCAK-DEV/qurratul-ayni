'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PARTIES = [
  { id: 1, title: "L'Unicité de Dieu", ar: "توحيد الله", desc: "Explication des fondements de l’unicité de Dieu." },
  { id: 2, title: "Adorations & Invocations", ar: "العبادات والأذكار", desc: "Les adorations, invocations et voies spirituelles." },
  // ... autres parties
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-20 text-center">
          <h2 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Bibliothèque Sacrée</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white">Les Huit Parties</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTIES.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-3xl p-10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="absolute top-4 right-8 text-gold/10 text-8xl font-black">0{p.id}</div>
              
              <Link href={`/partie/${p.id}`} className="relative z-10">
                <h3 className="text-arabic text-4xl text-gold mb-6">{p.ar}</h3>
                <h4 className="text-2xl font-bold text-white mb-4">{p.title}</h4>
                <p className="text-white/40 leading-relaxed mb-10">{p.desc}</p>
                
                <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-[10px]">
                  Découvrir la partie
                  <span className="material-symbols-rounded text-sm">arrow_forward</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}