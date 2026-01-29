'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitrePriere() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "6") || CHAPTERS[5];

  const sectionsPriere = [
   {
      letter: "A",
      title: "LES PRATIQUES DE LA PRIÈRE",
      subtitle: "Appel à la prière",
      ar: "الأذان",
      sub: ["Le Nodd : Appel à la prière","Comment appeler à la prière ?"]
    },
    {
      letter: "B",
      title: "LA PRIÈRE RITUELLE",
      subtitle: "Fondements de la prière",
      ar: "الصلاة",
      sub: [""]
    },
    {
      letter: "C",
      title: "LES CINQ PRIÈRES OBLIGATOIRES",
      subtitle: "Farata et Sounna",
      ar: "الفرائض والسنن",
      sub: [""]
    },
    {
      letter: "D",
      title: "LES PRATIQUES OBLIGATOIRES",
      subtitle: "Voyageur et malade",
      ar: "صلاة المسافر والمريض",
      sub: [""]
    },
    {
      letter: "E",
      title: "LES PRATIQUES TRADITIONNELLES",
      subtitle: "Vendredi et fêtes",
      ar: "الجمعة والعيدين",
      sub: [""]
    },
    {
      letter: "F",
      title: "LA PRIÈRE DU VENDREDI",
      subtitle: "Précautions et comportement",
      ar: "صلاة الجمعة",
      sub: ["Précautions à prendre", "La prière du vendredi", "Comment s'acquitter des rakkas effectuées avant notre arrivées"]
    },
    {
      letter: "G",
      title: "LES PRIÈRES OBLIGATOIRES NON EFFECTUÉES",
      subtitle: "Rattrapage",
      ar: "قضاء الصلوات",
      sub: [""]
    },
    {
      letter: "H",
      title: "LA PRIÈRE DU VOYAGEUR",
      subtitle: "Allègement et règles",
      ar: "صلاة المسافر",
      sub: [""]
    },
    {
      letter: "I",
      title: "DE CERTAINS ACTES DURANT LA PRIÈRE",
      subtitle: "Comportement dans la prière",
      ar: "أفعال الصلاة",
      sub: ["Certains actes blâmables", "Certains actes méritoires"]
    },
    {
      letter: "J",
      title: "LES PRIÈRES SURÉROGATOIRES",
      subtitle: "Prières volontaires",
      ar: "النوافل",
      sub: ["La prière du witr"]
    },
    {
      letter: "K",
      title: "LES PRIÈRES DES FÊTES « HIID »",
      subtitle: "Règles et pratiques",
      ar: "صلاة العيدين",
      sub: [""]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-20 md:pt-24 pb-40 md:pb-48 px-4 md:px-6 overflow-x-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-12 md:mb-20 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold tracking-[0.4em] md:tracking-[0.8em] text-[9px] md:text-[10px] uppercase font-bold mb-4 md:mb-6 block opacity-80"
        >
          Pilier de l'Islam — As-Salah
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter px-2"
        >
          LA <span className="gold-gradient-text">PRIÈRE</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl md:max-w-2xl mx-auto text-white/40 font-serif italic text-base md:text-lg mb-8 md:mb-12 px-4"
        >
          "Obligation est faite à tout musulman majeur de s’acquitter des cinq (5) prières quotidiennes. Quiconque nie cela est un mécréant ; celui qui y renonce délibérément et sans aucune dispense est un impie. Seule la démence peut dispenser de la prière. Toute personne qui jouit de ses facultés mentales doit obligatoirement s’acquitter de ces prières, quelles que soient ses incapacités physiques, quand bien même elle doit les faire par mimique. Celui qui ne les accomplit pas aux heures prescrites encourt les mêmes sanctions que celles citées ci-dessus ; il n’est pas digne de foi. Selon la charia, il doit être condamné à mort ; il sera irrémédiablement précipité dans la géhenne s’il ne s’en repent pas."
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="group relative inline-flex items-center gap-3 md:gap-4 px-8 md:px-12 py-4 md:py-5 bg-white/[0.03] border border-white/10 rounded-full text-white font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] overflow-hidden transition-all hover:border-gold/50 shadow-lg"
        >
          <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="material-symbols-rounded text-xl md:text-2xl text-gold relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause' : 'play_arrow'}
          </span>
          <span className="relative z-10">{currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter le chapitre'}</span>
        </motion.button>
      </div>

      {/* Grid optimized for Hubs and Tablets */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {sectionsPriere.map((item, idx) => (
          <motion.div
            key={`${item.letter}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => router.push(`/partie/6/${item.letter.toLowerCase()}`)}
            className="group relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden min-h-[280px] md:h-[320px] flex flex-col justify-between"
          >
            {/* Gigantic letter background - resized for responsiveness */}
            <span className="absolute -bottom-4 -right-2 text-[120px] md:text-[180px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.07] group-hover:-translate-y-4 group-hover:scale-110" 
                  style={{ WebkitTextStroke: '1px white' }}>
              {item.letter}
            </span>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <span className="text-[9px] md:text-xs font-bold text-gold tracking-widest">{item.letter} — SECTION</span>
                <span className="font-amiri text-xl md:text-2xl text-gold/40 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:gold-gradient-text transition-all leading-tight">
                {item.title}
              </h3>
              <p className="text-white/30 text-[9px] md:text-xs font-medium uppercase tracking-widest mt-1 mb-4 md:mb-6">
                {item.subtitle}
              </p>

              <ul className="space-y-1.5 md:space-y-2">
                {item.sub.map((sub, sIdx) => (
                  <li key={sIdx} className="text-white/40 text-[11px] md:text-[13px] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/40 rounded-full flex-shrink-0" />
                    <span className="truncate">{sub}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-tighter text-gold opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all translate-x-0 sm:translate-x-[-10px] sm:group-hover:translate-x-0 mt-4">
              Explorer <span className="material-symbols-rounded text-sm">arrow_forward</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Persistent Navigation optimized for Hubs */}
      <div className="fixed bottom-4 md:bottom-8 left-0 right-0 flex justify-center z-50 px-4">
        <div className="flex gap-3 md:gap-4 w-full max-w-md">
          <button 
            onClick={() => router.push('/partie/5')} 
            className="flex-1 py-3 md:py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all active:scale-95"
          >
            Précédent
          </button>
          <button 
            onClick={() => router.push('/partie/6/a')} 
            className="flex-1 py-3 md:py-4 bg-gold text-emerald-900 rounded-full text-[9px] md:text-[10px] uppercase tracking-widest font-black shadow-[0_10px_30px_rgba(201,169,97,0.2)] hover:scale-105 transition-all active:scale-95"
          >
            Commencer
          </button>
        </div>
      </div>
    </main>
  );
}