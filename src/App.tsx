import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import FamilyJourney from "./pages/FamilyJourney";
import ChristianCoaching from "./pages/ChristianCoaching";
import HotelResponse from "./pages/HotelResponse";
import HotelSecondAct from "./pages/HotelSecondAct";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Speaking from "./pages/Speaking";
import Resources from "./pages/Resources";
import ResourceWaitlist from "./pages/ResourceWaitlist";
import NotFound from "./pages/NotFound";
import SpiritualGiftsSurvey from "./pages/SpiritualGiftsSurvey";
import PromptPathway from "./pages/PromptPathway";
import PromptPathwaySuccess from "./pages/PromptPathwaySuccess";
import BiblicalClarityChallenge from "./pages/BiblicalClarityChallenge";
import TransparentLeaderSelfAudit from "./pages/TransparentLeaderSelfAudit";
import ApplyChallenge from "./pages/ApplyChallenge";
import Contact from "./pages/Contact";
import ContactSuccess from "./pages/ContactSuccess";
import Support from "./pages/Support";
import CallRedirect from "./pages/CallRedirect";
import BookPage from "./pages/BookPage";
import SpiralSellerPage from "./pages/SpiralSellerPage";
import SpiralSellerSuccess from "./pages/SpiralSellerSuccess";
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/family-journey" element={<FamilyJourney />} />
          <Route path="/christian-coaching" element={<ChristianCoaching />} />
          <Route path="/hotel-response" element={<HotelResponse />} />
          <Route path="/hoteliers-2nd-act" element={<HotelSecondAct />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceWaitlist />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="/spiritual-gifts-survey"
            element={<SpiritualGiftsSurvey />}
          />
          <Route
            path="/hotel-career-comeback-prompt-pathway"
            element={<PromptPathway />}
          />
          <Route
            path="/hotel-career-comeback-prompt-pathway-success"
            element={<PromptPathwaySuccess />}
          />
          <Route
            path="/5-day-biblical-clarity-challenge"
            element={<BiblicalClarityChallenge />}
          />
          <Route
            path="/transparent-leader-self-audit"
            element={<TransparentLeaderSelfAudit />}
          />
          <Route path="/challenge" element={<ApplyChallenge />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
          <Route path="/support" element={<Support />} />
          <Route path="/call" element={<CallRedirect />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/spiral-seller" element={<SpiralSellerPage />} />
          <Route
            path="/spiral-seller-success"
            element={<SpiralSellerSuccess />}
          />
          <Route
            path="/change"
            element={
              <Navigate to="/hotel-career-comeback-prompt-pathway" replace />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
