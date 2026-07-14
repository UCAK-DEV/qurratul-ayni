import React from 'react';
import type { Metadata } from 'next';
import { fetchChapters, fetchPageContent } from '@/utils/supabase';
import { ClientPageUI } from '@/components/ClientPageUI';
import { notFound } from 'next/navigation';

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
