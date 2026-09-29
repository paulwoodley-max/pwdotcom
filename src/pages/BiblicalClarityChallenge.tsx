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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  Target,
  Search,
  Eye,
  RefreshCw,
  Activity,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { HERO_BG_URL, FAMILY_ABOUT_URL, imgFallback } from "@/lib/images";

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

export default function BiblicalClarityChallenge() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [stuckPoint, setStuckPoint] = useState("");
  const [goal, setGoal] = useState("");
  const [contactMethod, setContactMethod] = useState("phone");
  const [dataConsent, setDataConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  useEffect(() => {
    document.title = "Free 1:1 5-Day Biblical Clarity Challenge | Paul Woodley";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Join Paul Woodley’s Free 1:1 5-Day Biblical Clarity Challenge and begin moving from confusion, fear, and overthinking into clarity, truth, and practical action through The Architect Method™.",
      );
    }
  }, []);

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
    if (!firstName || !email || !description || !stuckPoint || !goal) return;

    const tags = [
      "tcpa-method",
      "biblical-clarity-challenge",
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

    postTrackingEvent(
      {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "Apply for the Free 1:1 5-Day Biblical Clarity Challenge",
        formName: "Apply for the Free 1:1 5-Day Biblical Clarity Challenge",
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
            label: "Which best describes you?",
          },
          stuckPoint: {
            value: stuckPoint,
            label: "What feels most stuck right now?",
          },
          goal: { value: goal, label: "Goal for 5 days" },
          contactMethod: {
            value: contactMethod,
            label: "Preferred contact method",
          },
        },
      },
    );

    setIsSubmitted(true);
    toast({
      title: "Application Submitted",
      description: "Thank you. Paul's team will follow up with next steps.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/95 z-10"></div>
        <img
          src={HERO_BG_URL}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          onError={imgFallback}
        />
        <div className="container mx-auto px-4 max-w-5xl relative z-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs mb-8 uppercase tracking-widest">
            FREE 1:1 5-DAY CHALLENGE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight uppercase leading-tight">
            Stop Feeling Stuck. <br className="hidden md:block" />
            <span className="text-accent">Start Seeing the Pattern.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed mb-10">
            A personalized 5-day clarity challenge for Christian leaders,
            professionals, and hoteliers who are tired of overthinking,
            second-guessing, and staying busy without moving forward.
          </p>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            You may not be stuck because you lack faith, ability, or experience.
            You may be stuck because an old pattern is still running the room.
            The Architect Method™ helps you name the pattern, bring it under
            biblical truth, and take one clear step of obedience at a time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-8 h-auto min-h-[56px] py-4 shadow-lg transition-transform hover:-translate-y-1"
            >
              <a href="#apply">Join the Free 1:1 5-Day Challenge</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-slate-900 font-bold uppercase tracking-wide rounded-sm px-8 h-auto min-h-[56px] py-4 transition-colors"
            >
              <a href="tel:4045742345" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call 404-574-2345 to book with
                Digital Paulie
              </a>
            </Button>
          </div>
          <p className="text-sm text-white/60 font-medium uppercase tracking-wider">
            Free. Personal. No pressure. Built for people ready to move with
            clarity.
          </p>
        </div>
      </section>

      {/* Section 2 — The Problem */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight uppercase">
              The Problem Is Not Always Effort. Sometimes It Is Architecture.
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-6">
              Many people are working hard, praying sincerely, and trying to
              make wise decisions — but still feel unclear, hesitant, or
              emotionally stuck. They keep circling the same decision, replaying
              the same fear, or waiting for perfect certainty before they move.
            </p>
            <p className="text-xl font-bold text-primary my-8">
              The Architect Method™ begins with a simple truth:
              <br />
              <span className="text-accent">
                People are not stuck. They are patterned.
              </span>
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              Patterns can be named. Patterns can be exposed. Patterns can be
              replaced with truth. Then movement becomes possible again.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-tight">
                You Keep Overthinking
              </h3>
              <p className="text-foreground/70 leading-relaxed font-light">
                You call it discernment, but deep down you know you may be
                delaying obedience because fear is louder than clarity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-tight">
                You Feel Pulled in Two Directions
              </h3>
              <p className="text-foreground/70 leading-relaxed font-light">
                Part of you wants to move forward. Another part keeps protecting
                an old identity, old wound, or old version of success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-tight">
                You Know There Is More
              </h3>
              <p className="text-foreground/70 leading-relaxed font-light">
                You are not looking for hype. You want biblical clarity,
                practical direction, and a next step you can actually take.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Introduce The Architect Method */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight uppercase">
              The Architect Method™
            </h2>
            <p className="text-xl font-bold text-accent uppercase tracking-wider mb-8">
              Clarity first. Truth second. Action third.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-6">
              The Architect Method™ is Paul Woodley's Christ-centered coaching
              framework for helping people move from confusion to clarity, from
              limiting patterns to biblical truth, and from hesitation to
              practical action.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-6">
              It is not therapy. It is not motivational coaching. It is not a
              formula for self-actualization.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light font-medium">
              It is a guided coaching process that helps you examine what is
              happening, identify the pattern beneath it, reframe the lie with
              truth, and move forward with one concrete act of obedience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Target,
                title: "1. Clarify",
                desc: "Name what is actually not moving.",
              },
              {
                icon: Search,
                title: "2. Expose",
                desc: "Reveal the pattern beneath the problem.",
              },
              {
                icon: Eye,
                title: "3. Identify",
                desc: "Uncover the belief or lie the pattern has been running on.",
              },
              {
                icon: RefreshCw,
                title: "4. Reframe",
                desc: "Replace the lie with biblical truth.",
              },
              {
                icon: Activity,
                title: "5. Move",
                desc: "Take one clear step of obedience and build momentum.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-xl border border-border/50"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/70 font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — What the 5 Days Look Like */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight uppercase">
              What Happens in the 5-Day Challenge
            </h2>
            <p className="text-xl text-white/80 font-light">
              One person. One stuck point. Five days of clarity, truth, and
              action.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                day: "Day 1",
                title: "Clarify the Stuck Point",
                desc: "You name the specific area where you feel stuck, unclear, or divided. No vague goals. No scattered focus. We identify the real issue.",
              },
              {
                day: "Day 2",
                title: "Expose the Pattern",
                desc: "You look beneath the circumstance and begin seeing the repeated pattern that may be driving your delay, fear, overthinking, or frustration.",
              },
              {
                day: "Day 3",
                title: "Identify the Lie",
                desc: "You identify the belief, assumption, fear, or inner agreement that has been shaping your response.",
              },
              {
                day: "Day 4",
                title: "Reframe with Truth",
                desc: "You replace the lie with biblical truth and begin seeing the situation through a clearer lens.",
              },
              {
                day: "Day 5",
                title: "Move with Obedience",
                desc: "You choose one practical next step and leave with a simple action plan you can actually execute.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm flex flex-col h-full"
              >
                <div className="text-accent font-bold text-sm uppercase tracking-widest mb-2">
                  {item.day}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm font-light leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-8 h-auto min-h-[56px] py-4 shadow-lg"
            >
              <a href="#apply">Start Your 5-Day Clarity Challenge</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5 & 6 — Who This Is For & Not For */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-extrabold text-primary mb-8 tracking-tight uppercase">
                This Challenge Is For You If...
              </h2>
              <ul className="space-y-4">
                {[
                  "You are a Christian leader who feels unclear about your next step.",
                  "You are tired of overthinking and calling it wisdom.",
                  "You feel pulled between who you were and who God is calling you to become.",
                  "You are carrying fear, hesitation, or approval pressure that keeps slowing you down.",
                  "You need a practical plan, not another inspirational quote.",
                  "You want coaching that honors Scripture and still moves you into action.",
                  "You are an experienced hotelier, professional, entrepreneur, or leader who knows there is more but needs help naming the next move.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-accent/20 rounded-full flex items-center justify-center w-6 h-6 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground/80 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-border/50 shadow-sm">
              <h2 className="text-3xl font-extrabold text-primary mb-6 tracking-tight uppercase">
                This Is Not for Everyone.
              </h2>
              <div className="w-12 h-1 bg-destructive mb-6"></div>
              <p className="text-lg text-foreground/80 leading-relaxed font-light mb-6">
                This challenge is not for people looking for magic answers,
                vague motivation, or someone else to make their decisions for
                them. Paul will not flatter confusion or baptize
                procrastination.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-bold">
                This is for people willing to tell the truth, examine the
                pattern, receive biblical clarity, and take one practical step
                forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Meet Paul */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight uppercase">
                Meet Paul Woodley
              </h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-8 font-light">
                <p>
                  Paul Woodley is a Christian leadership coach, Certified
                  ProCoach, hotelier, author, speaker, entrepreneur, and founder
                  of Hotel Response. After nearly 30 years in hospitality
                  leadership, sales, operations, and revenue strategy, Paul now
                  helps people turn hard-earned experience, biblical clarity,
                  and practical wisdom into their next breakthrough.
                </p>
                <p>His coaching is grounded in a simple conviction:</p>
                <p className="font-bold text-primary italic text-xl border-l-4 border-accent pl-4 py-2">
                  The coach holds the pen. The Architect is Christ.
                </p>
                <p>
                  Paul helps clients stop living from old patterns and start
                  responding with clarity, truth, and action.
                </p>
              </div>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide rounded-sm px-8 h-auto min-h-[56px] py-4"
              >
                <a href="#apply">Book Your Free Challenge Kickoff</a>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={FAMILY_ABOUT_URL}
                alt="Paul Woodley"
                className="w-full rounded-2xl shadow-xl object-cover aspect-square border border-border/50"
                onError={imgFallback}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Simple Process */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-16 tracking-tight uppercase">
            How to Start
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
            <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-border -translate-y-1/2 z-0"></div>
            {[
              {
                step: "Step 1",
                title: "Submit the Form",
                desc: "Tell Paul where you feel stuck and what kind of clarity you are looking for.",
              },
              {
                step: "Step 2",
                title: "Book Your Kickoff Call",
                desc: "Choose a time for your first 1:1 clarity conversation.",
              },
              {
                step: "Step 3",
                title: "Walk Through the 5 Days",
                desc: "Paul helps you identify the pattern, reframe the issue, and take your next step.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 bg-white p-8 rounded-xl shadow-md border border-border/50 flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-foreground/70 font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-8 h-auto min-h-[56px] py-4 shadow-lg"
            >
              <a href="#apply">Join the Free 1:1 5-Day Challenge</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 font-bold uppercase tracking-wide rounded-sm px-8 h-auto min-h-[56px] py-4"
            >
              <a href="tel:4045742345" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call 404-574-2345
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-border">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-primary mb-4 uppercase tracking-tight">
                Apply for the Free 1:1 5-Day Biblical Clarity Challenge
              </h2>
              <p className="text-foreground/70 font-light">
                Fill out the form below to request your challenge kickoff.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Application Received
                </h3>
                <p className="text-lg text-foreground/80 mb-6">
                  Thank you. Paul's team will follow up with next steps.
                </p>
                <p className="text-lg font-bold text-primary mb-8">
                  You can also call{" "}
                  <a
                    href="tel:4045742345"
                    className="text-accent hover:underline"
                  >
                    404-574-2345
                  </a>{" "}
                  now to speak with Digital Paulie and book your kickoff call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Which best describes you?</Label>
                  <Select
                    required
                    value={description}
                    onValueChange={setDescription}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="christian-leader">
                        Christian leader
                      </SelectItem>
                      <SelectItem value="hotel-professional">
                        Hotel / hospitality professional
                      </SelectItem>
                      <SelectItem value="entrepreneur">
                        Entrepreneur / business owner
                      </SelectItem>
                      <SelectItem value="sales-professional">
                        Sales or people-facing professional
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>What feels most stuck right now?</Label>
                  <Select
                    required
                    value={stuckPoint}
                    onValueChange={setStuckPoint}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clarity">Clarity</SelectItem>
                      <SelectItem value="confidence">Confidence</SelectItem>
                      <SelectItem value="career">Career / calling</SelectItem>
                      <SelectItem value="leadership">Leadership</SelectItem>
                      <SelectItem value="business">
                        Business direction
                      </SelectItem>
                      <SelectItem value="fear">Fear / overthinking</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="goal">
                    In one or two sentences, what would you like to be clearer
                    about by the end of 5 days?
                  </Label>
                  <Textarea
                    id="goal"
                    required
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Preferred contact method</Label>
                  <RadioGroup
                    value={contactMethod}
                    onValueChange={setContactMethod}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone" className="font-normal">
                        Phone
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="text" id="contact-text" />
                      <Label htmlFor="contact-text" className="font-normal">
                        Text
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email" className="font-normal">
                        Email
                      </Label>
                    </div>
                  </RadioGroup>
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
                      I consent to allow PW Coaching LLC to store and process my
                      personal data in accordance with the{" "}
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
                      I agree to receive SMS text messages from PW Coaching LLC,
                      including coaching program information, appointment
                      scheduling, appointment confirmations, reminders, and
                      follow-up communication related to my inquiry. Consent is
                      not a condition of purchase. Msg frequency varies. Msg &
                      data rates may apply. Reply STOP to opt out, HELP for
                      help.{" "}
                      <a
                        href="/privacy-policy"
                        className="underline hover:text-primary"
                      >
                        Privacy Policy
                      </a>{" "}
                      |{" "}
                      <a href="/terms" className="underline hover:text-primary">
                        Terms of Service
                      </a>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide py-6 text-lg mt-4"
                >
                  Start My 5-Day Challenge
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Section 9 — FAQ */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-primary mb-12 text-center tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full bg-white rounded-xl shadow-sm border border-border/50 px-6 py-2"
          >
            {[
              {
                q: "Is this really free?",
                a: "Yes. The 5-Day Biblical Clarity Challenge is free. It is designed to help you get clarity and determine whether Paul's coaching is a good fit.",
              },
              {
                q: "Is this a group challenge?",
                a: "No. This is positioned as a personalized 1:1 challenge. You are not sitting through a generic webinar. The focus is your situation.",
              },
              {
                q: "Is this counseling or therapy?",
                a: "No. This is coaching. Paul helps you clarify the issue, identify patterns, apply biblical truth, and take practical action.",
              },
              {
                q: "What happens after the challenge?",
                a: "If there is a fit, Paul may share next-step coaching options after he understands your situation. There is no pressure.",
              },
              {
                q: "Who should join?",
                a: "Christian leaders, professionals, hoteliers, entrepreneurs, and people-facing leaders who feel stuck, unclear, hesitant, or ready for their next chapter.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-bold text-primary hover:text-accent">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 font-light leading-relaxed text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Section 10 — Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight uppercase">
            You Are Not Stuck. <br className="hidden md:block" />
            <span className="text-accent">
              You Are Ready to See the Pattern.
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-12 font-light">
            Join the Free 1:1 5-Day Biblical Clarity Challenge and take your
            next step with clarity, truth, and action.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-8 h-auto min-h-[56px] py-4 shadow-lg"
            >
              <a href="#apply">Join the Free 1:1 5-Day Challenge</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-slate-900 font-bold uppercase tracking-wide rounded-sm px-8 h-auto min-h-[56px] py-4"
            >
              <a href="tel:4045742345" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Digital Paulie: 404-574-2345
              </a>
            </Button>
          </div>
          <p className="text-sm font-bold text-white/60 uppercase tracking-widest">
            The first step is a conversation.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
