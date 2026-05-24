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
  title: "Entreprise de nettoyage à Bons-en-Chablais",
  description:
    "Nettoyage à Bons-en-Chablais, Cervens et Brens. Maisons, copros, commerces et fin de chantier. Équipe Thonon, intervention 7j/7. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-bons-en-chablais`,
  },
  openGraph: {
    title: "Entreprise de nettoyage à Bons-en-Chablais",
    description:
      "Nettoyage à Bons-en-Chablais, Cervens et Brens. Maisons, copros, commerces et fin de chantier. Équipe Thonon, intervention 7j/7. Devis 24 h.",
    url: `${SITE_URL}/nettoyage-bons-en-chablais`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/chablais-1.jpg",
        width: 1600,
        height: 900,
        alt: "Entreprise de nettoyage à Bons-en-Chablais, vallée du Foron",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Propriétaires de pavillons Bons centre",
    desc: "Maisons individuelles du bourg de Bons-en-Chablais, lotissements récents autour de la place du marché et de la mairie. Entretien régulier, grand ménage de saison et lavage de vitres extérieures.",
  },
  {
    title: "Familles vallée du Foron",
    desc: "Habitants de la vallée du Foron entre Bons, Cervens et Lully. Maisons familiales avec jardin, dépendances et combles aménagés. Passage hebdomadaire ou tous les quinze jours.",
  },
  {
    title: "Copropriétés récentes résidentielles",
    desc: "Petits collectifs neufs livrés ces dernières années à Bons, Brens et secteur de Boëge. Parties communes, halls, locaux vélos, cages d'escalier et abords paysagers.",
  },
  {
    title: "Artisans BTP fin de chantier",
    desc: "Constructeurs de maisons individuelles et artisans du second œuvre du Chablais. Nettoyage de remise des clés après livraison, retrait des résidus de plâtre, peinture et poussière de chantier.",
  },
  {
    title: "Agriculteurs corps de ferme",
    desc: "Exploitations du plateau autour de Saxel, Cervens et Brens. Nettoyage des bureaux de gestion, gîtes ruraux annexes, points de vente directe et zones d'accueil du public.",
  },
  {
    title: "Professions libérales",
    desc: "Médecins, kinés, dentistes, comptables et cabinets installés à Bons-en-Chablais. Entretien quotidien ou tri-hebdomadaire, gestion des consommables, intervention en heures décalées.",
  },
];

const APPROCHE = [
  {
    title: "Axe Thonon-Annemasse 15 min",
    desc: "Notre base est à Thonon-les-Bains. Bons est à quinze minutes par la D903 hors heures de pointe, vingt à vingt-cinq minutes en flux frontalier. Pas de sous-traitance, c'est notre propre équipe qui intervient.",
  },
  {
    title: "Planning maisons individuelles",
    desc: "Pour les maisons du bourg de Bons et des hameaux du plateau, créneaux à partir de 7 h en semaine, samedi matin sur réservation, gestion sécurisée des clés et coffre à clés posé sur place.",
  },
  {
    title: "Contrats récurrents copros récentes",
    desc: "Pour les petites copropriétés livrées ces dernières années, contrat au passage hebdomadaire ou bi-mensuel, cahier de présence, attestation RC pro et décennale, facture mensuelle détaillée par bâtiment.",
  },
  {
    title: "Intervention chantiers terminés",
    desc: "Pour les constructions neuves et rénovations en fin de chantier, intervention sous 72 h après la livraison, protocole en trois passes, contrôle qualité avec le maître d'ouvrage avant remise des clés.",
  },
];

const SPECIFICITES = [
  {
    title: "Zone pavillonnaire en expansion",
    desc: "Bons-en-Chablais connaît une croissance résidentielle continue. Beaucoup de nouveaux lotissements, hangars reconvertis et maisons individuelles à entretenir. Les besoins de nettoyage régulier augmentent sur tout le secteur.",
  },
  {
    title: "Sortie A40 directe Vétraz-Annemasse",
    desc: "L'autoroute A40 via la sortie de Vétraz-Monthoux relie Bons à Annemasse, Genève et Annecy en trente minutes. Notre logistique tournée passe régulièrement par cet axe pour optimiser les déplacements.",
  },
  {
    title: "Climat de plaine pollens fréquents",
    desc: "La plaine du Chablais entre les contreforts du plateau et les rives du Léman concentre les pollens de bouleau, peuplier et graminées d'avril à juin. Les baies vitrées et vérandas se salissent vite à cette saison.",
  },
  {
    title: "Beaucoup de constructions neuves",
    desc: "Le marché de la maison neuve reste très actif autour de Bons, Brens et Cervens. Les fins de chantier représentent une part importante de nos prestations, avec des protocoles dédiés aux résidus de construction.",
  },
];

const SERVICES = [
  {
    title: "Ménage à domicile",
    desc: "Entretien régulier des maisons de Bons centre, hameaux de la vallée du Foron et lotissements récents, fréquence hebdomadaire ou bi-mensuelle.",
    href: "/menage-thonon-les-bains",
  },
  {
    title: "Nettoyage de vitres",
    desc: "Eau osmosée et perche fibre carbone jusqu'à 12 m. Baies vitrées, vérandas, fenêtres de toit, sans calcaire ni trace, idéal pour les pollens de plaine.",
    href: "/nettoyage-vitres-thonon",
  },
  {
    title: "Ménage de copropriétés",
    desc: "Parties communes des petits collectifs récents de Bons, halls vitrés, ascenseurs, locaux poubelles et abords paysagers extérieurs.",
    href: "/nettoyage-coproprietes-thonon",
  },
  {
    title: "Nettoyage fin de chantier",
    desc: "Remise à neuf après travaux et constructions neuves, retrait des résidus de plâtre et peinture, dépoussiérage profond avant la remise des clés.",
    href: "/fin-de-chantier-thonon",
  },
  {
    title: "État des lieux sortant",
    desc: "Préparation à la remise des clés pour les locataires qui quittent Bons-en-Chablais, vitres incluses, récupération de caution maximale.",
    href: "/etat-des-lieux-sortant-thonon",
  },
  {
    title: "Nettoyage textiles",
    desc: "Canapés, fauteuils, matelas, tapis. Injection-extraction sur place dans les pavillons et corps de ferme, séchage en quelques heures.",
    href: "/nettoyage-textiles-thonon",
  },
  {
    title: "Débarras Bons-en-Chablais",
    desc: "Vidage de pavillon, grange, cave ou corps de ferme avant vente ou succession. Tri, dons aux associations locales et recyclage en déchèterie.",
    href: "/debarras-thonon",
  },
  {
    title: "Entretien espaces verts",
    desc: "Tonte des pelouses, taille des haies, ramassage des feuilles, soufflage des cours et parkings des petites copropriétés résidentielles.",
    href: "/entretien-espaces-verts-thonon",
  },
  {
    title: "Nettoyage de commerce",
    desc: "Boutiques, restaurants, cabinets libéraux et agences du bourg. Passage avant l'ouverture ou après la fermeture au public selon vos horaires.",
    href: "/nettoyage-coproprietes-thonon",
  },
];

const COMMUNES = [
  "Bons-en-Chablais",
  "Cervens",
  "Brens",
  "Lully",
  "Saxel",
  "Boëge",
  "Lucinges",
  "Saint-André-de-Boëge",
];

const TESTIMONIALS = [
  {
    author: "Christophe Lacroix",
    date: "Octobre 2025",
    body: "Suite au départ d'un locataire, mon pavillon a été rendu dans un état lamentable. L'équipe de GH Services a fait un travail extraordinaire pour le remettre dans l'état initial avant la relocation à Bons.",
  },
  {
    author: "Shacy Will",
    date: "Avril 2025",
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top sur notre maison de Cervens. Je recommande cette société avec qui j'espère continuer de travailler à long terme.",
  },
  {
    author: "Famille Roy",
    date: "Septembre 2024",
    city: "Brens",
    body: "Très satisfaits du travail réalisé sur notre maison familiale après le déménagement. Monsieur Gharbi et son équipe se sont montrés réactifs, soigneux et le contact a été très agréable du début à la fin.",
  },
];

const FAQ = [
  {
    q: "Quel est le délai d'intervention depuis l'axe Thonon-Annemasse jusqu'à Bons ?",
    a: "Notre base opérationnelle est à Thonon-les-Bains. Sur l'axe Thonon-Annemasse, Bons-en-Chablais est à environ quinze minutes par la D903 hors heures de pointe, et vingt à vingt-cinq minutes en flux frontalier matin et soir. Pour les rendez-vous récurrents, nous calons les passages en milieu de journée ou en fin d'après-midi pour éviter les bouchons. Aucun frais kilométrique facturé sur la commune.",
  },
  {
    q: "Intervenez-vous sur les maisons neuves en fin de chantier autour de Bons ?",
    a: "Oui, c'est même une part importante de notre activité sur le secteur. Beaucoup de constructions neuves sont livrées chaque année à Bons-en-Chablais, Brens et Cervens. Nous intervenons sous 72 h après la fin du chantier avec un protocole en trois passes : dépoussiérage profond, retrait des résidus de plâtre et peinture, nettoyage des vitres et baies. Contrôle qualité signé avec le maître d'ouvrage avant remise des clés.",
  },
  {
    q: "Quelle distance entre Bons et la sortie A40 de Vétraz-Monthoux ?",
    a: "La sortie A40 numéro 14 à Vétraz-Monthoux est à environ douze minutes de Bons par la D907 puis la D2. Cet axe nous permet de rejoindre Annemasse et Genève rapidement, mais aussi de redescendre vers Annecy ou de remonter vers la Suisse. Pour les commerces et bureaux installés près de cet axe, nous proposons des créneaux compatibles avec les flux de circulation pendulaires.",
  },
  {
    q: "Travaillez-vous avec les syndics des copros récentes de Bons ?",
    a: "Oui. Plusieurs petites copropriétés résidentielles livrées ces dernières années à Bons-en-Chablais et Brens sont gérées par des syndics du Chablais avec lesquels nous avons signé des contrats au passage hebdomadaire ou bi-mensuel. Cahier de présence signé à chaque visite, attestation RC pro et décennale fournie au syndic, facture mensuelle TTC détaillée par bâtiment et par poste (halls, escaliers, locaux poubelles, abords).",
  },
  {
    q: "Vous intervenez aussi pour les agriculteurs en corps de ferme ?",
    a: "Oui, sur les bureaux de gestion, gîtes ruraux annexes, points de vente directe à la ferme et zones d'accueil du public des exploitations du plateau autour de Saxel, Cervens et Brens. Le nettoyage technique des bâtiments d'élevage proprement dit n'est pas notre métier, en revanche tout l'environnement de travail administratif et l'accueil de la clientèle l'est. Devis adapté à la double activité agricole et accueil.",
  },
  {
    q: "Les particuliers de Bons bénéficient-ils du crédit d'impôt ?",
    a: "Oui. Nos prestations à domicile pour les particuliers de Bons-en-Chablais entrent dans le cadre des services à la personne agréés. Vous récupérez 50 % de la facture annuelle sous forme de crédit d'impôt, plafond de 12 000 € de dépenses par foyer. Une attestation fiscale détaillée vous est transmise chaque début d'année pour votre déclaration de revenus. Avantage qui rend l'entretien régulier très accessible aux familles de la vallée.",
  },
  {
    q: "Proposez-vous un planning hebdomadaire pour les pavillons ?",
    a: "Oui. Pour les pavillons et maisons individuelles du bourg de Bons, beaucoup de familles préfèrent un passage hebdomadaire fixe, par exemple chaque mardi matin ou chaque vendredi après-midi. Cela permet une charge réduite à chaque visite et un budget lissé sur l'année. Pour les résidences secondaires ou les emplois du temps moins réguliers, nous proposons aussi un calendrier bi-mensuel ou mensuel adapté à votre rythme de vie.",
  },
  {
    q: "Et pour les entreprises de la zone artisanale de Bons ?",
    a: "Nous intervenons sur les bureaux, ateliers et locaux d'accueil de la zone artisanale de Bons-en-Chablais. Pour les TPE et PME du secteur, nous proposons des contrats d'entretien tri-hebdomadaire ou quotidien selon la fréquentation, avec gestion des consommables sanitaires (papier, savon, essuie-mains). Intervention possible avant 8 h ou après 18 h pour ne pas gêner l'activité, et un référent unique sur tous vos sites pour simplifier la gestion.",
  },
];

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/nettoyage-bons-en-chablais#localbusiness`,
  name: "GH Services, entreprise de nettoyage à Bons-en-Chablais",
  parentOrganization: { "@id": `${SITE_URL}/#localbusiness` },
  url: `${SITE_URL}/nettoyage-bons-en-chablais`,
  telephone: "+33684665523",
  areaServed: COMMUNES.map((c) => ({ "@type": "City", name: c })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bons-en-Chablais",
    addressRegion: "Haute-Savoie",
    postalCode: "74890",
    addressCountry: "FR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "17",
  },
  priceRange: "€€",
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-bons-en-chablais#service`,
  name: "Entreprise de nettoyage à Bons-en-Chablais",
  serviceType: "Nettoyage et ménage",
  description:
    "Nettoyage Bons-en-Chablais, Cervens et Brens. Pavillons, copropriétés récentes, fin de chantier, agriculteurs et professions libérales sur l'axe Thonon-Annemasse.",
  url: `${SITE_URL}/nettoyage-bons-en-chablais`,
  provider: { "@id": `${SITE_URL}/nettoyage-bons-en-chablais#localbusiness` },
  areaServed: COMMUNES.map((c) => ({ "@type": "City", name: c })),
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/nettoyage-bons-en-chablais#faq`,
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
      name: "Entreprise de nettoyage à Bons-en-Chablais",
      item: `${SITE_URL}/nettoyage-bons-en-chablais`,
    },
  ],
};

export default function NettoyageBonsEnChablaisPage() {
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
        {/* SECTION 1 - HERO V4 Geometric Split : gauche bg-cream avec titre, droite image pleine */}
        <section className="bg-cream">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
            {/* Colonne gauche : bloc cream avec titre, baseline et CTAs */}
            <div className="flex flex-col justify-center bg-cream-soft px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
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

              <h1 className="mt-6 font-display text-[34px] leading-[1.05] font-bold tracking-tight uppercase text-brown sm:text-[42px] md:text-[52px]">
                Entreprise de nettoyage à{" "}
                <span className="text-orange">Bons-en-Chablais</span> et vallée
                du Foron
              </h1>

              <p className="mt-6 max-w-xl text-base text-brown/80 sm:text-lg">
                Société de nettoyage installée à Thonon-les-Bains, à quinze
                minutes de Bons-en-Chablais sur l&apos;axe Thonon-Annemasse.
                Nous intervenons sur les pavillons du bourg, les copropriétés
                récentes, les commerces, les corps de ferme du plateau et les
                fins de chantier des constructions neuves. Une équipe locale
                stable, un interlocuteur unique, un devis sous 24 heures.
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

              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brown/70">
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  Axe Thonon-Annemasse 15 min
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  Sortie A40 Vétraz directe
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  Crédit d&apos;impôt 50 %
                </li>
              </ul>
            </div>

            {/* Colonne droite : image pleine bande */}
            <div className="relative min-h-[320px] lg:min-h-0">
              <Image
                src="/photos/cities/chablais-1.jpg"
                alt="Plateau du Chablais et secteur de Bons-en-Chablais, vallée du Foron, zone d'intervention de GH Services"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2 - Pour qui Bons : 6 personas */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Bons
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Six profils suivis sur Bons et la vallée du Foron
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Bons-en-Chablais combine bourg pavillonnaire en expansion,
                hameaux agricoles du plateau et zone résidentielle tournée vers
                Annemasse et Genève. Notre clientèle locale reflète ce mélange,
                des propriétaires de pavillons aux exploitants agricoles, des
                professions libérales aux artisans BTP qui terminent un
                chantier de construction neuve.
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

        {/* SECTION 3 - Notre approche à Bons : 4 points */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre approche à Bons
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Quatre engagements pour le secteur de Bons-en-Chablais
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Une entreprise de nettoyage à Bons doit composer avec la
                proximité d&apos;Annemasse, le tissu pavillonnaire et les
                rythmes des artisans qui livrent des maisons neuves. Voici la
                manière dont nous organisons nos interventions pour rester
                ponctuels, lisibles et accessibles.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {APPROCHE.map((point, idx) => (
                <li
                  key={point.title}
                  className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10"
                >
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                    Point {idx + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brown/75">
                    {point.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 4 - Spécificités Bons-en-Chablais */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités locales
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Bons-en-Chablais a ses propres règles
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Quinze ans d&apos;interventions sur le plateau Chablais nous
                  ont appris quatre choses sur ce que produit la géographie de
                  Bons : croissance résidentielle continue, axe autoroutier
                  proche, pollens de plaine et marché de la construction neuve
                  très actif. Quatre facteurs locaux à intégrer dans vos
                  fréquences d&apos;entretien.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  {SPECIFICITES.map((spec) => (
                    <li key={spec.title} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                      <span>
                        <strong>{spec.title} :</strong> {spec.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/chablais-4.jpg"
                  alt="Plaine du Chablais et zone pavillonnaire de Bons-en-Chablais, axe Thonon-Annemasse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - Nos services à Bons : 9 cards */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos services à Bons
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Neuf prestations couvrant tous les besoins
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                De l&apos;entretien hebdomadaire d&apos;un pavillon de Bons
                centre au débarras complet d&apos;un corps de ferme, de la fin
                de chantier d&apos;une maison neuve à Brens au contrat de
                copropriété d&apos;un petit collectif de Cervens. Toutes nos
                prestations sont conçues pour le tissu local et le rythme de
                vie de la vallée du Foron.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
                >
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brown/75">
                    {s.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 - Communes voisines vallée du Foron */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Communes voisines
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Vallée du Foron et plaine du Chablais
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre équipe se déplace dans tout le secteur de Bons, sur la
                vallée du Foron, le plateau de Boëge et la zone pavillonnaire
                vers Lucinges. Frais de déplacement offerts dans tout le bassin
                Bons-Cervens-Brens. Voici les huit communes principales
                couvertes au tarif du centre-bourg.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {COMMUNES.map((c) => (
                <li key={c}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 text-sm font-medium text-brown ring-1 ring-brown/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    {c}
                  </span>
                </li>
              ))}
            </ul>
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
                  Ce que disent nos clients de Bons
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
                Notre terrain
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Bons-en-Chablais, Cervens et plateau du Foron
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Trois vues du secteur où nos équipes interviennent au quotidien
                pour les pavillons, copropriétés et chantiers neufs. La plaine
                Chablais, ses zones résidentielles pavillonnaires et la sortie
                A40 vers Vétraz.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/chablais-1.jpg"
                  alt="Vallée du Foron à proximité de Bons-en-Chablais"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/chablais-4.jpg"
                  alt="Plaine du Chablais et axe Thonon-Annemasse autour de Bons"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/ville-6.jpg"
                  alt="Zone résidentielle pavillonnaire du secteur de Bons-en-Chablais"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 - FAQ locale Bons */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ Bons-en-Chablais
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Huit questions locales sur le ménage à Bons
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

            <div className="mt-12 rounded-3xl bg-cream p-6 ring-1 ring-brown/10">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Aller plus loin
              </p>
              <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-brown">
                Communes proches du secteur
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/nettoyage-douvaine"
                  className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 text-sm font-semibold text-brown ring-1 ring-brown/10 transition-colors hover:bg-brown hover:text-cream"
                >
                  Nettoyage Douvaine
                </Link>
                <Link
                  href="/nettoyage-annemasse"
                  className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 text-sm font-semibold text-brown ring-1 ring-brown/10 transition-colors hover:bg-brown hover:text-cream"
                >
                  Nettoyage Annemasse
                </Link>
                <Link
                  href="/fin-de-chantier-thonon"
                  className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 text-sm font-semibold text-brown ring-1 ring-brown/10 transition-colors hover:bg-brown hover:text-cream"
                >
                  Fin de chantier Thonon
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10 - CTA Devis */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Votre devis nettoyage à Bons-en-Chablais
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez votre besoin (pavillon, copropriété, fin de
                    chantier, corps de ferme, cabinet libéral, surface,
                    fréquence souhaitée). Réponse chiffrée sous 24 heures
                    ouvrées, par e-mail puis confirmation téléphonique.
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
                    Joignables 7 j/7. Réponse immédiate en heures ouvrées,
                    rappel garanti sous 4 h pour les messages laissés en
                    soirée.
                  </p>
                </a>

                <div className="rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-xs leading-relaxed text-red-900">
                  <span aria-hidden>⚠️ </span>
                  <strong>Aucun recrutement en cours.</strong>{" "}
                  Merci de ne pas téléphoner ni envoyer d&apos;e-mail pour une
                  candidature, les demandes spontanées ne sont pas traitées
                  par notre standard.
                </div>
              </aside>

              <ServiceQuoteForm
                serviceLabel="Nettoyage Bons-en-Chablais"
                source="bons_hub"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
