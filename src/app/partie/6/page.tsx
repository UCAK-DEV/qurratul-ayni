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
    { letter: "A", title: "LES PRATIQUES DE LA PRIÈRE", subtitle: "L'Appel", ar: "الأذان", icon: "notifications_active", sub: ["Le Nodd : Appel à la prière","Comment appeler à la prière ?"] },
    { letter: "B", title: "LA PRIÈRE RITUELLE", subtitle: "Fondements", ar: "الصلاة", icon: "person", sub: ["Prérequis et intentions"] },
    { letter: "C", title: "LES CINQ PRIÈRES", subtitle: "Farata et Sounna", ar: "الصلوات", icon: "schedule", sub: ["Horaires et cycles"] },
    { letter: "D", title: "PRATIQUES OBLIGATOIRES", subtitle: "Cas spéciaux", ar: "فرائض", icon: "assignment", sub: ["Adaptations légales"] },
    { letter: "E", title: "PRATIQUES TRADITIONNELLES", subtitle: "Communauté", ar: "السنن", icon: "groups", sub: ["Rituels communautaires"] },
    { letter: "F", title: "LA PRIÈRE DU VENDREDI", subtitle: "Joumou'ah", ar: "صلاة الجمعة", icon: "mosque", sub: ["Précaution et rattrapage"] },
    { letter: "G", title: "PRIÈRES NON EFFECTUÉES", subtitle: "Rattrapage", ar: "قضاء", icon: "history", sub: ["Règles du rattrapage"] },
    { letter: "H", title: "LA PRIÈRE DU VOYAGEUR", subtitle: "Allègement", ar: "صلاة المسافر", icon: "flight_takeoff", sub: ["Raccourcissement (Qasr)"] },
    { letter: "I", title: "ACTES DURANT LA PRIÈRE", subtitle: "Comportement", ar: "أفعال", icon: "accessibility_new", sub: ["Méritoires et blâmables"] },
    { letter: "J", title: "PRIÈRES SURÉROGATOIRES", subtitle: "Volontaires", ar: "النوافل", icon: "auto_awesome", sub: ["La prière du witr"] },
    { letter: "K", title: "LES PRIÈRES DES FÊTES", subtitle: "Hiid", ar: "صلاة العيدين", icon: "celebration", sub: ["Célébrations annuelles"] }
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
               <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Pilier de l'Islam — As-Salah</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">LA <span className="gold-gradient-text">PRIÈRE</span></h1>
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12">
              <p className="max-w-3xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed">
                &quot;Obligation est faite à tout musulman majeur de s’acquitter des cinq (5) prières quotidiennes... Seule la démence peut dispenser de la prière...&quot;
              </p>
            </div>
            <motion.button onClick={() => isThisChapterPlaying ? togglePlay() : setChapter(chapterData)} className="group inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40">
              <span className={`material-symbols-rounded text-4xl ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>{isThisChapterPlaying ? 'pause_circle' : 'play_circle'}</span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Chapitre VI</p>
                <p className="text-sm font-bold">{isThisChapterPlaying ? 'Mise en pause' : 'Écouter le chapitre'}</p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionsPriere.map((item, idx) => (
            <motion.div key={item.letter} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} onClick={() => router.push(`/partie/6/${item.letter.toLowerCase()}`)} className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col min-h-[320px]">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-gold/80 group-hover:text-gold transition-all">
                  <span className="material-symbols-rounded text-2xl">{item.icon}</span>
                </div>
                <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors duration-500">{item.ar}</span>
              </div>
              <div className="flex-grow">
                <span className="text-[10px] font-bold text-gold tracking-[0.3em] uppercase opacity-60 mb-2 block">Section {item.letter}</span>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-1">{item.title}</h3>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{item.subtitle}</p>
                <ul className="space-y-2">
                  {item.sub.map((sub, sIdx) => sub !== "" && (
                    <li key={sIdx} className="text-white/40 group-hover:text-white/60 text-xs flex items-center gap-3"><span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full" />{sub}</li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10 mt-6 flex items-center gap-2 text-[10px] font-black uppercase text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">Ouvrir l'étude <span className="material-symbols-rounded text-sm">arrow_forward</span></div>
              <span className="absolute -bottom-8 -right-4 text-[150px] font-black opacity-[0.02] group-hover:opacity-[0.04] transition-opacity pointer-events-none select-none italic" style={{ WebkitTextStroke: '1px white' }}>{item.letter}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/5')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/a')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 transition-all shadow-lg">Commencer</button>
      </nav>
    </main>
  );
}