'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext'; // Assuming ThemeContext is used for colors
import { motion } from 'framer-motion';

interface BottomNavbarProps {
  setIsSearchOverlayOpen: (isOpen: boolean) => void;
  isSearchOverlayOpen: boolean;
}

export const BottomNavbar = ({ setIsSearchOverlayOpen }: BottomNavbarProps) => {
  const pathname = usePathname();
  const { theme } = useTheme(); // To ensure theme-aware styling

  const isActive = (path: string) => pathname === path;

  const itemClasses = (path: string) => `
    flex flex-col items-center justify-center p-2 rounded-lg transition-colors
    ${isActive(path) ? 'text-gold' : 'text-gray-400 dark:text-gray-500 hover:text-gold dark:hover:text-gold'}
  `;

  const iconClasses = `material-symbols-rounded text-xl`;
  const labelClasses = `text-[10px] font-medium uppercase`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 md:hidden shadow-lg">
      <div className="flex justify-around h-14">
        <Link href="/accueil" className={itemClasses('/accueil')}>
          <span className={iconClasses}>{isActive('/accueil') ? 'home' : 'home'}</span>
          <span className={labelClasses}>Accueil</span>
        </Link>

        {/* This could open a modal for chapters or directly the sidebar if desired */}
        <motion.button 
          onClick={() => setIsSearchOverlayOpen(true)} 
          className={itemClasses('/search')} // Path irrelevant, but for styling consistency
          whileTap={{ scale: 0.95 }}
        >
          <span className={iconClasses}>search</span>
          <span className={labelClasses}>Recherche</span>
        </motion.button>
        
        {/* Placeholder for a "Chapters" or "Menu" icon to open the Sidebar if desired in bottom nav */}
        {/* <button className={itemClasses('/menu')}>
          <span className={iconClasses}>menu_book</span>
          <span className={labelClasses}>Chapitres</span>
        </button> */}
      </div>
    </nav>
  );
};
