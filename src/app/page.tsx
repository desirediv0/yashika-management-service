"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import ProcessTimeline from "@/components/ProcessTimeline";
import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";
import {
  Users, Briefcase, TrendingUp, ShieldCheck,
  Building2, Globe, HeartHandshake, FileCheck,
  Factory, Stethoscope, Laptop, Plane,
  ShoppingBag, Truck, Landmark,
  Award, Clock, CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

/* ─────────────── DATA ─────────────── */

const services = [
  { title: "Providing Services", description: "Permanent Staffing Solutions", icon: <Users className="w-5 h-5" />, image: "/providing-services.jpg" },
  { title: "Contractual Services", description: "Temporary & Flexible Staffing", icon: <Briefcase className="w-5 h-5" />, image: "/contractual-services.jpg" },
  { title: "Manpower Solutions", description: "Comprehensive Staff Augmentation", icon: <Building2 className="w-5 h-5" />, image: "/manpower-solutions.jpg" },
  { title: "Recruitment Solutions", description: "Skilled & Verified Candidates", icon: <ShieldCheck className="w-5 h-5" />, image: "/recruitment-solutions.jpg" },
  { title: "Industry Expertise", description: "Multi-sector Operational Solutions", icon: <HeartHandshake className="w-5 h-5" />, image: "/industry-expertise.jpg" },
  { title: "HR Consulting", description: "Strategic Planning & Compliance", icon: <TrendingUp className="w-5 h-5" />, image: "/hr-consulting.jpg" },
  { title: "BPO Services", description: "End-to-end Process Outsourcing", icon: <Globe className="w-5 h-5" />, image: "/bpo-services.jpg" },
  { title: "Payroll Management", description: "Accurate & Timely Processing", icon: <FileCheck className="w-5 h-5" />, image: "/payroll-management.jpg" },
];

const industries = [
  {
    title: "Banking & Finance",
    icon: <Landmark className="w-6 h-6" />,
    image: "/banking-finance.jpg",
  },
  {
    title: "IT & Technology",
    icon: <Laptop className="w-6 h-6" />,
    image: "/it-technology.jpg",
  },
  {
    title: "Healthcare",
    icon: <Stethoscope className="w-6 h-6" />,
    image: "/healthcare.jpg",
  },
  {
    title: "Manufacturing",
    icon: <Factory className="w-6 h-6" />,
    image: "/manufacturing.jpg",
  },
  {
    title: "Aviation",
    icon: <Plane className="w-6 h-6" />,
    image: "/aviation.jpg",
  },
  {
    title: "Retail",
    icon: <ShoppingBag className="w-6 h-6" />,
    image: "/retail.jpg",
  },
  {
    title: "Logistics",
    icon: <Truck className="w-6 h-6" />,
    image: "/logistics.jpg",
  },
  {
    title: "Construction",
    icon: <Building2 className="w-6 h-6" />,
    image: "/construction.jpg",
  },
];

const aboutFeatures = [
  { title: "10+ Years Experience", icon: <Clock className="w-4 h-4" /> },
  { title: "1000+ Corporate Clients", icon: <Building2 className="w-4 h-4" /> },
  { title: "50+ Industry Sectors", icon: <Award className="w-4 h-4" /> },
  { title: "Corporate Compliance", icon: <Award className="w-4 h-4" /> },
];

const trustedBrands = ["Enterprise Co.", "FinServe Ltd.", "TechGlobal", "Apex Corp.", "BuildRight"];

const faqs = [
  { question: "What makes Yashika Management Services different?", answer: "We focus on a consultative approach rather than transactional recruiting. Our rigorous screening process, industry-specific expertise, and commitment to corporate compliance set us apart as a premium partner." },
  { question: "How long does the recruitment process take?", answer: "For standard positions, we typically provide a curated shortlist within 48–72 hours. Executive search may take 2–4 weeks depending on the complexity of the role and market availability." },
  { question: "Do you provide PAN India support?", answer: "Yes, we have a robust network and infrastructure to support hiring and workforce management across all major cities and remote locations in India." },
  { question: "Are your candidates background verified?", answer: "Absolutely. We conduct comprehensive background checks including employment history, educational credentials, and criminal records as per client requirements." },
];

/* ─────────────── PAGE ─────────────── */

export default function Home() {
  return (
    <>
      <Hero />

      {/* ════ TRUSTED BY ════ */}
      <section className="relative border-b border-brand-accent/50 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-3 md:px-5 py-12">
          <p className="text-center text-[10px] font-bold text-brand-dark/30 mb-8 tracking-[0.25em] uppercase">
            Trusted by industry leaders across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {trustedBrands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" as const }}
                className="font-serif text-lg text-brand-dark/22 hover:text-brand-primary/50 transition-colors duration-300 cursor-default select-none"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ ABOUT PREVIEW ════ */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-[35%] hidden lg:block pointer-events-none"
          style={{ background: "linear-gradient(to left, #F8FAFC, transparent)" }} />
        <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(200,155,60,0.06), transparent 65%)" }} />

        <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden"
                style={{ boxShadow: "0 32px 80px -20px rgba(11,44,95,0.2)" }}>
                <Image
                  src="/about-section.jpg"
                  alt="Professional team at work"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,44,95,0.35) 0%, transparent 55%)" }} />
              </div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-5 md:-right-9 bg-brand-secondary p-6 hidden sm:block"
                style={{ boxShadow: "0 16px 40px -8px rgba(200,155,60,0.5)" }}
              >
                <div className="text-white font-serif text-3xl leading-none">500+</div>
                <div className="text-white/70 text-[10px] font-bold uppercase tracking-wider mt-1">Happy Clients</div>
              </motion.div>

              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-secondary/40" />
            </motion.div>

            {/* Copy */}
            <div>
              <SectionHeading
                badge="About Our Excellence"
                title={<>Empowering Enterprises with <span className="text-brand-secondary">Exceptional Talent</span></>}
                subtitle="Yashika Management Services was founded with a clear mission: to bridge the gap between talented professionals and forward-thinking companies. We are committed to delivering exceptional staffing solutions that drive business growth and career advancement through integrity and professionalism."
                alignment="left"
                rule
              />
              <div className="grid grid-cols-2 gap-4 mb-10">
                {aboutFeatures.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" as const }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-250"
                      style={{ background: "rgba(11,44,95,0.06)", border: "1px solid rgba(11,44,95,0.08)" }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-brand-dark/70 group-hover:text-brand-primary transition-colors duration-200">
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </div>
              <AnimatedButton href="/about" variant="outline" size="md">Discover Our Journey</AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SERVICES GRID ════ */}
      <section className="py-14 md:py-16 relative overflow-hidden" style={{ background: "#F8FAFC" }}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(11,44,95,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-16 relative z-10">
          <SectionHeading
            badge="Our Core Services"
            title={<>Comprehensive Corporate <span className="text-brand-secondary">Solutions</span></>}
            subtitle="Tailored staffing and operational solutions designed to meet the rigorous demands of modern enterprises."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ════ PROCESS TIMELINE ════ */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }} />
        <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-16">
          <SectionHeading
            badge="Our Methodology"
            title={<>Our <span className="text-brand-secondary">Proven</span> Approach</>}
            subtitle="A systematic, highly refined methodology for identifying, assessing, and deploying top-tier talent."
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* ════ INDUSTRIES ════ */}
      <section className="py-14 md:py-16 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.12), transparent 65%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.5), transparent)" }} />

        <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <SectionHeading
              badge="Specialised Domains"
              title={<>Industries <span className="text-brand-secondary">We Serve</span></>}
              alignment="left" light rule
            />
            <div className="pb-1 flex-shrink-0">
              <AnimatedButton href="/industries" variant="outline-white" size="md">View All Industries</AnimatedButton>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {industries.map((ind, i) => (
              <IndustryCard
                key={ind.title}
                title={ind.title}
                icon={ind.icon}
                image={ind.image}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ════ */}
      <section className="py-14 md:py-16 relative overflow-hidden" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-16 relative z-10">
          <SectionHeading
            badge="Client Success"
            title={<>Excellence <span className="text-brand-secondary">Stories</span></>}
            subtitle="Hear from industry leaders who have transformed their workforce with our solutions."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <TestimonialCard content="Yashika Management transformed our IT recruitment. Their understanding of niche tech roles and speed of delivery is unmatched in the industry." author="Rajiv Mehta" role="VP of Engineering" company="TechGlobal" delay={0.08} />
            <TestimonialCard content="Their BPO services have significantly optimised our customer support operations. Professional, compliant, and highly efficient." author="Sarah Jenkins" role="Operations Director" company="FinServe" delay={0.16} />
            <TestimonialCard content="A true strategic HR partner. They handled our mass hiring for the new manufacturing plant flawlessly, adhering to all compliance mandates." author="Amit Kumar" role="HR Head" company="Apex Manufacturing" delay={0.24} />
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section className="py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.3), transparent)" }} />
        <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-16">
          <div className="grid lg:grid-cols-[42%_55%] gap-14 xl:gap-20 items-start">

            <div className="lg:sticky lg:top-28">
              <SectionHeading
                badge="Clear Answers"
                title={<>Frequently Asked <br className="hidden sm:block" />Questions</>}
                subtitle="Find answers to common queries about our services, processes, and compliance standards."
                alignment="left" rule
              />
              <div className="p-8 border border-brand-accent/60"
                style={{ boxShadow: "0 4px 20px -4px rgba(11,44,95,0.06)" }}
              >
                <div className="h-[2px] w-8 bg-brand-secondary mb-6" />
                <p className="font-serif text-brand-dark text-xl mb-2">Still have questions?</p>
                <p className="text-brand-dark/50 text-sm leading-relaxed mb-6">Our team typically responds within 2 business hours.</p>
                <ul className="space-y-2.5 mb-8">
                  {["No obligation consultation", "Confidential & secure", "Expert advice, zero cost"].map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm text-brand-dark/60">
                      <CheckCircle2 className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <AnimatedButton href="/contact" variant="primary" size="md">Contact Support Team</AnimatedButton>
              </div>
            </div>

            <div className="pt-2">
              {faqs.map((faq, i) => (
                <FAQ key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}