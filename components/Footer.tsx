import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white">
      <div className="container-page py-12 lg:py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-md p-1.5">
                <Logo variant="mark" size={36} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-medium tracking-[0.2em] text-[10px] uppercase">Georgia Wholesale</span>
                <span className="text-white font-medium tracking-[0.2em] text-[10px] uppercase">Homes</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Off-market Atlanta investment properties. Texted to our VIP buyer list before they hit MLS.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/90">Site</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white">Home</Link></li>
              <li><Link href="/properties" className="text-white/70 hover:text-white">Properties</Link></li>
              <li><Link href="/how-it-works" className="text-white/70 hover:text-white">How It Works</Link></li>
              <li><Link href="/faq" className="text-white/70 hover:text-white">FAQ</Link></li>
              <li><Link href="/our-company" className="text-white/70 hover:text-white">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/90">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-white/70 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-white/70 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/contact-us" className="text-white/70 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/90">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="tel:+17705207674" className="hover:text-white">(770) 520-7674</a></li>
              <li><a href="mailto:info@georgiawholesalehomes.com" className="hover:text-white">info@georgiawholesalehomes.com</a></li>
              <li className="pt-2 leading-relaxed">
                3904 N Druid Hills Rd<br />
                Suite 244<br />
                Decatur, GA 30033
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {year} Georgia Wholesale Homes LLC. All rights reserved.</p>
          <p>Properties sold for cash or hard money. Buyer responsible for due diligence. Opinions of value and rent are estimates.</p>
        </div>
      </div>
    </footer>
  );
}
