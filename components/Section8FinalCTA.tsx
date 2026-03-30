"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FINAL_CTA } from "@/content/copy";
import { fadeUp, staggerContainer } from "@/lib/animations";
import CtaButton from "./ui/CtaButton";

interface Section8FinalCTAProps {
  onCtaClick: () => void;
}

export default function Section8FinalCTA({ onCtaClick }: Section8FinalCTAProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative px-6 md:px-16 py-32 md:py-40 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% 40%, rgba(43,127,255,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center text-center gap-8"
      >
        {/* Big headline */}
        <motion.h2
          variants={fadeUp}
          className="text-[36px] md:text-[64px] font-bold text-[#F5F5F5] leading-[1.05] tracking-[-0.03em] max-w-[800px]"
        >
          {FINAL_CTA.headline}
        </motion.h2>

        {/* Body */}
        <motion.p
          variants={fadeUp}
          className="text-[16px] md:text-[17px] text-[#666] leading-[1.8] max-w-[560px]"
        >
          {FINAL_CTA.body}
        </motion.p>

        {/* Large CTA */}
        <motion.div variants={fadeUp}>
          <CtaButton
            label={FINAL_CTA.cta}
            onClick={onCtaClick}
            size="large"
          />
        </motion.div>

        {/* Micro text */}
        <motion.p
          variants={fadeUp}
          className="text-[13px] text-[#444] max-w-[600px] leading-relaxed"
        >
          {FINAL_CTA.micro}
        </motion.p>
      </motion.div>
    </section>
  );
}
