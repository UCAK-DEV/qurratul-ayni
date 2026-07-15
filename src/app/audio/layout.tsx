import React from 'react';
import type { Metadata } from 'next';
import { SITE_URL } from '@/utils/site';

export const metadata: Metadata = {
  title: 'Audiothèque',
  description:
    'Écoutez les enseignements audio de Serigne Shouhaïbou Mbacké : jurisprudence islamique, prière, zakat, jeûne, hajj, mariage et nafilas — chapitre par chapitre.',
  alternates: {
    canonical: `${SITE_URL}/audio`,
  },
  keywords: [
    'audio islamique',
    'enseignements audio islam',
    'Serigne Shouhaïbou Mbacké audio',
    'cours de fiqh audio',
    'audiothèque islamique',
  ],
};

export default function AudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
