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
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XVII — Section D</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              AISANCE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">matérielle licite</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الغنى الحلال</p>

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
          
          {/* 1. LE FONDEMENT */}
          <motion.section {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 text-center space-y-8 relative overflow-hidden group">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">D</span>
            <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] block opacity-60">Le Pilier Central</span>
            <p className="font-amiri text-4xl text-white drop-shadow-sm">الْإِيمَانُ بِاللَّهِ</p>
            <p className="max-w-3xl mx-auto text-white/80 font-serif italic text-lg md:text-xl leading-relaxed">
              &quot;La foi en Dieu. Toute aisance matérielle qui n’est pas soutenue par la foi en Dieu n’est qu’un leurre, quelle que soit son importance.&quot;
            </p>
          </motion.section>

          {/* 2. PRATIQUES ET ATTITUDES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Attitudes de Baraka</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Raffermir les liens de parenté par des visites, etc.",
                "Chercher à faire plaisir aux parents (père et mère).",
                "Se laver les mains avant et après le repas.",
                "Prendre l’habitude d’invoquer souvent le nom de Dieu et de se repentir."
              ].map((text, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 italic font-serif text-white/60 text-lg flex items-start gap-4">
                  <span className="text-gold opacity-40">/</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <div className="p-10 md:p-16 rounded-[4rem] bg-emerald-950/[0.03] border border-emerald-500/10 space-y-10">
              <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] block text-center">Litanies Quotidiennes</span>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <p className="text-xs text-white/30 uppercase tracking-widest font-sans">Matin au lever du soleil</p>
                  <p className="text-white/80 font-serif italic text-lg leading-relaxed">300 fois « Bismilahi rahmani rahimi » et 100 fois prière sur le Prophète (PSL).</p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-white/30 uppercase tracking-widest font-sans">Chaque soir</p>
                  <p className="text-white/80 font-serif italic text-lg leading-relaxed">Prendre l’habitude de réciter la sourate « Alwakhihaty » (L'Événement).</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. DOUAS DE FORTUNE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Invocations Spécifiques</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="space-y-8 font-serif italic text-white/70">
              {/* Subsistance */}
              <div className="p-10 rounded-[3.5rem] bg-black/40 border border-white/5 space-y-8 shadow-sm">
                <span className="text-gold font-bold text-[10px] uppercase tracking-widest block border-b border-gold/10 pb-4">Pour celui qui n’a pas de quoi subsister :</span>
                <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">
                  بِسْمِ اللَّهِ عَلَى نَفْسِي وَمَالِي وَدِينِي، اللَّهُمَّ رَضِّنِي بِقَضَائِكَ وَبَارِكْ لِي فِيمَا قُدِّرَ لِي حَتَّى لَا أُحِبَّ تَعْجِيلَ مَا أَخَّرْتَ وَلَا تَأْخِيرَ مَا عَجَّلْتَ
                </p>
                <p className="text-white/40 text-sm leading-relaxed border-t border-white/5 pt-8">
                  « Bismilahi alla nafsi wa ma li wadîni Allahouma radini bikhadaïka wa bariklî fima khoudrili hata la hou iba tahdjila ma akharta wala takhira mâ adjalta »
                </p>
              </div>

              {/* Dettes */}
              <div className="p-10 rounded-[3.5rem] bg-gold/[0.02] border border-gold/10 space-y-8 shadow-sm">
                <span className="text-gold font-bold text-[10px] uppercase tracking-widest block border-b border-gold/10 pb-4">Pour celui qui est endetté (70 fois après Sobh) :</span>
                <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">
                  اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ
                </p>
                <p className="text-gold-light/60 text-sm leading-relaxed border-t border-gold/10 pt-8">
                  « Allahouma ikfini bilhalalika hane harâmika wa akhinini bifadlika hamane siwaka »
                </p>
                <p className="text-emerald-400 font-bold not-italic font-sans text-[10px] uppercase tracking-[0.3em] text-center pt-4">Il verra ses dettes payées et ses chances multipliées</p>
              </div>
            </div>
          </section>

          {/* 4. CYCLES D'ACQUISITION */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Multiplication des chances</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-16 font-serif italic text-white/70">
              <div className="space-y-8">
                <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em] block text-center not-italic">Récitation de la Sourate Al-Kawthar</span>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 not-italic">
                  {[
                    { t: "Matin", n: "30 fois" },
                    { t: "14 heures", n: "25 fois" },
                    { t: "17 heures", n: "20 fois" },
                    { t: "Maghreb", n: "15 fois" },
                    { t: "Soir (Guéwé)", n: "10 fois" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-center group hover:border-gold/30 transition-all">
                      <p className="text-gold font-bold mb-1">{item.n}</p>
                      <p className="text-[9px] uppercase tracking-widest text-white/20">{item.t}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-12 border-t border-white/5 pt-12 text-justify text-lg leading-relaxed">
                <p>&quot;De même, donner l’aumône accroît les chances d’acquisition de biens. Réciter la « Fatiha » de la manière ci-dessus permet également d’augmenter ces chances.&quot;</p>
                
                <div className="p-10 rounded-[3rem] bg-gold/[0.05] border border-gold/20 space-y-8 shadow-sm not-italic">
                  <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] block text-center">Invoquer fréquemment le Prophète</span>
                  <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-relaxed" dir="rtl">
                    صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَبِآلِهِ وَصَحْبِهِ وَسَلَّمَ وَبَارَكَ
                  </p>
                  <p className="text-gold-light italic text-base md:text-xl text-center border-t border-gold/10 pt-8">
                    « Salalahou Tahala Haleyhi bi alihi wa sahbihi wa salama wa bâraka »
                  </p>
                  <p className="text-white/40 text-sm font-bold text-center uppercase tracking-widest">Multiplie les chances d’acquisition de biens terrestres</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/17/c')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/17/e')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}