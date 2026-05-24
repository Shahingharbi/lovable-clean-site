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
  title: "Société de ménage à Thonon-les-Bains",
  description:
    "Société de ménage à domicile à Thonon, Évian et Chablais. Équipe salariée déclarée, intervenant fixe, crédit impôt 50%. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/menage-thonon-les-bains`,
  },
  openGraph: {
    title: "Société de ménage à Thonon-les-Bains",
    description:
      "Société de ménage à domicile à Thonon, Évian et Chablais. Équipe salariée déclarée, intervenant fixe, crédit impôt 50%. Devis 24 h.",
    url: `${SITE_URL}/menage-thonon-les-bains`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/showcase-team.jpg",
        width: 1600,
        height: 900,
        alt: "Équipe de ménage salariée GH Services à Thonon-les-Bains",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Particuliers actifs",
    desc: "Vous travaillez à plein temps et souhaitez retrouver un logement propre sans y consacrer vos soirées. Intervenant fixe, jours et horaires choisis ensemble.",
  },
  {
    title: "Familles avec enfants",
    desc: "Maisons et appartements à Thonon, Allinges, Sciez. Sols, sanitaires, cuisine, vitres intérieures, repassage à domicile sur option. Produits doux pour la famille.",
  },
  {
    title: "Télétravailleurs",
    desc: "Bureau à domicile, salons partagés, espaces de visioconférence. Passage discret en demi-journée, dans le respect de votre rythme de travail.",
  },
  {
    title: "Seniors autonomes",
    desc: "Aide ménagère pour personne âgée à domicile, suivi attentif, intervenant unique pour créer un vrai lien de confiance. CESU préfinancé accepté.",
  },
  {
    title: "Propriétaires en résidence principale",
    desc: "Entretien hebdomadaire ou bi-mensuel sur Évian, Publier, Anthy-sur-Léman, Excenevex. Contrat clair, sans engagement de durée minimale.",
  },
  {
    title: "Frontaliers suisses",
    desc: "Employés frontaliers cherchant à gagner du temps libre. Intervention en journée pendant que vous êtes à Genève ou Lausanne, restitution du logement impeccable.",
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
    q: "Comment fonctionne le crédit impôt 50% ?",
    a: "Le ménage à domicile entre dans le cadre des services à la personne (SAP). Vous bénéficiez d'un crédit d'impôt de 50% sur le montant facturé. Depuis 2022, l'avance immédiate Urssaf permet de ne payer que 50% dès la facture, sans attendre la déclaration de revenus. Nous fournissons l'attestation fiscale Urssaf chaque année.",
  },
  {
    q: "C'est toujours la même personne qui vient ?",
    a: "Oui. Le principe de l'intervenant fixe est au cœur de notre démarche. Vous avez la même personne à chaque passage, qui connaît votre logement, vos préférences et vos exigences. Cela évite les explications répétées et bâtit une vraie relation de confiance, à l'inverse des plateformes anonymes.",
  },
  {
    q: "Quelle différence avec une plateforme type Wecasa ?",
    a: "Nos intervenants sont salariés déclarés de GH Services, pas des auto-entrepreneurs anonymes recrutés à la demande. Vous avez un contrat clair avec une société locale basée à Thonon, un interlocuteur unique, et une équipe stable. Pas d'application opaque, pas d'inconnu qui sonne à la porte, et une couverture assurance professionnelle complète.",
  },
  {
    q: "Vous fournissez le matériel et les produits ?",
    a: "Sur demande, oui. Par défaut, nous utilisons vos produits afin de respecter vos préférences (écologiques, hypoallergéniques, parfums). Si vous préférez tout déléguer, nous apportons aspirateur, microfibres et gamme professionnelle biodégradable, sans surcoût significatif. C'est discuté dans le devis.",
  },
  {
    q: "Repassage inclus ?",
    a: "Le repassage à domicile est proposé en option, intégré au temps de présence ou sur créneau dédié. Chemises, draps, linge délicat. Il s'inclut directement dans les heures du forfait, donc dans le crédit d'impôt 50%.",
  },
  {
    q: "Quelle fréquence recommandée ?",
    a: "Pour un T3 occupé par 2 personnes actives, le rythme hebdomadaire de 3 à 4 heures est confortable. Pour un studio ou un usage secondaire, un passage tous les 15 jours suffit. Pour une grande maison familiale, certains clients choisissent 2 passages par semaine. Nous vous conseillons honnêtement lors de la visite gratuite.",
  },
  {
    q: "Et si l'intervenant tombe malade ?",
    a: "C'est l'avantage d'une société par rapport à un emploi direct. En cas d'arrêt, nous mobilisons un remplaçant briefé sur votre logement, ou décalons la prestation à votre convenance. Vous n'avez aucune démarche RH à gérer, c'est nous qui assurons la continuité de service.",
  },
  {
    q: "Tarif horaire ou forfait ?",
    a: "Devis personnalisé sous 24 h après visite gratuite à domicile. Le tarif tient compte de la surface, de la fréquence et des options (repassage, vitres intérieures, gros électroménager). Après application du crédit d'impôt 50%, le coût réel est divisé par deux. Aucun engagement de durée minimale.",
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
  "@id": `${SITE_URL}/menage-thonon-les-bains#service`,
  name: "Société de ménage et aide ménagère",
  serviceType: "Ménage à domicile et aide ménagère",
  description:
    "Société de ménage à domicile à Thonon-les-Bains. Équipe salariée déclarée, intervenant fixe, crédit d'impôt 50%, CESU préfinancé accepté. Aide ménagère pour particuliers actifs, familles, seniors autonomes et frontaliers.",
  url: `${SITE_URL}/menage-thonon-les-bains`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    description:
      "Devis personnalisé sous 24 h après visite gratuite. Crédit d'impôt 50% applicable.",
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
  "@id": `${SITE_URL}/menage-thonon-les-bains#faq`,
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
      name: "Société de ménage à Thonon-les-Bains",
      item: `${SITE_URL}/menage-thonon-les-bains`,
    },
  ],
};

export default function MenageThononPage() {
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
              src="/photos/showcase-team.jpg"
              alt="Équipe salariée GH Services en intervention de ménage à domicile à Thonon-les-Bains"
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
              Société de ménage à{" "}
              <span className="text-orange">Thonon-les-Bains</span>{" "}
              et en région lémanique
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              GH Services est une société de ménage à domicile basée à
              Thonon-les-Bains. Notre différence : une équipe salariée déclarée
              et locale, un intervenant fixe qui connaît votre logement, et un
              contrat clair sans engagement de durée. Aide ménagère, repassage
              à domicile, services à la personne pour particuliers, familles,
              seniors autonomes et frontaliers. Crédit d&apos;impôt 50%, CESU
              préfinancé accepté, attestation Urssaf fournie.
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
                Crédit impôt 50%
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Intervenant fixe
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Contrat clair sans engagement
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
                Une agence de ménage à Thonon pour gagner du temps libre
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Aide ménagère pour personne âgée, ménage hebdomadaire pour
                familles, intervention discrète pour télétravailleurs ou
                frontaliers : nous adaptons la prestation à votre rythme de
                vie, avec un seul interlocuteur de bout en bout.
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
                Quatre étapes pour un ménage Thonon vraiment serein
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Pas de plateforme anonyme, pas de devis à l&apos;aveugle. Nous
                privilégions une rencontre humaine, un devis clair, et un suivi
                régulier pour ajuster la prestation dans le temps.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Visite gratuite
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Nous venons à votre domicile, à l&apos;heure qui vous
                  convient. Écoute du besoin, tour des pièces, identification
                  des points sensibles, des produits autorisés et des
                  contraintes familiales.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Devis personnalisé
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Devis sous 24 h avec le crédit d&apos;impôt 50% déjà simulé,
                  pour visualiser votre coût réel net. Détail des heures, des
                  fréquences, des options (repassage, vitres intérieures,
                  électroménager).
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Intervenant fixe
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Mise en place de l&apos;intervenant fixe choisi pour votre
                  logement. Premier passage en binôme avec un responsable pour
                  caler les habitudes, les codes, l&apos;ordre des pièces.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Suivi qualité
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Retours réguliers : nous vous appelons après les premières
                  semaines et tous les trimestres pour ajuster. Réclamation
                  traitée sous 48 h, satisfait ou refait sur le passage
                  concerné.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SPECIFICITES CHABLAIS LEMAN */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités Chablais et Léman
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Des maisons du Léman aux chalets du Chablais
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Les logements du bassin lémanique demandent des gestes
                  adaptés. Notre équipe locale connaît les matériaux, les
                  habitudes et les contraintes du secteur.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Surfaces vitrées vue Léman :</strong> baies
                      vitrées, vérandas, garde-corps en verre. Un entretien
                      spécifique pour préserver la transparence sans rayer ni
                      laisser de traces calcaires.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Sols pierre et marbre :</strong> nombreuses
                      maisons de caractère à Évian, Yvoire, Maxilly. Produits
                      neutres adaptés, jamais d&apos;acide ni de javel sur ces
                      revêtements fragiles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Chalets bois et parquet huilé :</strong> à
                      Bernex, Saint-Paul, Les Hermones. Brossage doux,
                      microfibre humide juste essorée, respect des finitions
                      huile cire propres à la montagne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Vies actives frontalières :</strong> Genève,
                      Lausanne, Saint-Julien. Les horaires des frontaliers
                      imposent une vraie flexibilité, intervention en journée
                      avec digicode ou clé sécurisée.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/lac-leman.jpg"
                  alt="Maison avec vue sur le Léman, contexte d'intervention ménage à domicile GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CREDIT IMPOT + FORMULES */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Crédit impôt 50% expliqué
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Votre ménage à domicile coûte moitié moins cher
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Le ménage à domicile relève des services à la personne (SAP).
                Vous bénéficiez d&apos;un crédit d&apos;impôt de 50% sur les
                sommes versées. Grâce à l&apos;avance immédiate Urssaf, vous ne
                payez réellement que 50% dès l&apos;envoi de la facture, sans
                attendre la déclaration annuelle. Attestation Urssaf transmise
                chaque année automatiquement. Paiement CESU préfinancé accepté.
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
                  Le rythme recommandé pour les actifs
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Entretien courant complet
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Repassage à domicile inclus en option
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Intervenant fixe garanti
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
                  Bon compromis pour appartements et seniors
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Sols, sanitaires, cuisine, sols
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Vitres intérieures en alternance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Sans engagement minimum
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Mensuel
                </span>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Gros nettoyage en profondeur
                </p>
                <p className="mt-1 text-sm text-brown/60">
                  Idéal résidences secondaires
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Détartrage, lustrage, nettoyage électroménager
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Plinthes, intérieur de placards, vitres
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Prestation longue durée à la journée
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Notre engagement tarif
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Devis personnalisé sous 24 h, pas d&apos;engagement minimum
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Le tarif horaire est fixé après visite gratuite, en fonction
                  de votre logement, de la fréquence et des options. Après
                  crédit d&apos;impôt 50%, votre coût réel est divisé par deux.
                  Vous restez libre de modifier la fréquence ou de suspendre la
                  prestation à tout moment.
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

        {/* ZONES */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones d&apos;intervention
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Société de ménage Thonon, Évian et tout le Chablais
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre équipe de ménage à domicile se déplace dans tout le
                bassin lémanique français, de Genève à Saint-Gingolph. Frais de
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
                href="/nettoyage-vitres-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage de vitres
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Lavage à l&apos;eau osmosée et à la perche fibre carbone,
                  sans la moindre trace. Crédit d&apos;impôt 50%.
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
                  Injection extraction sur canapés, fauteuils, tapis et
                  matelas. Détachage en profondeur, séchage rapide.
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
                  récupérer 100% de votre caution.
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
                    Recevez votre devis société de ménage
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez votre besoin (surface du logement, fréquence
                    souhaitée, options repassage ou vitres intérieures).
                    Réponse chiffrée sous 24 heures ouvrées, crédit
                    d&apos;impôt 50% déjà simulé.
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
                serviceLabel="Société de ménage"
                source="menage_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
