"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileDown, 
  Github, 
  Copy, 
  Check, 
  ArrowUpRight,
  Send,
  Terminal,
  MessageSquare
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const templates = [
    {
      title: "Python Backend Developer Opportunity",
      subject: "Python Backend Developer Opportunity — Discussion",
      body: "Hi Pranav,\n\nI reviewed your portfolio and project case studies (ShopHub / Disaster Relief). We have an engineering opportunity that aligns with your Python, FastAPI, and database background. Let's set up a conversation.",
    },
    {
      title: "Engineering Technical Discussion",
      subject: "Technical Inquiry regarding your Backend Architecture",
      body: "Hi Pranav,\n\nI would like to discuss your backend architecture decisions regarding your disaster relief system and Django test suites.",
    },
    {
      title: "General Software Engineering Inquiry",
      subject: "Connecting regarding Software Engineering",
      body: "Hi Pranav,\n\nReaching out to connect regarding engineering opportunities in Pune / remote.",
    },
  ];

  const launchMailto = (subject: string, body: string) => {
    const url = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#0c0e14] p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Contact & Positioning (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan tracking-wider uppercase">
                <span className="text-zinc-600">{"//"}</span> 07. GET IN TOUCH
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
                Have a backend problem worth solving?
              </h2>

              <p className="text-base text-zinc-300 leading-relaxed max-w-md">
                I&apos;m open to entry-level backend and software engineering opportunities. Whether you are hiring for Python/FastAPI roles or want to discuss database and API architecture, I look forward to connecting.
              </p>

              {/* Verified Direct Contact Cards */}
              <div className="space-y-3 pt-2">
                
                {/* Email Address */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.08] bg-zinc-950/70 max-w-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-white/[0.06]">
                      <Mail className="h-4 w-4 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-500 uppercase">Email Address</p>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                        className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-brand-cyan transition-colors"
                      >
                        {PORTFOLIO_DATA.profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.email, "email")}
                    className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Phone Number */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.08] bg-zinc-950/70 max-w-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-white/[0.06]">
                      <Phone className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-500 uppercase">Phone / WhatsApp</p>
                      <a
                        href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-emerald-400 transition-colors"
                      >
                        {PORTFOLIO_DATA.profile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.phone, "phone")}
                    className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    title="Copy phone to clipboard"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.08] bg-zinc-950/70 max-w-md">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/[0.06]">
                    <MapPin className="h-4 w-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Location</p>
                    <p className="text-xs sm:text-sm font-mono text-zinc-200">
                      {PORTFOLIO_DATA.profile.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Backend%20Engineering%20Inquiry`}
                  className="flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-3 text-xs sm:text-sm font-semibold text-zinc-950 hover:bg-brand-cyan transition-all shadow-md"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Me Directly</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.resumePath}
                  download="Pranav_Mane_Resume.pdf"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:border-white/30 transition-all"
                >
                  <FileDown className="h-4 w-4 text-brand-cyan" />
                  <span>Download Resume (PDF)</span>
                </a>

                {/* TODO: Update href with Pranav's actual GitHub profile URL */}
                <a
                  href={PORTFOLIO_DATA.profile.githubPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:border-white/30 transition-all"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Email Template Launcher (No Fake Submissions) */}
            <div className="lg:col-span-6 rounded-2xl border border-white/[0.08] bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <span className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Terminal className="h-3.5 w-3.5 text-brand-cyan" />
                  <span>direct_dispatch::client_link</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">VERIFIED MAILTO</span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Click any topic below to open your preferred mail client with a pre-formatted message directly addressed to <span className="font-mono text-zinc-200">{PORTFOLIO_DATA.profile.email}</span>:
              </p>

              {/* Template Launchers */}
              <div className="space-y-3 pt-1">
                {templates.map((tpl, idx) => (
                  <button
                    key={idx}
                    onClick={() => launchMailto(tpl.subject, tpl.body)}
                    className="w-full text-left p-4 rounded-xl border border-white/[0.06] bg-zinc-900/60 hover:border-brand-cyan/40 hover:bg-zinc-900 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-white group-hover:text-brand-cyan transition-colors">
                        {tpl.title}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <p className="text-[11px] text-zinc-400 line-clamp-2 font-mono">
                      Subject: {tpl.subject}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-2 text-[11px] font-mono text-zinc-500 border-t border-white/[0.04] flex items-center justify-between">
                <span>Direct delivery to inbox</span>
                <span>Response within 24h</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
