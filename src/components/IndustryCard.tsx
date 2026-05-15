"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  icon: ReactNode;
  image?: string;       // URL — Unsplash or local /public path
  description?: string;
  delay?: number;
  className?: string;
}

export default function IndustryCard({
  title,
  icon,
  image,
  description,
  delay = 0,
  className,
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" as const }}
      className={cn("group relative overflow-hidden", className)}
      style={{ aspectRatio: "4/5" }}
    >
      <Link href="/industries" className="block h-full w-full">

        {/* ── Background photo ── */}
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        ) : (
          /* Fallback: solid navy if no image provided */
          <div className="absolute inset-0 bg-[#071c3e]" />
        )}

        {/* Dark gradient overlay — always present, lightens on hover */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-70"
          style={{
            background: "linear-gradient(to top, rgba(7,28,62,0.95) 0%, rgba(7,28,62,0.6) 55%, rgba(7,28,62,0.25) 100%)",
          }}
        />

        {/* Gold top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a)" }}
        />

        {/* Corner mark */}
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/15 z-20 group-hover:border-brand-secondary/50 transition-colors duration-300" />

        {/* ── Card content ── */}
        <div className="absolute inset-0 z-20 flex flex-col p-5 md:p-6">

          {/* Icon — top */}
          <div
            className="w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-350 group-hover:bg-brand-secondary"
            style={{
              background: "rgba(200,155,60,0.2)",
              border: "1px solid rgba(200,155,60,0.35)",
            }}
          >
            <span className="[&_svg]:w-5 [&_svg]:h-5 text-brand-secondary group-hover:text-white transition-colors duration-300">
              {icon}
            </span>
          </div>

          {/* Push everything to bottom */}
          <div className="mt-auto">

            {/* Description — fades in on hover */}
            {description && (
              <p className="text-white/0 group-hover:text-white/65 text-xs leading-relaxed mb-2.5 transition-all duration-400 line-clamp-2 translate-y-1 group-hover:translate-y-0">
                {description}
              </p>
            )}

            {/* Title */}
            <h3 className="font-serif text-base md:text-[1.05rem] leading-snug text-white mb-4">
              {title}
            </h3>

            {/* CTA row */}
            <div className="flex items-center justify-between pt-3 border-t border-white/15 group-hover:border-white/30 transition-colors duration-300">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 group-hover:text-brand-secondary transition-colors duration-300">
                Explore Sector
              </span>
              <div
                className="w-7 h-7 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-secondary"
                style={{ background: "rgba(200,155,60,0.15)", border: "1px solid rgba(200,155,60,0.25)" }}
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-secondary group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-250" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}