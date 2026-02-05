'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ArgentEpargnePage() {
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre IX — Section A</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              L'ARGENT <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">épargné</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">المال المدخر</p>

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
          
          {/* 1. L'ARGENT ET LE COMMERCE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">L'argent et le commerce</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">A</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed space-y-8 text-justify">
                <p>
                  Celui qui garde mille francs (1000 Frcs) pendant un an devra en prélever la zakat, que ce soit de l’argent gardé ou produit par le commerce. S’il s’agit de quelqu’un qui vend au jour le jour sans spéculer et se hâte d’acheter d’autres marchandises, il devra, au bout d’un an, faire une estimation des marchandises qu’il a encore en stock et la somme qu’il pourra à coup sûr retirer des crédits alloués ; il ajoute à cela la somme d’argent dont il dispose effectivement.
                </p>

                {/* FORMULE TECHNIQUE */}
                <div className="not-italic bg-gold/5 border border-gold/20 p-8 rounded-[2rem] text-center my-12">
                  <p className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-4">Montant de la Zakat</p>
                  <p className="text-3xl md:text-5xl font-black text-white mb-4">Vingt-cinq pour mille (25‰)</p>
                  <p className="font-amiri text-2xl md:text-3xl text-gold-light leading-relaxed" dir="rtl">الزَّكَاةُ تُقَدَّرُ بِخَمْسَةٍ وَعِشْرِينَ فِي الْأَلْفِ</p>
                  <p className="text-white/30 text-xs mt-4 font-serif italic">« Az-zakātu tuqaddaru bi khamsatin wa ‘ishrīna fī-l-alfi »</p>
                </div>

                <p>
                  Mais n’entrent pas dans cette estimation les outils de travail comme les boutiques et les moyens de transport, si nombreux soient-ils. Cependant, pour tout outil vendu, il doit se rappeler la date d’acquisition de l’outil ou la date de la dernière zakat, à condition que le produit de la vente soit égal au moins à mille (1000) francs.
                </p>
                <p>
                  Si la valeur est inférieure à mille (1000) francs et qu’on dispose d’autres biens gardés par devers soi pendant un an et qui, ajoutés à cette valeur, égalent le minimum imposable, on devra donc en prélever la zakat.
                </p>
              </div>
            </div>
          </section>

          {/* 2. VÉHICULES ET IMMOBILIER */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Véhicules et Immobilier</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">العقارات والمنقولات</span>
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <p>
                Si l’on possède une maison à louer ou des moyens de transport (véhicules), on n’en prélèvera pas la zakat tant qu’on ne les aura pas vendus. Si on les vend (les véhicules ou les maisons), on doit considérer la date du dernier prélèvement de la zakat sur le capital qui a servi à leur achat ; s’il s’est écoulé depuis cette date une année entière et que la somme est imposable, la zakat s’impose.
              </p>
              <div className="h-px bg-white/5 w-24 mx-auto" />
              <p>
                À propos de ces biens vendus, on ne doit prélever une année de zakat, quelle que soit la durée de possession. Le produit du loyer de la maison est imposable si on le garde en somme pendant un an. Cet argent n’est pas imposable, si élevé soit-il, si on ne l’épargne pas pendant un an.
              </p>
            </div>
          </section>

          {/* 3. SALARIÉS ET CAPITAL */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Salariés et gestion du capital</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-8 font-serif italic text-lg text-white/70">
                <h3 className="text-gold font-black text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Le Travailleur Salarié</h3>
                <p>
                  &quot;Le travailleur salarié qui économise une certaine somme pendant un an doit en prélever la zakat, mais, si élevée qu’elle soit, elle n’est pas imposable si elle n’est pas gardée durant un an.&quot;
                </p>
              </div>
              <div className="p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-8 font-serif italic text-lg text-white/70">
                <h3 className="text-gold font-black text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Celui qui dispose d’un capital</h3>
                <p>
                  &quot;Celui qui dispose d’un capital dont la différence avec ses dettes est inférieure à mille francs (1000 frcs) ne prélève pas la zakat ; cela est valable si l’engagement avait été pris de régler ses dettes.&quot;
                </p>
              </div>
            </div>
            <div className="p-10 rounded-[3rem] bg-gold/[0.02] border border-gold/10 text-center font-serif italic text-base md:text-lg text-white/60 leading-relaxed border-l-4 border-gold">
              Si on dispose d’autres biens dont la valeur estimée peut couvrir les dettes et qu’on les a gardés pendant un an, alors on doit y prélever la zakat.
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/9')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Sommaire IX</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/9/b')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}