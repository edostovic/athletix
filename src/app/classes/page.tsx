"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dumbbell, Zap, Leaf, Activity, Clock } from "lucide-react";

const classes = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build raw power with compound lifts and progressive overload. Perfect for building muscle and increasing strength.",
    schedule: "Mon–Fri 7am, 12pm, 6pm • Sat 9am",
  },
  {
    icon: Zap,
    title: "HIIT",
    description:
      "High-intensity intervals to torch calories and build cardiovascular endurance in 45 minutes flat.",
    schedule: "Mon–Fri 6am, 8am, 5pm • Sat 10am",
  },
  {
    icon: Leaf,
    title: "Yoga",
    description:
      "Improve flexibility, mobility, and mental focus. All levels welcome — from first-timers to experienced practitioners.",
    schedule: "Tue/Thu 7am • Wed 6pm • Sun 10am",
  },
  {
    icon: Activity,
    title: "Functional Fitness",
    description:
      "Movement patterns that translate to real life. Improve your everyday strength, balance, and agility.",
    schedule: "Mon/Wed/Fri 9am • Tue/Thu 5pm",
  },
  {
    icon: Clock,
    title: "Open Gym",
    description:
      "Self-guided training time with full access to all equipment. Train at your own pace, on your own program.",
    schedule: "Daily during operating hours",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const },
  },
};

export default function ClassesPage() {
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
            Find Your Flow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300"
          >
            From morning strength to evening yoga — classes for every level,
            every schedule.
          </motion.p>
        </div>
      </section>

      {/* Classes grid */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {classes.map((cls) => {
              const Icon = cls.icon;
              return (
                <motion.div
                  key={cls.title}
                  variants={cardVariants}
                  className="group flex flex-col rounded-[20px] border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-950">
                    {cls.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                    {cls.description}
                  </p>
                  <div className="mt-6 border-t border-border pt-4 text-xs font-medium text-neutral-500">
                    {cls.schedule}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Ready to Try a Class?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="mx-auto mt-4 max-w-xl text-neutral-400"
          >
            Your first week is free — try any class, use any equipment, no
            commitment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <Button className="rounded-xl bg-accent px-8 py-6 text-base font-bold text-white shadow-lg transition-all hover:bg-accent-dark active:scale-[0.97]">
                Book Your Free First Week
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="rounded-xl border-neutral-600 px-8 py-6 text-base font-semibold text-white transition-all hover:bg-white/10 hover:text-white active:scale-[0.97]">
                View Pricing
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
