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
import { MapPin, Clock, Phone, Mail, Loader2 } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: MapPin,
    label: "Lokacija",
    value: "Alije Izetbegovića 134, Banovići 75290",
  },
  {
    icon: Clock,
    label: "Radno vrijeme",
    value: "Pon–Pet: 06:00–22:00 • Sub: 08:00–20:00 • Ned: 10:00–16:00",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+387 61 954 069",
  },
  {
    icon: Mail,
    label: "Email",
    value: "atheltixgym.info@gmail.com",
  },
];

const interests = [
  "Opšti upit",
  "Članstvo",
  "Personalni trening",
  "Raspored treninga",
  "Korporativno članstvo",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg =
          data.errors?.join(" ") || data.error || "Nešto je pošlo po zlu.";
        toast.error("Slanje nije uspjelo", { description: errorMsg });
        return;
      }

      toast.success("Hvala što si nam se javio!", {
        description: "Odgovorit ćemo ti u roku od 24 sata.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    } catch {
      toast.error("Greška u mreži", {
        description: "Nismo uspjeli doći do servera. Molimo pokušaj ponovo.",
      });
    } finally {
      setSubmitting(false);
    }
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
            Kontaktiraj nas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300"
          >
            Imaš pitanje? Želiš zakazati obilazak? Spreman za besplatni probni dan? Tu smo za tebe.
          </motion.p>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-2xl font-bold text-neutral-950 sm:text-3xl">
              Naša lokacija
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Alije Izetbegovića 134, Banovići 75290
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[20px] shadow-sm"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.47,44.38,18.58,44.43&amp;layer=mapnik&amp;marker=44.4064,18.5265"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: 20 }}
              allowFullScreen
              loading="lazy"
              title="ATHLETIX Gym lokacija"
            />
            <div className="mt-4 text-center">
              <a
                href="https://www.google.com/maps?q=Alije+Izetbegovića+134+Banovići+75290"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-500 transition-colors"
              >
                Pogledaj na Google Maps →
              </a>
            </div>
          </motion.div>
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
                Pošalji nam poruku
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Ispuni formu ispod i javit ćemo ti se u roku od 24 sata.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Ime i prezime <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tvoje ime"
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
                      placeholder="tvoj@email.com"
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
                      Telefon (opciono)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+387 61 000 000"
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
                      Zanima me
                    </label>
                    <Select
                      value={formData.interest}
                      onValueChange={handleInterestChange}
                    >
                      <SelectTrigger
                        id="interest"
                        className="rounded-[10px] border-border"
                      >
                        <SelectValue placeholder="Izaberi opciju" />
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
                    Poruka <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Reci nam kako možemo pomoći..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[10px] border border-border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl bg-accent px-8 py-6 text-base font-bold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Slanje...
                    </>
                  ) : (
                    "Pošalji poruku"
                  )}
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
                  Posjeti nas
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  Svrati bilo kada tokom radnog vremena. Nije potrebna najava za obilazak.
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
                          {item.label === "Telefon" ? (
                            <a
                              href="tel:+38761954069"
                              className="mt-0.5 text-sm text-neutral-600 hover:text-brand-500"
                            >
                              {item.value}
                            </a>
                          ) : item.label === "Email" ? (
                            <a
                              href="mailto:atheltixgym.info@gmail.com"
                              className="mt-0.5 text-sm text-neutral-600 hover:text-brand-500"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-sm text-neutral-600">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <Link
                    href="https://wa.me/38761954069"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-brand-200 bg-white py-6 text-sm font-semibold text-brand-600 transition-all hover:bg-brand-50 hover:text-brand-700 active:scale-[0.97]"
                    >
                      Pošalji poruku na WhatsApp
                    </Button>
                  </Link>
                </div>

                <div className="mt-4">
                  <a
                    href="https://www.instagram.com/athletix_gym/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-brand-200 bg-white py-6 text-sm font-semibold text-brand-600 transition-all hover:bg-brand-50 hover:text-brand-700 active:scale-[0.97]"
                    >
                      Prati nas na Instagramu
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
