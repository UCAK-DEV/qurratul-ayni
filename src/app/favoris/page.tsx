'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useBookmarks } from '@/context/BookmarkContext';
import Icon from '@/components/Icon';

export default function FavorisPage() {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <div className="min-h-screen bg-[#010302] text-white pt-24 pb-32 px-6 md:px-16 overflow-x-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
              <span className="h-[1px] w-12 bg-gold/50" />
              <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold">
                Espace Personnel
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              Mes <span className="gold-gradient-text">Favoris</span>
            </h1>
          </motion.div>
        </header>

        {bookmarks.length === 0 ? (
          <div className="py-32 text-center border border-white/5 rounded-[3rem] bg-white/[0.02]">
            <Icon name="bookmark_add" className="text-6xl text-white/10 mb-6 mx-auto block" />
            <p className="text-xl font-reading text-white/40 mb-8">Vous n'avez pas encore de passages sauvegardés.</p>
            <Link href="/accueil" className="px-10 py-4 bg-gold text-[#241c07] rounded-2xl text-xs font-black uppercase hover:scale-105 transition-all">
              Découvrir les enseignements
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            <AnimatePresence mode="popLayout">
              {bookmarks.map((bookmark) => (
                <motion.div
                  key={bookmark.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                    <div>
                      <p className="text-xs font-black text-gold uppercase tracking-[0.3em] mb-2">{bookmark.chapterTitle}</p>
                      <h2 className="text-sm font-bold text-white/40 italic">Section {bookmark.slug.split('-').pop()?.toUpperCase()}</h2>
                    </div>
                    <div className="flex gap-4">
                      <Link 
                        href={`/partie/${bookmark.slug.split('-').join('/')}`}
                        className="p-4 rounded-2xl bg-white/5 text-gold hover:bg-gold hover:text-black transition-all"
                        aria-label="Voir la leçon complète"
                      >
                        <Icon name="open_in_new" className="text-xl" />
                      </Link>
                      <button 
                        onClick={() => removeBookmark(bookmark.id)}
                        className="p-4 rounded-2xl bg-white/5 text-red-400 hover:bg-red-500 hover:text-white transition-all"
                        aria-label="Supprimer des favoris"
                      >
                        <Icon name="delete" className="text-xl" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic text-center">
                      &quot;{bookmark.text}&quot;
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
