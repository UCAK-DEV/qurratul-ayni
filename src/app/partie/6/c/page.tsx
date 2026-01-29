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

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-emerald-950 text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre VI — Section C
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LES CINQ PRIERES OBLIGATOIRES <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">الصلوات الخمس المفروضة</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Pause Audio' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* PARAGRAPHE 1 : OBLIGATION DE LA MOSQUÉE */}
        <section className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
          <p className="text-white/80 leading-relaxed text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-gold first-letter:mr-3">
            Tout homme habitant à proximité d’une mosquée doit s’y rendre pour s’acquitter de ses prières ; il ne doit pas les faire chez soi en même temps qu’à la mosquée. Le fait de ne pas aller prier à la mosquée sans excuse valable est assimilable au fait de ne pas prier du tout.
          </p>
        </section>

        {/* PARAGRAPHE 2 & 3 : INTERDITS ET COMPORTEMENT (TEXTE INTÉGRAL) */}
        <section className="grid grid-cols-1 gap-8">
          <div className="bg-red-950/20 p-8 md:p-10 rounded-[2.5rem] border border-red-900/30">
            <h3 className="text-red-400 font-black text-xs uppercase mb-6 flex items-center gap-2">
              <span className="material-symbols-rounded">warning</span> Interdictions à la mosquée
            </h3>
            <p className="text-white/70 text-sm leading-[1.8] mb-6">
              À l’intérieur d’une mosquée, il est formellement interdit de causer, d’invoquer le nom de Dieu, d’énumérer le chapelet, de faire des prières ou de lire le Coran, sauf si l’assemblée le fait en même temps, ou si l’on est porteur d’un message. En dehors de ces deux cas, on doit prier à voix très basse, si basse qu’on ne dérange pas son voisin immédiat.
            </p>
            <p className="text-white/70 text-sm leading-[1.8] border-t border-white/5 pt-6">
              Il est également interdit de promener son regard partout, d’étendre ses jambes, de faire craquer les articulations des doigts, de tailler ses ongles, de se gratter, de chercher ou tuer des poux, de cracher ou de se moucher (sauf dans ses vêtements), de rire, de sourire, de s’amuser, de jouer avec ses mains ou avec des bâtonnets, de faire des traits ou des points sur le sol. On doit invoquer constamment le nom d’Allah à voix basse, rester tranquille et se taire ; sinon, on est tenu de s’en aller.
            </p>
          </div>
        </section>

        {/* PARAGRAPHE 4 & 5 : RÈGLES DE L'IMAM ET DES GUIDÉS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-900/10 p-8 rounded-3xl border border-emerald-500/20">
            <h3 className="text-emerald-400 font-bold text-xs uppercase mb-4 tracking-widest">Mérites de l'Imam</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Il est méritoire pour l’Imam d’attendre le rappel (likhâm) avant de se mettre sur la place d’où il doit diriger la prière. Que l’on soit à la mosquée ou ailleurs, il est aussi méritoire pour ce dernier de changer sa position après le salut final. Il est également méritoire pour l’Imam de se déplacer dès que le « tassap » (dévotions qui suivent le salut final) est terminé.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-gold font-bold text-xs uppercase mb-4 tracking-widest">Règles des Guidés (Mamoumes)</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Quant aux mamoumes ou guidés, ils ne doivent pas sortir avant l’Imam, sauf si ce dernier a l’habitude de rester longtemps dans la mosquée.
            </p>
            <p className="text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
              Celui qui prie derrière un Imam doit le voir ou entendre sa voix, ou suivre quelqu’un qui le voit ou l’entend ; autrement, sa prière n’est pas valable.
            </p>
          </div>
        </section>

        {/* SECTION : LE KHOUNAUTE (AVEC TEXTE ET TRANSCRIPTION) */}
        <section className="bg-gold/5 p-8 md:p-12 rounded-[3rem] border border-gold/20">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-gold font-black text-xs uppercase tracking-[0.3em] text-center">Le Khounaute (Prière du Matin)</h3>
            <p className="text-white/80 text-sm italic text-center leading-relaxed">
              "Pour la prière du matin, il est méritoire de réciter après la sourate du 2e rakka le « khounaute » à voix basse. Voici le « khounaute » :"
            </p>
            
            <div className="space-y-6">
              <p className="font-amiri text-white text-2xl md:text-3xl dir-rtl leading-[2] text-center">
                اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنَخْنَعُ لَكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَكْفُرُ بِكَ. اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَى وَنَحْفِدُ نَرْجُو رَحْمَتَكَ وَنَخَافُ عَذَابَكَ الْجِدَّ، إِنَّ عَذَابَكَ بِالْكَافِرِينَ مُلْحِقٌ.
              </p>
              <div className="h-px w-24 bg-gold/20 mx-auto" />
              <p className="text-gold-light/60 text-xs md:text-sm text-center uppercase tracking-widest font-medium leading-relaxed italic">
                « Allahouma innastahînouka wa nastakhfirrouka wa nôuminoubika wa natawakkalou alayka wa nakhnahou laka wa nakhlahou wa natroukoumannyakk fourou bika. Allahouma iyyâka nahboudou wa laka noussalli wa nasdioudou et ileyka nasha wa nahfidou nardiôu rahmataka wa nakhâfou hazâbakal djidda, inna hazâbaka bilkéfirîna moulhikhoune ».
              </p>
            </div>
            <p className="text-white/40 text-[11px] text-center leading-relaxed mt-6">
              L’omission délibérée du khounaute n’annule pas la prière. La réparation de la prière par une prosternation supplémentaire annule la prière.
            </p>
          </div>
        </section>

        {/* SECTION : LES SOURATES USUELLES (INTÉGRALITÉ) */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Les sourates les plus communément employées</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">السور القرآنية</h2>
          </div>
          <p className="text-white/50 text-xs italic text-center mb-10">(celui qui veut s’acquitter de sa prière doit les apprendre par cœur)</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                t: "AL-FATIHA", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ، الرَّحْمَنِ الرَّحِيمِ ، مَالِكِ يَوْمِ الدِّينِ ، إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ، اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ، صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ . آمين",
                tr: "Bismil lâhir rahmânir rahîmi Alhamdoulilâhi rabil âlamîna, rahmânir rahîmi, maliki yawmid dîni, iyyâka nahboudou wa iyyaka nastahînou, ihdinas sirâtal moustahîma, sirâtal leuzîna ann hamta aleyhim, ghaïril makhdôubi aleyhim waladâlina âmîna."
              },
              { 
                t: "AL-QADR", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ، وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ، لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ ، تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ ، سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ",
                tr: "Bismil lâhir rahmânir rahîmi Innâ anzalnâhou fî laylatil khadri, wamâ adraka mâ laïlatoul khadri ? Laïlatoul khadri ghaïroune minal fichahrine, tannazzalou malâ-ikatou wa rôuhou fîhâ bihizni rabbihim, mine koulli amrine, salâmoune hiya at tamat lahil fadjri."
              },
              { 
                t: "QURAISH", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ لِإِيلَافِ قُرَيْشٍ ، إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ ، فَلْيَعْبُدُوا رَبَّ هَذَا الْبَيْتِ ، الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ",
                tr: "Bismil lâhir rahmânir rahîmi Li îlaa fikhouraïchine îlâ fihim rihlatac chitâ-i wa saïfi, fal yahboudôu rabba hâzal bayti aleuzî athamahoum mine diôuhine wa âmanahoum mine khawfine."
              },
              { 
                t: "AL-FIL", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ ، أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ ، وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ ، تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ ، فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ",
                tr: "Bismil lâhir rahmânir rahîmi Alam tara kayfa fahala rabbouka bi ashâbil fîli ? Alam yadjhal kaydahoum fî tadlîline, wa arsala aleyhime tayrane abâbîlane tarmîhim bihidjâratine mine sidjîline, fadjahalakhoum kahasfine mâkôuline."
              },
              { 
                t: "AL-MA'UN", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ ، فَذَلِكَ الَّذِي يَدُعُّ الْيَتِيمَ ، وَلَا يَحُضُّ عَلَى طَعَامِ الْمِسْكِينِ ، فَوَيْلٌ لِلْمُصَلِّينَ ، الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ ، الَّذِينَ هُمْ يُرَاءُونَ ، وَيَمْنَعُونَ الْمَاعُونَ",
                tr: "Bismil lâhir rahmânir rahîmi Ara aytal leuzî youkaz zibou bid dîni ? Fazâlikal leuzî yadhoul yatîma walâ yahoudou halâ tahâmil miskîni, fawayloune lilmoussalîna al-leuzîna houm hanesalâtihim sâhôuna, al-leuzîna houm yourâ ôuna wa yamnahôunal mâhôuna."
              },
              { 
                t: "AL-KAWTHAR", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ، فَصَلِّ لِرَبِّكَ وَانْحَرْ ، إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
                tr: "Bismil lâhir rahmânir rahîmi Innâ ahtaynâkal kawchara, fassalli lirabbika wankhari, inna châniaka houwa labtarou."
              },
              { 
                t: "AL-KAFIRUN", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ يَا أَيُّهَا الْكَافِرُونَ ، لَا أَعْبُدُ مَا تَعْبُدُونَ ، وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ ، وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ ، وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ ، لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
                tr: "Bismil lâhir rahmânir rahîmi Khoulya ayyouhal kâfirouna, lâ ahnoudou mâ tahboudôuna, walâ antoume habidôuna mâ ahboudou, walâ anâ hâbidounn mâ habadtoume, walâ antoume hâbidôuna mâ ahboudou, lakoum dînoukoume, waliya dîni."
              },
              { 
                t: "AN-NASR", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ، وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا ، فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ، إِنَّهُ كَانَ تَوَّابًا",
                tr: "Bismil lâhir rahmânir rahîmi Izâ djâ-a nasroul lâhi wal fathou, wara aytan nâssa yadhoulôuna fî dînil lâhi afwâdjan, fasabbih bihamdi rabbika wastakhfirhou, innahôu kâna tawwâbane."
              },
              { 
                t: "AL-MASAD", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ، مَا أَغْنَى عَنْهُ مَالُهُ وَمَا كَسَبَ ، سَيَصْلَى نَارًا ذَاتَ لَهَبٍ ، وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ ، فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ",
                tr: "Bismil lâhir rahmânir rahîmi Tabat yadâ abî lahabinn, watabba mâ ahné anhou, mâ lahôu wa mâ kassaba, sayas lâ nârane zâta lahabine, wamrâatouhôu hammâlatoul hatabi fîdj îdihâ, habloune mine massadine."
              },
              { 
                t: "AL-IKHLAS", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ ، اللَّهُ الصَّمَدُ ، لَمْ يَلِدْ وَلَمْ يُولَدْ ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
                tr: "Bismil lâhir rahmânir rahîmi Khou l houwa allahou ahadoune, allahous samadou, lam yalid walam yôulad, walam yakoun lahôu koufôu-ann ahadoune."
              },
              { 
                t: "AL-FALAQ", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ، مِنْ شَرِّ مَا خَلَقَ ، وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ، وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ، وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
                tr: "Bismil lâhir rahmânir rahîmi Khoula ahôuzou birabbil falakhi mine charri mâ khalakha, wa mine charri khâsikhine izâ wakhaba, wa mine charrin naffâchâti fîl houkhadi, wa mine charri hâsidine izâ hassada."
              },
              { 
                t: "AN-NAS", 
                ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ، مَلِكِ النَّاسِ ، إِلَهِ النَّاسِ ، مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ، مِنَ الْجِنَّةِ وَالنَّاسِ",
                tr: "Bismil lâhir rahmânir rahîmi Khoula ahôuzou birabbin nâssi, maliki nâssi, ilâhi nâssi, mine charril was wâsil khannâsi aleuzî, youwaswisou fî soudouri nâssi minal djinnati wa nâssi."
              }
            ].map((s, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h5 className="text-gold font-bold text-xs tracking-widest border-b border-gold/10 pb-2 uppercase">{s.t}</h5>
                  <p className="font-amiri text-white text-xl md:text-2xl dir-rtl leading-relaxed text-right">
                    {s.ar}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5">
                  <p className="text-white/40 text-[11px] leading-relaxed italic">
                    {s.tr}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/6/b')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all active:scale-95"
        >
          Précédent (6-B)
        </button>
        <button 
          onClick={() => router.push('/partie/6/d')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          Suivant (6-D)
        </button>
      </div>
    </main>
  );
}