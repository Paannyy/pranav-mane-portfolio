"use client";

import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  AlertCircle,
  GitBranch,
  Terminal,
  Activity,
  Workflow,
  Cpu,
  BookOpen
} from "lucide-react";
import { Project } from "@/data/portfolioData";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-white/15 bg-[#0b0d13] p-6 sm:p-8 md:p-10 shadow-2xl text-left my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold text-brand-cyan px-2.5 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                TECHNICAL CASE STUDY // {project.number}
              </span>
              {project.badge && (
                <span className="font-mono text-xs text-zinc-300 px-2.5 py-0.5 rounded bg-zinc-900 border border-white/10">
                  {project.badge}
                </span>
              )}
            </div>

            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-white font-sans">
              {project.title}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 font-mono">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close Case Study (ESC)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Action Controls & Tech Chips */}
        <div className="py-4 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/[0.08] bg-zinc-900/80 px-2.5 py-1 text-xs font-mono text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* TODO: Update href with Pranav's actual project repository URL */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-zinc-200 hover:text-white hover:border-brand-cyan/50 transition-all"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub Repo</span>
            </a>

            {project.publicationUrl && (
              /* TODO: Update href with Pranav's actual IEEE Xplore publication link */
              <a
                href={project.publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 px-3.5 py-1.5 text-xs font-medium text-indigo-300 hover:text-white hover:border-indigo-400 transition-all"
              >
                <BookOpen className="h-3.5 w-3.5 text-indigo-400" />
                <span>{project.publicationTitle || "IEEE Xplore"}</span>
              </a>
            )}
          </div>
        </div>

        {/* Six Structured Sections (Article Dossier Format) */}
        <div className="space-y-8 pt-6">
          
          {/* 01 — Context & Problem */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-brand-cyan flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>01 — Context & Problem Statement</span>
            </h3>
            <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-4 sm:p-5 text-sm text-zinc-300 leading-relaxed font-normal">
              {project.caseStudy.context}
            </div>
          </div>

          {/* 02 — System Architecture & Topology */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Workflow className="h-4 w-4" />
              <span>02 — System Architecture & Topology</span>
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.caseStudy.systemArchitecture}
            </p>

            {/* If project has explicit on-chain vs off-chain breakdown */}
            {project.onChainOffChain && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-950/80 space-y-2">
                  <span className="text-xs font-mono text-brand-cyan font-semibold block">
                    {project.onChainOffChain.offChain.title}
                  </span>
                  <p className="text-[11px] font-mono text-zinc-500">
                    {project.onChainOffChain.offChain.tech}
                  </p>
                  <ul className="space-y-1.5 text-xs text-zinc-300 pt-1">
                    {project.onChainOffChain.offChain.duties.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-cyan">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-950/20 space-y-2">
                  <span className="text-xs font-mono text-indigo-300 font-semibold block">
                    {project.onChainOffChain.onChain.title}
                  </span>
                  <p className="text-[11px] font-mono text-zinc-500">
                    {project.onChainOffChain.onChain.tech}
                  </p>
                  <ul className="space-y-1.5 text-xs text-zinc-300 pt-1">
                    {project.onChainOffChain.onChain.duties.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-400">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* 03 — Core Engineering Decisions */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-brand-blue flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              <span>03 — Core Engineering Decisions</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.caseStudy.engineeringDecisions.map((dec, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.06] bg-zinc-900/40 p-4 text-xs text-zinc-300 leading-relaxed"
                >
                  <span className="text-brand-cyan font-mono block mb-1.5 font-semibold">
                    DECISION #{idx + 1}
                  </span>
                  {dec}
                </div>
              ))}
            </div>
          </div>

          {/* 04 — Security & RBAC */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>04 — Security, Authentication & Role-Based Access Control</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.caseStudy.security.map((sec, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 rounded-lg border border-white/[0.04] bg-zinc-950/60 p-3 text-xs text-zinc-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{sec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 05 & 06 — Data Storage & Test Verification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 05 — Data & Storage */}
            <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-4 sm:p-5 space-y-2">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Database className="h-3.5 w-3.5 text-brand-cyan" />
                <span>05 — Database & Data Schema</span>
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.caseStudy.dataStorage}
              </p>
            </div>

            {/* 06 — Test Coverage & QA */}
            <div className="rounded-xl border border-white/[0.06] bg-zinc-950/60 p-4 sm:p-5 space-y-2">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Activity className="h-3.5 w-3.5 text-emerald-400" />
                <span>06 — Test Coverage & Quality Assurance</span>
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed mb-2">
                {project.caseStudy.testValidation.summary}
              </p>
              <div className="space-y-1 pt-1 border-t border-white/[0.04]">
                {project.caseStudy.testValidation.counts.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Outcome */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4 sm:p-5">
            <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
              Engineering Outcome
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.caseStudy.outcome}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
          <div className="text-xs font-mono text-zinc-500">
            press <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-400">ESC</kbd> to exit dossier
          </div>
          <button
            onClick={onClose}
            className="rounded-lg bg-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-white transition-all"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
