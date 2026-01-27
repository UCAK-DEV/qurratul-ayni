'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PurificationLavageComplet() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "5") || CHAPTERS[5];

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const sections1 = [
    {
      content: [
        {
          fr: "Parmi les différentes sortes de purification, la plus importante est celle du corps (janâba) lorsqu’elle s’impose. Toute personne majeure doit se purifier chaque fois que de besoin. Celui qui nie cette obligation est un mécréant ; celui qui s’y refuse consciemment sans motif valable est un impie et n’a aucune crédibilité. S’il ne s’en repent pas, il sera précipité dans les feux de l’enfer.",
          ar: "من بين أنواع الطهارة المختلفة، تُعد طهارة الجسد من الجنابة هي الأهم عندما تجب. ويجب على كل شخص بالغ أن يتطهر كلما دعت الحاجة. فمن أنكر ذلك فهو كافر، ومن امتنع عنها عمدًا دون عذر شرعي فهو فاسق ولا تُقبل شهادته، وإذا لم يتب فمآله إلى نار جهنم."
        }

      ]
    },
    {
      titreFr: "RAISONS D'UNE PURIFICATION",
      titreAr: "موجبات الغسل",
      content: [    
        {
          fr: "1° L’éjaculation : consécutive à un grand plaisir ressenti à l’état de veille ou de sommeil. Celui qui constate du sperme sur ses habits après le réveil, sans s’être aperçu de son écoulement, doit se purifier et reprendre toutes les prières accomplies avant cette constatation. Celui qui découvre après son réveil des taches suspectes sur son corps ou sur ses habits doit se purifier et reprendre toutes les prières antérieures à cette constatation.",
          ar: "١. خروج المني: الناتج عن لذة شديدة في حال اليقظة أو النوم. فمن وجد المني على ثيابه بعد الاستيقاظ دون أن يشعر بخروجه، وجب عليه الاغتسال وإعادة جميع الصلوات التي صلاها قبل ذلك. ومن وجد بقعًا مشكوكًا فيها على جسده أو ثيابه بعد الاستيقاظ، وجب عليه الاغتسال وإعادة الصلوات السابقة."
        },
        {
          fr: "2° Rapports sexuels : après les rapports sexuels, les deux personnes majeures doivent se purifier même s’il n’y a pas eu éjaculation. - Si l’acte concerne un homme majeur et une mineure, la purification est obligatoire pour l’homme. - Si la femme est majeure, la purification ne s’impose pas en l’absence de sécrétion. - Pour la personne mineure, la purification demeure méritoire dans les deux cas.",
          ar: "٢. الجماع: يجب الاغتسال على الرجل والمرأة البالغين بعد الجماع ولو لم يحصل إنزال. وإذا كان الجماع بين رجل بالغ وقاصر، فالاغتسال واجب على الرجل. وإذا كانت المرأة بالغة فلا يجب عليها الاغتسال إن لم تحصل إفرازات. ويُستحب الاغتسال للقاصر في الحالتين."
        },
        {
          fr: "3° Menstrues : une femme en période menstruelle doit se purifier après l’arrêt du saignement, quelle qu’en soit la quantité.",
          ar: "٣. الحيض: يجب على المرأة الاغتسال بعد انقطاع دم الحيض مهما كانت كميته."
        },
        {
          fr: "4° Accouchement : la purification est obligatoire en cas d’accouchement, même si celui-ci n’est pas accompagné de saignement.",
          ar: "٤. الولادة (النفاس): يجب الاغتسال بسبب الولادة ولو لم يصاحبها نزول دم."
        }
      ]
    }
  ];

  const sections2 = [
    {
      content: [
        {
          fr: "S’il s’agit de la purification en vue de la prière du vendredi, les pieds doivent être lavés au moment de l’ablution.",
          ar: "إذا كانت الطهارة من أجل صلاة الجمعة، فيجب غسل القدمين أثناء الوضوء."
        },
        {
          fr: "La grande ablution peut tenir lieu à la fois de lavage rituel et d’ablution du vendredi, à condition que l’intention soit formulée au préalable.",
          ar: "الاغتسال الأكبر يجزئ عن الغسل والوضوء ليوم الجمعة إذا نويت ذلك مسبقا."
        }
      ]
    }
  ];
  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6">
      
      {/* HEADER DE LUXE */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block">
          Chapitre V — Section A
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8"
        >
          LA PURIFICATION (LAVAGE) <br />
          <span className="font-amiri text-3xl md:text-5xl opacity-80 italic text-gold">الغسل</span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAudioAction}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* SECTIONS BILINGUES */}
        {sections1.map((section, sIdx) => (
          <div key={sIdx} className="space-y-10">
            <div className="flex items-center gap-8">
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
                    <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                      <p className="text-2xl md:text-4xl font-amiri text-white leading-[1.8] dir-rtl">
                        {item.ar}
                      </p>
                    </div>
                    <div className="hidden md:block w-[1px] h-20 bg-gold/10 order-2" />
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

        {/* COMMENT SE PURIFIER (PROCÉDURE) */}
        <section className="space-y-10">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">COMMENT SE PURIFIER ?</h2>
            <div className="h-[1px] flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">كيف يتطهر؟</h2>
          </div>

          <div className="glass-card p-10 md:p-16 rounded-[3rem] border border-gold/10">
            <div className="space-y-8">
              {[
                {
                  fr: "Se procurer de l’eau exempte de toute souillure, incolore, inodore et sans saveur.",
                  ar: "توفير ماء طهور خال من النجاسة لا لون له ولا رائحة ولا طعم."
                },
                {
                  fr: "Se mettre dans un endroit décent et propre, se tourner vers l’Est (Kaaba) et dire « Bismillahi ».",
                  ar: "الوجود في مكان طاهر ومستتر والتوجه نحو القبلة وقول بسم الله."
                },
                {
                  fr: "Se laver la main droite jusqu’au poignet trois fois.",
                  ar: "غسل اليد اليمنى إلى الرسغ ثلاث مرات."
                },
                {
                  fr: "Puis laver la main gauche de la même façon.",
                  ar: "ثم غسل اليد اليسرى مثل ذلك."
                },
                {
                  fr: "Laver les parties souillées.",
                  ar: "غسل مواضع النجاسة."
                },
                {
                  fr: "Laver proprement le sexe et formuler intérieurement l’intention de se purifier conformément aux recommandations divines.",
                  ar: "غسل الفرج جيدا مع استحضار نية الطهارة امتثالا لأمر الله."
                },
                {
                  fr: "Procéder à l’ablution complète en retardant le lavage des pieds.",
                  ar: "البدء بالوضوء الكامل مع تأخير غسل القدمين."
                },
                {
                  fr: "Prendre de l’eau dans les mains et la passer sur les cheveux de la nuque vers le front.",
                  ar: "أخذ الماء باليدين وتمريره على الشعر من القفا إلى الجبهة."
                },
                {
                  fr: "Se laver la tête trois fois en veillant à faire pénétrer l’eau partout.",
                  ar: "غسل الرأس ثلاث مرات مع إيصال الماء إلى جميع أجزائه."
                },
                {
                  fr: "Laver les deux oreilles intérieurement et extérieurement en commençant par la droite.",
                  ar: "غسل الأذنين ظاهرا وباطنا بدءا باليمنى."
                },
                {
                  fr: "Laver la nuque et le cou.",
                  ar: "غسل العنق والقفا."
                },
                {
                  fr: "Laver le côté droit du corps de l’épaule jusqu’au genou.",
                  ar: "غسل الجانب الأيمن من الجسم من الكتف إلى الركبة."
                },
                {
                  fr: "Procéder de la même manière pour le côté gauche.",
                  ar: "ثم غسل الجانب الأيسر كذلك."
                },
                {
                  fr: "Se laver entièrement le dos.",
                  ar: "غسل الظهر كاملا."
                },
                {
                  fr: "Laver la poitrine et le ventre.",
                  ar: "غسل الصدر والبطن."
                },
                {
                  fr: "Enfin, laver les deux pieds jusqu’aux chevilles.",
                  ar: "وأخيرا غسل القدمين إلى الكعبين."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex justify-between items-center group border-b border-white/5 pb-6 last:border-0">
                  <div className="flex gap-6 items-center flex-1">
                    <span className="text-gold font-black opacity-20 text-4xl">{idx + 1}</span>
                    <p className="text-white/70 group-hover:text-white transition-colors text-lg">{step.fr}</p>
                  </div>
                  <p className="font-amiri text-gold-light text-2xl hidden md:block">{step.ar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {sections2.map((section, sIdx) => (
          <div key={sIdx} className="space-y-10">

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
                    <div className="w-full md:w-1/2 text-right order-1 md:order-2">
                      <p className="text-2xl md:text-4xl font-amiri text-white leading-[1.8] dir-rtl">
                        {item.ar}
                      </p>
                    </div>
                    <div className="hidden md:block w-[1px] h-20 bg-gold/10 order-2" />
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

        {/* OBLIGATIONS ET TRADITIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-10 rounded-[2.5rem] border border-emerald-500/20">
             <div className="flex justify-between items-center mb-8 border-b border-emerald-500/10 pb-4">
                <h3 className="text-emerald-500 font-black text-xs uppercase tracking-widest">LES PRATIQUES OBLIGATOIRES DU LAVAGE (FARATA)</h3>
                <span className="font-amiri text-xl text-emerald-500/50">الفاراتا</span>
             </div>
             <ul className="space-y-4 text-white/60 text-sm">
                <li>1. Formuler intérieurement l’intention <br /> النية</li>
                <li>2. L’observance de l’ordre indiqué <br /> الالتزام بالترتيب</li>
                <li>3. Mouiller le corps intégralement — تغطية الجسم بالكامل</li>
                <li>4. Se rincer le corps avec la main si possible ou avec tout autre moyen <br /> غسل الجسم باليد إذا أمكن أو بأي وسيلة أخرى</li>
                <li>5. Mouiller la tête jusqu’au cuir chevelu <br /> غسل الرأس حتى فروة الرأس</li>
                <li>Si des tresses empêchent une humectation totale, obligation est faite de les enlever <br /> إذا كانت الضفائر تمنع الترطيب الكامل، فمن الضروري إزالتها</li>
              </ul>


          </div>

          <div className="glass-card p-10 rounded-[2.5rem] border border-gold/20">
             <div className="flex justify-between items-center mb-8 border-b border-gold/10 pb-4">
                <h3 className="text-gold font-black text-xs uppercase tracking-widest">LES PRATIQUES TRADITIONNELLES (SOUNA)</h3>
                <span className="font-amiri text-xl text-gold/50">السنن</span>
             </div>
             <ul className="space-y-4 text-white/60 text-sm">
                <li>1. Commencer par laver les mains jusqu’aux poignets <br /> غسل اليدين حتى الرسغين</li>
                <li>2. Se rincer la bouche <br /> مضمضة الفم</li>
                <li>3. Faire pénétrer l’eau dans les narines en aspirant <br /> استنشاق الماء في الأنف</li>
                <li>4. Faire sortir l’eau en soufflant par le nez <br /> إخراج الماء عن طريق النفخ من الأنف</li>
                <li>5. Faire passer l’eau par les oreilles en prenant soin de ne pas la trop faire pénétrer de peur d’avoir des ennuis d’audition <br /> غسل الأذنين بحذر لتجنب مشاكل السمع</li>
                <li>S’assurer que les aisselles, les autres parties cachées du corps et les replis de la peau sont tous mouillés <br /> التأكد من بل جميع الإبطين وأجزاء الجسم المخفية وطيات الجلد</li>
             </ul>
          </div>
        </div>

      </div>

    {/* Navigation de bas de page */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button 
          onClick={() => router.push('/partie/5')} // Vers le chapitre précédent
          className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/5/b')} // Vers le chapitre suivant
          className="px-10 py-4 bg-gold text-emerald-950-dynamic rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-[0_10px_30px_rgba(201,169,97,0.3)] hover:scale-105 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}