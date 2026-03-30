"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { copy } from "@/content/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  backgroundColor: "var(--bg-raised)",
  border: "1px solid var(--border-2)",
  color: "var(--fg)",
  borderRadius: "var(--radius-sm)",
  padding: "12px 14px",
  fontSize: "14px",
  width: "100%",
  fontWeight: 400,
  lineHeight: 1.5,
  transition: "border-color 0.15s ease",
  outline: "none",
};

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const { modal } = copy;
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            backgroundColor: "rgba(8,8,8,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-2)",
              borderRadius: "16px",
              padding: "36px",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "32px",
                height: "32px",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--fg-3)",
                fontSize: "16px",
                lineHeight: 1,
                fontFamily: "var(--font-body)",
                transition: "color 0.15s ease, border-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.color = "var(--fg)";
                el.style.borderColor = "var(--border-2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.color = "var(--fg-3)";
                el.style.borderColor = "var(--border)";
              }}
            >
              ×
            </button>

            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "32px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "36px",
                    color: "var(--fg)",
                    lineHeight: 1.2,
                  }}
                >
                  You&rsquo;re in.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--fg-2)",
                  }}
                >
                  Harshil will review your funnel and get back to you with what he finds.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div style={{ marginBottom: "28px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      fontSize: "22px",
                      lineHeight: 1.25,
                      color: "var(--fg)",
                      letterSpacing: "-0.025em",
                      marginBottom: "8px",
                    }}
                  >
                    {modal.headline}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "var(--fg-2)",
                      fontWeight: 400,
                    }}
                  >
                    {modal.subheadline}
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <input
                    type="text"
                    placeholder={modal.fields.name}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLInputElement).style.borderColor =
                        "var(--accent)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLInputElement).style.borderColor =
                        "var(--border-2)";
                    }}
                  />
                  <input
                    type="email"
                    placeholder={modal.fields.email}
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLInputElement).style.borderColor =
                        "var(--accent)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLInputElement).style.borderColor =
                        "var(--border-2)";
                    }}
                  />
                  <select
                    required
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{ ...inputStyle, appearance: "none" } as React.CSSProperties}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLSelectElement).style.borderColor =
                        "var(--accent)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLSelectElement).style.borderColor =
                        "var(--border-2)";
                    }}
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
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" } as React.CSSProperties}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLTextAreaElement).style.borderColor =
                        "var(--accent)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLTextAreaElement).style.borderColor =
                        "var(--border-2)";
                    }}
                  />

                  <button
                    type="submit"
                    style={{
                      marginTop: "6px",
                      width: "100%",
                      backgroundColor: "var(--accent)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "var(--radius-pill)",
                      padding: "14px 24px",
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "var(--font-body)",
                      cursor: "pointer",
                      letterSpacing: "0.01em",
                      transition: "background-color 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        "var(--accent-hover)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        "var(--accent)";
                    }}
                  >
                    {modal.submitCta}
                  </button>

                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      lineHeight: 1.6,
                      color: "var(--fg-3)",
                      marginTop: "4px",
                    }}
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
