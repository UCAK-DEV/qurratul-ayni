import React from 'react';
import { fetchChapters, fetchPageContent } from '@/utils/supabase';
import { ClientPageUI } from '@/components/ClientPageUI';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

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
