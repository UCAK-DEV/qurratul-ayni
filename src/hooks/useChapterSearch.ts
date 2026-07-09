'use client';

import { useMemo } from 'react';
import type { IFuseOptions } from 'fuse.js';
import Fuse from 'fuse.js';
import { Chapter } from '@/data/chapters';
import { useDebounce } from '@/hooks/useDebounce';
import { useData } from '@/context/DataContext';

const fuseOptions: IFuseOptions<Chapter> = {
  keys: ['titleFr', 'titleAr', 'desc'],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
};

export const useChapterSearch = (query: string, debounceMs: number = 300): Chapter[] => {
  const { chapters } = useData();
  const debouncedQuery = useDebounce(query, debounceMs);
  const fuse = useMemo(() => new Fuse(chapters, fuseOptions), [chapters]);

  const results = useMemo(() => {
    if (debouncedQuery.trim().length > 1) {
      return fuse.search(debouncedQuery).map(result => result.item);
    }
    return [];
  }, [debouncedQuery, fuse]);

  return results;
};
