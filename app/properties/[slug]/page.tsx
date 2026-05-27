import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MultiStepBuyerForm } from '@/components/MultiStepBuyerForm';

const API_BASE = process.env.NEXT_PUBLIC_LISTHIT_API_URL || 'https://app.listhit.io';

type Property = any;

async function getProperty(slug: string): Promise<Property | null> {
  try {
    const res = await fetch(`${API_BASE}/api/public/properties/${slug}`, { next: { revalidate: 60 }, headers: { Origin: 'https://georgiawholesalehomes.com' } });
    if (!res.ok) return null;
    const data = await res.json();
    return data.ok ? data.property : null;
  } catch { return null; }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = await getProperty(slug);
  if (!property) return {};
  const title = `${property.address} | Georgia Wholesale Homes`;
  const description = `Off-market property in ${property.city ?? 'Georgia'}${property.price ? ` listed at $${property.price.toLocaleString()}` : ''}.`;
  const image = property.images?.[0]?.image_url || '/og-image.jpg';
  return { title, description, alternates: { canonical: `/properties/${slug}` }, openGraph: { title, description, url: `/properties/${slug}`, images: [image] }, twitter: { card: 'summary_large_image', images: [image] } };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await getProperty(slug);
  if (!property) notFound();
  const ld = { '@context': 'https://schema.org', '@type': 'Product', name: property.address, image: property.images?.map((x: any) => x.image_url) ?? [], offers: property.price ? { '@type': 'Offer', price: property.price, priceCurrency: 'USD' } : undefined, address: { '@type': 'PostalAddress', streetAddress: property.address, addressLocality: property.city, addressRegion: property.state, postalCode: property.zip } };
  return (<>
    <Navbar />
    <main className="bg-white" id="main-content">
      <section className="container-page py-8 lg:py-12">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Link href="/properties" className="text-sm text-navy hover:text-orange-700 mb-4 inline-block">← Back to all properties</Link>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 mt-4">
          <div>
            <div className="aspect-[4/3] bg-cream rounded-xl overflow-hidden mb-4 relative">{property.images?.length > 0 ? <Image src={property.images[0].image_url} alt={`Main image of ${property.address}`} fill priority sizes="(max-width:1024px) 100vw, 66vw" className="object-cover" /> : <div className="w-full h-full flex items-center justify-center text-navy/30">No photo</div>}</div>
            {property.images?.length > 1 && <div className="grid grid-cols-4 gap-2">{property.images.slice(1, 9).map((img: any) => <div key={img.id} className="aspect-square bg-cream rounded overflow-hidden relative"><Image src={img.image_url} alt={`Additional photo of ${property.address}`} fill sizes="20vw" className="object-cover" /></div>)}</div>}
            <h1 className="text-fluid-h2 font-display text-navy mt-8 mb-2">{property.address}</h1>
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">{property.price !== null && <div className="bg-orange-600 text-white p-6 rounded-xl mb-4"><div className="text-sm uppercase tracking-wider opacity-90 mb-1">Asking</div><div className="text-4xl font-display">${property.price.toLocaleString()}</div></div>}<MultiStepBuyerForm variant="card" /></div>
        </div>
      </section>
    </main>
    <Footer />
  </>);
}

export const revalidate = 60;
