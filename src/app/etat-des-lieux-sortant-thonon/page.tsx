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
  title: "Nettoyage état des lieux sortant à Thonon",
  description:
    "Nettoyage fin de bail à Thonon, Évian et Chablais. Cuisine, salle de bain, vitres, joints. Préparation à la remise des clés. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/etat-des-lieux-sortant-thonon`,
  },
  openGraph: {
    title: "Nettoyage état des lieux sortant à Thonon",
    description:
      "Nettoyage fin de bail à Thonon, Évian et Chablais. Cuisine, salle de bain, vitres, joints. Préparation à la remise des clés. Devis 24 h.",
    url: `${SITE_URL}/etat-des-lieux-sortant-thonon`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-etat-lieux.jpg",
        width: 1600,
        height: 900,
        alt: "Nettoyage état des lieux sortant à Thonon-les-Bains",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Locataires en fin de bail",
    desc: "Particuliers qui veulent récupérer leur dépôt de garantie sans retenue, dans le cadre de la loi ALUR et de la grille de vétusté.",
  },
  {
    title: "Agents immobiliers et gestionnaires",
    desc: "Cabinets de gestion locative qui préparent le bien entre deux locataires avec un standard professionnel et une checklist d'état des lieux respectée.",
  },
  {
    title: "Bailleurs entre deux locations",
    desc: "Propriétaires qui souhaitent relouer rapidement leur appartement à Thonon, Évian ou Annemasse avec une remise au propre conforme aux attentes du nouvel entrant.",
  },
  {
    title: "Propriétaires Airbnb fin de saison",
    desc: "Meublés touristiques rive du Léman, Yvoire, Évian. Nettoyage de fond après haute saison estivale ou hivernale, avant fermeture ou rotation.",
  },
  {
    title: "Étudiants quittant un studio",
    desc: "Petits logements meublés sur Thonon centre, Annemasse, Genève. Intervention rapide et tarifée pour studio ou T1 avant remise des clés.",
  },
  {
    title: "Frontaliers retournant en Suisse",
    desc: "Travailleurs frontaliers qui libèrent un T2 ou T3 côté français pour s'installer côté Genève ou Lausanne. Prise en charge clé en main, à distance possible.",
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

const ZONES_CONTROLEES = [
  {
    zone: "Cuisine",
    points:
      "Four (intérieur, vitre, grilles), hotte (filtres et carrosserie), joints de carrelage, plan de travail, crédence et robinetterie.",
  },
  {
    zone: "Salle de bain et WC",
    points:
      "Calcaire WC (cuvette, abattant, chasse), joints silicone douche et baignoire, miroirs, robinetterie, paroi de douche, faïence.",
  },
  {
    zone: "Vitres et menuiseries",
    points:
      "Vitres intérieures et extérieures accessibles, encadrements, rebords de fenêtres, poignées, rails de baies vitrées.",
  },
  {
    zone: "Sols et plinthes",
    points:
      "Traces laissées par les meubles, plinthes, angles, seuils de porte. Aspiration profonde puis lavage adapté au revêtement.",
  },
  {
    zone: "Murs et portes",
    points:
      "Lessivage si autorisé par le bailleur (murs lessivables), traces de doigts autour des poignées, interrupteurs et prises.",
  },
  {
    zone: "Appareils de cuisine",
    points:
      "Frigo et congélateur (intérieur, joints, dégivrage), lave-vaisselle (filtre, joints), micro-ondes, plaques de cuisson.",
  },
  {
    zone: "VMC, radiateurs et placards",
    points:
      "Bouches d'extraction, grilles de VMC, dépoussiérage des radiateurs, intérieur des placards et tiroirs vides.",
  },
];

const FAQ = [
  {
    q: "Pourquoi un nettoyage pro avant l'état des lieux ?",
    a: "Parce que la propreté est le premier critère retenu sur le procès-verbal de sortie. La loi ALUR encadre la restitution du dépôt de garantie : le bailleur peut retenir une somme correspondant aux frais de remise en état si le logement n'est pas rendu propre. Un nettoyage professionnel avant l'état des lieux sortant permet d'éviter cette retenue, et coûte généralement bien moins cher que la facture d'une entreprise mandatée par le bailleur après votre départ.",
  },
  {
    q: "Qui paie : locataire ou bailleur ?",
    a: "En location vide ou meublée, le nettoyage final est à la charge du locataire sortant. Le logement doit être restitué dans l'état où il a été remis, hors usure normale (grille de vétusté). Si vous faites appel à un professionnel, vous payez la prestation mais vous évitez les retenues sur dépôt de garantie. Côté bailleur, il est libre de mandater une société pour le nettoyage entre deux locataires : nous facturons alors directement le propriétaire ou l'agence.",
  },
  {
    q: "Combien de temps avant la remise des clés intervenir ?",
    a: "L'idéal est d'intervenir 24 à 48 heures avant l'état des lieux sortant, une fois le logement entièrement vidé. Cela laisse le temps aux sols, joints et appareils de sécher et permet une dernière vérification visuelle. Nous proposons un créneau d'intervention 24 à 48 h après validation du devis, ce qui s'adapte aux plannings serrés de fin de bail.",
  },
  {
    q: "Vous nettoyez le four et la hotte ?",
    a: "Oui, c'est même l'un des points les plus regardés en sortie. Nous dégraissons le four à l'intérieur (parois, vitre, grilles, lèchefrite), la hotte (carrosserie et filtres métalliques), les plaques de cuisson et la crédence. Sur le bassin lémanique, la culture raclette et fondue génère des dépôts gras particulièrement tenaces, traités avec des produits dégraissants pro biodégradables.",
  },
  {
    q: "Les vitres sont-elles incluses ?",
    a: "Oui, les vitres intérieures et extérieures accessibles sans nacelle sont incluses dans la prestation état des lieux sortant. Cela couvre la quasi-totalité des appartements et maisons standards. Pour les vitres en hauteur (vérandas, façades d'immeuble), nous proposons une intervention complémentaire à la perche fibre de carbone et eau osmosée.",
  },
  {
    q: "Vous fournissez une attestation pour le bailleur ?",
    a: "Oui. À la fin de l'intervention, nous remettons une facture détaillée des prestations réalisées, ainsi qu'un reportage photo avant et après. Ces documents servent de preuve lors de l'état des lieux sortant face à l'agent ou au bailleur, et facilitent la restitution intégrale du dépôt de garantie.",
  },
  {
    q: "Combien coûte une intervention type T3 ?",
    a: "Le tarif dépend de l'état initial du logement, de la surface (m²), du nombre de pièces et des prestations spécifiques (four très encrassé, calcaire important, traitement de moisissures). Nous établissons un devis personnalisé sous 24 h après visite sur place ou envoi de photos. Aucun montant n'est annoncé sans vérification, par souci de transparence.",
  },
  {
    q: "Vous travaillez en partenariat avec des agences ?",
    a: "Oui, plusieurs agences immobilières et cabinets de gestion locative du Chablais nous confient leurs nettoyages entre deux locataires. Nous proposons des conditions adaptées au volume, une facturation centralisée et des délais d'intervention courts. Contactez-nous pour mettre en place une convention de partenariat.",
  },
];

const TESTIMONIALS = [
  {
    author: "Christophe Lacroix",
    date: "Octobre 2025",
    body: "Suite au départ d'un locataire, mon appartement a été rendu dans un état lamentable. L'équipe de GH Services a fait un travail extraordinaire pour le rendre dans l'état initial.",
  },
  {
    author: "Debrot Raymond",
    date: "Mars 2026",
    body: "GH Services s'est occupé du nettoyage de notre maison avant la vente. Nous sommes extrêmement satisfaits de leur travail. Le résultat est impeccable et le prix est exactement conforme au devis.",
  },
  {
    author: "Genève Expat",
    date: "Mai 2025",
    body: "Nous avons fait appel aux services de nettoyage de GH Services à notre entière satisfaction. Il s'agissait du nettoyage de notre maison avant remise des clés.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/etat-des-lieux-sortant-thonon#service`,
  name: "Nettoyage état des lieux sortant et fin de bail",
  serviceType: "Nettoyage de fin de bail",
  description:
    "Nettoyage état des lieux sortant et nettoyage fin de bail à Thonon-les-Bains, Évian et tout le Chablais. Préparation à la remise des clés, cuisine, salle de bain, vitres, joints, pour récupérer le dépôt de garantie dans le cadre de la loi ALUR.",
  url: `${SITE_URL}/etat-des-lieux-sortant-thonon`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    description: "Devis personnalisé sous 24 h après visite ou photos.",
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
  "@id": `${SITE_URL}/etat-des-lieux-sortant-thonon#faq`,
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
      name: "Nettoyage état des lieux sortant à Thonon",
      item: `${SITE_URL}/etat-des-lieux-sortant-thonon`,
    },
  ],
};

export default function EtatDesLieuxSortantThononPage() {
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
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/service-etat-lieux.jpg"
              alt="Nettoyage état des lieux sortant à Thonon-les-Bains, préparation à la remise des clés"
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
              Nettoyage état des lieux sortant à{" "}
              <span className="text-orange">Thonon-les-Bains</span>{" "}
              et en région lémanique
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Quitter un logement, c&apos;est aussi récupérer son dépôt de
              garantie sans retenue. Un nettoyage fin de bail réalisé par des
              pros respecte la checklist des agences immobilières du Chablais et
              vous évite les retenues sur caution. Cuisine, salle de bain,
              vitres, joints, calcaire : nous préparons votre logement à la
              remise des clés à Thonon, Évian et tout le bassin lémanique. Devis
              personnalisé sous 24 h.
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
                Intervention 24 à 48 h
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Photos avant et après
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Adapté aux 7 points bailleurs
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
                Locataires, agences, bailleurs, Airbnb
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le nettoyage état des lieux sortant ne concerne pas seulement le
                locataire sortant. Agents immobiliers, bailleurs en relocation,
                propriétaires de meublés touristiques et étudiants qui quittent
                un studio : chacun a un standard à respecter pour faciliter la
                remise des clés.
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
                Une checklist état des lieux suivie de A à Z
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous travaillons selon une procédure inspirée des checklists
                utilisées par les agences immobilières et les cabinets de
                gestion locative. Chaque zone est traitée méthodiquement et
                documentée par photos avant et après, pour servir de preuve face
                au bailleur.
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
                  Visite gratuite sur place ou envoi de photos du logement pour
                  établir un devis chiffré sous 24 h. Nous identifions les
                  zones critiques (cuisine encrassée, joints noircis, calcaire
                  important).
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Plan d&apos;attaque
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Planification des 7 zones critiques contrôlées par les
                  bailleurs, ordre logique d&apos;intervention pour respecter
                  les temps de séchage, sélection des produits adaptés au
                  revêtement.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Nettoyage approfondi
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Application de la checklist état des lieux : four, hotte,
                  joints, calcaire WC, vitres, sols, placards. Produits
                  professionnels biodégradables, respect de la grille de
                  vétusté.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Photos avant et après
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Reportage photo zone par zone, livré au client avec la
                  facture. Document de preuve utile lors de l&apos;état des
                  lieux sortant face à l&apos;agent immobilier ou au bailleur.
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
                  Les pièges locaux qui plombent une caution
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Sur le bassin lémanique, certains désagréments reviennent à
                  chaque état des lieux sortant. Les connaître permet de cibler
                  le nettoyage là où le bailleur regarde en premier.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Calcaire fort de l&apos;eau du Léman :</strong>{" "}
                      dépôts blanchâtres sur la robinetterie, la chasse de WC,
                      les parois de douche et l&apos;intérieur de la cuvette.
                      Traitement détartrant ciblé indispensable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Joints noircis de salle de bain :</strong>{" "}
                      l&apos;humidité ambiante du Chablais favorise les
                      moisissures dans les joints silicone de douche et de
                      baignoire. Nettoyage spécifique et, si besoin,
                      blanchiment des joints encrassés.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Hottes très grasses :</strong> culture culinaire
                      locale de la raclette, de la fondue et de la tartiflette,
                      qui génère des graisses tenaces sur la hotte, les
                      filtres, la crédence et le carrelage de cuisine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Vitres encrassées par les embruns :</strong> sur
                      les rives du lac, les embruns lacustres et le pollen
                      laissent un voile blanchâtre que seul un lavage pro à
                      l&apos;eau osmosée élimine sans traces.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/lac-leman.jpg"
                  alt="Vue du Lac Léman depuis Thonon-les-Bains, zone d'intervention de GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7 ZONES BAILLEURS */}
        <section className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Checklist état des lieux
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Les 7 zones contrôlées par les bailleurs
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Voici la checklist détaillée que nous appliquons à chaque
                intervention. Elle reprend les points les plus regardés par les
                agents immobiliers du Chablais et les bailleurs lors de
                l&apos;état des lieux sortant.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl ring-1 ring-cream/15">
              <ul className="divide-y divide-cream/10">
                {ZONES_CONTROLEES.map((z, idx) => (
                  <li
                    key={z.zone}
                    className="grid gap-3 bg-cream/5 p-6 md:grid-cols-[180px_1fr] md:items-start md:gap-8 md:p-7"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange font-display text-sm font-bold text-cream">
                        {idx + 1}
                      </span>
                      <span className="font-display text-base font-bold uppercase tracking-tight text-cream md:text-lg">
                        {z.zone}
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-cream/85 md:text-base">
                      {z.points}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Tarification
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Devis personnalisé sous 24 h après photos ou visite
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Le montant dépend de la surface, du nombre de pièces et de
                  l&apos;état initial. Aucun montant n&apos;est annoncé sans
                  vérification, par souci de transparence et de conformité.
                </p>
              </div>
              <a
                href="#devis"
                className="mt-4 inline-flex items-center rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark md:mt-0"
              >
                Demander mon devis
              </a>
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
                Tout le Chablais et la rive sud du Léman
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous intervenons dans tout le bassin lémanique français, de la
                proche banlieue de Genève jusqu&apos;à Saint-Gingolph. Frais de
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
                  Ils ont récupéré leurs clés sereinement
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
                    <p className="text-xs text-cream/70">{t.date}</p>
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
                Vos questions sur le nettoyage fin de bail
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
              Compléter votre nettoyage état des lieux
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
                  Vitres en hauteur, vérandas, baies vitrées : finition à l&apos;eau
                  osmosée pour un résultat sans traces le jour de la remise des
                  clés.
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
                  Pour les meublés et locations Airbnb : injection-extraction
                  des canapés, fauteuils, tapis et matelas avant remise au
                  propriétaire.
                </p>
              </Link>
              <Link
                href="/menage-thonon-les-bains"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Société de ménage
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Prestations régulières pour bailleurs et agences :
                  intervention entre deux locataires, ménage hebdomadaire et
                  remise en état.
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
                    Recevez votre devis nettoyage fin de bail
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Indiquez-nous la surface, le nombre de pièces, la date
                    prévue de l&apos;état des lieux sortant et joignez idéalement
                    quelques photos. Réponse chiffrée sous 24 heures ouvrées.
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
                serviceLabel="Nettoyage état des lieux sortant"
                source="etat_lieux_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
