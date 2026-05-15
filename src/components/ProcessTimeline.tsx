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
    <div className="relative max-w-5xl mx-auto py-10">

      {/* ── Desktop animated connector line ── */}
      <div className="hidden lg:block absolute top-[3.25rem] left-[5%] right-[5%] h-px overflow-hidden">
        {/* Static base */}
        <div className="absolute inset-0 bg-brand-accent/70" />
        {/* Gold animated fill */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-secondary/60 to-brand-secondary"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        />
        {/* Travelling glow dot */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-secondary shadow-[0_0_8px_2px_rgba(200,155,60,0.7)]"
          initial={{ left: "0%" }}
          whileInView={{ left: "100%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-4 relative">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" as const }}
            className="relative flex flex-col items-center text-center group"
          >

            {/* Mobile vertical connector */}
            {i < steps.length - 1 && (
              <motion.div
                className="lg:hidden absolute top-[3.25rem] left-1/2 -translate-x-1/2 w-px"
                style={{ height: "5.5rem", background: "linear-gradient(to bottom, #C89B3C55, transparent)" }}
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.3, ease: "easeOut" as const }}
              />
            )}

            {/* ── Icon block ── */}
            <div className="relative z-10 mb-6">
              {/* Number badge */}
              <div
                className="absolute -top-2.5 -right-2.5 w-6 h-6 flex items-center justify-center text-[10px] font-bold text-white font-serif z-20 transition-colors duration-300"
                style={{ background: "#0B2C5F" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon square */}
              <div
                className="w-[3.25rem] h-[3.25rem] flex items-center justify-center text-brand-primary transition-all duration-350 group-hover:-translate-y-1.5"
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 16px -4px rgba(11,44,95,0.1)",
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#C89B3C";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px -4px rgba(200,155,60,0.28)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px -4px rgba(11,44,95,0.1)";
                }}
              >
                <span className="text-brand-primary/70 group-hover:text-brand-secondary transition-colors duration-300">
                  {step.icon}
                </span>
              </div>
            </div>

            {/* ── Title ── */}
            <h3 className="font-serif font-bold text-brand-dark text-[1.05rem] leading-tight mb-2.5 group-hover:text-brand-primary transition-colors duration-250">
              {step.title}
            </h3>

            {/* ── Description ── */}
            <p className="text-brand-dark/50 text-[0.8rem] leading-relaxed max-w-[12rem] mx-auto">
              {step.desc}
            </p>

            {/* Gold underline — reveals on hover */}
            <div
              className="mt-4 h-px w-0 group-hover:w-10 bg-brand-secondary transition-all duration-350 origin-center"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}