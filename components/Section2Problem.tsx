"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { reveal, fadeUp, staggerContainerFast } from "@/lib/animations";

export default function Section2Problem() {
  const { problem } = copy;

  return (
    <section className="py-28 md:py-36" style={{ backgroundColor: "var(--color-bg-surface)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left — label + headline */}
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: "var(--color-brand-primary)" }}
            >
              The real problem
            </motion.p>
            <motion.h2
              variants={reveal}
              className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text-primary)",
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
                textWrap: "balance",
              } as React.CSSProperties}
            >
              {problem.headline}
            </motion.h2>
          </motion.div>

          {/* Right — body copy */}
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {problem.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-[0.9375rem] md:text-base"
                style={{ color: "var(--color-text-secondary)", lineHeight: 1.85 }}
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              className="mt-4 pt-8"
              style={{ borderTop: "1px solid var(--color-border-subtle)" }}
            >
              <p
                className="text-xl md:text-2xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-brand-primary)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.015em",
                }}
              >
                {problem.closingLine}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
