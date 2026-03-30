"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { COSTS } from "@/content/copy";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Section3Costs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative px-6 md:px-16 py-24 md:py-32"
      style={{ background: "#0A0A0A" }}
    >
      {/* Section number */}
      <span className="absolute top-10 right-16 text-[11px] text-[#333] tracking-[3px] hidden md:block">
        {COSTS.sectionNum}
      </span>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1312px] mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="text-[11px] font-medium tracking-[2px] text-[#2B7FFF] text-center mb-4"
        >
          {COSTS.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="text-[32px] md:text-[52px] font-bold text-[#F5F5F5] text-center leading-[1.1] tracking-[-0.03em] max-w-[800px] mx-auto mb-4"
        >
          {COSTS.headline}
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-[17px] text-[#666] text-center mb-14"
        >
          {COSTS.subheadline}
        </motion.p>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 gap-6"
        >
          {COSTS.cards.map((card) => (
            <motion.div
              key={card.num}
              variants={scaleIn}
              className="relative p-8 rounded-2xl group transition-all duration-300 overflow-hidden"
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              whileHover={{
                borderColor: "rgba(43,127,255,0.2)",
                y: -2,
                transition: { duration: 0.2 },
              }}
            >
              {/* Watermark number */}
              <span className="absolute top-4 right-6 text-[64px] font-bold text-[#161616] select-none leading-none pointer-events-none">
                {card.num}
              </span>

              <div className="relative z-10">
                <h3 className="text-[18px] font-semibold text-[#F5F5F5] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[15px] text-[#666] leading-[1.7]">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.p
          variants={fadeUp}
          className="text-[18px] md:text-[20px] text-[#999] italic text-center max-w-[900px] mx-auto mt-14"
        >
          {COSTS.closingLine}
        </motion.p>
      </motion.div>
    </section>
  );
}
