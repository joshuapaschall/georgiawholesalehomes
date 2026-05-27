import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/welcome' },
    ],
    sitemap: 'https://georgiawholesalehomes.com/sitemap.xml',
  };
}
