"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-14 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(155deg, #1a4080 0%, #0B2C5F 50%, #071e42 100%)",
            boxShadow: "0 32px 80px -16px rgba(11,44,95,0.45)",
          }}
        >
          {/* Dot grid texture */}
          <div
            className="absolute inset-0 z-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Diagonal accents */}
          <div className="absolute top-0 left-[22%] w-px h-full opacity-[0.1] pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #C89B3C 25%, #C89B3C 75%, transparent)", transform: "rotate(8deg) scaleY(1.3)" }} />
          <div className="absolute top-0 right-[22%] w-px h-full opacity-[0.05] pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #ffffff 35%, #ffffff 65%, transparent)", transform: "rotate(8deg) scaleY(1.3)" }} />

          {/* Gold top border */}
          <div className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }} />

          {/* Warm glow top-right */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full pointer-events-none opacity-15"
            style={{ background: "radial-gradient(circle, #C89B3C, transparent 65%)" }} />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-20 md:py-24 text-center max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-3 text-brand-secondary font-black tracking-[0.25em] uppercase text-[10px] mb-7"
            >
              <span className="w-8 h-px bg-brand-secondary/70" />
              Trusted Staffing Partner
              <span className="w-8 h-px bg-brand-secondary/70" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-[3.3rem] font-bold text-white mb-5 leading-[1.06] tracking-tight"
            >
              Looking For Reliable
              <br className="hidden sm:block" />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(95deg, #C89B3C 0%, #e8c97a 50%, #C89B3C 100%)" }}
              >
                Staffing Solutions?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.6 }}
              className="text-base md:text-lg text-white/50 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Partner with Yashika Management Services to secure industry-leading talent and streamline
              operations — from first hire to full-scale workforce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.42, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Primary gold CTA */}
              <AnimatedButton href="/contact" variant="secondary" size="lg">
                Get Free Consultation
              </AnimatedButton>

              {/* Phone CTA — styled to match the button weight */}
              <a
                href="tel:+919306922779"
                className="group inline-flex items-center gap-2.5 px-8 py-[1.05rem] text-[0.82rem] font-black uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-[3px]"
                style={{
                  border: "2px solid rgba(255,255,255,0.22)",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)")}
              >
                <PhoneCall className="w-4 h-4 text-brand-secondary group-hover:scale-110 transition-transform duration-300" />
                <span>+91 93069 22779</span>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.58, duration: 0.5 }}
              className="mt-12 pt-9 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 md:gap-10"
            >
              {["500+ Placements", "50+ Clients", "Pan-India Network", "10+ Industries"].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-[0.18em]">
                  <span className="w-1 h-1 bg-brand-secondary/60" />
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