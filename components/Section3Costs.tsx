"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export default function Section3Costs() {
  const { costs } = copy;

  return (
    <section
      id="costs"
      className="py-28 md:py-36"
      style={{ backgroundColor: "var(--color-bg-base)" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            {costs.headline}
          </h2>
          <p
            className="text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {costs.subheadline}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {costs.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "var(--color-bg-surface)",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{
                  color: "var(--color-brand-primary)",
                  letterSpacing: "0.12em",
                }}
              >
                ✦
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p
            className="text-2xl md:text-3xl lg:text-4xl leading-snug max-w-3xl mx-auto"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.25,
            }}
          >
            {costs.bottomLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
