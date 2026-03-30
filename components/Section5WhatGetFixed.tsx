"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function Section5WhatGetFixed() {
  const { whatGetFixed } = copy;

  return (
    <section style={{ backgroundColor: "var(--bg)" }}>
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "140px 32px",
        }}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          style={{ marginBottom: "64px" }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--fg-3)",
              marginBottom: "20px",
            }}
          >
            05 · The work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "clamp(32px, 3.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "var(--fg)",
              marginBottom: "32px",
              maxWidth: "600px",
            }}
          >
            {whatGetFixed.headline}
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px" }}>
            {[whatGetFixed.intro, whatGetFixed.body].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "17px",
                  lineHeight: 1.75,
                  color: "var(--fg-2)",
                  fontWeight: 400,
                }}
              >
                {para}
              </motion.p>
            ))}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: 500,
                color: "var(--fg)",
                paddingTop: "4px",
              }}
            >
              {whatGetFixed.executionLine}
            </motion.p>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-card)",
            overflow: "hidden",
            marginBottom: "64px",
          }}
        >
          {/* Table header */}
          <div
            style={{
              padding: "16px 32px",
              backgroundColor: "var(--bg-card)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--fg-3)",
              }}
            >
              {whatGetFixed.listLabel}
            </p>
          </div>

          {/* Table rows */}
          {whatGetFixed.items.map((item, i) => (
            <motion.div
              key={i}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "32px",
                padding: "22px 32px",
                backgroundColor: "var(--bg-raised)",
                borderBottom:
                  i < whatGetFixed.items.length - 1
                    ? "1px solid var(--border)"
                    : "none",
                transition: "background-color 0.15s ease",
              }}
              whileHover={{ backgroundColor: "var(--bg-card)" } as never}
              className="table-row"
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  flexShrink: 0,
                  width: "140px",
                  letterSpacing: "0.01em",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "var(--fg-2)",
                  fontWeight: 400,
                }}
              >
                {item.desc}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.5vw, 32px)",
            lineHeight: 1.3,
            letterSpacing: "-0.015em",
            color: "var(--fg)",
            maxWidth: "640px",
          }}
        >
          {whatGetFixed.closing}
        </motion.p>
      </div>
    </section>
  );
}
