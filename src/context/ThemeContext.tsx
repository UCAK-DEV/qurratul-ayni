'use client';

import React, { createContext, useEffect, useContext, useState, ReactNode } from 'react';

export type Theme = 'dark' | 'light' | 'sepia';

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
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_COLORS: Record<Theme, string> = {
  dark: '#0b1710',
  light: '#f7f4e9',
  sepia: '#f5e6c8',
};

const applyTheme = (t: Theme) => {
  const html = document.documentElement;
  html.setAttribute('data-theme', t);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLORS[t]);
};

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark' || saved === 'sepia') return saved;
  } catch { /* ignore */ }
  return 'dark';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [readingSettings, setReadingSettings] = useState<ReadingSettings>({
    fontSize: 100,
    lineHeight: 1.6
  });

  useEffect(() => {
    applyTheme(theme);
    try { localStorage.setItem('theme', theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('readingSettings');
      if (saved) {
        const parsed = JSON.parse(saved);
        setTimeout(() => setReadingSettings(parsed), 0);
      }
    } catch (error) {
      console.error("Failed to load settings:", error);
    }
  }, []);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'dark' ? 'light' : prev === 'light' ? 'sepia' : 'dark'));
  };

  const setTheme = (t: Theme) => setThemeState(t);

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
      setTheme,
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
