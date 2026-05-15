"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
}

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon = true,
}: AnimatedButtonProps) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm gap-1.5",
    md: "px-7 py-3.5 text-sm gap-2",
    lg: "px-9 py-4 text-base gap-2.5",
  };

  const base =
    "relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 group select-none";

  const variants = {
    // Navy filled — lift + deep shadow
    primary: cn(
      "bg-brand-primary text-white",
      "shadow-[0_4px_14px_rgba(11,44,95,0.25)]",
      "hover:shadow-[0_8px_24px_rgba(11,44,95,0.38)] hover:-translate-y-0.5"
    ),
    // Gold filled — signature CTA
    secondary: cn(
      "bg-brand-secondary text-white",
      "shadow-[0_4px_14px_rgba(200,155,60,0.35)]",
      "hover:shadow-[0_8px_24px_rgba(200,155,60,0.52)] hover:-translate-y-0.5"
    ),
    // Navy outline on white bg
    outline: cn(
      "bg-transparent text-brand-primary border border-brand-primary/25",
      "hover:bg-brand-primary hover:text-white hover:border-brand-primary",
      "hover:shadow-[0_6px_18px_rgba(11,44,95,0.22)] hover:-translate-y-0.5"
    ),
    // White outline — for dark/hero sections
    "outline-white": cn(
      "bg-transparent text-white border border-white/30",
      "hover:bg-white hover:text-brand-primary hover:border-white",
      "hover:shadow-[0_6px_18px_rgba(255,255,255,0.18)] hover:-translate-y-0.5"
    ),
    // White filled — for dark sections
    white: cn(
      "bg-white text-brand-primary",
      "shadow-[0_4px_14px_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)] hover:-translate-y-0.5"
    ),
    // Ghost — minimal, text only with underline
    ghost: cn(
      "bg-transparent text-brand-primary rounded-none px-0 pb-0.5",
      "border-b border-brand-primary/30 hover:border-brand-secondary hover:text-brand-secondary"
    ),
  };

  const isGhost = variant === "ghost";

  return (
    <Link href={href} className={cn(base, sizes[size], variants[variant], className)}>
      {/* Shimmer sweep — not on ghost */}
      {!isGhost && (
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 60%)",
          }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-[inherit]">
        {children}
        {icon && (
          <ArrowRight
            className={cn(
              "flex-shrink-0 transition-transform duration-250",
              isGhost ? "w-4 h-4" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4",
              "group-hover:translate-x-1"
            )}
          />
        )}
      </span>
    </Link>
  );
}