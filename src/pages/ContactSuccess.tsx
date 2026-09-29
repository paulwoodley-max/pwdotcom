import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";

export default function ContactSuccess() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-foreground">
      <Navigation />

      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            Message Received
          </h1>

          <p className="text-xl text-foreground/70 mb-10 leading-relaxed">
            Thank you for reaching out. I have received your message and will
            get back to you personally within 24 hours.
          </p>

          <div className="grid gap-4 sm:flex sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide px-8"
            >
              <Link to="/">Return Home</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/20 text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-wide px-8"
            >
              <Link to="/resources">Browse Resources</Link>
            </Button>
          </div>

          <div className="mt-16 p-8 bg-muted/30 rounded-2xl border border-border/50">
            <div className="flex items-center justify-center gap-3 mb-4 text-primary">
              <MessageCircle className="w-6 h-6" />
              <h3 className="text-xl font-bold">Need immediate answers?</h3>
            </div>
            <p className="text-foreground/70 mb-6">
              While you wait for my response, you can speak with my AI Assistant
              instantly using the blue chat bubble in the bottom right corner.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
