"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface CtaButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  size?: "default" | "large";
  className?: string;
}

export default function CtaButton({
  onClick,
  children,
  size = "default",
  className = "",
}: CtaButtonProps) {
  const padding = size === "large" ? "px-8 py-4 text-[0.9375rem]" : "px-6 py-3 text-sm";
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <motion.button
      ref={btnRef}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full font-semibold text-white cursor-pointer overflow-hidden ${padding} ${className}`}
      style={{
        background: "var(--color-brand-gradient)",
        boxShadow: "0 0 0 1px rgba(43,127,255,0.15)",
      }}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onHoverStart={() => {
        if (btnRef.current) btnRef.current.style.boxShadow = "0 0 0 1px rgba(43,127,255,0.25), 0 8px 32px rgba(43,127,255,0.28)";
      }}
      onHoverEnd={() => {
        if (btnRef.current) btnRef.current.style.boxShadow = "0 0 0 1px rgba(43,127,255,0.15)";
      }}
    >
      {/* Shimmer sweep */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          backgroundPositionX: "-100%",
        }}
        whileHover={{ backgroundPositionX: "200%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
