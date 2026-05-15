import CTASection from "@/components/CTASection";
import IndustryCard from "@/components/IndustryCard";
import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import {
  Factory, Stethoscope, Laptop, Plane,
  ShoppingBag, Truck, Landmark, Building2,
  Shield, HeartPulse, GraduationCap, Zap,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Yashika Management Services",
  description: "Specialised manpower and BPO solutions across IT, Healthcare, Manufacturing, Banking, and more.",
};

const industries = [
  { title: "Banking & Finance", icon: <Landmark className="w-6 h-6" /> },
  { title: "IT & Technology", icon: <Laptop className="w-6 h-6" /> },
  { title: "Healthcare & Pharma", icon: <Stethoscope className="w-6 h-6" /> },
  { title: "Manufacturing", icon: <Factory className="w-6 h-6" /> },
  { title: "Aviation & Aerospace", icon: <Plane className="w-6 h-6" /> },
  { title: "Retail & E-commerce", icon: <ShoppingBag className="w-6 h-6" /> },
  { title: "Logistics & Supply Chain", icon: <Truck className="w-6 h-6" /> },
  { title: "Construction & Real Estate", icon: <Building2 className="w-6 h-6" /> },
  { title: "Defense & Security", icon: <Shield className="w-6 h-6" /> },
  { title: "Hospitality", icon: <HeartPulse className="w-6 h-6" /> },
  { title: "Education & EdTech", icon: <GraduationCap className="w-6 h-6" /> },
  { title: "Energy & Utilities", icon: <Zap className="w-6 h-6" /> },
];

const expertisePoints = [
  "Faster turnaround due to pre-built, sector-specific talent pools",
  "Higher retention through precise cultural and role matching",
  "Strict adherence to industry-specific compliance frameworks",
  "Strategic advisory on market compensation benchmarks",
];

export default function IndustriesPage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <div className="relative bg-[#071c3e] overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow blobs */}
        <div
          className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.16), transparent 62%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[420px] h-[420px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04), transparent 65%)" }}
        />
        {/* Diagonal accent */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            right: "30%",
            width: "1px",
            opacity: 0.12,
            background: "linear-gradient(to bottom, transparent, #C89B3C 25%, #C89B3C 75%, transparent)",
            transform: "skewX(-8deg)",
          }}
        />
        {/* Bottom shimmer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.5), transparent)" }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-10 xl:px-16 pt-36 pb-20 md:pt-44 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-8 h-px bg-brand-secondary/70" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-brand-secondary">
              Global Domains
            </span>
            <span className="w-8 h-px bg-brand-secondary/70" />
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-bold text-white text-center leading-[1.06] tracking-tight mb-6 mx-auto max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Industries{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(100deg, #C89B3C, #e8c97a 50%, #C89B3C)" }}
            >
              We Serve
            </span>
          </h1>

          <p className="text-white/50 text-center text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Deep domain expertise ensuring we speak your industry&apos;s language and understand its unique operational challenges.
          </p>

          {/* Stats strip */}
          <div className="flex items-center justify-center gap-8 md:gap-14">
            {[
              { value: "12+", label: "Industries" },
              { value: "500+", label: "Clients" },
              { value: "Pan-India", label: "Coverage" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-serif font-bold text-xl text-white/80 leading-none">{value}</div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════ INDUSTRY CARDS GRID ════ */}
      <section className="py-12 md:py-16 bg-brand-primary relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Gold top line */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }}
        />

        <div className="container mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {industries.map((industry, i) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                icon={industry.icon}
                delay={i * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════ EXPERTISE SECTION ════ */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gold top line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }}
        />

        <div className="container mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Copy ── */}
            <div>
              <SectionHeading
                badge="Specialised Approach"
                title={<>Why Industry Expertise <span className="text-brand-secondary">Matters</span></>}
                alignment="left"
                rule
              />

              <p className="text-brand-dark/55 text-base md:text-lg leading-relaxed mb-10">
                Generic recruitment fails when dealing with specialised corporate roles. Our consultants are divided into
                industry-specific pods — meaning the person handling your requirement actually understands the technical
                nuances, compliance needs, and market dynamics of your sector.
              </p>

              <ul className="space-y-0 divide-y divide-brand-accent/60 mb-10">
                {expertisePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 group cursor-default">
                    <div
                      className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-250 group-hover:bg-brand-secondary"
                      style={{ background: "rgba(200,155,60,0.1)", border: "1px solid rgba(200,155,60,0.2)" }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary group-hover:text-white transition-colors duration-250" />
                    </div>
                    <span className="text-brand-dark/65 text-sm md:text-base leading-relaxed group-hover:text-brand-dark transition-colors duration-200">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary group"
              >
                <span className="w-6 h-px bg-brand-secondary group-hover:w-10 transition-all duration-300" />
                <span className="group-hover:text-brand-secondary transition-colors duration-200">
                  Discuss Your Industry Needs
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* ── Visual ── */}
            <div className="relative">
              <div
                className="relative overflow-hidden aspect-[4/5]"
                style={{ boxShadow: "0 32px 80px -20px rgba(11,44,95,0.18)" }}
              >
                <ImagePlaceholder altText="Industry Expertise" dark aspect="portrait" />
              </div>

              {/* Stat overlay — bottom left */}
              <div
                className="absolute -bottom-5 -left-5 md:-left-8 p-6 hidden sm:block"
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 16px 40px -8px rgba(11,44,95,0.14)",
                }}
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-secondary mb-1">
                  Retention Rate
                </div>
                <div className="font-serif font-bold text-3xl text-brand-dark leading-none">94%</div>
              </div>

              {/* Stat overlay — top right */}
              <div
                className="absolute -top-5 -right-5 md:-right-8 p-5 hidden sm:block"
                style={{
                  background: "#0B2C5F",
                  border: "1px solid rgba(200,155,60,0.2)",
                  boxShadow: "0 16px 40px -8px rgba(11,44,95,0.4)",
                }}
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 mb-1">
                  Domains
                </div>
                <div className="font-serif font-bold text-3xl text-white leading-none">12+</div>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-brand-secondary/45 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-brand-secondary/45 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}