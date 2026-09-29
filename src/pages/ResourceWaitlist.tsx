import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<string, unknown>;
    formLabels: Record<string, string>;
  },
  options: {
    customFields?: Record<string, { value?: unknown; label: string }>;
  } = {},
) => {
  const { customFields = {} } = options;
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
  }).catch(() => {});
};

const RESOURCE_TITLES: Record<string, string> = {
  "remote-hotel-sales-comeback-checklist":
    "Remote Hotel Sales Comeback Checklist™",
  "next-season-clarity-worksheet": "Next-Season Clarity Worksheet™",
  "hotel-resume-repositioning-prompt": "Hotel Resume Repositioning Prompt™",
  "dormant-gold-prompt-pack": "Dormant Gold Prompt Pack™",
  "no-lead-left-behind-checklist": "No-Lead-Left-Behind Checklist™",
  "17-second-cold-call-opener-prompt": "17-Second Cold Call Opener Prompt™",
  "5-levers-of-pipeline-recovery": "5 Levers of Pipeline Recovery™",
  "need-date-intelligence-method": "Need-Date Intelligence Method™ Guide",
  "christian-leaders-decision-filter": "Christian Leader’s Decision Filter™",
  "the-three-yous-worksheet": "The Three Yous Worksheet™",
  "architect-method-overview": "ARCHITECT Method Overview™",
  "approval-addiction-self-audit": "Approval Addiction Self-Audit™",
  "career-story-rewrite-prompt": "Career Story Rewrite Prompt™",
  "linkedin-outreach-conversation-starter-prompt":
    "LinkedIn Outreach Conversation Starter Prompt™",
  "hotel-sales-follow-up-prompt-pack": "Hotel Sales Follow-Up Prompt Pack™",
  "dormant-crm-reactivation-prompt": "Dormant CRM Reactivation Prompt™",
  "5-day-hotel-career-comeback-challenge":
    "5-Day Hotel Career Comeback Challenge™",
  "5-day-fom-level-up-challenge": "5-Day FOM Level-Up Challenge™",
  "5-day-dormant-gold-challenge": "5-Day Dormant Gold Challenge™",
  "5-day-purpose-driven-hotelier-clarity-challenge":
    "5-Day Purpose Driven Hotelier Clarity Challenge™",
};

const ALL_RESOURCES = [
  "Hotel Career Comeback Prompt Pathway",
  "Remote Hotel Sales Comeback Checklist",
  "Next-Season Clarity Worksheet",
  "Hotel Resume Repositioning Prompt",
  "Dormant Gold Prompt Pack",
  "No-Lead-Left-Behind Checklist",
  "17-Second Cold Call Opener Prompt",
  "5 Levers of Pipeline Recovery",
  "Need-Date Intelligence Method Guide",
  "Christian Leader’s Decision Filter",
  "The Three Yous Worksheet",
  "ARCHITECT Method Overview",
  "Approval Addiction Self-Audit",
  "Career Story Rewrite Prompt",
  "LinkedIn Outreach Conversation Starter Prompt",
  "Hotel Sales Follow-Up Prompt Pack",
  "Dormant CRM Reactivation Prompt",
  "5-Day Hotel Career Comeback Challenge",
  "5-Day FOM Level-Up Challenge",
  "5-Day Dormant Gold Challenge",
  "5-Day Purpose Driven Hotelier Clarity Challenge",
];

export default function ResourceWaitlist() {
  const { slug } = useParams();
  const { toast } = useToast();
  const resourceTitle =
    slug && RESOURCE_TITLES[slug] ? RESOURCE_TITLES[slug] : "This Resource";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [help, setHelp] = useState("");
  const [dataConsent, setDataConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [selectedResources, setSelectedResources] = useState<string[]>(
    slug && RESOURCE_TITLES[slug]
      ? [RESOURCE_TITLES[slug].replace("™", "")]
      : [],
  );

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

  const handleCheckboxChange = (resource: string, checked: boolean) => {
    if (checked) {
      setSelectedResources([...selectedResources, resource]);
    } else {
      setSelectedResources(selectedResources.filter((r) => r !== resource));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !description) return;

    const tags = [
      "tcpa-method",
      "resource_waitlist",
      "gdpr-compliant",
      "pwc-data-consent-yes",
    ];

    const careerComeback = [
      "Hotel Career Comeback Prompt Pathway",
      "Remote Hotel Sales Comeback Checklist",
      "Next-Season Clarity Worksheet",
      "Hotel Resume Repositioning Prompt",
    ];
    const hotelSales = [
      "Dormant Gold Prompt Pack",
      "No-Lead-Left-Behind Checklist",
      "17-Second Cold Call Opener Prompt",
      "5 Levers of Pipeline Recovery",
      "Need-Date Intelligence Method Guide",
    ];
    const christianLeadership = [
      "Christian Leader’s Decision Filter",
      "The Three Yous Worksheet",
      "ARCHITECT Method Overview",
      "Approval Addiction Self-Audit",
    ];
    const aiPrompts = [
      "Career Story Rewrite Prompt",
      "LinkedIn Outreach Conversation Starter Prompt",
      "Hotel Sales Follow-Up Prompt Pack",
      "Dormant CRM Reactivation Prompt",
    ];
    const challenges = [
      "5-Day Hotel Career Comeback Challenge",
      "5-Day FOM Level-Up Challenge",
      "5-Day Dormant Gold Challenge",
      "5-Day Purpose Driven Hotelier Clarity Challenge",
    ];

    if (selectedResources.some((r) => careerComeback.includes(r)))
      tags.push("list: career-comeback");
    if (selectedResources.some((r) => hotelSales.includes(r)))
      tags.push("list: hotel-sales");
    if (selectedResources.some((r) => christianLeadership.includes(r)))
      tags.push("list: christian-leadership");
    if (selectedResources.some((r) => aiPrompts.includes(r)))
      tags.push("list: ai-prompts");
    if (selectedResources.some((r) => challenges.includes(r)))
      tags.push("list: 5-day-challenges");

    if (emailConsent) tags.push("pwc-email-consent-yes");
    else tags.push("pwc-email-consent-no", "do-not-email");

    if (smsConsent)
      tags.push(
        "pwc-sms-consent-yes",
        "pwc-tcpa-sms-compliant",
        "consent: sms-yes",
      );
    else tags.push("pwc-sms-consent-no", "consent: sms-none", "do-not-sms");

    postTrackingEvent(
      {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "Paul Woodley Resource Waitlist Form",
        formName: "Paul Woodley Resource Waitlist Form",
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        tags: tags,
        formData: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone,
        },
        formLabels: {
          first_name: "First Name",
          last_name: "Last Name",
          email: "Email Address",
          phone: "Phone Number",
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
      },
      {
        customFields: {
          description: {
            value: description,
            label: "What best describes you?",
          },
          help: { value: help, label: "What do you need help with right now?" },
          requested_resources: {
            value: selectedResources.join(", "),
            label: "Requested Resources",
          },
        },
      },
    );

    setIsSubmitted(true);
    toast({
      title: "Added to Waitlist",
      description:
        "Thank you. You are on the waiting list. Paul will let you know when the resource is ready.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navigation />

      <section className="flex-grow py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tight mb-6">
              {resourceTitle} is Coming Soon
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              This resource is being prepared now. Join the waiting list and
              Paul will let you know when it is ready.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4 uppercase">
                  You&apos;re on the list
                </h2>
                <p className="text-lg text-foreground/80 mb-8">
                  Thank you. You are on the waiting list. Paul will let you know
                  when the resource is ready.
                </p>
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide"
                >
                  <Link to="/resources">Browse All Resources</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-primary uppercase mb-4">
                    Join the Resource Waiting List
                  </h2>
                  <p className="text-foreground/80">
                    This resource is designed to help you move from confusion to
                    clarity and from stuck to action. Join the waiting list
                    below and select the resource you want. You may also choose
                    more than one if several apply to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>What best describes you? *</Label>
                    <Select
                      required
                      value={description}
                      onValueChange={setDescription}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transition">
                          Hotel professional in career transition
                        </SelectItem>
                        <SelectItem value="sales-leader">
                          Current hotel sales leader
                        </SelectItem>
                        <SelectItem value="fom">
                          Front office manager
                        </SelectItem>
                        <SelectItem value="christian-leader">
                          Christian leader in business
                        </SelectItem>
                        <SelectItem value="owner">
                          Hotel owner / asset manager / management company
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="help">
                      What do you need help with right now?
                    </Label>
                    <Textarea
                      id="help"
                      placeholder="Briefly describe your current challenge..."
                      className="min-h-[100px]"
                      value={help}
                      onChange={(e) => setHelp(e.target.value)}
                    />
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <Label className="text-base">
                      Which resource are you requesting?
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-64 overflow-y-auto p-4 border border-border rounded-md bg-muted/10">
                      {ALL_RESOURCES.map((resource) => (
                        <div
                          key={resource}
                          className="flex items-start space-x-2"
                        >
                          <Checkbox
                            id={`res-${resource}`}
                            checked={selectedResources.includes(resource)}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(resource, checked as boolean)
                            }
                          />
                          <Label
                            htmlFor={`res-${resource}`}
                            className="text-sm font-normal leading-tight cursor-pointer"
                          >
                            {resource}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 mt-4 bg-muted/50 p-4 rounded-md border border-border/50">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="dataConsent"
                        checked={dataConsent}
                        onCheckedChange={(c) => setDataConsent(!!c)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="dataConsent"
                        className="text-xs text-foreground/80 leading-relaxed cursor-pointer"
                      >
                        I consent to allow PW Coaching LLC to store and process
                        my personal data in accordance with the{" "}
                        <a
                          href="/privacy-policy"
                          className="underline hover:text-primary"
                        >
                          Privacy Policy
                        </a>
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
                        PW Coaching LLC. I understand I can unsubscribe at any
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
                        <a
                          href="/privacy-policy"
                          className="underline hover:text-primary"
                        >
                          Privacy Policy
                        </a>{" "}
                        |{" "}
                        <a
                          href="/terms"
                          className="underline hover:text-primary"
                        >
                          Terms of Service
                        </a>
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide py-6 text-lg mt-6"
                  >
                    Join the Waiting List
                  </Button>
                </form>
              </>
            )}
          </div>

          {!isSubmitted && (
            <div className="mt-8 text-center">
              <Button
                variant="link"
                asChild
                className="text-primary font-bold uppercase tracking-wide"
              >
                <Link to="/resources">Browse All Resources</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
