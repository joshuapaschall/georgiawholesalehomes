const serviceItems = [
  {
    title: 'Leasing & Tenant Placement',
    description:
      'High-quality marketing, property showings, screening, and onboarding that reduces vacancy and improves long-term retention.',
  },
  {
    title: 'Rent Collection & Accounting',
    description:
      'Reliable rent processing, owner disbursements, and transparent reporting that keeps your finances organized every month.',
  },
  {
    title: 'Maintenance Coordination',
    description:
      'Responsive maintenance management with trusted local vendors and communication workflows tenants can count on.',
  },
  {
    title: 'Compliance & Inspections',
    description:
      'Routine inspections and regulatory oversight to help protect your investment and maintain property standards.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Comprehensive Property Management Services</h2>
        <p className="section-subtitle">
          We provide end-to-end support for residential rental properties across
          Georgia so owners can scale with confidence.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceItems.map((service) => (
            <article key={service.title} className="glass-card">
              <h3 className="font-heading text-3xl font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-4 text-base text-navy/75">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
