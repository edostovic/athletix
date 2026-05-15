"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TierDetail {
  name: string;
  price: string;
  period: string;
  description: string;
  features: { name: string; included: boolean }[];
  highlighted?: boolean;
  cta: string;
}

const tiers: TierDetail[] = [
  {
    name: "Dnevna",
    price: "5",
    period: "KM / dan",
    description: "Za one koji žele probati prije nego se odluče.",
    features: [
      { name: "Pristup teretani za 1 dan", included: true },
      { name: "Puna oprema na raspolaganju", included: true },
      { name: "Sve grupne vježbe", included: true },
      { name: "Svlačionica i tuš", included: true },
    ],
    cta: "Probaj danas",
  },
  {
    name: "Mjesečna",
    price: "45",
    period: "KM / mjesečno",
    description: "Potpuni pristup, maksimalna fleksibilnost — najpopularniji plan.",
    features: [
      { name: "Pristup teretani u svako vrijeme", included: true },
      { name: "Puna oprema na raspolaganju", included: true },
      { name: "Sve grupne vježbe", included: true },
      { name: "Besplatna fitness procjena", included: true },
      { name: "Svlačionica i tuš", included: true },
      { name: "Dovedi prijatelja (1x/mjesečno)", included: true },
      { name: "Personalni treninzi", included: false },
      { name: "Zamrzni članstvo bilo kada", included: true },
    ],
    highlighted: true,
    cta: "Postani član",
  },
  {
    name: "Godišnja",
    price: "399",
    period: "KM / godišnje",
    description: "Najbolja vrijednost — uštedi 141 KM godišnje.",
    features: [
      { name: "Pristup teretani u svako vrijeme", included: true },
      { name: "Puna oprema na raspolaganju", included: true },
      { name: "Sve grupne vježbe", included: true },
      { name: "Besplatna fitness procjena", included: true },
      { name: "Svlačionica i tuš", included: true },
      { name: "Dovedi prijatelja (2x/mjesečno)", included: true },
      { name: "2 personalna treninga/mjesečno", included: true },
      { name: "Zamrzni članstvo bilo kada", included: true },
    ],
    cta: "Idi na Godišnju",
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

export default function PricingPage() {
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
            Jednostavne cijene.{" "}
            <span className="text-brand-400">Pravi rezultati.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300"
          >
            Bez skrivenih troškova. Mjesec za mjesec, otkaži bilo kada. Tvoj prvi dan je na nama.
          </motion.p>
        </div>
      </section>

      {/* Pricing table */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 lg:grid-cols-3"
          >
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                className={cn(
                  "flex flex-col rounded-[20px] border p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg",
                  tier.highlighted
                    ? "border-brand-500 bg-brand-50/50 ring-1 ring-brand-500/30"
                    : "border-border bg-white"
                )}
              >
                {tier.highlighted && (
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                      Najpopularnije
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-neutral-950">
                    {tier.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-neutral-950">
                      {tier.price}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {tier.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-500">
                    {tier.description}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-neutral-300" />
                      )}
                      <span
                        className={cn(
                          "text-sm",
                          feature.included
                            ? "text-neutral-800"
                            : "text-neutral-400"
                        )}
                      >
                        {feature.name}
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
                        : "bg-brand-500 text-white hover:bg-brand-600 hover:shadow-md"
                    )}
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
            Sva članstva uključuju <strong>besplatan probni dan</strong>. Nije potrebna kreditna kartica. Otkaži bilo kada uz 30 dana otkaznog roka.
          </motion.p>
        </div>
      </section>

      {/* FAQ note */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
          >
            <h2 className="text-2xl font-bold text-neutral-950 sm:text-3xl">
              Imaš još pitanja?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            Rado ćemo ti pomoći. Javi nam se i odgovorit ćemo u roku od 24 sata.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="rounded-xl bg-accent px-8 py-6 text-base font-bold text-white shadow-lg transition-all hover:bg-accent-dark active:scale-[0.97]">
                  Kontaktiraj nas
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
