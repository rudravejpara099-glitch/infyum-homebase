"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { copy } from "@/content/copy";
import CtaButton from "./ui/CtaButton";

interface Section7AuditProps {
  onCtaClick: () => void;
}

export default function Section7Audit({ onCtaClick }: Section7AuditProps) {
  const { audit } = copy;

  return (
    <section
      className="py-28 md:py-36"
      style={{ backgroundColor: "var(--color-bg-base)" }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl mb-5"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {audit.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {audit.subheadline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {audit.body}
        </motion.p>

        {/* Lens pills */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          {audit.lenses.map((lens) => (
            <span
              key={lens}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "rgba(43,127,255,0.1)",
                border: "1px solid var(--color-border-medium)",
                color: "var(--color-brand-primary)",
              }}
            >
              {lens}
            </span>
          ))}
        </motion.div>

        {/* Checklist box */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-8 md:p-10 mb-12"
          style={{
            backgroundColor: "var(--color-bg-surface)",
            border: "1px solid var(--color-border-subtle)",
          }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-8"
            style={{
              color: "var(--color-text-muted)",
              letterSpacing: "0.14em",
            }}
          >
            {audit.auditLabel}
          </p>
          <div className="flex flex-col gap-4">
            {audit.checklistItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(43,127,255,0.15)" }}
                >
                  <Check size={11} style={{ color: "var(--color-brand-primary)" }} />
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start gap-6"
        >
          <CtaButton onClick={onCtaClick} size="large">
            {audit.cta}
          </CtaButton>
          <p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {audit.supportText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
