import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-page max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-display text-navy mb-6">How it works</h1>
            <p className="text-lg lg:text-xl text-ink/80 leading-relaxed mb-12">
              Joining our VIP buyer list takes 60 seconds. After that, you only hear from us when we have a real off-market deal to send. Here&apos;s exactly what happens between signup and closing.
            </p>

            <div className="space-y-12">
              {[
                { num: '01', title: 'You sign up', body: 'Drop your name, phone, and a quick note about what kind of investor you are. Email is optional. We confirm with one welcome text so you know we have the right number. The whole thing takes a minute.' },
                { num: '02', title: 'We source the deal', body: 'We hunt off-market properties across metro Atlanta — direct mail to distressed homeowners, probate, foreclosure, tax delinquency, driving for dollars, and our network of off-market wholesalers. When we lock one up under contract, we walk it, photograph it, and price it for an investor margin.' },
                { num: '03', title: 'You get the alert', body: 'The moment a new property is ready, we text our VIP list. The first text gives you the basics: address, beds/baths/sqft, condition, asking cash price, and a link to photos. No fluff, no upsells.' },
                { num: '04', title: 'You reply YES', body: 'Interested? Reply YES to the text. We send the full investor packet — rehab estimate, ARV comps, neighborhood data, closing terms, and the timeline.' },
                { num: '05', title: 'You close', body: 'If the deal fits, you make an offer. We use a standard cash purchase contract, no contingencies, no financing delays. Top buyers close in 7-14 days. We sell to the first serious buyer with proof of funds — no bidding wars.' },
              ].map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div className="flex-shrink-0 text-5xl lg:text-6xl font-display text-orange-500">{step.num}</div>
                  <div>
                    <h2 className="text-2xl font-display text-navy mb-2">{step.title}</h2>
                    <p className="text-ink/80 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-navy/10 text-center">
              <h2 className="text-2xl lg:text-3xl font-display text-navy mb-4">Ready to start?</h2>
              <Link href="/#signup" className="btn-primary text-lg">Join the VIP list</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
