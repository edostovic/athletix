"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Dnevna",
    price: "5 KM",
    description: "Jednodnevni pass — probaj bez obaveze.",
    features: [
      "Pristup teretani za 1 dan",
      "Puna oprema na raspolaganju",
      "Sve grupne vježbe",
      "Svlačionica i tuš",
    ],
    cta: "Probaj danas",
  },
  {
    name: "Mjesečna",
    price: "45 KM",
    description: "Potpuni pristup, maksimalna fleksibilnost.",
    features: [
      "Pristup teretani u svako vrijeme",
      "Sve grupne vježbe uključene",
      "Besplatna fitness procjena",
      "Svlačionica i tuš",
      "Dovedi prijatelja (1x/mjesečno)",
      "Zamrzni članstvo kad želiš",
    ],
    cta: "Postani član",
  },
  {
    name: "Tromjesečna",
    price: "35 KM/mjesečno",
    description: "Ukupno 105 KM — 3 mjeseca napretka po najboljoj cijeni.",
    highlighted: true,
    features: [
      "Neograničen pristup",
      "Sva oprema",
      "Grupni treninzi",
      "2 PT treninga",
    ],
    cta: "Započni tromjesečje",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const },
  },
};

export function PricingTable() {
  return (
    <section className="bg-neutral-950 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Jednostavne cijene. Pravi rezultati.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-400">
            Bez skrivenih troškova. Mjesec za mjesec, otkaži kad god želiš.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              className={cn(
                "relative flex flex-col rounded-[20px] border p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg",
                tier.highlighted
                  ? "border-brand-500 bg-brand-900/20 ring-1 ring-brand-500/30"
                  : "border-neutral-800 bg-neutral-900/50"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                    Najpopularnije
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm text-neutral-400">
                    {tier.name === "Dnevna" ? "/dan" : tier.name === "Tromjesečna" ? "" : "/mjesc"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-400">
                  {tier.description}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        tier.highlighted
                          ? "text-accent"
                          : "text-brand-400"
                      )}
                    />
                    <span className="text-sm text-neutral-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button
                  className={cn(
                    "w-full rounded-xl py-6 text-sm font-bold transition-all active:scale-[0.97]",
                    tier.highlighted
                      ? "bg-accent text-white hover:bg-accent-dark hover:shadow-md"
                      : "border-neutral-600 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  )}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center text-sm text-neutral-500"
        >
          Sva članstva uključuju besplatni probni dan. Nije potrebna kreditna kartica.
        </motion.p>
      </div>
    </section>
  );
}
