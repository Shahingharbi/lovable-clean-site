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
  title: "Entreprise de nettoyage à Évian-les-Bains | GH Services",
  description:
    "Société de nettoyage à Évian-les-Bains, rive sud du Léman. Maisons, thermes, copropriétés, fin de bail. Équipe locale, devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-evian-les-bains`,
  },
  openGraph: {
    title: "Entreprise de nettoyage à Évian-les-Bains | GH Services",
    description:
      "Société de nettoyage à Évian-les-Bains, rive sud du Léman. Maisons, thermes, copropriétés, fin de bail. Équipe locale, devis 24 h.",
    url: `${SITE_URL}/nettoyage-evian-les-bains`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/evian-2.jpg",
        width: 1600,
        height: 900,
        alt: "Vue d'Évian-les-Bains, rive sud du lac Léman, zone d'intervention de GH Services",
      },
    ],
  },
};

const PERSONAS: { title: string; desc: string }[] = [
  {
    title: "Propriétaires de chalets premium",
    desc: "Belles demeures et chalets contemporains des rives du Léman, baies vitrées plein lac, salles de bain en pierre, entretien régulier pendant et hors saison.",
  },
  {
    title: "Hôtels et thermalisme",
    desc: "Établissements thermaux, hôtels familiaux du centre-ville et résidences de cure : standard de propreté hôtelière, intervention en horaires décalés, traçabilité.",
  },
  {
    title: "Résidences secondaires d'expatriés genevois",
    desc: "Appartements et maisons utilisés quelques week-ends par mois, remise en état avant arrivée, départ de location et entretien d'absence longue durée.",
  },
  {
    title: "Copropriétés vue lac",
    desc: "Halls vitrés, parties communes, garde-corps verre, locaux à poubelles. Contrats syndic réguliers sur Évian, Neuvecelle et Publier.",
  },
  {
    title: "Commerces du centre",
    desc: "Boutiques de la rue Nationale, agences immobilières, cabinets médicaux, instituts de beauté. Passage avant ouverture et lavage de vitrines.",
  },
  {
    title: "Restaurants quai Charles-Albert",
    desc: "Salles avec vue sur le port, cuisines aux normes HACCP, terrasses extérieures, dégraissage hottes et entretien quotidien en pleine saison.",
  },
];

const ZONES: string[] = [
  "Évian-les-Bains",
  "Publier",
  "Lugrin",
  "Maxilly-sur-Léman",
  "Neuvecelle",
  "Marin",
  "Saint-Paul-en-Chablais",
  "Bernex",
  "Thollon-les-Mémises",
  "Champanges",
  "Larringes",
  "Saint-Gingolph",
];

const SERVICES: { title: string; desc: string; href: string }[] = [
  {
    title: "Nettoyage de vitres",
    desc: "Eau osmosée, perche fibre, sans traces sur les baies plein lac.",
    href: "/nettoyage-vitres-thonon",
  },
  {
    title: "Ménage régulier",
    desc: "Entretien hebdomadaire ou mensuel, maisons, appartements, résidences secondaires.",
    href: "/menage-thonon-les-bains",
  },
  {
    title: "Nettoyage de copropriétés",
    desc: "Parties communes, halls vitrés, cages d'escalier, contrats syndic.",
    href: "/nettoyage-coproprietes-thonon",
  },
  {
    title: "Fin de chantier",
    desc: "Remise à neuf après travaux, dépoussiérage profond, vitres incluses.",
    href: "/fin-de-chantier-thonon",
  },
  {
    title: "État des lieux sortant",
    desc: "Préparation à la remise des clés pour récupérer toute votre caution.",
    href: "/etat-des-lieux-sortant-thonon",
  },
  {
    title: "Nettoyage de chalets",
    desc: "Forfait avant arrivée locataires, draps, vitres, terrasses, peignes.",
    href: "/nettoyage-chalets-leman",
  },
  {
    title: "Textiles et canapés",
    desc: "Injection extraction sur canapés, fauteuils, tapis, matelas.",
    href: "/nettoyage-textiles-thonon",
  },
  {
    title: "Espaces verts",
    desc: "Tonte, taille, ramassage feuilles, entretien jardins de villas.",
    href: "/entretien-espaces-verts-thonon",
  },
  {
    title: "Débarras",
    desc: "Vide-maison, succession, garages, caves de copropriété.",
    href: "/debarras-thonon",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Intervenez-vous toute l'année, même pendant la haute saison thermale ?",
    a: "Oui. Nous adaptons notre planning au calendrier thermal d'Évian, avec une présence renforcée d'avril à octobre quand les hôtels, résidences de cure et locations affichent complet. Nous travaillons sur créneaux étroits le matin (avant arrivée des curistes) ou en soirée pour ne pas perturber l'accueil des clients.",
  },
  {
    q: "Vous déplacez-vous dans le secteur des Mateirons et de la Mouille ?",
    a: "Bien sûr. Nous couvrons l'intégralité d'Évian : centre thermal, quartier des Mateirons, secteur de la Mouille, route des Princes, hauteurs de Neuvecelle, sans frais de déplacement supplémentaires. Notre véhicule équipé d'eau osmosée embarquée monte tous les chemins, même étroits.",
  },
  {
    q: "Acceptez-vous les paiements en francs suisses pour les frontaliers ?",
    a: "Non, nous facturons en euros uniquement. En revanche, beaucoup de nos clients résident côté Genève ou côté Vaud et possèdent une résidence secondaire sur la rive sud française. Nous établissons une facture française classique, par virement SEPA ou carte bancaire, avec attestation de service à la personne pour le crédit d'impôt côté France.",
  },
  {
    q: "Combien de temps pour venir de Thonon-les-Bains à Évian ?",
    a: "Notre base est à Thonon, à environ 10 minutes d'Évian par la RD1005 (route du lac). Pour Publier et Amphion, comptez 5 minutes, pour Lugrin et Maxilly, 8 à 12 minutes. Cette proximité nous permet d'arriver en moins de 30 minutes en cas d'urgence (dégât des eaux, intervention avant arrivée locataires).",
  },
  {
    q: "Nettoyez-vous les façades vitrées donnant sur le rivage public ?",
    a: "Oui, à condition que l'accès soit possible depuis la propriété ou un cheminement légal. Sur le bord du lac, les vitres sont fortement exposées aux embruns calcaires et aux pollens : nous recommandons 3 à 4 passages annuels minimum pour les baies plein lac.",
  },
  {
    q: "Pouvez-vous travailler dans les établissements thermaux ?",
    a: "Nous intervenons dans plusieurs résidences et hôtels du secteur thermal sur des prestations annexes : appartements de cure entre deux séjours, parties communes, vitrerie hôtelière, terrasses, bureaux administratifs. Pour les zones de soins en elles-mêmes, qui relèvent d'un protocole médicalisé spécifique, nous orientons le client vers un prestataire spécialisé en hygiène hospitalière.",
  },
  {
    q: "Disposez-vous du matériel adapté pour des bâtiments comme le Palais Lumière ?",
    a: "Pour les bâtiments à forte valeur patrimoniale du centre, nous utilisons exclusivement des produits doux, neutres en pH, sans solvant agressif, et nous proscrivons les machines à haute pression sur les pierres tendres. Chaque chantier patrimonial fait l'objet d'un protocole validé avec le donneur d'ordre.",
  },
  {
    q: "Vos tarifs sont-ils plus élevés qu'un ménage à Genève ?",
    a: "Non, au contraire. Nos tarifs sont indexés sur la grille française des services à la personne, sensiblement plus accessibles que la moyenne du canton de Genève. Un devis personnalisé vous est remis sous 24 h, calculé selon la surface, la fréquence et les contraintes d'accès. Pour les particuliers, le crédit d'impôt français de 50 % s'applique sur les prestations à domicile.",
  },
];

const TESTIMONIALS: { author: string; date: string; city?: string; body: string }[] = [
  {
    author: "Genève Expat",
    date: "Mai 2025",
    body: "Nous avons fait appel aux services de nettoyage de GH Services à notre entière satisfaction. Il s'agissait du nettoyage de notre maison avant remise des clés.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif.",
  },
  {
    author: "Shacy Will",
    date: "Avril 2025",
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top.",
  },
];

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/nettoyage-evian-les-bains#localbusiness`,
  parentOrganization: { "@id": `${SITE_URL}/#localbusiness` },
  name: "GH Services Évian-les-Bains",
  description:
    "Entreprise de nettoyage basée à Thonon-les-Bains, intervenant à Évian-les-Bains et sur toute la rive sud du Léman. Ménage, vitres, copropriétés, fin de bail, résidences secondaires.",
  url: `${SITE_URL}/nettoyage-evian-les-bains`,
  telephone: "+33684665523",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Thonon-les-Bains",
    addressLocality: "Thonon-les-Bains",
    postalCode: "74200",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "17",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/nettoyage-evian-les-bains#service-menage`,
      name: "Ménage à Évian-les-Bains",
      serviceType: "Ménage à domicile",
      provider: { "@id": `${SITE_URL}/#localbusiness` },
      areaServed: { "@type": "City", name: "Évian-les-Bains" },
      url: `${SITE_URL}/nettoyage-evian-les-bains`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/nettoyage-evian-les-bains#service-vitres`,
      name: "Nettoyage vitres Évian Lugrin Maxilly",
      serviceType: "Nettoyage de vitres",
      provider: { "@id": `${SITE_URL}/#localbusiness` },
      areaServed: [
        { "@type": "City", name: "Évian-les-Bains" },
        { "@type": "City", name: "Lugrin" },
        { "@type": "City", name: "Maxilly-sur-Léman" },
      ],
      url: `${SITE_URL}/nettoyage-evian-les-bains`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/nettoyage-evian-les-bains#service-fin-bail`,
      name: "Fin de bail à Évian-les-Bains",
      serviceType: "Nettoyage état des lieux sortant",
      provider: { "@id": `${SITE_URL}/#localbusiness` },
      areaServed: { "@type": "City", name: "Évian-les-Bains" },
      url: `${SITE_URL}/nettoyage-evian-les-bains`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/nettoyage-evian-les-bains#service-thermes`,
      name: "Nettoyage thermes Évian",
      serviceType: "Nettoyage hôtelier et résidences de cure",
      provider: { "@id": `${SITE_URL}/#localbusiness` },
      areaServed: { "@type": "City", name: "Évian-les-Bains" },
      url: `${SITE_URL}/nettoyage-evian-les-bains`,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/nettoyage-evian-les-bains#faq`,
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
      name: "Nettoyage Évian-les-Bains",
      item: `${SITE_URL}/nettoyage-evian-les-bains`,
    },
  ],
};

export default function NettoyageEvianLesBainsPage() {
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
        {/* Breadcrumb visible */}
        <nav
          aria-label="Fil d'Ariane"
          className="bg-cream-soft pt-[120px] pb-2 md:pt-[140px]"
        >
          <div className="mx-auto max-w-[1280px] px-6 text-xs text-brown/60 lg:px-12">
            <Link href="/" className="hover:text-orange">
              Accueil
            </Link>
            <span className="mx-2 text-brown/30">/</span>
            <span className="text-brown/75">Nettoyage Évian-les-Bains</span>
          </div>
        </nav>

        {/* HERO V2 EDITORIAL CREAM */}
        <section className="relative bg-cream-soft pb-16 pt-8 md:pb-24 md:pt-12">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 ring-1 ring-brown/10">
                  <span className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow" />
                    ))}
                  </span>
                  <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brown">
                    17 avis 5 sur 5 sur Google
                  </span>
                  <GoogleGIcon className="h-4 w-4" />
                </div>

                <h1 className="mt-6 font-display text-[34px] leading-[1.05] font-bold tracking-tight uppercase text-brown sm:text-[44px] md:text-[58px]">
                  Entreprise de nettoyage à{" "}
                  <span className="text-orange">Évian-les-Bains</span> et rive
                  sud du Léman
                </h1>

                <p className="mt-6 max-w-xl text-base text-brown/75 sm:text-lg">
                  Société de nettoyage locale, basée à Thonon-les-Bains, à 10
                  minutes du centre d&apos;Évian. Nous accompagnons familles,
                  copropriétés, hôtels et résidences de cure de la ville
                  thermale, ainsi que toutes les communes de Publier à
                  Saint-Gingolph. Ménage régulier, nettoyage de maison, vitres,
                  fin de bail, suivi d&apos;abonnement, devis personnalisé sous
                  24 h.
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
                    className="inline-flex items-center gap-3 rounded-full border-2 border-brown/15 bg-cream px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-brown transition-colors hover:bg-brown hover:text-cream"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    06 84 66 55 23
                  </a>
                </div>

                <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-brown/80">
                  <li className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    Équipe locale Chablais
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    Devis sous 24 h
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    Crédit d&apos;impôt 50 % particuliers
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-orange/15">
                <Image
                  src="/photos/cities/evian-2.jpg"
                  alt="Front de lac d'Évian-les-Bains avec vue sur le Léman et les Alpes suisses"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FACTS CARDS BAND */}
        <section className="bg-cream py-10">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10">
                <p className="font-display text-4xl font-bold tracking-tight text-orange">
                  15 ans
                </p>
                <p className="mt-2 text-sm text-brown/75">
                  d&apos;expérience sur la rive sud du Léman, du port d&apos;Évian
                  au bassin de Saint-Gingolph.
                </p>
              </div>
              <div className="rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10">
                <p className="font-display text-4xl font-bold tracking-tight text-orange">
                  7 j/7
                </p>
                <p className="mt-2 text-sm text-brown/75">
                  Réponse aux demandes, planning ajustable en haute saison
                  thermale et pendant les vacances scolaires.
                </p>
              </div>
              <div className="rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10">
                <p className="font-display text-4xl font-bold tracking-tight text-orange">
                  5★ Google
                </p>
                <p className="mt-2 text-sm text-brown/75">
                  Note moyenne sur 17 avis vérifiés, particuliers et
                  professionnels du Chablais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* POUR QUI A EVIAN */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Une société nettoyage Évian pour chaque usage du bord du lac
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                La ville thermale concentre des usages très différents : vie
                résidentielle paisible le long de l&apos;avenue de Neuvecelle,
                activité hôtelière dense autour de la Source Cachat,
                fréquentation touristique au port d&apos;Évian et à la baie
                d&apos;Évian. Nous adaptons notre prestation à chaque profil.
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

        {/* NOTRE APPROCHE LOCALE */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre approche locale
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Du premier rendez-vous au suivi d&apos;abonnement
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le nettoyage Évian ne se résume pas à une intervention
                ponctuelle. Notre logique de proximité, posée à Thonon, repose
                sur quatre étapes simples conçues pour le rythme particulier
                de la rive sud.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Visite ou rendez-vous
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Échange téléphonique puis visite au cabinet à Thonon ou
                  directement à votre domicile à Évian. Compréhension fine du
                  besoin, des habitudes du foyer et des contraintes
                  d&apos;accès.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Audit Léman
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Repérage des points sensibles propres aux logements lémaniques
                  : calcaire de l&apos;eau du robinet, traces d&apos;embruns,
                  humidité résiduelle, exposition aux pollens d&apos;avril à
                  juin. Le devis chiffré arrive sous 24 h.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Intervention équipe locale
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Notre équipe basée à Thonon arrive en 10 minutes à Évian par
                  la RD1005. Matériel professionnel embarqué, eau osmosée pour
                  les vitres, produits doux pour les pierres tendres des
                  bâtiments anciens.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Suivi ou ponctuel
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Vous choisissez : prestation unique (avant arrivée locataires,
                  remise des clés, grand ménage de printemps) ou abonnement
                  hebdomadaire et mensuel avec interlocuteur dédié.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SPECIFICITES ENTRETIEN EVIAN */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités d&apos;Évian
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Entretenir un logement à Évian, ce n&apos;est pas comme à
                  Annemasse
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Le climat lacustre, la qualité de l&apos;eau locale et la vie
                  thermale imposent des gestes adaptés. Quatre repères que nous
                  observons sur chaque chantier de ménage Évian.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Climat lacustre et brouillards d&apos;automne :</strong>{" "}
                      humidité élevée d&apos;octobre à mars, condensation
                      matinale sur les baies vitrées plein lac, traces blanches
                      qui apparaissent après séchage. Microfibre dédiée et
                      ventilation contrôlée pendant l&apos;intervention.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Calcaire fort de l&apos;eau du robinet :</strong>{" "}
                      paradoxe local, malgré la réputation de l&apos;eau
                      d&apos;Évian en bouteille, l&apos;eau de distribution
                      reste calcaire. Cela entartre éviers, robinetterie et
                      parois de douche. Détartrage hebdomadaire ciblé.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Vie thermale et exigence hôtelière :</strong>{" "}
                      les voisins curistes, la fréquentation touristique et le
                      passage d&apos;hôtes étrangers haussent le niveau attendu.
                      Nous travaillons avec une grille de contrôle inspirée du
                      standard hôtelier.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Accès depuis Thonon par la RD1005 :</strong> notre
                      base à 10 minutes permet une réactivité rare sur le
                      secteur. Pas de surcoût de déplacement jusqu&apos;à 25
                      kilomètres, livraisons matériel sous 30 minutes en cas de
                      besoin imprévu.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/lac-leman-3.jpg"
                  alt="Rives du lac Léman entre Évian et Lugrin, zone d'intervention de GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NOS SERVICES A EVIAN */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos services à Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Neuf prestations couvertes par notre équipe locale
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Du simple lavage de vitres d&apos;une résidence de cure au
                débarras complet d&apos;une maison de famille à Lugrin, voici
                ce que nous prenons en charge depuis notre base de Thonon.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
                >
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brown/70">
                    {s.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <Link
                href="/nettoyage-vitres-evian-les-bains"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Voir : nettoyage vitres Évian-les-Bains
              </Link>
              <Link
                href="/menage-evian-les-bains"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Voir : ménage Évian-les-Bains
              </Link>
              <Link
                href="/nettoyage-anthy-sur-leman"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Voir : nettoyage Anthy-sur-Léman
              </Link>
            </div>
          </div>
        </section>

        {/* COMMUNES VOISINES */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones couvertes
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Communes voisines de la rive sud du Léman et du Pays
                d&apos;Évian
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre périmètre direct part du port d&apos;Évian, longe le
                rivage vers la frontière suisse et grimpe sur le plateau de
                Gavot. Si votre commune n&apos;apparaît pas, demandez-nous,
                nous étudions au cas par cas selon la distance depuis Thonon.
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
                  Témoignages clients Évian et environs
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

        {/* GALERIE PHOTOS */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Galerie photos
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Évian-les-Bains, notre terrain quotidien
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:row-span-2 md:aspect-auto">
                <Image
                  src="/photos/cities/evian-2.jpg"
                  alt="Vue panoramique d'Évian-les-Bains depuis le port et la baie d'Évian"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/evian-5.jpg"
                  alt="Architecture du centre d'Évian-les-Bains près du Palais Lumière"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/evian-7.jpg"
                  alt="Front de lac et promenade d'Évian, secteur d'intervention de GH Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ EVIAN */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                FAQ Évian-les-Bains
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Les questions qui reviennent le plus de la part des familles
                évianaises, des frontaliers genevois et des syndics locaux.
              </p>
            </div>

            <div className="mt-10 divide-y divide-brown/10 rounded-3xl bg-cream ring-1 ring-brown/10">
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
                    Recevez votre devis nettoyage Évian
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre logement (surface, type, fréquence
                    souhaitée), votre adresse à Évian, Publier, Lugrin ou
                    secteur voisin. Tarif personnalisé sous 24 h ouvrées.
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
                    Disponible 7 j/7. Réponse immédiate en heures ouvrées,
                    devis personnalisé sous 24 h.
                  </p>
                </a>

                <div className="rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-xs leading-relaxed text-red-900">
                  <strong>Aucun recrutement en cours.</strong>{" "}
                  Merci de ne pas téléphoner ni envoyer d&apos;e-mail pour une
                  candidature, les demandes spontanées ne sont pas traitées.
                </div>
              </aside>

              <ServiceQuoteForm
                serviceLabel="Nettoyage Évian-les-Bains"
                source="evian_hub"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
