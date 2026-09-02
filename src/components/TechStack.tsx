"use client";

import React, { useState } from "react";
import { 
  Terminal, 
  Database, 
  Layout, 
  Wrench, 
  Layers, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const TechStack: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All Groups" },
    { id: "Backend", label: "Backend" },
    { id: "Data", label: "Data" },
    { id: "Engineering", label: "Engineering Standards" },
    { id: "Frontend", label: "Frontend" },
    { id: "Tooling", label: "Tooling" },
  ];

  const filteredGroups =
    activeFilter === "all"
      ? PORTFOLIO_DATA.techGroups
      : PORTFOLIO_DATA.techGroups.filter((g) => g.name === activeFilter);

  const getGroupIcon = (name: string) => {
    switch (name) {
      case "Backend":
        return <Terminal className="h-4 w-4 text-brand-cyan" />;
      case "Data":
        return <Database className="h-4 w-4 text-emerald-400" />;
      case "Engineering":
        return <Layers className="h-4 w-4 text-indigo-400" />;
      case "Frontend":
        return <Layout className="h-4 w-4 text-brand-blue" />;
      case "Tooling":
        return <Wrench className="h-4 w-4 text-amber-400" />;
      default:
        return <Terminal className="h-4 w-4 text-zinc-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase mb-2">
              <span className="text-zinc-600">{"//"}</span> 02. TECHNICAL STACK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Tools I Work With
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Technologies and frameworks practically applied across backend APIs, relational database schemas, and full-stack systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 pt-8 pb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-mono transition-all ${
                activeFilter === opt.id
                  ? "bg-zinc-100 text-zinc-950 font-semibold shadow-sm"
                  : "border border-white/[0.08] bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Primary Tech Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.name}
              className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    {getGroupIcon(group.name)}
                    <h3 className="text-sm font-semibold text-white font-sans">
                      {group.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {group.items.length} items
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mb-5 font-mono">
                  {group.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono transition-all ${
                        item.isPrimary
                          ? "bg-zinc-900 border border-white/15 text-zinc-100 hover:border-brand-cyan/40"
                          : "bg-zinc-950/60 border border-white/[0.06] text-zinc-400 hover:border-white/15 hover:text-zinc-200"
                      }`}
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.note && (
                        <span className="text-[9px] text-zinc-500 font-sans">
                          • {item.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-zinc-600 flex items-center justify-between">
                <span>status::production_applied</span>
                <span>verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Distinct "Currently Deepening" Section (Separated from Active Production Skills) */}
        <div className="mt-10 rounded-2xl border border-brand-cyan/20 bg-gradient-to-r from-[#0c1018] via-zinc-950 to-[#0c1018] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/[0.06]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase tracking-wider mb-1">
                <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
                <span>Continuous Engineering Roadmap</span>
              </div>
              <h3 className="text-lg font-semibold text-white font-sans">
                Currently Deepening
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 max-w-sm">
              Technologies and architectural concepts I am actively expanding through study and experimental codebases.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.currentlyDeepening.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-white/[0.06] bg-zinc-900/40 space-y-1.5"
              >
                <div className="text-xs font-mono text-brand-cyan font-semibold">
                  {item.topic}
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
