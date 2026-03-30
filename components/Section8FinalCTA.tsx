"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { reveal, fadeUp, staggerContainerFast } from "@/lib/animations";
import CtaButton from "./ui/CtaButton";

interface Section8FinalCTAProps {
  onCtaClick: () => void;
}

export default function Section8FinalCTA({ onCtaClick }: Section8FinalCTAProps) {
  const { finalCta } = copy;

  return (
    <section
      className="relative py-32 md:py-44 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-surface)" }}
    >
      {/* Cross-hatch dot grid — layer 1 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(43,127,255,0.09) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 85%)",
        }}
      />
      {/* Cross-hatch dot grid — layer 2 (offset, rotated) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,194,255,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          backgroundPosition: "22px 22px",
          maskImage: "radial-gradient(ellipse 55% 65% at 50% 50%, black 5%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 55% 65% at 50% 50%, black 5%, transparent 80%)",
        }}
      />

      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 100%, rgba(43,127,255,0.09) 0%, transparent 100%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Thin HR rule with gradient */}
        <motion.div
          className="mb-12"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
        >
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(43,127,255,0.4) 40%, rgba(0,194,255,0.3) 60%, transparent)",
            }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase mb-7"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Ready to fix it
          </motion.p>

          <motion.h2
            variants={reveal}
            className="text-[2.75rem] md:text-[3.75rem] lg:text-[5rem] xl:text-[5.5rem] mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            {finalCta.headline}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl font-medium mb-12"
            style={{ color: "var(--color-brand-primary)" }}
          >
            {finalCta.subheadline}
          </motion.p>

          <div className="flex flex-col gap-5 mb-14 max-w-2xl">
            {finalCta.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-[0.9375rem] md:text-base"
                style={{ color: "var(--color-text-secondary)", lineHeight: 1.85 }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div variants={fadeUp} className="flex flex-col items-start gap-5">
            <CtaButton onClick={onCtaClick} size="large">
              {finalCta.cta}
            </CtaButton>
            <p className="text-xs tracking-wide" style={{ color: "var(--color-text-muted)" }}>
              {finalCta.closingSupport}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
