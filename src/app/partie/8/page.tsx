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
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Khouratoul Ayni — Chapitre VIII</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              LE <span className="gold-gradient-text">MORT</span>
            </h1>

            {/* INTEGRAL TEXT PRESERVATION */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-justify">
              <p className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed space-y-6">
                &quot;S’il s’éteint et que ses yeux restent ouverts, les lui fermer en prononçant ceci : « Bismilahi wa ala mil lati rassolilahi salalahou tanhala aleyhi wa salama alahouma yassir aleyhi amradou wa sahhil aleyhi mawtahou wa asidho bilikhâika wadjhal makharadja ileyhi khaïrane mine mâ kharadja minehou bifadlika wa rahmatika ya argamar râhimina ». Il convient d’immobiliser la mâchoire de manière à empêcher la bouche de béer. Il est aussi recommandé d’assouplir les doigts et les articulations en les pliant et en les dépliant. On doit enlever les habits qu’il portait et le couvrir d’une étoffe légère.
                <br /><br />
                Au moment où il s’éteint, aucune de ses parties intimes ou de celles de son entourage ne doit être laissée découverte. On doit l’étendre sur quelque chose, mais non à même le sol ; ce sur quoi on l’étend ne doit pas être recouvert d’un drap. Il est recommandé de poser sur son ventre quelque chose d’un peu lourd ; il est recommandé à ceux qui sont présents de demander le pardon de Dieu en sa faveur ainsi que Sa miséricorde et de souhaiter mourir dans l’islam ; d’en informer la population aussitôt qu’il meurt, ne pas confier cette mission à un crieur public.
                <br /><br />
                On doit payer rapidement ses dettes et exécuter ses dernières volontés, demander pardon de sa part à ses voisins et à ses proches. On doit également le laver s’il était né vivant ; s’il s’agit d’un mort-né, on ne le lave pas, on ne prie pas sur son corps, mais on doit le couvrir, on doit enlever les taches de sang avant de l’enterrer. La toilette funèbre (le lavage du mort) s’effectue exactement de la même manière que la purification ou « djanaba ». Cependant, avant d’y procéder, on doit d’abord lui laver tout le corps afin de le rendre absolument propre.
                <br /><br />
                Pour cela, il faut chercher des feuilles de jujubier, les malaxer dans de l’eau de manière à obtenir une solution ; à défaut de ces feuilles, on peut utiliser le savon. Au moment de cette opération, on doit lui presser le ventre afin d’en faire sortir tout ce qui peut sortir.&quot;
              </p>
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
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-gold transition-colors">Chapitre VIII</p>
                <p className="text-sm font-bold tracking-tight">
                  {isThisChapterPlaying ? 'Pause en cours' : 'Écouter le chapitre complet'}
                </p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        {/* GRID DES SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionsMort.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => router.push(`/partie/8/${item.letter.toLowerCase()}`)}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden h-[340px] flex flex-col justify-between"
            >
              {/* LARGE BACKGROUND LETTER */}
              <span className="absolute -bottom-6 -right-4 text-[200px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.08] group-hover:-translate-y-4" 
                    style={{ WebkitTextStroke: '1px white' }}>
                {item.letter}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold text-gold tracking-[0.3em] uppercase opacity-60">Section {item.letter}</span>
                  <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors duration-500">{item.ar}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                  {item.subtitle}
                </p>

                <ul className="space-y-3">
                  {item.sub.map((sub, sIdx) => (
                    <li key={sIdx} className="text-white/40 group-hover:text-white/60 text-sm flex items-center gap-3 transition-colors">
                      <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Ouvrir l'étude <span className="material-symbols-rounded text-sm">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button 
          onClick={() => router.push('/partie/7')} 
          className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button 
          onClick={() => router.push('/partie/8/a')} 
          className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20"
        >
          Commencer
        </button>
      </nav>
    </main>
  );
}