'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ProduitsAgricolesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 9 (La Zakat)
  const chapterData = CHAPTERS.find(c => c.id === "9") || CHAPTERS[8];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background Decor - Effets visuels modernes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-emerald-900/10 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION - Design Pro */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre IX — Section B</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          PRODUITS AGRICOLES <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mt-2">المنتجات الزراعية</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* SECTION 1: LES ESPÈCES ET SEUILS D'IMPOSITION */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">Les Vingt Espèces & Seuils</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-8">
            <p className="text-white/80 leading-relaxed italic text-lg text-justify font-serif">
              POUR LES PRODUITS AGRICOLES, il y a vingt (20) espèces dont il faut prélever la zakat : 
              les sept (7) variétés d’oléagineux et les deux variétés de fruits. 
              En ce qui nous concerne, les cultures les plus répandues chez nous sont l’arachide et le mil.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-gold/30 transition-colors">
                <p className="text-gold font-black text-[10px] uppercase mb-4 tracking-[0.2em]">Pour ce qui est de l'arachide</p>
                <p className="text-white/90 italic leading-relaxed">
                  Si le poids récolté atteint les <span className="text-white font-bold">trois cent soixante-quinze kilogrammes (375 kg)</span>, on doit y prélever la zakat.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-gold/30 transition-colors">
                <p className="text-gold font-black text-[10px] uppercase mb-4 tracking-[0.2em]">Pour le mil</p>
                <p className="text-white/90 italic leading-relaxed">
                  Il faudra <span className="text-white font-bold">sept cent cinquante kilogrammes (750 kg)</span> de récolte pour prélever la zakat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: LA ZAKAT SELON L’ARROSAGE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">La Zakat selon l’arrosage</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gold">
                  <span className="material-symbols-rounded">cloudy_snowing</span>
                  <h3 className="font-bold uppercase tracking-widest text-xs">Arrosage Naturel</h3>
                </div>
                <p className="text-white/70 italic text-sm leading-relaxed text-justify font-serif">
                  Si le champ est arrosé par la pluie ou par l’eau d’un fleuve ou celle d’une source, on prélève le dixième (1/10) de la récolte en guise de zakat.
                </p>
              </div>
              <div className="space-y-4 border-l border-white/10 pl-10">
                <div className="flex items-center gap-4 text-gold">
                  <span className="material-symbols-rounded">water_drop</span>
                  <h3 className="font-bold uppercase tracking-widest text-xs">Arrosage Manuel</h3>
                </div>
                <p className="text-white/70 italic text-sm leading-relaxed text-justify font-serif">
                  Si on l’arrose à la main, on prélève la moitié (1/2) du dixième, c'est-à-dire le vingtième (1/20).
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 text-white/60 italic text-sm leading-relaxed text-justify font-serif space-y-4">
              <p>
                Si l’arrosage se fait avec un robinet qui, une fois ouvert, peut permettre d’arroser tout le champ de telle sorte qu’on peut rester des jours sans avoir besoin d’arroser à nouveau, alors la zakat de ce champ est la même que le champ arrosé par la pluie.
              </p>
              <p>
                Si cela nécessite d’ouvrir souvent le robinet, alors la zakat de ce champ est la même que le champ qu’on arrose à la main.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: JARDINAGE ET DETTES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">Cas Particuliers & Dettes</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:bg-white/[0.08] transition-all">
              <h3 className="text-gold font-black text-[10px] uppercase mb-6 tracking-widest">Produits du jardinage</h3>
              <p className="text-white/70 italic leading-relaxed text-sm font-serif">
                Les produits du jardin qui ne font pas partie des vingt (20) espèces évoquées ci-dessus ne sont pas passibles de la zakat. 
                Cependant, l’argent recueilli de la vente des produits de jardinage, on prélèvera la zakat si on le garde pendant un an et que la valeur atteint le minimum imposable.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-red-950/10 border border-red-500/20 group hover:bg-red-950/20 transition-all">
              <h3 className="text-red-400 font-black text-[10px] uppercase mb-6 tracking-widest">Obligations du cultivateur</h3>
              <p className="text-white/80 font-bold italic leading-relaxed text-sm font-serif">
                Un cultivateur qui a contracté des dettes doit, avant de les honorer, prélever la zakat du produit de sa culture et ce, quelque élevé que soit le montant des dettes et si infime que soit la quantité récoltée.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE - Dock Moderne */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/9/a')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédente
        </button>
        <button 
          onClick={() => router.push('/partie/9/c')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivante
        </button>
      </div>
    </main>
  );
}