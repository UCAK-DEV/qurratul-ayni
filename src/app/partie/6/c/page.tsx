'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PriereObligatoireComplet() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "10") || CHAPTERS[9];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sourates = [
    { 
      t: "AL-FATIHA", 
      ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (١) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (٢) الرَّحْمَنِ الرَّحِيمِ (٣) مَالِكِ يَوْمِ الدِّينِ (٤) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (٥) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (٦) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (٧)",
      tr: "Bismil lâhir rahmânir rahîmi Alhamdoulilâhi rabil âlamîna, rahmânir rahîmi, maliki yawmid dîni, iyyâka nahboudou wa iyyaka nastahînou, ihdinas sirâtal moustahîma, sirâtal leuzîna ann hamta aleyhim, ghaïril makhdôubi aleyhim waladâlina âmîna."
    },
    { 
      t: "AL-QADR", 
      ar: "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ (١) وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ (٢) لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ (٣) تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ (٤) سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ (٥)",
      tr: "Bismil lâhir rahmânir rahîmi Innâ anzalnâhou fî laylatil khadri, wamâ adraka mâ laïlatoul khadri ? Laïlatoul khadri ghaïroune minal fichahrine, tannazzalou malâ-ikatou wa rôuhou fîhâ bihizni rabbihim, mine koulli amrine, salâmoune hiya at tamat lahil fadjri."
    },
    { 
      t: "QURAISH", 
      ar: "لِإِيلَافِ قُرَيْشٍ (١) إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ (٢) فَلْيَعْبُدُوا رَبَّ هَذَا الْبَيْتِ (٣) الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ (٤)",
      tr: "Bismil lâhir rahmânir rahîmi Li îlaa fikhouraïchine îlâ fihim rihlatac chitâ-i wa saïfi, fal yahboudôu rabba hâzal bayti aleuzî athamahoum mine diôuhine wa âmanahoum mine khawfine."
    },
    { 
      t: "AL-FIL", 
      ar: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ (١) أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ (٢) وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ (٣) تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ (٤) فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ (٥)",
      tr: "Bismil lâhir rahmânir rahîmi Alam tara kayfa fahala rabbouka bi ashâbil fîli ? Alam yadjhal kaydahoum fî tadlîline, wa arsala aleyhime tayrane abâbîlane tarmîhim bihidjâratine mine sidjîline, fadjahalakhoum kahasfine mâkôuline."
    },
    { 
      t: "AL-MA'UN", 
      ar: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ (١) فَذَلِكَ الَّذِي يَدُعُّ الْيَتِيمَ (٢) وَلَا يَحُضُّ عَلَى طَعَامِ الْمِسْكِينِ (٣) فَوَيْلٌ لِلْمُصَلِّينَ (٤) الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ (٥) الَّذِينَ هُمْ يُرَاءُونَ (٦) وَيَمْنَعُونَ الْمَاعُونَ (٧)",
      tr: "Bismil lâhir rahmânir rahîmi Ara aytal leuzî youkaz zibou bid dîni ? Fazâlikal leuzî yadhoul yatîma walâ yahoudou halâ tahâmil miskîni, fawayloune lilmoussalîna al-leuzîna houm hanesalâtihim sâhôuna, al-leuzîna houm yourâ ôuna wa yamnahôunal mâhôuna."
    },
    { 
      t: "AL-KAWTHAR", 
      ar: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ (١) فَصَلِّ لِرَبِّكَ وَانْحَرْ (٢) إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ (٣)",
      tr: "Bismil lâhir rahmânir rahîmi Innâ ahtaynâkal kawchara, fassalli lirabbika wankhari, inna châniaka houwa labtarou."
    },
    { 
      t: "AL-KAFIRUN", 
      ar: "قُلْ يَا أَيُّهَا الْكَافِرُونَ (١) لَا أَعْبُدُ مَا تَعْبُدُونَ (٢) وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ (٣) وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ (٤) وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ (٥) لَكُمْ دِينُكُمْ وَلِيَ دِينِ (٦)",
      tr: "Bismil lâhir rahmânir rahîmi Khoulya ayyouhal kâfirouna, lâ ahnoudou mâ tahboudôuna, walâ antoume habidôuna mâ ahboudou, walâ anâ hâbidounn mâ habadtoume, walâ antoume hâbidôuna mâ ahboudou, lakoum dînoukoume, waliya dîni."
    },
    { 
      t: "AN-NASR", 
      ar: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ (١) وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا (٢) فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا (٣)",
      tr: "Bismil lâhir rahmânir rahîmi Izâ djâ-a nasroul lâhi wal fathou, wara aytan nâssa yadhoulôuna fî dînil lâhi afwâdjan, fasabbih bihamdi rabbika wastakhfirhou, innahôu kâna tawwâbane."
    },
    { 
      t: "AL-MASAD", 
      ar: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ (١) مَا أَغْنَى عَنْهُ مَالُهُ وَمَا كَسَبَ (٢) سَيَصْلَى نَارًا ذَاتَ لَهَبٍ (٣) وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ (٤) فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ (٥)",
      tr: "Bismil lâhir rahmânir rahîmi Tabat yadâ abî lahabinn, watabba mâ ahné anhou, mâ lahôu wa mâ kassaba, sayas lâ nârane zâta lahabine, wamrâatouhôu hammâlatoul hatabi fîdj îdihâ, habloune mine massadine."
    },
    { 
      t: "AL-IKHLAS", 
      ar: "قُلْ هُوَ اللَّهُ أَحَدٌ (١) اللَّهُ الصَّمَدُ (٢) لَمْ يَلِدْ وَلَمْ يُولَدْ (٣) وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ (٤)",
      tr: "Bismil lâhir rahmânir rahîmi Khou l houwa allahou ahadoune, allahous samadou, lam yalid walam yôulad, walam yakoun lahôu koufôu-ann ahadoune."
    },
    { 
      t: "AL-FALAQ", 
      ar: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (١) مِنْ شَرِّ مَا خَلَقَ (٢) وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ (٣) وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ (٤) وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ (٥)",
      tr: "Bismil lâhir rahmânir rahîmi Khoula ahôuzou birabbil falakhi mine charri mâ khalakha, wa mine charri khâsikhine izâ wakhaba, wa mine charrin naffâchâti fîl houkhadi, wa mine charri hâsidine izâ hassada."
    },
    { 
      t: "AN-NAS", 
      ar: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ (١) مَلِكِ النَّاسِ (٢) إِلَهِ النَّاسِ (٣) مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ (٤) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ (٥) مِنَ الْجِنَّةِ وَالنَّاسِ (٦)",
      tr: "Bismil lâhir rahmânir rahîmi Khoula ahôuzou birabbin nâssi, maliki nâssi, ilâhi nâssi, mine charril was wâsil khannâsi aleuzî, youwaswisou fî soudouri nâssi minal djinnati wa nâssi."
    }
  ];

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VI — Section C</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
              LES CINQ <br /> <span className="gold-gradient-text italic font-serif lowercase">prières obligatoires</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الصلوات الخمس المفروضة</p>

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
          
          {/* 1. OBLIGATION DE LA MOSQUÉE */}
          <section className="space-y-12">
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">C</span>
              <div className="max-w-4xl relative z-10">
                <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic border-l-2 border-gold/30 pl-8">
                  Tout homme habitant à proximité d’une mosquée doit s’y rendre pour s’acquitter de ses prières ; il ne doit pas les faire chez soi en même temps qu’à la mosquée. Le fait de ne pas aller prier à la mosquée sans excuse valable est assimilable au fait de ne pas prier du tout.
                </p>
              </div>
            </div>
          </section>

          {/* 2. INTERDICTIONS ET COMPORTEMENT */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Interdictions et Comportement</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid gap-8">
              <div className="p-10 rounded-[2.5rem] bg-red-500/[0.02] border border-red-500/20 space-y-8">
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  À l’intérieur d’une mosquée, il est formellement interdit de causer, d’invoquer le nom de Dieu, d’énumérer le chapelet, de faire des prières ou de lire le Coran, sauf si l’assemblée le fait en même temps, ou si l’on est porteur d’un message. En dehors de ces deux cas, on doit prier à voix très basse, si basse qu’on ne dérange pas son voisin immédiat.
                </p>
                <div className="h-[1px] w-12 bg-white/10" />
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  Il est également interdit de promener son regard partout, d’étendre ses jambes, de faire craquer les articulations des doigts, de tailler ses ongles, de se gratter, de chercher ou tuer des poux, de cracher ou de se moucher (sauf dans ses vêtements), de rire, de sourire, de s’amuser, de jouer avec ses mains ou avec des bâtonnets, de faire des traits ou des points sur le sol. On doit invoquer constamment le nom d’Allah à voix basse, rester tranquille et se taire ; sinon, on est tenu de s’en aller.
                </p>
              </div>
            </div>
          </section>

          {/* 3. RÈGLES DE L'IMAM ET DES GUIDÉS */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-emerald-500/[0.02] border border-emerald-500/10 space-y-6">
              <h3 className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest">Mérites de l'Imam</h3>
              <p className="text-white/70 font-serif italic text-base leading-relaxed">
                Il est méritoire pour l’Imam d’attendre le rappel (likhâm) avant de se mettre sur la place d’où il doit diriger la prière. Que l’on soit à la mosquée ou ailleurs, il est aussi méritoire pour ce dernier de changer sa position après le salut final. Il est également méritoire pour l’Imam de se déplacer dès que le « tassap » (dévotions qui suivent le salut final) est terminé.
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 space-y-6">
              <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest">Règles des Guidés (Mamoumes)</h3>
              <p className="text-white/70 font-serif italic text-base leading-relaxed">
                Quant aux mamoumes ou guidés, ils ne doivent pas sortir avant l’Imam, sauf si ce dernier a l’habitude de rester longtemps dans la mosquée. Celui qui prie derrière un Imam doit le voir ou entendre sa voix, ou suivre quelqu’un qui le voit ou l’entend ; autrement, sa prière n’est pas valable.
              </p>
            </div>
          </section>

          {/* 4. LE KHOUNAUTE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Le Khounaute (Matin)</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 text-center space-y-12">
              <p className="text-white/80 font-serif italic text-lg max-w-2xl mx-auto leading-relaxed">
                &quot;Pour la prière du matin, il est méritoire de réciter après la sourate du 2e rakka le « khounaute » à voix basse. Voici le « khounaute » :&quot;
              </p>
              <p className="font-amiri text-white text-2xl md:text-4xl dir-rtl leading-[2.2]">
                اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنَخْنَعُ لَكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَكْفُرُ بِكَ. اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَى وَنَحْفِدُ نَرْجُو رَحْمَتَكَ وَنَخَافُ عَذَابَكَ الْجِدَّ، إِنَّ عَذَابَكَ بِالْكَافِرِينَ مُلْحِقٌ.
              </p>
              <p className="text-gold/60 font-serif italic text-xs md:text-sm tracking-widest leading-relaxed px-4">
                « Allahouma innastahînouka wa nastakhfirrouka wa nôuminoubika wa natawakkalou alayka wa nakhnahou laka wa nakhlahou wa natroukoumannyakk fourou bika. Allahouma iyyâka nahboudou wa laka noussalli wa nasdioudou et ileyka nasha wa nahfidou nardiôu rahmataka wa nakhâfou hazâbakal djidda, inna hazâbaka bilkéfirîna moulhikhoune ».
              </p>
              <div className="h-[1px] w-12 bg-gold/20 mx-auto" />
              <p className="text-white/40 text-[10px] italic font-serif">
                L’omission délibérée du khounaute n’annule pas la prière. La réparation de la prière par une prosternation supplémentaire annule la prière.
              </p>
            </div>
          </section>

          {/* 5. SOURATES USUELLES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Sourates Usuelles</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <p className="text-white/50 font-serif italic text-lg text-center max-w-2xl mx-auto leading-relaxed">
              &quot;celui qui veut s’acquitter de sa prière doit les apprendre par cœur&quot;
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {sourates.map((s, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-8 group hover:border-gold/20 transition-all"
                >
                  <h5 className="text-gold font-bold text-[10px] tracking-[0.4em] border-b border-white/5 pb-4 uppercase">{s.t}</h5>
                  <p className="font-amiri text-white text-2xl md:text-3xl dir-rtl leading-[2] text-right group-hover:text-gold-light transition-colors">
                    {s.ar}
                  </p>
                  <p className="text-white/40 font-serif italic text-xs leading-relaxed border-t border-white/5 pt-6 group-hover:text-white/60">
                    {s.tr}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/6/b')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/6/d')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}