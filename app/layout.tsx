import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-display', display: 'swap' });

const siteUrl = 'https://georgiawholesalehomes.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Georgia Wholesale Homes | Off-Market Georgia Investment Properties',
  description: 'See Georgia wholesale deals before anyone else. Off-market investment properties at 30–50% under retail sent first by text and email. Free to join, no spam.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'See Georgia Wholesale Deals Before Anyone Else',
    description: 'Off-market Georgia investment properties sent by text and email. 30–50% under retail. Join free.',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Georgia Wholesale Homes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgia Wholesale Homes',
    description: 'Off-market Georgia investment properties sent by text and email.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const apiUrl = process.env.NEXT_PUBLIC_LISTHIT_API_URL;
  const apiHost = apiUrl ? new URL(apiUrl).origin : '';

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream text-ink antialiased">
        {apiHost ? <link rel="preconnect" href={apiHost} crossOrigin="anonymous" /> : null}
        {apiHost ? <link rel="dns-prefetch" href={apiHost} /> : null}
        {children}
      </body>
    </html>
  );
}
