import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | Paul Woodley";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Review the Terms of Service for paulwoodley.com, including use of the website, free resources, coaching programs, payments, intellectual property, and dispute resolution.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navigation />

      <main className="flex-1 pt-8 md:pt-12 pb-24">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-primary mb-2">
              Terms of Service
            </h1>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-12">
              Last updated: July 2026
            </p>

            <p>
              These Terms of Service ("Terms") govern your access to and use of
              https://paulwoodley.com (the "Site"), owned and operated by{" "}
              <strong>PW Coaching LLC</strong> ("Company," "we," "us," or
              "our"), a Georgia limited liability company. By accessing or using
              this Site, you agree to be bound by these Terms in full.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              1. About the Company
            </h2>
            <p>
              PW Coaching LLC owns and manages paulwoodley.com. All coaching
              programs, resources, challenges, and services listed on this Site
              are offered by PW Coaching LLC. References to "Paul Woodley" refer
              to Paul Woodley acting in his capacity as founder and principal of
              PW Coaching LLC.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              2. Use of This Website
            </h2>
            <p>
              You agree to use this Site only for lawful purposes and in a
              manner that does not infringe the rights of others or restrict or
              inhibit their use and enjoyment of the Site. Prohibited conduct
              includes but is not limited to harassment, transmitting obscene or
              offensive content, or disrupting the normal flow of dialogue.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              3. Services
            </h2>
            <p>
              PW Coaching LLC provides coaching, speaking, consulting, and
              digital resource services. Specific services, pricing, and
              availability are described on this Site or provided upon inquiry.
              All services are subject to a separate coaching or service
              agreement where applicable.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              4. Payments & Billing (Stripe)
            </h2>
            <p>
              PW Coaching LLC uses <strong>Stripe</strong> as its third-party
              payment processor for all paid programs, coaching packages,
              courses, and services. By making a purchase, you agree to:
            </p>
            <ul>
              <li>
                Provide accurate, current, and complete payment information.
              </li>
              <li>
                Authorize PW Coaching LLC to charge your selected payment method
                for the agreed-upon amount.
              </li>
              <li>
                Stripe's own{" "}
                <a
                  href="https://stripe.com/legal/ssa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Privacy Policy
                </a>
                , which govern how Stripe collects and processes your payment
                data.
              </li>
            </ul>
            <p className="mt-4">
              <strong>Payment Data:</strong> PW Coaching LLC does not store your
              full credit card number, CVV, or banking credentials on our
              servers. All payment card data is encrypted and processed securely
              by Stripe in accordance with PCI-DSS standards. PW Coaching LLC
              receives only a tokenized reference and basic transaction metadata
              (amount, date, last four digits of the card).
            </p>
            <p className="mt-4">
              <strong>Subscriptions & Recurring Billing:</strong> If you enroll
              in a recurring coaching program or payment plan, your payment
              method will be charged automatically on the agreed billing cycle.
              You authorize us (via Stripe) to charge your payment method on a
              recurring basis until you cancel or the program concludes. You
              will be notified of any changes to billing amounts in advance.
            </p>
            <p className="mt-4">
              <strong>Failed Payments:</strong> If a scheduled payment fails,
              Stripe may retry the charge automatically. PW Coaching LLC
              reserves the right to suspend access to services until outstanding
              balances are resolved.
            </p>
            <p className="mt-4">
              <strong>Refund Policy:</strong> All sales are final unless
              otherwise stated in a written program agreement. If a refund is
              warranted, it will be processed through Stripe back to the
              original payment method. Refunds may take 5–10 business days to
              appear depending on your financial institution.
            </p>
            <p className="mt-4">
              <strong>Disputes & Chargebacks:</strong> Before initiating a
              chargeback with your card issuer, please contact us at
              paul@paulwoodley.com to resolve any billing concerns. Chargebacks
              initiated without prior contact may result in termination of
              services and may be disputed with supporting transaction records.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              5. SMS Text Messaging Terms (TCPA & A2P 10DLC)
            </h2>
            <p>
              If you opt in to receive SMS messages from PW Coaching LLC, the
              following terms apply:
            </p>
            <ul>
              <li>
                <strong>Program Description:</strong> PW Coaching LLC uses SMS
                to communicate about coaching program information, the Free
                5-Day 1:1 Personal Challenge, appointment scheduling,
                confirmations, reminders, and follow-up communication related to
                inquiries submitted via our website forms.
              </li>
              <li>
                <strong>Opt-In Method:</strong> Consent is obtained via an
                unchecked checkbox on our web forms. You must actively check the
                box to consent. Consent is never pre-selected.
              </li>
              <li>
                <strong>Consent Language:</strong> "I agree to receive SMS text
                messages from PW Coaching LLC, including coaching program
                information, appointment scheduling, appointment confirmations,
                reminders, and follow-up communication related to my inquiry.
                Consent is not a condition of purchase. Msg frequency varies.
                Msg & data rates may apply. Reply STOP to opt out, HELP for
                help."
              </li>
              <li>Message frequency varies based on your interactions.</li>
              <li>
                Message and data rates may apply based on your carrier plan.
              </li>
              <li>
                Consent is not a condition of purchasing any product or service.
              </li>
              <li>
                You may opt out at any time by replying <strong>STOP</strong>.
                You will receive one final confirmation message.
              </li>
              <li>
                For assistance, reply <strong>HELP</strong> or email
                paul@paulwoodley.com or call (678) 501-7256.
              </li>
              <li>
                <strong>Data Sharing:</strong> Mobile opt-in data and consent
                will not be shared with or sold to any third parties for
                marketing purposes.
              </li>
              <li>
                Supported carriers are not liable for delayed or undelivered
                messages.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              6. Email Marketing (CAN-SPAM)
            </h2>
            <p>
              If you opt in to receive email marketing communications, we may
              send you updates, promotional offers, and resources. In compliance
              with the CAN-SPAM Act:
            </p>
            <ul>
              <li>
                All marketing emails will clearly identify the sender as PW
                Coaching LLC.
              </li>
              <li>
                We will include our physical mailing address in every marketing
                email.
              </li>
              <li>
                Every marketing email will include a clear link to unsubscribe.
              </li>
              <li>
                Opt-out requests will be processed within 10 business days.
              </li>
              <li>
                We will not send commercial email messages to people who have
                opted out.
              </li>
            </ul>
            <p className="mt-4">
              You may unsubscribe at any time by clicking the "unsubscribe" link
              at the bottom of any marketing email.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              7. Age Restriction
            </h2>
            <p>
              You must be at least 18 years old to use this website, purchase
              services, opt into our SMS messaging program, or enroll in any
              coaching program offered by PW Coaching LLC.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              8. Privacy Policy
            </h2>
            <p>
              Your use of this website is also governed by our{" "}
              <Link
                to="/privacy-policy"
                className="text-accent hover:underline"
              >
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your
              information. Your mobile information and SMS opt-in data will not
              be shared with third parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              9. No Guarantee of Results
            </h2>
            <p>
              All coaching programs, challenges, resources, and services are
              provided for informational, educational, and developmental
              purposes only. PW Coaching LLC makes no guarantee of specific
              revenue, sales results, career outcomes, promotions, or
              professional advancement. Individual results will vary based on
              individual effort, circumstances, and other factors outside our
              control.
            </p>
            <p className="mt-4">
              Coaching is not a substitute for professional legal, financial,
              medical, clinical, or pastoral care advice.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              10. Intellectual Property & Trademarks
            </h2>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of PW Coaching LLC and is protected by
              applicable copyright and trademark laws. Unauthorized reproduction
              or use is prohibited.
            </p>
            <p className="mt-4">
              The following are trademarks or service marks of PW Coaching LLC
              and/or Paul Woodley:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 mb-6">
              <li>
                The Architect Method™ (also referenced as THE A.R.C.H.I.T.E.C.T.
                METHOD™)
              </li>
              <li>The D.O.R.M.A. Method™</li>
              <li>The P.R.O.O.F. Method™</li>
              <li>The T.R.U.T.H. Movement Method™</li>
              <li>Need-Date Intelligence Method™</li>
              <li>Transparent Leader™</li>
              <li>Transparent Leader Breakthrough™</li>
              <li>5-Day Transparent Leader Challenge™</li>
              <li>5-Day Hotel Career Comeback Challenge™</li>
              <li>5-Day FOM Level-Up Challenge™</li>
              <li>5-Day Dormant Gold Challenge™</li>
              <li>5-Day Purpose Driven Hotelier Clarity Challenge™</li>
              <li>Free 5-Day 1:1 Hotel Expert Second Act Challenge™</li>
              <li>5-Day Biblical Clarity Challenge™</li>
              <li>
                5-Day Tiny Challenge (used with permission; "Tiny Challenge" is
                a registered trademark of Point One)
              </li>
              <li>
                Hotel Career Comeback Prompt Pathway™ (and Prompt Pathway™)
              </li>
              <li>Transparent Leader Self-Audit™</li>
              <li>Approval Addiction Self-Audit™</li>
              <li>Remote Hotel Sales Comeback Checklist™</li>
              <li>Next-Season Clarity Worksheet™</li>
              <li>Hotel Resume Repositioning Prompt™</li>
              <li>Dormant Gold Prompt Pack™</li>
              <li>No-Lead-Left-Behind Checklist™</li>
              <li>17-Second Cold Call Opener Prompt™</li>
              <li>5 Levers of Pipeline Recovery™</li>
              <li>Christian Leader's Decision Filter™</li>
              <li>The Three Yous Worksheet™</li>
              <li>ARCHITECT Method Overview™</li>
              <li>Career Story Rewrite Prompt™</li>
              <li>LinkedIn Outreach Conversation Starter Prompt™</li>
              <li>Hotel Sales Follow-Up Prompt Pack™</li>
              <li>Dormant CRM Reactivation Prompt™</li>
              <li>Transparent Leader Operating System™</li>
              <li>Transparent Leader Accelerator™</li>
              <li>Transparent Sales Leader Course™</li>
              <li>Hotel Sales Performance Coaching™</li>
              <li>Transparent Leadership Coach Certification™</li>
              <li>Hotel Response</li>
              <li>PW Coaching LLC</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">
              "Tiny Challenge" is a registered trademark of Point One and is
              used for identification purposes only.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              11. Third-Party Services
            </h2>
            <p>
              This Site may integrate with or link to third-party services,
              including but not limited to:
            </p>
            <ul>
              <li>
                <strong>Stripe</strong> — Payment processing. Governed by
                Stripe's{" "}
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
              <li>
                <strong>Meta (Facebook) Pixel</strong> — Advertising and
                analytics tracking.
              </li>
              <li>
                <strong>Lead Connector / CRM Platform</strong> — Contact
                management, SMS delivery, and email automation.
              </li>
            </ul>
            <p className="mt-4">
              PW Coaching LLC is not responsible for the privacy practices or
              content of third-party services. We encourage you to review their
              respective policies.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              12. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, PW Coaching LLC shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of this website, our
              services, or any third-party integrations. Our total liability in
              connection with any claim shall not exceed the amount paid by you
              to PW Coaching LLC in the six months preceding the claim.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              13. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless PW Coaching LLC, its
              members, employees, agents, and contractors from any claims,
              losses, damages, liabilities, and expenses (including legal fees)
              arising from your use of the Site, violation of these Terms, or
              infringement of any rights of a third party.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              14. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by the laws of the State of Georgia,
              without regard to its conflict of law provisions. Any dispute
              arising under these Terms shall first be submitted to good-faith
              negotiation. If unresolved, disputes shall be submitted to binding
              arbitration in Gwinnett County, Georgia, under the rules of the
              American Arbitration Association. You waive any right to a jury
              trial or class action proceeding.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              15. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update these Terms at any time. The "Last
              updated" date at the top of this page will reflect when changes
              were made. Continued use of this website after changes constitutes
              acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold text-primary uppercase mt-12 mb-4">
              16. Contact
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
