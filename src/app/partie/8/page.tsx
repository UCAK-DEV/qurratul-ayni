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

  const sectionsMort = [
    {
      letter: "A",
      title: "LE LAVAGE MORTUAIRE",
      subtitle: "Dernière purification",
      ar: "غسل الميت",
      sub: ["Procédure complète", "Précautions rituelles"]
    },
    {
      letter: "B",
      title: "LA PRIÈRE MORTUAIRE",
      subtitle: "Salât al-Janāzah",
      ar: "صلاة الجنازة",
      sub: ["15 cas de figures", "Règles des retardataires"]
    },
    {
      letter: "C",
      title: "L’INHUMATION",
      subtitle: "La mise en terre",
      ar: "الدفن",
      sub: ["Dimensions de la tombe", "Introduction du corps", "Recommandations"]
    },
    {
      letter: "D",
      title: "PRIÈRES ET CONDOLÉANCES",
      subtitle: "Accompagnement",
      ar: "الدعاء والتعزية",
      sub: ["Visite des cimetières", "Ziarra"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 overflow-hidden relative">
      {/* Décoration de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
        <motion.span className="text-gold tracking-[0.8em] text-[10px] uppercase font-bold mb-6 block opacity-80">
          Section Pratique — Fiqh
        </motion.span>
        
        <motion.h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
          LE <span className="gold-gradient-text">MORT</span>
        </motion.h1>

        <motion.p className="max-w-2xl mx-auto text-white/40 font-serif italic text-lg mb-12">
          "S’il s’éteint et que ses yeux
            restent ouverts, les lui fermer en prononçant ceci : « Bismilahi wa ala mil lati
            rassolilahi salalahou tanhala aleyhi wa salama alahouma yassir aleyhi
            amradou wa sahhil aleyhi mawtahou wa asidho bilikhâika wadjhal
            makharadja ileyhi khaïrane mine mâ kharadja minehou bifadlika wa
            rahmatika ya argamar râhimina ». Il convient d’immobiliser la mâchoire de
            manière à empêcher la bouche de béer. Il est aussi recommandé d’assouplir les
            doigts et les articulations en les pliant et en les dépliant. On doit enlever les
            habits qu’il portait et le couvrir d’une étoffe légère.<br />

            Au moment où il s’éteint, aucune de ses parties intimes ou de celles de son
            entourage ne doit être laissée découverte. On doit l’étendre sur quelque chose,
            mais non à même le sol ; ce sur quoi on l’étend ne doit pas être recouvert d’un
            drap. Il est recommandé de poser sur son ventre quelque chose d’un peu lourd ;
            il est recommandé à ceux qui sont présents de demander le pardon de Dieu en sa
            faveur ainsi que Sa miséricorde et de souhaiter mourir dans l’islam ; d’en
            informer la population aussitôt qu’il meurt, ne pas confier cette mission à un
            crieur public.<br />

            On doit payer rapidement ses dettes et exécuter ses dernières volontés, demander
            pardon de sa part à ses voisins et à ses proches. On doit également le laver s’il
            était né vivant ; s’il s’agit d’un mort-né, on ne le lave pas, on ne prie pas sur son
            corps, mais on doit le couvrir, on doit enlever les taches de sang avant de
            l’enterrer. La toilette funèbre (le lavage du mort) s’effectue exactement de la
            même manière que la purification ou « djanaba ». Cependant, avant d’y procéder,
            on doit d’abord lui laver tout le corps afin de le rendre absolument propre.<br />

            Pour cela, il faut chercher des feuilles de jujubier, les malaxer dans de l’eau de
            manière à obtenir une solution ; à défaut de ces feuilles, on peut utiliser le
            savon. Au moment de cette opération, on doit lui presser le ventre afin d’en faire
            sortir tout ce qui peut sortir."
        </motion.p>

        <motion.button
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white/[0.03] border border-white/10 rounded-full text-white font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:border-gold/50"
        >
          <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="material-symbols-rounded text-2xl text-gold relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause' : 'play_arrow'}
          </span>
          <span className="relative z-10">{currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter le chapitre'}</span>
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
        {sectionsMort.map((item, idx) => (
          <motion.div
            key={item.letter}
            onClick={() => router.push(`/partie/8/${item.letter.toLowerCase()}`)}
            className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden h-[320px] flex flex-col justify-between"
          >
            <span className="absolute -bottom-4 -right-2 text-[180px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.07] group-hover:-translate-y-4 group-hover:scale-110" 
                  style={{ WebkitTextStroke: '1px white' }}>
              {item.letter}
            </span>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-gold tracking-widest">{item.letter} — SECTION</span>
                <span className="font-amiri text-2xl text-gold/40 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:gold-gradient-text transition-all leading-tight">
                {item.title}
              </h3>
              <p className="text-white/30 text-[10px] font-medium uppercase tracking-widest mt-1 mb-6">
                {item.subtitle}
              </p>

              <ul className="space-y-2">
                {item.sub.map((sub, sIdx) => (
                  <li key={sIdx} className="text-white/40 text-[13px] flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/40 rounded-full" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
              Explorer <span className="material-symbols-rounded text-sm">arrow_forward</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Persistante */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button onClick={() => router.push('/partie/7')} className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <button onClick={() => router.push('/partie/8/a')} className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-lg hover:scale-105 transition-all">Commencer</button>
      </div>
    </main>
  );
}