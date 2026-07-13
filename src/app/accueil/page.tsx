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
import Icon from '@/components/Icon';

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
          <Icon name="cloud_off" className="text-4xl text-red-500" />
        </div>
        <h1 className="text-3xl font-black mb-4 uppercase tracking-tighter">Données Inaccessibles</h1>
        <p className="text-white/60 mb-8 max-w-md font-reading">
          {error}. Vérifiez votre connexion ou la configuration de vos clés Supabase sur Vercel.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={retry}
            className="px-8 py-3 bg-gold text-[#241c07] rounded-full text-xs font-black uppercase hover:scale-105 transition-all shadow-lg shadow-gold/20"
          >
            Réessayer
          </button>
          <Link href="/" className="px-8 py-3 bg-white/5 text-white rounded-full text-xs font-black uppercase hover:bg-white/10 transition-all border border-white/10">
            Accueil
          </Link>
        </div>
      </div>
    );
  }

  const currentHijri = calculateHijriDate(hijriOffset);

  const prayerList = prayerTimes ? [
    { name: 'Fajr', val: prayerTimes.fajr },
    { name: 'Chourouq', val: prayerTimes.sunrise },
    { name: 'Dhuhr', val: prayerTimes.dhuhr },
    { name: 'Asr', val: prayerTimes.asr },
    { name: 'Maghrib', val: prayerTimes.maghrib },
    { name: 'Isha', val: prayerTimes.isha },
  ] : [];

  const getNafilaUrl = (nafilah: NafilaRecommendation) => {
    if (nafilah.month === 9 && nafilah.day !== null) {
      return `/partie/18/${nafilah.day}`;
    }
    if (nafilah.dayOfWeek !== undefined && nafilah.dayOfWeek !== null) {
      const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
      return `/partie/18/${days[nafilah.dayOfWeek]}`;
    }
    return '/partie/18';
  };

  return (
    <div className="min-h-screen pt-28 pb-32 px-6 md:px-16 overflow-x-hidden relative"
      style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <div className="relative z-10 max-w-6xl mx-auto space-y-16">

        {/* ─── Barre discrète : notifications + admin ─── */}
        <div className="flex justify-end items-center gap-3 relative">
          <button
            onClick={() => setShowNotificationCenter(!showNotificationCenter)}
            className="relative w-11 h-11 flex items-center justify-center rounded-xl card"
            aria-label="Centre de notifications"
          >
            <Icon name="notifications" className="text-xl text-adaptive-secondary" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-gold text-[#241c07] font-bold text-sm flex items-center justify-center">
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
                className="absolute right-0 top-14 w-80 rounded-2xl border p-5 z-40 backdrop-blur-xl"
                style={{ background: 'var(--bg-nav)', borderColor: 'var(--border-medium)' }}
              >
                <div className="flex justify-between items-center pb-3 border-b mb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <h4 className="text-sm font-semibold text-gold">Notifications</h4>
                  <div className="flex gap-3 text-xs">
                    <button onClick={markAllNotificationsAsRead} className="text-adaptive-muted hover:text-gold transition-colors">Tout lire</button>
                    <button onClick={clearNotifications} className="text-adaptive-muted hover:text-gold transition-colors">Effacer</button>
                  </div>
                </div>
                <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                  {inAppNotifications.length === 0 ? (
                    <p className="text-sm text-adaptive-muted italic text-center py-5">Aucune notification.</p>
                  ) : (
                    inAppNotifications.map(notification => (
                      <div key={notification.id}
                        className="p-3 rounded-xl border transition-all"
                        style={{
                          background: notification.read ? 'transparent' : 'color-mix(in srgb, var(--accent) 6%, transparent)',
                          borderColor: notification.read ? 'var(--border-subtle)' : 'var(--border-gold)',
                        }}>
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <h5 className="text-sm font-semibold text-adaptive-primary">{notification.title}</h5>
                          <span className="text-xs text-adaptive-muted whitespace-nowrap">{notification.time}</span>
                        </div>
                        <p className="text-sm text-adaptive-secondary leading-relaxed">{notification.body}</p>
                      </div>
                    ))
                  )}
                </div>
                {notificationPermission === 'default' && (
                  <button
                    onClick={requestNotificationPermission}
                    className="mt-4 w-full py-2.5 rounded-xl text-sm font-medium text-gold transition-all"
                    style={{ background: 'color-mix(in srgb, var(--accent) 10%, transparent)', border: '1px solid var(--border-gold)' }}
                  >
                    Activer les alertes
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <Link href="/admin" className="btn-ghost !py-2.5 !px-4 !text-sm">
            <Icon name="settings" className="text-lg" />
            Admin
          </Link>
        </div>

        {/* ─── Hero serein ─── */}
        <header className="islamic-pattern-header space-y-5 rounded-3xl p-6 -m-6">
          <span className="eyebrow">Bibliothèque spirituelle</span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Assalâmou <span className="gold-gradient-text">aleykoum</span>
          </h1>
          <p className="font-reading text-lg text-adaptive-secondary max-w-xl leading-relaxed">
            Les enseignements de Serigne Shouhaïbou Mbacké, à lire et à écouter,
            aujourd’hui le <span className="text-adaptive-primary">{currentHijri.formattedFr}</span>.
          </p>
        </header>

        {/* ─── Prière du jour + Nafila ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* Horaires de prière (Dakar) */}
          <div className="card p-6 lg:col-span-3 space-y-5">
            <div className="flex items-center justify-between">
              <span className="eyebrow no-rule">Prières · Dakar</span>
              <span className="font-amiri text-2xl text-gold/70" dir="rtl">{currentHijri.monthAr}</span>
            </div>
            {prayerTimes && (
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {prayerList.map((p, i) => {
                  const isNext = !!nextPrayer && nextPrayer.name.startsWith(p.name.slice(0, 4));
                  return (
                    <div key={i}
                      className="text-center py-3 rounded-xl transition-all"
                      style={isNext
                         ? { background: 'color-mix(in srgb, var(--accent) 12%, transparent)', border: '1px solid var(--border-gold)' }
                        : { background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                      <p className={`text-xs font-semibold tracking-wide ${isNext ? 'text-gold' : 'text-adaptive-muted'}`}>{p.name}</p>
                      <p className={`text-base mt-1 tabular-nums ${isNext ? 'text-adaptive-primary font-semibold' : 'text-adaptive-secondary'}`}>{p.val}</p>
                    </div>
                  );
                })}
              </div>
            )}
            {nextPrayer && (
              <p className="text-sm text-adaptive-muted">
                Prochaine prière : <span className="text-gold font-medium">{nextPrayer.name}</span> à {nextPrayer.time}.
              </p>
            )}
          </div>

          {/* Nafila du jour */}
          <div className="card p-6 lg:col-span-2 flex flex-col justify-between gap-4">
            <div className="flex items-start justify-between gap-3">
              <span className="eyebrow no-rule">Recommandation du jour</span>
              <Icon name="auto_awesome" className="text-gold text-2xl" />
            </div>
            {selectedNafila ? (
              <div className="space-y-3 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-semibold leading-snug">{selectedNafila.title}</h3>
                  <p className="text-sm text-adaptive-secondary leading-relaxed line-clamp-3">{selectedNafila.description}</p>
                </div>
                <div className="flex items-center justify-between gap-2 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {selectedNafila.wird && (
                      <span className="px-3 py-1.5 rounded-lg text-sm text-adaptive-secondary" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                        📿 {selectedNafila.wird}
                      </span>
                    )}
                  </div>
                  <Link 
                    href={getNafilaUrl(selectedNafila)} 
                    className="btn-gold !py-2 !px-4 !text-xs whitespace-nowrap"
                  >
                    Ouvrir la Nafila
                    <Icon name="arrow_forward" className="text-xs" />
                  </Link>
                </div>
              </div>
            ) : (
              <p className="font-reading text-base text-adaptive-secondary leading-relaxed italic">
                Retrouvez les wirds quotidiens et lectures recommandées aux Parties 17 et 19.
              </p>
            )}
          </div>
        </section>

        {/* ─── Reprendre la lecture ─── */}
        <AnimatePresence>
          {lastVisitedSlug && lastChapter && (
            <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="card p-5 flex items-center justify-between gap-4 flex-wrap"
                style={{ borderColor: 'var(--border-gold)', background: 'color-mix(in srgb, var(--accent) 5%, transparent)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Icon name="history" />
                  </div>
                  <div>
                    <span className="eyebrow no-rule">Reprendre l’étude</span>
                    <p className="text-lg font-medium text-adaptive-primary mt-1">{lastChapter.titleFr}</p>
                  </div>
                </div>
                <Link href={`/partie/${lastVisitedSlug.split('-').join('/')}`} className="btn-gold">
                  Reprendre
                  <Icon name="arrow_forward" className="text-lg" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Sommaire ─── */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="eyebrow">Sommaire général</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Les chapitres du livre
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.3) }}
                className="group"
              >
                <Link href={`/partie/${chapter.id}`}>
                  <div className="card relative h-44 p-6 flex flex-col justify-between overflow-hidden group-hover:-translate-y-1 group-hover:border-[var(--border-gold)]">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex justify-between items-start">
                      <span className="font-display text-4xl font-bold text-white/[0.07] group-hover:text-gold/20 transition-colors duration-500">
                        {chapter.id.toString().padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-2.5">
                        {isCompleted(chapter.id) && (
                          <span className="w-8 h-8 rounded-full bg-gold/15 border border-[var(--border-gold)] flex items-center justify-center text-gold">
                            <Icon name="check" className="text-lg" />
                          </span>
                        )}
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-gold/80 group-hover:text-gold group-hover:bg-gold/10 transition-all duration-500"
                          style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                          <Icon name={chapter.icon} className="text-2xl leading-none" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end justify-between gap-3">
                      <h3 className="text-lg font-semibold text-adaptive-primary leading-snug">
                        {chapter.titleFr}
                      </h3>
                      <span className="font-amiri text-2xl text-gold/50 group-hover:text-gold/90 transition-colors shrink-0" lang="ar" dir="rtl">
                        {chapter.titleAr}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 pt-10 max-w-6xl mx-auto text-center">
        <div className="section-rule mb-6" />
        <p className="font-amiri text-xl text-gold/60 mb-2" dir="rtl">قرة العين</p>
        <p className="text-sm text-adaptive-muted">Projet Qurratul Ayni · 2026</p>
      </footer>
    </div>
  );
}
