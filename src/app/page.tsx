"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Capabilities } from "@/components/Capabilities";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CommandMenu } from "@/components/CommandMenu";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";

export default function Home() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const handleSelectProjectFromCommand = (projectId: string) => {
    const found = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
    if (found) {
      setActiveCaseStudy(found);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08090c] text-zinc-100 selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Sticky Navigation */}
      <Navbar onOpenCommand={() => setIsCommandOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Capabilities />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Global Command Palette (⌘K) */}
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onSelectProject={handleSelectProjectFromCommand}
      />

      {/* Case Study Modal (if triggered via Command Menu) */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </div>
  );
}
