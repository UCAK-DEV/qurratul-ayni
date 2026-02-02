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
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XII — Section D</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LA FEMME <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Enceinte</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal">الحامل</p>

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
        
        {/* 1. PRÉCAUTIONS ALIMENTAIRES */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">1. Hygiène et Équité</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-10">
            <div className="p-8 bg-red-950/10 border border-red-500/20 rounded-3xl">
               <p className="text-red-400 font-black text-[10px] uppercase mb-4 tracking-widest">Avertissement premier mois</p>
               <p className="text-white/80 italic text-lg font-serif leading-relaxed">
                 La femme doit éviter, pendant le premier mois de sa grossesse, de boire du lait fermenté, du tamarin, de l’oseille (bissap), du vinaigre et tous les aliments aigres.
               </p>
            </div>
            <p className="text-white/70 italic text-lg font-serif leading-relaxed">
              Le polygame doit traiter ses épouses de manière équitable dans toute la mesure du possible. Il ne doit pas être partial sans raison valable. Certes, il lui sera difficile intérieurement de les traiter équitablement, mais il doit éviter toute attitude partiale très manifeste.
            </p>
          </div>
        </section>

        {/* 2. LE GRIS-GRIS DE PROTECTION (TRANSCRIPTION & ARABE) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">2. Protection Spirituelle</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
            <p className="text-white/70 italic text-lg font-serif leading-relaxed">
              Il est souhaitable d’écrire ce qui suit et d’en faire un gris-gris que l’on fera porter à la femme dès qu’elle est en état de grossesse (Voir annexe I). Après son accouchement, ce gris-gris sera porté au poignet droit de l’enfant s’il s’agit d’un garçon et au poignet gauche s’il s’agit d’une fille :
            </p>
            
            <div className="bg-gold/5 p-8 md:p-10 rounded-[2.5rem] border border-gold/10 space-y-8">
               <p className="font-amiri text-2xl md:text-3xl text-white text-right dir-rtl leading-[1.8]">
                 إِنَّ الَّذِي فَرَضَ عَلَيْكَ الْقُرْآنَ لَرَادُّكَ إِلَى مَعَادٍ. وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا. وَمَا يُعَمَّرُ مِن مُّعَمَّرٍ وَلَا يُنقَصُ مِنْ عُمُرِهِ إِلَّا فِي كِتَابٍ. إِن كَادَتْ لَتُبْدِي بِهِ لَوْلَا أَن رَّبَطْنَا عَلَى قَلْبِهَا لِتَكُونَ مِنَ الْمُؤْمِنِينَ. قُلْ رَبِّي أَعْلَمُ مَن جَاءَ بِالْهُدَى وَمَنْ هُوَ فِي ضَلَالٍ مُّبِينٍ. وَالَّتِي أَحْصَنَتْ فَرْجَهَا فَنَفَخْنَا فِيهَا مِن رُّوحِنَا وَجَعَلْنَاهَا وَابْنَهَا آيَةً لِّلْعَالَمِينَ...
               </p>
               <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                 <p className="text-gold font-black text-[9px] uppercase tracking-widest mb-4">Transcription intégrale :</p>
                 <p className="text-white/60 italic font-serif text-base leading-relaxed text-justify">
                   « Inna lezi farada aleykal khour âna larâdouka ila mahâdine wa khouldiâ al hakhou wa zahakhal bâtilou innal bâtila kâna zahoukhann wamâ you amarou minn mouhamarime walâ youne khassous minn oumourihi ilâ fî kitâbine inna kâdate lâ toubdî bihî lawlâ ann rabatnâ ala khalbinâ litakôna minal zalika ala yassiroume wa baha fou âdou oumi moussa farikhann inn mominîna khoul rabiya ahlamou mann di â ah hil houdeû wa mann houma fi falâline moubînine wal latî akhsanat fardiahâ fanafakhnâ fihâ minn rôhinâ wa diahal nâhâ wabnahâ âyatane lil âlamina wa maryamab bnata himrânal latî akhsanat fardiahâ fanafakhnâ fîhi minn rôhinâ wa sadakhat bikalimati rabihâ &lt;a kitâbihi wa kânat minal khâni tîna lakhad yadj mahoul lâhou achatî taïni beuhdamâ ya zounnâni koulaz zâni ann lâ talâkhayâ ».
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* 3. LES SEPT ABDALLAH (NOMS DES COMPAGNONS) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">3. Rite des Trois Mois</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5">
            <p className="text-white/80 italic text-lg font-serif mb-8 text-center">
              Quand la grossesse atteint trois mois, il est recommandé de réciter les noms suivants et de souffler sur le ventre :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { fr: "Abdoulaye Ibn Omar", ar: "عبد الله بن عمر" },
                 { fr: "Abdoulaye Ibn Massehôd", ar: "عبد الله بن مسعود" },
                 { fr: "Abdoulaye Ibn Habass", ar: "عبد الله بن عباس" },
                 { fr: "Abdoulaye Ibn Zoubeyri", ar: "عبد الله بن الزبير" },
                 { fr: "Abdoulaye Ibn Salâmine", ar: "عبد الله بن سلام" },
                 { fr: "Abdoulaye Ibn Zeydine", ar: "عبد الله بن زيد" },
                 { fr: "Abdoulaye Ibn Oumi Maktône", ar: "عبد الله بن أم مكتوم" }
               ].map((item, i) => (
                 <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center px-8 group hover:border-gold/30 transition-all">
                   <span className="font-amiri text-xl text-gold/80">{item.ar}</span>
                   <span className="text-white/60 text-sm italic font-serif">{item.fr}</span>
                 </div>
               ))}
            </div>
            <p className="font-amiri text-2xl text-gold/60 text-center mt-8 dir-rtl">
              رَضِيَ اللهُ تَعَالَى عَنْهُمْ
            </p>
            <p className="text-center text-white/40 text-xs italic mt-2">« radiya lahou tahala ann houm »</p>
          </div>
        </section>

        {/* 4. NAISSANCE ET PROTECTION FINALE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-widest italic leading-none font-sans">4. Avortements et Accouchement</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-10 text-white/70 italic text-lg font-serif">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-italic font-sans">
              <div className="p-6 bg-white/[0.03] rounded-3xl border border-white/5">
                <span className="text-gold font-black text-[10px] uppercase block mb-3 tracking-widest text-center underline underline-offset-8">Contre la mortalité infantile</span>
                <p className="font-amiri text-3xl text-white text-center mb-4 dir-rtl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</p>
                <p className="text-white/60 text-sm text-center italic font-serif">
                  "S’il s’agit d’une femme dont les enfants meurent en bas âge, on écrit soixante et une (61) fois cette formule qu’on lui fera porter."
                </p>
              </div>
              <div className="p-6 bg-emerald-950/20 rounded-3xl border border-emerald-500/20">
                <span className="text-emerald-400 font-black text-[10px] uppercase block mb-3 tracking-widest">À la naissance</span>
                <p className="text-white/80 text-sm font-serif">
                  "Il est recommandé de réciter la sourate <strong>« ina anzal-nahou »</strong> (إِنَّا أَنزَلْنَاهُ), de faire l’appel à la prière puis de le souffler dans l’oreille droite du bébé ; faire l’appel dans l’oreille gauche."
                </p>
              </div>
            </div>
            
            <p>
              Une fois en travail, on écrira ce qui suit. En faire un breuvage dont on lui fera boire une partie ; avec le reste, lui asperger le corps en partant du nombril vers le bas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-italic font-sans">
              <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-gold">
                <p className="text-white/80 text-sm">
                  <span className="text-gold font-bold uppercase text-[10px] block mb-2 tracking-widest">Tokhantal</span>
                  Transcrire la sourate <strong>« al-haqatou »</strong> (الحاقة), en faire une portion et la lui donner.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-gold">
                <p className="text-white/80 text-sm">
                  <span className="text-gold font-bold uppercase text-[10px] block mb-2 tracking-widest">Protection de l'enfant</span>
                  Transcrire la sourate <strong>« al-baladi »</strong> (البلد), en faire un gris-gris à porter dès la naissance.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/12/c')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/12/e')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}