'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitrePelerinage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 11 (Le Pèlerinage)
  const chapterData = CHAPTERS.find(c => c.id === "11") || CHAPTERS[10];

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
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 overflow-hidden relative font-sans">
      {/* Effets de lumière et décoration de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          className="text-gold tracking-[0.8em] text-[10px] uppercase font-bold mb-6 block"
        >
          Cinquième Pilier — Fiqh
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]"
        >
          LE PÈLERINAGE À <br /><span className="gold-gradient-text text-4xl md:text-7xl italic">LA MECQUE</span>
        </motion.h1>

        {/* Texte intégral de l'introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6 text-white/50 font-serif italic text-lg leading-relaxed text-justify mb-12 bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/5"
        >
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

      {/* Grid des Sections */}
      <div className="max-w-4xl mx-auto relative z-10">
        {sectionsHajj.map((item, idx) => (
          <motion.div
            key={item.letter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => router.push(`/partie/11/${item.letter.toLowerCase()}`)}
            className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col md:flex-row items-center gap-8"
          >
            {/* Lettre en arrière-plan */}
            <span className="absolute -bottom-4 -right-2 text-[180px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.07] group-hover:-translate-y-4 group-hover:scale-110" 
                  style={{ WebkitTextStroke: '1px white' }}>
              {item.letter}
            </span>

            <div className="relative z-10 flex-1">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-gold tracking-widest">{item.letter} — SECTION</span>
                <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>
              
              <h3 className="text-3xl font-black text-white tracking-tight group-hover:gold-gradient-text transition-all mb-2">
                {item.title}
              </h3>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
                {item.subtitle}
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.sub.map((sub, sIdx) => (
                  <li key={sIdx} className="text-white/40 text-[14px] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold/40 rounded-full" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex items-center gap-3 text-[11px] font-black uppercase tracking-tighter text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap">
              Explorer <span className="material-symbols-rounded text-xl">arrow_right_alt</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Persistante */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/10')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/11/a')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Commencer
        </button>
      </div>
    </main>
  );
}