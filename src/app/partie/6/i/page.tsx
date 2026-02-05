'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ActesDurantPriere() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "6") || CHAPTERS[5];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section I</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              DE CERTAINS ACTES <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">durant la prière</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">أفعال الصلاة</p>

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
        </header>

        <div className="space-y-32">
          
          {/* 1. CERTAINS ACTES BLÂMABLES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-red-400 uppercase tracking-[0.3em]">Certains actes blâmables</h2>
              <div className="h-[1px] flex-1 bg-red-500/20" />
              <span className="text-xl font-amiri text-red-400/60">المكروهات</span>
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-red-950/[0.03] border border-red-900/20 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-red-500/[0.02] pointer-events-none group-hover:text-red-500/[0.04] transition-colors">!</span>
              <div className="max-w-4xl relative z-10">
                <p className="text-lg md:text-2xl text-white/80 font-serif leading-relaxed italic border-l-2 border-red-500/30 pl-8">
                  &quot;Il est blâmable (sip) de prononcer les formules « ahonzou billahi mina cheytânir radjîmi » et « bismilahir rahmânir rahîmi » dans une prière surérogatoire. Il est blâmable de se prosterner sur un turban enroulé ou sur la manche d’un vêtement si l’on n’a pas d’empêchement. De même, il est blâmable de prier avec quelque chose dans la bouche ou d’avoir noué quelque chose à la manche de son vêtement, ou de réciter du Coran lors d’une génuflexion, de faire des souhaits ou de penser à une chose qui ne nous rapproche pas de Dieu, de jouer avec sa barbe ou sa bague, de regarder à gauche et à droite, de prendre la position de quelqu’un qui appuie la main sur sa hanche (djatou), de fermer les yeux, d’entrecroiser ses doigts ou de faire craquer les articulations de ses doigts.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* 2. CERTAINS ACTES MÉRITOIRES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Certains actes méritoires</h2>
              <div className="h-[1px] flex-1 bg-emerald-500/20" />
              <span className="text-xl font-amiri text-emerald-400/60">المندوبات</span>
            </div>
            
            <div className="grid gap-8">
              {/* Bloc 1 : Salam et Amine */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 font-serif italic text-lg text-white/70 leading-relaxed shadow-sm">
                Il est méritoire de tourner la tête vers le côté droit pendant le salut final « salam ». Il est aussi méritoire de réciter le « khounaute ». Il est aussi méritoire pour le guidé de dire « amiine » pendant les prières récitées à haute voix après la « waladaline » de l’Imam. Mais on ne doit dire « amiine » que si l’on entend l’Imam et non sous prétexte que celui-ci a peut-être prononcé « waladaline ». Il est aussi méritoire pour l’Imam de dire « amine » lors d’une prière à voix basse, ou pour quelqu’un qui prie seul s’il effectue une prière à voix haute ou à voix basse. Dans tous les cas, il est méritoire de le dire à voix basse.
              </motion.div>

              {/* Bloc 2 : Takbir et Mouvements */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 font-serif italic text-lg text-white/70 leading-relaxed shadow-sm">
                Il est méritoire, après le « takbir » ou formule d’entrée, de baisser les bras, mais sans fermer les poings. Il est aussi méritoire d’accompagner chacune des opérations de la prière de « alahou akbar », mais après le premier « tachahoude » qui suit les deux rakkas, il faut attendre de s’être complètement redressé avant de dire « alahou akbar ». Le mamoune (guidé) doit, après le premier « tachahoude », attendre que l’Imam se redresse complètement et qu’il ait prononcé « alahou akbar » pour se lever et se redresser complètement à son tour avant de dire lui aussi « alahou akbar ».
              </motion.div>

              {/* Bloc 3 : Position des mains et membres */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-10 rounded-[3rem] bg-gold/[0.02] border border-gold/10 font-serif italic text-lg text-white/70 leading-relaxed">
                Il est méritoire, durant le « tachahoude », de poser les mains sur les genoux, de plier les doigts de la main droite à l’exception du pouce et de l’index, et de remuer légèrement l’index de la droite vers la gauche. Il est méritoire, chez l’homme, d’écarter les jambes plutôt que de les joindre, d’éloigner le ventre des cuisses, et les coudes de ses côtés. Par contre, la femme doit joindre tous ses membres.
              </motion.div>

              {/* Bloc 4 : Mamoune et changement de place */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 font-serif italic text-lg text-white/70 leading-relaxed">
                Le mamoune (guidé), s’il est seul, doit se mettre à la droite de l’Imam, légèrement en retrait. S’il y a parmi les guidés des femmes, elles devront se mettre derrière les hommes et se garder de porter des parures susceptibles de faire du bruit, et se garder également de se parfumer. Il est méritoire de changer de place après une prière obligatoire si l’on veut effectuer une prière surérogatoire, qu’il s’agisse de l’Imam ou d’un mamoune (guidé), que ce soit à la mosquée ou ailleurs.
              </motion.div>
            </div>
          </section>

        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6/h')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/j')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}