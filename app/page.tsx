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

      <footer
        style={{
          backgroundColor: "var(--bg)",
          borderTop: "1px solid var(--border)",
          padding: "32px",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "var(--fg-3)",
            }}
          >
            INFYUM
          </span>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--fg-3)",
            }}
          >
            &copy; {new Date().getFullYear()} Infyum. All rights reserved.
          </p>
        </div>
      </footer>

      <LeadCaptureModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
