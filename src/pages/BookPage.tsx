import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  BookOpen,
  Check,
  Star,
  ArrowRight,
  Eye,
  Users,
  TrendingUp,
  BarChart3,
  FileText,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DESK_URL, imgFallback } from "@/lib/images";

const AMAZON_URL =
  "https://www.amazon.com/dp/B0HDV8CK6K/ref=sr_1_1?crid=16C1UO1U95MPD&dib=eyJ2IjoiMSJ9.OFuypb_PUjVb9LDlUBscLqbuYP6HgtjyLLJXyp8N-5NWaiq4DqbUOPvDujpB_Tkmw866aHBwNx8ady_gJLe740m3lkAOIxsWQ_qdw_MWLLW-NfHM_ccM9YTODULBSKNi7j1P73W3bISXGGVfWTkNNmyWIR_JqBBb2TdPUC8oSgmP_e1FdxInLqaCUCaAvNRhgz8JeMW4UKThJt1eINHUJjV5lOgDzVN22auOPq_GY9g.bfc3G6dYwSq1KfxaQZuotrg1I_ENXdDPm4EVaI0FuCk&dib_tag=se&keywords=paul%2Bwoodley&qid=1786504295&sprefix=paul%2Bwoodley%2Caps%2C197&sr=8-1";

const BOOK_COVER_URL =
  "https://assets.cdn.filesafe.space/hshXh4CwDZppYoxoTSVo/media/6a7be6b8b0531ec5c0a400a0.jpg";

const BOOK_PRICE = "$34.95";

const COLOURS = [
  {
    name: "Beige",
    desc: "Survival and crisis mode — when the office is in freefall.",
  },
  {
    name: "Purple",
    desc: "Belonging and tradition — the long-tenured account-keeper who holds relationships.",
  },
  {
    name: "Red",
    desc: "Power and action — the aggressive closer who hates process but produces.",
  },
  {
    name: "Blue",
    desc: "Structure and standards — the guardian of process, common among catering managers.",
  },
  {
    name: "Orange",
    desc: "Achievement and metrics — the numbers-driven performer who wants to win.",
  },
  {
    name: "Green",
    desc: "Relationship and fairness — the culture carrier who protects the team.",
  },
  {
    name: "Yellow",
    desc: "Systems thinking — the integrator who designs rather than manages.",
  },
  {
    name: "Turquoise",
    desc: "Long-horizon purpose — mission-driven, relevant to ownership and ESG buyers.",
  },
];

const PILLARS = [
  {
    icon: Users,
    title: "Lead",
    desc: "Build a sales office that performs under pressure. Why a team borrows the leader's belief before its strategy. A rebuild of goal-setting, praise, and redirection — delivered six ways per colour. Dale Carnegie principles for managing department heads you don't formally control. Hiring practices that counter your own bias. Identity and environment design to protect prospecting blocks against urgency.",
  },
  {
    icon: TrendingUp,
    title: "Sell",
    desc: "The operational core. What a full-service group sales office actually sells — total group value, not just rate. Prospecting math derived backward from your room-night gap. The three buyers in every group decision. A six-component proposal structure and five closing techniques, each recolored by buyer type. Negotiation built on one rule: never give a concession, always trade one.",
  },
  {
    icon: MessageSquare,
    title: "Market",
    desc: "Most DOSMs neglect the marketing half of their title. This section separates transient marketing from group marketing — which is usually nobody's actual job. A 60-day marketing audit, lead-generating channels ranked by return, rewriting the same copy six ways for six buyer types, and a framework for defending the marketing budget line-by-line in front of reviewers with different worldviews.",
  },
  {
    icon: BarChart3,
    title: "Measure",
    desc: "The longest and most technical section. Paired leading and lagging goals. The critical distinction between behind budget and behind same time last year. Pace, funnel, and forecast — and a disciplined method for building a forecast that catches the common plug error. The four meetings that run a sales office, with full agendas. The month-end package and the single highest-trust move a DOSM can make.",
  },
];

const KEY_TOPICS = [
  "Why a team borrows the leader's belief before its strategy — and what that means for Monday morning",
  "How to deliver the exact same goal, praise, or correction in six different ways for six different people",
  "The single question to ask before any hard conversation: What is this person afraid of right now?",
  "Prospecting math derived backward from your own room-night gap down to a daily dial target",
  "The three buyers in every group decision — and how to arm the planner to defend your proposal",
  "Never give a concession, always trade one — plus a concession ladder and displacement math",
  "The cheapest revenue in the building: rebooking on the last day of the event, not after",
  "The critical distinction between behind budget and behind same time last year (STLY)",
  "A forecast method that catches the common plug error where unbooked revenue equals the gap",
  "The four meetings that run a sales office — daily business review, weekly sales, funnel, and revenue strategy",
  "44 ready-to-paste AI prompts organized by function — the Recipe Vault from The DOSM Cookbook",
  "Legibility — not being right, but being predictable and honest — as the real product of everything in the book",
];

const APPENDICES = [
  {
    title: "Decoder Cards",
    desc: "Colour framework summaries for quick pre-meeting reference.",
  },
  {
    title: "Report Pantry",
    desc: "Translates illustrative report names to what to look for at any property.",
  },
  {
    title: "First 90 Days Plan",
    desc: "A detailed roadmap for a new DOSM taking over an office.",
  },
  {
    title: "Meeting Scripts",
    desc: "One-page scripts for daily, weekly, funnel, and revenue meetings.",
  },
  {
    title: "Templates",
    desc: "Goal sheets, incentive worksheets, one-on-one sheets, pace reads, forecast registers.",
  },
  {
    title: "Glossary",
    desc: "Hotel-sales terminology defined for leaders stepping into group sales.",
  },
  {
    title: "Recipe Vault",
    desc: "44 AI prompts from The DOSM Cookbook — data integrity, pace diagnostics, forecasting, executive narratives, account retention, prospecting, and marketing.",
  },
];

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Book Cover */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex justify-center md:justify-start order-1 md:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl translate-x-4 translate-y-4" />
                <img
                  src={BOOK_COVER_URL}
                  alt="The Spiral Sales Office book cover by Paul Woodley"
                  className="relative z-10 w-64 md:w-80 rounded-lg shadow-[0_30px_80px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
                  onError={imgFallback}
                />
              </div>
            </motion.div>

            {/* Book Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="order-2 md:order-2 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-semibold text-sm tracking-widest uppercase">
                <BookOpen className="w-4 h-4" />
                New Release
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                The Spiral Sales Office
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-3 leading-relaxed font-light">
                How to Lead, Sell, Market and Measure a Full-Service Hotel Group
                Sales Office — Whatever Colour Your Team Is
              </p>
              <p className="text-2xl font-bold text-accent mb-8">
                {BOOK_PRICE} on Amazon
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-10 h-auto min-h-[60px] py-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg"
                >
                  <a
                    href={AMAZON_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Get it on Amazon
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-1 mt-6 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <span className="text-sm text-white/50 ml-2">
                  Available now on Amazon
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT THE BOOK */}
      <section className="py-24 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight leading-tight">
            A Practical Playbook for Hotel Sales Leaders
          </h2>
          <div className="w-16 h-1 bg-accent mb-10" />
          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed font-light">
            <p>
              <em>The Spiral Sales Office</em> is a field-tested guide for
              anyone responsible for leading, selling, marketing, or measuring a
              full-service hotel group sales office. It is not theory. It is
              built from decades of real hotel sales leadership — the kind where
              the forecast is short, the pace report is questioned, and the team
              needs direction before Monday morning.
            </p>
            <p>
              The book opens with a story: Paul told his team, "I'm not going to
              micromanage anyone, just own your number." He meant it as respect.
              Four people heard it four different ways. Nothing changed for six
              weeks. The lesson: leaders default to speaking from their own
              worldview and assume it lands the same way for everyone.
            </p>
            <p>
              The central premise is simple. A group sales office is a human
              system that happens to produce reports — not the other way around.
              Paul Woodley combines practical hotel sales strategy with the
              Colours of Influence framework to help you understand not just
              what your team should do, but why different people respond
              differently to the same pressure — and how to lead them all
              effectively.
            </p>
            <p>
              The book is structured in five movements:{" "}
              <strong>Lens, Lead, Sell, Market, Measure</strong> — plus a
              substantial appendix section. It is the successor to Woodley's
              earlier book <em>The DOSM Cookbook</em>, with all 44 of its AI
              prompts preserved in Appendix G.
            </p>
          </div>
        </div>
      </section>

      {/* THE LENS — COLOURS OF INFLUENCE */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Eye className="w-7 h-7 text-accent" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
              The Lens: Eight Colours, One Office
            </h2>
          </div>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-white/70 leading-relaxed font-light text-center max-w-3xl mx-auto mb-12">
            Before you can lead, sell, market, or measure, you need to see
            clearly. The book walks through eight developmental colours as they
            show up specifically in a hotel sales office. For each, it reveals
            what they're secretly afraid of, what language lands versus repels,
            and how to deliver the same goal six different ways.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COLOURS.map((colour, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <h3 className="text-lg font-bold text-accent mb-2">
                  {colour.name}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {colour.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-lg text-white/50 font-light italic mt-10 max-w-2xl mx-auto">
            The single technique the book keeps returning to: before any hard
            conversation, ask "what is this person afraid of right now?"
          </p>
        </div>
      </section>

      {/* FOUR PILLARS — EXPANDED */}
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight text-center">
            Four Pillars. One Sales Office.
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-16" />
          <div className="grid md:grid-cols-2 gap-8">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KEY TOPICS */}
      <section className="py-24 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight leading-tight">
            What You'll Learn
          </h2>
          <div className="w-16 h-1 bg-accent mb-10" />
          <ul className="space-y-4">
            {KEY_TOPICS.map((topic, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 text-lg text-foreground/80 leading-relaxed font-light"
              >
                <Check className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span>{topic}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* APPENDICES / RECIPE VAULT */}
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <FileText className="w-7 h-7 text-accent" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight text-center">
              The Appendices: A Working Reference Layer
            </h2>
          </div>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-foreground/70 leading-relaxed font-light text-center max-w-3xl mx-auto mb-12">
            The book doesn't end at the conclusion. Seven appendices give you a
            practical reference layer you'll return to long after the first
            read.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {APPENDICES.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-border/50"
              >
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                  {app.title === "Recipe Vault" && (
                    <Sparkles className="w-4 h-4 text-accent" />
                  )}
                  {app.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {app.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CONCEPT — LEGIBILITY */}
      <section className="py-24 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight leading-tight">
            The Real Product: Legibility
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-6">
            The book closes with a simple argument: legibility — not being
            right, but being predictable and honest with your team, your GM, and
            your regional — is the real product of everything in the book.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-8">
            It ends with a final mirror exercise: name the person you understand
            least, the deal you believe least, and the month you're most worried
            about. Those are your first three Monday-morning conversations.
          </p>
          <div className="inline-block px-6 py-4 bg-muted/50 rounded-xl border border-border/50">
            <p className="text-xl font-medium text-primary italic">
              "A group sales office is a human system that happens to produce
              reports — not the other way around."
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT THE AUTHOR */}
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight">
                About the Author
              </h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <div className="space-y-5 text-lg text-foreground/80 leading-relaxed font-light mb-8">
                <p>
                  Paul Woodley has spent nearly three decades inside hotels —
                  carrying sales numbers, leading teams, rebuilding momentum,
                  and sitting in the chair when the pressure was not
                  theoretical.
                </p>
                <p>
                  His experience spans hotel operations, group sales, catering
                  strategy, revenue conversations, CRM reactivation,
                  distressed-asset recovery, and hotel sales leadership. As a
                  Certified ProCoach and Christian leadership coach, Paul brings
                  a unique blend of practical hotel sales expertise and
                  human-centered leadership development.
                </p>
                <p className="font-medium text-primary">
                  He coaches the leader — not the spreadsheet. But he
                  understands the spreadsheet.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-10 h-auto min-h-[60px] py-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg"
              >
                <Link to="/about">
                  Read Paul's Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl translate-x-4 translate-y-4" />
                <img
                  src={DESK_URL}
                  alt="Paul Woodley, author of The Spiral Sales Office"
                  className="relative z-10 w-full rounded-2xl shadow-xl object-cover aspect-[4/5] border border-border/50"
                  onError={imgFallback}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Get Your Copy Today
          </h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
            Available now on Amazon for {BOOK_PRICE}.
          </p>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-12 h-auto min-h-[64px] py-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg"
          >
            <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Get it on Amazon
            </a>
          </Button>
          <p className="text-sm text-white/40 mt-6">
            Also interested in 1:1 coaching?{" "}
            <Link
              to="/challenge"
              className="text-accent hover:text-accent/80 font-medium underline underline-offset-4"
            >
              Start the Free 5-Day Challenge
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
