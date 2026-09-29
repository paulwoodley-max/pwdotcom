import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CALENDAR_SRC =
  "https://client.paulwoodley.com/widget/booking/qSUp2iVfpb6axoZFw4Gp";
const VIDEO_SRC =
  "https://assets.cdn.filesafe.space/hshXh4CwDZppYoxoTSVo/media/6a513143de6e90104e4902ef.mp4";

export function QualifiedResult() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navigation />
      <section className="py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-primary mb-6">
              You're Approved to Book.
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              You look like a strong fit for the Do Not Be Anxious 5-Day
              Challenge. Your next step is to schedule your first call. Please
              choose the earliest time that works for you so Paul can help you
              identify the right focus for your 5 days.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 overflow-hidden rounded-2xl shadow-lg border border-border/50 bg-black">
              <video
                src={VIDEO_SRC}
                controls
                className="w-full h-auto aspect-[9/16] object-cover"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden w-full">
              <iframe
                src={CALENDAR_SRC}
                style={{ width: "100%", border: "none", overflow: "hidden" }}
                className="h-[1050px] md:h-[900px]"
                scrolling="no"
                id="qSUp2iVfpb6axoZFw4Gp_1783709343673"
                title="Schedule Your Orientation Call"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function WarmResult() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navigation />
      <section className="py-24 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-6">
            Thank You
          </h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 leading-relaxed mb-12">
            Based on your answers, you may be a fit, but it looks like you may
            need a little more clarity before booking. Paul will follow up with
            the next best step.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-primary/20 text-primary"
          >
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function NotReadyResult() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navigation />
      <section className="py-24 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-6">
            Thank you for your honesty.
          </h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 leading-relaxed mb-12">
            This challenge works best when someone is ready to participate
            actively for 5 days. For now, Paul will send you helpful resources
            so you can take the next right step when you are ready.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-primary/20 text-primary"
          >
            <Link to="/resources">Explore Free Resources</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
