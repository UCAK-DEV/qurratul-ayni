'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreInvocationsUtilites() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();

  // Récupération des données du chapitre 19 (Invocations et Sourates)
  const chapterData = CHAPTERS.find(c => c.id === "19") || CHAPTERS[18];

  const sectionsInvocations = [
    {
      letter: "A",
      title: "L'AUMÔNE ET SES MÉRITES",
      ar: "فضل الصدقة",
      sub: ["Calamités et Protection", "Aide aux nécessiteux"]
    },
    {
      letter: "B",
      title: "LECTURE DU CORAN",
      ar: "قراءة القرآن",
      sub: ["Prosternation durant la lecture", "Sourates et versets"]
    },
    {
      letter: "C",
      title: "INVOCATIONS ET WIRDS",
      ar: "أدعية وأوراد",
      sub: ["Bismillahi Rahmani Rahimi", "La ilaha ila lahou"]
    },
    {
      letter: "D",
      title: "ACTES ÉQUIVALENTS",
      ar: "أعمال صالحة",
      sub: ["Prières de la matinée", "Services aux musulmans"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6 overflow-hidden relative font-sans">
      {/* Background Decor - Ambiance spirituelle et équilibrée */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/5 blur-[120px] rounded-full opacity-30" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVIII — Spiritualité et Invocations</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]"
        >
          INVOCATIONS <br /><span className="gold-gradient-text italic">ET SOURATES</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold/80 block mb-12 drop-shadow-2xl">أدعية وسور</p>

        {/* Texte intégral de l'introduction - Fidélité absolue au manuscrit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8 text-white/60 font-serif italic text-lg md:text-xl leading-relaxed text-justify mb-16"
        >
          <div className="bg-white/[0.02] p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6">
            <p>
              "De même, si l’on effectue quatre (4) rakas avec la « Fatiha » suivie des sourates « Khoul ya Ayouhal Kâfirouna » (25 fois) et « Khoul Houwa Allahou » (25 fois), on sera préservé du feu de l’enfer, on sera absous de tous ses péchés et ses proches traverseront le « Siraat » comme un éclair."
            </p>
            <p>
              "Celui qui effectue toute sa vie, durant quatre (4) rakas traditionnels juste avant la prière obligatoire du Zohr et quatre autres rakas traditionnels juste après cette même prière, sera préservé du feu de l’enfer et fera partie des premières personnes à entrer au Paradis."
            </p>
            <p>
              "Celui qui, sa vie durant, effectue quatre (4) rakas juste avant la prière obligatoire de l’Asr (17h), bénéficiera de la miséricorde divine."
            </p>
            <p className="border-l-2 border-gold/30 pl-6">
              "La prière du milieu de la matinée témoignera, le jour du Jugement dernier, en faveur de celui qui l’effectue régulièrement. Elle dira au Très-Haut : « Répands sur cette personne ta miséricorde, car elle ne m’a jamais oubliée dans la vie terrestre. »"
            </p>
            <p>
              "En revanche, elle dira à propos de celui qui ne l’a jamais effectuée : « Celui-ci est damné, car il m’a toujours négligée. »"
            </p>
            <p>
              "Celui qui dit 21 fois le soir avant de se coucher « Bismillahi Rahmani Rahimi » sera préservé d’une mort subite, de Satan et des voleurs."
            </p>
            <p className="bg-emerald-950/20 p-6 rounded-2xl border border-emerald-500/10">
              "« Bismilahi rahmani rahimi » est notre rempart contre les djinns. Celui qui le dit avec tout le sérieux et la correction requise se verra absous de 4 000 péchés pour chacune des lettres composant cette « Basmala ». De même, pour chaque lettre, on comptabilisera en son nom (4 000) bénédictions, en outre, il bénéficiera de 4 000 grades."
            </p>
            <p>
               "L’aumône préserve contre les calamités, contre une mort subite et brutale, elle calme la colère divine, annule les péchés, guérit un malade, sert d’abri à son auteur le jour du Jugement dernier, elle multiplie les chances d’acquisition de biens et préserve ces derniers, elle adoucit les épreuves du jugement, elle pèse lourd sur le plateau des bienfaits (le jour du Jugement dernier), elle facilite la traversée de « Siraat », elle élève en grades (daradia) au Paradis, elle réjouit le Tout-Puissant et irrite Satan."
            </p>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:bg-gold/20 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="material-symbols-rounded text-2xl text-gold relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause' : 'play_arrow'}
          </span>
          <span className="relative z-10">
            {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter les utilités'}
          </span>
        </motion.button>
      </div>

      {/* Grid des Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {sectionsInvocations.map((item, idx) => (
          <motion.div
            key={item.letter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => router.push(`/partie/19/${item.letter.toLowerCase()}`)}
            className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-[320px]"
          >
            {/* Lettre en arrière-plan */}
            <span className="absolute -bottom-8 -right-4 text-[180px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-6 group-hover:scale-110"
                  style={{ WebkitTextStroke: '1px white' }}>
              {item.letter}
            </span>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-black text-[10px] italic">
                     {item.letter}
                   </div>
                   <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Section</span>
                </div>
                <span className="font-amiri text-3xl text-gold/30 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>
              
              <h3 className="text-xl font-black text-white tracking-tighter group-hover:gold-gradient-text transition-all leading-tight mb-6 uppercase">
                {item.title}
              </h3>

              <ul className="space-y-3">
                {item.sub.map((sub, sIdx) => (
                  <li key={sIdx} className="text-white/40 text-[13px] flex items-center gap-2">
                    <div className="w-1 h-1 bg-gold/40 rounded-full" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
              Explorer <span className="material-symbols-rounded text-sm">arrow_right_alt</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Persistante */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button
          onClick={() => router.push('/partie/18')}
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button
          onClick={() => router.push('/partie/19/a')}
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
        >
          Commencer
        </button>
      </div>
    </main>
  );
}