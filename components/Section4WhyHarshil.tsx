"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function Section4WhyHarshil() {
  const { whyHarshil } = copy;

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
          style={{ marginBottom: "72px" }}
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
            04 · The diagnostic lens
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
              maxWidth: "640px",
            }}
          >
            {whyHarshil.headline}
          </motion.h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "80px",
            alignItems: "start",
          }}
          className="why-grid"
        >
          {/* Left — prose */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {whyHarshil.opener.map((line, i) => (
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
                {line}
              </motion.p>
            ))}

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                fontWeight: 500,
                color: "var(--fg)",
                lineHeight: 1.6,
              }}
            >
              {whyHarshil.transition}
            </motion.p>

            {[whyHarshil.deepBody, whyHarshil.followUp, whyHarshil.closing].map(
              (para, i) => (
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
              )
            )}
          </motion.div>

          {/* Right — checklist card + pull quote */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-card)",
                padding: "32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Left accent bar */}
              <motion.div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  backgroundColor: "var(--accent)",
                  transformOrigin: "top",
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              />

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--fg-3)",
                  marginBottom: "24px",
                }}
              >
                What Harshil looks for
              </p>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {whyHarshil.listItems.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      borderTop: i > 0 ? "1px solid var(--border)" : "none",
                      padding: "14px 0",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        color: "var(--accent)",
                        flexShrink: 0,
                        marginTop: "3px",
                        opacity: 0.8,
                      }}
                    >
                      ✓
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        lineHeight: 1.55,
                        color: "var(--fg)",
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              style={{
                backgroundColor: "var(--accent-dim)",
                border: "1px solid var(--border-accent)",
                borderRadius: "var(--radius-card)",
                padding: "28px 32px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(17px, 1.6vw, 20px)",
                  lineHeight: 1.4,
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;{whyHarshil.pullQuote}&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
