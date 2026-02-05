'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PurificationLavageComplet() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[4];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sectionsIntro = [
    {
      fr: "Parmi les différentes sortes de purification, la plus importante est celle du corps (janâba) lorsqu’elle s’impose. Toute personne majeure doit se purifier chaque fois que de besoin. Celui qui nie cette obligation est un mécréant ; celui qui s’y refuse consciemment sans motif valable est un impie et n’a aucune crédibilité. S’il ne s’en repent pas, il sera précipité dans les feux de l’enfer."
    }
  ];

  const raisonsPurification = [
    { fr: "1° L’éjaculation : consécutive à un grand plaisir ressenti à l’état de veille ou de sommeil. Celui qui constate du sperme sur ses habits après le réveil, sans s’être aperçu de son écoulement, doit se purifier et reprendre toutes les prières accomplies avant cette constatation. Celui qui découvre après son réveil des taches suspectes sur son corps ou sur ses habits doit se purifier et reprendre toutes les prières antérieures à cette constatation." },
    { fr: "2° Rapports sexuels : après les rapports sexuels, les deux personnes majeures doivent se purifier même s’il n’y a pas eu éjaculation. - Si l’acte concerne un homme majeur et une mineure, la purification est obligatoire pour l’homme. - Si la femme est majeure, la purification ne s’impose pas en l’absence de sécrétion. - Pour la personner mineure, la purification demeure méritoire dans les deux cas." },
    { fr: "3° Menstrues : une femme en période menstruelle doit se purifier après l’arrêt du saignement, quelle qu’en soit la quantité." },
    { fr: "4° Accouchement : la purification est obligatoire en cas d’accouchement, même si celui-ci n’est pas accompagné de saignement." }
  ];

  const procedureLavage = [
    "Se procurer de l’eau exempte de toute souillure, incolore, inodore et sans saveur.",
    "Se mettre dans un endroit décent et propre, se tourner vers l’Est (Kaaba) et dire « Bismillahi ».",
    "Se laver la main droite jusqu’au poignet trois fois.",
    "Puis laver la main gauche de la même façon.",
    "Laver les parties souillées.",
    "Laver proprement le sexe et formuler intérieurement l’intention de se purifier conformément aux recommandations divines.",
    "Procéder à l’ablution complète en retardant le lavage des pieds.",
    "Prendre de l’eau dans les mains et la passer sur les cheveux de la nuque vers le front.",
    "Se laver la tête trois fois en veillant à faire pénétrer l’eau partout.",
    "Laver les deux oreilles intérieurement et extérieurement en commençant par la droite.",
    "Laver la nuque et le cou.",
    "Laver le côté droit du corps de l’épaule jusqu’au genou.",
    "Procéder de la même manière pour le côté gauche.",
    "Se laver entièrement le dos.",
    "Laver la poitrine et le ventre.",
    "Enfin, laver les deux pieds jusqu’aux chevilles."
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre V — Section A</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
            LA PURIFICATION <br /> <span className="gold-gradient-text italic font-serif lowercase">du corps</span>
          </h1>
          <p className="text-3xl font-amiri text-gold-light mb-10">الغسل</p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAudioAction}
            className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl"
          >
            <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-20' : 'opacity-0'}`} />
            <span className="material-symbols-rounded text-4xl relative z-10 text-gold">
              {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
            </span>
            <span className="text-sm font-bold tracking-tight relative z-10 italic font-serif">
              {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
            </span>
          </motion.button>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto space-y-32 relative z-10">
        
        {/* INTRODUCTION */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="border-l border-gold/20 pl-8 md:pl-16">
          {sectionsIntro.map((item, i) => (
            <p key={i} className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic">&quot;{item.fr}&quot;</p>
          ))}
        </motion.section>

        {/* RAISONS D'UNE PURIFICATION */}
        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Raisons d'une purification</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
            <span className="text-xl font-amiri text-gold/40">موجبات الغسل</span>
          </div>
          <div className="grid gap-6">
            {raisonsPurification.map((item, idx) => (
              <motion.div key={idx} className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all font-serif italic text-lg text-white/70 leading-relaxed">
                {item.fr}
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCÉDURE ÉTAPE PAR ÉTAPE */}
        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Comment se purifier ?</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
            <span className="text-xl font-amiri text-gold/40">كيفية الغسل</span>
          </div>
          <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.01] border border-white/5">
            <div className="space-y-8">
              {procedureLavage.map((step, idx) => (
                <div key={idx} className="flex gap-8 group border-b border-white/5 pb-8 last:border-0">
                  <span className="text-gold font-black opacity-20 text-4xl leading-none">{(idx + 1).toString().padStart(2, '0')}</span>
                  <p className="text-lg md:text-xl text-white/70 group-hover:text-white transition-colors font-serif italic leading-relaxed tracking-tight">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OBLIGATIONS (FARATA) ET TRADITIONS (SOUNA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-12 rounded-[3rem] bg-emerald-500/[0.02] border border-emerald-500/20 space-y-8">
            <div className="flex justify-between items-center border-b border-emerald-500/10 pb-4">
              <h3 className="text-emerald-500 font-black text-[10px] uppercase tracking-widest">Les Obligations (Farata)</h3>
              <span className="font-amiri text-2xl text-emerald-500/50">الفراض</span>
            </div>
            <ul className="space-y-6 text-white/60 font-serif italic text-lg leading-snug">
              <li>1. Formuler intérieurement l’intention</li>
              <li>2. L’observance de l’ordre indiqué</li>
              <li>3. Mouiller le corps intégralement</li>
              <li>4. Se rincer le corps avec la main si possible</li>
              <li>5. Mouiller la tête jusqu’au cuir chevelu</li>
            </ul>
          </div>

          <div className="p-12 rounded-[3rem] bg-gold/[0.02] border border-gold/20 space-y-8">
            <div className="flex justify-between items-center border-b border-gold/10 pb-4">
              <h3 className="text-gold font-black text-[10px] uppercase tracking-widest">Les Traditions (Souna)</h3>
              <span className="font-amiri text-2xl text-gold/50">السنن</span>
            </div>
            <ul className="space-y-6 text-white/60 font-serif italic text-lg leading-snug">
              <li>1. Commencer par laver les mains</li>
              <li>2. Se rincer la bouche</li>
              <li>3. Faire pénétrer l’eau dans les narines</li>
              <li>4. Faire sortir l’eau en soufflant</li>
              <li>5. Faire passer l’eau par les oreilles</li>
            </ul>
          </div>
        </div>

        {/* NOTES FINALES */}
        <section className="grid gap-6">
          <div className="p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 font-serif italic text-lg text-white/70 leading-relaxed text-center">
            &quot;S’il s’agit de la purification en vue de la prière du vendredi, les pieds doivent être lavés au moment de l’ablution.&quot;
          </div>
        </section>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/5')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Sommaire V</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/5/b')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}