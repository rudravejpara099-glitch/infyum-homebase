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
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 lg:px-16 h-16 md:h-20"
      style={{
        backgroundColor: "rgba(5,13,26,0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      {/* Logo */}
      <div
        className="text-lg md:text-xl font-semibold tracking-widest"
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--color-text-primary)",
          letterSpacing: "0.18em",
        }}
      >
        {nav.logo}
      </div>

      {/* CTA */}
      <CtaButton onClick={onCtaClick} size="default">
        <span className="hidden sm:inline">{nav.cta}</span>
        <span className="sm:hidden">Get Free Audit</span>
      </CtaButton>
    </nav>
  );
}
