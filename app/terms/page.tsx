import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const TCPA_STRICT = process.env.NEXT_PUBLIC_TCPA_STRICT === 'true';

function StrictTerms() {
  return (
    <div className="space-y-5 text-base text-ink/80 leading-relaxed">
      <p>
        Telemarketing and Text Message Terms of Service and Privacy Policy are intended to supplement the provisions of the General Terms of Service and Privacy Policy specifically with respect to Telemarketing &amp; Text Messaging (SMS and MMS) where you have provided &quot;prior express written consent&quot; within the meaning of the Telephone Consumer Protection Act (&quot;TCPA&quot;), you consent to receive telephone calls, including artificial voice calls, pre-recorded messages and/or calls delivered via automated technology and TEXT/SMS messages. Telephone number(s) that you provide are not required to provide this consent to obtain access, request info or purchase our product.
      </p>

      <p>
        Telemarketing and Text Message Terms of Service and Privacy Policy will not limit, supersede or override the General Terms of Service and Privacy Policy, and should be interpreted accordingly. In the event of a conflict between the Telemarketing and Text Message Terms of Service and Privacy Policy and the General Terms of Service and Privacy Policy, the Telemarketing and Text Message Terms of Service and Privacy Policy shall prevail with respect to issues specific to text messaging &amp; telemarketing. For the avoidance of doubt, if there are terms and conditions in the General Terms of Service and Privacy Policy regarding subjects on which the Telemarketing and Text Message Terms of Service and Privacy Policy are silent, such silence will not constitute a conflict and the terms and conditions in the General Terms of Service and Privacy Policy will control in those situations.
      </p>

      <p>When you opt-in to the service, we will send you an SMS message to confirm your signup.</p>

      <p>
        This service is used to send you notifications about the status of your account or service, for scheduling appointments, to provide customer support, communicate product or feature announcements, or to send you promotional offers about our products and services even if your mobile number is registered on any state or federal do-not-call list.
      </p>

      <p>
        Overall message frequency varies and depends on account activity. However, text messages that are promotional in nature will be limited to 4 or less text messages per month. Promotional Text messages may include coupons, offers, upgrades, and new plans that we believe you may be interested in.
      </p>

      <p>
        You can cancel and opt out of future text messages, subscriptions and service at any time by texting one of the following words &quot;STOP&quot;, &quot;END&quot;, &quot;CANCEL&quot;, &quot;QUIT&quot;, &quot;OPT OUT&quot;, &quot;UNSUBSCRIBE&quot;. After you send the message &quot;STOP&quot;, &quot;END&quot;, &quot;CANCEL&quot;, &quot;QUIT&quot;, &quot;OPT OUT&quot;, &quot;UNSUBSCRIBE&quot; to us, we will send you a reply message to confirm that you have been unsubscribed. After this, you will no longer receive messages from us. If you want to join again, just text us &quot;Join&quot;, &quot;Resume&quot; &quot;Start&quot; or &quot;Opt In&quot;, or follow the instructions in the unsubscribe message or sign up as you did the first time, and we will start sending messages to you again.
      </p>

      <p>
        You may be provided in the unsubscribe confirmation with an option to unsubscribe for promotional offers only but continue to get text messages regarding account activities and notices. If you have chosen this option, please follow the instructions in the unsubscribe text message to unsubscribe to just promotional text messages.
      </p>

      <p>
        If at any time you forget what keywords are supported, just text us &quot;HELP&quot; or &quot;INFO&quot;. After you send the message &quot;HELP&quot; or &quot;INFO&quot; to us, we will respond with instructions on how to use our service as well as how to unsubscribe.
      </p>

      <p>Neither Georgia Wholesale Homes or the mobile network operators are liable for delayed or undelivered messages.</p>

      <p>
        We have a right to modify any telephone or short code we use to operate the service at any time. However, if this happens, Georgia Wholesale Homes will be clearly communicated in the text message and all the terms herein apply. In other words, you&apos;re opting in to receive text messages from Georgia Wholesale Homes, not from a specific sender ID or phone number. Your right to manage the type and frequency of messages will apply to all messages sent from Georgia Wholesale Homes to you regardless of the sender ID or phone number the messages are sent from.
      </p>

      <p>
        As always, Message and Data Rates May Apply for any messages sent to you from us and to us from you. If you have any questions about your text plan or data plan, it is best to contact your wireless provider. For all questions about the services provided by this text messaging program, you can send an email to:{' '}
        <a href="mailto:josh@georgiawholesalehomes.com" className="text-navy underline">josh@georgiawholesalehomes.com</a>.
      </p>

      <p>
        Opt-in data and consent for text messaging will not be shared with any third parties except with technology partners for the purpose of enabling and operating our telemarketing &amp; text messaging program (i.e., facilitating the sending and receiving of text messages).
      </p>

      <p>
        Our website may use cookies to keep track of items you put into your shopping cart, including when you have abandoned your checkout. This information is used to determine when to send cart reminder text messages. Abandoned shopping cart notices are not considered promotional.
      </p>

      <h2 className="text-2xl font-display text-navy mt-10 mb-3">Contacting Us</h2>
      <p>
        If there are any questions regarding this Terms of Use and Privacy Policy you may contact us at{' '}
        <a href="mailto:josh@georgiawholesalehomes.com" className="text-navy underline">josh@georgiawholesalehomes.com</a>{' '}
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

function DefaultTerms() {
  return (
    <div className="space-y-5 text-base text-ink/80 leading-relaxed">
      <p>This document covers our SMS/text messaging program. Use of this program is also subject to our General Terms of Service and Privacy Policy.</p>

      <p>
        For telemarketing and text message purposes: Where you have provided &quot;prior express written consent&quot; within the meaning of the Telephone Consumer Protection Act (&quot;TCPA&quot;), you consent to receive telephone calls, including artificial voice calls, pre-recorded messages and/or calls delivered via automated technology, and TEXT/SMS messages from Georgia Wholesale Homes LLC. Telephone number(s) that you provide are not required to obtain access to our services, request information, or purchase property from us.
      </p>

      <p>
        When you opt in to the service, we will send you an SMS message to confirm your signup. This service is used to send you notifications about new investment property availability, deal alerts, scheduling information, customer support, and to send you promotional offers about our properties and services even if your mobile number is registered on any state or federal do-not-call list.
      </p>

      <p>
        Overall message frequency varies and depends on account activity. Promotional text messages will be limited to 4 or fewer text messages per month under normal operations. Deal alerts may be sent more frequently when active inventory warrants. Promotional text messages may include property availability notifications, pricing updates, and new investment opportunities.
      </p>

      <p>
        You can cancel and opt out of future text messages, subscriptions, and service at any time by texting one of the following words: &quot;STOP&quot;, &quot;END&quot;, &quot;CANCEL&quot;, &quot;QUIT&quot;, &quot;OPT OUT&quot;, or &quot;UNSUBSCRIBE&quot;. After you send the opt-out keyword, we will send you a reply message to confirm that you have been unsubscribed. After this, you will no longer receive messages from us. To rejoin, sign up again on this website or text &quot;JOIN&quot;, &quot;RESUME&quot;, &quot;START&quot;, or &quot;OPT IN&quot; to one of our numbers.
      </p>

      <p>
        If at any time you forget what keywords are supported, text us &quot;HELP&quot; or &quot;INFO&quot;. We will respond with instructions on how to use our service and how to unsubscribe.
      </p>

      <p>Neither Georgia Wholesale Homes LLC nor the mobile network operators are liable for delayed or undelivered messages.</p>

      <p>
        We have the right to modify any telephone or short code we use to operate the service at any time. If this happens, our company name will be clearly communicated in the text message and all the terms herein apply. You are opting in to receive text messages from Georgia Wholesale Homes LLC, not from a specific sender ID or phone number. Your right to manage the type and frequency of messages applies to all messages sent from our company regardless of the sender ID or phone number.
      </p>

      <p>Message and Data Rates May Apply for any messages sent to you from us and to us from you. If you have any questions about your text plan or data plan, please contact your wireless provider.</p>

      <p>
        Opt-in data and consent for text messaging will not be shared with any third parties except with technology partners for the purpose of enabling and operating our text messaging program (i.e., facilitating the sending and receiving of text messages).
      </p>

      <h2 className="text-2xl font-display text-navy mt-10 mb-3">Contact Us</h2>
      <p>
        For questions about our SMS program:{' '}
        <a href="mailto:josh@georgiawholesalehomes.com" className="text-navy underline">josh@georgiawholesalehomes.com</a>{' '}
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

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-page max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-navy mb-6">
              {TCPA_STRICT ? 'Terms of Use and Privacy Policy' : 'Terms of Service — SMS / Text Messaging'}
            </h1>
            {TCPA_STRICT && (
              <p className="text-sm text-ink/60 mb-4">For Telemarketing and Text Message Purposes</p>
            )}
            {!TCPA_STRICT && (
              <p className="text-sm text-ink/60 mb-8">Last updated: May 18, 2026</p>
            )}
            {TCPA_STRICT ? <StrictTerms /> : <DefaultTerms />}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
