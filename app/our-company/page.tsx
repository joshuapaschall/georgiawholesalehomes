import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function OurCompanyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-page max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-navy mb-6">About Georgia Wholesale Homes</h1>

            <div className="prose prose-lg text-ink/80 space-y-6 leading-relaxed">
              <p>Georgia Wholesale Homes LLC is a Decatur, GA-based real estate investment firm specializing in off-market property acquisition and disposition across metro Atlanta.</p>

              <p>We work with two groups of people. On one side, sellers who need to move a property fast — distressed homeowners, probate situations, tired landlords, out-of-state owners, anyone who can&apos;t or won&apos;t go through a traditional MLS listing. On the other side, investors and cash buyers who need consistent off-market deal flow that they can&apos;t get anywhere else.</p>

              <p>We source. We negotiate. We close in cash on the seller&apos;s timeline. Then we send the property to our VIP buyer list with the math already worked out — purchase price, estimated rehab, ARV comps, neighborhood data. Our buyers know exactly what they&apos;re getting.</p>

              <p>We don&apos;t do open houses. We don&apos;t bid against retail buyers. We don&apos;t do contingencies or financing fall-throughs. We move fast, we close clean, and we keep our buyer list small enough that every deal gets seen by people who can actually act on it.</p>

              <p>Based in Decatur. Operating across metro Atlanta — Fulton, DeKalb, Cobb, Gwinnett, Clayton, Henry, Rockdale, Newton, and surrounding counties.</p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-navy/10">
                <h3 className="font-display text-lg text-navy mb-2">Contact</h3>
                <p className="text-sm text-ink/70 space-y-1">
                  <a href="tel:+17705207674" className="block hover:text-orange-600">(770) 520-7674</a>
                  <a href="mailto:info@georgiawholesalehomes.com" className="block hover:text-orange-600">info@georgiawholesalehomes.com</a>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-navy/10">
                <h3 className="font-display text-lg text-navy mb-2">Office</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  3904 N Druid Hills Road<br />
                  Suite 244<br />
                  Decatur, GA 30033
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/#signup" className="btn-primary text-lg">Join the VIP buyer list</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
