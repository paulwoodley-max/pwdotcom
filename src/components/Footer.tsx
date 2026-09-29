import { Link } from "react-router-dom";
import { LOGO_URL, PROCOACH_URL, GCA_URL, imgFallback } from "@/lib/images";

export function Footer() {
  const sections = [
    {
      title: "Coaching",
      links: [
        { to: "/christian-coaching", label: "1:1 Coaching" },
        { to: "/challenge", label: "5-Day Challenge" },
        { to: "/about", label: "About Paul" },
      ],
    },
    {
      title: "Books & Ideas",
      links: [
        { to: "/book", label: "The Spiral Sales Office" },
        { to: "/spiral-seller", label: "The Spiral Seller" },
        {
          to: "https://blog.paulwoodley.com/sales-office",
          label: "Blog",
          external: true,
        },
        { to: "/resources", label: "Resources" },
      ],
    },
    {
      title: "Hotel Response",
      links: [
        { to: "/hotel-response", label: "Hotel Response" },
        { to: "/hotel-response", label: "Hotel Services" },
      ],
    },
    {
      title: "Company",
      links: [
        { to: "/contact", label: "Contact" },
        { to: "/privacy-policy", label: "Privacy Policy" },
        { to: "/terms", label: "Terms" },
        { to: "/support", label: "Support" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white/60 py-16 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-6 lg:mb-0">
            <img
              src={LOGO_URL}
              alt="Paul Woodley Logo"
              className="h-16 w-auto max-w[200px] object-contain mb-4">
              onError={imgFallback}
            />
            <div className="text-2xl font-bold text-white tracking-tight uppercase mb-1">
              Paul <span className="text-accent">Woodley</span>
            </div>
            <div className="text-sm font-bold text-accent tracking-widest uppercase mb-3">
              Transparent Leader™
            </div>
            <p className="text-sm text-white/50 max-w-xs font-light italic leading-relaxed">
              Christian coach for hotel sales leaders under pressure.
            </p>
          </div>

          {/* Link columns */}
          {sections.map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-white/60 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img
              src={PROCOACH_URL}
              alt="ProCoach Certification"
              className="h-14 w-14 object-contain"
              onError={imgFallback}
            />
            <img
              src={GCA_URL}
              alt="Global Coaches Association"
              className="h-14 w-14 object-contain"
              onError={imgFallback}
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs">
              &copy; 2026 PW Coaching LLC. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-white/40">
              113 S. Perry Street, Suite 206 #14985, Lawrenceville, GA 30046
            </p>
            <p className="text-xs mt-1 text-white/40 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2 sm:gap-4">
              <span>
                Email:{" "}
                <a
                  href="mailto:support@paulwoodley.com"
                  className="hover:text-white transition-colors"
                >
                  support@paulwoodley.com
                </a>
              </span>
              <span className="hidden sm:inline">|</span>
              <span>
                Phone:{" "}
                <a
                  href="tel:6785017256"
                  className="hover:text-white transition-colors"
                >
                  (678) 501-7256 (Call/Text)
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
