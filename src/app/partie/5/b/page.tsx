'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PageAblutions() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[4];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-16 md:pt-28 pb-48 px-4 md:px-6">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 relative">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block"
        >
          Chapitre V — Section B
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8"
        >
          LES ABLUTIONS <br/>
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">الوضوء</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-8 py-4 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-widest text-[10px] backdrop-blur-md shadow-2xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter la leçon'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">

        {/* 1. OBLIGATION ET MISE EN GARDE */}
        <section className="relative glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 overflow-hidden">
          <span className="absolute -top-10 -right-10 text-[200px] font-black opacity-[0.03] select-none">B</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="text-right" dir="rtl">
              <p className="text-2xl md:text-4xl font-amiri text-gold-light leading-relaxed">
               يجب على كل شخص بالغ أن يتوضأ قبل الصلاة أو لمس المصحف الشريف. ومن أنكر ذلك فهو كافر. ومن خالف هذا الحكم عن قصد ومن غير عذرٍ فهو جدير بأشدّ الاحتقار، فإن لم يتب قبل موته فسيُطرح حتمًا في جهنم.
              </p>
            </div>
            <div className="border-l-2 border-gold/10 pl-8">
              <p className="text-lg md:text-xl text-white/70 font-serif italic leading-relaxed">
                "Toute personne majeure doit faire ses ablutions avant de prier ou de toucher le Saint Coran. Quiconque le conteste est un mécréant.<br />  Celui qui transgresse cette prescription de façon délibérée et sans excuse est digne du plus grand mépris. S’il ne s’en repent pas avant sa mort, il sera précipité irrémédiablement en enfer."
              </p>
            </div>
          </div>
        </section>

        {/* 2. CAUSES D'ANNULATION (15 CAUSES) */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">APRES ABLUTIONS : CAUSES POUVANT RENDRE CADUQUES LES ABLUTIONS</h2>
            <div className="h-[1px] flex-1 bg-gold/10" />
            <span className="font-amiri text-2xl text-gold/40">بعد الوضوء: الأسباب التي تُبطل الوضوء</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                id: 1,
                fr: "Le pet.",
                ar: "خروج الريح"
              },
              {
                id: 2,
                fr: "Le fait d’aller à la selle.",
                ar: "الخروج إلى الغائط"
              },
              {
                id: 3,
                fr: "Le fait d’uriner.",
                ar: "التبول"
              },
              {
                id: 4,
                fr: "La sécrétion de liquide prostatique (Madji) consécutive à l’érection due à l’observation, à l’imagination ou à l’attouchement. Dans ce cas, il faut laver entièrement le sexe après avoir formulé l’intention. L’érection sans sécrétion n’annule pas l’ablution.",
                ar: "خروج المذي الناتج عن الانتصاب بسبب النظر أو التخيل أو اللمس، وفي هذه الحالة يجب غسل العضو الذكري كاملًا بعد استحضار النية. أما الانتصاب دون إفراز فلا ينقض الوضوء."
              },
              {
                id: 5,
                fr: "La sortie du « wadiyu », liquide gluant émis par l’homme sans plaisir.",
                ar: "خروج الودي، وهو سائل لزج يخرج من الرجل دون لذة."
              },
              {
                id: 6,
                fr: "La sécrétion du sperme due à une maladie, à la fatigue ou à l’incontinence. Si cette sortie s’accompagne d’une jouissance sexuelle, la purification par le lavage est obligatoire.",
                ar: "خروج المني بسبب مرض أو تعب أو سلس، فإن كان مصحوبًا بلذة جنسية وجب الغسل."
              },
              {
                id: 7,
                fr: "La sécrétion du liquide précédant l’accouchement. En cas d’accouchement non accompagné de sang, le lavage est obligatoire. S’il est accompagné de sang, le lavage se fait après l’arrêt du saignement.",
                ar: "الإفرازات التي تسبق الولادة، فإن كانت الولادة بلا دم وجب الغسل، وإن كانت مصحوبة بالدم فيكون الغسل بعد انقطاعه."
              },
              {
                id: 8,
                fr: "Crise d’épilepsie ou de folie.",
                ar: "نوبة صرع أو جنون"
              },
              {
                id: 9,
                fr: "L’évanouissement.",
                ar: "الإغماء"
              },
              {
                id: 10,
                fr: "L’ivresse.",
                ar: "السكر"
              },
              {
                id: 11,
                fr: "Le sommeil profond, même s’il est court, durant lequel une personne perd la sensation.",
                ar: "النوم العميق ولو كان قصيرًا، وهو النوم الذي يفقد فيه الإنسان الإحساس."
              },
              {
                id: 12,
                fr: "Le fait pour un homme majeur de toucher le corps, les cheveux, les ongles ou les habits d’une femme avec l’intention d’en jouir, qu’il y ait plaisir ou non. Si le plaisir n’est ni recherché ni obtenu, l’ablution n’est pas annulée. Cela s’applique aussi à la femme. Le contact entre mineurs est sans effet.",
                ar: "لمس الرجل لجسد المرأة أو شعرها أو أظافرها أو ثيابها بشهوة، سواء وُجدت اللذة أم لا. أما إذا لم تُطلب اللذة ولم تحصل فلا ينتقض الوضوء. وينطبق الحكم نفسه على المرأة، ولمس الصغار لا أثر له."
              },
              {
                id: 13,
                fr: "Le baiser bouche à bouche entre homme et femme annule l’ablution, qu’il y ait jouissance ou non. S’il a lieu entre majeur et mineur, l’annulation concerne le majeur seulement. Entre deux enfants, il n’y a pas d’effet. Embrasser par compassion ou par respect n’annule pas l’ablution.",
                ar: "التقبيل من الفم بين الرجل والمرأة ينقض الوضوء سواء وُجدت اللذة أم لا. وإذا كان بين بالغ وصغير انتقض وضوء البالغ فقط، أما بين طفلين فلا أثر له. والتقبيل بدافع الرحمة أو الاحترام لا ينقض الوضوء."
              },
              {
                id: 14,
                fr: "Le fait pour un homme de toucher sa verge avec la paume, les doigts ou le contour de la main annule l’ablution. Le toucher par-dessus les habits ou le toucher d’autres parties intimes ne l’annule pas. Le toucher du sexe par la femme n’annule pas l’ablution.",
                ar: "مس الرجل لذكره بباطن الكف أو بالأصابع ينقض الوضوء، أما لمسه من فوق الثياب أو لمس غيره من العورات فلا ينقض. ولمس المرأة لفرجها لا ينقض الوضوء."
              },
              {
                id: 15,
                fr: "En cas de doute avant ou pendant la prière, l’ablution doit être reprise. Si le doute disparaît, il n’y a pas lieu de reprendre l’ablution sauf en cas de certitude d’annulation.",
                ar: "في حال الشك قبل الصلاة أو أثناءها يجب إعادة الوضوء، وإذا زال الشك فلا إعادة إلا مع اليقين بوجود ناقض."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] p-6 rounded-3xl border border-white/5 hover:border-gold/20 transition-all flex flex-col justify-between">
                <div>
                  <p className="text-gold font-black text-sm mb-2 opacity-30"># {item.id}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{item.fr}</p>
                </div>
                <p className="text-right font-amiri text-lg text-gold-light/60" dir="rtl">{item.ar}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. LE SIWOU (LAVAGE INTIME) */}
        <section className="glass-card p-8 md:p-12 rounded-[2.5rem] border-l-4 border-gold bg-gradient-to-r from-gold/5 to-transparent">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-gold font-black text-xs uppercase tracking-widest">« LE SIWOU » (LAVAGE DES PARTIES INTIMES)</h2>
            <span className="font-amiri text-3xl text-gold">الاستنجاء</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-white/70 leading-relaxed font-serif">
              <p>Consiste à laver proprement les parties intimes avec de l’eau non souillée, non altérée dans sa couleur, sa saveur et dans son odeur avant de quitter les lieux de toilettes.</p>
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5 italic">
                <p className="text-gold mb-2 uppercase text-[10px] font-bold">Il est donc conseillé d’y aller avec de l’eau. S’il s’agit de toilette, il est méritoire d’introduire le pied gauche et dire avant d’entrer :  </p>
                "Bismilahi allahouma iniya a hons oubika minal khouboussi wal khabâ issi."
              </div>
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5 italic">
                <p className="text-gold mb-2 uppercase text-[10px] font-bold">Une fois à l’intérieur, on ne prononce plus la formule. Il est aussi méritoire de sortir par le pied droit et dire :</p>
                "Bismilahi alhamdoulilahi lazi azhaba anil âzâ wa hâfâni."
              </div>
            </div>
            <div className="space-y-6 text-white/70 leading-relaxed font-serif">             
              <p className="text-sm text-white/40 italic">Si c’est en plein air, la formule d’entrée doit se dire avant de découvrir et la formule de sortie après le besoin.</p>
              <p className="text-sm text-white/40 italic">Si la précaution d’emporter de l’eau n’a pas été prise, il y a risque de souillure des vêtements, ce qui est de nature à annule r la prière ultérieure ; c’est la raison pour laquelle, le « siwou » revêt une importance capitale.</p>
              <p className="text-sm text-white/40 italic">Il faudra avant de s’y employer, s’assurer qu’il ne reste plus aucune goutte d’urine dans ce canal qu’on appelle urètre.</p>
              <p className="text-sm text-white/40 italic">La durée de l’évacuation varie suivant les hommes.</p>
              <p className="text-sm text-white/40 italic">Chez certains, il est nécessaire de faire quelques pas avant de procéder au lavage de la verge, car la sécrétion d’urine survenue après le lavage de la verge due à un manque de patience est de ces péchés susceptibles de provoquer des châtiments dans la tombe. C’est seulement après le « siwou » que l’on doit procéder à l’ablution.</p>
            </div>
          </div>
        </section>

        {/* 4. PRATIQUE PAS À PAS */}
        <section className="space-y-8">
          <h2 className="text-center text-gold font-black text-xs uppercase tracking-[0.4em]">Pratique de l'ablution</h2>
          <div className="glass-card p-6 md:p-10 rounded-[3rem] border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "1. Chercher de l’eau non souillée ; s’asseoir dans un lieu propre de toute souillure ; se tourner vers la Kaaba (l’Est) ; dire Bismillahi et se rincer la bouche (emploi de cure dents).",
                "2. Se laver les mains (3 fois) jusqu’aux poignets en commençant par la main droite.",
                "3. Se rincer la bouche (3 fois).",
                "4. Aspirer l’eau par les narines et l’en rejeter en soufflant par le nez (3 fois) : aspirer avec la main droite, rejeter avec la main gauche.",
                "5. Se laver le visage (3 fois) en formulant intérieurement l’intention de faire l’ablution selon les obligations divines.",
                "6. Se laver l’avant-bras droit, puis l’avant-bras gauche (chacun 3 fois).",
                "7. Faire passer l’eau sur la tête du front à la nuque, puis de la nuque au front.",
                "8. Se laver les oreilles.",
                "9. Enfin se laver le pied droit (3 fois), puis le pied gauche de la même façon."
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 border-b border-white/5 group hover:bg-white/5 transition-all">
                  <span className="text-gold font-black text-xl opacity-40">{idx + 1}</span>
                  <p className="text-white/60 text-sm">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 p-8 bg-gold/5 rounded-3xl text-center border border-gold/10">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Après cela, lever la tête vers le ciel et dire ceci : "Achadouane lahilaha illalah wahdahô la charika lahô wa ach hadou annas seydina Mouhamadane sala lahô tahala aleyhi wassalama Abdouho wa rassoulouhou. ala houmadj halna minattawa bîna wadj halna minal moutatakhirina wadj halna mine ib adika sahilina wa add khilnâfildjanati wa bahidna mina nâri allahouma sali al la seydina Mouhamadine wa alla ali seydina Mouhamadine wa salim."</p>
              <p className="font-amiri text-2xl text-gold-light leading-loose mb-4">
               أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ،
                وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ عَبْدُهُ وَرَسُولُهُ.
                اللَّهُمَّ اجْعَلْنَا مِنَ التَّوَّابِينَ،
                وَاجْعَلْنَا مِنَ الْمُتَطَهِّرِينَ،
                وَاجْعَلْنَا مِنْ عِبَادِكَ الصَّالِحِينَ،
                وَأَدْخِلْنَا الْجَنَّةَ،
                وَبَاعِدْنَا مِنَ النَّارِ.
                اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ،
                وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ،
                وَسَلِّمْ
              </p>
            </div>
          </div>
        </section>

        {/* 5. FARATA ET SOUNA (8 & 8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-950/20 p-8 rounded-[2.5rem] border border-emerald-500/20 relative overflow-hidden">
             <h3 className="text-emerald-500 font-black text-xs uppercase mb-8 border-b border-emerald-500/10 pb-4">Les pratiques obligatoires de l’ablution ( farata )</h3>
             <ul className="space-y-4 text-white/50 text-sm">
                <li>Elles sont au nombre de huit (8) et s’énumèrent ainsi qu’il suit :</li>
                <li>1. Formuler intérieurement l’intention de s’acquitter de cette obligation au moment de se laver le visage</li>
                <li>2. Laver entièrement le visage</li>
                <li>3. Se laver les avant-bras, jusqu’aux coudes</li>
                <li>4. Laver les doigts séparément</li>
                <li>5. Faire passer l’eau sur l’ensemble des cheveux</li>
                <li>• Si les cheveux sont tressés sans aucune matière artificielle, il n’est pas nécessaire de les détresser</li>
                <li>• Si par contre, une quelconque matière artificielle est rajoutée aux cheveux, il faut défaire les tresses pour que les cheveux puissent être entièrement mouillés</li>
                <li>D’ailleurs, l’utilisation de cheveux artificiels est une mauvaise chose.</li>
                <li>Cela n’est valable que pour la petite ablution. Si l’épaisseur des tresses est de nature à empêcher l’eau d’atteindre le cuir chevelu, il faut les défaire dans le cas de la purification par lavage même si les tr esses ne sont faites qu’avec des cheveux naturels.</li>
                <li>6. Laver entièrement les pieds jusqu’aux chevilles en rinçant chaque orteil</li>
                <li>7. Frotter chaque partie au moment de son lavage en utilisant une quantité d’eau strictement nécessaire</li>
                <li>8. observer rigoureusement l’ordre tel qu’il est établi ; ne pas trop attendre entre le lavage des différentes parties sous peine d’annulation de l’ablution (ne pas attendre qu’un membre se sèche avant de passer à l’autre)</li>
                <li>Si, après l’ablution, on se souvient d’avoir oublié une partie, on doit procéder à son lavage si les membres lavés sont déjà secs. Si on s’en souvient tout juste (avant l’assèchement des parties lavées), on reprend l’opération à partir de la partie omise jusqu’à la fin</li>
             </ul>
          </div>
          <div className="bg-gold/5 p-8 rounded-[2.5rem] border border-gold/20">
             <h3 className="text-gold font-black text-xs uppercase mb-8 border-b border-gold/10 pb-4">Les pratiques traditionnelles de l’ablution ( Souna )</h3>
             <ul className="space-y-4 text-white/50 text-sm">
                <li>Elles sont au nombre de huit (8) et s’énumèrent ainsi qu’il suit :</li>
                <li>1. Commencer par se laver les mains jusqu’aux poignets</li>
                <li>2. Se rincer la bouche</li>
                <li>3. Faire pénétrer l’eau dans les narines en aspirant</li>
                <li>4. L’en faire sortir en soufflant par les narines</li>
                <li>5. Puis passer les mains à l’intérieur et à l’extérieur des oreilles</li>
                <li>6. Se mouiller à nouveau les mains avant de les faire passer sur les oreilles</li>
                <li>7. Ramener les mains au front après les avoir portées à la nuque</li>
                <li>8. Ne pas inverser l’ordre établi concernant les pratiques obligatoires</li>
             </ul>
          </div>
        </div>

        {/* 6. MÉRITES ET CURE-DENT */}
        <section className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5">
          <h2 className="text-gold font-black text-xs uppercase tracking-widest mb-10 text-center">Les mérites de l'ablution & Le Cure-dent (Soocu)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/50 text-sm leading-relaxed">
            <div className="space-y-4">
              <p>L’ablution est recommandée à qui veut :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Réciter le Coran, les hadiths ou les connaissances religieuses</li>
                <li>Invoquer les noms d'Allah.</li>
                <li>Rendre visite à un saint homme.</li>
                <li>Aller dans un marché</li>
                <li>S’endormir</li>
              </ul>
              <p>Il est méritoire de renouveler fréquemment ses ablutions. A l’occasion, il est recommandé de formuler l’intention de s’acquitter d’une prière obligatoire au moment du renouvellement. Si cette précaution n’est pas prise, l’ablution ne pourra pas servir à une prière obligatoire ou une prière surérogatoire et fait le tour de la Kaaba. Si l’ablution n’a servi qu’à la lecture du Coran, on peut se passer de la renouveler.</p>
            </div>
            <div className="space-y-4">
              <p>L’emploi du cure-dent (soocu) est méritoire, si possible avant la prière.</p>
              <p>Il est conseillé de se curer les dents, cela permet de :</p>
              <ul className="list-disc pl-5 space-y-2 text-emerald-500/70">
                <li>S’attirer les grâces de Dieu</li>
                <li>Provoquer l’irritation et la colère de satan</li>
                <li>Se rappeler le nom de Dieu dans l’article de la mort</li>
                <li>Conserver sa foi jusqu’au dernier soupir</li>
                <li>Rentrer dans les bonnes grâces des deux (2) anges gardiens</li>
                <li>Atténuer les affres de l’agonie</li>
                <li>Multiplier nos chances d’avoir de la fortune</li>
                <li>Aiguiser l’intelligence</li>
                <li>Améliorer la vue</li>
                <li>Faciliter l’expression</li>
                <li>Faciliter la digestion</li>
                <li>Rendre les dents plus solide s et la bouche plus propre</li>
                <li>Embellir la chevelure et retarder la vieillesse</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[90%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/5/a')} 
          className="flex-1 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/5/c')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-xl hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}