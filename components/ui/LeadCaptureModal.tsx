"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { copy } from "@/content/copy";
import CtaButton from "./CtaButton";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const { modal } = copy;
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  if (!isOpen) return null;

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200";
  const inputStyle = {
    backgroundColor: "var(--color-bg-base)",
    border: "1px solid var(--color-border-medium)",
    color: "var(--color-text-primary)",
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(5,13,26,0.85)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl p-8 md:p-10"
        style={{
          backgroundColor: "var(--color-bg-elevated)",
          border: "1px solid var(--color-border-medium)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 cursor-pointer"
          style={{ color: "var(--color-text-muted)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color =
              "var(--color-text-secondary)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color =
              "var(--color-text-muted)")
          }
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div
              className="text-4xl mb-4 font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text-primary)",
              }}
            >
              You&apos;re in.
            </div>
            <p style={{ color: "var(--color-text-secondary)" }} className="text-base leading-relaxed">
              Harshil will review your funnel and get back to you with what he finds.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2
                className="text-2xl md:text-3xl mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.2,
                }}
              >
                {modal.headline}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {modal.subheadline}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder={modal.fields.name}
                required
                className={inputClass}
                style={inputStyle}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                placeholder={modal.fields.email}
                required
                className={inputClass}
                style={inputStyle}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <select
                required
                className={inputClass}
                style={{ ...inputStyle, appearance: "none" }}
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                <option value="" disabled>
                  {modal.fields.type}
                </option>
                {modal.fields.typeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <textarea
                placeholder={modal.fields.message}
                rows={3}
                className={inputClass}
                style={{ ...inputStyle, resize: "none" }}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <CtaButton onClick={() => {}} size="large" className="w-full mt-2">
                {modal.submitCta}
              </CtaButton>

              <p className="text-center text-xs" style={{ color: "var(--color-text-muted)" }}>
                {modal.disclaimer}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
