"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "123 Fitness Street, City, State 10001",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 6am – 10pm • Sat–Sun: 8am – 8pm",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@athletix.com",
  },
];

const interests = [
  "General Inquiry",
  "Membership",
  "Personal Training",
  "Class Schedule",
  "Corporate Membership",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleInterestChange(value: string | null) {
    if (value !== null) {
      setFormData((prev) => ({ ...prev, interest: value }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Thanks for reaching out!", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-brand-900 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Let&apos;s Talk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300"
          >
            Have a question? Want to book a tour? Ready to start your free
            week? We&apos;re here for you.
          </motion.p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-bold text-neutral-950">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Fill out the form below and we&apos;ll get back to you within
                24 hours.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-[10px] border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-[10px] border-border"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Phone (optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-[10px] border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="interest"
                      className="text-sm font-medium text-neutral-700"
                    >
                      I&apos;m Interested In
                    </label>
                    <Select
                      value={formData.interest}
                      onValueChange={handleInterestChange}
                    >
                      <SelectTrigger
                        id="interest"
                        className="rounded-[10px] border-border"
                      >
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {interests.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-neutral-700"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[10px] border border-border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <Button
                  type="submit"
                  className="rounded-xl bg-accent px-8 py-6 text-base font-bold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md active:scale-[0.97]"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-[20px] border border-border bg-neutral-50 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-950">
                  Visit Us
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  Drop by anytime during operating hours. No appointment needed
                  for a tour.
                </p>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex gap-4">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-700">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-sm text-neutral-600">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-brand-200 bg-white py-6 text-sm font-semibold text-brand-600 transition-all hover:bg-brand-50 hover:text-brand-700 active:scale-[0.97]"
                    >
                      Get Directions
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 overflow-hidden rounded-[20px] border border-border bg-neutral-100">
                <div className="flex aspect-[4/3] items-center justify-center bg-neutral-200">
                  <p className="text-sm text-neutral-500">
                    Map placeholder
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
