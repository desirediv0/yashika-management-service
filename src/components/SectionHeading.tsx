"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  light?: boolean;
  /** Decorative bottom rule under the title */
  rule?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  alignment = "center",
  light = false,
  rule = true,
}: SectionHeadingProps) {
  const alignClass = {
    center: "mx-auto text-center",
    left: "text-left",
    right: "ml-auto text-right",
  }[alignment];

  const ruleOrigin = {
    center: "mx-auto",
    left: "mr-auto",
    right: "ml-auto",
  }[alignment];

  return (
    <div className={cn("max-w-3xl mb-14 md:mb-20", alignClass)}>

      {/* ── Badge / eyebrow ── */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className={cn(
            "inline-flex items-center gap-3 mb-5",
            alignment === "center" ? "justify-center" : alignment === "right" ? "justify-end" : "justify-start"
          )}
        >
          {/* Left rule — always shown */}
          <motion.span
            className="h-px bg-brand-secondary/70 flex-shrink-0"
            initial={{ width: 0 }}
            whileInView={{ width: "2rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
          />

          <span className={cn(
            "text-[10px] font-bold tracking-[0.22em] uppercase",
            light ? "text-brand-secondary" : "text-brand-secondary"
          )}>
            {badge}
          </span>

          {/* Right rule — only for center alignment */}
          {alignment === "center" && (
            <motion.span
              className="h-px bg-brand-secondary/70 flex-shrink-0"
              initial={{ width: 0 }}
              whileInView={{ width: "2rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
            />
          )}
        </motion.div>
      )}

      {/* ── Title ── */}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: badge ? 0.12 : 0, ease: "easeOut" as const }}
        className={cn(
          "font-serif font-bold leading-[1.08] tracking-tight mb-5",
          light ? "text-white" : "text-brand-dark"
        )}
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
      >
        {title}
      </motion.h2>

      {/* ── Gold rule ── */}
      {rule && (
        <motion.div
          className={cn("h-[2px] mb-6", ruleOrigin)}
          style={{ background: "linear-gradient(to right, #C89B3C, rgba(200,155,60,0.15))" }}
          initial={{ width: 0 }}
          whileInView={{ width: "3.5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" as const }}
        />
      )}

      {/* ── Subtitle ── */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" as const }}
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            alignment === "center" && "mx-auto",
            alignment === "right" && "ml-auto",
            light ? "text-white/60" : "text-brand-dark/55"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}