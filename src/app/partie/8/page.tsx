'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreLeMort() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "8") || CHAPTERS[7];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const sectionsMort = [
    { letter: "A", title: "LE LAVAGE MORTUAIRE", subtitle: "Purification", ar: "غسل الميت", icon: "opacity", sub: ["Procédure complète", "Précautions rituelles"] },
    { letter: "B", title: "LA PRIÈRE MORTUAIRE", subtitle: "Janāzah", ar: "صلاة الجنازة", icon: "church", sub: ["15 cas de figures", "Règles des retardataires"] },
    { letter: "C", title: "L’INHUMATION", subtitle: "Mise en terre", ar: "الدفن", icon: "account_balance_wallet", sub: ["Dimensions de la tombe", "Introduction du corps"] },
    { letter: "D", title: "PRIÈRES ET CONDOLÉANCES", subtitle: "Ziarra", ar: "الدعاء والتعزية", icon: "volunteer_activism", sub: ["Visite des cimetières", "Invocations de soutien"] }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="max-w-4xl mx-auto text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-col items-center gap-4 mb-8">
               <span className="text-4xl font-amiri text-gold-light">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
               <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Khouratoul Ayni — Chapitre VIII</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-12">LE <span className="gold-gradient-text">MORT</span></h1>
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12">
              <p className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed text-justify">
                &quot;S’il s’éteint et que ses yeux restent ouverts, les lui fermer en prononçant ceci : « Bismilahi wa ala mil lati rassolilahi... ». Il convient d’immobiliser la mâchoire de manière à empêcher la bouche de béer. On doit payer rapidement ses dettes et exécuter ses dernières volontés...&quot;
              </p>
            </div>
            <motion.button onClick={() => isThisChapterPlaying ? togglePlay() : setChapter(chapterData)} className="group inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl shadow-2xl transition-all">
              <span className={`material-symbols-rounded text-4xl ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>{isThisChapterPlaying ? 'pause_circle' : 'play_circle'}</span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Chapitre VIII</p>
                <p className="text-sm font-bold">{isThisChapterPlaying ? 'Pause en cours' : 'Écouter l\'audio'}</p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sectionsMort.map((item, idx) => (
            <motion.div key={item.letter} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} onClick={() => router.push(`/partie/8/${item.letter.toLowerCase()}`)} className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden min-h-[320px] flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-gold group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-rounded text-3xl">{item.icon}</span>
                </div>
                <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-gold tracking-[0.3em] uppercase opacity-60">Section {item.letter}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-2">{item.title}</h3>
                <ul className="space-y-2">
                  {item.sub.map((sub, sIdx) => (
                    <li key={sIdx} className="text-white/40 group-hover:text-white/60 text-sm flex items-center gap-3"><span className="w-1 h-1 bg-gold/40 rounded-full" />{sub}</li>
                  ))}
                </ul>
              </div>
              <span className="absolute -bottom-10 -right-4 text-[200px] font-black opacity-[0.02] pointer-events-none select-none italic" style={{ WebkitTextStroke: '1px white' }}>{item.letter}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/7')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/8/a')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-lg">Commencer</button>
      </nav>
    </main>
  );
}