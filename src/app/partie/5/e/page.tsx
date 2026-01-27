'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function MenstruesPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[4];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sectionsMenstrues = [
    {
      titreFr: "DÉFINITION ET CATÉGORIES",
      titreAr: "تعريف الحيض وأقسامه",
      content: [
        {
          fr: "C’est l’écoulement de sang propre à la femme de 9 ans au moins et de 70 ans au plus ; cet écoulement est périodique et non provoqué. On distingue là, trois (3) catégories de femmes : a. celle à qui cela vient d’arriver (la débutante), b. celle qui en est habituée, c. la femme enceinte.",
          ar: "هو الدم الخارج من قبل امرأة يمكن حملها، يتراوح عمرها عادة بين 9 و70 سنة، وهو دوري يخرج طبيعياً. وتنقسم النساء فيه إلى ثلاث فئات: أ- المبتدئة، ب- المعتادة، ج- الحامل."
        }
      ]
    },
    {
      titreFr: "1° - LA FEMME DÉBUTANTE",
      titreAr: "١ - المرأة المبتدئة",
      content: [
        {
          fr: "Pour la première, la durée de l’écoulement n’excède pas quinze jours ; si elle excède quinze jours, il ne s’agit plus de menstrues mais d’une maladie (istihada), alors la femme pourra se purifier, faire ses prières, jeûner éventuellement et reprendre ses rapports avec son mari.",
          ar: "المبتدئة تستمر حيضتها ما لم تتجاوز خمسة عشر يوماً؛ فإذا تجاوزت ذلك فهي مستحاضة (مريضة)، فتغتسل وتصلي وتصوم ويحل لزوجها جماعها."
        },
        {
          fr: "Si après une interruption les menstrues reprennent, la femme doit faire la somme des jours d’écoulement. Si cette somme excède quinze jours cela signifie qu’il ne s’agit plus de menstrues mais d’une maladie. Pendant les jours d’interruption, elle doit se purifier, prier et jeûner. Si la somme égale quinze, il s’agit bien de menstrues car 15 jours c’est la durée minimale de l’état de pureté d’une femme. Tout état de pureté de moins de 15 jours peut faire penser à une maladie mais si cela dure 15 jours de pureté, tout nouvel écoulement provient des menstrues.",
          ar: "إذا انقطع الدم ثم عاد، فإنها تلفق (تجمع) أيام الدم. فإذا زاد المجموع عن خمسة عشر يوماً فهي استحاضة. وفي أيام الانقطاع تعتبر طاهرة تغتسل وتصلي وتصوم. وإذا بلغ المجموع 15 يوماً فهي حيض، لأن أقل الطهر بين الحيضتين خمسة عشر يوماً. وأي طهر أقل من ذلك يعتبر استمراراً للحالة السابقة، أما إذا بلغ 15 يوماً فكل دم بعده هو حيض جديد."
        }
      ]
    },
    {
      titreFr: "2° - LA FEMME HABITUÉE",
      titreAr: "٢ - المرأة المعتادة",
      content: [
        {
          fr: "Si l’écoulement se manifeste plus longtemps que d’habitude, elle attend trois (3) jours au-delà desquels elle devra se laver, prier et jeûner. Cette attente n’est valable que si la durée totale n’excède pas 15 jours. Si la période habituelle est de 13 jours, elle attend 2 jours. Si elle est de 14 jours, elle attend 1 jour. Si elle est de 15 jours, elle n’attend pas, car il s’agit alors de maladie.",
          ar: "إذا زاد الدم عن العادة، فإنها تستظهر (تنتظر) ثلاثة أيام، ما لم يتجاوز المجموع 15 يوماً. فإن كانت عادتها 13 يوماً زادت يومين، وإن كانت 14 زادت يوماً، وإن كانت 15 فلا استظهار عليها وتعتبر مستحاضة."
        }
      ]
    },
    {
      titreFr: "3° - LA FEMME ENCEINTE",
      titreAr: "٣ - المرأة الحامل",
      content: [
        {
          fr: "Rare avant les deux premiers mois. Entre le 2ème et le 6ème mois, l’écoulement ne peut excéder vingt (20) jours. Au-delà des 20 jours, elle doit se laver et reprendre ses obligations. S’il y a interruption et reprise sans que l’interruption ne dure 15 jours, elle fait la somme jusqu’à concurrence des 20 jours.",
          ar: "الحامل قلما تحيض قبل شهرين. ومن الشهر الثاني إلى السادس، أقصى أمد لحيضها 20 يوماً. وما زاد على ذلك فهو دم علة. وإذا تقطع الدم تلفق الأيام حتى تكتمل عشرون يوماً."
        },
        {
          fr: "Entre le sixième mois et le terme, l’écoulement ne peut excéder trente (30) jours. Si la durée excède 30 jours, il s’agit de maladie. En cas d'interruption de moins de 15 jours, elle additionne les jours d'écoulement jusqu'à concurrence de 30 jours. Pendant l'interruption, elle pratique ses actes d'adoration normalement.",
          ar: "من الشهر السادس إلى تمام الحمل، أقصى أمد لحيضها 30 يوماً. وما زاد فهو استحاضة. وإذا تقطع الدم تجمع الأيام حتى تكتمل ثلاثون يوماً. وفي أيام الانقطاع تغتسل وتصلي وتصوم."
        }
      ]
    },
    {
      titreFr: "SIGNES DE L'ARRÊT (PURETÉ)",
      titreAr: "علامات الطهر من الحيض",
      content: [
        {
          fr: "Il y a deux façons de reconnaître l’arrêt : 1. La siccité (lorsqu'un coton inséré ressort sec sans trace de sang neuf). 2. L’écoulement d’un liquide blanc (la glaire) semblable au sperme.",
          ar: "يعرف الطهر بعلامتين: ١- الجفوف (أن تخرج القطنة جافة من غير دم جديد)؛ ٢- القصة البيضاء (سائل أبيض يشبه المني)."
        },
        {
          fr: "La femme dont l’apparition de pertes blanches signale l’arrêt peut se purifier immédiatement. Celles dont la siccité précède les pertes blanches peuvent se purifier même si l'ordre s'inverse. Cependant, si la siccité est antérieure, elle doit attendre la fin du temps idéal (Mokhtar) d'une prière pour se purifier. Si les pertes blanches surviennent après cette attente, elle ne renouvelle pas son bain. Si elle n'a pas attendu le Mokhtar, elle doit recommencer la purification.",
          ar: "المرأة التي ترى القصة البيضاء تطهر فوراً. ومن كانت عادتها الجفوف أولاً ثم القصة، فإنها تنتظر بالصلاة إلى آخر وقتها المختار لتغتسل. فإذا رأت القصة بعد ذلك فلا تعيد الغسل، أما إذا لم تنتظر المختار فعليها إعادة الغسل."
        }
      ]
    },
    {
      titreFr: "INTERDICTIONS ET ACTES PROHIBÉS",
      titreAr: "ما يحرم على الحائض",
      content: [
        {
          fr: "La femme en menstrues ne doit pas : Faire ses prières (pas de compensation), Jeûner (compensation obligatoire), Faire le tour de la Kaaba (Tawaf), Observer la retraite d'adoration (Itikaf), Avoir des rapports sexuels, Être répudiée (divorce), Entrer dans une mosquée. On ne doit pas flirter avec elle entre le nombril et les genoux.",
          ar: "يمنع على الحائض: الصلاة (ولا تقضيها)، الصوم (ويجب قضاؤه)، الطواف، الاعتكاف، الجماع، الطلاق، دخول المسجد. ويحرم الاستمتاع بما بين السرة والركبة."
        },
        {
          fr: "Elle ne doit toucher au Coran que pour l’enseigner ou l’étudier, mais elle peut le réciter de mémoire. Toutes les pratiques interdites le demeurent jusqu’à ce que la purification (Ghusl) soit faite après l'arrêt.",
          ar: "لا تمس المصحف إلا لتعلم أو تعليم، ولها القراءة من غير مس. وكل الممنوعات تبقى سارية حتى تغتسل بعد انقطاع الدم."
        }
      ]
    },
    {
      titreFr: "RÈGLES DES HORAIRES ET JEÛNE",
      titreAr: "أحكام الصلاة والصيام",
      content: [
        {
          fr: "Elle doit vérifier l'arrêt à chaque moment. Si l'arrêt intervient avant l'aurore et qu'elle peut faire une Rakka avant le lever du soleil, la prière du matin est obligatoire. Si elle survient le soir avec assez de temps pour 5 Rakkas avant le coucher, elle doit faire Zohr et Asr. Si elle peut faire 4 Rakkas, elle fait Zohr.",
          ar: "يجب عليها تفقد الطهر. إذا طهرت قبل الفجر وكان الوقت يسع الغسل وركعة قبل الشروق وجب الصبح. وإذا طهرت قبل الغروب بوقت يسع ٥ ركعات صلت الظهر والعصر، وإن وسع ٤ ركعات صلت الظهر فقط."
        },
        {
          fr: "En période de jeûne, elle doit vérifier l'arrêt avant l'aurore (Fajr). Si l'arrêt est avant le Fajr, elle jeûne. Si c'est après, elle ne jeûne pas. En cas de doute sur le moment précis de l'arrêt, elle doit jeûner ce jour par précaution et le compenser plus tard.",
          ar: "في الصيام يجب تفقد الطهر قبل الفجر. فإن طهرت قبله صامت، وإن طهرت بعده أفطرت. وإن شكّت هل طهرت قبل الفجر أو بعده، صامت ذلك اليوم احتياطاً ثم تقضيه لاحقاً."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-16 md:pt-28 pb-48 px-4 md:px-6">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block"
        >
          Chapitre V — Section E
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8"
        >
          LES MENSTRUES <br/>
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">الحيض</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-8 py-4 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-bold uppercase tracking-widest text-[10px] backdrop-blur-md"
        >
          <span className="material-symbols-rounded text-3xl">
            {isThisChapterPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {isThisChapterPlaying ? 'Mettre en pause' : 'Écouter la leçon complète'}
        </motion.button>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
        {sectionsMenstrues.map((section, sIdx) => (
          <div key={sIdx} className="space-y-10">
            <div className="flex items-center gap-8 px-4">
              <h2 className="text-xl font-black text-gold uppercase tracking-tighter whitespace-nowrap">{section.titreFr}</h2>
              <div className="h-[1px] flex-1 bg-gold/10" />
              <h2 className="text-2xl font-amiri text-gold-light whitespace-nowrap">{section.titreAr}</h2>
            </div>

            <div className="grid gap-6">
              {section.content.map((item, cIdx) => (
                <motion.div 
                  key={cIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-gold/20 transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                      <p className="text-2xl md:text-4xl font-amiri text-white leading-[1.8]" dir="rtl">
                        {item.ar}
                      </p>
                    </div>
                    <div className="hidden md:block w-[1px] h-20 bg-gold/10 order-2" />
                    <div className="w-full md:w-1/2 text-left order-3 md:order-1 border-l-2 border-gold/10 pl-8">
                      <p className="text-lg text-white/60 font-serif leading-relaxed italic">
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

      {/* NAV */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[90%] md:max-w-md">
        <button 
          onClick={() => router.push('/partie/5/d')} 
          className="flex-1 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/5/f')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-xl hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}