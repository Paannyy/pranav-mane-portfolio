"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, FileDown, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#06070a] py-12 text-zinc-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & System Status */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-bold text-sm text-white font-mono">PM.</span>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-zinc-400">All systems nominal • Production ready</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            {/* TODO: Update href with Pranav's actual GitHub profile URL */}
            <a
              href={PORTFOLIO_DATA.profile.githubPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.resumePath}
              download="Pranav_Mane_Resume.pdf"
              className="hover:text-brand-cyan transition-colors flex items-center gap-1"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-zinc-900/60 px-3 py-1.5 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-600 text-center sm:text-left">
          <p>© 2026 {PORTFOLIO_DATA.profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Engineered with Next.js, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
