'use client';

import React from 'react';
import { PWAProvider } from '@/context/PWAContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { AudioProvider, useAudio } from '@/context/AudioContext';
import { AppPWAProvider } from '@/components/AppPWAProvider';
import Sidebar from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { Player } from '@/components/Player';

function MainContent({ children }: { children: React.ReactNode }) {
  const { currentChapter } = useAudio();
  return (
    <main className={`flex-1 overflow-y-auto pt-16 ${currentChapter ? 'pb-28' : ''}`}>
      {children}
    </main>
  );
}

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <PWAProvider>
      <ThemeProvider>
        <AudioProvider>
          <AppPWAProvider>
            <div className="flex h-screen text-gray-900 dark:text-gray-100">
              <Sidebar />
              <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                <MainContent>
                  {children}
                </MainContent>
                <Player />
              </div>
            </div>
          </AppPWAProvider>
        </AudioProvider>
      </ThemeProvider>
    </PWAProvider>
  );
};
