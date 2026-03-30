"use client";

import { motion } from "framer-motion";
import { copy } from "@/content/copy";

export default function Section6RightFit() {
  const { rightFit } = copy;

  return (
    <section
      className="py-28 md:py-36"
      style={{ backgroundColor: "var(--color-bg-surface)" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p
            className="text-xs font-semibold tracking-[0.16em] uppercase mb-5"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Who this is for
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-[3.25rem] max-w-3xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {rightFit.headline}
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {rightFit.subheadline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-24">
          {/* Left — body + consequence */}
          <div className="flex flex-col gap-5">
            {[rightFit.opener, rightFit.body].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="text-base md:text-lg leading-[1.8]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {para}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-base leading-[1.8] mt-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {rightFit.consequence}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 rounded-2xl p-7"
              style={{
                background:
                  "linear-gradient(135deg, rgba(43,127,255,0.07) 0%, rgba(0,194,255,0.03) 100%)",
                border: "1px solid var(--color-border-medium)",
              }}
            >
              <p
                className="text-base leading-[1.75]"
                style={{ color: "var(--color-text-primary)" }}
              >
                {rightFit.rightFitLine}
              </p>
            </motion.div>
          </div>

          {/* Right — state items as large type */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-0 divide-y self-start rounded-2xl overflow-hidden"
            style={{
              borderColor: "var(--color-border-subtle)",
              border: "1px solid var(--color-border-subtle)",
            }}
          >
            {rightFit.stateItems.map((item, i) => (
              <div
                key={i}
                className="px-7 py-6"
                style={{ backgroundColor: "var(--color-bg-elevated)" }}
              >
                <p
                  className="text-xs font-medium tracking-widest uppercase mb-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-lg"
                  style={{
                    fontFamily: "var(--font-display)",
                    color:
                      i === rightFit.stateItems.length - 1
                        ? "var(--color-brand-primary)"
                        : "var(--color-text-primary)",
                    fontStyle:
                      i === rightFit.stateItems.length - 1 ? "italic" : "normal",
                  }}
                >
                  {item.state}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
