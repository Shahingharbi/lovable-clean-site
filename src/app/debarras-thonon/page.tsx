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
  title: "Débarras à Thonon-les-Bains et Chablais",
  description:
    "Débarras maison, cave, grenier à Thonon. Succession, fin de bail, Diogène. Tri responsable Emmaüs, devis gratuit, intervention 48 h.",
  alternates: {
    canonical: `${SITE_URL}/debarras-thonon`,
  },
  openGraph: {
    title: "Débarras à Thonon-les-Bains et Chablais",
    description:
      "Débarras maison, cave, grenier, vide-appartement et vide-grenier à Thonon. Succession, fin de bail, syndrome de Diogène. Tri responsable Emmaüs, devis gratuit, intervention 48 h.",
    url: `${SITE_URL}/debarras-thonon`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-debarras.jpg",
        width: 1600,
        height: 900,
        alt: "Équipe GH Services en intervention de débarras à Thonon-les-Bains",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Successions et héritiers",
    desc: "Débarras succession après décès, vide-maison complet avant vente notariale. Discrétion absolue, respect des objets personnels et papiers à conserver, coordination avec le notaire.",
  },
  {
    title: "Locataires en fin de bail",
    desc: "Vide-appartement express avant remise des clés. Évacuation des meubles, électroménager et encombrants restés sur place, pour récupérer la caution en bon ordre.",
  },
  {
    title: "Agents immobiliers avant vente",
    desc: "Vidage maison ou appartement pour préparer la mise sur le marché. Bien neutralisé, prêt aux visites, photos pro réalisables dès la fin du débarras.",
  },
  {
    title: "Familles, départ en EHPAD",
    desc: "Aide humaine et logistique pour vider la maison d'un proche entrant en établissement. Tri en présence de la famille, mise de côté des objets sentimentaux, valorisation du reste.",
  },
  {
    title: "Copropriétés et caves communes",
    desc: "Débarras de caves, garages et locaux communs à l'abandon. Coordination syndic, identification des biens, évacuation rapide pour libérer la surface.",
  },
  {
    title: "Syndrome de Diogène",
    desc: "Débarras Diogène avec discrétion totale, EPI adaptés, désinfection en lien avec nos prestations de nettoyage extrême. Accompagnement humain des familles concernées.",
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
    q: "Êtes-vous équipés pour les gros volumes ?",
    a: "Oui. Nous traitons aussi bien un vide-cave de 5 m³ qu'une maison complète de 60 m³ et plus. Nos véhicules utilitaires et remorques sont adaptés au tonnage, et nous renforçons l'équipe sur les chantiers volumineux pour tenir le délai annoncé au devis.",
  },
  {
    q: "Quelle traçabilité pour les déchets ?",
    a: "Chaque débarras donne lieu à une répartition claire : objets valorisés via Emmaüs et brocantes locales, matériaux recyclables (métal, bois, carton) déposés en filière dédiée, déchets ultimes en déchèterie de Thonon Vongy. Les bordereaux de dépôt peuvent être fournis sur demande, notamment pour les successions.",
  },
  {
    q: "Vous intervenez en cas de syndrome de Diogène ?",
    a: "Oui, c'est l'une de nos spécialités. Nous intervenons avec discrétion, sans aucun jugement, en EPI complets et masques filtrants. Le débarras Diogène est toujours couplé à une désinfection et un nettoyage en profondeur. Nous échangeons en amont avec la famille ou les services sociaux quand ils sont impliqués.",
  },
  {
    q: "Combien coûte un débarras de cave ?",
    a: "Le tarif dépend du volume au m³ et de l'accessibilité (étage, ascenseur, distance jusqu'au véhicule). Pour une cave standard, le devis est personnalisé après visite ou photos. Selon volume au m³ et accessibilité. Nous chiffrons toujours avant intervention, sans surprise sur la facture finale.",
  },
  {
    q: "Le débarras peut-il être gratuit ?",
    a: "Quand les objets présents ont une valeur de revente suffisante pour couvrir notre main-d'œuvre et l'évacuation, oui : nous proposons un débarras avec rachat partiel ou total. Cela concerne surtout les biens contenant du mobilier ancien, de l'électroménager récent ou des objets de collection. L'évaluation est faite à la visite.",
  },
  {
    q: "Vous travaillez avec Emmaüs ?",
    a: "Oui. Tout ce qui peut servir à quelqu'un d'autre (vêtements, vaisselle, petit mobilier, livres, jouets) est trié et orienté vers Emmaüs et les associations locales du Chablais. Notre approche est éco-responsable : on évite la déchèterie chaque fois qu'une seconde vie est possible.",
  },
  {
    q: "Combien de temps pour un débarras complet ?",
    a: "Un vide-cave ou vide-grenier de petit volume se traite en une demi-journée. Un appartement F3 prend généralement 1 à 2 jours. Une maison complète de 30 m³ et plus s'étale sur 2 à 4 jours selon le tri. Nous fixons la date d'intervention dans les 48 heures qui suivent la validation du devis.",
  },
  {
    q: "Vous nettoyez après débarras ?",
    a: "Un nettoyage léger de fin de prestation est compris : coup de balai, dépoussiérage des surfaces, sortie des derniers déchets. Pour un nettoyage complet en vue d'une remise des clés ou d'une vente, nous proposons en complément notre prestation d'état des lieux sortant ou de fin de chantier.",
  },
];

const TESTIMONIALS = [
  {
    author: "Debrot Raymond",
    date: "Mars 2026",
    body: "GH Services s'est occupé du nettoyage de notre maison avant la vente. Nous sommes extrêmement satisfaits de leur travail.",
  },
  {
    author: "Christophe Lacroix",
    date: "Octobre 2025",
    body: "Suite au départ d'un locataire, mon appartement a été rendu dans un état lamentable. L'équipe de GH Services a fait un travail extraordinaire pour le rendre dans l'état initial.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/debarras-thonon#service`,
  name: "Débarras et enlèvement encombrants",
  serviceType: "Débarras maison, appartement, cave, grenier",
  description:
    "Débarras à Thonon-les-Bains et dans tout le Chablais : vide-maison, vide-appartement, vide-cave, vide-grenier, débarras succession, débarras Diogène, fin de bail. Tri valorisation Emmaüs, approche éco-responsable, devis gratuit sous 24 heures, intervention sous 48 heures.",
  url: `${SITE_URL}/debarras-thonon`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    description:
      "Devis personnalisé après visite ou photos. Selon volume au m³ et accessibilité.",
    availability: "https://schema.org/InStock",
  },
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
  "@id": `${SITE_URL}/debarras-thonon#faq`,
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
      name: "Débarras à Thonon",
      item: `${SITE_URL}/debarras-thonon`,
    },
  ],
};

export default function DebarrasThononPage() {
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
        {/* Breadcrumb visible (UX + SEO) */}
        <nav
          aria-label="Fil d'Ariane"
          className="bg-cream pt-[120px] pb-2 md:pt-[140px]"
        >
          <div className="mx-auto max-w-[1280px] px-6 text-xs text-brown/60 lg:px-12">
            <Link href="/" className="hover:text-orange">
              Accueil
            </Link>
            <span className="mx-2 text-brown/30">/</span>
            <span className="text-brown/75">Débarras à Thonon</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/service-debarras.jpg"
              alt="Intervention de débarras à Thonon-les-Bains, équipe GH Services vidant une maison avec soin"
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
              Débarras à{" "}
              <span className="text-orange">Thonon-les-Bains</span> et région du
              Chablais
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Vide-maison, vide-appartement, vide-cave et vide-grenier à Thonon
              et dans tout le Chablais lémanique. Nous gérons les débarras
              succession, les fins de bail et les situations sensibles comme le
              syndrome de Diogène avec discrétion et respect. Tri responsable
              vers Emmaüs, approche éco-responsable, devis sous 24 heures et
              intervention possible sous 48 heures.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#devis"
                className="inline-flex items-center rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_18px_40px_-12px_rgba(37,99,235,0.55)] transition-colors hover:bg-orange-dark"
                data-track="devis"
              >
                Demander un devis
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
                Devis 24 h
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Tri responsable
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Diogène avec discrétion
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
                Successions, fins de bail, copropriétés et situations sensibles
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous accompagnons les particuliers, les héritiers, les agents
                immobiliers et les syndics pour tout type de débarras à Thonon
                et autour du Léman : vidage maison après décès, vide-appartement
                en fin de bail, vide-cave et vide-grenier, enlèvement
                d&apos;encombrants, débarras Diogène. Approche humaine,
                discrétion et tri valorisation Emmaüs systématique.
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
                Visite, devis au m³, évacuation, nettoyage léger
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre méthode repose sur quatre étapes simples, conçues pour
                vous éviter toute mauvaise surprise. Vous savez ce que vous
                payez, ce qui est emporté, ce qui est valorisé et dans quel état
                est laissé le bien après notre passage.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Visite ou photos
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Nous nous déplaçons à Thonon et alentours pour évaluer le
                  volume, ou vous nous transmettez des photos par e-mail si vous
                  vivez loin (notamment pour les successions). Échange
                  préalable sur les objets à conserver.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Devis volume et tri
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Devis personnalisé après visite ou photos. Selon volume au m³
                  et accessibilité. Détail du tri prévu (Emmaüs, recyclage,
                  déchèterie) et possibilité de rachat partiel si objets de
                  valeur.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Évacuation
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Intervention possible sous 48 heures avec véhicule adapté
                  (utilitaire, fourgon, remorque). Protection des sols et
                  cages d&apos;escalier, descente des meubles avec sangles,
                  filière dédiée pour chaque type de déchet.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Nettoyage léger
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Coup de balai, dépoussiérage et sortie des derniers déchets en
                  fin de prestation. Le bien est rendu vide, prêt pour la
                  visite, la remise des clés ou un nettoyage complet à
                  programmer en option.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SPECIFICITES LEMAN */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités du Chablais
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Le débarras sur les rives du Léman a ses propres contraintes
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Le bâti, l&apos;ameublement et les filières de tri ne se
                  ressemblent pas d&apos;un département à l&apos;autre. Voici ce
                  que nous prenons systématiquement en compte avant de chiffrer
                  un débarras à Thonon ou autour du Léman.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Caves et garages anciens :</strong> bâti pierre du
                      vieux Thonon, accès parfois étroits, hauteurs sous plafond
                      réduites. Évacuation manuelle des objets lourds avec
                      matériel adapté.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Mobilier de chalet :</strong> les chalets du
                      Chablais regorgent de pièces à valoriser via brocante
                      locale (buffets, lits montagnards, vaisselle régionale).
                      Identification systématique avant la déchèterie.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Déchets verts à part :</strong> jardins de bord de
                      lac, terrasses, abris de jardin. Les déchets végétaux sont
                      séparés et déposés en filière compostage, jamais mélangés
                      aux encombrants.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Déchèterie Thonon Vongy :</strong> les frais de
                      dépôt y sont intégrés au devis, vous n&apos;avancez rien.
                      Les bordereaux peuvent être fournis pour les dossiers
                      succession ou syndic.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/lac-leman.jpg"
                  alt="Vue du Lac Léman depuis Thonon-les-Bains, zone d'intervention GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TARIFS / CAS TYPES */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Comment ça marche et valorisation
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Trois cas types de débarras, du vide-cave au vide-maison complet
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Chaque débarras est unique, mais la plupart de nos
                interventions à Thonon entrent dans trois cas types. Le tarif
                exact repose toujours sur un devis personnalisé après visite ou
                photos. Selon volume au m³ et accessibilité.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-green-700">
                  Débarras partiel
                </span>
                <p className="mt-3 font-display text-3xl font-bold tracking-tight">
                  Cave 5 à 10 m³
                </p>
                <p className="mt-1 text-sm text-brown/60">
                  Vide-cave, vide-garage, vide-grenier
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Intervention sur une demi-journée
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Tri métal, bois, carton, électroménager
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Idéal copropriétés et particuliers
                  </li>
                </ul>
              </div>

              <div className="relative rounded-3xl bg-orange p-7 text-cream ring-2 ring-orange/40">
                <span className="absolute -top-3 right-6 rounded-full bg-cream px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-orange">
                  Le plus fréquent
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-cream/90">
                  Débarras complet
                </span>
                <p className="mt-3 font-display text-3xl font-bold tracking-tight">
                  Appart 15 à 30 m³
                </p>
                <p className="mt-1 text-sm text-cream/80">
                  Vide-appartement, fin de bail, succession
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Intervention 1 à 2 jours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Mise de côté des objets à conserver
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Logement rendu vide et balayé
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Vide-maison
                </span>
                <p className="mt-3 font-display text-3xl font-bold tracking-tight">
                  Maison 30 m³ et plus
                </p>
                <p className="mt-1 text-sm text-brown/60">
                  Succession, vente, départ EHPAD
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Intervention 2 à 4 jours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Cave, grenier, dépendances incluses
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Coordination notaire ou agence
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Valorisation et rachat
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Rachat possible si objets de valeur
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Mobilier ancien, électroménager récent, vaisselle de
                  collection : nous évaluons sur place et déduisons la valeur du
                  rachat de la facture. Partenariats actifs avec Emmaüs et la
                  déchèterie de Thonon Vongy pour un débarras éco-responsable.
                </p>
              </div>
              <div className="mt-4 inline-flex items-baseline gap-2 rounded-2xl bg-orange px-6 py-4 md:mt-0">
                <span className="font-display text-2xl font-bold tracking-tight text-cream">
                  Devis sous 24 h
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Comment est calculé le devis
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Devis personnalisé après visite ou photos. Selon volume au m³
                  et accessibilité. Aucun supplément caché : déchèterie, tri,
                  main-d&apos;œuvre et véhicule sont intégrés au prix annoncé.
                </p>
              </div>
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Tri valorisation Emmaüs
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Tout objet réutilisable est orienté vers Emmaüs et les
                  associations locales du Chablais. Le reste est trié par
                  filière (métal, bois, électroménager, encombrants), pour un
                  débarras éco-responsable et traçable.
                </p>
              </div>
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
                Débarras à Thonon et dans tout le Chablais
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous intervenons dans tout le bassin lémanique français, de la
                région d&apos;Annemasse jusqu&apos;à Saint-Gingolph. Frais de
                déplacement offerts jusqu&apos;à 25 km autour de
                Thonon-les-Bains.
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
                Vos questions sur le débarras à Thonon
              </h2>
            </div>

            <div className="mt-10 divide-y divide-brown/10 rounded-3xl bg-cream-soft ring-1 ring-brown/10">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group p-6 [&_summary::-webkit-details-marker]:hidden"
                >
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
                  Remise à neuf après travaux, dépoussiérage profond, retrait
                  des résidus de plâtre et peinture pour livrer un bien propre.
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
                  Préparation à la remise des clés après le débarras, pour
                  récupérer 100 % de votre caution sans contestation.
                </p>
              </Link>
              <Link
                href="/demenagement-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Déménagement
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Service de déménagement à Thonon et dans le Chablais, en
                  complément ou en amont d&apos;un débarras complet.
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
                    Recevez votre devis débarras
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre situation (type de bien, volume estimé,
                    contexte succession ou fin de bail, présence ou non de
                    sensibilité Diogène). Réponse chiffrée sous 24 heures
                    ouvrées.
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
                serviceLabel="Débarras"
                source="debarras_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
