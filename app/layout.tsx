import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-display', display: 'swap' });
export const metadata: Metadata = { title: 'Georgia Wholesale Homes | Off-Market Georgia Investment Properties', description: 'See Georgia wholesale deals before anyone else. Off-market investment properties at 30–50% under retail sent first by text and email. Free to join, no spam.', openGraph: { title: 'See Georgia Wholesale Deals Before Anyone Else', description: 'Off-market Georgia investment properties sent by text and email. 30–50% under retail. Join free.', type: 'website', locale: 'en_US' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${inter.variable} ${playfair.variable}`}><body className="bg-cream text-ink antialiased">{children}</body></html>; }
