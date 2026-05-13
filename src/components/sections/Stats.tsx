"use client";

import { motion } from "motion/react";

const STATS = [
  { value: "15", label: "ans d'expérience" },
  { value: "22", label: "communes desservies" },
  { value: "5/5", label: "sur Avis Google" },
  { value: "24h", label: "pour votre devis" },
];

export function Stats() {
  return (
    <section className="bg-brown py-16 text-cream">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="font-display text-5xl font-bold tracking-tight text-orange md:text-6xl lg:text-[80px]">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-cream/80 md:text-base">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
