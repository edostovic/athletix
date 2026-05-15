"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  result?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Bilo me strah ući. Prvog dana, neko me oslovio imenom. To se ne dešava u velikim teretanama.",
    name: "Marko K.",
  },
  {
    quote:
      "Izgubio 15kg za 4 mjeseca uz coaching program. Treneri stvarno vode računa o tvojoj tehnici.",
    name: "Lejla A.",
    result: "15kg izgubljeno za 4 mjeseca",
  },
  {
    quote:
      "Najbolja odluka koju sam donio u 2025. Zajednica me tjera da se vraćam čak i u danima bez motivacije.",
    name: "Amar H.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
          className="mx-auto max-w-xl text-center"
        >
          <div className="mb-4 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-accent text-accent"
              />
            ))}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Pridruži se 500+ članova koji su pronašli svoj dom
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden rounded-[20px] border border-border/60 bg-neutral-50 p-8 shadow-sm sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] as const }}
                className="text-center"
              >
                <blockquote className="text-lg leading-relaxed text-neutral-800 sm:text-xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-neutral-950">
                    {testimonials[current].name}
                  </p>
                  {testimonials[current].result && (
                    <p className="mt-0.5 text-sm font-medium text-brand-500">
                      {testimonials[current].result}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-neutral-600 shadow-sm transition-colors hover:bg-neutral-100 hover:text-brand-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-brand-500"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-neutral-600 shadow-sm transition-colors hover:bg-neutral-100 hover:text-brand-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
