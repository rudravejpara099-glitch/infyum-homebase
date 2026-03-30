"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import CtaButton from "./ui/CtaButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

interface Section7AuditProps {
  onCtaClick: () => void;
}

export default function Section7Audit({ onCtaClick }: Section7AuditProps) {
  const { audit } = copy;

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
            07 · Free audit
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
              marginBottom: "12px",
              maxWidth: "640px",
            }}
          >
            {audit.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "17px",
              color: "var(--fg-2)",
            }}
          >
            {audit.subheadline}
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
          className="audit-grid"
        >
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09 } },
            }}
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                lineHeight: 1.75,
                color: "var(--fg-2)",
                fontWeight: 400,
              }}
            >
              {audit.body}
            </motion.p>

            {/* Lens tags */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
            >
              {audit.lenses.map((lens) => (
                <span
                  key={lens}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "var(--fg-2)",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-2)",
                    borderRadius: "var(--radius-pill)",
                    padding: "6px 14px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {lens}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <CtaButton onClick={onCtaClick} size="large">
                {audit.cta}
              </CtaButton>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "var(--fg-3)",
                  maxWidth: "380px",
                  fontWeight: 400,
                }}
              >
                {audit.supportText}
              </p>
            </motion.div>
          </motion.div>

          {/* Right — checklist */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE }}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-card)",
              padding: "32px",
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
                marginBottom: "24px",
              }}
            >
              {audit.auditLabel}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {audit.checklistItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-dim)",
                      border: "1px solid var(--border-accent)",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1px",
                    }}
                  >
                    <span style={{ fontSize: "9px", color: "var(--accent)" }}>✓</span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "var(--fg-2)",
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .audit-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
