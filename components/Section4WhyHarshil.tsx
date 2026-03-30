"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export default function Section4WhyHarshil() {
  const { whyHarshil } = copy;

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
          className="text-4xl md:text-5xl lg:text-6xl mb-14"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {whyHarshil.headline}
        </motion.h2>

        {/* Opener */}
        <div className="mb-10 flex flex-col gap-4">
          {whyHarshil.opener.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Stacked list */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col gap-3 pl-0 border-l-2"
          style={{ borderColor: "var(--color-border-medium)" }}
        >
          {whyHarshil.listItems.map((item, i) => (
            <p
              key={i}
              className="text-lg pl-6 leading-snug"
              style={{ color: "var(--color-text-primary)" }}
            >
              {item}
            </p>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg font-semibold mb-8"
          style={{ color: "var(--color-text-primary)" }}
        >
          {whyHarshil.transition}
        </motion.p>

        <div className="flex flex-col gap-6 mb-16">
          {[whyHarshil.deepBody, whyHarshil.followUp, whyHarshil.closing].map(
            (para, i) => (
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
            )
          )}
        </div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center py-12 px-6"
          style={{ borderTop: "1px solid var(--color-border-subtle)" }}
        >
          <p
            className="text-2xl md:text-4xl leading-snug"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              color: "var(--color-text-primary)",
            }}
          >
            &ldquo;{whyHarshil.pullQuote}&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
