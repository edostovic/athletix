"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  Calendar,
  HeartHandshake,
  LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Dumbbell,
    title: "Stručno vođenje",
    description:
      "Naši certificirani treneri kreiraju programe za tvoje ciljeve — bilo da prvi put dižeš uteg ili se spremaš za takmičenje. Svaki trening je personalizovan.",
  },
  {
    icon: Calendar,
    title: "Moderna oprema",
    description:
      "Od premium rackova i slobodnih tegova do kardio mašina i funkcionalnih zona — sve što ti treba je ovdje, održavano i spremno za upotrebu.",
  },
  {
    icon: Users,
    title: "Zajednica",
    description:
      "Držimo male grupe tako da svi znaju tvoje ime. Bez čekanja na sprave. Bez neugodnosti. Samo ljudi koji su tu jedni za druge.",
  },
  {
    icon: HeartHandshake,
    title: "Fleksibilni planovi",
    description:
      "Članstvo od mjeseca do mjeseca. Bez ugovora. Bez upisnine. Zamrzni članstvo kad god želiš. Jedino što zaključavamo je tvoja motivacija.",
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

export function Features() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Sve što ti treba za uspjeh
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Od stručnog vođenja do vrhunske opreme — pokrili smo te na svakom nivou.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group rounded-[20px] border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
