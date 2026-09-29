import { Button } from "@/components/ui/button";
import { Check, Download, BookOpen, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DOWNLOAD_TRIGGER = "{{trigger_link.GUSZo9u1OpW6slaIHWgH}}";
const EBOOK_ASSET = "{{custom_values.lmspiralsellerebook}}";
const COMPANION_BOOK_URL = "/book";

export default function SpiralSellerSuccess() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navigation />

      {/* ABOVE-THE-FOLD DELIVERY */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-8"
          >
            <Check className="w-10 h-10 text-accent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-4"
          >
            You're In.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight"
          >
            Your Copy of The Spiral Seller™ Is Ready.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light max-w-2xl mx-auto"
          >
            Thanks for requesting{" "}
            <strong className="text-white">The Spiral Seller™</strong>. Your
            copy is ready now. Click below to open your guide. I've also sent a
            backup link to your email so you'll always know where to find it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide rounded-sm h-auto min-h-[56px] py-4 px-10 shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-1 text-lg"
            >
              <a
                href={DOWNLOAD_TRIGGER}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download The Spiral Seller™
              </a>
            </Button>
            <p className="text-sm text-white/50 font-medium">
              Instant Access • No Additional Opt-In
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT TO DO NEXT */}
      <section className="py-20 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 tracking-tight text-center">
            What to Do Next
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Read Before Your Next Call",
                desc: "Skim the chapter for the segment you're selling to this week. Use the colour check before your next callback.",
              },
              {
                step: "2",
                title: "Re-read The Spiral Sales Office",
                desc: "This handout is the companion. The full book covers leading the office, measuring performance, and the complete framework.",
              },
              {
                step: "3",
                title: "Apply the Mirror",
                desc: "Each chapter ends with a mirror question. Answer it honestly before your next Monday morning conversation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANION BOOK CTA */}
      <section className="py-20 bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight">
            The Full Book
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            The Spiral Seller is the companion to The Spiral Sales Office — the
            complete playbook for leading, selling, marketing, and measuring a
            full-service hotel group sales office.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide rounded-sm px-10 shadow-xl"
          >
            <Link to={COMPANION_BOOK_URL}>
              <BookOpen className="mr-2 h-5 w-5" />
              Explore The Spiral Sales Office — $34.95
            </Link>
          </Button>
        </div>
      </section>

      {/* SECOND DOWNLOAD CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
            Haven't Opened Your Copy Yet?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed font-light max-w-xl mx-auto">
            Keep The Spiral Seller™ somewhere you can reference it before your
            next sales conversation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide rounded-sm h-auto min-h-[56px] py-4 px-10 shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-1 text-lg"
          >
            <a
              href={DOWNLOAD_TRIGGER}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Open The Spiral Seller™
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
