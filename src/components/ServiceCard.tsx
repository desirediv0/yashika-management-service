"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
  delay?: number;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  image,
  delay = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      className={cn(
        "group relative overflow-hidden flex h-32 sm:h-40 bg-white border border-brand-accent/50",
        className
      )}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 30px -10px rgba(11,44,95,0.12)",
      }}
    >
      {/* ── Left side: Image ── */}
      <div className="relative w-[40%] h-full overflow-hidden flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-brand-primary/5 flex items-center justify-center">
            <div className="text-brand-primary/20 scale-150">{icon}</div>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* ── Right side: Content ── */}
      <div className="flex-1 flex flex-col justify-center p-4 sm:p-6 bg-[#F1F5F9]/50 group-hover:bg-white transition-colors duration-300">
        <h3 className="font-serif text-sm sm:text-base font-bold text-brand-dark mb-1 leading-tight group-hover:text-brand-primary transition-colors">
          {title}
        </h3>
        <p className="text-brand-dark/50 text-[10px] sm:text-xs leading-snug line-clamp-2">
          {description}
        </p>
        
        {/* Subtle icon indicator */}
        <div className="absolute top-2 right-2 text-brand-secondary/30 group-hover:text-brand-secondary/60 transition-colors">
          <div className="scale-75">{icon}</div>
        </div>
      </div>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}