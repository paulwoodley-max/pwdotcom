import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GUIDE_TITLE = "The Spiral Seller";

const GUIDE_SUBTITLE = "Reading the Room Before You Send the Proposal";

const GUIDE_DESC =
  "The free companion handout to The Spiral Sales Office — how to read the buyer behind the RFP, whatever segment you're deployed against.";

const GUIDE_COVER_URL =
  "https://assets.cdn.filesafe.space/hshXh4CwDZppYoxoTSVo/media/6a7dc4f4255b571c8e052a4d.jpg";

const NewReleasePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("newReleaseDismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      sessionStorage.setItem("newReleaseDismissed", "true");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden border-0 p-0 sm:rounded-2xl">
        <div className="flex flex-col sm:flex-row">
          {/* Guide cover */}
          <div className="flex shrink-0 items-center justify-center bg-muted/40 p-6 sm:w-2/5">
            <img
              src={GUIDE_COVER_URL}
              alt="The Spiral Seller free handout cover by Paul Woodley"
              className="h-48 w-auto rounded-md ring-1 ring-black/10 sm:h-60 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)]"
              style={{ aspectRatio: "2/3" }}
            />
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col justify-center gap-4 p-6">
            <DialogHeader className="space-y-2 text-left">
              <span className="inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent ring-1 ring-accent/20">
                Free Handout
              </span>
              <DialogTitle className="text-lg leading-snug">
                {GUIDE_TITLE}
              </DialogTitle>
              <p className="text-sm font-semibold text-primary/80">
                {GUIDE_SUBTITLE}
              </p>
              <DialogDescription className="text-sm leading-relaxed">
                {GUIDE_DESC}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-2 pt-1">
              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground"
              >
                <Link to="/spiral-seller">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Get the Free Guide
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-muted-foreground"
                onClick={() => handleOpenChange(false)}
              >
                Maybe later
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewReleasePopup;
