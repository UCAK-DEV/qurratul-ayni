'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function InterdictionsFormellesPage() {
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVII — Section B</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          CELA EST <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Formellement Interdit</span>
        </motion.h1>

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

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* SECTION 1: LA FEMME ET LE DEVIN */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-10">
          <div className="space-y-6">
            <p className="text-white/80 italic font-serif text-lg leading-relaxed">
              Sortir de chez soi sans l’autorisation de son mari, même pour une petite distance. Toute femme qui en est coupable encourt la colère divine. Tout ce qu’elle rencontrera sur son chemin — le ciel, la terre, les anges, les djinns — sont impatients de la voir châtiée, la maudissent et lui disent :
            </p>
            <p className="text-red-400 font-bold text-center text-xl italic font-serif">« Que Dieu l’éloigne de Sa miséricorde »,</p>
            <p className="text-white/80 italic font-serif text-lg leading-relaxed">et ce jusqu’à ce qu’elle retourne chez elle.</p>
          </div>

          <div className="pt-10 border-t border-white/5 space-y-6">
            <p className="text-white/80 italic font-serif text-lg leading-relaxed">
              Consulter un devin en vue d’être édifié sur son avenir, lequel devin emploie du sable, des cauris, des cornes ou même des bouteilles comme fétiches. Celui qui s’y adonne et qui croit à ce qu’on lui raconte est un mécréant. Si, par contre, il n’y croit pas, Dieu n’agréera pas ses dévotions durant les quarante jours qui suivent cette consultation.
            </p>
          </div>
        </motion.section>

        {/* SECTION 2: PROTOCOLE ET SALUTATIONS */}
        <motion.section {...fadeInUp} className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8 text-white/80 italic font-serif text-lg leading-relaxed">
          <ul className="space-y-6">
            <li>• Faire appel à un crieur public pour annoncer un décès.</li>
            <li>• Entrer chez quelqu’un ou dans une chambre sans saluer au préalable et sans y être autorisé.</li>
            <li>• Aller chez quelqu’un pour fouiner dans ses affaires.</li>
            <li>
              • Frotter son front ou son nez sur la main de quelqu’un en le saluant ; cela peut rendre malade l’une ou l’autre partie. Si l’on espère tirer quelque baraka de la personne que l’on salue, on peut lui baiser la main en évitant de la mouiller. Si la personne que l’on salue est susceptible d’être affectée par l’absence de cette formalité, lui baiser la main devient un prêche.
            </li>
          </ul>

          <div className="bg-gold/5 p-8 rounded-[2rem] border border-gold/10 space-y-6 not-italic font-sans">
            <p className="text-white/70 italic font-serif text-base">On peut, en se saluant, se contenter d’une simple accolade ; alors il est souhaitable que chacune des deux personnes loue le Prophète (P.S.L.) :</p>
            <div className="text-center space-y-3">
              <p className="font-amiri text-3xl text-white">صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ</p>
              <p className="text-gold font-bold text-sm tracking-widest uppercase">« Salla Llahou ta‘âlâ ‘alayhi wa sallam »</p>
            </div>
            <p className="text-white/70 italic font-serif text-base">et bénisse l’autre avant de retirer sa main. En procédant ainsi, elles pourront avoir l’absolution de leurs péchés avant de retirer leurs mains.</p>
          </div>

          <div className="p-8 bg-white/[0.02] rounded-[2rem] border border-white/5 text-base space-y-4">
            <p className="text-gold font-black text-[10px] uppercase tracking-widest">La prosternation consiste à :</p>
            <p>Appuyer les deux gros orteils sur le sol ainsi que les deux genoux, poser les deux paumes et le front comme celui qui prie : c’est cela la prosternation. Seul le Tout-Puissant en a droit ; le faire en direction d’une quelconque créature est un péché. Poser le front sur la main d’une personne ou seulement lui baiser la main n’est pas une prosternation. Mais on peut se passer de le faire et se contenter de l’accolade décrite ci-dessus.</p>
          </div>
        </motion.section>

        {/* SECTION 3: LISTE EXHAUSTIVE DES INTERDITS */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-white/70 italic font-serif text-base leading-relaxed">
            <ul className="space-y-4">
              <li>• Effacer les écrits du Coran avec des crachats.</li>
              <li>• Reproduire une créature vivante : l’auteur de ces reproductions sera invité, le Jour du Jugement dernier, à lui trouver une âme, ce qui lui sera impossible.</li>
              <li>• Accrocher ces reproductions sur un mur : S’il s’agit d’objets sculptés ou de modèles, cela constitue un péché. S’il s’agit d’une reproduction sur papier (dessins, photos), c’est simplement blâmable.</li>
              <li>• Jeter dans le feu une créature vivante.</li>
              <li>• Parler de choses profanes.</li>
              <li>• Regarder les parties intimes d’autrui.</li>
              <li>• Pénétrer dans une mosquée en état d’impureté majeure.</li>
              <li>• Avoir des rapports avec sa femme lorsqu’on est en état d’impureté majeure consécutive à un rêve (pollution nocturne).</li>
              <li>• Entrer dans une chambre obscure sans se munir de quoi s’éclairer (lampe).</li>
              <li>• Parler entre l’appel à la prière et la prière proprement dite.</li>
              <li>• S’amuser en priant.</li>
              <li>• Donner de l’aumône avec vanité.</li>
              <li>• Se laver ou avoir des rapports sexuels en plein air.</li>
              <li>• S’endormir avant la prière du « Icha ».</li>
              <li>• Parler de choses profanes après la prière du « Icha ».</li>
              <li>• Dormir seul dans une chambre.</li>
              <li>• Cracher en direction de la Kaaba ou à sa droite.</li>
              <li>• Se raser ou se tailler les ongles, se tresser, se coiffer ou peigner séparément les cheveux en état d’impureté majeure.</li>
            </ul>
            <ul className="space-y-4">
              <li>• Se tailler les ongles ou se raser durant le mois de la Tabaski pour quelqu’un qui a l’intention de faire le sacrifice s’il ne l’a pas encore accompli.</li>
              <li>• Faire la prière sur un mort entre deux tombes.</li>
              <li>• S’asseoir sur une tombe.</li>
              <li>• Se faire passer un coupe-coupe tiré de son fourreau, un canif ou un couteau.</li>
              <li>• Uriner dans un trou ou dans un endroit faisant face à la mosquée.</li>
              <li>• Boire dans un récipient en y respirant.</li>
              <li>• Uriner en position debout.</li>
              <li>• Boire en position debout.</li>
              <li>• Manger en se couchant sur le ventre.</li>
              <li>• Se placer entre un endroit ensoleillé et l’ombre.</li>
              <li>• Mettre un pagne en soie.</li>
              <li>• S’en aller avec une seule chaussure.</li>
              <li>• Porter une bague au majeur.</li>
              <li>• Se déplacer pendant le sermon de l’Imam le vendredi.</li>
              <li>• Invoquer des génies pour guérir quelqu’un.</li>
              <li>• Porter des amulettes ou des bouts de bois.</li>
              <li>• Boire ou se laver avec de l’eau chauffée au soleil.</li>
              <li>• Palper le vêtement d’autrui à son insu ou contre son gré.</li>
            </ul>
          </div>
        </motion.section>

        {/* SECTION 4: COMPORTEMENT ET NATURE */}
        <motion.section {...fadeInUp} className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8 text-white/70 italic font-serif text-lg leading-relaxed">
          <ul className="space-y-6">
            <li>• Un imam qui fait l’appel à la prière ou qui prie sur une place surélevée surplombant les fidèles.</li>
            <li>• Boire au goulot d’une bouilloire, d’une gargoulette ou d’une théière.</li>
            <li>• Souffler sur un aliment.</li>
            <li>• Boire dans une tasse en or ou en argent, ou dans un récipient en or ou en argent.</li>
            <li>• Se faire distinguer par son habillement, que celui-ci soit trop long, trop court, trop joli ou trop laid. Il convient de s’habiller modestement.</li>
            <li>• Faire la prière sur une tombe.</li>
            <li>• Prier au milieu du jour et avant que le soleil n’ait entamé, même légèrement, la deuxième partie de son parcours.</li>
            <li>• Dire du mal d’une personne défunte.</li>
            <li>• Effectuer le petit pèlerinage avant le grand.</li>
            <li>• Manger un mets très chaud.</li>
            <li>• Tuer des fourmis migratoires, des fourmis défoliantes, des abeilles, la chauve-souris ou un chat (la fourmi commune ne fait pas partie de ces insectes qu’il est défendu de tuer).</li>
            <li>• Vendre un chien non dressé.</li>
          </ul>
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/17/a')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/17/c')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}