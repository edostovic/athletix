"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TierDetail {
  name: string;
  price: string;
  description: string;
  features: { name: string; included: boolean }[];
  highlighted?: boolean;
  cta: string;
}

const tiers: TierDetail[] = [
  {
    name: "Starter",
    price: "€29",
    description: "For building a consistent routine with off-peak access.",
    features: [
      { name: "Off-peak gym access (Mon–Fri 6am–4pm)", included: true },
      { name: "Full equipment access", included: true },
      { name: "All group classes", included: false },
      { name: "Complimentary fitness assessment", included: true },
      { name: "Locker room & shower access", included: true },
      { name: "Guest pass", included: false },
      { name: "Personal training sessions", included: false },
      { name: "Freeze membership anytime", included: false },
    ],
    cta: "Get Started",
  },
  {
    name: "Unlimited",
    price: "€49",
    description: "Full access, full flexibility — our most popular plan.",
    features: [
      { name: "All-hours gym access", included: true },
      { name: "Full equipment access", included: true },
      { name: "All group classes", included: true },
      { name: "Complimentary fitness assessment", included: true },
      { name: "Locker room & shower access", included: true },
      { name: "Guest pass (1x/month)", included: true },
      { name: "Personal training sessions", included: false },
      { name: "Freeze membership anytime", included: true },
    ],
    highlighted: true,
    cta: "Join Athletix Today",
  },
  {
    name: "Premium",
    price: "€79",
    description: "Everything plus dedicated coaching and premium perks.",
    features: [
      { name: "All-hours gym access", included: true },
      { name: "Full equipment access", included: true },
      { name: "All group classes", included: true },
      { name: "Complimentary fitness assessment", included: true },
      { name: "Locker room & shower access", included: true },
      { name: "Guest pass (2x/month)", included: true },
      { name: "2 personal training sessions/month", included: true },
      { name: "Freeze membership anytime", included: true },
    ],
    cta: "Go Premium",
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
            Simple Pricing.{" "}
            <span className="text-brand-400">Real Results.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300"
          >
            No hidden fees. No surprise charges. Month-to-month, cancel
            anytime. Your first week is free.
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
                      Most Popular
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
                    <span className="text-sm text-neutral-500">/month</span>
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
            All memberships include a <strong>free first week</strong>. No credit card required. Cancel anytime with 30 days notice.
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
              Still Have Questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-600">
              We&apos;re happy to help. Reach out and we&apos;ll get back to
              you within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="rounded-xl bg-accent px-8 py-6 text-base font-bold text-white shadow-lg transition-all hover:bg-accent-dark active:scale-[0.97]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
