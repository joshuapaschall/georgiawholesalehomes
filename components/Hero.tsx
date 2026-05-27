'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MultiStepBuyerForm } from '@/components/MultiStepBuyerForm';

const HERO_VIDEO_URL = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
const HERO_VIDEO_POSTER = process.env.NEXT_PUBLIC_HERO_VIDEO_POSTER;
const SOCIAL_PROOF = process.env.NEXT_PUBLIC_SOCIAL_PROOF;

export function Hero() {
  const [play, setPlay] = useState(false);

  return (
    <section id="signup" className="bg-cream py-8 lg:py-16">
      <div className="container-page grid gap-8 items-start lg:grid-cols-[1.15fr_1fr]">
        <div className="bg-navy text-white px-5 pt-6 pb-12 -mx-5 sm:mx-0 sm:rounded-xl lg:bg-transparent lg:text-navy lg:p-0 lg:mx-0">
          <div className="lg:block hidden">
            <p className="text-orange-600 font-medium text-sm tracking-wide uppercase mb-3">STATEWIDE GEORGIA · OFF-MARKET INVESTMENT PROPERTIES</p>
            <h1 className="text-4xl lg:text-6xl font-display text-navy leading-[1.05] mb-5">See Georgia wholesale deals before anyone else.</h1>
            <p className="text-lg text-ink/80 mb-6">We hunt off-market investment properties across Georgia and send them to our buyers — 30 to 50% under retail — the moment we lock them up. By text and email. Free to join. No spam, ever.</p>
            <ul className="space-y-3 text-ink/80 mb-4">
              <li><strong>30–50% under retail.</strong> We&apos;ve already negotiated the discount. You close with equity built in.</li>
              <li><strong>Off-market.</strong> Direct from distressed sellers, probate, and tax-delinquent owners. Never on the MLS.</li>
              <li><strong>You move first.</strong> Reply YES and you&apos;re front of the line before the rest of the list sees it.</li>
            </ul>
            {SOCIAL_PROOF ? <p className="text-sm text-navy/80">Trusted by {SOCIAL_PROOF}.</p> : null}
            {HERO_VIDEO_URL && (
              <div className="mt-6 rounded-lg overflow-hidden border border-navy/10 bg-white">
                {!play ? (
                  <button onClick={() => setPlay(true)} className="w-full text-left">
                    {HERO_VIDEO_POSTER ? (
                      <Image src={HERO_VIDEO_POSTER} alt="Watch how Georgia Wholesale Homes works" width={1280} height={720} className="w-full aspect-video object-cover" priority />
                    ) : (
                      <div className="w-full aspect-video bg-navy flex items-center justify-center">
                        <span aria-hidden="true" className="text-white text-4xl">▶</span>
                        <span className="sr-only">Play video</span>
                      </div>
                    )}
                  </button>
                ) : (
                  <video src={HERO_VIDEO_URL} controls autoPlay playsInline preload="none" className="w-full aspect-video" />
                )}
              </div>
            )}
          </div>

          <div className="lg:hidden">
            <p className="text-orange-200 font-medium text-sm tracking-wide uppercase mb-3">STATEWIDE GEORGIA · OFF-MARKET INVESTMENT PROPERTIES</p>
            <h1 className="text-3xl font-display leading-[1.1] mb-3 text-white">See Georgia wholesale deals before anyone else.</h1>
            <p className="text-white/80">Off-market properties, 30–50% under retail — texted &amp; emailed to you first.</p>
          </div>
        </div>

        <div className="-mt-8 lg:mt-0">
          <MultiStepBuyerForm variant="card" />
          {SOCIAL_PROOF ? <p className="mt-4 text-sm text-navy/80 text-center lg:hidden">Trusted by {SOCIAL_PROOF}.</p> : null}
        </div>

        <div className="lg:hidden">
          <ul className="space-y-3 text-ink/80 mb-4">
            <li><strong>30–50% under retail.</strong> We&apos;ve already negotiated the discount. You close with equity built in.</li>
            <li><strong>Off-market.</strong> Direct from distressed sellers, probate, and tax-delinquent owners. Never on the MLS.</li>
            <li><strong>You move first.</strong> Reply YES and you&apos;re front of the line before the rest of the list sees it.</li>
          </ul>
          {HERO_VIDEO_URL && (
            <div className="mt-6 rounded-lg overflow-hidden border border-navy/10 bg-white">
              {!play ? (
                <button onClick={() => setPlay(true)} className="w-full text-left">
                  {HERO_VIDEO_POSTER ? (
                    <Image src={HERO_VIDEO_POSTER} alt="Watch how Georgia Wholesale Homes works" width={1280} height={720} className="w-full aspect-video object-cover" priority />
                  ) : (
                    <div className="w-full aspect-video bg-navy flex items-center justify-center">
                      <span aria-hidden="true" className="text-white text-4xl">▶</span>
                      <span className="sr-only">Play video</span>
                    </div>
                  )}
                </button>
              ) : (
                <video src={HERO_VIDEO_URL} controls autoPlay playsInline preload="none" className="w-full aspect-video" />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
