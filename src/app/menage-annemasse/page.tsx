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
  title: "Société de ménage à Annemasse | GH Services",
  description:
    "Société de ménage à Annemasse. Équipe salariée fixe, crédit impôt 50%, contrat clair sans engagement. Ménage régulier, frontaliers. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/menage-annemasse`,
  },
  openGraph: {
    title: "Société de ménage à Annemasse | GH Services",
    description:
      "Société de ménage à Annemasse. Équipe salariée fixe, crédit impôt 50%, contrat clair sans engagement. Ménage régulier, frontaliers. Devis 24 h.",
    url: `${SITE_URL}/menage-annemasse`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/ville-2.jpg",
        width: 1600,
        height: 900,
        alt: "Société de ménage à Annemasse, secteur Genevois",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Frontaliers genevois actifs",
    desc: "Cadres absents la journée parce qu'ils traversent à Genève dès 6 h 30. Intervention pendant les heures de bureau, clés référencées au coffre, compte-rendu photo après chaque passage pour garder la main à distance.",
  },
  {
    title: "Familles avec jeunes enfants",
    desc: "Maisons à Cranves-Sales, Vétraz-Monthoux, Lucinges. Produits doux et hypoallergéniques, sols, sanitaires, cuisine et linge. Intervenante fixe formée à la présence d'enfants en bas âge et d'animaux domestiques.",
  },
  {
    title: "Seniors autonomes d'Annemasse",
    desc: "Personnes âgées encore à domicile, secteur centre, Ambilly ou Gaillard. Aide ménagère hebdomadaire avec la même intervenante, paiement CESU préfinancé accepté, suivi téléphonique régulier des proches aidants.",
  },
  {
    title: "Télétravailleurs en plein essor",
    desc: "Indépendants et salariés full remote depuis le Genevois. Passage discret pendant une réunion en visio, espace bureau préservé, journée fractionnée si besoin pour ne pas couper la concentration.",
  },
  {
    title: "Propriétaires bailleurs entre 2 locataires",
    desc: "Studios et T2 du centre d'Annemasse loués à des frontaliers. Remise en propreté complète entre deux baux, vitres, électroménager, sols. Coordination directe avec l'agence et l'état des lieux entrant.",
  },
  {
    title: "Cabinets pro et mini-ménages",
    desc: "Cabinets médicaux, paramédicaux, conseil ou architecture sur Vétraz-Monthoux et Ville-la-Grand. Mini-prestation hebdomadaire de 2 h en fin de journée, sols, sanitaires, salle d'attente, points de contact.",
  },
];

const ZONES = [
  "Annemasse",
  "Ambilly",
  "Gaillard",
  "Ville-la-Grand",
  "Vétraz-Monthoux",
  "Cranves-Sales",
  "Étrembières",
  "Bossey",
  "Lucinges",
  "Machilly",
  "Saint-Cergues",
  "Juvigny",
];

const FAQ = [
  {
    q: "Je suis frontalier genevois, comment se passe le paiement en euros ?",
    a: "Vous percevez votre salaire en francs suisses mais nous facturons en euros, c'est la règle pour une prestation effectuée en France. La facture est libellée en EUR et reste valable pour la déclaration de revenus française. L'attestation fiscale annuelle Urssaf est éditée en euros, à joindre à votre déclaration de revenus pour activer le crédit d'impôt 50%, même en tant que frontalier imposé en France.",
  },
  {
    q: "Comment sont sécurisées les clés quand je suis à Genève toute la journée ?",
    a: "Trois options selon votre préférence. Soit nous référençons un jeu de clés dans notre coffre interne, étiqueté avec un code interne et non l'adresse. Soit vous installez une boîte à clés à code à l'entrée. Soit nous intervenons exclusivement en votre présence avant 7 h ou après 18 h. Dans tous les cas, l'intervenante signe la prise et la restitution des clés.",
  },
  {
    q: "Est-ce vraiment toujours la même intervenante qui vient ?",
    a: "Oui, c'est notre engagement de base. Une intervenante fixe est affectée à votre logement, elle connaît vos préférences de produits, l'ordre des pièces, vos points sensibles. Vous évitez les ré-explications et bâtissez une relation de confiance dans la durée. C'est notre différence majeure avec une plateforme anonyme type Wecasa ou Yoojo.",
  },
  {
    q: "Pouvez-vous simuler concrètement mon crédit impôt avant signature ?",
    a: "Oui, dans le devis personnalisé envoyé sous 24 h après visite gratuite. Nous affichons le montant brut annuel, le crédit d'impôt 50% applicable, et le coût réel net. L'avance immédiate Urssaf vous permet de ne régler que 50% dès la facture, sans attendre la déclaration de revenus. Aucune mauvaise surprise, tout est chiffré avant signature.",
  },
  {
    q: "Vous êtes basés à Thonon, vous intervenez vraiment à Annemasse au quotidien ?",
    a: "Oui, sans surcoût ni frais kilométrique. Le trajet Thonon, Annemasse est d'environ 30 minutes par l'A40, nos équipes sont sur le Genevois plusieurs jours par semaine. Annemasse, Gaillard, Ville-la-Grand, Vétraz-Monthoux, Cranves-Sales et la petite couronne sont couverts à grille tarifaire identique à celle pratiquée sur Thonon.",
  },
  {
    q: "Vous travaillez en soirée ou le week-end pour les actifs frontaliers ?",
    a: "Les prestations de ménage à domicile se font principalement en journée pour des raisons d'organisation salariale et de respect du repos hebdomadaire. Nous proposons toutefois des créneaux tôt matin (à partir de 7 h) et fin de journée (jusqu'à 18 h) sur certaines tournées. Le samedi matin est ponctuellement disponible pour les remises en état entre locataires.",
  },
  {
    q: "Si mon intervenante ne me convient pas, vous pouvez en changer ?",
    a: "Oui, sans aucune justification à fournir. Un retour de votre part suffit, nous mettons en place une nouvelle intervenante sur le passage suivant, avec un nouveau briefing complet en binôme avec un responsable. Notre objectif est que la relation fonctionne dans la durée, pas de vous forcer à garder un binôme qui ne vous convient pas.",
  },
  {
    q: "Y a-t-il un engagement minimum sur la durée du contrat ?",
    a: "Non, aucun engagement de durée. Vous pouvez modifier la fréquence, suspendre pour les vacances, ou arrêter à tout moment avec un préavis d'une semaine pour nous laisser réorganiser le planning de l'intervenante. C'est un contrat de prestation classique, pas un abonnement piégé, et c'est volontaire de notre part depuis le premier jour.",
  },
];

const TESTIMONIALS = [
  {
    author: "Shacy Will",
    date: "Avril 2025",
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
    body: "Nous avons fait appel aux services de nettoyage de GH Services à notre entière satisfaction.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/menage-annemasse#service`,
  name: "Société de ménage et aide ménagère à Annemasse",
  serviceType: "Ménage à domicile, aide ménagère, services à la personne",
  description:
    "Société de ménage à Annemasse et Genevois. Équipe salariée fixe, intervenante attitrée, crédit d'impôt 50%, CESU préfinancé accepté. Aide ménagère pour frontaliers, familles, seniors et propriétaires bailleurs.",
  url: `${SITE_URL}/menage-annemasse`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    description:
      "Devis personnalisé sous 24 h après visite gratuite ou Visio. Crédit d'impôt 50% applicable, avance immédiate Urssaf.",
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
  "@id": `${SITE_URL}/menage-annemasse#faq`,
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
      name: "Société de ménage à Annemasse",
      item: `${SITE_URL}/menage-annemasse`,
    },
  ],
};

export default function MenageAnnemassePage() {
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
        {/* Breadcrumb visible */}
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
              Société de ménage à Annemasse
            </span>
          </div>
        </nav>

        {/* HERO V1 brown gradient */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/cities/ville-2.jpg"
              alt="Société de ménage à Annemasse, secteur Genevois français"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
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
              Société de ménage à{" "}
              <span className="text-orange">Annemasse</span> et Genevois
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              GH Services est une agence SAP agréée qui couvre Annemasse et
              toute la couronne genevoise française. Notre engagement : une
              intervenante salariée et déclarée, attitrée à votre logement, et
              un contrat clair sans engagement de durée. Ménage régulier
              hebdomadaire, ménage frontalier en journée, aide ménagère pour
              senior, mini-ménage de cabinet. Crédit impôt 50% applicable,
              avance immédiate Urssaf, CESU préfinancé accepté, attestation
              fiscale annuelle systématique.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#devis"
                className="inline-flex items-center rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_18px_40px_-12px_rgba(214,93,33,0.55)] transition-colors hover:bg-orange-dark"
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
                Crédit impôt 50%
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Intervenant fixe
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                CESU préfinancé accepté
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 2 - Pour qui (ménage à Annemasse) */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Femme de ménage Annemasse pour six profils bien identifiés
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                La société de ménage Annemasse n'a pas la même réalité selon que
                vous êtes frontalier debout à 5 h 30, jeune parent avec
                poussette ou senior autonome de la rue du Faucigny. Voici les
                six profils que nous accompagnons concrètement chaque semaine
                sur le Genevois, avec leurs propres contraintes d'accès,
                horaires et préférences produits.
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

        {/* SECTION 3 - Comment ça marche à Annemasse */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Comment ça marche
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Comment ça marche à Annemasse, étape par étape
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Une agence de ménage Annemasse sérieuse ne signe pas un contrat
                à distance, par formulaire en deux clics. Voici les quatre
                étapes que nous suivons systématiquement avec un nouveau client
                du Genevois, de la prise de contact au premier passage de
                l'intervenante attitrée.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Visite gratuite ou Visio
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Visite sur place à Annemasse à l'horaire qui vous arrange, ou
                  rendez-vous Visio de 20 minutes si vous êtes au bureau à
                  Genève. Tour des pièces, écoute du besoin, repérage des
                  produits autorisés et des contraintes familiales.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Devis CESU et simulation impôt
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Devis personnalisé sous 24 h avec le crédit d'impôt 50% déjà
                  simulé, montant brut, montant net après avance immédiate
                  Urssaf, et option CESU préfinancé acceptée selon votre cas
                  employeur.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Mise en place intervenant fixe
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Affectation d'une intervenante salariée attitrée à votre
                  logement. Premier passage en binôme avec un responsable pour
                  caler l'ordre des pièces, les habitudes, les codes d'accès et
                  la gestion des clés.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Suivi téléphone et message
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Appel après les 3 premiers passages pour ajuster, puis suivi
                  trimestriel. Vous joignez votre référent par téléphone ou
                  message à tout moment, sans plateforme ni ticket. Une vraie
                  ligne directe.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SECTION 4 - Spécificités ménage Annemasse */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités ménage Annemasse
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Ce que le ménage à Annemasse a de différent
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Quinze ans d'aide ménagère sur le Genevois nous ont appris
                  quatre choses très concrètes sur la prestation ménage à
                  domicile à Annemasse, qui la distinguent du ménage sur Thonon
                  ou Évian.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Frontaliers absents la journée :</strong> la
                      majorité des clients particuliers travaillent côté Suisse
                      et ne sont à domicile qu'en soirée. Les clés doivent être
                      sécurisées au coffre interne, jamais sous le paillasson
                      ni en pot de fleurs, avec signature à la prise et à la
                      restitution.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Copropriétés denses au centre :</strong> rue de
                      Genève, place Provence, autour de la gare CEVA. Les
                      immeubles à digicode plus boîte à clés plus interphone
                      exigent une vraie flexibilité d'accès et une procédure
                      claire de récupération en cas de panne d'ouverture.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Secteur résidentiel Cranves-Vétraz :</strong>
                      maisons, jardins, vérandas et garages plus standards.
                      Prestation classique de ménage à domicile sans contrainte
                      d'accès particulière, gestion plus simple côté planning
                      et durée de passage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Paiement EUR et attestation CI :</strong> les
                      frontaliers paient en euros même s'ils gagnent en CHF, et
                      reçoivent en janvier l'attestation fiscale annuelle
                      Urssaf en euros, à joindre à leur déclaration française
                      pour activer le crédit d'impôt 50%.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/ville-4.jpg"
                  alt="Quartier résidentiel d'Annemasse, contexte d'intervention ménage GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - Crédit impôt + nos formules */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Crédit impôt et formules
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Crédit impôt 50% et nos trois fréquences à Annemasse
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Notre agence est agréée services à la personne (SAP). Le ménage
                régulier Annemasse crédit impôt entre directement dans le
                dispositif fiscal. Avance immédiate Urssaf : vous n'avancez plus
                la totalité, l'État vous prend 50% en charge au moment du
                paiement, sans attendre la déclaration de revenus. Attestation
                Urssaf transmise chaque année automatiquement. CESU préfinancé
                par votre employeur accepté en complément.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-green-700">
                  Hebdomadaire
                </span>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  3 à 4 h par semaine
                </p>
                <p className="mt-1 text-sm text-brown/60">
                  Le rythme conseillé pour frontaliers actifs
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Entretien courant complet du logement
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Linge et repassage à domicile en option
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Même intervenante chaque semaine
                  </li>
                </ul>
              </div>

              <div className="relative rounded-3xl bg-orange p-7 text-cream ring-2 ring-orange/40">
                <span className="absolute -top-3 right-6 rounded-full bg-cream px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-orange">
                  Le plus choisi
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-cream/90">
                  Bi-mensuel
                </span>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Un passage tous les 15 jours
                </p>
                <p className="mt-1 text-sm text-cream/80">
                  Appartements et seniors d'Annemasse
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Sols, sanitaires, cuisine, chambres
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Vitres intérieures en alternance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    CESU préfinancé accepté
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Mensuel
                </span>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Grand ménage de fond
                </p>
                <p className="mt-1 text-sm text-brown/60">
                  Idéal résidence secondaire frontalière
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Détartrage, lustrage, électroménager
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Plinthes, placards, vitres intérieures
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Prestation longue, journée complète
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Engagement tarif
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Devis personnalisé sous 24 h, pas d&apos;abonnement piégé
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Le tarif horaire d&apos;une femme de ménage Annemasse dépend
                  de la surface, de la fréquence et des options retenues. Après
                  crédit d&apos;impôt 50%, votre coût réel net est divisé par
                  deux. Vous restez libre de modifier la fréquence ou de
                  suspendre la prestation avec un préavis d&apos;une semaine.
                </p>
              </div>
              <div className="mt-4 inline-flex items-baseline gap-2 rounded-2xl bg-orange px-6 py-4 md:mt-0">
                <span className="font-display text-3xl font-bold tracking-tight text-cream">
                  -50%
                </span>
                <span className="text-sm font-medium text-cream/90">
                  crédit d&apos;impôt
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - Zones ménage Annemasse */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones ménage Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Aide ménagère Annemasse et douze communes du Genevois
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre périmètre pour le ménage à domicile couvre Annemasse et
                toute la petite couronne genevoise française, du centre-ville
                jusqu&apos;aux villages collés à la frontière. Aucun frais de
                déplacement facturé sur ces douze communes, grille tarifaire
                identique à celle pratiquée sur Thonon.
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

            {/* Liens internes contextuels */}
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <Link
                href="/menage-thonon-les-bains"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 hover:text-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Société de ménage Thonon-les-Bains
              </Link>
              <Link
                href="/nettoyage-annemasse"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 hover:text-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Nettoyage pro Annemasse
              </Link>
              <Link
                href="/nettoyage-textiles-thonon"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 hover:text-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Nettoyage canapé et matelas
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7 - Témoignages */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Avis vérifiés
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Ils nous confient leur ménage sur le Genevois
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

        {/* SECTION 8 - Galerie */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                En images
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Annemasse et notre équipe SAP en intervention
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Quelques vues du Genevois où nos intervenantes salariées passent
                chaque semaine, et de notre équipe permanente.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:row-span-2 lg:aspect-auto">
                <Image
                  src="/photos/cities/ville-2.jpg"
                  alt="Vue d'Annemasse, ville d'intervention ménage à domicile GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:aspect-[4/3]">
                <Image
                  src="/photos/cities/ville-4.jpg"
                  alt="Quartier résidentiel d'Annemasse vu par GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:aspect-[4/3]">
                <Image
                  src="/photos/showcase-team.jpg"
                  alt="Équipe salariée GH Services, agence SAP pour le ménage à domicile à Annemasse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 - FAQ ménage Annemasse */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ ménage Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Questions locales sur l&apos;aide ménagère Annemasse
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

        {/* SECTION 10 - CTA final / Devis */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Votre devis société de ménage Annemasse
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Indiquez la surface du logement, la fréquence souhaitée et
                    vos contraintes d&apos;accès (clés, code, frontalier
                    absent). Vous recevez sous 24 heures ouvrées un devis
                    chiffré avec crédit d&apos;impôt 50% déjà simulé.
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
                    bilingue FR.
                  </p>
                </a>

                <div className="rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-xs leading-relaxed text-red-900">
                  <span aria-hidden>⚠️ </span>
                  <strong>Aucun recrutement en cours.</strong> Merci de ne pas
                  téléphoner ni envoyer d&apos;e-mail pour une candidature, les
                  demandes spontanées ne sont pas traitées.
                </div>
              </aside>

              <ServiceQuoteForm
                serviceLabel="Société de ménage Annemasse"
                source="menage_annemasse"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
