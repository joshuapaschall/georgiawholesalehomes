import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const FAQS = [
  { q: 'Is signing up really free?', a: 'Yes. We don\'t charge to join the list, and you won\'t pay anything unless you buy a property from us.' },
  { q: 'How often will I get texted?', a: '1-3 deals per week on average. Some weeks more, some weeks less. We only text when we have a real deal to send — no newsletters, no promotional fluff.' },
  { q: 'Do I need to be a cash buyer?', a: 'Most of our buyers pay cash because cash closes fast. We also work with hard money lenders and serious financed buyers who can close in under 30 days.' },
  { q: 'What if I\'m not interested in a deal?', a: 'Just ignore the text. No obligation, no follow-up, no "are you sure?" emails. Wait for the next one.' },
  { q: 'How do I unsubscribe?', a: 'Reply STOP to any message at any time. You\'ll get one confirmation message and you\'re out — no more SMS from us. You can re-join later by signing up again on this site.' },
  { q: 'Are the properties really 30-50% under retail?', a: 'Yes, on average. We source through direct mail, driving for dollars, probate, foreclosure, and off-market networks. Every deal is priced for an investor margin — you can flip, rent, or hold with built-in equity.' },
  { q: 'What areas do you cover?', a: 'Metro Atlanta and surrounding counties — Fulton, DeKalb, Cobb, Gwinnett, Clayton, Henry, Rockdale, Newton, and others. If we expand into new markets, we\'ll let our list know first.' },
  { q: 'Do I need to be an LLC or have proof of funds?', a: 'No. We work with first-time buyers and seasoned investors. The only thing that matters is your ability to close fast when you find a deal you want. For larger deals or competitive properties, we may ask for proof of funds before sending full details.' },
  { q: 'Who runs Georgia Wholesale Homes?', a: 'Joshua Paschall, based in Decatur, GA. We\'ve sourced 100+ properties across metro Atlanta. You can reach us anytime at (770) 520-7674 or info@georgiawholesalehomes.com.' },
  { q: 'Can I see properties before they\'re texted to the list?', a: 'No — our list is the first place a deal is announced. The whole value of being on the list is getting the alert before anyone else. Public listings on this site are properties already shown to the list.' },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-page max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-navy mb-4">Common questions</h1>
            <p className="text-lg text-ink/70 mb-12">If your question isn&apos;t here, call us at (770) 520-7674 or email info@georgiawholesalehomes.com.</p>

            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <details key={i} className="bg-white rounded-lg border border-navy/10 p-6 group">
                  <summary className="font-display text-lg text-navy cursor-pointer flex justify-between items-start gap-4 list-none">
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 text-orange-500 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-ink/80 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-navy/10 text-center">
              <p className="text-ink/70 mb-4">Ready to see real Atlanta deals?</p>
              <Link href="/#signup" className="btn-primary text-lg">Join the VIP list</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
