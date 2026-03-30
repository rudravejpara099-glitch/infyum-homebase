"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { staggerContainer, reveal, fadeUp } from "@/lib/animations";
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
      {/* Mesh gradient — multi-stop radial */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute"
          style={{
            width: "800px",
            height: "800px",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(43,127,255,0.13) 0%, rgba(0,194,255,0.05) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "500px",
            height: "500px",
            bottom: "0%",
            right: "-5%",
            background:
              "radial-gradient(ellipse at 60% 60%, rgba(0,194,255,0.07) 0%, transparent 65%)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,127,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 75% 55% at 50% 35%, black 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 55% at 50% 35%, black 20%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24 md:pt-40 md:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span
              className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full"
              style={{
                color: "var(--color-brand-primary)",
                border: "1px solid rgba(43,127,255,0.18)",
                backgroundColor: "rgba(43,127,255,0.06)",
              }}
            >
              <span style={{ fontSize: "0.5rem" }}>✦</span>
              Free Conversion Audit
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={reveal}
            className="text-[2.75rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.75rem] mb-7 max-w-4xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-[0.9375rem] md:text-base max-w-2xl mb-10"
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.85,
            }}
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-7">
            <CtaButton onClick={onCtaClick} size="large">
              {hero.primaryCta}
            </CtaButton>

            <a
              href="#costs"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-4 rounded-full"
              style={{
                color: "var(--color-text-secondary)",
                border: "1px solid rgba(43,127,255,0.10)",
                backgroundColor: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(4px)",
                transition: "color var(--duration-base) var(--ease-smooth), background-color var(--duration-base) var(--ease-smooth), border-color var(--duration-base) var(--ease-smooth)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--color-text-primary)";
                el.style.backgroundColor = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(43,127,255,0.20)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--color-text-secondary)";
                el.style.backgroundColor = "rgba(255,255,255,0.02)";
                el.style.borderColor = "rgba(43,127,255,0.10)";
              }}
            >
              {hero.secondaryCta}
              <span style={{ opacity: 0.5, fontSize: "0.7em" }}>↓</span>
            </a>
          </motion.div>

          {/* Micro text */}
          <motion.div variants={fadeUp} className="flex items-center gap-2.5">
            <span
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: "var(--color-brand-primary)", opacity: 0.5 }}
            />
            <p
              className="text-xs tracking-wide"
              style={{ color: "var(--color-text-muted)" }}
            >
              {hero.microText}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-bg-surface))",
        }}
      />
    </section>
  );
}
