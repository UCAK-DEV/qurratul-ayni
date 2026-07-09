'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLearning } from '@/context/LearningContext';
import { useData } from '@/context/DataContext';
import { calculateHijriDate } from '@/utils/hijri';
import { getDakarPrayerTimes, PrayerTimes } from '@/utils/prayerTimes';
import { getSetting } from '@/utils/settings';
import { getRecommendationForDate, NafilaRecommendation } from '@/data/nafilas';

interface InAppNotification {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

export default function LibraryPage() {
  const { lastVisitedSlug, isCompleted } = useLearning();
  const { chapters, isLoading, error, retry } = useData();
  const [mounted, setMounted] = useState(false);

  // Dashboard state variables
  const [hijriOffset, setHijriOffset] = useState<number>(0);
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null);
  const [selectedNafila, setSelectedNafila] = useState<NafilaRecommendation | null>(null);

  // Notification states
  const [showNotificationCenter, setShowNotificationCenter] = useState<boolean>(false);
  const [notificationPermission, setNotificationPermission] = useState<string>('default');
  const [inAppNotifications, setInAppNotifications] = useState<InAppNotification[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
      initializeDashboard();
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function initializeDashboard() {
    // 1. Fetch Hijri Offset
    const offsetStr = await getSetting('hijri_offset', '0');
    const offset = parseInt(offsetStr, 10);
    setHijriOffset(offset);

    // 2. Fetch Prayer Times
    const times = getDakarPrayerTimes();
    setPrayerTimes(times);

    // 3. Determine next prayer
    determineNextPrayer(times);

    // 4. Load daily Nafila recommendations
    const hijriDate = calculateHijriDate(offset);
    const dayOfWeek = new Date().getDay();
    const recommendations = getRecommendationForDate(hijriDate.day, hijriDate.month, dayOfWeek);
    if (recommendations.length > 0) {
      setSelectedNafila(recommendations[0]);
    }

    // 5. Setup sample in-app notifications
    const samples: InAppNotification[] = [
      {
        id: '1',
        title: 'Recommandation du Jour',
        body: recommendations.length > 0 
          ? `Aujourd'hui : ${recommendations[0].title}. Découvrez la pratique recommandée.`
          : 'Découvrez les lectures et wirds recommandés pour aujourd\'hui.',
        time: 'Il y a 5 min',
        read: false
      }
    ];

    // Add alert about next prayer if exists
    if (times) {
      const nextP = getNextPrayerInfo(times);
      samples.push({
        id: '2',
        title: 'Prochaine Prière',
        body: `La prière de ${nextP.name} est à ${nextP.time}.`,
        time: 'À l\'instant',
        read: false
      });
    }

    setInAppNotifications(samples);

    // 6. Check Browser Notification Permission
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  }

  function determineNextPrayer(times: PrayerTimes) {
    if (!times) return;
    const nextP = getNextPrayerInfo(times);
    setNextPrayer(nextP);
  }

  function getNextPrayerInfo(times: PrayerTimes) {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const parseTimeToMinutes = (timeStr: string) => {
      const [h, m] = timeStr.split(':').map(Number);
      return h * 60 + m;
    };

    const prayers = [
      { name: 'Fajr', time: times.fajr, mins: parseTimeToMinutes(times.fajr) },
      { name: 'Chourouq', time: times.sunrise, mins: parseTimeToMinutes(times.sunrise) },
      { name: 'Dhuhr', time: times.dhuhr, mins: parseTimeToMinutes(times.dhuhr) },
      { name: 'Asr', time: times.asr, mins: parseTimeToMinutes(times.asr) },
      { name: 'Maghrib', time: times.maghrib, mins: parseTimeToMinutes(times.maghrib) },
      { name: 'Isha', time: times.isha, mins: parseTimeToMinutes(times.isha) },
    ];

    const next = prayers.find(p => p.mins > currentMinutes);
    return next || prayers[0]; // defaults to Fajr if all passed today
  };

  const requestNotificationPermission = async () => {
    if (typeof window === 'undefined' || !('Notification' in window)) return;
    
    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
      
      if (permission === 'granted') {
        new Notification("Notifications Activées", {
          body: "Vous recevrez des rappels quotidiens pour les prières et Nafilas.",
          icon: "/mosque-192.png"
        });
        
        // Add success notification in-app
        setInAppNotifications(prev => [
          {
            id: Date.now().toString(),
            title: 'Notifications activées',
            body: 'Les rappels de prières et de nafilas sur le bureau sont maintenant fonctionnels.',
            time: 'Maintenant',
            read: false
          },
          ...prev
        ]);
      }
    } catch (e) {
      console.error("Error requesting notification permission", e);
    }
  };

  const markAllNotificationsAsRead = () => {
    setInAppNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearNotifications = () => {
    setInAppNotifications([]);
  };

  const unreadCount = inAppNotifications.filter(n => !n.read).length;

  const lastChapter = lastVisitedSlug ? chapters.find(c => c.id === lastVisitedSlug.split('-')[0]) : null;

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gold"></div>
      </div>
    );
  }

  if (error && chapters.length === 0) {
    return (
      <div className="min-h-screen text-white flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}>
        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
          <span className="material-symbols-rounded text-4xl text-red-500">cloud_off</span>
        </div>
        <h1 className="text-3xl font-black mb-4 uppercase tracking-tighter">Données Inaccessibles</h1>
        <p className="text-white/60 mb-8 max-w-md font-serif italic">
          {error}. Vérifiez votre connexion ou la configuration de vos clés Supabase sur Vercel.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={retry}
            className="px-8 py-3 bg-gold text-black rounded-full text-[10px] font-black uppercase hover:scale-105 transition-all shadow-lg shadow-gold/20"
          >
            Réessayer
          </button>
          <Link href="/" className="px-8 py-3 bg-white/5 text-white rounded-full text-[10px] font-black uppercase hover:bg-white/10 transition-all border border-white/10">
            Accueil
          </Link>
        </div>
      </div>
    );
  }

  const currentHijri = calculateHijriDate(hijriOffset);

  return (
    <div className="min-h-screen pt-24 pb-32 px-6 md:px-16 overflow-x-hidden selection:bg-gold/30 relative"
      style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* top header area with Admin Link & Notification Bell */}
        <div className="flex justify-between items-center pb-4 border-b border-white/5">
          <div className="flex items-center gap-4">
            <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">QA DIGITAL CONTROL</span>
          </div>

          <div className="flex items-center gap-4 relative">
            {/* Notification Bell */}
            <button
              onClick={() => setShowNotificationCenter(!showNotificationCenter)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold/30 hover:text-gold transition-all"
              aria-label="Notification Center"
            >
              <span className="material-symbols-rounded text-lg">notifications</span>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-[#010503] font-black text-[9px] flex items-center justify-center border-2 border-[#010503] animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Center Dropdown */}
            <AnimatePresence>
              {showNotificationCenter && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute right-0 top-12 w-80 rounded-2xl border border-white/10 shadow-2xl p-5 z-40 backdrop-blur-xl"
                  style={{ background: 'var(--bg-nav)' }}
                >
                  <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-3">
                    <h4 className="text-xs font-black uppercase tracking-wider text-gold">Notifications</h4>
                    <div className="flex gap-2">
                      <button onClick={markAllNotificationsAsRead} className="text-[9px] uppercase font-bold text-white/40 hover:text-gold">Lire tout</button>
                      <span className="text-white/20">|</span>
                      <button onClick={clearNotifications} className="text-[9px] uppercase font-bold text-white/40 hover:text-gold">Effacer</button>
                    </div>
                  </div>

                  <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                    {inAppNotifications.length === 0 ? (
                      <p className="text-[10px] text-white/40 italic text-center py-4">Aucune notification.</p>
                    ) : (
                      inAppNotifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`p-3 rounded-xl border transition-all ${
                            notification.read ? 'bg-white/[0.01] border-white/5' : 'bg-gold/5 border-gold/20'
                          }`}
                        >
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <h5 className={`text-xs font-bold ${notification.read ? 'text-white/80' : 'text-white'}`}>{notification.title}</h5>
                            <span className="text-[8px] text-white/30 whitespace-nowrap">{notification.time}</span>
                          </div>
                          <p className="text-[10px] text-white/60 leading-relaxed">{notification.body}</p>
                        </div>
                      ))
                    )}
                  </div>

                  {notificationPermission === 'default' && (
                    <div className="mt-4 pt-3 border-t border-white/5">
                      <button
                        onClick={requestNotificationPermission}
                        className="w-full py-2 bg-gold/10 hover:bg-gold/20 text-gold border border-gold/20 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all"
                      >
                        Activer les alertes système
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Admin Link */}
            <Link 
              href="/admin" 
              className="px-5 py-2.5 bg-white/[0.03] border border-white/10 hover:border-gold/30 hover:text-gold rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-rounded text-sm">settings</span>
              Admin
            </Link>
          </div>
        </div>

        {/* ─── NEW PREMIUM DASHBOARD HEADER ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Widget 1: Islamic Clock & Hijri Date */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-gold text-[9px] uppercase tracking-widest font-black">Calendrier Lunaire</span>
                <h2 className="text-xl font-serif text-white font-bold leading-tight mt-1">{currentHijri.formattedFr}</h2>
              </div>
              <span className="text-2xl font-amiri text-gold/60" dir="rtl">{currentHijri.monthAr}</span>
            </div>

            {/* Prayer Times Horizontal Ribbon */}
            {prayerTimes && (
              <div className="space-y-2">
                <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Heures de Prières (Dakar)</p>
                <div className="grid grid-cols-6 gap-1 bg-black/40 p-2 rounded-xl border border-white/5">
                  {[
                    { name: 'Fajr', val: prayerTimes.fajr },
                    { name: 'Chor.', val: prayerTimes.sunrise },
                    { name: 'Dhuhr', val: prayerTimes.dhuhr },
                    { name: 'Asr', val: prayerTimes.asr },
                    { name: 'Maghr.', val: prayerTimes.maghrib },
                    { name: 'Isha', val: prayerTimes.isha }
                  ].map((p, i) => {
                    const isNext = nextPrayer && nextPrayer.name.startsWith(p.name.slice(0, 4));
                    return (
                      <div 
                        key={i} 
                        className={`text-center py-1 rounded transition-all ${
                          isNext ? 'bg-gold/10 border border-gold/30' : ''
                        }`}
                      >
                        <p className={`text-[8px] uppercase font-black ${isNext ? 'text-gold' : 'text-white/40'}`}>{p.name}</p>
                        <p className={`text-[10px] font-mono mt-0.5 ${isNext ? 'text-white font-bold' : 'text-white/80'}`}>{p.val}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Widget 2: Nafila / Recommendation of the Day */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between lg:col-span-2 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-gold text-[9px] uppercase tracking-widest font-black">Recommandation & Nafila du Jour</span>
                {selectedNafila ? (
                  <h3 className="text-lg font-bold text-white mt-1">{selectedNafila.title}</h3>
                ) : (
                  <h3 className="text-lg font-bold text-white/40 italic mt-1">Aucune nafila spécifique aujourd'hui</h3>
                )}
              </div>
              <span className="material-symbols-rounded text-gold text-2xl">auto_awesome</span>
            </div>

            {selectedNafila ? (
              <div className="space-y-3">
                <p className="text-xs text-white/70 leading-relaxed line-clamp-2">{selectedNafila.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedNafila.reward && (
                    <span className="px-2.5 py-1 rounded-md bg-gold/10 border border-gold/20 text-gold text-[8px] font-bold uppercase tracking-wider max-w-xs truncate">
                      ★ {selectedNafila.reward.slice(0, 40)}...
                    </span>
                  )}
                  {selectedNafila.wird && (
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/75 text-[8px] font-mono max-w-xs truncate">
                      📿 {selectedNafila.wird}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-xs text-white/50 leading-relaxed font-serif italic">Consultez les recommandations de wirds quotidiens et de lectures du Coran recommandés dans le livre à la Partie 17 et 19.</p>
            )}
          </div>
        </section>

        {/* Reprise Automatique Banner */}
        <AnimatePresence>
          {lastVisitedSlug && lastChapter && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-20"
            >
              <div className="p-1 rounded-2xl bg-gradient-to-r from-gold/50 via-gold/10 to-transparent">
                <div className="bg-[#010302] rounded-[0.9rem] p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <span className="material-symbols-rounded">history</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gold tracking-widest leading-none mb-1">Continuer l'étude</p>
                      <p className="text-sm font-medium text-white/80">{lastChapter.titleFr}</p>
                    </div>
                  </div>
                  <Link 
                    href={`/partie/${lastVisitedSlug.split('-').join('/')}`}
                    className="px-6 py-2 bg-gold text-black rounded-xl text-[10px] font-black uppercase hover:scale-105 transition-all shadow-lg shadow-gold/20"
                  >
                    Reprendre
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header - Sommaire */}
        <header className="mb-8 space-y-4">
          <div className="flex items-center gap-4 mb-2">
            <span className="h-[1px] w-12 bg-gold/50" />
            <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">
              Bibliothèque Numérique
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
            Sommaire <br />
            <span className="gold-gradient-text opacity-90">Général</span>
          </h1>
        </header>

        {/* Grille de Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="group"
            >
              <Link href={`/partie/${chapter.id}`}>
                <div className="relative h-48 w-full rounded-2xl bg-white/[0.03] border border-white/10 p-6 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.06] hover:border-gold/50 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.2)] overflow-hidden">
                  
                  {/* Effet de brillance au survol */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* L'Icône */}
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-white/5 group-hover:text-gold/10 transition-colors duration-500">
                        {chapter.id.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {isCompleted(chapter.id) && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold"
                        >
                          <span className="material-symbols-rounded text-lg">check_circle</span>
                        </motion.div>
                      )}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-gold/80 group-hover:text-gold group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                        <span className="material-symbols-rounded text-2xl leading-none">
                          {chapter.icon}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Textes */}
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-lg font-bold text-white/90 group-hover:text-white truncate">
                        {chapter.titleFr}
                      </h3>
                      <span className="text-xl font-amiri text-gold/40 group-hover:text-gold/90 transition-colors" lang="ar" dir="rtl">
                        {chapter.titleAr}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                      <span className="text-[10px] font-bold text-gold uppercase tracking-tighter">Découvrir la partie</span>
                      <span className="material-symbols-rounded text-sm text-gold">arrow_forward</span>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/5 pt-12 text-center opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-[10px] tracking-[0.2em] uppercase">
          Projet Khouratoul Ayni • 2026
        </p>
      </footer>
    </div>
  );
}
