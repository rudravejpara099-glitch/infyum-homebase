"use client";

import { useState } from "react";
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

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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

      <LeadCaptureModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
