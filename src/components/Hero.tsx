"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Terminal,
  Database,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center tech-grid overflow-hidden"
    >
      {/* Subtle, restrained ambient background depth (no cheesy glowing or neon) */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-white/[0.02] to-transparent" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Recruiter Quick Snapshot Bar (The 10-Second Test) */}
        <div className="mb-8 inline-flex flex-wrap items-center gap-2 sm:gap-3 rounded-xl border border-white/[0.08] bg-zinc-950/80 px-3.5 py-2 text-xs font-mono text-zinc-300 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 font-medium">Open to Opportunities</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-zinc-400">Target: Python Backend & Software Engineering</span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-brand-cyan">300 Django Tests • 38 FastAPI Tests</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Typography & Engineering Identity (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Identity & Technical Metadata */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-400">
                <span className="font-semibold text-zinc-200 tracking-wider">
                  {PORTFOLIO_DATA.profile.name}
                </span>
                <span className="text-zinc-600">/</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-zinc-500" />
                  {PORTFOLIO_DATA.profile.location}
                </span>
                <span className="text-zinc-600">/</span>
                <span>B.E. Comp Eng (CGPA 7.6)</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-sans">
              Building reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400">
                backend systems
              </span>{" "}
              <br />
              <span className="text-brand-cyan font-mono font-semibold text-3xl sm:text-4xl lg:text-5xl">
                with Python.
              </span>
            </h1>

            {/* Disciplined Engineering Copy (Zero AI Fluff) */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal">
              Computer Engineering graduate focused on backend development, REST APIs, databases, authentication, and production-oriented software engineering.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Python", "FastAPI", "Django REST Framework", "PostgreSQL", "REST APIs", "JWT Auth"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.08] bg-zinc-900/70 px-2.5 py-1 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Cluster */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
              <Link
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-brand-cyan transition-all shadow-md w-full sm:w-auto justify-center"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-5 py-3 text-sm font-medium text-zinc-200 hover:text-white hover:border-white/25 hover:bg-zinc-800 transition-all w-full sm:w-auto justify-center"
              >
                <Mail className="h-4 w-4 text-zinc-400" />
                <span>Let&apos;s Connect</span>
              </Link>

              <a
                href={PORTFOLIO_DATA.profile.resumePath}
                download="Pranav_Mane_Resume.pdf"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/40 px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-all w-full sm:w-auto justify-center"
              >
                <FileDown className="h-4 w-4 text-brand-cyan" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Direct Email Clipboard Micro-Interaction */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="text-zinc-600">Quick contact:</span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/25 transition-colors"
                title="Click to copy email address"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{PORTFOLIO_DATA.profile.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Frame (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            
            {/* Sophisticated Editorial Photo Frame (No Cheesy Circles, Controlled Depth) */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-2xl p-3 border border-white/[0.1] bg-[#0c0e14] shadow-2xl">
              
              {/* Technical Precision Corner Markers */}
              <div className="absolute -top-1.5 -left-1.5 text-zinc-600 font-mono text-xs select-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-zinc-600 font-mono text-xs select-none">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 text-zinc-600 font-mono text-xs select-none">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 text-zinc-600 font-mono text-xs select-none">+</div>

              {/* Technical Header Strip */}
              <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-white/[0.06] text-[11px] font-mono text-zinc-400">
                <span className="text-zinc-300">ENGINEER_PORTRAIT</span>
                <span className="text-zinc-500">SYS::VERIFIED</span>
              </div>

              {/* Pranav's Authentic Photo */}
              <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-xl bg-zinc-900 border border-white/[0.06]">
                <Image
                  src={PORTFOLIO_DATA.profile.headshotPath}
                  alt="Pranav Bibhishan Mane — Python Backend Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top hover:scale-[1.01] transition-transform duration-500 filter contrast-[1.01] brightness-[0.98]"
                />
                
                {/* Subtle base vignette for seamless transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Specialization Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Primary Track</p>
                    <p className="text-xs font-semibold text-zinc-100 font-mono">Python Backend & APIs</p>
                  </div>
                  <div className="text-right font-mono">
                    <p className="text-[10px] text-zinc-500">TESTED CODEBASES</p>
                    <p className="text-xs text-emerald-400 font-semibold">300 Django • 38 FastAPI</p>
                  </div>
                </div>
              </div>

              {/* Bottom Technical Metadata Rows */}
              <div className="mt-2.5 grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg bg-zinc-900/60 border border-white/[0.04] text-left">
                  <span className="text-[10px] font-mono text-zinc-500 block">FRAMEWORKS</span>
                  <span className="text-xs font-mono text-zinc-200 font-medium">FastAPI • Django</span>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/60 border border-white/[0.04] text-left">
                  <span className="text-[10px] font-mono text-zinc-500 block">DATA LAYER</span>
                  <span className="text-xs font-mono text-zinc-200 font-medium">PostgreSQL • SQL</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
