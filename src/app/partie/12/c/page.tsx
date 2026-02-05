'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ActeConjugalPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XII — Section C</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              L’ACTE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">conjugal</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الجماع</p>

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
          
          {/* 1. ACCUEIL ET PURIFICATION */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Accueil et Purification</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">C</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed border-l-2 border-gold/30 pl-8 space-y-12">
                <p>
                  Si la femme doit rejoindre son mari, il est souhaitable qu’ensemble, ils fassent leurs ablutions dont on recueillera l’eau dans un récipient qu’on versera aux quatre (4) coins de la chambre devant recevoir la mariée.
                </p>
                <div className="space-y-8 not-italic">
                  <p className="text-white/60 font-serif italic text-lg leading-relaxed">
                    Après quoi, le marié pose sa main sur la tête de la femme et récite :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["Ayatoul Koursiyou (1x)", "Sourate Yassine (1x)", "Khoulouwa lahou (3x)"].map((item, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center">
                        <span className="text-white/80 font-black text-[10px] uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-10 rounded-[3rem] bg-gold/[0.05] border border-gold/20 space-y-10">
                    <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">
                      اللَّهُمَّ أَنْتَ رَبِّي وَرَبُّهَا، وَفِّقْ بَيْنِي وَبَيْنَهَا، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا، إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ.
                    </p>
                    <div className="space-y-4">
                      <span className="text-gold font-black text-[9px] uppercase tracking-[0.4em]">Transcription (1 fois)</span>
                      <p className="text-white/90 italic font-serif text-lg leading-relaxed">
                        « alahouma anta rabiwa rabouha wafikhe baïni wa baïnaha innaka alakouli chaïne khadiroune wa arina manâ sikana wa toub aleyna innaka anta at tawâbour rahimou wala hawla wala khouwata ila bilahil aliyil hazimi »
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. L'INTENTION ET L'ACTE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">L'Intention et l'Acte</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <p>
                Au moment des rapports, il doit au préalable formuler l’intention de jouir de l’acte en vue de s’épanouir pleinement et solliciter en même temps auprès du Tout-Puissant la naissance d’un enfant dont on sera fier et qui contribue à l’expansion de l’Islam par une pratique saine.
              </p>
              
              <div className="p-10 rounded-[3.5rem] bg-black/40 border border-gold/20 space-y-10 shadow-sm">
                <span className="text-gold font-black text-center text-[10px] uppercase tracking-[0.4em] block">Invocation avant de découvrir les parties intimes</span>
                <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ، اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا، اللَّهُمَّ ارْزُقْنِي مِنْ هَذِهِ وَلَدًا صَالِحًا، وَاجْعَلْهُ تَقِيًّا نَقِيًّا، لَيْسَ فِي خَلْقِهِ زِيَادَةٌ وَلَا نُقْصَانٌ، وَاجْعَلْ عَاقِبَتَهُ وَعَاقِبَتَنَا إِلَى خَيْرٍ يَا أَرْحَمَ الرَّاحِمِينَ.
                </p>
                <p className="text-gold-light italic md:text-xl border-t border-gold/10 pt-10">
                  « bismilahi rahmani rahimi alahouma dianibna chaïtana wa dianibich chaïtana ma razakhtana alahouma ourzoukhni minn hazihi waladann sâlihann wadjhalahou takhiyann nakhîyann laysafi khalkhî chiz ziyadatoune walâ noukhsânoune wadjhale akhi batahô wa âkhi batanâ ilâ khaïrine ya ar amar râhimina ».
                </p>
              </div>

              <div className="p-10 rounded-[3rem] bg-red-950/[0.05] border border-red-900/20 flex flex-col md:flex-row items-center gap-8 text-white/90">
                <span className="material-symbols-rounded text-red-500 text-5xl">block</span>
                <p className="font-bold">
                  Il est interdit aux partenaires de parler, de regarder ses parties intimes ou celles de son conjoint pendant ces rapports.
                </p>
              </div>
            </div>
          </section>

          {/* 3. RECOMMANDATIONS POST-ACTE */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Hygiène et Conséquences</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-white/70">
              <div className="p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 space-y-8 leading-relaxed">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Recommandations</h3>
                <p className="text-lg">
                  Il est recommandé, avant d’entamer de nouveaux rapports, que chacun d’eux aille uriner et se laver les parties intimes. Il leur est également recommandé, avant de manger ou de dormir, de procéder à la purification par le lavage si possible ou, à défaut, à la petite ablution afin d’atténuer les souillures.
                </p>
              </div>

              <div className="p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 flex flex-col justify-between leading-relaxed">
                <div className="space-y-8">
                  <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Limites de l'ablution</h3>
                  <p className="text-lg">
                    Mais cette ablution ne leur permettra pas de prier ou de toucher le livre saint du Coran.
                  </p>
                </div>
                <div className="pt-10 border-t border-red-900/20">
                  <p className="text-red-400 font-bold text-lg leading-tight">
                    Dormir ou manger en état de souillure fait partie des causes qui provoquent la pauvreté.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/12/b')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/12/d')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}