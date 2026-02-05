'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitrePelerinage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "11") || CHAPTERS[10];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const sectionsHajj = [
    {
      letter: "A",
      title: "LE PETIT PÈLERINAGE (OUMRA)",
      subtitle: "La visite pieuse",
      ar: "العمرة",
      sub: ["Statut religieux", "Actes essentiels"]
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
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Cinquième Pilier — Chapitre XI</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              LE <span className="gold-gradient-text">PÈLERINAGE</span>
            </h1>

            {/* INTEGRAL TEXT PRESERVATION */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-justify">
              <div className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed space-y-6">
                <p>
                  "Aller à la Mecque une seule fois dans sa vie est une obligation divine pour tout musulman qui a la résistance physique nécessaire et le viatique suffisant. On entend par résistance physique le fait de n’être pas atteint d’une maladie qui l’empêche d’effectuer le pèlerinage ou que le pèlerinage est susceptible d’aggraver."
                </p>
                <p>
                  "On entend par viatique de l’argent licite et bien acquis qui ne provient pas de l’usure ni de biens d’autrui ; cet argent ne doit pas être acquis ni par charité ni par don. Cet argent doit être suffisant pour supporter tous les frais du voyage sans qu’on ait besoin de mendier ou d’importuner quiconque. De même, on doit mettre sa famille à l’abri de tout besoin, cela lui permettra de n’importuner personne. On doit honorer toutes ses dettes arrivées à échéance."
                </p>
                <p>
                  "Si l’échéance doit survenir avant le retour, on est tenu d’honorer l’engagement avant son départ ou de donner des instructions dans ce sens. Si toutes ces conditions sont réunies, le pèlerinage à la Mecque devient une obligation au même titre que la prière. Celui qui conteste cela est mécréant, qui s’en abstient délibérément et sans excuse est le dernier des impies et, s’il ne s’en repent pas jusqu’à la fin de ses jours, il sera précipité dans les feux de l’enfer."
                </p>
                <p>
                  "Le pèlerin trouvera sur place, une fois arrivé aux Lieux Saints, un guide qui l’assistera à s’acquitter de son devoir de pèlerin ; il lui dira ce qu’il devra faire et ce qu’il ne doit pas faire jusqu’à la fin du pèlerinage et les conditions requises, nous n’estimons pas nécessaire de nous étendre davantage là-dessus."
                </p>
              </div>
            </div>

            {/* AUDIO CONTROL */}
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
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-gold transition-colors">Enseignement Vocal</p>
                <p className="text-sm font-bold tracking-tight">
                  {isThisChapterPlaying ? 'Mise en pause' : 'Écouter le chapitre complet'}
                </p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        {/* GRID DES SECTIONS */}
        <div className="max-w-4xl mx-auto">
          {sectionsHajj.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => router.push(`/partie/11/${item.letter.toLowerCase()}`)}
              className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col md:flex-row items-center gap-12"
            >
              {/* LARGE BACKGROUND LETTER */}
              <span className="absolute -bottom-6 -right-4 text-[220px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.08] group-hover:-translate-y-4" 
                    style={{ WebkitTextStroke: '1px white' }}>
                {item.letter}
              </span>

              <div className="relative z-10 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold text-gold tracking-[0.3em] uppercase opacity-60">Section {item.letter}</span>
                  <span className="font-amiri text-4xl text-gold/40 group-hover:text-gold transition-colors duration-500">{item.ar}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                  {item.subtitle}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.sub.map((sub, sIdx) => (
                    <li key={sIdx} className="text-white/40 group-hover:text-white/60 text-sm flex items-center gap-3 transition-colors">
                      <span className="w-1.5 h-1.5 bg-gold/40 group-hover:bg-gold rounded-full" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap border border-gold/30 px-6 py-3 rounded-full">
                Explorer <span className="material-symbols-rounded text-base">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button 
          onClick={() => router.push('/partie/10')} 
          className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button 
          onClick={() => router.push('/partie/11/a')} 
          className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20"
        >
          Commencer
        </button>
      </nav>
    </main>
  );
}