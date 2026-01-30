'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function LavageMortuairePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Utilisation de l'ID du chapitre 8 pour l'audio
  const chapterData = CHAPTERS.find(c => c.id === "8") || CHAPTERS[7];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block"
        >
          Chapitre VIII — Section A
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LE LAVAGE MORTUAIRE <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mt-2">غسل الميت</span>
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
        
        {/* SECTION 1: QUI DOIT PROCÉDER AU LAVAGE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">QUI EST-CE QUI DOIT PROCÉDER AU LAVAGE ?</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 text-white/80 leading-relaxed italic">
            <p>
              Celui-là même désigné éventuellement par l’intéressé avant sa mort, s’il en est capable.
              Ainsi, une personne peut procéder à la toilette funèbre de son conjoint ; cela s’étend à la « târa ».
            </p>
            <p>
              S’il s’agit d’une femme non mariée ou d’une femme dont le mari ne peut pas procéder à la toilette, dans ce cas, on doit absolument faire appel à une femme la plus proche possible ou la plus intime de la défunte. En l’absence de toute femme, un homme qui ne pourrait pas l’épouser (pour cause d’inceste) peut procéder au lavage, mais en prenant la précaution de lui couvrir tout le corps et de se servir d’une étoffe très épaisse qu’il met entre sa main et le corps.
            </p>
            <p>
              En l’absence de toute femme et de tout homme qui n’aurait pas pu l’épouser de son vivant, on lui fait alors la lustration pulvérale (tîm) ; pour cela, on évitera d’aller au-delà des poignets de ses mains. Si, par contre, une femme est amenée à faire à un homme (mort) la lustration pulvérale, elle peut aller jusqu’à ses coudes. Si un homme procède au lavage d’un autre homme (mort), il doit lui couvrir les parties intimes et les laver à grande eau en ayant soin de se servir d’une étoffe.
            </p>
          </div>
        </section>

        {/* SECTION 2: LA MÉTHODE DE LAVAGE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">LA MÉTHODE ET LES MÉRITES</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-6 text-white/70 italic">
            <p>
              Il est méritoire de procéder à trois lavages : pour le premier, on utilise des feuilles de jujubier ; pour le second, on le fait conformément aux règles de la grande purification ; et enfin, pour le troisième, on se sert de camphre ou d’eau de cologne.
            </p>
            <p>
              Si les trois lavages n’ont pas suffi à le rendre propre, on peut en dépasser le nombre jusqu’à ce qu’il soit propre. Il est néanmoins méritoire que le nombre de lavages reste impair jusqu’à concurrence du nombre sept (7). Au-delà de ce nombre, il n’y a plus de préférence sur le caractère impair du nombre.
            </p>
            <p>
              Il est souhaitable de le porter sur quelque chose d’assez élevé afin de permettre à l’eau ayant servi au lavage de couler vers le sol. Il est tout aussi souhaitable, après le lavage, de l’essuyer au moyen d’une serviette, par exemple, avant de le couvrir le plus rapidement possible cependant.
            </p>
            <p>
              Si, après le lavage, on constate un nouvel écoulement de souillure, on ne reprend pas le lavage ; on se bornera à enlever la souillure avec de l’eau. Il est recommandé à celui (ou celle) qui procédait au lavage de se laver.
            </p>
          </div>
        </section>

        {/* SECTION 3: LES INSCRIPTIONS ET PRÉPARATIONS FINALES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">PRÉPARATIONS FINALES</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-gold/10 space-y-8">
            <p className="text-white/70 italic">
              Il est recommandé également, avant de recouvrir le mort, de mettre du coton imbibé d’eau de cologne dans ses narines, dans ses aisselles, dans son fondement et dans tous ses orifices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gold/5 rounded-3xl border border-gold/20 text-center">
                <p className="text-gold font-bold text-xs uppercase mb-4 tracking-widest">Sur le front</p>
                <p className="text-2xl md:text-3xl font-amiri text-white mb-4" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
                <p className="text-white/40 text-sm italic">« bismilahi rahmani rahimi »</p>
              </div>
              <div className="p-8 bg-gold/5 rounded-3xl border border-gold/20 text-center">
                <p className="text-gold font-bold text-xs uppercase mb-4 tracking-widest">Sur la poitrine</p>
                <p className="text-xl md:text-2xl font-amiri text-white mb-4" dir="rtl">لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ</p>
                <p className="text-white/40 text-xs italic leading-relaxed">
                  « lahilaha ila lahou mouhamadoune rassôlou lahi sala lahou tahala aleyhi wassalama »
                </p>
              </div>
            </div>
            <p className="text-white/40 text-center text-xs italic">
              Tout cela s’écrit avec l’index, mais on ne se sert pas d’encre pour le faire.
            </p>
          </div>
        </section>

        {/* SECTION 4: LE LINCEUL */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">LE LINCEUL</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 space-y-6">
              <h3 className="text-gold font-black text-xs uppercase tracking-widest">Pour un homme</h3>
              <ul className="space-y-3 text-white/70 italic text-sm">
                <li>• Un boubou</li>
                <li>• Un pantalon</li>
                <li>• Un turban (kâla) avec un pan devant</li>
                <li>• Deux couvertures pour l’envelopper</li>
                <li className="pt-4 text-gold font-bold">Total : Cinq (5) morceaux</li>
              </ul>
            </div>
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 space-y-6">
              <h3 className="text-gold font-black text-xs uppercase tracking-widest">Pour une femme</h3>
              <ul className="space-y-3 text-white/70 italic text-sm">
                <li>• Un boubou</li>
                <li>• Un pagne</li>
                <li>• Un mouchoir de tête</li>
                <li>• Quatre (4) couvertures pour l’envelopper</li>
                <li className="pt-4 text-gold font-bold">Total : Sept (7) morceaux</li>
              </ul>
            </div>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl text-center border-l-4 border-gold">
            <p className="text-white/60 italic text-sm">
              Le linceul doit être taillé dans une étoffe blanche ; il doit être composé d’un nombre de morceaux impair. 
              Il faut mettre de l’eau de cologne à chaque morceau devant servir de linceul avant usage ou l’encenser. 
              Il est à noter cependant qu’on n’emporte pas au cimetière un récipient contenant du feu.
            </p>
          </div>
        </section>

        {/* SECTION 5: NOTES PARTICULIÈRES ET ÉTAT DU CORPS */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">CAS PARTICULIERS</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="bg-red-950/10 p-8 md:p-12 rounded-[2.5rem] border border-red-500/20 space-y-6 text-white/70 italic text-sm md:text-base">
            <p>
              Une tierce personne (diambour) de sexe féminin peut laver un garçon âgé au plus de huit (8) ans ; passé cet âge, elle ne peut plus le laver.
            </p>
            <p>
              Si celui qui procède au lavage craint l’eau froide, il peut la faire chauffer. Si, de son vivant, le mort craignait l’eau froide, on peut faire chauffer cette eau jusqu’à ce que l’eau atteigne la température qu’il (le mort) aurait souhaitée.
            </p>
            <p>
              Il est souhaitable que toute personne qui ne participe pas au lavage ou qui n’aide pas ceux qui y participent s’éloigne des lieux.
            </p>
            <p className="font-bold text-white/90">
              On doit prier sur le mort s’il s’agit d’une personne qui était née vivante, si l’on est sûr qu’elle était musulmane, si le corps est bien là, s’il n’est pas coupé en morceaux de sorte que la plus grande partie ait disparu.
            </p>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/8')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Sommaire VIII
        </button>
        <button 
          onClick={() => router.push('/partie/8/b')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}