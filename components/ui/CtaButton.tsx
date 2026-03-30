"use client";

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
  const isLarge = size === "large";

  return (
    <motion.button
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: "var(--accent)",
        color: "#fff",
        border: "none",
        borderRadius: "var(--radius-pill)",
        padding: isLarge ? "14px 28px" : "10px 20px",
        fontSize: isLarge ? "15px" : "13px",
        fontWeight: 500,
        fontFamily: "var(--font-body)",
        cursor: "pointer",
        letterSpacing: "0.01em",
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        position: "relative",
        overflow: "hidden",
      }}
      whileHover={{ backgroundColor: "var(--accent-hover)" } as never}
      whileTap={{ scale: 0.975 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
}
