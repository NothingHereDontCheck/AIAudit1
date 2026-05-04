"use client";

type ShieldSize = "sm" | "md" | "lg";

const sizes: Record<ShieldSize, number> = { sm: 32, md: 56, lg: 96 };

interface Props {
  size?: ShieldSize;
  className?: string;
  glow?: boolean;
}

export default function ShieldIcon({ size = "md", className = "", glow = false }: Props) {
  const px = sizes[size];
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={glow ? { filter: "drop-shadow(0 0 12px rgba(0,200,255,0.6))" } : undefined}
    >
      {/* Outer shield outline */}
      <path
        d="M48 8 L82 22 L82 52 C82 68 66 82 48 88 C30 82 14 68 14 52 L14 22 Z"
        stroke="#00ACC1"
        strokeWidth="2.5"
        fill="#0D1B2A"
      />
      {/* Inner fill */}
      <path
        d="M48 16 L74 28 L74 52 C74 64 62 75 48 80 C34 75 22 64 22 52 L22 28 Z"
        fill="#00796B"
        opacity="0.25"
      />
      {/* AI text */}
      <text
        x="48"
        y="58"
        textAnchor="middle"
        fontFamily="Orbitron, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#00ACC1"
        letterSpacing="2"
      >
        AI
      </text>
      {/* Top circuit nodes */}
      <circle cx="48" cy="8" r="3" fill="#00ACC1" />
      <circle cx="82" cy="22" r="2.5" fill="#00796B" />
      <circle cx="14" cy="22" r="2.5" fill="#00796B" />
    </svg>
  );
}
