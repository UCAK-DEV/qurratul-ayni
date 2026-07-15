import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réglages',
  robots: { index: false, follow: false },
};

export default function ReglagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
