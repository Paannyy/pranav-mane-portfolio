"use client";

import React from "react";
import { 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  FileCode, 
  Lock, 
  Scale, 
  Activity,
  Layers
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase mb-2">
              <span className="text-zinc-600">{"//"}</span> 01. ENGINEERING IDENTITY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              {PORTFOLIO_DATA.engineeringIdentity.headline}
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            {PORTFOLIO_DATA.engineeringIdentity.subheadline}
          </p>
        </div>

        {/* Narrative & Systems Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 items-start">
          
          {/* Left Column: Focused Engineering Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-sm sm:text-base">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-6 sm:p-8 backdrop-blur-md space-y-4">
              <h3 className="text-lg font-semibold text-white font-sans flex items-center gap-2">
                <Layers className="h-5 w-5 text-brand-cyan" />
                <span>Backend Engineering Focus</span>
              </h3>
              
              <p className="text-zinc-400 leading-relaxed text-sm">
                I build backend systems around APIs, authentication, relational data, and testable application logic. Rather than writing endpoint logic against ad-hoc structures, I focus first on relational schema design in PostgreSQL, structured API contracts, and deterministic response schemas.
              </p>

              <p className="text-zinc-400 leading-relaxed text-sm">
                Across my projects—spanning an e-commerce platform with <span className="text-white font-medium">300 Django tests</span>, a civic complaint engine built with <span className="text-white font-medium">FastAPI</span>, and a hybrid blockchain relief platform—the priority is consistent state, secure boundaries, and verifiable test coverage.
              </p>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">ACADEMIC STANDING</span>
                <span className="text-zinc-300">B.E. Computer Engineering (CGPA 7.6)</span>
              </div>
            </div>

            {/* Test Count Verification Metric Banner */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-900/50">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">362</div>
                <div className="text-xs font-mono text-zinc-400 mt-1">Passing Tests Combined</div>
                <div className="text-[10px] font-mono text-zinc-600 mt-0.5">300 Django • 38 Civic • 24 React</div>
              </div>
              <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-900/50">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-brand-cyan">3</div>
                <div className="text-xs font-mono text-zinc-400 mt-1">Substantial Projects</div>
                <div className="text-[10px] font-mono text-zinc-600 mt-0.5">Disaster • ShopHub • Civic</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architecture Reliability Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.engineeringIdentity.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group relative rounded-xl border border-white/[0.08] bg-[#0c0e14] p-5 sm:p-6 hover:border-brand-cyan/40 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand-cyan px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                      PILLAR::{pillar.number}
                    </span>
                    <span className="text-zinc-600 font-mono text-xs">#verified</span>
                  </div>

                  <h4 className="text-base font-semibold text-white group-hover:text-brand-cyan transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>standard.enforced</span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
