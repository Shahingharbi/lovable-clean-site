import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog";

const SITE_URL = "https://www.ghservices.fr";

const SERVICE_SLUGS = [
  // Phase 1, hubs services Thonon
  "nettoyage-vitres-thonon",
  "fin-de-chantier-thonon",
  "nettoyage-coproprietes-thonon",
  "nettoyage-textiles-thonon",
  "traitement-humidite-thonon",
  "debarras-thonon",
  "entretien-espaces-verts-thonon",
  "petite-maconnerie-thonon",
  "demenagement-thonon",
  "menage-thonon-les-bains",
  "nettoyage-chalets-leman",
  "etat-des-lieux-sortant-thonon",
];

const CITY_HUB_SLUGS = [
  // Phase 2, hubs villes Léman / Chablais
  "nettoyage-evian-les-bains",
  "nettoyage-annemasse",
  "nettoyage-douvaine",
  "nettoyage-sciez",
  "nettoyage-publier",
  "nettoyage-yvoire",
  "nettoyage-anthy-sur-leman",
  "nettoyage-bons-en-chablais",
];

const COMBO_SLUGS = [
  // Phase 2, combos service x ville
  "nettoyage-vitres-evian-les-bains",
  "nettoyage-vitres-annemasse",
  "menage-annemasse",
  "menage-evian-les-bains",
  "nettoyage-canape-annemasse",
  "nettoyage-fin-de-bail-annemasse",
  "debarras-annemasse",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...CITY_HUB_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...COMBO_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/politique-de-confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
