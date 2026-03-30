"use client";

import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Section1Hero from "@/components/Section1Hero";
import Section2Problem from "@/components/Section2Problem";
import Section3Costs from "@/components/Section3Costs";
import Section4WhyHarshil from "@/components/Section4WhyHarshil";
import Section5WhatGetFixed from "@/components/Section5WhatGetFixed";
import Section6RightFit from "@/components/Section6RightFit";
import Section7Audit from "@/components/Section7Audit";
import Section8FinalCTA from "@/components/Section8FinalCTA";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <Navigation onCtaClick={openModal} />
      <main>
        <Section1Hero onCtaClick={openModal} />
        <Section2Problem />
        <Section3Costs />
        <Section4WhyHarshil />
        <Section5WhatGetFixed />
        <Section6RightFit />
        <Section7Audit onCtaClick={openModal} />
        <Section8FinalCTA onCtaClick={openModal} />
      </main>

      {/* Footer */}
      <footer
        className="py-8 px-6 md:px-10 lg:px-16"
        style={{
          backgroundColor: "var(--color-bg-base)",
          borderTop: "1px solid var(--color-border-subtle)",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="text-sm font-semibold tracking-widest"
            style={{ color: "var(--color-text-muted)", letterSpacing: "0.18em" }}
          >
            INFYUM
          </span>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            &copy; {new Date().getFullYear()} Infyum. All rights reserved.
          </p>
        </div>
      </footer>

      <LeadCaptureModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
