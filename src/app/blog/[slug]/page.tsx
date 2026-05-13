import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/icons";
import { BLOG_POSTS } from "@/data/blog";

const SITE_URL = "https://www.ghservices.fr";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 750 }],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "GH Services" },
    publisher: {
      "@type": "Organization",
      name: "GH Services",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/seo/logo-full.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="bg-cream pt-32 pb-24">
        <article className="mx-auto max-w-[800px] px-6 lg:px-0">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline">
            ← Retour au blog
          </Link>
          <p className="mt-6 font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
            {new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[48px] md:leading-[1.1]">
            {post.title}
          </h1>

          <div className="mt-8 overflow-hidden rounded-3xl">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={750}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="mt-10 space-y-6 text-lg leading-8 text-brown/85">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-cream-soft p-8 ring-1 ring-brown/10">
            <p className="font-display text-xl font-bold tracking-tight text-brown">
              Besoin d&apos;une intervention sur ce sujet ?
            </p>
            <p className="mt-2 text-sm text-brown/75">
              Notre équipe est à Thonon-les-Bains et intervient 7 j sur 7 dans
              tout le Chablais et la région lémanique.
            </p>
            <Link
              href="/contact"
              data-track="devis"
              className="mt-6 inline-flex items-center rounded-full bg-orange px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark"
            >
              Demander un devis
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
