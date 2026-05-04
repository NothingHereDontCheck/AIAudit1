"use client";

interface Feature {
  label: string;
  value: string;
}

interface Props {
  name: string;
  price: string;
  features: Feature[];
  deliverable: string;
  turnaround: string;
  highlighted?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServiceTier({
  name,
  price,
  features,
  deliverable,
  turnaround,
  highlighted = false,
  ctaLabel = "Book a Discovery Call",
  ctaHref = "https://calendly.com",
}: Props) {
  return (
    <div
      className={`relative rounded-xl flex flex-col ${
        highlighted
          ? "border-2 border-teal shadow-2xl shadow-teal/20 bg-navy scale-[1.02]"
          : "border border-divider bg-white"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-teal text-white font-display text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">
            Most Popular
          </span>
        </div>
      )}
      <div className={`p-7 flex flex-col h-full ${highlighted ? "text-white" : "text-navy"}`}>
        <div className="mb-5">
          <h3
            className={`font-display text-lg font-bold mb-1 ${
              highlighted ? "text-teal-lt" : "text-navy"
            }`}
          >
            {name}
          </h3>
          <div className="flex items-end gap-1">
            <span
              className={`font-display text-4xl font-black ${
                highlighted ? "text-white text-glow" : "text-navy"
              }`}
            >
              {price}
            </span>
            <span className={`text-sm mb-1.5 font-body ${highlighted ? "text-gray-400" : "text-mid-gray"}`}>
              /engagement
            </span>
          </div>
        </div>
        <div className={`w-full h-px mb-5 ${highlighted ? "bg-teal/30" : "bg-divider"}`} />
        <ul className="space-y-3 mb-6 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-body">
              <span className="text-teal-lt mt-0.5 shrink-0">▸</span>
              <span>
                <strong className={highlighted ? "text-gray-200" : "text-navy"}>{f.label}:</strong>{" "}
                <span className={highlighted ? "text-gray-400" : "text-mid-gray"}>{f.value}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className={`rounded-lg p-3 mb-5 text-xs font-body ${highlighted ? "bg-teal/10 text-gray-300" : "bg-light-bg text-mid-gray"}`}>
          <strong className={highlighted ? "text-teal-lt" : "text-navy"}>Deliverable:</strong> {deliverable}
          <br />
          <strong className={highlighted ? "text-teal-lt" : "text-navy"}>Turnaround:</strong> {turnaround}
        </div>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center py-3 px-5 rounded-lg font-display font-bold text-sm tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 ${
            highlighted
              ? "bg-teal text-white hover:bg-teal-lt"
              : "bg-navy text-white hover:bg-teal"
          }`}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
