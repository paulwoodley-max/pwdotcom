import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  LOGO_URL,
  PROCOACH_URL,
  GCA_URL,
  imgFallback,
  HERO_BG_URL,
} from "@/lib/images";
import { useToast } from "@/hooks/use-toast";

import { Navigation, NAV_LINKS } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function HotelResponse() {
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

  const dormaSteps = [
    {
      letter: "D",
      word: "DIAGNOSE THE DORMANT",
      desc: "Identify which leads, contacts, and CRM records are dormant, cold, or untouched — and what the revenue risk actually is.",
    },
    {
      letter: "O",
      word: "ORGANIZE YOUR PIPELINE",
      desc: "Segment your CRM by pipeline stage — prospect, tentative, definite, turned-down, and lost — plus lead source and revenue potential so your team knows exactly where to focus.",
    },
    {
      letter: "R",
      word: "REACTIVATE SMARTLY",
      desc: "Use AI-powered follow-up sequences, voice agents, and personalized outreach to re-engage contacts who already said yes at some point.",
    },
    {
      letter: "M",
      word: "MOVE REPLIES TO MEETINGS",
      desc: "Turn reactivated conversations into booked site tours, calls, and contract conversations using a structured response playbook.",
    },
    {
      letter: "A",
      word: "ACTIVATE THE PIPELINE",
      desc: "Build a consistent, repeatable system that keeps leads moving forward — so dormant revenue never builds up again.",
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
            src={HERO_BG_URL}
            alt="Hotel Response"
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
              <Building2 className="w-4 h-4" />
              FOR HOTELS & HOSPITALITY ORGANIZATIONS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 uppercase tracking-tight text-shadow-hero">
              REVENUE IS SITTING DORMANT IN YOUR OWN CRM.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light leading-relaxed text-shadow-hero">
              Hotel Response helps hotels capture missed leads, reactivate
              dormant contacts, and build stronger follow-up systems — so you
              stop losing revenue that should already be yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-auto py-4 px-8 font-bold uppercase tracking-wide shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto whitespace-normal text-center"
              >
                <a
                  href="https://5-day-group-pace-challenge.hotelresponse.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JOIN THE FREE 1:1 5-DAY CHALLENGE
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
              MOST HOTELS ARE LEAVING REVENUE ON THE TABLE AND DON'T KNOW IT.
            </h2>
            <div className="w-20 h-2 bg-accent mx-auto mb-8"></div>
          </motion.div>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border mb-10">
            <ul className="space-y-6">
              {[
                "Missed inbound calls that never got followed up",
                "Group and catering leads that went cold and stayed cold",
                "A CRM full of contacts that nobody has touched in months",
                "Follow-up that stops after the first message",
                "Sales team capacity stretched too thin to reactivate dormant files",
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
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center font-medium">
            The problem is rarely that you do not have enough leads. The problem
            is that the leads you already have are not being managed, followed
            up, or reactivated at the speed and frequency the market requires.
          </p>
        </div>
      </section>

      {/* The D.O.R.M.A. Method */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/20 border border-accent/30 px-6 py-2 rounded-full mb-6">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">
                THE D.O.R.M.A. METHOD™
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-6 leading-tight">
              A practical framework for diagnosing and reactivating dormant
              hotel revenue.
            </h2>
            <div className="w-20 h-2 bg-accent mx-auto"></div>
          </div>
          <div className="grid gap-6">
            {dormaSteps.map((step, i) => (
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

      {/* How Hotel Response Helps */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase mb-6">
              HOW HOTEL RESPONSE HELPS
            </h2>
            <div className="w-20 h-2 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-border flex flex-col h-full">
              <h3 className="text-xl font-bold uppercase text-primary mb-4">
                MISSED CALL RECOVERY
              </h3>
              <p className="text-foreground/80 leading-relaxed flex-grow">
                AI-powered voice and SMS follow-up that catches and qualifies
                leads your team missed in real time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-border flex flex-col h-full">
              <h3 className="text-xl font-bold uppercase text-primary mb-4">
                CRM REACTIVATION
              </h3>
              <p className="text-foreground/80 leading-relaxed flex-grow">
                Systematic outreach campaigns to wake up dormant group,
                catering, and transient contacts already in your database.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-border flex flex-col h-full">
              <h3 className="text-xl font-bold uppercase text-primary mb-4">
                SALES PIPELINE SUPPORT
              </h3>
              <p className="text-foreground/80 leading-relaxed flex-grow">
                Process consulting and fractional leadership support to help
                hotels build the systems that keep revenue moving.
              </p>
            </div>
          </div>
          <div className="bg-muted/40 p-10 rounded-2xl border border-border text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold uppercase text-primary mb-4">
              WHO HOTEL RESPONSE SERVES
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
              Hotels, asset managers, management companies, GMs, DOSMs, F&B
              directors, catering sales leaders, and hotel ownership groups who
              need their revenue recovery systems to actually work.
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
            THE REVENUE IS ALREADY THERE. LET'S GO GET IT.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-auto py-4 px-10 font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto whitespace-normal text-center"
            >
              <a
                href="https://5-day-group-pace-challenge.hotelresponse.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JOIN THE FREE 1:1 5-DAY CHALLENGE
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
