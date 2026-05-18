import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const TCPA_STRICT = process.env.NEXT_PUBLIC_TCPA_STRICT === 'true';

function StrictPrivacy() {
  return (
    <div className="space-y-5 text-base text-ink/80 leading-relaxed">
      <p>
        This Privacy Policy supplements our{' '}
        <a href="/terms" className="text-navy underline">Terms of Use</a>{' '}
        and covers how we collect, use, and protect your data in connection with our telemarketing &amp; text messaging program.
      </p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">What we collect</h2>
      <p>
        When you sign up for our VIP buyer list or submit a form on this website, we collect: your first name, optional last name, phone number, optional email address, and your selected buyer type. We also record the timestamp of your signup, the page URL where you signed up, your IP address, and your browser user agent string.
      </p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">Opt-in data sharing</h2>
      <p>
        Opt-in data and consent for text messaging will not be shared with any third parties except with technology partners for the purpose of enabling and operating our telemarketing &amp; text messaging program (i.e., facilitating the sending and receiving of text messages).
      </p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">Cookies</h2>
      <p>
        Our website may use cookies to keep track of items you put into your shopping cart, including when you have abandoned your checkout. This information is used to determine when to send cart reminder text messages. Abandoned shopping cart notices are not considered promotional.
      </p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">Contacting Us</h2>
      <p>
        If there are any questions regarding this Privacy Policy you may contact us at{' '}
        <a href="mailto:info@georgiawholesalehomes.com" className="text-navy underline">info@georgiawholesalehomes.com</a>{' '}
        or Call Us at{' '}
        <a href="tel:+17705207674" className="text-navy underline">(770) 520-7674</a>.
      </p>
      <p>
        Georgia Wholesale Homes<br />
        3904 N Druid Hills Road Suite 244<br />
        Decatur, GA 30033
      </p>
    </div>
  );
}

function DefaultPrivacy() {
  return (
    <div className="space-y-5 text-base text-ink/80 leading-relaxed">
      <h2 className="text-2xl font-display text-navy mt-4 mb-3">What we collect</h2>
      <p>
        When you sign up for our VIP buyer list or submit a form on this website, we collect: your first name, optional last name, phone number, optional email address, and your selected buyer type. We also record the timestamp of your signup, the page URL where you signed up, your IP address, and your browser user agent string. This information is used to administer the SMS program and comply with TCPA recordkeeping requirements.
      </p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">How we use it</h2>
      <p>
        We use your contact information solely to send you SMS deal alerts, account notifications, scheduling information, customer support, and program-related messages from Georgia Wholesale Homes. We do not sell, rent, or share your contact information with third parties for marketing purposes.
      </p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">Opt-in data sharing</h2>
      <p>
        Opt-in data and consent for text messaging will not be shared with any third parties except with technology partners for the purpose of enabling and operating our telemarketing &amp; text messaging program (i.e., facilitating the sending and receiving of text messages).
      </p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">Third-party service providers</h2>
      <p>
        We use third-party technology providers (currently Telnyx, Supabase, and Vercel) to deliver SMS messages, store your contact data, and host this website. These vendors access your data only to the extent necessary to operate the SMS program and website.
      </p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">Data retention</h2>
      <p>
        We retain your contact information as long as you remain subscribed to our SMS program. If you opt out (by texting STOP or any standard opt-out keyword), we retain a record of your opt-out for TCPA compliance purposes but suppress all further messaging. You may request deletion of your contact information by emailing{' '}
        <a href="mailto:info@georgiawholesalehomes.com" className="text-navy underline">info@georgiawholesalehomes.com</a>.
        We will delete your record within 30 days of a valid request, except where retention is required for TCPA compliance.
      </p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">Cookies</h2>
      <p>This website uses minimal cookies for basic functionality. We do not use third-party advertising cookies or trackers.</p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">SMS terms</h2>
      <p>
        For complete Telemarketing and Text Message Terms of Service, including opt-in consent, message frequency, opt-out instructions, and liability terms, please see our{' '}
        <a href="/terms" className="text-navy underline">Terms of Use</a>.
      </p>

      <h2 className="text-2xl font-display text-navy mt-8 mb-3">Contact us</h2>
      <p>
        Questions about this privacy policy?{' '}
        <a href="mailto:info@georgiawholesalehomes.com" className="text-navy underline">info@georgiawholesalehomes.com</a>{' '}
        or{' '}
        <a href="tel:+17705207674" className="text-navy underline">(770) 520-7674</a>.
      </p>
      <p>
        Georgia Wholesale Homes LLC<br />
        3904 N Druid Hills Road, Suite 244<br />
        Decatur, GA 30033
      </p>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-page max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-navy mb-6">
              Privacy Policy
            </h1>
            {TCPA_STRICT ? <StrictPrivacy /> : <DefaultPrivacy />}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
