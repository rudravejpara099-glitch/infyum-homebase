"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { reveal, fadeUp, staggerContainerFast } from "@/lib/animations";

export default function Section5WhatGetFixed() {
  const { whatGetFixed } = copy;

  return (
    <section className="py-28 md:py-36" style={{ backgroundColor: "var(--color-bg-base)" }}>
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
            Depth of the work
          </motion.p>
          <motion.h2
            variants={reveal}
            className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] max-w-3xl mb-8"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            {whatGetFixed.headline}
          </motion.h2>
          <div className="flex flex-col gap-4 max-w-2xl">
            {[whatGetFixed.intro, whatGetFixed.body].map((para, i) => (
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
              className="text-base font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {whatGetFixed.executionLine}
            </motion.p>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[var(--radius-card)] overflow-hidden mb-14"
          style={{ border: "1px solid var(--color-border-subtle)" }}
        >
          <div
            className="px-8 py-5"
            style={{
              backgroundColor: "var(--color-bg-elevated)",
              borderBottom: "1px solid var(--color-border-subtle)",
            }}
          >
            <p
              className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase"
              style={{ color: "var(--color-text-muted)" }}
            >
              {whatGetFixed.listLabel}
            </p>
          </div>
          {whatGetFixed.items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-6 px-8 py-6"
              style={{
                backgroundColor: "var(--color-bg-surface)",
                borderBottom: i < whatGetFixed.items.length - 1 ? "1px solid var(--color-border-subtle)" : "none",
              }}
              whileHover={{ backgroundColor: "var(--color-bg-elevated)" }}
              transition={{ duration: 0.15 }}
            >
              <span
                className="text-sm font-semibold shrink-0 w-36"
                style={{ color: "var(--color-brand-primary)" }}
              >
                {item.label}
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--color-text-secondary)", lineHeight: 1.75 }}
              >
                — {item.desc}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl max-w-2xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.3,
            letterSpacing: "-0.015em",
          }}
        >
          {whatGetFixed.closing}
        </motion.p>
      </div>
    </section>
  );
}
