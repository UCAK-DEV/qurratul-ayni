'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreLaZakat() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 9 (La Zakat)
  const chapterData = CHAPTERS.find(c => c.id === "9") || CHAPTERS[8];

  const sectionsZakat = [
        {
    letter: "A",
    title: "L'ARGENT ÉPARGNÉ",
    subtitle: "Al-māl al-muddkhar",
    ar: "المال المُدَّخَر",
    sub: ["Le travail salarié", "Celui qui dispose d'un capital"]
    },
    {
    letter: "B",
    title: "POUR LES PRODUITS AGRICOLES",
    subtitle: "Lil-muntajāt az-zirāʿiyya",
    ar: "المنتجات الزراعية",
    sub: ["Pour ce qui est de l'arachide", "Pour le mil", "Le zakat selon le champ est arrosé ou pas"]
    },
    {
    letter: "C",
    title: "A PROPOS DU BÉTAIL :",
    subtitle: "Ḥawl al-māshiya",
    ar: "حول الماشية",
    sub: [""]
    },
    {
    letter: "D",
    title: "QUI A DROIT A LA ZAKAT ?",
    subtitle: "Man lahu al-ḥaqq",
    ar: "مستحقو الزكاة",
    sub: [""]
    },
    {
    letter: "E",
    title: "LA ZAKAT DE LA RUPTURE DU JEÜNE EST UNE OBLIGATION DIVINE",
    subtitle: "Zakāt al-fiṭr",
    ar: "زكاة الفطر",
    sub: ["Qui doit s'en acquiter", "La nature", "Quantité à prélever", "Quand la prélever", "Qui en à droit : A qui la donner ?"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 overflow-hidden relative">
      {/* Décoration de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          className="text-gold tracking-[0.8em] text-[10px] uppercase font-bold mb-6 block"
        >
          Troisième Pilier — Fiqh
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
        >
          LA ZAKAT : <span className="gold-gradient-text">UNE OBLIGATION DIVINE</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-white/40 font-serif italic text-lg mb-12"
        >
          "Qui nie cela est un mécréant ; qui cesse délibérément de s’en acquitter, 
          alors qu’il doit le faire, est un impie ; s’il ne s’en repent pas jusqu’à sa mort, 
          il sera précipité dans les feux de l’enfer. Elle doit être prélevée des trois 
          sources de revenus suivants : l’argent épargné, le produit agricole et enfin le bétail."
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white/[0.03] border border-white/10 rounded-full text-white font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:border-gold/50"
        >
          <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="material-symbols-rounded text-2xl text-gold relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause' : 'play_arrow'}
          </span>
          <span className="relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter le chapitre'}
          </span>
        </motion.button>
      </div>

      {/* Grille des Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
        {sectionsZakat.map((item, idx) => (
          <motion.div
            key={item.letter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => router.push(`/partie/9/${item.letter.toLowerCase()}`)}
            className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden h-[320px] flex flex-col justify-between"
          >
            {/* Lettre en arrière-plan */}
            <span className="absolute -bottom-4 -right-2 text-[180px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.07] group-hover:-translate-y-4 group-hover:scale-110" 
                  style={{ WebkitTextStroke: '1px white' }}>
              {item.letter}
            </span>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-gold tracking-widest">{item.letter} — SECTION</span>
                <span className="font-amiri text-2xl text-gold/40 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:gold-gradient-text transition-all leading-tight">
                {item.title}
              </h3>
              <p className="text-white/30 text-[10px] font-medium uppercase tracking-widest mt-1 mb-6">
                {item.subtitle}
              </p>

              <ul className="space-y-2">
                {item.sub.map((sub, sIdx) => (
                  <li key={sIdx} className="text-white/40 text-[13px] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/40 rounded-full" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
              Explorer <span className="material-symbols-rounded text-sm">arrow_forward</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Persistante */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/8')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/9/a')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-lg hover:scale-105 transition-all"
        >
          Commencer
        </button>
      </div>
    </main>
  );
}