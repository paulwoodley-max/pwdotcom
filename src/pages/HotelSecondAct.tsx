import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  LOGO_URL,
  PROCOACH_URL,
  GCA_URL,
  imgFallback,
  HERO_BG_URL,
  COACHING_URL,
} from "@/lib/images";
import { useToast } from "@/hooks/use-toast";

import { Navigation, NAV_LINKS } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function HotelSecondAct() {
  const { toast } = useToast();

  const openChatWidget = () => {
    const chatBtn =
      document.querySelector("#lc-chat-widget-button") ||
      document.querySelector(".lc-chat-widget-button");
    if (chatBtn) {
      (chatBtn as HTMLElement).click();
    } else {
      toast({
        title: "Opening Chat",
        description: "Please use the chat bubble in the bottom right corner.",
      });
    }
  };

  const proofSteps = [
    {
      letter: "P",
      word: "PULL YOUR PROOF",
      desc: "Identify the real wins, skills, results, and stories from your hotel career that demonstrate your expertise.",
    },
    {
      letter: "R",
      word: "REFRAME YOUR LANE",
      desc: "Decide which second-act path fits you best: coaching, consulting, training, fractional leadership, or a hybrid.",
    },
    {
      letter: "O",
      word: "OWN YOUR OFFER",
      desc: "Define a specific, paid expert offer built around your hospitality expertise — something you can describe in one sentence.",
    },
    {
      letter: "O",
      word: "ORGANIZE YOUR OUTREACH",
      desc: "Build a simple system for reaching the people who need your expertise and are willing to pay for it.",
    },
    {
      letter: "F",
      word: "FUEL YOUR FORWARD MOTION",
      desc: "Create a 30-day action plan to launch, test, and iterate your second-act offer with real people.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src={COACHING_URL}
            alt="Hotel Professional"
            className="w-full h-full object-cover object-center opacity-40"
            onError={imgFallback}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-sm mb-6 uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              Free 5-Day 1:1 Challenge for Experienced Hotel Professionals
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 uppercase tracking-tight text-shadow-hero">
              Turn Your Hotel Experience Into Your Next Opportunity.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light leading-relaxed text-shadow-hero">
              You have more value than your current title, paycheck, or season
              may reflect. In this free 5-day 1:1 challenge, Paul Woodley will
              help you clarify your strengths, reposition your experience, and
              build a practical second-act plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
              <Button
                size="lg"
                onClick={openChatWidget}
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-auto py-4 px-8 font-bold uppercase tracking-wide w-full sm:w-auto whitespace-normal text-center"
              >
                Apply for the Free 5-Day 1:1 Challenge
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white bg-transparent hover:bg-white hover:text-slate-900 text-lg h-auto py-4 px-8 font-bold uppercase tracking-wide shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto whitespace-normal text-center"
              >
                <a
                  href="tel:6785017256"
                  className="flex items-center gap-2 justify-center"
                >
                  <Phone className="w-5 h-5" /> CALL/TEXT (678) 501-7256 &rarr;
                  DIGITAL PAULIE
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase leading-tight mb-6">
              IF THIS SOUNDS FAMILIAR, YOU ARE IN THE RIGHT PLACE.
            </h2>
            <div className="w-20 h-2 bg-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
              You have 10, 15, 20+ years inside hotels. You have led teams,
              protected revenue, managed chaos, built systems, served thousands
              of guests, and solved problems that most people cannot even
              explain to an outsider.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed">
              But now something has shifted. Maybe a restructure ended your
              role. Maybe you are tired of climbing someone else's ladder. Maybe
              you want to do the work you love without being owned by a property
              schedule. You are not starting over. You are repositioning what
              you already have.
            </p>
          </motion.div>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border">
            <ul className="space-y-6">
              {[
                "Your experience is real but you do not know how to package it as an offer",
                "You are not sure what lane you belong in — coaching, consulting, fractional, or training",
                "You have tried to make moves but do not know where to start",
                "You feel like your best years of contribution are still ahead of you",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg md:text-xl font-medium text-foreground/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lead Magnet / Prompt Pathway */}
      <section className="py-20 bg-background text-center border-y border-border/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs mb-6 uppercase tracking-widest">
            FREE WORKBOOK
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight uppercase text-primary">
            You do not need more applications. You need a clearer career
            comeback plan.
          </h2>
          <p className="text-xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            The right plan helps you clarify your value, sharpen your message,
            and create better conversations around your next opportunity.
          </p>
          <div className="bg-muted/50 p-8 md:p-10 rounded-2xl border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-3 uppercase tracking-tight">
              The Hotel Career Comeback Prompt Pathway™
            </h3>
            <p className="text-foreground/70 mb-8 font-light">
              Use AI to clarify your next best move, reposition your hospitality
              experience, and build a practical path toward paid work.
            </p>
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-10 h-auto min-h-[56px] py-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Link to="/hotel-career-comeback-prompt-pathway">
                Get the Free Prompt Pathway
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The P.R.O.O.F. Method */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/20 border border-accent/30 px-6 py-2 rounded-full mb-6">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">
                THE P.R.O.O.F. METHOD™
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-6 leading-tight">
              Turning your career-earned expertise into a second-act offer.
            </h2>
            <div className="w-20 h-2 bg-accent mx-auto"></div>
          </div>
          <div className="grid gap-6">
            {proofSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <span className="text-3xl font-extrabold text-accent-foreground">
                    {step.letter}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 tracking-wide text-accent">
                    {step.word}
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase mb-6">
            Ready to turn your hotel experience into your next opportunity?
          </h2>
          <div className="w-20 h-2 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Apply for the free 5-Day 1:1 Hotel Expert Second Act Challenge™ and
            start building a clearer path for your next season.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-border max-w-md mx-auto">
            <Button
              size="lg"
              onClick={openChatWidget}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase py-6 h-auto whitespace-normal"
            >
              Apply for the Free Challenge
            </Button>
            <p className="text-sm text-foreground/60 mt-6 leading-relaxed">
              Free to apply. Built for experienced hotel professionals.
              Practical, focused, and delivered in a 1:1 challenge format.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase mb-6 leading-tight">
            Your hotel experience still has value.
          </h2>
          <p className="text-xl text-white/80 mb-10 font-medium max-w-2xl mx-auto">
            The next chapter may require a new way to see it, name it, and use
            it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              onClick={openChatWidget}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-auto py-4 px-10 font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto whitespace-normal text-center"
            >
              Apply for the Free 5-Day 1:1 Challenge
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white bg-transparent hover:bg-white hover:text-slate-900 text-lg h-auto py-4 px-10 font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto whitespace-normal text-center"
            >
              <a
                href="tel:6785017256"
                className="flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" /> CALL/TEXT (678) 501-7256
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
