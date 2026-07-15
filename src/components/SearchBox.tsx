'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Fuse from 'fuse.js';
import Icon from '@/components/Icon';
import { useData } from '@/context/DataContext';
import { Chapter } from '@/data/chapters';

export const SearchBox: React.FC<{
  pillClassName?: string;
  dropdownClassName?: string;
}> = ({ pillClassName = 'w-36 focus-within:w-52', dropdownClassName = 'w-80 right-0' }) => {
  const { chapters } = useData();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const fuse = useMemo(() => new Fuse(chapters, {
    keys: ['titleFr', 'titleAr', 'desc'],
    threshold: 0.35,
  }), [chapters]);

  const results: Chapter[] = query.length > 1 ? fuse.search(query).map(r => r.item) : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative flex items-center" ref={ref}>
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 bg-white/[0.03] border-white/15 focus-within:border-gold/50 focus-within:bg-black/25 hover:bg-white/[0.06] ${pillClassName}`}>
        <Icon name="search" className="text-gold text-sm" />
        <input
          type="text"
          placeholder="Rechercher..."
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            if (!isOpen && e.target.value.length > 0) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="bg-transparent outline-none text-xs w-full text-white placeholder-white/40 font-medium"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setIsOpen(false); }}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <Icon name="close" className="text-[10px]" />
          </button>
        )}
      </div>
      <AnimatePresence>
        {isOpen && query.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`absolute top-full mt-3 rounded-2xl border shadow-2xl p-3.5 z-50 ${dropdownClassName}`}
            style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-medium)' }}
          >
            <div className="max-h-60 overflow-y-auto space-y-1">
              {results.length > 0 ? (
                results.map((c: Chapter) => (
                  <Link
                    key={c.id}
                    href={`/partie/${c.id}`}
                    onClick={() => { setIsOpen(false); setQuery(''); }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[color-mix(in srgb, var(--accent) 5%, transparent)] transition-colors text-left"
                  >
                    <Icon name={c.icon} className="text-gold text-base" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{c.titleFr}</p>
                      <p className="text-sm truncate" style={{ color: 'var(--text-muted)' }}>{c.titleAr}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center py-4 text-xs italic" style={{ color: 'var(--text-muted)' }}>
                  Aucun résultat pour « {query} »
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBox;
