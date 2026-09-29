import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  ApplyChallengeForm,
  type SubmissionOutcome,
} from "@/components/apply-challenge/ApplyChallengeForm";
import {
  QualifiedResult,
  WarmResult,
  NotReadyResult,
} from "@/components/apply-challenge/ApplyChallengeResults";

export default function ApplyChallenge() {
  const [outcome, setOutcome] = useState<SubmissionOutcome | null>(null);

  useEffect(() => {
    if (outcome === "qualified") {
      const script = document.createElement("script");
      script.src = "https://client.paulwoodley.com/js/form_embed.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [outcome]);

  if (outcome === "qualified") return <QualifiedResult />;
  if (outcome === "warm") return <WarmResult />;
  if (outcome === "not_ready") return <NotReadyResult />;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navigation />

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Apply for the Do Not Be Anxious 5-Day Challenge
          </h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-white/80 leading-relaxed font-light">
            This short form helps Paul determine whether the 5-Day Matthew 6
            Challenge is the right next step for you. It's a Christ-centered,
            one-to-one coaching experience for experienced hoteliers and leaders
            who feel anxious, stuck, or at a crossroads — moving you from
            pressure to peace through a five-part framework: Pause the Pressure,
            Probe the Belief, Plant Your Identity, Prioritize the Kingdom, and
            Plan the Next Step.
          </p>
          <p className="text-lg text-white/80 leading-relaxed font-light mt-4">
            If you are accepted, you'll be invited to schedule your first call
            with Paul.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
          <ApplyChallengeForm onSubmitted={setOutcome} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
