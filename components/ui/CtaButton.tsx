"use client";

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
  const padding = size === "large" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full font-semibold text-white transition-all duration-200 cursor-pointer ${padding} ${className}`}
      style={{
        background: "var(--color-brand-gradient)",
        boxShadow: "0 0 0 0 rgba(43,127,255,0)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 8px 32px rgba(43,127,255,0.35)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 0 0 0 rgba(43,127,255,0)";
      }}
    >
      {children}
    </button>
  );
}
