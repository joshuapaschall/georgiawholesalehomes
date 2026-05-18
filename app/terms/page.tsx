import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 lg:py-24">
          <div className="container-page max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-navy mb-6">Terms of Service — SMS / Text Messaging</h1>
            <p className="text-sm text-ink/60 mb-8">Last updated: May 18, 2026</p>

            <div className="prose prose-lg text-ink/80 space-y-5 leading-relaxed text-base">
              <p>This document covers our SMS/text messaging program. Use of this program is also subject to our General Terms of Service and Privacy Policy.</p>

              <p>For telemarketing and text message purposes: Where you have provided &quot;prior express written consent&quot; within the meaning of the Telephone Consumer Protection Act (&quot;TCPA&quot;), you consent to receive telephone calls, including artificial voice calls, pre-recorded messages and/or calls delivered via automated technology, and TEXT/SMS messages from Georgia Wholesale Homes LLC. Telephone number(s) that you provide are not required to obtain access to our services, request information, or purchase property from us.</p>

              <p>When you opt in to the service, we will send you an SMS message to confirm your signup. This service is used to send you notifications about new investment property availability, deal alerts, scheduling information, customer support, and to send you promotional offers about our properties and services even if your mobile number is registered on any state or federal do-not-call list.</p>

              <p>Overall message frequency varies and depends on account activity. Promotional text messages will be limited to 4 or fewer text messages per month under normal operations. Deal alerts may be sent more frequently when active inventory warrants. Promotional text messages may include property availability notifications, pricing updates, and new investment opportunities.</p>

              <p>You can cancel and opt out of future text messages, subscriptions, and service at any time by texting one of the following words: &quot;STOP&quot;, &quot;END&quot;, &quot;CANCEL&quot;, &quot;QUIT&quot;, &quot;OPT OUT&quot;, or &quot;UNSUBSCRIBE&quot;. After you send the opt-out keyword, we will send you a reply message to confirm that you have been unsubscribed. After this, you will no longer receive messages from us. To rejoin, sign up again on this website or text &quot;JOIN&quot;, &quot;RESUME&quot;, &quot;START&quot;, or &quot;OPT IN&quot; to one of our numbers.</p>

              <p>If at any time you forget what keywords are supported, text us &quot;HELP&quot; or &quot;INFO&quot;. We will respond with instructions on how to use our service and how to unsubscribe.</p>

              <p>Neither Georgia Wholesale Homes LLC nor the mobile network operators are liable for delayed or undelivered messages.</p>

              <p>We have the right to modify any telephone or short code we use to operate the service at any time. If this happens, our company name will be clearly communicated in the text message and all the terms herein apply. You are opting in to receive text messages from Georgia Wholesale Homes LLC, not from a specific sender ID or phone number. Your right to manage the type and frequency of messages applies to all messages sent from our company regardless of the sender ID or phone number.</p>

              <p>Message and Data Rates May Apply for any messages sent to you from us and to us from you. If you have any questions about your text plan or data plan, please contact your wireless provider.</p>

              <p>Opt-in data and consent for text messaging will not be shared with any third parties except with technology partners for the purpose of enabling and operating our text messaging program (i.e., facilitating the sending and receiving of text messages).</p>

              <p><strong>Contact us</strong> — For questions about our SMS program: <a href="mailto:josh@georgiawholesalehomes.com" className="text-navy underline">josh@georgiawholesalehomes.com</a> or (770) 520-7674.</p>

              <p>Georgia Wholesale Homes LLC<br />3904 N Druid Hills Road, Suite 244<br />Decatur, GA 30033</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
