"use client";

export type Severity = "critical" | "high" | "medium" | "low";

interface Props {
  severity: Severity;
  number: number;
  title: string;
  description: string;
  question: string;
}

const severityConfig = {
  critical: { label: "CRITICAL", bar: "#B71C1C", badge: "badge-critical" },
  high:     { label: "HIGH",     bar: "#E65100", badge: "badge-high"     },
  medium:   { label: "MEDIUM",   bar: "#00ACC1", badge: "badge-medium"   },
  low:      { label: "LOW",      bar: "#1B5E20", badge: "badge-low"      },
};

export default function RiskCard({ severity, number, title, description, question }: Props) {
  const cfg = severityConfig[severity];
  return (
    <div
      className="relative bg-white rounded-lg shadow-md border border-divider overflow-hidden hover:shadow-lg transition-shadow duration-200"
      style={{ borderLeft: `4px solid ${cfg.bar}` }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-xs font-display font-bold px-2.5 py-1 rounded-full ${cfg.badge}`}
            style={{ letterSpacing: "0.08em" }}
          >
            {cfg.label}
          </span>
          <span className="text-3xl font-display font-black text-divider">
            0{number}
          </span>
        </div>
        <h3 className="font-display text-navy text-base font-bold mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-mid-gray text-sm mb-4 font-body leading-relaxed">
          {description}
        </p>
        <div
          className="rounded-md p-3 text-sm font-body font-semibold"
          style={{
            background: `${cfg.bar}18`,
            color: cfg.bar,
            borderLeft: `3px solid ${cfg.bar}`,
          }}
        >
          {question}
        </div>
      </div>
    </div>
  );
}
