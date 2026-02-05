'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function InhumationPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "8") || CHAPTERS[7];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre VIII — Section C</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              L'INHUMATION <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">rites funéraires</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">الدفن</p>

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
          
          {/* 1. LA TOMBE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">La tombe et ses dimensions</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.04] transition-colors">C</span>
              <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed space-y-8">
                <p>
                  La tombe doit être au moins d’une profondeur telle que le corps en décomposition ne puisse en exhaler son odeur et qu’un carnassier ne puisse pas l’exhumer ; une telle profondeur suffit. La profondeur la plus répandue dans notre pays au sol sablonneux est ce que l’on appelle « cha-khe », c’est-à-dire qu’il faut creuser pour une longueur égale à celle du corps, une largeur d’un mètre, creuser au milieu de la fosse ainsi obtenue une autre de même longueur, mais de largeur égale à un « sébré », de manière à contenir, de façon très exacte, le corps.
                </p>
                <p>
                  Avant de porter le corps dans la tombe, il est méritoire de prendre un peu de la terre fraîche, de réciter une fois la « fatiha » et sept fois la sourate « inna ann zalnahou », de cracher dessus puis de remettre la poignée de terre dans la tombe, alors on fera suivre le corps. Cette précaution prise évitera au mort de connaître des châtiments dans la tombe.
                </p>
              </div>
            </div>
            <div className="p-10 rounded-[3rem] bg-gold/[0.03] border border-gold/20 text-center space-y-8">
              <p className="text-gold font-bold text-[10px] uppercase tracking-widest">Prière pour le même effet :</p>
              <p className="font-serif text-white italic text-xl">« alahouma inniya alouka bidjahi nabiyi rahmani wa tourbatihi atayibati attahirati wamâdamat hou ann lâ touhaziba hazal maïta fî khabrihi ».</p>
              <p className="font-amiri text-2xl md:text-3xl text-gold-light/90 leading-relaxed" dir="rtl">اللَّهُمَّ إِنِّي أَسْأَلُكَ بِجَاهِ نَبِيِّ الرَّحْمَةِ وَتُرْبَتِهِ الطَّيِّبَةِ الطَّاهِرَةِ وَمَا دَامَتْ لَهُ أَنْ لَا تُعَذِّبَ هَذَا الْمَيِّتَ فِي قَبْرِهِ</p>
            </div>
          </section>

          {/* 2. PROTECTIONS RITUELLES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Protections Rituelles</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 font-serif italic text-lg leading-relaxed text-white/70">
                Si après avoir introduit le corps et avant de l’ensevelir, on récite au niveau de la tête la « fatiha » suivie des sourates « falakhi » et « nassi » (une fois chacune), Dieu préservera le mort des châtiments de la tombe et des effets de son exiguïté ; la tombe sera éclairée de mille lumières. À celui qui a récité les sourates indiquées, Dieu accordera la faveur d’une grande cité dans le paradis le plus élevé. Il lui sera accordé des faveurs pour services rendus à Dieu pendant soixante (60) ans.
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 font-serif italic text-lg leading-relaxed text-white/70">
                De même, si avant d’introduire le corps dans la tombe, on inscrit à l’intérieur de celle-ci deux « bismil lahi rahmani rahimi », allant chacun dans le sens contraire de celui de l’autre et se faisant face, le mort sera préservé des épreuves de la tombe. De même, si l’on inscrit sur la paroi de la tombe qui se trouve du côté de la Kaaba (khibla) le nom suivant : « fatimata Binetou Assad », le mort sera sauvé. De même, si l’on écrit le nom suivant sur la tombe, le mort sera épargné des tourments de la tombe : il s’agit de « Ibrahima ibnou ad ham ».
              </div>
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 space-y-10 italic">
              <p className="text-white/80 text-lg leading-relaxed text-center">Si l’on écrit « Bismilahi rahmani rahima » soixante-dix (70) fois sur le linceul, le mort sera préservé des tourments de la tombe.</p>
              <div className="space-y-6 text-center">
                <span className="text-gold font-black text-[10px] uppercase tracking-widest">Inscription dans le linceul</span>
                <p className="font-serif text-white/90 leading-relaxed">« lâ ilaha ilalahou wahdahou la charika lahô lehoul moulkou wa lehoul amdou youhi wa youmitou wa houwa hayoune lâ yamôtou biyaddihil khaïrou wa houwa alakouli ch ayine khadiroune la ilaha ila lahou wala hawla wala khouwata ilabilahi haliyil hazimi ».</p>
                <p className="font-amiri text-2xl md:text-3xl text-gold-light leading-loose" dir="rtl">لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ</p>
              </div>
            </div>
          </section>

          {/* 3. ACCOMPAGNATEURS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Formule des accompagnateurs</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 text-center font-serif italic">
              <p className="text-white/60 text-lg">Si les accompagnateurs du mort récitent la formule suivante, ce dernier sera préservé des châtiments de la tombe :</p>
              <div className="space-y-8 max-w-4xl mx-auto">
                <p className="text-white/90 leading-relaxed">« Yâkhahirane bil manâyâ koula khâlêuri binouri wadjhika ahtikhnî minanari ileyka aslamani mann kâna yah hadouni minn euhli wouddi wa as habi wa ann sâri fî khahri mouzlimatine khabrâ mauhichatine fardann kharîbann wahîdane tahta ahdiari amsaïtou daïfaka yazal djodi mourtahinane wa anta akramou mann zôline bihikhâri fadjhal khirâ iyeuh min ka naïla makhfiratine ann djô ladaïka biha yâkhaïra khafâri ».</p>
                <p className="font-amiri text-2xl md:text-3xl text-gold-light leading-relaxed" dir="rtl">يَا قَاهِرُ بِالْمَنَايَا كُلَّ خَائِرٍ بِنُورِ وَجْهِكَ أَعْتِقْنِي مِنَ النَّارِ، إِلَيْكَ أَسْلَمَنِي مَنْ كَانَ يَعْهَدُنِي مِنْ أَهْلِ وُدِّي وَأَصْحَابِي وَأَنْصَارِي، فِي قَعْرِ مُظْلِمَةٍ غَبْرَاءَ مُوحِشَةٍ فَرْدًا غَرِيبًا وَحِيدًا تَحْتَ أَحْجَارٍ، أَمْسَيْتُ ضَيْفَكَ يَزَالُ جُودِي مُرْتَهَنًا وَأَنْتَ أَكْرَمُ مَنْ نَزَلَ بِهِ، فَاجْعَلْ قِرَايَ مِنْكَ نَيْلَ مَغْفِرَةٍ أَنْجُو لَدَيْكَ بِهَا يَا خَيْرَ غَفَّارٍ.</p>
              </div>
              <p className="text-sm text-white/40 border-t border-white/5 pt-10">
                Celui qui connaît le poème « djawartou laha » par cœur ou celui que l’on enterre avec ce poème ne sera pas interrogé à l’intérieur de la tombe, il ne sera pas éprouvé et il sera sauvé indiscutablement.
              </p>
            </div>
          </section>

          {/* 4. INTRODUCTION DU CORPS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Introduction du corps</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 font-serif italic leading-relaxed">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-8 text-white/70">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">S’il s’agit d’un homme</h3>
                <p>un parent est préférable ou, à défaut, une tierce personne. Il est préférable que celui qui introduit le corps dans la tombe prononce les paroles suivantes :</p>
                <div className="p-6 bg-black/20 rounded-2xl border border-white/5 space-y-6">
                  <p className="text-xs">« Bismilahi wa takhbalhou bi ahsani khabôline allahouma inna sâhibanâ khad nazala bika ala milati rassoul lilahi salalahou tahala aleyhi was salama alahouma wa khallafa adounya warâ-a-zeuhrihi wa ftahara ilâ mâ inn daka allahouma sabitt inn dal massalati mann tikhahô, wala tabtali hii fi khabrihî bimâ lâ tâtakhata lehou bihi wa al ikhou binabi yihi seydina mouhamadine salalahou tahala aleyhi wassalama ».</p>
                  <p className="font-amiri text-xl text-gold-light text-right" dir="rtl">بِسْمِ اللَّهِ وَتَقَبَّلْهُ بِأَحْسَنِ قَبُولٍ، اللَّهُمَّ إِنَّ صَاحِبَنَا قَدْ نَزَلَ بِكَ عَلَى مِلَّةِ رَسُولِ اللَّهِ صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ، اللَّهُمَّ وَخَلَّفَ الدُّنْيَا وَرَاءَ ظَهْرِهِ وَافْتَقَرَ إِلَى مَا عِنْدَكَ، اللَّهُمَّ ثَبِّتْ عِنْدَ الْمَسْأَلَةِ مَنْطِقَهُ، وَلَا تَبْتَلِهِ فِي قَبْرِهِ بِمَا لَا طَاقَةَ لَهُ بِهِ وَأَلْحِقْهُ بِنَبِيِّهِ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ.</p>
                </div>
              </div>
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-8 text-white/70">
                <h3 className="text-gold font-bold text-[10px] uppercase tracking-widest border-b border-white/5 pb-4">S’il s’agit d’une femme</h3>
                <p>celui qui l’introduit dans la tombe doit être un parent qui ne pourrait pas l’épouser pour cause d’inceste ; à défaut de celui-là, une tierce personne peut le faire. S’il s’agit d’un homme…</p>
                <p className="text-base text-white/50 border-t border-white/5 pt-8">À partir du moment où l’on descend le corps dans la fosse centrale jusqu’à l’achèvement de la disposition des morceaux de bois, les opérateurs doivent être couverts d’un pagne qu’on se gardera d’agiter. Il est souhaitable de surélever la tombe d’une couche de sable d’une hauteur d’au moins égale à un « sebré ».</p>
              </div>
            </div>
          </section>

          {/* 5. DISPOSITION ET RITES */}
          <section className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg leading-relaxed text-white/70">
            <p>On le couche ainsi du côté droit, la face dirigée vers la « kaaba » (khibla). On tend tous ses membres, on enlève toutes les attaches du linceul au niveau de la tête et des pieds, on élève un peu la terre au niveau des pieds et de la tête. Après cela, on disposera des morceaux de bois le long de la fosse centrale pour pouvoir contenir le poids du sable qui devra recouvrir entièrement cette fosse centrale. On mettra dessus une couche épaisse de feuilles de « nguère » ou d’une plante du même genre ; on asperge de l’eau, mais en quantité juste nécessaire, ces feuilles de manière à ce que le sable soit retenu mais qu’une partie puisse atteindre le corps. On peut également recouvrir les feuilles de sable préalablement mouillé. Ces deux dernières opérations se valent.</p>
            <div className="space-y-8">
              <p className="text-center text-white/90">Après tout cela, on comble la fosse. Il est souhaitable que ses proches jettent dans la tombe trois pincées de sable accompagnées respectivement des invocations suivantes :</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { n: "1ère pincée", fr: "« Minn hâ khalakhnâkoum »", ar: "مِنْهَا خَلَقْنَاكُمْ" },
                  { n: "2ème pincée", fr: "« Wa fi hâ nouhî doukoum »", ar: "وَفِيهَا نُعِيدُكُمْ" },
                  { n: "3ème pincée", fr: "« Wa minn hâ noukhri djou koum taratann oukhra »", ar: "وَمِنْهَا نُخْرِجُكُمْ تَارَةً أُخْرَى" }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-gold/[0.02] border border-gold/10 text-center space-y-4 shadow-sm">
                    <span className="text-gold font-black text-[9px] uppercase tracking-widest">{item.n}</span>
                    <p className="text-white/80">{item.fr}</p>
                    <p className="font-amiri text-xl text-gold-light">{item.ar}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. DERNIÈRES INVOCATIONS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Invocations devant la tombe</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-emerald-500/[0.02] border border-emerald-500/10 space-y-12 font-serif italic leading-relaxed text-white/70">
              <p>Il est recommandé à ceux qui sont présents de demander le pardon et la miséricorde divine à son profit, de réciter quarante « ikhlas » précédés d’une « basmala » (bissimilahi rahmani rahimi) et d’invoquer le nom du Prophète, un nombre de fois au moins égal à trois en sa faveur. On ne trace rien sur la tombe, ni n’y verse de l’eau, sauf si l’on craint qu’un coup de vent n’emporte le sable. On ne récite pas sur les morceaux de bois destinés à recouvrir la fosse centrale le « khounaute ». Il est souhaitable de dire devant la tombe :</p>
              <div className="p-10 rounded-[3rem] bg-black/40 border border-gold/20 text-center space-y-8">
                <p className="text-xs leading-relaxed">« Allahouma haza abdouka rouda ileyka wa anta ahlamou bihi wala nahlamou minehou ila khaïrane wa khad adjalastahou litasalahô fanas alouka allahouma an toussabitahoubil khawli assâbiti fil lakhirati kamâ sabattahô bihi fiddounnya. Allahouma ikhfirlahô warrhamhou warafbihi wa djâfilar daann djann bayihi wa ftah abwâbas samâi lirôuhihi wa takhabalhou bi khabôlinine hassanine. Allahouma innakana mouhsinane fadâhife lehô fî ikhsânihi wa inn kâna moussîanne fatadjâwaze ann hou. Allahouma al khique hou bimabiyihi seydina mouhammadine salalahou tahala aleyhi was salama wala toudilana bakhdahô wala tahrimnâ adjahô »</p>
                <p className="font-amiri text-2xl md:text-3xl text-gold-light leading-relaxed" dir="rtl">اللَّهُمَّ هَذَا عَبْدُكَ رُدَّ إِلَيْكَ وَأَنْتَ أَعْلَمُ بِهِ وَلَا نَعْلَمُ مِنْهُ إِلَّا خَيْرًا وَقَدْ أَجْلَسْتَهُ لِتَسْأَلَهُ فَنَسْأَلُكَ اللَّهُمَّ أَنْ تُثَبِّتَهُ بِالْقَوْلِ الثَّابِتِ فِي الْآخِرَةِ كَمَا ثَبَّتَّهُ بِهِ فِي الدُّنْيَا. اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَارْفَعْهُ وَجَافِ الْأَرْضَ عَنْ جَنْبَيْهِ وَافْتَحْ أَبْوَابَ السَّمَاءِ لِرُوحِهِ وَتَقَبَّلْهُ بِقَبُولٍ حَسَنٍ. اللَّهُمَّ إِنْ كَانَ مُحْسِنًا فَضَاعِفْ لَهُ فِي إِحْسَانِهِ وَإِنْ كَانَ مُسِيئًا فَتَجَاوَزْ عَنْهُ. اللَّهُمَّ أَلْحِقْهُ بِنَبِيِّهِ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ وَلَا تُضِلَّنَا بَعْدَهُ وَلَا تَحْرِمْنَا أَجْرَهُ.</p>
              </div>
              <div className="space-y-6">
                <p className="text-gold font-bold">• Toi, un tel, fils d’un tel, trois fois.</p>
                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 space-y-6">
                  <p className="text-sm">« Ouzkourma kharadjta aleyhi minn ad dounnya wa hiya chahadatou ann lahilaha ilalahou wa anna seyi dina mouhamadane rassouloulahi salalahou tahala aleyhi was salama, wa ann akrâdta bilahi rabane wa bil islami dinane wa bi seyidina mouhamadine salalahou tahala aleyhi was salama nabiyane wa rassoulane wa bil khourani imimane wa anna sahata atiyatoune la rayba fiha wa anna laha yab hassou mann fil khoubori ».</p>
                  <p className="font-amiri text-xl text-gold-light text-right leading-relaxed" dir="rtl">اذْكُرْ مَا خَرَجْتَ عَلَيْهِ مِنَ الدُّنْيَا وَهِيَ شَهَادَةُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ سَيِّدَنَا مُحَمَّدًا رَسُولُ اللَّهِ صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ، وَأَنْ رَضِيتَ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِسَيِّدِنَا مُحَمَّدٍ صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ نَبِيًّا وَرَسُولًا وَبِالْقُرْآنِ إِمَامًا وَأَنَّ السَّاعَةَ آتِيَةٌ لَا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَنْ فِي الْقُبُورِ.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. RECOMMANDATIONS FINALES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Recommandations durant l’enterrement</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 font-serif italic text-lg leading-relaxed text-white/70">
              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10">
                Il n’est pas recommandé, durant l’enterrement, de lire le Coran ou des prières ou des khassaïdes (poèmes) ou d’invoquer Dieu à haute voix. Tout ce que l’on récite en ce moment doit l’être à voix basse, si l’on espère en obtenir quelque agrément. Tout ce que l’on dit, on doit le faire en ne pensant qu’à Dieu et sans chercher à plaire.
              </div>
              <div className="p-10 rounded-[3rem] bg-red-950/[0.05] border border-red-900/20">
                Il n’est pas recommandé, dans cette situation, de manger, de boire, de rire, de bavarder ou de parler de choses profanes. Ce qui est recommandé dans ces circonstances, c’est de prier Dieu pour soi-même et pour les morts, de s’émouvoir, de méditer et de renforcer sa foi en étant persuadé qu’on viendra rejoindre ceux qui y sont enterrés et qu’on séjournera en leur compagnie pendant un très long temps dont seul Dieu connaît la durée.
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/8/b')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/8/d')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}