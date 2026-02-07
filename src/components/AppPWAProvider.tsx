'use client';

import { useEffect } from 'react';
import { usePWA } from '@/context/PWAContext';

export const AppPWAProvider = ({ children }: { children: React.ReactNode }) => {
  const { setIsOfflineReady } = usePWA();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const handleControllerChange = () => {
        setIsOfflineReady(true);
      };

      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          if (navigator.serviceWorker.controller) {
            setIsOfflineReady(true);
          }
        })
        .catch((error) => {
          console.error('SW registration failed: ', error);
        });

      navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);

      return () => {
        navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
      };
    }
  }, [setIsOfflineReady]);

  return <>{children}</>;
};
