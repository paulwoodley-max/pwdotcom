import { Button } from "@/components/ui/button";
import { Download, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LOGO_URL, imgFallback } from "@/lib/images";

export default function PromptPathwaySuccess() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navigation />

      <section className="flex-grow pt-8 md:pt-12 pb-16 md:pb-24 bg-muted/30 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-bold text-xs mb-8 uppercase tracking-widest">
            SUCCESS
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-[1.15] mb-6 tracking-tight uppercase">
            Check your inbox. Your{" "}
            <span className="text-accent">Prompt Pathway™</span> is on the way.
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            While you wait for the email to arrive, watch this tutorial video to
            get set up and start using the first few prompts with your guide, or
            download it directly below.
          </p>

          {/* VSL Video */}
          <div className="bg-primary/5 border border-border/50 rounded-2xl aspect-video w-full max-w-3xl mx-auto mb-12 shadow-xl relative overflow-hidden">
            <video className="w-full h-full object-cover" controls playsInline>
              <source
                src="https://storage.googleapis.com/msgsndr/hshXh4CwDZppYoxoTSVo/media/7f628795-cb57-4b91-9238-80943967bfd8.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-8 h-auto min-h-[56px] py-4 shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href="https://storage.googleapis.com/msgsndr/hshXh4CwDZppYoxoTSVo/media/5aff1d3a-45a9-4032-acd3-45548ab44e16.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-center"
              >
                <Download className="w-5 h-5 shrink-0" />
                Download the Prompt Pathway
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 font-bold uppercase tracking-wide rounded-sm px-8 h-auto min-h-[56px] py-4 transition-all"
            >
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
