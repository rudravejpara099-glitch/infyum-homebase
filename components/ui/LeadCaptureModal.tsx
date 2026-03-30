"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { copy } from "@/content/copy";
import CtaButton from "./CtaButton";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const { modal } = copy;
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  const inputBase: React.CSSProperties = {
    backgroundColor: "var(--color-bg-base)",
    border: "1px solid var(--color-border-medium)",
    color: "var(--color-text-primary)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    fontSize: "0.9375rem",
    width: "100%",
    transition: "box-shadow var(--duration-base) var(--ease-smooth)",
    outline: "none",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ backgroundColor: "rgba(5,13,26,0.88)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
        >
          <motion.div
            className="relative w-full max-w-lg"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border-medium)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-colors"
              style={{ color: "var(--color-text-muted)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-secondary)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-muted)")}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <p
                  className="text-4xl mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                >
                  You&apos;re in.
                </p>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9375rem", lineHeight: 1.75 }}>
                  Harshil will review your funnel and get back to you with what he finds.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      lineHeight: 1.2,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.5rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {modal.headline}
                  </h2>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                    {modal.subheadline}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder={modal.fields.name}
                    required
                    style={inputBase}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder={modal.fields.email}
                    required
                    style={inputBase}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <select
                    required
                    style={{ ...inputBase, appearance: "none" } as React.CSSProperties}
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="" disabled>{modal.fields.type}</option>
                    {modal.fields.typeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder={modal.fields.message}
                    rows={3}
                    style={{ ...inputBase, resize: "none" } as React.CSSProperties}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />

                  <button
                    type="submit"
                    className="w-full mt-2 rounded-full font-semibold text-white py-4 text-[0.9375rem] cursor-pointer transition-transform active:scale-[0.985]"
                    style={{ background: "var(--color-brand-gradient)" }}
                  >
                    {modal.submitCta}
                  </button>

                  <p
                    className="text-center"
                    style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", lineHeight: 1.6, marginTop: "0.25rem" }}
                  >
                    {modal.disclaimer}
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
