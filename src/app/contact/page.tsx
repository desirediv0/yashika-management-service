import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Yashika Management Services",
  description: "Get in touch with Yashika Management Services for premium manpower and BPO solutions.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Corporate Office",
    lines: ["Kaccha Babra Road, Near Dharam Palace,", "Jhajjar – 124103, Haryana, India"],
    action: null,
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 9306922779"],
    action: "tel:+919306922779",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["Sagaryadav@yashikamanagement.com"],
    action: "mailto:Sagaryadav@yashikamanagement.com",
  },
  {
    icon: Clock,
    title: "Operating Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:30 PM", "Saturday: 9:00 AM – 2:00 PM"],
    action: null,
  },
];

export default function ContactPage() {
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
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.16), transparent 62%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04), transparent 65%)" }}
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
              Get In Touch
            </span>
            <span className="w-8 h-px bg-brand-secondary/70" />
          </div>

          <h1
            className="font-serif font-bold text-white leading-[1.06] tracking-tight mb-6 mx-auto max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Let&apos;s{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(100deg, #C89B3C, #e8c97a 50%, #C89B3C)" }}
            >
              Connect
            </span>
          </h1>

          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Tell us about your workforce needs and our specialists will craft a solution tailored to your business.
          </p>
        </div>
      </div>

      {/* ════ CONTACT GRID ════ */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Dot grid */}
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
          <div className="grid lg:grid-cols-[44%_52%] gap-14 xl:gap-20 items-start">

            {/* ── Left: info ── */}
            <div>
              <SectionHeading
                badge="Reach Out"
                title={<>We&apos;re Here to Help Your <span className="text-brand-secondary">Business Grow</span></>}
                alignment="left"
                rule
              />

              {/* Contact cards */}
              <div className="space-y-3 mb-12">
                {contactInfo.map(({ icon: Icon, title, lines, action }) => {
                  const inner = (
                    <div
                      className="flex items-start gap-5 p-5 group transition-all duration-250 cursor-default"
                      style={{ border: "1px solid #E2E8F0" }}
                    >
                      {/* Icon box */}
                      <div
                        className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-250 group-hover:bg-brand-primary group-hover:border-brand-primary"
                        style={{
                          background: "rgba(11,44,95,0.05)",
                          border: "1px solid rgba(11,44,95,0.08)",
                        }}
                      >
                        <Icon className="w-4 h-4 text-brand-primary group-hover:text-white transition-colors duration-250" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-dark/40 mb-1.5 group-hover:text-brand-secondary transition-colors duration-200">
                          {title}
                        </h4>
                        {lines.map((line, i) => (
                          <p key={i} className="text-brand-dark/70 text-sm leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>

                      {/* Arrow — only for actionable items */}
                      {action && (
                        <ArrowRight className="w-4 h-4 text-brand-dark/20 group-hover:text-brand-secondary group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 mt-3" />
                      )}
                    </div>
                  );

                  return action ? (
                    <a key={title} href={action} className="block hover:no-underline">
                      {inner}
                    </a>
                  ) : (
                    <div key={title}>{inner}</div>
                  );
                })}
              </div>

              {/* Response time note */}
              <div
                className="flex items-start gap-4 p-5"
                style={{
                  background: "rgba(200,155,60,0.05)",
                  border: "1px solid rgba(200,155,60,0.2)",
                }}
              >
                <div className="w-1 h-full min-h-[2.5rem] bg-brand-secondary flex-shrink-0 self-stretch" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-secondary mb-1">
                    Typical Response Time
                  </p>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">
                    Our team responds to all inquiries within <strong className="text-brand-dark/80">2 business hours</strong> during working days.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="lg:sticky lg:top-28">
              {/* Decorative offset shadow */}
              <div
                className="relative"
                style={{ filter: "drop-shadow(0 32px 64px rgba(11,44,95,0.12))" }}
              >
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════ MAP ════ */}
      <section className="relative overflow-hidden border-t border-brand-accent/60">
        {/* Map iframe */}
        <div className="h-[480px] w-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13968.123282247293!2d76.64332356193796!3d28.608331899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d45214041b691%3A0xc3fec3fcf7f4d0bc!2sJhajjar%2C%20Haryana%20124103!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale opacity-85"
          />

          {/* Left overlay card */}
          <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-14 z-10">
            <div
              className="p-6 md:p-8 max-w-[280px]"
              style={{
                background: "rgba(255,255,255,0.97)",
                border: "1px solid #E2E8F0",
                boxShadow: "0 20px 50px -12px rgba(11,44,95,0.22)",
              }}
            >
              {/* Gold top line */}
              <div
                className="h-[2px] w-8 mb-5"
                style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a)" }}
              />

              {/* Pin icon */}
              <div
                className="w-10 h-10 flex items-center justify-center mb-4"
                style={{ background: "#0B2C5F" }}
              >
                <MapPin className="w-5 h-5 text-brand-secondary" />
              </div>

              <p className="font-serif font-bold text-brand-dark text-lg leading-tight mb-1">
                Our Office
              </p>
              <p className="text-brand-dark/50 text-xs leading-relaxed mb-4">
                Kaccha Babra Road, Near Dharam Palace,<br />
                Jhajjar – 124103, Haryana
              </p>

              <a
                href="https://maps.google.com/?q=Jhajjar+Haryana+124103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-primary hover:text-brand-secondary transition-colors duration-200"
              >
                Open in Maps
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right edge fade */}
          <div
            className="absolute top-0 right-0 bottom-0 w-24 pointer-events-none hidden md:block"
            style={{ background: "linear-gradient(to left, white, transparent)" }}
          />
        </div>
      </section>
    </>
  );
}