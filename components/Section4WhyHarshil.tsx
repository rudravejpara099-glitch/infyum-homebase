"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHY_HARSHIL } from "@/content/copy";
import { fadeUp, staggerContainer, slideInFromRight } from "@/lib/animations";

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
          className="text-[32px] md:text-[52px] font-bold text-[#F5F5F5] leading-[1.1] tracking-[-0.03em] max-w-[780px] mb-16"
        >
          {WHY_HARSHIL.headline}
        </motion.h2>

        <div className="grid md:grid-cols-[55%_45%] gap-16 items-start">
          {/* Left: body + pull quote */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            {WHY_HARSHIL.body.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-[16px] text-[#666] leading-[1.85]"
              >
                {p}
              </motion.p>
            ))}

            {/* Pull quote */}
            <motion.blockquote
              variants={fadeUp}
              className="mt-4 pl-5 border-l-2 border-[#2B7FFF]"
            >
              <p className="text-[22px] md:text-[24px] text-[#F5F5F5] italic leading-[1.45] font-normal">
                &ldquo;{WHY_HARSHIL.pullQuote}&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Right: headshot placeholder */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center md:justify-end"
          >
            {/*
              ╔═══════════════════════════════════════════╗
              ║  DROP HARSHIL'S HEADSHOT IMAGE HERE       ║
              ║  Replace this div with:                   ║
              ║  <Image src="/harshil.jpg"                ║
              ║    alt="Harshil Bhadani"                  ║
              ║    width={480} height={480}               ║
              ║    className="rounded-2xl object-cover"/> ║
              ║  Recommended: square crop, min 960×960px  ║
              ╚═══════════════════════════════════════════╝
            */}
            <div
              className="w-full max-w-[480px] aspect-square rounded-2xl flex items-center justify-center"
              style={{
                background: "#111",
                border: "1px solid rgba(43,127,255,0.15)",
                boxShadow: "0 0 80px rgba(43,127,255,0.15)",
              }}
            >
              <div className="text-center px-8">
                <p className="text-[13px] text-[#333] leading-relaxed font-mono">
                  [ HARSHIL BHADANI ]<br />
                  <span className="text-[11px] text-[#2a2a2a]">
                    Drop headshot image here.<br />
                    Square crop · min 960×960px
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
