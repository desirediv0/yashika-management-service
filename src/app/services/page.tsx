import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import AnimatedButton from "@/components/AnimatedButton";
import {
  Users, Briefcase, TrendingUp, ShieldCheck,
  Building2, Globe, HeartHandshake, FileCheck,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Yashika Management Services",
  description: "Explore our comprehensive suite of corporate manpower, HR consulting, and BPO solutions.",
};

const services = [
  { title: "Permanent Staffing", description: "Strategic talent acquisition for long-term organisational growth and stability. We find leaders who align with your corporate vision.", icon: <Users className="w-5 h-5" /> },
  { title: "Contract Staffing", description: "Flexible workforce solutions to handle project surges and seasonal demands without long-term overheads.", icon: <Briefcase className="w-5 h-5" /> },
  { title: "BPO Services", description: "End-to-end business process outsourcing to streamline operations, reduce costs, and enhance customer experience.", icon: <Globe className="w-5 h-5" /> },
  { title: "HR Consulting", description: "Expert advisory on organisational development, compliance, compensation structuring, and performance management.", icon: <TrendingUp className="w-5 h-5" /> },
  { title: "Payroll Management", description: "Accurate, compliant, and timely payroll processing solutions integrated with advanced HRIS platforms.", icon: <FileCheck className="w-5 h-5" /> },
  { title: "Manpower Outsourcing", description: "Comprehensive workforce management letting you focus on core business while we handle personnel operations end-to-end.", icon: <Building2 className="w-5 h-5" /> },
  { title: "Recruitment Solutions", description: "Tailored headhunting and mass recruitment drives using advanced screening and structured assessment methodologies.", icon: <ShieldCheck className="w-5 h-5" /> },
  { title: "Industry Expertise", description: "Specialised consultants dedicated to specific verticals ensuring nuanced understanding of your exact requirements.", icon: <HeartHandshake className="w-5 h-5" /> },
];

const advantages = [
  {
    number: "01",
    title: "Cost Optimisation",
    desc: "Reduce overheads significantly by converting fixed HR costs into variable, outcome-driven operational costs.",
  },
  {
    number: "02",
    title: "Risk Mitigation",
    desc: "We absorb the compliance, legal, and operational risks associated with staffing, payroll, and BPO functions.",
  },
  {
    number: "03",
    title: "Focus on Core",
    desc: "Free up internal resources to focus on strategic growth rather than operational and personnel bottlenecks.",
  },
];

export default function ServicesPage() {
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
        {/* Gold glow */}
        <div
          className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(200,155,60,0.18), transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom left, rgba(11,44,95,0.6), transparent 65%)" }}
        />
        {/* Bottom gold shimmer line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.5), transparent)" }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-10 xl:px-16 pt-36 pb-20 md:pt-44 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-8 h-px bg-brand-secondary/70" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-brand-secondary">
              What We Do
            </span>
            <span className="w-8 h-px bg-brand-secondary/70" />
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-bold text-white text-center leading-[1.06] tracking-tight mb-6 mx-auto max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Premium Corporate{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(100deg, #C89B3C, #e8c97a 50%, #C89B3C)" }}
            >
              Services
            </span>
          </h1>

          <p className="text-white/50 text-center text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            End-to-end solutions designed to scale your business operations and elevate your workforce.
          </p>

          {/* Service count strip */}
          <div className="flex items-center justify-center gap-2 text-white/25 text-xs font-semibold uppercase tracking-widest">
            <span className="w-4 h-px bg-white/15" />
            {services.length} specialist services
            <span className="w-4 h-px bg-white/15" />
          </div>
        </div>
      </div>

      {/* ════ SERVICES GRID ════ */}
      <section className="py-12 md:py-16 bg-white relative">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                {...service}
                index={i}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════ ADVANTAGE + CTA ════ */}
      <section className="py-12 md:py-16 bg-brand-primary relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow top-right */}
        <div
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.15), transparent 65%)" }}
        />
        {/* Gold shimmer top */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.5), transparent)" }}
        />
        {/* Diagonal accent */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none opacity-10"
          style={{
            right: "38%",
            width: "1px",
            background: "linear-gradient(to bottom, transparent 0%, #C89B3C 25%, #C89B3C 75%, transparent 100%)",
            transform: "skewX(-8deg)",
          }}
        />

        <div className="container mx-auto px-6 md:px-10 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-[55%_42%] gap-14 xl:gap-20 items-start">

            {/* ── Advantages ── */}
            <div>
              <SectionHeading
                badge="The Yashika Advantage"
                title={<>Why Outsource <span className="text-brand-secondary">to Us?</span></>}
                alignment="left"
                light
                rule
              />

              <div className="space-y-0 divide-y divide-white/8">
                {advantages.map((item) => (
                  <div
                    key={item.number}
                    className="flex gap-6 py-8 group"
                  >
                    {/* Number */}
                    <div
                      className="font-serif font-bold text-2xl leading-none flex-shrink-0 w-10 pt-0.5 transition-colors duration-300 group-hover:text-brand-secondary"
                      style={{ color: "rgba(200,155,60,0.25)" }}
                    >
                      {item.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="font-serif font-bold text-white text-xl leading-tight group-hover:text-brand-secondary transition-colors duration-250">
                          {item.title}
                        </h4>
                        <CheckCircle2 className="w-5 h-5 text-brand-secondary/50 group-hover:text-brand-secondary flex-shrink-0 transition-colors duration-250 mt-0.5" />
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-8 border-t border-white/8">
                <AnimatedButton href="/about" variant="outline-white" size="md">
                  About Our Approach
                </AnimatedButton>
              </div>
            </div>

            {/* ── Consultation card ── */}
            <div className="lg:sticky lg:top-28">
              <div
                className="relative overflow-hidden p-8 md:p-10"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 32px 80px -20px rgba(0,0,0,0.4)",
                }}
              >
                {/* Gold top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, transparent)" }}
                />

                {/* Corner brackets */}
                <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/12" />
                <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/12" />

                <div className="mb-8">
                  <div
                    className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
                    style={{ color: "rgba(200,155,60,0.8)" }}
                  >
                    <span className="w-4 h-px bg-brand-secondary/60" />
                    Free Consultation
                  </div>
                  <h3 className="font-serif font-bold text-white text-2xl leading-snug mb-3">
                    Ready to discuss your requirements?
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Our specialised consultants are ready to tailor a solution exactly for your corporate needs. No obligation.
                  </p>
                </div>

                {/* Quick benefits */}
                <ul className="space-y-3 mb-8">
                  {["Response within 2 business hours", "Tailored to your industry", "Fully confidential discussion"].map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm text-white/50">
                      <ArrowRight className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <AnimatedButton href="/contact" variant="secondary" size="md" className="w-full justify-center">
                  Schedule a Consultation
                </AnimatedButton>

                <p className="text-center text-white/25 text-[10px] mt-4 font-medium tracking-wide uppercase">
                  No commitment required
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}