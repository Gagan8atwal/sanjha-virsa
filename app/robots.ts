import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://sanjha-virsa.vercel.app/sitemap.xml', host: 'https://sanjha-virsa.vercel.app' };
}
