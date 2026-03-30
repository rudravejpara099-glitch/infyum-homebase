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
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p
            className="text-xs font-semibold tracking-[0.16em] uppercase mb-5"
            style={{ color: "var(--color-brand-primary)" }}
          >
            The free audit
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-[3.25rem] max-w-3xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {audit.headline}
          </h2>
          <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>
            {audit.subheadline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Left — description + lens pills */}
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-base md:text-lg leading-[1.8]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {audit.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              {audit.lenses.map((lens) => (
                <span
                  key={lens}
                  className="px-4 py-2 rounded-full text-xs font-medium tracking-wide"
                  style={{
                    backgroundColor: "rgba(43,127,255,0.09)",
                    border: "1px solid var(--color-border-medium)",
                    color: "var(--color-brand-primary)",
                  }}
                >
                  {lens}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-4 mt-2"
            >
              <CtaButton onClick={onCtaClick} size="large">
                {audit.cta}
              </CtaButton>
              <p
                className="text-sm leading-[1.7] max-w-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                {audit.supportText}
              </p>
            </motion.div>
          </div>

          {/* Right — checklist card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl p-7 h-fit"
            style={{
              backgroundColor: "var(--color-bg-surface)",
              border: "1px solid var(--color-border-subtle)",
            }}
          >
            <p
              className="text-xs font-semibold tracking-[0.14em] uppercase mb-7"
              style={{ color: "var(--color-text-muted)" }}
            >
              {audit.auditLabel}
            </p>
            <div className="flex flex-col gap-5">
              {audit.checklistItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(43,127,255,0.15)" }}
                  >
                    <Check
                      size={10}
                      style={{ color: "var(--color-brand-primary)" }}
                    />
                  </div>
                  <p
                    className="text-sm leading-[1.7]"
                    style={{ color: "var(--color-text-secondary)" }}
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
