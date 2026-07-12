import type { MetadataRoute } from 'next';

const routes = ['/', '/kids', '/language', '/storybook', '/quiz', '/heritage', '/timeline', '/worlds/history', '/cities', '/maps', '/living-punjab', '/culture', '/food', '/clothing', '/music', '/instruments', '/dances', '/festivals', '/village-life', '/games', '/objects', '/architecture', '/literature', '/proverbs', '/folk-tales'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({ url: `https://sanjha-virsa.vercel.app${route}`, lastModified: now, changeFrequency: route === '/' ? 'weekly' : 'monthly', priority: route === '/' ? 1 : 0.8 }));
}
