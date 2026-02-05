'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PratiquesInterditesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "17") || CHAPTERS[16];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-red-950/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XVII — Section A</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              PRATIQUES <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">interdites</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">المحرمات</p>

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

        <div className="space-y-24">
          
          {/* SECTION 1: RELIGION ET COMPORTEMENT */}
          <motion.section {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">XVII</span>
            <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-justify">
              <ul className="space-y-8">
                <li className="flex gap-6"><span className="text-gold opacity-40">/</span> Se faire passer pour un saint, pour un Cheikh ou se donner tout autre titre religieux auquel on n’a pas droit.</li>
                <li className="flex gap-6"><span className="text-gold opacity-40">/</span> Donner le wird d’une secte religieuse quelconque sans y être autorisé.</li>
                <li className="flex gap-6"><span className="text-gold opacity-40">/</span> Porter fréquemment préjudice aux gens par ses actes ou ses paroles.</li>
                <li className="flex gap-6"><span className="text-gold opacity-40">/</span> Regarder avec insistance un bel adolescent (garçon ou fille).</li>
                <li className="flex gap-6"><span className="text-gold opacity-40">/</span> Regarder une tierce femme, bavarder avec elle, trouver du plaisir dans ses paroles ou dans toute autre chose venant d’elle.</li>
              </ul>
            </div>
          </motion.section>

          {/* SECTION 2: ADULTÈRE & ALCOOL (GRAVITÉ) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.section {...fadeInUp} className="p-10 rounded-[3.5rem] bg-red-950/[0.05] border border-red-900/20 space-y-8">
              <h3 className="text-red-400 font-bold text-[10px] uppercase tracking-widest border-b border-red-900/10 pb-4">L’adultère</h3>
              <div className="space-y-6 text-white/70 font-serif italic text-lg leading-relaxed">
                <p>&quot;Tout homme ou toute femme célibataire qui en sont coupables sont passibles de cent (100) coups de verge en public.&quot;</p>
                <p>&quot;S’ils ne subissent pas ce châtiment ici-bas, ils n’y échapperont pas dans l’au-delà...&quot;</p>
                <p className="text-white font-bold not-italic border-t border-red-900/20 pt-4">&quot;S’il s’agit d’un homme ou d’une femme ayant déjà contracté mariage, ils sont passibles de la peine de mort.&quot;</p>
              </div>
            </motion.section>

            <motion.section {...fadeInUp} className="p-10 rounded-[3.5rem] bg-white/[0.03] border border-white/10 space-y-8">
              <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Alcool & Tabac</h3>
              <div className="space-y-6 text-white/70 font-serif italic text-lg leading-relaxed">
                <p>&quot;Celui qui prend de la boisson alcoolisée délibérément, ne serait-ce qu’une seule goutte, est passible de quatre-vingts (80) coups de verge en public.&quot;</p>
                <p className="text-gold not-italic font-sans font-bold text-xs">&quot;Tout ce qui enivre est assimilé à l’alcool aux yeux de la charia.&quot;</p>
                <p className="border-t border-white/5 pt-4 text-white/40">&quot;Le tabac sous toutes ses formes (à fumer ou à chiquer).&quot;</p>
              </div>
            </motion.section>
          </div>

          {/* SECTION 3: LANGUE ET CŒUR */}
          <motion.section {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
             <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-8">
                  <p>&quot;Le mensonge.&quot;</p>
                  <div className="p-8 rounded-3xl bg-black/40 border border-white/5">
                    <p>&quot;Dire du mal de quelqu’un en son absence ou écouter celui qui le fait.&quot;</p>
                    <p className="text-sm text-white/30 mt-4">&quot;Celui qui s’est livré une seule fois à ce travers sera le dernier à entrer au Paradis...&quot;</p>
                  </div>
               </div>
               <div className="space-y-8">
                  <div className="p-8 rounded-3xl bg-red-950/[0.05] border-l-4 border-red-500">
                    <span className="text-red-400 font-bold not-italic text-[10px] uppercase tracking-widest block mb-4">Mettre des individus en mal</span>
                    &quot;Cela est encore pire que la médisance. Celui qui s’y adonne n’entrera jamais au Paradis.&quot;
                  </div>
                  <p>&quot;L’ostentation, la jalousie (envie), l’orgueil et la vanité. Se croire supérieur aux autres.&quot;</p>
               </div>
             </div>
          </motion.section>

          {/* SECTION 4: DISTRACTIONS ET EXHIBITION */}
          <motion.section {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
            <h3 className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] text-center mb-12">Les distractions</h3>
            <p>&quot;Toutes les formes de distractions telles que le tam-tam, la danse, le violon, la guitare, le football, la lutte, etc.&quot;</p>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="p-10 rounded-[3rem] bg-emerald-950/[0.05] border border-emerald-500/20">
                <span className="text-emerald-400 font-bold not-italic text-[10px] uppercase block mb-4">En cas de joie</span>
                <p className="text-white/80">&quot;Remercier Dieu par &laquo; Alhamdou li-Llahi &raquo;, tout en redoublant d’efforts religieux.&quot;</p>
              </div>
              <div className="p-10 rounded-[3rem] bg-red-950/[0.05] border border-red-500/20">
                <span className="text-red-400 font-bold not-italic text-[10px] uppercase block mb-4">En cas de peine</span>
                <p className="text-white/80">&quot;Dire &laquo; Inna li-Llahi wa inna ilayhi râji‘ûn &raquo;, et s’en remettre à Dieu.&quot;</p>
              </div>
            </div>
            <p className="text-red-500 font-bold text-center border-t border-white/5 pt-12">
              &quot;Tous ceux qui s’adonnent à ces jeux, ceux qui les regardent ou en écoutent les commentaires seront précipités dans les feux de l’Enfer.&quot;
            </p>
          </motion.section>

          {/* SECTION 5: LA FAMILLE ET LES FEMMES */}
          <motion.section {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 pb-20 font-serif italic text-lg text-white/70 leading-relaxed text-justify">
            <div className="space-y-12">
              <p>&quot;Élever la voix pour une femme ou se dévêtir ailleurs que dans les lieux destinés aux toilettes. La vue des parties intimes entraîne la mort des anges.&quot;</p>
              
              <div className="p-10 rounded-[3.5rem] bg-gold/[0.02] border border-gold/10 shadow-sm space-y-6">
                <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] block text-center not-italic">Pudeur et Ornement</span>
                <p>&quot;Exhiber ses parures pour la femme, porter des habits transparents ou trop serrés, rester tête nue, se parfumer ou porter des objets bruyants, chacun de ces actes équivaut à la nudité.&quot;</p>
                <p className="text-white/40 text-base border-t border-white/5 pt-6">&quot;Aucun homme autre que le mari ou une personne interdite au mariage ne doit voir les parures, sentir le parfum ou entendre le cliquetis de ces objets...&quot;</p>
              </div>

              <p>&quot;Modifier pour une femme son état originel : se tatouer les lèvres, se balafrer le front ou les joues, se dépigmenter la peau, ou se greffer des cheveux.&quot;</p>
            </div>
          </motion.section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/17')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Sommaire XVII</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/17/b')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}