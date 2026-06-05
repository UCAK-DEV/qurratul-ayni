'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Chapter } from '@/data/chapters';
import { useTheme } from '@/context/ThemeContext';
import { useData } from '@/context/DataContext';
import { useLearning } from '@/context/LearningContext';
import Fuse from 'fuse.js';
import { useDebounce } from '@/hooks/useDebounce';
import { ReadingSettings } from './ReadingSettings';

const GROUP_ORDER = ["Introduction", "Les Piliers", "Rites et Société", "Jurisprudence", "Spiritualité"];

// ─── Theme Toggle Button ───────────────────────────────────────────────────────
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Passer en mode jour' : 'Passer en mode nuit'}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border-gold)',
        color: '#c9a961',
      }}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -30, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 12 }}
        className="material-symbols-rounded text-lg"
      >
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </motion.span>
      <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:block">
        {theme === 'dark' ? 'Jour' : 'Nuit'}
      </span>
    </motion.button>
  );
};

// ─── Desktop Chapters Dropdown ────────────────────────────────────────────────
const ChaptersDropdown: React.FC<{
  groupedChapters: Record<string, Chapter[]>;
  isCompleted: (id: string) => boolean;
  onClose: () => void;
}> = ({ groupedChapters, isCompleted, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.97 }}
    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl border shadow-2xl p-2 z-50 max-h-[70vh] overflow-y-auto"
    style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-medium)' }}
    role="menu"
  >
    {GROUP_ORDER.map((group) => {
      const chapters = groupedChapters[group];
      if (!chapters) return null;
      return (
        <div key={group} className="mb-3" role="none">
          <p className="px-3 pt-2 pb-1 text-[9px] uppercase font-black tracking-widest" style={{ color: 'rgba(201,169,97,0.7)' }}>
            {group}
          </p>
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/partie/${chapter.id}`}
              onClick={onClose}
              className="flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium transition-all group"
              style={{ color: 'var(--text-secondary)' }}
              role="menuitem"
            >
              <span className="material-symbols-rounded text-gold text-base w-5 text-center flex-shrink-0">{chapter.icon}</span>
              <span className="flex-1 truncate group-hover:text-[#c9a961] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                {chapter.titleFr}
              </span>
              {isCompleted(chapter.id) && (
                <span className="material-symbols-rounded text-sm text-[#c9a961]">check_circle</span>
              )}
            </Link>
          ))}
        </div>
      );
    })}
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
                <span className="material-symbols-rounded text-[#c9a961]">menu_book</span>
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
                <span className="material-symbols-rounded text-base">close</span>
              </button>
            </div>

            {/* Chapters list */}
            <div className="overflow-y-auto flex-1 px-3 pt-3 pb-8" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}>
              {GROUP_ORDER.map((group) => {
                const chapters = groupedChapters[group];
                if (!chapters) return null;
                return (
                  <div key={group} className="mb-5">
                    <p className="px-2 mb-2 text-[9px] font-black uppercase tracking-widest" style={{ color: 'rgba(201,169,97,0.6)' }}>
                      {group}
                    </p>
                    <div className="space-y-1">
                      {chapters.map((chapter) => (
                        <button
                          key={chapter.id}
                          onClick={() => { router.push(`/partie/${chapter.id}`); onClose(); }}
                          className="w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all active:scale-[0.98]"
                          style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}
                        >
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: 'rgba(201,169,97,0.1)', border: '1px solid rgba(201,169,97,0.2)' }}>
                            <span className="material-symbols-rounded text-[#c9a961] text-base">{chapter.icon}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm truncate">{chapter.titleFr}</p>
                            <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{chapter.titleAr}</p>
                          </div>
                          {isCompleted(chapter.id) && (
                            <span className="material-symbols-rounded text-sm flex-shrink-0" style={{ color: '#c9a961' }}>
                              task_alt
                            </span>
                          )}
                        </button>
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
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 200);
    else setQuery('');
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
                <span className="material-symbols-rounded" style={{ color: '#c9a961' }}>search</span>
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
                    <span className="material-symbols-rounded text-base">close</span>
                  </button>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 pt-2 pb-6" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}>
              {query.length > 1 && results.length === 0 && (
                <p className="text-center py-8 text-sm font-serif italic" style={{ color: 'var(--text-muted)' }}>
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
                  <span className="material-symbols-rounded text-[#c9a961] text-lg">{chapter.icon}</span>
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
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileChaptersOpen, setMobileChaptersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 250);
  const [desktopResults, setDesktopResults] = useState<Chapter[]>([]);

  const pathname = usePathname();
  const chaptersRef = useRef<HTMLLIElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const { chapters } = useData();
  const { isCompleted } = useLearning();
  const { theme } = useTheme();

  const fuse = useMemo(() => new Fuse(chapters, { keys: ['titleFr', 'titleAr', 'desc'], threshold: 0.3 }), [chapters]);

  const groupedChapters = useMemo(() =>
    chapters.reduce((acc, c) => { (acc[c.group] = acc[c.group] || []).push(c); return acc; }, {} as Record<string, Chapter[]>)
  , [chapters]);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(currentScrollY > 50);
      
      // Auto-hide logic
      if (currentScrollY <= 50) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY.current + 15) {
        // Scrolling down -> hide nav
        setShowNav(false);
      } else if (currentScrollY < lastScrollY.current - 15) {
        // Scrolling up -> show nav
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (debouncedSearch.length > 1) {
      setDesktopResults(fuse.search(debouncedSearch).map(r => r.item));
    } else {
      setDesktopResults([]);
    }
  }, [debouncedSearch, fuse]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (chaptersRef.current && !chaptersRef.current.contains(e.target as Node)) setIsChaptersOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) { setIsSearchOpen(false); setSearchQuery(''); }
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
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          isScrolled ? 'py-2' : 'py-5'
        } ${!showNav ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
        style={isScrolled ? { background: 'var(--bg-nav)', borderBottom: '1px solid var(--border-subtle)', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' } : {}}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 group" aria-label="Accueil Qurratul Ayni">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -12 }}
              className="w-10 h-10 border rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(201,169,97,0.1)', borderColor: 'rgba(201,169,97,0.4)' }}
            >
              <span className="material-symbols-rounded text-[#c9a961] text-2xl">auto_stories</span>
            </motion.div>
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-black tracking-widest uppercase leading-none" style={{ color: 'var(--text-primary)' }}>
                Qurratul <span className="text-[#c9a961]">Ayni</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>
                Enseignements Sacrés
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-5">
            <li>
              <Link
                href="/accueil"
                className="text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-colors relative group"
                style={{ color: pathname === '/accueil' ? '#c9a961' : 'var(--text-secondary)' }}
              >
                <span className="material-symbols-rounded text-base">home</span>
                Accueil
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#c9a961] rounded-full transition-all ${pathname === '/accueil' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            </li>
            <li className="relative" ref={chaptersRef}>
              <button
                onClick={() => setIsChaptersOpen(!isChaptersOpen)}
                className="text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 transition-colors"
                style={{ color: isChaptersOpen ? '#c9a961' : 'var(--text-secondary)' }}
                aria-expanded={isChaptersOpen}
                aria-haspopup="true"
              >
                <span className="material-symbols-rounded text-base">menu_book</span>
                Chapitres
                <motion.span animate={{ rotate: isChaptersOpen ? 180 : 0 }} className="material-symbols-rounded text-base">
                  expand_more
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
          </ul>

          {/* Desktop Right Controls */}
          <div className="hidden md:flex items-center gap-3">
            <div className="h-5 w-px" style={{ background: 'var(--border-medium)' }} />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Settings */}
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-xl border transition-all"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
              aria-label="Réglages de lecture"
            >
              <span className="material-symbols-rounded text-lg">settings_accessibility</span>
            </button>

            {/* Search */}
            <div className="relative" ref={searchRef}>
              <motion.div
                animate={{ width: isSearchOpen ? '220px' : '36px' }}
                className="h-9 rounded-xl border flex items-center overflow-hidden"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
              >
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-9 h-9 flex-shrink-0 flex items-center justify-center transition-colors"
                  style={{ color: isSearchOpen ? '#c9a961' : 'var(--text-muted)' }}
                  aria-label={isSearchOpen ? 'Fermer la recherche' : 'Rechercher'}
                >
                  <span className="material-symbols-rounded text-lg">{isSearchOpen ? 'close' : 'search'}</span>
                </button>
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-sm w-full pr-3"
                  style={{ color: 'var(--text-primary)' }}
                  aria-label="Champ de recherche"
                />
              </motion.div>
              {/* Search results dropdown */}
              <AnimatePresence>
                {desktopResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full right-0 mt-2 w-72 rounded-2xl border shadow-xl py-2 max-h-64 overflow-y-auto"
                    style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-medium)' }}
                  >
                    {desktopResults.map(c => (
                      <Link key={c.id} href={`/partie/${c.id}`} onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-[rgba(201,169,97,0.05)] transition-colors"
                      >
                        <span className="material-symbols-rounded text-[#c9a961] text-base">{c.icon}</span>
                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{c.titleFr}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
          <span className="tab-icon material-symbols-rounded">home</span>
          <span className="tab-label">Accueil</span>
        </Link>

        {/* Chapitres */}
        <button
          className={`bottom-tab-btn ${mobileChaptersOpen ? 'active' : ''}`}
          onClick={() => { setMobileChaptersOpen(true); setMobileSearchOpen(false); }}
          aria-label="Ouvrir les chapitres"
        >
          <span className="tab-icon material-symbols-rounded">menu_book</span>
          <span className="tab-label">Chapitres</span>
        </button>

        {/* Search */}
        <button
          className={`bottom-tab-btn ${mobileSearchOpen ? 'active' : ''}`}
          onClick={() => { setMobileSearchOpen(true); setMobileChaptersOpen(false); }}
          aria-label="Rechercher"
        >
          <span className="tab-icon material-symbols-rounded">search</span>
          <span className="tab-label">Chercher</span>
        </button>

        {/* Settings */}
        <button
          className={`bottom-tab-btn ${isSettingsOpen ? 'active' : ''}`}
          onClick={() => setIsSettingsOpen(true)}
          aria-label="Réglages"
        >
          <span className="tab-icon material-symbols-rounded">tune</span>
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
    </>
  );
};
