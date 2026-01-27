'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function SouilluresPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  // Utilisation de l'ID du chapitre 5 (Pratiques Religieuses) pour l'audio
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[4];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sectionsSouillures = [
    {
      titreFr: "OBLIGATION DE NETTOYAGE",
      titreAr: "وجوب التطهير",
      content: [
        {
          fr: "Obligation est faite à tout croyant d’enlever les souillures laissées sur son corps, sur ses habits, sur les lieux de prière dès qu’il s’en aperçoit. S’il a des doutes, il doit laver la partie présumée souillée. S’il constate des tâches sur ses habits ou sur son corps et dont il ignore la nature, il n’est pas tenu de les enlever.",
          ar: "يجب على كل مؤمن إزالة النجاسات عن جسده وثيابه ومكان صلاته فور علمه بها. وإذا شك في وجودها، وجب عليه غسل الموضع المشكوك فيه. أما إذا وجد بقعًا على ثيابه أو جسده ولا يعرف ماهيتها، فلا يلزمه إزالتها."
        },
        {
          fr: "Pour enlever les souillures liquides constatées sur le sol, on doit y verser une quantité d’eau importante. S’il s’agit de souillures non liquides, il fait les faire disparaître.",
          ar: "لإزالة النجاسات السائلة عن الأرض، يجب صب كمية كبيرة من الماء عليها. أما إذا كانت النجاسات غير سائلة، فيجب إزالتها حتى تختفي."
        }
      ]
    },
    {
      titreFr: "LE CAS DU CHIEN",
      titreAr: "حكم ولوغ الكلب",
      content: [
        {
          fr: "Lorsqu’un chien boit dans un récipient contenant une quantité d’eau égale ou inférieure à deux litres, cette eau devient impropre à la purification et il est méritoire de la verser, on pourrait tout au plus l’utiliser mais uniquement à des fins profanes. Cependant, il vaut mieux la verser. Il est aussi méritoire de laver le récipient sept (7) fois sans employer du sable avant un nouvel usage.",
          ar: "إذا شرب الكلب من إناء يحتوي على كمية ماء تساوي لترين أو أقل، أصبح هذا الماء غير صالح للطهارة، ويُستحب صبه، ويمكن استخدامه فقط لأغراض دنيوية غير دينية، ومع ذلك فالأفضل صبه. كما يُندب غسل الإناء سبع مرات دون استخدام التراب قبل استخدامه مرة أخرى."
        },
        {
          fr: "Si le chien trempe la langue sans la remuer ou s’il salive dans le récipient ou s’il se contente seulement de le lécher, dans ce cas, l’eau comme le récipient est utilisable. Il en est de même s’il s’agit de récipient contenant un aliment liquide comme le lait caillé, il en est aussi de même si la quantité d’eau excède deux litres.",
          ar: "إذا غمس الكلب لسانه دون تحريكه، أو سال لعابه في الإناء، أو اكتفى بلعقه فقط، فإن الماء والإناء يظلان صالحين للاستعمال. وينطبق الحكم نفسه على الأواني التي تحتوي على أطعمة سائلة مثل اللبن الرائب، وكذلك إذا زادت كمية الماء عن لترين."
        }
      ]
    },
    {
      titreFr: "EAUX COURANTES ET SOURCES",
      titreAr: "المياه الجارية والمصادر",
      content: [
        {
          fr: "S’il s’agit d’une eau courante comme celle des marigots, des lacs, des citernes ou des bassins, si un animal tombe dans cette eau et y meurt sans l’altérer, il est recommandé d’enlever la partie de l’eau susceptible de contenir quelque chose qui provient de l’animal. Tout cela dépend de la taille de l’animal et de la quantité de l’eau.",
          ar: "في حالة المياه الجارية مثل مياه البحيرات أو الخزانات أو الأحواض، إذا سقط حيوان فيها ومات دون أن يتغير طعمها أو لونها أو ريحها، فيُستحب إزالة جزء من الماء الذي يُحتمل تأثره بالحيوان. ويعتمد ذلك على حجم الحيوان وكمية الماء."
        },
        {
          fr: "S’il s’agit d’une eau courante ou d’une eau provenant d’une source, si elle n’est pas altérée, on ne doit pas non plus procéder à son dragage. Mais si l’eau est altérée on est obligé de procéder à ces opérations (prélèvement de la partie souillée, dragage) sauf si la chute de l’animal dans l’eau n’a pas entraîné sa mort. Il en est de même si la mort de l’animal est antérieure à la chute et que l’eau n’est pas altérée.",
          ar: "إذا كان الماء جاريًا أو نابعًا من مصدر ولم يتغير، فلا داعي لنزحه. أما إذا تغير الماء، وجب القيام بعمليات التطهير (نزح الجزء المتأثر) إلا إذا لم يمت الحيوان عند سقوطه. والحكم نفسه ينطبق إذا مات الحيوان قبل سقوطه ولم يتغير الماء."
        }
      ]
    },
    {
      titreFr: "ALIMENTS ET BLESSURES",
      titreAr: "الأطعمة والجروح",
      content: [
        {
          fr: "Tout aliment susceptible d’altération, quelle que soit l’importance de la quantité (lait caillé, bouillie, huile, etc.…) et quelque négligeable que soit la souillure doit être jeté. Si l’aliment n’est pas altéré et que la souillure n’y a pas duré au point de le pénétrer, on peut se contenter d’enlever la souillure et tout ce qui l’entoure. Si la durée est suffisamment longue au point de de voir altérer l’aliment, il faut alors le jeter.",
          ar: "كل طعام قابل للتغير، مهما كانت كميته (مثل اللبن أو الزيت)، يجب التخلص منه إذا أصابته نجاسة ولو كانت يسيرة. أما إذا لم يتغير الطعام ولم تطل مدة النجاسة فيه بحيث لم تتغلغل، فيكفي إزالة النجاسة وما حولها. فإن طالت المدة بحيث يُفترض فساد الطعام، وجب رميه."
        },
        {
          fr: "Celui qui a une égratignure, une blessure, un abcès, une plaie, doit au moment des ablutions, faire passer la main dessus s’il craint d’aggraver la plaie ou de se faire mal e laver les autres parties. S’il ne peut pas supporter le massage, il effleure la rugosité, si cela n’est pas possible, il ne peut l’effleurer par-dessus une bande d’étoffe ou encore doubler la bande autant de fois qu’il le jugera nécessaire, s’il n’en est pas du tout capable, alors, il peut sauter la partie douloureuse et se contenter de se laver ou de faire ses ablutions.",
          ar: "من كان به جرح أو دمل أو قرحة، وجب عليه عند الوضوء مسح اليد فوقه إذا خشي زيادة الجرح أو الألم، مع غسل بقية الأعضاء. فإن لم يتحمل المسح المباشر، مسح عليه بخفة، فإن تعذر ذلك مسح فوق ضمادة، وله تكرار لف الضمادة حسب الحاجة، فإن لم يستطع المسح مطلقاً، تجاوز الجزء المؤلم واكتفى بغسل بقية الأعضاء."
        }
      ]
    },
    {
      titreFr: "CAS DE CONJONCTIVITE",
      titreAr: "حالة الرمد",
      content: [
        {
          fr: "En cas de conjonctivite grave, on doit faire passer la main sur les yeux ou sur le front, si cela n’est pas possible, on peut passer la main sur une bande d’étoffe posée sur les yeux, doubler la bande au besoin, si malgré tout on ne supporte pas le massage, on peut alors contenter de laver les autres parties du corps. Si la bande se déplaçait ou arrivait à tomber, qu’on lui remette le plus rapidement possible et que on reprenne l’opération, faute de quoi, l’ablution devient nulle.",
          ar: "في حالة الرمد الشديد، يجب مسح اليد على العينين أو الجبهة، فإن لم يمكن ذلك، جاز المسح فوق ضمادة توضع على العينين، مع مضاعفتها عند الضرورة. فإذا تعذر المسح رغم ذلك، اكتُفي بغسل باقي الجسد. وإذا تحركت الضمادة أو سقطت، وجب إعادتها فوراً وإعادة المسح، وإلا بطل الوضوء."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-16 md:pt-28 pb-48 px-4 md:px-6">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 relative">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block"
        >
          Chapitre V — Section D
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8"
        >
          LES SOUILLURES <br/>
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">النجاسات</span>
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
        
        {sectionsSouillures.map((section, sIdx) => (
          <div key={sIdx} className="space-y-10">
            {/* Titre de Section Bilingue */}
            <div className="flex items-center gap-8 px-4">
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
                    {/* Arabe (Droite) */}
                    <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                      <p className="text-2xl md:text-4xl font-amiri text-white leading-[1.8]" dir="rtl">
                        {item.ar}
                      </p>
                    </div>
                    {/* Séparateur */}
                    <div className="hidden md:block w-[1px] h-20 bg-gold/10 order-2" />
                    {/* Français (Gauche) */}
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

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[90%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/5/c')} 
          className="flex-1 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/5/e')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-xl hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}