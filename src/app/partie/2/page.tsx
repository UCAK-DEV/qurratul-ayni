'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function PrefacePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#010302] text-white pt-24 pb-48 px-6 selection:bg-gold/30">
      
      {/* BACKGROUND ORNAMENTAL */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-full h-[60vh] bg-gradient-to-b from-gold/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER MINIMALISTE */}
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-gold/30" />
              <span className="text-gold tracking-[0.5em] text-[10px] uppercase font-bold">
                Introduction de l'ouvrage
              </span>
              <span className="h-[1px] w-12 bg-gold/30" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-8">
              PRÉFACE & <br />
              <span className="gold-gradient-text">AVANT-PROPOS</span>
            </h1>
          </motion.div>
        </header>

        <div className="space-y-32">
          
          {/* SECTION : PRÉFACE */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/4">
                <h2 className="text-gold text-[10px] tracking-[0.4em] font-bold uppercase sticky top-32">
                  La Genèse
                </h2>
              </div>
              <div className="md:w-3/4 space-y-8 text-white/80 font-serif text-lg md:text-xl leading-relaxed">
                <div className="text-gold-light italic border-b border-white/5 pb-6 mb-8">
                  <p className="text-2xl font-amiri mb-2" dir="rtl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</p>
                  "Au nom d'Allah, le Tout-Miséricordieux, le Très-Miséricordieux !"
                </div>
                <p>
                  C’est par le souci de réconcilier le spirituel et le temporel que le Dahira Safinatoul Lamane a été fondé par les enseignants de la commune de Kaolack. Le pragmatisme mouride a amené le Dahira à s’atteler à l’essentiel dès sa création.
                </p>
                <p>
                  C’est ainsi qu’ils entreprirent la traduction du Livre de Serigne Souhaïbou Mbacké, fils de Khadim Rassoul, Fondateur du Mouridisme. Par ce travail le Dahira souhaite détruire le mur qui se dressait devant les francophones en ce qui concerne ce Trésor : cette encyclopédie, ce recueil de rituels de sciences mystiques et de soufisme.
                </p>
                <p>
                  C’est un livre que l’on peut dénommer le Nid parce que d’abord c’est un abri ; il aura été le fruit de recherches entreprises à travers des livres rares, chers et anciens. Il contient des connaissances et des secrets que les chefs religieux de l’époque considéraient comme leur patrimoine personnel.
                </p>
                <div className="pt-10 flex items-center gap-6">
                  <div className="h-12 w-[1px] bg-gold" />
                  <div>
                    <p className="font-bold text-white tracking-tight">Docteur Khadim Awa Balla Mbacké</p>
                    <p className="text-[10px] text-gold/60 uppercase tracking-widest">Pédiatre à l’Hôpital de Kaolack</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SECTION : AVANT-PROPOS */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 shadow-inner"
          >
            <h2 className="text-gold text-[10px] tracking-[0.4em] font-bold uppercase mb-12 text-center">
              Note de Traduction
            </h2>
            <div className="max-w-2xl mx-auto space-y-8 text-white/70 text-lg leading-relaxed text-center md:text-left">
              <p>
                L’expérience non linguistique d’une chose est un préalable indispensable à la compréhension de cette chose. Voilà qui en dit long sur la complexité de notre entreprise de traduction, l’exactitude de la traduction étant intimement liée à la maîtrise des concepts de départ et de celles d’arrivée.
              </p>
              <p>
                Seul le vif intérêt que le livre a suscité en nous nous a poussés à vouloir en faire profiter à ceux d’entre nos coreligionnaires qui n’ont pas eu la chance de pouvoir lire le « WOLOFAL » (texte wolof écrit à partir de l’alphabet arabe) dans le texte.
              </p>
              <blockquote className="bg-white/5 p-8 rounded-2xl border-l-2 border-gold italic text-white/90 font-serif">
                "Nous ne prétendons nullement proposer une traduction parfaite... Inutile donc de préciser que nous avons trahi le texte original. Pour limiter les dégâts, nous avons quelquefois laissé certains vocables non traduits."
              </blockquote>
            </div>
          </motion.section>

          {/* SECTION : OBJECTIFS ET DOU'A */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pb-20"
          >
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/4">
                <h2 className="text-gold text-[10px] tracking-[0.4em] font-bold uppercase sticky top-32">
                  L'Essentiel
                </h2>
              </div>
              <div className="md:w-3/4 space-y-8 text-white/80 font-serif text-lg md:text-xl leading-relaxed">
                <p>
                  Nous nous proposons de rassembler dans ce livre, tout ce qu’il n’est pas permis d’ignorer à une personne majeure. Nous commençons par attester l’unicité de Dieu et rappeler ses attributs : croire au jugement dernier, aux anges, aux livres révélés et au Prophète Mouhammad (PSL).
                </p>
                <p>
                  Ce recueil détaille les devoirs dont toute personne majeure doit s’acquitter : la prière rituelle, la purification, le pèlerinage, la Zakat, le jeûne, ainsi que les pratiques sociales comme le mariage, le baptême, et les règles de vie commune.
                </p>
                
                {/* BLOC DOU'A FINAL TRANSCRIT */}
                <div className="mt-16 p-10 rounded-[2.5rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 text-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-rounded text-8xl text-gold">auto_awesome</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-amiri text-gold-light mb-6 leading-loose" dir="rtl">
                    اللَّهُمَّ ثَبِّتْنَا عَلَى دِينِكَ الْإِسْلَامِ
                  </p>
                  <p className="text-xl text-gold/80 italic mb-4">
                    « Alahouma sabitna hala dinikal islami... »
                  </p>
                  <div className="h-[1px] w-12 bg-gold/30 mx-auto mb-4" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Puisse le Tout Puissant exaucer nos vœux.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>

      {/* NAVIGATION FLOTTANTE */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl z-50">
        <button 
          onClick={() => router.push('/partie/1')} 
          className="px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all"
        >
          Précédent
        </button>
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        <button 
          onClick={() => router.push('/partie/3')} 
          className="px-8 py-3 bg-gold text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 transition-all shadow-lg"
        >
          Commencer l'étude
        </button>
      </nav>
    </main>
  );
}