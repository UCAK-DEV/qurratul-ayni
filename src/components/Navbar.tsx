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
import { SearchOverlay } from './SearchOverlay';
import { getSetting } from '@/utils/settings';
import { calculateHijriDate } from '@/utils/hijri';
import { getRecommendationForDate } from '@/data/nafilas';

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
    { id: "g", title: "L'usage du Siwak (Sotju)" },
    { id: "h", title: "Règles diverses" },
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
    { id: "l", title: "Invocations post-prière" },
    { id: "m", title: "Bienséance de la mosquée" },
    { id: "n", title: "Imam & Qunut" },
    { id: "o", title: "La Sutrah (Obstacle)" },
    { id: "p", title: "Suivre l'Imam" },
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
    { id: "e", title: "L'aumône de rupture (Fitr)" },
    { id: "f", title: "Jours de jeûne" },
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
    { id: "i", title: "Les bons comportements" },
    { id: "j", title: "Jours à éviter" },
    { id: "k", title: "Le mois de Tamharit" },
    { id: "l", title: "Le mois de Maouloud (Gamou)" },
    { id: "m", title: "La mi-Sha'ban" },
    { id: "n", title: "Premier jour de l'année" },
  ],
  "18": [
    { id: "dimanche", title: "Nafila du Dimanche" },
    { id: "lundi", title: "Nafila du Lundi" },
    { id: "mardi", title: "Nafila du Mardi" },
    { id: "mercredi", title: "Nafila du Mercredi" },
    { id: "jeudi", title: "Nafila du Jeudi" },
    { id: "vendredi", title: "Nafila du Vendredi" },
    { id: "samedi", title: "Nafila du Samedi" },
    { id: "1", title: "Ramadan - Jour 1" },
    { id: "2", title: "Ramadan - Jour 2" },
    { id: "3", title: "Ramadan - Jour 3" },
    { id: "4", title: "Ramadan - Jour 4" },
    { id: "5", title: "Ramadan - Jour 5" },
    { id: "6", title: "Ramadan - Jour 6" },
    { id: "7", title: "Ramadan - Jour 7" },
    { id: "8", title: "Ramadan - Jour 8" },
    { id: "9", title: "Ramadan - Jour 9" },
    { id: "10", title: "Ramadan - Jour 10" },
    { id: "11", title: "Ramadan - Jour 11" },
    { id: "12", title: "Ramadan - Jour 12" },
    { id: "13", title: "Ramadan - Jour 13" },
    { id: "14", title: "Ramadan - Jour 14" },
    { id: "15", title: "Ramadan - Jour 15" },
    { id: "16", title: "Ramadan - Jour 16" },
    { id: "17", title: "Ramadan - Jour 17" },
    { id: "18", title: "Ramadan - Jour 18" },
    { id: "19", title: "Ramadan - Jour 19" },
    { id: "20", title: "Ramadan - Jour 20" },
    { id: "21", title: "Ramadan - Jour 21" },
    { id: "22", title: "Ramadan - Jour 22" },
    { id: "23", title: "Ramadan - Jour 23" },
    { id: "24", title: "Ramadan - Jour 24" },
    { id: "25", title: "Ramadan - Jour 25" },
    { id: "26", title: "Ramadan - Jour 26" },
    { id: "27", title: "Ramadan - Jour 27" },
    { id: "28", title: "Ramadan - Jour 28" },
    { id: "29", title: "Ramadan - Jour 29" },
    { id: "30", title: "Ramadan - Jour 30" },
  ],
  "19": [
    { id: "a", title: "L'aumône" },
    { id: "b", title: "Lecture du Coran" },
    { id: "c", title: "Sourates et versets" },
    { id: "d", title: "Invocations & Wirds" },
    { id: "e", title: "Les mérites du Basmala" },
    { id: "f", title: "Le Rappel d'Allah (Dhikr)" },
  ]
};



// ─── Desktop Chapters Dropdown ────────────────────────────────────────────────
// ─── Desktop Chapters Dropdown ────────────────────────────────────────────────
const ChaptersDropdown: React.FC<{
  groupedChapters: Record<string, Chapter[]>;
  isCompleted: (id: string) => boolean;
  onClose: () => void;
}> = ({ groupedChapters, isCompleted, onClose }) => {
  const [hoveredChapterId, setHoveredChapterId] = useState<string>('1');
  const { chapters } = useData();

  const activeChapter = chapters.find(c => c.id === hoveredChapterId) || chapters[0];
  const activeSubSections = subSections[hoveredChapterId] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.95 }}
      transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      className="absolute top-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2 w-[620px] h-[380px] rounded-3xl border z-50 flex overflow-hidden shadow-2xl"
      style={{
        background: 'var(--bg-nav)',
        backdropFilter: 'blur(20px)',
        borderColor: 'var(--border-gold)',
      }}
      role="menu"
    >
      {Object.keys(groupedChapters).length === 0 ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-xs text-gold/60 font-reading">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-transparent border-t-gold/80"></div>
          Chargement des chapitres...
        </div>
      ) : (
        <>
          {/* Left Column: Chapters scroll list */}
          <div className="w-[45%] h-full overflow-y-auto border-r border-white/5 p-4 space-y-4 scrollbar-thin">
            {GROUP_ORDER.map((group) => {
              const chs = groupedChapters[group];
              if (!chs) return null;
              return (
                <div key={group} className="space-y-1.5" role="none">
                  <p className="px-2 text-[10px] uppercase font-black tracking-[0.2em] text-white/40">
                    {group}
                  </p>
                  <div className="space-y-0.5">
                    {chs.map((chapter) => (
                      <Link
                        key={chapter.id}
                        href={`/partie/${chapter.id}`}
                        onMouseEnter={() => setHoveredChapterId(chapter.id)}
                        onClick={onClose}
                        className={`w-full flex items-center gap-2.5 p-2 rounded-xl text-left transition-all group ${
                          hoveredChapterId === chapter.id
                            ? 'bg-gold/10 text-gold font-bold border-l-2 border-gold pl-1.5'
                            : 'text-adaptive-secondary hover:bg-white/[0.02]'
                        }`}
                        role="menuitem"
                      >
                        <Icon 
                          name={chapter.icon} 
                          className="text-sm shrink-0" 
                          style={{ color: hoveredChapterId === chapter.id ? 'var(--gold)' : 'var(--text-muted)' }} 
                        />
                        <span className="text-xs truncate flex-grow">
                          {chapter.titleFr}
                        </span>
                        {isCompleted(chapter.id) && (
                          <Icon name="check_circle" className="text-[10px] text-gold shrink-0" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Chapter preview & sub-sections */}
          <div className="w-[55%] h-full p-6 flex flex-col justify-between" style={{ background: 'rgba(212, 175, 55, 0.02)' }}>
            {activeChapter && (
              <div className="space-y-4 flex flex-col h-full justify-between">
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded uppercase">
                      Partie {activeChapter.id.padStart(2, '0')}
                    </span>
                    <span className="font-amiri text-lg text-gold/60" lang="ar" dir="rtl">
                      {activeChapter.titleAr}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {activeChapter.titleFr}
                  </h3>
                </div>

                <div className="flex-1 flex flex-col justify-center text-left">
                  {activeSubSections.length > 0 ? (
                    <div className="space-y-1.5 max-h-[190px] overflow-y-auto pr-1 scrollbar-thin">
                      <p className="text-[10px] uppercase tracking-wider font-bold text-gold/60 mb-2">
                        Sous-sections :
                      </p>
                      {activeSubSections.map((sub) => (
                        <Link
                          key={sub.id}
                          href={`/partie/${activeChapter.id}/${sub.id}`}
                          onClick={onClose}
                          className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg hover:bg-gold/10 text-xs text-adaptive-secondary hover:text-gold transition-all truncate"
                        >
                          <span className="font-bold text-gold/60 uppercase text-[10px]">{sub.id}</span>
                          <span className="truncate">{sub.title}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-2 space-y-2">
                      <p className="text-xs text-adaptive-secondary italic leading-relaxed font-reading">
                        {activeChapter.desc}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5">
                  <Link
                    href={`/partie/${activeChapter.id}`}
                    onClick={onClose}
                    className="btn-gold w-full !py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    Ouvrir la section
                    <Icon name="arrow_forward" className="text-xs" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
};

// ─── Mobile Bottom Sheet (Chapitres) ─────────────────────────────────────────
const ChaptersBottomSheet: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  groupedChapters: Record<string, Chapter[]>;
  isCompleted: (id: string) => boolean;
}> = ({ isOpen, onClose, groupedChapters, isCompleted }) => {
  const router = useRouter();
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedChapterId(prev => (prev === id ? null : id));
  };

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
                <Icon name="menu_book" className="text-gold" />
                <h2 className="font-black text-sm uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
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
                    <p className="px-2 mb-2 text-[10px] font-black uppercase tracking-widest text-white/40">
                      {group}
                    </p>
                    <div className="space-y-1">
                      {chapters.map((chapter) => {
                        const hasSubs = !!subSections[chapter.id];
                        const isExpanded = expandedChapterId === chapter.id;
                        return (
                          <div key={chapter.id} className="border-b border-white/[0.02] py-1 last:border-0">
                            <div className="flex items-center justify-between gap-1">
                              <button
                                onClick={() => { router.push(`/partie/${chapter.id}`); onClose(); }}
                                className="flex-grow flex items-center gap-3 p-2.5 rounded-xl text-left active:bg-white/[0.02] transition-colors min-w-0"
                              >
                                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                                  style={{ background: 'color-mix(in srgb, var(--accent) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)' }}>
                                  <Icon name={chapter.icon} className="text-gold text-sm" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold text-xs truncate text-white">{chapter.titleFr}</p>
                                  <p className="text-[10px] truncate text-white/40" style={{ fontFamily: 'var(--font-reading)' }}>{chapter.titleAr}</p>
                                </div>
                                {isCompleted(chapter.id) && (
                                  <Icon name="task_alt" className="text-xs flex-shrink-0" style={{ color: 'var(--accent)' }} />
                                )}
                              </button>

                              {hasSubs && (
                                <button
                                  onClick={() => toggleExpand(chapter.id)}
                                  className="p-2.5 text-gold/70 hover:text-gold active:bg-white/[0.02] rounded-xl flex items-center justify-center flex-shrink-0"
                                  aria-label="Voir les sous-sections"
                                >
                                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} className="flex">
                                    <Icon name="expand_more" className="text-base" />
                                  </motion.div>
                                </button>
                              )}
                            </div>

                            <AnimatePresence>
                              {isExpanded && hasSubs && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="pl-12 pr-2 py-1.5 space-y-1.5 ml-4 border-l border-gold/20"
                                >
                                  {subSections[chapter.id].map(sub => (
                                    <button
                                      key={sub.id}
                                      onClick={() => { router.push(`/partie/${chapter.id}/${sub.id}`); onClose(); }}
                                      className="w-full text-left py-1.5 text-xs text-white/60 active:text-gold transition-colors flex items-center gap-2 truncate"
                                    >
                                      <span className="font-bold text-gold/60 uppercase text-[10px]">{sub.id}.</span>
                                      <span className="truncate">{sub.title}</span>
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
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
                <Icon name="search" style={{ color: 'var(--accent)' }} />
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
                  <Icon name={chapter.icon} className="text-gold text-lg" />
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

interface InAppNotification {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

// ─── Main Navbar ───────────────────────────────────────────────────────────────
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  // settings state removed
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileChaptersOpen, setMobileChaptersOpen] = useState(false);
  const [mobileNotificationsOpen, setMobileNotificationsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const pathname = usePathname();
  const chaptersRef = useRef<HTMLLIElement>(null);
  const searchRef = useRef<HTMLLIElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const { chapters } = useData();
  const { isCompleted } = useLearning();

  // Notification states
  const [inAppNotifications, setInAppNotifications] = useState<InAppNotification[]>([]);
  const [showNotificationCenter, setShowNotificationCenter] = useState<boolean>(false);
  const [notificationPermission, setNotificationPermission] = useState<string>('default');

  useEffect(() => {
    async function initializeNotifications() {
      const offsetStr = await getSetting('hijri_offset', '0');
      const offset = parseInt(offsetStr, 10);

      const hijriDate = calculateHijriDate(offset);
      const dayOfWeek = new Date().getDay();
      const recommendations = getRecommendationForDate(hijriDate.day, hijriDate.month, dayOfWeek);
      const recommendation = recommendations.length > 0 ? recommendations[0] : null;

      const samples: InAppNotification[] = [
        {
          id: '1',
          title: 'Recommandation du Jour',
          body: recommendation
            ? `Aujourd'hui : ${recommendation.title}. Découvrez la pratique recommandée.`
            : 'Découvrez les lectures et wirds recommandés pour aujourd\'hui.',
          time: 'Il y a 5 min',
          read: false
        }
      ];
      setInAppNotifications(samples);

      if (typeof window !== 'undefined' && 'Notification' in window) {
        setNotificationPermission(Notification.permission);
      }
    }

    initializeNotifications();
  }, []);

  const requestNotificationPermission = async () => {
    if (typeof window === 'undefined' || !('Notification' in window)) return;
    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
      if (permission === 'granted') {
        new Notification("Notifications Activées", {
          body: "Vous recevrez des rappels quotidiens pour les Nafilas.",
          icon: "/mosque-192.png"
        });
        setInAppNotifications(prev => [
          {
            id: Date.now().toString(),
            title: 'Notifications activées',
            body: 'Les rappels de nafilas sur le bureau sont maintenant fonctionnels.',
            time: 'Maintenant',
            read: false
          },
          ...prev
        ]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const markAllNotificationsAsRead = () => {
    setInAppNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearNotifications = () => {
    setInAppNotifications([]);
  };

  const unreadCount = inAppNotifications.filter(n => !n.read).length;

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
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(e.target as Node)) {
        setShowNotificationCenter(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Active tab for mobile bottom bar
  const activeMobileTab = pathname === '/' ? 'home' : pathname.startsWith('/partie') ? 'chapters' : 'home';

  return (
    <>
      {/* ── DESKTOP NAVBAR ─────────────────────────────────────────────────── */}
      <nav
        aria-label="Navigation principale"
        className={`hidden md:block fixed left-1/2 z-[100] transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] liquid-glass-nav ${
          isScrolled ? 'top-2 py-2 w-[90%] max-w-5xl' : 'top-4 py-3.5 w-[92%] max-w-6xl'
        } ${!showNav ? 'translate-y-[-150%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'} -translate-x-1/2`}
        style={{
          borderRadius: '1.5rem',
        }}
      >
        <div className="px-6 flex items-center justify-between">

          {/* ── LOGO DESKTOP ── */}
          <Link href="/" className="hidden md:flex items-center gap-3 z-50 group" aria-label="Accueil Qurratul Ayni">
            <div className="w-10 h-10 border rounded-[0.85rem] flex items-center justify-center transition-all bg-gold/10 border-gold/30 group-hover:border-gold group-hover:bg-gold/20">
              <Icon name="auto_stories" className="text-gold text-xl group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="font-amiri text-gold text-[12px] leading-none tracking-wider mb-0.5">
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
                href="/"
                className="text-sm font-medium flex items-center gap-2 transition-colors relative group py-2 px-3 rounded-xl hover:bg-white/[0.03]"
                style={{ color: pathname === '/' ? 'var(--accent)' : 'var(--text-secondary)' }}
              >
                Accueil
                <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full transition-all ${pathname === '/' ? 'w-[calc(100%-24px)]' : 'w-0 group-hover:w-[calc(100%-24px)]'}`} />
              </Link>
            </li>
            <li className="relative" ref={chaptersRef}>
              <button
                onClick={() => setIsChaptersOpen(!isChaptersOpen)}
                className="text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: isChaptersOpen ? 'var(--accent)' : 'var(--text-secondary)' }}
                aria-expanded={isChaptersOpen}
                aria-haspopup="true"
              >
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
            <li className="relative flex items-center" ref={searchRef}>
              <div 
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 w-36 focus-within:w-52 bg-white/[0.03] border-white/15 focus-within:border-gold/50 focus-within:bg-black/25 hover:bg-white/[0.06]"
              >
                <Icon name="search" className="text-gold text-sm" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={e => {
                    setSearchQuery(e.target.value);
                    if (!isSearchOpen && e.target.value.length > 0) {
                      setIsSearchOpen(true);
                    }
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  className="bg-transparent outline-none text-xs w-full text-white placeholder-white/40 font-medium"
                />
                {searchQuery && (
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }} 
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <Icon name="close" className="text-[10px]" />
                  </button>
                )}
              </div>
              <AnimatePresence>
                {isSearchOpen && searchQuery.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="absolute top-full right-0 mt-3 w-80 rounded-2xl border shadow-2xl p-3.5 z-50"
                    style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-medium)' }}
                  >
                    <div className="max-h-60 overflow-y-auto space-y-1">
                      {desktopResults.length > 0 ? (
                        desktopResults.map((c: Chapter) => (
                          <Link
                            key={c.id}
                            href={`/partie/${c.id}`}
                            onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-[color-mix(in srgb, var(--accent) 5%, transparent)] transition-colors text-left"
                          >
                            <Icon name={c.icon} className="text-gold text-base" />
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{c.titleFr}</p>
                              <p className="text-sm truncate" style={{ color: 'var(--text-muted)' }}>{c.titleAr}</p>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <p className="text-center py-4 text-xs italic" style={{ color: 'var(--text-muted)' }}>
                          Aucun résultat pour « {searchQuery} »
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Desktop Right Controls — utilitaires (notifications + thème + réglages) */}
          <div className="hidden md:flex items-center gap-2 relative" ref={notificationsRef}>
            <button
              onClick={() => setShowNotificationCenter(!showNotificationCenter)}
              aria-label="Centre de notifications"
              title="Notifications"
              className="w-9 h-9 liquid-glass-btn relative"
            >
              <Icon name="notifications" className="text-lg" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-gold text-[#241c07] font-bold text-[9px] flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            
            <AnimatePresence>
              {showNotificationCenter && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="absolute right-0 top-[calc(100%+0.5rem)] w-80 rounded-2xl border p-4 z-50 backdrop-blur-xl text-left animate-in fade-in slide-in-from-top-1"
                  style={{ background: 'var(--bg-nav)', borderColor: 'var(--border-medium)' }}
                >
                  <div className="flex justify-between items-center pb-2 border-b mb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    <h4 className="text-xs font-semibold text-gold">Notifications</h4>
                    <div className="flex gap-2.5 text-[10px]">
                      <button onClick={markAllNotificationsAsRead} className="text-white/40 hover:text-gold transition-colors">Tout lire</button>
                      <button onClick={clearNotifications} className="text-white/40 hover:text-gold transition-colors">Effacer</button>
                    </div>
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {inAppNotifications.length === 0 ? (
                      <p className="text-xs text-white/40 italic text-center py-4">Aucune notification.</p>
                    ) : (
                      inAppNotifications.map(notification => (
                        <div key={notification.id}
                          className="p-2.5 rounded-xl border transition-all"
                          style={{
                            background: notification.read ? 'transparent' : 'rgba(212, 175, 55, 0.05)',
                            borderColor: notification.read ? 'var(--border-subtle)' : 'var(--border-gold)',
                          }}>
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <h5 className="text-[10px] font-bold text-white uppercase tracking-wider">{notification.title}</h5>
                            <span className="text-[9px] text-white/40 whitespace-nowrap">{notification.time}</span>
                          </div>
                          <p className="text-xs text-white/70 leading-relaxed font-reading">{notification.body}</p>
                        </div>
                      ))
                    )}
                  </div>
                  {notificationPermission === 'default' && (
                    <button
                      onClick={requestNotificationPermission}
                      className="mt-3 w-full py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-gold transition-all"
                      style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--border-gold)' }}
                    >
                      Activer les alertes
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
              className="w-9 h-9 liquid-glass-btn"
            >
              <Icon
                name={theme === 'dark' ? 'light_mode' : 'dark_mode'}
                className="text-lg"
                suppressHydrationWarning
              />
            </button>
            <Link
              href="/reglages"
              aria-label="Réglages de lecture"
              title="Réglages"
              className="w-9 h-9 liquid-glass-btn"
              style={pathname === '/reglages' ? { color: 'var(--accent)', borderColor: 'var(--accent)' } : undefined}
            >
              <Icon name="tune" className="text-lg" />
            </Link>
          </div>

        </div>
      </nav>

      {/* ── MOBILE BOTTOM TAB BAR ──────────────────────────────────────────── */}
      <nav 
        className={`bottom-tab-bar md:hidden transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          !showNav && !mobileChaptersOpen && !mobileSearchOpen && !mobileNotificationsOpen && pathname !== '/reglages' ? 'translate-y-[150%]' : 'translate-y-0'
        }`} 
        aria-label="Navigation mobile"
      >
        {/* Home */}
        <Link href="/" className={`bottom-tab-btn ${activeMobileTab === 'home' && !mobileNotificationsOpen && !mobileChaptersOpen && !mobileSearchOpen ? 'active' : ''}`} onClick={() => { setMobileChaptersOpen(false); setMobileSearchOpen(false); setMobileNotificationsOpen(false); }}>
          <Icon name="home" className="tab-icon" />
          <span className="tab-label">Accueil</span>
        </Link>

        {/* Chapitres */}
        <button
          className={`bottom-tab-btn ${mobileChaptersOpen ? 'active' : ''}`}
          onClick={() => { setMobileChaptersOpen(true); setMobileSearchOpen(false); setMobileNotificationsOpen(false); }}
          aria-label="Ouvrir les chapitres"
        >
          <Icon name="menu_book" className="tab-icon" />
          <span className="tab-label">Chapitres</span>
        </button>

        {/* Notifications */}
        <button
          className={`bottom-tab-btn ${mobileNotificationsOpen ? 'active' : ''} relative`}
          onClick={() => { setMobileNotificationsOpen(true); setMobileChaptersOpen(false); setMobileSearchOpen(false); }}
          aria-label="Notifications"
        >
          <Icon name="notifications" className="tab-icon" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-3 min-w-3.5 h-3.5 px-0.5 rounded-full bg-gold text-[#241c07] font-bold text-[8px] flex items-center justify-center">
              {unreadCount}
            </span>
          )}
          <span className="tab-label">Alertes</span>
        </button>

        {/* Search */}
        <button
          className={`bottom-tab-btn ${mobileSearchOpen ? 'active' : ''}`}
          onClick={() => { setMobileSearchOpen(true); setMobileChaptersOpen(false); setMobileNotificationsOpen(false); }}
          aria-label="Rechercher"
        >
          <Icon name="search" className="tab-icon" />
          <span className="tab-label">Chercher</span>
        </button>

        {/* Settings */}
        <Link
          href="/reglages"
          className={`bottom-tab-btn ${pathname === '/reglages' && !mobileNotificationsOpen && !mobileChaptersOpen && !mobileSearchOpen ? 'active' : ''}`}
          onClick={() => { setMobileChaptersOpen(false); setMobileSearchOpen(false); setMobileNotificationsOpen(false); }}
          aria-label="Réglages"
        >
          <Icon name="tune" className="tab-icon" />
          <span className="tab-label">Réglages</span>
        </Link>
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
      <NotificationsBottomSheet
        isOpen={mobileNotificationsOpen}
        onClose={() => setMobileNotificationsOpen(false)}
        notifications={inAppNotifications}
        unreadCount={unreadCount}
        markAllRead={markAllNotificationsAsRead}
        clearAll={clearNotifications}
        permission={notificationPermission}
        requestPermission={requestNotificationPermission}
      />

      {/* ── SEARCH OVERLAY ─────────────────────────────────────────────────── */}
      <SearchOverlay isOpen={isSearchOverlayOpen} onClose={() => setIsSearchOverlayOpen(false)} />
    </>
  );
};

// Helper Component for Mobile Notifications Bottom Sheet
const NotificationsBottomSheet: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  notifications: InAppNotification[];
  unreadCount: number;
  markAllRead: () => void;
  clearAll: () => void;
  permission: string;
  requestPermission: () => void;
}> = ({ isOpen, onClose, notifications, unreadCount, markAllRead, clearAll, permission, requestPermission }) => {
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
                <Icon name="notifications" className="text-gold" />
                <h2 className="font-black text-sm uppercase tracking-widest text-white">
                  Notifications
                </h2>
                {unreadCount > 0 && (
                  <span className="bg-gold text-[#241c07] font-bold text-xs px-1.5 py-0.5 rounded-full ml-1">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="flex gap-3 text-xs">
                <button 
                  onClick={markAllRead} 
                  className="text-gold hover:underline"
                >
                  Tout lire
                </button>
                <button 
                  onClick={clearAll} 
                  className="text-gold hover:underline"
                >
                  Effacer
                </button>
              </div>
            </div>

            {/* Notifications list */}
            <div className="overflow-y-auto flex-1 px-4 pt-3 pb-8 space-y-3" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}>
              {notifications.length === 0 ? (
                <p className="text-sm text-white/40 italic text-center py-8">Aucune notification.</p>
              ) : (
                notifications.map(n => (
                  <div 
                    key={n.id}
                    className="p-3.5 rounded-xl border text-left transition-all"
                    style={{
                      background: n.read ? 'transparent' : 'rgba(212, 175, 55, 0.05)',
                      borderColor: n.read ? 'var(--border-subtle)' : 'var(--border-gold)',
                    }}
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">{n.title}</h5>
                      <span className="text-[10px] text-white/40 whitespace-nowrap">{n.time}</span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-reading">{n.body}</p>
                  </div>
                ))
              )}

              {permission === 'default' && (
                <button
                  onClick={requestPermission}
                  className="w-full mt-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-gold transition-all"
                  style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--border-gold)' }}
                >
                  Activer les notifications
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
