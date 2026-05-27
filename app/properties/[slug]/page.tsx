import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MultiStepBuyerForm } from '@/components/MultiStepBuyerForm';

const API_BASE = process.env.NEXT_PUBLIC_LISTHIT_API_URL || 'https://app.listhit.io';

async function getProperty(slug: string) {
  try {
    const res = await fetch(`${API_BASE}/api/public/properties/${slug}`, {
      next: { revalidate: 60 },
      headers: { 'Origin': 'https://georgiawholesalehomes.com' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.ok ? data.property : null;
  } catch {
    return null;
  }
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await getProperty(slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="container-page py-8 lg:py-12">
          <Link href="/properties" className="text-sm text-navy hover:text-orange-600 mb-4 inline-block">← Back to all properties</Link>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 mt-4">
            <div>
              <div className="aspect-[4/3] bg-cream rounded-lg overflow-hidden mb-4">
                {property.images && property.images.length > 0 ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={property.images[0].image_url} alt={property.address} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-navy/30">No photo</div>
                )}
              </div>
              {property.images && property.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {property.images.slice(1, 9).map((img: { id: string; image_url: string }) => (
                    <div key={img.id} className="aspect-square bg-cream rounded overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.image_url} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
              <h1 className="text-3xl lg:text-4xl font-display text-navy mt-8 mb-2">{property.address}</h1>
              <p className="text-lg text-ink/60 mb-6">{[property.city, property.state, property.zip].filter(Boolean).join(', ')}</p>

              <div className="grid grid-cols-3 gap-4 p-6 bg-cream rounded-lg mb-8">
                <div>
                  <div className="text-3xl font-display text-navy">{property.bedrooms ?? '—'}</div>
                  <div className="text-sm text-ink/60">Bedrooms</div>
                </div>
                <div>
                  <div className="text-3xl font-display text-navy">{property.bathrooms ?? '—'}</div>
                  <div className="text-sm text-ink/60">Bathrooms</div>
                </div>
                <div>
                  <div className="text-3xl font-display text-navy">{property.sqft ? property.sqft.toLocaleString() : '—'}</div>
                  <div className="text-sm text-ink/60">Sqft</div>
                </div>
              </div>

              {property.description && (
                <div className="mb-8">
                  <h2 className="text-2xl font-display text-navy mb-3">About this property</h2>
                  <p className="text-ink/80 leading-relaxed whitespace-pre-wrap">{property.description}</p>
                </div>
              )}
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              {property.price !== null && (
                <div className="bg-orange-500 text-white p-6 rounded-lg mb-4">
                  <div className="text-sm uppercase tracking-wider opacity-90 mb-1">Asking</div>
                  <div className="text-4xl font-display">${property.price.toLocaleString()}</div>
                </div>
              )}
              <MultiStepBuyerForm variant="card" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const revalidate = 60;
