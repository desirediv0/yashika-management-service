"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Subtle outer glow behind card */}
      <div className="absolute inset-x-8 md:inset-x-20 top-1/2 -translate-y-1/2 h-3/4 rounded-[3rem] bg-brand-primary/8 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden bg-brand-primary"
          style={{ boxShadow: "0 32px 80px -20px rgba(11,44,95,0.45), 0 0 0 1px rgba(200,155,60,0.15)" }}
        >
          {/* ── Dot grid ── */}
          <div
            className="absolute inset-0 z-0 opacity-[0.045]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* ── Glow blobs ── */}
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-brand-secondary/20 blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />

          {/* ── Diagonal gold accent stripe ── */}
          <div
            className="absolute top-0 right-[15%] w-px h-full opacity-10 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #C89B3C 30%, #C89B3C 70%, transparent)", transform: "rotate(12deg) scaleY(1.4)" }}
          />
          <div
            className="absolute top-0 right-[28%] w-px h-full opacity-5 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #ffffff 40%, #ffffff 60%, transparent)", transform: "rotate(12deg) scaleY(1.4)" }}
          />

          {/* ── Floating orbs ── */}
          <motion.div
            animate={{ y: [0, -14, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-12 w-2 h-2 rounded-full bg-brand-secondary/70"
            style={{ filter: "blur(0.5px)" }}
          />
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 right-16 w-1.5 h-1.5 rounded-full bg-white/50"
            style={{ filter: "blur(0.5px)" }}
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-[8%] w-1 h-1 rounded-full bg-brand-secondary/50"
          />

          {/* ── Top gold shimmer line ── */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/60 to-transparent" />

          {/* ── Content ── */}
          <div className="relative z-10 px-8 py-16 md:px-20 md:py-24 text-center max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-3 text-brand-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-7"
            >
              <span className="w-10 h-px bg-brand-secondary/70" />
              Trusted Staffing Partner
              <span className="w-10 h-px bg-brand-secondary/70" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-[3.5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Looking For Reliable{" "}
              <br className="hidden sm:block" />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(95deg, #C89B3C 0%, #e8c97a 50%, #C89B3C 100%)" }}
              >
                Staffing Solutions?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-lg text-white/65 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Partner with Yashika Management Services to secure industry-leading talent and streamline your operations — from first hire to full-scale workforce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <AnimatedButton href="/contact" variant="secondary" size="lg">
                Get Free Consultation
              </AnimatedButton>

              <a
                href="tel:+919306922779"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-white/50 hover:bg-white/8 transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-brand-secondary group-hover:rotate-12 transition-transform duration-300" />
                <span>+91 93069 22779</span>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 pt-10 border-t border-white/8 flex flex-wrap items-center justify-center gap-8 text-white/40 text-xs font-medium tracking-wide"
            >
              {["500+ Placements", "50+ Clients", "Pan-India Network", "10+ Industries"].map((badge) => (
                <span key={badge} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-secondary/60" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}