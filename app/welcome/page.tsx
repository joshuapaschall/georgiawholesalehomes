import Link from 'next/link';

export const metadata = { robots: { index: false } };

export default async function WelcomePage({ searchParams }: { searchParams: Promise<{ fname?: string }> }) {
  const { fname } = await searchParams;
  return (
    <main className="min-h-screen bg-cream py-12">
      <div className="container-page max-w-4xl space-y-8">
        <h1 className="text-4xl font-display text-navy">{fname ? `You're on the list, ${fname}.` : "You're on the list."}</h1>
        <p className="text-lg text-ink/80">From now on, the second we lock up a Georgia deal that fits what you buy, it lands on your phone and in your inbox — usually before anyone else knows it exists.</p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card t="Check your texts. We just sent a welcome message — reply YES so you never miss a drop." />
          <Card t="Add us to your contacts and inbox so deal alerts don't get buried in spam." />
          <Card t="When a deal hits, move fast — our best properties are claimed within 48 hours." />
        </div>
        <Link href="/properties" className="inline-flex btn-primary px-6 py-3">See current Georgia deals →</Link>
        <div className="bg-navy text-white p-4 rounded-md">Pro tip: save Georgia Wholesale Homes to your phone contacts so every deal alert jumps out.</div>
      </div>
    </main>
  );
}

function Card({ t }: { t: string }) { return <div className="bg-white rounded-lg p-5 border border-navy/10">{t}</div>; }
