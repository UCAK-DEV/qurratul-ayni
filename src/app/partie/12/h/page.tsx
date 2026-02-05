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
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const timelineSteps = [
    {
      age: "5 ans",
      title: "Les Bonnes Habitudes",
      content: "À partir de 5 (cinq) ans d’âge, on doit commencer à faire acquérir à l’enfant les bonnes habitudes comme par exemple : lui conseiller de manger avec la main droite, de se laver les parties intimes avec la main gauche, de dire bismilahi pour tout acte à accomplir, de s’abstenir d’injurier, d’éviter d’être incorrect, de lui conseiller de se moucher avec la main gauche, de fermer la bouche en bâillant, de dire alhamdou lilahi rabil halamina après chaque éternuement.",
      icon: "auto_awesome"
    },
    {
      age: "6 ans",
      title: "Initiation et École",
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
      icon: "menu_book"
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
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XII — Section H</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              L’ÉDUCATION <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">de l'enfant</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">تربية الأولاد</p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAudioAction}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-20' : 'opacity-0'}`} />
              <span className="material-symbols-rounded text-4xl relative z-10 text-gold">
                {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
              </span>
              <span className="text-sm font-bold tracking-tight relative z-10 italic font-serif">
                {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
              </span>
            </motion.button>
          </motion.div>
        </header>

        {/* TIMELINE SECTION */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-24">
            {timelineSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Age Circle Background */}
                <div className="hidden md:flex w-5/12 justify-center">
                  <span className="text-6xl font-black text-white/[0.03] italic tracking-tighter select-none">{step.age}</span>
                </div>

                {/* Center Icon Node */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-[#010302] border-2 border-gold rounded-full -translate-x-1/2 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <span className="material-symbols-rounded text-gold text-2xl">{step.icon}</span>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all shadow-sm group"
                  >
                    <span className="text-gold font-black text-[10px] uppercase tracking-[0.2em] mb-3 block">{step.age}</span>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{step.title}</h3>
                    <p className="text-white/60 italic font-serif text-lg leading-relaxed text-justify">
                      &quot;{step.content}&quot;
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/12/g')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/13')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre XIII</button>
      </nav>
    </main>
  );
}