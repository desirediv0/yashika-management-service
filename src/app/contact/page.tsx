import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare } from "lucide-react";
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
    title: "Email Address",
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
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #1a4080 0%, #0B2C5F 50%, #071e42 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,155,60,0.14), transparent 62%)" }}
        />
        <div
          className="absolute top-0 bottom-0 w-px pointer-events-none opacity-10"
          style={{
            left: "40%",
            background: "linear-gradient(to bottom, transparent, #C89B3C 25%, #C89B3C 75%, transparent)",
            transform: "skewX(-8deg)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 50%, #C89B3C)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(200,155,60,0.4), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 xl:px-16 pt-36 pb-20 md:pt-48 md:pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-brand-secondary" />
              <span className="text-[10px] font-black tracking-[0.28em] uppercase text-brand-secondary">
                Get In Touch
              </span>
            </div>

            <h1
              className="font-serif font-bold text-white leading-[1.04] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
            >
              Let&apos;s Build Your
              <br className="hidden sm:block" />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(100deg, #C89B3C, #e8c97a 50%, #C89B3C)" }}
              >
                Ideal Workforce
              </span>
            </h1>

            <p className="text-white/48 text-base md:text-[1.05rem] max-w-2xl leading-relaxed mb-12">
              Tell us about your workforce needs and our specialists will craft a bespoke solution tailored to your business goals.
            </p>

            {/* Response promise */}
            <div
              className="inline-flex items-center gap-4 px-6 py-4"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(200,155,60,0.15)", border: "1px solid rgba(200,155,60,0.3)" }}
              >
                <MessageSquare className="w-4 h-4 text-brand-secondary" />
              </div>
              <div>
                <div className="text-[9px] font-black text-white/28 uppercase tracking-[0.2em] mb-0.5">
                  Response Guarantee
                </div>
                <div className="text-white/65 text-sm">
                  We reply within{" "}
                  <span className="text-brand-secondary font-black">2 business hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════ MAIN SECTION ════ */}
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
          <div className="grid lg:grid-cols-[42%_54%] gap-14 xl:gap-20 items-start">

            {/* ── LEFT: Info ── */}
            <div>
              <SectionHeading
                badge="Reach Out"
                title={
                  <>
                    We&apos;re Here to Help{" "}
                    <span className="text-brand-secondary">You Grow</span>
                  </>
                }
                alignment="left"
                rule
              />

              {/* Contact info cards */}
              <div className="space-y-3 mb-10">
                {contactInfo.map(({ icon: Icon, title, lines, action }) => {
                  const inner = (
                    <div
                      className="flex items-start gap-5 p-5 group transition-all duration-250 hover:shadow-[0_8px_28px_rgba(11,44,95,0.08)] hover:-translate-y-[1px]"
                      style={{ border: "1px solid #E2E8F0" }}
                    >
                      <div
                        className="w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-brand-primary"
                        style={{
                          background: "rgba(11,44,95,0.05)",
                          border: "1px solid rgba(11,44,95,0.08)",
                        }}
                      >
                        <Icon className="w-4 h-4 text-brand-primary group-hover:text-white transition-colors duration-300" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2">
                          {title}
                        </h4>
                        {lines.map((line, i) => (
                          <p key={i} className="text-brand-dark/62 text-[0.88rem] leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>

                      {action && (
                        <ArrowRight className="w-4 h-4 text-brand-dark/18 group-hover:text-brand-secondary group-hover:translate-x-0.5 transition-all duration-250 flex-shrink-0 mt-3.5" />
                      )}
                    </div>
                  );

                  return action ? (
                    <a key={title} href={action} className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={title}>{inner}</div>
                  );
                })}
              </div>

              {/* Response note */}
              <div
                className="relative overflow-hidden p-6"
                style={{
                  background: "rgba(200,155,60,0.04)",
                  border: "1px solid rgba(200,155,60,0.22)",
                }}
              >
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-brand-secondary" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2">
                  Typical Response Time
                </p>
                <p className="text-brand-dark/55 text-[0.88rem] leading-relaxed">
                  Our team responds to all enquiries within{" "}
                  <strong className="text-brand-dark/75 font-bold">2 business hours</strong>{" "}
                  during working days.
                </p>
              </div>

              {/* Channel tags */}
              <div className="mt-8 pt-8 border-t border-brand-accent/60">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/28 mb-3">
                  Also Reachable Via
                </p>
                <div className="flex flex-wrap gap-2">
                  {["LinkedIn", "WhatsApp", "Direct Email"].map((ch) => (
                    <div
                      key={ch}
                      className="px-3 py-1.5 border border-brand-accent/60 text-[10px] font-black uppercase tracking-[0.12em] text-brand-dark/32 hover:border-brand-secondary hover:text-brand-secondary transition-all duration-250 cursor-pointer"
                    >
                      {ch}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="lg:sticky lg:top-28">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ════ MAP ════ */}
      <section className="relative overflow-hidden border-t border-brand-accent/60">
        <div className="h-[480px] md:h-[520px] w-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13968.123282247293!2d76.64332356193796!3d28.608331899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d45214041b691%3A0xc3fec3fcf7f4d0bc!2sJhajjar%2C%20Haryana%20124103!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
            width="100%" height="100%"
            style={{ border: 0 }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale opacity-80"
          />

          {/* Map card */}
          <div className="absolute top-1/2 -translate-y-1/2 left-5 sm:left-10 md:left-14 z-10">
            <div
              className="relative overflow-hidden p-6 md:p-8 max-w-[280px]"
              style={{
                background: "rgba(255,255,255,0.98)",
                border: "1px solid #E2E8F0",
                boxShadow: "0 24px 60px -12px rgba(11,44,95,0.22)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(to right, #C89B3C, #e8c97a 60%, transparent)" }}
              />

              <div
                className="w-10 h-10 flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg, #1a4080, #0B2C5F)" }}
              >
                <MapPin className="w-5 h-5 text-brand-secondary" />
              </div>

              <p className="font-serif font-bold text-brand-dark text-lg leading-tight mb-2">
                Our Office
              </p>
              <p className="text-brand-dark/45 text-[0.82rem] leading-relaxed mb-5">
                Kaccha Babra Road, Near Dharam Palace,
                <br />Jhajjar – 124103, Haryana
              </p>

              <a
                href="https://maps.google.com/?q=Jhajjar+Haryana+124103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary hover:text-brand-secondary transition-colors duration-200"
              >
                Open in Maps
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div
            className="absolute top-0 right-0 bottom-0 w-20 pointer-events-none hidden md:block"
            style={{ background: "linear-gradient(to left, white, transparent)" }}
          />
        </div>
      </section>
    </>
  );
}