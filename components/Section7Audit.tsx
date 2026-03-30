"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { copy } from "@/content/copy";
import { reveal, fadeUp, slideIn, staggerContainerFast } from "@/lib/animations";
import CtaButton from "./ui/CtaButton";

interface Section7AuditProps {
  onCtaClick: () => void;
}

export default function Section7Audit({ onCtaClick }: Section7AuditProps) {
  const { audit } = copy;

  return (
    <section className="py-28 md:py-36" style={{ backgroundColor: "var(--color-bg-base)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase mb-5"
            style={{ color: "var(--color-brand-primary)" }}
          >
            The free audit
          </motion.p>
          <motion.h2
            variants={reveal}
            className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] max-w-3xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            {audit.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[0.9375rem]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {audit.subheadline}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Left */}
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-7"
          >
            <motion.p
              variants={fadeUp}
              className="text-[0.9375rem] md:text-base"
              style={{ color: "var(--color-text-secondary)", lineHeight: 1.85 }}
            >
              {audit.body}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {audit.lenses.map((lens) => (
                <span
                  key={lens}
                  className="px-4 py-2 rounded-full text-xs font-medium tracking-wide"
                  style={{
                    backgroundColor: "rgba(43,127,255,0.08)",
                    border: "1px solid rgba(43,127,255,0.18)",
                    color: "var(--color-brand-primary)",
                  }}
                >
                  {lens}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <CtaButton onClick={onCtaClick} size="large">
                {audit.cta}
              </CtaButton>
              <p
                className="text-sm max-w-sm"
                style={{ color: "var(--color-text-muted)", lineHeight: 1.75 }}
              >
                {audit.supportText}
              </p>
            </motion.div>
          </motion.div>

          {/* Right — checklist */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[var(--radius-card)] p-7 h-fit"
            style={{
              backgroundColor: "var(--color-bg-surface)",
              border: "1px solid var(--color-border-subtle)",
            }}
          >
            <p
              className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase mb-7"
              style={{ color: "var(--color-text-muted)" }}
            >
              {audit.auditLabel}
            </p>
            <div className="flex flex-col gap-5">
              {audit.checklistItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(43,127,255,0.14)" }}
                  >
                    <Check size={10} style={{ color: "var(--color-brand-primary)" }} />
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)", lineHeight: 1.75 }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
