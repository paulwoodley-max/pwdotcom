import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  ArrowRight,
  Mail,
  Clock,
  MessageSquare,
  LifeBuoy,
  FileText,
} from "lucide-react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { motion } from "framer-motion";

export default function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [dataConsent, setDataConsent] = useState(false);
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
      "source: support-page",
      "trigger: support-request",
      "pwc-data-consent-yes",
      "consent: data-processing-yes",
      "tcpa-method",
    ];

    if (smsConsent) {
      tags.push(
        "pwc-sms-consent-yes",
        "consent: sms-yes",
        "pwc-tcpa-sms-compliant",
      );
    }

    const payload = {
      type: "external_form_submission",
      formId: "Support Request Form",
      formName: "Support Request Form",
      email: email,
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" "),
      phone: phone,
      tags,
      formData: {
        name,
        email,
        phone,
        message,
        pwc_data_processing_consent: dataConsent ? "Yes" : "No",
        pwc_sms_consent: smsConsent ? "Yes" : "No",
        pwc_consent_timestamp: new Date().toISOString(),
        pwc_consent_source_url: window.location.href,
        pwc_consent_form_name: "Support Request Form",
        pwc_lead_source: "AI Studio Form",
      },
      locationId: "hshXh4CwDZppYoxoTSVo",
    };

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/hshXh4CwDZppYoxoTSVo/webhook-trigger/d235ce10-8e2a-48a7-9892-ea8908906326",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Support request sent! I'll get back to you shortly.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setDataConsent(false);
      setSmsConsent(false);
    } catch (error) {
      console.error("Support submission failed:", error);
      toast.error("Failed to send support request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navigation />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">
              Support Center
            </h1>
            <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto">
              How can I help you today? Whether you have a question about a
              program, need technical assistance, or want to discuss your
              progress, I'm here to support you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Support Options */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-muted/30 p-8 rounded-2xl border border-border/50 h-full"
              >
                <h3 className="text-lg font-bold text-primary mb-8 uppercase tracking-wider">
                  Support Channels
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">
                        Email Support
                      </p>
                      <p className="text-sm text-foreground/70 mt-1">
                        support@paulwoodley.com
                      </p>
                      <p className="text-xs text-foreground/50 mt-1">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">
                        Support Hours
                      </p>
                      <p className="text-sm text-foreground/70 mt-1">
                        Monday - Friday
                      </p>
                      <p className="text-sm text-foreground/70">
                        9:00 AM - 5:00 PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pt-6 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Live Chat</p>
                      <p className="text-sm text-foreground/70 mt-1">
                        Speak with my AI Assistant instantly using the blue
                        bubble.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-primary text-white p-8 rounded-2xl shadow-xl"
              >
                <LifeBuoy className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Quick Resources</h3>
                <p className="text-white/70 mb-6 text-sm">
                  Check out the resources page for guides, prompts, and
                  frameworks that might answer your question immediately.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white hover:text-primary font-bold uppercase tracking-wide"
                >
                  <Link to="/resources">Browse Resources</Link>
                </Button>
              </motion.div>
            </div>

            {/* Support Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl border border-border/50 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-primary mb-8">
                Send a Support Request
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="bg-muted/30 border-border/50 h-12"
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
                      className="bg-muted/30 border-border/50 h-12"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-primary"
                  >
                    Phone Number *
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={phone}
                    onChange={(val) => setPhone(val || "")}
                    required={true}
                    className="flex h-12 w-full rounded-md border border-input bg-muted/30 border-border/50 px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-primary"
                  >
                    How can I help? *
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="bg-muted/30 border-border/50 resize-none"
                    placeholder="Please describe your issue or question in detail..."
                  />
                </div>

                <div className="space-y-4 pt-4 border-t border-border/50">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="dataConsent"
                      checked={dataConsent}
                      onCheckedChange={(checked) =>
                        setDataConsent(checked === true)
                      }
                      required
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
                      id="smsConsent"
                      checked={smsConsent}
                      onCheckedChange={(checked) =>
                        setSmsConsent(checked === true)
                      }
                    />
                    <label
                      htmlFor="smsConsent"
                      className="text-sm text-foreground/80 leading-relaxed cursor-pointer"
                    >
                      I agree to receive SMS text messages from PW Coaching LLC
                      related to my support request. Msg frequency varies. Msg &
                      data rates may apply. Reply STOP to opt out.{" "}
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

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide h-14 text-lg"
                >
                  {isSubmitting
                    ? "Sending Request..."
                    : "Submit Support Request"}
                </Button>
                <p className="text-[11px] text-foreground/50 text-center mt-3">
                  “Tiny Challenge” is a registered trademark of Point One and is
                  used for identification purposes only.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
