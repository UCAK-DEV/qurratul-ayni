'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PratiquesInterditesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 17
  const chapterData = CHAPTERS.find(c => c.id === "17") || CHAPTERS[16];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-red-900/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVII — Section A</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          PRATIQUES <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Interdites</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">المحرمات</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all font-sans"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* SECTION 1: RELIGION ET COMPORTEMENT */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8 text-white/80 italic font-serif text-lg leading-relaxed">
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="text-gold mt-1">•</span>
              <span>Se faire passer pour un saint, pour un Cheikh ou se donner tout autre titre religieux auquel on n’a pas droit.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-gold mt-1">•</span>
              <span>Donner le wird d’une secte religieuse quelconque sans y être autorisé.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-gold mt-1">•</span>
              <span>Porter fréquemment préjudice aux gens par ses actes ou ses paroles.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-gold mt-1">•</span>
              <span>Regarder avec insistance un bel adolescent (garçon ou fille).</span>
            </li>
            <li className="flex gap-4">
              <span className="text-gold mt-1">•</span>
              <span>Regarder une tierce femme, bavarder avec elle, trouver du plaisir dans ses paroles ou dans toute autre chose venant d’elle.</span>
            </li>
          </ul>
        </motion.section>

        {/* SECTION 2: ADULTÈRE */}
        <motion.section {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-red-950/10 border border-red-500/20 space-y-6">
          <h2 className="text-white font-black text-xs uppercase tracking-[0.3em] border-b border-red-500/20 pb-4">L’adultère</h2>
          <div className="space-y-4 text-white/70 italic font-serif text-lg leading-relaxed text-justify">
            <p>"Tout homme ou toute femme célibataire qui en sont coupables sont passibles de cent (100) coups de verge en public."</p>
            <p>"S’ils ne subissent pas ce châtiment ici-bas, ils n’y échapperont pas dans l’au-delà et le subiront en présence de tous les hommes, les premiers comme les derniers."</p>
            <p className="text-white font-bold not-italic">"S’il s’agit d’un homme ou d’une femme ayant déjà contracté mariage, ils sont passibles de la peine de mort."</p>
          </div>
        </motion.section>

        {/* SECTION 3: ALCOOL ET TABAC */}
        <motion.section {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
          <div className="space-y-6 text-white/80 italic font-serif text-lg leading-relaxed">
            <div className="space-y-4">
              <p>"Prendre de la boisson alcoolisée."</p>
              <p>"Celui qui en prend délibérément, ne serait-ce qu’une seule goutte, est passible de quatre-vingts (80) coups de verge en public."</p>
              <p>"S’il ne subit pas ce châtiment ici-bas, il le subira dans l’au-delà en présence de tous les hommes."</p>
              <p className="text-gold not-italic font-sans font-bold uppercase text-xs tracking-widest">"Tout ce qui enivre est assimilé à l’alcool aux yeux de la charia."</p>
            </div>
            <p className="pt-6 border-t border-white/5">"Le tabac sous toutes ses formes (à fumer ou à chiquer)."</p>
          </div>
        </motion.section>

        {/* SECTION 4: LA LANGUE ET LE CŒUR */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <div className="space-y-6 text-white/80 italic font-serif text-lg leading-relaxed">
            <p>"Le mensonge."</p>
            <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5">
              <p>"Dire du mal de quelqu’un en son absence ou écouter celui qui le fait."</p>
              <p className="text-base text-white/60 mt-2">"Celui qui s’est livré une seule fois à ce travers sera le dernier à entrer au Paradis s’il s’en repent avant sa mort. S’il ne s’en repent pas, il sera le premier à être précipité dans les feux de l’Enfer."</p>
            </div>
            <div className="p-6 bg-red-950/10 border-l-4 border-red-500 rounded-r-2xl">
              <p className="font-bold text-white not-italic uppercase text-xs tracking-widest mb-2">Mettre des individus en mal contre d’autres</p>
              <p>"Cela est encore pire que la médisance. Celui qui s’y adonne n’entrera jamais au Paradis."</p>
            </div>
            <p>"L’ostentation, la jalousie (envie), l’orgueil et la vanité. Se croire supérieur aux autres. Le Tout-Puissant n’agréera pas les actes de celui qui incarne l’un de ces défauts."</p>
            <p>"Haïr. Médire. Mettre à nu les défauts d’un musulman ou se moquer de lui, surtout s’il s’agit d’un saint."</p>
          </div>
        </motion.section>

        {/* SECTION 5: LES DISTRACTIONS */}
        <motion.section {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-8">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] text-center">Les distractions</h2>
          <div className="space-y-6 text-white/70 italic font-serif text-lg leading-relaxed">
            <p>"Toutes les formes de distractions telles que le tam-tam, la danse, le violon, la guitare, le football, la lutte, etc."</p>
            <p className="text-red-400">"Tous ceux qui s’adonnent à ces jeux, ceux qui les regardent ou en écoutent les commentaires seront précipités dans les feux de l’Enfer."</p>
            <p>"Manifester sa joie en dansant, en criant, en battant des mains ou par toute autre forme d’exhibition est formellement interdit."</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl space-y-3">
                <span className="text-emerald-400 font-bold not-italic text-[10px] uppercase tracking-widest">En cas de joie</span>
                <p>"Lorsqu’on éprouve de la joie, il convient de remercier Dieu par la formule : <strong className="text-white not-italic">« Alhamdou li-Llahi »</strong>, tout en redoublant d’efforts dans ses pratiques religieuses."</p>
              </div>
              <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl space-y-3">
                <span className="text-red-400 font-bold not-italic text-[10px] uppercase tracking-widest">En cas de peine</span>
                <p>"Hurler ou se rouler par terre lorsqu’on éprouve de la peine est interdit. Il convient alors de dire : <strong className="text-white not-italic">« Inna li-Llahi wa inna ilayhi râji‘ûn »</strong>, et de s’en remettre à Dieu."</p>
              </div>
            </div>

            <p className="text-base text-white/50 border-t border-white/5 pt-6">"Quand une femme rejoint le domicile conjugal, il est interdit aux femmes qu’elle rencontre d’organiser des manifestations avec le voisinage, d’élever la voix ou de dire du mal de la nouvelle venue (khakhar)."</p>
          </div>
        </motion.section>

        {/* SECTION 6: BIENS D'AUTRUI ET PIÉTÉ */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6 italic font-serif text-lg leading-relaxed text-white/80">
          <ul className="space-y-4">
            <li>"Prendre le bien d’autrui contre son gré, que ce soit par la force, le vol ou l’escroquerie."</li>
            <li>"Refuser de payer ses dettes lorsqu’on en a les moyens."</li>
            <li>"Ne pas éviter la souillure, comme se laisser éclabousser par l’urine ou conserver une impureté par négligence, cela fait partie des causes de châtiments dans la tombe."</li>
            <li>"Ne pas accomplir les prières à temps ou les accomplir en état d’impureté."</li>
            <li>"Se montrer complaisant envers les hommes par des actes réprouvés par Dieu."</li>
            <li>"Fouiner dans la vie des autres pour dévoiler leurs défauts tout en cachant les siens."</li>
            <li>"S’attacher excessivement à ce monde périssable et négliger l’au-delà."</li>
            <li>"Tout ce qui endurcit le cœur jusqu’à adopter une attitude hypocrite face à la vérité."</li>
            <li>"L’impertinence (impolitesse)."</li>
            <li>"Porter une bague en argent : cet interdit concerne l’homme."</li>
          </ul>
        </motion.section>

        {/* SECTION 7: LA FAMILLE ET LES FEMMES */}
        <motion.section {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-8">
          <div className="space-y-8 text-white/70 italic font-serif text-lg leading-relaxed">
            <div className="p-6 bg-red-950/10 border border-red-500/20 rounded-2xl">
              <p>"Avoir plus de quatre épouses simultanément. Tout homme qui le fait est passible de la peine de mort. Celui qui commet cette faute et ne s’en repent pas jusqu’à la fin de ses jours sera précipité dans les feux de l’Enfer."</p>
            </div>

            <p>"Élever la voix pour une femme ou se dévêtir ailleurs que dans les lieux destinés aux toilettes. En dehors de ces lieux, les anges sont toujours présents. La vue des parties intimes entraîne leur mort. Chez la femme, seuls le visage et les mains ne sont pas considérés comme des parties intimes."</p>

            <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
              <p>"Exhiber ses parures pour la femme, porter des habits transparents ou trop serrés, rester tête nue, se parfumer ou porter des objets bruyants, chacun de ces actes équivaut à la nudité."</p>
              <p className="text-base text-white/50 mt-4">"Aucun homme autre que le mari ou une personne interdite au mariage (cause d’inceste) ne doit voir les parures, sentir le parfum ou entendre le cliquetis de ces objets, sous peine de commettre un grave péché. C’est pourquoi il est interdit à un homme de rendre visite à une femme et inversement."</p>
            </div>

            <p>"Modifier pour une femme son état originel : se tatouer les lèvres, se balafrer le front ou les joues, se dépigmenter la peau, ou se greffer des cheveux."</p>
            
            <p className="border-l-2 border-gold pl-6 text-white font-bold not-italic">"Divulguer ce qui s’est passé entre époux dans l’intimité du foyer."</p>
          </div>
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/17')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Sommaire XVII
        </button>
        <button 
          onClick={() => router.push('/partie/17/b')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}