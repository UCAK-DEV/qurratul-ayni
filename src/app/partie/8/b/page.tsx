'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PriereMortuairePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  const chapterData = CHAPTERS.find(c => c.id === "8") || CHAPTERS[7];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-gold/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block"
        >
          Chapitre VIII — Section B
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-6xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LA PRIÈRE MORTUAIRE <br />
          <span className="font-amiri text-2xl md:text-4xl opacity-80 italic text-gold block mt-2">صلاة الجنازة</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
        
        {/* RÈGLES GÉNÉRALES */}
        <section className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 border-l-2 border-gold/20 pl-6">
              <p className="text-white/80 leading-relaxed italic text-sm md:text-base">
                La prière comprend quatre (4) « kabar » (alahou akbar) pour lesquels on ne lève les bras qu’au cours du premier. S’il s’agit du corps d’un homme, on se place à la hauteur de sa ceinture ; s’il s’agit du corps d’une femme, on se place au niveau de ses épaules avant de prononcer la formule d’entrée en prière « alahou akbar », non sans avoir auparavant formulé intérieurement l’intention de prier sur ce (ou ces) mort.
              </p>
            </div>
            <div className="order-1 md:order-2 text-right">
              <p className="font-amiri text-xl md:text-2xl text-gold-light leading-relaxed" dir="rtl">
                تتكون صلاة الجنازة من أربع تكبيرات، لا ترفع الأيدي إلا عند التكبيرة الأولى. إذا كانت الجنازة لرجل، يقف الإمام حذاء وسطه، وإذا كانت لامرأة، يقف حذاء منكبيها (كتفيها)، مع استحضار نية الصلاة على الميت في القلب قبل التكبير.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENU DÉTAILLÉ DES CAS */}
        <div className="space-y-10">
          
          {/* 1. UN SEUL HOMME */}
          <div className="glass-card p-8 rounded-[2rem] border border-gold/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-gold/10 pb-4">
              <h2 className="text-gold font-black text-sm uppercase tracking-widest leading-relaxed">S’IL S’AGIT DU CORPS D’UN SEUL HOMME,</h2>
              <span className="font-amiri text-xl text-gold-light">إذا كانت الجنازة لرجل واحد</span>
            </div>
            <div className="space-y-6 text-white/70 text-sm leading-relaxed italic">
              <p>réciter après chacun des trois premiers « kabar » (alahou akbar), ce qui suit :</p>
              
              <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-4 font-serif">
                <p className="text-white/90 italic">
                  « bismilahi rahmani alhamdoulilahi leuzi amâta wa hahya wa l hamdou lilahi leuzi youkh yi mowta lehoul azamatou wal kebreyahou wal moulkou wal khouderatou was sanahou wahouwa ala kouli cheyhine khadiroune alahouma sali was salime ala seydina mouhamadine wa ala ali seydina mouhamadine wa barik ala seydina mouhamadine wa ala ali seydina mouhamadine kana saleyta was salamta wa bâraka ala seydina Ibrahima wa ala ali seydina Ibrahima fil alamina innaka hamidoune madjidoune alahouma inna hou abdouka wa ibnou abdika wabnou amatika kâna yach hadou ann lahilala ila anta wah daka la charika laka wa anna seyda mouhamadane salalahou tahala aleyhi wa salama abdouka wa rassoulouka wa anta ahlamou bihi alahouma innakâna moukhsinane faz zid fi ikhsânihi wa innkana moussi ann fa tta djâwaz ann sayihatihi alahouma la tahrimna adjira hou wala taftin na bahdahou ».
                </p>
                <p className="font-amiri text-lg text-gold-light/90 text-right leading-relaxed border-t border-white/5 pt-4" dir="rtl">
                  بسم الله الرحمن الرحيم، الحمد لله الذي أمات وأحيا، والحمد لله الذي يحيي الموتى، له العظمة والكبرياء والملك والقدرة والسناء، وهو على كل شيء قدير. اللهم صل وسلم على سيدنا محمد وعلى آل سيدنا محمد، وبارك على سيدنا محمد وعلى آل سيدنا محمد، كما صليت وسلمت وباركت على سيدنا إبراهيم وعلى آل سيدنا إبراهيم في العالمين، إنك حميد مجيد. اللهم إنه عبدك وابن عبدك وابن أمتك، كان يشهد أن لا إله إلا أنت وحدك لا شريك لك، وأن سيدنا محمداً (صلى الله تعالى عليه وسلم) عبدك ورسولك، وأنت أعلم به. اللهم إن كان محسناً فزد في إحسانه، وإن كان مسيئاً فتجاوز عن سيئاته، اللهم لا تحرمنا أجره ولا تفتنا بعده.
                </p>
              </div>

              <p>C’est cela que l’on récite après chacun des trois premiers « kabar » (alahou akbar).</p>
              <p>Après le quatrième (a) « kabar », on prononce ce qui suit :</p>
              
              <div className="bg-gold/5 p-6 rounded-xl border border-gold/10 space-y-4 font-serif">
                <p className="text-white/90 italic">
                  « Alahouma ikhfir li hayyinâ wa may yitinâ wa hâdirinâ wa khâibina wa sakhirina wakabîrinâ wazakarinâ wa ounzânâ innaka tahlamou motakhalabanâ wa maswânâ waliwâlidînâ walimane sabakhana bil îmani walill mouslimîna wal mouslimâti walil mominîna wal mominâti al hahyâ – i minehoume wal anwâti alahouma mane ahyaytahou minâ fa ahyihî ala îmini wa mane tawaf faytahou mine nâ fatawaf fahô ala islami wa as idna bilikhâ ika wa tayibnâ lil mawtî watayinhoulanâ wadj al fihi rahatanâ wa massarratanâ ».
                </p>
                <p className="font-amiri text-lg text-gold-light/90 text-right leading-relaxed border-t border-white/5 pt-4" dir="rtl">
                  اللهم اغفر لحينا وميتنا، وشاهدنا وغائبنا، وصغيرنا وكبيرنا، وذكرنا وأنثانا، إنك تعلم متقلبنا ومثوانا، ولوالدينا ولمن سبقنا بالإيمان، وللمسلمين والمسلمات والمؤمنين والمؤمنات، الأحياء منهم والأموات. اللهم من أحييته منا فأحيه على الإيمان، ومن توفيته منا فتوفه على الإسلام، وأسعدنا بلقائك، وطيبنا للموت وطيبه لنا، واجعل فيه راحتنا ومسرتنا.
                </p>
              </div>
              <p>Après quoi, on prononce le salut final.</p>
            </div>
          </div>

          {/* 2. DEUX HOMMES */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-white/5 pb-4">
              <h2 className="text-gold font-black text-sm uppercase tracking-widest">S’IL S’AGIT DE DEUX HOMMES,</h2>
              <span className="font-amiri text-xl text-gold-light">إذا كانت الجنازة لرجلين</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic">
              <p>on prononce l’invocation ci-dessus depuis « Bismilahi rahmani rahimi » jusqu’à « hamidoune madjidoune » et l’on ajoute ceci :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif">
                <p className="text-white/90">« Alahouma innahoumâ abdaka wabn â adbeyka wabnâ amateyka kânâ yach heudâni ann lahilaha ila anta wahdaka la charika laka wa anna seyidana mouhamadane salalahou tahala aleyhi was salama abdouka wa rasoulouka wa anta ahlamou bihimâ alahouma innkana moukhsineyni faz zid fi ikhsânihima wa innakânâ moussi ayni fata djâwaz ann seyi atihimâ alahouma la takhrimnâ adjirahoumâ walâ taftine nâ badahoumâ ».</p>
                <p className="font-amiri text-lg text-gold-light text-right mt-4" dir="rtl">اللهم إنهما عبداك وابنا عبديك وابنا أمتيك، كانا يشهدان أن لا إله إلا أنت وحدك لا شريك لك، وأن سيدنا محمداً عبدك ورسولك وأنت أعلم بهما. اللهم إن كانا محسنين فزد في إحسانهما، وإن كانا مسيئين فتجاوز عن سيئاتهما، اللهم لا تحرمنا أجرهما ولا تفتنا بعدهما.</p>
              </div>
              <p>C’est cela que l’on dit après les trois « kabar » (alahou akbar). Après le quatrième « kabar », on répète ce qu’on avait dit après le quatrième « kabar » de la première prière citée (sur un mort). Après, on prononce le salut final.</p>
            </div>
          </div>

          {/* 3. PLUSIEURS HOMMES */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-white/5 pb-4">
              <h2 className="text-gold font-black text-sm uppercase tracking-widest">S’IL S’AGIT DES CORPS DE PLUSIEURS HOMMES (PLUS DE DEUX),</h2>
              <span className="font-amiri text-xl text-gold-light">إذا كانت الجنازة لعدة رجال</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic">
              <p>on répète ce qu’on avait dit à propos de la première prière jusqu’à « madjidoune » (sur un seul mort), avant d’ajouter ce qui suit :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif">
                <p className="text-white/90">« Alahouma innahoum abîdouka wabnâou habîdika wabnâhou imâ ika kânô yach hadôna ann lâhilaha ilâ anta wahdaka la charika laka wa ana seyidina mouhamadane salalahou tahala aleyhi wa salama habdouka warassoulouka wa anta ahlamou bihim alahouma inn kana mouhsinîna fazid fi ihsanihim wa inkânô moussî înna fatadjâ waz ann seyi hâ tîhim. Alahouma la tahrimnâ adjra houme wâla taftinnâ bahdahoume ».</p>
                <p className="font-amiri text-lg text-gold-light text-right mt-4" dir="rtl">اللهم إنهم عبيدك وأبناء عبيدك وأبناء إمائك، كانوا يشهدون أن لا إله إلا أنت وحدك لا شريك لك، وأن سيدنا محمداً عبدك ورسولك وأنت أعلم بهم. اللهم إن كانوا محسنين فزد في إحسانهم، وإن كانوا مسيئين فتجاوز عن سيئاتهم، اللهم لا تحرمنا أجرهم ولا تفتنا بعدهم.</p>
              </div>
              <p>C’est cela qu’on dit après les 3 premiers « kabar » (alahou akbar). Après le quatrième, on dit ce qu’on doit dire après le quatrième « kabar » de la première prière (sur un mort). Ensuite, on prononce le salut final.</p>
            </div>
          </div>

          {/* 4. UN GARÇON */}
          <div className="glass-card p-8 rounded-[2rem] border border-emerald-500/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-emerald-500/10 pb-4">
              <h2 className="text-emerald-400 font-black text-sm uppercase tracking-widest">S’IL S’AGIT DU CORPS D’UN GARÇON,</h2>
              <span className="font-amiri text-xl text-emerald-400/80">إذا كانت الجنازة لصبي واحد</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic">
              <p>on dit ce qu’on doit dire à propos de la première prière sur un mort jusqu’à « madjidoune », pour ensuite ajouter ce qui suit :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif">
                <p className="text-white/90 italic">« Alahouma innahô abdouka wabnou kabdika wabnou amatika anta khalakhtahô warazakhtahô wa anta amatahô wa anta touchtouhyihi. Alahouma fadj hal hou liwalidîhi salafane wazoukhrane wa farâtane wa sakhile bihi mawazinahoume wa ahzime bihi oudjôranhoume wala tahrimnâ wa iyâhoume adjrahou wala tarfinâ wa iyâhoume bahdaho. Alahouma al hikh hou bissâlihi salafil môminîna fi kafâ la ti ibrahima wa hâfihi minn fitnatil khabri wa minn azâbi djahanama ».</p>
                <p className="font-amiri text-lg text-emerald-400/80 text-right mt-4" dir="rtl">اللهم إنه عبدك وابن عبدك وابن أمتك، أنت خلقته ورزقته وأنت أمته وأنت تحييه. اللهم فاجعله لوالديه سلفاً وذخراً وفرطاً، وثقل به موازينهما وأعظم به أجورهما، ولا تحرمنا وإياهما أجره، ولا تفتنا وإياهما بعده. اللهم ألحقه بصالح سلف المؤمنين في كفالة إبراهيم، وقهِ فتنة القبر وعذاب جهنم.</p>
              </div>
              <p>C’est cela qu’on dit après les trois premiers « kabar ».</p>
              <p>Après le quatrième, on dit ceci :</p>
              <div className="bg-emerald-950/40 p-6 rounded-xl border border-emerald-500/10 font-serif">
                <p className="text-white/90 italic">« alahouma ikhfirli aslâfinâ wa afrâtinâ wa limane sabakhanâ bilîmâni. Alahouma mann ahyay tahou minâ fa ahyihî ala lîmâni wa mann tawaf faytahô mina fa tawaf fahô ala islâmi wakh fir lil mouslimîna wal mouslimâti wal môminîna wal môminâti alahyâhi minn houme wal lamwâti »</p>
              </div>
              <p>et on prononce le salut final.</p>
            </div>
          </div>

          {/* 5. DEUX GARÇONS */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-white/5 pb-4">
              <h2 className="text-gold font-black text-sm uppercase tracking-widest leading-relaxed">S’IL S’AGIT DES CORPS DE DEUX GARÇONS,</h2>
              <span className="font-amiri text-xl text-gold-light">إذا كانت الجنازة لصبيين</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic">
              <p>on dit ce qu’on doit dire jusqu’à « Madjidoune », puis on ajoute ce qui suit :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif text-white/90 italic leading-relaxed">
                « Alahouma innahoumâ abdâka wabnâ abdâka wabnâ amataïka anta khalakh tahoumâ wa razakh tahoumâ wa anta ammat tahoumâ wa anta touhyihimâ. Alahouma fadjhal houmâ liwalidîhimâ salafane wa zoukhrane wa faratane wa sakhil bihimâ mowazinahoum wa ahzime bihima oudjôrahoume wa la tahrimnâ wa iyahoum adjrahoumâ walâ taftinenâ wa iyahoum bahdahoumâ. Alahouma al hikh hounâ bissalâfil mouminîna fî kafâlati ibrahima wa âfihimâ minn fitnatile khabri wa minn hazâbi djahanama »
              </div>
              <p>c’est cela qu’on doit dire après les trois premiers « kabar » ; après le quatrième, on dit ce qu’on doit dire, s’il s’agit du corps d’un garçon. Après, on prononce le salut final.</p>
            </div>
          </div>

          {/* 6. PLUS DE DEUX GARÇONS */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-white/5 pb-4">
              <h2 className="text-gold font-black text-sm uppercase tracking-widest leading-relaxed">S’IL S’AGIT DES CORPS DE PLUS DE DEUX GARÇONS,</h2>
              <span className="font-amiri text-xl text-gold-light">إذا كانت الجنازة لأكثر من صبيين</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic text-justify">
              <p>on dit ce qu’on doit dire jusqu’à « madjidoune », puis on ajoute ceci :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif text-white/90 italic leading-relaxed">
                « Alahouma innahoum abîdouka wa abnâhou abîdika wa abnâhou imma ika anta khalakhtahoume wa razakhtahoume wa anta amatahoume wa anta touhyihime. Alahouma fadjhalhoume liwâlidîhime salafane wa zoukhrane wa faratane wa sakhil bihime mowazinahoume wa ahzime bihime oudjôrahoume wala tahrime nâ wa iyâhoume adjrahoume walâ taftinâ wa iyâhoume bahdahoume. Alahouma al hikh houne bissâlihi salafil môminîna fî kafâlati ibrahima wa âfihime minn fitnatile khabri wa minn hazâbi djahanama ».
              </div>
              <p>C’est cela qu’on dit après les trois premiers « kabar » ; après le quatrième, on dit ce qu’on doit dire quand il s’agit d’un seul garçon, puis on prononce le salut final.</p>
            </div>
          </div>

          {/* 7. UNE SEULE FEMME */}
          <div className="glass-card p-8 rounded-[2rem] border border-gold/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-gold/10 pb-4">
              <h2 className="text-gold font-black text-sm uppercase tracking-widest leading-relaxed">S’IL S’AGIT DU CORPS D’UNE SEULE FEMME,</h2>
              <span className="font-amiri text-xl text-gold-light">إذا كانت الجنازة لامرأة واحدة</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic">
              <p>on dit ce qu’on doit dire jusqu’à « madjidoune », puis on ajoute ceci :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif">
                <p className="text-white/90 italic leading-relaxed">« Alahouma inna hâ amatouka wabnatou abdika, wabnatou amatika kânat tach hadou ann lahilaha ilah anta wahdaka la charika laka wa anna seyidina mouhamadane salalahou tahala aleyhi was salama abdouka wa rassoulouka wa anta ahlamou bihâ. Alahouma inn kânat mouhsinatane fazid fî ihsâniha wa inn kânat moussîatane fatadjâ waze ann seyiâtihâ. Alahouma la tahrim a adjarahâ wala taftina bahdahâ ».</p>
                <p className="font-amiri text-lg text-gold-light text-right mt-4 border-t border-white/5 pt-4" dir="rtl">اللهم إنها أمتك وبنت عبدك وبنت أمتك، كانت تشهد أن لا إله إلا أنت وحدك لا شريك لك، وأن سيدنا محمداً عبدك ورسولك وأنت أعلم بها. اللهم إن كانت محسنة فزد في إحسانها، وإن كانت مسيئة فتجاوز عن سيئاتها، اللهم لا تحرمنا أجرها ولا تفتنا بعدها.</p>
              </div>
              <p>C’est cela qu’on doit dire après les trois premiers « kabar » ; après le quatrième, on doit ajouter ce qu’on doit dire quand il s’agit du corps d’un seul homme, puis on prononce le salut final.</p>
            </div>
          </div>

          {/* 8. DEUX FEMMES */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-white/5 pb-4">
              <h2 className="text-gold font-black text-sm uppercase tracking-widest">S’IL S’AGIT DES CORPS DE DEUX FEMMES,</h2>
              <span className="font-amiri text-xl text-gold-light">إذا كانت الجنازة لامرأتين</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic">
              <p>on dit ce qu’on doit dire jusqu’à « madjidoune », puis on ajoute ce qui suit :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif text-white/90 italic leading-relaxed">
                « Alahouma inna houmâ amatâka wabnâtâ abdaïka wabnâtâ amataïka kânatâ tach hadâni ann lahilaha illa anta wahdaka lâcharikalaka wa anna seydina mouhamadane sallahou tahala aleyhi was salama habdouka wa rassoulouka wa anta ahlamou bihimâ. Alahouma innkânatâ namoufiri aïni fazid fi ihsânihimâ wa inn kânatâ moussîataïni fatadjâ waze hane seyiâtihima. Alahouma lâ tahrimnâ adjrahoumâ walâ taftina bahdahoumâ ».
              </div>
              <p>C’est cela qu’on formule après les trois premiers « kabar » ; après le quatrième, on dit ce qu’on doit dire du corps d’une seule femme, puis on prononce le salut final.</p>
            </div>
          </div>

          {/* 9. PLUS DE DEUX FEMMES */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-white/5 pb-4">
              <h2 className="text-gold font-black text-sm uppercase tracking-widest">S’IL S’AGIT DES CORPS DE PLUS DE DEUX (2) FEMMES,</h2>
              <span className="font-amiri text-xl text-gold-light">إذا كانت الجنازة لأكثر من امرأتين</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic text-justify">
              <p>on dit ce qu’on doit dire jusqu’à « madjidoune », puis on ajoute ceci :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif text-white/90 italic leading-relaxed">
                « Alahouma innahouna imâ ouka wa banâtou habîdika wa banâtou imâhika houna yach hadna ann lahilaha ila anta wahdaka la charika laka wa anna seyidana mouhamadane salalahou tahala aleyhi wa salama habdouka wa rassoulaka wa anta ahlamou bihina. Alahouma innkouna mouhsinatine fa zid fi ihsanihina wa inne kounna moussîâtine fatadjâ waze ann seyyiâtihina. Alahouma la tahrimnâ adjrahouna wala taftinâ bahdahounna ».
              </div>
              <p>C’est cela qu’on dit après les trois premiers « kabar » ; après le quatrième, on dit ce qu’on doit dire quand il s’agit du corps d’une seule femme, puis on prononce le salut final.</p>
            </div>
          </div>

          {/* 10. UNE FILLETTE */}
          <div className="glass-card p-8 rounded-[2rem] border border-emerald-500/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-emerald-500/10 pb-4">
              <h2 className="text-emerald-400 font-black text-sm uppercase tracking-widest leading-relaxed">S’IL S’AGIT DU CORPS D’UNE FILLETTE,</h2>
              <span className="font-amiri text-xl text-emerald-400/80">إذا كانت الجنازة لبنت واحدة</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic">
              <p>on prononce ce qu’on doit dire jusqu’à « madjidoune », puis on dit ce qui suit :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif text-white/90 italic leading-relaxed">
                « Alahouma innaha amatouka wabnatou abdika wabnatou amatika anta khalakhtaha wazakhtaha wa anta amataha wa anta touhyiha. Alahouma fadjhalna liwalidihâ salafane wa soukhrane wa faratane wa sakhil biha mawazinahoume wa ahzime biha oudjôrahoume walâ tahrimnâ wa iyâhoume adjraha walâ taftinna wa iyâhoume bahdahâ. Alahouma al hikh hâ bissâlihi salafil môminina fî kafâlati ibrahima wa âfihâ minn fitnatile khabri wa min azâbi djahanama ».
              </div>
              <p>C’est cela qu’on doit réciter après les trois premiers « kabar » ; après le quatrième, on dit ce qu’on doit dire lorsqu’il s’agit du corps d’un garçon, puis on prononce le salut final.</p>
            </div>
          </div>

          {/* 11. DEUX FILLETTES */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-white/5 pb-4">
              <h2 className="text-gold font-black text-sm uppercase tracking-widest leading-relaxed">S’IL S’AGIT DES CORPS DE DEUX FILLETTES,</h2>
              <span className="font-amiri text-xl text-gold-light">إذا كانت الجنازة لبنتين</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic text-justify">
              <p>on doit formuler ce qu’on doit dire jusqu’à « madjidoune », puis on dit ce qui suit :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif text-white/90 italic leading-relaxed">
                « Alahouma inna houmâ amatâka wabnatâ abdaïka wabnatâ amataïka anta khalakh tahoumâ wa razakhtahouma wa anta amatahoumâ wa anta touhi ina. Alahouma fadhal houmâ liwalidîhima salafane wa zoukhrane wa faratane wa sakhil bihimâ mawâzinahoume wa ahzime bihima oudjôrahoume walâ tahrimnâ wa iyâhoume adjahouma walâ taftinâ wa iyâhoume bahdahouma. Alahouma al hikh houmâ bissalihi salafil môminina fî kafâlati ibrahima wa afihima minn fitnatile khabri wa minn hazâbi djahanama ».
              </div>
              <p>C’est cela qu’on doit dire après les trois premiers « kabar » ; après le quatrième, on dit ce qu’on doit dire lorsqu’il s’agit d’une fille, puis on prononce le salut final.</p>
            </div>
          </div>

          {/* 12. PLUS DE DEUX FILLETTES */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-white/5 pb-4">
              <h2 className="text-gold font-black text-sm uppercase tracking-widest leading-relaxed">S’IL S’AGIT DES CORPS DE PLUS DE DEUX FILLETTES,</h2>
              <span className="font-amiri text-xl text-gold-light">إذا كانت الجنازة لأكثر من بنتين</span>
            </div>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed italic text-justify">
              <p>on récite ce qu’on doit dire jusqu’à « madjidoune », puis on ajoute ceci :</p>
              <div className="p-4 bg-black/20 rounded-xl border border-white/5 font-serif text-white/90 italic leading-relaxed">
                « Alahouma innahouna imâ ouka wa banâtou abîdika wa banâtou imâika anta khalakh tahounâ wa razakhtahouna wa anta amatahounna wa anta touhyihina. Alahouma fadjhal houne liwâlidîhima salafane wa zoukhrane wa faratane wa sakhil bihina mawâzinahoune wahzime bihina oudjôrahoume walâ tahrimnâ wa iyâhoume oudjôrahouna wala taftinna et iyâhoume bahdahouna. Alahouma faal hikh houne bissalihi salafil môminina fî kafâlati ibrahima wa âfihina minn fitnatile khabri wa minn hazabi djahanama ».
              </div>
              <p>C’est cela qu’on dit après les trois premiers « kabar » ; après le quatrième, on formule ce qu’on doit dire lorsqu’il s’agit du corps d’une seule fille – puis le salut final.</p>
            </div>
          </div>

          {/* RÉCAPITULATIF FINAUX */}
          <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 italic text-sm">
                <h3 className="text-gold font-black text-xs uppercase mb-4 tracking-widest leading-relaxed">S’il s’agit de corps de grandes personnes et d’enfants,</h3>
                <p>on prononce ce qu’on doit dire, s’il ne s’agit que de corps de grandes personnes.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 italic text-sm">
                <h3 className="text-gold font-black text-xs uppercase mb-4 tracking-widest leading-relaxed">S’IL S’AGIT DE BEAUCOUP DE CORPS,</h3>
                <p>on peut prier séparément sur chaque corps. Cependant, il est préférable de les réunir. Au moment de prier sur eux, il convient de mettre à côté de l’imam celui qu’on croit être le meilleur croyant.</p>
              </div>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 italic text-sm">
              <h3 className="text-gold font-black text-xs uppercase mb-4 tracking-widest leading-relaxed">S’IL S’AGIT DE CORPS DE PERSONNES DE SEXES DIFFÉRENTS,</h3>
              <p>on met à côté de l’imam les personnes de sexe masculin, même s’il s’agit de garçons. S’il s’agit de corps de grandes personnes et de jeunes enfants, on met du côté de l’imam les corps des grandes personnes.</p>
            </div>

            <div className="p-8 bg-emerald-900/20 rounded-3xl border border-emerald-500/20 italic text-sm">
              <h3 className="text-emerald-400 font-black text-xs uppercase mb-4 tracking-widest leading-relaxed">SI QUELQU’UN VIENT EN RETARD,</h3>
              <p>il reprend les « kabar » (alahou akbar) effectués en son absence, après le salut final ; si le corps est toujours là, il doit réciter la prière.</p>
            </div>
          </section>

          {/* LE TRANSPORT ET CORTÈGE */}
          <section className="bg-gold/5 p-8 md:p-12 rounded-[3rem] border border-gold/10 space-y-8 italic">
            <div className="flex items-center gap-6 mb-8">
              <h2 className="text-xl font-black text-gold uppercase tracking-tighter">LE TRANSPORT ET LE CORTÈGE</h2>
              <div className="h-px flex-1 bg-gold/10" />
            </div>
            
            <div className="space-y-6 text-white/70 text-sm leading-relaxed text-justify">
              <p>Si on doit porter le mort sur la tête, il est préférable que ce soit fait par quatre (4) personnes si possible, ou même moins de quatre (4) personnes. Il faut signaler qu’il n’est pas souhaitable que le nombre de personnes dépasse celui de quatre. Alors, celles qui sont du côté de la tête se mettent devant.</p>
              <p>Ceux des accompagnateurs qui sont à pied marchent devant le mort ; ceux qui utilisent un moyen de locomotion viennent derrière le mort.</p>
              <p>Peut faire partie de ce cortège une vieille femme, laide ou voûtée au point de laisser tout le monde indifférent ; elle devra se mettre derrière les hommes et ne pas s’être parfumée. Mais une femme un tant soit peu attirante n’a pas le droit de faire partie de ce cortège, même s’il s’agit d’une parente très proche.</p>
              <p className="font-bold text-white/90">On peut déplacer un corps vers un endroit différent de celui où il s’est éteint, pour une raison ou une autre, tant qu’on ne l’a pas enterré. S’il est déjà inhumé, on ne peut plus l’exhumer, surtout si l’on croit qu’il est en état de décomposition.</p>
            </div>
          </section>

        </div>
      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/8/a')} 
          className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/8/c')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}