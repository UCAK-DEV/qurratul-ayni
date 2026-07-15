'use client';

import React from 'react';
import { PWAProvider } from '@/context/PWAContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { LearningProvider } from '@/context/LearningContext';
import { BookmarkProvider } from '@/context/BookmarkContext';
import { DataProvider } from '@/context/DataContext';
import { NotificationProvider } from '@/context/NotificationContext';
import { AudioProvider, useAudio } from '@/context/AudioContext';
import { AppPWAProvider } from '@/components/AppPWAProvider';

import { Navbar } from '@/components/Navbar';
import { Player } from '@/components/Player';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';

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
        <LearningProvider>
          <BookmarkProvider>
            <DataProvider>
              <NotificationProvider>
                <AudioProvider>
                   <AppPWAProvider>
                    <div className="flex h-screen text-gray-900 dark:text-gray-100">

                      <div className="flex-1 flex flex-col overflow-hidden">
                        <Navbar />
                        <MainContent>
                          {children}
                        </MainContent>
                        <Player />
                        <PWAInstallPrompt />
                      </div>
                    </div>
                  </AppPWAProvider>
                </AudioProvider>
              </NotificationProvider>
            </DataProvider>
          </BookmarkProvider>
        </LearningProvider>
      </ThemeProvider>
    </PWAProvider>
  );
};
