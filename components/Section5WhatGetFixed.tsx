"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHAT_GETS_FIXED } from "@/content/copy";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Section5WhatGetFixed() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="px-6 md:px-16 py-24 md:py-32"
      style={{ background: "#0A0A0A" }}
    >
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
          {WHAT_GETS_FIXED.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="text-[32px] md:text-[52px] font-bold text-[#F5F5F5] text-center leading-[1.1] tracking-[-0.03em] max-w-[800px] mx-auto mb-6"
        >
          {WHAT_GETS_FIXED.headline}
        </motion.h2>

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          className="text-[16px] text-[#666] text-center leading-[1.85] max-w-[660px] mx-auto mb-14"
        >
          {WHAT_GETS_FIXED.intro}
        </motion.p>

        {/* Rows */}
        <motion.div variants={staggerContainer} className="flex flex-col">
          {WHAT_GETS_FIXED.rows.map((row, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 py-5 px-4 -mx-4 rounded-xl transition-colors duration-150"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              whileHover={{ backgroundColor: "rgba(17,17,17,1)" }}
            >
              <span className="text-[16px] font-semibold text-[#F5F5F5] shrink-0 min-w-[220px]">
                {row.label}
                <span className="text-[#333] mx-2">—</span>
              </span>
              <span className="text-[15px] text-[#666] leading-[1.7]">
                {row.desc}
              </span>
            </motion.div>
          ))}
          {/* Final divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} />
        </motion.div>

        {/* Closing line */}
        <motion.p
          variants={fadeUp}
          className="text-[18px] md:text-[20px] text-[#999] italic text-center max-w-[800px] mx-auto mt-14"
        >
          {WHAT_GETS_FIXED.closingLine}
        </motion.p>
      </motion.div>
    </section>
  );
}
