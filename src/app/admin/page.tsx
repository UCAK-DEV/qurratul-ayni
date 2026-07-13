'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { calculateHijriDate } from '@/utils/hijri';
import { getSetting, setSetting } from '@/utils/settings';
import { fetchChapters, fetchPageContent } from '@/utils/supabase';
import { Chapter } from '@/data/chapters';
import { PageContent } from '@/types/content';

// Helper to update Supabase directly for audio files
import { getSupabaseClient } from '@/utils/supabase';
import Icon from '@/components/Icon';

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'calendar' | 'audio'>('calendar');
  const [hijriOffset, setHijriOffset] = useState<number>(0);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapterId, setSelectedChapterId] = useState<string>('5');
  const [chapterPages, setChapterPages] = useState<PageContent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Audio edit states
  const [chapterAudioUrls, setChapterAudioUrls] = useState<Record<string, string>>({});
  const [pageAudioUrls, setPageAudioUrls] = useState<Record<string, string>>({});

  useEffect(() => {
    setMounted(true);
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    // Load Hijri offset
    const offsetStr = await getSetting('hijri_offset', '0');
    setHijriOffset(parseInt(offsetStr, 10));

    // Load chapters
    const chaptersData = await fetchChapters();
    setChapters(chaptersData);

    // Initial audio values for chapters
    const chAudios: Record<string, string> = {};
    chaptersData.forEach(c => {
      chAudios[c.id] = c.audioUrl || '';
    });
    setChapterAudioUrls(chAudios);

    setIsLoading(false);
  };

  // Load pages for a selected chapter
  useEffect(() => {
    if (!mounted || !selectedChapterId) return;
    
    const loadPagesForChapter = async () => {
      // Find subsections mapping
      const subSectionsMap: Record<string, string[]> = {
        "5": ["a", "b", "c", "d", "e", "f"],
        "6": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
        "8": ["a"],
        "9": ["a"],
        "10": ["a", "b", "c", "d"],
        "11": ["a"],
        "12": ["a", "b", "c", "d", "e", "f", "g", "h"],
        "13": ["a", "b"],
        "15": ["a", "b"],
        "17": ["a", "b", "c", "d", "e", "f", "g", "h"],
        "19": ["a", "b", "c", "d"]
      };

      const sections = subSectionsMap[selectedChapterId] || [];
      const pagesData: PageContent[] = [];
      const pgAudios: Record<string, string> = {};

      for (const sec of sections) {
        const fullId = `${selectedChapterId}-${sec}`;
        const page = await fetchPageContent(fullId);
        if (page) {
          pagesData.push(page);
          pgAudios[fullId] = page.audioUrl || '';
        }
      }
      setChapterPages(pagesData);
      setPageAudioUrls(prev => ({ ...prev, ...pgAudios }));
    };

    loadPagesForChapter();
  }, [selectedChapterId, mounted]);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSaveOffset = async () => {
    try {
      await setSetting('hijri_offset', hijriOffset.toString());
      showNotification("Ajustement du calendrier musulman enregistré avec succès.");
    } catch {
      showNotification("Erreur lors de la sauvegarde du réglage.", "error");
    }
  };

  const handleSaveChapterAudio = async (chapterId: string) => {
    const audioUrl = chapterAudioUrls[chapterId];
    if (typeof window !== 'undefined') {
      localStorage.setItem(`audio_chapter_${chapterId}`, audioUrl);
    }

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase
        .from('chapters')
        .update({ audiourl: audioUrl })
        .eq('id', chapterId);

      if (error) throw error;
      showNotification(`Audio du chapitre ${chapterId} mis à jour dans la base de données.`);
    } catch {
      showNotification(`Audio du chapitre ${chapterId} sauvegardé localement (Hors-ligne).`);
    }
  };

  const handleSavePageAudio = async (pageId: string) => {
    const audioUrl = pageAudioUrls[pageId];
    if (typeof window !== 'undefined') {
      localStorage.setItem(`audio_page_${pageId}`, audioUrl);
    }

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase
        .from('pages')
        .update({ audiourl: audioUrl })
        .eq('id', pageId);

      if (error) throw error;
      showNotification(`Audio de la section ${pageId} mis à jour dans la base de données.`);
    } catch {
      showNotification(`Audio de la section ${pageId} sauvegardé localement (Hors-ligne).`);
    }
  };

  if (!mounted) return null;

  const currentHijri = calculateHijriDate(hijriOffset);

  return (
    <main className="min-h-screen pt-24 pb-32 px-6 md:px-16" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 p-4 rounded-xl flex items-center gap-3 border shadow-2xl backdrop-blur-md"
            style={{ 
              backgroundColor: notification.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              borderColor: notification.type === 'success' ? 'var(--gold)' : 'rgba(239, 68, 68, 0.3)'
            }}
          >
            <Icon 
              name={notification.type === 'success' ? 'check_circle' : 'error'} 
              style={{ color: notification.type === 'success' ? 'var(--gold)' : 'rgb(239, 68, 68)' }} 
            />
            <p className="text-xs font-bold uppercase tracking-wider">{notification.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Link href="/accueil" className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all">
                <Icon name="arrow_back" className="text-sm" />
              </Link>
              <span className="text-gold text-xs uppercase tracking-[0.4em] font-black">Espace Gestion</span>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter">Administration</h1>
          </div>

          <div className="flex bg-white/[0.03] p-1 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-5 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === 'calendar' ? 'bg-gold text-[#010503] shadow-lg shadow-gold/10' : 'text-white/60 hover:text-white'
              }`}
            >
              Calendrier Hijri
            </button>
            <button
              onClick={() => setActiveTab('audio')}
              className={`px-5 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === 'audio' ? 'bg-gold text-[#010503] shadow-lg shadow-gold/10' : 'text-white/60 hover:text-white'
              }`}
            >
              Fichiers Audio
            </button>
          </div>
        </header>

        {/* Calendar Adjust Section */}
        {activeTab === 'calendar' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold">
                <Icon name="calendar_month" className="text-2xl" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Ajustement Date Musulmane (Hijri)</h2>
                <p className="text-xs text-white/50 uppercase tracking-widest">Ajuster la date lunaire en fonction de la lune observée</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
              {/* Preview Card */}
              <div className="p-6 rounded-xl bg-black/40 border border-gold/10 text-center space-y-2">
                <span className="text-gold text-xs uppercase tracking-[0.22em] font-bold">Date Musulmane Actuelle</span>
                <p className="text-3xl font-serif text-white font-bold leading-tight">{currentHijri.formattedFr}</p>
                <p className="text-xl font-amiri text-gold/80" dir="rtl">{currentHijri.formattedAr}</p>
              </div>

              {/* Control Panel */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-white/60 block">Décalage Calendrier (Jours)</label>
                  <div className="flex items-center gap-4 bg-[#010302] p-2 rounded-xl border border-white/5">
                    <button 
                      onClick={() => setHijriOffset(prev => Math.max(-5, prev - 1))}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-gold/10 hover:border-gold/30 hover:text-gold flex items-center justify-center transition-all font-black text-lg"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-mono font-bold text-lg text-white">
                      {hijriOffset > 0 ? `+${hijriOffset}` : hijriOffset} jour{Math.abs(hijriOffset) > 1 ? 's' : ''}
                    </span>
                    <button 
                      onClick={() => setHijriOffset(prev => Math.min(5, prev + 1))}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-gold/10 hover:border-gold/30 hover:text-gold flex items-center justify-center transition-all font-black text-lg"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-white/40 italic">Ajuste le calendrier musulman de -5 à +5 jours pour corriger les observations de la nouvelle lune.</p>
                </div>

                <button
                  onClick={handleSaveOffset}
                  className="w-full py-4 rounded-xl bg-gold text-[#010503] text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/10"
                >
                  <Icon name="save" className="text-base" />
                  Enregistrer l'ajustement
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {/* Audio Manager Section */}
        {activeTab === 'audio' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* 1. Chapters Audio */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold">
                  <Icon name="music_note" className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Sons des Chapitres</h2>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Configurer les fichiers audio principaux des chapitres</p>
                </div>
              </div>

              {isLoading ? (
                <div className="flex justify-center py-10">
                  <Icon name="sync" className="animate-spin text-gold text-3xl" />
                </div>
              ) : (
                <div className="divide-y divide-white/5 max-h-[400px] overflow-y-auto pr-2 space-y-4">
                  {chapters.map(chapter => (
                    <div key={chapter.id} className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3 md:w-1/3">
                        <span className="text-xs font-mono text-gold bg-gold/10 px-2 py-1 rounded border border-gold/20">Ch {chapter.id}</span>
                        <div className="truncate">
                          <p className="text-xs font-bold text-white truncate">{chapter.titleFr}</p>
                          <p className="text-xs text-white/40 truncate font-reading">{chapter.desc}</p>
                        </div>
                      </div>

                      <div className="flex-1 flex gap-2">
                        <input
                          type="text"
                          placeholder="URL du fichier audio (.mp3)"
                          value={chapterAudioUrls[chapter.id] || ''}
                          onChange={(e) => setChapterAudioUrls(prev => ({ ...prev, [chapter.id]: e.target.value }))}
                          className="flex-1 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-gold/50"
                        />
                        <button
                          onClick={() => handleSaveChapterAudio(chapter.id)}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-xs font-black uppercase tracking-wider hover:bg-gold hover:text-black hover:border-gold transition-all flex items-center gap-1 flex-shrink-0"
                        >
                          <Icon name="save" className="text-xs" />
                          Sauver
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Subsections Audio */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold">
                    <Icon name="library_music" className="text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Sons des Sections / Leçons</h2>
                    <p className="text-xs text-white/50 uppercase tracking-widest">Configurer l'audio spécifique à chaque sous-section</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-xs uppercase font-bold text-white/40 tracking-wider">Chapitre :</label>
                  <select
                    value={selectedChapterId}
                    onChange={(e) => setSelectedChapterId(e.target.value)}
                    className="bg-[#010302] border border-white/10 text-xs text-gold rounded-lg px-3 py-2 focus:outline-none focus:border-gold/50"
                  >
                    {chapters.map(c => (
                      <option key={c.id} value={c.id}>Ch {c.id} - {c.titleFr.slice(0, 18)}...</option>
                    ))}
                  </select>
                </div>
              </div>

              {chapterPages.length === 0 ? (
                <p className="text-xs text-white/40 italic text-center py-6">Aucune sous-section configurable pour ce chapitre ou chargement en cours...</p>
              ) : (
                <div className="divide-y divide-white/5 space-y-4">
                  {chapterPages.map(page => (
                    <div key={page.id} className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3 md:w-1/3">
                        <span className="text-xs font-mono text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20">{page.id.toUpperCase()}</span>
                        <div className="truncate">
                          <p className="text-xs font-bold text-white truncate">{page.titleFr}</p>
                          <p className="font-amiri text-gold/40 text-xs truncate" dir="rtl">{page.titleAr}</p>
                        </div>
                      </div>

                      <div className="flex-1 flex gap-2">
                        <input
                          type="text"
                          placeholder="URL de l'audio de la leçon (.mp3)"
                          value={pageAudioUrls[page.id] || ''}
                          onChange={(e) => setPageAudioUrls(prev => ({ ...prev, [page.id]: e.target.value }))}
                          className="flex-1 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-gold/50"
                        />
                        <button
                          onClick={() => handleSavePageAudio(page.id)}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-xs font-black uppercase tracking-wider hover:bg-gold hover:text-black hover:border-gold transition-all flex items-center gap-1 flex-shrink-0"
                        >
                          <Icon name="save" className="text-xs" />
                          Sauver
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
