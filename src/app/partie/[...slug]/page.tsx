import React from 'react';
import type { Metadata } from 'next';
import { fetchChapters, fetchPageContent } from '@/utils/supabase';
import { ClientPageUI } from '@/components/ClientPageUI';
import { notFound } from 'next/navigation';
import { getAllPageIds } from '@/utils/pageIds';
import { SITE_URL, SITE_NAME, OG_IMAGE, DEVELOPERS } from '@/utils/site';
import { extractExcerpt, buildKeywords } from '@/utils/seo';

export const dynamicParams = true;

export async function generateStaticParams() {
  const pageIds = await getAllPageIds();
  // Retourner au format attendu par Next.js : { slug: string[] }
  return pageIds.map(id => ({
    slug: id.split('-'),
  }));
}

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
  // Description tirée du contenu réel de la page pour couvrir les recherches
  // thématiques (mariage, jeûne, zakat…), avec repli sur le titre du chapitre.
  const excerpt = extractExcerpt(pageContent.blocks);
  const description = excerpt
    ? `${title} : ${excerpt}`
    : `${chapterData.titleFr} — enseignements de Serigne Shouhaïbou Mbacké sur Qurratul Ayni.`;
  const pageUrl = `${SITE_URL}/partie/${slug.join('/')}`;

  return {
    title,
    description,
    keywords: buildKeywords(title, chapterData.titleFr),
    alternates: {
      canonical: pageUrl,
    },
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

  const title = pageContent.titleFr || chapterData.titleFr;
  const pageUrl = `${SITE_URL}/partie/${slug.join('/')}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: title,
        alternativeHeadline: pageContent.titleAr,
        description:
          extractExcerpt(pageContent.blocks) ??
          `${chapterData.titleFr} — enseignements de Serigne Shouhaïbou Mbacké.`,
        articleSection: chapterData.titleFr,
        keywords: buildKeywords(title, chapterData.titleFr).join(', '),
        inLanguage: 'fr',
        url: pageUrl,
        image: OG_IMAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@type': 'Thing', name: chapterData.titleFr },
        author: DEVELOPERS.map(dev => ({
          '@type': 'Person',
          name: dev.name,
          url: dev.url,
        })),
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE_NAME, item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: chapterData.titleFr, item: `${SITE_URL}/partie/${chapterId}` },
          { '@type': 'ListItem', position: 3, name: title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ClientPageUI
        pageContent={pageContent}
        chapterData={chapterData}
        fullId={fullId}
        chapterId={chapterId}
        slugArray={slug}
      />
    </>
  );
}
