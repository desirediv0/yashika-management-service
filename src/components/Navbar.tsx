"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { PhoneCall, Menu, X, MapPin, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - lastY.current;
    setAtTop(y < 40);
    if (!mobileOpen) {
      if (delta > 8 && y > 120) setVisible(false);
      else if (delta < -4) setVisible(true);
    }
    lastY.current = y;
  });

  return (
    <>
      <AnimatePresence>
        {atTop && !mobileOpen && (
          <motion.div
            key="topbar"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.28, ease: "easeOut" as const }}
            className="fixed top-0 left-0 right-0 z-50 hidden md:block"
            style={{ background: "#071c3e" }}
          >
            <div className="w-full px-6 lg:px-10 xl:px-16 flex justify-between items-center py-[7px]">
              <div className="flex items-center gap-1.5 text-white/50 text-xs">
                <MapPin className="w-3 h-3 text-brand-secondary flex-shrink-0" />
                <span>Jhajjar, Haryana</span>
              </div>
              <div className="flex items-center gap-5 text-xs text-white/50">
                <a href="tel:+919306922779"
                  className="flex items-center gap-1.5 hover:text-brand-secondary transition-colors">
                  <Phone className="w-3 h-3 text-brand-secondary" />
                  +91 9306922779
                </a>
                <span className="w-px h-3 bg-white/15 inline-block" />
                <a href="mailto:Sagaryadav@yashikamanagement.com"
                  className="flex items-center gap-1.5 hover:text-brand-secondary transition-colors">
                  <Mail className="w-3 h-3 text-brand-secondary" />
                  Sagaryadav@yashikamanagement.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <motion.header
        animate={{ y: visible ? 0 : -90 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed left-0 right-0 z-40",
          atTop ? "top-[1.95rem] md:top-[2.3rem]" : "top-0"
        )}
      >
        <div className={cn(
          "transition-all duration-350",
          atTop ? "px-3 md:px-5 lg:px-8" : "px-0"
        )}>
          <div
            className={cn(
              "relative flex items-center justify-between bg-white transition-all duration-350",
              atTop
                ? "rounded-xl px-4 md:px-6 py-1 shadow-[0_4px_24px_rgba(11,44,95,0.1),0_1px_0_rgba(200,155,60,0.12)] border border-brand-accent/80"
                : "rounded-none px-5 md:px-8 lg:px-10 py-2 border-b border-brand-accent/70 shadow-[0_1px_0_rgba(226,232,240,0.9),0_2px_12px_rgba(11,44,95,0.05)]",
              mobileOpen && "!rounded-none border-b border-brand-accent/70 !shadow-none"
            )}
          >
            {!atTop && (
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none">
                <div className="h-full bg-gradient-to-r from-transparent via-brand-secondary/35 to-transparent" />
              </div>
            )}

            {/* ── LOGO ── */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 z-10">
              <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Yashika Management Services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

            </Link>

            {/* ── DESKTOP NAV (absolutely centred) ──
                Centred independently of logo/CTA width
                → ALL 5 items always visible
            ── */}
            <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative px-3.5 lg:px-4 py-2 text-[13px] lg:text-sm font-bold tracking-wide transition-colors duration-200 group whitespace-nowrap",
                      active
                        ? "text-brand-secondary"
                        : "text-brand-dark/60 hover:text-brand-primary"
                    )}
                  >
                    {/* Hover bg */}
                    <span className="absolute inset-0 bg-brand-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    <span className="relative">{link.name}</span>

                    {/* Active / hover gold underline */}
                    <span className={cn(
                      "absolute bottom-0.5 left-3.5 right-3.5 h-[1.5px] bg-brand-secondary origin-left transition-all duration-300",
                      active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50"
                    )} />
                  </Link>
                );
              })}
            </nav>

            {/* ── CTA + MOBILE TOGGLE ── */}
            <div className="flex items-center gap-3 flex-shrink-0 z-10">
              {/* Desktop CTA button */}
              <Link
                href="/contact"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-brand-secondary text-white overflow-hidden relative group hover:-translate-y-0.5 transition-all duration-300"
                style={{ boxShadow: "0 4px 14px rgba(200,155,60,0.4)" }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/22 to-transparent skew-x-[-20deg]" />
                <PhoneCall className="w-3.5 h-3.5 relative flex-shrink-0" />
                <span className="relative">Get in Touch</span>
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center text-brand-dark hover:bg-brand-primary/5 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span key="x"
                      initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span key="m"
                      initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="bd"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-brand-dark/30 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in drawer */}
            <motion.aside
              key="dr"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-[35] w-[80vw] max-w-[300px] bg-white flex flex-col md:hidden"
              style={{ boxShadow: "-4px 0 30px rgba(11,44,95,0.14)" }}
            >
              {/* Gold top stripe */}
              <div className="h-[3px] w-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary flex-shrink-0" />

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-accent/60">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                  <div className="relative w-14 h-14">
                    <Image src="/logo.png" alt="Yashika" fill className="object-contain" />
                  </div>
                  <span className="font-serif text-brand-primary text-[1rem]">
                    Yashika<span className="text-brand-secondary">.</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-brand-dark/40 hover:text-brand-primary"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-3 pt-4 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.06, duration: 0.24, ease: "easeOut" as const }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between w-full px-4 py-3 mb-1 text-sm font-bold transition-all duration-200 group",
                          active
                            ? "bg-brand-primary text-white"
                            : "text-brand-dark/65 hover:bg-brand-primary/5 hover:text-brand-primary"
                        )}
                      >
                        {link.name}
                        <span className={cn(
                          "w-1.5 h-1.5 rounded-full flex-shrink-0",
                          active ? "bg-brand-secondary" : "bg-brand-dark/12 group-hover:bg-brand-secondary"
                        )} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* CTA bottom */}
              <motion.div
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.22 }}
                className="px-4 pb-6 pt-3 border-t border-brand-accent/60 space-y-2"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-brand-secondary text-white w-full py-3.5 font-bold text-sm"
                  style={{ boxShadow: "0 4px 14px rgba(200,155,60,0.4)" }}
                >
                  <PhoneCall className="w-4 h-4" />
                  Contact Us Now
                </Link>
                <a href="tel:+919306922779"
                  className="flex items-center justify-center gap-2 text-brand-primary/50 text-sm hover:text-brand-primary transition-colors py-1 font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +91 9306922779
                </a>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}