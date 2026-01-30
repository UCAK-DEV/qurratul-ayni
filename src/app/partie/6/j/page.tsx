'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function PrieresSurerogatoires() {
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
          Chapitre VI — Section J
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-3xl md:text-6xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase"
        >
          LES PRIÈRES <br /> SURÉROGATOIRES
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
        
        {/* SECTION 1 : MÉTHODE ET JUMELAGE */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Méthode de jumelage</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">كيفية أداء النوافل</h2>
          </div>
          
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            <p className="text-lg text-white/70 italic mb-8 border-b border-white/5 pb-6">
              La manière suivante de les effectuer en les jumelant avec les prières obligatoires est une pratique traditionnelle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  fr: "Les deux (2) rakkas traditionnelles du « fadiar » (aurore), suivies des deux (2) rakkas obligatoires du sobh, elles-mêmes suivies des quatre (4) rakkas de la matinée (yor yor).",
                  ar: "ركعتا الفجر (سنة)، تليها ركعتا الصبح (فريضة)، ثم أربع ركعات الضحى."
                },
                {
                  fr: "Les quatre (4) rakkas qui précèdent la prière du « zohr » (prière de l’après-midi), suivies des quatre (4) rakkas obligatoires du « zohr », plus quatre (4) autres rakkas traditionnelles après le « zohr ».",
                  ar: "أربع ركعات قبل الظهر، ثم أربع ركعات الظهر (فريضة)، ثم أربع ركعات بعدها."
                },
                {
                  fr: "Quatre (4) rakkas avant le « asr » (takoussane) (prière du soir), elles-mêmes suivies des quatre (4) rakkas obligatoires.",
                  ar: "أربع ركعات قبل العصر، ثم أربع ركعات العصر (فريضة)."
                },
                {
                  fr: "Trois (3) rakkas obligatoires du « maghreb » (timis) (crépuscule), plus deux (2) rakkas traditionnelles après la prière obligatoire du « maghreb ».",
                  ar: "ثلاث ركعات المغرب (فريضة)، ثم ركعتان بعدها."
                }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                  <p className="text-white/80 text-sm leading-relaxed">{item.fr}</p>
                  <p className="font-amiri text-gold-light text-xl dir-rtl border-t border-white/5 pt-3">{item.ar}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-6 bg-gold/5 rounded-2xl border border-gold/20 space-y-4">
              <p className="text-white/80 text-sm leading-relaxed">
                Quatre (4) rakkas obligatoires du « guéwé », plus douze rakkas traditionnelles après le « guéwé », plus une dernière raka unique appelée « witr ».
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl border-t border-gold/10 pt-3">
                أربع ركعات العشاء (فريضة)، ثم اثنتا عشرة ركعة نافلة، ثم ركعة الوتر.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 : RAMADAN ET PRATIQUES QUOTIDIENNES */}
        <section className="space-y-8">
          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Cela est une pratique traditionnelle pour qui peut les effectuer chaque jour. Les treize dernières rakkas par lesquelles nous avons terminé notre énumération constituent une pratique traditionnelle fortement recommandée durant le mois de ramadan ; elles s’effectuent après la prière du « guéwé » à la mosquée sous la direction d’un imam. En dehors du mois de ramadan, on les effectue chez soi.
            </p>
            <p className="font-amiri text-gold-light text-2xl dir-rtl border-t border-white/5 pt-6">
              هذه السنن لمن استطاع أداءها يومياً. والركعات الثلاث عشرة الأخيرة سنة مؤكدة في رمضان (التراويح)، وتصلى جماعة في المسجد، وفي غير رمضان تصلى في البيت.
            </p>
          </div>
        </section>

        {/* SECTION 3 : LE WITR ET LE SAFA */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-gold uppercase tracking-tighter">Le Witr et le Safa</h2>
            <div className="h-px flex-1 bg-gold/10" />
            <h2 className="text-2xl font-amiri text-gold-light">الشفع والوتر</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-[2.5rem] border border-gold/20 space-y-6">
              <p className="text-white/80 text-sm leading-relaxed">
                La prière du « witr » est une pratique à caractère obligatoire. Elle compte une seule raka pendant laquelle on récite la « fatiha », suivie d’un « likhlas », d’un « falakhi » et d’un « nassi ». Il est méritoire de l’effectuer après la prière du « safa », qui comprend deux (2) rakkas : dans la première, on récite, après la « fatiha », la sourate « sabihisma » une fois ; dans la deuxième, on récite, après la « fatiha », la sourate « khoul ya ayouhal kâfirouna » une (1) fois.
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl border-t border-gold/10 pt-4">
                صلاة الوتر سنة مؤكدة، وهي ركعة واحدة يقرأ فيها الفاتحة والإخلاص والفلق والناس. ويستحب أن تسبق بالشفع (ركعتان): الأولى بـ "سبح اسم" والثانية بـ "قل يا أيها الكافرون".
              </p>
            </div>

            <div className="glass-card p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <p className="text-white/80 text-sm leading-relaxed">
                Celui qui n’a pas l’intention d’effectuer une prière surérogatoire après sa prière du « guéwé » peut immédiatement effectuer les prières du « safa » et du « witr ». Par contre, celui qui a l’intention d’effectuer une prière surérogatoire devra les effectuer en dernier lieu. Celui qui les a déjà effectuées et qui désire faire d’autres prières surérogatoires n’est pas tenu de les reprendre. Après avoir fini le « safa », il faudra prononcer le « salam » (salut final) avant d’effectuer le « witr ».
              </p>
              <p className="font-amiri text-gold-light text-xl dir-rtl border-t border-white/5 pt-4">
                من لم ينوِ التهجد يوتر بعد العشاء مباشرة، ومن نوى التهجد جعل الوتر آخره. ويجب السلام بين الشفع والوتر.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 : RÉPARATION EN CAS DE CONFUSION */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black text-red-400 uppercase tracking-tighter">Réparation</h2>
            <div className="h-px flex-1 bg-red-500/20" />
          </div>

          <div className="bg-red-950/10 p-8 md:p-12 rounded-[3rem] border border-red-500/20 text-center">
            <p className="text-white/90 italic text-lg mb-6 leading-relaxed">
              "Pendant les prières du « safa » et du « witr », si l’on confond la deuxième raka du « safa » avec la raka du « witr », on doit considérer ladite raka comme étant la deuxième raka du « safa » ; on se prosterne en « bahda salam » et ensuite on effectue le « witr »."
            </p>
            <p className="font-amiri text-red-300 text-2xl dir-rtl">
              إذا التبس عليك الشفع بالوتر، فاجعلها ركعة ثانية للشفع، واسجد بعد السلام، ثم أوتر.
            </p>
          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button onClick={() => router.push('/partie/6/i')} className="flex-1 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <button onClick={() => router.push('/partie/6/k')} className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase font-black shadow-lg hover:scale-105 transition-all">Suivant</button>
      </div>
    </main>
  );
}