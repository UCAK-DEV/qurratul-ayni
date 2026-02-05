'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PrieresSurerogatoires() {
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section J</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LES PRIÈRES <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">surérogatoires</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">النوافل</p>

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
          
          {/* 1. MÉTHODE ET JUMELAGE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Méthode de jumelage</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden">
               <p className="text-xl md:text-2xl text-white/80 font-serif italic leading-relaxed border-l-2 border-gold/30 pl-8 mb-12">
                &quot;La manière suivante de les effectuer en les jumelant avec les prières obligatoires est une pratique traditionnelle.&quot;
               </p>
               
               <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Les deux (2) rakkas traditionnelles du « fadiar » (aurore), suivies des deux (2) rakkas obligatoires du sobh, elles-mêmes suivies des quatre (4) rakkas de la matinée (yor yor).",
                    "Les quatre (4) rakkas qui précèdent la prière du « zohr » (prière de l’après-midi), suivies des quatre (4) rakkas obligatoires du « zohr », plus quatre (4) autres rakkas traditionnelles après le « zohr ».",
                    "Quatre (4) rakkas avant le « asr » (takoussane) (prière du soir), elles-mêmes suivies des quatre (4) rakkas obligatoires.",
                    "Trois (3) rakkas obligatoires du « maghreb » (timis) (crépuscule), plus deux (2) rakkas traditionnelles après la prière obligatoire du « maghreb »."
                  ].map((text, idx) => (
                    <motion.div key={idx} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 font-serif italic text-lg text-white/70 leading-relaxed group hover:border-gold/20 transition-all">
                      {text}
                    </motion.div>
                  ))}
               </div>
               
               <div className="mt-6 p-8 rounded-[2.5rem] bg-gold/[0.03] border border-gold/20 font-serif italic text-xl text-white/80 leading-relaxed text-center">
                Quatre (4) rakkas obligatoires du « guéwé », plus douze rakkas traditionnelles après le « guéwé », plus une dernière raka unique appelée « witr ».
               </div>
            </div>
          </section>

          {/* 2. RAMADAN ET PRATIQUES QUOTIDIENNES */}
          <section className="space-y-12">
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-center">
              <p className="max-w-4xl mx-auto">
                Cela est une pratique traditionnelle pour qui peut les effectuer chaque jour. Les treize dernières rakkas par lesquelles nous avons terminé notre énumération constituent une pratique traditionnelle fortement recommandée durant le mois de ramadan ; elles s’effectuent après la prière du « guéwé » à la mosquée sous la direction d’un imam. En dehors du mois de ramadan, on les effectue chez soi.
              </p>
            </div>
          </section>

          {/* 3. LE WITR ET LE SAFA */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le Witr et le Safa</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">الشفع والوتر</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 font-serif italic text-lg leading-relaxed text-white/70">
                La prière du « witr » est une pratique à caractère obligatoire. Elle compte une seule raka pendant laquelle on récite la « fatiha », suivie d’un « likhlas », d’un « falakhi » et d’un « nassi ». Il est méritoire de l’effectuer après la prière du « safa », qui comprend deux (2) rakkas : dans la première, on récite, après la « fatiha », la sourate « sabihisma » une fois ; dans la deuxième, on récite, après la « fatiha », la sourate « khoul ya ayouhal kâfirouna » une (1) fois.
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 font-serif italic text-lg leading-relaxed text-white/70">
                Celui qui n’a pas l’intention d’effectuer une prière surérogatoire après sa prière du « guéwé » peut immédiatement effectuer les prières du « safa » et du « witr ». Par contre, celui qui a l’intention d’effectuer une prière surérogatoire devra les effectuer en dernier lieu. Celui qui les a déjà effectuées et qui désire faire d’autres prières surérogatoires n’est pas tenu de les reprendre. Après avoir fini le « safa », il faudra prononcer le « salam » (salut final) avant d’effectuer le « witr ».
              </div>
            </div>
          </section>

          {/* 4. RÉPARATION EN CAS DE CONFUSION */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-red-400 uppercase tracking-[0.3em]">Réparation</h2>
              <div className="h-[1px] flex-1 bg-red-500/20" />
            </div>
            <div className="p-10 md:p-16 rounded-[3rem] bg-red-950/[0.03] border border-red-900/20 text-center font-serif italic text-lg md:text-xl text-white/80 leading-relaxed">
              &quot;Pendant les prières du « safa » et du « witr », si l’on confond la deuxième raka du « safa » avec la raka du « witr », on doit considérer ladite raka comme étant la deuxième raka du « safa » ; on se prosterne en « bahda salam » et ensuite on effectue le « witr ».&quot;
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6/i')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/k')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}