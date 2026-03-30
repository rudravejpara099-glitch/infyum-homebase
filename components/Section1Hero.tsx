"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import CtaButton from "./ui/CtaButton";

interface Section1HeroProps {
  onCtaClick: () => void;
}

export default function Section1Hero({ onCtaClick }: Section1HeroProps) {
  const { hero } = copy;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      style={{ backgroundColor: "var(--color-bg-base)" }}
    >
      {/* Ambient gradient blob */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse at center, rgba(43,127,255,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            bottom: "15%",
            right: "10%",
            background:
              "radial-gradient(ellipse at center, rgba(0,194,255,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full"
            style={{
              color: "var(--color-brand-primary)",
              border: "1px solid var(--color-border-medium)",
              backgroundColor: "rgba(43,127,255,0.06)",
              letterSpacing: "0.12em",
            }}
          >
            <span style={{ color: "var(--color-brand-primary)" }}>✦</span>
            Free Conversion Audit
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
          }}
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8"
        >
          <CtaButton onClick={onCtaClick} size="large">
            {hero.primaryCta}
          </CtaButton>
          <a
            href="#costs"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 px-6 py-4 rounded-full"
            style={{
              color: "var(--color-text-secondary)",
              border: "1px solid var(--color-border-subtle)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "var(--color-text-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "var(--color-text-secondary)")
            }
          >
            {hero.secondaryCta}
          </a>
        </motion.div>

        {/* Micro text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xs tracking-wide"
          style={{ color: "var(--color-text-muted)" }}
        >
          {hero.microText}
        </motion.p>
      </div>
    </section>
  );
}
