'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreDivorce() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "13") || CHAPTERS[12];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const sectionsDivorce = [
    {
      letter: "A",
      title: "LA RETRAITE LÉGALE",
      ar: "العدة",
      icon: "hourglass_empty", // Icône de temps/attente
      sub: ["Définition de l'Idda", "Délais et conditions"]
    },
    {
      letter: "B",
      title: "LES CAS DE DIVORCE",
      ar: "أقسام الطلاق",
      icon: "gavel", // Icône de justice/décision
      sub: ["Fayeli (Provisoire)", "Divorce Expiatoire", "Irréversible"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-red-950/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <header className="max-w-4xl mx-auto text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-col items-center gap-4 mb-8">
               <span className="text-4xl font-amiri text-gold-light drop-shadow-sm">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
               <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold/30" />
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Droit Matrimonial — Chapitre XIII</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              LE <span className="gold-gradient-text italic">DIVORCE</span>
            </h1>

            {/* INTEGRAL TEXT PRESERVATION */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-justify">
              <div className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed space-y-8">
                <p>"Consiste à rompre les liens du mariage. Il est préférable qu’il soit prononcé à un moment où la femme est en état de pureté, à un moment où on n’a pas eu de rapports avec elle ; il vaut mieux le prononcer une seule fois (au lieu de 3 fois), sans la ferme volonté d’en finir. C’est cela le divorce traditionnel (sunna)."</p>
                <p>"Si on procède ainsi, il sera possible de revenir sur le divorce sans avoir besoin de renouveler l’acte de mariage, et ce avant la fin de la période de retraite légale (idda). Si, par contre, la période de retraite légale est épuisée, on doit renouer le mariage après avoir versé une autre dot."</p>
                <p>"Si l’on prononce 3 fois le divorce ou une seule fois avec la ferme volonté d’en finir, alors le divorce est consommé. Dans ce cas, même après la retraite légale, on ne pourra pas remarier la femme avant qu’elle n’ait divorcé d’avec un autre homme. Ce mariage intermédiaire ne devra pas être aménagé pour permettre, après le divorce, aux premiers époux de se remarier (barsawdié)."</p>
                <p className="border-l-2 border-gold/30 pl-8">"Tout le monde devra être convaincu qu’il n’y a pas eu de tricherie, que ce second mariage et le divorce qui s’en est suivi procèdent de la volonté divine."</p>
                <div className="p-8 rounded-[2rem] bg-red-950/10 border border-red-900/20 shadow-sm">
                  "On ne peut pas divorcer une femme en période de menstrues. La charia oblige celui qui le fait à aller la chercher. Il ne pourra la répudier à nouveau que lorsqu’elle sera en état de pureté, qu’ils auront eu des rapports, que la femme se trouve à nouveau en période menstruelle et qu’elle en soit purifiée. Il lui sera alors loisible de renoncer au divorce."
                </div>
              </div>
            </div>

            {/* AUDIO CONTROL */}
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => isThisChapterPlaying ? togglePlay() : setChapter(chapterData)} className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl">
              <span className={`material-symbols-rounded text-4xl ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>{isThisChapterPlaying ? 'pause_circle' : 'play_circle'}</span>
              <div className="text-left"><p className="text-[10px] uppercase tracking-widest text-white/40">Écouter la leçon</p><p className="text-sm font-bold">{isThisChapterPlaying ? 'Pause Audio' : 'Démarrer l\'enseignement'}</p></div>
            </motion.button>
          </motion.div>
        </header>

        {/* GRID DES SECTIONS */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectionsDivorce.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => router.push(`/partie/13/${item.letter.toLowerCase()}`)}
              className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden h-[340px] flex flex-col justify-between"
            >
              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="p-4 rounded-2xl bg-gold/10 border border-gold/20 text-gold group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/5">
                  <span className="material-symbols-rounded text-3xl">{item.icon}</span>
                </div>
                <span className="font-amiri text-4xl text-gold/40 group-hover:text-gold transition-colors duration-500">{item.ar}</span>
              </div>
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-gold tracking-widest uppercase opacity-60">Section {item.letter}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.sub.map((sub, sIdx) => (
                    <li key={sIdx} className="text-white/40 group-hover:text-white/60 text-sm flex items-center gap-3 transition-colors">
                      <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="absolute -bottom-8 -right-4 text-[220px] font-black opacity-[0.02] group-hover:opacity-[0.05] transition-all italic pointer-events-none" style={{ WebkitTextStroke: '1px white' }}>{item.letter}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/12')} className="px-8 py-3 rounded-full text-[10px] uppercase font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/13/a')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase font-black hover:scale-105 active:scale-95 transition-all shadow-lg">Commencer</button>
      </nav>
    </main>
  );
}