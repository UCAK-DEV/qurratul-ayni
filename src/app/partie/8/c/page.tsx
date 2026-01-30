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

  return (
    <main className="min-h-screen bg-emerald-950 text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre VIII — Section C
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          L’INHUMATION <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold block mt-2">الدفن</span>
        </motion.h1>

        <motion.button
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* SECTION 1: LA TOMBE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">La tombe, ses dimensions et quelques prières</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 text-white/80 leading-relaxed italic">
            <p>
              La tombe doit être au moins d’une profondeur telle que le corps en décomposition ne puisse en exhaler son odeur et qu’un carnassier ne puisse pas l’exhumer ; une telle profondeur suffit. La profondeur la plus répandue dans notre pays au sol sablonneux est ce que l’on appelle « cha-khe », c’est-à-dire qu’il faut creuser pour une longueur égale à celle du corps, une largeur d’un mètre, creuser au milieu de la fosse ainsi obtenue une autre de même longueur, mais de largeur égale à un « sébré », de manière à contenir, de façon très exacte, le corps.
            </p>
            <p>
              Avant de porter le corps dans la tombe, il est méritoire de prendre un peu de la terre fraîche, de réciter une fois la « fatiha » et sept fois la sourate « inna ann zalnahou », de cracher dessus puis de remettre la poignée de terre dans la tombe, alors on fera suivre le corps. Cette précaution prise évitera au mort de connaître des châtiments dans la tombe.
            </p>
            
            <div className="bg-black/20 p-6 rounded-2xl border border-gold/10 space-y-4">
              <p className="text-gold font-bold text-[10px] uppercase tracking-widest">Prière pour le même effet :</p>
              <p className="font-serif text-white italic">« alahouma inniya alouka bidjahi nabiyi rahmani wa tourbatihi atayibati attahirati wamâdamat hou ann lâ touhaziba hazal maïta fî khabrihi ».</p>
              <p className="font-amiri text-xl text-gold-light/80 text-right" dir="rtl">اللهم إني أسألك بجاه نبي الرحمة وتربته الطيبة الطاهرة وما دامت له أن لا تعذب هذا الميت في قبره</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: PROTECTIONS ET INSCRIPTIONS */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">Protections Rituelles</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4 italic">
              <p>Si après avoir introduit le corps et avant de l’ensevelir, on récite au niveau de la tête la « fatiha » suivie des sourates « falakhi » et « nassi » (une fois chacune), Dieu préservera le mort des châtiments de la tombe et des effets de son exiguïté ; la tombe sera éclairée de mille lumières. À celui qui a récité les sourates indiquées, Dieu accordera la faveur d’une grande cité dans le paradis le plus élevé. Il lui sera accordé des faveurs pour services rendus à Dieu pendant soixante (60) ans.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4 italic">
              <p>De même, si avant d’introduire le corps dans la tombe, on inscrit à l’intérieur de celle-ci deux « bismil lahi rahmani rahimi », allant chacun dans le sens contraire de celui de l’autre et se faisant face, le mort sera préservé des épreuves de la tombe. De même, si l’on inscrit sur la paroi de la tombe qui se trouve du côté de la Kaaba (khibla) le nom suivant : « fatimata Binetou Assad », le mort sera sauvé. De même, si l’on écrit le nom suivant sur la tombe, le mort sera épargné des tourments de la tombe : il s’agit de « Ibrahima ibnou ad ham ».</p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-gold/20 space-y-6 italic text-white/80">
            <p>Si l’on écrit « Bismilahi rahmani rahima » soixante-dix (70) fois sur le linceul, le mort sera préservé des tourments de la tombe.</p>
            <div className="p-6 bg-black/40 rounded-xl border border-white/5 space-y-3">
              <p className="text-gold font-bold text-[10px] uppercase">Inscription dans le linceul :</p>
              <p className="font-serif">« lâ ilaha ilalahou wahdahou la charika lahô lehoul moulkou wa lehoul amdou youhi wa youmitou wa houwa hayoune lâ yamôtou biyaddihil khaïrou wa houwa alakouli ch ayine khadiroune la ilaha ila lahou wala hawla wala khouwata ilabilahi haliyil hazimi ».</p>
              <p className="font-amiri text-xl text-gold-light text-right" dir="rtl">لا إله إلا الله وحده لا شريك له، له الملك وله الحمد يحيي ويميت وهو حي لا يموت بيده الخير وهو على كل شيء قدير، لا إله إلا الله ولا حول ولا قوة إلا بالله العلي العظيم</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: FORMULE DES ACCOMPAGNATEURS */}
        <section className="bg-gold/5 p-8 md:p-12 rounded-[3rem] border border-gold/10 space-y-8">
          <p className="italic text-white/70 text-center">Si les accompagnateurs du mort récitent la formule suivante, ce dernier sera préservé des châtiments de la tombe :</p>
          <div className="space-y-6">
            <p className="font-serif text-white leading-relaxed text-center">
              « Yâkhahirane bil manâyâ koula khâlêuri binouri wadjhika ahtikhnî minanari ileyka aslamani mann kâna yah hadouni minn euhli wouddi wa as habi wa ann sâri fî khahri mouzlimatine khabrâ mauhichatine fardann kharîbann wahîdane tahta ahdiari amsaïtou daïfaka yazal djodi mourtahinane wa anta akramou mann zôline bihikhâri fadjhal khirâ iyeuh min ka naïla makhfiratine ann djô ladaïka biha yâkhaïra khafâri ».
            </p>
            <p className="font-amiri text-xl md:text-2xl text-gold-light text-center leading-loose" dir="rtl">
              يا قاهر بالمنايا كل خائر بنور وجهك أعتقني من النار إليك أسلمني من كان يعهدني من أهل ودي وأصحابي وأنصاري في قعر مظلمة غبراء موحشة فردا غريبا وحيدا تحت أحجار، أمسيت ضيفك يزال جودي مرتهنا وأنت أكرم من نزل به، فاجعل قراي منك نيل مغفرة أنجو لديك بها يا خير غفار.
            </p>
          </div>
          <p className="text-xs text-white/40 italic text-center border-t border-white/5 pt-6">
            Celui qui connaît le poème « djawartou laha » par cœur ou celui que l’on enterre avec ce poème ne sera pas interrogé à l’intérieur de la tombe, il ne sera pas éprouvé et il sera sauvé indiscutablement.
          </p>
        </section>

        {/* SECTION 4: QUI DOIT INTRODUIRE LE CORPS */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">QUI DOIT INTRODUIRE LE CORPS DANS LA TOMBE ?</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cas Homme */}
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-6 italic">
              <h3 className="text-gold font-black text-xs uppercase tracking-widest border-l-2 border-gold pl-4">S’IL S’AGIT D’UN HOMME</h3>
              <p className="text-sm">un parent est préférable ou, à défaut, une tierce personne. Il est préférable que celui qui introduit le corps dans la tombe prononce les paroles suivantes :</p>
              <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-3">
                <p className="font-serif text-xs text-white/90">« Bismilahi wa takhbalhou bi ahsani khabôline allahouma inna sâhibanâ khad nazala bika ala milati rassoul lilahi salalahou tahala aleyhi was salama alahouma wa khallafa adounya warâ-a-zeuhrihi wa ftahara ilâ mâ inn daka allahouma sabitt inn dal massalati mann tikhahô, wala tabtali hii fi khabrihî bimâ lâ tâtakhata lehou bihi wa al ikhou binabi yihi seydina mouhamadine salalahou tahala aleyhi wassalama ».</p>
                <p className="font-amiri text-lg text-gold-light text-right leading-relaxed" dir="rtl">بسم الله وتقبله بأحسن قبول، اللهم إن صاحبنا قد نزل بك على ملة رسول الله صلى الله تعالى عليه وسلم، اللهم وخلف الدنيا وراء ظهره وافتقر إلى ما عندك، اللهم ثبت عند المسألة منطقَه، ولا تبتله في قبره بما لا طاقة له به وألحقه بنبيه سيدنا محمد صلى الله تعالى عليه وسلم.</p>
              </div>
            </div>

            {/* Cas Femme */}
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-6 italic">
              <h3 className="text-gold font-black text-xs uppercase tracking-widest border-l-2 border-gold pl-4">S’IL S’AGIT D’UNE FEMME</h3>
              <p className="text-sm">celui qui l’introduit dans la tombe doit être un parent qui ne pourrait pas l’épouser pour cause d’inceste ; à défaut de celui-là, une tierce personne peut le faire. S’il s’agit d’un homme…</p>
              <p className="text-sm">À partir du moment où l’on descend le corps dans la fosse centrale jusqu’à l’achèvement de la disposition des morceaux de bois, les opérateurs doivent être couverts d’un pagne qu’on se gardera d’agiter. Il est souhaitable de surélever la tombe d’une couche de sable d’une hauteur d’au moins égale à un « sebré ».</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: DISPOSITION DU CORPS ET RITES FINAUX */}
        <section className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 italic text-white/80">
          <p>On le couche ainsi du côté droit, la face dirigée vers la « kaaba » (khibla). On tend tous ses membres, on enlève toutes les attaches du linceul au niveau de la tête et des pieds, on élève un peu la terre au niveau des pieds et de la tête. Après cela, on disposera des morceaux de bois le long de la fosse centrale pour pouvoir contenir le poids du sable qui devra recouvrir entièrement cette fosse centrale. On mettra dessus une couche épaisse de feuilles de « nguère » ou d’une plante du même genre ; on asperge de l’eau, mais en quantité juste nécessaire, ces feuilles de manière à ce que le sable soit retenu mais qu’une partie puisse atteindre le corps. On peut également recouvrir les feuilles de sable préalablement mouillé. Ces deux dernières opérations se valent.</p>
          <p>Après tout cela, on comble la fosse. Il est souhaitable que ses proches jettent dans la tombe trois pincées de sable accompagnées respectivement des invocations suivantes :</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-serif text-center">
            <div className="p-4 bg-gold/5 rounded-xl border border-gold/10">
              <p className="text-gold text-[10px] uppercase mb-2">1ère pincée</p>
              <p>« Minn hâ khalakhnâkoum »</p>
              <p className="font-amiri text-lg" dir="rtl">مِنْهَا خَلَقْنَاكُمْ</p>
            </div>
            <div className="p-4 bg-gold/5 rounded-xl border border-gold/10">
              <p className="text-gold text-[10px] uppercase mb-2">2ème pincée</p>
              <p>« Wa fi hâ nouhî doukoum »</p>
              <p className="font-amiri text-lg" dir="rtl">وَفِيهَا نُعِيدُكُمْ</p>
            </div>
            <div className="p-4 bg-gold/5 rounded-xl border border-gold/10">
              <p className="text-gold text-[10px] uppercase mb-2">3ème pincée</p>
              <p>« Wa minn hâ noukhri djou koum taratann oukhra »</p>
              <p className="font-amiri text-lg" dir="rtl">وَمِنْهَا نُخْرِجُكُمْ تَارَةً أُخْرَى</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: INVOCATIONS À LA TOMBE */}
        <section className="bg-emerald-900/40 p-8 md:p-12 rounded-[2.5rem] border border-emerald-500/20 space-y-6 italic">
          <p className="text-sm">Il est recommandé à ceux qui sont présents de demander le pardon et la miséricorde divine à son profit, de réciter quarante « ikhlas » précédés d’une « basmala » (bissimilahi rahmani rahimi) et d’invoquer le nom du Prophète, un nombre de fois au moins égal à trois en sa faveur.</p>
          <p className="text-sm">On ne trace rien sur la tombe, ni n’y verse de l’eau, sauf si l’on craint qu’un coup de vent n’emporte le sable. On ne récite pas sur les morceaux de bois destinés à recouvrir la fosse centrale le « khounaute ». Il est souhaitable de dire devant la tombe :</p>
          <div className="p-6 bg-black/40 rounded-2xl border border-gold/20 space-y-4">
            <p className="font-serif text-xs text-white/90 leading-relaxed text-center">
              « Allahouma haza abdouka rouda ileyka wa anta ahlamou bihi wala nahlamou minehou ila khaïrane wa khad adjalastahou litasalahô fanas alouka allahouma an toussabitahoubil khawli assâbiti fil lakhirati kamâ sabattahô bihi fiddounnya. Allahouma ikhfirlahô warrhamhou warafbihi wa djâfilar daann djann bayihi wa ftah abwâbas samâi lirôuhihi wa takhabalhou bi khabôlinine hassanine. Allahouma innakana mouhsinane fadâhife lehô fî ikhsânihi wa inn kâna moussîanne fatadjâwaze ann hou. Allahouma al khique hou bimabiyihi seydina mouhammadine salalahou tahala aleyhi was salama wala toudilana bakhdahô wala tahrimnâ adjahô »
            </p>
            <p className="font-amiri text-xl text-gold-light text-center leading-loose" dir="rtl">
              اللهم هذا عبدك رُدَّ إليك وأنت أعلم به ولا نعلم منه إلا خيرا وقد أجلسته لتسأله فنسألك اللهم أن تثبته بالقول الثابت في الآخرة كما ثبتَّه به في الدنيا. اللهم اغفر له وارحمه وارفعه وجاف الأرض عن جنبيه وافتح أبواب السماء لروحه وتقبله بقبول حسن. اللهم إن كان محسنا فضاعف له في إحسانه وإن كان مسيئا فتجاوز عنه. اللهم ألحقه بنبيه سيدنا محمد صلى الله تعالى عليه وسلم ولا تضلنا بعده ولا تحرمنا أجره.
            </p>
          </div>
          
          <div className="space-y-4 border-t border-white/5 pt-6">
            <p>et ensuite s’adresser à lui en ces termes :</p>
            <p className="text-gold font-bold">• Toi, un tel, fils d’un tel, trois fois.</p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-3">
              <p className="font-serif text-sm">« Ouzkourma kharadjta aleyhi minn ad dounnya wa hiya chahadatou ann lahilaha ilalahou wa anna seyi dina mouhamadane rassouloulahi salalahou tahala aleyhi was salama, wa ann akrâdta bilahi rabane wa bil islami dinane wa bi seyidina mouhamadine salalahou tahala aleyhi was salama nabiyane wa rassoulane wa bil khourani imimane wa anna sahata atiyatoune la rayba fiha wa anna laha yab hassou mann fil khoubori ».</p>
              <p className="font-amiri text-xl text-gold-light text-right leading-relaxed" dir="rtl">اذكر ما خرجت عليه من الدنيا وهي شهادة أن لا إله إلا الله وأن سيدنا محمداً رسول الله صلى الله تعالى عليه وسلم، وأن رضيت بالله رباً وبالإسلام ديناً وبسيدنا محمد صلى الله تعالى عليه وسلم نبياً ورسولاً وبالقرآن إماماً، وأن الساعة آتية لا ريب فيها وأن الله يبعث من في القبور.</p>
            </div>
            <p className="text-xs">Il est souhaitable de réciter la sourate « yacine » au niveau de la tête et de réciter aussi la sourate « tabaraka » au niveau des pieds.</p>
          </div>
        </section>

        {/* SECTION 7: RECOMMANDATIONS DURANT L’ENTERREMENT */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter italic">RECOMMANDATIONS DURANT L’ENTERREMENT</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 italic text-sm">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
              <p>Il n’est pas recommandé, durant l’enterrement, de lire le Coran ou des prières ou des khassaïdes (poèmes) ou d’invoquer Dieu à haute voix. Tout ce que l’on récite en ce moment doit l’être à voix basse, si l’on espère en obtenir quelque agrément. Tout ce que l’on dit, on doit le faire en ne pensant qu’à Dieu et sans chercher à plaire.</p>
            </div>
            <div className="bg-red-950/20 p-8 rounded-3xl border border-red-500/20 space-y-4">
              <p>Il n’est pas recommandé, dans cette situation, de manger, de boire, de rire, de bavarder ou de parler de choses profanes. Ce qui est recommandé dans ces circonstances, c’est de prier Dieu pour soi-même et pour les morts, de s’émouvoir, de méditer et de renforcer sa foi en étant persuadé qu’on viendra rejoindre ceux qui y sont enterrés et qu’on séjournera en leur compagnie pendant un très long temps dont seul Dieu connaît la durée. C’est là le profit qu’on peut tirer en allant dans les cimetières ; sans cela, il est préférable de ne pas s’y rendre.</p>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button onClick={() => router.push('/partie/8/b')} className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl">Précédent</button>
        <button onClick={() => router.push('/partie/8/d')} className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-xl hover:scale-105 active:scale-95 transition-all">Suivant</button>
      </div>
    </main>
  );
}