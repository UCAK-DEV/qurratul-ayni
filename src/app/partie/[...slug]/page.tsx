import React from 'react';
import type { Metadata } from 'next';
import { fetchChapters, fetchPageContent, getSupabaseClient } from '@/utils/supabase';
import { ClientPageUI } from '@/components/ClientPageUI';
import { notFound } from 'next/navigation';
import { MOCK_PAGES } from '@/data/mockChaptersData';

export const dynamicParams = true;

export async function generateStaticParams() {
  const pageIds = new Set<string>();

  // 1. Ajouter tous les identifiants des pages simulées (MOCK_PAGES)
  Object.keys(MOCK_PAGES).forEach(id => pageIds.add(id));

  // 2. Ajouter les pages supplémentaires spéciales
  const extraPages = [
    "5-g", "5-h", "6-l", "6-m", "6-n", "6-o", "6-p", 
    "10-e", "10-f", "17-i", "17-j", "17-k", "17-l", "17-m", "17-n", 
    "19-e", "19-f"
  ];
  extraPages.forEach(id => pageIds.add(id));

  // 3. Ajouter les Nafilas de Ramadan (1 à 30)
  for (let i = 1; i <= 30; i++) {
    pageIds.add(`18-${i}`);
  }

  // 4. Ajouter les Nafilas hebdomadaires
  const weeklyNafilas = [
    "18-lundi", "18-mardi", "18-mercredi", "18-jeudi", "18-vendredi", "18-samedi", "18-dimanche"
  ];
  weeklyNafilas.forEach(id => pageIds.add(id));

  // 5. Tenter de charger depuis Supabase si configuré et disponible
  try {
    const client = getSupabaseClient();
    const { data } = await client
      .from('pages')
      .select('id');
    if (data) {
      data.forEach((row: { id: string }) => {
        pageIds.add(row.id);
      });
    }
  } catch (err) {
    console.warn("Could not load dynamic pages from Supabase for static pre-rendering, using fallback list:", err);
  }

  // Retourner au format attendu par Next.js : { slug: string[] }
  return Array.from(pageIds).map(id => ({
    slug: id.split('-'),
  }));
}

const SITE_URL = 'https://qurratul-ayni.vercel.app';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

/* ── Métadonnées dynamiques par page ── */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const fullId = slug.join('-');
  const chapterId = slug[0];

  const [pageContent, allChapters] = await Promise.all([
    fetchPageContent(fullId),
    fetchChapters(),
  ]);
  const chapterData = allChapters.find(c => c.id === chapterId);

  if (!pageContent || !chapterData) {
    return {
      title: 'Page introuvable',
      description: "Cette page n'existe pas dans Qurratul Ayni.",
    };
  }

  const title = pageContent.titleFr || chapterData.titleFr;
  const description = `${chapterData.titleFr} — extrait de Qurratul Ayni, enseignements de Serigne Shouhaïbou Mbacké.`;
  const pageUrl = `${SITE_URL}/partie/${slug.join('/')}`;

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      locale: 'fr_FR',
      url: pageUrl,
      siteName: 'Qurratul Ayni',
      title: `${title} · Qurratul Ayni`,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${title} — Qurratul Ayni`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} · Qurratul Ayni`,
      description,
      images: [OG_IMAGE],
    },
  };
}

/* ── Page Server Component ── */
export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const fullId = slug.join('-');
  const chapterId = slug[0];

  // 1. Charger depuis Supabase
  const pageContent = await fetchPageContent(fullId);
  const allChapters = await fetchChapters();
  const chapterData = allChapters.find(c => c.id === chapterId);

  if (!pageContent || !chapterData) {
    return notFound();
  }

  return (
    <ClientPageUI 
      pageContent={pageContent}
      chapterData={chapterData}
      fullId={fullId}
      chapterId={chapterId}
      slugArray={slug}
    />
  );
}
