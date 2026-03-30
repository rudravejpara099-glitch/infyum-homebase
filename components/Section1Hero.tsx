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
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-base)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(43,127,255,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "700px",
            height: "700px",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse at center, rgba(43,127,255,0.10) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "380px",
            height: "380px",
            bottom: "5%",
            right: "5%",
            background:
              "radial-gradient(ellipse at center, rgba(0,194,255,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 pt-40 pb-32 md:pt-48 md:pb-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-9"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase px-4 py-2 rounded-full"
            style={{
              color: "var(--color-brand-primary)",
              border: "1px solid var(--color-border-medium)",
              backgroundColor: "rgba(43,127,255,0.07)",
            }}
          >
            <span>✦</span>
            Free Conversion Audit
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] mb-7 max-w-4xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
          }}
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.17 }}
          className="text-base md:text-lg leading-[1.75] mb-11 max-w-2xl"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-8"
        >
          <CtaButton onClick={onCtaClick} size="large">
            {hero.primaryCta}
          </CtaButton>

          <a
            href="#costs"
            className="group inline-flex items-center gap-2 text-sm font-medium px-6 py-4 rounded-full transition-all duration-200"
            style={{
              color: "var(--color-text-secondary)",
              border: "1px solid var(--color-border-subtle)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.color = "var(--color-text-primary)";
              el.style.borderColor = "var(--color-border-medium)";
              el.style.backgroundColor = "rgba(43,127,255,0.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.color = "var(--color-text-secondary)";
              el.style.borderColor = "var(--color-border-subtle)";
              el.style.backgroundColor = "transparent";
            }}
          >
            {hero.secondaryCta}
            <span className="opacity-60" style={{ fontSize: "0.75em" }}>↓</span>
          </a>
        </motion.div>

        {/* Micro text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center gap-2"
        >
          <div
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: "var(--color-brand-primary)", opacity: 0.6 }}
          />
          <p className="text-xs tracking-wide" style={{ color: "var(--color-text-muted)" }}>
            {hero.microText}
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-bg-surface))",
        }}
      />
    </section>
  );
}
