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
  title:
    "Nettoyage de chalets et résidences secondaires Léman",
  description:
    "Nettoyage de chalets et résidences secondaires sur le Léman. Ménage avant arrivée, fermeture saisonnière, turnover Airbnb. Yvoire, Évian, Thonon.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-chalets-leman`,
  },
  openGraph: {
    title:
      "Nettoyage de chalets et résidences secondaires Léman",
    description:
      "Ménage de chalets et villas pied dans l'eau, turnover Airbnb, ouverture et fermeture saisonnière. Yvoire, Évian, Thonon, Excenevex, Sciez.",
    url: `${SITE_URL}/nettoyage-chalets-leman`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/lac-leman.jpg",
        width: 1600,
        height: 900,
        alt: "Chalet et résidence secondaire au bord du lac Léman",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Propriétaires de résidence secondaire",
    desc: "Maisons et appartements de vacances utilisés ponctuellement, à entretenir entre deux séjours sans avoir à être présent sur place.",
  },
  {
    title: "Propriétaires Airbnb et locations saisonnières",
    desc: "Turnover entre deux locataires, ménage soigné en 24 h, gestion du linge et préparation visuelle de l'arrivée voyageur.",
  },
  {
    title: "Agences locatives et gestionnaires",
    desc: "Partenariat opérationnel pour les agences qui gèrent un parc de chalets ou villas Léman. Reporting photo systématique.",
  },
  {
    title: "Expatriés et propriétaires hors région",
    desc: "Genève, Lausanne, Paris, Dubaï : nous prenons le relais sur place. Vous êtes informé par message, photos à l'appui.",
  },
  {
    title: "Propriétaires de chalet bois traditionnel",
    desc: "Parquets huilés, lambris, poutres apparentes, cheminée pierre. Produits adaptés aux matériaux nobles, sans agresser les finitions.",
  },
  {
    title: "Syndics de petites copropriétés bord de lac",
    desc: "Petits ensembles résidentiels en rive sud, parties communes et nettoyage régulier des biens loués par les copropriétaires.",
  },
];

const ZONES = [
  "Thonon-les-Bains",
  "Évian-les-Bains",
  "Anthy-sur-Léman",
  "Yvoire",
  "Excenevex",
  "Sciez",
  "Publier",
  "Maxilly-sur-Léman",
  "Lugrin",
  "Saint-Gingolph",
  "Margencel",
  "Allinges",
  "Saint-Paul-en-Chablais",
  "Bons-en-Chablais",
  "Douvaine",
];

const FAQ = [
  {
    q: "Vous intervenez quand je suis absent ?",
    a: "Oui, c'est le cœur de notre prestation pour les résidences secondaires. Nous intervenons sur appel ou planning convenu, sans que vous ayez à être présent. Vous recevez un rapport photo après chaque passage. La majorité de nos clients chalets sont sur Genève, Lausanne ou Paris et viennent uniquement en weekend ou en saison.",
  },
  {
    q: "Comment gérez-vous les clés ?",
    a: "Trois options possibles : remise en main propre lors d'une visite initiale, dépôt sécurisé dans un coffre à clés à votre domicile, ou récupération via votre gardien, voisin ou agence. Les clés sont identifiées par code (jamais par nom ou adresse) et conservées sous coffre verrouillé. Une procédure écrite est signée à la prise de mission.",
  },
  {
    q: "Vous gérez aussi le linge de maison ?",
    a: "Oui. Pour les locations saisonnières et Airbnb, nous proposons la rotation complète : draps, housses, taies, linge de toilette, torchons. Lavage à 60 °C, séchage et remise en place avant l'arrivée du voyageur suivant. Vous fournissez le stock ou nous travaillons avec une blanchisserie partenaire selon votre choix.",
  },
  {
    q: "Turnover Airbnb en 24 h, possible ?",
    a: "Oui, et c'est même la norme sur la saison d'été du Léman. Sortie locataire le matin (11 h en général), ménage complet et préparation arrivée dans la même journée pour un check-in à 16 h. Nous travaillons avec checklist Airbnb (draps, kit accueil, vérification équipements, photos de contrôle). Prévenez-nous au plus tard la veille en haute saison.",
  },
  {
    q: "Vous travaillez avec les agences locatives ?",
    a: "Oui, nous avons plusieurs accords avec des agences immobilières et plateformes de gestion locative du Chablais. Facturation centralisée, planning groupé sur plusieurs biens, reporting standardisé. Contactez-nous pour étudier un partenariat sur votre parc.",
  },
  {
    q: "Et le parquet huilé fragile ?",
    a: "Les chalets bois du Léman ont souvent un parquet huilé qui ne supporte ni la serpillière mouillée, ni les détergents alcalins. Nous utilisons un nettoyage à la microfibre légèrement humide et un savon noir doux ou un produit spécifique parquet huilé selon la finition. Idem pour les lambris muraux et poutres apparentes.",
  },
  {
    q: "Vous m'envoyez des photos après chaque passage ?",
    a: "Oui, systématiquement. Vous recevez par messagerie ou e-mail un compte rendu court : photos avant/après des pièces principales, signalement de tout problème constaté (fuite, ampoule grillée, dégât locataire), confirmation des points de la checklist. C'est inclus dans la prestation.",
  },
  {
    q: "Engagement minimum ?",
    a: "Aucun abonnement obligatoire. Nous travaillons à la carte : une intervention ponctuelle avant votre arrivée, un planning saisonnier (été, vacances scolaires), ou un suivi annuel régulier selon votre usage du bien. Vous arrêtez quand vous le décidez, sans préavis particulier.",
  },
];

const TESTIMONIALS = [
  {
    author: "Genève Expat",
    date: "Mai 2025",
    body: "Nous avons fait appel aux services de nettoyage de GH Services à notre entière satisfaction. Il s'agissait du nettoyage de notre maison avant remise des clés.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif et avec lequel le contact a été très agréable.",
  },
  {
    author: "Shacy Will",
    date: "Avril 2025",
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top. Je recommande cette société avec qui j'espère continuer de travailler.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-chalets-leman#service`,
  name: "Nettoyage chalets et résidences secondaires",
  serviceType: "Nettoyage de chalets et résidences secondaires",
  description:
    "Nettoyage de chalets et résidences secondaires sur le bassin lémanique. Ménage avant arrivée propriétaire, turnover Airbnb 24 h, ouverture et fermeture saisonnière, gestion du linge. Yvoire, Évian, Thonon, Excenevex, Sciez.",
  url: `${SITE_URL}/nettoyage-chalets-leman`,
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
  "@id": `${SITE_URL}/nettoyage-chalets-leman#faq`,
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
      name: "Nettoyage de chalets et résidences secondaires Léman",
      item: `${SITE_URL}/nettoyage-chalets-leman`,
    },
  ],
};

export default function NettoyageChaletsLemanPage() {
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
            <span className="text-brown/75">
              Nettoyage chalets et résidences secondaires Léman
            </span>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/lac-leman.jpg"
              alt="Chalet et résidence secondaire au bord du lac Léman"
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
              Nettoyage de chalets et résidences secondaires sur le{" "}
              <span className="text-orange">Léman</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Service de nettoyage dédié aux propriétaires de chalets et de
              résidences secondaires sur la rive sud du Léman. Nous préparons
              votre maison avant votre arrivée, gérons le turnover de vos
              locations Airbnb en 24 heures, assurons l&apos;ouverture et la
              fermeture saisonnière de votre bien. Intervention sur appel
              propriétaire absent, gestion sécurisée des clés et rapport photo
              après chaque passage. De Yvoire à Saint-Gingolph, en passant par
              Évian et Thonon.
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
                Photos avant/après
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Gestion clés sécurisée
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Service à la carte sans abonnement
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
                Propriétaires absents, hôtes Airbnb, agences locatives
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous accompagnons les profils typiques du parc immobilier de
                villégiature du Léman : la résidence secondaire familiale
                utilisée quelques semaines par an, le chalet loué en saison,
                la villa pied dans l&apos;eau réservée aux invités. Tous nos
                intervenants sont identifiés et formés au travail dans des
                biens habités occasionnellement.
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
                Une procédure pensée pour les propriétaires absents
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Confier un chalet à une équipe extérieure demande un cadre
                clair. Notre méthode repose sur un protocole écrit, signé en
                début de mission, qui sécurise la relation et garantit la
                qualité du service pendant toute la durée du contrat.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Visite pré-mission et inventaire
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Rendez-vous sur place avec le propriétaire (ou en visio si
                  vous êtes hors région) pour faire le tour du bien, lister
                  les matériaux sensibles, identifier le mobilier de valeur et
                  établir une checklist écrite adaptée.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Remise des clés sécurisée
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Signature d&apos;une procédure clés (code interne sans
                  adresse, coffre verrouillé, intervenants identifiés
                  nominativement). Vous gardez la maîtrise totale de
                  l&apos;accès à votre bien à tout moment.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Intervention selon checklist signée
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Chaque passage suit la checklist validée ensemble : pièces,
                  surfaces, fréquences, points de vigilance. Aucune
                  improvisation, aucun oubli, le même standard à chaque
                  intervention.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Photos avant/après et rapport
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Compte rendu envoyé après chaque passage : photos des
                  pièces principales, signalement de toute anomalie
                  (intrusion, fuite, dégât locataire), confirmation des
                  points clés. Vous êtes informé même à 5 000 km.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SPECIFICITES CHABLAIS/LEMAN */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités Chablais et Léman
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Des biens qui demandent des gestes adaptés
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Les chalets et villas du Léman ne se nettoient pas comme un
                  appartement urbain standard. Matériaux nobles, exposition
                  lacustre, alternance occupation/vacance prolongée : voici
                  les quatre points qui distinguent notre approche locale.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Parquets huilés des chalets bois :</strong>{" "}
                      nettoyage à la microfibre légèrement humide, savon noir
                      doux ou produit dédié parquet huilé. Pas de serpillière
                      saturée, pas de détergent agressif qui blanchit la
                      finition.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Marbre et pierre des villas pied dans
                      l&apos;eau :</strong> sols et plans de travail en
                      pierre naturelle ne supportent ni l&apos;acide ni le
                      vinaigre. Produits neutres uniquement, gestes adaptés
                      au type de pierre (calcaire, granit, travertin).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Draps et linge hôtel pour le turnover :</strong>{" "}
                      protocole de rotation linge complet, lavage à 60 °C,
                      lit fait au carré, serviettes pliées en éventail, kit
                      accueil voyageur prêt pour le check-in.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Fermeture saisonnière anti humidité :</strong>{" "}
                      avant une absence longue (hiver pour un chalet
                      d&apos;été, été pour un pied à terre de ski), vidange
                      des points d&apos;eau, aération profonde, contrôle de
                      la VMC, retrait des denrées périssables.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/lac-leman.jpg"
                  alt="Vue d'une résidence avec vue sur le lac Léman, secteur d'intervention de GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRESTATIONS CHALET & LOCATIONS */}
        <section id="prestations" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos prestations chalet et locations
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Cinq formats d&apos;intervention au service de votre bien
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Que vous occupiez votre résidence quelques semaines par an,
                que vous la louiez sur Airbnb ou que vous confiiez sa gestion
                à une agence, nous proposons un service modulaire qui suit
                votre usage réel.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/15">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Ménage avant arrivée propriétaire
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Vous arrivez vendredi soir ? Nous passons jeudi : lits
                  faits avec votre linge, frigo nettoyé, salles de bain
                  fraîches, aération et chauffage activés. Vous entrez dans
                  une maison prête à vivre.
                </p>
              </article>

              <article className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/15">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Ménage après départ locataires (turnover 24 h)
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Spécifique Airbnb et locations courtes durées. Sortie à
                  11 h, intervention dans la foulée, check-in voyageur
                  suivant à 16 h. Checklist Airbnb complète, kit accueil
                  remis en place, photos de validation.
                </p>
              </article>

              <article className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/15">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Ouverture et fermeture saisonnière
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Deux interventions clés dans l&apos;année. Ouverture :
                  remise en service complète avant la saison. Fermeture :
                  mise en sommeil du bien, anti humidité, contrôle des
                  points sensibles avant absence prolongée.
                </p>
              </article>

              <article className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/15">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Gestion du linge et des lits
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Lavage, séchage, repassage si demandé, lit refait. Nous
                  gérons votre stock personnel ou un parc dédié avec
                  blanchisserie partenaire pour les hôtes Airbnb à fort
                  volume.
                </p>
              </article>

              <article className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/15">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Conciergerie ménage courant
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Passage régulier (hebdomadaire, bimensuel, mensuel) entre
                  deux séjours pour maintenir le bien en parfait état.
                  Aération, dépoussiérage, contrôle visuel, signalement de
                  toute anomalie constatée.
                </p>
              </article>

              <div className="rounded-3xl bg-orange p-7 text-cream ring-1 ring-orange/40">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                  Devis personnalisé sous 24 h
                </h3>
                <p className="mt-3 text-sm leading-6 text-cream/95">
                  Chaque chalet est unique, chaque usage aussi. Décrivez
                  votre bien et votre fréquence souhaitée, nous revenons vers
                  vous avec un chiffrage clair. Intervention sur appel pour
                  propriétaire absent, sans avance de paiement.
                </p>
                <a
                  href="#devis"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-brown transition-colors hover:bg-cream-soft"
                >
                  Recevoir mon devis
                </a>
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
                Toute la rive sud du Léman et le Chablais
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous priorisons les communes du littoral lémanique, là où se
                concentre le parc de résidences secondaires et de locations
                saisonnières. Déplacement intégré au devis pour les communes
                proches, supplément raisonnable au delà.
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
                Vos questions de propriétaires
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
              Compléter l&apos;entretien de votre chalet
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link
                href="/nettoyage-vitres-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage de vitres
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Baies vitrées face au lac, vérandas, vitres en hauteur des
                  chalets bois. Eau osmosée, sans traces.
                </p>
              </Link>
              <Link
                href="/nettoyage-textiles-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage canapés et tapis
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Injection-extraction sur canapés tissu, tapis et matelas
                  des chambres d&apos;invités. Idéal après saison de
                  location.
                </p>
              </Link>
              <Link
                href="/entretien-espaces-verts-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Entretien espaces verts
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Tonte, taille, entretien du jardin de votre chalet pendant
                  votre absence. Passage planifié à la saison.
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
                    Recevez votre devis chalet et résidence secondaire
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez votre bien (surface, nombre de chambres, type de
                    matériaux), votre usage (résidence secondaire, location
                    Airbnb, mixte) et la fréquence souhaitée. Devis
                    personnalisé sous 24 heures, intervention possible sur
                    appel propriétaire absent.
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
                serviceLabel="Nettoyage chalet Léman"
                source="chalets_leman"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
