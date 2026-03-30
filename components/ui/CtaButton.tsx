"use client";

interface CtaButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  fullWidth?: boolean;
  className?: string;
}

export default function CtaButton({
  label,
  onClick,
  variant = "primary",
  size = "default",
  fullWidth = false,
  className = "",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer select-none";

  const sizeStyles =
    size === "large"
      ? "px-8 py-4 text-[17px]"
      : "px-6 py-3 text-[15px]";

  const variantStyles =
    variant === "primary"
      ? "bg-[#2B7FFF] text-white hover:bg-[#1a6fee] active:scale-[0.98]"
      : "bg-transparent text-white border border-white/15 hover:border-white/30 hover:bg-white/5 active:scale-[0.98]";

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      className={`${base} ${sizeStyles} ${variantStyles} ${widthStyle} ${className}`}
    >
      {label}
    </button>
  );
}
