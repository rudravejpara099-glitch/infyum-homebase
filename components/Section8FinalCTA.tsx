"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import CtaButton from "./ui/CtaButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

interface Section8FinalCTAProps {
  onCtaClick: () => void;
}

export default function Section8FinalCTA({ onCtaClick }: Section8FinalCTAProps) {
  const { finalCta } = copy;

  return (
    <section
      style={{
        backgroundColor: "var(--bg-raised)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow from bottom */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(43,127,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "140px 32px 160px",
        }}
      >
        {/* Animated rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ transformOrigin: "left", marginBottom: "72px" }}
        >
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, var(--accent) 0%, transparent 60%)",
              opacity: 0.3,
            }}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
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
              marginBottom: "24px",
            }}
          >
            08 · Ready
          </motion.p>

          {/* Big headline */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "clamp(44px, 6vw, 80px)",
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
              color: "var(--fg)",
              marginBottom: "24px",
              maxWidth: "900px",
            }}
          >
            {finalCta.headline}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(18px, 1.8vw, 22px)",
              lineHeight: 1.45,
              color: "var(--accent)",
              marginBottom: "48px",
              opacity: 0.85,
            }}
          >
            {finalCta.subheadline}
          </motion.p>

          {/* Body paragraphs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "600px",
              marginBottom: "56px",
            }}
          >
            {finalCta.paragraphs.map((para, i) => (
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

          {/* CTA block */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <CtaButton onClick={onCtaClick} size="large">
              {finalCta.cta}
            </CtaButton>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "var(--fg-3)",
                lineHeight: 1.6,
                letterSpacing: "0.01em",
              }}
            >
              {finalCta.closingSupport}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
