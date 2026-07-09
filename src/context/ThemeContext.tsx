'use client';

import React, { createContext, useEffect, useContext, useState, ReactNode } from 'react';

export type Theme = 'dark' | 'light';

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
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme] = useState<Theme>('dark');
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [readingSettings, setReadingSettings] = useState<ReadingSettings>({
    fontSize: 100,
    lineHeight: 1.6
  });

  const applyTheme = () => {
    const html = document.documentElement;
    html.setAttribute('data-theme', 'dark');
    // Update meta theme-color for mobile browser chrome
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', '#020504');
    }
  };

  useEffect(() => {
    try {
      // Always enforce dark theme
      applyTheme();

      // Load reading settings
      const saved = localStorage.getItem('readingSettings');
      if (saved) {
        const parsed = JSON.parse(saved);
        setTimeout(() => setReadingSettings(parsed), 0);
      }
    } catch (error) {
      console.error("Failed to load settings:", error);
      applyTheme();
    }
  }, []);

  const toggleTheme = () => {
    // No-op: only dark mode is allowed
  };

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
      toggleFocusMode,
      toggleTheme,
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
