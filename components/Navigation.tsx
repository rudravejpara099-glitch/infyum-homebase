"use client";

import { copy } from "@/content/copy";
import CtaButton from "./ui/CtaButton";

interface NavigationProps {
  onCtaClick: () => void;
}

export default function Navigation({ onCtaClick }: NavigationProps) {
  const { nav } = copy;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 lg:px-16 h-16 md:h-18"
      style={{
        backgroundColor: "rgba(5,13,26,0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(43,127,255,0.08)",
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-2"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <span
          className="text-sm font-bold tracking-[0.22em]"
          style={{ color: "var(--color-text-primary)" }}
        >
          {nav.logo}
        </span>
      </div>

      {/* CTA */}
      <CtaButton onClick={onCtaClick} size="default">
        <span className="hidden sm:inline">{nav.cta}</span>
        <span className="sm:hidden">Free Audit</span>
      </CtaButton>
    </nav>
  );
}
