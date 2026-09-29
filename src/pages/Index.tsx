import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Building2 } from "lucide-react";
import { HERO_BG_URL, DESK_URL, COACHING_URL, imgFallback } from "@/lib/images";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={HERO_BG_URL}
            alt="Paul Woodley in a modern lobby"
            className="w-full h-full object-cover"
            onError={imgFallback}
          />
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-semibold text-sm tracking-widest uppercase">
              Christ-Centered Coaching for Hotel Leaders
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-8 tracking-tight">
              Successful on the Outside. Unsettled on the Inside.
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed font-light max-w-3xl">
              I coach experienced hotel leaders who look like they have it
              together but privately feel anxious, stuck, or quietly wondering
              whether the next ten years should look like the last. Together we
              move from pressure to peace, clarity, and a plan — without
              throwing away everything you've built.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-10 h-auto min-h-[64px] py-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg"
              >
                <Link to="/challenge">Start My Free 5-Day 1:1 Challenge</Link>
              </Button>
            </div>
            <p className="text-sm text-white/85 font-medium mt-6 max-w-xl leading-relaxed">
              Do Not Be Anxious: A 5-Day Matthew 6 Challenge. One-to-one. Five
              focused conversations from anxiety to truth, identity,
              stewardship, and action.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — RECOGNITION */}
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 tracking-tight leading-tight">
            You're Not Failing. You're Living Too Much at Effect.
          </h2>
          <div className="w-16 h-1 bg-accent mb-10"></div>
          <div className="space-y-5 text-lg text-foreground/90 leading-relaxed font-light">
            <p>
              You've built a credible career. Earned a strong income. Carried
              real leadership. Fifteen, twenty, thirty years in hospitality —
              and the respect that comes with it.
            </p>
            <p>
              But somewhere underneath, the questions have gotten heavier than
              the logistics.
            </p>
            <p>
              "There has to be more than this." "If I'm not a GM, a DOSM, an
              executive — who am I?" "I know I should make a change, but I don't
              know what move to make." "I know God tells me not to be anxious,
              but I'm not living that way."
            </p>
            <p>
              The deeper problem isn't that you need a new job. It's that you've
              become overly identified with your title, your income, and your
              ability to handle pressure. You're reacting to circumstances,
              fear, money, and other people's expectations — instead of taking
              ownership of what comes next.
            </p>
            <p className="font-semibold text-primary text-2xl border-l-4 border-accent pl-6 py-4 my-8 bg-white shadow-sm rounded-r-xl italic">
              "I came in overwhelmed and stuck. I want to leave with peace,
              clarity, and a plan."
            </p>
            <p className="text-xl font-medium text-primary">
              That's where I coach.
            </p>
            <p>
              Not a recruiter pushing you toward the next title. Not a life
              coach who's never run a hotel. A coach who understands both the
              leader you've been and the next chapter God has for you.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DIFFERENTIATION */}
      <section className="py-24 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight leading-tight">
                I Coach the Leader at the Crossroads.
              </h2>
              <p className="text-2xl text-accent font-bold mb-6">
                Not Just the Next Job Posting.
              </p>
              <div className="w-16 h-1 bg-accent mb-8"></div>
              <p className="text-lg text-foreground/90 leading-relaxed font-light mb-6">
                I understand group pace, pipeline, forecast, prospecting,
                conversion, account production, revenue meetings, GM
                expectations, ownership pressure, team performance, hotel
                politics and career uncertainty — because I've lived it.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed font-light">
                But the next chapter isn't a spreadsheet problem. It's a
                stewardship question: how do you take fifteen-plus years of
                hard-won experience and put it to work for the freedom, income,
                and future God has for you — without throwing it away or running
                on empty?
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl translate-x-4 translate-y-4"></div>
              <img
                src={COACHING_URL}
                alt="Paul Woodley coaching"
                className="relative z-10 w-full rounded-2xl shadow-xl object-cover aspect-[4/5] border border-border/50"
                onError={imgFallback}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE 5-DAY FRAMEWORK */}
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight">
              Do Not Be Anxious: A 5-Day Matthew 6 Challenge
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-foreground/85 leading-relaxed font-light max-w-3xl mx-auto">
              A Christ-centered, one-to-one coaching experience that moves you
              from pressure to peace in five focused days —{" "}
              <span className="font-semibold text-primary">
                Anxiety → Truth → Identity → Stewardship → Action.
              </span>
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                day: "Day 1",
                title: "Do Not Be Anxious",
                verse: "Matthew 6:25–34",
                desc: "Identify what's creating anxiety, separate facts from fear, and begin shifting from circumstance-driven thinking to trust in God.",
              },
              {
                day: "Day 2",
                title: "Who Told You?",
                verse: "Genesis 3:11",
                desc: "Challenge imposed, inherited, or self-created beliefs. Ask the question underneath: Who told you that was true?",
              },
              {
                day: "Day 3",
                title: "Who Are You in Christ?",
                verse: "Biblical Identity",
                desc: "Build an identity framework that replaces title-based, performance-based, or fear-based identity with who God says you are.",
              },
              {
                day: "Day 4",
                title: "Seek First the Kingdom",
                verse: "Matthew 6:33",
                desc: "Shift from protecting what you have to asking: What has God entrusted to me, and how should I steward it?",
              },
              {
                day: "Day 5",
                title: "Make the Plan. Take the Step.",
                verse: "Proverbs Principles",
                desc: "Build a practical next-step plan and complete one courageous conversation or action you've been avoiding.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-border/50 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-extrabold mb-4">
                  {i + 1}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                  {item.day}
                </span>
                <h3 className="font-bold text-primary text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground/70 italic mb-3">
                  {item.verse}
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-foreground/85 font-light mt-12 italic max-w-2xl mx-auto">
            "I came in overwhelmed and stuck, and I left with peace, clarity,
            and a plan."
          </p>
        </div>
      </section>

      {/* SECTION 5 — CHRISTIAN FOUNDATION */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight leading-tight">
            Your Title Is Not Your Identity.
            <br />
            Your Experience Is Not Wasted.
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-10"></div>
          <div className="space-y-6 text-lg text-white/95 leading-relaxed font-light max-w-3xl mx-auto text-left">
            <p>
              My coaching is grounded in biblical truth, stewardship, personal
              responsibility, grace, integrity, courage, and wise action —
              living intentionally rather than reactively.
            </p>
            <p>
              Faith doesn't guarantee a specific career outcome. It gives you a
              foundation to stand on when the pressure is real, the questions
              are heavy, and the next step isn't obvious. The goal isn't to
              escape responsibility — it's to steward everything God has built
              in you for the chapter ahead.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY PAUL */}
      <section className="py-24 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight">
                Why I Understand This Pressure
              </h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>
              <div className="space-y-5 text-lg text-foreground/90 leading-relaxed font-light mb-8">
                <p>
                  I didn't become a coach and then choose hospitality as a
                  niche. I came out of hospitality.
                </p>
                <p>
                  I've spent decades inside hotels, carrying sales and
                  leadership responsibility. I've sat in the chair when the
                  forecast was short, group pace needed movement, leadership
                  wanted answers, teams needed direction, difficult decisions
                  had to be made, careers felt uncertain, and business pressure
                  followed me home.
                </p>
                <p>
                  I know what it is to wonder whether the next chapter is
                  something new — and to be afraid of being wrong about it. I
                  also know what it is to discover that the experience you
                  thought was holding you back is exactly what God wants to
                  steward forward.
                </p>
                <p className="font-medium text-primary">
                  That's why my coaching doesn't live in theory. I understand
                  the career you've built — and I'm interested in the leader God
                  is building for what comes next.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Nearly 30 years in hospitality",
                  "DOS/DOSM-level leadership",
                  "Certified ProCoach",
                  "Christian leadership coach",
                ].map((cred, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium text-primary border border-border/50"
                  >
                    {cred}
                  </span>
                ))}
              </div>
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-10 h-auto min-h-[60px] py-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg"
              >
                <Link to="/challenge">Start My Free 5-Day 1:1 Challenge</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl translate-x-4 translate-y-4"></div>
                <img
                  src={DESK_URL}
                  alt="Paul Woodley at his desk"
                  className="relative z-10 w-full rounded-2xl shadow-xl object-cover aspect-[4/5] border border-border/50"
                  onError={imgFallback}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — COACHING PHILOSOPHY */}
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight text-center">
            From Effect to Cause
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-16"></div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { step: "Pause the Pressure", desc: "Separate facts from fear." },
              {
                step: "Probe the Belief",
                desc: "Name the story underneath.",
              },
              {
                step: "Plant Your Identity",
                desc: "Your title isn't who you are.",
              },
              {
                step: "Prioritize the Kingdom",
                desc: "Steward, don't just endure.",
              },
              { step: "Plan the Next Step", desc: "Act with courage." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-border/50 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-xl font-extrabold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">
                  {item.step}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto space-y-3 text-lg text-foreground/85 leading-relaxed font-light text-center">
            <p>
              Coaching helps you distinguish facts from fear, responsibility
              from blame, your title from your identity, activity from
              meaningful action, what you can control from what you cannot, and
              reaction from intentional leadership.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — PROOF */}
      <section className="py-24 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight text-center">
            What Changes
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-16"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Peace",
                desc: "Calm that isn't dependent on the pace report, the title, or the next quarter's number.",
              },
              {
                title: "Clarity",
                desc: "Seeing the next chapter as it actually is — not as fear, fatigue, or other people's approval describe it.",
              },
              {
                title: "Courage",
                desc: "The confidence to take the next responsible step — and a plan to steward your experience forward.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL INVITATION */}
      <section className="py-24 bg-accent text-primary text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            You Don't Have to Have the Whole Next Chapter Figured Out Today.
          </h2>
          <p className="text-xl text-primary/90 mb-12 leading-relaxed font-medium">
            You do need enough peace and clarity to take the next right step.
          </p>
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white hover:text-white font-bold uppercase tracking-wide rounded-sm px-12 h-auto min-h-[64px] py-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg mb-6"
          >
            <Link to="/challenge">Start My Free 5-Day 1:1 Challenge</Link>
          </Button>
          <p className="text-primary/85 font-medium">
            Five days. One-to-one. One real situation. Peace, clarity, and a
            plan.
          </p>
        </div>
      </section>

      {/* SECONDARY — MORE FROM PAUL */}
      <section className="py-20 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary/85 mb-10 tracking-tight text-center">
            More From Paul
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Books</h3>
              </div>
              <p className="text-foreground/85 mb-2 flex-grow">
                Ideas on hotel sales, leadership, influence and human
                performance.
              </p>
              <p className="text-sm text-foreground/70 italic mb-6">
                The Spiral Sales Office — Available now on Amazon
              </p>
              <Button
                variant="outline"
                asChild
                className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wide self-start"
              >
                <Link to="/book">View the Book</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">
                  Hotel Response
                </h3>
              </div>
              <p className="text-foreground/85 mb-6 flex-grow">
                Revenue conversion systems and hotel sales solutions for
                properties, ownership groups and hotel leadership teams.
              </p>
              <Button
                variant="outline"
                asChild
                className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wide self-start"
              >
                <Link to="/hotel-response">Visit Hotel Response</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
