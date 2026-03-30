"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export default function Section5WhatGetFixed() {
  const { whatGetFixed } = copy;

  return (
    <section
      className="py-28 md:py-36"
      style={{ backgroundColor: "var(--color-bg-base)" }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl mb-10"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {whatGetFixed.headline}
        </motion.h2>

        <div className="flex flex-col gap-5 mb-14">
          {[whatGetFixed.intro, whatGetFixed.body].map((para, i) => (
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

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-semibold"
            style={{ color: "var(--color-text-primary)" }}
          >
            {whatGetFixed.executionLine}
          </motion.p>
        </div>

        {/* List */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-8 md:p-10 mb-12"
          style={{
            backgroundColor: "var(--color-bg-surface)",
            border: "1px solid var(--color-border-subtle)",
          }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-8"
            style={{
              color: "var(--color-text-muted)",
              letterSpacing: "0.14em",
            }}
          >
            {whatGetFixed.listLabel}
          </p>
          <div className="flex flex-col divide-y" style={{ borderColor: "var(--color-border-subtle)" }}>
            {whatGetFixed.items.map((item, i) => (
              <div
                key={i}
                className="flex items-baseline gap-4 py-5"
              >
                <span
                  className="text-base font-semibold min-w-[160px]"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  {item.label}
                </span>
                <span
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  — {item.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.3,
          }}
        >
          {whatGetFixed.closing}
        </motion.p>
      </div>
    </section>
  );
}
