'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function LavageMortuairePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "8") || CHAPTERS[7];
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VIII — Section A</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LE LAVAGE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">mortuaire</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">غسل الميت</p>

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
          
          {/* 1. QUI DOIT PROCÉDER AU LAVAGE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Responsabilité du lavage</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">A</span>
              <div className="max-w-4xl relative z-10">
                <p className="text-lg md:text-2xl text-white/80 font-serif leading-relaxed italic border-l-2 border-gold/30 pl-8 space-y-6">
                  Celui-là même désigné éventuellement par l’intéressé avant sa mort, s’il en est capable. Ainsi, une personne peut procéder à la toilette funèbre de son conjoint ; cela s’étend à la « târa ».
                  <br /><br />
                  S’il s’agit d’une femme non mariée ou d’une femme dont le mari ne peut pas procéder à la toilette, dans ce cas, on doit absolument faire appel à une femme la plus proche possible ou la plus intime de la défunte. En l’absence de toute femme, un homme qui ne pourrait pas l’épouser (pour cause d’inceste) peut procéder au lavage, mais en prenant la précaution de lui couvrir tout le corps et de se servir d’une étoffe très épaisse qu’il met entre sa main et le corps.
                  <br /><br />
                  En l’absence de toute femme et de tout homme qui n’aurait pas pu l’épouser de son vivant, on lui fait alors la lustration pulvérale (tîm) ; pour cela, on évitera d’aller au-delà des poignets de ses mains. Si, par contre, une femme est amenée à faire à un homme (mort) la lustration pulvérale, elle peut aller jusqu’à ses coudes. Si un homme procède au lavage d’un autre homme (mort), il doit lui couvrir les parties intimes et les laver à grande eau en ayant soin de se servir d’une étoffe.
                </p>
              </div>
            </div>
          </section>

          {/* 2. LA MÉTHODE DE LAVAGE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Méthode et Mérites</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">كيفية الغسل</span>
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed">
              <p>Il est méritoire de procéder à trois lavages : pour le premier, on utilise des feuilles de jujubier ; pour le second, on le fait conformément aux règles de la grande purification ; et enfin, pour le troisième, on se sert de camphre ou d’eau de cologne.</p>
              <p>Si les trois lavages n’ont pas suffi à le rendre propre, on peut en dépasser le nombre jusqu’à ce qu’il soit propre. Il est néanmoins méritoire que le nombre de lavages reste impair jusqu’à concurrence du nombre sept (7). Au-delà de ce nombre, il n’y a plus de préférence sur le caractère impair du nombre.</p>
              <p>Il est souhaitable de le porter sur quelque chose d’assez élevé afin de permettre à l’eau ayant servi au lavage de couler vers le sol. Il est tout aussi souhaitable, après le lavage, de l’essuyer au moyen d’une serviette, par exemple, avant de le couvrir le plus rapidement possible cependant.</p>
              <p>Si, après le lavage, on constate un nouvel écoulement de souillure, on ne reprend pas le lavage ; on se bornera à enlever la souillure avec de l’eau. Il est recommandé à celui (ou celle) qui procédait au lavage de se laver.</p>
            </div>
          </section>

          {/* 3. PRÉPARATIONS FINALES ET INSCRIPTIONS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Inscriptions sacrées</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 text-center space-y-12">
              <p className="text-white/80 font-serif italic text-lg leading-relaxed max-w-3xl mx-auto">
                Il est recommandé également, avant de recouvrir le mort, de mettre du coton imbibé d’eau de cologne dans ses narines, dans ses aisselles, dans son fondement et dans tous ses orifices. Tout cela s’écrit avec l’index, mais on ne se sert pas d’encre pour le faire.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[3rem] bg-black/40 border border-gold/20 space-y-6">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest">Sur le front</span>
                  <p className="font-amiri text-white text-3xl md:text-4xl dir-rtl leading-relaxed">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
                  <p className="text-gold/40 text-xs italic font-serif">« bismilahi rahmani rahimi »</p>
                </div>
                <div className="p-10 rounded-[3rem] bg-black/40 border border-gold/20 space-y-6">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest">Sur la poitrine</span>
                  <p className="font-amiri text-white text-xl md:text-2xl dir-rtl leading-loose">لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ</p>
                  <p className="text-gold/40 text-xs italic font-serif leading-relaxed">« lahilaha ila lahou mouhamadoune rassôlou lahi sala lahou tahala aleyhi wassalama »</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. LE LINCEUL */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le Linceul</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-xl font-amiri text-gold/40">الكفن</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-8 font-serif italic text-lg text-white/70">
                <h3 className="text-gold font-black text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Pour un homme</h3>
                <ul className="space-y-4">
                  <li>• Un boubou</li>
                  <li>• Un pantalon</li>
                  <li>• Un turban (kâla) avec un pan devant</li>
                  <li>• Deux couvertures pour l’envelopper</li>
                  <li className="pt-6 text-gold font-bold">Total : Cinq (5) morceaux</li>
                </ul>
              </div>
              <div className="p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-8 font-serif italic text-lg text-white/70">
                <h3 className="text-gold font-black text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Pour une femme</h3>
                <ul className="space-y-4">
                  <li>• Un boubou</li>
                  <li>• Un pagne</li>
                  <li>• Un mouchoir de tête</li>
                  <li>• Quatre (4) couvertures pour l’envelopper</li>
                  <li className="pt-6 text-gold font-bold">Total : Sept (7) morceaux</li>
                </ul>
              </div>
            </div>
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 text-center font-serif italic text-base md:text-lg text-white/60 leading-relaxed border-l-4 border-gold">
              Le linceul doit être taillé dans une étoffe blanche ; il doit être composé d’un nombre de morceaux impair. Il faut mettre de l’eau de cologne à chaque morceau devant servir de linceul avant usage ou l’encenser. Il est à noter cependant qu’on n’emporte pas au cimetière un récipient contenant du feu.
            </div>
          </section>

          {/* 5. NOTES PARTICULIÈRES */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Notes et Cas particuliers</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-red-950/[0.03] border border-red-900/20 font-serif italic text-lg text-white/70 leading-relaxed space-y-8">
              <p>Une tierce personne (diambour) de sexe féminin peut laver un garçon âgé au plus de huit (8) ans ; passé cet âge, elle ne peut plus le laver.</p>
              <p>Si celui qui procède au lavage craint l’eau froide, il peut la faire chauffer. Si, de son vivant, le mort craignait l’eau froide, on peut faire chauffer cette eau jusqu’à ce que l’eau atteigne la température qu’il (le mort) aurait souhaitée.</p>
              <p>Il est souhaitable que toute personne qui ne participe pas au lavage ou qui n’aide pas ceux qui y participent s’éloigne des lieux.</p>
              <div className="h-px bg-white/10" />
              <p className="text-white font-bold">
                On doit prier sur le mort s’il s’agit d’une personne qui était née vivante, si l’on est sûr qu’elle était musulmane, si le corps est bien là, s’il n’est pas coupé en morceaux de sorte que la plus grande partie ait disparu.
              </p>
            </div>
          </section>
        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/8')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Sommaire VIII</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/8/b')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}