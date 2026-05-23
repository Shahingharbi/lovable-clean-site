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
  title: "Entreprise de nettoyage à Annemasse",
  description:
    "Société de nettoyage à Annemasse et Genevois. Entreprises, copropriétés, particuliers, frontaliers. Intervention rapide depuis Thonon. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-annemasse`,
  },
  openGraph: {
    title: "Entreprise de nettoyage à Annemasse",
    description:
      "Société de nettoyage à Annemasse et Genevois. Entreprises, copropriétés, particuliers, frontaliers. Intervention rapide depuis Thonon. Devis 24 h.",
    url: `${SITE_URL}/nettoyage-annemasse`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/ville-1.jpg",
        width: 1600,
        height: 900,
        alt: "Entreprise de nettoyage à Annemasse, secteur Genevois",
      },
    ],
  },
};

const KPIS = [
  { value: "15 ans", label: "d'expérience locale" },
  { value: "5 / 5", label: "sur 17 avis Google" },
  { value: "7 j / 7", label: "disponibilité équipe" },
  { value: "24 h", label: "devis personnalisé" },
];

const PERSONAS = [
  {
    title: "Frontaliers genevois",
    desc: "Cadres qui partent tôt et rentrent tard de Genève. Nous intervenons en journée avec gestion sécurisée des clés et compte-rendu photo à chaque passage.",
  },
  {
    title: "Copropriétés rue de Genève",
    desc: "Halls, cages d'escalier, parkings sous-sol, locaux poubelles. Contrats syndic à passage hebdomadaire ou bi-mensuel, factures détaillées par bâtiment.",
  },
  {
    title: "Commerces place Provence",
    desc: "Boutiques du centre-ville, restaurants, agences bancaires. Lavage de vitrines, sols et sanitaires en horaires décalés (matin tôt ou soir tard).",
  },
  {
    title: "Professionnels secteur CEVA",
    desc: "Bureaux à proximité de la gare CEVA Léman Express. Entretien quotidien ou tri-hebdomadaire, gestion des consommables (essuie-mains, savon, papier).",
  },
  {
    title: "Praticiens zone Hôpitaux du Léman",
    desc: "Cabinets médicaux, dentistes, kinés, laboratoires. Protocoles d'hygiène renforcés, désinfection des points de contact, produits agréés milieu de soin.",
  },
  {
    title: "Agences immobilières Ville-la-Grand",
    desc: "Nettoyage avant visite, remise en état après locataire, fin de bail. Restitution de logements dans les délais courts imposés par les états des lieux.",
  },
];

const ZONES = [
  "Annemasse",
  "Ambilly",
  "Cranves-Sales",
  "Ville-la-Grand",
  "Vétraz-Monthoux",
  "Gaillard",
  "Étrembières",
  "Bossey",
  "Lucinges",
  "Machilly",
  "Saint-Cergues",
  "Juvigny",
];

const SERVICES = [
  {
    title: "Nettoyage de bureaux",
    desc: "Entretien régulier, gestion des consommables, intervention en horaires choisis.",
    href: "/menage-thonon-les-bains",
  },
  {
    title: "Nettoyage de vitres",
    desc: "Eau osmosée, perche fibre carbone jusqu'à 12 m, sans la moindre trace.",
    href: "/nettoyage-vitres-thonon",
  },
  {
    title: "Ménage de copropriétés",
    desc: "Parties communes, halls, ascenseurs, locaux vélos, parkings sous-sol.",
    href: "/nettoyage-coproprietes-thonon",
  },
  {
    title: "Nettoyage fin de chantier",
    desc: "Remise à neuf après travaux, retrait des résidus, dépoussiérage profond.",
    href: "/fin-de-chantier-thonon",
  },
  {
    title: "État des lieux sortant",
    desc: "Préparation à la remise des clés, fin de bail, récupération de caution.",
    href: "/etat-des-lieux-sortant-thonon",
  },
  {
    title: "Nettoyage de canapé",
    desc: "Injection-extraction, retrait des taches, tissu et cuir sur place.",
    href: "/nettoyage-textiles-thonon",
  },
  {
    title: "Débarras d'appartement",
    desc: "Vidage complet, tri, évacuation en déchèterie, remise propre.",
    href: "/debarras-thonon",
  },
  {
    title: "Entretien espaces verts",
    desc: "Tonte, taille de haies, ramassage des feuilles, soufflage des parkings.",
    href: "/entretien-espaces-verts-thonon",
  },
  {
    title: "Déménagement assisté",
    desc: "Démontage, transport, remontage, ménage du logement de départ inclus.",
    href: "/demenagement-thonon",
  },
];

const FAQ = [
  {
    q: "Vous intervenez vraiment à Annemasse depuis Thonon ?",
    a: "Oui, sans surcoût. Le trajet Thonon, Annemasse représente environ 30 minutes par l'A40, sortie Annemasse. Notre équipe couvre tout le Genevois français au quotidien : Annemasse, Gaillard, Ville-la-Grand, Cranves-Sales, Vétraz-Monthoux. Aucun frais kilométrique facturé sur cette zone.",
  },
  {
    q: "Comment gérez-vous l'accès chez les frontaliers absents en journée ?",
    a: "Trois options selon votre préférence : remise d'un jeu de clés référencé dans un coffre-fort interne, mise en place d'un code (boîte à clés), ou intervention sur créneau fixe en votre présence (généralement avant 7 h ou après 18 h). Compte-rendu photographique systématique pour les passages en autonomie.",
  },
  {
    q: "Vous travaillez avec des syndics de copropriété sur Annemasse ?",
    a: "Oui, nous gérons plusieurs contrats syndic dans le Genevois : passage hebdomadaire ou tous les 15 jours, sortie et rentrée des conteneurs, parties communes, ascenseurs, locaux poubelles. Facturation mensuelle, attestation d'assurance responsabilité civile pro fournie au syndic.",
  },
  {
    q: "Vous intervenez aussi côté suisse, vers Genève ?",
    a: "Non, notre activité est exclusivement française. Nous restons sur le Genevois côté Haute-Savoie : Annemasse, Ambilly, Gaillard, Étrembières, Vétraz-Monthoux. Pour les besoins côté Vaud ou Genève, il faut faire appel à une société de nettoyage suisse, la réglementation y est différente.",
  },
  {
    q: "Avez-vous le matériel pro pour les copros à ascenseur ?",
    a: "Oui, nous disposons du matériel adapté aux immeubles collectifs : aspirateurs dorsaux à filtration HEPA, chariots de ménage compacts pour ascenseur, monobrosse pour sols durs, autolaveuse compacte. Nous adaptons l'outillage à la configuration de chaque bâtiment.",
  },
  {
    q: "Vous lavez les parkings sous-sol des immeubles place Provence ?",
    a: "Oui, à l'autolaveuse pour les parkings d'immeubles avec accès rampe. Soufflage préalable, lavage à l'eau, séchage, traitement éventuel des taches d'huile. Intervention possible le week-end pour limiter la gêne aux résidents qui sortent leur véhicule en semaine.",
  },
  {
    q: "Combien de temps mettez-vous depuis Thonon ?",
    a: "Environ 30 minutes par l'A40 hors heures de pointe. En cas d'intervention urgente (sinistre, dégât des eaux, remise en état rapide), nous pouvons être sur place dans la matinée si l'appel arrive avant 9 h. Pour les passages réguliers, nous fixons un créneau hebdomadaire stable.",
  },
  {
    q: "Le tarif est-il plus élevé à Annemasse qu'à Thonon ?",
    a: "Non, nos grilles sont identiques sur tout le bassin lémanique français. Pas de surcoût géographique, pas de frais de déplacement cachés. Le devis dépend de la surface, de la fréquence et du type de prestation, jamais de la commune. Devis personnalisé sous 24 h, valable 30 jours.",
  },
];

const TESTIMONIALS = [
  {
    author: "Christophe Lacroix",
    date: "Octobre 2025",
    body: "Suite au départ d'un locataire, mon appartement a été rendu dans un état lamentable. L'équipe de GH Services a fait un travail extraordinaire pour le rendre dans l'état initial.",
  },
  {
    author: "Shacy Will",
    date: "Avril 2025",
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top. Je recommande cette société.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif.",
  },
];

const LOCALBUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/nettoyage-annemasse#localbusiness`,
  name: "GH Services, entreprise de nettoyage à Annemasse",
  parentOrganization: { "@id": `${SITE_URL}/#localbusiness` },
  url: `${SITE_URL}/nettoyage-annemasse`,
  telephone: "+33684665523",
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Annemasse",
    postalCode: "74100",
    addressCountry: "FR",
    addressRegion: "Auvergne-Rhône-Alpes",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "17",
  },
};

const SERVICES_SCHEMA = SERVICES.map((s, index) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-annemasse#service-${index}`,
  name: `${s.title} à Annemasse`,
  description: s.desc,
  url: `${SITE_URL}${s.href}`,
  provider: { "@id": `${SITE_URL}/nettoyage-annemasse#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
}));

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/nettoyage-annemasse#faq`,
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
      name: "Entreprise de nettoyage à Annemasse",
      item: `${SITE_URL}/nettoyage-annemasse`,
    },
  ],
};

export default function NettoyageAnnemassePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCALBUSINESS_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_SCHEMA) }}
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
              Entreprise de nettoyage à Annemasse
            </span>
          </div>
        </nav>

        {/* HERO V4 - Geometric Split 50/50 */}
        <section className="bg-cream">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
            {/* Colonne gauche : texte sur bg orange/10 */}
            <div className="flex flex-col justify-center bg-orange/10 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-cream px-4 py-2 ring-1 ring-brown/15">
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

              <h1 className="mt-6 font-display text-[34px] leading-[1.05] font-bold tracking-tight uppercase text-brown sm:text-[44px] md:text-[56px]">
                Entreprise de nettoyage à{" "}
                <span className="text-orange">Annemasse</span> et tout le
                Genevois
              </h1>

              <p className="mt-6 max-w-xl text-base text-brown/80 sm:text-lg">
                Société de nettoyage indépendante basée à Thonon, présente
                chaque semaine sur Annemasse, Gaillard, Ville-la-Grand,
                Vétraz-Monthoux et Cranves-Sales. Entreprises, copropriétés,
                cabinets médicaux, frontaliers, agences immobilières : un seul
                interlocuteur, une équipe stable, un devis personnalisé sous 24 h.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#devis"
                  className="inline-flex items-center justify-center rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_18px_40px_-12px_rgba(214,93,33,0.45)] transition-colors hover:bg-orange-dark"
                  data-track="devis"
                >
                  Demander un devis
                </a>
                <a
                  href="tel:+33684665523"
                  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-brown/20 bg-cream px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-brown transition-colors hover:bg-brown hover:text-cream"
                >
                  <PhoneIcon className="h-4 w-4" />
                  06 84 66 55 23
                </a>
              </div>
            </div>

            {/* Colonne droite : image pleine bande */}
            <div className="relative min-h-[320px] lg:min-h-0">
              <Image
                src="/photos/cities/ville-1.jpg"
                alt="Vue urbaine d'Annemasse, secteur d'intervention de GH Services"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* BANDE KPI */}
        <section className="bg-brown text-cream">
          <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-12">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {KPIS.map((k) => (
                <div key={k.label} className="text-center md:text-left">
                  <p className="font-display text-3xl font-bold tracking-tight text-orange sm:text-4xl">
                    {k.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cream/75 sm:text-sm">
                    {k.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 - Pour qui à Annemasse */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Six profils que nous accompagnons chaque semaine
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Annemasse est une ville hybride : très dense côté centre et rue
                de Genève, plus résidentielle côté Cranves-Sales et
                Vétraz-Monthoux. Nos prestations s'adaptent à chaque réalité
                locale, du studio frontalier au plateau de bureaux CEVA.
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

        {/* SECTION 3 - Comment on travaille à Annemasse */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre façon de travailler
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Comment on travaille à Annemasse
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Une agence nettoyage Annemasse ne se résume pas à un passage
                rapide. Voici les quatre engagements qui structurent nos
                interventions sur le Genevois.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Point 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Proximité Thonon
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Trente minutes par l'A40, sortie Annemasse. Pas de
                  sous-traitance locale, c'est notre équipe qui se déplace,
                  avec son propre matériel et ses produits.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Point 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Créneaux frontaliers
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Intervention pré-soirée pour les frontaliers de retour de
                  Genève, ou en journée avec gestion sécurisée des clés
                  (coffre-fort interne, traçabilité totale).
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Point 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Contrats syndic
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Passage hebdomadaire ou tous les 15 jours pour les
                  copropriétés. Sortie de containers, parties communes, hall,
                  ascenseur. Facture mensuelle détaillée par bâtiment.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Point 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Devis ferme
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Pas de prix au lance-pierre, pas de surprise sur facture. Un
                  devis personnalisé sous 24 h, valable 30 jours, qui inclut
                  produits et matériel.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SECTION 4 - Spécificités d'Annemasse */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Connaître le terrain
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Spécificités d'Annemasse à connaître
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Quinze ans d'interventions dans le Genevois nous ont appris
                quatre choses concrètes sur la manière dont la ville fonctionne
                au quotidien.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Forte densité urbaine
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Annemasse compte une concentration de copropriétés bien plus
                  élevée que la moyenne haute-savoyarde. Conséquence : beaucoup
                  d'immeubles à parties communes vieillissantes qui exigent un
                  protocole d'entretien régulier (hall, ascenseur, sas
                  vide-ordures, locaux vélos).
                </p>
              </div>
              <div className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Frontaliers absents en journée
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Une grande partie des résidents travaillent côté Suisse et
                  ne sont à leur domicile qu'en soirée. La gestion des clés
                  doit être verrouillée : coffre-fort interne avec code
                  unique, signature à la prise et à la restitution.
                </p>
              </div>
              <div className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Périphérie résidentielle
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Cranves-Sales et Vétraz-Monthoux concentrent davantage de
                  maisons individuelles, jardins, vérandas. Le type de
                  prestation y est très différent : nettoyage de vitres
                  saisonnier, entretien des terrasses, ménage à domicile
                  régulier.
                </p>
              </div>
              <div className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Gare CEVA et poussière fine
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  La proximité immédiate de la gare CEVA Léman Express et des
                  grands axes A40 et D903 génère un dépôt de poussière fine
                  noire sur les vitres, garde-corps et rebords. Fréquence de
                  passage rapprochée recommandée pour les locaux exposés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - Nos services à Annemasse */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Toutes nos prestations
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Nos services à Annemasse
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Une société de nettoyage Annemasse complète : neuf prestations
                couvertes par une seule et même équipe, sans intermédiaire ni
                sous-traitance.
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

            {/* Internal links */}
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <Link
                href="/nettoyage-vitres-annemasse"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium text-brown ring-1 ring-brown/10 hover:text-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Nettoyage de vitres Annemasse
              </Link>
              <Link
                href="/menage-annemasse"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium text-brown ring-1 ring-brown/10 hover:text-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Ménage Annemasse
              </Link>
              <Link
                href="/nettoyage-douvaine"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium text-brown ring-1 ring-brown/10 hover:text-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Nettoyage Douvaine
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6 - Zones autour d'Annemasse */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones d'intervention
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Zones autour d'Annemasse
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre périmètre d'intervention couvre Annemasse et toute sa
                banlieue genevoise : du centre-ville à la frontière, en passant
                par les communes résidentielles. Aucun frais de déplacement
                facturé sur ces douze communes.
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

        {/* SECTION 7 - Avis Google d'habitants */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Avis vérifiés
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Avis Google d'habitants du secteur
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

        {/* SECTION 8 - Galerie Annemasse */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Sur le terrain
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Galerie Annemasse
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Quelques vues du secteur où nos équipes interviennent toute
                l'année : centre-ville, quartiers résidentiels et zones
                d'activité du Genevois.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:row-span-2 lg:aspect-auto">
                <Image
                  src="/photos/cities/ville-1.jpg"
                  alt="Vue principale d'Annemasse, ville d'intervention de GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:aspect-[4/3]">
                <Image
                  src="/photos/cities/ville-2.jpg"
                  alt="Quartier résidentiel d'Annemasse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:aspect-[4/3]">
                <Image
                  src="/photos/cities/ville-4.jpg"
                  alt="Place de la Provence et centre-ville d'Annemasse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 - FAQ Annemasse */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Vos questions sur le Genevois
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
                Nettoyage entreprise Annemasse : bureaux, locaux, plateaux pros.
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                Nettoyage canapé Annemasse : injection-extraction sur place.
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                Fin de bail Annemasse : récupération de caution garantie.
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                Ménage Annemasse pour particuliers, crédit d'impôt 50 %.
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 10 - CTA final */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Recevez votre devis nettoyage Annemasse
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez votre besoin (type de local, surface, fréquence
                    souhaitée, contraintes d'accès). Réponse chiffrée et
                    personnalisée sous 24 heures ouvrées.
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
                    ouvrées.
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
                serviceLabel="Nettoyage Annemasse"
                source="annemasse_hub"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
