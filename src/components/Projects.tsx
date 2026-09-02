"use client";

import React, { useState } from "react";
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  Award,
  BookOpen,
  Terminal,
  Server,
  Layers,
  Cpu,
  GitBranch,
  Boxes,
  Users,
  Workflow
} from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { CaseStudyModal } from "./CaseStudyModal";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [flagship, shophub, civic] = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase mb-2">
              <span className="text-zinc-600">{"//"}</span> 03. ENGINEERING CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Substantial Engineering Projects
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Detailed case studies of systems engineered with transactional consistency, multi-role security, and 362+ verified automated tests.
          </p>
        </div>

        {/* ========================================================== */}
        {/* CASE STUDY 01: DISASTER RELIEF (FLAGSHIP SHOWPIECE)        */}
        {/* ========================================================== */}
        <div className="mt-12 rounded-3xl border border-white/[0.1] bg-[#0c0e14] p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden relative">
          
          <div className="relative z-10 space-y-8">
            
            {/* Top Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-brand-cyan px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                  CASE STUDY 01 • FLAGSHIP CAPSTONE
                </span>
                <span className="font-mono text-xs text-amber-300 px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/20 flex items-center gap-1.5">
                  <Award className="h-3 w-3 text-amber-400" />
                  <span>Final Year Project</span>
                </span>
                <span className="font-mono text-xs text-indigo-300 px-2.5 py-1 rounded bg-indigo-950/40 border border-indigo-500/20 flex items-center gap-1.5">
                  <BookOpen className="h-3 w-3 text-indigo-400" />
                  <span>IEEE Xplore Indexed</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(flagship)}
                  className="flex items-center gap-1.5 rounded-xl bg-zinc-100 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-950 hover:bg-brand-cyan transition-all shadow-md"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                {/* TODO: Update href with Pranav's actual Disaster Relief GitHub URL */}
                <a
                  href={flagship.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900 px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:border-white/30 transition-all"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Title & Overview */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-sans tracking-tight">
                {flagship.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 max-w-4xl leading-relaxed">
                {flagship.description}
              </p>
            </div>

            {/* Technologies Chips */}
            <div className="flex flex-wrap gap-2">
              {flagship.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.08] bg-zinc-900/80 px-2.5 py-1 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* VISUAL ARCHITECTURE SHOWPIECE: ON-CHAIN VS OFF-CHAIN SEPARATION */}
            <div className="rounded-2xl border border-white/[0.08] bg-zinc-950 p-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Workflow className="h-4 w-4 text-brand-cyan" />
                  <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    Architectural Separation of Concerns (Hybrid System)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">HYBRID_TOPOLOGY::ONLINE</span>
              </div>

              {/* 2-Tier Visual Grid: Off-Chain vs On-Chain */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Off-Chain Layer */}
                <div className="rounded-xl border border-white/[0.08] bg-zinc-900/50 p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                    <span className="text-brand-cyan font-semibold">1. OFF-CHAIN APPLICATION & COMPUTE</span>
                    <span className="text-zinc-500">Node / Express / Mongo</span>
                  </div>
                  <div className="text-xs text-zinc-400">
                    High-frequency operations, user interface state, and heavy allocation computations:
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="text-brand-cyan">•</span>
                      <span>React.js Frontend (Role-based dashboards)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-cyan">•</span>
                      <span>Node.js / Express.js REST API gateway</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-cyan">•</span>
                      <span>Household ID (HH-ID) verification & deduplication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-brand-cyan">•</span>
                      <span>MongoDB database storage for aid records</span>
                    </li>
                  </ul>
                </div>

                {/* On-Chain Layer */}
                <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-indigo-500/20">
                    <span className="text-indigo-400 font-semibold">2. ON-CHAIN AUDIT LAYER</span>
                    <span className="text-zinc-500">Hyperledger Fabric</span>
                  </div>
                  <div className="text-xs text-zinc-300">
                    Blockchain integration providing immutable audit trails for aid distribution:
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Hyperledger Fabric integration for immutable on-chain audit trails</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Recording aid allocations and beneficiary transactions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Proof-of-delivery upload and verification workflow</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">•</span>
                      <span>Fund reconciliation records for donor tracking</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* 4-Stage Verification Pipeline Diagram */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-3">
                  Verification & Allocation Pipeline:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {flagship.workflowSteps?.map((flow, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-white/[0.06] bg-zinc-900/80 space-y-1.5 text-left"
                    >
                      <span className="text-[10px] font-mono text-brand-cyan block">
                        {flow.step}
                      </span>
                      <p className="text-xs font-semibold text-white">{flow.actor}</p>
                      <p className="text-[11px] text-zinc-400 leading-snug">{flow.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* CASE STUDY 02: SHOPHUB E-COMMERCE (324 TESTS + 13 MODULES) */}
        {/* ========================================================== */}
        <div className="mt-12 rounded-3xl border border-white/[0.1] bg-[#0c0e14] p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden relative">
          <div className="relative z-10 space-y-8">
            
            {/* Top Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-brand-cyan px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                  CASE STUDY 02 • FULL-STACK DJANGO ARCHITECTURE
                </span>
                <span className="font-mono text-xs text-emerald-400 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/20">
                  300 Django Tests + 24 Frontend Tests Passing
                </span>
                <span className="font-mono text-xs text-zinc-400 px-2.5 py-1 rounded bg-zinc-900 border border-white/10">
                  PostgreSQL Relational DB
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(shophub)}
                  className="flex items-center gap-1.5 rounded-xl bg-zinc-100 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-950 hover:bg-brand-cyan transition-all shadow-md"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                {/* TODO: Update href with Pranav's actual ShopHub GitHub URL */}
                <a
                  href={shophub.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900 px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:border-white/30 transition-all"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Title & Overview */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-sans tracking-tight">
                {shophub.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 max-w-4xl leading-relaxed">
                {shophub.description}
              </p>
            </div>

            {/* Technologies Chips */}
            <div className="flex flex-wrap gap-2">
              {shophub.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.08] bg-zinc-900/80 px-2.5 py-1 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* VISUAL MODULE MATRIX: 13 INTEGRATED E-COMMERCE MODULES */}
            <div className="rounded-2xl border border-white/[0.08] bg-zinc-950 p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Boxes className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    Full-Stack Modular Subsystems (13 Core Modules)
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400">
                  VERIFIED: 324 AUTOMATED TESTS
                </span>
              </div>

              {/* 13 Modules Grid Display */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {shophub.modules?.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-white/[0.06] bg-zinc-900/70 font-mono text-xs text-zinc-300 hover:border-brand-cyan/40 transition-colors flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{mod}</span>
                  </div>
                ))}
              </div>

              {/* Test Breakdown Callout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Backend Test Suite</span>
                  <span className="text-lg font-bold font-mono text-white">300 Django Tests</span>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Models, serializers, permission guards, transaction locks</p>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Frontend Test Suite</span>
                  <span className="text-lg font-bold font-mono text-brand-cyan">24 Frontend Tests</span>
                  <p className="text-[11px] text-zinc-400 mt-0.5">React integration, state actions, type assertions</p>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Release Status</span>
                  <span className="text-lg font-bold font-mono text-emerald-400">Verified Prod Build</span>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Static type validation and zero runtime lint failures</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* CASE STUDY 03: SMART CIVIC RESPONSE (FASTAPI + WORKFLOW)   */}
        {/* ========================================================== */}
        <div className="mt-12 rounded-3xl border border-white/[0.1] bg-[#0c0e14] p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden relative">
          <div className="relative z-10 space-y-8">
            
            {/* Top Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-brand-cyan px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                  CASE STUDY 03 • FASTAPI BACKEND ARCHITECTURE
                </span>
                <span className="font-mono text-xs text-emerald-400 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/20">
                  38 Backend Tests Passing
                </span>
                <span className="font-mono text-xs text-zinc-400 px-2.5 py-1 rounded bg-zinc-900 border border-white/10">
                  Automated Authority Routing
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(civic)}
                  className="flex items-center gap-1.5 rounded-xl bg-zinc-100 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-950 hover:bg-brand-cyan transition-all shadow-md"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                {/* TODO: Update href with Pranav's actual Smart Civic Response GitHub URL */}
                <a
                  href={civic.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900 px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:border-white/30 transition-all"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Title & Overview */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-sans tracking-tight">
                {civic.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 max-w-4xl leading-relaxed">
                {civic.description}
              </p>
            </div>

            {/* Technologies Chips */}
            <div className="flex flex-wrap gap-2">
              {civic.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.08] bg-zinc-900/80 px-2.5 py-1 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* VISUAL WORKFLOW: 4-STAGE CIVIC RESOLUTION PIPELINE */}
            <div className="rounded-2xl border border-white/[0.08] bg-zinc-950 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-brand-cyan" />
                  <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    Automated Civic Grievance Pipeline
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400">
                  FASTAPI BACKEND • 38 TESTS PASSING
                </span>
              </div>

              {/* 4-Stage Workflow Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {civic.workflowSteps?.map((ws, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-white/[0.06] bg-zinc-900/70 space-y-2 relative"
                  >
                    <span className="text-[10px] font-mono text-brand-cyan font-bold block">
                      {ws.step}
                    </span>
                    <div className="text-xs font-semibold text-white">{ws.actor}</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{ws.desc}</p>
                  </div>
                ))}
              </div>

              {/* Three Workflows Badge */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                <span className="text-zinc-500">ROLE WORKFLOWS:</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-200">
                  Citizen Portal (Grievance submission & tracking)
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-200">
                  Authority Portal (Department triage & status updates)
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-200">
                  Admin Dashboard (Municipal oversight & metrics)
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Case Study Modal Dialog */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
