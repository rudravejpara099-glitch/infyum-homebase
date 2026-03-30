"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHY_HARSHIL } from "@/content/copy";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Section4WhyHarshil() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative px-6 md:px-16 py-24 md:py-32"
      style={{ background: "#080808" }}
    >
      {/* Section number */}
      <span className="absolute top-10 right-16 text-[11px] text-[#333] tracking-[3px] hidden md:block">
        {WHY_HARSHIL.sectionNum}
      </span>

      <div className="max-w-[1312px] mx-auto">
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-[11px] font-medium tracking-[2px] text-[#2B7FFF] mb-4"
        >
          {WHY_HARSHIL.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-[32px] md:text-[52px] font-bold text-[#F5F5F5] leading-[1.1] tracking-[-0.03em] max-w-[780px] mb-14"
        >
          {WHY_HARSHIL.headline}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-[760px] flex flex-col gap-6"
        >
          {/* Body opener */}
          {WHY_HARSHIL.bodyOpener.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-[16px] text-[#666] leading-[1.85]"
            >
              {p}
            </motion.p>
          ))}

          {/* List items — stacked lines style, not bullets */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2 pl-0">
            {WHY_HARSHIL.listItems.map((item, i) => (
              <p
                key={i}
                className="text-[16px] text-[#999] leading-[1.85]"
              >
                {item}
              </p>
            ))}
          </motion.div>

          {/* Transition */}
          <motion.p
            variants={fadeUp}
            className="text-[16px] font-semibold text-[#F5F5F5] leading-[1.85]"
          >
            {WHY_HARSHIL.transition}
          </motion.p>

          {/* Deep body */}
          <motion.p
            variants={fadeUp}
            className="text-[16px] text-[#666] leading-[1.85]"
          >
            {WHY_HARSHIL.deepBody}
          </motion.p>

          {/* Follow up */}
          <motion.p
            variants={fadeUp}
            className="text-[16px] text-[#666] leading-[1.85]"
          >
            {WHY_HARSHIL.followUp}
          </motion.p>

          {/* Closing */}
          <motion.p
            variants={fadeUp}
            className="text-[16px] text-[#666] leading-[1.85]"
          >
            {WHY_HARSHIL.closing}
          </motion.p>

          {/* Pull quote */}
          <motion.blockquote
            variants={fadeUp}
            className="mt-4 pl-6 border-l-2 border-[#2B7FFF]"
          >
            <p className="text-[22px] md:text-[26px] text-[#F5F5F5] italic leading-[1.45] font-normal">
              &ldquo;{WHY_HARSHIL.pullQuote}&rdquo;
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
