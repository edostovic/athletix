"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onBookTrial?: () => void;
}

export function FinalCTA({ onBookTrial }: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-accent">
      {/* Pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Spreman za početak?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Pridruži se Athletixu danas i probaj besplatno — bez obaveze, bez upisnine.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={onBookTrial}
              className="rounded-xl bg-white px-8 py-6 text-base font-bold text-brand-600 shadow-lg transition-all hover:bg-neutral-100 hover:shadow-xl active:scale-[0.97]"
            >
              Zakaži besplatni probni trening
            </Button>
            <Link href="/classes">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-white/30 px-8 py-6 text-base font-semibold text-white transition-all hover:bg-white/10 hover:text-white active:scale-[0.97]"
              >
                Pogledaj treninge
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
