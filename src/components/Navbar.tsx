'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CHAPTERS, Chapter } from '@/data/chapters';
import { useTheme } from '@/context/ThemeContext';
import { usePWA } from '@/context/PWAContext';
import { SearchOverlay } from '@/components/SearchOverlay';

export const Navbar = ({ isMobileSidebarOpen, setIsMobileSidebarOpen, isSearchOverlayOpen, setIsSearchOverlayOpen }: { isMobileSidebarOpen: boolean; setIsMobileSidebarOpen: (isOpen: boolean) => void; isSearchOverlayOpen: boolean; setIsSearchOverlayOpen: (isOpen: boolean) => void; }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChaptersDropdownOpen, setIsChaptersDropdownOpen] = useState(false);

  const pathname = usePathname();
  const chaptersRef = useRef<HTMLLIElement>(null);
  const { theme } = useTheme();
  const { isOfflineReady } = usePWA();

  useEffect(() => {
    const mainContent = document.querySelector('.overflow-y-auto');
    const handleScroll = () => {
      if (mainContent) setIsScrolled(mainContent.scrollTop > 20);
    };
    mainContent?.addEventListener('scroll', handleScroll);
    return () => mainContent?.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (chaptersRef.current && !chaptersRef.current.contains(e.target as Node)) {
        setIsChaptersDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const groupedChapters = useMemo(() => {
    return CHAPTERS.reduce((acc, chapter) => {
      (acc[chapter.group] = acc[chapter.group] || []).push(chapter);
      return acc;
    }, {} as Record<string, Chapter[]>);
  }, []);

  const navClasses = isScrolled
    ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg'
    : 'bg-transparent';


  return (
    <>
      <SearchOverlay isOpen={isSearchOverlayOpen} onClose={() => setIsSearchOverlayOpen(false)} />
      
      <nav className={`fixed w-full z-40 top-0 start-0 border-b transition-all duration-300 ease-in-out ${navClasses}`}>
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse z-50 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -15 }}
                className="h-7 border border-gold/50 rounded-lg flex items-center justify-center bg-gold/10 shadow-[0_0_20px_rgba(201,169,97,0.2)]"
              >
                <span className="material-symbols-rounded text-gold text-2xl">auto_stories</span>
              </motion.div>
            </Link>
          </div>

          {/* Center Nav Links (Desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
              <li>
                <Link href="/accueil" className="hover:text-black dark:hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="relative" ref={chaptersRef}>
                <button
                  onClick={() => setIsChaptersDropdownOpen(!isChaptersDropdownOpen)}
                  className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
                >
                  Chapitres
                  <motion.span animate={{ rotate: isChaptersDropdownOpen ? 180 : 0 }} className="material-symbols-rounded text-base">expand_more</motion.span>
                </button>
                <AnimatePresence>
                  {isChaptersDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[48rem] max-w-[90vw] bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl p-6 z-50"
                    >
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                        {Object.entries(groupedChapters).map(([group, chapters]) => (
                          <div key={group}>
                            <p className="px-3 pt-2 pb-1 text-xs uppercase font-bold tracking-widest text-gold/80 dark:text-gold/60">{group}</p>
                            {chapters.map((chapter) => (
                              <Link
                                key={chapter.id}
                                href={`/partie/${chapter.id}`}
                                onClick={() => setIsChaptersDropdownOpen(false)}
                                className="flex items-center gap-3 p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gold dark:hover:text-gold transition-colors text-sm font-medium"
                              >
                                <span className="material-symbols-rounded text-gold/80 text-lg w-6 text-center">{chapter.icon}</span>
                                <span>{chapter.titleFr}</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSearchOverlayOpen(true)} 
              className="p-2 rounded-full text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="material-symbols-rounded">search</span>
            </button>
            <button 
              onClick={() => setIsMobileSidebarOpen(true)} 
              className="p-2 rounded-full text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:hidden"
            >
              <span className="material-symbols-rounded">menu</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};