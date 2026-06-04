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

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks, slug = '', chapterTitle = '' }) => {
  const { readingSettings } = useTheme();
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  
  const textStyle = {
    fontSize: `${readingSettings.fontSize}%`,
    lineHeight: readingSettings.lineHeight
  };

  const handleBookmarkToggle = (id: string, text: string) => {
    if (isBookmarked(id)) {
      removeBookmark(id);
    } else {
      addBookmark({
        id,
        text: text.substring(0, 150) + (text.length > 150 ? '...' : ''),
        slug,
        chapterTitle
      });
    }
  };

  return (
    <>
      {blocks.map((block, index) => {
        const blockId = `${slug}-${index}`;
        switch (block.type) {
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
                        {block.content.name.split(' ').slice(0, 3).join(' ')} <br />
                        <span className="gold-gradient-text italic font-serif">{block.content.name.split(' ').slice(3).join(' ')}</span>
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
                          <span className="absolute -left-8 top-0 text-gold/10 text-6xl font-black opacity-0 group-hover:opacity-100 transition-opacity -z-10" aria-hidden="true">
                            0{idx + 1}
                          </span>
                          <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic hover:text-white transition-colors" style={textStyle}>
                            &quot;{section}&quot;
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            );

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
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.7, delay: idx * 0.05 }}
                      className="relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
                      aria-label={`Enseignement ${idx + 1}`}
                    >
                      <button 
                        onClick={() => handleBookmarkToggle(itemId, text)}
                        className={`absolute right-8 top-8 p-3 rounded-xl border transition-all opacity-0 group-hover:opacity-100 z-20 ${
                          isBookmarked(itemId) ? 'bg-gold border-gold text-emerald-950 opacity-100' : 'bg-white/5 border-white/10 text-gold hover:bg-gold/10'
                        }`}
                        aria-label="Ajouter aux favoris"
                      >
                        <span className="material-symbols-rounded text-xl">
                          {isBookmarked(itemId) ? 'bookmark_added' : 'bookmark_add'}
                        </span>
                      </button>

                      <span className="absolute left-8 top-8 text-6xl font-black text-white/[0.03] group-hover:text-gold/[0.05] transition-colors -z-10" aria-hidden="true">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="max-w-2xl mx-auto">
                        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic text-center" style={textStyle}>
                          &quot;{text}&quot;
                        </p>
                      </div>
                    </motion.section>
                  );
                })}
              </div>
            );

          case 'arabic_call':
             return (
               <p key={index} className="font-amiri text-4xl text-gold-light mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] text-center" lang="ar" dir="rtl">
                 {block.content}
               </p>
             );

          case 'summary_grid':
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {block.content.map((item: any, idx: number) => (
                  <motion.div
                    key={item.letter}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => window.location.href = `/partie/${block.chapterId}/${item.letter.toLowerCase()}`}
                    className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden min-h-[320px] flex flex-col justify-between"
                  >
                    <div className="relative z-10 flex justify-between items-start mb-6">
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-gold group-hover:scale-110 transition-transform duration-500">
                        <span className="material-symbols-rounded text-3xl">{item.icon}</span>
                      </div>
                      <span className="font-amiri text-3xl text-gold/40 group-hover:text-gold transition-colors" lang="ar" dir="rtl">{item.ar}</span>
                    </div>

                    <div className="relative z-10">
                      <span className="text-[10px] font-bold text-gold tracking-widest uppercase opacity-60">Section {item.letter}</span>
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors mb-4">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.sub.map((sub: string, sIdx: number) => (
                          <li key={sIdx} className="text-white/60 group-hover:text-white/60 text-sm flex items-center gap-3"><span className="w-1 h-1 bg-gold/40 rounded-full" />{sub}</li>
                        ))}
                      </ul>
                    </div>

                    <span className="absolute -bottom-10 -right-4 text-[200px] font-black opacity-[0.02] pointer-events-none select-none italic" style={{ WebkitTextStroke: '1px white' }}>{item.letter}</span>
                  </motion.div>
                ))}
              </div>
            );

          case 'procedure':
            return (
              <section key={index} className="space-y-12">
                <div className="flex items-center gap-6">
                  <h2 className="text-xs font-black text-gold uppercase tracking-[0.3em]">{block.titleFr}</h2>
                  <div className="h-[1px] flex-1 bg-white/5" />
                  {block.titleAr && <span className="text-xl font-amiri text-gold/40" lang="ar" dir="rtl">{block.titleAr}</span>}
                </div>
                <div className="p-8 md:p-16 rounded-[3rem] bg-white/[0.01] border border-white/5 relative group">
                  <button 
                    onClick={() => handleBookmarkToggle(blockId, block.content.join(' '))}
                    className={`absolute right-8 top-8 p-3 rounded-xl border transition-all opacity-0 group-hover:opacity-100 z-20 ${
                      isBookmarked(blockId) ? 'bg-gold border-gold text-emerald-950 opacity-100' : 'bg-white/5 border-white/10 text-gold hover:bg-gold/10'
                    }`}
                    aria-label="Sauvegarder la procédure"
                  >
                    <span className="material-symbols-rounded text-xl">
                      {isBookmarked(blockId) ? 'bookmark_added' : 'bookmark_add'}
                    </span>
                  </button>
                  <div className="space-y-8">
                    {block.content.map((step: string, idx: number) => (
                      <div key={idx} className="flex gap-8 group/item border-b border-white/5 pb-8 last:border-0">
                        <span className="text-gold font-black opacity-20 text-4xl leading-none">{(idx + 1).toString().padStart(2, '0')}</span>
                        <p className="text-lg md:text-xl text-white/60 group-hover/item:text-white transition-colors font-serif italic leading-relaxed tracking-tight" style={textStyle}>
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          case 'comparison':
             return (
               <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {block.content.map((col: any, idx: number) => (
                   <div key={idx} className={`p-12 rounded-[3rem] ${idx === 0 ? 'bg-emerald-500/[0.02] border border-emerald-500/20' : 'bg-gold/[0.02] border border-gold/20'} space-y-8`}>
                     <div className="flex justify-between items-center border-b border-white/5 pb-4">
                       <h3 className={`${idx === 0 ? 'text-emerald-500' : 'text-gold'} font-black text-[10px] uppercase tracking-widest`}>{col.titleFr}</h3>
                       {col.titleAr && <span className={`font-amiri text-2xl ${idx === 0 ? 'text-emerald-500/50' : 'text-gold/50'}`} lang="ar" dir="rtl">{col.titleAr}</span>}
                     </div>
                     <ul className="space-y-6 text-white/60 font-serif italic text-lg leading-snug" style={textStyle}>
                       {col.items.map((item: string, i: number) => (
                         <li key={i}>{item}</li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </div>
             );

          case 'split_text':
            return (
              <motion.section 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative space-y-32"
              >
                {block.content.map((section: any, idx: number) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/4">
                      <h2 className="text-gold text-[10px] tracking-[0.4em] font-bold uppercase sticky top-32">
                        {section.label}
                      </h2>
                    </div>
                    <div className="md:w-3/4 space-y-8 text-white/80 font-serif text-lg md:text-xl leading-relaxed">
                      {section.arabic && (
                        <div className="text-gold-light italic border-b border-white/5 pb-6 mb-8">
                          <p className="text-2xl font-amiri mb-2" lang="ar" dir="rtl">{section.arabic}</p>
                          {section.translation && `"${section.translation}"`}
                        </div>
                      )}
                      {Array.isArray(section.paragraphs) ? section.paragraphs.map((p: string, i: number) => (
                        <p key={i} style={textStyle}>{p}</p>
                      )) : <p style={textStyle}>{section.paragraphs}</p>}
                      {section.signature && (
                        <div className="pt-10 flex items-center gap-6">
                          <div className="h-12 w-[1px] bg-gold" />
                          <div>
                            <p className="font-bold text-white tracking-tight">{section.signature.name}</p>
                            <p className="text-[10px] text-gold/60 uppercase tracking-widest">{section.signature.role}</p>
                          </div>
                        </div>
                      )}
                      {section.quote && (
                        <blockquote className="bg-white/5 p-8 rounded-2xl border-l-2 border-gold italic text-white/90 font-serif" style={textStyle}>
                          "{section.quote}"
                        </blockquote>
                      )}
                      {section.footer_doua && (
                        <div className="mt-16 p-10 rounded-[2.5rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 text-center relative overflow-hidden group">
                          <p className="text-3xl md:text-4xl font-amiri text-gold-light mb-6 leading-loose" lang="ar" dir="rtl">
                            {section.footer_doua.arabic}
                          </p>
                          <p className="text-xl text-gold/80 italic mb-4">
                            « {section.footer_doua.phonetic} »
                          </p>
                          <div className="h-[1px] w-12 bg-gold/30 mx-auto mb-4" />
                          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                            {section.footer_doua.translation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.section>
            );

          case 'timeline':
            return (
              <div key={index} className="space-y-12">
                {block.content.map((step: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative flex gap-12 group"
                  >
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 text-gold font-bold text-xs relative z-10 group-hover:scale-110 transition-transform">
                        {step.age}
                      </div>
                      <div className="w-px flex-1 bg-gradient-to-b from-gold/20 to-transparent mt-4" />
                    </div>
                    <div className="flex-1 pb-16">
                      <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                        <div className="flex justify-between items-center mb-6">
                           <span className="text-gold font-black text-[10px] uppercase tracking-widest">{step.title}</span>
                           <span className="md:hidden text-gold/60 text-xs font-bold">{step.age} ans</span>
                        </div>
                        <p className="text-lg md:text-xl text-white/70 font-serif italic leading-relaxed" style={textStyle}>
                          "{step.text}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            );

          case 'quote':
            return (
              <div key={index} className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-justify">
                <div className="max-w-4xl mx-auto text-white/60 font-serif italic text-base md:text-lg leading-relaxed space-y-6" style={textStyle}>
                  {Array.isArray(block.content) ? block.content.map((p: string, i: number) => <p key={i}>{p}</p>) : <p>{block.content}</p>}
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
};
