import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BuyerSignupForm } from '@/components/BuyerSignupForm';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section id="signup" className="bg-cream py-12 lg:py-20">
          <div className="container-page grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-orange-600 font-medium text-sm tracking-wide uppercase mb-4">Metro Atlanta · Off-Market Properties</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-navy leading-[1.05] mb-6">
                See Atlanta wholesale deals before anyone else.
              </h1>
              <p className="text-lg lg:text-xl text-ink/80 leading-relaxed mb-6">
                We hunt off-market investment properties across metro Atlanta and text our VIP buyer list the moment we lock one up. 30-50% under retail. Cash-ready buyers only. Most deals close in 48 hours.
              </p>
              <p className="text-base text-ink/60">
                Free to join. No spam. 1-3 deals per week, sent the moment we source them.
              </p>
            </div>
            <div>
              <BuyerSignupForm variant="card" />
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container-page">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl lg:text-4xl font-display text-navy mb-4">What you get on our VIP list</h2>
              <p className="text-lg text-ink/70">Four things that separate our list from every &quot;join my buyers list&quot; mailing form.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-cream p-6 lg:p-8 rounded-lg border border-navy/5">
                <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>
                </div>
                <h3 className="text-xl font-display text-navy mb-2">Off-market access</h3>
                <p className="text-ink/70 leading-relaxed">Properties never listed on MLS. Direct from distressed sellers, probate, tax delinquency, and off-market wholesaler networks across metro Atlanta.</p>
              </div>
              <div className="bg-cream p-6 lg:p-8 rounded-lg border border-navy/5">
                <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h3 className="text-xl font-display text-navy mb-2">Cash-buyer pricing</h3>
                <p className="text-ink/70 leading-relaxed">Every deal at 30-50% under retail value. We&apos;ve already negotiated the discount with the seller — you just close on the property with built-in equity.</p>
              </div>
              <div className="bg-cream p-6 lg:p-8 rounded-lg border border-navy/5">
                <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                </div>
                <h3 className="text-xl font-display text-navy mb-2">Speed advantage</h3>
                <p className="text-ink/70 leading-relaxed">Text alerts hit your phone the moment we source a deal. Reply YES to lock in your interest before the rest of the list sees the full details.</p>
              </div>
              <div className="bg-cream p-6 lg:p-8 rounded-lg border border-navy/5">
                <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></svg>
                </div>
                <h3 className="text-xl font-display text-navy mb-2">No filler</h3>
                <p className="text-ink/70 leading-relaxed">No newsletters, no upsells, no spam, no &quot;limited time webinars.&quot; Just deals when we have them. Reply STOP anytime to unsubscribe.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-navy text-white py-16 lg:py-24">
          <div className="container-page">
            <div className="max-w-3xl mb-12">
              <p className="text-orange-400 font-medium text-sm tracking-wide uppercase mb-3">The process</p>
              <h2 className="text-3xl lg:text-4xl font-display mb-4">How it works</h2>
              <p className="text-lg text-white/80">Three steps from signup to closing on your next investment property.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <div className="text-orange-400 font-display text-5xl lg:text-6xl mb-3">01</div>
                <h3 className="text-xl lg:text-2xl font-display mb-2">Sign up</h3>
                <p className="text-white/70 leading-relaxed">Drop your name and phone in the form. Takes 60 seconds. We confirm with one welcome text.</p>
              </div>
              <div>
                <div className="text-orange-400 font-display text-5xl lg:text-6xl mb-3">02</div>
                <h3 className="text-xl lg:text-2xl font-display mb-2">Get alerts</h3>
                <p className="text-white/70 leading-relaxed">When we lock up a new property, we text you the address, beds/baths, condition, asking cash price, and a link to photos. 1-3 deals per week on average.</p>
              </div>
              <div>
                <div className="text-orange-400 font-display text-5xl lg:text-6xl mb-3">03</div>
                <h3 className="text-xl lg:text-2xl font-display mb-2">Move fast</h3>
                <p className="text-white/70 leading-relaxed">Reply YES if interested. We send full details and closing terms. Top buyers close in days, not weeks. Most properties move within 48 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO'S ON THE LIST */}
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-page">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl lg:text-4xl font-display text-navy mb-4">Built for serious investors</h2>
              <p className="text-lg text-ink/70">Our list works for any investment strategy that needs consistent off-market deal flow.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Buy & hold', body: 'Building a rental portfolio. We source cash-flow properties at deep discounts in landlord-friendly Atlanta submarkets.' },
                { title: 'Fix & flip', body: 'Need consistent deal flow. We source distressed houses ready for rehab with margin built in.' },
                { title: 'BRRRR strategy', body: 'Buy, rehab, rent, refinance, repeat. We find the deals that make the BRRRR math work.' },
                { title: 'Cash buyers', body: 'Owner-occupants, retirees, family buyers paying cash for primary homes. We have deals for everyone.' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-lg border border-navy/5">
                  <h3 className="text-lg font-display text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container-page">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl lg:text-4xl font-display text-navy mb-4">Why our buyer list beats the auction block</h2>
              <p className="text-lg text-ink/70">Three reasons our buyers stop hunting MLS and the auction block.</p>
            </div>
            <div className="space-y-8 max-w-3xl">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-display text-lg">1</div>
                <div>
                  <h3 className="text-xl font-display text-navy mb-2">No bidding wars</h3>
                  <p className="text-ink/70 leading-relaxed">At auction or on MLS, you&apos;re competing with 20 other investors who all see the same listing. On our list, we send each deal to a small, vetted group. First serious buyer wins.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-display text-lg">2</div>
                <div>
                  <h3 className="text-xl font-display text-navy mb-2">No surprise inspections</h3>
                  <p className="text-ink/70 leading-relaxed">We&apos;ve already walked, photographed, and assessed every property. You know the condition, the rehab scope, and the comparable sales before you make an offer.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-display text-lg">3</div>
                <div>
                  <h3 className="text-xl font-display text-navy mb-2">Atlanta-focused</h3>
                  <p className="text-ink/70 leading-relaxed">We don&apos;t waste your time with deals in markets you don&apos;t operate in. Every property is in metro Atlanta or surrounding counties — Fulton, DeKalb, Cobb, Gwinnett, Clayton, Henry, Rockdale, Newton.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-orange-500 py-16 lg:py-20">
          <div className="container-page text-center max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-display text-white mb-4">Ready to see real Atlanta deals?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join the buyers who get our off-market property alerts. Free. No spam. No obligation.
            </p>
            <Link
              href="#signup"
              className="inline-flex items-center justify-center bg-white hover:bg-cream text-navy font-medium px-8 py-4 rounded-md transition-colors text-lg"
            >
              Get on the VIP list →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
