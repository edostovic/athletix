"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Ana Kolar",
    role: "Founder & Head Coach",
    bio: "10+ years in fitness coaching. Built Athletix because she believes fitness should feel like coming home.",
  },
  {
    name: "Ivan Horvat",
    role: "Strength & Conditioning Coach",
    bio: "Certified strength coach with a passion for helping beginners discover their power.",
  },
  {
    name: "Mia Novak",
    role: "Yoga & Mobility Lead",
    bio: "Helps members build flexibility and mindfulness alongside their strength journey.",
  },
];

export default function AboutPage() {
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
            More Than a Gym.{" "}
            <span className="text-brand-400">A Community.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300"
          >
            Here&apos;s how Athletix helps you become the strongest version of
            yourself.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
              className="text-2xl font-bold text-neutral-950 sm:text-3xl"
            >
              Our Mission
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
              className="mt-6 space-y-5 text-base leading-relaxed text-neutral-600"
            >
              <p>
                Athletix was built for people who want more from their gym —
                more guidance, more connection, more results.
              </p>
              <p>
                We believe fitness shouldn&apos;t feel intimidating. Whether
                you&apos;re stepping into a gym for the first time or coming
                back after a break, you belong here.
              </p>
              <p>
                Our mission: help you become stronger than yesterday —
                physically, mentally, and as part of something bigger than a
                workout.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
              className="text-2xl font-bold text-neutral-950 sm:text-3xl"
            >
              What We Stand For
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
              className="mt-8 grid gap-6 sm:grid-cols-3"
            >
              {[
                {
                  title: "Real Coaching",
                  desc: "Personalized programs designed by certified trainers who actually care about your progress.",
                },
                {
                  title: "Real Community",
                  desc: "Small classes where everybody knows your name. We show up for each other.",
                },
                {
                  title: "Zero Intimidation",
                  desc: "Everyone starts somewhere. Whether you're a beginner or pro, you belong here.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-[20px] border border-border bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-neutral-950">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {value.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="text-center text-2xl font-bold text-neutral-950 sm:text-3xl"
          >
            Meet the Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-[20px] border border-border bg-neutral-50 p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-brand-100" />
                <h3 className="text-lg font-semibold text-neutral-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-500">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {member.bio}
                </p>
              </div>
            ))}
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
            Ready to Meet Your New Gym?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <Button className="rounded-xl bg-accent px-8 py-6 text-base font-bold text-white shadow-lg transition-all hover:bg-accent-dark active:scale-[0.97]">
                Take a Tour
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
