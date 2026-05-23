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
  title: "Entreprise de nettoyage à Publier-Amphion",
  description:
    "Nettoyage à Publier et Amphion-les-Bains, rive sud du Léman. Particuliers, résidences, copros. Équipe Thonon, intervention 7j/7. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-publier`,
  },
  openGraph: {
    title: "Entreprise de nettoyage à Publier-Amphion",
    description:
      "Nettoyage à Publier et Amphion-les-Bains, rive sud du Léman. Particuliers, résidences, copros. Équipe Thonon, intervention 7j/7. Devis 24 h.",
    url: `${SITE_URL}/nettoyage-publier`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/evian-1.jpg",
        width: 1600,
        height: 900,
        alt: "Publier et Amphion-les-Bains, rive sud du Léman, secteur d'intervention GH Services",
      },
    ],
  },
};

const PERSONAS: { title: string; desc: string }[] = [
  {
    title: "Résidents permanents de Publier",
    desc: "Familles installées à l'année dans les quartiers résidentiels de la commune, du chef-lieu jusqu'au plateau au-dessus de la RD1005. Ménage régulier, vitres et entretien hebdomadaire calé sur la vie de la maisonnée.",
  },
  {
    title: "Locataires saisonniers d'Amphion",
    desc: "Vacanciers qui louent un studio ou un appartement près du port d'Amphion entre juin et septembre. Préparation avant arrivée, ménage de mi-séjour, remise en état après départ pour rendre le logement au propriétaire.",
  },
  {
    title: "Propriétaires bailleurs en courte durée",
    desc: "Investisseurs Airbnb, Booking ou Abritel actifs sur Amphion-les-Bains et le bord du Léman. Rotation rapide entre 11 h et 15 h, contrôle photo du logement remis, signalement immédiat de toute dégradation constatée.",
  },
  {
    title: "Copropriétés résidentielles vue lac",
    desc: "Petites et moyennes résidences de la rive d'Amphion offrant des vues directes sur le Léman. Parties communes, halls vitrés, ascenseurs, locaux poubelles et vélos. Contrats annuels signés avec le syndic gestionnaire.",
  },
  {
    title: "Commerces du port d'Amphion",
    desc: "Restaurants face à la promenade, glaciers, locations de pédalos, bureaux de tabac et boulangeries du secteur port. Passage tôt le matin pour libérer la vitrine avant l'ouverture aux touristes.",
  },
  {
    title: "Retraités installés sur la rive",
    desc: "Couples retraités qui ont choisi Publier-Amphion pour profiter du Léman au quotidien. Ménage allégé deux fois par mois, lavage de vitres deux fois par an, soutien ponctuel pour les grands rangements de saison.",
  },
];

const APPROCHE: { label: string; title: string; desc: string }[] = [
  {
    label: "Repère 1",
    title: "Proximité immédiate avec Évian",
    desc: "Notre équipe rejoint Publier-Amphion depuis Thonon en moins de 15 minutes par la RD1005, et le centre d'Évian se trouve à 5 minutes seulement du quartier d'Amphion. Cela permet d'aligner sur une même demi-journée une prestation chez vous et une autre côté Évian.",
  },
  {
    label: "Repère 2",
    title: "Équipe Thonon mobilisable jour J",
    desc: "Notre base logistique reste Thonon-les-Bains, à un quart d'heure de la commune. Une demande qui arrive le matin peut souvent être traitée le jour même pour une urgence ménage, un dégât des eaux ou une remise en état avant arrivée de locataires.",
  },
  {
    label: "Repère 3",
    title: "Planning hebdomadaire résidences secondaires",
    desc: "Pour les maisons et appartements occupés quelques semaines par an, nous proposons un calendrier annuel construit en janvier : aérations bimensuelles, grand ménage avant chaque arrivée, fermeture après chaque départ. Vous validez une fois, vous oubliez.",
  },
  {
    label: "Repère 4",
    title: "Gestion des clés et badges immeubles",
    desc: "Trousseau remis sous décharge écrite, boîte à code installée si vous le souhaitez, badges d'accès des copropriétés stockés dans un coffre nominatif. Chaque entrée et sortie est tracée par horodatage et restituée au propriétaire à la fin de la mission.",
  },
];

const SPECIFICITES: { title: string; desc: string }[] = [
  {
    title: "Saisonnalité forte du port d'Amphion",
    desc: "Entre la mi-juin et la fin du mois d'août, la promenade et le port d'Amphion concentrent l'essentiel des visiteurs de la rive sud. Stationnement saturé, terrasses bondées, rotation continue des logements de location. Nous adaptons les créneaux et démarrons souvent les tournées dès 7 h.",
  },
  {
    title: "Mélange permanent et résidentiel secondaire",
    desc: "Publier-Amphion est l'une des rares communes du Chablais où cohabitent une vraie population permanente et un parc important de résidences secondaires détenues par des Genevois, Lyonnais et Parisiens. Nos prestations alternent contrats hebdomadaires et forfaits longue distance.",
  },
  {
    title: "Accès rapide RD1005 axe Évian-Thonon",
    desc: "La départementale 1005 traverse la commune d'est en ouest et constitue l'épine dorsale du bassin lémanique français. Cet axe rapide nous permet de mutualiser une intervention à Publier avec une autre à Marin, Évian ou Maxilly dans la même journée sans facturer de frais kilométriques.",
  },
  {
    title: "Calcaire et embruns du Léman",
    desc: "L'eau du lac et l'humidité des berges laissent des dépôts minéraux blanchâtres sur les baies vitrées orientées nord, ainsi que des traces de calcaire tenaces sur les pierres et garde-corps des copropriétés vue lac. L'eau osmosée est notre réponse standard pour neutraliser ce phénomène local.",
  },
];

const SERVICES: { title: string; desc: string; href: string }[] = [
  {
    title: "Nettoyage de vitres",
    desc: "Lavage à l'eau osmosée et perche fibre, finition microfibre, sans traces sur les baies plein lac d'Amphion.",
    href: "/nettoyage-vitres-thonon",
  },
  {
    title: "Ménage Publier régulier",
    desc: "Ménage Publier hebdomadaire, bimensuel ou mensuel pour maisons, appartements et résidences secondaires de la commune.",
    href: "/menage-thonon-les-bains",
  },
  {
    title: "Nettoyage copropriétés",
    desc: "Halls, ascenseurs, locaux poubelles, parkings souterrains des résidences vue Léman, contrat annuel signé syndic.",
    href: "/nettoyage-coproprietes-thonon",
  },
  {
    title: "Fin de chantier",
    desc: "Remise à neuf après travaux, poussière fine sur les surfaces, joints, sols et vitrages d'une rénovation neuve.",
    href: "/fin-de-chantier-thonon",
  },
  {
    title: "Fin de bail Publier",
    desc: "État des lieux sortant minutieux, photos avant remise des clés, restitution sans retenue de caution pour les locataires.",
    href: "/etat-des-lieux-sortant-thonon",
  },
  {
    title: "Nettoyage textiles et canapés",
    desc: "Injection extraction sur canapés, fauteuils, têtes de lit et tapis, séchage rapide à l'air libre des résidences.",
    href: "/nettoyage-textiles-thonon",
  },
  {
    title: "Entretien espaces verts",
    desc: "Tonte, taille, ramassage feuilles et soufflage allées, calé sur les passages des propriétaires en week-end.",
    href: "/entretien-espaces-verts-thonon",
  },
  {
    title: "Débarras Publier",
    desc: "Vide-maison, succession, garage, cave de copropriété. Tri sélectif et passage en déchetterie intercommunale.",
    href: "/debarras-thonon",
  },
  {
    title: "Petite maçonnerie",
    desc: "Reprises de joints, scellement de pierres descellées, finitions après nettoyage technique d'une façade ancienne.",
    href: "/petite-maconnerie-thonon",
  },
];

const ZONES: string[] = [
  "Publier",
  "Amphion-les-Bains",
  "Évian",
  "Marin",
  "Maxilly",
  "Champanges",
  "Larringes",
  "Lugrin",
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Vous entretenez les résidences secondaires de Publier toute l'année ?",
    a: "Oui. Nous gérons une trentaine de résidences secondaires entre Publier et Amphion, principalement détenues par des familles genevoises, lyonnaises ou parisiennes qui passent 8 à 12 week-ends par an sur la rive sud. Le contrat annuel comprend une visite bimensuelle d'aération, le ménage complet avant chaque arrivée et la mise en sommeil après chaque départ. Vous recevez un compte rendu photo après chaque passage, directement par e-mail ou WhatsApp.",
  },
  {
    q: "Comment se passe la gestion des clés et badges d'immeuble ?",
    a: "Nous mettons en place une procédure écrite dès la première intervention. Le trousseau est remis contre décharge signée et stocké dans un coffre nominatif à Thonon. Pour les copropriétés d'Amphion équipées de badges vigik ou portails motorisés, le badge est encodé à votre nom et restitué à la fin du contrat. Aucune copie n'est conservée hors mission active, et chaque entrée sortie est horodatée dans un journal interne.",
  },
  {
    q: "La saison estivale autour du port d'Amphion change-t-elle vos tarifs ?",
    a: "Non, les tarifs restent stables toute l'année. En revanche, entre la mi-juin et la fin du mois d'août, nous calons les passages tôt le matin pour les commerces et logements en rotation rapide, avant l'arrivée massive des baigneurs sur la plage publique. Pour les villas et copropriétés résidentielles à l'écart du port, les créneaux d'après-midi restent ouverts comme le reste de l'année.",
  },
  {
    q: "Quelle distance exacte entre Publier-Amphion et le centre d'Évian ?",
    a: "Le quartier d'Amphion-les-Bains se trouve à 3 kilomètres seulement de l'entrée ouest d'Évian, soit environ 5 minutes en voiture par la RD1005. Le chef-lieu de Publier, situé plus au sud sur la commune, est à 4 kilomètres, comptez 8 minutes. Cette proximité explique pourquoi nous mutualisons systématiquement les tournées entre les deux communes pour les contrats récurrents.",
  },
  {
    q: "Combien de temps met votre équipe pour venir depuis Thonon ?",
    a: "Notre véhicule équipé met 15 minutes par la RD1005 entre notre base de Thonon-les-Bains et le centre de Publier, 12 minutes seulement jusqu'à Amphion. Pour un contrat régulier ou une intervention programmée, aucun frais de déplacement n'est facturé. Pour une demande ponctuelle isolée, le déplacement est offert dans un rayon de 25 kilomètres autour de notre base.",
  },
  {
    q: "Travaillez-vous pour les bailleurs en location courte durée ?",
    a: "Oui, c'est même une part importante de notre activité sur Amphion. Pour les hôtes Airbnb, Booking ou Abritel, nous prenons en charge la rotation entre deux locataires : ménage complet, changement de linge fourni, contrôle de l'état du logement, photos transmises au propriétaire avant la nouvelle arrivée. Le créneau standard est 11 h sortie - 15 h entrée, mais nous adaptons selon votre calendrier de réservation.",
  },
  {
    q: "Intervenez-vous pour les commerces autour du casino d'Amphion ?",
    a: "Oui. Le secteur autour de l'ancien casino d'Amphion et de la promenade Belle Époque concentre plusieurs cafés, restaurants et boutiques que nous entretenons en passage hebdomadaire ou bihebdomadaire. Nous arrivons toujours avant l'ouverture pour libérer la vitrine, dégraisser le sol et préparer la salle, sans gêner les premiers clients de la matinée.",
  },
  {
    q: "Vous signez avec les syndics qui gèrent les copropriétés vue lac ?",
    a: "Bien sûr. Plusieurs résidences récentes le long de la promenade d'Amphion et sur l'avenue de la Rive nous confient l'entretien annuel de leurs parties communes : halls vitrés, ascenseurs, sas vélos, sanitaires visiteurs et locaux poubelles. Nous signons un contrat directement avec le syndic gestionnaire, tenons un cahier de liaison consultable par le conseil syndical, et facturons une seule fois par mois.",
  },
];

const TESTIMONIALS: { author: string; date: string; city?: string; body: string }[] = [
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
  {
    author: "Shacy Will",
    date: "Avril 2025",
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top. Je recommande cette société avec qui j'espère continuer de travailler.",
  },
];

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/nettoyage-publier#localbusiness`,
  parentOrganization: { "@id": `${SITE_URL}/#localbusiness` },
  name: "GH Services Publier Amphion",
  description:
    "Entreprise de nettoyage Publier-Amphion : ménage, vitres, copropriétés vue lac, fin de bail, location courte durée et commerces du port d'Amphion sur la rive sud du Léman.",
  url: `${SITE_URL}/nettoyage-publier`,
  telephone: "+33684665523",
  image: `${SITE_URL}/photos/cities/evian-1.jpg`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Thonon-les-Bains",
    addressLocality: "Publier",
    postalCode: "74500",
    addressRegion: "Haute-Savoie",
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
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-publier#service`,
  name: "Nettoyage Publier",
  serviceType: "Entreprise de nettoyage Publier-Amphion",
  description:
    "Nettoyage Publier et Amphion-les-Bains : ménage régulier, vitres eau osmosée, fin de bail, copropriétés vue lac, rotation location courte durée et commerces du port d'Amphion.",
  url: `${SITE_URL}/nettoyage-publier`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/nettoyage-publier#faq`,
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
      name: "Nettoyage Publier-Amphion",
      item: `${SITE_URL}/nettoyage-publier`,
    },
  ],
};

export default function NettoyagePublierPage() {
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
          className="bg-cream-soft pt-[120px] pb-2 md:pt-[140px]"
        >
          <div className="mx-auto max-w-[1280px] px-6 text-xs text-brown/60 lg:px-12">
            <Link href="/" className="hover:text-orange">
              Accueil
            </Link>
            <span className="mx-2 text-brown/30">/</span>
            <span className="text-brown/75">Nettoyage Publier-Amphion</span>
          </div>
        </nav>

        {/* HERO V4 GEOMETRIC SPLIT 50/50 */}
        <section className="bg-cream-soft">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid lg:grid-cols-2 lg:items-stretch">
              <div className="px-6 py-12 sm:px-10 md:py-16 lg:px-16 lg:py-20">
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

                <h1 className="mt-6 font-display text-[34px] leading-[1.05] font-bold tracking-tight uppercase text-brown sm:text-[42px] md:text-[54px]">
                  Entreprise de nettoyage à{" "}
                  <span className="text-orange">Publier</span> et
                  Amphion-les-Bains
                </h1>

                <p className="mt-6 max-w-xl text-base text-brown/75 sm:text-lg">
                  Nettoyage Publier de proximité, équipe basée à Thonon, à un
                  quart d&apos;heure du chef-lieu et à 5 minutes du centre
                  d&apos;Évian par la RD1005. Nous couvrons l&apos;ensemble de
                  la commune, du quartier port d&apos;Amphion à la rive sud du
                  Léman, jusqu&apos;au plateau qui relie Champanges et
                  Larringes. Particuliers, copropriétés vue lac, bailleurs
                  courte durée et commerces du port. Devis 24 h.
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
                    Équipe Thonon, 15 min de Publier
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    Intervention 7 j/7
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    Gestion clés et badges
                  </li>
                </ul>
              </div>

              <div className="relative min-h-[320px] lg:min-h-full">
                <Image
                  src="/photos/cities/evian-1.jpg"
                  alt="Rive sud du lac Léman à hauteur de Publier et Amphion-les-Bains"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* POUR QUI A PUBLIER-AMPHION */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Publier
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Six profils typiques de la rive sud du Léman
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Publier-Amphion mêle vraie population permanente, parc
                important de résidences secondaires et activité commerçante
                concentrée autour du port. Six profils résument la demande
                locale que nous traitons au quotidien.
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

        {/* APPROCHE LOCALE PUBLIER */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Approche locale Publier
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Quatre principes pour une entreprise nettoyage
                Publier-Amphion
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre méthode locale repose sur quatre repères pensés pour la
                position de la commune, entre Thonon et Évian, et son double
                profil permanent et secondaire.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {APPROCHE.map((step) => (
                <li
                  key={step.title}
                  className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10"
                >
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                    {step.label}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brown/75">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SPECIFICITES PUBLIER-AMPHION */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités Publier-Amphion
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Une commune charnière du bord Léman
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Quatre réalités locales structurent notre planning sur
                  Publier-Amphion. Les ignorer, c&apos;est passer à côté du
                  service que les habitants et bailleurs attendent réellement
                  ici.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  {SPECIFICITES.map((sp) => (
                    <li key={sp.title} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                      <span>
                        <strong>{sp.title} :</strong> {sp.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/evian-4.jpg"
                  alt="Berges du Léman entre Publier et Amphion, secteur d'intervention résidentiel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NOS SERVICES A PUBLIER */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos services à Publier
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Neuf prestations couvertes par notre équipe Thonon
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Du nettoyage Amphion port à la remise à neuf d&apos;une
                résidence secondaire Amphion sur les hauteurs, voici ce que
                notre équipe prend en charge sur la commune et les villages
                proches.
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
                href="/nettoyage-evian-les-bains"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Voir : nettoyage Évian-les-Bains
              </Link>
              <Link
                href="/nettoyage-anthy-sur-leman"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Voir : nettoyage Anthy-sur-Léman
              </Link>
              <Link
                href="/nettoyage-chalets-leman"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Voir : chalets et résidences Léman
              </Link>
            </div>
          </div>
        </section>

        {/* ZONES D'INTERVENTION */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones d&apos;intervention
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Huit communes autour de Publier
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre rayon quotidien depuis Thonon englobe Publier, le
                quartier d&apos;Amphion-les-Bains, le voisinage immédiat
                d&apos;Évian et le plateau qui mène à Champanges. Pas de frais
                kilométriques sur ces huit communes pour les contrats
                réguliers.
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
                  Avis clients
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

        {/* GALERIE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Galerie photos
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Publier-Amphion, notre terrain quotidien
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:row-span-2 md:aspect-auto">
                <Image
                  src="/photos/cities/evian-1.jpg"
                  alt="Vue large sur le Léman depuis Publier, axe RD1005 et rive sud du lac"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/evian-4.jpg"
                  alt="Berges et promenade d'Amphion-les-Bains à proximité du port"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/lac-leman-5.jpg"
                  alt="Plan d'eau du Léman entre Amphion et Lugrin, paysage de la rive sud"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ PUBLIER */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ Publier
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Questions fréquentes Publier-Amphion
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Les huit questions qui reviennent le plus dans les demandes de
                devis sur la commune, des résidents permanents jusqu&apos;aux
                syndics de copropriété.
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

        {/* CTA FINAL DEVIS */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Votre devis nettoyage Publier-Amphion
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Indiquez l&apos;adresse à Publier, Amphion-les-Bains ou
                    commune voisine, le type de bien (maison, appartement,
                    résidence secondaire Amphion, copropriété, location courte
                    durée, commerce du port), la surface et la fréquence
                    souhaitée. Réponse chiffrée sous 24 heures ouvrées avec
                    proposition de planning annuel si pertinent.
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
                    Équipe basée à Thonon, 15 minutes de Publier par la
                    RD1005. Disponibilité 7 j/7 sur rendez-vous.
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
                serviceLabel="Nettoyage Publier"
                source="publier_hub"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
