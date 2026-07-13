'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLearning } from '@/context/LearningContext';
import { useData } from '@/context/DataContext';
import { calculateHijriDate } from '@/utils/hijri';
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
  const [selectedNafila, setSelectedNafila] = useState<NafilaRecommendation | null>(null);

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

    // 2. Load daily Nafila recommendations
    const hijriDate = calculateHijriDate(offset);
    const dayOfWeek = new Date().getDay();
    const recommendations = getRecommendationForDate(hijriDate.day, hijriDate.month, dayOfWeek);
    if (recommendations.length > 0) {
      setSelectedNafila(recommendations[0]);
    }
  }

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

        {/* ─── Hero / Titre du livre ─── */}
        <header className="islamic-pattern-header space-y-4 text-left pb-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/80 block">
            Serigne Shouhaïbou Mbacké
          </span>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h1 className="font-display text-5xl sm:text-6xl font-black leading-none tracking-tight text-white">
              Qurratul <span className="gold-gradient-text">Ayni</span>
            </h1>
            <span className="font-amiri text-4xl text-gold/45 block sm:inline" dir="rtl">
              قرة العين
            </span>
          </div>
          <p className="font-reading text-lg text-white/70 max-w-2xl leading-relaxed">
            Recueil de recommandations spirituelles et de jurisprudence islamique pour le mouride, aujourd’hui le <span className="text-gold font-medium">{currentHijri.formattedFr}</span>.
          </p>
        </header>

        {/* ─── Nafila du jour ─── */}
        <section>
          <div className="relative p-10 md:p-12 rounded-3xl overflow-hidden border border-white/10 group transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5">
            {/* Background image blurred and darkened */}
            <div 
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              style={{ 
                backgroundImage: 'url("/images/nafilah-bg.jpg")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                filter: 'blur(3px) brightness(0.35)'
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gold text-lg">❖</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold/90">
                    Recommandation du Jour
                  </span>
                </div>
                <span className="font-amiri text-xl text-gold/50" dir="rtl">
                  نافلَة اليَوم
                </span>
              </div>

              {selectedNafila ? (
                <div className="space-y-6">
                  {/* Title & Description */}
                  <div className="space-y-3 text-left">
                    <h3 className="font-display text-3xl font-light tracking-tight text-white">
                      {selectedNafila.title}
                    </h3>
                    <p className="font-reading text-base text-white/70 leading-relaxed max-w-3xl">
                      {selectedNafila.description}
                    </p>
                  </div>

                  {/* Rewards / Bienfaits */}
                  {selectedNafila.reward && (
                    <div className="pl-4 border-l border-gold/30 py-0.5 space-y-1 text-left">
                      <span className="text-[9px] uppercase tracking-widest font-black text-gold/60 block">
                        Bienfaits & Grâce
                      </span>
                      <p className="text-sm text-white/60 italic leading-relaxed max-w-3xl">
                        {selectedNafila.reward}
                      </p>
                    </div>
                  )}

                  {/* Actions / Wird */}
                  <div className="flex items-center justify-between gap-6 flex-wrap pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      {selectedNafila.wird && (
                        <div className="flex items-center gap-2 text-xs text-white/50">
                          <span className="text-gold">❖</span>
                          <span className="font-medium">Litanies : <span className="text-white/80">{selectedNafila.wird}</span></span>
                        </div>
                      )}
                    </div>
                    
                    <Link 
                      href={getNafilaUrl(selectedNafila)} 
                      className="px-6 py-2.5 rounded-lg border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 flex items-center gap-2 active:scale-95"
                    >
                      Ouvrir la Nafila
                      <Icon name="arrow_forward" className="text-xs" />
                    </Link>
                  </div>
                </div>
              ) : (
                <p className="font-reading text-sm text-white/50 italic leading-relaxed text-left">
                  Retrouvez les wirds quotidiens et lectures recommandées aux Parties 17 et 19.
                </p>
              )}
            </div>
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
                  <div className="card relative min-h-[12rem] p-6 flex flex-col justify-between overflow-hidden group-hover:-translate-y-1 group-hover:border-[var(--border-gold)]">
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

                    <div className="space-y-2 mt-4 text-left">
                      <h3 className="text-lg font-semibold text-adaptive-primary leading-snug group-hover:text-gold transition-colors">
                        {chapter.titleFr}
                      </h3>
                      <p className="font-amiri text-2xl text-gold/50 group-hover:text-gold/85 transition-colors text-right" lang="ar" dir="rtl">
                        {chapter.titleAr}
                      </p>
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