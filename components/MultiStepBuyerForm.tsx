'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BUYER_TYPES, PAYMENT_METHODS, PROPERTY_TYPES } from '@/lib/form-taxonomy';
import { LocationPicker } from '@/components/LocationPicker';

const API_BASE = process.env.NEXT_PUBLIC_LISTHIT_API_URL || 'https://app.listhit.io';
const TCPA_STRICT = process.env.NEXT_PUBLIC_TCPA_STRICT === 'true';
const CONSENT_TEXT = TCPA_STRICT
  ? 'By Submitting your cell phone number you are agreeing to receive automated/promotional Text Messages from Georgia Wholesale Homes. Message frequency varies. This campaign utilizes promotional marketing. Reply STOP to cancel. For Help reply with HELP. Message and Data Rates May Apply.'
  : 'By submitting your cell phone number, you agree to receive automated promotional SMS messages from Georgia Wholesale Homes. Message frequency varies (typically 1-3 per week). Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. View our Terms of Service and Privacy Policy.';

type Validation = { ok?: boolean; message?: string; suggestion?: string; loading?: boolean; code?: string };

export function MultiStepBuyerForm({ variant = 'card' }: { variant?: 'card' | 'inline' }) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({ fname: '', lname: '', phone: '', email: '', consent: false, buyer_types: [] as string[], payment_methods: [] as string[], property_types: [] as string[], locations: [] as string[], asking_price_min: '', asking_price_max: '' });
  const [phoneVal, setPhoneVal] = useState<Validation>({});
  const [emailVal, setEmailVal] = useState<Validation>({});
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const step2HeadingRef = useRef<HTMLHeadingElement>(null);

  const utm = useMemo(() => {
    if (typeof window === 'undefined') return {};
    const p = new URLSearchParams(window.location.search);
    const e = Object.fromEntries(Array.from(p.entries()).filter(([k]) => k.startsWith('utm_')));
    return e;
  }, []);

  useEffect(() => { if (step === 2) step2HeadingRef.current?.focus(); }, [step]);

  async function validatePhone() { /* simplified */ }

  async function onStep1() {
    if (!form.fname.trim() || !form.phone.trim() || !form.email.trim() || !form.consent) return;
    if (phoneVal.ok === false || emailVal.ok === false) return;
    setSaving(true); setError('');
    try {
      const res = await fetch(`${API_BASE}/api/public/buyers/signup`, { method: 'POST', credentials: 'omit', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fname: form.fname.trim(), lname: form.lname.trim() || undefined, email: form.email.trim(), phone: form.phone.trim(), consent_text: CONSENT_TEXT, source_url: window.location.href, utm }) });
      if (!res.ok) throw new Error('fail');
      setStep(2);
    } catch {
      setError('Something hiccupped on our end. Try again, or text us at (770) 520-7674.');
    } finally { setSaving(false); }
  }

  async function onStep2() {
    setSaving(true); setError('');
    try {
      const res = await fetch('/signup', { method: 'POST', credentials: 'omit', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fname: form.fname.trim(), lname: form.lname.trim() || undefined, email: form.email.trim(), phone: form.phone.trim(), buyer_types: form.buyer_types, payment_methods: form.payment_methods, property_types: form.property_types, locations: form.locations, asking_price_min: form.asking_price_min || undefined, asking_price_max: form.asking_price_max || undefined, consent_text: CONSENT_TEXT }) });
      if (!res.ok) throw new Error('fail');
      router.push(`/welcome?fname=${encodeURIComponent(form.fname.trim())}`);
    } catch {
      setError('Something hiccupped on our end. Try again, or text us at (770) 520-7674.');
    } finally { setSaving(false); }
  }

  return <div className={variant==='card' ? 'bg-white rounded-lg p-6 shadow-lg border border-navy/10' : ''}>{step===1 ? <div className="space-y-3"><div className="text-xs font-semibold text-orange-600">STEP 1 OF 2 · ~30 seconds</div><h3 className="text-2xl font-display text-navy">Get Georgia deals sent to you</h3><p className="text-ink/70">New off-market properties, by text and email.</p><input placeholder="First name *" className="w-full border rounded-md px-4 py-3" value={form.fname} onChange={(e)=>setForm({...form,fname:e.target.value})}/><input placeholder="Last name" className="w-full border rounded-md px-4 py-3" value={form.lname} onChange={(e)=>setForm({...form,lname:e.target.value})}/><input placeholder="Mobile phone *" className="w-full border rounded-md px-4 py-3" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} onBlur={async()=>{try{setPhoneVal({loading:true}); const r=await fetch(`${API_BASE}/api/public/validate/phone`,{method:'POST',credentials:'omit',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone:form.phone})}); if(!r.ok){setPhoneVal({}); return;} const d=await r.json(); if(d.accept===false){setPhoneVal({ok:false,code:d.reason,message:d.reason==='landline_not_allowed'?'That looks like a landline. We send deals by text, so we\'ll need a mobile number.':'We can\'t reliably text this number — please use a mobile.'});} else setPhoneVal({ok:true,message:'Mobile confirmed.'});}catch{setPhoneVal({});}}}/><p className="text-xs text-ink/70">We text deals here — mobile numbers only.</p>{phoneVal.message && <p className={`text-sm ${phoneVal.ok===false?'text-red-600':'text-emerald-600'}`}>{phoneVal.message}</p>}<input placeholder="Email *" className="w-full border rounded-md px-4 py-3" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} onBlur={async()=>{try{setEmailVal({loading:true}); const r=await fetch(`${API_BASE}/api/public/validate/email`,{method:'POST',credentials:'omit',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:form.email})}); if(!r.ok){setEmailVal({}); return;} const d=await r.json(); if(d.accept===false){setEmailVal({ok:false,message:'Hmm, that email doesn\'t look right — mind double-checking?'});} else if(d.did_you_mean){setEmailVal({ok:true,suggestion:d.did_you_mean});} else setEmailVal({ok:true});}catch{setEmailVal({});}}}/>{emailVal.suggestion && <button type="button" className="text-sm text-navy underline" onClick={()=>setForm({...form,email:emailVal.suggestion!})}>Did you mean {emailVal.suggestion}?</button>}{emailVal.ok===false && <p className="text-sm text-red-600">Hmm, that email doesn&apos;t look right — mind double-checking?</p>}<label className="text-xs flex gap-2"><input type="checkbox" checked={form.consent} onChange={(e)=>setForm({...form,consent:e.target.checked})}/>I agree to receive SMS alerts.</label>{error && <p className="text-sm text-red-600">{error}</p>}<button onClick={onStep1} disabled={saving} className="w-full btn-primary py-3">Send Me Deals →</button><p className="text-xs text-center text-ink/60">Free · No spam · Reply STOP anytime</p></div> : <div className="space-y-4"><div className="text-xs font-semibold text-orange-600">STEP 2 OF 2 · Last step</div><h3 ref={step2HeadingRef} tabIndex={-1} className="text-2xl font-display text-navy">{form.fname || 'Friend'}, what should we send you?</h3><p className="text-ink/70">Tell us what you actually buy, so we only text you deals worth your time — not stuff you&apos;ll delete.</p><Section title="Your strategy" items={BUYER_TYPES.map((x)=>({k:x.key,l:x.label}))} values={form.buyer_types} onChange={(v)=>setForm({...form,buyer_types:v})}/><Section title="What you buy" items={PROPERTY_TYPES.map((x)=>({k:x,l:x}))} values={form.property_types} onChange={(v)=>setForm({...form,property_types:v})}/><Section title="How you fund deals" items={PAYMENT_METHODS.map((x)=>({k:x.key,l:x.label}))} values={form.payment_methods} onChange={(v)=>setForm({...form,payment_methods:v})}/><p className="font-medium">Where in Georgia?</p><p className="text-sm text-ink/70">Pick counties or cities, or just choose statewide.</p><LocationPicker value={form.locations} onChange={(v)=>setForm({...form,locations:v})}/><p className="font-medium">Your price range</p><p className="text-sm text-ink/70">Roughly what you spend per deal (optional).</p><div className="grid grid-cols-2 gap-3"><input placeholder="Min" className="border rounded-md px-3 py-2" value={form.asking_price_min} onChange={(e)=>setForm({...form,asking_price_min:e.target.value})}/><input placeholder="Max" className="border rounded-md px-3 py-2" value={form.asking_price_max} onChange={(e)=>setForm({...form,asking_price_max:e.target.value})}/></div>{error && <p className="text-sm text-red-600">{error}</p>}<div className="flex gap-3"><button type="button" className="px-4 py-2 border rounded" onClick={()=>setStep(1)}>Back</button><button onClick={onStep2} disabled={saving} className="flex-1 btn-primary py-3">Start Sending Me Deals →</button></div><p className="text-xs text-center text-ink/60">You&apos;re already on the list — this just makes sure we send the right deals.</p><button type="button" className="text-sm underline text-navy" onClick={()=>router.push('/welcome')}>Skip for now — send me everything</button></div>}</div>;
}

function Section({ title, items, values, onChange }: { title: string; items: { k: string; l: string }[]; values: string[]; onChange: (v: string[]) => void }) {
  return <div><p className="font-medium mb-2">{title}</p><div className="flex flex-wrap gap-2">{items.map((item)=>{const active=values.includes(item.k); return <button key={item.k} type="button" onClick={()=>onChange(active?values.filter((v)=>v!==item.k):[...values,item.k])} className={`px-3 py-2 rounded-full border text-sm ${active?'bg-navy text-white border-navy':'bg-white border-navy/30'}`}>{item.l}</button>;})}</div></div>;
}
