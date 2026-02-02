'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreMariage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 12 (Le Mariage)
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];

  const sectionsMariage = [
    { letter: "A", title: "LES OBLIGATIONS", ar: "الواجبات", sub: ["Conditions de validité", "Dot et consentement"] },
    { letter: "B", title: "LA CÉLÉBRATION DU MARIAGE", ar: "الاحتفال بالزواج", sub: ["Formalités rituelles", "Sunna de la cérémonie"] },
    { letter: "C", title: "L’ACTE CONJUGAL", ar: "الجماع", sub: ["Éthique et invocations", "Droits respectifs"] },
    { letter: "D", title: "PRÉCAUTIONS À PRENDRE POUR LA FEMME ENCEINTE", ar: "الاحتياطات الواجب اتخاذها للمرأة الحامل", sub: ["Précautions à prendre", "Santé et spiritualité"] },
    { letter: "E", title: "LE BAPTÊME", ar: "العقيقة", sub: ["Le nom de l'enfant", "Sacrifice et mérites"] },
    { letter: "F", title: "QUELQUES REMÈDES POUR L’ENFANT", ar: "بعض العلاجات للطفل", sub: ["Maux d'oreilles", "Gadam", "Diarrhée", "Constipation"] },
    { letter: "G", title: "LE SEVRAGE", ar: "الفطام", sub: ["Période et transition", "Bien-être de l'enfant"] },
    { letter: "H", title: "L’ÉDUCATION DE L’ENFANT", ar: "تربية الطفل", sub: ["Valeurs islamiques", "Responsabilité parentale"] }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 overflow-hidden relative font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          className="text-gold tracking-[0.8em] text-[10px] uppercase font-bold mb-6 block"
        >
          Vie Sociale — Fiqh
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]"
        >
          LE <span className="gold-gradient-text italic">MARIAGE</span>
        </motion.h1>

        {/* Texte intégral de l'introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6 text-white/50 font-serif italic text-lg leading-relaxed text-justify mb-12 bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/5"
        >
          <p>
            "Il est recommandé à qui en a les moyens et en éprouve le besoin. Il devient une obligation si l’on sent qu’on ne peut pas s’en passer. Il devient souhaitable si l’on sent qu’on peut s’en passer mais que, quelquefois, on en éprouve un besoin passager. Il devient seulement légal si l’on sait qu’on peut s’en passer et qu’on n’en éprouve pas le besoin."
          </p>
          <p>
            "À celui qui n’est pas en mesure de se marier et qui, plus est, craint de porter préjudice à son éventuelle épouse, cela n’est pas recommandé ; il peut même lui être formellement interdit."
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gold/10 border border-gold/30 rounded-full text-gold font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:bg-gold/20 shadow-2xl"
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

      {/* Grid des Sections - Design Adapté pour 8 sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
        {sectionsMariage.map((item, idx) => (
          <motion.div
            key={item.letter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => router.push(`/partie/12/${item.letter.toLowerCase()}`)}
            className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-[280px]"
          >
            {/* Lettre en arrière-plan */}
            <span className="absolute -bottom-4 -right-2 text-[150px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.07] group-hover:-translate-y-4 group-hover:scale-110" 
                  style={{ WebkitTextStroke: '1px white' }}>
              {item.letter}
            </span>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[9px] font-bold text-gold tracking-widest">{item.letter} — SECTION</span>
                <span className="font-amiri text-2xl text-gold/40 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:gold-gradient-text transition-all leading-tight mb-4">
                {item.title}
              </h3>

              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {item.sub.map((sub, sIdx) => (
                  <li key={sIdx} className="text-white/30 text-[12px] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/30 rounded-full" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[9px] font-black uppercase tracking-tighter text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
              Explorer <span className="material-symbols-rounded text-sm">arrow_forward</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Persistante */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/11')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/12/a')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Commencer
        </button>
      </div>
    </main>
  );
}