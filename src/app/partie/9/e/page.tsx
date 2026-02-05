'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ZakatFitrPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "9") || CHAPTERS[8];
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre IX — Section E</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              ZAKAT <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">al-fitr</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">زكاة الفطر</p>

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
          
          {/* INTRODUCTION : L'OBLIGATION DIVINE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">L'Obligation Divine</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">E</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-xl md:text-2xl text-white/80 leading-relaxed border-l-2 border-gold/30 pl-8">
                LA ZAKAT DE LA RUPTURE DU JEÛNE EST UNE OBLIGATION DIVINE. Celui qui le nie est un mécréant. Qui cesse délibérément de s’en acquitter et qui en a les possibilités est un impie. S’il ne s’en repent pas jusqu’à sa mort, il sera précipité dans les feux de l’enfer.
              </div>
            </div>
          </section>

          {/* 1. QUI DOIT S’EN ACQUITTER */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Redevabilité</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              Elle concerne tout musulman libre et qui est en mesure de s’en acquitter pour son compte personnel et pour celui de toute personne qu’il nourrit telle que sa femme et son fils jusqu’à ce que dernier atteigne la puberté, sa fille jusqu’à ce qu’elle soit en âge de se marier ; pour le compte de ses parents (père et mère) s’ils n’en ont pas les moyens et pour le compte de son esclave.
            </div>
          </section>

          {/* 2. NATURE ET QUANTITÉ */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Nature et Quantité</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 font-serif italic text-lg text-white/70 leading-relaxed">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">La Nature</h3>
                <p>
                  Elle doit être prélevée dans l’aliment le plus utilisé dans le pays. Chez nous, on le prélève dans le mil « souna » ou le mil « sanicle » ou le mil « bassi » ou le sorgho, ou dans le riz. Celui qui n’a aucune de ces céréales doit en acheter afin de s’en acquitter. Celui qui ne se nourrit pas de ces aliments précités peut le prélever dans l’aliment dont il se nourrit.
                </p>
              </div>
              <div className="p-10 rounded-[3rem] bg-emerald-950/[0.03] border border-emerald-500/20 space-y-6 font-serif italic text-lg text-white/70 leading-relaxed">
                <h3 className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest border-b border-emerald-500/10 pb-4">Quantité à prélever</h3>
                <p className="font-sans not-italic text-3xl font-black text-white">2,500 kg <span className="text-sm font-light opacity-50 text-gold">par tête</span></p>
                <p>
                  Il faut deux kilos et demi (2,500 kg) par tête pour ce qui est du mil « souna » et les céréales du même genre. Pour le riz, ou pour tout autre produit différent de ceux-là, on cherche un récipient qui contient exactement deux kilos et demi de mil souna et on s’en sert comme d’une mesure ; ainsi on ne les pèse pas.
                </p>
              </div>
            </div>
          </section>

          {/* 3. QUAND LA PRÉLEVER ? */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le Moment prescrit</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-gold/[0.02] border border-gold/10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-center">
              <p className="max-w-4xl mx-auto">
                Après la prière du matin, le jour de la korité et avant la prière traditionnelle de la korité. Il n’est pas du tout recommandé de tarder à la prélever après la prière de la korité, sauf en cas de force majeure. On restera toujours à le devoir tant qu’on ne l’a pas prélevée, si on doit le faire. Le jeûne ne sera pas accepté tant qu’on ne s’en est pas acquitté.
              </p>
            </div>
          </section>

          {/* 4. LES BÉNÉFICIAIRES */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Les Bénéficiaires</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">المستحقون</span>
            </div>
            <div className="p-10 md:p-16 rounded-[3.5rem] bg-white/[0.01] border border-white/5 font-serif italic text-lg text-white/70 leading-relaxed text-justify">
              Celui-là même à qui on doit remettre la zakat ; ils sont identiques à tout point de vue (les bénéficiaires). On peut tout donner à une seule personne tout comme on peut le partager à plusieurs personnes qui en ont droit.
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/9/d')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/10')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre X</button>
      </nav>
    </main>
  );
}