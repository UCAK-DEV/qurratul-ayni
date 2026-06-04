'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Bookmark {
  id: string;         // slug-index
  text: string;       // extrait
  slug: string;       // ex: "10-a"
  chapterTitle: string;
}

interface BookmarkContextType {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('bookmarks');
      if (saved) setBookmarks(JSON.parse(saved));
    } catch (e) {
      console.error("Failed to load bookmarks:", e);
    }
  }, []);

  const addBookmark = (bookmark: Bookmark) => {
    setBookmarks(prev => {
      const next = [...prev, bookmark];
      localStorage.setItem('bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const removeBookmark = (id: string) => {
    setBookmarks(prev => {
      const next = prev.filter(b => b.id !== id);
      localStorage.setItem('bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const isBookmarked = (id: string) => bookmarks.some(b => b.id === id);

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) throw new Error('useBookmarks must be used within a BookmarkProvider');
  return context;
};
