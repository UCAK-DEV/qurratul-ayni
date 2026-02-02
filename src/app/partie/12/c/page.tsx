'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ActeConjugalPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 12 (Le Mariage)
  const chapterData = CHAPTERS.find(c => c.id === "12") || CHAPTERS[11];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-blue-900/10 blur-[100px] md:blur-[120px] rounded-full" />
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XII — Section C</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          L’ACTE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl">CONJUGAL</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10">الجماع</p>

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

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* 1. ACCUEIL ET PURIFICATION DE LA CHAMBRE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">Accueil et Purification</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-10">
            <p className="text-white/80 italic text-lg font-serif leading-relaxed">
              Si la femme doit rejoindre son mari, il est souhaitable qu’ensemble, ils fassent leurs ablutions dont on recueillera l’eau dans un récipient qu’on versera aux quatre (4) coins de la chambre devant recevoir la mariée.
            </p>
            
            <div className="bg-white/[0.03] border-l-4 border-gold p-8 md:p-10 rounded-r-[2.5rem] space-y-8">
              <p className="text-white/80 italic text-lg font-serif">
                Après quoi, le marié pose sa main sur la tête de la femme et récite :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-gold font-black text-[10px] uppercase mb-2">Ayatoul Koursiyou</p>
                  <p className="text-white font-bold italic">1 fois</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-gold font-black text-[10px] uppercase mb-2">Sourate Yassine</p>
                  <p className="text-white font-bold italic">1 fois</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-gold font-black text-[10px] uppercase mb-2">Khoulouwa lahou</p>
                  <p className="text-white font-bold italic">3 fois</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="font-amiri text-2xl md:text-3xl text-white leading-relaxed text-right dir-rtl border-t border-white/5 pt-8">
                  اللَّهُمَّ أَنْتَ رَبِّي وَرَبُّهَا، وَفِّقْ بَيْنِي وَبَيْنَهَا، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا، إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-gold font-black text-[9px] uppercase tracking-[0.3em] mb-4">Transcription (1 fois) :</p>
                  <p className="text-white/70 text-base italic font-serif leading-relaxed">
                    « alahouma anta rabiwa rabouha wafikhe baïni wa baïnaha innaka alakouli chaïne khadiroune wa arina manâ sikana wa toub aleyna innaka anta at tawâbour rahimou wala hawla wala khouwata ila bilahil aliyil hazimi »
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. L'INTENTION ET L'INVOCATION DU RAPPORT */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">L'Intention et l'Acte</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
            <p className="text-white/70 italic text-lg font-serif leading-relaxed">
              Au moment des rapports, il doit au préalable formuler l’intention de jouir de l’acte en vue de s’épanouir pleinement et solliciter en même temps auprès du Tout-Puissant la naissance d’un enfant dont on sera fier et qui contribue à l’expansion de l’Islam par une pratique saine.
            </p>
            
            <div className="bg-gold/5 p-8 md:p-10 rounded-[2.5rem] border border-gold/10 space-y-6">
               <p className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest text-center">Invocation avant de découvrir les parties intimes</p>
               <p className="font-amiri text-2xl md:text-3xl text-white dir-rtl text-right leading-[1.8]">
                 بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ، اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا، اللَّهُمَّ ارْزُقْنِي مِنْ هَذِهِ وَلَدًا صَالِحًا، وَاجْعَلْهُ تَقِيًّا نَقِيًّا، لَيْسَ فِي خَلْقِهِ زِيَادَةٌ وَلَا نُقْصَانٌ، وَاجْعَلْ عَاقِبَتَهُ وَعَاقِبَتَنَا إِلَى خَيْرٍ يَا أَرْحَمَ الرَّاحِمِينَ.
               </p>
               <p className="text-white/60 italic font-serif text-lg border-t border-gold/10 pt-6">
                 « bismilahi rahmani rahimi alahouma dianibna chaïtana wa dianibich chaïtana ma razakhtana alahouma ourzoukhni minn hazihi waladann sâlihann wadjhalahou takhiyann nakhîyann laysafi khalkhî chiz ziyadatoune walâ noukhsânoune wadjhale akhi batahô wa âkhi batanâ ilâ khaïrine ya ar amar râhimina ».
               </p>
            </div>
            
            <div className="p-8 bg-red-950/10 border border-red-500/20 rounded-[2rem] flex flex-col md:flex-row items-center gap-6">
               <span className="material-symbols-rounded text-red-500 text-4xl">block</span>
               <p className="text-white/80 font-bold italic font-serif text-lg leading-relaxed">
                 Il est interdit aux partenaires de parler, de regarder ses parties intimes ou celles de son conjoint pendant ces rapports.
               </p>
            </div>
          </div>
        </section>

        {/* 3. RECOMMANDATIONS ET HYGIÈNE POST-ACTE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6">
            <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">Recommandations post-acte</h3>
            <p className="text-white/60 italic font-serif text-lg leading-relaxed">
              Il est recommandé, avant d’entamer de nouveaux rapports, que chacun d’eux aille uriner et se laver les parties intimes. Il leur est également recommandé, avant de manger ou de dormir, de procéder à la purification par le lavage si possible ou, à défaut, à la petite ablution afin d’atténuer les souillures.
            </p>
          </div>

          <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-gold font-black text-[10px] uppercase mb-4 tracking-widest">Limites de l'ablution</h3>
              <p className="text-white/60 italic font-serif text-lg leading-relaxed">
                Mais cette ablution ne leur permettra pas de prier ou de toucher le livre saint du Coran.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5">
               <p className="text-red-400 font-bold italic font-serif text-lg leading-tight">
                 Dormir ou manger en état de souillure fait partie des causes qui provoquent la pauvreté.
               </p>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/12/b')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/12/d')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}