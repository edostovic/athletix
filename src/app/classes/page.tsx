"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dumbbell, Zap, Leaf, Activity, Clock } from "lucide-react";

const classes = [
  {
    icon: Dumbbell,
    title: "Snaga",
    description:
      "Izgradi čistu snagu sa compound liftovima i progresivnim opterećenjem. Savršeno za izgradnju mišića i povećanje snage.",
    schedule: "Pon–Pet 7h, 12h, 18h • Sub 9h",
  },
  {
    icon: Zap,
    title: "HIIT",
    description:
      "Visoko-intenzivni intervali za sagorijevanje kalorija i izgradnju kardiovaskularne izdržljivosti za samo 45 minuta.",
    schedule: "Pon–Pet 6h, 8h, 17h • Sub 10h",
  },
  {
    icon: Leaf,
    title: "Joga",
    description:
      "Poboljšaj fleksibilnost, mobilnost i mentalni fokus. Dobrodošli svi nivoi — od potpunih početnika do iskusnih praktičara.",
    schedule: "Uto/Čet 7h • Sri 18h • Ned 10h",
  },
  {
    icon: Activity,
    title: "Funkcionalni trening",
    description:
      "Obrasci pokreta koji se prenose u stvarni život. Poboljšaj svakodnevnu snagu, ravnotežu i agilnost.",
    schedule: "Pon/Sri/Pet 9h • Uto/Čet 17h",
  },
  {
    icon: Clock,
    title: "Open Gym",
    description:
      "Samostalni trening sa punim pristupom cjelokupnoj opremi. Vježbaj svojim tempom, po svom programu.",
    schedule: "Svakodnevno tokom radnog vremena",
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
            Pronađi svoj ritam
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300"
          >
            Od jutarnje snage do večernje joge — treninzi za sve nivoe, za svaki raspored.
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
            Spreman da probaš trening?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="mx-auto mt-4 max-w-xl text-neutral-400"
          >
            Tvoj prvi trening je besplatan — probaj bilo koji trening, koristi bilo koju opremu, bez obaveze.
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
                Zakaži besplatni probni trening
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="rounded-xl border-neutral-600 bg-neutral-900/70 px-8 py-6 text-base font-semibold text-white transition-all hover:bg-neutral-800 hover:text-white active:scale-[0.97]">
                Pogledaj cijene
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
