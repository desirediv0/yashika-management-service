"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, TrendingUp, ShieldCheck, Award, ArrowDown } from "lucide-react";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: "easeOut" as const },
});

const stats = [
  { value: "500+", label: "Corporate Clients", icon: Briefcase },
  { value: "10,000+", label: "Professionals Placed", icon: Users },
  { value: "98.5%", label: "Placement Rate", icon: TrendingUp },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col">

      {/* ── Navy diagonal right panel ── */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[54%] bg-[#071c3e] hidden lg:block pointer-events-none"
        style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-[54%] hidden lg:block opacity-[0.05] pointer-events-none"
        style={{
          clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0% 100%)",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Gold diagonal accent line */}
      <div
        className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
        style={{
          left: "46.6%", width: "2px", zIndex: 1,
          background: "linear-gradient(to bottom, transparent 0%, #C89B3C 20%, #C89B3C 80%, transparent 100%)",
          transform: "skewX(-5.5deg)", opacity: 0.45,
        }}
      />

      {/* Top-left warm glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(200,155,60,0.07), transparent 65%)" }}
      />

      {/* Mobile: thin navy top bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 lg:hidden bg-brand-primary" />

      {/* ══ MAIN CONTENT ══ */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full px-5 sm:px-8 md:px-12 xl:px-20 pt-24 pb-8 md:pt-44 md:pb-12">
          <div className="grid lg:grid-cols-[52%_48%] gap-10 xl:gap-16 items-center min-h-[calc(100vh-12rem)]">

            {/* ════ LEFT — COPY ════ */}
            <div className="flex flex-col justify-center">

              {/* Eyebrow */}
              <motion.div {...fadeUp(0)} className="mb-7 md:mb-9">
                <div className="inline-flex items-center gap-2.5 border border-brand-secondary/35 bg-brand-secondary/6 px-4 py-2">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-65" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary" />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-primary whitespace-nowrap">
                    Premium Corporate Solutions
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp(0.08)}
                className="font-serif leading-[1.04] tracking-tight text-brand-dark mb-6 md:mb-8"
                style={{ fontSize: "clamp(3rem, 6vw, 5.2rem)" }}
              >
                Elevate Your
                <br />
                <span
                  className="bg-clip-text text-transparent inline-block"
                  style={{ backgroundImage: "linear-gradient(105deg, #0B2C5F 0%, #C89B3C 48%, #0B2C5F 100%)" }}
                >
                  Workforce
                </span>
                <br />
                Excellence.
              </motion.h1>

              {/* Body */}
              <motion.p {...fadeUp(0.16)}
                className="text-brand-dark/55 text-base md:text-lg leading-relaxed mb-9 md:mb-11 max-w-lg"
              >
                Yashika Management Services delivers professional manpower, staffing &amp; HR solutions —
                tailored for enterprises that demand quality, speed, and scale.
              </motion.p>

              {/* CTAs */}
              <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-3.5 mb-10 md:mb-12">
                <AnimatedButton href="/contact" variant="primary" size="lg">Partner With Us</AnimatedButton>
                <AnimatedButton href="/services" variant="outline" size="lg" icon={false}>Our Services</AnimatedButton>
              </motion.div>

              {/* Trust strip */}
              <motion.div {...fadeUp(0.32)}
                className="flex flex-wrap items-center gap-4 sm:gap-6 pt-7 border-t border-brand-accent/60"
              >
                {[
                  { icon: ShieldCheck, label: "ISO Certified" },
                  { icon: Award, label: "50+ Industries" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-[11px] font-bold text-brand-dark/45 uppercase tracking-widest">
                    <Icon className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                    {label}
                  </div>
                ))}
                <div className="w-px h-4 bg-brand-accent hidden sm:block" />
                <span className="text-[11px] font-bold text-brand-dark/45 uppercase tracking-widest">Pan-India Network</span>
              </motion.div>
            </div>

            {/* ════ RIGHT — VISUAL ════ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:h-[640px] xl:h-[700px] flex items-center justify-center mt-8 lg:mt-0"
            >

              {/* ── Main hero image card ── */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" as const }}
                className="relative mx-auto w-[80%] sm:w-[62%] lg:w-[78%] overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  boxShadow: "0 40px 100px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(200,155,60,0.12)",
                }}
              >
                {/* Real photo */}
                <Image
                  src="/home.jpg"
                  alt="Professional corporate team"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 35vw"
                />

                {/* Dark overlay for text readability */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(7,28,62,0.88) 0%, rgba(7,28,62,0.3) 50%, transparent 100%)" }}
                />

                {/* Corner brackets */}
                <div className="absolute top-5 left-5 w-7 h-7 border-t-2 border-l-2 border-brand-secondary/70 z-10" />
                <div className="absolute bottom-5 right-5 w-7 h-7 border-b-2 border-r-2 border-brand-secondary/70 z-10" />
                <div className="absolute top-5 right-5 w-4 h-4 border-t border-r border-white/25 z-10" />
                <div className="absolute bottom-5 left-5 w-4 h-4 border-b border-l border-white/25 z-10" />

                {/* Placement rate overlay */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <div
                    className="p-4 sm:p-5"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-white/50 text-[10px] font-bold tracking-[0.18em] uppercase mb-1">Placement Rate</div>
                        <div className="text-white font-serif text-2xl leading-none">98.5%</div>
                      </div>
                      <div
                        className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(200,155,60,0.25)", border: "1px solid rgba(200,155,60,0.4)" }}
                      >
                        <TrendingUp className="w-4 h-4 text-brand-secondary" />
                      </div>
                    </div>
                    <div className="w-full h-[3px] bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "98.5%" }}
                        transition={{ duration: 1.5, delay: 1.1, ease: "easeOut" as const }}
                        className="h-full bg-brand-secondary relative"
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white shadow-md" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card — top left */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" as const }}
                className="absolute top-[6%] left-0 lg:-left-[4%] z-20"
              >
                <motion.div
                  animate={{ y: [-9, 9, -9] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  className="bg-white p-4 sm:p-5 w-[148px] sm:w-[162px]"
                  style={{ boxShadow: "0 20px 50px -12px rgba(11,44,95,0.22)", border: "1px solid rgba(226,232,240,0.9)" }}
                >
                  <div className="w-9 h-9 flex items-center justify-center mb-3.5 bg-brand-secondary">
                    <Briefcase className="w-[18px] h-[18px] text-white" />
                  </div>
                  <div className="font-serif text-[1.7rem] text-brand-dark leading-none mb-1">500+</div>
                  <div className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-wider">Corporate Clients</div>
                </motion.div>
              </motion.div>

              {/* Floating card — mid right */}
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" as const }}
                className="absolute top-[38%] right-0 lg:-right-[3%] z-20"
              >
                <motion.div
                  animate={{ y: [9, -9, 9] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="p-4 sm:p-5 w-[148px] sm:w-[160px]"
                  style={{ background: "#0B2C5F", boxShadow: "0 20px 50px -12px rgba(11,44,95,0.55)", border: "1px solid rgba(200,155,60,0.2)" }}
                >
                  <div className="w-9 h-9 flex items-center justify-center mb-3.5"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <Users className="w-[18px] h-[18px] text-brand-secondary" />
                  </div>
                  <div className="font-serif text-[1.7rem] text-white leading-none mb-1">10k+</div>
                  <div className="text-[10px] font-bold text-white/35 uppercase tracking-wider">Professionals Placed</div>
                </motion.div>
              </motion.div>

              {/* Scroll cue */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-2 left-0 hidden lg:flex flex-col items-center gap-1.5"
              >
                <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
                  <ArrowDown className="w-3.5 h-3.5 text-white/28" />
                </motion.div>
                <span className="text-white/22 text-[9px] font-bold uppercase tracking-[0.22em]" style={{ writingMode: "vertical-lr" }}>
                  Scroll
                </span>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* ══ BOTTOM STATS BAR ══ */}
      <motion.div
        initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" as const }}
        className="relative z-10 border-t border-brand-accent/60 bg-white"
      >
        <div className="w-full px-5 sm:px-8 md:px-12 xl:px-20">
          <div className="grid grid-cols-3 divide-x divide-brand-accent/60">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label}
                className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 px-3 sm:px-6 group hover:bg-brand-light/70 transition-colors duration-200 cursor-default"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(200,155,60,0.1)" }}>
                  <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-brand-secondary" />
                </div>
                <div className="min-w-0">
                  <div className="font-serif text-lg sm:text-xl text-brand-dark leading-none truncate">{value}</div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-brand-dark/38 uppercase tracking-wider mt-0.5 truncate">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}