"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ShieldIcon from "./ShieldIcon";

const nav = [
  { label: "Free Resources", href: "/resources" },
  { label: "Course",         href: "/course" },
  { label: "Blog",           href: "/blog" },
  { label: "About",          href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-sm shadow-xl shadow-black/20" : "bg-navy"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-teal-lt rounded-md" aria-label="AITrustAudit home">
          <ShieldIcon size="sm" glow />
          <div className="hidden sm:block">
            <span className="font-display text-white text-sm font-bold tracking-wide">AITrustAudit</span>
            <span className="font-display text-teal-lt text-sm font-bold">.com</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body font-semibold text-sm text-gray-300 hover:text-teal-lt px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/course"
            className="bg-teal hover:bg-teal-lt text-white font-display font-bold text-xs px-4 py-2 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-lt rounded-md p-1"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="md:hidden bg-navy border-t border-white/10 px-4 py-4 space-y-1"
          aria-label="Mobile navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block font-body font-semibold text-sm text-gray-300 hover:text-teal-lt px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/course"
              onClick={() => setMobileOpen(false)}
              className="block bg-teal text-white font-display font-bold text-xs text-center px-4 py-3 rounded-lg tracking-wide"
            >
              Enroll Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
