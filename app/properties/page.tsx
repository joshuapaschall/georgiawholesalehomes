import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const API_BASE = process.env.NEXT_PUBLIC_LISTHIT_API_URL || 'https://app.listhit.io';

type Property = {
  id: string; slug: string; address: string; city: string | null; state: string | null; zip: string | null;
  price: number | null; bedrooms: number | null; bathrooms: number | null; sqft: number | null;
  primary_image_url: string | null; image_count: number; description: string | null;
};

async function getProperties(): Promise<Property[]> {
  try {
    const res = await fetch(`${API_BASE}/api/public/properties?limit=50`, {
      next: { revalidate: 60 },
      headers: { 'Origin': 'https://georgiawholesalehomes.com' },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.ok ? data.properties : [];
  } catch {
    return [];
  }
}

export const metadata: Metadata = {
  title: 'Current Available Properties | Georgia Wholesale Homes',
  description: 'Browse active off-market Georgia investment properties and join the VIP list for instant new deal alerts.',
  alternates: { canonical: '/properties' },
  openGraph: { title: 'Current Available Properties', description: 'Browse active off-market Georgia investment properties.', url: '/properties', images: ['/og-image.jpg'] },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

export default async function PropertiesPage() {
  const properties = await getProperties();
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-12 lg:py-16">
          <div className="container-page">
            <h1 className="text-4xl lg:text-5xl font-display text-navy mb-4">Current available properties</h1>
            <p className="text-lg text-ink/70 max-w-2xl">
              Our active off-market inventory in metro Atlanta. To get notified the moment a new property hits our list, <Link href="/#signup" className="text-orange-600 underline font-medium">join the VIP buyer list</Link>.
            </p>
          </div>
        </section>

        <section className="bg-white py-12 lg:py-16">
          <div className="container-page">
            {properties.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-display text-navy mb-3">No active listings right now.</h2>
                <p className="text-ink/70 mb-6 max-w-md mx-auto">Properties move fast — most sell within 48 hours of going live. Sign up to get the next one texted to you the moment we source it.</p>
                <Link href="/#signup" className="btn-primary">Join the VIP list</Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {properties.map((p) => (
                  <Link
                    key={p.id}
                    href={`/properties/${p.slug}`}
                    className="group bg-cream rounded-xl overflow-hidden border border-navy/10 shadow-card hover:shadow-cardHover transition-all duration-200"
                  >
                    <div className="aspect-[4/3] bg-navy/5 relative">
                      {p.primary_image_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <Image src={p.primary_image_url} alt={`Photo of ${p.address}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-navy/30">No photo</div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg text-navy mb-1 group-hover:text-orange-600 transition-colors">{p.address}</h3>
                      <p className="text-sm text-ink/60 mb-3">{[p.city, p.state, p.zip].filter(Boolean).join(', ')}</p>
                      <div className="flex items-center gap-4 text-sm text-ink/70 mb-3">
                        {p.bedrooms !== null && <span>{p.bedrooms} bd</span>}
                        {p.bathrooms !== null && <span>{p.bathrooms} ba</span>}
                        {p.sqft !== null && <span>{p.sqft.toLocaleString()} sqft</span>}
                      </div>
                      {p.price !== null && (
                        <div className="text-2xl font-display text-navy">${p.price.toLocaleString()}</div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const revalidate = 60;
