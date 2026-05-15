import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Industries We Serve", href: "/industries" },
  { name: "Career", href: "/career" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Permanent Staffing", href: "/services" },
  { name: "Contract Staffing", href: "/services" },
  { name: "BPO Services", href: "/services" },
  { name: "HR Consulting", href: "/services" },
  { name: "Payroll Management", href: "/services" },
];

const socials = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "Twitter / X" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-primary overflow-hidden">
      {/* Decorative top gold shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/70 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/3 blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        {/* ── CTA Banner ── */}
        <div className="border-b border-white/8">
          <div className="container mx-auto px-4 md:px-10 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-brand-secondary text-xs font-semibold tracking-[0.2em] uppercase mb-1">
                  Ready to Scale Your Workforce?
                </p>
                <h3 className="text-white font-serif text-2xl md:text-3xl font-bold">
                  Let&apos;s Build Something Great Together
                </h3>
              </div>
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 bg-brand-secondary text-white px-7 py-3.5 rounded-full font-semibold text-sm flex-shrink-0 shadow-[0_4px_20px_rgba(200,155,60,0.4)] hover:shadow-[0_6px_28px_rgba(200,155,60,0.55)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden relative"
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                <span className="relative">Get in Touch</span>
                <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="container mx-auto px-4 md:px-10 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">

            {/* Brand Column */}
            <div className="space-y-6 lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Yashika Management Services"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>

              </Link>

              <p className="text-white/55 text-sm leading-relaxed">
                Premium corporate manpower, staffing, and BPO solutions designed for enterprises aiming for excellence and operational efficiency.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pt-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/60 hover:bg-brand-secondary hover:text-white transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(200,155,60,0.4)]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-serif text-base font-semibold mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-brand-secondary inline-block" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-white/55 hover:text-brand-secondary transition-all duration-200 flex items-center gap-2.5 text-sm group"
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
              <h3 className="text-white font-serif text-base font-semibold mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-brand-secondary inline-block" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-white/55 hover:text-brand-secondary transition-all duration-200 flex items-center gap-2.5 text-sm group"
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
              <h3 className="text-white font-serif text-base font-semibold mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-brand-secondary inline-block" />
                Contact Us
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3.5 group">
                  <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-secondary/20 transition-colors duration-200">
                    <MapPin className="w-3.5 h-3.5 text-brand-secondary" />
                  </div>
                  <span className="text-white/55 text-sm leading-relaxed">
                    Kaccha Babra Road, Near Dharam Palace,<br />Jhajjar – 124103, Haryana, India
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+919306922779"
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-secondary/20 transition-colors duration-200">
                      <Phone className="w-3.5 h-3.5 text-brand-secondary" />
                    </div>
                    <span className="text-white/55 text-sm group-hover:text-brand-secondary transition-colors duration-200">
                      +91 9306922779
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Sagaryadav@yashikamanagement.com"
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-secondary/20 transition-colors duration-200">
                      <Mail className="w-3.5 h-3.5 text-brand-secondary" />
                    </div>
                    <span className="text-white/55 text-sm group-hover:text-brand-secondary transition-colors duration-200 break-all">
                      Sagaryadav@yashikamanagement.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/35 text-xs">
              © {new Date().getFullYear()} Yashika Management Services. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-white/35 text-xs">
              <Link href="#" className="hover:text-brand-secondary transition-colors px-2 py-1">
                Privacy Policy
              </Link>
              <span className="text-white/15">|</span>
              <Link href="#" className="hover:text-brand-secondary transition-colors px-2 py-1">
                Terms of Service
              </Link>
              <span className="text-white/15">|</span>
              <Link href="/sitemap" className="hover:text-brand-secondary transition-colors px-2 py-1">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}