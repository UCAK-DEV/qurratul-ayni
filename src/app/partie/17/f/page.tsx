'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function SounnaPage() {
  const router = useRouter();
  const { setChapter, currentChapter, isPlaying, togglePlay } = useAudio();
  
  const chapterData = CHAPTERS.find(c => c.id === "17") || CHAPTERS[16];
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
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XVII — Section F</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LA <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">sounna</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">السنة النبوية</p>

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
          
          {/* 1. DEVOIRS ENVERS LE MUSULMAN */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Devoirs de Fraternité</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <div className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed">
              <ul className="space-y-8 text-justify">
                <li className="flex gap-6"><span className="text-gold opacity-40">/</span> Rendre visite à un musulman malade est une tradition pour un voisin, de même l’accompagner à sa dernière demeure s’il venait de mourir, et présenter ses condoléances à sa famille.</li>
                <li className="flex gap-6"><span className="text-gold opacity-40">/</span> Féliciter son prochain lorsqu’il y a un événement heureux chez lui.</li>
                <li className="flex gap-6"><span className="text-gold opacity-40">/</span> Compatir à ses peines le cas contraire.</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-8 not-italic">
                <div className="p-8 rounded-3xl bg-black/40 border border-white/5 space-y-6">
                   <p className="text-xs text-white/30 uppercase tracking-widest">Formule de Salutation</p>
                   <p className="font-amiri text-2xl text-white text-right leading-loose" dir="rtl">السَّلامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ تَعَالَى وَبَرَكَاتُهُ</p>
                   <p className="text-gold-light italic text-sm">« Assalamou haleykoum warahmatou lahi tahala wa barakatouhô ».</p>
                </div>
                <div className="p-8 rounded-3xl bg-black/40 border border-white/5 space-y-6">
                   <p className="text-xs text-white/30 uppercase tracking-widest">Formule de Réponse</p>
                   <p className="font-amiri text-2xl text-white text-right leading-loose" dir="rtl">وَعَلَيْكُمُ السَّلامُ وَرَحْمَةُ اللهِ تَعَالَى وَبَرَكَاتُهُ</p>
                   <p className="text-gold-light italic text-sm">« Waleykoum salam warahmatou lahi tahala wa barakatouhi ».</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. INTERDICTIONS DE SALUTATION */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-red-400 uppercase tracking-[0.3em]">Interdictions de Salutation</h2>
              <div className="h-[1px] flex-1 bg-red-900/10" />
            </div>
            
            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-red-950/[0.03] border border-red-900/20 space-y-12 font-serif italic text-base md:text-lg text-white/60 leading-relaxed">
              <p className="text-white font-bold not-italic border-l-4 border-red-500 pl-6">Cependant, on ne doit pas saluer une femme tierce,</p>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-justify">
                {[
                  "ni quelqu’un qui est en train de prier, ni quelqu’un qui procède à l’appel à la prière,",
                  "ni celui qui procède au re-appel,",
                  "ni celui qui est en train de lire le Coran ou la tradition prophétique ou une documentation religieuse,",
                  "ni celui qui est en train d’enseigner,",
                  "celui qui prône au nom de Dieu, celui qui évoque les noms de Dieu (Zikr),",
                  "celui qui prononce le sermon, celui qui est en train de juger et celui qui l’écoute,",
                  "celui qui est en train de manger ou de boire, celui qui est aux toilettes,",
                  "celui qui exhibe ses parties intimes,",
                  "celui qui s’amuse ou celui qui assiste à des jeux, celui qui l’écoute,",
                  "celui qui est au cinéma, celui qui regarde la télé ou tout ce qui peut distraire,",
                  "celui qui fabrique des jouets ou celui qui les vend,",
                  "celui qui s’adonne à une séance divinatoire quelconque ou au maniement des cauris,",
                  "un mécréant, un photographe,",
                  "celui qui reproduit une créature vivante, celui qui prend de l’alcool,",
                  "celui qui fume, celui qui se fait raser la barbe et celui qui la lui rase,",
                  "celle qui greffe les cheveux et celle qui le lui fait,",
                  "celle qui se tatoue les lèvres et celle qui le lui fait."
                ].map((item, i) => (
                  <p key={i} className="flex gap-3"><span className="text-red-500/30">-</span>{item}</p>
                ))}
              </div>
              <p className="pt-10 border-t border-red-900/20 text-sm opacity-60">
                On ne doit pas saluer aucune de ces personnes. Précisions cependant que le fait de ne pas saluer procède du respect à l’endroit de celui qui lit ou enseigne le Coran, du mépris à l’endroit de celui qui s’adonne à des interdits.
              </p>
            </motion.div>
          </section>

          {/* 3. APPARITION DU CROISSANT LUNAIRE */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Rite de la Nouvelle Lune</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg text-white/70 leading-relaxed">
              <p className="text-center">La tradition veut que celui qui aperçoit la Lune lors de son apparition dise ce qui suit :</p>
              
              <div className="p-10 rounded-[3.5rem] bg-gold/[0.03] border border-gold/20 space-y-12 shadow-sm not-italic">
                <div className="space-y-4 text-center">
                  <p className="font-amiri text-3xl text-white">اللَّهُ أَكْبَرُ (٣ مَرَّاتٍ)</p>
                  <p className="text-gold-light/40 text-xs tracking-widest uppercase">« Allahou akbar » (3 fois)</p>
                </div>
                
                <div className="space-y-8 text-right" dir="rtl">
                  {[
                    { ar: "إِلَى خَيْرٍ وَرُشْدٍ رَبِّي وَرَبُّكَ اللَّهُ (٣ مَرَّاتٍ)", fr: "« Ila khaïrine wa rouchdine rabi wa raboukal lahou » (3 fois)" },
                    { ar: "اللَّهُمَّ لِلَّهِ الَّذِي خَلَقَنِي وَخَلَقَكَ وَصَوَّرَنِي وَصَوَّرَكَ وَقَدَّرَ مَنَازِلَ وَجَعَلَكَ آيَةً لِلْعَالَمِينَ (٣ مَرَّاتٍ)", fr: "« Allahouma lilahi leuzi khalakhanî wa khalakhaka... » (3 fois)" },
                    { ar: "اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالأَمْنِ وَالإِيمَانِ وَالإِسْلامِ وَالإِحْسَانِ وَالسَّلامَةِ وَالْعَافِيَةِ وَسِتْرِ الْجَمِيلِ وَالتَّوْفِيقِ لِمَا تُحِبُّ وَتَرْضَى (٣ مَرَّاتٍ)", fr: "« Allahouma ahilahô haleynâ... » (3 fois)" },
                    { ar: "كُلُّ مَا يَشْغَلُ الْعَبْدَ عَنْ رَبِّهِ وَعَنْ عِبَادَتِهِ فَهُوَعَلَيْهِ مَشْؤُومٌ (٣ مَرَّاتٍ)", fr: "« Koula mâyachkhaloul habda... » (3 fois)" }
                  ].map((dua, i) => (
                    <div key={i} className="space-y-4 border-t border-gold/10 pt-8 first:border-0 first:pt-0">
                      <p className="font-amiri text-2xl md:text-3xl text-white leading-relaxed">{dua.ar}</p>
                      <p className="text-gold-light/60 text-sm italic font-serif" dir="ltr">{dua.fr}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="bg-emerald-950/10 p-8 rounded-3xl border border-emerald-500/20 text-emerald-100/70 text-center">
                S’il s’agit du mois de Ramadan, il ajoute à cela la sourate « Al moulki », alors cela accroîtra ses chances d’acquisition de biens durant toute l’année.
              </p>
            </motion.div>
          </section>

          {/* 4. AUTRES RECOMMANDATIONS (VIE QUOTIDIENNE) */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Vie Quotidienne & Hygiène</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-16 font-serif italic text-lg text-white/80 leading-relaxed">
              <div className="space-y-10">
                <ul className="space-y-8">
                  <li className="flex gap-4"><span>•</span> Il est recommandé de se laver les mains avant de manger et d’utiliser la main droite sauf empêchement.</li>
                  <li className="flex gap-4"><span>•</span> De dire ceci avant de commencer à manger : <span className="text-white not-italic font-sans text-sm underline decoration-gold/30">« Bismilahi al mouzah sihi dadani »</span></li>
                  <li className="flex gap-4"><span>•</span> Et dire après avoir mangé : <span className="text-white not-italic font-sans text-sm underline decoration-gold/30">« Alhamdou lilahi al mousahihi al badani »</span></li>
                  <li className="flex gap-4"><span>•</span> On doit se laver les mains après et se gargariser</li>
                  <li className="p-10 rounded-3xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-50">
                    Celui qui après le repas dit ce qui suit : « Alhamdou lilahi atthamanî haza tahama wa razakha nîhi mine khaïri hawli minî wala khouwatine » se verra absous de tous ses péchés sans exclusive.
                  </li>
                </ul>
              </div>

              <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-8 not-italic font-sans text-sm">
                 <span className="text-gold font-bold uppercase tracking-[0.3em] block mb-4">Protocole de mouvement</span>
                 <div className="grid md:grid-cols-2 gap-8 text-white/60">
                    <p>On doit toujours commencer par dire « Bismilahi » avant de faire quoi que ce soit : prendre, poser, recevoir, s’asseoir, se lever, entrer ou sortir.</p>
                    <p>Il est bon d’entrer dans une mosquée par le pied droit et en sortir par le pied gauche. S’il s’agit d’un lieu de toilettes, on entre par le pied gauche.</p>
                 </div>
                 <div className="p-8 rounded-2xl bg-gold/[0.03] border border-gold/10 italic font-serif text-lg text-white/80">
                   Il est recommandé, lorsqu’on entre dans une chambre inoccupée, de dire : « Assalamou alyena ala ibadilahi salihîna » et réciter la sourate « Koul houwa lahou ahadoune » (3 fois).
                 </div>
              </div>

              <div className="space-y-12 pt-12 border-t border-white/5">
                <h3 className="text-gold font-bold text-xs uppercase tracking-widest not-italic">Habits Neufs, Éternuement & Baillement</h3>
                <p>Il est recommandé avant de porter des habits neufs de réciter la « Fatiha » (1 fois) et « Ina an salnahou » (15 fois). On restera assis en les portant et on se lèvera après pour dire : « Alhamdou lilahi leuzi kassânî haza sawba wa razakhanîhi mine khaïri hawline minî wala khouwatil alla houma iniya as alouka khaïrahô wa khaïra mâ souniha lahô ».</p>
                <p>Il est recommandé de dire chaque fois que l’on éternue : « Alhamdou lilahi rabil alamîna » et celui qui l’entend de répondre : « Yarhamoukal lahou », puis « Yakhfirou lahou lana wa lakounou wala yahdîkou moul lâhou wa youslihô bâ lakoune ».</p>
              </div>
            </div>
          </section>

          {/* 5. TOILETTE ET CORPS */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Hygiène et Esthétique</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <ul className="space-y-8">
                <li>• Il faut se couper les ongles chaque jeudi après-midi (17 heures).</li>
                <li>• L’homme doit se raser la tête plutôt que d’entretenir les cheveux par des produits ou les laisser pousser sans soin.</li>
                <li>• Quant aux poils de l’aisselle ainsi que ceux du bas-ventre, on doit les raser. Les moustaches peuvent être taillées sans les enlever entièrement.</li>
                <li className="p-10 rounded-3xl bg-red-950/10 border border-red-900/20 text-red-400 font-bold not-italic font-sans text-center uppercase tracking-widest text-base">
                  Il est strictement interdit de se raser la barbe ou de la tailler.
                </li>
                <li>• La femme peut entretenir ses cheveux en y appliquant des produits, les teindre ou les faire briller. Elle ne doit pas laisser pousser barbe, favoris ou moustaches ; elle doit les raser.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/17/e')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/17/g')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Suivant</button>
      </nav>
    </main>
  );
}