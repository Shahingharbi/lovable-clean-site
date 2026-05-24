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
    "Nettoyage de vitres à Thonon-les-Bains : eau osmosée, sans traces",
  description:
    "Lavage de vitres pro à Thonon, Évian et Léman. Eau osmosée, perche carbone, sans traces. Particuliers, copropriétés, vérandas, commerces. Devis 24h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-vitres-thonon`,
  },
  openGraph: {
    title: "Nettoyage de vitres à Thonon-les-Bains",
    description:
      "Lavage de vitres pro à Thonon, Évian et Léman. Eau osmosée, perche carbone, sans traces. Particuliers, copropriétés, vérandas, commerces.",
    url: `${SITE_URL}/nettoyage-vitres-thonon`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-vitres.jpg",
        width: 1600,
        height: 900,
        alt: "Laveurs de vitres professionnels à Thonon-les-Bains",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Particuliers",
    desc: "Vitres de maison, baies vitrées, fenêtres de toit Velux. Crédit d'impôt 50 % pour les services à domicile.",
  },
  {
    title: "Copropriétés et syndics",
    desc: "Parties communes, halls vitrés, garde-corps verre, vitres d'immeubles à Thonon, Évian et Annemasse.",
  },
  {
    title: "Vérandas et verrières",
    desc: "Toits verriers, parois verticales, structures aluminium. Traitement spécifique des algues et dépôts verts du Chablais.",
  },
  {
    title: "Résidences secondaires et chalets",
    desc: "Entretien régulier ou avant arrivée, rives du Léman, Yvoire, Saint-Gingolph, secteur frontalier de Genève.",
  },
  {
    title: "Commerces et vitrines",
    desc: "Magasins, restaurants, agences. Formules d'abonnement à partir de 2,50 € HT par m² (passage hebdomadaire).",
  },
  {
    title: "Bureaux et locaux pros",
    desc: "Façades vitrées, cloisons internes, baies bureau. Intervention en horaires décalés possible.",
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

const FAQ = [
  {
    q: "À quelle fréquence faut-il nettoyer ses vitres à Thonon ?",
    a: "Sur le bassin lémanique, comptez 2 à 4 passages par an pour des vitres résidentielles, 1 passage par mois pour une vitrine commerciale, et un nettoyage hebdomadaire pour les bureaux exposés à la pollution routière. Les vitres exposées au lac (embruns) ou aux pollens d'avril à juin se salissent plus vite.",
  },
  {
    q: "Vous nettoyez les vitres en hauteur ?",
    a: "Oui. Nous travaillons à la perche télescopique en fibre de carbone alimentée en eau osmosée jusqu'à 12 mètres, sans nacelle ni échafaudage. Au-delà, nous mobilisons une nacelle ou un cordiste selon la configuration. Tous nos intervenants sont formés au travail en hauteur et équipés EPI.",
  },
  {
    q: "Pourquoi utilisez-vous de l'eau osmosée ?",
    a: "L'eau osmosée (eau pure, sans calcaire ni minéraux) sèche sans laisser la moindre trace. C'est la méthode pro qui remplace la raclette traditionnelle sur les surfaces difficiles d'accès. Sur le Léman, où l'eau du robinet est calcaire, c'est indispensable pour un résultat irréprochable.",
  },
  {
    q: "Le mauvais temps annule l'intervention ?",
    a: "Non, contrairement à ce qu'on imagine, la pluie n'altère pas la qualité d'un lavage à l'eau osmosée. Seul le vent fort ou le gel suspendent l'intervention pour des raisons de sécurité. Vous êtes prévenu la veille et la prestation est reportée gratuitement.",
  },
  {
    q: "Combien de temps tiennent les vitres propres après votre passage ?",
    a: "En extérieur, comptez environ 4 à 8 semaines selon l'exposition. En intérieur, plusieurs mois sans entretien. Une vitrine commerciale en bordure de route restera nette environ 2 à 3 semaines, d'où nos formules d'abonnement.",
  },
  {
    q: "Vos produits sont écologiques ?",
    a: "Oui. Pour les vitres simples nous travaillons uniquement à l'eau osmosée, sans détergent. Quand un détergent est nécessaire (graisse cuisine, traces de pollution), nous utilisons des produits biodégradables, sans solvant. Aucun rejet polluant pour le bassin du Léman.",
  },
  {
    q: "Quelle est la durée d'une intervention type ?",
    a: "Pour un appartement T3 (environ 30 m² de surface vitrée intérieure + extérieure), comptez 1h30 à 2h. Une vitrine commerciale de 20 m² prend 45 minutes. Une véranda de 25 m² environ 2h. Nous communiquons une fenêtre horaire précise lors du devis.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Devis gratuit sous 24h, validation par e-mail, intervention planifiée, facture après réalisation. Paiement par virement, chèque ou CB. Pour les particuliers, attestation de crédit d'impôt fournie automatiquement (50 % de réduction sur services à la personne).",
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
    body: "Nous avons fait appel aux services de nettoyage de GH Services à notre entière satisfaction. Il s'agissait du nettoyage de notre maison avant remise des clés.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-vitres-thonon#service`,
  name: "Nettoyage de vitres à Thonon-les-Bains",
  serviceType: "Nettoyage de vitres",
  description:
    "Lavage de vitres professionnel à l'eau osmosée et à la perche fibre de carbone. Particuliers, copropriétés, vérandas, commerces sur Thonon, Évian, Annemasse et tout le Chablais lémanique.",
  url: `${SITE_URL}/nettoyage-vitres-thonon`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
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
  "@id": `${SITE_URL}/nettoyage-vitres-thonon#faq`,
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
      name: "Nettoyage de vitres à Thonon",
      item: `${SITE_URL}/nettoyage-vitres-thonon`,
    },
  ],
};

export default function NettoyageVitresThononPage() {
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
              src="/photos/service-vitres.jpg"
              alt="Laveurs de vitres en intervention sur une façade vitrée à Thonon-les-Bains"
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
              <span className="text-orange">Thonon-les-Bains</span>{" "}
              et en région lémanique
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Lavage de vitres professionnel à l&apos;eau osmosée et à la perche
              fibre de carbone, sans la moindre trace. Particuliers,
              copropriétés, vérandas, vitrines de commerce et bureaux pros sur
              Thonon, Évian, Annemasse et tout le Chablais lémanique. Devis
              gratuit sous 24 heures.
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
                Eau osmosée, sans calcaire
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Perche fibre carbone jusqu&apos;à 12 m
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Crédit d&apos;impôt 50 % particuliers
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
                Particuliers, syndics, commerces, hôteliers
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous intervenons pour tout type de surface vitrée : vitres
                simples, double vitrage, baies vitrées, vérandas, verrières,
                fenêtres de toit Velux, garde-corps en verre, vitrines
                commerciales et façades d&apos;immeubles.
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
                Eau osmosée et perche fibre de carbone, zéro trace
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous utilisons les techniques professionnelles modernes du
                lavage de vitres, abandonnées par les laveurs amateurs et la
                grande distribution. Résultat irréprochable sur double vitrage,
                vitre teintée, miroir et véranda.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Diagnostic
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Visite sur place ou par photos, mesure des surfaces vitrées,
                  identification des contraintes (hauteur, accès, type de
                  vitrage) et devis chiffré sous 24 heures.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Préparation
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Protection des sols et joints, dépoussiérage des cadres,
                  retrait des dépôts grossiers (fientes, sève, autocollants).
                  EPI et balisage pour les interventions en hauteur.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Lavage pro
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Mouilleur professionnel, raclette Unger ou Ettore au sol.
                  Perche télescopique fibre de carbone alimentée en eau osmosée
                  pour les hauteurs jusqu&apos;à 12 m, sans nacelle.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Contrôle qualité
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Inspection vitre par vitre à contre-jour, finition microfibre
                  sur les bords si nécessaire. Validation avec le client avant
                  facturation. Garantie satisfait ou refait.
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
                  Spécificités du Léman
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Les vitres du Chablais salissent différemment
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Quinze ans d&apos;intervention sur le bassin lémanique nous
                  ont appris une chose : ici, les vitres ne se salissent pas
                  comme ailleurs. Quatre facteurs locaux à connaître.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Embruns lacustres et calcaire :</strong> les vents
                      du Léman déposent un voile minéral blanc sur les vitres
                      des rives. L&apos;eau osmosée est la seule technique qui
                      l&apos;élimine sans rayer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Pollens d&apos;avril à juin :</strong> bouleaux,
                      peupliers et graminées créent une pellicule jaune collante
                      qui sèche au soleil. Nécessite un mouillage abondant avant
                      raclage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Fientes de mouettes :</strong> en bord de lac
                      (Thonon Rives, Yvoire, Évian) le risque d&apos;acidité
                      sur le vitrage augmente. Intervention rapide
                      recommandée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Algues vertes sur vérandas :</strong> humidité
                      ambiante du Chablais favorise les dépôts biologiques sur
                      les toits verriers. Détergent biodégradable pour les
                      retirer.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/lac-leman.jpg"
                  alt="Vue du Lac Léman depuis Thonon-les-Bains, contexte d'intervention de GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TARIFS */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Tarifs transparents
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Abonnement pro à partir de 2,50 € HT par m²
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Trois formules d&apos;abonnement pour les commerces, vitrines
                et locaux pros. Pour les particuliers, intervention ponctuelle
                sur devis. Tous les tarifs sont indiqués en hors taxes.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-green-700">
                  Essentiel
                </span>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                  5,00 € <span className="text-base font-medium text-brown/60">HT/m²/passage</span>
                </p>
                <p className="mt-1 text-sm text-brown/60">1 passage par mois</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Intérieur et extérieur
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Accès standard
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Sans engagement de durée
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
                  3,50 € <span className="text-base font-medium text-cream/80">HT/m²/passage</span>
                </p>
                <p className="mt-1 text-sm text-cream/80">2 passages par mois</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Priorité planning
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Résultat sans traces garanti
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Idéal pour vitrines fréquentées
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Premium
                </span>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                  2,50 € <span className="text-base font-medium text-brown/60">HT/m²/passage</span>
                </p>
                <p className="mt-1 text-sm text-brown/60">4 passages par mois (hebdomadaire)</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Image impeccable toute l&apos;année
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Tarif le plus avantageux au m²
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Idéal commerces très exposés
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Exemple concret
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Vitrine de magasin, 20 m², 1 passage par mois
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Intérieur et extérieur, accès de plain-pied, résultat sans
                  traces vérifié.
                </p>
              </div>
              <div className="mt-4 inline-flex items-baseline gap-2 rounded-2xl bg-orange px-6 py-4 md:mt-0">
                <span className="font-display text-4xl font-bold tracking-tight text-cream">
                  50 €
                </span>
                <span className="text-sm font-medium text-cream/90">
                  HT par intervention
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Particuliers : intervention ponctuelle
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Devis personnalisé sur place ou par photos. Pour une maison
                  individuelle, comptez en moyenne 80 à 180 € selon surface et
                  hauteur. Possibilité d&apos;abonnement saisonnier
                  (printemps/automne).
                </p>
              </div>
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Crédit d&apos;impôt 50 %
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Pour les particuliers à domicile, nos prestations entrent
                  dans le cadre des services à la personne agréés. Vous
                  récupérez 50 % de la facture sous forme de crédit
                  d&apos;impôt, attestation fournie en fin d&apos;année.
                </p>
              </div>
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
                Notre équipe se déplace dans tout le bassin lémanique français,
                de Genève à Saint-Gingolph. Frais de déplacement offerts
                jusqu&apos;à 25 km autour de Thonon-les-Bains.
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

        {/* FAQ */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Tout ce que vous voulez savoir
              </h2>
            </div>

            <div className="mt-10 divide-y divide-brown/10 rounded-3xl bg-cream-soft ring-1 ring-brown/10">
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

        {/* SERVICES CONNEXES */}
        <section className="bg-cream-soft py-16">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
              Services connexes
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-brown sm:text-3xl md:text-[36px] md:leading-[1.1]">
              Autres prestations à Thonon-les-Bains
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link
                href="/fin-de-chantier-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage fin de chantier
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Remise à neuf après travaux, dépoussiérage profond, retrait
                  des résidus de peinture sur les vitres.
                </p>
              </Link>
              <Link
                href="/nettoyage-coproprietes-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage copropriétés
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Parties communes, halls vitrés, cages d&apos;escalier,
                  contrats syndic adaptés au volume.
                </p>
              </Link>
              <Link
                href="/etat-des-lieux-sortant-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage état des lieux sortant
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Préparation à la remise des clés, vitres incluses, pour
                  récupérer 100 % de votre caution.
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
                    Recevez votre devis nettoyage de vitres
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre besoin (surface vitrée, type de
                    bâtiment, fréquence souhaitée). Réponse chiffrée sous 24
                    heures ouvrées.
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
                serviceLabel="Nettoyage de vitres"
                source="vitres_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
