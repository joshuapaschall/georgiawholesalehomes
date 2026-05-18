import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-page max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-navy mb-6">Privacy Policy</h1>
            <p className="text-sm text-ink/60 mb-8">Last updated: May 18, 2026</p>

            <div className="prose prose-lg text-ink/80 space-y-5 leading-relaxed text-base">
              <h2 className="text-2xl font-display text-navy mt-8">What we collect</h2>
              <p>When you sign up for our VIP buyer list, we collect: your first name, optional last name, phone number, optional email address, and your selected buyer type. We also record the timestamp of your signup, the page URL where you signed up, your IP address, and your browser user agent string. This information is used to administer the SMS program and comply with TCPA recordkeeping requirements.</p>

              <h2 className="text-2xl font-display text-navy mt-8">How we use it</h2>
              <p>We use your contact information solely to send you SMS deal alerts and program-related messages from Georgia Wholesale Homes LLC. We do not sell, rent, or share your contact information with third parties for marketing purposes.</p>

              <h2 className="text-2xl font-display text-navy mt-8">Third parties</h2>
              <p>We use third-party technology providers (currently Telnyx, Twilio, and Supabase) to deliver SMS messages and store your contact data. These vendors are bound by their own data protection commitments and access your data only to the extent necessary to operate the SMS program. We do not share opt-in data for marketing purposes with any third party.</p>

              <h2 className="text-2xl font-display text-navy mt-8">Data retention</h2>
              <p>We retain your contact information as long as you remain subscribed to our SMS program. If you opt out (by texting STOP or any standard opt-out keyword), we retain a record of your opt-out for TCPA compliance purposes but suppress all further messaging.</p>

              <h2 className="text-2xl font-display text-navy mt-8">Your rights</h2>
              <p>You have the right to opt out of SMS messaging at any time by replying STOP. You have the right to request deletion of your contact information by emailing <a href="mailto:josh@georgiawholesalehomes.com" className="text-navy underline">josh@georgiawholesalehomes.com</a>. We will delete your record within 30 days of a valid request, except where retention is required for TCPA compliance.</p>

              <h2 className="text-2xl font-display text-navy mt-8">Cookies</h2>
              <p>This website uses minimal cookies for basic functionality (e.g., remembering your preferences). We do not use third-party advertising cookies or trackers.</p>

              <h2 className="text-2xl font-display text-navy mt-8">Contact</h2>
              <p>Questions about this privacy policy? <a href="mailto:josh@georgiawholesalehomes.com" className="text-navy underline">josh@georgiawholesalehomes.com</a> or (770) 520-7674.</p>

              <p>Georgia Wholesale Homes LLC<br />3904 N Druid Hills Road, Suite 244<br />Decatur, GA 30033</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
