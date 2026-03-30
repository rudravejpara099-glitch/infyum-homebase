"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function Section6RightFit() {
  const { rightFit } = copy;

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
            06 · Who this is for
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
              marginBottom: "16px",
              maxWidth: "700px",
            }}
          >
            {rightFit.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "18px",
              color: "var(--fg-2)",
              lineHeight: 1.5,
            }}
          >
            {rightFit.subheadline}
          </motion.p>
        </motion.div>

        {/* Two-column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "80px",
            alignItems: "start",
          }}
          className="rightfit-grid"
        >
          {/* Left — prose */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {[rightFit.opener, rightFit.body, rightFit.consequence].map((para, i) => (
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

            {/* Right-fit highlight */}
            <motion.div
              variants={fadeUp}
              style={{
                marginTop: "8px",
                padding: "28px 32px",
                backgroundColor: "var(--accent-dim)",
                border: "1px solid var(--border-accent)",
                borderRadius: "var(--radius-card)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "var(--fg)",
                  fontWeight: 400,
                }}
              >
                {rightFit.rightFitLine}
              </p>
            </motion.div>
          </motion.div>

          {/* Right — state items */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE }}
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-card)",
              overflow: "hidden",
            }}
          >
            {rightFit.stateItems.map((item, i) => {
              const isLast = i === rightFit.stateItems.length - 1;
              return (
                <div
                  key={i}
                  style={{
                    padding: "24px 28px",
                    backgroundColor: "var(--bg-card)",
                    borderBottom:
                      i < rightFit.stateItems.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--fg-3)",
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </p>
                  <motion.p
                    initial={{
                      color: isLast ? "var(--fg-3)" : "var(--fg)",
                    }}
                    whileInView={
                      isLast
                        ? { color: "var(--accent)" }
                        : undefined
                    }
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    style={{
                      fontFamily: isLast ? "var(--font-display)" : "var(--font-body)",
                      fontStyle: isLast ? "italic" : "normal",
                      fontWeight: isLast ? 400 : 400,
                      fontSize: "18px",
                      lineHeight: 1.35,
                      letterSpacing: isLast ? "-0.01em" : "0",
                    }}
                  >
                    {item.state}
                  </motion.p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .rightfit-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
