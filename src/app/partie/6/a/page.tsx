'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function NoddComplet() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "6") || CHAPTERS[5];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-emerald-950 text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Décoration de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre VI — Section A
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          Les pratiques de la prière <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">الأذان - النّدّ</span>
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

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* INTRODUCTION : COUVERTURE DES PARTIES INTIMES */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Les pratiques de la prière</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">ستر العورة</h2>
          </div>
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                <p className="text-2xl md:text-3xl font-amiri text-white leading-[1.8] dir-rtl">
                  بعد طهارة البدن والثياب والمكان، يجب ستر العورة، وإلا فلا تصح الصلاة. يجب على الرجل الستر من المنكبين إلى الركبتين، وللمرأة كامل جسدها إلا الوجه والكفين. وأي جزء يجب ستره ولم يستر يبطل الصلاة ويجب إعادتها فوراً.
                </p>
              </div>
              <div className="hidden md:block w-[1px] h-20 bg-gold/10 order-2" />
              <div className="w-full md:w-1/2 text-left order-3 md:order-1 border-l-2 border-gold/10 pl-8">
                <p className="text-lg text-white/50 font-serif italic leading-relaxed">
                  "Après la purification du corps, des habits et des lieux de prière, il faut cacher au moins ses parties intimes, faute de quoi la prière n’est pas valable. S’il s’agit d’un homme, il doit se couvrir des épaules jusqu’aux genoux. Quant à la femme, elle doit se couvrir tout le corps à l’exception des paumes des mains et du visage. Toute partie devant être couverte et qui ne l’est pas chez l’homme ou la femme annule la prière ; réparation doit être faite alors immédiatement."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION : LE NODD (STATUT ET DÉFINITION) */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">LE NODD : APPEL À LA PRIÈRE</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">الأذان وحكمه</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-4">
              <p className="text-gold text-xs font-bold uppercase">Définition et Statut</p>
              <p className="text-white/70 text-sm leading-relaxed">
                C’est une pratique traditionnelle (sounna) presque obligatoire pour toute mosquée ou pour tout rassemblement de personnes susceptibles d’en drainer d’autres. Pour celui qui a l’habitude d’annoncer l’heure de la prière, le faire devient pour lui une pratique traditionnelle (sounna), même s’il ne se trouve pas dans une mosquée.
              </p>
              <p className="text-gold-light font-amiri text-xl dir-rtl">
                الأذان سنة مؤكدة في حق الجماعة الواردة لمسجد أو غيره. وهو سنة لمن اعتاد الإعلان عن وقت الصلاة ولو في غير مسجد.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-4">
              <p className="text-gold text-xs font-bold uppercase">Conditions de Validité</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Il est méritoire pour une personne qui se trouve seule en brousse ou dans les champs d’appeler à la prière. Lorsqu’il y a des mosquées dans le même voisinage, l’appel à la prière devient pour chacune d’elles une pratique traditionnelle.
              </p>
              <p className="text-gold-light font-amiri text-xl dir-rtl">
                يندب لمن كان وحده في الفلاة أو المزرعة أن يؤذن. وإذا تعددت المساجد في الحي الواحد، فالأذان سنة لكل مسجد منها.
              </p>
            </div>
          </div>

          <div className="bg-gold/5 p-8 rounded-[2rem] border border-gold/10">
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Pour être valable, l’appel doit être effectué par un homme musulman jouissant de ses facultés mentales. L’appel à la prière effectué par une femme est blâmable. Il est préférable que le muezzin soit un homme qui ait de la retenue (masrur), ayant une bonne notion de l’heure, ayant une voix belle et forte, et soit en état de pureté (ablutions).
            </p>
            <p className="text-gold-light font-amiri text-xl dir-rtl">
              يشترط في صحة الأذان أن يكون المؤذن مسلماً عاقلاً ذكراً. وأذان المرأة مكروه. ويستحب أن يكون المؤذن ديناً، عارفاً بالأوقات، حسن الصوت، صَيِّتاً، متوضئاً، وأن يؤذن في مكان مرتفع مستقبلاً القبلة.
            </p>
          </div>
        </section>

        {/* SECTION : RÈGLES DU MUEZZIN */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">RÈGLES DU MUEZZIN</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">آداب المؤذن</h2>
          </div>
          <div className="bg-white/5 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-gold/10">
            <div className="space-y-6">
              {[
                {
                  fr: "Durant l’appel, il ne doit pas parler, il ne doit pas saluer quelqu’un, ni répondre à une salutation ; il ne doit l’interrompre sous aucun prétexte.",
                  ar: "أثناء الأذان لا يجوز له أن يتكلّم، ولا أن يُسلِّم على أحد، ولا أن يردّ السلام، ولا يجوز له قطع الأذان تحت أيّ ذريعة."
                },
                {
                  fr: "On ne doit pas appeler à la prière avant l’heure prescrite, sauf pour celle de l’aube (sobh).",
                  ar: "لا يُؤذَّن قبل الوقت إلا في صلاة الصبح."
                },
                {
                  fr: "Pour cette dernière, il est méritoire de faire l’appel avant l’heure, notamment vers la fin de la sixième et dernière partie de la nuit.",
                  ar: "وأمّا هذه الأخيرة، فيُستحبّ أن يُؤذَّن لها قبل دخول وقتها، ولا سيّما في أواخر السُّدس السادس والأخير من الليل."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col xl:flex-row gap-3 xl:gap-8 border-b border-white/5 pb-6 last:border-0">
                  <div className="flex gap-4 items-start flex-1">
                    <span className="text-gold font-black opacity-30 text-3xl leading-none">{idx + 1}</span>
                    <p className="text-white/75 text-sm md:text-base">{step.fr}</p>
                  </div>
                  <p className="font-amiri text-gold-light text-xl xl:text-right xl:max-w-[40%] leading-relaxed">{step.ar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION : COMMENT APPELER (SÉQUENCE) */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Comment appeler à la prière ?</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">كيفية الأذان</h2>
          </div>
          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-gold/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  { fr: "Alahou akbar", ar: "الله أكبر", count: "2 fois", style: "Haute voix" },
                  { fr: "Hach hadou ann laa ilaaha ilal lâh", ar: "أشهد أن لا إله إلا الله", count: "2 fois", style: "Voix basse" },
                  { fr: "Hach hadou anna Mouhammadan Rassouloulah", ar: "أشهد أن محمداً رسول الله", count: "2 fois", style: "Voix basse" },
                  { fr: "Hach hadou ann laa ilaaha ilal lâh", ar: "أشهد أن لا إله إلا الله", count: "2 fois", style: "Haute voix" },
                  { fr: "Hach hadou anna Mouhammadane Rassouloula", ar: "أشهد أن محمداً رسول الله", count: "2 fois", style: "Haute voix" },
                  { fr: "Haya halas sala", ar: "حي على الصلاة", count: "2 fois", style: "Haute voix" },
                  { fr: "Haya alal fala", ar: "حي على الفلاح", count: "2 fois", style: "Haute voix" }
                ].map((step, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <div className="flex flex-col">
                      <span className="text-[8px] text-white/30 uppercase">{step.style}</span>
                      <span className="text-white text-sm italic">"{step.fr}"</span>
                    </div>
                    <span className="font-amiri text-gold text-lg">{step.ar}</span>
                    <span className="text-gold-light text-[10px] font-bold">{step.count}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="bg-gold/10 p-6 rounded-2xl border border-gold/20">
                  <p className="text-gold text-[10px] font-black uppercase mb-2">Note pour le Sobh (Matin)</p>
                  <div className="flex justify-between items-center">
                    <p className="text-white/80 text-sm italic">"Has salâtou khaïroune mina nawmi"</p>
                    <p className="font-amiri text-gold text-lg">الصلاة خير من النوم</p>
                  </div>
                  <p className="text-[10px] text-white/40 mt-1">2 fois - Haute voix</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-white font-medium italic">Allahou akbar (2 fois)</span>
                    <span className="font-amiri text-gold text-lg">الله أكبر</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium italic">Lah ilaha ilal laa (1 fois)</span>
                    <span className="font-amiri text-gold text-lg">لا إله إلا الله</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION : INVOCATIONS ET RÉPONSES */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Réponses et Invocations</h2>
            <div className="h-px flex-1 bg-gold/10" />
          </div>
          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-8">
            <p className="text-white/50 text-xs italic text-center">"Pendant l’appel à la prière, il est méritoire de reprendre ce que dit le muezzin..."</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { trigger: "Au 1er et 2ème 'Laa ilaaha ilallah'", respAr: "رضيت بالله رباً وبالإسلام ديناً وبسيدنا محمد صلى الله عليه وسلم نبياً ورسولاً", respFr: "Rabîtou bilahi rabane wa bil islami dînane wa bi seydina Mouhamadine salâlahou tahala aleyhi wa salama nabîyane wa rassoulane" },
                { trigger: "Au 1er et 2ème 'Rassouloula'", respAr: "مرحباً بحبيبي وشوريّتي هيني سيدنا محمد ابن عبد الله صلى الله عليه وسلم", respFr: "Marhabane bihabibi wachourrati haïnî seydina Mouhamadine ibni habdilahi salalahou tahala aleyhi wa salama" },
                { trigger: "Au 'Haya halas sala'", respAr: "مرحباً بالخيلينا هادلن مرحباً بالصلاة وهيهلن وشيهلن", respFr: "Marhabane bilkhailina hadlane marhabane bi salâti wa heuhlane wa sheuhlane " },
                { trigger: "Au 'Haya alal fala'", respAr: "لا حول ولا قوة إلا بالله العلي العظيم", respFr: "La hawla wala khouwata illa bilahil haliyil hazimi" },
                { trigger: "Si muezzin dit (Sobh)", respAr: "صدقت وبررت وأحسنت", respFr: "Sadakhta wa barirta wa ahsanta" }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-gold text-[9px] font-black mb-3 uppercase tracking-widest">{item.trigger}</p>
                  <p className="font-amiri text-white text-xl dir-rtl mb-2 leading-relaxed">{item.respAr}</p>
                  <p className="text-white/40 text-[10px] italic">"{item.respFr}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INVOCATION FINALE */}
        <section className="bg-gold/5 p-10 md:p-16 rounded-[3rem] border border-gold/20 text-center">
          <h3 className="text-gold font-black text-xs uppercase tracking-[0.4em] mb-10">Invocation à la fin de l'appel</h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            <p className="font-amiri text-white text-2xl md:text-3xl dir-rtl leading-[2] mb-6">
              اللهم رب هذه الدعوة التامة الصادقة النابعة والصلاة الخاتمة آت سيدنا محمد صلى الله عليه وسلم الوسيلة والفضيلة والدرجة الرفيعة وابعث حول مخمة محمود اللوزي وحقق ربنا ما خلقت هذا باطلاً. سبحانك فاخذنا عذاب النار. ربنا إنك من تؤدخيل النار فخذ أخ زيته وما للظالمين من الناصرين. ربنا إننا سمعنا مؤدي يديان يونا دي للإيمان آمنوا بربكم فآمنا. ربنا فاغفر لنا ذنوبنا وكفر عنا سيئاتنا وتوفنا مع الأبرار. ربنا واهدنا ما واتتنا على رسولك ولا تخزنا يوم القيامة إنك لا تخلف الميعاد. لا إله إلا الله وحده لا شريك له. كل شيء هالك إلا وجهه. اللهم أن تل اللوزي منًّا تَعلّيا بهذا الشهادة وما شهدت طوبى إلا لك ولا يخبله خيرك من ني. اللهم فاجعل لي خرابتي عندك وهدّبني من نارك واغفر لي ولوالديّ ولكل مؤمن ومؤمنة برحمتك إنك على كل شيء قدير.
            </p>
            <p className="text-white/50 text-sm font-serif italic leading-relaxed">
              "Alahouma raba hazihid dahwati at tâmmati as sâdikhati ann nafihati was salatil khahimati âti seydina Mouhammadane salalahou tahala aleyhi wa salama alwassîlata wal fadilata wa daradiat ar rafîhata wab ash houl makhama mahmoudal leuzi wa hat tahou rabana ma khalakhta heuza bâtilane. Soubhanaka fakhinâ azaba nâri. Rabana innaka man toudd khilin nâra fa khadd akh zeytahô wamâ lis zâlimina min ann sârine. Rabana innana samihna mounâ diyane younâ di lil imâni anna âminou bi rab bikoume fa âmanâ. Rabana fakhfir lana zounoubana wa kaffir anna sayiâtina wa tawaffana ma al abrari. Rabana wahâtina mâ wa attanâ ala roussoulika wala toukhzina yawmal khiyamati innaka la toukhlifoul mî hâda. Lah ilaha ilal lahou wah dahô la charika lahô. Koullou cheyh ine hâlikoune illa wadj heuhô. Alahouma ann tal leuzi manann ta aleya bi heuzihi ch chahaudati wama chahit toubiha illa laka walâ yata khabbalouha khayrouka minn ni. Alahouma fadjal hâ lî khourbatane indaka wa hidiabane minn nârika wakhfirli wali wâlideyya walikouli mouminina wa mouminatin bi rakhmatika innaka alâ kouli cheyhine khadiroune."
            </p>
            <div className="p-6 bg-gold/10 rounded-2xl">
              <p className="text-gold text-[10px] font-black uppercase mb-2">Le Mérite</p>
              <p className="text-white/70 text-xs italic">Celui qui fait cette invocation sera absous de tous ses péchés et ira au paradis sans tourments.</p>
            </div>
          </div>
        </section>

        {/* ENTRÉE ET SORTIE DE LA MOSQUÉE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-950/40 p-10 rounded-[2.5rem] border border-emerald-500/20">
             <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-rounded text-emerald-500 text-3xl">door_front</span>
                <h3 className="text-white font-black text-xs uppercase">Pour entrer dans une mosquée (Pied Droit)</h3>
             </div>
             <p className="font-amiri text-gold-light text-2xl dir-rtl mb-4">بسم الله اللهم فتح لي أبواب رحمتك اللهم إني عبدك ووزيرك وأهالكوتي مزورين أخوني وأنت خير المزورين فحصلوا لك اللهم أنت خِزاني من النار وأنت تدخل الخِلان الجنة بخير الحسابين</p>
             <p className="text-white/60 text-xs italic font-serif border-l-2 border-emerald-500/20 pl-4">
                "Bismilahi alahoumif tahli abwâba rahmatika alahouma iniya abdouka wazâirouka wah alâkouti mazourine akhoune wa anta khayrou mazourine fa hasalouka alahouma antoune khizanî mina nâri wa antoudd khilanil djanata bikhaïri hissabine."
             </p>
          </div>
          <div className="bg-red-950/20 p-10 rounded-[2.5rem] border border-red-500/20">
             <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-rounded text-red-500 text-3xl">door_back</span>
                <h3 className="text-white font-black text-xs uppercase">Pour en sortir (Pied Gauche)</h3>
             </div>
             <p className="font-amiri text-gold-light text-2xl dir-rtl mb-4">بسم الله اللهم افتح لي أبواب فضلك اللهم صب علي الخير سبحان ولا تنزِه هاني صالحة ما احتيتني أبداً ولا تضع حل دوها إرادة ولا تضع حل محيّشتي كدنة ولا تضع حل ني لخيريكا عبدان وضع لي يا ربي في الأرض ديادن</p>
             <p className="text-white/60 text-xs italic font-serif border-l-2 border-red-500/20 pl-4">
                "Bismilahi alâhouma if tahli abwâba fadlika alâhouma souba aléyal khaïra sabane wala tanzi hani saliha mâ ahtaïtanî abadane walâ tadj hal douhâ îradane wala tadj hal mahîchatî kadane wala tadj hal ni likhaïrika habdane wadj hal lî yâ rabi fil ardi diadane."
             </p>
          </div>
        </div>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button onClick={() => router.push('/partie/6')} className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase font-bold text-white/50 hover:text-white transition-all">Sommaire VI</button>
        <button onClick={() => router.push('/partie/6/b')} className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase font-black shadow-lg hover:scale-105 transition-all">Suivant</button>
      </div>
    </main>
  );
}