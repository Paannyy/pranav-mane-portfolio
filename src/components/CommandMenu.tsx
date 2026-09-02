"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  Terminal, 
  FileDown, 
  Mail, 
  Phone, 
  Github, 
  ExternalLink, 
  Layers, 
  X,
  Code2,
  GraduationCap
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose, onSelectProject }) => {
  const [query, setQuery] = useState("");
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "resume",
      title: "Download Resume (PDF)",
      category: "Quick Actions",
      icon: <FileDown className="h-4 w-4 text-brand-cyan" />,
      perform: () => {
        const link = document.createElement("a");
        link.href = PORTFOLIO_DATA.profile.resumePath;
        link.download = "Pranav_Mane_Resume.pdf";
        link.click();
        onClose();
      },
    },
    {
      id: "copy-email",
      title: `Copy Email: ${PORTFOLIO_DATA.profile.email}`,
      category: "Contact",
      icon: <Mail className="h-4 w-4 text-emerald-400" />,
      perform: () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
        setCopiedNotice("Email copied to clipboard!");
        setTimeout(() => {
          setCopiedNotice(null);
          onClose();
        }, 1200);
      },
    },
    {
      id: "copy-phone",
      title: `Copy Phone: ${PORTFOLIO_DATA.profile.phone}`,
      category: "Contact",
      icon: <Phone className="h-4 w-4 text-brand-blue" />,
      perform: () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone);
        setCopiedNotice("Phone number copied to clipboard!");
        setTimeout(() => {
          setCopiedNotice(null);
          onClose();
        }, 1200);
      },
    },
    {
      id: "proj-1",
      title: "View Case Study: Disaster Relief Platform (Flagship)",
      category: "Projects",
      icon: <Layers className="h-4 w-4 text-amber-400" />,
      perform: () => {
        onSelectProject?.("disaster-relief");
        onClose();
      },
    },
    {
      id: "proj-2",
      title: "View Case Study: ShopHub E-Commerce (324 Verified Tests)",
      category: "Projects",
      icon: <Layers className="h-4 w-4 text-brand-cyan" />,
      perform: () => {
        onSelectProject?.("shophub-ecommerce");
        onClose();
      },
    },
    {
      id: "proj-3",
      title: "View Case Study: Smart Civic Response System",
      category: "Projects",
      icon: <Layers className="h-4 w-4 text-emerald-400" />,
      perform: () => {
        onSelectProject?.("smart-civic-response");
        onClose();
      },
    },
    {
      id: "nav-skills",
      title: "Jump to Technical Stack",
      category: "Navigation",
      icon: <Code2 className="h-4 w-4 text-zinc-400" />,
      perform: () => {
        window.location.hash = "#skills";
        onClose();
      },
    },
    {
      id: "nav-education",
      title: "Jump to Education & Timeline",
      category: "Navigation",
      icon: <GraduationCap className="h-4 w-4 text-zinc-400" />,
      perform: () => {
        window.location.hash = "#education";
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((action) =>
    action.title.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#0e1017] p-4 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center gap-2.5 pb-3 mb-2 border-b border-white/[0.08] px-1">
          <Search className="h-4 w-4 text-zinc-500" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command, project, or section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-white rounded"
            aria-label="Close Command Palette"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Notice feedback if action copied something */}
        {copiedNotice && (
          <div className="mb-2 p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 text-center">
            {copiedNotice}
          </div>
        )}

        {/* Filtered Action Items */}
        <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
          {filteredActions.length === 0 ? (
            <div className="p-4 text-center text-xs font-mono text-zinc-500">
              No matching commands or actions found.
            </div>
          ) : (
            filteredActions.map((action) => (
              <button
                key={action.id}
                onClick={action.perform}
                className="w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-zinc-900 border border-white/[0.06]">
                    {action.icon}
                  </div>
                  <span className="font-mono text-zinc-200 group-hover:text-white">
                    {action.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">
                  {action.category}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="pt-3 mt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500 px-1">
          <span>Navigation Quick Menu</span>
          <span>ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
