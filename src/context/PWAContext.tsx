'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PWAContextType {
  isOfflineReady: boolean;
  setIsOfflineReady: (isReady: boolean) => void;
}

const PWAContext = createContext<PWAContextType | undefined>(undefined);

export const PWAProvider = ({ children }: { children: ReactNode }) => {
  const [isOfflineReady, setIsOfflineReady] = useState(false);
  const value = { isOfflineReady, setIsOfflineReady };
  return <PWAContext.Provider value={value}>{children}</PWAContext.Provider>;
};

export const usePWA = () => {
  const context = useContext(PWAContext);
  if (context === undefined) {
    throw new Error('usePWA must be used within a PWAProvider');
  }
  return context;
};