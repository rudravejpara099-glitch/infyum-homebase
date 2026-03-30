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
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p
            className="text-xs font-semibold tracking-[0.16em] uppercase mb-5"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Depth of the work
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-[3.25rem] max-w-3xl mb-8"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {whatGetFixed.headline}
          </h2>
          <div className="flex flex-col gap-4 max-w-2xl">
            {[whatGetFixed.intro, whatGetFixed.body].map((para, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-[1.8]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {para}
              </p>
            ))}
            <p
              className="text-base font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {whatGetFixed.executionLine}
            </p>
          </div>
        </motion.div>

        {/* Improvement table */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden mb-14"
          style={{ border: "1px solid var(--color-border-subtle)" }}
        >
          <div
            className="px-8 py-5 flex items-center"
            style={{
              backgroundColor: "var(--color-bg-elevated)",
              borderBottom: "1px solid var(--color-border-subtle)",
            }}
          >
            <p
              className="text-xs font-semibold tracking-[0.16em] uppercase"
              style={{ color: "var(--color-text-muted)" }}
            >
              {whatGetFixed.listLabel}
            </p>
          </div>
          {whatGetFixed.items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-6 px-8 py-6 transition-colors duration-200"
              style={{
                backgroundColor: "var(--color-bg-surface)",
                borderBottom:
                  i < whatGetFixed.items.length - 1
                    ? "1px solid var(--color-border-subtle)"
                    : "none",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "var(--color-bg-elevated)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "var(--color-bg-surface)")
              }
            >
              <span
                className="text-sm font-semibold shrink-0 w-36"
                style={{ color: "var(--color-brand-primary)" }}
              >
                {item.label}
              </span>
              <span
                className="text-sm leading-[1.75]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                — {item.desc}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl max-w-2xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          {whatGetFixed.closing}
        </motion.p>
      </div>
    </section>
  );
}
