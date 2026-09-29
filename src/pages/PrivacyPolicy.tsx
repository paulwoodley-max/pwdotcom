import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Paul Woodley";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navigation />

      <main className="flex-1 pt-8 md:pt-12 pb-24">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-primary mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-12">
              Last updated: July 2026
            </p>

            <p>
              <strong>PW Coaching LLC</strong> ("we," "us," or "our") owns and
              manages https://paulwoodley.com (the "Site"). This Privacy Policy
              describes how we collect, use, store, and protect your personal
              information when you visit our Site or interact with our services.
              By using this Site, you agree to the terms of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              1. Information We Collect
            </h2>
            <p>We collect the following categories of personal information:</p>
            <ul>
              <li>
                <strong>Contact Information:</strong> First name, last name,
                email address, and mobile phone number when submitted via
                website forms, chat widgets, or application pages.
              </li>
              <li>
                <strong>Form Responses:</strong> Answers to qualification
                questions, self-audit responses, challenge application
                responses, and other information voluntarily submitted.
              </li>
              <li>
                <strong>Payment Information:</strong> When you make a purchase,
                payment is processed by Stripe. We do not store your full credit
                card number, CVV, or banking credentials. We receive only a
                tokenized reference and basic transaction metadata (amount,
                date, last four digits of card). See Section 5 for details.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, pages
                visited, time spent on pages, and referral source collected
                automatically through cookies and tracking technologies.
              </li>
              <li>
                <strong>Consent Records:</strong> Records of what consent
                checkboxes were selected at the time of form submission,
                including timestamps and source URLs.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul>
              <li>
                Respond to inquiries, service requests, and form submissions.
              </li>
              <li>
                Deliver requested lead magnets, resources, and digital
                downloads.
              </li>
              <li>Schedule and confirm coaching appointments and calls.</li>
              <li>Send email marketing communications you have opted into.</li>
              <li>
                Send SMS messages you have explicitly consented to receive.
              </li>
              <li>Process payments and manage billing through Stripe.</li>
              <li>
                Improve our website, services, and marketing communications.
              </li>
              <li>Comply with applicable legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              3. Email Marketing & CAN-SPAM Compliance
            </h2>
            <p>
              If you opt in to receive email marketing, we may send you
              promotional emails, coaching updates, resources, and challenge
              invitations. In compliance with the CAN-SPAM Act:
            </p>
            <ul>
              <li>
                All emails will clearly identify PW Coaching LLC as the sender.
              </li>
              <li>
                We will include our physical mailing address in every marketing
                email.
              </li>
              <li>
                Every marketing email will include a clear and conspicuous link
                to unsubscribe.
              </li>
              <li>Opt-out requests will be honored within 10 business days.</li>
              <li>
                We will not send commercial email to anyone who has opted out.
              </li>
              <li>
                Transactional emails (such as resource delivery or appointment
                confirmations) may be sent regardless of email marketing opt-in
                status.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              4. SMS / Text Messaging Consent (TCPA & A2P 10DLC)
            </h2>
            <p>
              PW Coaching LLC uses SMS to communicate with leads and clients
              regarding coaching program information, the Free 5-Day 1:1
              Personal Challenge, appointment scheduling, appointment
              confirmations, reminders, and follow-up communication related to
              inquiries submitted via our website forms.
            </p>
            <p className="mt-4">
              End-users provide explicit written consent via an opt-in checkbox
              on the following forms:
            </p>
            <ul>
              <li>Contact Form — https://paulwoodley.com/contact</li>
              <li>
                Challenge Application Form — https://paulwoodley.com/challenge
              </li>
              <li>
                Career Pathway Form —
                https://paulwoodley.com/hotel-career-comeback-prompt-pathway
              </li>
            </ul>
            <p className="mt-4">
              The checkbox is unchecked by default and must be actively selected
              by the user. The consent language reads:
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/80 my-4">
              "I agree to receive SMS text messages from PW Coaching LLC,
              including coaching program information, appointment scheduling,
              appointment confirmations, reminders, and follow-up communication
              related to my inquiry. Consent is not a condition of purchase. Msg
              frequency varies. Msg & data rates may apply. Reply STOP to opt
              out, HELP for help."
            </blockquote>
            <ul>
              <li>
                Message frequency varies. Message and data rates may apply.
              </li>
              <li>
                Consent to receive SMS is not a condition of any purchase or
                service.
              </li>
              <li>
                <strong>Data Sharing:</strong> Mobile opt-in information and SMS
                consent data will not be shared with, sold to, or conveyed to
                third parties or affiliates for marketing or promotional
                purposes. This information will not be shared with any third
                parties.
              </li>
              <li>
                To opt out at any time, reply <strong>STOP</strong> to any
                message you receive from us. You will receive one final
                confirmation message.
              </li>
              <li>
                To receive help, reply <strong>HELP</strong> or contact us at
                paul@paulwoodley.com.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              5. Payment Processing (Stripe)
            </h2>
            <p>
              PW Coaching LLC uses <strong>Stripe</strong> to process all
              payments for coaching programs, courses, and services. Stripe is a
              PCI-DSS compliant payment processor.
            </p>
            <ul>
              <li>
                We do not store full credit card numbers, CVV codes, or bank
                account credentials on our servers.
              </li>
              <li>
                Payment data is encrypted and processed entirely within Stripe's
                secure infrastructure.
              </li>
              <li>
                PW Coaching LLC receives only a tokenized reference and limited
                transaction metadata (amount, date, last four digits of card,
                and payment status).
              </li>
              <li>
                For recurring or subscription billing, your payment method will
                be stored securely by Stripe and charged automatically on the
                agreed billing schedule.
              </li>
              <li>
                Stripe's handling of your payment information is governed by
                Stripe's{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://stripe.com/legal/ssa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Terms of Service
                </a>
                .
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              6. How We Share Your Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Trusted vendors who assist
                in operating our website and delivering our services (e.g., CRM
                platforms, email platforms, appointment scheduling systems, SMS
                delivery providers), under strict confidentiality agreements.
              </li>
              <li>
                <strong>Stripe:</strong> For payment processing as described in
                Section 5.
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required by law, court
                order, or governmental authority.
              </li>
            </ul>
            <p className="mt-4">
              <strong>
                SMS opt-in data and consent information will never be shared
                with third parties for marketing or promotional purposes.
              </strong>
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              7. Cookies & Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies, including the
              Meta (Facebook) Pixel, to track activity on our website and
              improve your experience. Tracking data may be used for advertising
              retargeting and analytics. You can instruct your browser to refuse
              all cookies or to indicate when a cookie is being sent. Note that
              disabling cookies may affect some site functionality.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              8. Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical
              safeguards to protect your personal information against
              unauthorized access, disclosure, alteration, or destruction.
              However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              9. Data Retention
            </h2>
            <p>
              We retain your personal information only as long as necessary to
              fulfill the purposes outlined in this policy, maintain business
              records, comply with legal obligations, or resolve disputes. When
              data is no longer needed, it is securely deleted or anonymized.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              10. Your Rights
            </h2>
            <p>You may request at any time:</p>
            <ul>
              <li>
                <strong>Access:</strong> A copy of the personal information we
                hold about you.
              </li>
              <li>
                <strong>Correction:</strong> Correction of inaccurate or
                incomplete data.
              </li>
              <li>
                <strong>Deletion:</strong> Deletion of your personal data,
                subject to legal retention requirements.
              </li>
              <li>
                <strong>Opt-Out:</strong> Withdrawal of consent for email
                marketing or SMS communications at any time.
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at
              paul@paulwoodley.com.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              11. Children's Privacy
            </h2>
            <p>
              This Site is not intended for individuals under the age of 18. We
              do not knowingly collect personal information from minors. If you
              believe a minor has provided us with personal information, please
              contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              12. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last
              updated" date at the top of this page reflects the most recent
              revision. Continued use of the Site after changes constitutes
              acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              13. Contact Us
            </h2>
            <p>
              <strong>PW Coaching LLC</strong>
              <br />
              113 S. Perry Street, Suite 206 #14985
              <br />
              Lawrenceville, GA 30046
              <br />
              Email: paul@paulwoodley.com
              <br />
              Phone: (678) 501-7256
              <br />
              Website: https://paulwoodley.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
