import CTASection from "@/components/CTASection";
import IndustryCard from "@/components/IndustryCard";
import SectionHeading from "@/components/SectionHeading";
import AnimatedButton from "@/components/AnimatedButton";
import {
  Factory, Stethoscope, Laptop, Plane,
  ShoppingBag, Truck, Landmark, Building2,
  CheckCircle2, TrendingUp, Users, Globe,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industries We Serve | Yashika Management Services",
  description: "Specialised manpower and BPO solutions across IT, Healthcare, Manufacturing, Banking, and more.",
};

/* ── DATA ── */

const industries = [
  {
    title: "Banking & Finance",
    icon: <Landmark className="w-6 h-6" />,
    image: "/banking-finance.jpg",
    description: "Regulatory-compliant talent for fintech, banking ops, and financial services.",
  },
  {
    title: "IT & Technology",
    icon: <Laptop className="w-6 h-6" />,
    image: "/it-technology.jpg",
    description: "Full-stack engineers, DevOps specialists, and product leaders on demand.",
  },
  {
    title: "Healthcare & Pharma",
    icon: <Stethoscope className="w-6 h-6" />,
    image: "/healthcare.jpg",
    description: "Clinical, administrative, and pharma supply chain workforce solutions.",
  },
  {
    title: "Manufacturing",
    icon: <Factory className="w-6 h-6" />,
    image: "/manufacturing.jpg",
    description: "Skilled operators, technicians, and plant management professionals.",
  },
  {
    title: "Aviation & Aerospace",
    icon: <Plane className="w-6 h-6" />,
    image: "/aviation.jpg",
    description: "Certified aviation crew, ground handling, and MRO workforce solutions.",
  },
  {
    title: "Retail & E-commerce",
    icon: <ShoppingBag className="w-6 h-6" />,
    image: "/retail.jpg",
    description: "Store operations, category management, and fulfilment centre talent.",
  },
  {
    title: "Logistics & Supply Chain",
    icon: <Truck className="w-6 h-6" />,
    image: "/logistics.jpg",
    description: "Fleet management, warehouse ops, and SCM leadership hiring.",
  },
  {
    title: "Construction & Real Estate",
    icon: <Building2 className="w-6 h-6" />,
    image: "/construction.jpg",
    description: "Site engineers, project managers, and safety compliance professionals.",
  },
];

const expertisePoints = [
  "Faster turnaround via pre-built sector-specific talent pools",
  "Higher retention through precise cultural and role matching",
  "Strict adherence to industry-specific compliance frameworks",
  "Strategic advisory on market compensation benchmarks",
];

const heroStats = [
  { value: "12+", label: "Industries", icon: Globe },
  { value: "500+", label: "Clients Served", icon: Users },
  { value: "98.5%", label: "Placement Rate", icon: TrendingUp },
];

/* ── PAGE ── */

export default function IndustriesPage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #1a4080 0%, #0B2C5F 50%, #071e42 100%)" }}
      >
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Gold glow */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.14), transparent 62%)" }}
        />
        {/* Diagonal accent */}
        <div
          className="absolute top-0 bottom-0 w-px pointer-events-none opacity-10"
          style={{
            right: "30%",
            background: "linear-gradient(to bottom, transparent, #C89B3C 25%, #C89B3C 75%, transparent)",
            transform: "skewX(-8deg)",
          }}
        />
        {/* Gold top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }}
        />
        {/* Bottom shimmer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.4), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 xl:px-16 pt-36 pb-20 md:pt-48 md:pb-28">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-brand-secondary" />
              <span className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-secondary">
                Specialised Domains
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-serif font-bold text-white leading-[1.04] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
            >
              Industries{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(100deg, #C89B3C, #e8c97a 50%, #C89B3C)" }}
              >
                We Serve
              </span>
            </h1>

            <p className="text-white/48 text-base md:text-[1.05rem] max-w-2xl leading-relaxed mb-14">
              Deep domain expertise ensures we speak your industry&apos;s language and understand its unique operational challenges — from niche tech to heavy manufacturing.
            </p>

            {/* Stat row */}
            <div className="flex flex-wrap gap-0 border border-white/[0.08]">
              {heroStats.map(({ value, label, icon: Icon }, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-4 px-6 py-5 flex-1 min-w-[140px] ${i !== 0 ? "border-l border-white/[0.08]" : ""}`}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(200,155,60,0.12)",
                      border: "1px solid rgba(200,155,60,0.25)",
                    }}
                  >
                    <Icon className="w-4 h-4 text-brand-secondary" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-white text-xl leading-none mb-0.5">{value}</div>
                    <div className="text-[9px] font-black text-white/28 uppercase tracking-[0.2em]">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════ INDUSTRY CARDS GRID ════ */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(170deg, #1a4080 0%, #0B2C5F 55%, #071e42 100%)" }}
      >
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-32 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.09), transparent 65%)" }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 relative z-10">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              badge="Our Sectors"
              title={<>Expertise Across <span className="text-brand-secondary">Every Domain</span></>}
              alignment="left"
              light
              rule
            />
            <p className="text-white/40 text-sm md:text-base max-w-xs pb-1 flex-shrink-0 hidden md:block">
              {industries.length} specialised sectors with dedicated consultant pods.
            </p>
          </div>

          {/* 4-col grid on desktop, 2-col on tablet, 1-col on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {industries.map((industry, i) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                icon={industry.icon}
                image={industry.image}
                description={industry.description}
                delay={i * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════ EXPERTISE SPLIT ════ */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* Copy */}
            <div>
              <SectionHeading
                badge="Specialised Approach"
                title={
                  <>
                    Why Industry Expertise{" "}
                    <span className="text-brand-secondary">Matters</span>
                  </>
                }
                alignment="left"
                rule
              />

              <p className="text-brand-dark/52 text-base md:text-[1.02rem] leading-relaxed mb-10">
                Generic recruitment fails when dealing with specialised corporate roles. Our consultants are divided into
                industry-specific pods — the person handling your requirement actually understands the technical nuances,
                compliance needs, and market dynamics of your sector.
              </p>

              <ul className="divide-y divide-brand-accent/60 mb-10">
                {expertisePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 group cursor-default">
                    <div
                      className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-250 group-hover:bg-brand-secondary"
                      style={{
                        background: "rgba(200,155,60,0.1)",
                        border: "1px solid rgba(200,155,60,0.2)",
                      }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary group-hover:text-white transition-colors duration-250" />
                    </div>
                    <span className="text-brand-dark/62 text-sm md:text-[0.95rem] leading-relaxed group-hover:text-brand-dark transition-colors duration-200">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <AnimatedButton href="/contact" variant="primary" size="md">
                Discuss Your Industry Needs
              </AnimatedButton>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className="relative overflow-hidden aspect-[4/5]"
                style={{ boxShadow: "0 32px 80px -20px rgba(11,44,95,0.18)" }}
              >
                <Image
                  src="/it-technology.jpg"
                  alt="Industry Expertise"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,44,95,0.3) 0%, transparent 60%)" }}
                />
              </div>

              {/* Floating stat — bottom-left */}
              <div
                className="absolute -bottom-5 -left-4 sm:-left-8 p-6 hidden sm:block"
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 16px 40px -8px rgba(11,44,95,0.14)",
                }}
              >
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-1">
                  Retention Rate
                </div>
                <div className="font-serif font-bold text-3xl text-brand-dark leading-none">94%</div>
              </div>

              {/* Floating stat — top-right */}
              <div
                className="absolute -top-5 -right-4 sm:-right-8 p-5 hidden sm:block"
                style={{
                  background: "linear-gradient(135deg, #1a4080, #0B2C5F)",
                  border: "1px solid rgba(200,155,60,0.2)",
                  boxShadow: "0 16px 40px -8px rgba(11,44,95,0.4)",
                }}
              >
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/35 mb-1">
                  Domains
                </div>
                <div className="font-serif font-bold text-3xl text-white leading-none">12+</div>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-brand-secondary/40 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-brand-secondary/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ════ BOTTOM STRIP — industry name tags ════ */}
      <section
        className="border-t border-brand-accent/60 bg-white py-10 md:py-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-5 h-[2px] bg-brand-secondary" />
            <span className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-secondary">
              All Sectors At A Glance
            </span>
            <span className="w-5 h-[2px] bg-brand-secondary" />
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {industries.map(({ title, icon }) => (
              <div
                key={title}
                className="group flex items-center gap-2.5 px-4 py-2.5 border border-brand-accent/60 hover:border-brand-secondary hover:bg-brand-secondary transition-all duration-250 cursor-default"
              >
                <span className="[&_svg]:w-3.5 [&_svg]:h-3.5 text-brand-secondary/70 group-hover:text-white transition-colors duration-250">
                  {icon}
                </span>
                <span className="text-[0.78rem] font-black uppercase tracking-[0.08em] text-brand-dark/55 group-hover:text-white transition-colors duration-250">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}