"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export default function Section2Problem() {
  const { problem } = copy;

  return (
    <section
      className="py-28 md:py-36"
      style={{ backgroundColor: "var(--color-bg-surface)" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Sticky label */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pt-2"
          >
            <p
              className="text-xs font-semibold tracking-[0.16em] uppercase mb-6"
              style={{ color: "var(--color-brand-primary)" }}
            >
              The real problem
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text-primary)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {problem.headline}
            </h2>
          </motion.div>

          {/* Body */}
          <div className="flex flex-col gap-5">
            {problem.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="text-base md:text-lg leading-[1.8]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-4 pt-8"
              style={{ borderTop: "1px solid var(--color-border-subtle)" }}
            >
              <p
                className="text-xl md:text-2xl leading-snug"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-brand-primary)",
                  lineHeight: 1.35,
                }}
              >
                {problem.closingLine}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
