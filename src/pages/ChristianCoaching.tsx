import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Compass, Shield } from "lucide-react";
import { motion } from "framer-motion";
import {
  LOGO_URL,
  PROCOACH_URL,
  GCA_URL,
  imgFallback,
  HERO_BG_URL,
  FAMILY_ABOUT_URL,
} from "@/lib/images";
import { useToast } from "@/hooks/use-toast";

import { Navigation, NAV_LINKS } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ChristianCoaching() {
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

  const architectSteps = [
    {
      letter: "A",
      word: "ASSESS YOUR STORY",
      desc: "Tell the truth about where you are — spiritually, relationally, professionally, and emotionally.",
    },
    {
      letter: "R",
      word: "RECLAIM YOUR IDENTITY",
      desc: "Replace false beliefs with the truth of who you are in Christ — not based on performance or approval.",
    },
    {
      letter: "C",
      word: "CLARIFY YOUR CALLING",
      desc: "Get specific about what God is directing you toward — not in vague language, but in actionable next steps.",
    },
    {
      letter: "H",
      word: "HEAL THE HIDDEN PLACES",
      desc: "Address the fears, wounds, and patterns that keep showing up and blocking forward movement.",
    },
    {
      letter: "I",
      word: "INTEGRATE FAITH AND WORK",
      desc: "Stop compartmentalizing. Let your biblical worldview inform your leadership, business, and relationships.",
    },
    {
      letter: "T",
      word: "TAKE ACCOUNTABILITY",
      desc: "Build the structures, relationships, and rhythms that make follow-through real, not accidental.",
    },
    {
      letter: "E",
      word: "ENGAGE YOUR COMMUNITY",
      desc: "Lead from your true identity in the spaces where God has placed you — family, church, work, and beyond.",
    },
    {
      letter: "C",
      word: "CREATE YOUR NEXT RIGHT MOVE",
      desc: "Build a 30-day action plan for your next breakthrough — specific, faith-rooted, and executable.",
    },
    {
      letter: "T",
      word: "TRUST THE PROCESS",
      desc: "Stay anchored to truth and keep moving even when clarity takes time.",
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
            alt="Christian Leadership"
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
              <Shield className="w-4 h-4" />
              FOR CHRISTIAN LEADERS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 uppercase tracking-tight text-shadow-hero">
              WHO TOLD YOU THAT YOU WERE NOT ENOUGH?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light leading-relaxed text-shadow-hero">
              That question from Genesis frames everything Paul teaches.
              Christian breakthrough coaching helps you separate truth from
              false identity, gain biblical clarity, and lead from conviction —
              not from fear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-auto py-4 px-8 font-bold uppercase tracking-wide w-full sm:w-auto whitespace-normal text-center"
              >
                <Link to="/5-day-biblical-clarity-challenge">
                  JOIN THE FREE 1:1 5-DAY CHALLENGE
                </Link>
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

      {/* Who This Is For */}
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
              THIS COACHING IS FOR YOU IF...
            </h2>
            <div className="w-20 h-2 bg-accent mx-auto mb-8"></div>
          </motion.div>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border">
            <ul className="space-y-6">
              {[
                "You are a Christian professional, leader, entrepreneur, husband, or father who feels stuck or unclear",
                "You are living for approval instead of leading from identity",
                "You feel called to something more but cannot define what that means in practical terms",
                "You are carrying weight that was never yours to carry",
                "You want to align your faith, your leadership, and your daily decisions — not just your Sunday morning",
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

      {/* The A.R.C.H.I.T.E.C.T. Method */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/20 border border-accent/30 px-6 py-2 rounded-full mb-6">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">
                THE A.R.C.H.I.T.E.C.T. METHOD™
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-6 leading-tight">
              A framework for leading and living from biblical identity,
              clarity, and conviction.
            </h2>
            <div className="w-20 h-2 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {architectSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <span className="text-2xl font-extrabold text-accent-foreground">
                    {step.letter}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase mb-2 tracking-wide text-accent">
                    {step.word}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Word From Paul */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={FAMILY_ABOUT_URL}
                alt="Paul Woodley"
                className="w-full rounded-2xl shadow-xl object-cover"
                onError={imgFallback}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase mb-6 leading-tight">
                A WORD FROM PAUL
              </h2>
              <div className="w-16 h-2 bg-accent mb-8"></div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                I was not always clear. For years I performed before I
                surrendered. I led before I knew why. I built things with the
                wrong foundation and wondered why I felt empty.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                It was a dark apartment in Seattle — no money, no lights, and a
                King James Bible — that started changing my understanding of who
                I was. Not what I achieved. Who I was.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                That is what I help people find. Not a motivational lift. Not a
                five-step program. A real, honest, faith-grounded reckoning with
                truth — and a practical plan for what comes next.
              </p>
            </motion.div>
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
            CLARITY IS NOT COMPLICATED. BUT IT REQUIRES AN HONEST CONVERSATION.
          </h2>
          <p className="text-xl text-white/80 mb-10 font-medium max-w-2xl mx-auto">
            The 1:1 5-Day Challenge is where we start. No group. No fluff. Just
            you and a guide who has already walked the path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-auto py-4 px-10 font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto whitespace-normal text-center"
            >
              <Link to="/5-day-biblical-clarity-challenge">
                JOIN THE FREE 1:1 5-DAY CHALLENGE
              </Link>
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
