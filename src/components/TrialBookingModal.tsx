"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface TrialBookingModalProps {
  open: boolean;
  onClose: () => void;
}

export function TrialBookingModal({ open, onClose }: TrialBookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferred_date: "",
    preferred_time: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg =
          data.errors?.join(" ") || data.error || "Something went wrong.";
        toast.error("Greška prilikom rezervacije", { description: errorMsg });
        return;
      }

      toast.success("Probni trening zakazan!", {
        description:
          "Primili smo tvoj zahtjev i uskoro ćemo potvrditi termin.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferred_date: "",
        preferred_time: "",
        notes: "",
      });
      onClose();
    } catch {
      toast.error("Greška u mreži", {
        description: "Nismo uspjeli doći do servera. Molimo pokušaj ponovo.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="relative w-full max-w-lg rounded-[20px] bg-white p-6 shadow-xl sm:p-8"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-2xl font-bold text-neutral-950">
              Zakaži besplatni probni trening
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Probaj Athletix besplatno 1 dan — bez obaveze.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="trial-name"
                  className="text-sm font-medium text-neutral-700"
                >
                  Ime i prezime <span className="text-destructive">*</span>
                </label>
                <Input
                  id="trial-name"
                  name="name"
                  placeholder="Tvoje ime"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-[10px] border-border"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="trial-email"
                    className="text-sm font-medium text-neutral-700"
                  >
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="trial-email"
                    name="email"
                    type="email"
                    placeholder="tvoj@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-[10px] border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="trial-phone"
                    className="text-sm font-medium text-neutral-700"
                  >
                    Telefon <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="trial-phone"
                    name="phone"
                    type="tel"
                    placeholder="+387 61 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="rounded-[10px] border-border"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="trial-date"
                    className="text-sm font-medium text-neutral-700"
                  >
                    Željeni datum <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="trial-date"
                    name="preferred_date"
                    type="date"
                    value={formData.preferred_date}
                    onChange={handleChange}
                    required
                    className="rounded-[10px] border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="trial-time"
                    className="text-sm font-medium text-neutral-700"
                  >
                    Željeno vrijeme
                  </label>
                  <Input
                    id="trial-time"
                    name="preferred_time"
                    type="time"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    className="rounded-[10px] border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="trial-notes"
                  className="text-sm font-medium text-neutral-700"
                >
                  Napomena (opciono)
                </label>
                <textarea
                  id="trial-notes"
                  name="notes"
                  rows={3}
                  placeholder="Nešto što trebamo znati..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full rounded-[10px] border border-border bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-accent px-8 py-6 text-base font-bold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Rezervacija...
                  </>
                ) : (
                  "Zakaži besplatno"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
