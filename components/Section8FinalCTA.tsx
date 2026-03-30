"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import CtaButton from "./ui/CtaButton";

interface Section8FinalCTAProps {
  onCtaClick: () => void;
}

export default function Section8FinalCTA({ onCtaClick }: Section8FinalCTAProps) {
  const { finalCta } = copy;

  return (
    <section
      className="relative py-32 md:py-44 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-surface)" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(43,127,255,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 90%)",
        }}
      />

      {/* Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(43,127,255,0.08) 0%, transparent 100%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <p
            className="text-xs font-semibold tracking-[0.16em] uppercase mb-7"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Ready to fix it
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {finalCta.headline}
          </h2>
          <p
            className="text-lg md:text-xl font-medium"
            style={{ color: "var(--color-brand-primary)" }}
          >
            {finalCta.subheadline}
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 mb-14 max-w-2xl">
          {finalCta.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="text-base md:text-lg leading-[1.8]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start gap-5"
        >
          <CtaButton onClick={onCtaClick} size="large">
            {finalCta.cta}
          </CtaButton>
          <p
            className="text-xs tracking-wide"
            style={{ color: "var(--color-text-muted)" }}
          >
            {finalCta.closingSupport}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
