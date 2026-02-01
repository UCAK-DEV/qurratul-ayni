'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function BeneficiairesZakatPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 9 (La Zakat)
  const chapterData = CHAPTERS.find(c => c.id === "9") || CHAPTERS[8];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans">
      {/* Effets de fond (Lumières diffuses) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-blue-900/10 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre IX — Section D</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          QUI A DROIT <br /> À LA <span className="gold-gradient-text">ZAKAT ?</span>
        </motion.h1>
        
        <p className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mb-10">مستحقو الزكاة</p>

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
        
        {/* SECTION 1: LE PROFIL DU BÉNÉFICIAIRE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">Le Destinataire</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6">
            <p className="text-white/80 leading-relaxed italic text-xl text-justify font-serif">
              Elle est destinée à un musulman ou une musulmane libre, il doit être un nécessiteux.
            </p>
          </div>
        </section>

        {/* SECTION 2: L'ÉTHIQUE ET LA DISCRÉTION */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic">L'intention et la discrétion</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-8 text-white/70 italic text-lg leading-relaxed text-justify font-serif">
            <p>
              On ne doit pas attendre de lui aucune faveur, on ne la lui donne que pour la face de Dieu. 
              On ne doit pas s’attendre à des remerciements et à des éloges de sa part ou à ce qu’il raconte à des gens ; 
              on doit montrer qu’on ne veut pas qu’une tierce personne soit au courant.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 font-sans">
              <div className="p-6 rounded-3xl bg-gold/5 border border-gold/20 italic text-sm">
                <span className="text-gold font-black uppercase text-[10px] block mb-2 tracking-[0.2em]">Le mobile unique</span>
                "On ne la lui donne que pour la face de Dieu."
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 italic text-sm">
                <span className="text-white/40 font-black uppercase text-[10px] block mb-2 tracking-[0.2em]">Confidentialité</span>
                "On doit montrer qu’on ne veut pas qu’une tierce personne soit au courant."
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LES INTERDITIONS ET CAS PARTICULIERS */}
        <section className="space-y-8 font-serif">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold/60 uppercase tracking-widest italic">Les Interdictions et Limitations</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Cas du champ et location */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 space-y-6">
              <p className="text-white/70 italic text-lg leading-relaxed text-justify">
                On ne doit pas donner la zakat à celui qui nous prête ou nous donne un champ à cultiver en signe de reconnaissance, 
                cela est blâmable pour l’un comme pour l’autre en location. Dans tous les cas, la zakat ne devra pas servir à payer 
                cette somme due ; cependant, le propriétaire du champ peut te le vendre ou te le donner en due, pas plus qu’elle 
                ne peut être payée, cette somme, au moyen des produits vivriers ou de tout autre produit qui pousse dans le sol.
              </p>
            </div>

            {/* Rachat et Distance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-center border-l-4 border-l-gold/40">
                <p className="text-white/80 font-bold italic text-lg leading-relaxed font-serif">
                  "Il est interdit de racheter la zakat à celui à qui on l’avait donnée."
                </p>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-gold/5 border border-gold/10 space-y-4">
                <span className="text-gold font-black uppercase text-[10px] tracking-widest block font-sans">La Règle de Distance</span>
                <div className="text-3xl font-black text-white italic">70 <span className="text-sm text-gold">km</span></div>
                <p className="text-white/60 text-sm italic leading-relaxed font-serif">
                  "Il est tout aussi interdit d’aller donner la zakat à plus de soixante-dix km de chez soi si l’on a un nécessiteux à côté. 
                  On peut cependant aller la donner jusqu’à cette distance (plus de soixante-dix km de chez soi)."
                </p>
              </div>
            </div>

            {/* Exception finale */}
            <div className="p-8 bg-blue-900/10 rounded-3xl border-l-4 border-blue-400 italic text-white/70 text-lg font-serif">
              "Si on ne trouve pas jusqu’à plus de soixante-dix km, il n’est pas interdit d’aller au-delà de cette distance."
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/9/c')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/9/e')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}