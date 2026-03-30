"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export default function Section6RightFit() {
  const { rightFit } = copy;

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
          className="text-4xl md:text-5xl lg:text-6xl mb-5"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {rightFit.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg mb-12"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {rightFit.subheadline}
        </motion.p>

        <div className="flex flex-col gap-5 mb-14">
          {[rightFit.opener, rightFit.body].map((para, i) => (
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

        {/* State items */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14"
        >
          {rightFit.stateItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 rounded-2xl px-6 py-5"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item.label}
              </span>
              <span
                className="text-xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text-primary)",
                }}
              >
                {item.state}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed mb-10"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {rightFit.consequence}
        </motion.p>

        {/* Right fit box */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl px-8 py-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(43,127,255,0.07) 0%, rgba(0,194,255,0.04) 100%)",
            border: "1px solid var(--color-border-medium)",
          }}
        >
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-primary)" }}
          >
            {rightFit.rightFitLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
