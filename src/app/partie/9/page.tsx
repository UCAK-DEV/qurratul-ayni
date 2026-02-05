'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreLaZakat() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "9") || CHAPTERS[8];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const sectionsZakat = [
    { letter: "A", title: "L'ARGENT ÉPARGNÉ", subtitle: "Al-māl al-muddkhar", ar: "المال المُدَّخَر", icon: "savings", sub: ["Le travail salarié", "Celui qui dispose d'un capital"] },
    { letter: "B", title: "PRODUITS AGRICOLES", subtitle: "Lil-muntajāt az-zirāʿiyya", ar: "المنتجات الزراعية", icon: "agriculture", sub: ["Arachide et Mil", "Règles d'arrosage"] },
    { letter: "C", title: "A PROPOS DU BÉTAIL", subtitle: "Ḥawl al-māshiya", ar: "حول الماشية", icon: "pets", sub: ["Bovins, ovins et caprins", "Seuils de prélèvement"] },
    { letter: "D", title: "QUI A DROIT A LA ZAKAT ?", subtitle: "Man lahu al-ḥaqq", ar: "مستحقو الزكاة", icon: "volunteer_activism", sub: ["Les 8 catégories", "Conditions d'éligibilité"] },
    { letter: "E", title: "ZAKAT AL-FITR", subtitle: "La rupture du jeûne", ar: "زكاة الفطر", icon: "redeem", sub: ["Nature et quantité", "Moment du prélèvement"] }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="max-w-4xl mx-auto text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-4xl font-amiri text-gold-light drop-shadow-sm block mb-4">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">LA <span className="gold-gradient-text">ZAKAT</span></h1>
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-white/50 text-base md:text-lg font-serif italic leading-relaxed">
              &quot;Qui nie cela est un mécréant ; qui cesse délibérément de s’en acquitter... est un impie...&quot;
            </div>
            <motion.button onClick={() => isThisChapterPlaying ? togglePlay() : setChapter(chapterData)} className="group inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl shadow-2xl transition-all">
              <span className={`material-symbols-rounded text-4xl ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>{isThisChapterPlaying ? 'pause_circle' : 'play_circle'}</span>
              <div className="text-left"><p className="text-[10px] uppercase tracking-widest text-white/40">Écouter la leçon</p><p className="text-sm font-bold">Démarrer l'audio</p></div>
            </motion.button>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionsZakat.map((item, idx) => (
            <motion.div key={item.letter} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} onClick={() => router.push(`/partie/9/${item.letter.toLowerCase()}`)} className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden min-h-[340px] flex flex-col justify-between">
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold group-hover:scale-110 transition-transform">
                  <span className="material-symbols-rounded text-2xl">{item.icon}</span>
                </div>
                <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors">{item.ar}</span>
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-gold tracking-widest uppercase opacity-60">Section {item.letter}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors mb-1">{item.title}</h3>
                <p className="text-white/30 text-[10px] font-bold uppercase mb-6">{item.subtitle}</p>
                <ul className="space-y-2">
                  {item.sub.map((sub, sIdx) => sub && (
                    <li key={sIdx} className="text-white/40 text-sm flex items-center gap-3"><span className="w-1 h-1 bg-gold/40 rounded-full" />{sub}</li>
                  ))}
                </ul>
              </div>
              <span className="absolute -bottom-6 -right-4 text-[200px] font-black opacity-[0.03] group-hover:opacity-[0.07] transition-all italic pointer-events-none" style={{ WebkitTextStroke: '1px white' }}>{item.letter}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/8')} className="px-8 py-3 rounded-full text-[10px] font-bold text-white/50 hover:text-white transition-all uppercase">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/9/a')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] font-black hover:scale-105 transition-all shadow-lg uppercase">Commencer</button>
      </nav>
    </main>
  );
}