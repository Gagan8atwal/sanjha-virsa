import type { Metadata, Viewport } from 'next';
import SideMenu from '../components/SideMenu';
import SiteFooter from '../components/SiteFooter';
import 'maplibre-gl/dist/maplibre-gl.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sanjha-virsa.vercel.app'),
  title: { default: 'Sanjha Virsa | Punjabi Heritage Learning', template: '%s | Sanjha Virsa' },
  description: 'Explore Punjabi language, history, cities, culture, museums, stories, and heritage across East and West Punjab.',
  applicationName: 'Sanjha Virsa',
  alternates: { canonical: '/' },
  openGraph: { title: 'Sanjha Virsa', description: 'Punjabi heritage, language, history, and culture for families worldwide.', url: '/', siteName: 'Sanjha Virsa', type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title: 'Sanjha Virsa', description: 'Punjabi heritage, language, history, and culture for families worldwide.' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#201712', colorScheme: 'light' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-[#201712]">Skip to content</a><SideMenu/><div className="sv-shell" id="main-content">{children}<SiteFooter/></div></body></html>;
}
