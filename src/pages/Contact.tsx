import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowRight, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [dataConsent, setDataConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://client.paulwoodley.com/js/external-tracking.js";
    script.setAttribute(
      "data-tracking-id",
      "tk_329cd5260fad40de8037e39108281e00",
    );
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message || !dataConsent) {
      toast.error(
        "Please fill out all required fields and consent to data processing.",
      );
      return;
    }

    if (phone && !isValidPhoneNumber(phone)) {
      toast.error("Please enter a valid phone number with country code.");
      return;
    }

    setIsSubmitting(true);

    const tags = [
      "source: ai-studio-form",
      "source: contact-form",
      "trigger: general-inquiry",
      "general-inquiry",
      "pwc-data-consent-yes",
      "consent: data-processing-yes",
      "tcpa-method",
      "field:name-provided",
      "field:email-provided",
      "field:message-provided",
    ];

    if (subject) tags.push("field:subject-provided");
    if (phone) tags.push("field:phone-provided");

    if (emailConsent) {
      tags.push("pwc-email-consent-yes", "consent: email-marketing-yes");
    } else {
      tags.push(
        "pwc-email-consent-no",
        "consent: email-marketing-no",
        "do-not-email",
      );
    }

    if (smsConsent) {
      tags.push(
        "pwc-sms-consent-yes",
        "consent: sms-yes",
        "pwc-tcpa-sms-compliant",
      );
    } else {
      tags.push("pwc-sms-consent-no", "consent: sms-none", "do-not-sms");
    }

    const trackingPayload = {
      type: "external_form_submission",
      formId: "General Contact Form",
      formName: "General Contact Form",
      email: email,
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" "),
      phone: phone,
      tags,
      formData: {
        name,
        email,
        phone,
        subject,
        message,
        pwc_data_processing_consent: dataConsent ? "Yes" : "No",
        pwc_email_marketing_consent: emailConsent ? "Yes" : "No",
        pwc_sms_consent: smsConsent ? "Yes" : "No",
        pwc_consent_timestamp: new Date().toISOString(),
        pwc_consent_source_url: window.location.href,
        pwc_consent_form_name: "General Contact Form",
        pwc_lead_source: "AI Studio Form",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      trackingId: "tk_329cd5260fad40de8037e39108281e00",
      locationId: "hshXh4CwDZppYoxoTSVo",
    };

    try {
      // Send directly to the CRM inbound webhook
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/hshXh4CwDZppYoxoTSVo/webhook-trigger/d235ce10-8e2a-48a7-9892-ea8908906326",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(trackingPayload),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit form to CRM");
      }

      navigate("/contact-success");
    } catch (error) {
      console.error("Webhook submission failed:", error);
      toast.error(
        "There was a problem sending your message. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl opacity-70 animate-in fade-in duration-1000"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-accent/5 blur-3xl opacity-50 animate-in fade-in duration-1000 delay-300"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[50%] h-[40%] rounded-full bg-primary/5 blur-3xl opacity-60 animate-in fade-in duration-1000 delay-500"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center px-4 relative z-10">
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="mb-8 relative animate-in fade-in zoom-in-95 duration-700">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto relative z-10">
              <img
                src="https://assets.cdn.filesafe.space/hshXh4CwDZppYoxoTSVo/media/6a4e6735eada8c1f455bbf4e.jpeg"
                alt="Paul Woodley"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-2xl z-0"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
            Contact Me
          </h1>
          <p className="text-xl text-foreground/70 font-light leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
            Have a general question, media inquiry, or partnership idea? Drop me
            a line below and I will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Call-Out Banner */}
          <div className="mb-16 bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3"></div>
            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">
              Ready for immediate movement?
            </h3>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl relative z-10">
              Looking to fast-track your results right now? Skip the inbox
              waitlist and apply directly for my Free 5-Day 1:1 Personal
              Challenge.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide px-8 h-14 relative z-10 shadow-md"
            >
              <Link to="/challenge" className="flex items-center">
                Apply for the Free 5-Day Challenge{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl border border-border/50 shadow-sm relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700 fill-mode-both">
              <form
                id="General Contact Form"
                name="General Contact Form"
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-primary"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-muted/30 border-border/50 focus:border-primary h-12"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-primary"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-muted/30 border-border/50 focus:border-primary h-12"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-primary"
                      >
                        Phone Number *
                      </label>
                    </div>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={phone}
                      onChange={(val) => setPhone(val || "")}
                      required={true}
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-muted/30 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-primary"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="bg-muted/30 border-border/50 focus:border-primary h-12"
                      placeholder="How can I help?"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-primary"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="bg-muted/30 border-border/50 focus:border-primary resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Compliance & Consents */}
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="dataConsent"
                      checked={dataConsent}
                      onCheckedChange={(checked) =>
                        setDataConsent(checked === true)
                      }
                      required
                      className="mt-1"
                    />
                    <label
                      htmlFor="dataConsent"
                      className="text-sm text-foreground/80 leading-relaxed cursor-pointer"
                    >
                      I consent to allow PW Coaching LLC to store and process my
                      personal data in accordance with the{" "}
                      <Link
                        to="/privacy-policy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      . *
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="emailConsent"
                      checked={emailConsent}
                      onCheckedChange={(checked) =>
                        setEmailConsent(checked === true)
                      }
                      className="mt-1"
                    />
                    <label
                      htmlFor="emailConsent"
                      className="text-sm text-foreground/80 leading-relaxed cursor-pointer"
                    >
                      I consent to receive email marketing communications from
                      PW Coaching LLC. I understand I can unsubscribe at any
                      time. (Optional)
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="smsConsent"
                      checked={smsConsent}
                      onCheckedChange={(checked) =>
                        setSmsConsent(checked === true)
                      }
                      className="mt-1"
                    />
                    <label
                      htmlFor="smsConsent"
                      className="text-sm text-foreground/80 leading-relaxed cursor-pointer"
                    >
                      I agree to receive SMS text messages from PW Coaching LLC,
                      including coaching program information, appointment
                      scheduling, appointment confirmations, reminders, and
                      follow-up communication related to my inquiry. Consent is
                      not a condition of purchase. Msg frequency varies. Msg &
                      data rates may apply. Reply STOP to opt out, HELP for
                      help.{" "}
                      <Link
                        to="/privacy-policy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      |{" "}
                      <Link
                        to="/terms"
                        className="text-primary hover:underline"
                      >
                        Terms of Service
                      </Link>
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide h-14 text-lg mt-4"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-[11px] text-foreground/50 text-center mt-3">
                    “Tiny Challenge” is a registered trademark of Point One and
                    is used for identification purposes only.
                  </p>
                </div>
              </form>
            </div>

            {/* Optional Contact Info */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-[900ms] fill-mode-both">
              <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 h-full">
                <h3 className="text-lg font-bold text-primary mb-8 uppercase tracking-wider">
                  Contact Details
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-sm text-foreground/70 mt-1">
                        support@paulwoodley.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-primary">
                        Business Hours
                      </p>
                      <p className="text-sm text-foreground/70 mt-1 leading-relaxed">
                        Monday - Friday
                        <br />
                        9:00 AM - 5:00 PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-primary">Office</p>
                      <p className="text-sm text-foreground/70 mt-1 leading-relaxed">
                        Atlanta, GA
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Live Chat Notice */}
                  <div className="flex items-start space-x-4 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 shrink-0">
                      <img
                        src="https://vibe.filesafe.space/1783385542814852431/attachments/d5aeeb33-b9f3-4b9d-aff7-86b3414aac9a.png"
                        alt="Live Chat Bubble"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-primary">
                        Live Chat Available
                      </p>
                      <p className="text-sm text-foreground/70 mt-1 leading-relaxed">
                        Need immediate answers? Click the blue chat bubble at
                        the bottom right corner of your screen to speak with my
                        AI Assistant instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
