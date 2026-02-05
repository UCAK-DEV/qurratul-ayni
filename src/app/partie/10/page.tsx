'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreRamadan() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "10") || CHAPTERS[9];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const sectionsRamadan = [
    {
      letter: "A",
      title: "QU’EST-CE QUE LE JEÛNE ?",
      subtitle: "Définition et essence",
      ar: "ما هو الصوم؟",
      icon: "dark_mode", // Icône de lune/nuit
      sub: ["Nature de l'abstinence", "Intention (Niyyah)"]
    },
    {
      letter: "B",
      title: "QUI DOIT JEÛNER ?",
      subtitle: "Les conditions d'obligation",
      ar: "من يجب عليه الصوم؟",
      icon: "person_check", // Icône d'éligibilité
      sub: ["Majeurs et responsables", "Cas des voyageurs"]
    },
    {
      letter: "C",
      title: "ACTES BLAMABLES",
      subtitle: "Précautions rituelles",
      ar: "المكروهات",
      icon: "error_outline", // Icône d'avertissement
      sub: ["Comportements à éviter", "Préservation du jeûne"]
    },
    {
      letter: "D",
      title: "PETIT DÉJEUNER DE L’AUBE",
      subtitle: "Le repas du « Kheude »",
      ar: "السحور",
      icon: "restaurant", // Icône de repas
      sub: ["Mérites du repas", "Limites temporelles"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-emerald-900/10 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="max-w-4xl mx-auto text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-col items-center gap-4 mb-8">
               <span className="text-4xl font-amiri text-gold-light drop-shadow-sm">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
               <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold/30" />
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Quatrième Pilier — Chapitre X</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              LE MOIS DE <br /><span className="gold-gradient-text">RAMADAN</span>
            </h1>

            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-justify">
              <div className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed space-y-6">
                <p>"L’observation du jeûne pendant ce mois est une obligation divine pour toute personne majeure. Celui qui le conteste est un mécréant. Qui s’y refuse est un impie, s’il le fait exprès, sans empêchement. S’il ne s’en repent pas jusqu’à sa mort, il sera précipité dans les feux de l’enfer."</p>
                <p>"Le jeûne doit commencer si l’on aperçoit effectivement le croissant lunaire le vingt-neuvième (29e) jour du mois de « barakhlou »..."</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => isThisChapterPlaying ? togglePlay() : setChapter(chapterData)}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl"
            >
              <span className={`material-symbols-rounded text-4xl ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>
                {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
              </span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-white/40">Écouter la leçon</p>
                <p className="text-sm font-bold">{isThisChapterPlaying ? 'Mise en pause' : 'Démarrer l\'audio'}</p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sectionsRamadan.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => router.push(`/partie/10/${item.letter.toLowerCase()}`)}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden min-h-[320px] flex flex-col justify-between"
            >
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-gold group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-rounded text-3xl">{item.icon}</span>
                </div>
                <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-bold text-gold tracking-widest uppercase opacity-60">Section {item.letter}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-4">{item.title}</h3>
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
        <button onClick={() => router.push('/partie/9')} className="px-8 py-3 rounded-full text-[10px] font-bold text-white/50 hover:text-white transition-all uppercase">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/10/a')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] font-black hover:scale-105 transition-all shadow-lg uppercase">Commencer</button>
      </nav>
    </main>
  );
}