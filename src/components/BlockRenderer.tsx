'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ContentBlock } from '@/types/content';
import { useTheme } from '@/context/ThemeContext';
import { useBookmarks } from '@/context/BookmarkContext';

interface BlockRendererProps {
  blocks: ContentBlock[];
  slug?: string;
  chapterTitle?: string;
}

// Shared bookmark button
const BookmarkBtn: React.FC<{
  id: string;
  isBookmarked: boolean;
  onToggle: () => void;
}> = ({ id, isBookmarked, onToggle }) => (
  <button
    onClick={onToggle}
    className={`absolute right-6 top-6 p-3 rounded-xl border transition-all opacity-0 group-hover:opacity-100 z-20 ${
      isBookmarked
        ? 'bg-gold border-gold text-emerald-950 opacity-100'
        : 'bg-white/5 border-white/10 text-gold hover:bg-gold/10'
    }`}
    aria-label={isBookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
  >
    <span className="material-symbols-rounded text-xl">
      {isBookmarked ? 'bookmark_added' : 'bookmark_add'}
    </span>
  </button>
);

// Section label with decorative line
const SectionLabel: React.FC<{ titleFr?: string; titleAr?: string; accent?: string }> = ({
  titleFr,
  titleAr,
  accent = 'text-gold',
}) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="h-5 w-0.5 bg-gold rounded-full" />
    <h2 className={`text-xs font-black uppercase tracking-[0.35em] ${accent}`}>{titleFr}</h2>
    <div className="h-[1px] flex-1 bg-white/5" />
    {titleAr && (
      <span className="text-lg font-amiri text-gold/40" lang="ar" dir="rtl">
        {titleAr}
      </span>
    )}
  </div>
);

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks, slug = '', chapterTitle = '' }) => {
  const { readingSettings } = useTheme();
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

  const textStyle = {
    fontSize: `${readingSettings.fontSize}%`,
    lineHeight: readingSettings.lineHeight,
  };

  const handleBookmarkToggle = (id: string, text: string) => {
    if (isBookmarked(id)) {
      removeBookmark(id);
    } else {
      addBookmark({
        id,
        text: text.substring(0, 150) + (text.length > 150 ? '...' : ''),
        slug,
        chapterTitle,
      });
    }
  };

  return (
    <div className="space-y-10">
      {blocks.map((block, index) => {
        const blockId = `${slug}-${index}`;

        switch (block.type) {
          // ─────────────────────────────────────────────────────────────────────
          case 'bio_header':
            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="lg:col-span-5 lg:sticky lg:top-32"
                >
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 group">
                    <Image
                      src={block.content.image}
                      alt={block.content.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010302] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8">
                      <p className="text-gold font-serif italic text-2xl tracking-tight">
                        {block.content.years}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="lg:col-span-7 space-y-20">
                  <section className="space-y-8">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-4">
                      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        {block.content.name.split(' ').slice(0, 3).join(' ')}{' '}
                        <br />
                        <span className="gold-gradient-text italic font-serif">
                          {block.content.name.split(' ').slice(3).join(' ')}
                        </span>
                      </h2>
                      <div className="h-1 w-20 bg-gold" />
                    </motion.div>
                    <div className="space-y-12">
                      {block.content.sections.map((section: string, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="relative group"
                        >
                          <span
                            className="absolute -left-8 top-0 text-gold/10 text-6xl font-black opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                            aria-hidden="true"
                          >
                            0{idx + 1}
                          </span>
                          <p
                            className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic hover:text-white transition-colors"
                            style={textStyle}
                          >
                            &quot;{section}&quot;
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            );

          // ─────────────────────────────────────────────────────────────────────
          // TEXT BLOCK — bord gauche doré + fond émeraude subtil
          case 'text_block':
            return (
              <div key={index} className="space-y-4">
                {block.content.map((text: string, idx: number) => {
                  const itemId = `${slug}-${index}-${idx}`;
                  return (
                    <motion.section
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      className="relative p-8 md:p-10 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 border-l-2 border-l-gold/50 hover:bg-emerald-950/30 transition-colors group"
                      aria-label={`Enseignement ${idx + 1}`}
                    >
                      <BookmarkBtn
                        id={itemId}
                        isBookmarked={isBookmarked(itemId)}
                        onToggle={() => handleBookmarkToggle(itemId, text)}
                      />
                      <span
                        className="absolute left-6 top-6 text-5xl font-black text-white/[0.03] group-hover:text-gold/[0.05] transition-colors select-none pointer-events-none"
                        aria-hidden="true"
                      >
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="max-w-2xl mx-auto">
                        <p
                          className="text-lg sm:text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic text-center"
                          style={textStyle}
                        >
                          &quot;{text}&quot;
                        </p>
                      </div>
                    </motion.section>
                  );
                })}
              </div>
            );

          // ─────────────────────────────────────────────────────────────────────
          // ARABIC CALL — halo doré animé
          case 'arabic_call':
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative py-10 flex flex-col items-center justify-center"
              >
                {/* Ambient glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-16 bg-gold/10 rounded-full blur-2xl animate-pulse" />
                </div>
                <p
                  className="relative font-amiri text-4xl md:text-5xl text-gold-light drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] text-center leading-loose"
                  lang="ar"
                  dir="rtl"
                >
                  {block.content}
                </p>
              </motion.div>
            );

          // ─────────────────────────────────────────────────────────────────────
          // SUMMARY GRID
          case 'summary_grid': {
            const chapterIdFromSlug = slug.split('-')[0];
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                {block.content.map((item: any, idx: number) => (
                  <motion.div
                    key={item.letter}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() =>
                      (window.location.href = `/partie/${chapterIdFromSlug}/${item.letter.toLowerCase()}`)
                    }
                    className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden min-h-[280px] flex flex-col justify-between"
                  >
                    <div className="relative z-10 flex justify-between items-start mb-6">
                      <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-gold group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                        <span className="material-symbols-rounded text-2xl">{item.icon}</span>
                      </div>
                      <span
                        className="font-amiri text-2xl text-gold/30 group-hover:text-gold/70 transition-colors"
                        lang="ar"
                        dir="rtl"
                      >
                        {item.ar}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <span className="text-[9px] font-bold text-gold tracking-widest uppercase opacity-60 block mb-1">
                        Section {item.letter}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-3">
                        {item.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {item.sub.map((sub: string, sIdx: number) => (
                          <li
                            key={sIdx}
                            className="text-white/50 group-hover:text-white/60 text-sm flex items-center gap-2.5"
                          >
                            <span className="w-1 h-1 bg-gold/40 rounded-full flex-shrink-0" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span
                      className="absolute -bottom-8 -right-4 text-[180px] font-black opacity-[0.025] pointer-events-none select-none italic"
                      style={{ WebkitTextStroke: '1px white' }}
                      aria-hidden="true"
                    >
                      {item.letter}
                    </span>
                    {/* Hover top-line accent */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            );
          }

          // ─────────────────────────────────────────────────────────────────────
          // PROCEDURE — numéros en grand, style "étapes"
          case 'procedure':
            return (
              <section key={index} className="space-y-6">
                <SectionLabel titleFr={block.titleFr} titleAr={block.titleAr} />
                <div className="relative p-6 md:p-12 rounded-2xl bg-white/[0.02] border border-white/5 group overflow-hidden">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />
                  <BookmarkBtn
                    id={blockId}
                    isBookmarked={isBookmarked(blockId)}
                    onToggle={() => handleBookmarkToggle(blockId, block.content.join(' '))}
                  />
                  <div className="space-y-6">
                    {block.content.map((step: string, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.06 }}
                        className="flex gap-5 group/item border-b border-white/5 pb-6 last:border-0 last:pb-0 items-start"
                      >
                        {/* Step number bubble */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                          <span className="text-gold font-black text-sm">{(idx + 1).toString().padStart(2, '0')}</span>
                        </div>
                        <p
                          className="text-base md:text-lg text-white/60 group-hover/item:text-white/85 transition-colors font-serif italic leading-relaxed tracking-tight pt-1.5"
                          style={textStyle}
                        >
                          {step}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            );

          // ─────────────────────────────────────────────────────────────────────
          // COMPARISON — deux colonnes distinctes visuellement
          case 'comparison':
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {block.content.map((col: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-8 md:p-10 rounded-2xl space-y-6 relative overflow-hidden ${
                      idx === 0
                        ? 'bg-emerald-950/25 border border-emerald-700/25'
                        : 'bg-amber-950/20 border border-gold/20'
                    }`}
                  >
                    {/* Top colored stripe */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 ${
                        idx === 0
                          ? 'bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent'
                          : 'bg-gradient-to-r from-transparent via-gold/50 to-transparent'
                      }`}
                    />
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <div>
                        <h3
                          className={`${
                            idx === 0 ? 'text-emerald-400' : 'text-gold'
                          } font-black text-[11px] uppercase tracking-widest`}
                        >
                          {col.titleFr}
                        </h3>
                        {idx === 0 ? (
                          <span className="text-[9px] text-emerald-500/50 uppercase tracking-wider font-bold">Obligatoire</span>
                        ) : (
                          <span className="text-[9px] text-gold/40 uppercase tracking-wider font-bold">Recommandé</span>
                        )}
                      </div>
                      {col.titleAr && (
                        <span
                          className={`font-amiri text-2xl ${idx === 0 ? 'text-emerald-500/50' : 'text-gold/50'}`}
                          lang="ar"
                          dir="rtl"
                        >
                          {col.titleAr}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-4 text-white/65 font-serif italic text-base md:text-lg leading-snug" style={textStyle}>
                      {col.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              idx === 0 ? 'bg-emerald-500/50' : 'bg-gold/50'
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            );

          // ─────────────────────────────────────────────────────────────────────
          // SPLIT TEXT — label sticky à gauche, texte à droite
          case 'split_text':
            return (
              <motion.section
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative space-y-20"
              >
                {block.content.map((section: any, idx: number) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="md:w-1/4">
                      <h2 className="text-gold text-[10px] tracking-[0.4em] font-bold uppercase md:sticky md:top-32">
                        {section.label}
                      </h2>
                    </div>
                    <div className="md:w-3/4 space-y-6 text-white/80 font-serif text-base md:text-lg leading-relaxed">
                      {section.arabic && (
                        <div className="p-5 rounded-xl bg-gold/[0.06] border border-gold/15 text-gold-light italic border-b-0">
                          <p className="text-2xl font-amiri mb-2 leading-loose" lang="ar" dir="rtl">
                            {section.arabic}
                          </p>
                          {section.translation && (
                            <p className="text-sm text-gold/70 italic mt-2">&ldquo;{section.translation}&rdquo;</p>
                          )}
                        </div>
                      )}
                      {Array.isArray(section.paragraphs)
                        ? section.paragraphs.map((p: string, i: number) => (
                            <p key={i} style={textStyle}>
                              {p}
                            </p>
                          ))
                        : <p style={textStyle}>{section.paragraphs}</p>}
                      {section.signature && (
                        <div className="pt-8 flex items-center gap-5">
                          <div className="h-12 w-[1px] bg-gold" />
                          <div>
                            <p className="font-bold text-white tracking-tight">{section.signature.name}</p>
                            <p className="text-[10px] text-gold/60 uppercase tracking-widest">{section.signature.role}</p>
                          </div>
                        </div>
                      )}
                      {section.quote && (
                        <blockquote
                          className="relative bg-white/[0.04] p-6 rounded-2xl border-l-2 border-gold italic text-white/85 font-serif overflow-hidden"
                          style={textStyle}
                        >
                          <span className="absolute -top-4 -left-2 text-8xl text-gold/10 font-serif leading-none select-none pointer-events-none">&ldquo;</span>
                          {section.quote}
                        </blockquote>
                      )}
                      {section.footer_doua && (
                        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 text-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <p
                            className="relative text-3xl md:text-4xl font-amiri text-gold-light mb-5 leading-loose"
                            lang="ar"
                            dir="rtl"
                          >
                            {section.footer_doua.arabic}
                          </p>
                          <p className="relative text-lg text-gold/80 italic mb-3">
                            « {section.footer_doua.phonetic} »
                          </p>
                          <div className="h-[1px] w-12 bg-gold/30 mx-auto mb-3" />
                          <p className="relative text-[10px] uppercase tracking-[0.3em] text-white/40">
                            {section.footer_doua.translation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.section>
            );

          // ─────────────────────────────────────────────────────────────────────
          // TIMELINE — étapes chronologiques
          case 'timeline':
            return (
              <div key={index} className="space-y-8">
                {block.content.map((step: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="relative flex gap-8 group"
                  >
                    {/* Timeline spine */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className="w-11 h-11 rounded-xl border border-gold/30 flex items-center justify-center bg-gold/5 text-gold font-bold text-xs relative z-10 group-hover:bg-gold/10 group-hover:border-gold/60 transition-all">
                        {step.age}
                      </div>
                      <div className="w-px flex-1 bg-gradient-to-b from-gold/20 to-transparent mt-3" />
                    </div>
                    <div className="flex-1 pb-12">
                      <div className="p-6 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-gold font-black text-[10px] uppercase tracking-widest">
                            {step.title}
                          </span>
                          <span className="md:hidden text-gold/60 text-xs font-bold">{step.age} ans</span>
                        </div>
                        <p
                          className="text-base md:text-lg text-white/70 font-serif italic leading-relaxed"
                          style={textStyle}
                        >
                          &ldquo;{step.text}&rdquo;
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            );

          // ─────────────────────────────────────────────────────────────────────
          // QUOTE — grands guillemets en arrière-plan
          case 'quote':
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden"
              >
                {/* Decorative quote marks */}
                <span
                  className="absolute -top-6 -left-2 text-[120px] text-gold/[0.06] font-serif leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <span
                  className="absolute -bottom-10 -right-2 text-[120px] text-gold/[0.06] font-serif leading-none select-none pointer-events-none rotate-180"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div
                  className="relative max-w-4xl mx-auto text-white/65 font-serif italic text-base md:text-lg leading-relaxed space-y-5 text-justify"
                  style={textStyle}
                >
                  {Array.isArray(block.content)
                    ? block.content.map((p: string, i: number) => <p key={i}>{p}</p>)
                    : <p>{block.content}</p>}
                </div>
              </motion.div>
            );

          // ─────────────────────────────────────────────────────────────────────
          default:
            return null;
        }
      })}
    </div>
  );
};
