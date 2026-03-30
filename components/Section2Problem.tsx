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
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl mb-16"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {problem.headline}
        </motion.h2>

        <div className="flex flex-col gap-6">
          {problem.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-2xl md:text-3xl leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-brand-primary)",
            lineHeight: 1.3,
          }}
        >
          {problem.closingLine}
        </motion.p>
      </div>
    </section>
  );
}
