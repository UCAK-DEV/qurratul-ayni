'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Chapter } from '@/data/chapters';
import { fetchChapters } from '@/utils/supabase';

interface DataContextType {
  chapters: Chapter[];
  isLoading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchChapters();
        setChapters(data);
      } catch (e) {
        console.error("Failed to load data from Supabase:", e);
        setError("Impossible de charger le sommaire.");
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ chapters, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
