"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, StarIcon, GoogleGIcon } from "@/components/icons";

type TestimonialItem =
  | { kind: "quote"; quote: string; author: string; role: string; href?: string }
  | { kind: "image"; title: string; subtitle: string; thumb: string };

const ITEMS: TestimonialItem[] = [
  {
    kind: "quote",
    quote:
      "Hassen a été très réactif, à l'écoute, de bons conseils et professionnel. Nous le recommandons et referons appel à lui les yeux fermés pour d'autres missions.",
    author: "Client privé",
    role: "Saint-Gingolph, 2024",
  },
  {
    kind: "image",
    title: "Cité de l'Eau",
    subtitle: "Évian-les-Bains, partie commune",
    thumb: "/clients/citedeleau.jpg",
  },
  {
    kind: "quote",
    quote:
      "La prise de rendez-vous a été rapide et nous sommes très satisfaits du ménage réalisé par l'entreprise. Nous n'hésiterons pas à travailler avec eux à nouveau.",
    author: "Thonon Évian Grand Genève FC",
    role: "Club, Thonon-les-Bains",
  },
  {
    kind: "image",
    title: "Allinges",
    subtitle: "Maison particulière, fin de chantier",
    thumb: "/clients/allinges.jpg",
  },
  {
    kind: "quote",
    quote:
      "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif et avec lequel le contact a été très agréable.",
    author: "Famille Roy",
    role: "Excenevex, 2024",
  },
  {
    kind: "image",
    title: "Textile, Évian",
    subtitle: "Nettoyage canapé et matelas",
    thumb: "/clients/textile-evian.jpg",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (delta: number) =>
    trackRef.current?.scrollBy({ left: delta, behavior: "smooth" });

  return (
    <section className="bg-cream pt-20 pb-12">
      <div className="mx-auto max-w-[1408px] px-4 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brown sm:text-5xl md:text-[56px] md:leading-[1.05] lg:text-[64px]">
            {"Ils nous ont "}
            <br />
            fait confiance
          </h2>
          <div className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-yellow" />
              ))}
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-wide text-brown">
              5 sur 5 sur Avis Google
            </span>
            <GoogleGIcon className="h-4 w-4" />
          </div>
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
            {ITEMS.map((item, i) =>
              item.kind === "quote" ? (
                <article
                  key={i}
                  className="flex w-[320px] shrink-0 snap-start flex-col rounded-[28px] bg-cream-soft p-7 ring-1 ring-black/5 sm:w-[380px]"
                >
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <StarIcon key={j} className="h-4 w-4 text-yellow" />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-7 text-brown">{`« ${item.quote} »`}</p>
                  <div className="mt-auto pt-8">
                    <p className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                      {item.author}
                    </p>
                    <p className="text-sm text-brown/70">{item.role}</p>
                    <Link
                      href={item.href ?? "#avis"}
                      className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold text-brown transition-colors hover:text-orange"
                    >
                      Lire tous les avis
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ) : (
                <article
                  key={i}
                  className="relative w-[320px] shrink-0 snap-start overflow-hidden rounded-[28px] sm:w-[380px]"
                >
                  <Image
                    src={item.thumb}
                    alt={item.title}
                    width={380}
                    height={420}
                    className="h-[420px] w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown/95 via-brown/40 to-transparent p-5 text-cream">
                    <p className="font-display text-lg font-bold uppercase tracking-tight">
                      {item.title}
                    </p>
                    <p className="text-sm text-cream/85">{item.subtitle}</p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
