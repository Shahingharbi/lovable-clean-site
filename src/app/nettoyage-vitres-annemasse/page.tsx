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
  title: "Nettoyage de vitres à Annemasse",
  description:
    "Lavage de vitres pro à Annemasse, Ambilly, Étrembières. Eau osmosée, bureaux, vitrines, immeubles. Équipe pro Thonon. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-vitres-annemasse`,
  },
  openGraph: {
    title: "Nettoyage de vitres à Annemasse",
    description:
      "Lavage de vitres pro à Annemasse, Ambilly, Étrembières. Eau osmosée, bureaux, vitrines, immeubles. Équipe pro Thonon. Devis 24 h.",
    url: `${SITE_URL}/nettoyage-vitres-annemasse`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/ville-1.jpg",
        width: 1600,
        height: 900,
        alt: "Nettoyage de vitres professionnel à Annemasse",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Immeubles bureaux centre Annemasse",
    desc: "Plateaux open-space, façades vitrées tertiaires, salles de réunion en verre du centre d'Annemasse. Lavage à la perche fibre carbone depuis le trottoir, créneau matinal ou en soirée pour ne pas gêner les équipes en activité.",
  },
  {
    title: "Agences frontaliers Genève",
    desc: "Agences immobilières, banques privées, sociétés de gestion de patrimoine qui captent une clientèle frontalière Genève. Vitrines affichant des biens à louer, double vitrage à laver recto-verso une fois par semaine.",
  },
  {
    title: "Commerces gare CEVA",
    desc: "Boutiques et services autour de la gare CEVA Léman Express : presse, sandwicheries, agences de voyage, opticiens. Vitrines exposées au flux pendulaire des frontaliers et à la poussière fine du ballast.",
  },
  {
    title: "Copropriétés récentes Ville-la-Grand",
    desc: "Résidences neuves R+5 à R+8 livrées ces dix dernières années à Ville-la-Grand, garde-corps en verre, vitres d'imposte du hall et baies des cages d'escalier. Perche carbone 12 m sans nacelle pour les étages bas.",
  },
  {
    title: "Restaurants Étrembières",
    desc: "Établissements de restauration côté Étrembières, sortie autoroute A40 et zone douane. Devantures grasses exposées au trafic poids lourds, traitement dégraissant biodégradable sur le vitrage extérieur.",
  },
  {
    title: "Vitrines galerie marchande Chablais Parc",
    desc: "Boutiques et enseignes de la galerie commerciale Chablais Parc, vitrines intérieures sous éclairage néon qui marquent toutes les traces. Microfibre technique et finition raclette pour une lisibilité parfaite des présentations.",
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
  "Juvigny",
];

const FAQ = [
  {
    q: "Comment lavez-vous les vitres d'immeubles bureaux Annemasse en hauteur ?",
    a: "Sur les immeubles tertiaires du centre d'Annemasse et de la zone CEVA, nous travaillons à la perche télescopique en fibre de carbone alimentée en eau osmosée, jusqu'à 12 mètres depuis le sol, soit les étages R+1 à R+4. Cela couvre la grande majorité des plateaux de bureaux annemassiens sans recours à une nacelle. Pour les façades vitrées plus hautes (R+5 et au-delà), nous mobilisons une nacelle articulée louée à la journée ou un cordiste, avec un devis spécifique chiffré sur place après visite de la façade.",
  },
  {
    q: "Vous lavez les vitrines de la galerie marchande Chablais Parc ?",
    a: "Oui, nous intervenons régulièrement sur les vitrines de boutiques de la galerie marchande Chablais Parc, en intérieur comme en extérieur de la zone commerciale. Les vitrines intérieures sous éclairage néon de la galerie marquent fortement les traces : nous utilisons une raclette caoutchouc Unger ou Ettore avec finition microfibre technique sur les bords. Lavage avant ouverture, généralement entre 7 h 30 et 9 h 30, validation visuelle avec le gérant avant départ.",
  },
  {
    q: "Vous travaillez avec les agences immobilières de la frontière ?",
    a: "Oui, c'est un de nos profils récurrents sur Annemasse, Gaillard et Ambilly. Les agences immobilières frontalières affichent des annonces collées en vitrine, qui imposent un lavage hebdomadaire pour préserver la lisibilité des biens présentés. Passage avant 10 h du matin, intérieur et extérieur, traitement séparé des traces de doigts à l'intérieur dues au passage des prospects en consultation des annonces.",
  },
  {
    q: "Quelle fréquence à cause de la pollution de l'A40 ?",
    a: "Pour les vitrines et façades vitrées exposées directement à l'A40 ou à la D1206 (rocade nord, route de Genève), nous recommandons un passage hebdomadaire en période sèche. Les particules diesel, résidus de freinage et poussière de roulement noircissent rapidement le vitrage en première ligne. À l'inverse, un local situé en retrait (cour, parking interne) tient deux à trois semaines sans dégradation visible. Le devis chiffre ces deux scénarios séparément.",
  },
  {
    q: "Avez-vous le matériel pour une façade en verre récente ?",
    a: "Oui. Les immeubles tertiaires récents d'Annemasse et de Ville-la-Grand utilisent souvent du vitrage à contrôle solaire, du verre feuilleté ou du double vitrage à isolation renforcée. Notre eau osmosée (totalement déminéralisée) est compatible avec tous ces traitements de surface, contrairement à certains détergents agressifs. Brosse fibre douce, pression contrôlée, aucun produit alcalin qui pourrait attaquer les joints néoprène ou silicone des façades modernes.",
  },
  {
    q: "Vous intervenez sur quels horaires pour les bureaux Annemasse ?",
    a: "Pour les locaux professionnels du centre d'Annemasse et du quartier CEVA, nous évitons systématiquement la plage 9 h, 18 h. Deux créneaux disponibles : lavage matinal entre 6 h 30 et 8 h 30 avant l'arrivée des collaborateurs, ou lavage en fin de journée à partir de 19 h. Pour les commerces, créneau avant ouverture entre 7 h et 9 h. L'horaire est fixé au devis et reste stable d'un passage à l'autre pour faciliter la gestion d'accès et de badge.",
  },
  {
    q: "Quelle distance depuis Thonon pour une intervention vitres ?",
    a: "Notre base est à Thonon-les-Bains. Pour rejoindre Annemasse, nous comptons 30 à 40 minutes par l'A40 selon le trafic frontalier du matin. Ce temps de trajet est intégré dans notre planning hebdomadaire et n'est jamais répercuté sur la facture vitres. Le tarif au m² reste strictement identique à Annemasse, Ambilly, Étrembières ou Ville-la-Grand par rapport à Thonon. Aucun frais kilométrique sur cette zone du Genevois français.",
  },
  {
    q: "Crédit d'impôt 50 % pour un particulier à Annemasse ?",
    a: "Oui, pour une intervention vitres à domicile chez un particulier résident d'Annemasse, Ambilly, Étrembières ou des communes voisines, nos prestations entrent dans le cadre des services à la personne agréés. Vous récupérez 50 % du montant TTC de la facture sous forme de crédit d'impôt, attestation fiscale fournie en début d'année suivante. Cela concerne le lavage de vitres d'une maison individuelle ou d'un appartement, pas les locaux professionnels ni les copropriétés.",
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
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top. Je recommande cette société avec qui j'espère continuer de travailler.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif et avec lequel le contact a été très agréable.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-vitres-annemasse#service`,
  name: "Nettoyage de vitres à Annemasse",
  serviceType: "Nettoyage de vitres",
  description:
    "Lavage de vitres professionnel à Annemasse et dans le grand Genevois français. Bureaux du centre, agences frontaliers, commerces gare CEVA, copropriétés Ville-la-Grand, restaurants Étrembières, vitrines galerie Chablais Parc. Eau osmosée, perche fibre carbone jusqu'à 12 m.",
  url: `${SITE_URL}/nettoyage-vitres-annemasse`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: [
    { "@type": "City", name: "Annemasse" },
    ...ZONES.filter((z) => z !== "Annemasse").map((c) => ({
      "@type": "City",
      name: c,
    })),
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "2.50",
    highPrice: "5.00",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceType: "https://schema.org/MinimumPrice",
      price: "2.50",
      priceCurrency: "EUR",
      unitText: "m² par passage",
    },
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
  "@id": `${SITE_URL}/nettoyage-vitres-annemasse#faq`,
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
      name: "Nettoyage de vitres",
      item: `${SITE_URL}/nettoyage-vitres-thonon`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Annemasse",
      item: `${SITE_URL}/nettoyage-vitres-annemasse`,
    },
  ],
};

export default function NettoyageVitresAnnemassePage() {
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
            <Link
              href="/nettoyage-vitres-thonon"
              className="hover:text-orange"
            >
              Nettoyage de vitres
            </Link>
            <span className="mx-2 text-brown/30">/</span>
            <span className="text-brown/75">Annemasse</span>
          </div>
        </nav>

        {/* SECTION 1 - HERO V1 CLASSIC BROWN avec ville-1.jpg */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/cities/ville-1.jpg"
              alt="Vue urbaine d'Annemasse, zone d'intervention vitres de GH Services"
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
              Nettoyage de vitres à{" "}
              <span className="text-orange">Annemasse</span> et grand Genevois
              français
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Laveur de vitres professionnel sur Annemasse, Ambilly,
              Étrembières et toute la première couronne du Genevois français.
              Nous traitons les immeubles bureaux du centre, les vitrines des
              commerces frontaliers, les façades vitrées d&apos;agences proches
              de la douane, les copropriétés récentes de Ville-la-Grand et les
              vitrines de la galerie marchande Chablais Parc, à l&apos;eau
              osmosée et à la perche fibre de carbone. Équipe pro basée à
              Thonon, devis chiffré sous 24 heures.
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
                Eau osmosée Annemasse
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Perche fibre carbone 12 m
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Bureaux, vitrines, immeubles
              </li>
            </ul>
          </div>
        </section>

        {/* INTRO SPECIFIQUE VITRES À ANNEMASSE */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-[920px] px-6 lg:px-12">
            <p className="text-base leading-7 text-brown/85 md:text-lg md:leading-8">
              Le nettoyage de vitres à Annemasse n&apos;a rien à voir avec celui
              d&apos;une ville lacustre classique. Ici, la deuxième
              agglomération de Haute-Savoie concentre un tissu urbain dense :
              immeubles bureaux du centre, façades vitrées d&apos;agences le
              long de la rue de Genève, vitrines de la galerie marchande
              Chablais Parc et restaurants côté Étrembières en sortie de douane.
              Trois logiques très différentes qui demandent un matériel et un
              rythme adaptés. Notre équipe lave chaque semaine ces vitres pro
              dans tout le grand Genevois français, de Gaillard à
              Vétraz-Monthoux. Sur cette page, nous détaillons notre méthode
              vitres pour le contexte annemassien : eau osmosée contre le
              calcaire fort de la frontière, perche carbone 12 m pour les
              bureaux et copropriétés en hauteur, créneaux décalés pour ne pas
              gêner les commerces et plateaux tertiaires.
            </p>
          </div>
        </section>

        {/* SECTION 2 - POUR QUI VITRES À ANNEMASSE */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Six profils vitres à Annemasse
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Lavage vitres bureaux Annemasse, vitres immeuble Annemasse,
                vitres pro Étrembières ou vitrines en zone frontalière : six
                profils de clients vitres typiques du centre d&apos;Annemasse
                et de sa première couronne, chacun avec ses contraintes propres
                de hauteur, d&apos;accès et de fréquence.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PERSONAS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl bg-cream p-6 ring-1 ring-brown/10"
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

        {/* SECTION 3 - METHODE PRO VITRES ANNEMASSE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre méthode pro vitres Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Quatre étapes adaptées au contexte annemassien
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le calcaire fort du Genevois français, les vitres en hauteur des
                bureaux du centre et les vitrines de commerces frontaliers
                imposent un protocole précis. Voici comment nos laveurs de
                vitres structurent chaque passage à Annemasse.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Eau osmosée contre le calcaire
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  L&apos;eau du réseau à Annemasse et sur la frontière franco
                  suisse est particulièrement calcaire. Nous travaillons
                  exclusivement à l&apos;eau osmosée déminéralisée, qui sèche
                  sans laisser le moindre voile minéral blanc sur le vitrage.
                </p>
              </li>
              <li className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Perche carbone 12 m bureaux
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Perche télescopique en fibre de carbone alimentée en eau
                  osmosée, jusqu&apos;à 12 mètres depuis le sol. Couvre les
                  façades vitrées d&apos;immeubles bureaux du centre
                  d&apos;Annemasse et les cages d&apos;escalier vitrées des
                  copros récentes Ville-la-Grand sans aucune nacelle.
                </p>
              </li>
              <li className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Raclette finition vitrines hautes
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Pour les vitrines hautes des commerces de la galerie Chablais
                  Parc et des restaurants Étrembières, mouilleur Unger et
                  raclette caoutchouc Ettore. Finition manuelle vitre par
                  vitre, sans la moindre coulure ni jonction visible à
                  contre-jour.
                </p>
              </li>
              <li className="rounded-3xl bg-cream-soft p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Séchage microfibre intérieur
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  À l&apos;intérieur des plateaux de bureaux et des cabinets, on
                  abandonne l&apos;eau pour la microfibre technique sèche.
                  Aucun produit, aucune odeur, aucune projection sur les
                  postes de travail. Méthode propre, discrète, conforme au
                  travail en environnement tertiaire.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SECTION 4 - SPECIFICITES VITRAGE ANNEMASSE */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités vitrage Annemasse
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Pourquoi les vitres salissent ici autrement
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Pas de lac, pas de mouettes, pas d&apos;embruns. À Annemasse,
                  les vitres se salissent autrement et plus vite que dans le
                  Chablais lémanique. Quatre facteurs locaux qui modifient
                  notre protocole vitres.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Pollution autoroute A40 :</strong> les vitres des
                      bureaux exposés à l&apos;A40 et à la D1206 noircissent
                      très vite à cause des particules diesel et des résidus de
                      freinage du trafic transfrontalier. Lavage rapproché
                      indispensable pour les façades vitrées en première ligne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Vitrines exposées trafic frontalier :</strong> le
                      flux touristique et pendulaire vers Genève sature la
                      rue de Genève, la place de la Provence et les abords de
                      la douane. Empreintes de doigts, traces de sacs, dépôts
                      gras de pollution piétonne sur les vitrines de commerces.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Immeubles modernes verre Ville-la-Grand :</strong>{" "}
                      les copropriétés récentes R+5 à R+8 livrées à
                      Ville-la-Grand multiplient les surfaces vitrées :
                      garde-corps, baies, cages d&apos;escalier verre,
                      brise-soleil. Notre perche carbone 12 m couvre ces étages
                      bas sans coût de nacelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Vitrages commerces galerie Chablais Parc :</strong>{" "}
                      les vitrines intérieures de la galerie marchande Chablais
                      Parc sont éclairées en néon continu, ce qui révèle la
                      moindre trace. Raclette pro et microfibre technique pour
                      une lisibilité parfaite des présentations produits.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/ville-2.jpg"
                  alt="Quartier d'Annemasse, contexte urbain dense des interventions vitres"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - TARIFS VITRES ANNEMASSE */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Tarifs vitrage Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Abonnement pro à partir de 2,50 € HT le m²
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Trois formules d&apos;abonnement pro pour les bureaux,
                commerces et immeubles d&apos;Annemasse, plus une intervention
                ponctuelle pour les particuliers avec crédit d&apos;impôt 50 %.
                Tous les tarifs sont indiqués en hors taxes.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-green-700">
                  Essentiel
                </span>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                  5,00 €{" "}
                  <span className="text-base font-medium text-brown/60">
                    HT/m²/passage
                  </span>
                </p>
                <p className="mt-1 text-sm text-brown/60">1 passage par mois</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Idéal cabinet ou agence
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Intérieur + extérieur
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Sans engagement
                  </li>
                </ul>
              </div>

              <div className="relative rounded-3xl bg-orange p-7 text-cream ring-2 ring-orange/40">
                <span className="absolute -top-3 right-6 rounded-full bg-cream px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-orange">
                  Le plus choisi
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-cream/90">
                  Confort
                </span>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                  3,50 €{" "}
                  <span className="text-base font-medium text-cream/80">
                    HT/m²/passage
                  </span>
                </p>
                <p className="mt-1 text-sm text-cream/80">
                  2 passages par mois
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Idéal immeubles bureaux centre
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Cloisons internes incluses
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Créneau fixe hors heures pleines
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Premium
                </span>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                  2,50 €{" "}
                  <span className="text-base font-medium text-brown/60">
                    HT/m²/passage
                  </span>
                </p>
                <p className="mt-1 text-sm text-brown/60">
                  4 passages par mois (hebdomadaire)
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Idéal vitrines Chablais Parc
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Tarif au m² le plus avantageux
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Devanture nette en continu
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Ponctuel particulier, devis 24 h
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Pour un particulier résident d&apos;Annemasse, Ambilly ou
                  Étrembières, intervention ponctuelle sur devis chiffré sous
                  24 heures. Maison individuelle ou appartement, surface
                  mesurée sur place ou par photos. Forfait minimum 80 € HT.
                </p>
              </div>
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Crédit d&apos;impôt 50 % particuliers
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Nos prestations vitres à domicile entrent dans le cadre des
                  services à la personne agréés. Vous récupérez 50 % de la
                  facture TTC sous forme de crédit d&apos;impôt, attestation
                  fiscale fournie en janvier de l&apos;année suivante.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - ZONES INTERVENTION VITRES */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones d&apos;intervention vitres
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Dix communes vitres Annemasse couvertes
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre laveur de vitres intervient chaque semaine sur Annemasse
                et l&apos;ensemble de sa couronne, des bureaux du centre aux
                vitrines pro d&apos;Étrembières en passant par les copros de
                Ville-la-Grand. Aucun frais de déplacement facturé, tarif
                vitres au m² identique d&apos;une commune à l&apos;autre.
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

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <Link
                href="/nettoyage-vitres-thonon"
                className="inline-flex items-center gap-2 rounded-full bg-brown px-4 py-2 font-medium text-cream hover:bg-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Nettoyage vitres Thonon
              </Link>
              <Link
                href="/nettoyage-annemasse"
                className="inline-flex items-center gap-2 rounded-full bg-brown px-4 py-2 font-medium text-cream hover:bg-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Entreprise nettoyage Annemasse
              </Link>
              <Link
                href="/menage-annemasse"
                className="inline-flex items-center gap-2 rounded-full bg-brown px-4 py-2 font-medium text-cream hover:bg-orange"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Ménage Annemasse
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7 - TEMOIGNAGES */}
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

        {/* SECTION 8 - GALERIE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Sur le terrain
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Galerie vitres Annemasse
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Vues du contexte urbain où nos laveurs interviennent chaque
                semaine : centre dense d&apos;Annemasse, quartiers tertiaires
                proches de la gare CEVA et façades vitrées des immeubles
                bureaux.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:row-span-2 lg:aspect-auto">
                <Image
                  src="/photos/cities/ville-1.jpg"
                  alt="Centre d'Annemasse avec immeubles bureaux et façades vitrées"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:aspect-[4/3]">
                <Image
                  src="/photos/cities/ville-2.jpg"
                  alt="Quartier d'Annemasse, copropriétés et immeubles à vitres"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 lg:aspect-[4/3]">
                <Image
                  src="/photos/service-vitres.jpg"
                  alt="Laveur de vitres en intervention à la perche fibre carbone"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 - FAQ VITRES ANNEMASSE */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ vitres Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Vos questions vitres à Annemasse
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

        {/* SECTION 10 - CTA FINAL */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Demandez votre devis vitres Annemasse
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Précisez le type de local (immeuble bureaux, vitrine pro,
                    copropriété, restaurant), la surface vitrée approximative,
                    la hauteur et la fréquence souhaitée. Notre équipe vitres
                    revient vers vous sous 24 heures avec un devis chiffré.
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
                    Équipe vitres Annemasse joignable 7 j / 7. Réponse
                    immédiate en heures ouvrées.
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
                serviceLabel="Nettoyage de vitres Annemasse"
                source="vitres_annemasse"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
