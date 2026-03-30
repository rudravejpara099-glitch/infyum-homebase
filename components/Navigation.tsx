"use client";

import { useEffect, useState } from "react";
import { copy } from "@/content/copy";
import CtaButton from "./ui/CtaButton";

interface NavigationProps {
  onCtaClick: () => void;
}

export default function Navigation({ onCtaClick }: NavigationProps) {
  const { nav } = copy;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 lg:px-16 h-16 md:h-[4.5rem]"
      style={{
        backgroundColor: "rgba(5,13,26,0.80)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(43,127,255,0.10)"
          : "1px solid transparent",
        transition: "border-color var(--duration-slow) var(--ease-smooth)",
      }}
    >
      <div
        className="text-sm font-bold tracking-[0.22em]"
        style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
      >
        {nav.logo}
      </div>

      <CtaButton onClick={onCtaClick} size="default">
        <span className="hidden sm:inline">{nav.cta}</span>
        <span className="sm:hidden">Free Audit</span>
      </CtaButton>
    </nav>
  );
}
