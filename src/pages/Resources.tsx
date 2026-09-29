import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  BookOpen,
  Briefcase,
  FileText,
  List,
  MessageSquare,
  Target,
  Users,
  Map,
  Compass,
  Shield,
  Award,
  Zap,
  Anchor,
} from "lucide-react";

export default function Resources() {
  const { toast } = useToast();

  const openChatWidget = () => {
    const widget = document.querySelector("chat-widget");
    if (widget && widget.shadowRoot) {
      const btn = widget.shadowRoot.querySelector("button");
      if (btn) btn.click();
    } else {
      const chatBtn =
        document.querySelector("#lc-chat-widget-button") ||
        document.querySelector(".lc-chat-widget-button");
      if (chatBtn) (chatBtn as HTMLElement).click();
      else
        toast({
          title: "Opening Chat",
          description: "Please use the chat bubble in the bottom right corner.",
        });
    }
  };

  const careerResources = [
    {
      title: "Hotel Career Comeback Prompt Pathway™",
      status: "Available",
      description:
        "A guided AI prompt pathway for hotel professionals who need help turning their experience into clearer career positioning.",
      cta: "Get Access",
      href: "/hotel-career-comeback-prompt-pathway",
      icon: Map,
    },
    {
      title: "Remote Hotel Sales Comeback Checklist™",
      status: "Coming Soon",
      description:
        "A practical checklist with remote hotel sales job titles, resume positioning ideas, recruiter messages, a 7-day action plan, and AI prompts.",
      cta: "Join the Waiting List",
      href: "/resources/remote-hotel-sales-comeback-checklist",
      icon: List,
    },
    {
      title: "Next-Season Clarity Worksheet™",
      status: "Coming Soon",
      description:
        "A short worksheet to help you answer: Do I stay, pivot, rebuild, or prepare for something new?",
      cta: "Join the Waiting List",
      href: "/resources/next-season-clarity-worksheet",
      icon: Compass,
    },
    {
      title: "Hotel Resume Repositioning Prompt™",
      status: "Coming Soon",
      description:
        "A simple AI prompt to help translate hotel experience into stronger career language.",
      cta: "Join the Waiting List",
      href: "/resources/hotel-resume-repositioning-prompt",
      icon: FileText,
    },
  ];

  const salesResources = [
    {
      title: "Dormant Gold Prompt Pack™",
      status: "Coming Soon",
      description:
        "Prompts and scripts to help hotel sales leaders reactivate old CRM contacts and uncover hidden group business.",
      cta: "Join the Waiting List",
      href: "/resources/dormant-gold-prompt-pack",
      icon: Briefcase,
    },
    {
      title: "No-Lead-Left-Behind Checklist™",
      status: "Coming Soon",
      description:
        "A practical checklist for inspecting missed calls, stale inquiries, old CRM contacts, proposal delays, and weak follow-up.",
      cta: "Join the Waiting List",
      href: "/resources/no-lead-left-behind-checklist",
      icon: Shield,
    },
    {
      title: "17-Second Cold Call Opener Prompt™",
      status: "Coming Soon",
      description:
        "A short prompt framework to help hotel sales professionals open calls with clarity, relevance, and permission.",
      cta: "Join the Waiting List",
      href: "/resources/17-second-cold-call-opener-prompt",
      icon: MessageSquare,
    },
    {
      title: "5 Levers of Pipeline Recovery™",
      status: "Coming Soon",
      description:
        "A field guide for hotel sales leaders who need to recover pipeline momentum without guessing where to start.",
      cta: "Join the Waiting List",
      href: "/resources/5-levers-of-pipeline-recovery",
      icon: Target,
    },
    {
      title: "Need-Date Intelligence Method™ Guide",
      status: "Coming Soon",
      description:
        "A practical guide for finding opportunities around the dates your hotel actually needs.",
      cta: "Join the Waiting List",
      href: "/resources/need-date-intelligence-method",
      icon: BookOpen,
    },
  ];

  const christianResources = [
    {
      title: "Christian Leader’s Decision Filter™",
      status: "Coming Soon",
      description:
        "A biblical clarity tool for leaders making difficult decisions.",
      cta: "Join the Waiting List",
      href: "/resources/christian-leaders-decision-filter",
      icon: Anchor,
    },
    {
      title: "The Three Yous Worksheet™",
      status: "Coming Soon",
      description:
        "A reflection worksheet to help identify who you are pretending to be, who pressure trained you to be, and who God is calling you to become.",
      cta: "Join the Waiting List",
      href: "/resources/the-three-yous-worksheet",
      icon: Users,
    },
    {
      title: "ARCHITECT Method Overview™",
      status: "Coming Soon",
      description:
        "A simple overview of Paul Woodley’s Christian leadership clarity framework.",
      cta: "Join the Waiting List",
      href: "/resources/architect-method-overview",
      icon: Award,
    },
    {
      title: "Approval Addiction Self-Audit™",
      status: "Coming Soon",
      description:
        "A diagnostic worksheet for Christian leaders who are tired of performing for acceptance.",
      cta: "Join the Waiting List",
      href: "/resources/approval-addiction-self-audit",
      icon: Shield,
    },
  ];

  const aiResources = [
    {
      title: "Career Story Rewrite Prompt™",
      status: "Coming Soon",
      description:
        "Use AI to turn scattered career history into a clearer, stronger professional story.",
      cta: "Join the Waiting List",
      href: "/resources/career-story-rewrite-prompt",
      icon: FileText,
    },
    {
      title: "LinkedIn Outreach Conversation Starter Prompt™",
      status: "Coming Soon",
      description:
        "A prompt to help create warm, relevant outreach messages without sounding canned or robotic.",
      cta: "Join the Waiting List",
      href: "/resources/linkedin-outreach-conversation-starter-prompt",
      icon: MessageSquare,
    },
    {
      title: "Hotel Sales Follow-Up Prompt Pack™",
      status: "Coming Soon",
      description:
        "Prompts for follow-up messages, stalled leads, ghosted prospects, and reactivation conversations.",
      cta: "Join the Waiting List",
      href: "/resources/hotel-sales-follow-up-prompt-pack",
      icon: Zap,
    },
    {
      title: "Dormant CRM Reactivation Prompt™",
      status: "Coming Soon",
      description:
        "A prompt to help turn old contacts into fresh conversations.",
      cta: "Join the Waiting List",
      href: "/resources/dormant-crm-reactivation-prompt",
      icon: Users,
    },
  ];

  const challenges = [
    {
      title: "5-Day Hotel Career Comeback Challenge™",
      status: "Coming Soon",
      description:
        "For hotel professionals who need clarity, confidence, and a repositioning plan.",
      cta: "Join the Waiting List",
      href: "/resources/5-day-hotel-career-comeback-challenge",
      icon: Target,
    },
    {
      title: "5-Day FOM Level-Up Challenge™",
      status: "Coming Soon",
      description:
        "For front office managers who want to grow their income, influence, confidence, and career opportunities.",
      cta: "Join the Waiting List",
      href: "/resources/5-day-fom-level-up-challenge",
      icon: Award,
    },
    {
      title: "5-Day Dormant Gold Challenge™",
      status: "Coming Soon",
      description:
        "For hotel sales leaders who want to turn dormant CRM contacts into live group sales opportunities.",
      cta: "Join the Waiting List",
      href: "/resources/5-day-dormant-gold-challenge",
      icon: Zap,
    },
    {
      title: "5-Day Purpose Driven Hotelier Clarity Challenge™",
      status: "Coming Soon",
      description:
        "For Christian hotel leaders who need clarity in life, leadership, work, and next-season direction.",
      cta: "Join the Waiting List",
      href: "/resources/5-day-purpose-driven-hotelier-clarity-challenge",
      icon: Compass,
    },
  ];

  const renderResourceCard = (r: any, i: number) => {
    const Icon = r.icon;
    const isAvailable = r.status === "Available";

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        className="bg-white border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-4">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isAvailable ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}
          >
            {r.status}
          </span>
        </div>
        <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold uppercase text-primary mb-3 pr-16">
          {r.title}
        </h3>
        <p className="text-foreground/80 mb-8 flex-grow leading-relaxed text-sm">
          {r.description}
        </p>
        <Button
          asChild
          variant={isAvailable ? "default" : "outline"}
          className={`w-full font-bold uppercase ${isAvailable ? "bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}
        >
          <Link to={r.href}>{r.cta}</Link>
        </Button>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-16 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight mb-6 leading-[1.1]">
            Free Resources for Career Clarity, Hotel Sales Leadership, and
            Purpose-Driven Growth
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Practical prompt pathways, checklists, guides, and 5-day challenges
            to help you clarify your next step, recover momentum, and lead with
            greater confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide px-8 py-6 h-auto w-full sm:w-auto shadow-xl"
            >
              <Link to="/hotel-career-comeback-prompt-pathway">
                Start with the Hotel Career Comeback Pathway
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold uppercase tracking-wide px-8 py-6 h-auto w-full sm:w-auto transition-colors"
            >
              <a href="#categories">Browse All Resources</a>
            </Button>
          </div>
          <p className="text-sm text-white/60 max-w-2xl mx-auto font-medium">
            Created by Paul Woodley — hotelier, hotel sales leadership coach, AI
            systems strategist, author, and Christian leadership coach.
          </p>
        </div>
      </section>

      {/* Section 1: Featured Resource */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">
              Start Here
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-primary p-8 flex items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://vibe.filesafe.space/1783385542814852431/assets/300e1362-54d2-4004-870a-e6034e0755fd.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10">
                <Map className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  Prompt Pathway™
                </h3>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent font-bold text-xs mb-6 uppercase tracking-widest self-start">
                Available Now
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-primary uppercase mb-4">
                Hotel Career Comeback Prompt Pathway™
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                For hotel professionals who feel stuck, overlooked, burned out,
                laid off, or unsure what to do next. This AI-guided prompt
                pathway helps you clarify your experience, rebuild your story,
                reposition your resume, and take the next step with confidence.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-foreground/70 font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>{" "}
                  Format: Prompt Pathway + Download
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>{" "}
                  Best for: Hotel professionals in transition
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>{" "}
                  Outcome: Clarity, confidence, and a stronger career story
                </li>
              </ul>
              <div>
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide px-8 py-6 h-auto shadow-lg w-full sm:w-auto mb-3"
                >
                  <Link to="/hotel-career-comeback-prompt-pathway">
                    Get the Prompt Pathway
                  </Link>
                </Button>
                <p className="text-xs text-foreground/50">
                  Includes guided AI prompts to help you turn your hospitality
                  experience into clearer career positioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Choose the Resource Path */}
      <section id="categories" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight">
              Choose the Resource Path That Fits You
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="#career-comeback"
              className="group bg-muted/20 border border-border p-8 rounded-xl hover:bg-primary hover:border-primary transition-all duration-300 flex flex-col h-full text-center"
            >
              <Map className="w-10 h-10 text-accent mx-auto mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-bold text-primary uppercase mb-3 group-hover:text-white transition-colors">
                Career Comeback
              </h3>
              <p className="text-sm text-foreground/70 mb-6 flex-grow group-hover:text-white/80 transition-colors">
                For hotel professionals who need clarity, direction, resume
                repositioning, or a next-step plan.
              </p>
              <span className="text-sm font-bold text-accent uppercase group-hover:text-white transition-colors">
                View Career Resources &rarr;
              </span>
            </a>
            <a
              href="#hotel-sales"
              className="group bg-muted/20 border border-border p-8 rounded-xl hover:bg-primary hover:border-primary transition-all duration-300 flex flex-col h-full text-center"
            >
              <Target className="w-10 h-10 text-accent mx-auto mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-bold text-primary uppercase mb-3 group-hover:text-white transition-colors">
                Hotel Sales Leadership
              </h3>
              <p className="text-sm text-foreground/70 mb-6 flex-grow group-hover:text-white/80 transition-colors">
                For DOSMs, GMs, and hotel sales leaders who need pipeline
                clarity, follow-up structure, and revenue momentum.
              </p>
              <span className="text-sm font-bold text-accent uppercase group-hover:text-white transition-colors">
                View Sales Resources &rarr;
              </span>
            </a>
            <a
              href="#christian-leadership"
              className="group bg-muted/20 border border-border p-8 rounded-xl hover:bg-primary hover:border-primary transition-all duration-300 flex flex-col h-full text-center"
            >
              <Anchor className="w-10 h-10 text-accent mx-auto mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-bold text-primary uppercase mb-3 group-hover:text-white transition-colors">
                Christian Leadership
              </h3>
              <p className="text-sm text-foreground/70 mb-6 flex-grow group-hover:text-white/80 transition-colors">
                For leaders who want to make decisions from identity, truth,
                courage, and peace.
              </p>
              <span className="text-sm font-bold text-accent uppercase group-hover:text-white transition-colors">
                View Leadership Resources &rarr;
              </span>
            </a>
            <a
              href="#ai-prompts"
              className="group bg-muted/20 border border-border p-8 rounded-xl hover:bg-primary hover:border-primary transition-all duration-300 flex flex-col h-full text-center"
            >
              <Zap className="w-10 h-10 text-accent mx-auto mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-bold text-primary uppercase mb-3 group-hover:text-white transition-colors">
                AI Prompt Tools
              </h3>
              <p className="text-sm text-foreground/70 mb-6 flex-grow group-hover:text-white/80 transition-colors">
                For professionals who want practical copy-and-paste prompts that
                help them move faster.
              </p>
              <span className="text-sm font-bold text-accent uppercase group-hover:text-white transition-colors">
                View Prompt Tools &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Career Comeback */}
      <section
        id="career-comeback"
        className="py-20 bg-muted/30 border-t border-border"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-4">
              Career Comeback Resources
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl">
              For hotel professionals who are ready to clarify their story,
              reposition their experience, and take a more confident next step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {careerResources.map((r, i) => renderResourceCard(r, i))}
          </div>
        </div>
      </section>

      {/* Section 4: Hotel Sales */}
      <section
        id="hotel-sales"
        className="py-20 bg-background border-t border-border"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-4">
              Hotel Sales Leadership Resources
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl">
              For hotel sales leaders who need to protect revenue, recover old
              opportunities, and create a cleaner path from pipeline to
              forecast.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesResources.map((r, i) => renderResourceCard(r, i))}
          </div>
        </div>
      </section>

      {/* Section 5: Christian Leadership */}
      <section
        id="christian-leadership"
        className="py-20 bg-muted/30 border-t border-border"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-4">
              Christian Leadership Resources
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl">
              For leaders who want to move from pressure, approval, and
              confusion into clarity, courage, and faithful action.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {christianResources.map((r, i) => renderResourceCard(r, i))}
          </div>
        </div>
      </section>

      {/* Section 6: AI Prompts */}
      <section
        id="ai-prompts"
        className="py-20 bg-background border-t border-border"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-4">
              AI Prompt Tools
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Simple prompts designed to help you think clearly, write faster,
              and take action with more confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aiResources.map((r, i) => renderResourceCard(r, i))}
          </div>
        </div>
      </section>

      {/* Section 7: Challenges */}
      <section className="py-20 bg-primary border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-4">
              5-Day Guided Challenges
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Some resources are simple downloads. Others are designed as guided
              5-day experiences that help you move from insight to action.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {challenges.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors flex flex-col h-full relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/90">
                    {r.status}
                  </span>
                </div>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 text-accent">
                  <r.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-white mb-3 pr-16">
                  {r.title}
                </h3>
                <p className="text-white/70 mb-8 flex-grow leading-relaxed text-sm">
                  {r.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold uppercase"
                >
                  <Link to={r.href}>{r.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase mb-6 tracking-tight">
            Not Sure Which Resource You Need?
          </h2>
          <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
            Start with the Hotel Career Comeback Prompt Pathway if you need
            personal career clarity. Start with the hotel sales resources if
            your challenge is pipeline, follow-up, or revenue momentum. Start
            with Christian leadership resources if your real issue is clarity,
            identity, pressure, or decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide px-8 py-6 h-auto shadow-lg w-full sm:w-auto"
            >
              <Link to="/hotel-career-comeback-prompt-pathway">
                Start with the Featured Resource
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={openChatWidget}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wide px-8 py-6 h-auto w-full sm:w-auto"
            >
              Ask Paul&apos;s AI Assistant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
