import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Target, Award, Shield, Users, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Yashika Management Services",
  description: "Learn about our journey, mission, and core values that drive our premium manpower and BPO solutions.",
};

const values = [
  {
    icon: Target,
    number: "01",
    title: "Precision",
    desc: "We don't believe in guesswork. Our processes are data-driven and meticulously planned to ensure exact talent matches every time.",
  },
  {
    icon: Award,
    number: "02",
    title: "Excellence",
    desc: "We hold ourselves to the highest corporate standards, delivering premium service quality at every touchpoint of the engagement.",
  },
  {
    icon: Shield,
    number: "03",
    title: "Integrity",
    desc: "Transparency, compliance, and ethical practices form the bedrock of our operations and long-term client relationships.",
  },
];

const milestones = [
  { year: "2012", event: "Founded in Jhajjar, Haryana with a focus on local corporate staffing." },
  { year: "2015", event: "Expanded to BPO services; onboarded first Fortune 500 client." },
  { year: "2018", event: "Launched pan-India operations across 10+ major cities." },
  { year: "2022", event: "Crossed 500+ corporate clients and 10,000+ professionals placed." },
  { year: "2024", event: "Introduced AI-assisted screening and advanced HRIS integration." },
];

const keyStats = [
  { value: "10+", label: "Years Experience", icon: TrendingUp },
  { value: "500+", label: "Corporate Clients", icon: Users },
  { value: "10k+", label: "Professionals Placed", icon: Globe },
  { value: "98.5%", label: "Placement Rate", icon: Award },
];

export default function AboutPage() {
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
        {/* Glow */}
        <div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.16), transparent 62%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04), transparent 65%)" }}
        />
        {/* Diagonal accent */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            left: "35%",
            width: "1px",
            opacity: 0.1,
            background: "linear-gradient(to bottom, transparent, #C89B3C 25%, #C89B3C 75%, transparent)",
            transform: "skewX(-8deg)",
          }}
        />
        {/* Bottom shimmer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.5), transparent)" }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-10 xl:px-16 pt-36 pb-20 md:pt-44 md:pb-24 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-8 h-px bg-brand-secondary/70" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-brand-secondary">
              Our Legacy
            </span>
            <span className="w-8 h-px bg-brand-secondary/70" />
          </div>

          <h1
            className="font-serif font-bold text-white leading-[1.06] tracking-tight mb-6 mx-auto max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            About{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(100deg, #C89B3C, #e8c97a 50%, #C89B3C)" }}
            >
              Yashika
            </span>
          </h1>

          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-14">
            Pioneering excellence in corporate staffing, HR consulting, and BPO operations since inception.
          </p>

          {/* Stat strip */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 pt-8 border-t border-white/8 max-w-2xl mx-auto">
            {keyStats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 group">
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(200,155,60,0.15)", border: "1px solid rgba(200,155,60,0.25)" }}
                >
                  <Icon className="w-4 h-4 text-brand-secondary" />
                </div>
                <div className="text-left">
                  <div className="font-serif font-bold text-white text-lg leading-none">{value}</div>
                  <div className="text-[9px] font-semibold uppercase tracking-widest text-white/30 mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════ OUR STORY ════ */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }}
        />

        <div className="container mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-center">

            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div
                className="relative overflow-hidden aspect-[4/5]"
                style={{ boxShadow: "0 32px 80px -20px rgba(11,44,95,0.18)" }}
              >
                <ImagePlaceholder altText="Our Team" dark aspect="portrait" />
              </div>

              {/* Floating stat — bottom right */}
              <div
                className="absolute -bottom-5 -right-5 md:-right-8 p-6 hidden sm:block"
                style={{
                  background: "#0B2C5F",
                  border: "1px solid rgba(200,155,60,0.2)",
                  boxShadow: "0 16px 40px -8px rgba(11,44,95,0.45)",
                }}
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 mb-1">Since</div>
                <div className="font-serif font-bold text-3xl text-white leading-none">2012</div>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-5 left-5 w-7 h-7 border-t-2 border-l-2 border-brand-secondary/40 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-7 h-7 border-b-2 border-r-2 border-brand-secondary/40 pointer-events-none" />
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="Our Story"
                title={<>Building Tomorrow&apos;s <span className="text-brand-secondary">Corporate Workforce</span></>}
                alignment="left"
                rule
              />

              <div className="space-y-5 text-brand-dark/58 text-base md:text-[1.05rem] leading-relaxed mb-10">
                <p>
                  Yashika Management Services was founded with a singular vision: to bridge the gap between exceptional
                  talent and visionary enterprises. Over the years, we have evolved from a boutique recruitment firm into
                  a comprehensive corporate solutions provider.
                </p>
                <p>
                  Our commitment to quality, compliance, and speed has made us the preferred partner for Fortune 500
                  companies across India. We believe that a company&apos;s greatest asset is its people — and our mission
                  is to ensure you have the best.
                </p>
              </div>

              {/* Key metrics — sharp grid */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  { value: "10+", label: "Years of Excellence" },
                  { value: "500+", label: "Corporate Clients" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-6 group cursor-default transition-all duration-250 hover:-translate-y-0.5"
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 2px 8px -2px rgba(11,44,95,0.05)",
                    }}
                  >
                    <div className="font-serif font-bold text-brand-primary mb-1" style={{ fontSize: "2.4rem", lineHeight: 1 }}>
                      {value}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-dark/35">{label}</p>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary group"
              >
                <span className="w-6 h-px bg-brand-secondary group-hover:w-10 transition-all duration-300" />
                <span className="group-hover:text-brand-secondary transition-colors duration-200">
                  Start a Conversation
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════ TIMELINE ════ */}
      <section className="py-12 md:py-16 bg-brand-primary relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.12), transparent 65%)" }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.45), transparent)" }}
        />

        <div className="container mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <SectionHeading
            badge="Our Journey"
            title={<>Key <span className="text-brand-secondary">Milestones</span></>}
            subtitle="From a focused boutique firm to a pan-India corporate solutions powerhouse."
            light
            rule
          />

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {milestones.map(({ year, event }, i) => (
              <div key={year} className="flex gap-6 md:gap-10 group">
                {/* Year + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-14 h-14 flex items-center justify-center font-serif font-bold text-sm transition-all duration-300 group-hover:bg-brand-secondary"
                    style={{
                      background: "rgba(200,155,60,0.15)",
                      border: "1px solid rgba(200,155,60,0.3)",
                      color: "#C89B3C",
                    }}
                  >
                    <span className="group-hover:text-white transition-colors duration-300">{year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div
                      className="w-px flex-1 my-1"
                      style={{ background: "rgba(200,155,60,0.2)", minHeight: "2.5rem" }}
                    />
                  )}
                </div>

                {/* Event */}
                <div className={`pb-8 pt-3.5 flex-1 min-w-0 ${i === milestones.length - 1 ? "" : ""}`}>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-200">
                    {event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CORE VALUES ════ */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }}
        />

        <div className="container mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <SectionHeading
            badge="Our Guiding Principles"
            title={<>Our Core <span className="text-brand-secondary">Values</span></>}
            subtitle="The fundamental principles that guide every interaction, decision, and corporate strategy."
            rule
          />

          <div className="grid md:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, number, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden flex flex-col p-8 md:p-10 bg-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px -4px rgba(11,44,95,0.06)",
                }}
              >
                {/* Gold top line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a)" }}
                />

                {/* Top row: icon + ghost number */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-primary"
                    style={{
                      background: "rgba(11,44,95,0.06)",
                      border: "1px solid rgba(11,44,95,0.08)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span
                    className="font-serif font-bold text-3xl leading-none select-none"
                    style={{ color: "rgba(11,44,95,0.07)" }}
                  >
                    {number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors duration-250">
                  {title}
                </h3>
                <p className="text-brand-dark/52 text-sm leading-relaxed flex-grow">
                  {desc}
                </p>

                {/* Bottom rule */}
                <div className="mt-7 pt-5 border-t border-brand-accent/60">
                  <div
                    className="h-px w-0 group-hover:w-10 bg-brand-secondary transition-all duration-350"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}