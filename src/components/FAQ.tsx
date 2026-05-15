"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQProps {
  question: string;
  answer: string;
  index?: number;
}

export default function FAQ({ question, answer, index = 0 }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: "easeOut" }}
    >
      <div
        className={cn(
          "group rounded-2xl border overflow-hidden transition-all duration-300 mb-3",
          isOpen
            ? "border-brand-secondary/40 shadow-[0_4px_20px_rgba(200,155,60,0.1)] bg-white"
            : "border-brand-accent/70 bg-white hover:border-brand-primary/20 hover:shadow-[0_2px_12px_rgba(11,44,95,0.06)]"
        )}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-5 px-6 py-5 md:px-8 md:py-6 text-left focus:outline-none"
        >
          {/* Index number */}
          <span
            className={cn(
              "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-serif transition-all duration-300",
              isOpen
                ? "bg-brand-secondary text-white shadow-[0_2px_8px_rgba(200,155,60,0.4)]"
                : "bg-brand-light text-brand-dark/30 group-hover:bg-brand-primary/8 group-hover:text-brand-primary/50"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Question */}
          <span
            className={cn(
              "flex-1 font-serif text-base md:text-lg font-semibold leading-snug transition-colors duration-200 pr-4",
              isOpen ? "text-brand-primary" : "text-brand-dark group-hover:text-brand-primary"
            )}
          >
            {question}
          </span>

          {/* Toggle icon */}
          <span
            className={cn(
              "flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-350",
              isOpen
                ? "border-brand-secondary/60 bg-brand-secondary/8 text-brand-secondary rotate-45"
                : "border-brand-accent text-brand-dark/30 group-hover:border-brand-primary/30 group-hover:text-brand-primary"
            )}
          >
            {/* Plus → X via rotate */}
            <svg viewBox="0 0 14 14" className="w-3 h-3 fill-none stroke-current stroke-[1.8]" strokeLinecap="round">
              <line x1="7" y1="1" x2="7" y2="13" />
              <line x1="1" y1="7" x2="13" y2="7" />
            </svg>
          </span>
        </button>

        {/* Answer panel */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 md:px-8 md:pb-7 pl-[4.75rem]">
                {/* Gold left border accent */}
                <div className="border-l-2 border-brand-secondary/30 pl-5">
                  <p className="text-brand-dark/60 text-sm md:text-base leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}