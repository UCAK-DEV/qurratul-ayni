'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function ChapitreInvocationsUtilites() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();

  const chapterData = CHAPTERS.find(c => c.id === "19") || CHAPTERS[18];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sectionsInvocations = [
    {
      letter: "A",
      title: "L'AUMÔNE ET SES MÉRITES",
      ar: "فضل الصدقة",
      icon: "volunteer_activism", // Icône de don/aumône
      sub: ["Calamités et Protection", "Aide aux nécessiteux"]
    },
    {
      letter: "B",
      title: "LECTURE DU CORAN",
      ar: "قراءة القرآن",
      icon: "menu_book", // Icône de livre sacré
      sub: ["Prosternation de lecture", "Sourates et versets"]
    },
    {
      letter: "C",
      title: "INVOCATIONS ET WIRDS",
      ar: "أدعية وأوراد",
      icon: "auto_awesome", // Icône de spiritualité/lumière
      sub: ["Bismillahi Rahmani Rahimi", "La ilaha ila lahou"]
    },
    {
      letter: "D",
      title: "ACTES ÉQUIVALENTS",
      ar: "أعمال صالحة",
      icon: "workspace_premium", // Icône de récompense/grades
      sub: ["Prières de la matinée", "Services aux musulmans"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-emerald-950/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <header className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-4 mb-8">
               <span className="text-4xl font-amiri text-gold-light drop-shadow-sm">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</span>
               <div className="flex items-center gap-4">
                  <span className="h-[1px] w-8 bg-gold/30" />
                  <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">Spiritualité — Chapitre XIX</span>
                  <span className="h-[1px] w-8 bg-gold/30" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
              INVOCATIONS <br /><span className="gold-gradient-text italic lowercase font-serif text-6xl md:text-9xl">et sourates</span>
            </h1>

            {/* INTEGRAL TEXT PRESERVATION */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 mb-12 text-justify">
              <div className="max-w-4xl mx-auto text-white/50 font-serif italic text-base md:text-lg leading-relaxed space-y-8">
                <p>
                  &quot;De même, si l’on effectue quatre (4) rakas avec la « Fatiha » suivie des sourates « Khoul ya Ayouhal Kâfirouna » (25 fois) et « Khoul Houwa Allahou » (25 fois), on sera préservé du feu de l’enfer, on sera absous de tous ses péchés et ses proches traverseront le « Siraat » comme un éclair.&quot;
                </p>
                <p>
                  &quot;Celui qui effectue toute sa vie, durant quatre (4) rakas traditionnels juste avant la prière obligatoire du Zohr et quatre autres rakas traditionnels juste après cette même prière, sera préservé du feu de l’enfer et fera partie des premières personnes à entrer au Paradis.&quot;
                </p>
                <p>
                  &quot;Celui qui, sa vie durant, effectue quatre (4) rakas juste avant la prière obligatoire de l’Asr (17h), bénéficiera de la miséricorde divine.&quot;
                </p>
                <div className="p-8 rounded-[2rem] bg-black/40 border border-white/5 shadow-sm border-l-4 border-l-gold">
                   &quot;La prière du milieu de la matinée témoignera, le jour du Jugement dernier, en faveur de celui qui l’effectue régulièrement. Elle dira au Très-Haut : « Répands sur cette personne ta miséricorde, car elle ne m’a jamais oubliée dans la vie terrestre. » En revanche, elle dira à propos de celui qui ne l’a jamais effectuée : « Celui-ci est damné, car il m’a toujours négligée. »&quot;
                </div>
                <p>
                  &quot;Celui qui dit 21 fois le soir avant de se coucher « Bismillahi Rahmani Rahimi » sera préservé d’une mort subite, de Satan et des voleurs.&quot;
                </p>
                <div className="p-10 rounded-[3rem] bg-emerald-950/10 border border-emerald-500/20 text-emerald-50 shadow-sm">
                  &quot;« Bismilahi rahmani rahimi » est notre rempart contre les djinns. Celui qui le dit avec tout le sérieux et la correction requise se verra absous de 4 000 péchés pour chacune des lettres composant cette « Basmala ». De même, pour chaque lettre, on comptabilisera en son nom (4 000) bénédictions, en outre, il bénéficiera de 4 000 grades.&quot;
                </div>
                <p className="border-l-2 border-gold/30 pl-8">
                  &quot;L’aumône préserve contre les calamités, contre une mort subite et brutale, elle calme la colère divine, annule les péchés, guérit un malade, sert d’abri à son auteur le jour du Jugement dernier, elle multiplie les chances d’acquisition de biens et préserve ces derniers, elle adoucit les épreuves du jugement, elle pèse lourd sur le plateau des bienfaits (le jour du Jugement dernier), elle facilite la traversée de « Siraat », elle élève en grades (daradia) au Paradis, elle réjouit le Tout-Puissant et irrite Satan.&quot;
                </p>
              </div>
            </div>

            {/* AUDIO CONTROL */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAudioAction}
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-white/[0.06] hover:border-gold/40 shadow-2xl"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gold blur-md rounded-full transition-opacity ${isThisChapterPlaying ? 'opacity-40' : 'opacity-0'}`} />
                <span className={`material-symbols-rounded text-4xl relative z-10 ${isThisChapterPlaying ? 'text-gold' : 'text-white'}`}>
                  {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
                </span>
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-gold transition-colors">Écouter la leçon</p>
                <p className="text-sm font-bold tracking-tight">
                  {isThisChapterPlaying ? 'Mise en pause' : 'Démarrer l\'audio'}
                </p>
              </div>
            </motion.button>
          </motion.div>
        </header>

        {/* GRID DES SECTIONS - DESIGN COHÉRENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectionsInvocations.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => router.push(`/partie/19/${item.letter.toLowerCase()}`)}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden min-h-[340px] flex flex-col justify-between"
            >
              {/* LARGE BACKGROUND LETTER */}
              <span className="absolute -bottom-6 -right-4 text-[180px] font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-[0.03] group-hover:opacity-[0.08] group-hover:-translate-y-4 italic" 
                    style={{ WebkitTextStroke: '1px white' }}>
                {item.letter}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold group-hover:scale-110 transition-transform">
                      <span className="material-symbols-rounded text-2xl">{item.icon}</span>
                   </div>
                   <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors duration-500">{item.ar}</span>
                </div>
                
                <span className="text-[10px] font-bold text-gold tracking-widest uppercase opacity-60">Section {item.letter}</span>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-4 mt-1 leading-tight uppercase">
                  {item.title}
                </h3>

                <ul className="space-y-2">
                  {item.sub.map((sub, sIdx) => (
                    <li key={sIdx} className="text-white/40 group-hover:text-white/60 text-sm flex items-center gap-3 transition-colors">
                      <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold rounded-full" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Ouvrir l'étude <span className="material-symbols-rounded text-sm">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/18')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/19/a')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Commencer</button>
      </nav>
    </main>
  );
}