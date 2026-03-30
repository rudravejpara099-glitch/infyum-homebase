"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import CtaButton from "./ui/CtaButton";

interface Section1HeroProps {
  onCtaClick: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Section1Hero({ onCtaClick }: Section1HeroProps) {
  const { hero } = copy;

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "var(--bg)",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle radial glow — centered, very faint */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(43,127,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "128px 32px 100px",
          width: "100%",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
        >
          {/* Section label */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--fg-3)",
              marginBottom: "32px",
            }}
          >
            Free Conversion Audit · Harshil Bhadani
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "clamp(48px, 6.5vw, 84px)",
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
              color: "var(--fg)",
              maxWidth: "820px",
              marginBottom: "28px",
            }}
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: 1.75,
              color: "var(--fg-2)",
              maxWidth: "580px",
              marginBottom: "44px",
            }}
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
            }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
              marginBottom: "48px",
            }}
          >
            <CtaButton onClick={onCtaClick} size="large">
              {hero.primaryCta}
            </CtaButton>

            <a
              href="#costs"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 400,
                color: "var(--fg-2)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "12px 0",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-2)";
              }}
            >
              {hero.secondaryCta}
              <span style={{ fontSize: "11px", opacity: 0.6 }}>↓</span>
            </a>
          </motion.div>

          {/* Micro text */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
            }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--fg-3)",
              letterSpacing: "0.02em",
            }}
          >
            {hero.microText}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
