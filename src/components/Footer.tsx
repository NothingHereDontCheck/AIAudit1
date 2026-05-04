"use client";

import Link from "next/link";
import ShieldIcon from "./ShieldIcon";
import LeadMagnet from "./LeadMagnet";

const links = {
  Learn: [
    { label: "Course",             href: "/course" },
    { label: "Blog",               href: "/blog" },
    { label: "Free Risk Overview", href: "/free-risk-overview" },
  ],
  Company: [
    { label: "About Jamel Rainey", href: "/about" },
    { label: "Privacy Policy",     href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy" aria-label="Site footer">
      {/* Newsletter strip */}
      <div className="border-t border-white/10 px-4 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-2">// THE AI TRUST BRIEFING</p>
          <h3 className="font-display text-white text-lg font-bold mb-2">
            The AI Security Newsletter for Practitioners Who Do the Work
          </h3>
          <p className="font-body text-gray-400 text-sm mb-6">
            Real threats. Real frameworks. No enterprise fluff. Weekly.
          </p>
          <div className="max-w-md mx-auto">
            <LeadMagnet
              variant="inline"
              headline=""
              subhead=""
            />
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="border-t border-white/10 px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 focus:outline-none focus:ring-2 focus:ring-teal-lt rounded-md w-fit">
              <ShieldIcon size="sm" glow />
              <span className="font-display text-white text-sm font-bold">
                AITrustAudit<span className="text-teal-lt">.com</span>
              </span>
            </Link>
            <p className="font-body text-gray-500 text-sm leading-relaxed mb-3">
              Securing the Intelligent Future
            </p>
            <p className="font-body text-gray-600 text-xs">
              Jamel Rainey · AI Security Leader
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-display text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-gray-500 hover:text-teal-lt text-sm transition-colors focus:outline-none focus:text-teal-lt"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-body text-gray-600">
          <p>© {new Date().getFullYear()} AITrustAudit.com · Jamel Rainey</p>
          <p className="text-center">
            AITrustAudit.com is an independent education and consulting brand.
            Not affiliated with NIST, OWASP, or ISO.
          </p>
          <Link href="/privacy" className="hover:text-gray-400 transition-colors focus:outline-none focus:text-teal-lt">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
