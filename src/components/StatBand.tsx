"use client";

interface Stat {
  stat: string;
  label: string;
}

interface Props {
  stats: Stat[];
}

export default function StatBand({ stats }: Props) {
  return (
    <div className="bg-navy py-10 px-4 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="font-display text-teal-lt text-glow text-4xl md:text-5xl font-black">
              {s.stat}
            </span>
            <span className="font-body text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold max-w-[140px] leading-tight">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
