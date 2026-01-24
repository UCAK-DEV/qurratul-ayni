'use client';
import { CHAPTERS } from '@/data/chapters';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LibraryPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-emerald-950">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Bibliothèque Sacrée</h2>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-20">Les Huit Parties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHAPTERS.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-3xl p-10 hover:border-gold/30 transition-all group relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-white/5 text-9xl font-black">{p.id}</div>
              <Link href={`/partie/${p.id}`} className="relative z-10 block text-left">
                <h3 className="text-arabic text-4xl text-gold mb-6">{p.titleAr}</h3>
                <h4 className="text-2xl font-bold text-white mb-4">{p.titleFr}</h4>
                <p className="text-white/40 text-sm leading-relaxed mb-10 line-clamp-3">{p.desc}</p>
                <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-[10px]">Explorer la partie <span className="material-symbols-rounded text-sm">arrow_forward</span></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}