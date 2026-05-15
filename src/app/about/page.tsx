"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Ana Kolar",
    role: "Osnivačica i glavna trenerica",
    bio: "10+ godina iskustva u fitness coachingu. Osnovala Athletix jer vjeruje da bi trening trebao biti kao doći kući.",
  },
  {
    name: "Ivan Horvat",
    role: "Trener snage i kondicije",
    bio: "Certificirani trener snage sa strašću za pomaganje početnicima da otkriju svoju snagu.",
  },
  {
    name: "Mia Novak",
    role: "Voditeljica joge i mobilnosti",
    bio: "Pomaže članovima da izgrade fleksibilnost i svjesnost uz svoj put snage.",
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
            Više od teretane.{" "}
            <span className="text-brand-400">Zajednica.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300"
          >
            Evo kako ti Athletix pomaže da postaneš najjača verzija sebe.
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
              Naša misija
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
              className="mt-6 space-y-5 text-base leading-relaxed text-neutral-600"
            >
              <p>
                Athletix je napravljen za ljude koji žele više od svoje teretane — više vodstva, više povezanosti, više rezultata.
              </p>
              <p>
                Vjerujemo da trening ne bi trebao biti zastrašujući. Bilo da prvi put kročiš u teretanu ili se vraćaš nakon pauze — ovdje pripadaš.
              </p>
              <p>
                Naša misija: pomoći ti da postaneš jači nego jučer — fizički, mentalno i kao dio nečega većeg od običnog treninga.
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
              Za šta se zalažemo
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
                  title: "Stručno vođenje",
                  desc: "Personalizirani programi koje kreiraju certificirani treneri koji zaista brinu o tvom napretku.",
                },
                {
                  title: "Prava zajednica",
                  desc: "Male grupe gdje svi znaju tvoje ime. Tu smo jedni za druge.",
                },
                {
                  title: "Nula straha",
                  desc: "Svako negdje počinje. Bilo da si početnik ili profi — ovdje pripadaš.",
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
            Upoznaj tim
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

      {/* Location */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-2xl font-bold text-neutral-950 sm:text-3xl">
              Gdje se nalazimo
            </h2>
            <p className="mt-2 text-base text-neutral-600">
              Smješteni u srcu Banovića — uvijek si dobrodošao.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
            className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[20px] shadow-sm"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.5,44.4,18.6,44.5&amp;layer=mapnik&amp;marker=44.45,18.55"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 20 }}
              allowFullScreen
              loading="lazy"
              title="ATHLETIX Gym lokacija"
            />
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
            Spreman da upoznaš svoju novu teretanu?
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
                Zakaži obilazak
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
