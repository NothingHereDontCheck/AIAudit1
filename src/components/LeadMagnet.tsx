"use client";

import { useState } from "react";

interface Props {
  headline: string;
  subhead: string;
  source: "risk-overview" | "newsletter";
  pdfPreviewSrc?: string;
  variant?: "section" | "inline";
}

export default function LeadMagnet({ headline, subhead, source, pdfPreviewSrc, variant = "section" }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName]   = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source }),
      });
    } catch {
      // Fail silently — subscription is best-effort
    }
    setSubmitted(true);
    setLoading(false);
  }

  if (variant === "inline") {
    return (
      <div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-navy border border-teal/40 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal-lt"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm px-6 py-3 rounded-lg tracking-wide transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-teal-lt disabled:opacity-60"
            >
              {loading ? "Sending…" : "Get Free Overview"}
            </button>
          </form>
        ) : (
          <p className="text-teal-lt font-body font-semibold">
            Check your inbox — your risk overview is on its way.
          </p>
        )}
      </div>
    );
  }

  return (
    <section className="bg-teal py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <p className="section-label text-white/70 mb-3">// FREE RESOURCE</p>
            <h2 className="font-display text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {headline}
            </h2>
            <p className="font-body text-teal-bg text-lg mb-6">{subhead}</p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name"
                    className="w-1/3 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-navy hover:bg-navy/80 text-teal-lt font-display font-bold text-sm py-3 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Download Free Risk Overview →"}
                </button>
                <p className="text-xs text-teal-bg/70 font-body text-center">
                  No spam. Unsubscribe any time. Your data is never sold.
                </p>
              </form>
            ) : (
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">✓</div>
                <p className="text-white font-display font-bold text-lg">You&rsquo;re in.</p>
                <p className="text-teal-bg font-body mt-1">
                  Check your inbox — your free risk overview is on its way.
                </p>
              </div>
            )}
          </div>
          {/* PDF Preview */}
          <div className="flex justify-center">
            {pdfPreviewSrc ? (
              <div className="relative">
                <div className="absolute -inset-2 bg-navy/40 rounded-xl blur-xl" />
                <img
                  src={pdfPreviewSrc}
                  alt="AI Security Risk Overview PDF preview"
                  className="relative rounded-xl shadow-2xl max-w-xs border-2 border-white/20"
                />
              </div>
            ) : (
              <div className="relative w-60 h-80 bg-navy rounded-xl border-2 border-teal-lt/40 flex flex-col items-center justify-center shadow-2xl">
                <div className="absolute inset-0 opacity-20 rounded-xl overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-px bg-teal-lt my-8 mx-4" />
                  ))}
                </div>
                <span className="text-5xl mb-3" aria-hidden="true">🛡️</span>
                <p className="font-display text-teal-lt text-xs font-bold text-center px-4 leading-tight">
                  AI SECURITY<br />RISK OVERVIEW
                </p>
                <p className="font-body text-white/50 text-xs mt-2">AITrustAudit.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
