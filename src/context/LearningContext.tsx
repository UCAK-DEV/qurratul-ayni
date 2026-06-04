'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LearningContextType {
  completedChapters: string[]; // Liste des fullId (ex: "1", "10-a")
  lastVisitedSlug: string | null;
  markAsCompleted: (id: string) => void;
  setLastVisited: (id: string) => void;
  isCompleted: (id: string) => boolean;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider = ({ children }: { children: ReactNode }) => {
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [lastVisitedSlug, setLastVisitedSlug] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedCompleted = localStorage.getItem('completedChapters');
      const savedLast = localStorage.getItem('lastVisitedSlug');
      if (savedCompleted) setCompletedChapters(JSON.parse(savedCompleted));
      if (savedLast) setLastVisitedSlug(savedLast);
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

  return (
    <LearningContext.Provider value={{ completedChapters, lastVisitedSlug, markAsCompleted, setLastVisited, isCompleted }}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) throw new Error('useLearning must be used within a LearningProvider');
  return context;
};
