"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  WindowIcon,
  HouseRefreshIcon,
  BuildingIcon,
  SofaIcon,
  MoldIcon,
  TruckIcon,
  LeafIcon,
  BrickIcon,
  SprayIcon,
  ArrowRightIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

type ServiceCard = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: string;
  imageAlt: string;
  href: string;
};

const SERVICES: ServiceCard[] = [
  {
    title: "Nettoyage de vitres",
    description:
      "Vitres, verrières, vérandas, vitrines. Sans traces, en hauteur ou en accès difficile.",
    icon: WindowIcon,
    image: "/photos/service-vitres.jpg",
    imageAlt: "Nettoyage professionnel de vitre",
    href: "/contact",
  },
  {
    title: "Fin de chantier",
    description:
      "Après travaux, sinistre ou départ de locataire. Logement prêt pour la remise des clés.",
    icon: HouseRefreshIcon,
    image: "/photos/service-etat-lieux.jpg",
    imageAlt: "Remise en état après travaux",
    href: "/contact",
  },
  {
    title: "Copropriétés",
    description:
      "Halls, cages d'escalier, parkings, locaux techniques. Contrats syndic ou ponctuels.",
    icon: BuildingIcon,
    image: "/photos/service-coproprietes.jpg",
    imageAlt: "Nettoyage de hall d'immeuble",
    href: "/contact",
  },
  {
    title: "Textiles, tapis, canapés",
    description:
      "Tapis, moquettes, canapés, fauteuils, matelas. Extraction profonde, sans résidu.",
    icon: SofaIcon,
    image: "/photos/service-textile.jpg",
    imageAlt: "Nettoyage de canapé en textile",
    href: "/contact",
  },
  {
    title: "Anti humidité, moisissures",
    description:
      "Traitement curatif et préventif. Murs, plafonds, salles d'eau. Diagnostic gratuit.",
    icon: MoldIcon,
    image: "/photos/service-humidite.jpg",
    imageAlt: "Traitement anti humidité et moisissures",
    href: "/contact",
  },
  {
    title: "Débarras éco-responsable",
    description:
      "Maisons, caves, garages, bureaux. Tri rigoureux, valorisation, recyclage.",
    icon: SprayIcon,
    image: "/photos/service-debarras.jpg",
    imageAlt: "Espace vidé après débarras",
    href: "/contact",
  },
  {
    title: "Espaces verts",
    description:
      "Tonte, taille, désherbage, ramassage, allées. Ponctuel ou contrat à l'année.",
    icon: LeafIcon,
    image: "/photos/service-espaces-verts.jpg",
    imageAlt: "Espace vert entretenu",
    href: "/contact",
  },
  {
    title: "Petite maçonnerie",
    description:
      "Murets, dalles béton, chapes, rampes, clôtures. Finitions soignées garanties.",
    icon: BrickIcon,
    image: "/photos/service-maconnerie.jpg",
    imageAlt: "Travaux de petite maçonnerie",
    href: "/contact",
  },
  {
    title: "Déménagement",
    description:
      "Démontage, emballage, transport, remontage. Couplage avec ménage de fin de bail.",
    icon: TruckIcon,
    image: "/photos/service-demenagement.jpg",
    imageAlt: "Cartons de déménagement prêts à être chargés",
    href: "/contact",
  },
];

const FLOATING_PILLS = [
  { label: "DEVIS GRATUIT 24H", className: "right-[18%] top-2 rotate-3" },
  { label: "INTERVENTION 7J/7", className: "left-[10%] top-12 -rotate-6" },
  { label: "ÉQUIPE LOCALE", className: "right-[12%] bottom-2 -rotate-3" },
];

export function SectorsGrid() {
  return (
    <section id="services" className="bg-cream py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="relative pb-10">
          <h2 className="text-center font-display text-4xl font-bold uppercase tracking-tight text-brown sm:text-5xl md:text-[56px] md:leading-[1.05] lg:text-[68px]">
            {"tous nos services "}
            <br />
            {"de propreté "}
            <br />
            sur la région
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base text-brown/75 md:text-lg">
            Neuf prestations couvrant tous vos besoins, du studio au site multi
            lots, à Thonon-les-Bains, Évian, Annemasse et tout le Chablais.
          </p>
          {FLOATING_PILLS.map((p) => (
            <span
              key={p.label}
              className={`pointer-events-none absolute hidden rounded-full border border-brown/15 bg-cream px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-brown shadow-sm md:inline-block ${p.className}`}
            >
              {p.label}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, icon: Icon, image, imageAlt, href }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={href}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-cream-soft ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_50px_-15px_rgba(11,27,44,0.25)]"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-orange text-cream shadow-lg">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brown">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brown/75">{description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-brown transition-colors group-hover:text-orange">
                    Demander un devis
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
