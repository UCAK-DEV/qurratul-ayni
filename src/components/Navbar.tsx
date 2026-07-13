'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Icon from '@/components/Icon';
import { Chapter } from '@/data/chapters';
import { useTheme } from '@/context/ThemeContext';
import { useData } from '@/context/DataContext';
import { useLearning } from '@/context/LearningContext';
import Fuse from 'fuse.js';
import { ReadingSettings } from './ReadingSettings';
import { SearchOverlay } from './SearchOverlay';

const GROUP_ORDER = ["Introduction", "Les Piliers", "Rites et Société", "Jurisprudence", "Spiritualité"];

// Définition des sous-sections basées sur la table des matières
const subSections: Record<string, { id: string; title: string }[]> = {
  "5": [
    { id: "a", title: "La purification du corps" },
    { id: "b", title: "Les ablutions" },
    { id: "c", title: "Le Tayamoum" },
    { id: "d", title: "Les souillures" },
    { id: "e", title: "Les menstrues" },
    { id: "f", title: "Les lochies" },
  ],
  "6": [
    { id: "a", title: "L'appel à la prière" },
    { id: "b", title: "La prière rituelle" },
    { id: "c", title: "Les cinq prières" },
    { id: "d", title: "Pratiques Obligatoires" },
    { id: "e", title: "Pratiques Traditionnelles" },
    { id: "f", title: "La prière du Vendredi" },
    { id: "g", title: "Prières non effectuées" },
    { id: "h", title: "La prière du voyageur" },
    { id: "i", title: "Actes durant la prière" },
    { id: "j", title: "Prières surérogatoires" },
    { id: "k", title: "Les prières des fêtes" },
  ],
  "8": [
    { id: "a", title: "Le lavage mortuaire" },
  ],
  "9": [
    { id: "a", title: "L'argent épargné" },
  ],
  "10": [
    { id: "a", title: "Qu'est-ce que le jeûne ?" },
    { id: "b", title: "Qui doit jeûner ?" },
    { id: "c", title: "Actes blâmables" },
    { id: "d", title: "Petit déjeuner de l'aube" },
  ],
  "11": [
    { id: "a", title: "Le petit pèlerinage" },
  ],
  "12": [
    { id: "a", title: "Les obligations" },
    { id: "b", title: "La célébration" },
    { id: "c", title: "L'acte conjugal" },
    { id: "d", title: "La femme enceinte" },
    { id: "e", title: "Le baptême" },
    { id: "f", title: "Quelques remèdes" },
    { id: "g", title: "Le sevrage" },
    { id: "h", title: "L'éducation" },
  ],
  "13": [
    { id: "a", title: "La retraite légale" },
    { id: "b", title: "Les cas de divorce" },
  ],
  "15": [
    { id: "a", title: "Le chasseur" },
    { id: "b", title: "Tabaski" },
  ],
  "17": [
    { id: "a", title: "Pratiques interdites" },
    { id: "b", title: "Interdictions formelles" },
    { id: "c", title: "Causes de pauvreté" },
    { id: "d", title: "Aisance matérielle" },
    { id: "e", title: "Santé et longévité" },
    { id: "f", title: "La Sounna" },
    { id: "g", title: "Jours recommandés" },
    { id: "h", title: "Le repentir" },
  ],
  "19": [
    { id: "a", title: "L'aumône" },
    { id: "b", title: "Lecture du Coran" },
    { id: "c", title: "Sourates et versets" },
    { id: "d", title: "Invocations & Wirds" },
  ]
};



// ─── Desktop Chapters Dropdown ────────────────────────────────────────────────
const ChaptersDropdown: React.FC<{
  groupedChapters: Record<string, Chapter[]>;
  isCompleted: (id: string) => boolean;
  onClose: () => void;
}> = ({ groupedChapters, isCompleted, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 15, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 15, scale: 0.95 }}
    transition={{ type: 'spring', damping: 22, stiffness: 280 }}
    className="absolute top-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2 w-80 rounded-2xl border p-3 z-50 max-h-[65vh] overflow-y-auto"
    style={{
      background: 'rgba(10, 18, 13, 0.96)',
      backdropFilter: 'blur(20px)',
      borderColor: 'rgba(201, 169, 97, 0.35)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(201, 169, 97, 0.05)',
    }}
    role="menu"
  >
    {Object.keys(groupedChapters).length === 0 ? (
      <div className="p-8 text-center text-xs text-gold/60 font-reading flex flex-col items-center gap-3">
        <div className="animate-spin rounded-full h-5 w-5 border-2 border-transparent border-t-gold/80"></div>
        Chargement des chapitres...
      </div>
    ) : (
      GROUP_ORDER.map((group) => {
        const chapters = groupedChapters[group];
        if (!chapters) return null;
        return (
          <div key={group} className="mb-4 last:mb-1" role="none">
            <p className="px-3 pt-2 pb-1.5 text-xs uppercase font-black tracking-[0.2em]" style={{ color: 'rgba(201,169,97,0.75)' }}>
              {group}
            </p>
            {chapters.map((chapter) => (
              <div key={chapter.id}>
                <Link
                  href={`/partie/${chapter.id}`}
                  onClick={onClose}
                  className="flex items-center gap-3 p-2.5 rounded-xl text-sm font-semibold transition-all group hover:bg-white/[0.02]"
                  style={{ color: 'var(--text-secondary)' }}
                  role="menuitem"
                >
                  <Icon name={chapter.icon} className="text-gold text-base w-5 text-center flex-shrink-0" />
                  <span className="flex-grow truncate group-hover:text-[#c9a961] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                    {chapter.titleFr}
                  </span>
                  {isCompleted(chapter.id) && (
                    <Icon name="check_circle" className="text-sm text-[#c9a961]" />
                  )}
                </Link>
                {subSections[chapter.id] && (
                  <div className="pl-10 pr-2 pb-2 space-y-1.5 border-l border-white/5 ml-5 mt-1 mb-2">
                    {subSections[chapter.id].map(sub => (
                      <Link
                        key={sub.id}
                        href={`/partie/${chapter.id}/${sub.id}`}
                        onClick={onClose}
                        className="block py-0.5 text-xs text-slate-400 hover:text-[#c9a961] transition-colors truncate"
                      >
                        <span className="font-bold text-gold/60 mr-1.5 uppercase">{sub.id}.</span> {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      })
    )}
  </motion.div>
);

// ─── Mobile Bottom Sheet (Chapitres) ─────────────────────────────────────────
const ChaptersBottomSheet: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  groupedChapters: Record<string, Chapter[]>;
  isCompleted: (id: string) => boolean;
}> = ({ isOpen, onClose, groupedChapters, isCompleted }) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bottom-sheet-backdrop"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 280 }}
            className="bottom-sheet-panel"
          >
            <div className="bottom-sheet-handle" />
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <Icon name="menu_book" className="text-[#c9a961]" />
                <h2 className="font-black text-sm uppercase tracking-widest" style={{ color: '#c9a961' }}>
                  Chapitres
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'var(--border-subtle)', color: 'var(--text-muted)' }}
                aria-label="Fermer"
              >
                <Icon name="close" className="text-base" />
              </button>
            </div>

            {/* Chapters list */}
            <div className="overflow-y-auto flex-1 px-3 pt-3 pb-8" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}>
              {GROUP_ORDER.map((group) => {
                const chapters = groupedChapters[group];
                if (!chapters) return null;
                return (
                  <div key={group} className="mb-5">
                    <p className="px-2 mb-2 text-xs font-black uppercase tracking-widest" style={{ color: 'rgba(201,169,97,0.6)' }}>
                      {group}
                    </p>
                    <div className="space-y-1">
                      {chapters.map((chapter) => (
                        <div key={chapter.id}>
                          <button
                            onClick={() => { router.push(`/partie/${chapter.id}`); onClose(); }}
                            className="w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all active:scale-[0.98]"
                            style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}
                          >
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{ background: 'rgba(201,169,97,0.1)', border: '1px solid rgba(201,169,97,0.2)' }}>
                              <Icon name={chapter.icon} className="text-[#c9a961] text-base" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm truncate">{chapter.titleFr}</p>
                              <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{chapter.titleAr}</p>
                            </div>
                            {isCompleted(chapter.id) && (
                              <Icon name="task_alt" className="text-sm flex-shrink-0" style={{ color: '#c9a961' }} />
                            )}
                          </button>
                          {subSections[chapter.id] && (
                            <div className="pl-14 pr-4 py-2 space-y-2 border-l border-[var(--border-subtle)] ml-8 mb-2">
                              {subSections[chapter.id].map(sub => (
                                <button
                                  key={sub.id}
                                  onClick={() => { router.push(`/partie/${chapter.id}/${sub.id}`); onClose(); }}
                                  className="w-full text-left text-xs text-[var(--text-muted)] active:text-gold truncate"
                                >
                                  <span className="font-bold text-gold/60 mr-1 uppercase">{sub.id}.</span> {sub.title}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ─── Mobile Search Sheet ───────────────────────────────────────────────────────
const SearchSheet: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  chapters: Chapter[];
}> = ({ isOpen, onClose, chapters }) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = useMemo(() => new Fuse(chapters, {
    keys: ['titleFr', 'titleAr', 'desc'],
    threshold: 0.35,
  }), [chapters]);

  const results = query.length > 1 ? fuse.search(query).map(r => r.item) : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    } else {
      // Reset query when sheet closes (deferred to avoid setState in effect body)
      const timer = setTimeout(() => setQuery(''), 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="bottom-sheet-backdrop" onClick={onClose} />
          <motion.div
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 280 }}
            className="bottom-sheet-panel"
            style={{ maxHeight: '75vh' }}
          >
            <div className="bottom-sheet-handle" />
            <div className="px-4 py-3">
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-medium)' }}>
                <Icon name="search" style={{ color: '#c9a961' }} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Rechercher un chapitre..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: 'var(--text-primary)' }}
                />
                {query && (
                  <button onClick={() => setQuery('')} style={{ color: 'var(--text-muted)' }}>
                    <Icon name="close" className="text-base" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 pt-2 pb-6" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}>
              {query.length > 1 && results.length === 0 && (
                <p className="text-center py-8 text-sm font-reading" style={{ color: 'var(--text-muted)' }}>
                  Aucun résultat pour « {query} »
                </p>
              )}
              {results.map(chapter => (
                <button
                  key={chapter.id}
                  onClick={() => { router.push(`/partie/${chapter.id}`); onClose(); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl mb-2 text-left active:scale-[0.98] transition-all"
                  style={{ background: 'var(--bg-card)' }}
                >
                  <Icon name={chapter.icon} className="text-[#c9a961] text-lg" />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{chapter.titleFr}</p>
                    <p className="text-xs font-amiri" style={{ color: 'var(--text-muted)' }}>{chapter.titleAr}</p>
                  </div>
                </button>
              ))}
              {query.length <= 1 && (
                <p className="text-center py-6 text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--text-muted)' }}>
                  Tapez pour rechercher
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ─── Main Navbar ───────────────────────────────────────────────────────────────
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileChaptersOpen, setMobileChaptersOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const pathname = usePathname();
  const chaptersRef = useRef<HTMLLIElement>(null);
  const searchRef = useRef<HTMLLIElement>(null);
  const { chapters } = useData();
  const { isCompleted } = useLearning();

  const groupedChapters = useMemo(() =>
    chapters.reduce((acc, c) => { (acc[c.group] = acc[c.group] || []).push(c); return acc; }, {} as Record<string, Chapter[]>)
  , [chapters]);

  const desktopFuse = useMemo(() => new Fuse(chapters, {
    keys: ['titleFr', 'titleAr', 'desc'],
    threshold: 0.35,
  }), [chapters]);

  const desktopResults: Chapter[] = searchQuery.length > 1
    ? desktopFuse.search(searchQuery).map(r => r.item)
    : [];

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(currentScrollY > 50);
      
      // Auto-hide logic (Mobile only)
      if (window.innerWidth < 768) {
        if (currentScrollY <= 50) {
          setShowNav(true);
        } else if (currentScrollY > lastScrollY.current + 15) {
          // Scrolling down -> hide nav
          setShowNav(false);
        } else if (currentScrollY < lastScrollY.current - 15) {
          // Scrolling up -> show nav
          setShowNav(true);
        }
      } else {
        // Desktop: always show navbar
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (chaptersRef.current && !chaptersRef.current.contains(e.target as Node)) setIsChaptersOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Active tab for mobile bottom bar
  const activeMobileTab = pathname === '/accueil' ? 'home' : pathname.startsWith('/partie') ? 'chapters' : 'home';

  return (
    <>
      {/* ── DESKTOP NAVBAR ─────────────────────────────────────────────────── */}
      <nav
        aria-label="Navigation principale"
        className={`hidden md:block fixed left-1/2 z-[100] transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          isScrolled ? 'top-2 py-2 w-[90%] max-w-5xl' : 'top-4 py-3.5 w-[92%] max-w-6xl'
        } ${!showNav ? 'translate-y-[-150%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'} -translate-x-1/2`}
        style={{
          background: 'rgba(10, 18, 13, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(201, 169, 97, 0.25)',
          borderRadius: '1.5rem',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="px-6 flex items-center justify-between">

          {/* ── LOGO DESKTOP ── */}
          <Link href="/" className="hidden md:flex items-center gap-3 z-50 group" aria-label="Accueil Qurratul Ayni">
            <div className="w-9 h-9 border rounded-xl flex items-center justify-center transition-all bg-[#c9a961]/10 border-[#c9a961]/30 group-hover:border-[#c9a961] group-hover:bg-[#c9a961]/20">
              <Icon name="auto_stories" className="text-[#c9a961] text-xl group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="font-amiri text-[#c9a961] text-[12px] leading-none tracking-wider mb-0.5">
                قرة العين
              </span>
              <span className="text-lg font-serif font-black tracking-[0.15em] uppercase leading-none text-white">
                Qurratul Ayni
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="/accueil"
                className="text-sm font-medium flex items-center gap-2 transition-colors relative group py-2 px-3 rounded-xl hover:bg-white/[0.03]"
                style={{ color: pathname === '/accueil' ? '#c9a961' : 'var(--text-secondary)' }}
              >
                <Icon name="home" className="text-base" />
                Accueil
                <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#c9a961] rounded-full transition-all ${pathname === '/accueil' ? 'w-[calc(100%-24px)]' : 'w-0 group-hover:w-[calc(100%-24px)]'}`} />
              </Link>
            </li>
            <li className="relative" ref={chaptersRef}>
              <button
                onClick={() => setIsChaptersOpen(!isChaptersOpen)}
                className="text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: isChaptersOpen ? '#c9a961' : 'var(--text-secondary)' }}
                aria-expanded={isChaptersOpen}
                aria-haspopup="true"
              >
                <Icon name="menu_book" className="text-base" />
                Chapitres
                <motion.span animate={{ rotate: isChaptersOpen ? 180 : 0 }} className="inline-flex text-base">
                  <Icon name="expand_more" />
                </motion.span>
              </button>
              <AnimatePresence>
                {isChaptersOpen && (
                  <ChaptersDropdown
                    groupedChapters={groupedChapters}
                    isCompleted={isCompleted}
                    onClose={() => setIsChaptersOpen(false)}
                  />
                )}
              </AnimatePresence>
            </li>
            <li className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: isSearchOpen ? '#c9a961' : 'var(--text-secondary)' }}
                aria-expanded={isSearchOpen}
                aria-haspopup="true"
              >
                <Icon name="search" className="text-base" />
                Chercher
                <motion.span animate={{ rotate: isSearchOpen ? 180 : 0 }} className="inline-flex text-base">
                  <Icon name="expand_more" />
                </motion.span>
              </button>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl border shadow-2xl p-3.5 z-50"
                    style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-medium)' }}
                  >
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border mb-3" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                      <Icon name="search" className="text-[#c9a961] text-lg" />
                      <input
                        type="text"
                        placeholder="Rechercher..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="bg-transparent outline-none text-xs w-full"
                        style={{ color: 'var(--text-primary)' }}
                        autoFocus
                      />
                      {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-gray-200">
                          <Icon name="close" className="text-sm" />
                        </button>
                      )}
                    </div>
                    <div className="max-h-60 overflow-y-auto space-y-1">
                      {desktopResults.length > 0 ? (
                        desktopResults.map((c: Chapter) => (
                          <Link
                            key={c.id}
                            href={`/partie/${c.id}`}
                            onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-[rgba(201,169,97,0.05)] transition-colors text-left"
                          >
                            <Icon name={c.icon} className="text-[#c9a961] text-base" />
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{c.titleFr}</p>
                              <p className="text-sm truncate" style={{ color: 'var(--text-muted)' }}>{c.titleAr}</p>
                            </div>
                          </Link>
                        ))
                      ) : searchQuery.length > 1 ? (
                        <p className="text-center py-4 text-xs italic" style={{ color: 'var(--text-muted)' }}>
                          Aucun résultat pour « {searchQuery} »
                        </p>
                      ) : (
                        <p className="text-center py-4 text-sm uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>
                          Tapez pour rechercher...
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: isSettingsOpen ? '#c9a961' : 'var(--text-secondary)' }}
              >
                <Icon name="tune" className="text-base" />
                Réglages
              </button>
            </li>
          </ul>

          {/* Desktop Right Controls — Thème + Réglages */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:bg-white/5"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Icon 
                name={theme === 'dark' ? 'light_mode' : 'dark_mode'} 
                className="text-lg" 
                suppressHydrationWarning 
              />
            </button>
            <button
              onClick={() => setIsSettingsOpen(true)}
              aria-label="Réglages de lecture"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:bg-white/5"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Icon name="tune" className="text-lg" />
            </button>
          </div>

        </div>
      </nav>

      {/* ── MOBILE BOTTOM TAB BAR ──────────────────────────────────────────── */}
      <nav 
        className={`bottom-tab-bar md:hidden transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          !showNav && !mobileChaptersOpen && !mobileSearchOpen && !isSettingsOpen ? 'translate-y-[150%]' : 'translate-y-0'
        }`} 
        aria-label="Navigation mobile"
      >

        {/* Home */}
        <Link href="/accueil" className={`bottom-tab-btn ${activeMobileTab === 'home' ? 'active' : ''}`}>
          <Icon name="home" className="tab-icon" />
          <span className="tab-label">Accueil</span>
        </Link>

        {/* Chapitres */}
        <button
          className={`bottom-tab-btn ${mobileChaptersOpen ? 'active' : ''}`}
          onClick={() => { setMobileChaptersOpen(true); setMobileSearchOpen(false); }}
          aria-label="Ouvrir les chapitres"
        >
          <Icon name="menu_book" className="tab-icon" />
          <span className="tab-label">Chapitres</span>
        </button>

        {/* Search */}
        <button
          className={`bottom-tab-btn ${mobileSearchOpen ? 'active' : ''}`}
          onClick={() => { setMobileSearchOpen(true); setMobileChaptersOpen(false); }}
          aria-label="Rechercher"
        >
          <Icon name="search" className="tab-icon" />
          <span className="tab-label">Chercher</span>
        </button>

        {/* Settings */}
        <button
          className={`bottom-tab-btn ${isSettingsOpen ? 'active' : ''}`}
          onClick={() => setIsSettingsOpen(true)}
          aria-label="Réglages"
        >
          <Icon name="tune" className="tab-icon" />
          <span className="tab-label">Réglages</span>
        </button>
      </nav>

      {/* ── MOBILE SHEETS ──────────────────────────────────────────────────── */}
      <ChaptersBottomSheet
        isOpen={mobileChaptersOpen}
        onClose={() => setMobileChaptersOpen(false)}
        groupedChapters={groupedChapters}
        isCompleted={isCompleted}
      />
      <SearchSheet
        isOpen={mobileSearchOpen}
        onClose={() => setMobileSearchOpen(false)}
        chapters={chapters}
      />

      {/* ── READING SETTINGS MODAL ─────────────────────────────────────────── */}
      <ReadingSettings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      {/* ── SEARCH OVERLAY ─────────────────────────────────────────────────── */}
      <SearchOverlay isOpen={isSearchOverlayOpen} onClose={() => setIsSearchOverlayOpen(false)} />
    </>
  );
};
