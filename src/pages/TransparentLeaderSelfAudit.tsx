import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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

const QUESTIONS = [
  {
    id: 1,
    category: "Sales Pressure",
    question:
      "When it comes to my pipeline and sales goals, I feel like I am...",
    options: [
      { value: "A", label: "Driving it proactively and confidently." },
      { value: "B", label: "Reacting to pressure and hoping things improve." },
      { value: "C", label: "Completely overwhelmed and falling behind." },
    ],
  },
  {
    id: 2,
    category: "Leadership & Ownership",
    question:
      "When sales are down or things go wrong, my default response is to...",
    options: [
      { value: "A", label: "Take full ownership and act immediately." },
      { value: "B", label: "Look for external reasons or blame the market." },
      { value: "C", label: "Work harder doing the exact same things." },
    ],
  },
  {
    id: 3,
    category: "Action & Confidence",
    question:
      "If I had to create measurable sales movement in the next 72 hours, I...",
    options: [
      { value: "A", label: "Know exactly what to do and would execute." },
      { value: "B", label: "Have some ideas but lack focus and energy." },
      { value: "C", label: "Wouldn't know where to start right now." },
    ],
  },
  {
    id: 4,
    category: "Time & Priorities",
    question: "My daily calendar is primarily controlled by...",
    options: [
      { value: "A", label: "My strategic priorities and high-value actions." },
      { value: "B", label: "The loudest emergencies and emails." },
      { value: "C", label: "Other people's demands and endless meetings." },
    ],
  },
  {
    id: 5,
    category: "Next-Season Clarity",
    question: "When I think about the next season of my career, I feel...",
    options: [
      { value: "A", label: "Clear, prepared, and excited for what's next." },
      { value: "B", label: "Vaguely hopeful but without a real plan." },
      { value: "C", label: "Anxious, stuck, and unsure of my value." },
    ],
  },
];

export default function TransparentLeaderSelfAudit() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dataConsent, setDataConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

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

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [QUESTIONS[currentStep].id]: value });
  };

  const nextStep = () => {
    if (currentStep < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const tags = [
      "tcpa-method",
      "transparent-leader-audit",
      "gdpr-compliant",
      "pwc-data-consent-yes",
    ];

    if (emailConsent) tags.push("pwc-email-consent-yes");
    else tags.push("pwc-email-consent-no", "do-not-email");

    if (smsConsent)
      tags.push(
        "pwc-sms-consent-yes",
        "pwc-tcpa-sms-compliant",
        "consent: sms-yes",
      );
    else tags.push("pwc-sms-consent-no", "consent: sms-none", "do-not-sms");

    const customFields: Record<string, { value: string; label: string }> = {};
    Object.entries(answers).forEach(([qId, answer]) => {
      const q = QUESTIONS.find((q) => q.id === parseInt(qId));
      if (q) {
        customFields[`q_${qId}`] = { value: answer, label: q.question };
      }
    });

    postTrackingEvent(
      {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "Transparent Leader Self-Audit",
        formName: "Transparent Leader Self-Audit",
        email: email,
        firstName: firstName,
        lastName: "", // Form only has firstName field
        phone: phone,
        tags: tags,
        formData: {
          first_name: firstName,
          email: email,
          phone: phone,
        },
        formLabels: {
          first_name: "First Name",
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
        customFields,
      },
    );

    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  const progressPercentage = (currentStep / (QUESTIONS.length + 1)) * 100;

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col font-sans text-foreground">
      <Navigation />

      <section className="py-12 md:py-20 flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
              Transparent Leader Self-Audit™
            </h1>
            <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
              Identify where you may be living at effect in sales, leadership,
              confidence, time, and next-season clarity.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden relative">
            {/* Progress Bar */}
            {!isSuccess && (
              <div className="h-2 w-full bg-muted">
                <div
                  className="h-full bg-accent transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            )}

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      Your Audit is Complete
                    </h2>
                    <p className="text-lg text-foreground/80 mb-8 max-w-md mx-auto">
                      We've received your responses. Check your inbox shortly
                      for your customized results and next steps.
                    </p>
                    <div className="p-6 bg-muted/30 rounded-xl mb-8 border border-border/50">
                      <h3 className="font-bold text-primary mb-2">
                        Ready to create movement now?
                      </h3>
                      <p className="text-sm text-foreground/70 mb-4">
                        You don't have to wait for the email. Book your
                        Breakthrough Call to discuss your results directly with
                        Paul.
                      </p>
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide"
                      >
                        <Link to="/challenge">Book Your Breakthrough Call</Link>
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      asChild
                      className="font-bold uppercase tracking-wide"
                    >
                      <Link to="/">Return Home</Link>
                    </Button>
                  </motion.div>
                ) : currentStep < QUESTIONS.length ? (
                  <motion.div
                    key={`question-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-sm font-bold text-accent uppercase tracking-widest mb-2">
                      Question {currentStep + 1} of {QUESTIONS.length}
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-8">
                      {QUESTIONS[currentStep].question}
                    </h2>

                    <RadioGroup
                      value={answers[QUESTIONS[currentStep].id] || ""}
                      onValueChange={handleOptionSelect}
                      className="space-y-4"
                    >
                      {QUESTIONS[currentStep].options.map((option) => (
                        <div key={option.value} className="relative">
                          <RadioGroupItem
                            value={option.value}
                            id={`q${QUESTIONS[currentStep].id}-${option.value}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`q${QUESTIONS[currentStep].id}-${option.value}`}
                            className="flex items-center p-5 border-2 border-border/50 rounded-xl cursor-pointer hover:bg-muted/30 peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 transition-all"
                          >
                            <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 mr-4 flex items-center justify-center peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent">
                              {answers[QUESTIONS[currentStep].id] ===
                                option.value && (
                                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                              )}
                            </div>
                            <span className="text-base font-medium text-foreground/90">
                              {option.label}
                            </span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="mt-10 flex justify-between items-center">
                      <Button
                        variant="ghost"
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="text-foreground/60 hover:text-primary"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={nextStep}
                        disabled={!answers[QUESTIONS[currentStep].id]}
                        className="bg-primary hover:bg-primary/90 text-white font-bold px-8"
                      >
                        Next <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="lead-capture"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-center mb-8">
                      <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h2 className="text-2xl font-bold text-primary mb-2">
                        Get Your Audit Results
                      </h2>
                      <p className="text-foreground/70">
                        Enter your details below to receive your personalized
                        audit results and next-step recommendations.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="firstName"
                          className="font-semibold text-primary"
                        >
                          First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          required
                          placeholder="Enter your first name"
                          className="h-12 bg-muted/30 hover:border-primary/50 transition-colors"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="font-semibold text-primary"
                        >
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="Enter your best email"
                          className="h-12 bg-muted/30 hover:border-primary/50 transition-colors"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="font-semibold text-primary"
                        >
                          Phone Number (Optional)
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="h-12 bg-muted/30 hover:border-primary/50 transition-colors"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div className="bg-muted/30 p-4 rounded-xl border border-border/50 space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="dataConsent"
                            className="mt-1"
                            checked={dataConsent}
                            onCheckedChange={(checked) =>
                              setDataConsent(checked as boolean)
                            }
                          />
                          <Label
                            htmlFor="dataConsent"
                            className="text-sm font-normal text-foreground/70 leading-snug cursor-pointer"
                          >
                            I consent to allow PW Coaching LLC to store and
                            process my personal data in accordance with the{" "}
                            <Link
                              to="/privacy-policy"
                              className="underline hover:text-primary"
                            >
                              Privacy Policy
                            </Link>
                            .
                          </Label>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="emailConsent"
                            className="mt-1"
                            checked={emailConsent}
                            onCheckedChange={(checked) =>
                              setEmailConsent(checked as boolean)
                            }
                          />
                          <Label
                            htmlFor="emailConsent"
                            className="text-sm font-normal text-foreground/70 leading-snug cursor-pointer"
                          >
                            I consent to receive email marketing communications
                            from PW Coaching LLC. I understand I can unsubscribe
                            at any time.
                          </Label>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="smsConsent"
                            className="mt-1"
                            checked={smsConsent}
                            onCheckedChange={(checked) =>
                              setSmsConsent(checked as boolean)
                            }
                          />
                          <Label
                            htmlFor="smsConsent"
                            className="text-sm font-normal text-foreground/70 leading-snug cursor-pointer"
                          >
                            I agree to receive SMS text messages from PW
                            Coaching LLC, including coaching program
                            information, appointment scheduling, appointment
                            confirmations, reminders, and follow-up
                            communication related to my inquiry. Consent is not
                            a condition of purchase. Msg frequency varies. Msg &
                            data rates may apply. Reply STOP to opt out, HELP
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
                          </Label>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-between items-center">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={prevStep}
                          className="text-foreground/60 hover:text-primary"
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide px-8 h-12 shadow-md"
                        >
                          {isSubmitting ? "Sending..." : "Get My Results"}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
