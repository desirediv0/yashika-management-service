"use client";

import { motion } from "framer-motion";
import { Search, Users, UserCheck, Briefcase, Rocket } from "lucide-react";
import { ReactNode } from "react";

interface Step {
  icon: ReactNode;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { icon: <Search className="w-5 h-5" />, title: "Requirement Analysis", desc: "Deep dive into your corporate culture, role specifics, and business objectives." },
  { icon: <Users className="w-5 h-5" />, title: "Sourcing & Screening", desc: "Leveraging our vast network to identify and evaluate premium talent." },
  { icon: <UserCheck className="w-5 h-5" />, title: "Client Interviews", desc: "Presenting only the most qualified, culturally-aligned candidates." },
  { icon: <Briefcase className="w-5 h-5" />, title: "Selection & Offer", desc: "Managing negotiations and ensuring seamless, confident offer acceptance." },
  { icon: <Rocket className="w-5 h-5" />, title: "Deployment", desc: "Ongoing support ensuring smooth onboarding and long-term team success." },
];

export default function ProcessTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto py-8">

      {/* Desktop connector line */}
      <div className="hidden lg:block absolute top-[3.6rem] left-[5%] right-[5%] h-px overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/80" />
        <motion.div
          className="absolute top-0 left-0 h-full bg-brand-secondary"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
            className="relative flex flex-col items-center text-center group"
          >
            {/* Mobile connector */}
            {i < steps.length - 1 && (
              <motion.div
                className="lg:hidden absolute top-[3.75rem] left-1/2 -translate-x-1/2 w-px"
                style={{ height: "5rem", background: "linear-gradient(to bottom, #C89B3C60, transparent)" }}
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
              />
            )}

            {/* Icon block */}
            <div className="relative z-10 mb-6">
              {/* Step number badge */}
              <div
                className="absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center text-[9px] font-black text-white bg-brand-secondary z-20"
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon square */}
              <div
                className="w-14 h-14 flex items-center justify-center text-brand-primary/70 group-hover:text-brand-secondary bg-white border border-brand-accent/70 group-hover:border-brand-secondary transition-all duration-350 group-hover:-translate-y-2 group-hover:shadow-[0_12px_28px_rgba(200,155,60,0.22)]"
              >
                {step.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-serif font-bold text-brand-dark text-[1rem] leading-tight mb-2.5 group-hover:text-brand-primary transition-colors duration-250">
              {step.title}
            </h3>

            {/* Desc */}
            <p className="text-brand-dark/45 text-[0.78rem] leading-relaxed max-w-[11rem] mx-auto">
              {step.desc}
            </p>

            {/* Gold underline on hover */}
            <div className="mt-4 h-[2px] w-0 group-hover:w-8 bg-brand-secondary transition-all duration-350" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}