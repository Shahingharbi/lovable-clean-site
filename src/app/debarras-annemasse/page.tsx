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
  title: "Débarras maison appartement Annemasse | GH Services",
  description:
    "Débarras à Annemasse, vide-maison, succession, Diogène. Récupération mobilier en bon état (Emmaüs). Tri éco. Devis sous 24 h.",
  alternates: {
    canonical: `${SITE_URL}/debarras-annemasse`,
  },
  openGraph: {
    title: "Débarras maison appartement Annemasse | GH Services",
    description:
      "Débarras à Annemasse, vide-maison, succession, Diogène. Récupération mobilier en bon état (Emmaüs). Tri éco. Devis sous 24 h.",
    url: `${SITE_URL}/debarras-annemasse`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-debarras.jpg",
        width: 1600,
        height: 900,
        alt: "Débarras à Annemasse, équipe GH Services en intervention de vide-maison dans le Genevois",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Héritiers de succession à Annemasse",
    desc: "Débarras succession Annemasse après décès, vide-maison complet avant vente notariale. Coordination avec le notaire local du Genevois, gestion à distance possible pour les familles éloignées (Paris, Lyon, Suisse). Papiers et objets sentimentaux mis de côté, discrétion absolue, bordereaux pour le dossier successoral.",
  },
  {
    title: "Propriétaires bailleurs après locataire indélicat",
    desc: "Vide-appartement Annemasse après départ d'un locataire ayant laissé meubles, électroménager et encombrants sur place. Nous évacuons l'ensemble, désinfectons si besoin, et préparons le bien à une nouvelle mise en location ou à la remise au syndic dans les délais imposés.",
  },
  {
    title: "Frontaliers quittant rapidement vers la Suisse",
    desc: "Départ rapide Annemasse vers Genève, Lausanne ou Zurich pour raisons professionnelles : nous vidons l'appartement français en 48 à 72 h. Récupération du mobilier en bon état pour Emmaüs, tri sélectif des encombrants, restitution du logement nettoyé pour récupérer la caution.",
  },
  {
    title: "Retraités déménageant en maison de repos",
    desc: "Vide-maison Annemasse en accompagnement d'un proche entrant en EHPAD ou en résidence sénior. Tri en présence de la famille, mise de côté des souvenirs, valorisation Emmaüs pour le mobilier encore utilisable, déchetterie d'Étrembières pour le reste. Approche humaine, sans précipitation.",
  },
  {
    title: "Accumulateurs et syndrome de Diogène",
    desc: "Débarras Diogène Annemasse avec discrétion totale, sans aucun jugement. Équipements de protection individuelle complets, masques filtrants, désinfection après vidage. Accompagnement humain de la famille ou des services sociaux, fréquent dans les appartements isolés du centre frontalier.",
  },
  {
    title: "Agences immobilières avant remise en location",
    desc: "Vidage rapide d'appartement Annemasse pour préparer la mise sur le marché ou la remise au prochain locataire. Coordination avec l'agence ou le syndic, intervention en horaires souples, bien rendu vide et balayé, prêt pour les photos et les visites dans la foulée.",
  },
];

const METHODE = [
  {
    step: "Étape 1",
    title: "Visite gratuite et estimation",
    desc: "Visite sur place gratuite à Annemasse et alentours, ou évaluation par photos pour les familles à distance. Estimation de la valeur du mobilier récupérable (Emmaüs, brocante locale), repérage des contraintes d'accès, identification des objets à conserver.",
  },
  {
    step: "Étape 2",
    title: "Tri à 4 destinations",
    desc: "Chaque débarras Annemasse est trié selon quatre destinations : Emmaüs partenaire pour le mobilier et les vêtements réutilisables, revente brocante pour les pièces de valeur, recyclage filière dédiée (métal, bois, carton, électroménager), déchetterie d'Étrembières pour le reste.",
  },
  {
    step: "Étape 3",
    title: "Enlèvement équipe 2 à 4 personnes",
    desc: "Intervention sous 48 h avec une équipe de 2 à 4 personnes selon le volume. Protection des sols et cages d'escalier, descente sécurisée du mobilier dans les immeubles anciens sans ascenseur, véhicule utilitaire adapté pour les ruelles étroites du centre d'Annemasse.",
  },
  {
    step: "Étape 4",
    title: "Nettoyage léger après vidage",
    desc: "Si vous le demandez, nous incluons un nettoyage léger après le vidage : coup de balai, dépoussiérage des surfaces, sortie des derniers déchets. Pour une remise des clés ou une vente, nous pouvons enchaîner avec notre prestation de nettoyage fin de bail Annemasse complète.",
  },
];

const SPECIFICITES = [
  {
    title: "Étages sans ascenseur, centre ancien",
    desc: "Les immeubles anciens autour de la Place Deffaugt, de la rue de la Gare et du centre piéton d'Annemasse sont souvent dépourvus d'ascenseur. Nos équipes sont entraînées à la descente sécurisée de mobilier lourd par cages d'escalier étroites, avec sangles et protections.",
  },
  {
    title: "Copropriétés et rendez-vous syndic",
    desc: "Annemasse compte un parc copropriétés très dense. Tout débarras d'appartement ou de cave exige une coordination préalable avec le syndic : créneau autorisé pour les nuisances, accès aux ascenseurs réservés, sortie des conteneurs. Nous gérons ces démarches pour vous.",
  },
  {
    title: "Situations Diogène fréquentes",
    desc: "Les appartements isolés du centre frontalier d'Annemasse, souvent loués à des travailleurs absents la journée, concentrent un nombre élevé de situations de syndrome de Diogène. Nous intervenons avec EPI complets, discrétion totale, et désinfection en lien avec les services sociaux quand ils sont impliqués.",
  },
  {
    title: "Déchetterie d'Étrembières à proximité",
    desc: "La déchetterie intercommunale d'Étrembières est à moins de 10 minutes du centre d'Annemasse. Cette proximité nous permet de réduire les rotations et donc le coût global du débarras. Les bordereaux de dépôt peuvent être fournis sur demande pour les dossiers succession ou syndic.",
  },
];

const TARIFS = [
  {
    type: "Appartement T2",
    surface: "15 à 25 m³",
    price: "À partir de 350 €",
    desc: "Studio ou T2 standard d'Annemasse, vide-appartement complet pour fin de bail ou départ rapide. Tri Emmaüs, enlèvement et nettoyage léger inclus.",
    items: [
      "Intervention sur une journée",
      "Tri Emmaüs et recyclage",
      "Idéal frontaliers et étudiants",
    ],
  },
  {
    type: "Appartement T3",
    surface: "20 à 35 m³",
    price: "À partir de 500 €",
    desc: "T3 familial, vide-appartement Annemasse complet ou succession. Mise de côté des objets sentimentaux, valorisation mobilier auprès d'Emmaüs partenaire.",
    items: [
      "Intervention 1 à 2 jours",
      "Mise de côté objets à conserver",
      "Logement rendu vide et balayé",
    ],
  },
  {
    type: "Maison plain-pied",
    surface: "30 à 50 m³",
    price: "À partir de 800 €",
    desc: "Maison de plain-pied autour d'Annemasse (Cranves-Sales, Vétraz-Monthoux, Ville-la-Grand). Débarras complet, dépendances, garage et cave inclus.",
    items: [
      "Intervention 2 à 3 jours",
      "Garage et dépendances inclus",
      "Coordination notaire possible",
    ],
  },
  {
    type: "Grosse maison ou cas Diogène",
    surface: "50 m³ et plus",
    price: "Devis personnalisé 24 h",
    desc: "Grosse maison familiale, cas Diogène, vide-maison complet en succession. Devis personnalisé sous 24 h après visite, valable 30 jours.",
    items: [
      "Intervention 3 à 5 jours",
      "EPI complets et désinfection si Diogène",
      "Déduction valeur mobilier possible",
    ],
  },
];

const ZONES = [
  "Annemasse",
  "Ambilly",
  "Étrembières",
  "Ville-la-Grand",
  "Vétraz-Monthoux",
  "Cranves-Sales",
  "Gaillard",
  "Bonne",
  "Lucinges",
  "Reignier-Ésery",
];

const FAQ = [
  {
    q: "Comment fonctionne un débarras succession à Annemasse ?",
    a: "Le débarras succession Annemasse commence par une visite gratuite ou une évaluation par photos quand les héritiers vivent loin. Nous établissons un inventaire des objets de valeur (mobilier ancien, électroménager récent, vaisselle), une estimation chiffrée sous 24 h et un planning coordonné avec le notaire. Les papiers administratifs, photos et objets sentimentaux sont mis de côté avant toute évacuation. Les bordereaux de dépôt à la déchetterie d'Étrembières peuvent être fournis pour le dossier successoral.",
  },
  {
    q: "Vous intervenez sur les situations Diogène, c'est délicat ?",
    a: "Oui, c'est l'une de nos spécialités à Annemasse. Le syndrome de Diogène concerne souvent des appartements isolés du centre frontalier, parfois signalés tardivement par les voisins ou le syndic. Nos équipes interviennent en EPI complets, masques filtrants et combinaisons jetables. Nous travaillons sans aucun jugement, en coordination avec la famille ou les services sociaux quand ils sont impliqués. Une désinfection complète est systématiquement couplée au débarras.",
  },
  {
    q: "Comment vous gérez les étages sans ascenseur à Annemasse ?",
    a: "Beaucoup d'immeubles anciens d'Annemasse (Place Deffaugt, rue de la Gare, centre piéton) n'ont pas d'ascenseur. Nos équipes sont équipées de sangles de portage, diables et protections de cage d'escalier. La descente du mobilier lourd se fait à deux ou quatre personnes selon le poids. Nous comptons ces contraintes dans le devis : le tarif intègre déjà l'effort supplémentaire, sans surfacturation surprise le jour de l'intervention.",
  },
  {
    q: "Comment ça marche, la valorisation Emmaüs ?",
    a: "Nous sommes partenaires d'Emmaüs Annemasse-Gaillard et d'autres associations locales du Genevois. Tout mobilier en bon état, vêtements, vaisselle, livres, jouets et petit électroménager fonctionnel sont remis à Emmaüs et trouvent une seconde vie. Cela permet de réduire le volume envoyé en déchetterie, et donc le coût global du débarras Annemasse. Pour les objets de valeur (mobilier ancien, collections), nous pouvons proposer un rachat partiel déduit de la facture.",
  },
  {
    q: "Quelle distance depuis Thonon, vous facturez le déplacement ?",
    a: "Notre équipe est basée à Thonon-les-Bains, à environ 30 minutes d'Annemasse par l'A40, sortie Annemasse. Nous ne facturons aucun frais kilométrique pour les interventions à Annemasse et dans tout le Genevois français (Ambilly, Étrembières, Ville-la-Grand, Vétraz-Monthoux, Cranves-Sales, Gaillard, Bonne, Lucinges, Reignier-Ésery). Le devis annoncé est le prix final, déchetterie, main-d'œuvre et véhicule compris.",
  },
  {
    q: "Vous gérez les rendez-vous syndic pour les copropriétés ?",
    a: "Oui, nous prenons en charge la coordination avec le syndic pour tout débarras d'appartement ou de cave en copropriété à Annemasse. Cela comprend la prise de rendez-vous pour réserver l'ascenseur, l'information aux voisins en cas de nuisances, le respect des créneaux horaires autorisés (généralement 8 h à 18 h en semaine), et la sortie des conteneurs. Attestation d'assurance responsabilité civile professionnelle fournie au syndic sur demande.",
  },
  {
    q: "Je quitte la France rapidement comme frontalier, vous gérez ?",
    a: "Oui, le départ rapide frontalier vers la Suisse est un cas fréquent à Annemasse. Nous intervenons sous 48 à 72 h sur simple appel. Récupération du mobilier réutilisable pour Emmaüs, tri sélectif des encombrants, déchetterie d'Étrembières pour le reste. Le logement est restitué vide et balayé pour la remise des clés, ce qui sécurise la récupération de votre caution. Devis chiffré dans la journée en cas d'urgence.",
  },
  {
    q: "La déchetterie d'Étrembières, qu'est-ce qu'elle prend ?",
    a: "La déchetterie intercommunale d'Étrembières, gérée par Annemasse Agglo, accepte les encombrants ménagers, le bois traité, le métal, les gravats en petite quantité, les DEEE (déchets électriques), les cartons et papiers, ainsi que les déchets verts. C'est notre point de dépôt principal pour les débarras à Annemasse. Sa proximité (moins de 10 minutes du centre) réduit les rotations et nous permet de tenir des tarifs compétitifs.",
  },
];

const TESTIMONIALS = [
  {
    author: "Christophe Lacroix",
    date: "Octobre 2025",
    body: "Suite au départ d'un locataire indélicat, mon appartement à Annemasse a été rendu dans un état lamentable. L'équipe de GH Services a fait un travail extraordinaire pour le débarras complet et la remise en état initial.",
  },
  {
    author: "Shacy Will",
    date: "Avril 2025",
    body: "À la hauteur de la prestation demandée pour un vide-appartement avant départ vers Genève. Réactivité, devis clair sous 24 h, équipe sérieuse. Je recommande cette société.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Ville-la-Grand",
    body: "Très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi lors du vide-maison de notre mère partie en maison de repos. Approche humaine et respectueuse.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/debarras-annemasse#service`,
  name: "Débarras et vide-maison à Annemasse",
  serviceType: "Débarras et vide-maison",
  description:
    "Débarras à Annemasse et dans tout le Genevois : vide-maison, vide-appartement, vide-cave, débarras succession, débarras Diogène, fin de bail frontalier. Récupération du mobilier en bon état via Emmaüs partenaire, tri éco-responsable, déchetterie d'Étrembières. Devis personnalisé sous 24 heures.",
  url: `${SITE_URL}/debarras-annemasse`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    description:
      "Tarifs débarras Annemasse : T2 à partir de 350 €, T3 à partir de 500 €, maison plain-pied à partir de 800 €, grosse maison sur devis personnalisé sous 24 h. Déduction possible de la valeur du mobilier récupéré.",
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
  "@id": `${SITE_URL}/debarras-annemasse#faq`,
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
      name: "Débarras à Annemasse",
      item: `${SITE_URL}/debarras-annemasse`,
    },
  ],
};

export default function DebarrasAnnemassePage() {
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
            <span className="text-brown/75">Débarras à Annemasse</span>
          </div>
        </nav>

        {/* SECTION 1 - HERO V1 BROWN avec image service-debarras */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/service-debarras.jpg"
              alt="Intervention de débarras à Annemasse, équipe GH Services vidant un appartement avec soin"
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
              Débarras maison et appartement à{" "}
              <span className="text-orange">Annemasse</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Vide-maison Annemasse, débarras succession, vide-cave et
              débarras Diogène dans tout le Genevois français. Nous récupérons
              le mobilier en bon état pour Emmaüs partenaire, trions le reste
              en filière recyclage et déchetterie d&apos;Étrembières.
              Intervention sous 48 h pour les départs rapides frontaliers,
              devis personnalisé sous 24 h.
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
                Devis 24 h
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Emmaüs partenaire
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Diogène avec discrétion
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Frontaliers, départ 48 h
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 2 - Pour qui débarras Annemasse */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Successions, frontaliers, Diogène, agences immo
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le débarras Annemasse couvre des situations très différentes
                d&apos;une rue à l&apos;autre. Vide-maison succession près de
                la Place Deffaugt, départ rapide frontalier en partance vers
                Genève, débarras cave Annemasse en copropriété, ou cas Diogène
                signalé par un voisin : nous accompagnons six profils
                récurrents avec la même méthode, le même tarif et la même
                discrétion. Approche humaine, valorisation Emmaüs et tri
                sélectif systématique.
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

        {/* SECTION 3 - Notre méthode débarras Annemasse */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre méthode débarras
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Quatre étapes claires, du repérage au nettoyage léger
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre méthode de débarras à Annemasse repose sur quatre étapes
                pensées pour éviter toute mauvaise surprise. Vous savez ce que
                vous payez, ce qui part vers Emmaüs partenaire, ce qui finit en
                déchetterie d&apos;Étrembières, et dans quel état est rendu le
                logement après notre passage.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {METHODE.map((m) => (
                <li
                  key={m.title}
                  className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10"
                >
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                    {m.step}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brown/75">
                    {m.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 4 - Spécificités Annemasse */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités Annemasse
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Ce que le bâti et la ville changent au débarras
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Annemasse n&apos;est pas Thonon. La densité du centre, la
                  proximité immédiate avec la frontière et la concentration de
                  copropriétés imposent un cadrage spécifique avant chaque
                  débarras. Voici les quatre éléments que nous vérifions
                  toujours avant de chiffrer une intervention sur Annemasse,
                  Ambilly, Ville-la-Grand ou Étrembières.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  {SPECIFICITES.map((s) => (
                    <li key={s.title} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                      <span>
                        <strong>{s.title} :</strong> {s.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/ville-4.jpg"
                  alt="Place de la Provence et centre-ville d'Annemasse, zone d'intervention débarras GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - Tarifs débarras Annemasse */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Tarifs débarras Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Quatre cas types, du T2 frontalier à la maison de famille
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Chaque débarras Annemasse est unique, mais la majorité de nos
                interventions entrent dans quatre cas types. Le devis final
                dépend toujours du volume au m³ et de l&apos;accessibilité
                (étage, ascenseur, distance véhicule). La valeur du mobilier
                récupéré pour Emmaüs partenaire peut être déduite de la
                facture.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {TARIFS.map((t, idx) => (
                <div
                  key={t.type}
                  className={
                    idx === 1
                      ? "relative rounded-3xl bg-orange p-7 text-cream ring-2 ring-orange/40"
                      : "rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20"
                  }
                >
                  {idx === 1 && (
                    <span className="absolute -top-3 right-6 rounded-full bg-cream px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-orange">
                      Le plus fréquent
                    </span>
                  )}
                  <span
                    className={
                      idx === 1
                        ? "font-display text-xs font-bold uppercase tracking-wider text-cream/90"
                        : "font-display text-xs font-bold uppercase tracking-wider text-orange"
                    }
                  >
                    {t.type}
                  </span>
                  <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                    {t.price}
                  </p>
                  <p
                    className={
                      idx === 1
                        ? "mt-1 text-sm text-cream/80"
                        : "mt-1 text-sm text-brown/60"
                    }
                  >
                    {t.surface}
                  </p>
                  <p
                    className={
                      idx === 1
                        ? "mt-3 text-sm leading-6 text-cream/90"
                        : "mt-3 text-sm leading-6 text-brown/75"
                    }
                  >
                    {t.desc}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckIcon
                          className={
                            idx === 1
                              ? "mt-0.5 h-4 w-4 shrink-0 text-cream"
                              : "mt-0.5 h-4 w-4 shrink-0 text-orange"
                          }
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Valorisation Emmaüs
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Déduction de la valeur du mobilier récupéré
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Si votre vide-maison Annemasse comprend du mobilier ancien,
                  de l&apos;électroménager récent ou de la vaisselle de
                  collection, nous évaluons sur place et déduisons la valeur de
                  la facture. Partenariats actifs avec Emmaüs Annemasse-Gaillard
                  pour un débarras éco-responsable et tracé.
                </p>
              </div>
              <div className="mt-4 inline-flex items-baseline gap-2 rounded-2xl bg-orange px-6 py-4 md:mt-0">
                <span className="font-display text-2xl font-bold tracking-tight text-cream">
                  Devis sous 24 h
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - Zones intervention */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones d&apos;intervention
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Débarras Annemasse et tout le Genevois français
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous intervenons sur Annemasse et ses dix communes limitrophes
                du Genevois, sans frais de déplacement supplémentaires. Du
                centre-ville frontalier aux communes résidentielles, en passant
                par les zones d&apos;activité, notre équipe couvre l&apos;ensemble
                du bassin chaque semaine.
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

            {/* Internal links contextuels */}
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <Link
                href="/debarras-thonon"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 hover:text-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Débarras à Thonon-les-Bains
              </Link>
              <Link
                href="/nettoyage-annemasse"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 hover:text-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Entreprise de nettoyage à Annemasse
              </Link>
              <Link
                href="/nettoyage-fin-de-bail-annemasse"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 hover:text-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Nettoyage fin de bail Annemasse
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
                  Avis Google sur nos débarras à Annemasse
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
                Sur le terrain
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Galerie débarras Annemasse
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Quelques vues de nos interventions à Annemasse et des
                quartiers où nos équipes circulent toute l&apos;année :
                vide-maison succession, débarras d&apos;appartement frontalier,
                centre-ville et secteurs résidentiels du Genevois français.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:row-span-2 lg:aspect-auto">
                <Image
                  src="/photos/service-debarras.jpg"
                  alt="Équipe GH Services en intervention de vide-maison et débarras à Annemasse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:aspect-[4/3]">
                <Image
                  src="/photos/cities/ville-4.jpg"
                  alt="Centre d'Annemasse autour de la Place Deffaugt, secteur fréquent de débarras succession"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:aspect-[4/3]">
                <Image
                  src="/photos/cities/ville-1.jpg"
                  alt="Vue urbaine d'Annemasse, zone d'intervention débarras appartement frontalier"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 - FAQ Débarras Annemasse */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ Débarras Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Vos questions locales sur le débarras à Annemasse
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

            {/* Mini list sémantique pour clore la section */}
            <ul className="mt-8 grid gap-3 text-sm text-brown/80 md:grid-cols-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                Débarras cave Annemasse en copropriété, coordination syndic.
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                Vide-grenier appartement Annemasse pour frontaliers pressés.
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                Encombrants Annemasse évacués vers déchetterie d&apos;Étrembières.
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                Débarras Diogène Annemasse, désinfection comprise.
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 10 - CTA final avec ServiceQuoteForm */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Recevez votre devis débarras Annemasse
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre situation : type de bien (T2, T3,
                    maison), contexte (succession, départ frontalier, fin de
                    bail, Diogène), volume estimé, étage et accessibilité.
                    Réponse chiffrée et personnalisée sous 24 heures ouvrées,
                    avec valorisation Emmaüs déduite si mobilier récupérable.
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
                    Équipe joignable 7 j / 7. Réponse immédiate en heures
                    ouvrées, devis chiffré dans la journée pour les départs
                    rapides frontaliers.
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
                serviceLabel="Débarras Annemasse"
                source="debarras_annemasse"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
