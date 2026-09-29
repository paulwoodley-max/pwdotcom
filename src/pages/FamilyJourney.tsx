import { Button } from "@/components/ui/button";
import { ChevronLeft, Heart, Shield, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  LOGO_URL,
  PROCOACH_URL,
  GCA_URL,
  FATHERS_DAY_URL,
  WEDDING_VENUE_URL,
  imgFallback,
} from "@/lib/images";

// Hero background reuses the Father's Day photo
const HERO_BG_URL = FATHERS_DAY_URL;

export default function FamilyJourney() {
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

      {/* Hero Section */}
      <section className="relative pt-8 md:pt-12 pb-16 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG_URL}
            alt="Paul Woodley's Family"
            className="w-full h-full object-cover opacity-20"
            onError={imgFallback}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight mb-6 text-shadow-hero">
            My Family's <span className="text-accent">Journey</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed text-shadow-hero">
            A deep dive into our personal family story, testimonies, and why
            true leadership begins at home.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <p className="text-2xl text-foreground/90 font-medium mb-8 leading-relaxed">
                Before I am a coach, a hotel sales leader, or a Bible teacher, I
                am a husband and a father.
              </p>

              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={FATHERS_DAY_URL}
                alt="Paul Woodley and his family on Father's Day"
                className="w-full h-auto rounded-xl shadow-md mb-8 object-cover aspect-[16/9] md:aspect-auto"
                onError={imgFallback}
              />

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                My family has been the proving ground of everything I now teach.
                What I share with clients did not begin as a framework on paper.
                It began as a personal rebuilding through prayer, repentance,
                Scripture, faith-filled decisions, and the grace of God.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                My testimony did not end with conversion. That was the beginning
                of realignment. In July 2009, after years of pride, poor
                decisions, and spiritual blindness, the Lord brought me to the
                end of myself and opened my eyes to my need for Christ. What
                followed was not merely a spiritual moment, but a new way of
                living, deciding, leading, and building.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                As the Lord renewed my mind, He began changing how I made
                decisions. I learned that peace does not come from having
                everything figured out. It comes from trusting God enough to
                obey Him. That truth shaped my marriage, my work, my parenting,
                and the direction of our family.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                One of the first major decisions I made was to reorder my career
                to honor my marriage. I stepped away from late-evening hotel
                operations work and started over in a sales support role so I
                could pursue a more stable family life. On paper, it looked like
                a step backward. In reality, it was alignment. From that humble
                reset, the Lord eventually opened the door for me to become a
                Director of Sales and Marketing for major full-service hotels in
                Atlanta, leading diverse teams across multiple socio-economic
                backgrounds and helping steward hotel business units with
                budgets exceeding $20 million.
              </p>

              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                My wife and I made other faith-based decisions the same way. We
                got married with limited resources. We moved to Georgia because
                we believed it was best for our family, even without a job lined
                up. We chose Christian education for our children when the
                numbers did not seem to support it. Again and again, God taught
                us to move by conviction, not fear.
              </p>

              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={WEDDING_VENUE_URL}
                alt="Paul Woodley's wedding venue"
                className="w-full h-auto rounded-xl shadow-md mb-8 object-cover aspect-[16/9] md:aspect-auto"
                onError={imgFallback}
              />

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Along the way, I stayed in learning mode. I became resourceful.
                I started businesses, sold digital products, eBooks, and
                physical products online. I learned Amazon FBA, sourcing,
                logistics, business structure, asset protection, and tax
                strategy. Over time, that growth led to owning multiple LLCs and
                becoming a solopreneur. What I was really learning was how to
                stop thinking like a victim and start living like a steward.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Over time, the Lord also clarified my spiritual calling. After
                evaluating my spiritual gifts, the one that stood out most
                clearly was exhortation. That helped me understand something
                important: I was not merely called to encourage people
                emotionally, but to call them upward through truth. I came to
                see that teaching the Bible was a central part of my assignment.
                While I have never felt led to pastor a church, I have felt
                deeply led to serve as an evangelist and an expositor of God’s
                Word.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                That calling led to running a Wednesday night Bible study at my
                church for 12 years, teaching verse by verse through books like
                Hebrews, Galatians, Mark, and nearly all of Revelation. In time,
                I became a deacon, and later had the privilege of serving as
                Deacon Chair during COVID, helping our church navigate one of
                the most difficult seasons many churches faced. That season
                taught me even more about leadership under pressure, servant
                authority, and the necessity of truth anchored in grace.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Those years of teaching, discipling, leading, and walking people
                through real-life challenges also shaped how I became a coach. I
                began to see that many people do not simply need motivation.
                They need clarity. They need truth. They need help identifying
                the pattern beneath the fear, confusion, inconsistency, or false
                belief. They need someone who can help them rebuild from the
                inside out.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                That realization became part of the foundation of the{" "}
                <strong>ARCHITECT Method</strong>.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                The ARCHITECT Method is a biblical, results-driven framework for
                renewing the mind, aligning identity with truth, and producing
                results through disciplined, Spirit-led action. It is built on a
                simple conviction: people are not merely stuck; they are
                patterned. Those patterns can be named, exposed, renewed, and
                replaced through the Word of God, the work of the Holy Spirit,
                and obedient action. Its operating spine is simple:{" "}
                <strong>Clarity. Truth. Action.</strong> Every session. Every
                time.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                The method follows a clear rhythm: clarify what is really
                happening, expose the pattern beneath it, identify the belief
                driving it, reframe it with biblical truth, and move in concrete
                obedience. It is designed to help people rebuild life from the
                inside out so nothing is wasted and everything can be redeemed
                under the authority of Christ.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                My coaching background includes professional training and
                certifications in coaching and NLP, along with deep study in how
                language, thought patterns, emotion, memory, and internal belief
                systems influence behavior. But everything I use is constrained
                by the Word of God and submitted to the order God built into His
                world. I do not treat technique as savior, and I do not treat
                the mind as sovereign. The source of change is Christ, the
                authority for transformation is the Spirit and the Word, and the
                end goal is Christlikeness, not self-actualization.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                In time, the Lord also deepened my understanding of stewardship,
                investing, and increase through Scripture. Through passages like
                the parable of the talents, the shrewd manager, “cast your bread
                upon many waters,” “be anxious for nothing,” “give to God what
                belongs to God,” the warning that unrighteous wealth will fail,
                and “drink water from your own cistern,” I came to see
                stewardship more clearly. As I understand it, believers are
                called to be faithful evangelists and faithful stewards. True
                stewardship seeks increase under God’s authority, not for
                vanity, but for responsibility. From the beginning, God’s
                command was to be fruitful and multiply.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Today, by the grace of God, my wife and I have two children,
                ages 13 and 15. Both have come to know the Lord and were each
                baptized at age 8. My daughter is a competitive cheerleader and
                an artist. My son plays travel baseball and serves on the drums
                at our local church. For me, this is part of the fruit. Not
                perfection, but direction. Not image, but evidence of what God
                can do in a family that is surrendered to truth.
              </p>

              <p className="text-lg text-foreground/80 mb-10 leading-relaxed font-semibold">
                This is the heartbeat behind my work.
              </p>

              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                I help people rebuild their lives from the inside out so they
                can live with biblical clarity, lead with conviction, and
                steward every assignment for the glory of God. Lord willing,
                working with me will help you become more fearless, more
                faith-driven, more resourceful, and less dependent on the
                approval of man.
              </p>

              <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
                Because I have found that when life is patterned by prayer,
                truth, obedience, and surrender to Christ, it leads to peace.
              </p>

              <div className="bg-muted p-8 rounded-xl border-l-4 border-accent mt-12 mb-12 shadow-sm">
                <p className="text-xl font-medium text-foreground italic m-0">
                  "True leadership begins when a person stops bowing to fear,
                  renews the mind with truth, and learns to build life according
                  to God’s design."
                </p>
              </div>

              <p className="text-xl md:text-3xl font-bold text-primary mt-12 mb-12 leading-snug tracking-tight">
                The gaps in your life are not always character failures. Many
                are design flaws. And design flaws can be rebuilt under the
                authority of Christ.
              </p>
            </div>

            <div className="md:col-span-4 space-y-8">
              <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold uppercase mb-6 text-accent">
                  Family Core Values
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Heart className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Sacrificial Love</h4>
                      <p className="text-sm text-white/80">
                        Leading by serving, modeled after Christ's love for the
                        church.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Shield className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Unshakeable Truth</h4>
                      <p className="text-sm text-white/80">
                        Grounding every decision in Christian theology and
                        Scripture.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Star className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Intentional Legacy</h4>
                      <p className="text-sm text-white/80">
                        Building generational impact that outlasts earthly
                        success.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase mb-6 leading-tight">
            Lead Your Family. Lead Your Business.
          </h2>
          <p className="text-xl text-primary/80 mb-10 font-medium">
            Don't sacrifice your home on the altar of your career. Let's build a
            leadership framework that honors both.
          </p>
          <Button
            size="lg"
            onClick={openChatWidget}
            className="bg-primary hover:bg-primary/90 text-white text-lg h-auto py-4 px-10 font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto whitespace-normal text-center"
          >
            Book Your Strategy Call
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
