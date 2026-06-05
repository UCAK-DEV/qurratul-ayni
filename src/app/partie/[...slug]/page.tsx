import React from 'react';
import { CHAPTERS } from '@/data/chapters';
import { PAGES_CONTENT } from '@/data/pages_content';
import { fetchPageContent } from '@/utils/supabase';
import { ClientPageUI } from '@/components/ClientPageUI';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const fullId = slug.join('-');
  const chapterId = slug[0];

  // 1. Essayer de charger depuis Supabase
  let pageContent = await fetchPageContent(fullId);

  // 2. Fallback sur les données locales (pour la transition)
  if (!pageContent) {
    pageContent = PAGES_CONTENT[fullId];
  }

  const chapterData = CHAPTERS.find(c => c.id === chapterId);

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
