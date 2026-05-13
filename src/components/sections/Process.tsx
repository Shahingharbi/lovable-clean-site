"use client";

import { motion } from "motion/react";
import { PhoneIcon, MailIcon, CheckIcon, SparkleSmallIcon } from "@/components/icons";

const STEPS = [
  {
    n: "01",
    icon: PhoneIcon,
    title: "Vous nous appelez",
    description:
      "Un coup de fil ou un message via le formulaire. On échange en direct sur votre besoin, sans intermédiaire ni filtre.",
  },
  {
    n: "02",
    icon: MailIcon,
    title: "Devis sous 24 h",
    description:
      "Visite gratuite si nécessaire, devis chiffré et transparent envoyé sous un jour ouvré. Pas de frais cachés.",
  },
  {
    n: "03",
    icon: CheckIcon,
    title: "Intervention planifiée",
    description:
      "Date fixée selon vos contraintes, équipe locale formée, matériel pro et produits adaptés à chaque surface.",
  },
  {
    n: "04",
    icon: SparkleSmallIcon,
    title: "Validation et garantie",
    description:
      "Tour du chantier ensemble, retouche offerte si besoin. Engagement résultat, sur la durée.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-cream py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
            Notre méthode
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-brown sm:text-5xl md:text-[56px] md:leading-[1.05]">
            {"Quatre étapes, "}
            <br />
            zéro mauvaise surprise
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-brown/75 md:text-lg">
            De la prise de contact à la remise du chantier, un processus clair
            et un seul interlocuteur. Devis sous 24 h, intervention possible
            en 48 h.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[28px] bg-cream-soft p-7 ring-1 ring-black/5"
            >
              <span className="font-display text-5xl font-bold tracking-tight text-orange/30">
                {step.n}
              </span>
              <span className="mt-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-orange text-cream shadow-[0_18px_30px_-12px_rgba(37,99,235,0.4)]">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-brown md:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-brown/75">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
