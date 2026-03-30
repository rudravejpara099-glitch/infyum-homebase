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
          <p
            className="text-xs font-semibold tracking-[0.16em] uppercase mb-5"
            style={{ color: "var(--color-brand-primary)" }}
          >
            The cost of inaction
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-[3.25rem] mb-4 max-w-3xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {costs.headline}
          </h2>
          <p className="text-base" style={{ color: "var(--color-text-muted)" }}>
            {costs.subheadline}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-20"
          style={{
            background: "var(--color-border-subtle)",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          {costs.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="p-8 md:p-10 transition-colors duration-300"
              style={{ backgroundColor: "var(--color-bg-surface)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "var(--color-bg-elevated)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "var(--color-bg-surface)")
              }
            >
              <div className="mb-5">
                <span
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  0{i + 1}
                </span>
              </div>
              <h3
                className="text-lg font-semibold mb-3 leading-snug"
                style={{ color: "var(--color-text-primary)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-[1.75]"
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
          className="text-center max-w-3xl mx-auto"
        >
          <p
            className="text-2xl md:text-3xl lg:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            {costs.bottomLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
