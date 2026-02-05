'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PrieresDesFetes() {
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section K</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LES PRIÈRES DES <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">fêtes « hiit »</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">صلاة العيدين</p>

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
          
          {/* 1. GÉNÉRALITÉS ET HORAIRES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Généralités et Horaires</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">K</span>
              <div className="max-w-4xl relative z-10">
                <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic border-l-2 border-gold/30 pl-8">
                  &quot;Ce sont des prières traditionnelles, mais elles ne concernent pas les femmes, l’esclave et le voyageur. À l’exception de La Mecque, on doit les effectuer en dehors des mosquées. On ne doit pas les effectuer en deux endroits distincts dans une même localité, sauf si le nombre de fidèles ne peut pas se contenir dans un endroit ; on doit alors aménager plusieurs endroits de prière ou prier à tour de rôle. On doit effectuer ces prières entre le moment où le soleil s’est complètement levé et le moment de la prière du « zohr » (tisbar). Après la prière du « zohr » (tisbar), on ne doit plus les effectuer et l’on ne doit pas non plus s’en acquitter ultérieurement en guise de réparation.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* 2. DÉROULEMENT ET RAKKAS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Déroulement</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">كيفية الصلاة</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 font-serif italic text-lg text-white/70 leading-relaxed shadow-sm">
                Elles se composent de deux rakkas que l’on prononce à haute voix. Elles ne sont précédées ni de l’appel (nodde) ni du rappel (likhâm). Dans la première raka, on dit sept (7) fois « alahou akbar », y compris le « armal » (formule d’entrée). Dans la deuxième raka, on dit six (6) fois « alahou akbar », y compris le « alahou akbar » que l’on prononce en se relevant. Ces « alahou akbar » ne sont pas accompagnés de la levée des mains vers les épaules, à l’exception du premier.
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 font-serif italic text-lg text-white/70 leading-relaxed shadow-sm">
                En cas d’oubli, on doit l’effectuer et reprendre la récitation des sourates tant que l’on n’a pas fait la génuflexion. Après celle-ci, on continue la prière et l’on se prosterne en « khabla salam ». Il est méritoire de réciter la « fatiha » suivie de la sourate « sabihisma » dans la première raka, et la « fatiha » suivie de la sourate « wachamsi » dans la deuxième raka.
              </motion.div>
            </div>
          </section>

          {/* 3. LES SERMONS ET RECOMMANDATIONS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Sermons et Recommandations</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic leading-relaxed text-white/70 text-lg">
              <div className="space-y-8">
                <p>
                  À l’occasion de la prière du « hiit », on prononce deux (2) sermons après la prière ; entre les deux sermons, on doit s’asseoir puis se relever avant de continuer. Pour chaque sermon, on prononce la formule « alahou akbar » un nombre de fois indéterminé. Il est recommandé à l’Imam d’entretenir les fidèles pendant ou après les sermons sur un sujet qui les intéresse, surtout les sujets ayant trait à la fête, que ce soit celle de la korité ou de la tabaski.
                </p>
                <div className="h-px bg-white/5" />
                <p>
                  Il est méritoire de se laver ce jour après l’aube, mais avant l’heure de la prière. Il est méritoire de se parfumer, de porter de beaux habits et de bien entretenir ses cheveux. Il est méritoire d’aller à la prière à pied, dans la mesure du possible, plutôt que de se servir d’un moyen de locomotion. Il est méritoire également de louer Dieu sur le chemin des lieux de la prière ; une fois sur les lieux et avant l’arrivée de l’Imam, la louange préférée est la suivante : « alahou akbar ».
                </p>
              </div>
            </div>
          </section>

          {/* 4. PRATIQUES SPÉCIFIQUES ET RETARDATAIRES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Pratiques Spécifiques</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-10 rounded-[3rem] bg-gold/[0.02] border border-gold/10 font-serif italic text-lg text-white/70 leading-relaxed">
                Il est aussi recommandé, pour le retour, d’emprunter un chemin différent de celui de l’aller. Il est également recommandé, s’agissant de la korité, de goûter quelque chose avant d’aller prier ; s’agissant de la tabaski, par contre, d’observer le jeûne jusqu’au retour et de le rompre avec un morceau de foie de l’animal immolé. Il est méritoire, après le salut final de toute prière obligatoire, de prononcer trois (3) fois la formule « alahou akbar » à partir de la prière du « zohr » du jour de la tabaski jusqu’à celle du matin du quatrième jour.
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 font-serif italic text-lg text-white/70 leading-relaxed">
                Si l’on arrive en retard et que l’on trouve l’Imam en train de réciter les sourates de la prière, on doit dire sept (7) fois la formule « alahou akbar » avant de continuer la prière avec l’Imam. Si l’on arrive au moment de la génuflexion, la raka est valable. Si l’on arrive après la première raka, on continue avec l’Imam la deuxième raka jusqu au salut final, puis on s’acquitte de la raka qui nous a échappé. Si l’on rejoint l’Imam au moment du « tachahoude » (taya) ou de la prosternation, alors, dans ce cas, on termine le reste de la prière en compagnie de l’Imam, puis, après le salut final, on fait la prière telle que l’Imam l’a effectuée.
              </motion.div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6/j')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/7')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre VII</button>
      </nav>
    </main>
  );
}