import type { MetadataRoute } from 'next';

const API_BASE = process.env.NEXT_PUBLIC_LISTHIT_API_URL || 'https://app.listhit.io';
const SITE = 'https://georgiawholesalehomes.com';

async function getSlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE}/api/public/properties?limit=200`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.ok ? data.properties.map((p: { slug: string }) => p.slug) : [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = ['', '/properties', '/how-it-works', '/faq', '/our-company', '/contact-us', '/terms', '/privacy'];
  const dynamic = (await getSlugs()).map((slug) => ({ url: `${SITE}/properties/${slug}`, changeFrequency: 'daily' as const, priority: 0.8 }));
  return [
    ...staticPages.map((path) => ({ url: `${SITE}${path}`, changeFrequency: 'weekly' as const, priority: path === '' ? 1 : 0.7 })),
    ...dynamic,
  ];
}
