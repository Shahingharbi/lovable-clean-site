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
  title: "Nettoyage de vitres à Évian-les-Bains",
  description:
    "Lavage de vitres pro à Évian-les-Bains. Eau osmosée, perche carbone, vérandas, vitrines. Particuliers, copros, thermes. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-vitres-evian-les-bains`,
  },
  openGraph: {
    title: "Nettoyage de vitres à Évian-les-Bains",
    description:
      "Lavage de vitres pro à Évian-les-Bains. Eau osmosée, perche carbone, vérandas, vitrines. Particuliers, copros, thermes. Devis 24 h.",
    url: `${SITE_URL}/nettoyage-vitres-evian-les-bains`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/evian-5.jpg",
        width: 1600,
        height: 900,
        alt: "Lavage de vitres à Évian-les-Bains par GH Services, rive sud du Léman",
      },
    ],
  },
};

const PERSONAS: { title: string; desc: string }[] = [
  {
    title: "Villas vue Léman Évian Rives",
    desc: "Propriétaires de demeures perchées sur Évian Rives et le coteau de Neuvecelle, baies plein lac orientées nord, encadrements bois souvent humides au petit matin. Vitrage intérieur et extérieur, fenêtres de toit Velux et garde-corps verre des balcons côté lac.",
  },
  {
    title: "Hôtels et thermes",
    desc: "Vitrerie hôtelière des résidences de cure, façades de la Source Cachat, halls vitrés du quartier thermal. Passage en horaires étroits le matin avant arrivée des curistes, ou le soir une fois la salle à manger fermée.",
  },
  {
    title: "Commerçants quai Charles-Albert",
    desc: "Vitrines des boutiques face au port, brasseries en première ligne du débarcadère, agences immobilières du quai. Fréquence rapprochée car embruns du lac et passage piéton dense salissent vite la devanture.",
  },
  {
    title: "Copropriétés Mateirons",
    desc: "Halls vitrés et cages d'escalier des résidences du quartier des Mateirons et de la route des Princes. Lavage des vitres des parties communes, garde-corps verre des coursives, oculus de portes palières en intervention syndic.",
  },
  {
    title: "Particuliers Maxilly et Lugrin",
    desc: "Maisons individuelles le long de la RD1005 vers Lugrin, fermes rénovées du plateau de Maxilly, chalets en bois traité plein sud. Vitres exposées aux pollens d'avril à juin et aux feuilles d'automne des grands arbres.",
  },
  {
    title: "Restaurants port d'Évian",
    desc: "Salles vitrées face au débarcadère CGN, baies coulissantes des terrasses, vitrines de bar à vin de la rue Nationale. Passage avant le service du midi ou très tôt le matin pour ne pas gêner le coup de feu.",
  },
];

const ZONES: string[] = [
  "Évian-les-Bains",
  "Publier",
  "Amphion",
  "Lugrin",
  "Maxilly-sur-Léman",
  "Neuvecelle",
  "Marin",
  "Champanges",
  "Larringes",
  "Bernex",
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Intervenez-vous dans le quartier des thermes d'Évian ?",
    a: "Oui, sur les annexes des établissements thermaux : appartements de cure entre deux séjours, parties communes des résidences, vitrerie hôtelière, oculus des halls, terrasses et bureaux administratifs. Nous adaptons les horaires au flux des curistes, généralement entre 6 h et 8 h ou après 19 h pour les façades visibles depuis la Source Cachat.",
  },
  {
    q: "Comment lavez-vous les balcons des étages élevés sur le coteau d'Évian ?",
    a: "À la perche fibre de carbone alimentée en eau osmosée embarquée dans le véhicule, nous atteignons les vitres jusqu'à 12 mètres depuis le sol, sans nacelle ni échafaudage. Pour les immeubles plus hauts des Mateirons ou les villas en surplomb route des Princes, nous mobilisons un cordiste partenaire formé travail en hauteur, intervention validée au cas par cas.",
  },
  {
    q: "Les vérandas vue lac d'Évian demandent un traitement particulier ?",
    a: "Oui. L'humidité quasi permanente sur la rive sud favorise les algues vertes sur les toits verriers et les joints silicone. Nous procédons d'abord à un détergent biodégradable doux pour décoller le biofilm, puis rinçage abondant à l'eau osmosée pour éviter toute reprise. Une véranda de 25 m² demande environ 2 heures, hors traitement antimousse.",
  },
  {
    q: "Combien de temps entre Thonon et Évian pour une intervention vitres ?",
    a: "Notre véhicule équipé de cuve à eau osmosée part de Thonon et arrive en environ 10 minutes par la RD1005. Pour Publier et Amphion, comptez 5 minutes, pour Lugrin et Maxilly entre 8 et 12 minutes, pour Bernex sur le plateau de Gavot une vingtaine de minutes. Pas de frais de déplacement supplémentaires dans tout le périmètre du pays d'Évian.",
  },
  {
    q: "L'eau du robinet d'Évian convient-elle pour laver les vitres ?",
    a: "Non, et c'est un paradoxe local : malgré la réputation de l'eau d'Évian en bouteille, l'eau de distribution distribuée sur la commune reste calcaire. Utilisée directement, elle laisse un voile blanc en séchant. Notre cuve embarquée filtre l'eau par osmose inverse et abat la résistivité à moins de 10 microsiemens, ce qui garantit un séchage sans la moindre trace.",
  },
  {
    q: "Vous gérez les résidences secondaires utilisées quelques week-ends par mois ?",
    a: "Oui, c'est une part importante de notre clientèle évianaise. Nous proposons un forfait passage avant arrivée, qui inclut le lavage des vitres intérieures et extérieures, le dépoussiérage des cadres et la finition à la microfibre. Vous nous transmettez votre planning d'occupation, nous calons l'intervention 24 à 48 heures avant chaque arrivée, sans que vous ayez à passer sur place.",
  },
  {
    q: "Quel matériel utilisez-vous dans les bâtiments thermaux à valeur patrimoniale ?",
    a: "Pour les façades de la rue Nationale, les abords du Palais Lumière et les vitrines des résidences anciennes, nous travaillons exclusivement à l'eau osmosée pure, sans détergent agressif. Pas de haute pression, raclette caoutchouc dur sur les vitres et microfibre douce sur les huisseries en bois ou les boiseries dorées. Protocole validé chantier par chantier avec le syndic ou le donneur d'ordre.",
  },
  {
    q: "Le crédit d'impôt 50 % s'applique-t-il à Évian ?",
    a: "Oui, sans changement. Le lavage de vitres au domicile d'un particulier à Évian-les-Bains entre dans le cadre des services à la personne et ouvre droit à 50 % de crédit d'impôt, plafonné selon la réglementation en vigueur. Nous fournissons l'attestation fiscale annuelle, valable pour la déclaration de revenus, y compris pour les résidences secondaires occupées par leur propriétaire.",
  },
];

const TESTIMONIALS: { author: string; date: string; city?: string; body: string }[] = [
  {
    author: "Shacy Will",
    date: "Avril 2025",
    city: "Évian-les-Bains",
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top. Je recommande cette société avec qui j'espère continuer de travailler.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif et avec lequel le contact a été très agréable.",
  },
  {
    author: "Genève Expat",
    date: "Mai 2025",
    city: "Lugrin",
    body: "Nous avons fait appel aux services de nettoyage de GH Services à notre entière satisfaction. Il s'agissait du nettoyage de notre maison avant remise des clés.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-vitres-evian-les-bains#service`,
  name: "Nettoyage de vitres à Évian-les-Bains",
  serviceType: "Nettoyage de vitres",
  description:
    "Lavage de vitres professionnel à Évian-les-Bains et sur la rive sud du Léman. Eau osmosée, perche fibre carbone jusqu'à 12 mètres, vérandas, vitrines, copropriétés et résidences secondaires. Équipe basée à Thonon, intervention à 10 minutes.",
  url: `${SITE_URL}/nettoyage-vitres-evian-les-bains`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "2.50",
    highPrice: "5.00",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceType: "https://schema.org/MinimumPrice",
      price: "2.50",
      priceCurrency: "EUR",
      unitText: "m² par passage",
    },
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
  "@id": `${SITE_URL}/nettoyage-vitres-evian-les-bains#faq`,
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
      name: "Nettoyage de vitres",
      item: `${SITE_URL}/nettoyage-vitres-thonon`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Évian-les-Bains",
      item: `${SITE_URL}/nettoyage-vitres-evian-les-bains`,
    },
  ],
};

export default function NettoyageVitresEvianLesBainsPage() {
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
        {/* 1. HERO V1 BROWN GRADIENT */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/cities/evian-5.jpg"
              alt="Front de lac et vitrines d'Évian-les-Bains, terrain d'intervention de GH Services"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brown/95 via-brown/75 to-brown/35" />
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
              Nettoyage de vitres à{" "}
              <span className="text-orange">Évian-les-Bains</span> et rive sud
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Laveur de vitres pro à Évian, en pied de coteau thermal comme en
              bord de port. Eau osmosée pour battre le calcaire local, perche
              carbone pour les baies en hauteur sur Évian Rives, traitement doux
              pour les vérandas humides du Léman et les vitrines patrimoniales
              de la rue Nationale. Devis chiffré sous 24 h.
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
                Eau osmosée
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Perche carbone
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Crédit impôt 50 %
              </li>
            </ul>
          </div>
        </section>

        {/* 2. POUR QUI A EVIAN (VITRES) */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Six profils typiques de vitrage évianais
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le bord de port, le quartier thermal et les hauteurs vers Lugrin
                ne posent pas les mêmes problèmes de vitre. Voici comment nous
                segmentons notre activité de laveur de vitres Évian par usage
                local, du quai Charles-Albert au plateau de Maxilly.
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

        {/* 3. NOTRE METHODE PRO POUR VITRES EVIAN */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Méthode pro vitres Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Quatre gestes calibrés pour l&apos;eau et l&apos;air d&apos;Évian
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le calcaire fort de la distribution évianaise et les embruns
                lacustres exigent une chaîne précise. Voici la séquence que nous
                appliquons chantier après chantier, du centre thermal aux
                villas de Maxilly.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Lecture du calcaire local
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Repérage des dépôts blancs typiques de l&apos;eau du robinet
                  évianaise et du voile minéral lacustre déposé par les vents
                  du sud. Mesure de la conductivité, choix du débit osmosé et
                  test sur une vitre témoin avant lancement.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Eau osmosée obligatoire
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Cuve embarquée filtrée par osmose inverse, résistivité abattue
                  à moins de 10 microsiemens. Aucune eau du réseau évianais
                  utilisée en finition, c&apos;est la seule garantie zéro trace
                  sur double vitrage en bord de port et baies plein lac.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Perche carbone jusqu&apos;à 12 m
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Perche télescopique fibre de carbone alimentée en continu, qui
                  atteint les balcons des résidences du coteau Évian Rives, les
                  baies en surplomb route des Princes et les verrières de
                  copropriété sans nacelle ni échafaudage.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Raclette finition
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Raclette Unger ou Ettore caoutchouc dur pour les vitrines de
                  plain-pied du quai Charles-Albert et de la rue Nationale.
                  Microfibre dédiée sur les bords, contrôle vitre par vitre à
                  contre-jour, retouche éventuelle avant départ.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* 4. SPECIFICITES VITRAGE EVIAN */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités vitrage Évian
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Ce qui distingue une vitre d&apos;Évian d&apos;une vitre
                  d&apos;ailleurs
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Quatre phénomènes très localisés modifient la nature des
                  salissures sur les vitrages de la commune. Les ignorer fait
                  ressortir les traces dès le premier rayon de soleil.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Calcaire fort de l&apos;eau locale :</strong>{" "}
                      paradoxe bien connu, l&apos;eau du réseau distribuée à
                      Évian est minéralisée et entartre rapidement les vitres
                      lavées à la classique éponge plus seau. Le voile blanc
                      réapparaît dès le séchage. Seule l&apos;eau osmosée
                      annule l&apos;effet.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Vitrines exposées aux embruns d&apos;automne :</strong>{" "}
                      d&apos;octobre à janvier, le vent du sud charge
                      l&apos;air d&apos;une fine bruine lacustre qui dépose un
                      film salin sur les devantures du quai Charles-Albert et
                      de la promenade du port. Lavage rapproché conseillé.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Vérandas et algues vertes :</strong> humidité
                      résiduelle du Léman favorise les dépôts biologiques sur
                      les verrières orientées nord à Maxilly, Lugrin et
                      Neuvecelle. Détergent biodégradable doux suivi
                      d&apos;un rinçage osmosé abondant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Vitrines des thermes et matériel doux :</strong>{" "}
                      pierres tendres des façades anciennes, dorures des
                      auvents, boiseries patrimoniales du quartier thermal.
                      Pas de haute pression, pas de solvant agressif,
                      protocole validé chantier par chantier.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/evian-7.jpg"
                  alt="Promenade et vitrines d'Évian-les-Bains côté port"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. TARIFS VITRAGE EVIAN */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Tarifs vitres Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Abonnement pro à partir de 2,50 € HT par m² à Évian
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Trois formules pour les commerçants du port, les hôtels du
                quartier thermal et les copropriétés Mateirons. Pour les
                particuliers d&apos;Évian, de Lugrin ou de Maxilly,
                intervention ponctuelle sur devis chiffré sous 24 h.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-green-700">
                  Essentiel
                </span>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                  5,00 €{" "}
                  <span className="text-base font-medium text-brown/60">
                    HT/m²/passage
                  </span>
                </p>
                <p className="mt-1 text-sm text-brown/60">
                  1 passage par mois, vitrines centre d&apos;Évian
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Intérieur et extérieur
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Accès plain-pied rue Nationale
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Sans engagement de durée
                  </li>
                </ul>
              </div>

              <div className="relative rounded-3xl bg-orange p-7 text-cream ring-2 ring-orange/40">
                <span className="absolute -top-3 right-6 rounded-full bg-cream px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-orange">
                  Le plus choisi
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-cream/90">
                  Confort
                </span>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                  3,50 €{" "}
                  <span className="text-base font-medium text-cream/80">
                    HT/m²/passage
                  </span>
                </p>
                <p className="mt-1 text-sm text-cream/80">
                  2 passages par mois, hôtels et résidences
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Priorité planning haute saison
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Zéro trace garanti, contrôle qualité
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Idéal pour vitrines quai Charles-Albert
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Premium
                </span>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                  2,50 €{" "}
                  <span className="text-base font-medium text-brown/60">
                    HT/m²/passage
                  </span>
                </p>
                <p className="mt-1 text-sm text-brown/60">
                  4 passages par mois, port d&apos;Évian très exposé
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Devanture impeccable toute l&apos;année
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Tarif le plus avantageux au m²
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Restaurants port et débarcadère CGN
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Particuliers Évian : ponctuel sur devis 24 h
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Maisons individuelles à Évian, Maxilly, Lugrin ou Neuvecelle,
                  appartements en copropriété Mateirons, résidences secondaires
                  de frontaliers genevois. Visite sur place ou estimation par
                  photos, devis chiffré envoyé sous 24 heures ouvrées.
                </p>
              </div>
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Crédit d&apos;impôt 50 % pour Évian
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Lavage de vitres à domicile reconnu service à la personne. Vous
                  récupérez la moitié de la facture sous forme de crédit
                  d&apos;impôt, attestation fiscale fournie en début
                  d&apos;année, valable pour les résidences principales et
                  secondaires à Évian.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ZONES D'INTERVENTION VITRES */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones d&apos;intervention vitres
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Dix communes autour d&apos;Évian pour le lavage de vitres
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Périmètre direct depuis notre base de Thonon par la RD1005, du
                débarcadère d&apos;Évian au plateau de Gavot. Frais de
                déplacement inclus jusqu&apos;à 25 km, intervention possible
                dès le lendemain pour les commerces du port et les copropriétés
                vue lac.
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

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <Link
                href="/nettoyage-vitres-thonon"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Hub vitres : nettoyage vitres Thonon
              </Link>
              <Link
                href="/nettoyage-evian-les-bains"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Hub ville : entreprise nettoyage Évian
              </Link>
              <Link
                href="/nettoyage-yvoire"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Voir aussi : nettoyage Yvoire
              </Link>
            </div>
          </div>
        </section>

        {/* 7. TEMOIGNAGES */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Avis vérifiés
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Témoignages clients vitres rive sud
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

        {/* 8. GALERIE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Galerie vitres Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Trois ambiances de chantier à Évian-les-Bains
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:row-span-2 md:aspect-auto">
                <Image
                  src="/photos/cities/evian-5.jpg"
                  alt="Vitrines et bâtiments du centre d'Évian-les-Bains, lavage de vitres"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/evian-7.jpg"
                  alt="Promenade du port d'Évian, devantures et vitrages côté lac"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/service-vitres.jpg"
                  alt="Laveur de vitres GH Services en intervention à la perche fibre carbone"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ VITRES EVIAN */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ vitres Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Questions fréquentes sur le lavage de vitres à Évian
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Les huit points qui reviennent le plus dans les demandes de
                devis vitres reçues d&apos;Évian, Maxilly, Lugrin, Publier et
                Neuvecelle.
              </p>
            </div>

            <div className="mt-10 divide-y divide-brown/10 rounded-3xl bg-cream ring-1 ring-brown/10">
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

        {/* 10. CTA DEVIS */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis vitres sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Recevez votre devis lavage de vitres Évian
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Indiquez la surface vitrée, la hauteur, le type de bâtiment
                    (villa, copropriété, vitrine, véranda) et votre adresse à
                    Évian, Lugrin, Maxilly, Publier ou commune voisine. Réponse
                    chiffrée sous 24 h ouvrées.
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
                    Disponible 7 j/7. Intervention vitres à Évian sous 24 à 72 h
                    selon disponibilité de l&apos;équipe.
                  </p>
                </a>

                <div className="rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-xs leading-relaxed text-red-900">
                  <strong>Aucun recrutement en cours.</strong>{" "}
                  Merci de ne pas téléphoner ni envoyer d&apos;e-mail pour une
                  candidature, les demandes spontanées ne sont pas traitées.
                </div>
              </aside>

              <ServiceQuoteForm
                serviceLabel="Nettoyage de vitres Évian"
                source="vitres_evian"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
