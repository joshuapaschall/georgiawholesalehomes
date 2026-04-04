const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    description:
      'We align on your goals, property portfolio, and service expectations to build the right management plan.',
  },
  {
    step: '02',
    title: 'Onboarding & Setup',
    description:
      'Our team handles documentation, pricing strategy, and listing preparation to ensure a smooth transition.',
  },
  {
    step: '03',
    title: 'Day-to-Day Management',
    description:
      'From leasing to maintenance and owner reporting, we manage operations while keeping you informed.',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">How We Work With Property Owners</h2>
        <p className="section-subtitle">
          A proven, straightforward process designed to protect your asset and
          improve rental performance.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-2xl border border-gold-light bg-cream p-8">
              <p className="font-body text-sm font-medium tracking-[0.3em] text-gold">
                STEP {item.step}
              </p>
              <h3 className="mt-3 font-heading text-3xl font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-4 text-base text-navy/75">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
