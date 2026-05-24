import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceQuoteForm } from "@/components/sections/services/ServiceQuoteForm";
import {
  StarIcon,
  GoogleGIcon,
  PhoneIcon,
  CheckIcon,
  SparkleSmallIcon,
} from "@/components/icons";

const SITE_URL = "https://www.ghservices.fr";

export const metadata: Metadata = {
  title: "Nettoyage moisissures et humidité à Thonon",
  description:
    "Nettoyage moisissures, lessivage murs, traitement fongicide à Thonon. Surface uniquement, diagnostic gratuit. Cas lourd : orientation expert. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/traitement-humidite-thonon`,
  },
  openGraph: {
    title: "Nettoyage moisissures et humidité à Thonon",
    description:
      "Nettoyage moisissures, lessivage murs noirs, traitement fongicide à Thonon et dans le Chablais. Traitement de surface, diagnostic gratuit, devis sous 24 heures.",
    url: `${SITE_URL}/traitement-humidite-thonon`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-humidite.jpg",
        width: 1600,
        height: 900,
        alt: "Nettoyage de moisissures et traitement d'humidité à Thonon-les-Bains",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Salles de bain humides",
    desc: "Joints noircis, plafonds tachés, murs constellés de points noirs. Lessivage en profondeur et application d'un fongicide professionnel pour stopper la prolifération en surface.",
  },
  {
    title: "Caves de stockage Léman",
    desc: "Caves enterrées des rives du Léman, garages semi-enterrés à Thonon ou Évian. Nettoyage des taches de salpêtre et désinfection des surfaces minérales.",
  },
  {
    title: "Copropriétés (parties communes)",
    desc: "Cages d'escalier humides après fuite, sous-sols collectifs, locaux poubelles. Intervention coordonnée avec le syndic, devis par cage et reporting photos.",
  },
  {
    title: "Propriétaires avant vente",
    desc: "Diagnostic visuel rapide et nettoyage des traces de moisissures noires avant visites d'acquéreurs. Idéal pour ne pas pénaliser la valeur perçue du bien.",
  },
  {
    title: "Locataires en fin de bail",
    desc: "Murs et plafonds tachés par la condensation, salles d'eau noircies. Remise en état avant état des lieux sortant pour récupérer la caution.",
  },
  {
    title: "Sinistre dégât des eaux",
    desc: "Après séchage par votre assureur ou un spécialiste, nous prenons en charge la désinfection des surfaces, le lessivage et la remise en peinture anti-humidité.",
  },
];

const ZONES = [
  "Thonon-les-Bains",
  "Évian-les-Bains",
  "Annemasse",
  "Douvaine",
  "Sciez",
  "Publier",
  "Anthy-sur-Léman",
  "Bons-en-Chablais",
  "Allinges",
  "Margencel",
  "Yvoire",
  "Excenevex",
  "Maxilly-sur-Léman",
  "Saint-Paul-en-Chablais",
  "Saint-Gingolph",
];

const FAQ = [
  {
    q: "Une moisissure noire sur le mur est-elle un danger pour la santé ?",
    a: "Les moisissures noires (souvent du genre Aspergillus ou Cladosporium) peuvent provoquer toux, irritations des yeux, gêne respiratoire et, chez les personnes sensibles ou asthmatiques, des réactions plus marquées. Il ne s'agit pas d'un diagnostic médical, mais il est recommandé de ne pas laisser une zone moisie s'étendre, d'aérer les pièces concernées et de faire intervenir un professionnel pour le nettoyage. En cas de symptômes persistants, consultez votre médecin.",
  },
  {
    q: "Vous traitez la cause de l'humidité ou seulement la surface ?",
    a: "Soyons clairs : GH Services traite la SURFACE. Nous nettoyons les taches de moisissures, lessivons les murs noirs, appliquons un fongicide professionnel et, si vous le souhaitez, une peinture anti-humidité. Nous ne réalisons pas d'injection de résine dans les murs, ni de drainage périphérique, ni d'électro-osmose, ni de cuvelage. Si le diagnostic révèle un problème structurel (remontées capillaires sévères, infiltration latérale, mur enterré non étanche), nous vous orientons vers un partenaire local certifié dans le traitement curatif.",
  },
  {
    q: "Quels produits utilisez-vous ?",
    a: "Selon la nature et l'étendue des moisissures, nous utilisons soit une solution chlorée diluée (efficace sur taches noires sur supports résistants), soit un fongicide professionnel biodégradable (recommandé sur peintures, plâtres et supports sensibles). Pour la finition, nous appliquons des peintures anti-humidité et anti-moisissures du marché, à faible émission de COV. Les fiches techniques sont disponibles sur demande.",
  },
  {
    q: "Combien de temps tient un traitement de surface ?",
    a: "Un nettoyage de surface bien réalisé tient en général de 12 à 36 mois si la cause de l'humidité a été corrigée en parallèle (VMC remise en état, aération régulière, étanchéité d'un joint, etc.). Si la cause persiste (condensation chronique, mur enterré non traité), les moisissures reviennent plus vite et un traitement curatif structurel devient nécessaire. Nous sommes transparents là-dessus lors du diagnostic.",
  },
  {
    q: "Faut-il aérer pendant et après l'intervention ?",
    a: "Oui. Pendant l'application, nous ouvrons les fenêtres et limitons l'occupation de la pièce. Après l'intervention, nous recommandons d'aérer 15 à 30 minutes par jour pendant plusieurs jours pour évacuer l'humidité résiduelle et finir le séchage. Les personnes sensibles peuvent quitter le logement durant le lessivage et revenir une fois la ventilation effectuée.",
  },
  {
    q: "Vous intervenez aussi après un dégât des eaux ?",
    a: "Oui, à condition que le séchage technique ait été réalisé (par votre assureur, un assécheur professionnel ou avec des déshumidificateurs). Une fois la zone sèche, nous nettoyons et désinfectons les surfaces, retirons les traces, lessivons les murs et reprenons la peinture si besoin. Nous ne réalisons pas le pompage, l'assèchement ni l'expertise d'assurance.",
  },
  {
    q: "Cas grave : à qui me référer ?",
    a: "Si le diagnostic révèle des remontées capillaires importantes, un mur enterré non étanche, une infiltration de toiture ou un problème structurel, nous vous orientons vers un partenaire local certifié spécialisé dans le traitement curatif (injection de résine, drainage périphérique, électro-osmose, cuvelage). Notre rôle s'arrête au nettoyage et au traitement de surface, mais nous restons à vos côtés pour assurer la finition une fois les travaux structurels terminés.",
  },
  {
    q: "Quel délai pour obtenir un diagnostic ?",
    a: "Nous proposons un diagnostic visuel gratuit sur rendez-vous, généralement sous 3 à 5 jours ouvrés à Thonon et sur le Chablais. Pour les copropriétés et les cas urgents (vente, fin de bail), nous priorisons. À l'issue de la visite, vous recevez un devis personnalisé chiffré sous 24 heures par e-mail.",
  },
];

const TESTIMONIALS = [
  {
    author: "Coline Chambert-Protat",
    date: "Juin 2025",
    body: "Hassen a été d'une grande aide et très professionnel dans le nettoyage complet de notre maison suite à des moisissures importantes sur les murs et plafonds.",
  },
  {
    author: "Shacy Will",
    date: "Avril 2025",
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top. Je recommande cette société avec qui j'espère continuer de travailler.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/traitement-humidite-thonon#service`,
  name: "Nettoyage moisissures et humidité à Thonon-les-Bains",
  serviceType: "Nettoyage moisissures et humidité",
  description:
    "Nettoyage de moisissures, lessivage de murs noirs, traitement fongicide et application de peinture anti-humidité à Thonon et dans le Chablais. Traitement de surface uniquement, hors traitement structural (injection de résine, drainage, électro-osmose, cuvelage). Diagnostic gratuit, orientation vers partenaire certifié pour les cas lourds.",
  url: `${SITE_URL}/traitement-humidite-thonon`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "17",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/traitement-humidite-thonon#faq`,
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nettoyage moisissures et humidité à Thonon",
      item: `${SITE_URL}/traitement-humidite-thonon`,
    },
  ],
};

export default function TraitementHumiditeThononPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <Header />

      <main className="bg-cream">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/service-humidite.jpg"
              alt="Nettoyage de moisissures sur un mur à Thonon-les-Bains, lessivage et traitement fongicide"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brown/95 via-brown/70 to-brown/30" />
          </div>

          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 ring-1 ring-cream/20 backdrop-blur-md">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow" />
                ))}
              </span>
              <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-cream">
                17 avis 5 sur 5 sur Google
              </span>
              <GoogleGIcon className="h-4 w-4" />
            </div>

            <h1 className="mt-6 max-w-3xl font-display text-[36px] leading-[1.05] font-bold tracking-tight uppercase text-cream sm:text-[48px] md:text-[64px]">
              Nettoyage moisissures et traitement humidité à{" "}
              <span className="text-orange">Thonon</span>-les-Bains{" "}
              et en région lémanique
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Spécialistes du nettoyage de moisissures noires, du lessivage des
              murs tachés, du traitement fongicide de surface et de la peinture
              anti-humidité à Thonon, Évian et dans tout le Chablais. Notre
              expertise porte sur la remise en état visible et la désinfection.
              Pour les pathologies structurelles lourdes (remontées capillaires
              importantes, infiltration latérale), nous vous orientons vers un
              partenaire local certifié. Diagnostic gratuit, devis sous 24 h.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#devis"
                className="inline-flex items-center rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_18px_40px_-12px_rgba(37,99,235,0.55)] transition-colors hover:bg-orange-dark"
                data-track="devis"
              >
                Demander un diagnostic
              </a>
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
                Diagnostic gratuit
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Traitement de surface
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Orientation expert si cas lourd
              </li>
            </ul>
          </div>
        </section>

        {/* POUR QUI */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Particuliers, syndics, propriétaires, locataires
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous intervenons sur toutes les situations de moisissures
                visibles et d&apos;humidité en surface : murs noircis,
                plafonds tachés, joints colonisés, caves humides, salles de
                bain mal ventilées, parties communes après sinistre, logements
                avant vente ou avant état des lieux.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PERSONAS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10"
                >
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brown/75">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHODE */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre méthode
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Diagnostic, lessivage, fongicide, finition
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Un protocole rigoureux en quatre étapes pour éliminer les
                moisissures visibles, désinfecter les supports et, si besoin,
                reprendre la finition. Nous documentons chaque intervention
                par photos avant et après.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Diagnostic visuel
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Visite sur place, repérage des zones moisies, identification
                  des causes apparentes (VMC encrassée, condensation, fuite,
                  salpêtre), photos avant intervention et devis chiffré sous
                  24 heures.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Aspiration et brossage
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Protection des sols et mobiliers, aspiration des spores en
                  surface avec aspirateur filtré, brossage doux pour décoller
                  les amas de moisissures sans abîmer le support.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Lessivage et fongicide
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Application d&apos;une solution chlorée ou d&apos;un
                  fongicide professionnel biodégradable selon le support.
                  Action désinfectante en profondeur sur les surfaces poreuses,
                  rinçage si nécessaire.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Peinture anti-humidité
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Sur demande, application d&apos;une peinture spéciale
                  anti-humidité et anti-moisissures, à faible émission de COV.
                  Finition mate ou satinée selon vos préférences, photos après
                  intervention.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SPECIFICITES CHABLAIS */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités Chablais et Léman
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  L&apos;humidité du bassin lémanique a ses particularités
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Climat lacustre, bâti ancien, sous-sols enterrés : quatre
                  facteurs locaux qui favorisent l&apos;apparition de
                  moisissures et que nous rencontrons régulièrement chez nos
                  clients du Chablais.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Caves enterrées des rives du Léman :</strong>{" "}
                      humidité ambiante forte, taches noires sur murs et
                      plafonds, salpêtre sur les parties basses. Désinfection
                      régulière recommandée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Vérandas et toits verriers :</strong> condensation
                      hivernale et chaleur estivale développent algues vertes
                      et moisissures dans les angles. Lessivage des supports
                      bois ou alu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Sous-sols Yvoire et Évian :</strong> remontées
                      capillaires fréquentes dans le bâti ancien en pierre.
                      Nous nettoyons la surface, mais le traitement curatif
                      structurel reste l&apos;affaire d&apos;un spécialiste
                      partenaire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Salles de bain mal ventilées :</strong> dans le
                      bâti ancien de Thonon, les VMC sont parfois absentes ou
                      encrassées. Résultat : moisissures noires (Aspergillus,
                      Cladosporium) sur joints et plafonds.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/lac-leman.jpg"
                  alt="Vue du Lac Léman, contexte climatique d'intervention de GH Services sur l'humidité"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PERIMETRE */}
        <section className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre périmètre d&apos;intervention
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Ce que nous faisons, et ce que nous ne faisons pas
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                La transparence sur le périmètre, c&apos;est ce qui distingue
                un nettoyeur sérieux d&apos;un commercial pressé. Voici
                clairement notre zone d&apos;expertise et nos limites.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-green-700">
                  Ce que nous faisons
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                  Nettoyage et traitement de surface
                </h3>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Nettoyage des taches noires (moisissures Aspergillus,
                    Cladosporium)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Lessivage des murs et plafonds tachés
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Traitement fongicide professionnel de surface
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Désinfection après dégât des eaux (une fois la zone sèche)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Application de peinture anti-humidité et
                    anti-moisissures
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Diagnostic visuel et reporting photos
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream/5 p-7 text-cream ring-1 ring-cream/20">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Ce que nous ne faisons pas
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                  Traitement curatif structurel
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-cream/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/60" />
                    Injection de résine dans les murs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/60" />
                    Drainage périphérique extérieur
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/60" />
                    Électro-osmose contre remontées capillaires
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/60" />
                    Cuvelage de cave ou sous-sol
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/60" />
                    Pompage et assèchement après inondation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/60" />
                    Expertise structurelle et rapport d&apos;assurance
                  </li>
                </ul>
                <p className="mt-6 text-sm text-cream/80">
                  Si le diagnostic révèle un problème structurel, nous vous
                  orientons vers un partenaire local certifié dans le
                  traitement curatif. Vous restez décisionnaire.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Tarification
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Devis personnalisé sous 24 h après visite
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Chaque chantier d&apos;humidité est différent : surface
                  concernée, accessibilité, type de support, présence ou non
                  de finition. Pas de tarif chiffré en ligne, mais une
                  estimation honnête après diagnostic visuel gratuit.
                </p>
              </div>
              <a
                href="#devis"
                className="mt-4 inline-flex items-center rounded-full bg-orange px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-cream md:mt-0"
              >
                Réserver le diagnostic
              </a>
            </div>
          </div>
        </section>

        {/* ZONES */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones d&apos;intervention
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Tout le Chablais et la rive sud du Léman
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre équipe se déplace dans tout le bassin lémanique français,
                de Genève à Saint-Gingolph. Frais de déplacement offerts
                jusqu&apos;à 25 km autour de Thonon-les-Bains.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {ZONES.map((z) => (
                <li key={z}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 text-sm font-medium text-brown ring-1 ring-brown/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    {z}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TEMOIGNAGES */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Avis vérifiés
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  17 avis 5 sur 5 sur Google
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 ring-1 ring-brown/10">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow" />
                  ))}
                </span>
                <span className="font-display text-sm font-bold text-brown">
                  5,0
                </span>
                <GoogleGIcon className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <article
                  key={t.author + t.date}
                  className="flex flex-col rounded-3xl bg-brown p-7 text-cream"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 text-yellow" />
                      ))}
                    </div>
                    <GoogleGIcon className="h-5 w-5 opacity-80" />
                  </div>
                  <p className="mt-5 text-sm leading-6 text-cream/95">
                    {`« ${t.body} »`}
                  </p>
                  <div className="mt-auto pt-6">
                    <p className="font-display text-sm font-bold uppercase tracking-tight">
                      {t.author}
                    </p>
                    <p className="text-xs text-cream/70">
                      {t.date}
                      {t.city ? `, ${t.city}` : ""}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Vos questions sur les moisissures et l&apos;humidité
              </h2>
            </div>

            <div className="mt-10 divide-y divide-brown/10 rounded-3xl bg-cream-soft ring-1 ring-brown/10">
              {FAQ.map((item) => (
                <details key={item.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-display text-base font-bold text-brown">
                    {item.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange text-cream transition-transform group-open:rotate-45">
                      <SparkleSmallIcon className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-brown/80">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES CONNEXES */}
        <section className="bg-cream-soft py-16">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
              Services connexes
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-brown sm:text-3xl md:text-[36px] md:leading-[1.1]">
              Autres prestations à Thonon-les-Bains
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link
                href="/fin-de-chantier-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage fin de chantier
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Remise à neuf après travaux d&apos;assainissement ou de
                  rénovation, dépoussiérage profond, finition impeccable.
                </p>
              </Link>
              <Link
                href="/nettoyage-coproprietes-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage copropriétés
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Parties communes humides après fuite, sous-sols collectifs,
                  contrats syndic adaptés au volume.
                </p>
              </Link>
              <Link
                href="/etat-des-lieux-sortant-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage état des lieux sortant
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Remise en état avant remise des clés, traitement des
                  moisissures de salle de bain incluses sur devis.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* FORMULAIRE DEVIS */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Diagnostic humidité gratuit
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre situation (pièce concernée, surface
                    touchée, photos si possible, présence ou non d&apos;une
                    VMC). Réponse chiffrée sous 24 heures ouvrées après visite.
                  </p>
                </div>

                <a
                  href="tel:+33684665523"
                  className="block rounded-3xl bg-brown p-7 text-cream transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange text-cream">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                        Appel direct
                      </p>
                      <p className="font-display text-2xl font-bold tracking-tight">
                        06 84 66 55 23
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-cream/80">
                    Disponible 7 j/7. Réponse immédiate en heures ouvrées.
                  </p>
                </a>

                <div className="rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-xs leading-relaxed text-red-900">
                  <span aria-hidden>⚠️ </span>
                  <strong>Aucun recrutement en cours.</strong>{" "}
                  Merci de ne pas téléphoner ni envoyer d&apos;e-mail pour une
                  candidature, les demandes spontanées ne sont pas traitées.
                </div>
              </aside>

              <ServiceQuoteForm
                serviceLabel="Nettoyage humidité moisissures"
                source="humidite_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
