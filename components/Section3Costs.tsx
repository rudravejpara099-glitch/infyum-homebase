"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function Section3Costs() {
  const { costs } = copy;

  return (
    <section
      id="costs"
      style={{ backgroundColor: "var(--bg)" }}
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
            03 · The real cost
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
              maxWidth: "600px",
            }}
          >
            {costs.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--fg-3)",
              fontWeight: 400,
            }}
          >
            {costs.subheadline}
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            backgroundColor: "var(--border)",
            borderRadius: "var(--radius-card)",
            overflow: "hidden",
            marginBottom: "80px",
          }}
          className="costs-grid"
        >
          {costs.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                backgroundColor: "var(--bg-card)",
                padding: "36px 40px",
                position: "relative",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "var(--bg-card-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "var(--bg-card)";
              }}
            >
              {/* Number watermark */}
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "32px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "72px",
                  lineHeight: 1,
                  color: "var(--fg)",
                  opacity: 0.025,
                  pointerEvents: "none",
                  userSelect: "none",
                  letterSpacing: "-0.05em",
                }}
              >
                0{i + 1}
              </span>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "20px",
                  opacity: 0.7,
                }}
              >
                0{i + 1}
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "17px",
                  lineHeight: 1.35,
                  color: "var(--fg)",
                  marginBottom: "12px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "var(--fg-2)",
                  fontWeight: 400,
                }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom line */}
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
            maxWidth: "680px",
          }}
        >
          {costs.bottomLine}
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .costs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
