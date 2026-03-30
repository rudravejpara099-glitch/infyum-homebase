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
            The diagnostic lens
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-[3.25rem] max-w-3xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {whyHarshil.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24">
          {/* Left — body copy */}
          <div className="flex flex-col gap-5">
            {whyHarshil.opener.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="text-base md:text-lg leading-[1.8]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {line}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base md:text-lg font-semibold mt-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              {whyHarshil.transition}
            </motion.p>

            {[whyHarshil.deepBody, whyHarshil.followUp, whyHarshil.closing].map(
              (para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.28 + i * 0.07 }}
                  className="text-base md:text-lg leading-[1.8]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {para}
                </motion.p>
              )
            )}
          </div>

          {/* Right — stacked list + pull quote */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl p-7"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <p
                className="text-xs font-semibold tracking-[0.14em] uppercase mb-5"
                style={{ color: "var(--color-text-muted)" }}
              >
                What Harshil looks for
              </p>
              <div
                className="flex flex-col gap-0 divide-y"
                style={{ borderColor: "var(--color-border-subtle)" }}
              >
                {whyHarshil.listItems.map((item, i) => (
                  <p
                    key={i}
                    className="text-sm py-4 leading-snug"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    <span
                      className="inline-block mr-2 text-xs"
                      style={{ color: "var(--color-brand-primary)" }}
                    >
                      ✓
                    </span>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-2xl p-7"
              style={{
                background:
                  "linear-gradient(135deg, rgba(43,127,255,0.07) 0%, rgba(0,194,255,0.03) 100%)",
                border: "1px solid var(--color-border-medium)",
              }}
            >
              <p
                className="text-xl md:text-2xl leading-snug"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.35,
                }}
              >
                &ldquo;{whyHarshil.pullQuote}&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
