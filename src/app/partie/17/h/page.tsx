'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { CHAPTERS } from '@/data/chapters';

export default function RepentirPage() {
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
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block opacity-60">Chapitre XVII — Section H</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
              LE <br /> <span className="gold-gradient-text italic font-serif lowercase text-5xl md:text-8xl">repentir</span>
            </h1>
            <p className="text-3xl font-amiri text-gold-light mb-10">التوبة</p>

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
          
          {/* 1. LE REPENTIR - TEXTE INTÉGRAL */}
          <motion.section {...fadeInUp} className="p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group shadow-2xl">
            <span className="absolute -right-10 -top-10 text-[250px] font-black text-white/[0.01] pointer-events-none group-hover:text-gold/[0.02] transition-colors">H</span>
            <div className="max-w-4xl relative z-10 font-serif italic text-lg md:text-xl text-white/80 leading-relaxed text-justify space-y-8">
              <p>
                Tout musulman majeur doit se repentir régulièrement : À tout moment, le véritable repentir s’entend ainsi qu’il suit : 
                L’acte pour lequel on demande le pardon doit être considéré comme le fait d’avoir marché sur une braise ; si on savait bien qu’il s’agit d’une braise, on n’y aurait jamais mis le pied, tout en regrettant bien de l’y avoir mis ; il est évident qu’on ne recommencera plus ces gestes de manière consciente (c’est cela le repentir).
              </p>
              <p>
                Tout repentir qui n’est pas conforme à cette image de la braise n’en n’est point un ; c’est pure vanité. Il faut constamment renouveler le repentir, car la mort peut survenir à tout moment. Il n’existe pas de limite d’âge pour la mort ; elle fauche les vieux, elle fauche les enfants, elle fauche les adolescents. Quand elle arrive, elle ne fait pas de différence entre ceux qui sont occupés à faire quelque chose et ceux qui ne le sont pas.
              </p>
              <p>
                Elle ne nous accorde pas le temps nécessaire nous permettant de faire ou d’achever quoi que ce soit, si bref soit-il. Dans ce cas, on doit éviter de nous trouver dans les situations (actes ou paroles) où nous n’aimerions pas être surpris par la mort. Nous devons, par contre, nous adonner à des activités où nous serions fiers d’être surpris par la mort. Nous devons nous attendre à mourir à chaque instant, comme entre deux souffles par exemple.
              </p>
              <p>
                Nous devons donc nous efforcer de nous faire à cette idée de la mort qui nous guette à tout instant. Nous devons prier le Tout-Puissant de nous aider à cela et de nous permettre de garder la foi jusqu’à la fin de nos jours « Amine ».
              </p>
              <div className="text-center pt-8 border-t border-white/5">
                 <p className="font-amiri text-5xl text-gold-light">آمِينَ</p>
              </div>
            </div>
          </motion.section>

          {/* 2. SIGNES PRÉCURSEURS */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">Signes de la Fin du Monde</h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            
            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 space-y-12 font-serif italic text-lg md:text-xl text-white/70 leading-relaxed text-justify">
              <p>
                Nous vivons dans un monde finissant. S’il reste encore du temps à l’humanité, c’est un temps négligeable. Et le temps d’une vie est encore beaucoup plus négligeable. Pendant la durée de sa courte vie terrestre, l’homme ne peut disposer que de peu d’années pendant lesquelles il peut réaliser quelque chose, car il faut déduire de cette vie la période de l’enfance et celle de la vieillesse, durant lesquelles on est à la remorque des autres.
              </p>
              <p className="p-8 rounded-3xl bg-black/40 border border-white/5 text-white/50 text-base">
                Nous ne disposons donc que d’un petit laps de temps, dont nous disposons est entrecoupé par des empêchements de maladies diverses et par nos inévitables activités profanes. Si on déduit du temps disponible les moments d’empêchement, les moments que nous prennent les maladies, les moments que nous consacrons aux activités profanes, il ne nous restera que très peu de temps à consacrer aux dévotions ; et ce sont ces moments de dévotions qui nous permettent de recueillir assez de viatique pour notre séjour dans l’au-delà, c’est la raison pour laquelle nous devons redoubler de vigilance ici-bas.
              </p>
              <p>
                La vie dans l’au-delà ne connaît pas de limite temporelle et nous nous y acheminons allégrement, nous y sommes presque. Voilà pourquoi nous avons rassemblé les conseils ci-dessous pour permettre à tout le monde d’essayer de rattraper le temps perdu et profiter au maximum du peu de temps qu’il nous reste à vivre.
              </p>
            </motion.div>
          </section>

          {/* 3. RECOMMANDATIONS & RÉMISSION (DÉTAILS PAR JOUR) */}
          <section className="space-y-12 pb-20">
            <div className="flex items-center gap-6 px-4">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.4em] leading-tight text-center flex-1">RECOMMANDATIONS DONT L’OBSERVATION ENTRAÎNE LA RÉMISSION DES PÉCHÉS</h2>
            </div>
            
            <div className="space-y-12">
              
              {/* NUIT DU SAMEDI AU DIMANCHE */}
              <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 space-y-12">
                <span className="text-gold font-black text-[10px] uppercase tracking-widest block border-b border-white/5 pb-4">Nuit du Samedi au Dimanche</span>
                <p className="font-serif italic text-lg text-white/70 leading-relaxed text-justify">
                  Si on effectue vingt rakas avec pour chacun d’eux la « Fatiha » suivie de cinquante « Koul houwa Allahou » (1 fois), « Falahi » (1 fois) et « Nâssi » (1 fois), qu’on dit après le salut final : « Allahouma ikhfirli wali walidaya » (100 fois), puis « Allahouma Sali hala sayidina Mouhamadine wa salim » (100 fois), et enfin ceci :
                </p>
                <div className="p-10 rounded-[3.5rem] bg-gold/[0.05] border border-gold/20 space-y-8 shadow-sm not-italic text-right">
                  <p className="font-amiri text-2xl md:text-3xl text-white leading-loose" dir="rtl">
                    تَبَرَّأْتُ مِنْ حَوْلِي وَقُوَّتِي وَالْتَجَأْتُ إِلَى حَوْلِ اللهِ وَقُوَّتِهِ وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ آدَمَ صَفْوَةُ اللهِ وَفِطْرَتُهُ وَإِبْرَاهِيمَ خَلِيلُ اللهِ عَزَّ وَجَلَّ وَمُوسَى كَلِيمُ اللهِ تَعَالَى وَعِيسَى رُوحُ اللهِ سُبْحَانَهُ وَمُحَمَّدًا حَبِيبُ اللهِ وَجَلَّ صَلَوَاتُ اللهِ وَتَسْلِيمَاتُهُ عَلَيْهِ وَعَلَيْهِمْ أَجْمَعِينَ
                  </p>
                  <p className="text-gold-light/60 font-serif italic text-sm text-left border-t border-gold/10 pt-8" dir="ltr">
                    « Tabarreuh tou mine awly wakhouwati waltadjah tou ilâ awly lâhi wakhouwatihî wa ach hadou anna lâhi lâha ila lâhou wa ach hadou anna Adamasafwatou lâhi wa fitratouhô wa Ibrahim Khalilou lâhi haza wadiala wa Moussa kalimoul lahi tahala wahissarouhou lâhi soubhanahou wa Mouhamadane habibou lâhi wa diala salawatou lahi wa taslimâtouhô haleyhi wa haleyhime adjimahîne » ;
                  </p>
                </div>
                <p className="text-emerald-400 font-bold italic text-center">On bénéficiera alors de bienfaits aussi importants que le nombre des créatures le jour du Jugement dernier.</p>
              </motion.div>

              {/* JOURNÉE DU DIMANCHE */}
              <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-8 font-serif italic text-lg text-white/70 text-justify">
                <span className="text-gold font-black text-[10px] uppercase tracking-widest block border-b border-white/5 pb-4 not-italic">Journée du Dimanche</span>
                <p>Celui qui effectue quatre rakas avec pour chacun la « Fatiha » suivie du verset « Amana rassoula » bénéficiera de bénédictions égales au nombre des Nassaranes (Européens), de bénédictions dont bénéficie un Prophète. Il bénéficiera aussi des bienfaits de celui qui a fait deux fois le pèlerinage. Chaque lettre récitée lui bâtira une maison en étage au paradis.</p>
                <div className="pt-8 border-t border-white/5 space-y-6">
                  <p className="text-white/40 text-base italic">Après la prière du Tisbar (14h) et les rakas traditionnels :</p>
                  <ul className="space-y-3 not-italic font-sans text-sm text-gold-light">
                    <li>• 1er raka : Fatiha + Sadjadati</li>
                    <li>• 2e raka : Fatiha + Moulki</li>
                    <li>• 3e et 4e raka : Fatiha + Dioum hati</li>
                  </ul>
                  <p>Dieu l’exaucera et il conservera la foi jusqu’à la mort.</p>
                </div>
              </motion.div>

              {/* NUIT DU DIMANCHE AU LUNDI */}
              <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 space-y-12">
                <span className="text-gold font-black text-[10px] uppercase tracking-widest block border-b border-white/5 pb-4">Nuit du Dimanche au Lundi</span>
                <p className="font-serif italic text-lg text-white/70">Quatre rakas avec des Ikhlass croissants (10, 20, 30, 40). Après le salut : 75 Ikhlass, 75 pardons et 75 prières sur le Prophète.</p>
                <div className="p-10 rounded-[3rem] bg-black/40 border border-white/5 space-y-8 text-right">
                   <p className="text-white/30 text-xs text-center uppercase tracking-widest italic mb-4">Variante (2 rakas + 15 Ikhlass) :</p>
                   <p className="font-amiri text-2xl text-white dir-rtl leading-relaxed">أَسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لا إِلَهَ إِلا هُوَ الحَيُّ القَيُّومُ (١٥ مَرَّةً)</p>
                   <p className="text-gold-light/40 text-xs italic text-left">« Astakhfiroulahal hazimaleuzi ilaha ila houwal hayal khayôma »</p>
                   <p className="text-emerald-400 font-bold italic text-center pt-6 text-base">Dieu l’enverra parmi ceux qui vont au Paradis, même s’il était destiné à l’enfer.</p>
                </div>
              </motion.div>

              {/* LUNDI (MATIN & JOURNÉE) */}
              <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-10">
                <span className="text-gold font-black text-[10px] uppercase tracking-widest block border-b border-white/5 pb-4">Lundi (10h - 11h)</span>
                <p className="font-serif italic text-lg text-white/70">Deux rakas : Fatiha + Ayatoul Koursiyou + Ikhlass + Falahi + Nâssi. Puis 10 pardons et 10 prières sur le Prophète.</p>
                <div className="p-8 rounded-3xl bg-gold/[0.02] border border-gold/10 text-white/50 text-sm italic font-serif leading-relaxed">
                   <p>Variante 12 rakas : Dieu ordonnera à un ange d’aller chercher l’intéressé dans la foule par son vrai nom. On lui donnera un récipient d’or et cent mille anges l’accompagneront à travers mille propriétés au paradis.</p>
                </div>
              </motion.div>

              {/* MARDI & MERCREDI */}
              <div className="grid md:grid-cols-2 gap-8 font-serif italic text-base text-white/60">
                 <motion.div {...fadeInUp} className="p-10 rounded-[3.5rem] bg-white/[0.03] border border-white/10 space-y-6">
                    <span className="text-gold font-bold text-[9px] uppercase tracking-widest border-b border-white/5 pb-2 block">Mardi (Nuit & Jour)</span>
                    <p>Nuit : 12 rakas (Fatiha + Iza dja-â 5x). Jour : 10 rakas (Ayatoul Koursiyou + Ikhlass 3x). Absolution des péchés commis pendant 70 ans.</p>
                 </motion.div>
                 <motion.div {...fadeInUp} className="p-10 rounded-[3.5rem] bg-white/[0.03] border border-white/10 space-y-6">
                    <span className="text-gold font-bold text-[9px] uppercase tracking-widest border-b border-white/5 pb-2 block">Mercredi</span>
                    <p>Nuit : 2 rakas (Fatiha 10x / Fatiha + Nâssi 10x). Matin : 12 rakas (Ayatoul Koursiyou + Ikhlass, Falahi, Nâssi 3x chacun). Protection contre l'obscurité de la tombe.</p>
                 </motion.div>
              </div>

              {/* JEUDI (DEVOIRS PARENTAUX) */}
              <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-emerald-950/[0.03] border border-emerald-500/10 space-y-8 font-serif italic text-lg text-white/70">
                <span className="text-emerald-400 font-black text-[10px] uppercase tracking-widest block border-b border-emerald-500/10 pb-4 not-italic">Jeudi (Nuit entre Maghreb et Icha)</span>
                <p>Fatiha + Ayatoul Koursiyou 5x + Ikhlass, Falahi, Nâssi 5x. Dédier le tout à ses parents : considéré comme ayant accompli tous les devoirs à leur égard, même s’il les avait négligés.</p>
                <p className="pt-6 border-t border-emerald-500/10 text-base">Entre 14h et 17h : 2 rakas avec Ayatoul Koursiyou 100x et Ikhlass 100x. Bénéficiera des bénédictions de Radjab, Shabane et Ramadan réunis.</p>
              </motion.div>

              {/* VENDREDI (JOUR DES GRADES) */}
              <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-12">
                <span className="text-gold font-black text-[10px] uppercase tracking-widest block border-b border-white/5 pb-4">Vendredi (Séquence sacrée)</span>
                <div className="font-serif italic text-lg text-white/80 space-y-6">
                  <p>Nuit : 2 rakas (Fatiha + Izazoul Zilati 15x). Après Maghreb : 12 rakas (Fatiha + Ikhlass 10x). Après Icha : 10 rakas avant le Wîtr (Fatiha + Ikhlass, Falahi, Nâssi 1x).</p>
                  <div className="p-8 rounded-3xl bg-gold/[0.05] border border-gold/10 space-y-4 not-italic font-sans text-sm">
                     <p className="text-gold-light uppercase tracking-widest font-black text-[10px]">Grades au Paradis :</p>
                     <p>• 2 rakas : 200 péchés pardonnés. / • 4 rakas : 400 grades (Daradia).</p>
                     <p>• 8 rakas : 800 fois le grade. / • 12 rakas : 1200 fois le grade.</p>
                  </div>
                  <div className="p-10 rounded-[3.5rem] bg-black/60 border border-white/5 text-right space-y-6">
                     <p className="text-center text-xs italic text-white/40 mb-4">Entre Zohr et Asr (2 rakas) :</p>
                     <p className="font-amiri text-2xl text-white dir-rtl">لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ العَلِيِّ العَظِيمِ (٥٠ مَرَّةً)</p>
                     <p className="text-gold-light/60 text-sm italic text-left">« Laa hawla wala khouwata ila bilahil haliijil hazimi »</p>
                     <p className="text-emerald-400 font-bold italic text-center border-t border-white/5 pt-6">Il verra le Tout-Puissant en rêve ou sa place au paradis avant sa mort.</p>
                  </div>
                </div>
              </motion.div>

              {/* SAMEDI FINAL */}
              <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] bg-white/[0.01] border border-white/5 font-serif italic text-lg text-white/60 leading-relaxed text-justify">
                <span className="text-gold font-black text-[10px] uppercase tracking-widest block border-b border-white/5 pb-4 not-italic mb-8">Clôture du Samedi</span>
                <p>Nuit : 12 rakas (après Maghreb) : considéré comme ayant nourri tous les musulmans. Jour : 4 rakas (Fatiha + Kâfirouna 3x). Récompense de chaque lettre du verset Ayatoul Koursiyou égale au pèlerinage complet.</p>
              </motion.div>

            </div>
          </section>

        </div>
      </div>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button onClick={() => router.push('/partie/17/g')} className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all">Précédent</button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button onClick={() => router.push('/partie/18')} className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20">Chapitre XVIII</button>
      </nav>
    </main>
  );
}