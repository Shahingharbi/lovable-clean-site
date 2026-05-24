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
  title: "Nettoyage à Sciez-sur-Léman et rive sud",
  description:
    "Société de nettoyage à Sciez-sur-Léman. Maisons, campings, restaurants port, copropriétés Coudrée. Équipe locale, devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-sciez`,
  },
  openGraph: {
    title: "Nettoyage à Sciez-sur-Léman et rive sud",
    description:
      "Entreprise de nettoyage à Sciez-sur-Léman : villas Coudrée, campings plage, restaurants port, copropriétés rive sud du Léman. Devis sous 24 heures.",
    url: `${SITE_URL}/nettoyage-sciez`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/lac-leman-4.jpg",
        width: 1600,
        height: 900,
        alt: "Rive sud du lac Léman à Sciez, secteur d'intervention GH Services",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Villas pied dans l'eau Coudrée",
    desc: "Propriétaires de demeures du domaine de Coudrée et résidences en bord de Léman. Entretien régulier, ouverture saisonnière, ménage avant arrivée des familles.",
  },
  {
    title: "Campings et résidences vacances plage",
    desc: "Camping de Sciez plage, parcs résidentiels et villages de mobil-homes secteur Bonnatrait. Préparation avant saison, rotation hebdomadaire, nettoyage sanitaires.",
  },
  {
    title: "Restaurants du port de Sciez",
    desc: "Établissements du port et de la base nautique. Nettoyage cuisine pro, salle, terrasse en bois, vitres lac. Intervention tôt le matin ou après service.",
  },
  {
    title: "Copropriétés rive sud",
    desc: "Résidences avec accès lac, parties communes, halls vitrés, garde-corps verre, parkings souterrains. Contrats syndic adaptés au volume.",
  },
  {
    title: "Hôtels et domaines du secteur",
    desc: "Hôtels du domaine de Coudrée et hébergements de la rive sud. Ménage chambres, espaces séminaire, vitres et parties extérieures.",
  },
  {
    title: "Particuliers Bonnatrait et centre",
    desc: "Maisons individuelles à Bonnatrait, Filly et centre de Sciez. Ménage hebdomadaire, repassage, vitres, crédit d'impôt 50 % à domicile.",
  },
];

const ZONES = [
  "Sciez",
  "Anthy-sur-Léman",
  "Margencel",
  "Massongy",
  "Yvoire",
  "Excenevex",
  "Nernier",
  "Chens-sur-Léman",
  "Bons-en-Chablais",
  "Douvaine",
  "Allinges",
];

const SERVICES = [
  {
    title: "Ménage à Sciez",
    href: "/menage-thonon-les-bains",
    desc: "Ménage récurrent pour villas Coudrée, appartements et résidences principales. Équipe stable, horaires sur mesure.",
  },
  {
    title: "Nettoyage de vitres",
    href: "/nettoyage-vitres-thonon",
    desc: "Eau osmosée et perche fibre de carbone, indispensable contre les embruns lacustres du Léman.",
  },
  {
    title: "Fin de chantier",
    href: "/fin-de-chantier-thonon",
    desc: "Remise à neuf après rénovation, dépoussiérage profond, retrait des résidus de peinture et plâtre.",
  },
  {
    title: "État des lieux sortant",
    href: "/etat-des-lieux-sortant-thonon",
    desc: "Préparation à la remise des clés, vitres incluses, pour récupérer 100 % de votre caution sur Sciez.",
  },
  {
    title: "Copropriétés",
    href: "/nettoyage-coproprietes-thonon",
    desc: "Parties communes, cages d'escalier, halls vitrés, contrats syndic mensuels pour résidences rive sud.",
  },
  {
    title: "Chalets et résidences secondaires",
    href: "/nettoyage-chalets-leman",
    desc: "Turnover Airbnb, ouverture et fermeture saisonnière, gestion à distance pour propriétaires hors région.",
  },
  {
    title: "Nettoyage textiles",
    href: "/nettoyage-textiles-thonon",
    desc: "Canapés, matelas, moquettes par injection-extraction. Très utile en sortie de saison touristique.",
  },
  {
    title: "Traitement humidité",
    href: "/traitement-humidite-thonon",
    desc: "Moisissures, salpêtre, condensation, fréquents sur les maisons anciennes proches du lac.",
  },
  {
    title: "Entretien espaces verts",
    href: "/entretien-espaces-verts-thonon",
    desc: "Tonte, taille, débroussaillage et soufflage. Pratique pour les résidences secondaires entre deux séjours.",
  },
];

const FAQ = [
  {
    q: "Vous intervenez pour le camping de Sciez plage en haute saison ?",
    a: "Oui. Nous travaillons avec les campings et résidences de vacances du secteur Bonnatrait et Sciez plage de mai à septembre. Nettoyage des mobil-homes entre deux locations, sanitaires communs, accueil, bungalows. Nous calons les rotations sur vos arrivées/départs pour libérer les emplacements à 14 h.",
  },
  {
    q: "Les terrasses en bois face au lac sont vertes, vous traitez ça ?",
    a: "Oui. À Sciez, les terrasses en bois exposées aux embruns et à l'humidité du Léman se couvrent rapidement d'algues vertes et de filaments noirs. Nous appliquons un traitement biodégradable spécifique sans rejet polluant pour le lac, suivi d'un lavage haute pression maîtrisé pour préserver les lames.",
  },
  {
    q: "Quelle est la distance entre votre équipe et Sciez ?",
    a: "Notre base se trouve à Thonon-les-Bains, soit environ 15 minutes en voiture via la RD1005. Pour les interventions récurrentes (villas Coudrée, copropriétés, restaurants port), nous ne facturons pas de frais de déplacement. Pour une prestation ponctuelle, le déplacement est inclus jusqu'à 25 km autour de Thonon.",
  },
  {
    q: "Vous avez du matériel léger adapté aux campings ?",
    a: "Oui. Pour les mobil-homes, bungalows et hébergements légers, nous arrivons avec un kit compact : aspirateur dorsal, monobrosse rotative, microfibres pré-imprégnées et produits écolabel. Pas de matériel encombrant, intervention rapide, accès facile aux allées étroites du camping de Sciez plage.",
  },
  {
    q: "Vos horaires d'intervention hors saison touristique ?",
    a: "Hors saison (octobre à avril), nous intervenons à la demande sur Sciez du lundi au samedi, de 7 h à 18 h. Pour les résidences secondaires et villas de Coudrée fermées l'hiver, nous proposons un passage mensuel de surveillance et ménage léger qui maintient la maison prête à l'usage.",
  },
  {
    q: "Vous travaillez aussi côté frontière suisse ?",
    a: "Notre zone d'intervention principale couvre la rive sud française du Léman, de Sciez à Yvoire et Chens-sur-Léman, à 15 minutes de la frontière de Genève. Pour les clients franco-suisses (résidences secondaires de propriétaires genevois ou lausannois), nous coordonnons à distance par photos et messagerie sans déplacement obligatoire.",
  },
  {
    q: "Les restaurants du port veulent un passage week-end, c'est possible ?",
    a: "Oui. Le port de Sciez tourne fort les week-ends d'été, donc les restaurants ont besoin d'un nettoyage avant 9 h du matin ou après 23 h le soir. Nous adaptons les créneaux : passage cuisine tôt le matin, terrasse et vitres en fin de service. Contrats hebdomadaires ou quotidiens selon vos besoins.",
  },
  {
    q: "Vous avez une solution pour les algues vertes sur murs et clôtures ?",
    a: "Sur la rive sud du Léman, les murs nord et clôtures bois se couvrent vite de mousses et algues vertes à cause de l'humidité ambiante. Nous nettoyons à basse pression avec un produit biodégradable adapté, puis appliquons un traitement préventif qui retarde la réapparition de 12 à 18 mois selon l'exposition.",
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
  "@id": `${SITE_URL}/nettoyage-sciez#localbusiness`,
  name: "GH Services Sciez-sur-Léman",
  parentOrganization: { "@id": `${SITE_URL}/#localbusiness` },
  url: `${SITE_URL}/nettoyage-sciez`,
  telephone: "+33684665523",
  image: `${SITE_URL}/photos/cities/lac-leman-4.jpg`,
  priceRange: "€€",
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sciez",
    postalCode: "74140",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-sciez#service`,
  name: "Nettoyage à Sciez-sur-Léman",
  serviceType: "Entreprise de nettoyage",
  description:
    "Société de nettoyage à Sciez-sur-Léman pour villas du domaine de Coudrée, campings plage, restaurants du port, copropriétés et particuliers de la rive sud du Léman.",
  url: `${SITE_URL}/nettoyage-sciez`,
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
  "@id": `${SITE_URL}/nettoyage-sciez#faq`,
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
      name: "Nettoyage à Sciez-sur-Léman",
      item: `${SITE_URL}/nettoyage-sciez`,
    },
  ],
};

export default function NettoyageSciezPage() {
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
        {/* HERO V3 FULL-BLEED PHOTO */}
        <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden text-cream">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/cities/lac-leman-4.jpg"
              alt="Rive sud du lac Léman à Sciez-sur-Léman au lever du jour"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/35 to-brown/10" />
          </div>

          <div className="mx-auto w-full max-w-[1280px] px-6 pt-[180px] pb-20 lg:px-12 lg:pb-28">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.42em] text-cream/85">
                Rive sud du Léman
              </p>
              <span
                aria-hidden
                className="mx-auto mt-5 block h-px w-16 bg-orange"
              />

              <h1 className="mt-7 font-display text-[40px] leading-[1.02] font-bold tracking-tight uppercase text-cream sm:text-[56px] md:text-[72px]">
                Nettoyage à{" "}
                <span className="text-orange">Sciez-sur-Léman</span>, rive sud
                du lac
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base text-cream/90 sm:text-lg">
                Société de nettoyage locale pour le domaine de Coudrée, les
                campings de Sciez plage, les restaurants du port, les
                copropriétés rive sud et les particuliers de Bonnatrait. Devis
                gratuit sous 24 heures.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#devis"
                  className="inline-flex items-center rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] transition-colors hover:bg-orange-dark"
                  data-track="devis"
                >
                  Demander un devis
                </a>
                <a
                  href="tel:+33684665523"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-cream/45 bg-cream/5 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-cream backdrop-blur-md transition-colors hover:bg-cream hover:text-brown"
                >
                  <PhoneIcon className="h-4 w-4" />
                  06 84 66 55 23
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* POUR QUI A SCIEZ */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Sciez
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Villas Coudrée, campings plage, restaurants du port
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Sciez-sur-Léman concentre une clientèle particulière : grandes
                villas du domaine de Coudrée, parcs résidentiels saisonniers de
                la plage, établissements du port et copropriétés rive sud.
                Chaque profil demande une organisation différente.
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

        {/* METHODE ADAPTEE BORD DU LAC */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre méthode
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Une organisation pensée pour le bord du lac
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Travailler à Sciez impose des contraintes propres au littoral
                lémanique : calcaire des embruns, humidité forte, saisonnalité
                touristique brutale. Notre process adapte chacun de ces points.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Calcaire et embruns
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Lavage à l&apos;eau osmosée sur vitres, baies et garde-corps
                  pour neutraliser le voile minéral déposé par les embruns
                  lacustres. Aucun rinçage à l&apos;eau dure pour ne pas
                  raviver les traces.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Algues vertes terrasses bois
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Application d&apos;un traitement biodégradable sur les
                  terrasses en bois exposées au Léman, lavage basse pression
                  pour préserver les lames, finition à la brosse. Aucun rejet
                  polluant dans le lac.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Calendrier touristique
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Planning calé sur la saison : ouverture de printemps avant
                  Pâques, rotations courtes en juillet et août pour camping et
                  villas, grand ménage de fermeture en octobre. Coordination
                  par message avec le propriétaire.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Équipe locale 15 minutes
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Base à Thonon-les-Bains, à 15 minutes par la RD1005. Aucune
                  facturation de déplacement sur les contrats récurrents,
                  réactivité 24 h pour les urgences fuite, dégât des eaux ou
                  arrivée locataire imprévue.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SPECIFICITES SCIEZ */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités de Sciez
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Quatre réalités locales à intégrer
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Sciez ne ressemble ni à Thonon ni à Évian. La rive sud
                  fonctionne sur sa propre logique : exposition au Léman, flux
                  touristique d&apos;été, proximité immédiate de la frontière
                  suisse.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Rive sud très exposée aux embruns :</strong> les
                      vents dominants poussent le calcaire du Léman vers les
                      façades. Vitres et garde-corps verre se voilent en
                      quelques semaines.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Saison touristique très marquée :</strong>{" "}
                      campings et villages vacances de la plage tournent à
                      plein régime de juin à septembre. Rotations rapides à
                      caler entre 10 h et 14 h.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Parcs et résidences avec accès lac :</strong>{" "}
                      domaine de Coudrée et copropriétés du port disposent de
                      portails privés, ponton et plage. Logistique adaptée
                      pour le matériel et la communication interne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Communes voisines RD1005 :</strong> Anthy-sur-Léman
                      à l&apos;est, Margencel et Massongy au sud-ouest. Une
                      même tournée couvre souvent plusieurs interventions sur
                      l&apos;axe.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/lac-leman-6.jpg"
                  alt="Vue sur la rive sud du Léman depuis Sciez, secteur Coudrée et port"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NOS SERVICES A SCIEZ */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos services à Sciez
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Neuf prestations livrées sur la rive sud
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                La même équipe couvre tous les besoins courants à Sciez,
                Bonnatrait, Coudrée et la rive sud du Léman. Une seule
                interlocutrice, un devis groupé, une facturation simple.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </section>

        {/* COMMUNES RIVE SUD */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Communes de la rive sud
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Du Bas-Chablais à Yvoire
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre tournée rive sud englobe les communes du Bas-Chablais et
                de la frontière suisse. Frais de déplacement inclus jusqu&apos;à
                25 km autour de Thonon-les-Bains pour toute intervention
                récurrente.
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

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Link
                href="/nettoyage-anthy-sur-leman"
                className="group block rounded-2xl bg-cream-soft p-5 ring-1 ring-brown/10 transition-colors hover:bg-cream"
              >
                <p className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Commune voisine
                </p>
                <p className="mt-1 font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage Anthy-sur-Léman
                </p>
              </Link>
              <Link
                href="/nettoyage-yvoire"
                className="group block rounded-2xl bg-cream-soft p-5 ring-1 ring-brown/10 transition-colors hover:bg-cream"
              >
                <p className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Village médiéval
                </p>
                <p className="mt-1 font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage Yvoire
                </p>
              </Link>
              <Link
                href="/nettoyage-chalets-leman"
                className="group block rounded-2xl bg-cream-soft p-5 ring-1 ring-brown/10 transition-colors hover:bg-cream"
              >
                <p className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Spécialité Léman
                </p>
                <p className="mt-1 font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Chalets et résidences secondaires
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* AVIS LEMAN */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Avis Léman
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

        {/* GALERIE RIVE SUD */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Galerie rive sud
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Le terrain dans lequel nous intervenons
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 md:grid-rows-2 md:[grid-template-areas:'a_a''b_c']">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:aspect-auto md:[grid-area:a]">
                <Image
                  src="/photos/cities/lac-leman-4.jpg"
                  alt="Rive sud du lac Léman, secteur de Sciez et domaine de Coudrée"
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:[grid-area:b]">
                <Image
                  src="/photos/cities/lac-leman-6.jpg"
                  alt="Port de Sciez et base nautique, intervention restaurants et copropriétés"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:[grid-area:c]">
                <Image
                  src="/photos/cities/chablais-3.jpg"
                  alt="Paysage du Bas-Chablais autour de Sciez et Margencel"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SCIEZ */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ Sciez
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Questions fréquentes rive sud
              </h2>
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
                    Votre devis nettoyage Sciez
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Précisez votre adresse à Sciez, Bonnatrait ou rive sud, le
                    type de bâtiment (villa Coudrée, mobil-home camping,
                    restaurant port, copropriété) et la fréquence souhaitée.
                    Réponse chiffrée sous 24 heures ouvrées.
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
                    Disponible 7 j/7. Équipe locale basée Thonon, 15 minutes
                    de Sciez par la RD1005.
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
                serviceLabel="Nettoyage Sciez"
                source="sciez_hub"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
