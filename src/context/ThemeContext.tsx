'use client';

import React, { createContext, useEffect, useContext, useState, ReactNode } from 'react';

type Theme = 'dark'; // Only dark mode for now

interface ReadingSettings {
  fontSize: number;   // In percentage (ex: 100, 110, 120)
  lineHeight: number; // multiplier (ex: 1.5, 1.8, 2.0)
}

interface ThemeContextType {
  theme: Theme;
  readingSettings: ReadingSettings;
  isFocusMode: boolean;
  setReadingSettings: (settings: ReadingSettings) => void;
  toggleFocusMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme: Theme = 'dark';
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [readingSettings, setReadingSettings] = useState<ReadingSettings>({
    fontSize: 100,
    lineHeight: 1.6
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', 'dark');
      
      const saved = localStorage.getItem('readingSettings');
      if (saved) {
        setReadingSettings(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Failed to load settings:", error);
    }
  }, []);

  const updateSettings = (newSettings: ReadingSettings) => {
    setReadingSettings(newSettings);
    localStorage.setItem('readingSettings', JSON.stringify(newSettings));
  };

  const toggleFocusMode = () => setIsFocusMode(!isFocusMode);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      readingSettings, 
      isFocusMode, 
      setReadingSettings: updateSettings,
      toggleFocusMode 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
