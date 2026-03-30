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
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-surface)" }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(43,127,255,0.06) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-7xl mb-5"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
          }}
        >
          {finalCta.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl mb-12"
          style={{ color: "var(--color-brand-primary)" }}
        >
          {finalCta.subheadline}
        </motion.p>

        <div className="flex flex-col gap-5 mb-14">
          {finalCta.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-lg leading-relaxed"
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
          className="flex flex-col items-start gap-6"
        >
          <CtaButton onClick={onCtaClick} size="large">
            {finalCta.cta}
          </CtaButton>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            {finalCta.closingSupport}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
