import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import AnimatedButton from "@/components/AnimatedButton";
import {
  Users, Briefcase, TrendingUp, ShieldCheck,
  Building2, Globe, HeartHandshake, FileCheck,
  CheckCircle2, ArrowRight, HardHat,
  Zap, BarChart3, Lock,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Yashika Management Services",
  description: "Explore our comprehensive suite of corporate manpower, HR consulting, and BPO solutions.",
};

/* ── DATA ── */

const services = [
  {
    title: "Permanent Staffing",
    description: "Strategic talent acquisition for long-term organisational growth and stability. We find leaders who align with your corporate vision.",
    icon: <Users className="w-5 h-5" />,
    image: "/providing-services.jpg",
  },
  {
    title: "Contract Staffing",
    description: "Flexible workforce solutions to handle project surges and seasonal demands without long-term overheads.",
    icon: <Briefcase className="w-5 h-5" />,
    image: "/contractual-services.jpg",
  },
  {
    title: "Loubar Manpower Services",
    description: "Premium skilled, semi-skilled, and general workforce solutions tailored to heavy industrial, logistical, and technical operations.",
    icon: <HardHat className="w-5 h-5" />,
    image: "/loubar-manpower.jpg",
  },
  {
    title: "BPO Services",
    description: "End-to-end business process outsourcing to streamline operations, reduce costs, and enhance customer experience.",
    icon: <Globe className="w-5 h-5" />,
    image: "/bpo-services.jpg",
  },
  {
    title: "HR Consulting",
    description: "Expert advisory on organisational development, compliance, compensation structuring, and performance management.",
    icon: <TrendingUp className="w-5 h-5" />,
    image: "/hr-consulting.jpg",
  },
  {
    title: "Payroll Management",
    description: "Accurate, compliant, and timely payroll processing solutions integrated with advanced HRIS platforms.",
    icon: <FileCheck className="w-5 h-5" />,
    image: "/payroll-management.jpg",
  },
  {
    title: "Manpower Outsourcing",
    description: "Comprehensive workforce management letting you focus on core business while we handle personnel operations end-to-end.",
    icon: <Building2 className="w-5 h-5" />,
    image: "/manpower-solutions.jpg",
  },
  {
    title: "Recruitment Solutions",
    description: "Tailored headhunting and mass recruitment drives using advanced screening and structured assessment methodologies.",
    icon: <ShieldCheck className="w-5 h-5" />,
    image: "/recruitment-solutions.jpg",
  },
  {
    title: "Industry Expertise",
    description: "Specialised consultants dedicated to specific verticals ensuring nuanced understanding of your exact requirements.",
    icon: <HeartHandshake className="w-5 h-5" />,
    image: "/industry-expertise.jpg",
  },
];

const advantages = [
  {
    icon: BarChart3,
    number: "01",
    title: "Cost Optimisation",
    desc: "Reduce overheads significantly by converting fixed HR costs into variable, outcome-driven operational costs.",
  },
  {
    icon: Lock,
    number: "02",
    title: "Risk Mitigation",
    desc: "We absorb the compliance, legal, and operational risks associated with staffing, payroll, and BPO functions.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Focus on Core",
    desc: "Free up internal resources to focus on strategic growth rather than operational and personnel bottlenecks.",
  },
];

/* ── PAGE ── */

export default function ServicesPage() {
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
        {/* Gold glow top-right */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.14), transparent 62%)" }}
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
          <div className="max-w-3xl mx-auto text-center">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="w-6 h-[2px] bg-brand-secondary" />
              <span className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-secondary">
                What We Do
              </span>
              <span className="w-6 h-[2px] bg-brand-secondary" />
            </div>

            {/* Heading */}
            <h1
              className="font-serif font-bold text-white leading-[1.04] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
            >
              Premium Corporate{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(100deg, #C89B3C, #e8c97a 50%, #C89B3C)" }}
              >
                Solutions
              </span>
            </h1>

            <p className="text-white/48 text-base md:text-[1.05rem] max-w-xl mx-auto leading-relaxed mb-10">
              End-to-end staffing, HR, and outsourcing solutions designed to scale your business and elevate your workforce.
            </p>

            {/* Service count pill */}
            <div className="inline-flex items-center gap-3 border border-white/12 px-5 py-2.5">
              <span className="font-serif font-bold text-white text-lg leading-none">{services.length}</span>
              <span className="w-px h-4 bg-white/15" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">Specialist Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* ════ SERVICES GRID ════ */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ background: "#F8FAFC" }}
      >
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

        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 relative z-10">
          <SectionHeading
            badge="Our Core Services"
            title={<>Everything Your <span className="text-brand-secondary">Enterprise Needs</span></>}
            subtitle="Comprehensive, compliance-ready solutions built around your operational goals."
            rule
          />

          {/* 3-column grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════ ADVANTAGE + CTA CARD ════ */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
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
        {/* Glow */}
        <div
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.12), transparent 65%)" }}
        />
        {/* Gold top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }}
        />
        {/* Diagonal accent */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none opacity-[0.08] w-px"
          style={{
            right: "35%",
            background: "linear-gradient(to bottom, transparent, #C89B3C 25%, #C89B3C 75%, transparent)",
            transform: "skewX(-8deg)",
          }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-start">

            {/* ── Advantages ── */}
            <div>
              <SectionHeading
                badge="The Yashika Advantage"
                title={<>Why Outsource <span className="text-brand-secondary">to Us?</span></>}
                alignment="left"
                light
                rule
              />

              <div className="divide-y divide-white/[0.07]">
                {advantages.map(({ icon: Icon, number, title, desc }) => (
                  <div key={number} className="flex gap-6 py-8 group">
                    {/* Icon + number */}
                    <div className="flex flex-col items-center gap-3 flex-shrink-0">
                      <div
                        className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-secondary"
                        style={{
                          background: "rgba(200,155,60,0.12)",
                          border: "1px solid rgba(200,155,60,0.25)",
                        }}
                      >
                        <Icon className="w-5 h-5 text-brand-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span
                        className="font-serif font-black text-[0.7rem] transition-colors duration-300 group-hover:text-brand-secondary"
                        style={{ color: "rgba(200,155,60,0.25)" }}
                      >
                        {number}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0 pt-1.5">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="font-serif font-bold text-white text-xl leading-tight group-hover:text-brand-secondary transition-colors duration-250">
                          {title}
                        </h4>
                        <CheckCircle2 className="w-5 h-5 text-brand-secondary/40 group-hover:text-brand-secondary flex-shrink-0 transition-colors duration-250 mt-0.5" />
                      </div>
                      <p className="text-white/48 text-[0.9rem] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-8 border-t border-white/[0.07]">
                <AnimatedButton href="/about" variant="outline-white" size="md">
                  About Our Approach
                </AnimatedButton>
              </div>
            </div>

            {/* ── Consultation Card ── */}
            <div className="lg:sticky lg:top-28">
              <div
                className="relative overflow-hidden p-8 md:p-10"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 32px 80px -20px rgba(0,0,0,0.4)",
                }}
              >
                {/* Gold top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 60%, transparent)" }}
                />

                {/* Corner marks */}
                <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/10" />
                <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/10" />

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-5 h-[2px] bg-brand-secondary" />
                    <span className="text-[10px] font-black tracking-[0.25em] uppercase text-brand-secondary/80">
                      Free Consultation
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-white text-2xl leading-snug mb-3">
                    Ready to discuss your requirements?
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Our specialised consultants are ready to tailor a solution exactly for your corporate needs. No obligation whatsoever.
                  </p>
                </div>

                {/* Benefits list */}
                <ul className="space-y-3 mb-8">
                  {[
                    "Response within 2 business hours",
                    "Tailored to your industry",
                    "Fully confidential discussion",
                  ].map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm text-white/45">
                      <ArrowRight className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <AnimatedButton href="/contact" variant="secondary" size="md" className="w-full justify-center">
                  Schedule a Consultation
                </AnimatedButton>

                <p className="text-center text-white/22 text-[10px] mt-4 font-black uppercase tracking-[0.15em]">
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