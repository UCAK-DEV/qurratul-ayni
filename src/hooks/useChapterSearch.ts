'use client';

import { useState, useMemo, useEffect } from 'react';
import type { IFuseOptions } from 'fuse.js';
import Fuse from 'fuse.js';
import { CHAPTERS, Chapter } from '@/data/chapters';
import { useDebounce } from '@/hooks/useDebounce';

const fuseOptions: IFuseOptions<Chapter> = {
  keys: ['titleFr', 'titleAr', 'desc'],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
};

export const useChapterSearch = (query: string, debounceMs: number = 300): Chapter[] => {
  const [results, setResults] = useState<Chapter[]>([]);
  const debouncedQuery = useDebounce(query, debounceMs);
  const fuse = useMemo(() => new Fuse(CHAPTERS, fuseOptions), []);

  useEffect(() => {
    if (debouncedQuery.trim().length > 1) {
      const searchResults = fuse.search(debouncedQuery);
      setResults(searchResults.map(result => result.item));
    } else {
      setResults([]);
    }
  }, [debouncedQuery, fuse]);

  return results;
};
