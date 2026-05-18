import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-page max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-navy mb-6">Get in touch</h1>
            <p className="text-lg text-ink/70 mb-12">
              Questions about a specific property, our buyer list, or selling your house to us? Reach out — we typically respond within a business day.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <a href="tel:+17705207674" className="bg-white p-6 rounded-lg border border-navy/10 hover:border-orange-500 transition-colors block">
                <div className="text-sm text-ink/60 mb-1">Call us</div>
                <div className="text-2xl font-display text-navy">(770) 520-7674</div>
                <div className="text-sm text-ink/60 mt-2">Mon-Sat, 9am-7pm ET</div>
              </a>
              <a href="mailto:info@georgiawholesalehomes.com" className="bg-white p-6 rounded-lg border border-navy/10 hover:border-orange-500 transition-colors block">
                <div className="text-sm text-ink/60 mb-1">Email us</div>
                <div className="text-xl font-display text-navy break-all">info@georgiawholesalehomes.com</div>
                <div className="text-sm text-ink/60 mt-2">Replies within 1 business day</div>
              </a>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg border border-navy/10">
              <div className="text-sm text-ink/60 mb-1">Visit / Mail</div>
              <div className="text-lg text-navy leading-relaxed">
                Georgia Wholesale Homes LLC<br />
                3904 N Druid Hills Road, Suite 244<br />
                Decatur, GA 30033
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
