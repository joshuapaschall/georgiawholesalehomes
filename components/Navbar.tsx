'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 px-8 py-4 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-navy'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="#home"
          className="font-heading text-xl font-semibold tracking-wide text-gold"
        >
          Georgia Wholesale Homes
        </Link>
        <a
          href="tel:7705033434"
          className="font-body text-base font-medium text-white transition-colors duration-300 hover:text-gold"
        >
          (770) 503-3434
        </a>
      </nav>
    </header>
  );
}
