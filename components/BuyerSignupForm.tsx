'use client';

import { useState } from 'react';

const BUYER_TYPES = [
  { value: 'investor_cash', label: 'Investor / Cash Buyer' },
  { value: 'fix_flip', label: 'Fix & Flip Investor' },
  { value: 'buy_hold', label: 'Buy & Hold Investor' },
  { value: 'wholesaler', label: 'Wholesaler' },
  { value: 'realtor', label: 'Realtor / Agent' },
  { value: 'first_time', label: 'First-Time Buyer' },
  { value: 'other', label: 'Other' },
];

const CONSENT_TEXT =
  'By submitting your cell phone number, you agree to receive automated promotional SMS messages from Georgia Wholesale Homes. Message frequency varies (typically 1-3 per week). Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. View our Terms of Service and Privacy Policy.';

const API_BASE = process.env.NEXT_PUBLIC_LISTHIT_API_URL || 'https://app.listhit.io';

export function BuyerSignupForm({ variant = 'card' }: { variant?: 'card' | 'inline' }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [buyerType, setBuyerType] = useState('investor_cash');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setErrorMsg('Please agree to the SMS terms to continue.');
      setStatus('error');
      return;
    }
    if (!fname.trim() || !phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch(`${API_BASE}/api/public/buyers/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fname: fname.trim(),
          lname: lname.trim() || undefined,
          phone: phone.trim(),
          email: email.trim() || undefined,
          buyer_type: buyerType,
          consent_text: CONSENT_TEXT,
          source_url: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again or call us at (770) 520-7674.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try again or call us at (770) 520-7674.');
    }
  }

  if (status === 'success') {
    return (
      <div className={variant === 'card' ? 'bg-white rounded-lg p-8 shadow-md border border-navy/10' : ''}>
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-2xl font-display text-navy mb-2">You&apos;re on the list.</h3>
          <p className="text-ink/80">Check your phone — we just texted you a welcome message. Next deal hits your phone the moment we source it.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={variant === 'card' ? 'bg-white rounded-lg p-6 lg:p-8 shadow-lg border border-navy/10' : ''}
    >
      <h3 className="text-2xl lg:text-3xl font-display text-navy mb-1">Join the VIP Buyer List</h3>
      <p className="text-ink/70 text-sm mb-5">Get new deal alerts texted to your phone</p>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">First name *</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
            maxLength={50}
            className="w-full px-4 py-2.5 border border-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">What kind of buyer are you?</label>
          <select
            value={buyerType}
            onChange={(e) => setBuyerType(e.target.value)}
            className="w-full px-4 py-2.5 border border-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 bg-white"
          >
            {BUYER_TYPES.map((bt) => (
              <option key={bt.value} value={bt.value}>{bt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">Phone *</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="(404) 555-0123"
            className="w-full px-4 py-2.5 border border-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">Email <span className="text-ink/50 font-normal">(optional)</span></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 border border-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
          />
        </div>

        <label className="flex items-start gap-2.5 pt-2 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-4 h-4 accent-orange-500 cursor-pointer"
          />
          <span className="text-xs text-ink/70 leading-relaxed">
            By submitting, I agree to receive automated promotional SMS from Georgia Wholesale Homes. Msg & data rates may apply. Reply STOP to opt out, HELP for help. View <a href="/terms" className="text-navy underline">Terms</a> and <a href="/privacy" className="text-navy underline">Privacy Policy</a>.
          </span>
        </label>

        {status === 'error' && errorMsg && (
          <div className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-md">{errorMsg}</div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-base py-3"
        >
          {status === 'submitting' ? 'Sending...' : 'Get Deal Alerts'}
        </button>

        <p className="text-xs text-center text-ink/50 mt-2">Free. No spam. Just deals.</p>
      </div>
    </form>
  );
}
