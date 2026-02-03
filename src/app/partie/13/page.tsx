'use client';



import React from 'react';

import { motion } from 'framer-motion';

import { useRouter } from 'next/navigation';

import { useAudio } from '@/context/AudioContext';

import { CHAPTERS } from '@/data/chapters';



export default function ChapitreDivorce() {

  const router = useRouter();

  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();

 

  // Récupération des données du chapitre 13 (Le Divorce)

  const chapterData = CHAPTERS.find(c => c.id === "13") || CHAPTERS[12];



  const sectionsDivorce = [

    {

      letter: "A",

      title: "LA RETRAITE LÉGALE",

      ar: "العدة",

      sub: ["Définition de l'Idda", "Délais et conditions"]

    },

    {

      letter: "B",

      title: "LES CAS DE DIVORCE",

      ar: "أقسام الطلاق",

      sub: ["Fayeli (Provisoire)", "Divorce Expiatoire", "Divorce Irréversible"]

    }

  ];



  return (

    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 overflow-hidden relative font-sans">

      {/* Background Decor - Ambiance sérieuse et équilibrée */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">

        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-900/5 blur-[120px] rounded-full opacity-30" />

        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full opacity-20" />

      </div>



      <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">

        <motion.div

          initial={{ opacity: 0, y: -10 }}

          animate={{ opacity: 1, y: 0 }}

          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"

        >

          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />

          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XIII — Droit Matrimonial</span>

        </motion.div>

       

        <motion.h1

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]"

        >

          LE <span className="gold-gradient-text italic">DIVORCE</span>

        </motion.h1>



        <p className="font-amiri text-4xl md:text-6xl text-gold/80 block mb-12 drop-shadow-2xl">الطلاق</p>



        {/* Texte intégral de l'introduction - Rigueur doctrinale */}

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 0.2 }}

          className="max-w-4xl mx-auto space-y-8 text-white/60 font-serif italic text-lg md:text-xl leading-relaxed text-justify mb-16"

        >

          <div className="bg-white/[0.02] p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6">

            <p>

              "Consiste à rompre les liens du mariage. Il est préférable qu’il soit prononcé à un moment où la femme est en état de pureté, à un moment où on n’a pas eu de rapports avec elle ; il vaut mieux le prononcer une seule fois (au lieu de 3 fois), sans la ferme volonté d’en finir. C’est cela le divorce traditionnel (sunna)."

            </p>

            <p>

              "Si on procède ainsi, il sera possible de revenir sur le divorce sans avoir besoin de renouveler l’acte de mariage, et ce avant la fin de la période de retraite légale (idda). Si, par contre, la période de retraite légale est épuisée, on doit renouer le mariage après avoir versé une autre dot."

            </p>

            <p>

              "Si l’on prononce 3 fois le divorce ou une seule fois avec la ferme volonté d’en finir, alors le divorce est consommé. Dans ce cas, même après la retraite légale, on ne pourra pas remarier la femme avant qu’elle n’ait divorcé d’avec un autre homme. Ce mariage intermédiaire ne devra pas être aménagé pour permettre, après le divorce, aux premiers époux de se remarier (barsawdié)."

            </p>

            <p className="border-l-2 border-gold/30 pl-6">

              "Tout le monde devra être convaincu qu’il n’y a pas eu de tricherie, que ce second mariage et le divorce qui s’en est suivi procèdent de la volonté divine."

            </p>

            <p className="bg-red-950/20 p-6 rounded-2xl border border-red-500/10">

              "On ne peut pas divorcer une femme en période de menstrues. La charia oblige celui qui le fait à aller la chercher. Il ne pourra la répudier à nouveau que lorsqu’elle sera en état de pureté, qu’ils auront eu des rapports, que la femme se trouve à nouveau en période menstruelle et qu’elle en soit purifiée. Il lui sera alors loisible de renoncer au divorce."

            </p>

          </div>

        </motion.div>



        <motion.button

          initial={{ opacity: 0, scale: 0.9 }}

          animate={{ opacity: 1, scale: 1 }}

          whileHover={{ scale: 1.05 }}

          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}

          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:bg-gold/20 shadow-2xl"

        >

          <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

          <span className="material-symbols-rounded text-2xl text-gold relative z-10">

            {currentChapter?.id === chapterData.id && isPlaying ? 'pause' : 'play_arrow'}

          </span>

          <span className="relative z-10">

            {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter l\'enseignement'}

          </span>

        </motion.button>

      </div>



      {/* Grid des Sections */}

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

        {sectionsDivorce.map((item, idx) => (

          <motion.div

            key={item.letter}

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ delay: idx * 0.1 }}

            onClick={() => router.push(`/partie/13/${item.letter.toLowerCase()}`)}

            className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-[320px]"

          >

            {/* Lettre en arrière-plan */}

            <span className="absolute -bottom-8 -right-4 text-[200px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-6 group-hover:scale-110"

                  style={{ WebkitTextStroke: '1px white' }}>

              {item.letter}

            </span>



            <div className="relative z-10">

              <div className="flex justify-between items-start mb-6">

                <div className="flex items-center gap-3">

                   <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-black text-[10px] italic">

                     {item.letter}

                   </div>

                   <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Section</span>

                </div>

                <span className="font-amiri text-3xl text-gold/30 group-hover:text-gold transition-colors">{item.ar}</span>

              </div>

             

              <h3 className="text-2xl font-black text-white tracking-tighter group-hover:gold-gradient-text transition-all leading-tight mb-6 uppercase">

                {item.title}

              </h3>



              <ul className="space-y-3">

                {item.sub.map((sub, sIdx) => (

                  <li key={sIdx} className="text-white/40 text-[13px] flex items-center gap-2">

                    <div className="w-1 h-1 bg-gold/40 rounded-full" />

                    {sub}

                  </li>

                ))}

              </ul>

            </div>



            <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">

              Explorer <span className="material-symbols-rounded text-sm">arrow_right_alt</span>

            </div>

          </motion.div>

        ))}

      </div>



      {/* Navigation Persistante */}

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">

        <button

          onClick={() => router.push('/partie/12')}

          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"

        >

          Précédent

        </button>

        <button

          onClick={() => router.push('/partie/13/a')}

          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"

        >

          Commencer

        </button>

      </div>

    </main>

  );

}