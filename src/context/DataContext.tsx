'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Chapter } from '@/data/chapters';
import { fetchChapters } from '@/utils/supabase';

interface DataContextType {
  chapters: Chapter[];
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        if (isMounted) setIsLoading(true);
        console.log("Fetching chapters from Supabase...");
        const data = await fetchChapters();
        
        if (isMounted) {
          if (data && data.length > 0) {
            setChapters(data);
            setError(null);
          } else {
            console.warn("No chapters found in Supabase.");
            setError("Aucune donnée trouvée. Vérifiez votre configuration Supabase.");
          }
        }
      } catch (e) {
        console.error("Failed to load data from Supabase:", e);
        if (isMounted) {
          const errMsg = e instanceof Error ? e.message : "Erreur de connexion à la base de données.";
          setError(errMsg);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadData();
    return () => { isMounted = false; };
  }, [retryCount]);

  const retry = () => setRetryCount(prev => prev + 1);

  return (
    <DataContext.Provider value={{ chapters, isLoading, error, retry }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
