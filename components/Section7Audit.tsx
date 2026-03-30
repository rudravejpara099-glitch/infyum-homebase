"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AUDIT } from "@/content/copy";
import { fadeUp, staggerContainer, slideInFromRight } from "@/lib/animations";
import CtaButton from "./ui/CtaButton";

interface Section7AuditProps {
  onCtaClick: () => void;
}

export default function Section7Audit({ onCtaClick }: Section7AuditProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative px-6 md:px-16 py-24 md:py-32"
      style={{ background: "#0A0A0A" }}
    >
      {/* Section number */}
      <span className="absolute top-10 right-16 text-[11px] text-[#333] tracking-[3px] hidden md:block">
        {AUDIT.sectionNum}
      </span>

      <div className="max-w-[1312px] mx-auto">
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-[11px] font-medium tracking-[2px] text-[#2B7FFF] text-center mb-4"
        >
          {AUDIT.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-[32px] md:text-[52px] font-bold text-[#F5F5F5] text-center leading-[1.1] tracking-[-0.03em] max-w-[860px] mx-auto mb-6"
        >
          {AUDIT.headline}
        </motion.h2>

        {/* Body */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-[16px] text-[#666] text-center leading-[1.85] max-w-[700px] mx-auto mb-6"
        >
          {AUDIT.body}
        </motion.p>

        {/* Lens pills */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {AUDIT.lenses.map((lens) => (
            <motion.span
              key={lens}
              variants={fadeUp}
              className="text-[13px] text-[#999] px-4 py-1.5 rounded-full"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {lens}
            </motion.span>
          ))}
        </motion.div>

        {/* Two column */}
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          {/* Left: checklist */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={fadeUp}
              className="text-[18px] font-semibold text-[#F5F5F5] mb-6"
            >
              {AUDIT.checklistTitle}
            </motion.p>
            <div className="flex flex-col gap-4">
              {AUDIT.checkItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-1 w-2 h-2 rounded-full shrink-0"
                    style={{ background: "#2B7FFF" }}
                  />
                  <span className="text-[15px] text-[#666] leading-[1.7]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-2xl p-8"
            style={{
              background: "#111",
              border: "1px solid rgba(43,127,255,0.2)",
            }}
          >
            <CtaButton
              label="Book Your Free Conversion Audit"
              onClick={onCtaClick}
              fullWidth
              size="default"
            />
            <p className="text-[13px] text-[#555] text-center mt-4">
              {AUDIT.ctaCardSupport}
            </p>
            <p className="text-[14px] text-[#666] text-center leading-[1.75] mt-5">
              {AUDIT.ctaCardBonus}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
