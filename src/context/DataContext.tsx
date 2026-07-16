'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Chapter } from '@/data/chapters';
import { PageContent } from '@/types/content';
import { fetchChapters, fetchAllPages } from '@/utils/supabase';

interface DataContextType {
  chapters: Chapter[];
  pages: PageContent[];
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [pages, setPages] = useState<PageContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    
    // Essayer de charger depuis le localStorage d'abord pour un démarrage instantané
    try {
      const cachedChapters = localStorage.getItem('cache_chapters');
      const cachedPages = localStorage.getItem('cache_pages');
      if (cachedChapters && cachedPages) {
        setChapters(JSON.parse(cachedChapters));
        setPages(JSON.parse(cachedPages));
        setIsLoading(false);
      }
    } catch (e) {
      console.warn("Could not load cache:", e);
    }

    const loadData = async () => {
      try {
        const [chaptersData, pagesData] = await Promise.all([
          fetchChapters(),
          fetchAllPages()
        ]);
        
        if (isMounted) {
          if (chaptersData && chaptersData.length > 0) {
            setChapters(chaptersData);
            setPages(pagesData);
            setError(null);
            
            // Sauvegarder dans le cache
            try {
              localStorage.setItem('cache_chapters', JSON.stringify(chaptersData));
              localStorage.setItem('cache_pages', JSON.stringify(pagesData));
            } catch (e) { /* ignore cache write errors if storage is full */ }
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
    <DataContext.Provider value={{ chapters, pages, isLoading, error, retry }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
