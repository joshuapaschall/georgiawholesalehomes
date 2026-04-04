export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="section-title">Let&apos;s Talk About Your Property</h2>
          <p className="section-subtitle">
            Connect with our team to discuss full-service management solutions for
            your rental property in Georgia.
          </p>
        </div>

        <div className="glass-card">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-gold">
            Contact Information
          </p>
          <div className="mt-6 space-y-5 text-navy/85">
            <div>
              <p className="font-body text-sm font-medium uppercase tracking-wide text-navy/55">
                Office
              </p>
              <p className="mt-1 text-lg">
                3715 Northside Pkwy NW, Bldg 100 Ste 500, Atlanta GA 30327
              </p>
            </div>
            <div>
              <p className="font-body text-sm font-medium uppercase tracking-wide text-navy/55">
                Phone
              </p>
              <a
                className="mt-1 inline-block text-lg font-medium text-navy hover:text-gold"
                href="tel:7705033434"
              >
                (770) 503-3434
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
