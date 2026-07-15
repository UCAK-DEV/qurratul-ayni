import React from 'react';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME, DEVELOPERS } from '@/utils/site';

export const metadata: Metadata = {
  title: 'À propos des développeurs',
  description:
    'Qurratul Ayni a été cofondée et développée par Makhtar Wade (almuxtaardev) et Pape Makhtar Aidara, étudiants à l\'Université Cheikh Ahmadoul Khadim (UCAK) de Touba, Sénégal.',
  alternates: {
    canonical: `${SITE_URL}/a-propos`,
  },
  keywords: [
    'Makhtar Wade',
    'almuxtaardev',
    'Pape Makhtar Aidara',
    'développeurs Qurratul Ayni',
    'UCAK',
    'Université Cheikh Ahmadoul Khadim',
    'développeur web Sénégal',
    'Touba',
  ],
};

const ABOUT_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/a-propos#aboutpage`,
  url: `${SITE_URL}/a-propos`,
  name: `À propos des développeurs · ${SITE_NAME}`,
  inLanguage: 'fr',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  mainEntity: DEVELOPERS.map(dev => ({
    '@type': 'Person',
    name: dev.name,
    alternateName: dev.alias,
    url: dev.url,
    sameAs: [dev.url],
    jobTitle: dev.role,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Université Cheikh Ahmadoul Khadim (UCAK)',
      address: { '@type': 'PostalAddress', addressLocality: 'Touba', addressCountry: 'SN' },
    },
  })),
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_JSON_LD) }}
      />
      {children}
    </>
  );
}
