'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function BeneficiairesZakatPage() {
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre IX — Section D</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              QUI A DROIT <br /> À LA <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">zakat ?</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">مستحقو الزكاة</p>

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
          
          {/* 1. LE PROFIL DU BÉNÉFICIAIRE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le Destinataire</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">D</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-xl md:text-2xl text-white/80 leading-relaxed border-l-2 border-gold/30 pl-8">
                Elle est destinée à un musulman ou une musulmane libre, il doit être un nécessiteux.
              </div>
            </div>
          </section>

          {/* 2. L'ÉTHIQUE ET LA DISCRÉTION */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">L'intention et la discrétion</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <p>
                On ne doit pas attendre de lui aucune faveur, on ne la lui donne que pour la face de Dieu. On ne doit pas s’attendre à des remerciements et à des éloges de sa part ou à ce qu’il raconte à des gens ; on doit montrer qu’on ne veut pas qu’une tierce personne soit au courant.
              </p>
            </div>
          </section>

          {/* 3. LES INTERDICTIONS ET LIMITATIONS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Limitations rituelles</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-lg leading-relaxed text-white/70">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Champ et reconnaissance</h3>
                <p>
                  On ne doit pas donner la zakat à celui qui nous prête ou nous donne un champ à cultiver en signe de reconnaissance, cela est blâmable pour l’un comme pour l’autre en location. Dans tous les cas, la zakat ne devra pas servir à payer cette somme due ; cependant, le propriétaire du champ peut te le vendre ou te le donner en due, pas plus qu’elle ne peut être payée, cette somme, au moyen des produits vivriers ou de tout autre produit qui pousse dans le sol.
                </p>
              </div>
              <div className="space-y-8">
                <div className="p-10 rounded-[3rem] bg-red-950/[0.03] border border-red-900/20 shadow-sm">
                  <h3 className="text-red-400 font-bold text-[10px] uppercase tracking-widest border-b border-red-900/10 pb-4 mb-4">Interdiction de rachat</h3>
                  <p>Il est interdit de racheter la zakat à celui à qui on l’avait donnée.</p>
                </div>
                <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 shadow-sm">
                   <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4 mb-4">Règle de distance</h3>
                   <p className="mb-4">Il est tout aussi interdit d’aller donner la zakat à plus de soixante-dix km de chez soi si l’on a un nécessiteux à côté. On peut cependant aller la donner jusqu’à cette distance (plus de soixante-dix km de chez soi).</p>
                   <p className="text-white/40 text-base border-t border-white/5 pt-4">Si on ne trouve pas jusqu’à plus de soixante-dix km, il n’est pas interdit d’aller au-delà de cette distance.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/9/c')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/9/e')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}