'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PriereVoyageur() {
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section H</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LA PRIÈRE DU <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">voyageur</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">صلاة المسافر</p>

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
          
          {/* 1. CONDITIONS DE RÉDUCTION */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Conditions de réduction (Qasr)</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">شروط قصر الصلاة</span>
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">H</span>
              <div className="max-w-4xl relative z-10">
                <p className="text-xl md:text-2xl text-white/80 font-serif italic leading-relaxed border-l-2 border-gold/30 pl-8">
                  &quot;Celui qui effectue un voyage non proscrit par la religion sur une distance égale à 71 km, celui-là peut, selon la tradition prophétique, ramener à deux rakkas les prières du « zohr » (tisbar), du « asr » (takoussane) et du « icha » (guéwé), que le voyage soit effectué par étapes ou sans arrêts, qu’il soit effectué à pied, à cheval, en auto ou par les airs, pourvu qu’il ait eu l’intention d’effectuer le nombre de kilomètres indiqué ci-dessus.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* 2. ÉTAPES ET SÉJOUR */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Étapes et séjour</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-gold/[0.02] border border-gold/10 font-serif italic">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                Celui qui est à la recherche d’un bien perdu ne doit pas réduire ses prières s’il est certain de retourner une fois le bien retrouvé. Il en est de même pour celui qui marche sans but précis, comme rendre visite à des parents. Mais si la distance à effectuer est de 71 km, quel que soit le nombre d’étapes et la durée du trajet, il peut réduire le nombre de rakkas de ses prières. N’est pas concernée par cette règle toute escale où le voyageur a l’intention de passer au moins quatre (4) jours ; il en est de même si le voyageur a une épouse dans une escale. Quelle que soit la durée de l’étape, si l’intention d’y séjourner pendant quatre (4) jours n’a pas été formulée auparavant et si, par hasard, on y est retenu pour affaire, on ne doit pas réduire le nombre de rakkas de ses prières.
              </p>
            </div>
          </section>

          {/* 3. IMAMAT ET DISTANCE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Imamat et Distance</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">الإمامة والمسافة</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6 font-serif italic">
                <p className="text-white/70 leading-relaxed">
                  Un sédentaire peut prier derrière une personne en voyage, mais il est tenu de continuer sa prière après le « salam » du voyageur. Mais il n’est pas recommandable pour le voyageur de prier derrière un sédentaire, car alors il ne pourra réduire le nombre des rakkas conformément à la tradition.
                </p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6 font-serif italic">
                <p className="text-white/70 leading-relaxed">
                  Cette distance de 71 km à parcourir concerne le trajet aller et non le trajet aller et retour. On peut commencer la réduction à partir de quatre (4) kilomètres et demi de chez soi. On pourra effectuer des prières complètes au retour dès qu’on sera à quatre (4) kilomètres et demi de chez soi.
                </p>
              </div>
            </div>
          </section>

          {/* 4. LIEUX ET EMPÊCHEMENTS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Lieux et empêchements</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">أماكن الصلاة</span>
            </div>
            <div className="p-10 md:p-16 rounded-[3.5rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic leading-relaxed text-white/70 text-lg">
              <div className="space-y-8">
                <p>
                  La prière à la mosquée est une obligation pour tout homme qui n’a pas d’empêchement. Celui qui a un empêchement peut prier dans un endroit exempt de souillure. Il est blâmable (sip) de prier dans un endroit où l’on se soulage (wourbeul), dans un lieu où l’on parque les chameaux et sur la « Kaaba ». On ne doit pas effectuer une obligation divine dans la Kaaba, mais on peut y faire une pratique surérogatoire.
                </p>
                <div className="h-px bg-white/5" />
                <p>
                  On ne doit pas prier en ayant en soi le besoin d’aller à la selle ou d’uriner ; on doit se soulage d’abord avant d’effectuer sa prière. On ne doit pas s’acquitter d’une prière derrière une autre personne après celle de l’Imam.
                </p>
                <div className="h-px bg-white/5" />
                <p>
                  On ne doit pas non plus s’acquitter de la prière de zohr (tisbar) derrière quelqu’un qui effectue la prière de l’asr (takoussane). Mais on peut suivre quelqu’un qui s’acquitte des mêmes prières. Si l’on doit effectuer des prières en présence d’un plat et si l’on dispose d’un temps suffisant, on doit manger avant d’effectuer la prière.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6/g')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/i')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}