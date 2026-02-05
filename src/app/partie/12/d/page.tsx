'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function FemmeEnceintePage() {
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XII — Section D</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LA FEMME <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">enceinte</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الحامل</p>

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
          
          {/* 1. PRÉCAUTIONS ET ÉQUITÉ */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Hygiène et Équité</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">D</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed space-y-12 text-justify">
                <div className="p-8 rounded-3xl bg-red-950/[0.05] border border-red-900/20 shadow-sm border-l-4 border-l-red-500">
                  <span className="text-red-400 font-black text-[10px] uppercase tracking-widest block mb-4">Avertissement premier mois</span>
                  La femme doit éviter, pendant le premier mois de sa grossesse, de boire du lait fermenté, du tamarin, de l’oseille (bissap), du vinaigre et tous les aliments aigres.
                </div>
                <p className="border-l-2 border-gold/30 pl-8">
                  Le polygame doit traiter ses épouses de manière équitable dans toute la mesure du possible. Il ne doit pas être partial sans raison valable. Certes, il lui sera difficile intérieurement de les traiter équitablement, mais il doit éviter toute attitude partiale très manifeste.
                </p>
              </div>
            </div>
          </section>

          {/* 2. PROTECTION SPIRITUELLE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Protection Spirituelle</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <p>
                Il est souhaitable d’écrire ce qui suit et d’en faire un gris-gris que l’on fera porter à la femme dès qu’elle est en état de grossesse (Voir annexe I). Après son accouchement, ce gris-gris sera porté au poignet droit de l’enfant s’il s’agit d’un garçon et au poignet gauche s’il s’agit d’une fille :
              </p>
              
              <div className="p-10 rounded-[3.5rem] bg-black/40 border border-gold/20 space-y-10 shadow-sm">
                <p className="font-amiri text-2xl md:text-3xl text-white text-right leading-loose" dir="rtl">
                  إِنَّ الَّذِي فَرَضَ عَلَيْكَ الْقُرْآنَ لَرَادُّكَ إِلَى مَعَادٍ. وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا. وَمَا يُعَمَّرُ مِن مُّعَمَّرٍ وَلَا يُنقَصُ مِنْ عُمُرِهِ إِلَّا فِي كِتَابٍ. إِن كَادَتْ لَتُبْدِي بِهِ لَوْلَا أَن رَّبَطْنَا عَلَى قَلْبِهَا لِتَكُونَ مِنَ الْمُؤْمِنِينَ. قُلْ رَبِّي أَعْلَمُ مَن جَاءَ بِالْهُدَى وَمَنْ هُوَ فِي ضَلَالٍ مُّبِينٍ. وَالَّتِي أَحْصَنَتْ فَرْجَهَا فَنَفَخْنَا فِيهَا مِن رُّوحِنَا وَجَعَلْنَاهَا وَابْنَهَا آيَةً لِّلْعَالَمِينَ...
                </p>
                <div className="space-y-6 pt-10 border-t border-gold/10">
                   <span className="text-gold font-black text-[9px] uppercase tracking-[0.4em]">Transcription intégrale</span>
                   <p className="text-white/60 text-base italic leading-relaxed">
                    « Inna lezi farada aleykal khour āna larâdouka ila mahâdine wa khouldiâ al hakhou wa zahakhal bâtilou innal bâtila kâna zahoukhann wamâ you amarou minn mouhamarime walâ youne khassous minn oumourihi ilâ fî kitâbine inna kâdate lâ toubdî bihî lawlâ ann rabatnâ ala khalbinâ litakôna minal zalika ala yassiroume wa baha fou ādou oumi moussa farikhann inn mominîna khoul rabiya ahlamou mann di ā ah hil houdeû wa mann houma fi falâline moubînine wal latî akhsanat fardiahâ fanafakhnâ fihâ minn rôhinâ wa diahal nâhâ wabnahâ āyatane lil ālamina wa maryamab bnata himrānal latî akhsanat fardiahâ fanafakhnâ fîhi minn rôhinâ wa sadakhat bikalimati rabihâ &lt;a kitâbihi wa kânat minal khâni tîna lakhad yadj mahoul lāhou achatî taïni beuhdamâ ya zounnâni koulaz zâni ann lâ talâkhayâ ».
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. LES SEPT ABDALLAH */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Rite des trois mois</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 space-y-12 font-serif italic">
              <p className="text-center text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                Quand la grossesse atteint trois mois, il est recommandé de réciter les noms suivants et de souffler sur le ventre :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 not-italic font-sans">
                {[
                  { fr: "Abdoulaye Ibn Omar", ar: "عَبْدُ اللهِ بْنُ عُمَرَ" },
                  { fr: "Abdoulaye Ibn Massehôd", ar: "عَبْدُ اللهِ بْنُ مَسْعُودٍ" },
                  { fr: "Abdoulaye Ibn Habass", ar: "عَبْدُ اللهِ بْنُ عَبَّاسٍ" },
                  { fr: "Abdoulaye Ibn Zoubeyri", ar: "عَبْدُ اللهِ بْنُ الزُّبَيْرِ" },
                  { fr: "Abdoulaye Ibn Salâmine", ar: "عَبْدُ اللهِ بْنُ سَلَامٍ" },
                  { fr: "Abdoulaye Ibn Zeydine", ar: "عَبْدُ اللهِ بْنُ زَيْدٍ" },
                  { fr: "Abdoulaye Ibn Oumi Maktône", ar: "عَبْدُ اللهِ بْنُ أُمِّ مَكْتُومٍ" }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex justify-between items-center px-10 group hover:border-gold/30 transition-all shadow-sm">
                    <span className="font-amiri text-2xl text-gold-light opacity-80">{item.ar}</span>
                    <span className="text-white/40 text-xs italic font-serif tracking-wide">{item.fr}</span>
                  </div>
                ))}
              </div>
              <div className="text-center space-y-2">
                <p className="font-amiri text-3xl text-white opacity-40">رَضِيَ اللهُ تَعَالَى عَنْهُمْ</p>
                <p className="text-white/20 text-xs italic">« radiya lahou tahala ann houm »</p>
              </div>
            </div>
          </section>

          {/* 4. NAISSANCE ET ACCOUCHEMENT */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Naissance et Protection</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-lg leading-relaxed text-white/70">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-8">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">Contre la mortalité infantile</h3>
                <p className="font-amiri text-3xl text-white text-center">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</p>
                <p className="text-base text-center">
                  S’il s’agit d’une femme dont les enfants meurent en bas âge, on écrit soixante et une (61) fois cette formule qu’on lui fera porter.
                </p>
              </div>

              <div className="p-10 rounded-[3rem] bg-emerald-950/[0.03] border border-emerald-500/10 space-y-8">
                <h3 className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest border-b border-emerald-500/10 pb-4">À la naissance</h3>
                <p className="text-base">
                  Il est recommandé de réciter la sourate <strong>« ina anzal-nahou »</strong> (إِنَّا أَنزَلْنَاهُ), de faire l’appel à la prière puis de le souffler dans l’oreille droite du bébé ; faire l’appel dans l’oreille gauche.
                </p>
              </div>
            </div>

            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed">
              <p>Une fois en travail, on écrira ce qui suit. En faire un breuvage dont on lui fera boire une partie ; avec le reste, lui asperger le corps en partant du nombril vers le bas.</p>
              <div className="grid md:grid-cols-2 gap-6 not-italic font-sans">
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col group hover:border-gold/30 transition-all shadow-sm">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest border-b border-white/5 pb-4 mb-4">Tokhantal</span>
                  <p className="text-white/70 font-serif italic text-lg leading-relaxed">Transcrire la sourate <strong>« al-haqatou »</strong> (الحاقة), en faire une portion et la lui donner.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col group hover:border-gold/30 transition-all shadow-sm">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest border-b border-white/5 pb-4 mb-4">Protection de l'enfant</span>
                  <p className="text-white/70 font-serif italic text-lg leading-relaxed">Transcrire la sourate <strong>« al-baladi »</strong> (البلد), en faire un gris-gris à porter dès la naissance.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/12/c')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/12/e')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}