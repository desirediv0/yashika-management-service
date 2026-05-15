"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  delay?: number;
  className?: string;
}

export default function TestimonialCard({
  content,
  author,
  role,
  company,
  rating = 5,
  delay = 0,
  className,
}: TestimonialCardProps) {
  // Generate a consistent "color" from the author's name for the avatar
  const avatarColors = [
    { bg: "#0B2C5F", text: "#C89B3C" },
    { bg: "#071c3e", text: "#e8c97a" },
    { bg: "#0d3060", text: "#C89B3C" },
  ];
  const colorIdx = author.charCodeAt(0) % avatarColors.length;
  const avatar = avatarColors[colorIdx];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" as const }}
      className={cn(
        "group relative overflow-hidden bg-white flex flex-col h-full",
        className
      )}
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: "0 4px 20px -4px rgba(11,44,95,0.06)",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 50px -12px rgba(11,44,95,0.14)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Gold top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a)" }}
      />

      {/* Large quote mark — decorative */}
      <div
        className="absolute top-6 right-7 font-serif font-bold leading-none select-none pointer-events-none transition-colors duration-500"
        style={{ fontSize: "7rem", lineHeight: 1, color: "rgba(200,155,60,0.07)", fontFamily: "Georgia, serif" }}
        aria-hidden
      >
        &ldquo;
      </div>

      <div className="relative z-10 flex flex-col h-full p-7 md:p-9">

        {/* ── Stars ── */}
        <div className="flex items-center gap-0.5 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 16 16"
              className="w-3.5 h-3.5"
              style={{ fill: i < rating ? "#C89B3C" : "#E2E8F0" }}
            >
              <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.35l-3.71 2.2.71-4.13L2 5.5l4.15-.75L8 1z" />
            </svg>
          ))}
          <span className="ml-2 text-[10px] font-bold text-brand-secondary/70 tracking-widest uppercase">
            Verified
          </span>
        </div>

        {/* ── Quote ── */}
        <blockquote className="text-brand-dark/65 text-sm md:text-[0.9rem] leading-relaxed italic flex-grow mb-8 line-clamp-5">
          &ldquo;{content}&rdquo;
        </blockquote>

        {/* ── Author strip ── */}
        <div className="mt-auto pt-5 border-t border-brand-accent/60 flex items-center gap-4">

          {/* Avatar */}
          <div
            className="w-10 h-10 flex-shrink-0 flex items-center justify-center font-serif font-bold text-base"
            style={{ background: avatar.bg, color: avatar.text }}
          >
            {author.charAt(0).toUpperCase()}
          </div>

          {/* Name + role */}
          <div className="min-w-0">
            <div className="font-serif font-bold text-brand-dark text-[0.92rem] leading-tight truncate">
              {author}
            </div>
            <div className="text-[11px] font-medium mt-0.5 truncate" style={{ color: "#C89B3C" }}>
              {role}
              <span className="text-brand-dark/30 mx-1">·</span>
              {company}
            </div>
          </div>

          {/* Company initial badge */}
          <div
            className="ml-auto w-8 h-8 flex-shrink-0 flex items-center justify-center text-[10px] font-bold uppercase tracking-wide"
            style={{
              border: "1px solid #E2E8F0",
              color: "rgba(11,44,95,0.4)",
            }}
          >
            {company.charAt(0)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}