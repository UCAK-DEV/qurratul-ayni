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
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

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
      sub: ["Prérequis et intentions"]
    },
    {
      letter: "C",
      title: "LES CINQ PRIÈRES OBLIGATOIRES",
      subtitle: "Farata et Sounna",
      ar: "الفرائض والسنن",
      sub: ["Horaires et cycles"]
    },
    {
      letter: "D",
      title: "LES PRATIQUES OBLIGATOIRES",
      subtitle: "Voyageur et malade",
      ar: "صلاة المسافر والمريض",
      sub: ["Adaptations légales"]
    },
    {
      letter: "E",
      title: "LES PRATIQUES TRADITIONNELLES",
      subtitle: "Vendredi et fêtes",
      ar: "الجمعة والعيدين",
      sub: ["Rituels communautaires"]
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
      sub: ["Règles du rattrapage"]
    },
    {
      letter: "H",
      title: "LA PRIÈRE DU VOYAGEUR",
      subtitle: "Allègement et règles",
      ar: "صلاة المسافر",
      sub: ["Raccourcissement (Qasr)"]
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
      sub: ["Célébrations annuelles"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <header className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-4 mb-8">
               <span className="text-4xl font-amiri text-gold-light drop-shadow-sm">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
               <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold/30" />
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Pilier de l'Islam — As-Salah</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-8">
              LA <span className="gold-gradient-text">PRIÈRE</span>
            </h1>

            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12">
              <p className="max-w-3xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed">
                &quot;Obligation est faite à tout musulman majeur de s’acquitter des cinq (5) prières quotidiennes. Quiconque nie cela est un mécréant ; celui qui y renonce délibérément et sans aucune dispense est un impie. Seule la démence peut dispenser de la prière. Toute personne qui jouit de ses facultés mentales doit obligatoirement s’acquitter de ces prières, quelles que soient ses incapacités physiques, quand bien même elle doit les faire par mimique. Celui qui ne les accomplit pas aux heures prescrites encourt les mêmes sanctions que celles citées ci-dessus ; il n’est pas digne de foi. Selon la charia, il doit être condamné à mort ; il sera irrémédiablement précipité dans la géhenne s’il ne s’en repent pas.&quot;
              </p>
            </div>

            {/* AUDIO CONTROL BOX */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => isThisChapterPlaying ? togglePlay() : setChapter(chapterData)}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-40' : 'opacity-0'}`} />
                <span className={`material-symbols-rounded text-4xl relative z-10 ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>
                  {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
                </span>
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-gold transition-colors">Chapitre VI</p>
                <p className="text-sm font-bold tracking-tight">
                  {isThisChapterPlaying ? 'Pause en cours' : 'Écouter le chapitre complet'}
                </p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        {/* GRID DES SECTIONS - 11 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionsPriere.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => router.push(`/partie/6/${item.letter.toLowerCase()}`)}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden min-h-[340px] flex flex-col justify-between"
            >
              {/* LARGE BACKGROUND LETTER */}
              <span className="absolute -bottom-6 -right-4 text-[200px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.08] group-hover:-translate-y-4" 
                    style={{ WebkitTextStroke: '1px white' }}>
                {item.letter}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold text-gold tracking-[0.3em] uppercase opacity-60">Section {item.letter}</span>
                  <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors duration-500">{item.ar}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                  {item.subtitle}
                </p>

                <ul className="space-y-3">
                  {item.sub.map((sub, sIdx) => (
                    sub !== "" && (
                      <li key={sIdx} className="text-white/40 group-hover:text-white/60 text-sm flex items-center gap-3 transition-colors">
                        <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full" />
                        {sub}
                      </li>
                    )
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Ouvrir l'étude <span className="material-symbols-rounded text-sm">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button 
          onClick={() => router.push('/partie/5')} 
          className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button 
          onClick={() => router.push('/partie/6/a')} 
          className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20"
        >
          Commencer
        </button>
      </nav>
    </main>
  );
}