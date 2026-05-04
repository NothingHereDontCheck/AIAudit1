"use client";

import { useState } from "react";

interface Props {
  number: number;
  title: string;
  duration: string;
  lessons: string[];
  outcome: string;
  isCore?: boolean;
}

export default function ModuleCard({ number, title, duration, lessons, outcome, isCore = false }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-xl border overflow-hidden transition-all duration-200 ${
        isCore ? "border-teal bg-navy/5" : "border-divider bg-white"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none focus:ring-2 focus:ring-teal focus:ring-inset transition-colors ${
          isCore ? "hover:bg-teal/5" : "hover:bg-light-bg"
        }`}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4 min-w-0">
          <span
            className={`font-display text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              isCore ? "bg-teal text-white" : "bg-navy text-teal-lt"
            }`}
          >
            {String(number).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-navy text-sm font-bold leading-tight">
              {title}
              {isCore && (
                <span className="ml-2 inline-block bg-teal text-white text-xs px-2 py-0.5 rounded-full align-middle">
                  CORE
                </span>
              )}
            </h3>
            <p className="font-body text-mid-gray text-xs mt-0.5">{duration}</p>
          </div>
        </div>
        <span
          className={`text-teal-lt text-lg shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-divider/50">
          <ul className="mt-4 space-y-2 mb-4">
            {lessons.map((lesson, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-body text-mid-gray">
                <span className="text-teal-lt shrink-0 mt-0.5">▸</span>
                {lesson}
              </li>
            ))}
          </ul>
          <div className="rounded-lg bg-light-bg p-3 text-sm font-body">
            <strong className="text-navy">Outcome:</strong>{" "}
            <span className="text-mid-gray">{outcome}</span>
          </div>
        </div>
      )}
    </div>
  );
}
