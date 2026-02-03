'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function AisanceMateriellePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
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
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-emerald-900/10 blur-[100px] md:blur-[120px] rounded-full" />
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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVII — Section D</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          AISANCE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Matérielle Licite</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">الغنى الحلال</p>

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
        
        {/* 1. LE FONDEMENT : LA FOI */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 text-center space-y-6">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em]">Le Pilier Central</h2>
          <p className="font-amiri text-4xl text-white">الْإِيمَانُ بِاللَّهِ</p>
          <p className="text-white/80 italic font-serif text-xl leading-relaxed">
            "La foi en Dieu. Toute aisance matérielle qui n’est pas soutenue par la foi en Dieu n’est qu’un leurre, quelle que soit son importance."
          </p>
        </motion.section>

        {/* 2. ATTITUDES ET HABITUDES RÉGULIÈRES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Pratiques et Attitudes</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Raffermir les liens de parenté par des visites, etc.",
              "Chercher à faire plaisir aux parents (père et mère).",
              "Se laver les mains avant et après le repas.",
              "Prendre l’habitude d’invoquer souvent le nom de Dieu et de se repentir."
            ].map((text, i) => (
              <motion.div key={i} {...fadeInUp} className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex items-start gap-4 italic font-serif text-white/70">
                <span className="text-gold">•</span>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="bg-emerald-950/20 p-8 rounded-[2.5rem] border border-emerald-500/20 space-y-6">
            <h3 className="text-emerald-400 font-black text-[10px] uppercase tracking-widest text-center">Litanies Quotidiennes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center space-y-3">
                <p className="text-white/50 text-xs font-black uppercase">Matin au lever du soleil</p>
                <p className="text-white text-lg font-serif">"300 fois « Bismilahi rahmani rahimi » et 100 fois prière sur le Prophète (PSL)."</p>
              </div>
              <div className="text-center space-y-3">
                <p className="text-white/50 text-xs font-black uppercase">Chaque soir</p>
                <p className="text-white text-lg font-serif">"Prendre l’habitude de réciter la sourate « Alwakhihaty » (L'Événement)."</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. INVOCATIONS SPÉCIFIQUES (SUBSISTANCE ET DETTES) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Douas de Fortune</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          {/* POUR LA SUBSISTANCE */}
          <motion.div {...fadeInUp} className="glass-card p-8 md:p-10 rounded-[3rem] border border-white/5 space-y-6">
            <h3 className="text-gold font-bold text-xs uppercase underline underline-offset-8 decoration-gold/30">Pour celui qui n’a pas de quoi subsister :</h3>
            <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-relaxed dir-rtl">
              بِسْمِ اللَّهِ عَلَى نَفْسِي وَمَالِي وَدِينِي، اللَّهُمَّ رَضِّنِي بِقَضَائِكَ وَبَارِكْ لِي فِيمَا قُدِّرَ لِي حَتَّى لَا أُحِبَّ تَعْجِيلَ مَا أَخَّرْتَ وَلَا تَأْخِيرَ مَا عَجَّلْتَ
            </p>
            <p className="text-white/50 italic font-serif text-sm bg-black/40 p-4 rounded-xl border border-white/5">
              « Bismilahi alla nafsi wa ma li wadîni Allahouma radini bikhadaïka wa bariklî fima khoudrili hata la hou iba tahdjila ma akharta wala takhira mâ adjalta »
            </p>
          </motion.div>

          {/* POUR LES DETTES */}
          <motion.div {...fadeInUp} className="glass-card p-8 md:p-10 rounded-[3rem] border border-white/5 space-y-6">
            <h3 className="text-gold font-bold text-xs uppercase underline underline-offset-8 decoration-gold/30">Pour celui qui est endetté (70 fois après Sobh) :</h3>
            <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-relaxed dir-rtl">
              اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ
            </p>
            <p className="text-white/50 italic font-serif text-sm bg-black/40 p-4 rounded-xl border border-white/5">
              « Allahouma ikfini bilhalalika hane harâmika wa akhinini bifadlika hamane siwaka »
            </p>
            <p className="text-emerald-400 font-black text-[10px] uppercase text-center tracking-[0.2em]">"Il verra ses dettes payées et ses chances d’acquisition multipliées."</p>
          </motion.div>
        </section>

        {/* 4. MULTIPLICATION PAR LES SOURATES ET L'AUMÔNE */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none">Cycles d'Acquisition</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8 italic font-serif text-lg text-white/70">
            <p className="text-center font-sans not-italic text-emerald-400 font-bold uppercase text-xs">Récitation de la Sourate Al-Kawthar</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {[
                 { p: "Matin", n: "30 fois" },
                 { p: "14 heures", n: "25 fois" },
                 { p: "17 heures", n: "20 fois" },
                 { p: "Maghreb", n: "15 fois" },
                 { p: "Soir (Guéwé)", n: "10 fois" }
               ].map((item, i) => (
                 <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                    <p className="text-gold font-bold text-sm mb-1">{item.n}</p>
                    <p className="text-[10px] uppercase font-black text-white/30">{item.p}</p>
                 </div>
               ))}
            </div>
            
            <p className="border-t border-white/5 pt-8">
              "De même, donner l’aumône accroît les chances d’acquisition de biens. Réciter la « Fatiha » de la manière ci-dessus permet également d’augmenter ces chances."
            </p>

            <div className="p-8 bg-gold/5 rounded-3xl border border-gold/20 space-y-4">
               <span className="text-gold font-black text-[10px] uppercase block tracking-widest">Invoquer fréquemment le Prophète :</span>
               <p className="font-amiri text-2xl md:text-3xl text-white text-right dir-rtl">صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَبِآلِهِ وَصَحْبِهِ وَسَلَّمَ وَبَارَكَ</p>
               <p className="text-white/50 text-sm">« Salalahou Tahala Haleyhi bi alihi wa sahbihi wa salama wa bâraka »</p>
               <p className="text-white/80">"Multiplie les chances d’acquisition de biens terrestres."</p>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/17/c')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/17/e')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}