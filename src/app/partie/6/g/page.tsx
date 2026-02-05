'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PrieresNonEffectuees() {
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section G</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LES PRIÈRES <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">non effectuées</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">قضاء الصلوات</p>

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
          
          {/* 1. RÈGLES DE RATTRAPAGE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Règles de rattrapage</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">G</span>
              <div className="max-w-4xl relative z-10">
                <p className="text-xl md:text-2xl text-white/80 font-serif italic leading-relaxed border-l-2 border-gold/30 pl-8">
                  &quot;Pour ces prières, on doit s’en acquitter comme il est recommandé de les effectuer. S’il s’agit des prières que doit effectuer un voyageur, celui-ci doit s’en acquitter selon les prescriptions édictées à cet effet. S’il s’agit de la prière d’un sédentaire, il doit s’en acquitter conformément aux prescriptions édictées au sédentaire.&quot;
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 font-serif italic text-lg leading-relaxed text-white/70">
                Si, au moment d’une prière, les prières non effectuées n’excèdent pas le nombre de quatre, on doit préalablement s’acquitter de ces prières avant d’effectuer la prière du moment. Si les prières non effectuées excèdent le nombre de quatre, alors on doit effectuer la prière du moment avant de s’acquitter des prières omises.
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 font-serif italic text-lg leading-relaxed text-white/70">
                Celui qui ne se souvient plus du nombre de prières qu’il a omises doit s’acquitter d’un nombre de prières dont il peut être certain qu’il égale le nombre qu’il doit.
              </div>
            </div>
          </section>

          {/* 2. RETARD IMPORTANT ET PRIORITÉS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Retards de plusieurs années</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-emerald-500/[0.02] border border-emerald-500/10 text-center font-serif italic">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                Si le nombre de prières atteint celui de plusieurs années, si bien qu’il n’est pas possible de s’en acquitter d’une seule traite ni d’en connaître le nombre, il devra alors s’en acquitter chaque jour d’un nombre égal à celui de five (5) jours. Cela lui fera chaque année l’équivalent de cinq années de prière. Et ce, jusqu’à ce qu’il soit certain d’avoir effectué au moins le nombre de prières qu’il doit.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6 font-serif italic">
                <p className="text-white/70 leading-relaxed">
                  Celui qui doit des prières obligatoires ne doit pas effectuer des prières surérogatoires, sauf la « chafa » et la « witr » ou les prières de la « Tabaski » (soleil-lune). Négliger les prières que l’on doit est d’ailleurs blâmable chez une personner majeure (mukalaf). Celui qui a un empêchement pour effectuer des prières doit s’en acquitter dès que l’empêchement cesse d’exister.
                </p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-red-950/[0.05] border border-red-900/20 space-y-6 font-serif italic">
                <p className="text-red-400/80 leading-relaxed">
                  Il est interdit d’effectuer une prière surérogatoire entre la prière du « asr » (takoussane) et celle du Maghreb (timis) ; il est aussi interdit d’effectuer des prières surérogatoires le matin avant que le soleil ait parcouru la longueur d’une manche de l’hilaire.
                </p>
              </div>
            </div>
          </section>

          {/* 3. RÉPARATION DES ERREURS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Réparation des erreurs</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">سجود السهو</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[3rem] bg-emerald-500/[0.02] border border-emerald-500/20 space-y-6">
                <h3 className="text-emerald-500 font-black text-[10px] uppercase tracking-widest border-b border-emerald-500/10 pb-4">L'Omission (Khabla Salam)</h3>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  Celui qui commet une erreur par omission au cours de sa prière doit se prosterner deux (2) fois après le « tachaoude » et avant le salut final. C’est cela la prosternation dite du « khabla salam ».
                </p>
              </div>
              <div className="p-10 rounded-[3rem] bg-gold/[0.02] border border-gold/20 space-y-6">
                <h3 className="text-gold font-black text-[10px] uppercase tracking-widest border-b border-gold/10 pb-4">Le Rajout (Bakhda Salam)</h3>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  Si l’erreur provient d’un rajout, on doit effectuer deux (2) prosternations après le salut final, réciter à nouveau le tachaoude et le salut final. C’est cela la prosternation dite du « bakhda salam ».
                </p>
              </div>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white/[0.04] border border-white/10 text-center">
              <p className="text-white/90 font-serif italic text-xl">
                &quot;Celui qui se trompe à la fois par omission et par rajout doit se prosterner pour réparer avant le salut final (« khabla salam »).&quot;
              </p>
            </div>
          </section>

          {/* 4. SITUATIONS PARTICULIÈRES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Situations particulières</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="space-y-6">
              {[
                "Si l’on est sur le point de se lever après les deux premières rakkas et que l’on se souvient qu’on n’a pas encore prononcé le « tachaoude », on se rassoit pour le prononcer si les mains et les genoux n’ont pas encore quitté le sol ; on n’aura pas à se prosterner en guise de réparation. Dans le cas où les mains ou les jambes ont déjà quitté le sol, on continue la prière pour se prosterner en « khabla salam » avant le salut final. Si l’on se met debout puis revient à la position assise après, on se prosterne en « bakhda salam ». Si l’on n’atteint pas la station debout mais que l’on revient à la position assise, on continue sa prière sans devoir la réparer.",
                "Celui qui fait le « salam » après les deux rakkas et se rappelle, ou qu’on lui rappelle, qu’il n’a pas terminé sa prière, doit se relever et continuer sa prière, après quoi il se prostenera en « bakhda salam ».",
                "Celui qui a des défaillances qui l’amènent à commettre des erreurs chaque fois qu’il prie, celui-là essaie de ne pas tenir compte de la nature de l’erreur ; il continue sa prière pour effectuer toujours les prosternations du « bakhda salam »."
              ].map((text, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex gap-8 items-center group hover:border-gold/20 transition-all font-serif italic text-lg text-white/70 leading-relaxed shadow-sm">
                  <span className="text-gold font-black opacity-20 text-3xl">{(idx + 1).toString().padStart(2, '0')}</span>
                  <p className="group-hover:text-white transition-colors">{text}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6/f')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/h')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}