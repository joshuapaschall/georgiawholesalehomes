'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); onScroll(); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-card border-b border-navy/10' : 'bg-cream/95'}`}><a href="#main-content" className="skip-link">Skip to main content</a><nav className="container-page flex items-center justify-between py-3" aria-label="Main navigation"><Link href="/" className="flex-shrink-0"><Logo variant="horizontal" size={42} /></Link><div className="hidden md:flex items-center gap-7"><Link href="/properties" className="nav-link">Properties</Link><Link href="/how-it-works" className="nav-link">How it works</Link><Link href="/faq" className="nav-link">FAQ</Link><Link href="/#signup" className="btn-primary text-sm">Join the List</Link></div><button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" aria-expanded={mobileOpen}>☰</button></nav>{mobileOpen && <div className="md:hidden bg-white border-t border-navy/10"><div className="container-page flex flex-col py-4 gap-4"><Link href="/properties" className="nav-link" onClick={() => setMobileOpen(false)}>Properties</Link><Link href="/how-it-works" className="nav-link" onClick={() => setMobileOpen(false)}>How It Works</Link><Link href="/faq" className="nav-link" onClick={() => setMobileOpen(false)}>FAQ</Link><Link href="/our-company" className="nav-link" onClick={() => setMobileOpen(false)}>About</Link><Link href="/contact-us" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</Link><Link href="/#signup" className="btn-primary text-sm" onClick={() => setMobileOpen(false)}>Join the List</Link></div></div>}</header>;
}
