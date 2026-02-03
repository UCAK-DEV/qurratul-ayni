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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-4 md:px-6 relative overflow-x-hidden font-sans text-justify">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[40%] bg-blue-900/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[30%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_10px_#D4AF37]" />
          <span className="text-gold tracking-[0.4em] text-[9px] uppercase font-black">Chapitre XVII — Section H</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-black bg-gradient-to-b from-white to-gold bg-clip-text text-transparent mb-8 leading-tight uppercase tracking-tighter"
        >
          LE <br />
          <span className="gold-gradient-text italic text-3xl md:text-6xl uppercase tracking-normal">Repentir</span>
        </motion.h1>

        <p className="font-amiri text-4xl md:text-6xl text-gold block mb-10 tracking-normal text-center">التوبة</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => currentChapter?.id === chapterData.id ? togglePlay() : setChapter(chapterData)}
          className="inline-flex items-center gap-4 px-10 py-5 bg-gold/10 border border-gold/30 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md transition-all font-sans"
        >
          <span className="material-symbols-rounded text-3xl">
            {currentChapter?.id === chapterData.id && isPlaying ? 'pause_circle' : 'play_circle'}
          </span>
          {currentChapter?.id === chapterData.id && isPlaying ? 'Mettre en pause' : 'Écouter l\'enseignement'}
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10 font-serif italic text-lg leading-relaxed text-white/80">
        
        {/* 1. LE REPENTIR - TEXTE INTÉGRAL */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
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
            Nous devons donc nous efforcer de nous faire à cette idée de la mort qui nous guette à tout instant. Nous devons prier le Tout-Puissant de nous aider à cela et de nous permettre de garder la foi jusqu’à la fin de nos jours « Amine ».
          </p>
          <div className="text-center py-4">
             <p className="font-amiri text-4xl text-gold">آمِينَ</p>
          </div>
        </motion.section>

        {/* 2. SIGNES PRÉCURSEURS - TEXTE INTÉGRAL */}
        <motion.section {...fadeInUp} className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-8">
          <h2 className="text-gold font-black text-xs uppercase tracking-[0.3em] not-italic font-sans">DES SIGNES PRÉCURSEURS DE LA FIN DU MONDE</h2>
          <p>
            Nous vivons dans un monde finissant. S’il reste encore du temps à l’humanité, c’est un temps négligeable. Et le temps d’une vie est encore beaucoup plus négligeable. Pendant la durée de sa courte vie terrestre, l’homme ne peut disposer que de peu d’années pendant lesquelles il peut réaliser quelque chose, car il faut déduire de cette vie la période de l’enfance et celle de la vieillesse, durant lesquelles on est à la remorque des autres.
          </p>
          <p>
            Nous ne disposons donc que d’un petit laps de temps, dont nous disposons est entrecoupé par des empêchements de maladies diverses et par nos inévitables activités profanes. Si on déduit du temps disponible les moments d’empêchement, les moments que nous prennent les maladies, les moments que nous consacrons aux activités profanes, il ne nous restera que très peu de temps à consacrer aux dévotions ; et ce sont ces moments de dévotions qui nous permettent de recueillir assez de viatique pour notre séjour dans l’au-delà, c’est la raison pour laquelle nous devons redoubler de vigilance ici-bas.
          </p>
          <p>
            La vie dans l’au-delà ne connaît pas de limite temporelle et nous nous y acheminons allégrement, nous y sommes presque.
          </p>
          <p>
            Voilà pourquoi nous avons rassemblé les conseils ci-dessous pour permettre à tout le monde d’essayer de rattraper le temps perdu et profiter au maximum du peu de temps qu’il nous reste à vivre.
          </p>
        </motion.section>

        {/* 3. RECOMMANDATIONS RÉMISSION - TOUT LE TEXTE DÉTAILLÉ */}
        <section className="space-y-12">
          <div className="flex items-center gap-6 px-4">
            <h2 className="text-xs font-black text-gold uppercase tracking-[0.4em] italic leading-tight">RECOMMANDATIONS DONT L’OBSERVATION ENTRAÎNE LA RÉMISSION DES PÉCHÉS COMMIS ET/OU À COMMETTRE</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>
          
          <p className="font-bold text-white text-center italic px-8">"Notre séjour dans l’au-delà est éternel et il n’y aura jamais assez de viatique pour cette vie éternelle."</p>

          <div className="space-y-8">
            
            {/* Samedi au Dimanche */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
              <p>
                Si on effectue la nuit du samedi au dimanche vingt rakas avec pour chacun d’eux la « Fatiha » suivie de cinquante « Koul houwa Allahou » (1 fois), « Falahi » (1 fois) et « Nâssi » (1 fois), qu’on dit ce qui suit après le salut final : « Allahouma ikhfirli wali walidaya » (100 fois), puis « Allahouma Sali hala sayidina Mouhamadine wa salim » (100 fois), et enfin ceci :
              </p>
              <div className="bg-black/40 p-8 rounded-2xl border border-white/5 space-y-6">
                <p className="font-amiri text-xl md:text-2xl text-white text-right leading-relaxed dir-rtl">
                  تَبَرَّأْتُ مِنْ حَوْلِي وَقُوَّتِي وَالْتَجَأْتُ إِلَى حَوْلِ اللهِ وَقُوَّتِهِ وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ آدَمَ صَفْوَةُ اللهِ وَفِطْرَتُهُ وَإِبْرَاهِيمَ خَلِيلُ اللهِ عَزَّ وَجَلَّ وَمُوسَى كَلِيمُ اللهِ تَعَالَى وَعِيسَى رُوحُ اللهِ سُبْحَانَهُ وَمُحَمَّدًا حَبِيبُ اللهِ وَجَلَّ صَلَوَاتُ اللهِ وَتَسْلِيمَاتُهُ عَلَيْهِ وَعَلَيْهِمْ أَجْمَعِينَ
                </p>
                <p className="text-white/40 text-xs font-sans not-italic">« Tabarreuh tou mine awly wakhouwati waltadjah tou ilâ awly lâhi wakhouwatihî wa ach hadou anna lâhi lâha ila lâhou wa ach hadou anna Adamasafwatou lâhi wa fitratouhô wa Ibrahim Khalilou lâhi haza wadiala wa Moussa kalimoul lahi tahala wahissarouhou lâhi soubhanahou wa Mouhamadane habibou lâhi wa diala salawatou lahi wa taslimâtouhô haleyhi wa haleyhime adjimahîne » ;</p>
              </div>
              <p className="text-emerald-400 font-bold">on bénéficiera alors de bienfaits aussi importants en qualité que le nombre des créatures le jour du Jugement dernier ; on ne rencontrera pas de difficultés jusqu’à notre entrée au paradis.</p>
            </motion.div>

            {/* Dimanche Journée */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
              <p>
                Celui qui effectue dans la journée du dimanche quatre rakas avec pour chacun d’eux la « Fatiha » suivie du verset « Amana rassoula » jusqu’à la fin de la sourate bénéficiera de bénédictions égales en quantité au nombre des Nassaranes (Européens), de bénédictions dont bénéficie un Prophète. Il bénéficiera aussi des bienfaits dus à quelqu’un qui a fait deux fois le pèlerinage à la Mecque. Chaque raka lui procurera mille bienfaits ; pour chaque lettre de sourate et versets récités, on lui bâtira une maison en étage au paradis.
              </p>
            </motion.div>

            {/* Dimanche après Tisbar */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
              <p>Celui qui effectue 4 rakas le dimanche après la prière obligatoire du Tisbar (14 h) et les rakas traditionnels consécutifs à cette prière :</p>
              <ul className="space-y-4 list-disc ml-6 text-white/70">
                <li>pour le 1er raka, la « Fatiha » suivie de la sourate « Sadjadati » ;</li>
                <li>pour le 2ᵉ raka, la « Fatiha » suivie de la sourate « Moulki » ;</li>
                <li>pour le 3ᵉ et le 4ᵉ raka, la « Fatiha » suivie de la sourate « Dioum hati ».</li>
              </ul>
              <p>Tout vœu qu’il formulera après le salut final, Dieu l’exaucera et il conservera la foi jusqu’à la mort.</p>
            </motion.div>

            {/* Dimanche au Lundi */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
              <p>Celui qui prie dans la nuit du dimanche au lundi quatre rakas :</p>
              <ul className="space-y-2 list-none font-black text-gold text-xs uppercase tracking-widest">
                <li>• 1er raka, la « Fatiha » suivie de 10 « Ikhlass » ;</li>
                <li>• 2ᵉ raka, la « Fatiha » suivie de 20 « Ikhlass » ;</li>
                <li>• 3ᵉ raka, la « Fatiha » suivie de 30 « Ikhlass » ;</li>
                <li>• 4ᵉ raka, la « Fatiha » suivie de 40 « Ikhlass ».</li>
              </ul>
              <p>Qui récite après le salut final 75 « Ikhlass » et dit « Allahouma ikhfirlî wali walidaya » 75 fois et 75 fois « Salatou alal Nabi », il formule ses vœux et Dieu les exaucera.</p>
              <div className="pt-6 border-t border-white/5 space-y-6">
                <p>De même, celui qui effectue pour la même période deux rakas avec pour chacune la « Fatiha » suivie de 15 « Ikhlass » et qui, après le salut final, récite 15 fois le verset « Ayatoul Koursiyou » et dit :</p>
                <div className="bg-black/40 p-6 rounded-2xl text-right">
                    <p className="font-amiri text-2xl text-white dir-rtl">أَسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لا إِلَهَ إِلا هُوَ الحَيُّ القَيُّومُ</p>
                    <p className="text-white/40 text-[10px] font-sans not-italic mt-2 uppercase tracking-widest">« Astakhfiroulahal hazimaleuzi ilaha ila houwal hayal khayôma » (15 fois),</p>
                </div>
                <p>Dieu l’enverra parmi ceux qui vont au Paradis, même s’il était destiné à l’enfer. Le Tout-Puissant le rendra heureux le jour du Jugement dernier, l’absoudra à la Mecque et lui accordera les bienfaits dus à celui qui aura effectué le pèlerinage à la Mecque et le petit pèlerinage (Oumra), et ce pour chaque lettre contenue dans le verset de « Ayatoul Koursiyou ». En outre, Dieu accordera les bienfaits dont bénéficiera un combattant tombé au cours d’une guerre sainte.</p>
              </div>
            </motion.div>

            {/* Lundi */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
              <p>Celui qui effectue dans la matinée du lundi (10 h-11 h) deux rakas avec pour chacun d’eux la « Fatiha » suivie du verset « Ayatoul Koursiyou » (1 fois), de la sourate « Ikhlass » (1 fois), de la sourate « Falahi » (1 fois) et de la sourate « Nâssi » (1 fois), après le salut final dit :</p>
              <div className="bg-black/40 p-6 rounded-2xl text-right space-y-4">
                 <p className="font-amiri text-xl text-white dir-rtl">أَسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لا إِلَهَ إِلا هُوَ الحَيُّ القَيُّومُ وَأَتُوبُ إِلَيْهِ (١٠ مَرَّاتٍ)</p>
                 <p className="font-amiri text-xl text-white dir-rtl leading-relaxed italic">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ (١٠ مَرَّاتٍ)</p>
              </div>
              <p>« Astakhfiroula al azima leuzi lahi laha ila houwal hayal khayôma wa atôbou ileyhi » (10 fois), « Salatou ala Nabi » (10 fois) ; Dieu le rendra heureux le jour du Jugement et lui pardonnera tous ses péchés.</p>
              <p className="pt-6 border-t border-white/5 text-white/60">De même, celui qui effectue pendant la période du lundi 12 rakas avec pour chacun la « Fatiha » suivie du verset « Ayatoul Koursiyou » (1 fois), et après le salut final récite la sourate « Koul houwa Allahou » (12 fois) et « Astakhfiroulaha » (12 fois), le jour du Jugement dernier, Dieu ordonnera à un ange d’aller le chercher dans la foule en l’appelant par son vrai nom suivi de ceux de ses parents ; lorsque l’intéressé aura répondu, l’ange lui dira de venir prendre sa récompense des mains de Dieu. On le vêtira alors de mille vêtements. On lui donnera un récipient d’or, on lui adjoindra cent mille anges portant chacun un cadeau (hadiya) à lui donner et l’accompagnant à travers mille propriétés sises au paradis et qui lui seront attribuées.</p>
            </motion.div>

            {/* Mardi */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
              <p>Celui qui effectue dans la nuit du lundi au mardi 12 rakas avec pour chacun la « Fatiha » suivie de la sourate « Iza dja-â » (5 fois), le Tout-Puissant construira à son intention une maison (7 fois) plus grande que la planète Terre.</p>
              <p>Celui qui effectue le mardi dans la deuxième moitié de la journée 10 rakas avec pour chacun d’eux la « Fatiha » et le verset « Ayatoul Koursiyou » (1 fois) et la sourate « Koul houwa Allahou » (3 fois), on ne lui enregistrera aucun péché dans les soixante-dix jours qui suivent et s’il meurt dans cette période de 70 jours, il sera considéré comme quelqu’un qui a laissé sa vie dans une guerre sainte ; il sera également absous des péchés commis pendant 70 ans.</p>
            </motion.div>

            {/* Mercredi */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
              <p>Celui qui effectue dans la nuit du mardi au mercredi deux rakas : pour le premier, la « Fatiha » (10 fois) ; pour le deuxième, la « Fatiha » suivie de la sourate « Nâssi » (10 fois), de chacun des sept cieux viendront 70 000 anges pour comptabiliser en son nom des bénédictions, et ce jusqu’au Jugement dernier.</p>
              <p>Celui qui effectue dans la matinée du mercredi 12 rakas avec pour chacun d’eux la « Fatiha » suivie du verset « Ayatoul Koursiyou » (1 fois), la sourate « Ikhlass » (3 fois), « Falahi » (3 fois), « Nâssi » (3 fois), il sera absous de tous ses péchés, il sera préservé des épreuves de la tombe, de l’obscurité de la tombe, de son exiguïté, de l’angoisse du Jugement dernier et il bénéficiera des bénédictions dues aux dévotions d’un Prophète.</p>
            </motion.div>

            {/* Jeudi */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
              <p>Celui qui effectue dans la nuit du mercredi au jeudi, entre la prière du « Maghreb » et celle du « Icha », des sourates « Fatiha » (1 fois) suivie du verset « Ayatoul Koursiyou » (5 fois), des sourates « Ikhlass », « Falahi », « Nâssi » (5 fois chacune), et qui après le salut final dit : « Astakhfiroulahil azimal leuzi la ilahaila houwal hayol khayôma wa atôbou ileyhi » (15 fois) et qui dédie le tout à ses parents (père et mère), il sera considéré comme quelqu’un qui a accompli tous les devoirs à leur égard, même s’il les avait négligés auparavant. Il serait considéré en outre comme quelqu’un qui est mort au cours d’une guerre sainte.</p>
              <p>Celui qui effectue 2 rakas le jeudi entre la prière de 14 h et celle de 17 h : pour le premier raka, la « Fatiha » suivie du verset « Ayatoul Koursiyou » (100 fois) ; pour le deuxième raka, la « Fatiha » suivie de « Ikhlass » (100 fois) après la Fatiha, et qui après le salut final dit (100 fois) « Salatou ala Nabi », il bénéficiera des bénédictions dues à quelqu’un qui a jeûné pendant les mois de « Radjab », de « Shabane » et de « Ramadan », ainsi que des bienfaits de celui qui a effectué le pèlerinage à la Mecque et encore des bienfaits dus à tous les musulmans réunis.</p>
            </motion.div>

            {/* Vendredi */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6">
              <p>Celui qui effectue 2 rakas dans la nuit du jeudi au vendredi avec pour chaque raka la « Fatiha » suivie de la sourate « Izazoul Zilati » (15 fois), Dieu le préservera des épreuves de la tombe.</p>
              <p>De même, celui qui effectue 12 rakas ce même jour, après la prière du Maghreb, avec pour chacun d’eux la « Fatiha » suivie de la sourate « Ikhlass » (10 fois), il sera considéré comme quelqu’un qui s’est adonné à des dévotions pendant 12 ans, au cours desquels il jeûne pendant le jour et passe la nuit à prier.</p>
              <p>Pendant cette nuit toujours, celui qui effectue 10 rakas après les 4 rakas obligatoires de la prière de « Guéwé » et des 2 rakas traditionnels du « Chafa », avec pour chacun d’eux la « Fatiha » suivie des sourates « Ikhlass » (1 fois), « Falakhi » (1 fois), « Nâssi » (1 fois), et ce avant le raka du « Wîtr », il sera considéré comme celui qui a toujours honoré la nuit du « Laylatoul Khadre ».</p>
              <div className="pt-6 border-t border-white/5 space-y-4">
                <p>Celui qui prie 2 rakas le vendredi aussitôt après que le soleil aura entamé son parcours, il lui sera pardonné deux cents péchés graves et il bénéficiera de deux cents bénédictions. De même, celui qui effectue 4 rakas se verra attribuer quatre cents grades (Daradia) au paradis. Celui qui effectue 8 rakas verra son grade relevé de huit cents fois. Celui qui effectue 12 rakas verra son grade relevé 1 200 fois, il lui sera pardonné un nombre égal de péchés graves, il bénéficiera aussi d’un nombre égal de bénédictions.</p>
              </div>
              <ul className="space-y-4 text-white/70">
                <li>• Celui qui, après la prière de Fadjar faite en commun, reste sur place pour invoquer le nom de Dieu jusqu’au lever du soleil se verra octroyer 70 grandes bénédictions supplémentaires.</li>
                <li>• Si on effectue la prière du Tisbar en commun, on se verra attribuer 50 grades supplémentaires.</li>
                <li>• Celui qui effectue ce même jour la prière de « Asr » en commun aura les mêmes faveurs que celui qui a affranchi 8 esclaves.</li>
                <li>• Celui qui effectue ce même jour la prière du Maghreb en commun aura les mêmes faveurs que celui qui a effectué le grand et le petit pèlerinage (Oumra).</li>
              </ul>
              <div className="p-6 bg-gold/5 rounded-2xl border border-gold/10 space-y-4">
                <p>De même, celui qui effectue le vendredi entre le « Zohr » et le « Asr » deux rakas, le premier avec la sourate « Fatiha » suivie de « Ayatoul Koursiyou » (1 fois), et de la sourate « Falakhi » (20 fois) ; pour la 2ᵉ raka, la « Fatiha » suivie de la sourate « Ikhlass » (1 fois), de la sourate « Falakhi » (20 fois), et qui après le salut final dit ceci :</p>
                <div className="bg-black/40 p-4 rounded-xl text-right">
                    <p className="font-amiri text-xl text-white dir-rtl">لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ العَلِيِّ العَظِيمِ (٥٠ مَرَّةً)</p>
                </div>
                <p>« Laa hawla wala khouwata ila bilahil haliijil hazimi » (50 fois), il verra avant sa mort le Tout-Puissant en rêve, ou sa place au paradis, ou alors un tiers le verra et le lui dira.</p>
              </div>
              <p className="pt-6">De même, celui qui effectue le même jour deux rakas après le lever du soleil avec pour la première raka la « Fatiha » suivie de la sourate « Falakhi », pour la deuxième raka la « Fatiha » suivie de la sourate « Nâssi » ; après le salut final, il récite le verset « Ayatoul Koursiyou » (7 fois) ; il effectue en outre 8 rakas de 2 saluts (salam), avec pour chaque raka la « Fatiha » suivie de la sourate « Ikhlass » (25 fois), après le salut final il dit : « Laa hawla wala khouwata ila bilahi aliyil hazimi » (70 fois) ; avant de quitter le lieu de prière, il sera absous de tous ses péchés graves ainsi que de ceux de ses parents (père-mère) si ces derniers sont musulmans ; rien ne l’empêchera d’aller au Paradis.</p>
            </motion.div>

            {/* Samedi Final */}
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 space-y-6 pb-12">
              <p>Celui qui effectue dans la nuit du vendredi au samedi, après la prière traditionnelle du Maghreb, 12 rakas se verra bâtir une grande maison au Paradis. Il sera considéré comme quelqu’un qui a donné à manger à leur faim tous les musulmans. En outre, il mourra avec la foi et se verra dans l’immédiat absous de tous ses péchés.</p>
              <p>Celui qui effectue le samedi 4 rakas avec pour chacun la « Fatiha » suivie de la sourate « Khoul ya Ayouhal Kâfirouna » (3 fois) et qui, après le salut final, récite ou lit le verset « Ayatoul Koursiyou » (1 fois), il se verra attribuer pour chacune des lettres du verset « Ayatoul Koursiyou » la récompense liée au grand et au petit pèlerinage complet. En plus, il bénéficiera des bienfaits que procure une année au cours de laquelle on aura jeûné pendant les journées et passé les nuits à prier ; il aura aussi les bienfaits dus à un combattant tué au cours d’une guerre sainte. Le jour du Jugement dernier, Dieu l’abritera dans « Arras » (la terre de Dieu) en compagnie des Prophètes et des combattants tués au cours d’une guerre sainte.</p>
            </motion.div>

          </div>
        </section>

      </div>

      {/* NAVIGATION PERSISTANTE */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-[95%] md:max-w-md font-sans">
        <button 
          onClick={() => router.push('/partie/17/g')} 
          className="flex-1 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Précédent
        </button>
        <button 
          onClick={() => router.push('/partie/18')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-widest font-black shadow-gold/20 shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          Suivant
        </button>
      </div>
    </main>
  );
}