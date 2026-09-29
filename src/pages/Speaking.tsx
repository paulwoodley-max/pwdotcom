import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Mic,
  Users,
  BookOpen,
  Briefcase,
  Target,
  Heart,
  Phone,
} from "lucide-react";
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

export default function Speaking() {
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

  const topics = [
    {
      icon: Heart,
      title: "WHO SAID YOU WERE NAKED?",
      desc: "For faith-based and leadership audiences. The question from Genesis that frames identity, clarity, and the cost of living under false belief. Paul&apos;s signature message.",
    },
    {
      icon: Briefcase,
      title: "THE HOTELIER'S 2ND ACT",
      desc: "For hotel industry associations, GM conferences, and hospitality career events. How experienced hotel professionals can turn career-earned expertise into coaching, consulting, fractional leadership, or a paid expert offer.",
    },
    {
      icon: Target,
      title: "THE P.R.O.O.F. METHOD™",
      desc: "For hotel leadership and career events. A practical framework for turning hotel experience into a clear personal brand, expert positioning, and second-act offer.",
    },
    {
      icon: Briefcase,
      title: "HOTEL REVENUE RECOVERY — WHAT YOUR CRM IS HIDING",
      desc: "For DOSM roundtables, ownership groups, and sales leadership teams. The dormant revenue sitting in your CRM and the system you need to go get it.",
    },
    {
      icon: Users,
      title: "LEADERSHIP UNDER PRESSURE",
      desc: "For GM conferences and hotel ownership groups. Real lessons from leading through COVID, ownership transitions, and high-stakes hospitality environments. No theory — just what actually worked.",
    },
    {
      icon: Heart,
      title: "FAITH, IDENTITY, AND WORK",
      desc: 'For faith-based organizations, men\'s groups, deacon boards, and Christian leadership events. What happens when your job title is no longer the answer to "who are you?"',
    },
    {
      icon: BookOpen,
      title: "THE A.R.C.H.I.T.E.C.T. METHOD™",
      desc: "For Christian leadership retreats and values-driven organizations. A nine-step framework for leading and living from biblical identity and conviction.",
    },
    {
      icon: Mic,
      title: "PERSONAL MARKETING FOR OVERLOOKED PROFESSIONALS",
      desc: "For career events, college hospitality programs, and transition-focused audiences. Why talented people stay invisible — and the exact strategy to get seen.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <section className="relative pt-8 md:pt-12 pb-16 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG_URL}
            alt="Paul Woodley speaking"
            className="w-full h-full object-cover object-top opacity-30"
            onError={imgFallback}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-sm mb-4 uppercase tracking-wider">
            <Mic className="w-4 h-4" />
            SPEAKING & KEYNOTES
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight mb-6 text-shadow-hero">
            MESSAGES THAT MOVE PEOPLE FROM STUCK TO FORWARD.
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed text-shadow-hero max-w-3xl mx-auto mb-10">
            Paul brings nearly 30 years of hotel leadership experience, a
            faith-rooted coaching lens, and a direct, honest delivery style to
            every speaking engagement. No fluff. No hype. Real lessons from a
            real journey.
          </p>
          <Button
            size="lg"
            onClick={openChatWidget}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide text-lg h-auto py-4 px-10"
          >
            INQUIRE ABOUT BOOKING PAUL
          </Button>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase mb-4">
              Speaking Topics
            </h2>
            <div className="w-20 h-2 bg-accent mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-white border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold uppercase text-primary mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-sm">
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase mb-6">
            Who Paul Speaks To
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Hotel Leadership Teams",
              "Hospitality Associations",
              "DOSM Roundtables",
              "GM Conferences",
              "Christian Leadership Events",
              "Men's Ministry & Faith Organizations",
              "Career Transition Events",
              "Hotel Ownership Groups",
              "Sales & Revenue Teams",
              "Hospitality College Programs",
              "Deacon Boards & Church Leadership",
            ].map((a, i) => (
              <span
                key={i}
                className="bg-background border border-border px-4 py-2 rounded-full text-sm font-semibold text-foreground/80"
              >
                {a}
              </span>
            ))}
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
            INTERESTED IN HAVING PAUL SPEAK?
          </h2>
          <p className="text-xl text-white/80 mb-10 font-medium max-w-2xl mx-auto">
            For keynotes, breakouts, panels, retreats, or workshops — reach out
            to discuss availability, topic fit, and logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              onClick={openChatWidget}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-auto py-4 px-10 font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto whitespace-normal text-center"
            >
              INQUIRE ABOUT BOOKING
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
