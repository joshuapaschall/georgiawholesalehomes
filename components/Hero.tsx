export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy px-6"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
        viewBox="0 0 1200 800"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#C9A84C" strokeWidth="1.25">
          <path d="M-50 720L1150 -80" />
          <path d="M-120 760L1080 -40" />
          <path d="M80 860L1280 60" />
          <path d="M140 820L1340 20" />
        </g>
        <g stroke="#C9A84C" strokeWidth="2">
          <path d="M80 80h110v30" />
          <path d="M1120 80h-110v30" />
          <path d="M80 720h110v-30" />
          <path d="M1120 720h-110v-30" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-body text-sm font-medium uppercase tracking-[0.35em] text-gold">
          Atlanta, Georgia
        </p>
        <h1 className="mt-6 font-heading text-5xl font-semibold leading-tight text-white md:text-7xl">
          Property Management You Can Count On
        </h1>
        <p className="mx-auto mt-6 max-w-3xl font-body text-xl text-white/85">
          Full-service residential property management for landlords and tenants
          across Georgia.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gold px-7 py-3 font-body text-base font-medium text-navy transition hover:bg-gold-light"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="rounded-full border border-gold px-7 py-3 font-body text-base font-medium text-gold transition hover:bg-gold hover:text-navy"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
