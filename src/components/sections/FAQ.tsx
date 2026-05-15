"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Šta je uključeno u članstvo?",
    answer:
      "Potpuni pristup opremi, sve grupne vježbe, besplatna fitness procjena i korištenje svlačionice.",
  },
  {
    question: "Da li postoji ugovorna obaveza?",
    answer:
      "Ne. Članstvo je od mjeseca do mjeseca. Otkaži bilo kada uz 30 dana otkaznog roka.",
  },
  {
    question: "Imate li besplatni probni trening?",
    answer:
      "Naravno. Tvoja prva posjeta je potpuno besplatna — sve vježbe, sva oprema, pun pristup.",
  },
  {
    question: "Šta ako sam potpuni početnik?",
    answer:
      "Savršeno. Većina naših članova je počela upravo tu gdje si ti. Sve ćemo ti pokazati.",
  },
  {
    question: "Koje vježbe nudite?",
    answer:
      "Trening snage, HIIT, jogu, funkcionalni trening i Open Gym za samostalne treninge.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Imaš pitanja? Imamo odgovore.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as const }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-[16px] border border-border bg-neutral-50 px-6 transition-colors hover:border-neutral-300"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-neutral-900 hover:text-brand-500 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-neutral-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
