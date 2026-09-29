import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LOGO_URL, imgFallback } from "@/lib/images";

export const NAV_LINKS = [
  { to: "/christian-coaching", label: "Coaching" },
  { to: "/about", label: "About Paul" },
  { to: "/book", label: "Book" },
  {
    to: "https://blog.paulwoodley.com/sales-office",
    label: "Blog",
    external: true,
  },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
  ) => {
    if (to.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const id = to.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
      window.history.pushState(null, "", to);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80 border-b border-primary/20">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 z-50">
            <img
              src={LOGO_URL}
              alt="Paul Woodley Logo"
              className="h6 w-auto object-contain"
              onError={imgFallback}
            />
            <span className="text-2xl font-bold text-white tracking-tight uppercase">
              Paul <span className="text-accent">Woodley</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground font-bold uppercase tracking-wide rounded-sm px-6"
            >
              <Link to="/challenge">Start Here</Link>
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="lg:hidden p-2 text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-20 left-0 w-full bg-primary border-b border-primary/20 shadow-lg py-4 px-4 flex flex-col gap-4"
            >
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.to}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-white/80 hover:text-white py-2 border-b border-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-base font-medium text-white/80 hover:text-white py-2 border-b border-white/10"
                    onClick={(e) => handleNavClick(e, link.to)}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wide rounded-sm w-full mt-2"
              >
                <Link to="/challenge" onClick={() => setMobileMenuOpen(false)}>
                  Start Here
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
