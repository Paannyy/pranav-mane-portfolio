"use client";

import React from "react";
import { Award, Calendar, ExternalLink, CheckCircle2, BookmarkCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase mb-2">
              <span className="text-zinc-600">{"//"}</span> 06. VERIFIED CREDENTIALS & TRAINING
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Certifications & Training
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Formal technical certifications and national training programs validating core competency in databases, full-stack concepts, and web engineering.
          </p>
        </div>

        {/* Two-column layout: Certifications & STTP Training */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Award className="h-4 w-4 text-brand-cyan" />
              <span>Academic & Industry Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-6 flex flex-col justify-between hover:border-brand-cyan/30 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
                      <span className="text-brand-cyan font-semibold">{cert.issuer}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-zinc-600" />
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-white font-sans mb-2">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                    {cert.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <BookmarkCheck className="h-4 w-4 text-emerald-400" />
              <span>Specialized Training Program</span>
            </h3>

            {PORTFOLIO_DATA.training.map((tr) => (
              <div
                key={tr.title}
                className="rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-6 space-y-4 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">
                    STTP • {tr.year}
                  </span>
                  <span className="text-zinc-500">NATIONAL-LEVEL</span>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white font-sans">
                    {tr.focus}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {tr.title}
                  </p>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {tr.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/[0.04]">
                  <p className="text-[11px] font-mono text-zinc-500 uppercase">
                    Key Topics Covered:
                  </p>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {tr.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
