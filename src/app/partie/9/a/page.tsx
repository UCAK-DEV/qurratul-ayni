'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ArgentEpargnePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Utilisation de l'ID du chapitre 9 pour l'audio (La Zakat)
  const chapterData = CHAPTERS.find(c => c.id === "9") || CHAPTERS[8];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div          
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre IX — Section A</span>
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          ARGENT ÉPARGNÉ <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mt-2">المال المدخر</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* SECTION 1: RÈGLES GÉNÉRALES DE L'ARGENT ÉPARGNÉ */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">L'ARGENT ET LE COMMERCE</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 text-white/80 leading-relaxed italic text-lg text-justify">
            <p>
              Celui qui garde mille francs (1000 Frcs) pendant un an devra en prélever la zakat, que ce soit de l’argent gardé ou produit par le commerce. 
              S’il s’agit de quelqu’un qui vend au jour le jour sans spéculer et se hâte d’acheter d’autres marchandises, il devra, au bout d’un an, 
              faire une estimation des marchandises qu’il a encore en stock et la somme qu’il pourra à coup sûr retirer des crédits alloués ; 
              il ajoute à cela la somme d’argent dont il dispose effectivement.
            </p>
            <div className="not-italic bg-gold/5 border border-gold/20 p-6 rounded-2xl text-center my-8">
              <p className="text-gold font-black text-xs uppercase tracking-widest mb-2">Montant de la Zakat</p>
              <p className="text-2xl font-bold text-white mb-2">Vingt-cinq pour mille (25‰)</p>
              <p className="font-amiri text-xl text-gold" dir="rtl">الزكاة تقدر بخمسة وعشرين في الألف</p>
              <p className="text-white/40 text-[10px] mt-2 italic">« Az-zakātu tuqaddaru bi khamsatin wa ‘ishrīna fī-l-alfi »</p>
            </div>
            <p>
              Mais n’entrent pas dans cette estimation les outils de travail comme les boutiques et les moyens de transport, si nombreux soient-ils. 
              Cependant, pour tout outil vendu, il doit se rappeler la date d’acquisition de l’outil ou la date de la dernière zakat, 
              à condition que le produit de la vente soit égal au moins à mille (1000) francs.
            </p>
            <p>
              Si la valeur est inférieure à mille (1000) francs et qu’on dispose d’autres biens gardés par devers soi pendant un an et qui, 
              ajoutés à cette valeur, égalent le minimum imposable, on devra donc en prélever la zakat.
            </p>
          </div>
        </section>

        {/* SECTION 2: CAS DES VÉHICULES ET MAISONS */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">VÉHICULES ET IMMOBILIER</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-6 text-white/70 italic text-justify">
            <p>
              Si l’on possède une maison à louer ou des moyens de transport (véhicules), on n’en prélèvera pas la zakat tant qu’on ne les aura pas vendus. 
              Si on les vend (les véhicules ou les maisons), on doit considérer la date du dernier prélèvement de la zakat sur le capital qui a servi à leur achat ; 
              s’il s’est écoulé depuis cette date une année entière et que la somme est imposable, la zakat s’impose.
            </p>
            <p>
              À propos de ces biens vendus, on ne doit prélever une année de zakat, quelle que soit la durée de possession. 
              Le produit du loyer de la maison est imposable si on le garde en somme pendant un an. 
              Cet argent n’est pas imposable, si élevé soit-il, si on ne l’épargne pas pendant un an.
            </p>
          </div>
        </section>

        {/* SECTION 3: TRAVAILLEUR SALARIÉ ET CAPITAL */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">SALARIÉS ET CAPITAL</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gold/5 rounded-3xl border border-gold/20 flex flex-col justify-between">
              <div>
                <p className="text-gold font-bold text-[10px] uppercase mb-4 tracking-widest">Le Travailleur Salarié</p>
                <p className="font-amiri text-2xl text-white mb-4 text-right" dir="rtl">العامل بأجر</p>
                <p className="text-white/70 text-sm italic leading-relaxed">
                  "Le travailleur salarié qui économise une certaine somme pendant un an doit en prélever la zakat, 
                  mais, si élevée qu’elle soit, elle n’est pas imposable si elle n’est pas gardée durant un an."
                </p>
              </div>
            </div>

            <div className="p-8 bg-gold/5 rounded-3xl border border-gold/20 flex flex-col justify-between">
              <div>
                <p className="text-gold font-bold text-[10px] uppercase mb-4 tracking-widest">Celui qui dispose d’un capital</p>
                <p className="font-amiri text-2xl text-white mb-4 text-right" dir="rtl">صاحب رأس المال</p>
                <p className="text-white/70 text-sm italic leading-relaxed">
                  "Celui qui dispose d’un capital dont la différence avec ses dettes est inférieure à mille francs (1000 frcs) 
                  ne prélève pas la zakat ; cela est valable si l’engagement avait été pris de régler ses dettes."
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white/5 rounded-3xl border-l-4 border-gold italic text-white/60 text-sm text-justify">
            Si on dispose d’autres biens dont la valeur estimée peut couvrir les dettes et qu’on les a gardés pendant un an, 
            alors on doit y prélever la zakat.
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/9')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Sommaire IX
        </button>
        <button 
          onClick={() => router.push('/partie/9/b')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}