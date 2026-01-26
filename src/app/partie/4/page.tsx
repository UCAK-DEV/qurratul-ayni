'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreProphete() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 4
  const chapterData = CHAPTERS.find(c => c.id === "4") || CHAPTERS[3];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  // Contenu basé sur le texte fourni
  const contenuIntegral = [
    {
      fr: "Notre Prophète Mouhammadou Rassoû Loulahi (PSL), Service de Dieu, est son Messager qu’il a envoyé auprès de tout le monde.",
      ar: "نبينا محمد رسول الله صلى الله عليه وسلم، عبد الله ورسوله الذي أرسله إلى العالمين كافة."
    },
    {
      fr: "Tout ce qu’il dit, tout ce qu’il fait est conforme aux instructions divines.",
      ar: "كل ما يقوله وكل ما يفعله مطابق للوحي الإلهي."
    },
    {
      fr: "Celui qui en conteste une partie, si petite soit-elle, est un mécréant. Qui en retranche ou en rajoute tant soit peu est digne du plus grand mépris.",
      ar: "من أنكر شيئاً منه، ولو كان يسيراً، فقد كفر. ومن نقص منه أو زاد فيه فهو مستحق لأشد المقت."
    },
    {
      fr: "S’il ne s’en repent pas, il sera précipité dans les feux de l’enfer. L’objet de sa mission est de nous révéler que nous devons nous soumettre à ses recommandations.",
      ar: "وإن لم يتب، فسيرمى في نار جهنم. إن الغرض من بعثته هو تعليمنا وجوب الانقياد لتوصياته."
    },
    {
      fr: "La plus importante parmi celles-ci est la prière (cinq fois par jour).",
      ar: "وأهم هذه التوصيات هي الصلاة (خمس مرات في اليوم)."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-16 md:pt-28 pb-48 px-4 md:px-6">
      
      {/* HEADER SECTION - Adapté Nest Hub & Mobile */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-gold tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px] uppercase font-black mb-4 block"
        >
          Khouratoul Ayni — Chapitre IV
        </motion.span>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-6xl font-bold bg-gradient-to-b from-gold-light to-gold bg-clip-text text-transparent leading-tight mb-8"
        >
          MOUHAMMADOUNE RASSOUL LOULAHI <br/>
          <span className="font-amiri text-2xl md:text-4xl opacity-80">(محمد رسول الله)</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-8 py-4 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all hover:bg-gold/20"
        >
          <span className="material-symbols-rounded text-3xl">
            {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      {/* LISTE DES ENSEIGNEMENTS BILINGUES */}
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-10">
        {contenuIntegral.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-5%" }} 
            className="glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/5 hover:border-gold/20 transition-all duration-500 shadow-xl"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
              
              {/* Texte Arabe */}
              <div className="w-full md:w-1/2 text-right order-1 md:order-2" dir="rtl">
                <p className="text-xl md:text-3xl font-amiri text-gold-light leading-[1.6] md:leading-[1.8]">
                  {item.ar}
                </p>
              </div>
              
              {/* Séparateur */}
              <div className="hidden md:block w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/20 to-transparent order-2" />
              <div className="md:hidden w-1/3 h-[1px] bg-gold/10 order-2" />
              
              {/* Texte Français */}
              <div className="w-full md:w-1/2 text-left order-3 md:order-1 border-l-2 md:border-l-0 border-gold/10 pl-4 md:pl-0">
                <p className="text-base md:text-lg text-white/60 font-serif leading-relaxed italic">
                  "{item.fr}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* NAVIGATION */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[90%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/3')} 
          className="flex-1 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/5')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-lg hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}