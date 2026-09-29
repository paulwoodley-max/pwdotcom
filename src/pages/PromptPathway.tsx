import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  FileText,
  Map,
  Briefcase,
  ChevronRight,
  User,
  Mail,
  HelpCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LOGO_URL, HERO_BG_URL, imgFallback } from "@/lib/images";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {}); // Fire-and-forget — don't block form UX
};

export default function PromptPathway() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [situation, setSituation] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [dataConsent, setDataConsent] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !phone || !situation || !dataConsent) return;

    setIsSubmitting(true);

    const tags = [
      "source: ai-studio-form",
      "source: prompt-pathway-form",
      "lead-magnet: prompt-pathway",
      "workflow: career-comeback-pathway",
      "trigger: prompt-pathway-form-submitted",
    ];

    if (dataConsent) {
      tags.push("pwc-data-consent-yes", "consent: data-processing-yes");
    } else {
      tags.push("pwc-data-consent-no", "consent: data-processing-no");
    }

    if (emailConsent) {
      tags.push("pwc-email-consent-yes", "consent: email-marketing-yes");
    } else {
      tags.push(
        "pwc-email-consent-no",
        "consent: email-marketing-no",
        "nurture: prompt-pathway-not-enrolled",
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
      formId: "Prompt Pathway Form",
      formName: "Prompt Pathway Form",
      email: email,
      firstName: firstName,
      phone: phone,
      tags,
      formData: {
        first_name: firstName,
        email: email,
        phone: phone,
        pwc_data_processing_consent: dataConsent ? "Yes" : "No",
        pwc_email_marketing_consent: emailConsent ? "Yes" : "No",
        pwc_sms_consent: smsConsent ? "Yes" : "No",
        pwc_consent_timestamp: new Date().toISOString(),
        pwc_consent_source_url: window.location.href,
        pwc_consent_form_name: "Prompt Pathway Form",
        pwc_lead_magnet_requested: "Prompt Pathway",
        pwc_lead_source: "AI Studio Form",
      },
      formLabels: {
        first_name: "First Name",
        email: "Email Address",
        phone: "Phone Number",
        pwc_data_processing_consent: "Data Processing Consent",
        pwc_email_marketing_consent: "Email Marketing Consent",
        pwc_sms_consent: "SMS Consent",
        pwc_consent_timestamp: "Consent Timestamp",
        pwc_consent_source_url: "Consent Source URL",
        pwc_consent_form_name: "Consent Form Name",
        pwc_lead_magnet_requested: "Lead Magnet Requested",
        pwc_lead_source: "Lead Source",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: "tk_329cd5260fad40de8037e39108281e00",
      locationId: "hshXh4CwDZppYoxoTSVo",
      sessionId: crypto.randomUUID(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
      },
    };

    postTrackingEvent(trackingPayload, {
      customFields: {
        qnVTK01Wr6hD8rK8vQKY: {
          value: situation,
          label: "Current Career Situation",
        },
      },
    });

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/hotel-career-comeback-prompt-pathway-success");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-bold text-xs mb-6 uppercase tracking-widest">
                FREE WORKBOOK
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.15] mb-6 tracking-tight uppercase">
                Your Hotel Career Is Not Over.{" "}
                <span className="text-accent">
                  It May Just Need a Clearer Next Move.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-4 leading-relaxed font-light">
                Get the free Hotel Career Comeback Prompt Pathway™ and use AI to
                clarify your next best move, reposition your hospitality
                experience, and build a practical path toward paid work.
              </p>
              <p className="text-lg font-bold text-primary mb-8 tracking-wide">
                Move Up. Change Lanes. Move Out. But Do Not Stay Stuck.
              </p>

              <div className="bg-muted/30 p-6 rounded-xl border border-border/50 mb-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                        title="Please enter a valid email address"
                        required
                        className="bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <PhoneInput
                      id="phone"
                      international
                      defaultCountry="US"
                      placeholder="(678) 501-7256"
                      value={phone}
                      onChange={(v) => setPhone(v || "")}
                      className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-primary/40 hover:shadow-sm [&_.PhoneInputCountryIcon]:h-4 [&_.PhoneInputCountryIcon]:w-6 [&_.PhoneInputCountryIcon--border]:border-none [&_.PhoneInputCountrySelect]:bg-white [&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:focus-visible:outline-none [&_.PhoneInputInput]:focus-visible:ring-0"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="situation">Current Career Situation</Label>
                    <Select
                      value={situation}
                      onValueChange={setSituation}
                      required
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select your situation..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">
                          Employed but feeling stuck
                        </SelectItem>
                        <SelectItem value="unemployed">
                          Unemployed and looking
                        </SelectItem>
                        <SelectItem value="pivot">
                          Considering a pivot
                        </SelectItem>
                        <SelectItem value="second-act">
                          Exploring a second act
                        </SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3 mt-4 bg-white/50 p-4 rounded-md border border-border/50">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="dataConsent"
                        checked={dataConsent}
                        onCheckedChange={(c) => setDataConsent(!!c)}
                        className="mt-1"
                        required
                      />
                      <label
                        htmlFor="dataConsent"
                        className="text-xs text-foreground/80 leading-relaxed cursor-pointer"
                      >
                        I consent to allow PW Coaching LLC to store and process
                        my personal data in accordance with the{" "}
                        <Link
                          to="/privacy-policy"
                          className="underline hover:text-primary"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="emailConsent"
                        checked={emailConsent}
                        onCheckedChange={(c) => setEmailConsent(!!c)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="emailConsent"
                        className="text-xs text-foreground/80 leading-relaxed cursor-pointer"
                      >
                        I consent to receive email marketing communications from
                        PW Coaching LLC, including follow-up tips, prompts,
                        resources, workbooks, guides, challenge invitations, and
                        related offers. I understand I can unsubscribe at any
                        time.
                      </label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="smsConsent"
                        checked={smsConsent}
                        onCheckedChange={(c) => setSmsConsent(!!c)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="smsConsent"
                        className="text-xs text-foreground/80 leading-relaxed cursor-pointer"
                      >
                        I agree to receive SMS text messages from PW Coaching
                        LLC, including coaching program information, appointment
                        scheduling, appointment confirmations, reminders, and
                        follow-up communication related to my inquiry. Consent
                        is not a condition of purchase. Msg frequency varies.
                        Msg & data rates may apply. Reply STOP to opt out, HELP
                        for help.{" "}
                        <Link
                          to="/privacy-policy"
                          className="underline hover:text-primary"
                        >
                          Privacy Policy
                        </Link>{" "}
                        |{" "}
                        <Link
                          to="/terms"
                          className="underline hover:text-primary"
                        >
                          Terms of Service
                        </Link>
                      </label>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide rounded-sm h-auto min-h-[56px] py-4 shadow-lg hover:shadow-xl transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Me the Free Prompt Pathway"}
                  </Button>
                  <div className="flex items-center justify-center gap-2 pt-3 text-xs text-foreground/60 font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>
                      100% Secure. We never spam or sell your information.
                    </span>
                  </div>
                </form>
              </div>
            </div>

            <div className="relative w-full max-w-md mx-auto lg:max-w-none mt-8 lg:mt-0 flex flex-col">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4"></div>
                <div className="relative z-10 bg-primary rounded-2xl shadow-2xl aspect-[4/5] overflow-hidden border border-primary/20 flex">
                  <video
                    src="https://storage.googleapis.com/msgsndr/hshXh4CwDZppYoxoTSVo/media/4efb4e50-93bf-418b-add5-724accfe68b7.mp4"
                    poster="https://storage.googleapis.com/msgsndr/hshXh4CwDZppYoxoTSVo/media/fb148d9d-594c-402d-b04b-688d50c9530c.png"
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-10 text-sm font-medium text-foreground/70 uppercase tracking-wider text-center lg:text-left pr-4">
                Built for hotel and hospitality professionals who know they have
                value, but need help deciding what comes next.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Problem / Empathy */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight uppercase">
              You Are Not Starting Over. You Are Repositioning.
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-6">
              You may be between jobs, burned out, underused, overlooked, or
              unsure whether your next move is still inside hospitality. Maybe
              you want to move up. Maybe you want to change lanes. Maybe you are
              wondering if it is time to build something of your own.
            </p>
            <p className="text-xl font-bold text-primary">
              The problem is not that your experience has no value.
              <br />
              The problem is that your next move has not been clarified yet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "I know I have experience, but I do not know how to position it.",
              "I am tired of saying I will take anything.",
              "I am not sure whether to stay in hotels or pivot.",
              "I need a practical plan, not just encouragement.",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm border border-border/50 flex items-start gap-4"
              >
                <div className="mt-1 bg-accent/20 rounded-full flex items-center justify-center w-8 h-8 shrink-0">
                  <User className="w-4 h-4 text-accent" />
                </div>
                <p className="text-lg text-foreground/80 font-medium italic">
                  "{text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — The Three Comeback Paths */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight uppercase">
              Find the Path That Fits Your Next Season.
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-muted/20 p-10 rounded-2xl border border-border/50 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-extrabold text-primary mb-2 uppercase">
                Move Up
              </h3>
              <p className="text-accent font-bold mb-6 text-sm uppercase tracking-wider">
                Grow inside hospitality.
              </p>
              <p className="text-foreground/70 leading-relaxed font-light flex-grow">
                For professionals who want better income, stronger leadership
                opportunities, a better title, renewed confidence, or a stronger
                hotel role.
              </p>
            </div>

            <div className="bg-primary p-10 rounded-2xl border border-primary/20 flex flex-col shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h3 className="text-2xl font-extrabold text-white mb-2 uppercase relative z-10">
                Change Lanes
              </h3>
              <p className="text-accent font-bold mb-6 text-sm uppercase tracking-wider relative z-10">
                Translate your hotel experience.
              </p>
              <p className="text-white/80 leading-relaxed font-light flex-grow relative z-10">
                For professionals exploring centralized sales, account
                management, customer success, hospitality tech, sales support,
                revenue support, vendor-side hospitality, or remote/hybrid work.
              </p>
            </div>

            <div className="bg-muted/20 p-10 rounded-2xl border border-border/50 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-extrabold text-primary mb-2 uppercase">
                Move Out
              </h3>
              <p className="text-accent font-bold mb-6 text-sm uppercase tracking-wider">
                Build a second act.
              </p>
              <p className="text-foreground/70 leading-relaxed font-light flex-grow">
                For professionals exploring consulting, coaching, training,
                fractional support, an owned service, or entrepreneurship.
              </p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xl font-medium text-primary">
              You do not have to decide everything today. You only need to get
              clear enough to take the next faithful step.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — What They Get */}
      <section className="py-24 bg-primary text-white border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
              What Is Inside the Prompt Pathway?
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 mb-8"></div>
            <p className="text-lg text-white/80 font-light max-w-3xl mx-auto">
              This is not just a resume prompt. It is a guided AI workbook that
              helps you clarify your direction before you rewrite your resume,
              LinkedIn profile, outreach messages, or job search plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Dream Outcome and Comeback Path Selector",
              "Professional Knowledge Base Builder",
              "Career Timeline Cleanup",
              "Behavioral Interview and Operating Style",
              "Best-Fit Role or Income Targets",
              "Positioning Statement Rewrite",
              "Resume and Career Asset Prompts",
              "LinkedIn Profile Optimization",
              "7-Day Career Comeback Action Plan",
              "Outreach Message Bank",
              "Interview Prep and Confidence Reset",
              "Invitation to the Free 5-Day Hotel Career Comeback Challenge™",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 bg-accent/20 rounded-full flex items-center justify-center w-6 h-6 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <span className="text-white/90 text-lg leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Why AI Helps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight uppercase">
            Use AI as a Career Repositioning Partner.
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-12">
            Most people use AI to make a prettier resume. This pathway helps you
            go deeper. It helps you extract proof from your real career, clean
            up your story, identify transferable strengths, choose better
            targets, and create messages that lead with value instead of
            desperation.
          </p>

          <div className="bg-accent/10 border-l-4 border-accent p-8 rounded-r-xl text-left">
            <p className="text-xl font-bold text-primary italic">
              "Core Truth: You are not starting over. You are deciding your next
              move."
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Who This Is For */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight uppercase">
              This Is For You If…
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
          </div>

          <div className="space-y-6">
            {[
              "You work or have worked in hotels or hospitality.",
              "You are unemployed, underemployed, burned out, or ready for a better role.",
              "You are tired of vague career advice.",
              "You want to stop sounding desperate and start leading with value.",
              "You are considering remote, hybrid, corporate, vendor-side, or hospitality-adjacent work.",
              "You may be ready to explore a second act based on the experience you already have.",
              "You want a simple, practical pathway you can use with ChatGPT or Claude.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-border/50"
              >
                <div className="mt-1 bg-accent/20 rounded-full flex items-center justify-center w-6 h-6 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground/80 text-lg leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — About Paul */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight uppercase">
            Built by a Hotelier Who Understands the Pressure.
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-10"></div>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto mb-12">
            <p>
              Paul Woodley has spent nearly 30 years in the hotel industry,
              leading sales teams, rebuilding pipelines, navigating distressed
              assets, and helping hotels recover revenue during difficult
              transitions. His deeper work is helping leaders tell the truth,
              recover clarity, and become better stewards of their gifts,
              experience, faith, and opportunities.
            </p>
            <p>
              Paul brings together hospitality leadership, biblical wisdom,
              coaching, sales strategy, and real-world business experience to
              help people move from confusion to clarity and from fear to
              faithful action.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Nearly 30 years in hospitality leadership",
              "Certified ProCoach",
              "Hotel sales and leadership coach",
              "Christian leadership coach",
              "Author and hospitality strategist",
            ].map((trust, i) => (
              <div
                key={i}
                className="bg-muted/50 px-4 py-2 rounded-full text-sm font-medium text-primary border border-border/50"
              >
                {trust}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Final CTA */}
      <section className="py-24 bg-primary text-white border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight uppercase">
            Your Next Move Does Not Have to Be Perfect. It Has to Be Clear
            Enough to Act On.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed font-light mb-12">
            Download the free Hotel Career Comeback Prompt Pathway™ and start
            clarifying whether your next best move is to move up, change lanes,
            or move out.
          </p>

          <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm text-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstNameFooter" className="text-white">
                    First Name
                  </Label>
                  <Input
                    id="firstNameFooter"
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="bg-white text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emailFooter" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="emailFooter"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address"
                    required
                    className="bg-white text-foreground"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneFooter" className="text-white">
                  Phone Number
                </Label>
                <PhoneInput
                  id="phoneFooter"
                  international
                  defaultCountry="US"
                  placeholder="(678) 501-7256"
                  value={phone}
                  onChange={(v) => setPhone(v || "")}
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground transition-all duration-200 hover:border-primary/40 hover:shadow-sm [&_.PhoneInputCountryIcon]:h-4 [&_.PhoneInputCountryIcon]:w-6 [&_.PhoneInputCountryIcon--border]:border-none [&_.PhoneInputCountrySelect]:bg-white [&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:focus-visible:outline-none [&_.PhoneInputInput]:focus-visible:ring-0"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="situationFooter" className="text-white">
                  Current Career Situation
                </Label>
                <Select value={situation} onValueChange={setSituation} required>
                  <SelectTrigger className="bg-white text-foreground">
                    <SelectValue placeholder="Select your situation..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employed">
                      Employed but feeling stuck
                    </SelectItem>
                    <SelectItem value="unemployed">
                      Unemployed and looking
                    </SelectItem>
                    <SelectItem value="pivot">Considering a pivot</SelectItem>
                    <SelectItem value="second-act">
                      Exploring a second act
                    </SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3 mt-4 bg-black/20 p-4 rounded-md border border-white/10">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="dataConsentFooter"
                    checked={dataConsent}
                    onCheckedChange={(c) => setDataConsent(!!c)}
                    className="mt-1 border-white/50 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
                  />
                  <label
                    htmlFor="dataConsentFooter"
                    className="text-xs text-white/80 leading-relaxed cursor-pointer"
                  >
                    I consent to allow PW Coaching LLC to store and process my
                    personal data in accordance with the{" "}
                    <Link
                      to="/privacy-policy"
                      className="underline hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="emailConsentFooter"
                    checked={emailConsent}
                    onCheckedChange={(c) => setEmailConsent(!!c)}
                    className="mt-1 border-white/50 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
                  />
                  <label
                    htmlFor="emailConsentFooter"
                    className="text-xs text-white/80 leading-relaxed cursor-pointer"
                  >
                    I consent to receive email marketing communications from PW
                    Coaching LLC. I understand I can unsubscribe at any time.
                  </label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="smsConsentFooter"
                    checked={smsConsent}
                    onCheckedChange={(c) => setSmsConsent(!!c)}
                    className="mt-1 border-white/50 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
                  />
                  <label
                    htmlFor="smsConsentFooter"
                    className="text-xs text-white/80 leading-relaxed cursor-pointer"
                  >
                    I agree to receive SMS text messages from PW Coaching LLC,
                    including coaching program information, appointment
                    scheduling, appointment confirmations, reminders, and
                    follow-up communication related to my inquiry. Consent is
                    not a condition of purchase. Msg frequency varies. Msg &
                    data rates may apply. Reply STOP to opt out, HELP for help.{" "}
                    <Link
                      to="/privacy-policy"
                      className="underline hover:text-accent"
                    >
                      Privacy Policy
                    </Link>{" "}
                    |{" "}
                    <Link to="/terms" className="underline hover:text-accent">
                      Terms of Service
                    </Link>
                  </label>
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide rounded-sm h-auto min-h-[56px] py-4 shadow-lg hover:shadow-xl transition-all mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get the Free Prompt Pathway"}
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-white/60 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>
                  100% Secure. We never spam or sell your information.
                </span>
              </div>
            </form>
          </div>

          <p className="text-xs text-white/50 mt-6 uppercase tracking-wider">
            Free download. Built for hospitality professionals ready for clarity
            and practical action.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
