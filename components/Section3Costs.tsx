"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { reveal, fadeUp, staggerContainer, staggerContainerFast } from "@/lib/animations";

export default function Section3Costs() {
  const { costs } = copy;

  return (
    <section id="costs" className="py-28 md:py-36" style={{ backgroundColor: "var(--color-bg-base)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase mb-5"
            style={{ color: "var(--color-brand-primary)" }}
          >
            The cost of inaction
          </motion.p>
          <motion.h2
            variants={reveal}
            className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] mb-3 max-w-3xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            {costs.headline}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            {costs.subheadline}
          </motion.p>
        </motion.div>

        {/* Cards — gap-px joined grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px mb-20 rounded-[var(--radius-card)] overflow-hidden"
          style={{ background: "var(--color-border-subtle)" }}
        >
          {costs.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative p-8 md:p-10 transition-colors duration-200"
              style={{ backgroundColor: "var(--color-bg-surface)" }}
              whileHover={{ backgroundColor: "var(--color-bg-elevated)" }}
            >
              {/* Watermark number */}
              <span
                className="absolute top-6 right-8 text-5xl font-bold pointer-events-none select-none"
                style={{
                  color: "var(--color-text-primary)",
                  opacity: 0.04,
                  fontFamily: "var(--font-display)",
                  lineHeight: 1,
                }}
              >
                0{i + 1}
              </span>
              <p
                className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: "var(--color-brand-primary)" }}
              >
                0{i + 1}
              </p>
              <h3
                className="text-base font-semibold mb-3"
                style={{ color: "var(--color-text-primary)", lineHeight: 1.4 }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)", lineHeight: 1.85 }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom line */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p
            className="text-2xl md:text-3xl lg:text-[2.25rem]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            {costs.bottomLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
