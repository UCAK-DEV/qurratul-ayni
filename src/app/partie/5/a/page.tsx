'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PurificationLavageComplet() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "6") || CHAPTERS[5];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sections = [
    {
      titreFr: "IMPORTANCE DE LA PURIFICATION",
      titreAr: "أهمية الطهارة",
      content: [
        {
          fr: "La prière exige entre autres conditions la purification du corps, celle des habits, celle du lieu de prière.",
          ar: "تتطلب الصلاة، من بين شروط أخرى، طهارة البدن والثياب ومكان الصلاة."
        },
        {
          fr: "La plus importante est celle du corps (dianaba), lorsque cela s'impose. Toute personne majeure doit se purifier le corps chaque fois que de besoin.",
          ar: "وأهمها طهارة البدن (الجنابة) عند الضرورة. يجب على كل بالغ تطهير بدنه كلما دعت الحاجة."
        }
      ]
    },
    {
      titreFr: "RAISONS D'UNE PURIFICATION (MOUIBAT)",
      titreAr: "موجبات الغسل",
      content: [
        {
          fr: "1° L'éjaculation : consécutive à un grand plaisir ressenti à l'état de veille ou de sommeil.",
          ar: "١. خروج المني: بتلذذ معتاد في يقظة أو نوم."
        },
        {
          fr: "2° Rapports sexuels : obligatoire pour les deux personnes majeures, même sans éjaculation.",
          ar: "٢. الجماع: يجب على البالغين حتى بدون إنزال."
        },
        {
          fr: "3° Menstrues : après l'arrêt du saignement, quelle qu'en soit la quantité.",
          ar: "٣. الحيض: بعد انقطاع الدم مهما كانت كميته."
        },
        {
          fr: "4° Accouchement : obligatoire même s'il n'est pas accompagné de saignement (Lochies).",
          ar: "٤. النفاس: واجب بعد الولادة ولو بدون دم."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6">
      
      {/* HEADER DE LUXE */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre V — Section A
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-6xl font-bold gold-gradient-text leading-tight mb-8"
        >
          LA PURIFICATION (LAVAGE) <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic">الغسل</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* SECTIONS BILINGUES */}
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-10">
            <div className="flex items-center gap-8">
              <h2 className="text-xl font-black text-gold uppercase tracking-tighter">{section.titreFr}</h2>
              <div className="h-[1px] flex-1 bg-gold/10" />
              <h2 className="text-2xl font-amiri text-gold-light">{section.titreAr}</h2>
            </div>

            <div className="grid gap-6">
              {section.content.map((item, cIdx) => (
                <motion.div 
                  key={cIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-gold/20 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                      <p className="text-2xl md:text-4xl font-amiri text-white leading-[1.8] dir-rtl">
                        {item.ar}
                      </p>
                    </div>
                    <div className="hidden md:block w-[1px] h-20 bg-gold/10 order-2" />
                    <div className="w-full md:w-1/2 text-left order-3 md:order-1 border-l-2 border-gold/10 pl-8">
                      <p className="text-lg text-white/50 font-serif italic leading-relaxed">
                        "{item.fr}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* COMMENT SE PURIFIER (PROCÉDURE) */}
        <section className="space-y-10">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">PROCÉDURE DU LAVAGE</h2>
            <div className="h-[1px] flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">كيفية الغسل</h2>
          </div>

          <div className="glass-card p-10 md:p-16 rounded-[3rem] border border-gold/10">
            <div className="space-y-8">
              {[
                { fr: "Se procurer de l'eau exempte de toute souillure.", ar: "توفير ماء طهور خالي من النجاسة." },
                { fr: "Dire « Bismillahi » et laver les mains 3 fois.", ar: "التسمية وغسل اليدين ثلاثاً." },
                { fr: "Laver les parties souillées et formuler l'intention.", ar: "غسل محل الأذى مع استحضار النية." },
                { fr: "Procéder à l'ablution (sans les pieds).", ar: "الوضوء الكامل (تأخير غسل القدمين)." },
                { fr: "Laver la tête 3 fois jusqu'au cuir chevelu.", ar: "غسل الرأس ثلاثاً حتى يروى الجلد." },
                { fr: "Passer l'eau sur tout le corps (droite puis gauche).", ar: "تعميم الماء على سائر الجسد." }
              ].map((step, idx) => (
                <div key={idx} className="flex justify-between items-center group border-b border-white/5 pb-6 last:border-0">
                  <div className="flex gap-6 items-center flex-1">
                    <span className="text-gold font-black opacity-20 text-4xl">{idx + 1}</span>
                    <p className="text-white/70 group-hover:text-white transition-colors text-lg">{step.fr}</p>
                  </div>
                  <p className="font-amiri text-gold-light text-2xl hidden md:block">{step.ar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OBLIGATIONS ET TRADITIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-10 rounded-[2.5rem] border border-emerald-500/20">
             <div className="flex justify-between items-center mb-8 border-b border-emerald-500/10 pb-4">
                <h3 className="text-emerald-500 font-black text-xs uppercase tracking-widest">OBLIGATOIRE (FARATA)</h3>
                <span className="font-amiri text-xl text-emerald-500/50">الفرائض</span>
             </div>
             <ul className="space-y-4 text-white/60 text-sm">
                <li>• L'intention (Niyya)</li>
                <li>• L'ordre indiqué</li>
                <li>• Mouiller tout le corps</li>
                <li>• Le frottage (Dalk)</li>
                <li>• Mouiller le cuir chevelu</li>
             </ul>
          </div>

          <div className="glass-card p-10 rounded-[2.5rem] border border-gold/20">
             <div className="flex justify-between items-center mb-8 border-b border-gold/10 pb-4">
                <h3 className="text-gold font-black text-xs uppercase tracking-widest">TRADITIONNEL (SOUNA)</h3>
                <span className="font-amiri text-xl text-gold/50">السنن</span>
             </div>
             <ul className="space-y-4 text-white/60 text-sm">
                <li>• Laver les mains au début</li>
                <li>• Se rincer la bouche</li>
                <li>• Aspirer l'eau par le nez</li>
                <li>• Laver les oreilles</li>
             </ul>
          </div>
        </div>

      </div>

    {/* Navigation de bas de page */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button 
          onClick={() => router.push('/partie/5')} // Vers le chapitre précédent
          className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/5/b')} // Vers le chapitre suivant
          className="px-10 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-[0_10px_30px_rgba(201,169,97,0.3)] hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}