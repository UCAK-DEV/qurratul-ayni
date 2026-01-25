'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function LesAblutionsCompletes() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "6") || CHAPTERS[5];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 overflow-x-hidden">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Khouratoul Ayni — Partie 5-B
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-6xl font-bold gold-gradient-text leading-tight mb-8"
        >
          LES ABLUTIONS <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80">(الوضوء - AL-WOUDOU)</span>
        </motion.h1>

        <motion.button
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Pause' : 'Écouter la leçon'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">

        {/* INTRODUCTION */}
        <section className="glass-card p-10 rounded-[3rem] border border-white/5">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-serif italic text-center">
            "Toute personne majeure doit faire ses ablutions avant de prier ou de toucher le Saint Coran. Quiconque le conteste est un mécréant."
          </p>
        </section>

        {/* CAUSES D'ANNULATION */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase">Causes de nullité</h2>
            <div className="h-[1px] flex-1 bg-gold/10" />
            <span className="font-amiri text-2xl text-gold/40">نواقض الوضوء</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-[2.5rem] border border-white/5 space-y-4">
              <h3 className="text-white font-bold mb-4">Émissions Naturelles</h3>
              <ul className="text-sm text-white/50 space-y-3">
                <li>• Le pet, le fait d’aller à la selle ou d’uriner</li>
                <li>• La sécrétion de liquide prostatique (Madji) consécutive à une érection</li>
                <li>• La sortie du « wadiyu » (liquide gluant) émis sans plaisir</li>
                <li>• La sécrétion du liquide précédant l’accouchement</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-[2.5rem] border border-white/5 space-y-4">
              <h3 className="text-white font-bold mb-4">Perte de Conscience & Toucher</h3>
              <ul className="text-sm text-white/50 space-y-3">
                <li>• Crise d’épilepsie, folie, évanouissement ou ivresse</li>
                <li>• Le sommeil profond, si court soit-il</li>
                <li>• L'attouchement du corps d'une femme avec intention d'en jouir</li>
                <li>• Toucher sa verge par la paume ou les doigts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* LE SIWOU */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase">Le Siwou</h2>
            <div className="h-[1px] flex-1 bg-gold/10" />
            <span className="font-amiri text-2xl text-gold/40">الاستنجاء</span>
          </div>
          <div className="glass-card p-10 rounded-[3rem] border border-gold/10">
            <p className="text-white/70 leading-relaxed mb-6">
              "Consiste à laver proprement les parties intimes avec de l’eau non souillée avant de quitter les lieux de toilettes."
            </p>
            <div className="bg-white/5 p-6 rounded-2xl italic text-gold-light font-serif">
              "Bismilahi allahouma iniya a honsoubika minal khouboussi wal khabâ issi." (Formule d'entrée)
            </div>
          </div>
        </section>

        {/* PRATIQUE DE L'ABLUTION */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase">Pratique pas à pas</h2>
            <div className="h-[1px] flex-1 bg-gold/10" />
            <span className="font-amiri text-2xl text-gold/40">صفة الوضوء</span>
          </div>
          <div className="grid gap-4">
            {[
              { fr: "Dire Bismillahi et se rincer la bouche.", ar: "التسمية والمضمضة" },
              { fr: "Laver les mains (3 fois) jusqu'aux poignets.", ar: "غسل اليدين" },
              { fr: "Aspirer l'eau par les narines et la rejeter (3 fois).", ar: "الاستنشاق والاستنثار" },
              { fr: "Laver le visage (3 fois) avec l'intention.", ar: "غسل الوجه مع النية" },
              { fr: "Laver les avant-bras jusqu'aux coudes (3 fois).", ar: "غسل اليدين إلى المرفقين" },
              { fr: "Passer l'eau sur la tête du front à la nuque.", ar: "مسح الرأس" },
              { fr: "Laver les oreilles.", ar: "مسح الأذنين" },
              { fr: "Laver les pieds jusqu'aux chevilles (3 fois).", ar: "غسل الرجلين" }
            ].map((step, idx) => (
              <div key={idx} className="glass-card p-6 flex justify-between items-center rounded-2xl border border-white/5">
                <div className="flex gap-6 items-center">
                  <span className="text-gold font-black opacity-20 text-3xl">{idx + 1}</span>
                  <p className="text-white/70 text-lg">{step.fr}</p>
                </div>
                <p className="font-amiri text-gold-light text-2xl hidden md:block">{step.ar}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OBLIGATIONS (FARATA) ET TRADITIONS (SOUNA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-10 rounded-[2.5rem] border border-emerald-500/20">
             <h3 className="text-emerald-500 font-black text-xs uppercase mb-8 border-b border-emerald-500/10 pb-4 flex justify-between">
                OBLIGATOIRES (FARATA) <span className="font-amiri text-xl">فرائض</span>
             </h3>
             <ul className="space-y-4 text-white/60 text-sm">
                <li>1. L'intention au lavage du visage</li>
                <li>2. Laver entièrement le visage</li>
                <li>3. Laver les avant-bras aux coudes</li>
                <li>4. Laver les doigts séparément</li>
                <li>5. Passer l'eau sur les cheveux</li>
                <li>6. Laver les pieds aux chevilles</li>
                <li>7. Frotter chaque partie</li>
                <li>8. Respecter l'ordre et l'enchaînement</li>
             </ul>
          </div>
          <div className="glass-card p-10 rounded-[2.5rem] border border-gold/20">
             <h3 className="text-gold font-black text-xs uppercase mb-8 border-b border-gold/10 pb-4 flex justify-between">
                TRADITIONNELLES (SOUNA) <span className="font-amiri text-xl">سنن</span>
             </h3>
             <ul className="space-y-4 text-white/60 text-sm">
                <li>1. Laver les mains aux poignets</li>
                <li>2. Se rincer la bouche</li>
                <li>3. Aspirer l'eau par les narines</li>
                <li>4. Rejeter l'eau en soufflant</li>
                <li>5. Passer les mains à l'intérieur/extérieur des oreilles</li>
                <li>6. Mouiller à nouveau les mains pour les oreilles</li>
                <li>7. Ramener les mains au front après la nuque</li>
                <li>8. Respecter l'ordre des obligations</li>
             </ul>
          </div>
        </div>

        {/* LES MÉRITES */}
        <section className="glass-card p-12 rounded-[3rem] border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent">
          <h2 className="text-center text-gold font-black text-xs uppercase tracking-[0.4em] mb-10">Les Mérites et le Siwou (Cure-dent)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/60 text-sm">
            <ul className="space-y-3">
              <li>• S’attirer les grâces de Dieu</li>
              <li>• Provoquer l’irritation et la colère de satan</li>
              <li>• Se rappeler le nom de Dieu à la mort</li>
              <li>• Conserver sa foi jusqu’au dernier soupir</li>
            </ul>
            <ul className="space-y-3">
              <li>• Aiguiser l’intelligence</li>
              <li>• Améliorer la vue et faciliter la digestion</li>
              <li>• Rendre les dents plus solides</li>
              <li>• Embellir la chevelure et retarder la vieillesse</li>
            </ul>
          </div>
        </section>

      </div>

      {/* NAVIGATION */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button onClick={() => router.push('/partie/6/a')} className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 transition-all">
          Précédent (6-A)
        </button>
        <button onClick={() => router.push('/partie/6/c')} className="px-10 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-lg hover:scale-105 transition-all">
          Suivant (6-C)
        </button>
      </div>
    </main>
  );
}