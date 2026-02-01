'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ZakatFitrPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 9 (La Zakat)
  const chapterData = CHAPTERS.find(c => c.id === "9") || CHAPTERS[8];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans">
      {/* Effets de fond (Lumières diffuses) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-emerald-900/10 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre IX — Section E</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          ZAKAT <br /> AL-FITR
        </motion.h1>
        
        <p className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mb-10">زكاة الفطر</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* INTRODUCTION : L'OBLIGATION DIVINE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">L'Obligation Divine</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 text-white/80 leading-relaxed italic text-xl text-justify font-serif">
            <p>
              LA ZAKAT DE LA RUPTURE DU JEÛNE EST UNE OBLIGATION DIVINE. Celui qui le nie est un mécréant. 
              Qui cesse délibérément de s’en acquitter et qui en a les possibilités est un impie. 
              S’il ne s’en repent pas jusqu’à sa mort, il sera précipité dans les feux de l’enfer.
            </p>
          </div>
        </section>

        {/* SECTION 1: QUI DOIT S’EN ACQUITTER */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">QUI DOIT S’EN ACQUITTER</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 text-white/70 italic text-lg leading-relaxed text-justify font-serif">
            <p>
              Elle concerne tout musulman libre et qui est en mesure de s’en acquitter pour son compte personnel 
              et pour celui de toute personne qu’il nourrit telle que sa femme et son fils jusqu’à ce que dernier 
              atteigne la puberté, sa fille jusqu’à ce qu’elle soit en âge de se marier ; pour le compte de ses 
              parents (père et mère) s’ils n’en ont pas les moyens et pour le compte de son esclave.
            </p>
          </div>
        </section>

        {/* SECTION 2: LA NATURE ET LA QUANTITÉ */}
        <section className="space-y-8">
            <div className="flex items-center gap-6">
                <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">LA NATURE</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* La Nature */}
            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-6">
                <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">La Nature</h3>
                <p className="text-white/60 italic leading-relaxed text-sm font-serif">
                Elle doit être prélevée dans l’aliment le plus utilisé dans le pays. Chez nous, on le prélève dans le mil « souna » ou le mil « sanicle » ou le mil « bassi » ou le sorgho, ou dans le riz. Celui qui n’a aucune de ces céréales doit en acheter afin de s’en acquitter. Celui qui ne se nourrit pas de ces aliments précités peut le prélever dans l’aliment dont il se nourrit.
                </p>
            </div>

            {/* Quantité */}
            <div className="p-10 rounded-[2.5rem] bg-gold/5 border border-gold/10 space-y-6">
                <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">Quantité à prélever</h3>
                <div className="text-3xl font-black text-white italic">2,500 <span className="text-sm text-gold">kg</span></div>
                <p className="text-white/60 text-sm italic leading-relaxed font-serif">
                Il faut deux kilos et demi (2,500 kg) par tête pour ce qui est du mil « souna » et les céréales du même genre. 
                Pour le riz, ou pour tout autre produit différent de ceux-là, on cherche un récipient qui contient exactement 
                deux kilos et demi de mil souna et on s’en sert comme d’une mesure ; ainsi on ne les pèse pas.
                </p>
            </div>
            </div>
        </section>

        {/* SECTION 3: QUAND LA PRÉLEVER ? */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">QUAND LA PRÉLEVER ?</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-6 text-white/70 italic text-lg leading-relaxed text-justify font-serif">
            <p>
              Après la prière du matin, le jour de la korité et avant la prière traditionnelle de la korité. 
              Il n’est pas du tout recommandé de tarder à la prélever après la prière de la korité, sauf en cas de force majeure. 
              On restera toujours à le devoir tant qu’on ne l’a pas prélevée, si on doit le faire. 
              Le jeûne ne sera pas accepté tant qu’on ne s’en est pas acquitté.
            </p>
          </div>
        </section>

        {/* SECTION 4: LES BÉNÉFICIAIRES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">QUI EN A DROIT : A QUI LA DONNER ?</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-6 bg-white/[0.02]">
            <p className="text-white/80 italic text-lg leading-relaxed text-justify font-serif">
              Celui-là même à qui on doit remettre la zakat ; ils sont identiques à tout point de vue (les bénéficiaires). 
              On peut tout donner à une seule personne tout comme on peut le partager à plusieurs personnes qui en ont droit.
            </p>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/9/d')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/10')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}