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
    "Nettoyage à Yvoire et entretien de chalets Léman",
  description:
    "Nettoyage et entretien de résidences à Yvoire, ménage avant arrivée, fermeture saisonnière, conciergerie pour locations vacances. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-yvoire`,
  },
  openGraph: {
    title: "Nettoyage à Yvoire et entretien de chalets Léman",
    description:
      "Nettoyage et entretien de résidences à Yvoire, ménage avant arrivée, fermeture saisonnière, conciergerie pour locations vacances sur la rive sud du Léman.",
    url: `${SITE_URL}/nettoyage-yvoire`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/yvoire-1.jpg",
        width: 1600,
        height: 900,
        alt: "Vue du port et du village médiéval d'Yvoire sur la rive sud du Léman",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Propriétaires expatriés",
    desc: "Familles installées à Genève, Lausanne, Paris ou Londres dont la résidence secondaire à Yvoire reste fermée plusieurs mois par an. Entretien programmé, ouverture de saison, contrôle technique mensuel.",
  },
  {
    title: "Hôtels et chambres d'hôtes historiques",
    desc: "Maisons de caractère dans les ruelles fleuries du XIVe siècle. Ménage quotidien des chambres, remise en état entre clients, soins particuliers aux boiseries et aux pierres apparentes.",
  },
  {
    title: "Restaurants gastronomiques du port",
    desc: "Tables réputées du port d'Yvoire ouvertes en saison touristique. Nettoyage en horaires décalés avant service, entretien des cuisines, vitrages côté lac, terrasses bois.",
  },
  {
    title: "Gîtes labellisés",
    desc: "Locations étoilées Gîtes de France ou Clévacances autour d'Yvoire, Nernier et Messery. Préparation conforme aux exigences du label, linge de maison repassé, contrôle photo.",
  },
  {
    title: "Gestionnaires de location saisonnière",
    desc: "Conciergerie pour propriétaires absents : accueil locataires, état des lieux entrant et sortant, rotation hebdomadaire haute saison, gestion du linge et des consommables.",
  },
  {
    title: "Copropriétés du château",
    desc: "Petits ensembles résidentiels et copropriétés de prestige autour du château d'Yvoire. Parties communes, escaliers en pierre, locaux à vélos, accès limités au véhicule.",
  },
];

const ZONES = [
  "Yvoire",
  "Excenevex",
  "Nernier",
  "Messery",
  "Chens-sur-Léman",
  "Sciez",
  "Anthy-sur-Léman",
  "Margencel",
  "Veigy-Foncenex",
  "Douvaine",
];

const FAQ = [
  {
    q: "Comment accédez-vous à la cité médiévale d'Yvoire avec votre matériel ?",
    a: "L'accès véhicule est strictement réglementé dans la vieille ville, surtout d'avril à octobre. Nous travaillons avec du matériel léger, transportable à pied depuis les parkings périphériques (parking du Pré de la Cure, parking de la Mairie). Nos chariots de propreté sont silencieux et adaptés aux pavés. Pour les chalets et villas en périphérie, accès véhicule direct.",
  },
  {
    q: "Quels produits utilisez-vous sur les parquets huilés d'un chalet vue Léman ?",
    a: "Aucun produit du commerce agressif. Nous appliquons un savon spécial bois huilé, en dilution faible, avec un balai mouilleur essoré au maximum. Une fois par an, nous proposons un nourrissage à l'huile dure adaptée à l'essence (chêne, mélèze, sapin). Cela conserve la patine et évite les auréoles classiques des produits ménagers grand public.",
  },
  {
    q: "Intervenez-vous en hiver hors saison touristique ?",
    a: "Oui, c'est même la période la plus dense pour les fermetures de saison et l'entretien mensuel des résidences secondaires. Nous travaillons toute l'année à Yvoire et alentour, hors gel sévère pour les prestations extérieures. Le passage hivernal mensuel (aération, contrôle visuel, dépoussiérage, relève courrier) commence à 95 € la visite.",
  },
  {
    q: "Comment se passe la gestion des clés d'une résidence secondaire ?",
    a: "Trois options : remise en main propre lors d'un premier rendez-vous, boîte à clés sécurisée à code installée par nos soins, ou serrure connectée si vous en disposez déjà. Nous tenons un registre nominatif des trousseaux confiés, conservés dans un coffre. Aucune copie n'est faite et tout mouvement est tracé.",
  },
  {
    q: "Vos produits sont-ils sans risque pour la pierre ancienne du XIVe siècle ?",
    a: "Oui. Les pierres calcaires des bâtisses médiévales d'Yvoire ne supportent ni javel ni acide. Nous utilisons exclusivement des nettoyants à pH neutre, savon noir dilué pour les sols, et microfibre humide pour les murs et encadrements. Aucune brosse dure, aucun nettoyeur haute pression sur les façades anciennes.",
  },
  {
    q: "Quelle est la distance entre votre base de Thonon et Yvoire ?",
    a: "Environ 17 km par la D1005 le long du lac, soit 25 à 30 minutes hors saison, parfois 45 minutes en juillet et août du fait du trafic touristique. Les frais de déplacement sont offerts jusqu'à 25 km, Yvoire et toutes les communes de la rive sud sont donc inclus sans surcoût.",
  },
  {
    q: "Quels sont vos horaires en haute saison juin août ?",
    a: "Pour respecter la quiétude des hôtes, des résidents et des touristes, nous démarrons les interventions extérieures tôt le matin, dès 7 h en saison. Les ménages de rotation locative se font entre 10 h et 15 h, sur le créneau classique du check out vers le check in. Interventions le samedi sur planning défini à l'avance.",
  },
  {
    q: "Pourquoi votre tarif à Yvoire est-il considéré comme premium ?",
    a: "Les biens d'Yvoire exigent un savoir-faire spécifique : matériaux délicats, finitions soignées, exigence touristique forte, contraintes d'accès. Nos équipes affectées au secteur sont fixes, formées au patrimoine, et nous remettons systématiquement des photos avant après. Un devis personnalisé sous 24 h vous donne le montant exact selon votre bien.",
  },
];

const TESTIMONIALS = [
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif et avec lequel le contact a été très agréable.",
  },
  {
    author: "Genève Expat",
    date: "Mai 2025",
    body: "Nous avons fait appel aux services de nettoyage de GH Services à notre entière satisfaction.",
  },
  {
    author: "Shacy Will",
    date: "Avril 2025",
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-yvoire#service`,
  name: "Nettoyage et entretien de résidences à Yvoire",
  serviceType: "Nettoyage de résidences, conciergerie et entretien de chalets",
  description:
    "Nettoyage, entretien de chalets, ménage de résidence secondaire et conciergerie pour locations vacances à Yvoire, sur la rive sud du Léman. Devis personnalisé sous 24 heures.",
  url: `${SITE_URL}/nettoyage-yvoire`,
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

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/nettoyage-yvoire#localbusiness`,
  name: "GH Services, antenne rive sud du Léman",
  url: `${SITE_URL}/nettoyage-yvoire`,
  telephone: "+33684665523",
  parentOrganization: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yvoire",
    postalCode: "74140",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
  image: `${SITE_URL}/photos/cities/yvoire-1.jpg`,
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/nettoyage-yvoire#faq`,
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
      name: "Nettoyage à Yvoire",
      item: `${SITE_URL}/nettoyage-yvoire`,
    },
  ],
};

export default function NettoyageYvoirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
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
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d'Ariane"
          className="bg-cream pt-[120px] pb-2 md:pt-[140px]"
        >
          <div className="mx-auto max-w-[1280px] px-6 text-xs text-brown/60 lg:px-12">
            <Link href="/" className="hover:text-orange">
              Accueil
            </Link>
            <span className="mx-2 text-brown/30">/</span>
            <span className="text-brown/75">Nettoyage à Yvoire</span>
          </div>
        </nav>

        {/* HERO V2 EDITORIAL */}
        <section className="bg-cream pt-6 pb-16 md:pt-10 md:pb-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 ring-1 ring-brown/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brown">
                    Yvoire, plus beau village
                  </span>
                </div>

                <h1 className="mt-6 max-w-2xl font-display text-[34px] leading-[1.06] font-bold tracking-tight uppercase text-brown sm:text-[44px] md:text-[58px]">
                  Nettoyage à <span className="text-orange">Yvoire</span> et
                  entretien de résidences sur la rive sud du Léman
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-brown/80 md:text-lg">
                  Au pied du château et du jardin des Cinq Sens, nous prenons
                  soin des chalets, villas et résidences secondaires d&apos;une
                  des plus belles cités médiévales de France. Un service de
                  conciergerie discret, méticuleux, pensé pour des propriétaires
                  exigeants et des hôtes en quête d&apos;authenticité. Devis
                  personnalisé sous 24 h.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#devis"
                    className="inline-flex items-center rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark"
                    data-track="devis"
                  >
                    Devis personnalisé
                  </a>
                  <a
                    href="tel:+33684665523"
                    className="inline-flex items-center gap-3 rounded-full border border-brown/25 bg-cream px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-brown transition-colors hover:bg-brown hover:text-cream"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    06 84 66 55 23
                  </a>
                </div>

                <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-brown/65 md:text-[13px]">
                  <li className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    Village classé Plus Beaux Villages de France
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    Patrimoine XIVe siècle
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    Rive sud du Léman
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-cream/30 shadow-[0_30px_80px_-30px_rgba(11,27,44,0.25)]">
                  <Image
                    src="/photos/cities/yvoire-1.jpg"
                    alt="Vue du port médiéval et des maisons à colombages d'Yvoire au bord du Léman"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 hidden rounded-full bg-cream px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brown ring-1 ring-brown/10 md:inline-flex">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-orange" />
                  Port d&apos;Yvoire
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POUR QUI A YVOIRE */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Yvoire
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Six clientèles premium, un même niveau d&apos;exigence
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Yvoire concentre une diversité rare : résidents permanents
                attachés à leur village, propriétaires de résidences secondaires
                installés à l&apos;étranger, hôteliers historiques, restaurateurs
                gastronomiques et acteurs de la location de prestige. Notre
                service s&apos;adapte au cahier des charges de chacun.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PERSONAS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/12 shadow-[0_18px_50px_-30px_rgba(11,27,44,0.18)]"
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

        {/* METHODE A LA HAUTEUR DU PATRIMOINE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre approche
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Une intervention à la hauteur du patrimoine d&apos;Yvoire
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Les maisons d&apos;Yvoire ne se nettoient pas comme un T3
                récent. Chaque bien est unique, chaque matériau réclame une
                gestuelle propre. Notre méthode en quatre temps protège la
                valeur de votre patrimoine.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Visite préalable
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Visite sur place systématique avant le premier passage.
                  Identification des matériaux délicats (parquet huilé, pierre
                  calcaire, tomettes, marbre, boiseries cirées), photo des
                  pièces, prise en main des clés.
                </p>
              </li>
              <li className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Produits doux
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Sélection de produits non agressifs : pH neutre sur pierres
                  anciennes, savon spécifique pour bois exotique et bois huilé,
                  cire d&apos;abeille pour mobilier ancien. Aucun produit
                  industriel, aucun acide.
                </p>
              </li>
              <li className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Équipe fixe formée
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Une équipe dédiée au secteur d&apos;Yvoire, formée à
                  l&apos;entretien des bâtisses anciennes. Les mêmes visages à
                  chaque visite, pour la confiance, la connaissance du bien et
                  la sécurité.
                </p>
              </li>
              <li className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Photos avant après
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Reportage photo systématique envoyé au propriétaire après
                  chaque intervention. Indispensable pour les expatriés et les
                  conciergeries de location, idéal pour le suivi à distance.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SPECIFICITES YVOIRE */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10 order-2 lg:order-1">
                <Image
                  src="/photos/cities/yvoire-3.jpg"
                  alt="Ruelles fleuries du village médiéval d'Yvoire, maisons en pierre ancienne du XIVe siècle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="order-1 lg:order-2">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités d&apos;Yvoire
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Un village pas comme les autres, un nettoyage qui ne l&apos;est pas non plus
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Quatre contraintes vraiment locales que la majorité des
                  entreprises de nettoyage ignorent et qui font la différence
                  entre un service correct et un service à la hauteur du
                  village.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Parquets huilés des chalets vue Léman :</strong>{" "}
                      ils détestent l&apos;eau stagnante et les détergents
                      classiques. Mouillage minimum, savon dédié, séchage rapide
                      pour préserver la patine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Pierres anciennes du XIVe siècle :</strong> les
                      murs, encadrements et sols en calcaire local craignent les
                      produits acides ou javellisés. Nous travaillons uniquement
                      au pH neutre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Exigence touristique haute saison :</strong> de
                      juin à août, Yvoire reçoit chaque jour des milliers de
                      visiteurs. Pour les hôtes et les locations, le moindre
                      détail compte et la rotation doit être impeccable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Accès véhicule restreint en cité médiévale :</strong>{" "}
                      les ruelles sont fermées à la circulation en saison. Nous
                      intervenons à pied avec un matériel léger, silencieux,
                      conçu pour ne pas abîmer les pavés.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NOS PRESTATIONS */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos prestations à Yvoire
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Six services premium, un interlocuteur unique
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                De la conciergerie courante d&apos;une résidence secondaire à
                la rotation hebdomadaire d&apos;une location Airbnb, du ménage
                avant arrivée au grand nettoyage de fermeture saisonnière, vous
                pilotez l&apos;ensemble depuis un seul devis.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <article className="flex h-full flex-col rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Entretien chalet et villa
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Entretien chalet Yvoire, passages réguliers ou ponctuels.
                  Aspiration, dépoussiérage, sanitaires, cuisine, parquets et
                  surfaces vitrées.
                </p>
                <Link
                  href="/nettoyage-chalets-leman"
                  className="mt-auto pt-5 font-display text-xs font-bold uppercase tracking-wider text-orange hover:text-orange-dark"
                >
                  Voir l&apos;offre chalets Léman
                </Link>
              </article>

              <article className="flex h-full flex-col rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Ménage avant arrivée et après départ
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Ménage avant arrivée Yvoire pour les locataires, remise en
                  état conforme à la fiche logement, contrôle photo, fournitures
                  d&apos;accueil.
                </p>
                <Link
                  href="/menage-thonon-les-bains"
                  className="mt-auto pt-5 font-display text-xs font-bold uppercase tracking-wider text-orange hover:text-orange-dark"
                >
                  Voir le ménage à domicile
                </Link>
              </article>

              <article className="flex h-full flex-col rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Gestion du linge et des lits
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Lits faits à blanc, draps et serviettes, partenariat
                  blanchisserie locale. Cycle complet pris en charge entre deux
                  séjours, sans manipulation pour le propriétaire.
                </p>
                <span className="mt-auto pt-5 font-display text-xs font-bold uppercase tracking-wider text-brown/40">
                  Inclus dans la conciergerie
                </span>
              </article>

              <article className="flex h-full flex-col rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Ouverture et fermeture saisonnière
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Fermeture saisonnière chalet Yvoire à l&apos;automne, remise
                  en route au printemps. Vidange des canalisations sensibles,
                  housses, contrôle des extérieurs.
                </p>
                <span className="mt-auto pt-5 font-display text-xs font-bold uppercase tracking-wider text-brown/40">
                  Forfait dédié
                </span>
              </article>

              <article className="flex h-full flex-col rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Nettoyage de vitres et baies
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Vitres pied dans l&apos;eau, baies coulissantes vue Léman,
                  vérandas. Eau osmosée, perche fibre carbone, sans traces et
                  sans calcaire.
                </p>
                <Link
                  href="/nettoyage-vitres-thonon"
                  className="mt-auto pt-5 font-display text-xs font-bold uppercase tracking-wider text-orange hover:text-orange-dark"
                >
                  Voir le nettoyage de vitres
                </Link>
              </article>

              <article className="flex h-full flex-col rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Conciergerie courante
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Conciergerie Airbnb Yvoire et ménage résidence secondaire
                  Yvoire. Relève du courrier, arrosage, présence visible,
                  petites courses, accueil d&apos;artisans, remontée
                  d&apos;incidents.
                </p>
                <span className="mt-auto pt-5 font-display text-xs font-bold uppercase tracking-wider text-brown/40">
                  À la carte ou en forfait
                </span>
              </article>
            </div>
          </div>
        </section>

        {/* COUVERTURE RIVE SUD */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Couverture rive sud du Léman
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                D&apos;Yvoire à Douvaine, côté lac
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nos équipes interviennent sur l&apos;ensemble de la rive sud du
                Léman, depuis les plages d&apos;Excenevex et de Sciez jusqu&apos;à
                la frontière genevoise, en passant par Nernier et le port
                d&apos;Yvoire. Frais de déplacement offerts dans la zone.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {ZONES.map((z) => (
                <li key={z}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-medium text-brown ring-1 ring-brown/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    {z}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* AVIS CLIENTS PREMIUM */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Avis clients premium
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Ils nous confient leur résidence
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 ring-1 ring-brown/10">
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

        {/* GALERIE YVOIRE */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Galerie Yvoire
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Le décor de nos interventions
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le port d&apos;Yvoire, les ruelles fleuries, le jardin des Cinq
                Sens et les villas pied dans l&apos;eau. Un cadre privilégié qui
                impose un service à la hauteur.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3 md:grid-rows-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:col-span-2 md:row-span-2 md:aspect-auto">
                <Image
                  src="/photos/cities/yvoire-1.jpg"
                  alt="Port d'Yvoire au bord du Léman, vue panoramique du village médiéval"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/yvoire-3.jpg"
                  alt="Ruelle fleurie du village d'Yvoire avec géraniums et pierres anciennes"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/yvoire-6.jpg"
                  alt="Vue rapprochée du château d'Yvoire et de ses jardins en bord de Léman"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ Yvoire
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Les questions des propriétaires d&apos;Yvoire
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

        {/* FORMULAIRE DEVIS */}
        <section id="devis" className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis personnalisé sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Recevez votre devis pour Yvoire
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez votre bien (type, surface, fréquence, locations
                    saisonnières ou usage personnel). Réponse chiffrée et claire
                    sous 24 heures ouvrées, sans engagement.
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
                  <strong>Aucun recrutement en cours.</strong> Merci de ne pas
                  téléphoner ni envoyer d&apos;e-mail pour une candidature, les
                  demandes spontanées ne sont pas traitées.
                </div>
              </aside>

              <ServiceQuoteForm
                serviceLabel="Nettoyage Yvoire"
                source="yvoire_hub"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
