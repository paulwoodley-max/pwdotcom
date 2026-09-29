import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import {
  ChevronLeft,
  BookOpen,
  Shield,
  Users,
  Briefcase,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  LOGO_URL,
  PROCOACH_URL,
  GCA_URL,
  HERO_BG_URL,
  WOODLEY_ROAD_URL,
  BIBLE_URL,
  WEDDING_CEREMONY_URL,
  FAMILY_DRESSED_URL,
  ELIJAH_URL,
  ROMAN_SOLDIER_URL,
  COVID_LEADERSHIP_URL,
  ARK_ENCOUNTER_URL,
  DESK_URL,
  imgFallback,
} from "@/lib/images";

const TRACKING_ID = "tk_329cd5260fad40de8037e39108281e00";
const LOCATION_ID = "hshXh4CwDZppYoxoTSVo";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-bold text-xs mb-6 uppercase tracking-widest">
      {children}
    </div>
  );
}

function Scripture({ reference, text }: { reference: string; text: string }) {
  return (
    <blockquote className="my-8 pl-6 border-l-4 border-accent bg-muted/40 py-5 pr-6 rounded-r-xl">
      <p className="text-base italic text-foreground/80 leading-relaxed mb-2">
        "{text}"
      </p>
      <cite className="text-sm font-bold text-accent not-italic uppercase tracking-wider">
        {reference}
      </cite>
    </blockquote>
  );
}

export default function About() {
  const handleBookingTracking = () => {
    fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
      method: "POST",
      headers: { "Content-Type": "application/json", version: "2021-07-28" },
      body: JSON.stringify({
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "About Page CTA - Book Strategy Call",
        formData: {},
        formLabels: {},
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        trackingId: TRACKING_ID,
        locationId: LOCATION_ID,
        sessionId: crypto.randomUUID(),
        properties: {
          deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
            ? "mobile"
            : "desktop",
        },
      }),
    }).catch(() => {});
  };

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
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Navigation */}
      <Navigation />

      {/* Hero / Opening Identity Section */}
      <section className="relative pt-8 md:pt-12 pb-16 md:pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG_URL}
            alt="Paul Woodley"
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 relative z-10 pb-16 md:pb-20 max-w-4xl"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 font-semibold text-sm uppercase tracking-wider transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <SectionLabel>
            COACH · AUTHOR · SPEAKER · HOTELIER · CHRISTIAN · HUSBAND · FATHER
          </SectionLabel>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase leading-[1.05] mb-8 tracking-tight text-shadow-hero">
            Who Said You
            <br />
            <span className="text-accent">Were Naked?</span>
          </h1>
          <p className="text-lg md:text-2xl text8-white/85 font-light leading-relaxed max-w-2xl text-shadow-hero">
            My name is Paul Woodley, and my story is not simply the story of a
            hotelier, entrepreneur, author, investor, or coach. It is the story
            of a man learning that identity is found in truth.
          </p>
        </motion.div>
      </section>

      {/* Quick Identity Bar */}
      <section className="bg-accent py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-center max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="w5 h-5 shrink-0" />,
                label: "Christian Leadership Coach",
              },
              {
                icon: <Briefcase className="w-5 h-5 shrink-0" />,
                label: "Hotel Sales Leadership Coach",
              },
              {
                icon: <Users className="w-5 h-5 shrink-0" />,
                label: "Husband & Father",
              },
              {
                icon: <BookOpen className="w-5 h-5 shrink-0" />,
                label: "Author & Speaker",
              },
              {
                icon: <Briefcase className="w-5 h-5 shrink-0" />,
                label: "Hotelier & Entrepreneur",
              },
              {
                icon: <Briefcase className="w-5 h-5 shrink-0" />,
                label: "Founder, Hotel Response",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider"
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tight mb-8 leading-tight text-center">
            The Question Underneath
          </h2>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            For much of my life, I was responsible before I was free.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I learned early how to carry weight, read a room, make things work,
            and keep moving when people were counting on me. In leadership, that
            kind of responsibility can look strong. It can even be rewarded. You
            become dependable. You solve problems. You protect revenue. You
            rebuild teams. You answer the call.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            But there is often a deeper question underneath the pressure.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            For me, that question came from Genesis:
          </p>
          <p className="text-xl text-primary font-bold italic mb-6 leading-relaxed pl-6 border-l-4 border-accent">
            Who told you that you were naked?
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Over time, I began hearing it in other ways.
          </p>
          <ul className="text-lg text-foreground/80 mb-6 leading-relaxed space-y-2 list-disc pl-6 font-medium italic">
            <li>Who told you that you were not enough?</li>
            <li>Who told you that poverty defined you?</li>
            <li>Who told you that achievement could save you?</li>
            <li>Who told you that shame was your identity?</li>
            <li>Who told you that you had to carry everything alone?</li>
          </ul>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            That question has followed me through my faith, my family, my
            career, and my coaching. It is also the question I often hear
            underneath the words of Christian sales leaders who are overwhelmed,
            anxious, behind pace, or quietly wondering whether they still have
            what it takes.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Because the problem is rarely just the number.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            It is what the number starts saying to you.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            When the forecast is behind, the pipeline feels thin, leadership
            wants answers, and the team is stretched, something deeper can begin
            talking. Fear talks. Shame talks. Old stories talk.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Before long, a capable leader is not just looking at a sales report.
            He is questioning himself.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-bold">
            I understand that place.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-muted/30 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <h3 className="text-2xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-6 text-center">
            Early Roots
          </h3>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I was born in New York, the oldest of four children. Responsibility
            found me early. When I was seven years old, my family was evicted on
            Christmas Day while we were living on Long Island. I did not
            understand every adult detail, but I understood enough. I understood
            that stability could disappear. I understood that one wrong move
            could put you outside.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            That kind of memory does not stay in childhood. It follows you.
          </p>
          <motion.div className="my-10 flex justify-center">
            <img
              src={WOODLEY_ROAD_URL}
              alt="Woodley Road NW Street Sign"
              className="w-full max-w-md aspect-video rounded-2xl shadow-lg border border-border/50 object-cover"
            />
          </motion.div>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Later, while living in the Bronx, my father helped me get into a
            private boarding school in Connecticut. That changed the direction
            of my life. I went from street pressure to structure, discipline,
            and opportunity.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-bold">
            I became the high-achieving underdog.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I graduated with honors, became a dorm president, captained teams,
            and became an Eagle Scout. Those years gave me discipline,
            resilience, and leadership. But they also reinforced something I
            would not fully understand until much later.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-bold italic">
            Achievement can shape you, but it cannot save you.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <h3 className="text-2xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-6 text-center">
            The Path Into Hotels
          </h3>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            After studying business in Boston, I found my way into hospitality.
            Hotels became one of the great training grounds of my life. I
            started in operations, including overnight and front office
            leadership. Anyone who has worked in hotels knows the building never
            really sleeps. People arrive tired, frustrated, excited, angry,
            afraid, lost, hopeful, and disappointed. Someone has to stay calm.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Hotels taught me people. They taught me pressure. They taught me
            service, standards, recovery, urgency, sales, and rhythm. As my
            career grew, I became known for responsibility, production,
            problem-solving, and leadership under pressure.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            But I was still carrying parts of my life God had not yet healed.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I had religious memory, but not gospel clarity. I believed in God,
            but I did not yet understand the freedom that comes when a man stops
            trying to save himself through performance.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-muted/30 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <h3 className="text-2xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-6 text-center">
            The Breaking Point
          </h3>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            That breaking point came years later. I was living in a major West
            Coast city and working in hospitality. Professionally, I had
            responsibilities. Personally, I was unraveling. After a destructive
            financial decision, I came home to an eviction notice on my door. My
            electricity was off. I had no money, no clear plan, and no idea what
            to do next.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            In that moment, I was not just a grown man in trouble.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-bold">
            I was seven years old again.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            The old fear came rushing back. The Christmas Day eviction was no
            longer a memory. It was alive in the room with me.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I was sitting in a dark apartment with no lights, no money, and no
            answers.
          </p>
          <motion.div className="my-10 flex justify-center">
            <img
              src={BIBLE_URL}
              alt="MacArthur Study Bible"
              className="w-full max-w-md aspect-video rounded-2xl shadow-lg border border-border/50 object-cover"
            />
          </motion.div>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            The only thing I half-remembered from my youth was Psalm 23. So I
            found an old Bible and began reading the Psalms by lamp.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-bold">
            That apartment did not save me. But God used it to get my attention.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <h3 className="text-2xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-6 text-center">
            Grace and a New Direction
          </h3>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Eventually, the Lord began redirecting my life. I met the woman who
            would become my wife, and through that relationship I found my way
            back into church after many years away. That is where I heard the
            gospel clearly.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Salvation was not achievement. It was not being impressive. It was
            not cleaning myself up enough to be accepted by God.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-bold">
            It was Christ.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I saw my sin. I stopped hiding behind responsibility. I stopped
            confusing performance with surrender. I asked for forgiveness, and I
            wept.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            That season changed the foundation of my life.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Not because life became easy. It did not. But because I no longer
            had to build my identity on fear, poverty, shame, survival, or the
            approval of other people.
          </p>
          <motion.div className="my-10 flex justify-center">
            <img
              src={WEDDING_CEREMONY_URL}
              alt="Wedding Ceremony"
              className="w-full max-w-md aspect-video rounded-2xl shadow-lg border border-border/50 object-cover object-center"
            />
          </motion.div>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Soon after getting married, my wife and I packed everything we owned
            and drove across the country with our two young children. We did not
            have everything figured out. We simply believed God was directing
            our steps, and we moved.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-muted/30 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <h3 className="text-2xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-6 text-center">
            Hotel Sales Leadership
          </h3>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            That new chapter grew into years of hotel sales leadership, revenue
            strategy, team building, pipeline recovery, and leading through
            pressure. I learned what it feels like to be behind pace with people
            waiting for answers. I learned the weight of protecting revenue when
            the market is uncertain, the team is thin, and the forecast does not
            say what everyone hoped it would say.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I also learned that sales leadership is never only about sales.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-bold">
            It is about what a leader does when pressure starts talking.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            A sales leader can know the tactics and still lose clarity. He can
            know how to prospect, follow up, qualify, negotiate, and close, yet
            still feel stuck when anxiety takes over. He can lead a team meeting
            in the morning and sit in his car afterward wondering whether he is
            failing.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I know that place.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            That is why I do not coach from theory. I coach from years of
            carrying numbers, rebuilding momentum, leading people, making hard
            calls, and learning the difference between pressure and identity.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-bold italic border-l-4 border-accent pl-4">
            Pressure is real. But pressure is not lord.
            <br />A number can tell you where you are. It cannot tell you who
            you are.
          </p>

          <h3 className="text-2xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-6 mt-16 text-center">
            Entrepreneurship & Stewardship
          </h3>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Alongside my hotel career, I also began building outside of my job.
            I became an entrepreneur, a real estate investor, an author, and a
            builder of practical systems. I studied money, ownership, sales,
            marketing, leverage, technology, and automation because I learned
            the hard way that experience should not be wasted.
          </p>
          <motion.div className="my-10 flex justify-center">
            <img
              src={ARK_ENCOUNTER_URL}
              alt="Paul Woodley at the Ark Encounter"
              className="w-full max-w-md aspect-video rounded-2xl shadow-lg border border-border/50 object-cover"
            />
          </motion.div>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            That word matters to me: stewardship.
          </p>
          <ul className="text-lg text-foreground/80 mb-6 leading-relaxed space-y-2 list-disc pl-6 font-medium italic">
            <li>What has God placed in your hands?</li>
            <li>What experience have you been underestimating?</li>
            <li>What pressure has been forming you?</li>
            <li>
              What opportunity have you delayed because fear sounded more
              convincing than truth?
            </li>
          </ul>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Those questions shape the way I work with leaders.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <h3 className="text-2xl md:text-4xl font-extrabold text-primary uppercase tracking-tight mb-6 text-center">
            Ministry and Truth
          </h3>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            My faith is central to my life, but I do not believe faith-based
            leadership means pretending to have everything together. I am not
            interested in religious performance. I am interested in truth.
          </p>
          <ul className="text-lg text-foreground/80 mb-6 leading-relaxed space-y-2 list-disc pl-6 font-medium italic">
            <li>The truth about fear.</li>
            <li>The truth about avoidance.</li>
            <li>The truth about ambition.</li>
            <li>The truth about responsibility.</li>
            <li>
              The truth about the way a man can be outwardly successful and
              inwardly exhausted.
            </li>
          </ul>
          <motion.div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src={ELIJAH_URL}
              alt="Paul Woodley dressed as Elijah"
              className="w-full aspect-video rounded-2xl shadow-lg border border-border/50 object-cover object-center"
            />
            <img
              src={ROMAN_SOLDIER_URL}
              alt="Paul Woodley dressed as a Roman soldier"
              className="w-full aspect-video rounded-2xl shadow-lg border border-border/50 object-cover object-top"
            />
          </motion.div>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Over the years, I have served in church leadership, led Bible
            studies, taught Scripture, and walked with people through difficult
            seasons. I have also led in business environments where results
            mattered, revenue mattered, communication mattered, and decisions
            had consequences.
          </p>
          <motion.div className="my-10 flex justify-center">
            <img
              src={COVID_LEADERSHIP_URL}
              alt="Serving during COVID"
              className="w-full max-w-md aspect-video rounded-2xl shadow-lg border border-border/50 object-cover"
            />
          </motion.div>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-bold">
            Those two worlds are not separate for me.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Faith should not make a leader vague. It should make him more
            honest, more grounded, more responsible, and more willing to take
            the next right step.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-muted/30 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tight mb-6 text-center">
            The Next <span className="text-accent">Chapter</span>
          </h3>
          <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
            Today, I help Christian sales leaders, hotel professionals,
            entrepreneurs, and high-responsibility people who feel stuck,
            anxious, overwhelmed, or behind pace.
          </p>
          <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
            Many of them are capable. Many are experienced. Many are respected.
            They do not need hype. They need clarity. They need someone to help
            them sort through the noise, tell the truth, and move again.
          </p>
          <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
            Sometimes the conversation begins with the pipeline. Sometimes it
            begins with career pressure. Sometimes it begins with confidence.
            Sometimes it begins with a man admitting, maybe for the first time,
            that he is tired of carrying everything alone.
          </p>
          <p className="text-xl text-foreground/80 mb-6 leading-relaxed font-bold">
            Wherever it begins, the work usually moves toward the question
            underneath.
          </p>
          <ul className="text-xl text-foreground/90 mb-6 leading-relaxed space-y-3 list-none font-medium italic">
            <li>Who told you this hard season defines you?</li>
            <li>Who told you one missed number means you are finished?</li>
            <li>Who told you that asking for help means you are weak?</li>
            <li>
              Who told you that you have to keep proving your worth through
              pressure?
            </li>
          </ul>
          <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
            Once that false story is exposed, a leader can begin to see clearly
            again. Then we get practical. We look at what is actually happening.
            We separate facts from fear. We name what has been avoided. We
            identify the next responsible action.
          </p>
          <p className="text-xl text-foreground/80 mb-6 leading-relaxed font-bold">
            The goal is not to escape pressure.
            <br />
            The goal is to stop being owned by it.
          </p>
          <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
            My mission is to help people become better stewards of their
            experience, gifts, responsibilities, and opportunities.
          </p>
          <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
            I believe your past has value. I believe your pressure can produce
            wisdom. I believe your current season is not the end of your story.
            I believe God often uses the very places we wanted to hide to show
            us what still needs to be healed, surrendered, strengthened, and put
            to work.
          </p>
          <p className="text-xl text-foreground/80 mb-10 leading-relaxed">
            If you are a Christian sales leader who feels overwhelmed, anxious,
            behind pace, or unsure what to do next, you do not have to figure it
            out alone.
          </p>
          <p className="text-xl text-foreground/80 mb-10 leading-relaxed font-bold">
            Sometimes breakthrough begins with one honest conversation.
          </p>
          <p className="text-xl text-foreground/80 mb-10 leading-relaxed">
            One moment where you stop performing long enough to tell the truth.
            <br />
            One step back toward clarity, responsibility, and faith.
          </p>
          <p className="text-2xl text-accent font-bold mb-10 leading-relaxed uppercase tracking-widest text-center">
            That may be where your next chapter begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-auto py-4 px-10 font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto whitespace-normal text-center"
            >
              <Link to="/challenge" onClick={() => handleBookingTracking()}>
                JOIN THE FREE 1:1 5-DAY CHALLENGE
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground text-lg h-auto py-4 px-10 font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto whitespace-normal text-center"
            >
              <a
                href="tel:6785017256"
                className="flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" /> CALL/TEXT (678) 501-7256
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
