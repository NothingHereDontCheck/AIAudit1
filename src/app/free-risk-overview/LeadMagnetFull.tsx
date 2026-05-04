"use client";

import { useState } from "react";
import Link from "next/link";
import ShieldIcon from "@/components/ShieldIcon";

const RISKS = [
  { severity: "CRITICAL", color: "#EF5350", text: "Shadow AI — unauthorized tools your team is using right now" },
  { severity: "HIGH",     color: "#FF7043", text: "Client data entering AI training pipelines without consent" },
  { severity: "HIGH",     color: "#FF7043", text: "No AI Acceptable Use Policy — zero legal protection" },
  { severity: "HIGH",     color: "#FF7043", text: "Compliance exposure across HIPAA, GDPR, and SOC 2" },
  { severity: "MEDIUM",   color: "#00ACC1", text: "Unchecked AI vendor and third-party risk" },
];

export default function LeadMagnetFull() {
  const [name,  setName]  = useState("");
  const [email, setEmail] = useState("");
  const [done,  setDone]  = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
    } catch {
      // Fail silently — subscription is best-effort
    }
    setDone(true);
    setLoading(false);
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Copy + Form */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 mb-8 w-fit focus:outline-none focus:ring-2 focus:ring-teal-lt rounded-md"
          >
            <ShieldIcon size="sm" glow />
            <span className="font-display text-white text-sm font-bold">
              AITrustAudit<span className="text-teal-lt">.com</span>
            </span>
          </Link>
          <p className="section-label mb-3">// FREE RESOURCE</p>
          <h1 className="font-display text-white text-3xl md:text-4xl font-black leading-tight mb-4 text-glow">
            The 5 AI Security Risks Threatening Your Business Right Now
          </h1>
          <p className="font-body text-gray-400 text-lg mb-6 leading-relaxed">
            A free 1-page risk overview used by 500+ security practitioners. Download instantly — no credit card, no sales call.
          </p>

          {!done ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name"
                className="w-full px-4 py-3 rounded-lg bg-white/8 border border-white/20 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal-lt"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg bg-white/8 border border-white/20 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal-lt"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm py-4 rounded-lg tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send Me the Free Risk Overview →"}
              </button>
              <p className="text-xs text-gray-600 font-body text-center">
                No spam. Unsubscribe any time. Your data is never sold.
              </p>
            </form>
          ) : (
            <div className="bg-teal/10 border border-teal/30 rounded-xl p-8 text-center">
              <div className="text-5xl mb-3" aria-hidden="true">✅</div>
              <h2 className="font-display text-teal-lt text-xl font-bold mb-2">You&rsquo;re in.</h2>
              <p className="font-body text-gray-300 mb-4">
                Check your inbox — your free risk overview is on its way.
              </p>
              <p className="text-sm font-body text-gray-500">
                You&rsquo;re also subscribed to{" "}
                <span className="text-teal-lt font-semibold">The AI Trust Briefing</span> — weekly AI security intel for practitioners.
              </p>
            </div>
          )}
        </div>

        {/* Right: PDF Preview mockup */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-teal/10 rounded-2xl blur-2xl" />
            <div className="relative w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-divider/50">
              {/* PDF header */}
              <div className="bg-navy px-6 pt-6 pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldIcon size="sm" />
                  <div>
                    <p className="font-display text-white text-xs font-bold">AITrustAudit.com</p>
                    <p className="font-body text-teal-lt text-xs">Securing the Intelligent Future</p>
                  </div>
                </div>
                <h2 className="font-display text-white text-sm font-bold leading-tight">
                  AI Security Risk Overview
                </h2>
                <p className="font-body text-gray-400 text-xs mt-1">The 5 Risks You Need to Know</p>
              </div>
              {/* Risk list preview */}
              <div className="px-4 py-4 space-y-2.5">
                {RISKS.map((r) => (
                  <div key={r.text} className="flex items-start gap-2">
                    <span
                      className="font-display text-xs font-bold px-1.5 py-0.5 rounded shrink-0 mt-0.5"
                      style={{ backgroundColor: `${r.color}20`, color: r.color, border: `1px solid ${r.color}40` }}
                    >
                      {r.severity}
                    </span>
                    <p className="font-body text-xs text-mid-gray leading-snug">{r.text}</p>
                  </div>
                ))}
              </div>
              <div className="px-4 pb-4">
                <div className="bg-light-bg rounded-lg p-3 text-center">
                  <p className="font-display text-navy text-xs font-bold">+ Remediation Checklist</p>
                  <p className="font-body text-mid-gray text-xs">Next steps for each risk</p>
                </div>
              </div>
              {/* Blur bottom to tease */}
              <div className="h-8 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 right-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Social proof */}
      <div className="mt-12 text-center border-t border-white/10 pt-8">
        <p className="font-body text-gray-600 text-sm">
          Downloaded by <span className="text-teal-lt font-semibold">500+ security professionals</span> · No credit card · No sales pressure
        </p>
      </div>
    </div>
  );
}
