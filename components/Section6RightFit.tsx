"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { reveal, fadeUp, slideIn, staggerContainerFast } from "@/lib/animations";

export default function Section6RightFit() {
  const { rightFit } = copy;

  return (
    <section className="py-28 md:py-36" style={{ backgroundColor: "var(--color-bg-surface)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase mb-5"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Who this is for
          </motion.p>
          <motion.h2
            variants={reveal}
            className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] max-w-3xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            {rightFit.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[0.9375rem] md:text-base"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {rightFit.subheadline}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-24">
          {/* Left — body */}
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {[rightFit.opener, rightFit.body].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-[0.9375rem] md:text-base"
                style={{ color: "var(--color-text-secondary)", lineHeight: 1.85 }}
              >
                {para}
              </motion.p>
            ))}
            <motion.p
              variants={fadeUp}
              className="text-[0.9375rem] md:text-base"
              style={{ color: "var(--color-text-secondary)", lineHeight: 1.85 }}
            >
              {rightFit.consequence}
            </motion.p>

            {/* Right-fit highlight box */}
            <motion.div
              variants={fadeUp}
              className="mt-4 rounded-[var(--radius-card)] p-7"
              style={{
                background: "linear-gradient(135deg, rgba(43,127,255,0.08) 0%, rgba(0,194,255,0.03) 100%)",
                border: "1px solid rgba(43,127,255,0.18)",
              }}
            >
              <p
                className="text-[0.9375rem] md:text-base"
                style={{ color: "var(--color-text-primary)", lineHeight: 1.75 }}
              >
                {rightFit.rightFitLine}
              </p>
            </motion.div>
          </motion.div>

          {/* Right — state items */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-0 divide-y self-start rounded-[var(--radius-card)] overflow-hidden"
            style={{ border: "1px solid var(--color-border-subtle)" }}
          >
            {rightFit.stateItems.map((item, i) => {
              const isLast = i === rightFit.stateItems.length - 1;
              return (
                <motion.div
                  key={i}
                  className="px-7 py-6"
                  style={{ backgroundColor: "var(--color-bg-elevated)", borderColor: "var(--color-border-subtle)" }}
                  whileHover={{ backgroundColor: "rgba(15,30,56,0.9)" }}
                  transition={{ duration: 0.15 }}
                >
                  <p
                    className="text-[0.6875rem] font-medium tracking-widest uppercase mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.label}
                  </p>
                  <motion.p
                    className="text-lg"
                    initial={{ color: isLast ? "var(--color-text-muted)" : "var(--color-text-primary)" }}
                    whileInView={isLast ? { color: "var(--color-brand-primary)" } : undefined}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: isLast ? "italic" : "normal",
                    }}
                  >
                    {item.state}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
