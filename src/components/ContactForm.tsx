"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, User, Mail, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  "Permanent Staffing",
  "Contract Staffing",
  "BPO Services",
  "HR Consulting",
  "Payroll Management",
  "Other",
];

interface FieldProps {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function Field({ label, error, icon, children }: FieldProps) {
  return (
    <div className="group relative">
      <label className="block text-xs font-semibold tracking-wide text-brand-dark/50 uppercase mb-2 transition-colors duration-200 group-focus-within:text-brand-secondary">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-dark/30 group-focus-within:text-brand-secondary transition-colors duration-200 pointer-events-none">
            {icon}
          </span>
        )}
        {children}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase = cn(
  "w-full bg-brand-light/60 border border-brand-accent/80 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder:text-brand-dark/30",
  "transition-all duration-200 outline-none",
  "focus:bg-white focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/12",
  "hover:border-brand-dark/20"
);

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: services[0], message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.match(/^[+\d\s\-()]{7,}$/)) e.phone = "Valid phone required";
    if (!form.message.trim()) e.message = "Please describe your requirements";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `Service Inquiry: ${form.service}`,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        alert("Failed to send message. Please try again later.");
        setStatus("idle");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
      setStatus("idle");
    }
  };

  const set = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => { const n = { ...er }; delete n[key]; return n; });
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-brand-accent/60 shadow-premium p-12 flex flex-col items-center justify-center text-center min-h-[460px]">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-brand-dark mb-3">
          Inquiry Received!
        </h3>
        <p className="text-brand-dark/55 text-sm leading-relaxed max-w-xs mb-8">
          Thank you for reaching out. Our team will get back to you within <span className="font-semibold text-brand-primary">24 hours</span>.
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", service: services[0], message: "" }); }}
          className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors underline underline-offset-2"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-brand-accent/60 shadow-premium overflow-hidden">
      {/* Gold top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />

      <div className="p-8 md:p-10">
        <div className="mb-8">
          <p className="text-brand-secondary text-xs font-semibold tracking-[0.18em] uppercase mb-1.5">
            Let&apos;s Connect
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark">
            Send an Inquiry
          </h3>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full Name" error={errors.name} icon={<User className="w-4 h-4" />}>
              <input
                type="text"
                value={form.name}
                onChange={set("name")}
                placeholder="John Doe"
                className={cn(inputBase, "pl-10", errors.name && "border-red-300 focus:border-red-400 focus:ring-red-500/10")}
              />
            </Field>
            <Field label="Email Address" error={errors.email} icon={<Mail className="w-4 h-4" />}>
              <input
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="john@company.com"
                className={cn(inputBase, "pl-10", errors.email && "border-red-300 focus:border-red-400 focus:ring-red-500/10")}
              />
            </Field>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Phone Number" error={errors.phone} icon={<Phone className="w-4 h-4" />}>
              <input
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                placeholder="+91 98765 43210"
                className={cn(inputBase, "pl-10", errors.phone && "border-red-300 focus:border-red-400 focus:ring-red-500/10")}
              />
            </Field>
            <Field label="Service Interest" icon={<ChevronDown className="w-4 h-4" />}>
              <div className="relative">
                <select
                  value={form.service}
                  onChange={set("service")}
                  className={cn(inputBase, "pr-10 appearance-none cursor-pointer")}
                >
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/35 pointer-events-none" />
              </div>
            </Field>
          </div>

          {/* Message */}
          <Field label="Message" error={errors.message}>
            <textarea
              value={form.message}
              onChange={set("message")}
              rows={4}
              placeholder="Tell us about your requirements, headcount, location..."
              className={cn(inputBase, "resize-none", errors.message && "border-red-300 focus:border-red-400 focus:ring-red-500/10")}
            />
          </Field>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "relative w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-sm text-white overflow-hidden",
              "bg-brand-primary shadow-[0_4px_14px_rgba(11,44,95,0.28)]",
              "hover:shadow-[0_8px_24px_rgba(11,44,95,0.38)] hover:-translate-y-0.5",
              "disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:translate-y-0",
              "transition-all duration-300 group"
            )}
          >
            {/* shimmer */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending your inquiry…</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Request Consultation</span>
              </>
            )}
          </button>

          <p className="text-center text-xs text-brand-dark/35">
            We respect your privacy. Your data will never be shared.
          </p>
        </form>
      </div>
    </div>
  );
}