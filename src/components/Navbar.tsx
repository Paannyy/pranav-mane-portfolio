"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  FileDown, 
  Github, 
  Command, 
  Terminal,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface NavbarProps {
  onOpenCommand?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommand }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut listener for Command Menu (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenCommand?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenCommand]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090c]/85 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Engineering Identity */}
        <Link
          href="#hero"
          className="group flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/10 font-mono text-sm font-semibold tracking-tight text-brand-cyan group-hover:border-brand-cyan/40 group-hover:shadow-[0_0_12px_-2px_rgba(0,210,255,0.3)] transition-all">
            PM
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight font-mono text-zinc-200">
              PRANAV MANE
            </span>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
              sys::backend.eng
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-zinc-900/50 backdrop-blur-md px-3 py-1.5 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3.5 py-1 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action CTAs: Command, GitHub, Resume */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Command Menu Trigger */}
          {onOpenCommand && (
            <button
              onClick={onOpenCommand}
              className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-zinc-900/60 px-2.5 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all font-mono"
              title="Open Command Palette (Ctrl+K)"
              aria-label="Open Command Palette"
            >
              <Command className="h-3.5 w-3.5 text-zinc-500" />
              <span className="text-[11px] text-zinc-500">⌘K</span>
            </button>
          )}

          {/* GitHub Link */}
          {/* TODO: Update href with Pranav's actual GitHub profile URL */}
          <a
            href={PORTFOLIO_DATA.profile.githubPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>

          {/* Download Resume Button */}
          <a
            href={PORTFOLIO_DATA.profile.resumePath}
            download="Pranav_Mane_Resume.pdf"
            className="flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 hover:bg-brand-cyan hover:text-zinc-950 transition-all shadow-sm"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenCommand && (
            <button
              onClick={onOpenCommand}
              className="p-2 text-zinc-400 hover:text-zinc-200"
              aria-label="Search"
            >
              <Command className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#08090c]/98 backdrop-blur-2xl px-5 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 text-sm font-medium text-zinc-300 hover:text-white border-b border-white/[0.04]"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 text-zinc-600" />
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={PORTFOLIO_DATA.profile.resumePath}
                download="Pranav_Mane_Resume.pdf"
                className="flex items-center justify-center gap-2 rounded-lg bg-zinc-100 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-brand-cyan transition-all"
              >
                <FileDown className="h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* TODO: Update href with Pranav's actual GitHub profile URL */}
              <a
                href={PORTFOLIO_DATA.profile.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-zinc-900 py-2.5 text-xs font-medium text-zinc-300"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
