"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index?: number;
  delay?: number;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  index = 0,
  delay = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" as const }}
      className={cn("group relative overflow-hidden flex flex-col h-full bg-white", className)}
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: "0 4px 20px -4px rgba(11,44,95,0.06)",
        transition: "box-shadow 0.35s ease, transform 0.35s ease",
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 50px -12px rgba(11,44,95,0.16)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Gold top accent — slides in on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a)" }}
      />

      {/* Subtle top-right blob */}
      <div
        className="absolute -top-16 -right-16 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,155,60,0.08), transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col h-full p-8 md:p-9">

        {/* ── Top row: icon + index ── */}
        <div className="flex items-start justify-between mb-8">
          {/* Icon square */}
          <div
            className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-350 group-hover:bg-brand-primary"
            style={{
              background: "rgba(11,44,95,0.06)",
              border: "1px solid rgba(11,44,95,0.1)",
            }}
          >
            <span className="text-brand-primary group-hover:text-white transition-colors duration-300 [&_svg]:w-5 [&_svg]:h-5">
              {icon}
            </span>
          </div>

          {/* Index number */}
          <span
            className="font-serif font-bold text-3xl leading-none select-none transition-colors duration-300"
            style={{ color: "rgba(11,44,95,0.07)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* ── Title ── */}
        <h3 className="font-serif text-xl md:text-[1.35rem] font-bold mb-3.5 text-brand-dark leading-tight group-hover:text-brand-primary transition-colors duration-250">
          {title}
        </h3>

        {/* ── Description ── */}
        <p className="text-brand-dark/52 text-sm md:text-[0.9rem] leading-relaxed flex-grow mb-8">
          {description}
        </p>

        {/* ── CTA ── */}
        <div className="mt-auto pt-5 border-t border-brand-accent/60 flex items-center justify-between">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-primary/60 group-hover:text-brand-primary transition-colors duration-250"
          >
            Explore Solution
          </Link>

          <div
            className="w-8 h-8 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-secondary"
            style={{
              background: "rgba(200,155,60,0.1)",
              border: "1px solid rgba(200,155,60,0.2)",
            }}
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-secondary group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}