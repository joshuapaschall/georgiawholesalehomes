import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Georgia Wholesale Homes | Off-Market Atlanta Investment Properties',
  description:
    'Join Atlanta\'s VIP cash buyer list. We text our buyers off-market investment properties at 30-50% under retail before they hit the MLS. Sign up free.',
  openGraph: {
    title: 'See Atlanta Wholesale Deals Before Anyone Else',
    description:
      'Off-market investment properties texted to your phone. 30-50% under retail. Cash-ready buyers only.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
