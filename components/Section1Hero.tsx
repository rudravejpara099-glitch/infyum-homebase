"use client";

import { motion } from "framer-motion";
import { HERO } from "@/content/copy";
import { fadeUp, staggerContainer } from "@/lib/animations";
import CtaButton from "./ui/CtaButton";

interface Section1HeroProps {
  onCtaClick: () => void;
}

export default function Section1Hero({ onCtaClick }: Section1HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at 50% 40%, rgba(43,127,255,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp}>
          <span
            className="inline-block text-[11px] font-medium tracking-[1.5px] text-[#2B7FFF] px-4 py-1.5 rounded-full"
            style={{
              border: "1px solid rgba(43,127,255,0.2)",
              background: "rgba(43,127,255,0.08)",
            }}
          >
            {HERO.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-[40px] md:text-[72px] font-bold text-[#F5F5F5] leading-[1.05] tracking-[-0.03em]"
        >
          {HERO.headlineLine1}
          <br />
          {HERO.headlineLine2}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-[16px] md:text-[17px] text-[#666] leading-[1.8] max-w-[580px]"
        >
          {HERO.subheadline}
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 items-center"
        >
          <CtaButton label={HERO.ctaPrimary} onClick={onCtaClick} size="default" />
          <CtaButton
            label={HERO.ctaSecondary}
            onClick={onCtaClick}
            variant="secondary"
            size="default"
          />
        </motion.div>

        {/* Micro text */}
        <motion.p
          variants={fadeUp}
          className="text-[12px] text-[#444]"
        >
          {HERO.micro}
        </motion.p>
      </motion.div>
    </section>
  );
}
