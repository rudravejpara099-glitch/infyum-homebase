"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { NAV } from "@/content/copy";
import CtaButton from "./ui/CtaButton";

interface NavigationProps {
  onCtaClick: () => void;
}

export default function Navigation({ onCtaClick }: NavigationProps) {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

  return (
    <motion.nav
      style={{ borderBottomColor: `rgba(255,255,255,${borderOpacity})` }}
      className="fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-16 border-b border-transparent"
      initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(8,8,8,0)" }}
      animate={{ backdropFilter: "blur(16px)", backgroundColor: "rgba(8,8,8,0.7)" }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-[#F5F5F5] font-semibold text-[18px] tracking-[2.5px]">
        {NAV.wordmark}
      </span>

      <CtaButton label={NAV.cta} onClick={onCtaClick} size="default" />
    </motion.nav>
  );
}
