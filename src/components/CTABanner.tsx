"use client";

interface CTA {
  label: string;
  href: string;
  primary?: boolean;
}

interface Props {
  headline: string;
  subhead?: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
}

export default function CTABanner({ headline, subhead, primaryCTA, secondaryCTA }: Props) {
  return (
    <section className="relative bg-navy py-16 px-4 overflow-hidden">
      {/* Teal accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-teal-lt to-teal" />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-white text-2xl md:text-3xl font-bold mb-4 text-glow">
          {headline}
        </h2>
        {subhead && (
          <p className="font-body text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            {subhead}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryCTA.href}
            target={primaryCTA.href.startsWith("http") ? "_blank" : undefined}
            rel={primaryCTA.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block bg-teal hover:bg-teal-lt text-white font-display font-bold text-sm py-4 px-8 rounded-lg tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-lt focus:ring-offset-2 focus:ring-offset-navy"
          >
            {primaryCTA.label}
          </a>
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-block border border-teal-lt/50 hover:border-teal-lt text-teal-lt hover:text-white font-display font-bold text-sm py-4 px-8 rounded-lg tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-lt focus:ring-offset-2 focus:ring-offset-navy"
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
