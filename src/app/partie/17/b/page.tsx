'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function InterdictionsFormellesPage() {
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XVII — Section B</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              CELA EST <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">formellement interdit</span>
            </h1>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAudioAction}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl mt-8"
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
          
          {/* SECTION 1: LA FEMME ET LE DEVIN */}
          <motion.section {...fadeInUp} className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-justify relative overflow-hidden group">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">B</span>
            <div className="space-y-8 relative z-10">
              <p>
                Sortir de chez soi sans l’autorisation de son mari, même pour une petite distance. Toute femme qui en est coupable encourt la colère divine. Tout ce qu’elle rencontrera sur son chemin — le ciel, la terre, les anges, les djinns — sont impatients de la voir châtiée, la maudissent et lui disent : <span className="text-red-400 font-bold not-italic">« Que Dieu l’éloigne de Sa miséricorde »</span>, et ce jusqu’à ce qu’elle retourne chez elle.
              </p>
              <div className="p-10 rounded-[3rem] bg-red-950/10 border border-red-900/20 shadow-sm border-l-4 border-l-red-500">
                <span className="text-red-400 font-black text-[10px] uppercase tracking-widest block mb-4 font-sans not-italic">Consultation occulte</span>
                Consulter un devin en vue d’être édifié sur son avenir, lequel devin emploie du sable, des cauris, des cornes ou même des bouteilles comme fétiches. Celui qui s’y adonne et qui croit à ce qu’on lui raconte est un mécréant. Si, par contre, il n’y croit pas, Dieu n’agréera pas ses dévotions durant les quarante jours qui suivent cette consultation.
              </div>
            </div>
          </motion.section>

          {/* SECTION 2: PROTOCOLE ET SALUTATIONS */}
          <motion.section {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg text-white/70 leading-relaxed">
            <div className="grid md:grid-cols-2 gap-12">
              <ul className="space-y-6">
                <li className="flex gap-4"><span className="text-gold/40">•</span> Faire appel à un crieur public pour annoncer un décès.</li>
                <li className="flex gap-4"><span className="text-gold/40">•</span> Entrer chez quelqu’un sans saluer et sans y être autorisé.</li>
                <li className="flex gap-4"><span className="text-gold/40">•</span> Aller chez quelqu’un pour fouiner dans ses affaires.</li>
              </ul>
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                <p>Frotter son front ou son nez sur la main de quelqu’un en le saluant ; cela peut rendre malade l’une ou l’autre partie. Si l’on espère tirer quelque baraka, on peut lui baiser la main en évitant de la mouiller.</p>
              </div>
            </div>

            <div className="p-10 rounded-[3.5rem] bg-gold/[0.05] border border-gold/20 space-y-8 text-center shadow-sm not-italic">
              <p className="text-white/60 font-serif italic text-base">L’accolade et la louange :</p>
              <p className="font-amiri text-4xl text-white leading-relaxed" dir="rtl">
                صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ
              </p>
              <p className="text-gold font-bold text-xs tracking-[0.4em]">« Salla Llahou ta‘âlâ ‘alayhi wa sallam »</p>
              <p className="text-white/40 text-sm italic font-serif">...et bénisse l’autre avant de retirer sa main. En procédant ainsi, elles pourront avoir l’absolution de leurs péchés avant de retirer leurs mains.</p>
            </div>

            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-4">
              <span className="text-gold font-black text-[10px] uppercase tracking-widest block font-sans not-italic">La prosternation (Soudjoud)</span>
              <p className="text-base text-justify">Appuyer les deux gros orteils sur le sol ainsi que les deux genoux, poser les deux paumes et le front comme celui qui prie : c’est cela la prosternation. Seul le Tout-Puissant en a droit ; le faire en direction d’une quelconque créature est un péché.</p>
            </div>
          </motion.section>

          {/* SECTION 3: LISTE EXHAUSTIVE DES INTERDITS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-red-400 uppercase tracking-[0.3em]">Code de conduite & Interdits</h2>
              <div className="h-[1px] flex-1 bg-red-950/20" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 font-serif italic text-base md:text-lg text-white/60 leading-relaxed">
              <ul className="space-y-6">
                <li>• Effacer les écrits du Coran avec des crachats.</li>
                <li>• Reproduire une créature vivante (sculptures ou modèles).</li>
                <li>• Accrocher ces reproductions sur un mur (papiers blâmables).</li>
                <li>• Jeter dans le feu une créature vivante.</li>
                <li>• Parler de choses profanes.</li>
                <li>• Regarder les parties intimes d’autrui.</li>
                <li>• Pénétrer dans une mosquée en état d’impureté majeure.</li>
                <li>• Rapports après une pollution nocturne sans lavage.</li>
                <li>• Entrer dans une chambre obscure sans lampe.</li>
                <li>• Parler entre l’appel à la prière et la prière.</li>
                <li>• S’amuser en priant ou donner l’aumône avec vanité.</li>
                <li>• Se laver ou avoir des rapports en plein air.</li>
                <li>• S’endormir avant ou parler après la prière du « Icha ».</li>
                <li>• Dormir seul dans une chambre.</li>
                <li>• Cracher vers la Kaaba ou à sa droite.</li>
              </ul>
              <ul className="space-y-6">
                <li>• Raser/tailler les ongles en état d’impureté majeure.</li>
                <li>• Raser/tailler durant le mois de Tabaski avant le sacrifice.</li>
                <li>• Prier sur un mort entre deux tombes ou s’asseoir sur une.</li>
                <li>• Passer un coupe-coupe ou couteau tiré de son fourreau.</li>
                <li>• Uriner vers la mosquée ou dans un trou.</li>
                <li>• Respirer dans le récipient en buvant.</li>
                <li>• Uriner ou boire en position debout.</li>
                <li>• Manger en se couchant sur le ventre.</li>
                <li>• Se placer entre un endroit ensoleillé et l’ombre.</li>
                <li>• Mettre un pagne en soie (pour l'homme).</li>
                <li>• S’en aller avec une seule chaussure.</li>
                <li>• Porter une bague au majeur.</li>
                <li>• Se déplacer pendant le sermon du vendredi.</li>
                <li>• Invoquer des génies ou porter des amulettes de bois.</li>
                <li>• Boire ou se laver avec de l’eau chauffée au soleil.</li>
              </ul>
            </div>
          </section>

          {/* SECTION 4: COMPORTEMENT ET NATURE */}
          <motion.section {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 space-y-12 pb-20 font-serif italic text-lg text-white/70 leading-relaxed">
            <ul className="space-y-8">
              <li className="flex gap-6"><span className="text-gold/40">/</span> Un imam qui prie sur une place surélevée surplombant les fidèles.</li>
              <li className="flex gap-6"><span className="text-gold/40">/</span> Boire au goulot d’une bouilloire, gargoulette ou théière.</li>
              <li className="flex gap-6"><span className="text-gold/40">/</span> Souffler sur un aliment ou manger un mets très chaud.</li>
              <li className="flex gap-6"><span className="text-gold/40">/</span> Boire dans une tasse ou récipient en or ou en argent.</li>
              <li className="flex gap-6"><span className="text-gold/40">/</span> Se faire distinguer par son habillement (trop long, court, joli ou laid).</li>
              <li className="flex gap-6"><span className="text-gold/40">/</span> Prier au milieu du jour avant le début de la deuxième partie du parcours du soleil.</li>
              <li className="flex gap-6"><span className="text-gold/40">/</span> Tuer des fourmis migratoires, défoliantes, des abeilles, chauves-souris ou un chat.</li>
              <li className="flex gap-6"><span className="text-gold/40">/</span> Vendre un chien non dressé.</li>
            </ul>
          </motion.section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/17/a')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/17/c')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}