import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function SpiritualGiftsSurvey() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navigation />
      <main className="flex-1 flex items-center justify-center pt-8 md:pt-12 px-4">
        <div className="max-w-lg text-center py-24">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase text-primary mb-4">
            This Resource Is No Longer Available
          </h1>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            The Spiritual Gifts Survey has been retired. Visit the Resources
            page for current tools from Paul Woodley.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide text-base h-auto min-h-[48px] py-3 px-8"
          >
            <Link to="/resources">View Current Resources</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
