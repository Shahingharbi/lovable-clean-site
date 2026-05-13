"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { StarIcon, GoogleGIcon, PhoneIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brown text-cream">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/photos/hero-cleaning.jpg"
          alt="Intérieur lumineux après nettoyage professionnel GH Services à Thonon-les-Bains"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown/85 via-brown/55 to-brown/20" />
      </div>

      <div className="mx-auto flex min-h-[760px] max-w-[1408px] flex-col justify-center px-6 pt-[180px] pb-32 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 ring-1 ring-cream/20 backdrop-blur-md">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-yellow" />
              ))}
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-cream">
              5,0 sur Avis Google
            </span>
            <GoogleGIcon className="h-4 w-4" />
          </div>

          <h1 className="mt-8 font-display text-[38px] leading-[1.02] font-bold tracking-tight uppercase text-cream sm:text-[52px] md:text-[68px] lg:text-[82px]">
            {"Entreprise de nettoyage à "}
            <br />
            <span className="text-orange">Thonon-les-Bains</span>
            <br />
            {" et en région lémanique"}
          </h1>

          <p className="mt-8 max-w-2xl text-lg font-medium text-cream/95 sm:text-xl">
            Société de nettoyage et de ménage à Thonon-les-Bains, Évian,
            Annemasse et tout le Chablais. Vitres, copropriétés, fin de
            chantier, textiles, déménagement : un résultat irréprochable, des
            équipes formées, un devis gratuit sous 24 h.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              data-track="devis"
              className="inline-flex items-center rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_18px_40px_-12px_rgba(37,99,235,0.55)] transition-colors hover:bg-orange-dark"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33684665523"
              className="inline-flex items-center gap-3 rounded-full border-2 border-cream/40 bg-cream/5 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-cream backdrop-blur-md transition-colors hover:bg-cream hover:text-brown"
            >
              <PhoneIcon className="h-4 w-4" />
              06 84 66 55 23
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-cream/90">
            <li className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Devis gratuit sous 24 h
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Intervention 7 j sur 7
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Particuliers, syndics, pros
            </li>
          </ul>
          <p className="mt-6 inline-block max-w-xl rounded-2xl bg-cream/10 px-4 py-2.5 text-xs leading-relaxed text-cream/80 ring-1 ring-cream/15">
            <span aria-hidden>⚠️ </span>
            <strong>Aucun recrutement en cours.</strong> Merci de ne pas
            téléphoner pour une candidature, les demandes spontanées ne sont
            pas traitées.
          </p>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[60px] bg-cream"
        style={{ borderTopLeftRadius: "60px", borderTopRightRadius: "60px" }}
      />
    </section>
  );
}
