"use client";

import React from "react";
import { 
  Server, 
  ShieldCheck, 
  Database, 
  Layers, 
  CheckCircle, 
  Cpu, 
  ArrowUpRight 
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Capabilities: React.FC = () => {
  const getIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Server className="h-5 w-5 text-brand-cyan" />;
      case "02":
        return <ShieldCheck className="h-5 w-5 text-indigo-400" />;
      case "03":
        return <Database className="h-5 w-5 text-emerald-400" />;
      case "04":
        return <Layers className="h-5 w-5 text-brand-blue" />;
      case "05":
        return <CheckCircle className="h-5 w-5 text-amber-400" />;
      case "06":
        return <Cpu className="h-5 w-5 text-purple-400" />;
      default:
        return <Server className="h-5 w-5 text-zinc-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 md:py-32 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase mb-2">
              <span className="text-zinc-600">{"//"}</span> 04. ENGINEERING CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              What I Build
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Practical backend and software engineering competencies demonstrated through completed projects and rigorous automated test suites.
          </p>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {PORTFOLIO_DATA.capabilities.map((cap) => (
            <div
              key={cap.number}
              className="group relative rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-6 sm:p-7 hover:border-brand-cyan/40 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] group-hover:border-brand-cyan/30 transition-colors">
                    {getIcon(cap.number)}
                  </div>
                  <span className="font-mono text-xs text-zinc-500 group-hover:text-brand-cyan transition-colors">
                    CAPABILITY::{cap.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white font-sans mb-2.5 group-hover:text-zinc-100">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {cap.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-white/[0.04]">
                <div className="flex flex-wrap gap-1.5">
                  {cap.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900/60 border border-white/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
