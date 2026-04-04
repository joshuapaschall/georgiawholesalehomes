export default function About() {
  return (
    <section id="about" className="section-padding bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold">
            About Georgia Wholesale Homes
          </p>
          <h2 className="mt-4 font-heading text-5xl font-semibold leading-tight text-white">
            Trusted Residential Property Management Across Georgia
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Georgia Wholesale Homes helps landlords and tenants succeed through
            responsive communication, operational excellence, and dependable local
            market expertise. We focus on protecting your investment while delivering
            high-quality rental experiences.
          </p>
        </div>
        <div className="rounded-3xl border border-gold/30 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="font-heading text-3xl font-semibold text-gold">Our Focus</h3>
          <ul className="mt-6 space-y-4 text-white/85">
            <li>• Minimize vacancy and maximize consistent rental income</li>
            <li>• Provide professional, fair tenant support and communication</li>
            <li>• Keep owners informed with transparent monthly reporting</li>
            <li>• Protect property value with proactive maintenance strategy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
