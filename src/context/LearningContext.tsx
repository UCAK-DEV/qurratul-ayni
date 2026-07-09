'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Known sub-sections per chapter id (used to compute progress)
// e.g. chapter "9" has sections a, b, c, d, e => ids "9", "9-a", "9-b", "9-c", "9-d", "9-e"
const CHAPTER_SECTIONS: Record<string, string[]> = {
  '1':  ['1'],
  '2':  ['2'],
  '3':  ['3'],
  '4':  ['4'],
  '5':  ['5'],
  '6':  ['6'],
  '7':  ['7'],
  '8':  ['8'],
  '9':  ['9', '9-a', '9-b', '9-c', '9-d', '9-e'],
  '10': ['10', '10-a', '10-b', '10-c', '10-d'],
  '11': ['11', '11-a', '11-b', '11-c'],
  '12': ['12', '12-a', '12-b', '12-c', '12-d'],
  '13': ['13', '13-a', '13-b'],
  '14': ['14', '14-a', '14-b', '14-c'],
  '15': ['15'],
  '16': ['16'],
  '17': ['17'],
  '18': ['18'],
  '19': ['19'],
};

export interface ChapterProgress {
  completed: number;
  total: number;
  percentage: number;
  sections: Array<{ id: string; completed: boolean; isCurrentVisit: boolean }>;
}

interface LearningContextType {
  completedChapters: string[]; // Liste des fullId (ex: "1", "10-a")
  lastVisitedSlug: string | null;
  markAsCompleted: (id: string) => void;
  setLastVisited: (id: string) => void;
  isCompleted: (id: string) => boolean;
  isInProgress: (id: string) => boolean;
  getChapterProgress: (chapterId: string) => ChapterProgress;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider = ({ children }: { children: ReactNode }) => {
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [lastVisitedSlug, setLastVisitedSlug] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedCompleted = localStorage.getItem('completedChapters');
      const savedLast = localStorage.getItem('lastVisitedSlug');
      if (savedCompleted) {
        const parsedCompleted = JSON.parse(savedCompleted);
        setTimeout(() => setCompletedChapters(parsedCompleted), 0);
      }
      if (savedLast) {
        setTimeout(() => setLastVisitedSlug(savedLast), 0);
      }
    } catch (e) {
      console.error("Failed to load learning data:", e);
    }
  }, []);

  const markAsCompleted = (id: string) => {
    setCompletedChapters(prev => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      localStorage.setItem('completedChapters', JSON.stringify(next));
      return next;
    });
  };

  const setLastVisited = (id: string) => {
    setLastVisitedSlug(id);
    localStorage.setItem('lastVisitedSlug', id);
  };

  const isCompleted = (id: string) => completedChapters.includes(id);

  /** Returns true if page was visited (is lastVisited) but not yet completed */
  const isInProgress = (id: string) => lastVisitedSlug === id && !completedChapters.includes(id);

  /** Compute completion stats for a given chapter */
  const getChapterProgress = (chapterId: string): ChapterProgress => {
    const sections = CHAPTER_SECTIONS[chapterId] ?? [chapterId];
    const completedCount = sections.filter(id => completedChapters.includes(id)).length;
    return {
      completed: completedCount,
      total: sections.length,
      percentage: sections.length > 0 ? Math.round((completedCount / sections.length) * 100) : 0,
      sections: sections.map(id => ({
        id,
        completed: completedChapters.includes(id),
        isCurrentVisit: lastVisitedSlug === id,
      })),
    };
  };

  return (
    <LearningContext.Provider value={{
      completedChapters,
      lastVisitedSlug,
      markAsCompleted,
      setLastVisited,
      isCompleted,
      isInProgress,
      getChapterProgress,
    }}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) throw new Error('useLearning must be used within a LearningProvider');
  return context;
};
