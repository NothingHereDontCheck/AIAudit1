"use client";

interface Props {
  className?: string;
  opacity?: number;
}

export default function CircuitPattern({ className = "", opacity = 0.15 }: Props) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern id="circuit-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* Horizontal lines */}
          <line x1="0" y1="40" x2="80" y2="40" stroke="#00ACC1" strokeWidth="0.8" />
          <line x1="0" y1="0"  x2="80" y2="0"  stroke="#00796B" strokeWidth="0.5" />
          <line x1="0" y1="80" x2="80" y2="80" stroke="#00796B" strokeWidth="0.5" />
          {/* Vertical lines */}
          <line x1="40" y1="0" x2="40" y2="80" stroke="#00ACC1" strokeWidth="0.8" />
          <line x1="0"  y1="0" x2="0"  y2="80" stroke="#00796B" strokeWidth="0.5" />
          <line x1="80" y1="0" x2="80" y2="80" stroke="#00796B" strokeWidth="0.5" />
          {/* Nodes */}
          <circle cx="40" cy="40" r="2.5" fill="#00ACC1" />
          <circle cx="0"  cy="0"  r="1.5" fill="#00796B" />
          <circle cx="80" cy="0"  r="1.5" fill="#00796B" />
          <circle cx="0"  cy="80" r="1.5" fill="#00796B" />
          <circle cx="80" cy="80" r="1.5" fill="#00796B" />
          <circle cx="40" cy="0"  r="1"   fill="#00ACC1" />
          <circle cx="40" cy="80" r="1"   fill="#00ACC1" />
          <circle cx="0"  cy="40" r="1"   fill="#00ACC1" />
          <circle cx="80" cy="40" r="1"   fill="#00ACC1" />
          {/* Short traces */}
          <line x1="30" y1="40" x2="40" y2="40" stroke="#00ACC1" strokeWidth="1.2" />
          <line x1="40" y1="30" x2="40" y2="40" stroke="#00ACC1" strokeWidth="1.2" />
          <line x1="55" y1="40" x2="65" y2="40" stroke="#00796B" strokeWidth="0.8" />
          <line x1="65" y1="30" x2="65" y2="40" stroke="#00796B" strokeWidth="0.8" />
          <circle cx="65" cy="40" r="1.5" fill="#00796B" />
          <circle cx="65" cy="30" r="1.5" fill="#00796B" />
          <line x1="15" y1="40" x2="25" y2="40" stroke="#00796B" strokeWidth="0.8" />
          <line x1="15" y1="40" x2="15" y2="50" stroke="#00796B" strokeWidth="0.8" />
          <circle cx="15" cy="40" r="1.5" fill="#00796B" />
          <circle cx="15" cy="50" r="1.5" fill="#00796B" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-grid)" />
    </svg>
  );
}
