import type { Metadata } from 'next';
import SideMenu from '../components/SideMenu';
import SiteFooter from '../components/SiteFooter';
import 'maplibre-gl/dist/maplibre-gl.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sanjha Virsa | Punjabi Heritage Learning',
  description: 'Explore Punjabi language, history, cities, culture, museums, stories, and heritage.',
  themeColor: '#201712',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SideMenu />
        <div className="sv-shell">
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
