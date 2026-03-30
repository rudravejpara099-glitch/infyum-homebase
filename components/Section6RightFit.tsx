"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RIGHT_FIT } from "@/content/copy";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Section6RightFit() {
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
        {RIGHT_FIT.sectionNum}
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
          {RIGHT_FIT.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="text-[32px] md:text-[52px] font-bold text-[#F5F5F5] text-center leading-[1.1] tracking-[-0.03em] max-w-[880px] mx-auto mb-4"
        >
          {RIGHT_FIT.headline}
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-[17px] text-[#666] text-center italic mb-4"
        >
          {RIGHT_FIT.subheadline}
        </motion.p>

        {/* Opener */}
        <motion.p
          variants={fadeUp}
          className="text-[16px] text-[#999] text-center mb-6"
        >
          {RIGHT_FIT.opener}
        </motion.p>

        {/* Body */}
        <motion.p
          variants={fadeUp}
          className="text-[16px] text-[#666] text-center leading-[1.85] max-w-[640px] mx-auto mb-14"
        >
          {RIGHT_FIT.body}
        </motion.p>

        {/* State items table */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-col max-w-[700px] mx-auto mb-8"
        >
          {RIGHT_FIT.stateItems.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-center justify-between py-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className="text-[16px]"
                style={{ color: item.highlight ? "#2B7FFF" : "#555" }}
              >
                {item.left}
              </span>
              <span
                className="text-[16px] font-semibold"
                style={{ color: item.highlight ? "#2B7FFF" : "#F5F5F5" }}
              >
                {item.right}
              </span>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
        </motion.div>

        {/* Consequence */}
        <motion.p
          variants={fadeUp}
          className="text-[16px] text-[#666] text-center leading-[1.85] max-w-[640px] mx-auto mb-10"
        >
          {RIGHT_FIT.consequence}
        </motion.p>

        {/* Right-fit callout box */}
        <motion.div
          variants={fadeUp}
          className="max-w-[700px] mx-auto p-8 rounded-2xl"
          style={{
            background: "rgba(43,127,255,0.05)",
            border: "1px solid rgba(43,127,255,0.18)",
          }}
        >
          <p className="text-[15px] text-[#999] leading-[1.85] text-center">
            {RIGHT_FIT.rightFitBox}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
