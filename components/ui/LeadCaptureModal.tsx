"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { MODAL } from "@/content/copy";
import { modalBackdrop, modalCard } from "@/lib/animations";
import CtaButton from "./CtaButton";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            variants={modalCard}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-[480px] rounded-3xl p-10"
            style={{
              background: "#111",
              border: "1px solid rgba(43,127,255,0.2)",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-[#444] hover:text-[#999] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Headline */}
            <h2 className="text-[24px] font-bold leading-tight text-[#F5F5F5] mb-3">
              {MODAL.headline}
            </h2>
            <p className="text-[14px] text-[#666] leading-relaxed mb-7">
              {MODAL.subheadline}
            </p>

            {/* Fields */}
            <form
              onSubmit={(e) => { e.preventDefault(); onClose(); }}
              className="flex flex-col gap-4"
            >
              {MODAL.fields.map((field, i) => (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={field.name}
                    className="text-[13px] font-medium text-[#777]"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={3}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-[#F5F5F5] placeholder:text-[#333] outline-none resize-none transition-all focus:border-[#2B7FFF] focus:shadow-[0_0_0_3px_rgba(43,127,255,0.15)]"
                    />
                  ) : (
                    <input
                      ref={i === 0 ? firstInputRef : undefined}
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.name !== ("message" as string)}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-[#F5F5F5] placeholder:text-[#333] outline-none transition-all focus:border-[#2B7FFF] focus:shadow-[0_0_0_3px_rgba(43,127,255,0.15)]"
                    />
                  )}
                </div>
              ))}

              <CtaButton
                label={MODAL.submit}
                fullWidth
                size="default"
                className="mt-2"
              />

              <p className="text-[12px] text-[#444] text-center">{MODAL.disclaimer}</p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
