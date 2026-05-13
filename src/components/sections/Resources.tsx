"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

type Article = { title: string; excerpt: string; image: string; href: string };

const ARTICLES: Article[] = [
  {
    title: "État des lieux sortant : récupérer 100 % de votre caution",
    excerpt:
      "Vitres, joints de salle de bain, hotte, plinthes : voici les zones que les agences inspectent en priorité, et comment les préparer pour récupérer la totalité de votre caution.",
    image: "/photos/blog-etat-lieux.jpg",
    href: "/blog/professionnel-etat-des-lieux-sortant",
  },
  {
    title: "Nettoyage de vitres sans traces : la méthode pro",
    excerpt:
      "Pourquoi un simple chiffon microfibre ne suffit pas, comment éviter les voiles et les traînées, et quel matériel utiliser sur les grandes surfaces vitrées et les vérandas.",
    image: "/photos/blog-vitres.jpg",
    href: "/blog/nettoyer-vitres-sans-traces",
  },
  {
    title: "Entretien d'espaces verts : un jardin écologique toute l'année",
    excerpt:
      "Tonte, taille, désherbage, ramassage des feuilles : un planning saisonnier pour garder un extérieur soigné sans y passer ses week-ends, en région lémanique.",
    image: "/photos/blog-jardin.jpg",
    href: "/blog/entretien-espaces-verts-ecologique",
  },
];

export function Resources() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (delta: number) =>
    trackRef.current?.scrollBy({ left: delta, behavior: "smooth" });

  return (
    <section id="ressources" className="bg-cream py-24">
      <div className="mx-auto max-w-[1408px] px-4 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brown sm:text-5xl md:text-[64px] md:leading-[1.05]">
            {"Conseils "}
            <br />
            et ressources
          </h2>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-orange px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark"
          >
            Poser une question à GH
          </Link>
        </div>

        <div className="relative mt-12">
          <button
            type="button"
            aria-label="Précédent"
            onClick={() => scrollBy(-380)}
            className="absolute -left-1 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-cream transition-colors hover:bg-orange-dark md:flex"
          >
            <ArrowRightIcon className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Suivant"
            onClick={() => scrollBy(380)}
            className="absolute -right-1 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-cream transition-colors hover:bg-orange-dark md:flex"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
          >
            {ARTICLES.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] ring-1 ring-black/5 sm:w-[380px]"
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={380}
                  height={260}
                  className="h-[230px] w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col bg-cream p-6">
                  <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-brown md:text-xl">
                    {a.title}
                  </h3>
                  <p className="mt-4 line-clamp-6 text-sm leading-6 text-brown/85">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wide text-orange">
                    Lire l'article
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
