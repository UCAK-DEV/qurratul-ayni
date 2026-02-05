'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreMariage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const sectionsMariage = [
    { letter: "A", title: "LES OBLIGATIONS", ar: "الواجبات", icon: "how_to_reg", sub: ["Conditions de validité", "Dot et consentement"] },
    { letter: "B", title: "LA CÉLÉBRATION", ar: "الاحتفال بالزواج", icon: "loyalty", sub: ["Formalités rituelles", "Sunna de la cérémonie"] },
    { letter: "C", title: "L’ACTE CONJUGAL", ar: "الجماع", icon: "favorite", sub: ["Éthique et invocations", "Droits respectifs"] },
    { letter: "D", title: "LA FEMME ENCEINTE", ar: "المرأة الحامل", icon: "pregnant_woman", sub: ["Précautions à prendre", "Santé et spiritualité"] },
    { letter: "E", title: "LE BAPTÊME", ar: "العقيقة", icon: "child_care", sub: ["Le nom de l'enfant", "Sacrifice et mérites"] },
    { letter: "F", title: "REMÈDES POUR L’ENFANT", ar: "علاجات الطفل", icon: "medical_services", sub: ["Maux d'oreilles", "Gadam", "Digestion"] },
    { letter: "G", title: "LE SEVRAGE", ar: "الفطام", icon: "styler", sub: ["Période et transition", "Bien-être de l'enfant"] },
    { letter: "H", title: "L’ÉDUCATION", ar: "تربية الطفل", icon: "school", sub: ["Valeurs islamiques", "Responsabilité"] }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-emerald-900/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <header className="max-w-4xl mx-auto text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-col items-center gap-4 mb-8">
               <span className="text-4xl font-amiri text-gold-light drop-shadow-sm">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
               <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold/30" />
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Vie Sociale — Chapitre XII</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              LE <span className="gold-gradient-text">MARIAGE</span>
            </h1>

            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-justify">
              <div className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed space-y-6">
                <p>"Il est recommandé à qui en a les moyens et en éprouve le besoin. Il devient une obligation si l’on sent qu’on ne peut pas s’en passer. Il devient souhaitable si l’on sent qu’on peut s’en passer mais que, quelquefois, on en éprouve un besoin passager. Il devient seulement légal si l’on sait qu’on peut s’en passer et qu’on n’en éprouve pas le besoin."</p>
                <p>"À celui qui n’est pas en mesure de se marier et qui, plus est, craint de porter préjudice à son éventuelle épouse, cela n’est pas recommandé ; il peut même lui être formellement interdit."</p>
              </div>
            </div>

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => isThisChapterPlaying ? togglePlay() : setChapter(chapterData)} className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl">
              <span className={`material-symbols-rounded text-4xl ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>{isThisChapterPlaying ? 'pause_circle' : 'play_circle'}</span>
              <div className="text-left"><p className="text-[10px] uppercase tracking-widest text-white/40">Écouter la leçon</p><p className="text-sm font-bold">{isThisChapterPlaying ? 'Pause en cours' : 'Démarrer l\'audio'}</p></div>
            </motion.button>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionsMariage.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => router.push(`/partie/12/${item.letter.toLowerCase()}`)}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden min-h-[280px] flex flex-col justify-between"
            >
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-gold/10 border border-gold/20 text-gold group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/5">
                  <span className="material-symbols-rounded text-3xl">{item.icon}</span>
                </div>
                <span className="font-amiri text-4xl text-gold/40 group-hover:text-gold transition-colors duration-500">{item.ar}</span>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-bold text-gold tracking-widest uppercase opacity-60">Section {item.letter}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-4 leading-tight">{item.title}</h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {item.sub.map((sub, sIdx) => (
                    <li key={sIdx} className="text-white/40 group-hover:text-white/60 text-xs flex items-center gap-2 transition-colors">
                      <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="absolute -bottom-6 -right-4 text-[200px] font-black leading-none select-none pointer-events-none opacity-[0.02] group-hover:opacity-[0.06] transition-all italic" style={{ WebkitTextStroke: '1px white' }}>{item.letter}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/11')} className="px-8 py-3 rounded-full text-[10px] uppercase font-bold text-white/50 hover:text-white">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/12/a')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase font-black hover:scale-105 transition-all shadow-lg">Commencer</button>
      </nav>
    </main>
  );
}