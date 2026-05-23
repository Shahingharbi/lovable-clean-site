import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog et guides : conseils nettoyage et entretien",
  description:
    "Conseils pratiques de pros : nettoyage de vitres, état des lieux sortant, entretien des espaces verts. Par GH Services, Thonon-les-Bains et Léman.",
  alternates: { canonical: "https://www.ghservices.fr/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="bg-cream pt-32 pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
            Ressources
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-brown sm:text-5xl md:text-[64px] md:leading-[1.05]">
            Conseils &amp; guides d&apos;entretien
          </h1>
          <p className="mt-5 max-w-2xl text-base text-brown/75 md:text-lg">
            Le savoir-faire de nos pros, partagé sans détour. Des techniques
            éprouvées pour entretenir vos espaces et faire les bons choix.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group overflow-hidden rounded-3xl bg-cream-soft ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                    {new Date(p.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold leading-tight tracking-tight text-brown">
                    {p.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-brown/70">
                    {p.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
