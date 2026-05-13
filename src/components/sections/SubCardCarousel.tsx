"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { FeatureCard } from "@/types";

export function SubCardCarousel({ items }: { items: FeatureCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    trackRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-12">
      <div className="relative mx-auto max-w-[1408px] px-4 lg:px-12">
        <button
          type="button"
          aria-label="Précédent"
          onClick={() => scrollBy(-360)}
          className="absolute -left-1 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-cream transition-colors hover:bg-orange-dark md:flex"
        >
          <ArrowRightIcon className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Suivant"
          onClick={() => scrollBy(360)}
          className="absolute -right-1 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-cream transition-colors hover:bg-orange-dark md:flex"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>

        <div
          ref={trackRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3"
        >
          {items.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] bg-cream-soft ring-1 ring-black/5 transition-shadow hover:shadow-[0_18px_50px_-15px_rgba(11,27,44,0.25)] sm:w-[340px]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 80vw, 340px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brown md:text-[22px]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">{card.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-brown transition-colors group-hover:text-orange">
                  En savoir plus
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
