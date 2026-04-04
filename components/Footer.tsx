export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-navy/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Georgia Wholesale Homes. All rights reserved.</p>
        <p>Residential Property Management & Rental Services in Georgia</p>
      </div>
    </footer>
  );
}
