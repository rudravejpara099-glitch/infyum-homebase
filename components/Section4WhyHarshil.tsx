"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { reveal, fadeUp, slideIn, staggerContainerFast } from "@/lib/animations";

export default function Section4WhyHarshil() {
  const { whyHarshil } = copy;

  return (
    <section className="py-28 md:py-36" style={{ backgroundColor: "var(--color-bg-surface)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase mb-5"
            style={{ color: "var(--color-brand-primary)" }}
          >
            The diagnostic lens
          </motion.p>
          <motion.h2
            variants={reveal}
            className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] max-w-3xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            {whyHarshil.headline}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24">
          {/* Left — body copy */}
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {whyHarshil.opener.map((line, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-[0.9375rem] md:text-base"
                style={{ color: "var(--color-text-secondary)", lineHeight: 1.85 }}
              >
                {line}
              </motion.p>
            ))}
            <motion.p
              variants={fadeUp}
              className="text-base font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {whyHarshil.transition}
            </motion.p>
            {[whyHarshil.deepBody, whyHarshil.followUp, whyHarshil.closing].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-[0.9375rem] md:text-base"
                style={{ color: "var(--color-text-secondary)", lineHeight: 1.85 }}
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Right — checklist card + pull quote */}
          <div className="flex flex-col gap-5">
            {/* Checklist card with animated left border */}
            <motion.div
              variants={slideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-[var(--radius-card)] p-7 overflow-hidden"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              {/* Animated left border accent */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{ background: "var(--color-brand-gradient)", transformOrigin: "top" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <p
                className="text-[0.6875rem] font-semibold tracking-[0.16em] uppercase mb-6"
                style={{ color: "var(--color-text-muted)" }}
              >
                What Harshil looks for
              </p>
              <div className="flex flex-col gap-0 divide-y" style={{ borderColor: "var(--color-border-subtle)" }}>
                {whyHarshil.listItems.map((item, i) => (
                  <p
                    key={i}
                    className="text-sm py-4 leading-snug"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    <span className="inline-block mr-2 text-xs" style={{ color: "var(--color-brand-primary)" }}>✓</span>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Pull quote */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[var(--radius-card)] p-7"
              style={{
                background: "linear-gradient(135deg, rgba(43,127,255,0.08) 0%, rgba(0,194,255,0.03) 100%)",
                border: "1px solid rgba(43,127,255,0.18)",
              }}
            >
              <p
                className="text-xl md:text-2xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.015em",
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
