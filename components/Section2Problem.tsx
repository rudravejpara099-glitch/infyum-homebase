"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROBLEM } from "@/content/copy";
import { fadeUp, staggerContainer, slideInFromRight } from "@/lib/animations";

export default function Section2Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative px-6 md:px-16 py-24 md:py-32"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Section number */}
      <span className="absolute top-10 right-16 text-[11px] text-[#333] tracking-[3px] font-normal hidden md:block">
        {PROBLEM.sectionNum}
      </span>

      <div className="max-w-[1312px] mx-auto grid md:grid-cols-[42%_58%] gap-16 items-start">
        {/* Left: eyebrow + headline */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col gap-5"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-medium tracking-[2px] text-[#2B7FFF]"
          >
            {PROBLEM.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-[32px] md:text-[44px] font-bold text-[#F5F5F5] leading-[1.15] tracking-[-0.03em]"
          >
            {PROBLEM.headline}
          </motion.h2>
        </motion.div>

        {/* Right: body */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-5"
        >
          {PROBLEM.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={slideInFromRight}
              className="text-[16px] text-[#666] leading-[1.85]"
            >
              {p}
            </motion.p>
          ))}
          <motion.p
            variants={slideInFromRight}
            className="text-[16px] text-[#2B7FFF] leading-[1.85] italic mt-2"
          >
            {PROBLEM.accentLine}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
