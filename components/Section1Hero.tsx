"use client";

import { motion } from "framer-motion";
import { HERO } from "@/content/copy";
import { fadeUp, staggerContainer, slideInFromRight } from "@/lib/animations";
import CtaButton from "./ui/CtaButton";

interface Section1HeroProps {
  onCtaClick: () => void;
}

export default function Section1Hero({ onCtaClick }: Section1HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 md:px-16 pt-24 pb-16 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Radial glow — left biased */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 30% 50%, rgba(43,127,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1312px] mx-auto w-full grid md:grid-cols-[1fr_1fr] gap-12 items-center">
        {/* LEFT — copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <span
              className="inline-block text-[11px] font-medium tracking-[1.5px] text-[#2B7FFF] px-4 py-1.5 rounded-full"
              style={{
                border: "1px solid rgba(43,127,255,0.2)",
                background: "rgba(43,127,255,0.08)",
              }}
            >
              {HERO.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[38px] md:text-[52px] lg:text-[62px] font-bold text-[#F5F5F5] leading-[1.05] tracking-[-0.03em]"
          >
            {HERO.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-[16px] md:text-[17px] text-[#666] leading-[1.85] max-w-[540px]"
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 items-start"
          >
            <CtaButton label={HERO.ctaPrimary} onClick={onCtaClick} size="default" />
            <CtaButton
              label={HERO.ctaSecondary}
              onClick={onCtaClick}
              variant="secondary"
              size="default"
            />
          </motion.div>

          {/* Micro text */}
          <motion.p variants={fadeUp} className="text-[12px] text-[#444]">
            {HERO.micro}
          </motion.p>
        </motion.div>

        {/* RIGHT — Harshil photo placeholder */}
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
          className="flex justify-center md:justify-end"
        >
          {/*
            ╔═══════════════════════════════════════════════╗
            ║  DROP HARSHIL'S PHOTO HERE                    ║
            ║  Replace this div with:                       ║
            ║  <Image                                       ║
            ║    src="/harshil.jpg"                         ║
            ║    alt="Harshil Bhadani"                      ║
            ║    width={600} height={680}                   ║
            ║    className="rounded-2xl object-cover        ║
            ║               object-top w-full"              ║
            ║  />                                           ║
            ║  Recommended: square crop, min 800×800px,     ║
            ║  professional quality, dark or neutral bg     ║
            ╚═══════════════════════════════════════════════╝
          */}
          <div
            className="w-full max-w-[520px] aspect-[4/5] rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #111 0%, #0d1520 100%)",
              border: "1px solid rgba(43,127,255,0.12)",
              boxShadow:
                "0 0 120px rgba(43,127,255,0.1), inset 0 0 60px rgba(43,127,255,0.04)",
            }}
          >
            {/* Subtle inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(43,127,255,0.08) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 text-center px-8">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{
                  background: "rgba(43,127,255,0.1)",
                  border: "1px solid rgba(43,127,255,0.2)",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(43,127,255,0.5)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <p className="text-[13px] font-medium text-[#F5F5F5] mb-2 tracking-wide">
                HARSHIL BHADANI
              </p>
              <p className="text-[11px] text-[#333] leading-relaxed font-mono max-w-[260px]">
                {HERO.photoPlaceholder}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
