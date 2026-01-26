'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function PrefacePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#020504] text-white pt-24 pb-48 px-6">
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gold tracking-[0.6em] text-[10px] uppercase font-black mb-4 block"
        >
          Khouratoul Ayni — Introduction
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-4xl md:text-7xl font-bold bg-gradient-to-b from-gold-light to-gold bg-clip-text text-transparent mb-6"
        >
          PRÉFACE & AVANT-PROPOS
        </motion.h1>
        <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* SECTION : PREFACE */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
        >
          <h2 className="text-gold text-xs tracking-[0.3em] font-bold uppercase mb-8 border-b border-gold/20 pb-4">Préface</h2>
          <div className="space-y-6 text-white/80 font-serif text-lg leading-relaxed">
            <p className="italic text-gold-light/90">"Au nom d'Allah, le Tout-Miséricordieux, le Très-Miséricordieux !"</p>
            <p>
              C’est par le souci de réconcilier le spirituel et le temporel que le Dahira Safinatoul Lamane a été fondé par les enseignants de la commune de Kaolack. Le pragmatisme mouride a amené le Dahira à s’atteler à l’essentiel dès sa création.
            </p>
            <p>
              C’est ainsi qu’ils entreprirent la traduction du Livre de Serigne Souhaïbou Mbacké, fils de Khadim Rassoul, Fondateur du Mouridisme. Par ce travail le Dahira souhaite détruire le mur qui se dressait devant les francophones en ce qui concerne ce Trésor : cette encyclopédie, ce recueil de rituels de sciences mystiques et de soufisme.
            </p>
            <p>
              C’est un livre que l’on peut dénommer le Nid parce que d’abord c’est un abri ; il aura été le fruit de recherches entreprises à travers des livres rares, chers et anciens. Il contient des connaissances et des secrets que les chefs religieux de l’époque considéraient comme leur patrimoine personnel.
            </p>
            <div className="pt-6 border-t border-white/5">
              <p className="font-bold text-white">Docteur Khadim Awa Balla Mbacké</p>
              <p className="text-sm text-gold/60 uppercase tracking-widest">Pédiatre à l’Hôpital de Kaolack</p>
            </div>
          </div>
        </motion.section>

        {/* SECTION : AVANT-PROPOS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl bg-white/[0.02]"
        >
          <h2 className="text-gold text-xs tracking-[0.3em] font-bold uppercase mb-8 border-b border-gold/20 pb-4">Avant-Propos</h2>
          <div className="space-y-6 text-white/70 font-sans text-base md:text-lg leading-relaxed">
            <p className="font-amiri text-2xl text-gold-light text-center mb-6">BISMILAHI RAHMANI RAHIMI</p>
            <p>
              L’expérience non linguistique d’une chose est un préalable indispensable à la compréhension de cette chose. Voilà qui en dit long sur la complexité de notre entreprise de traduction, l’exactitude de la traduction étant intimement liée à la maîtrise des concepts de départ et de celles d’arrivée.
            </p>
            <p>
              Seul le vif intérêt que le livre a suscité en nous nous a poussés à vouloir en faire profiter à ceux d’entre nos coreligionnaires qui n’ont pas eu la chance de pouvoir lire le « WOLOFAL » (texte wolof écrit à partir de l’alphabet arabe) dans le texte.
            </p>
            <p className="bg-white/5 p-6 rounded-2xl border-l-4 border-gold italic">
              "Nous ne prétendons nullement proposer une traduction parfaite... Inutile donc de préciser que nous avons trahi le texte original. Pour limiter les dégâts, nous avons quelquefois laissé certains vocables non traduits."
            </p>
          </div>
        </motion.section>

        {/* SECTION : OBJECTIFS DU LIVRE */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
        >
          <h2 className="text-gold text-xs tracking-[0.3em] font-bold uppercase mb-8 border-b border-gold/20 pb-4">Objectifs de l'ouvrage</h2>
          <div className="space-y-6 text-white/80 font-serif text-lg leading-relaxed">
            <p>
              Nous nous proposons de rassembler dans ce livre, tout ce qu’il n’est pas permis d’ignorer à une personne majeure. Nous commençons par attester l’unicité de Dieu et rappeler ses attributs : croire au jugement dernier, aux anges, aux livres révélés et au Prophète Mouhammad (PSL).
            </p>
            <p>
              Ce recueil détaille les devoirs dont toute personne majeure doit s’acquitter : la prière rituelle, la purification, le pèlerinage, la Zakat, le jeûne, ainsi que les pratiques sociales comme le mariage, le baptême, et les règles de vie commune.
            </p>
            <div className="bg-gold/5 p-8 rounded-3xl border border-gold/20 mt-8">
              <p className="font-amiri text-2xl text-gold-light leading-loose text-center">
                « Alahouma sabitna hala dinikal islami... »
              </p>
              <p className="text-center text-[10px] uppercase tracking-widest text-white/40 mt-4">
                Puisse le Tout Puissant exaucer nos vœux.
              </p>
            </div>
          </div>
        </motion.section>

      </div>

      {/* NAVIGATION */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50 w-full max-w-md px-6">
        <button 
          onClick={() => router.push('/partie/1')} 
          className="flex-1 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all text-white/70"
        >
          Auteur
        </button>
        <button 
          onClick={() => router.push('/partie/3')} 
          className="flex-1 py-4 bg-gold text-emerald-950 rounded-full text-[10px] uppercase tracking-[0.2em] font-black shadow-lg hover:scale-105 transition-all"
        >
          Commencer l'étude
        </button>
      </div>
    </main>
  );
}