import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sanjha Virsa | Punjabi Heritage Learning',
  description: 'A free multilingual platform for Punjabi language, history, culture, and heritage.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
