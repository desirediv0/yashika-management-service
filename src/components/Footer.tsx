import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Industries We Serve", href: "/industries" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Permanent Staffing", href: "/services" },
  { name: "Contractual Services", href: "/services" },
  { name: "Loubar Manpower Services", href: "/services" },
  { name: "Manpower Solutions", href: "/services" },
  { name: "BPO Services", href: "/services" },
  { name: "Recruitment Solutions", href: "/services" },
];

const socials = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "Twitter / X" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ background: "linear-gradient(170deg, #1a4080 0%, #0B2C5F 45%, #071e42 100%)" }}>

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }} />

      {/* Dot texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }} />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-brand-secondary/6 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-white/[0.025] blur-[90px] pointer-events-none" />

      <div className="relative z-10">

        {/* ── CTA Banner ── */}
        <div className="border-b border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 py-10 md:py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-7">
              <div>
                <p className="text-brand-secondary text-[10px] font-black tracking-[0.25em] uppercase mb-2">
                  Ready to Scale Your Workforce?
                </p>
                <h3 className="text-white font-serif text-2xl md:text-[2rem] font-bold leading-tight">
                  Let&apos;s Build Something Great Together
                </h3>
              </div>

              <Link
                href="/contact"
                className="group flex items-center gap-2.5 px-7 py-3.5 text-[0.78rem] font-black uppercase tracking-[0.1em] text-white flex-shrink-0 overflow-hidden relative transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(200,155,60,0.55)]"
                style={{
                  background: "linear-gradient(135deg, #d9ae55 0%, #C89B3C 55%, #a87d28 100%)",
                  boxShadow: "0 4px 18px rgba(200,155,60,0.40)",
                }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-650 bg-gradient-to-r from-transparent via-white/22 to-transparent" />
                <span className="relative">Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 pt-14 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">

            {/* Brand */}
            <div className="space-y-5 lg:col-span-1">
              <Link href="/" className="inline-block">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Yashika Management Services"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </Link>

              <p className="text-white/45 text-sm leading-relaxed">
                Premium corporate manpower, staffing, and BPO solutions designed for enterprises aiming for excellence and operational efficiency.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-2 pt-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center border border-white/10 text-white/45 hover:border-brand-secondary hover:text-white hover:bg-brand-secondary transition-all duration-250 hover:-translate-y-[2px]"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-black text-[0.7rem] tracking-[0.22em] uppercase mb-6 flex items-center gap-2.5">
                <span className="w-4 h-[2px] bg-brand-secondary inline-block" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-white/45 hover:text-brand-secondary transition-all duration-200 flex items-center gap-2.5 text-sm group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand-secondary transition-all duration-250 flex-shrink-0" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-black text-[0.7rem] tracking-[0.22em] uppercase mb-6 flex items-center gap-2.5">
                <span className="w-4 h-[2px] bg-brand-secondary inline-block" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-white/45 hover:text-brand-secondary transition-all duration-200 flex items-center gap-2.5 text-sm group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand-secondary transition-all duration-250 flex-shrink-0" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-black text-[0.7rem] tracking-[0.22em] uppercase mb-6 flex items-center gap-2.5">
                <span className="w-4 h-[2px] bg-brand-secondary inline-block" />
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3.5 group">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10 group-hover:border-brand-secondary/40 transition-colors duration-200">
                    <MapPin className="w-3.5 h-3.5 text-brand-secondary" />
                  </div>
                  <span className="text-white/45 text-sm leading-relaxed">
                    Kaccha Babra Road, Near Dharam Palace,<br />Jhajjar – 124103, Haryana, India
                  </span>
                </li>
                <li>
                  <a href="tel:+919306922779" className="flex items-center gap-3.5 group">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-brand-secondary/40 transition-colors duration-200">
                      <Phone className="w-3.5 h-3.5 text-brand-secondary" />
                    </div>
                    <span className="text-white/45 text-sm group-hover:text-brand-secondary transition-colors duration-200">
                      +91 9306922779
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:Sagaryadav@yashikamanagement.com" className="flex items-center gap-3.5 group">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-brand-secondary/40 transition-colors duration-200">
                      <Mail className="w-3.5 h-3.5 text-brand-secondary" />
                    </div>
                    <span className="text-white/45 text-sm group-hover:text-brand-secondary transition-colors duration-200 break-all">
                      Sagaryadav@yashikamanagement.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-7 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/28 text-xs font-medium">
              © {new Date().getFullYear()} Yashika Management Services. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-white/28 text-xs">
              <Link href="#" className="hover:text-brand-secondary transition-colors px-2 py-1 font-medium">
                Privacy Policy
              </Link>
              <span className="text-white/12">|</span>
              <Link href="#" className="hover:text-brand-secondary transition-colors px-2 py-1 font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}