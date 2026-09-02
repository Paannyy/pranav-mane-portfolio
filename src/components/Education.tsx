"use client";

import React from "react";
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Education: React.FC = () => {
  const [bachelors, hsc, ssc] = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-20 md:py-32 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase mb-2">
              <span className="text-zinc-600">{"//"}</span> 05. ACADEMIC BACKGROUND
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Education & Timeline
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Formal computer engineering training with an emphasis on system fundamentals, databases, and software design.
          </p>
        </div>

        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Focus: Bachelor's Degree (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-brand-cyan/25 bg-gradient-to-b from-[#0c1018] to-zinc-950 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Ambient accent */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs font-semibold text-brand-cyan px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4" />
                  <span>PRIMARY QUALIFICATION</span>
                </span>
                <span className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                  <span>{bachelors.period}</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                  {bachelors.degree}
                </h3>
                <p className="text-sm font-mono text-zinc-300 mt-1">
                  {bachelors.institution}
                </p>
              </div>

              {/* Score Highlight Box */}
              <div className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-white/10">
                <Award className="h-5 w-5 text-emerald-400" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Graduation Standing</span>
                  <span className="text-base font-bold font-mono text-white">{bachelors.score}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {bachelors.description}
              </p>

              {bachelors.highlights && (
                <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Academic Highlights:
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                    {bachelors.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Secondary Timeline: HSC & SSC (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* HSC Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                <span>HIGHER SECONDARY</span>
                <span>{hsc.period}</span>
              </div>
              <h4 className="text-lg font-semibold text-white font-sans">
                {hsc.degree}
              </h4>
              <p className="text-xs font-mono text-zinc-400 mt-0.5 mb-3">
                {hsc.institution}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                <span className="text-xs font-mono text-zinc-500">Aggregate Score</span>
                <span className="text-xs font-bold font-mono text-white px-2.5 py-0.5 rounded bg-zinc-900 border border-white/10">
                  {hsc.score}
                </span>
              </div>
            </div>

            {/* SSC Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                <span>SECONDARY SCHOOL</span>
                <span>{ssc.period}</span>
              </div>
              <h4 className="text-lg font-semibold text-white font-sans">
                {ssc.degree}
              </h4>
              <p className="text-xs font-mono text-zinc-400 mt-0.5 mb-3">
                {ssc.institution}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                <span className="text-xs font-mono text-zinc-500">Aggregate Score</span>
                <span className="text-xs font-bold font-mono text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">
                  {ssc.score}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
