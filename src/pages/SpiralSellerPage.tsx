import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BookOpen,
  Check,
  Phone,
  Users,
  TrendingUp,
  MessageSquare,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DESK_URL, imgFallback } from "@/lib/images";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/hshXh4CwDZppYoxoTSVo/webhook-trigger/d235ce10-8e2a-48a7-9892-ea8908906326";

const COMPANION_BOOK_URL = "/book";

const GUIDE_COVER_URL =
  "https://assets.cdn.filesafe.space/hshXh4CwDZppYoxoTSVo/media/6a7dc7d8cf50f900f2ba1a36.png";

const SEGMENTS = [
  {
    title: "The Corporate Buyer",
    desc: "Whether you sell corporate group or managed transient, the corporate planner is usually completing a task inside someone else's process. They need a defensible number and a clean comparison before they need a relationship. But within that, some run Orange — outcomes and ROI — and some run Blue — process, documentation, and protecting themselves from looking careless.",
    colour: "Orange & Blue",
  },
  {
    title: "The Association Buyer",
    desc: "If you carry the association vertical, you know the long booking windows and the board you'll never meet. But the buyer in front of you may run Blue for the approval process, Green for member experience, or Purple for loyalty to a venue that's worked for years. Same segment. Different driver.",
    colour: "Blue, Green & Purple",
  },
  {
    title: "The SMERF Buyer",
    desc: "Catering and SMERF sellers know these are volunteers, not procurement professionals. But a bride's mother running Purple needs to feel cared for, while a committee treasurer running Blue needs a clear, documented contract because they're accountable for someone else's money.",
    colour: "Purple & Green",
  },
  {
    title: "The Small Meeting Buyer",
    desc: "Twenty-five attendees or fewer, booked directly by a local business with no procurement department. The highest-volume, most overlooked segment on your calendar — and the one most sellers still pitch like everything else.",
    colour: "All colours, compressed",
  },
];

const CHAPTERS = [
  { num: 1, title: "Why One Script Loses Two Out of Three Deals" },
  { num: 2, title: "Reading the Buyer Before You Return the Call" },
  { num: 3, title: "The Corporate Planner's World" },
  { num: 4, title: "The Corporate RFP, Discovery, and Close" },
  { num: 5, title: "The Association Planner's World" },
  { num: 6, title: "Winning the Board You Will Never Meet" },
  { num: 7, title: "The SMERF World: Price, Flexibility, and Community" },
  { num: 8, title: "The Bride, the Committee, and the Reunion Chair" },
  {
    num: 9,
    title: "The Small Meeting — Your Highest-Volume, Most Overlooked Segment",
  },
  { num: 10, title: "Staging the Site Tour by Segment" },
  { num: 11, title: "One Proposal, Three Readers" },
  { num: 12, title: "Closing Techniques by Segment and by Colour" },
  { num: 13, title: "A Bridge Back to The Spiral Sales Office" },
];

export default function SpiralSellerPage() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    emailConsent: false,
    smsConsent: false,
    dataConsent: false,
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.firstName.trim())
      e.firstName = "Please enter your first name.";
    if (!formData.email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Please enter a valid email address.";
    if (!formData.dataConsent)
      e.dataConsent = "You must consent to data processing to continue.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const tags = [
      "source: ai-studio-form",
      "source: spiral-seller-squeeze",
      "lead-magnet: spiral-seller-handout",
      "workflow: spiral-seller-delivery",
      "trigger: spiral-seller-form-submitted",
      "funnel: spiral-seller-squeeze",
      formData.emailConsent ? "pwc-email-consent-yes" : "pwc-email-consent-no",
      formData.smsConsent
        ? "pwc-sms-marketing-consent-yes"
        : "pwc-sms-marketing-consent-no",
      formData.dataConsent ? "pwc-data-consent-yes" : "pwc-data-consent-no",
      formData.smsConsent ? "pwc-tcpa-sms-compliant" : "consent: sms-none",
    ];

    const payload = {
      type: "external_form_submission",
      formId: "Spiral Seller Squeeze Form",
      formName: "Spiral Seller Squeeze Form",
      firstName: formData.firstName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      locationId: "hshXh4CwDZppYoxoTSVo",
      tags,
      customFields: {
        pwc_lead_magnet_requested: "The Spiral Seller Handout",
        pwc_lead_source: "AI Studio Form",
        pwc_consent_form_name: "Spiral Seller Squeeze Form",
        pwc_email_marketing_consent: formData.emailConsent ? "yes" : "no",
        pwc_sms_marketing_consent: formData.smsConsent ? "yes" : "no",
        pwc_data_processing_consent: formData.dataConsent ? "yes" : "no",
        pwc_consent_timestamp: new Date().toISOString(),
      },
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // fire-and-forget; still show success
    }

    setLoading(false);
    // Redirect to the dedicated download/delivery page
    window.location.href = "/spiral-seller-success";
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text column */}
            <div>
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-semibold text-sm tracking-widest uppercase">
                Companion Handout to The Spiral Sales Office
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight"
              >
                The Spiral Seller
              </motion.h1>
              <p className="text-xl md:text-2xl text-white/80 mb-4 leading-relaxed font-light">
                Reading the Room Before You Send the Proposal — How to Read the
                Buyer Behind the RFP, Whatever Segment You're Deployed Against.
              </p>
              <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
                In a full-service hotel, sales managers are deployed by segment
                — corporate, association, catering, SMERF. But within your
                vertical, every planner who calls is still a different person
                making a different kind of decision. Two corporate RFPs can look
                identical on paper and be driven by completely different buyers.
                This handout helps you read the person behind the inquiry —
                before you ever quote a rate.
              </p>
            </div>
            {/* Cover image column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <img
                src={GUIDE_COVER_URL}
                alt="The Spiral Seller handout cover by Paul Woodley"
                className="w-full max-w-xs md:max-w-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight leading-tight">
            Same Segment. Different Buyer.
          </h2>
          <div className="w-16 h-1 bg-accent mb-8" />
          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed font-light">
            <p>
              In a full-service hotel, you're deployed against a segment —
              corporate, association, catering, SMERF. You know your vertical.
              You know the booking windows, the pace, the RFP cadence, the
              report names. But within that segment, every planner is still a
              different person making a different kind of decision.
            </p>
            <p>
              Two corporate RFPs can land in your inbox on the same Tuesday. One
              is from a procurement coordinator racing a Friday deadline who
              needs a defensible number before she needs anything else. The
              other is from a director who wants to understand whether you
              understand how their process works before she'll read a single
              line item.
            </p>
            <p className="font-semibold text-primary text-xl border-l-4 border-accent pl-6 py-4 my-6 bg-white shadow-sm rounded-r-xl italic">
              The segment tells you where to start listening. The buyer tells
              you how to sell.
            </p>
            <p>
              Pitch every planner in your vertical the same way — using your
              default style, your standard opening, your go-to proposal
              structure — and you'll win the ones who happened to match your
              style and lose the rest without ever understanding why. The loss
              never shows up honestly on a lost-business report. It just looks
              like rate.
            </p>
          </div>
        </div>
      </section>

      {/* THE BUYER TYPES */}
      <section className="py-24 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight text-center">
            The Buyers You'll Meet Inside Your Segment
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed font-light text-center max-w-2xl mx-auto mb-16">
            You already know your segment. This handout helps you read the
            specific buyer behind the inquiry — the colour they're running, what
            they fear, what they need to hear first — so your discovery, site
            tour, and proposal match the person in front of you, not just the
            market code on the RFP.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {SEGMENTS.map((seg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-muted/30 p-8 rounded-2xl shadow-sm border border-border/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                    {seg.colour}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {seg.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{seg.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight text-center">
            What You'll Learn
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12" />
          <div className="space-y-4">
            {[
              "How to read a planner's default colour in the first ninety seconds of a call — before you've said a single word back",
              "Why two RFPs from the same segment can require completely different approaches",
              "How to arm an association planner with facts she can repeat to a board she'll never let you meet",
              "Why a bride's mother needs to feel cared for before a single rate is mentioned",
              "The small meeting segment — 80% of your calendar, a fraction of your attention",
              "One proposal structured to survive a boardroom, a procurement office, and a kitchen table in the same week",
              "Closing techniques recolored by segment and by individual buyer type",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="py-24 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight text-center">
            What's Inside
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-16" />
          <div className="space-y-3">
            {CHAPTERS.map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-4 py-3 border-b border-border/30"
              >
                <span className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {ch.num}
                </span>
                <span className="text-lg text-foreground/80 font-medium">
                  {ch.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SQUEEZE FORM */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white text-foreground rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-semibold text-sm tracking-widest uppercase">
                <BookOpen className="w-4 h-4" />
                Free With Mailing List
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 tracking-tight">
                Get The Spiral Seller — Free
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Enter your details below and I'll send you the companion handout
                to The Spiral Sales Office — the field guide for the seller who
                actually picks up the phone.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted/60 border border-border/50 text-sm text-foreground/60">
                <span>Available on Amazon Kindle for $6.99</span>
                <span className="text-accent font-semibold">·</span>
                <a
                  href="https://www.amazon.com/dp/B0HDYG7F6Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline font-medium"
                >
                  Buy on Amazon
                </a>
                <span className="text-foreground/40">or get it free below</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label
                  htmlFor="firstName"
                  className="text-sm font-semibold text-primary mb-2 block"
                >
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="rounded-sm"
                  placeholder="Your first name"
                />
                {errors.firstName && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-primary mb-2 block"
                >
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="rounded-sm"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-semibold text-primary mb-2 block"
                >
                  Phone Number{" "}
                  <span className="text-foreground/40 font-normal">
                    (optional)
                  </span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="rounded-sm"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Consent checkboxes */}
              <div className="space-y-4 pt-4 border-t border-border/50">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="dataConsent"
                    checked={formData.dataConsent}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        dataConsent: checked === true,
                      })
                    }
                    className="mt-1"
                  />
                  <Label
                    htmlFor="dataConsent"
                    className="text-sm text-foreground/70 leading-relaxed cursor-pointer"
                  >
                    I consent to allow PW Coaching LLC to store and process my
                    personal data in accordance with the{" "}
                    <a
                      href="https://paulwoodley.com/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline"
                    >
                      Privacy Policy
                    </a>
                    . <span className="text-destructive">*</span>
                  </Label>
                </div>
                {errors.dataConsent && (
                  <p className="text-destructive text-sm -mt-2">
                    {errors.dataConsent}
                  </p>
                )}

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="emailConsent"
                    checked={formData.emailConsent}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        emailConsent: checked === true,
                      })
                    }
                    className="mt-1"
                  />
                  <Label
                    htmlFor="emailConsent"
                    className="text-sm text-foreground/70 leading-relaxed cursor-pointer"
                  >
                    I consent to receive email marketing communications from PW
                    Coaching LLC, including follow-up tips, prompts, resources,
                    and related offers. I understand I can unsubscribe at any
                    time.
                  </Label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="smsConsent"
                    checked={formData.smsConsent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, smsConsent: checked === true })
                    }
                    className="mt-1"
                  />
                  <div>
                    <Label
                      htmlFor="smsConsent"
                      className="text-sm text-foreground/70 leading-relaxed cursor-pointer"
                    >
                      I agree to receive SMS text messages from PW Coaching LLC,
                      including coaching program information, appointment
                      scheduling, appointment confirmations, reminders, and
                      follow-up communication related to my inquiry. Consent is
                      not a condition of purchase. Msg frequency varies. Msg &
                      data rates may apply. Reply STOP to opt out, HELP for
                      help.
                    </Label>
                    <p className="text-xs text-foreground/50 mt-1">
                      <a
                        href="https://paulwoodley.com/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Privacy Policy
                      </a>
                      {" · "}
                      <a
                        href="https://paulwoodley.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Terms of Service
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide rounded-sm h-auto min-h-[56px] py-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg"
              >
                {loading ? "Sending..." : "Send Me The Handout"}
              </Button>

              <p className="text-xs text-foreground/40 text-center">
                "Tiny Challenge" is a registered trademark of Point One and is
                used for identification purposes only.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* COMPANION BOOK CTA */}
      <section className="py-20 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight">
            The Full Book
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            The Spiral Seller is the companion to The Spiral Sales Office — the
            complete playbook for leading, selling, marketing, and measuring a
            full-service hotel group sales office.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide rounded-sm px-10 shadow-xl"
          >
            <Link to={COMPANION_BOOK_URL}>
              <ArrowRight className="mr-2 h-5 w-5" />
              Explore The Spiral Sales Office
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
