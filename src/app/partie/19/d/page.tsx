'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function InvocationsWirdsCompletPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Récupération des données du chapitre 19
  const chapterData = CHAPTERS.find(c => c.id === "19") || CHAPTERS[18];

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
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-emerald-900/5 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XIX — Section D</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          INVOCATIONS <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">& Wirds</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">الأدعية والأوراد</p>

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
        
        {/* SECTION 1: INVOCATIONS ET WIRDS */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-6">INVOCATIONS ET WIRDS</h2>
          <div className="space-y-6 text-white/80 italic font-serif text-lg leading-relaxed">
            <p>On n’enregistrera jamais de péchés à celui qui prend l’habitude de dire le wird « Mouchabahatou acharatou » matin et soir (wird).</p>
            <p>Celui qui, debout au bord de la mer, se met à en compter les vagues jusqu’au nombre de 40 et qui, pour chaque vague, fait le « Takbir » (Allahou Akbar) sera absous.</p>
            <p>Celui qui guide un aveugle en lui tenant la canne sur quarante pas sera absous et rien ne l’empêchera d’aller au Paradis.</p>
            <p>Celui qui se donne la peine d’aider un musulman dans le besoin sera absous (de tous ses péchés) et sera préservé contre l’hypocrisie et contre l’enfer.</p>
            <p>Celui qui dit 100 fois « Allahou Akbar » sera absous.</p>
            <p>Celui qui dit 100 fois « Soubhana lahi » sera considéré comme quelqu’un qui a rendu la liberté à (100) esclaves.</p>
            <p>Celui qui dit (100 fois) « Al hamdou lilahi » sera considéré comme quelqu’un qui a donné en aumône 100 chameaux.</p>
            
            <div className="p-8 bg-gold/5 border border-gold/20 rounded-3xl space-y-6 not-italic font-sans">
              <p className="text-white/80 font-serif italic">Celui qui, après avoir pris son repas, dit :</p>
              <p className="font-amiri text-2xl text-center text-white leading-loose">الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا الطَّعَامَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ</p>
              <p className="text-gold text-xs text-center uppercase tracking-widest">« Alhamdou lilahi leuzi att hamini hazat tahâma waraza khanihi mine khaï minî wala khouwatine »</p>
              <p className="text-white/60 text-sm text-center italic font-serif">sera absous (de tous ses péchés).</p>
            </div>

            <p>Il faut cependant noter qu’invoquer le nom du Prophète « sala lahou tahala aleyhi wa salame » a beaucoup plus d’intérêt que toutes ces prières.</p>
            <p>Invoquer le nom du Prophète, ne serait-ce qu’une fois sa vie, est une obligation divine. C’est pourquoi il est fortement recommandé de le faire. Dieu seul sait le bénéfice qu’on peut en tirer en l’invoquant une infinité de fois. Plus on invoque son nom, plus on aura d’épouses au Paradis et plus on s’éloignera de l’enfer. Cela nous procure d’autres choses qu’il n’est pas possible d’évoquer (par écrit), mais tout ce qui préserve contre les feux de l’enfer et nous permet, par la même occasion, d’aller au Paradis constitue pleinement un motif de satisfaction.</p>
          </div>
        </motion.section>

        {/* SECTION 2: QUELQUES LITANIES (L'INTÉGRALE) */}
        <div className="space-y-8">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] text-center mb-10">Quelques litanies</h2>
          
          <motion.div {...fadeInUp} className="space-y-6 text-white/80 italic font-serif text-lg leading-relaxed px-6">
            <p>Les litanies sont si nombreuses qu’il est impossible de les énumérer. Cependant, nous allons en citer quelques-unes qui permettent à ceux que cela intéresse d’en choisir celles qui leur conviennent. Les voici :</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {/* 1. La plus complète */}
            <motion.div {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6">
              <p className="font-amiri text-2xl text-white text-center leading-loose">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ</p>
              <p className="text-white/50 text-sm italic">« Allahouma Sali alâ seydina mouhamadine wa alâ ali saydina mouhamadine kama sallayta ala ibrahima wa alâ ali ibrahima wa barik alâ saydina Mouhamadine wa ala seydina mouhamadine kama barakta ala ibrahima wa ala ali ibrahima fil âlamina inaka hamidoune madjidoune ».</p>
              <p className="text-white/80 italic text-base border-t border-white/5 pt-4">Cette litanie est la plus complète de toutes les autres. C’est pour cela qu’on l’ajoute au dernier Tachaoude précédant le salut final.</p>
            </motion.div>

            {/* 2. Intercession */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَأَنْزِلْهُ الْمَقْعَدَ الْمُقَرَّبَ عِنْدَكَ يَوْمَ الْقِيَامَةِ</p>
              <p className="text-white/60 text-xs italic">« Allahou salli ala sayidina Mouhamadine wa anezilhou almane zilal moukharaba mineka yawmal khiyamati ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Celui qui dit cette prière bénéficiera de l’intercession du Prophète (PSL).</p>
            </motion.div>

            {/* 3. Protection enfer */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى رُوحِ سَيِّدِنَا مُحَمَّدٍ فِي الْأَرْوَاحِ وَعَلَى جَسَدِهِ فِي الْأَجْسَادِ وَعَلَى قَبْرِهِ فِي الْقُبُورِ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli alâ rôhi sayidina Mouhamadine fil arwâhi wa alâ djazadihi fil adjsâdi wa alâ khabrihi fil khoubôri ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Celui qui dit cette prière n’ira pas en enfer.</p>
            </motion.div>

            {/* 4. Meilleure prière */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ فِي الْأَوَّلِينَ وَالْآخِرِينَ وَفِي الْمَلَأِ الْأَعْلَى إِلَى يَوْمِ الدِّينِ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli alâ sayidina Mouhamadine wa ala ali sayidina Mouhamadine fil awalîna wal akhrina wa fil mala il lahla ila yawmiddini ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Il n’y a pas meilleure prière que celle-ci.</p>
            </motion.div>

            {/* 5. Ridâ */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ صَلَاةً تَكُونُ لَكَ رِضَاءً وَلِحَقِّهِ أَدَاءً وَآتِهِ الْوَسِيلَةَ وَالْمَقَامَ الْمَحْمُودَ الَّذِي وَعَدْتَهُ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli ala sayidina Mouhamadine wa ala ali sayidina Mouhamadine salatane tahônou laka ridâ ane wali hakh-î-ada ane wa hâtihil wasilata wal malakhama Mahmouda leuzi wa ad-tahou ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Celui qui dit cette prière bénéficiera de l’intercession du Prophète (PSL).</p>
            </motion.div>

            {/* 6. Nourriture prochain */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ وَصَلِّ عَلَى الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَالْمُسْلِمِينَ وَالْمُسْلِمَاتِ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli alâ sayidina Mouhamadine abdika wa rassoulika wa salihalal mouminina wa mouminati wal mouslimina wal mouslimati ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Celui qui dit cette prière sera considéré comme celui qui a donné à manger à sa faim à son prochain.</p>
            </motion.div>

            {/* 7. Portes Miséricorde */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">صَلَّى اللَّهُ عَلَى مُحَمَّدٍ</p>
              <p className="text-white/60 text-xs italic">« Allahouma alâ Mouhamadine ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Se verra ouvrir 70 portes dispensatrices de la miséricorde divine, il sera aimé de Dieu et des Musulmans, seuls les hypocrites le haïront.</p>
            </motion.div>

            {/* 8. Absolution immédiate */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَسَلِّمْ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli ala sayidina Mouhamadine wa ala alihi wa salime ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Celui qui dit cette prière sera immédiatement absous.</p>
            </motion.div>

            {/* 9. Les 70 Anges (Complet) */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-gold/10 border border-gold/30 space-y-6">
              <p className="font-amiri text-2xl text-white text-center leading-loose">اللَّهُمَّ يَا رَبَّ سَيِّدِنَا مُحَمَّدٍ وَآلِ سَيِّدِنَا مُحَمَّدٍ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِ سَيِّدِنَا مُحَمَّدٍ وَأَعْطِ سَيِّدِنَا مُحَمَّدًا الدَّرَجَةَ الرَّفِيعَةَ وَالْوَسِيلَةَ فِي الْجَنَّةِ. اللَّهُمَّ يَا رَبَّ سَيِّدِنَا مُحَمَّدٍ وَآلِ سَيِّدِنَا مُحَمَّدٍ اجْزِ سَيِّدِنَا مُحَمَّدًا صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ مَا هُوَ أَهْلُهُ</p>
              <p className="text-white/50 text-[10px] italic text-center leading-relaxed">« Allahouma yâraba sayidina Mouhamadine wa ali sayidina Mouhamadine salli ala sayidina Mouhamadine wa ala ali sayidina Mouhamadine wa ahti sayidina Mouhamadane sallalahou tahala aleyhi wa salama adaradjatar rafiata wal wazilata fil djanata. Allahouma yâraba sayidina Mouhamadine wa ali sayidina Mouhamadine idedjizi sayidina Mouhamadane sallalahou tahala aleyhi wa salama annâmâhouwa ahlouhou ».</p>
              <p className="text-emerald-400 font-black text-xs uppercase tracking-widest text-center">Affecter 70 anges qui enregistreront des bienfaits pendant 1000 jours.</p>
            </motion.div>

            {/* 10. Satisfaction besoins */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ بَيْتِهِ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli alâ sayidina Mouhamadine wa ala ali sayidina Mouhamadine wa ala ali baïti hî ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">100 fois par jour : Dieu satisfera tous nos besoins ici-bas et dans l’au-delà.</p>
            </motion.div>

            {/* 11. Matin et Soir (3 fois) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right leading-loose">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْأَوَّلِينَ وَصَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْآخِرِينَ وَصَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي النَّبِيِّينَ وَصَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْمَلَأِ الْأَعْلَى إِلَى يَوْمِ الدِّينِ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli hala sayidina mouhamadine fil awalina wa salli hala sayidina mouhamadine fil akhirina wa salli hala sayidina mouhamadine fin nabiyîna wa salli hala sayidina mouhamadine fil malâ il ahla ila yawmid dîni ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Bénéficiera de la remise de ses péchés et tous ses besoins seront satisfaits.</p>
            </motion.div>

            {/* 12. Bonheur des deux mondes (1000 fois Vendredi) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَدَدَ مَا فِي عِلْمِ اللَّهِ صَلَاةً دَائِمَةً بِدَوَامِ مُلْكِ اللَّهِ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli hala sayidina mouhamadine hadadamâ fi hilmi lahi sallatane dâ-imatane bi dawâmi moulki lâhi ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Heureux dans ce monde et dans l’autre.</p>
            </motion.div>

            {/* 13. Conservation foi (après Maghreb) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-emerald-950/10 border border-emerald-500/20 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ بِعَدَدِ كُلِّ حَرْفٍ جَرَى بِهِ الْقَلَمُ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli hala sayidina mouhamadine wa hala alihi wa sahbihi wa salama bi hadadi koulli harfine diarâ bihil khalamou ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">10 fois après Maghreb : conservera sa foi jusqu’à sa mort.</p>
            </motion.div>

            {/* 14. Satisfaction tout besoin (1000 fois) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right leading-loose">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ صَلَاةَ أَهْلِ السَّمَاوَاتِ وَالْأَرْضِ عَلَيْهِ وَأَجْرِ يَا مَوْلَانَا لُطْفَكَ الْخَفِيَّ فِي أَمْرِي وَأَرِنِي سِرَّ جَمِيلِ صُنْعِكَ فِيمَا أُؤَمِّلُهُ مِنْكَ يَا رَبَّ الْعَالَمِينَ</p>
              <p className="text-white/60 text-xs italic">« Allahouma Sali hala sayidina mouhamadine wa hala alihi wa sahbihi salata ahly samawâti wal ardi haleyhi wa adjiri yâ mawlâna loutfakal khafiya fî amri wa arni sirra djamili sounhika fîmâ a moulouhô minka ya rabal hâlamina ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Dieu le satisfera pour n’importe quel besoin.</p>
            </motion.div>

            {/* 15. Voir le prophète veille (100 fois) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَنَبِيِّكَ وَرَسُولِكَ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli hala sayidina mouhamadine habdika wa nabiyika wa rassoulika nabiyi loumiyi wa hala alihi wa sahbihi wa salime ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Permet de voir le Prophète en état de veille.</p>
            </motion.div>

            {/* 16. 80 ans de dévotion (80 fois Vendredi Asr) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ النَّبِيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ تَسْلِيمًا</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli hala sayidina wa mawlana mouhamadine nabîyi wa hala alihi wa sahbihi wa salame taslimane ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Absous de 80 ans de péchés et 80 ans de dévotion.</p>
            </motion.div>

            {/* 17. Intelligence du cœur (100 fois) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right leading-loose">اللَّهُمَّ صَلِّ عَلَى نُورِ الْأَنْوَارِ وَسِرِّ الْأَسْرَارِ وَتِرْيَاقِ الْأَغْيَارِ وَمِفْتَاحِ بَابِ الْيَسَارِ سَيِّدِنَا مُحَمَّدٍ الْمُخْتَارِ وَآلِهِ الْأَطْهَارِ وَأَصْحَابِهِ الْأَخْيَارِ عَدَدَ نِعَمِ اللَّهِ وَإِفْضَالِهِ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli hala nouril anewâr wa sîril asrar wa tiryâkhil akh-yare wa miftahi bâbil yassari sayidina mouhamadine al moukhtar wa alihil athar wa ash-â bihil akhyar hadada nihami lâhi wa ifdâlihi ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Guérison angoisses, intelligence du cœur (leeral xol).</p>
            </motion.div>

            {/* 18. Tounadjina (1000 fois besoin) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right leading-loose">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنَجِّينَا بِهَا مِنْ جَمِيعِ الْأَهْوَالِ وَالْآفَاتِ وَتَقْضِي لَنَا بِهَا جَمِيعَ الْحَاجَاتِ وَتُطَهِّرُنَا بِهَا مِنْ جَمِيعِ السَّيِّئَاتِ وَتَرْفَعُنَا بِهَا عِنْدَكَ أَعْلَى الدَّرَجَاتِ وَتُبَلِّغُنَا بِهَا أَقْصَى الْغَايَاتِ مِنْ جَمِيعِ الْخَيْرَاتِ فِي الْحَيَاةِ وَبَعْدَ الْمَمَاتِ</p>
              <p className="text-white/60 text-xs italic leading-relaxed">« Allahouma salli hala sayidina mouhamadine sallâtane tounad djîna biha mine diamihil ahwâli wal âfâti... »</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Besoin satisfait.</p>
            </motion.div>

            {/* 19. Pas d'épreuves au Jugement */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">صَلَّى اللَّهُ عَلَى نَبِيِّنَا مُحَمَّدٍ كُلَّمَا ذَكَرَهُ الذَّاكِرُونَ وَغَفَلَ عَنْ ذِكْرِهِ الْغَافِلُونَ</p>
              <p className="text-white/60 text-xs italic">« Salla lahou hala nabiyina mouhamadine koula mâ zakarahous zâkirôna wa khafala hane zikrihil khâfillôma ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Ne connaîtra pas d’épreuves au jugement dernier.</p>
            </motion.div>

            {/* 20. Absolution (Complet) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ عَدَدَ مَا عَلِمْتَ وَزِنَةَ مَا عَلِمْتَ وَمِلْءَ مَا عَلِمْتَ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli hala sayidina mouhamadine nabiyil loumiyi wa hala alihi wa sahbihi wa sallama hadada mâ halimta wa zinata mâ halimta wa mil amâ halimta ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Sera absous.</p>
            </motion.div>

            {/* 21. Beaucoup de bienfaits */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right leading-loose">اللَّهُمَّ إِنِّي أَسْأَلُكَ بِكَ أَنْ تُصَلِّيَ وَتُسَلِّمَ وَتُبَارِكَ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى سَائِرِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ وَعَلَى آلِهِمْ وَأَصْحَابِهِمْ أَجْمَعِينَ وَأَنْ تَغْفِرَ لِي مَا مَضَى وَتَحْفَظَنِي فِيمَا بَقِيَ</p>
              <p className="text-white/60 text-xs italic leading-relaxed">« Allahouma iniya ashalouka bika antousaliya wa toussalima wa toubârika hala sayidina mouhamadine wa hala sâiril anebiyâ-i wal moursalina... »</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">À cette prière sont liés beaucoup de bienfaits.</p>
            </motion.div>

            {/* 22. Guéri angoisses (500 fois) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ النُّورِ الذَّاتِيِّ وَالسِّرِّ السَّارِي فِي سَائِرِ الْأَسْمَاءِ وَالصِّفَاتِ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli wa salime wa barik hala sayidina mouhamadine an noris zâtiyi wa sirris sari fi sâiril asmâ-i was sifâti ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Guéri de toutes ses angoisses.</p>
            </motion.div>

            {/* 23. SALATOUL FATIHI (INTÉGRALE) */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-emerald-950/20 border border-emerald-500/30 space-y-8">
              <h3 className="text-emerald-400 font-black text-xs uppercase tracking-[0.3em] text-center underline decoration-emerald-500/30 underline-offset-8">SALATOUL FATIHI</h3>
              <p className="font-amiri text-2xl text-white text-center leading-loose">اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ وَالْخَاتِمِ لِمَا سَبَقَ نَاصِرِ الْحَقِّ بِالْحَقِّ وَالْهَادِي إِلَى صِرَاطِكَ الْمُسْتَقِيمِ صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَعَلَى آلِهِ وَأَصْحَابِهِ حَقَّ قَدْرِهِ وَمِقْدَارِهِ الْعَظِيمِ</p>
              <div className="space-y-4 text-white/80 italic font-serif text-base border-t border-white/5 pt-6">
                <p>« Allahouma salli wassalim wa bârrick hala sayidina wa mawlâna mouhamadine al fâtihi lima ouchlikha wal khâtimi limâ sabakha wa nassiril hakha bil hakhi wal hâdi ila sirratikal moustakhim salla lahou tahala alayhi wa alâ âlihi wa asshabihi hakha khadrihi wa mikhdârihil hazimi ».</p>
                <p className="text-emerald-400 font-bold not-italic text-lg">Celui qui dit cette prière une seule fois dans sa vie ne sera pas jeté dans les feux de l’enfer ; celui qui la dit (100 fois) tous les jours bénéficiera de la remise de ses péchés ; en outre, tous ses besoins seront satisfaits.</p>
              </div>
            </motion.div>

            {/* 24. Intercession parents (100 fois) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ فِي كُلِّ لَمْحَةٍ وَنَفَسٍ بِعَدَدِ كُلِّ مَعْلُومٍ لَكَ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli wa sallim wa bârik hala sayidina mouhamadine wa alla ali sayidina mouhamadine fi koulli lamehatine wa nafassi sin bi hadadi koulli mahlômine laka ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Intercédera en faveur de celui qui dit cette prière et de ses parents.</p>
            </motion.div>

            {/* 25. Bonne mémoire (Maghreb) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right leading-loose">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّdٍ وَعَلَى آلِهِ صَلَاةً لَا نِهَايَةَ لَهَا كَمَا لَا نِهَايَةَ لِكَمَالِكَ وَعَدَّ كَمَالِهِ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli hala sayidina mouhamadine wa hala alihi sallatane lânihayâtalahâ kamâ lânihayata likamâlika wa adikamâlihi ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">7 fois : pas enfer. Après Maghreb : bonne mémoire.</p>
            </motion.div>

            {/* 26. Dispensatrice bienfaits */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-right">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ تَسْلِيمًا بِقَدْرِ عَظَمَةِ ذَاتِكَ فِي كُلِّ وَقْتٍ وَحِينٍ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli hala sayidina mouhamadine wa hala alihi wa sahbihi wa sallim taslimane bikhadri azamati zâtika fi koully wakhtine wa hiinine ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest">Dispensatrice de beaucoup de bienfaits.</p>
            </motion.div>

            {/* 27. TASBIHATES (INTÉGRALITÉ) */}
            <motion.div {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
              <p className="font-amiri text-2xl text-white text-center leading-loose">سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ عَدَدَ مَا خَلَقَ اللَّهُ وَعَدَدَ مَا هُوَ خَالِقٌ وَزِنَةَ مَا خَلَقَ وَزِنَةَ مَا هُوَ خَالِقٌ وَمِلْءَ مَا خَلَقَ وَمِلْءَ مَا هُوَ خَالِقٌ وَمِلْءَ سَمَاوَاتِهِ وَمِلْءَ أَرْضِهِ وَمِثْلَ ذَلِكَ وَأَضْعَافَ ذَلِكَ وَمِلْءَ مَا شَاءَ مِنْ شَيْءٍ بَعْدُ وَعَدَدَ خَلْقِهِ وَزِنَةَ عَرْشِهِ وَرِضَا نَفْسِهِ وَمُنْتَهَى رَحْمَتِهِ وَمِدَادَ كَلِمَاتِهِ وَمَبْلَغَ رِضَاهُ حَتَّى يَرْضَى وَإِذَا رَضِيَ وَعَدَدَ مَا ذَكَرَهُ بِهِ خَلْقُهُ فِي جَمِيعِ مَا مَضَى وَعَدَدَ مَا هُمْ ذَاكِرُوهُ فِيمَا بَقِيَ فِي كُلِّ سَنَةٍ وَشَهْرٍ وَجُمُعَةٍ وَيَوْمٍ وَلَيْلَةٍ وَسَاعَةٍ مِنَ السَّاعَةِ وَشَمٍّ وَنَفَسٍ مِنَ الْأَنْفَاسِ وَأَبَدٍ مِنَ الْآبَادِ مِنْ عَدَدٍ إِلَى أَبَدِ أَبَدِ الدُّنْيَا وَأَبَدِ الْآخِرَةِ وَأَبْصَرَ مِنْ ذَلِكَ لَا يَنْقَطِعُ أَوَّلُهُ وَلَا يَنْفَدُ آخِرُهُ. اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ وَأَضْعَافَ أَضْعَافِ ذَلِكَ</p>
              <p className="text-white/50 text-[10px] italic leading-relaxed text-center">« Soubhana lahi wal hamdoulilahi wa la ilaha ila lahou akbar wa lâ hawla wala khouwata ila bilahil haliyil hazîmi... »</p>
              <div className="bg-black/30 p-6 rounded-2xl border-l-2 border-gold/40">
                <p className="text-white/70 italic text-base">Un véridique avait une fois vu en songe un autre véridique qui, lui, était mort... Et le second de lui répondre : les « Tasbihâtes », nous les avons trouvées parmi les grades très élevés chez le Tout-Puissant, c’est la raison pour laquelle nous les avons ajoutées aux prières à dire.</p>
              </div>
            </motion.div>

            {/* 28. Conduite main au Paradis */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-center leading-loose">صَلَوَاتُ اللَّهِ وَمَلَائِكَتِهِ وَأَنْبِيَائِهِ وَرُسُلِهِ وَجَمِيعِ خَلْقِهِ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ وَعَلَيْهِ وَعَلَيْهِمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ</p>
              <p className="text-white/60 text-xs italic">« Salawatou lahi wa malamalahi katifi ikatohi wa anebiya ihi wa rassoulihi wa diamihi khalkhihi ala sayidina Mouhamadine wa ala ali sayidina Mouhamadine wa alayhi wa alayhimou salamou wa mahratou lahi wa barkatouhô ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest leading-relaxed">Le Prophète en personne le conduira de sa main au Paradis.</p>
            </motion.div>

            {/* 29. Rencontre Tombe (Jeudi soir) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-center leading-loose">اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ الْحَبِيبِ الْعَالِي الْقَدْرِ الْعَظِيمِ الْجَاهِ وَعَلَى آلِهِ وَصَحْبِهِ</p>
              <p className="text-white/60 text-xs italic">« Allahouma salli wa salim wa barik ala sayidina wa mawlâna mouhamadine annabiyil loumiyil habibi l hâlil khadril hazimil dia i wa ala alihi wa sahbih ».</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest leading-relaxed">Trouvera dans sa tombe le Prophète (PSL) qui l’attendra pour le recevoir.</p>
            </motion.div>

            {/* 30. Salatoul Kamila (Acquisition biens) */}
            <motion.div {...fadeInUp} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4">
              <p className="font-amiri text-2xl text-white text-center leading-loose">اللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا عَلَى سَيِّدِنَا مُحَمَّدٍ الَّذِي تَنْحَلُّ بِهِ الْعُقَدُ وَتَنْفَرِجُ بِهِ الْكُرَبُ وَتُقْضَى بِهِ الْحَوَائِجُ وَتُنَالُ بِهِ الرَّغَائِبُ وَحُسْنُ الْخَوَاتِمِ وَيُسْتَسْقَى الْغَمَامُ بِوَجْهِهِ الْكَرِيمِ وَعَلَى آلِهِ وَصَحْبِهِ فِي كُلِّ لَمْحَةٍ وَنَفَسٍ بِعَدَدِ كُلِّ مَعْلُومٍ لَكَ</p>
              <p className="text-white/60 text-xs italic leading-relaxed text-center">« Allahouma salli sahlatane kâmilatane wa salim sallâmoune tâmmane ala sayidina Mouhamdine annabiyi loumyi leuzi tann halou bihil houkhadou... »</p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest leading-relaxed text-center">Grade élevé et chances d’acquisition de biens.</p>
            </motion.div>

            {/* 31. La Grande Invocation (Éducation Tarbiya) */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-emerald-950/10 border border-emerald-500/20 space-y-8">
              <p className="font-amiri text-2xl text-white text-center leading-loose">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ فِي كُلِّ لَمْحَةٍ وَنَفَسٍ عَدَدَ مَا وَسِعَهُ عِلْمُ اللَّهِ. اللَّهُمَّ إِنِّي أَسْأَلُكَ بِنُورِ وَجْهِ اللَّهِ الْعَظِيمِ الَّذِي مَلَأَ أَرْكَانَ عَرْشِ اللَّهِ الْعَظِيمِ وَقَامَتْ بِهِ عَوَالِمُ اللَّهِ الْعَظِيمِ أَنْ تُصَلِّيَ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ ذِي الْخُلُقِ الْعَظِيمِ وَالْقَدْرِ الْعَظِيمِ وَعَلَى آلِ نَبِيِّ اللَّهِ الْعَظِيمِ بِقَدْرِ عَظَمَةِ ذَاتِ اللَّهِ الْعَظِيمِ فِي كُلِّ لَمْحَةٍ وَنَفَسٍ عَدَدَ مَا فِي عِلْمِ اللَّهِ الْعَظِيمِ صَلَاةً دَائِمَةً بِدَوَامِ اللَّهِ الْعَظِيمِ تَعْظِيمًا لِحَقِّكَ يَا مَوْلَانَا يَا مُحَمَّدُ يَا ذَا الْخُلُقِ الْعَظِيمِ وَسَلِّمْ عَلَيْهِ وَعَلَى آلِهِ مِثْلَ ذَلِكَ وَاجْمَعْ بَيْنِي وَبَيْنَهُ كَمَا جَمَعْتَ بَيْنَ الرُّوحِ وَالنَّفْسِ ظَاهِرًا وَبَاطِنًا يَقَظَةً وَمَنَامًا وَاجْعَلْهُ يَا رَبِّ رُوحًا لِذَاتِي مِنْ جَمِيعِ الْوُجُوهِ فِي الدُّنْيَا قَبْلَ الْآخِرَةِ يَا عَظِيمُ. أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ غَفَّارَ الذُّنُوبِ ذَا الْجَلَالِ وَالْإِكْرَامِ وَأَتُوبُ إِلَيْهِ مِنْ جَمِيعِ الْمَعَاصِي كُلِّهَا وَالذُّنُوبِ وَالْآثَامِ وَمِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمْدًا وَخَطَأً ظَاهِرًا وَبَاطِنًا قَوْلًا وَفِعْلًا فِي جَمِيعِ حَرَكَاتِي وَسَكَنَاتِي وَخَطَرَاتِي وَأَنْفَاسِي كُلِّهَا دَائِمًا أَبَدًا سَرْمَدًا مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ عَدَدَ مَا أَحَاطَ بِهِ الْعِلْمُ وَأَحْصَاهُ</p>
              <div className="space-y-4 text-white/70 italic text-base border-t border-white/5 pt-6">
                <p>« Bismil lahi rahmâni rahîmi lâ hi laha ila lahou Mouhamadoune rassôloulâhi... »</p>
                <p className="text-emerald-400 font-bold not-italic">Cette prière est plus importante que beaucoup d’autres prières... c’est le Prophète en personne qui l’éduquera (Tarbiya).</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* CONCLUSION FINALE */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-10">
          <p className="text-white/80 italic font-serif text-lg leading-relaxed">
            Il n’est pas possible de citer toutes les prières ; il suffit d’en choisir une, de la dire régulièrement et dans des conditions de pureté absolue avec tout le sérieux nécessaire ; on en tirera beaucoup de profits dans ce monde et dans l’autre.
          </p>
          
          <div className="text-center space-y-10 pt-10 border-t border-white/10">
            <p className="font-amiri text-3xl text-gold leading-loose">
              وَاَللَّهُ عَلَى مَا نَقُولُ وَكِيلٌ وَاَللَّهُ يَخْتَصُّ بِرَحْمَتِهِ مَنْ يَشَاءُ وَاَللَّهُ ذُو الْفَضْلِ الْعَظِيمِ <br />
              سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ <br />
              وَسَلَامٌ عَلَى الْمُرْسَلِينَ <br />
              وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
            </p>
            <div className="inline-block px-12 py-3 border-y-2 border-gold/20">
              <span className="text-gold tracking-[1.5em] font-black text-xs uppercase">Fin</span>
            </div>
          </div>
        </motion.section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/19/c')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/accueil')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Livre Terminé
        </button>
      </div>
    </main>
  );
}