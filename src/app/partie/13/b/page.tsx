'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function CasDivorcePage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "13") || CHAPTERS[12];
  const isThisChapterPlaying = currentChapter?.id === chapterData.id && isPlaying;

  const handleAudioAction = () => {
    if (currentChapter?.id === chapterData.id) togglePlay();
    else setChapter(chapterData);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-red-950/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XIII — Section B</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LES CAS DE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">divorce</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">أقسام الطلاق</p>

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
          
          {/* 1. RÉCAPITULATIF DES CAS */}
          <motion.section {...fadeInUp} className="text-center max-w-2xl mx-auto border-b border-white/5 pb-16">
            <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.4em] mb-12">Classification juridique</p>
            <div className="grid gap-4">
              <span className="text-gold font-serif italic text-xl md:text-2xl">1. Le titre provisoire (fayeli)</span>
              <span className="text-gold font-serif italic text-xl md:text-2xl">2. Le titre expiatoire</span>
              <span className="text-gold font-serif italic text-xl md:text-2xl">3. Le divorce irréversible</span>
            </div>
          </motion.section>

          {/* 2. DÉTAILS DES TYPES */}
          <section className="space-y-12">
            {[
              {
                id: "1",
                title: "Le divorce à titre provisoire (fayeli)",
                content: "C’est le divorce qui n’est pas prononcé 3 (trois) fois et qui n’a pas été l’objet d’une demande de la part de la femme ; le mari peut reprendre sa femme sans avoir besoin de renouveler le mariage si toutefois la période de retraite légale n’est pas épuisée. Si par contre cette période expire, le divorce est consommé. Il ne peut être réparé que par un autre acte de mariage et le versement d’une autre dot."
              },
              {
                id: "2",
                title: "Le divorce à titre expiatoire",
                content: "Le divorce demandé est celui exigé par la femme, que cette dernière ait ou non donné de l’argent. Le divorce légal (charia) est aussi expiatoire. C’est lorsque le mari a un comportement anormal vis-à-vis de sa femme au point que le divorce s’impose au vu de la charia.",
                extra: "N’est pas considéré dans ce cas lorsque le divorce intervient à la suite d’un serment ou si le mari n’a pas de quoi nourrir sa femme. Dans ces cas, si celui qui avait juré sur l’honneur accepte de faire marche arrière, alors que la période de retraite légale n’est pas épuisée, la femme peut revenir chez elle. Ainsi, si le mari arrive à obtenir de quoi nourrir sa femme, toujours pendant la période de retraite légale, cette dernière peut retourner chez elle."
              },
              {
                id: "3",
                title: "Le divorce irréversible",
                content: "C’est quand le divorce est prononcé 3 fois ou une seule fois avec la ferme intention d’en finir. Ce divorce ne peut être réparé.",
                warning: "Le mari ne pourra reprendre cette femme que lorsque cette femme aura épuisé la durée de sa retraite légale, qu’elle aura contracté un autre mariage, qu’elle aura rompu celui-ci, et qu’elle aura épuisé la retraite légale consécutive à la rupture du dernier mariage. Toutefois, ce dernier mariage ne doit pas être contracté par un tiers en vue de permettre le retour de la femme avec son premier mari. La femme, quant à elle, peut se remarier dans ce but précis, tout comme le premier mari peut faire des démarches dans ce sens. C’est le second mari qui ne doit pas tremper dans cette combine. Il est interdit à deux hommes de rivaliser chez une même femme. Il est tout aussi interdit de courtiser une femme pendant sa retraite légale. Si le mariage a lieu pendant cette période, ce ménage sera frappé d’inceste à jamais."
              }
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} className={`p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border ${item.id === "3" ? 'border-red-900/30' : 'border-white/5'} space-y-8`}>
                <div className="flex items-center gap-6">
                  <span className={`text-4xl font-black italic opacity-20 ${item.id === "3" ? 'text-red-500' : 'text-gold'}`}>{item.id}</span>
                  <h3 className="text-2xl font-bold tracking-tight uppercase">{item.title}</h3>
                </div>
                <div className="font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify space-y-8">
                  <p>{item.content}</p>
                  {item.extra && <div className="p-8 rounded-3xl bg-emerald-950/10 border border-emerald-500/10 text-emerald-100/70 text-lg">{item.extra}</div>}
                  {item.warning && <div className="p-8 rounded-3xl bg-red-950/10 border border-red-500/20 text-red-100/70 text-lg">{item.warning}</div>}
                </div>
              </motion.div>
            ))}
          </section>

          {/* 3. DISPOSITIONS SPÉCIFIQUES */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Dispositions Spécifiques</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg text-white/60 leading-relaxed text-justify">
              <p>Une femme en période de retraite légale ne doit pas aller loin de chez elle, encore moins passer la nuit ailleurs que chez elle. S’il s’agit de la période de viduité, tous ces interdits frappent la femme qui, en plus, ne doit en aucune manière porter des bijoux ou de beaux habits ; elle ne doit pas non plus se parfumer ; elle peut cependant entretenir ses cheveux au moyen d’une pommade non parfumée, cela pour en empêcher la chute.</p>
              <p>Une femme que son mari abandonne délibérément sans aucune raison, mais par simple refus de l’entretenir, cette femme peut aller consulter son père ou son représentant afin d’obtenir le divorce : ce divorce sera irréversible. Si le mari revient et veut reprendre sa femme, il pourra l’épouser à nouveau s’il ne la trouve pas mariée à un autre homme, et ce avec le consentement de la femme, mais on ne devra pas l’obliger à le faire.</p>
              
              <div className="p-10 rounded-[3rem] bg-gold/[0.03] border border-gold/10 space-y-8 text-white/80">
                <h4 className="text-gold font-black text-[10px] uppercase tracking-widest text-center border-b border-gold/10 pb-4">Le Mari Disparu ou Absent</h4>
                <p>Une femme dont le mari a disparu sans laisser de traces, une femme dont on sait que le mari se trouve dans une localité déterminée mais n’en revient pas et n’envoie rien à sa femme faute de moyen ou par empêchement, une femme dont on ne sait si le mari est en vie ou non, chacune de ces femmes doit attendre le retour de son mari pendant une durée de 4 ans, à condition que la femme se trouve dans un pays musulman, que le mari lui ait laissé de quoi nourrir (en nature ou en espèce) et que la femme soit sûre de pouvoir lui rester fidèle.</p>
                <p>Si la femme ne se trouve pas dans un pays musulman, elle attendra aussi longtemps qu’elle le croira en vie. Toutefois, l’attente ne s’impose que si le mari a laissé à la femme suffisamment de nourriture, une maison où habiter et que la femme soit sûre de pouvoir lui rester fidèle. Si la femme n’est pas sûre de pouvoir lui rester fidèle, et que le mari ne lui a pas laissé de quoi se nourrir, se vêtir et un logement, elle pourra recouvrer la liberté aux yeux de la charia dès qu’elle ne se sentira plus en mesure d’attendre.</p>
              </div>

              <p className="text-center max-w-3xl mx-auto opacity-40">Si le mari meurt à l’insu de sa femme, la période de viduité commence dès que la femme apprend le décès du mari ; elle n’observera que le reste de la durée légale (en tenant compte de la date réelle du décès). Si, au moment où la femme apprend le décès, la durée légale de la viduité est épuisée, elle en sera dispensée.</p>
            </div>
          </section>

          {/* CONCLUSION FINALE */}
          <motion.section {...fadeInUp} className="relative p-12 md:p-24 rounded-[5rem] bg-gold/[0.02] border-2 border-gold/10 text-center space-y-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
            <h2 className="text-gold font-black text-sm md:text-xl uppercase tracking-[0.6em]">Conclusion & Prière</h2>
            
            <div className="max-w-3xl mx-auto font-serif italic text-xl md:text-2xl text-white/90 leading-relaxed space-y-10">
              <p>Certes, le divorce n’est pas interdit en soi, mais il ne doit être prononcé qu’en cas de nécessité absolue ; il ne doit pas être prononcé sous l’emprise de la colère ni par légèreté.</p>
              <p>Savoir supporter est un moyen, entre autres, qui nous permet d’éviter de tels travers et de s’abstenir de regarder intensément l’autre sexe. Celui qui ne le fait pas est toujours exposé à des difficultés. D’ailleurs, Allah le Tout-Puissant a recommandé cette pratique à l’homme et à la femme dans le Saint Coran.</p>
              <p className="text-white/60 text-lg">Il (Dieu) connaît le genre humain mieux que quiconque. Il est plus attentif à notre sort, donc nous devons nous efforcer au respect de cette recommandation à tout moment.</p>
              
              <div className="pt-16 space-y-8">
                <p className="text-gold font-bold tracking-tight">Que le Tout-Puissant nous assiste dans l’observation de cette recommandation et nous réserve une fin heureuse.</p>
                <div className="space-y-4">
                  <p className="font-amiri text-7xl text-gold-light">آمِينَ</p>
                  <p className="text-[10px] uppercase tracking-[0.5em] text-white/30">Amine</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
          </motion.section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/13/a')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/14')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre XIV</button>
      </nav>
    </main>
  );
}