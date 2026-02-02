'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function EducationEnfantPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];

  const timelineSteps = [
    {
      age: "5 ans",
      title: "Les Bonnes Habitudes",
      content: "À partir de 5 (cinq) ans d’âge, on doit commencer à faire acquérir à l’enfant les bonnes habitudes comme par exemple : lui conseiller de manger avec la main droite, de se laver les parties intimes avec la main gauche, de dire bismilahi pour tout acte à accomplir, de s’abstenir d’injurier, d’éviter d’être incorrect, de lui conseiller de se moucher avec la main gauche, de fermer la bouche en bâillant, de dire alhamdou lilahi rabil halamina après chaque éternuement.",
      icon: "menu_book"
    },
    {
      age: "6 ans",
      title: "Initation et École",
      content: "Il doit être circoncis à 6 ans et envoyé à l’école (coranique).",
      icon: "school"
    },
    {
      age: "9 ans",
      title: "Pudeur et Séparation",
      content: "À neuf (9) ans, le garçon ne doit plus partager le lit de sa mère ou de sa sœur. S’il doit partager le lit avec un autre garçon, ils ne doivent pas frotter leurs corps, on devra les séparer d’une manière ou d’une autre.",
      icon: "bed"
    },
    {
      age: "12 ans",
      title: "Enseignements Religieux",
      content: "À douze (12) ans, on doit lui enseigner les obligations religieuses ainsi que les règles de la bienséance.",
      icon: "mosque"
    },
    {
      age: "13 ans",
      title: "Pratique Obligatoire",
      content: "À treize (13) ans, on doit l’obliger à prier et à jeûner, en cas de refus on doit le châtier.",
      icon: "priority_high"
    },
    {
      age: "16 ans",
      title: "Le Mariage",
      content: "À seize (16) ans, si son père a les moyens de le faire, il peut lui chercher une femme.",
      icon: "favorite"
    },
    {
      age: "18 ans",
      title: "Responsabilité Majeure",
      content: "À dix-huit (18) ans, s’il refuse de prier et de jeûner, il doit être amené auprès de l’autorité la plus proche pour être tué par « guétène ».",
      icon: "gavel"
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-[-5%] w-[50%] h-[40%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XII — Section H</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          L’ÉDUCATION <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">De l'enfant</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">تربية الأولاد</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all font-sans"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      {/* TIMELINE EDUCATION */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-12">
          {timelineSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Desktop age indicator */}
              <div className="hidden md:flex w-5/12 justify-center">
                <span className="text-4xl font-black text-gold/20 uppercase italic tracking-tighter">{step.age}</span>
              </div>

              {/* Point on timeline */}
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-[#020504] border-2 border-gold rounded-full -translate-x-1/2 z-20 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <span className="material-symbols-rounded text-gold text-xl">{step.icon}</span>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-16 md:pl-0">
                <div className="glass-card p-8 rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all group">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest mb-2 block md:hidden">{step.age}</span>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{step.title}</h3>
                  <p className="text-white/60 italic font-serif text-base leading-relaxed text-justify">
                    "{step.content}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans text-justify">
        <button 
          onClick={() => router.push('/partie/12/g')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/13')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}