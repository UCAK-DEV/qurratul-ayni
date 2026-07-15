import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/utils/site';
import { getAllPageIds } from '@/utils/pageIds';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/audio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/a-propos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const pageIds = await getAllPageIds();
  const contentRoutes: MetadataRoute.Sitemap = pageIds.map(id => ({
    url: `${SITE_URL}/partie/${id.split('-').join('/')}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...contentRoutes];
}
