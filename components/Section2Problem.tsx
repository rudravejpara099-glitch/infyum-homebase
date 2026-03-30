"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function Section2Problem() {
  const { problem } = copy;

  return (
    <section
      style={{
        backgroundColor: "var(--bg-raised)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "140px 32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "80px",
          }}
          className="problem-grid"
        >
          {/* Left — section marker */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ paddingTop: "6px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--fg-3)",
                marginBottom: "16px",
              }}
            >
              02 · Problem
            </p>
            <div
              style={{
                width: "24px",
                height: "1px",
                backgroundColor: "var(--border-2)",
              }}
            />
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "clamp(32px, 3.5vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
                color: "var(--fg)",
                marginBottom: "48px",
                maxWidth: "640px",
              }}
            >
              {problem.headline}
            </motion.h2>

            {/* Paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {problem.paragraphs.map((para, i) => (
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
            </div>

            {/* Closing line — serif italic */}
            <motion.div
              variants={fadeUp}
              style={{
                marginTop: "48px",
                paddingTop: "40px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(20px, 2.2vw, 28px)",
                  lineHeight: 1.35,
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                }}
              >
                {problem.closingLine}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
