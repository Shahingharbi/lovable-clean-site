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
  title: "Petite maçonnerie à Thonon-les-Bains",
  description:
    "Réparation fissure, muret, dalle béton, scellement à Thonon. Petits travaux uniquement, pas de gros œuvre. Devis 24 h, garantie 2 ans.",
  alternates: {
    canonical: `${SITE_URL}/petite-maconnerie-thonon`,
  },
  openGraph: {
    title: "Petite maçonnerie à Thonon-les-Bains",
    description:
      "Réparation fissure, scellement, muret, dalle béton, chape, jointoiement pierre à Thonon et dans le Chablais. Petits travaux uniquement, pas de gros œuvre. Devis sous 24 heures.",
    url: `${SITE_URL}/petite-maconnerie-thonon`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-maconnerie.jpg",
        width: 1600,
        height: 900,
        alt: "Maçon GH Services en intervention de petite maçonnerie à Thonon-les-Bains",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Particuliers, maison individuelle",
    desc: "Reprise de fissure sur mur de clôture, scellement de boîte aux lettres, pose de dalles d'extérieur, aménagement d'entrée de garage. Petits travaux maçonnés autour de la maison.",
  },
  {
    title: "Copropriétés, petite réparation",
    desc: "Reprise d'enduit local, scellement de garde-corps, jointoiement d'un muret commun, remplacement d'un regard d'eaux usées. Intervention rapide validée par le syndic.",
  },
  {
    title: "Agents immobiliers, avant vente",
    desc: "Petits points à reprendre avant signature : fissure visible, dalle béton à reboucher, muret à rejointoyer. Devis et délai courts pour ne pas retarder la transaction.",
  },
  {
    title: "Syndics, petites interventions",
    desc: "Demandes ponctuelles d'immeubles : reprise d'un jointoiement pierre, scellement d'un boîtier, réfection d'une marche béton, regard à ressceller. Facturation claire au syndic.",
  },
  {
    title: "Commerces, vitrines abîmées",
    desc: "Reprise d'un seuil béton, scellement d'une enseigne, remise en état de l'entrée client après choc. Interventions en horaires décalés possibles pour ne pas gêner l'exploitation.",
  },
  {
    title: "Locataires, post état des lieux",
    desc: "Petits reboucharges, reprise de fissure et jointoiement avant remise des clés pour récupérer la caution. Devis chiffré accepté par la majorité des bailleurs.",
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
    q: "Vous faites du gros œuvre ?",
    a: "Non. GH Services fait uniquement de la petite maçonnerie : reprise de fissure, scellement, muret bas, dalle béton, chape, jointoiement, pose de dalles extérieures, regards. Nous ne réalisons pas de construction neuve, de fondations, de dalle porteuse, d'agrandissement, de mur de soutènement structurel ni de ravalement de façade complet. Pour ces chantiers, nous vous orientons vers une entreprise de gros œuvre du Chablais.",
  },
  {
    q: "Combien coûte la réparation d'une fissure ?",
    a: "Le tarif dépend de la longueur, de la profondeur et du support (parpaing, brique, pierre, enduit). Sur fissure superficielle d'enduit, le travail est rapide. Sur fissure traversante ou maçonnerie ancienne en pierre du Léman, il faut purger, traiter et reprendre. Nous établissons un devis personnalisé sous 24 h après visite ou photos.",
  },
  {
    q: "Avez-vous une assurance décennale ?",
    a: "Oui. GH Services est assuré en responsabilité civile professionnelle et en garantie décennale pour les travaux de maçonnerie réalisés dans le cadre de notre activité de petite maçonnerie. Une attestation à jour est fournie sur simple demande avant la signature du devis.",
  },
  {
    q: "Combien de temps pour une dalle béton ?",
    a: "Pour une dalle béton de terrasse classique (15 à 25 m²), comptez 1 à 2 jours de mise en œuvre selon la préparation du sol. Le temps de séchage avant utilisation normale est de 28 jours. Une circulation piétonne légère est possible après 7 jours. Nous calons toujours le planning sur la météo, indispensable en Chablais.",
  },
  {
    q: "Vous intervenez en copropriété ?",
    a: "Oui, pour les petites interventions ponctuelles validées par le syndic ou le conseil syndical : scellement, reprise d'enduit, jointoiement d'un muret commun, remplacement d'un regard. Devis adressé directement au syndic, facturation au nom de la copropriété, intervention coordonnée avec le gardien.",
  },
  {
    q: "Faut-il une déclaration en mairie ?",
    a: "Cela dépend du chantier. Un muret de moins de 2 m de hauteur, une dalle béton non visible depuis la voie publique ou une simple réparation ne nécessitent généralement pas de déclaration. À partir de certaines surfaces ou hauteurs, une déclaration préalable de travaux est requise. Nous vous indiquons les démarches lors du devis.",
  },
  {
    q: "Garantie sur vos travaux ?",
    a: "Toutes nos interventions de petite maçonnerie sont garanties 2 ans sur la prestation (tenue de la réparation, du scellement, du jointoiement). Les ouvrages relevant de la décennale sont couverts par notre assurance professionnelle. En cas de désordre, nous intervenons rapidement, sans frais supplémentaires dans le cadre de la garantie.",
  },
  {
    q: "Délai pour obtenir un devis ?",
    a: "Devis personnalisé sous 24 heures ouvrées après réception de votre demande, par e-mail ou téléphone. Pour les chantiers nécessitant une visite (muret, dalle, reprise complexe), nous fixons un rendez-vous sous 48 à 72 heures dans le secteur de Thonon-les-Bains et du Chablais.",
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
  "@id": `${SITE_URL}/petite-maconnerie-thonon#service`,
  name: "Petite maçonnerie et réparations",
  serviceType: "Petite maçonnerie",
  description:
    "Petits travaux de maçonnerie à Thonon-les-Bains et dans le Chablais : reprise de fissure de mur, scellement, construction de muret, dalle béton terrasse, chape ciment, jointoiement pierre, pose de dalles extérieures, regards. Pas de gros œuvre ni de construction neuve. Devis personnalisé sous 24 h, garantie 2 ans.",
  url: `${SITE_URL}/petite-maconnerie-thonon`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      description: "Devis personnalisé sous 24 heures",
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
  "@id": `${SITE_URL}/petite-maconnerie-thonon#faq`,
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
      name: "Petite maçonnerie à Thonon",
      item: `${SITE_URL}/petite-maconnerie-thonon`,
    },
  ],
};

export default function PetiteMaconnerieThononPage() {
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
              src="/photos/service-maconnerie.jpg"
              alt="Maçon GH Services en intervention de petite maçonnerie à Thonon-les-Bains"
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
              Petite maçonnerie à{" "}
              <span className="text-orange">Thonon-les-Bains</span>{" "}
              et en région lémanique
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Maçon de proximité à Thonon, GH Services s&apos;occupe des petits
              travaux de maçonnerie autour de votre maison ou de votre local :
              réparation de fissure de mur, scellement de boîte aux lettres,
              muret bas, dalle béton de terrasse, chape ciment, jointoiement
              pierre, pose de dalles extérieures, aménagement d&apos;entrée de
              garage. Pas de gros œuvre, uniquement les interventions ciblées
              que les grandes entreprises refusent. Devis personnalisé sous
              24 heures.
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
                Petits travaux seulement
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Garantie 2 ans sur intervention
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Assurance RC pro à jour
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
                Particuliers, syndics, agents immobiliers, commerces
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le créneau du maçon de proximité : les petits travaux que les
                entreprises de gros œuvre du Chablais ne veulent plus prendre
                en charge. Réparation rapide, scellement soigné, finition
                propre, intervention courte.
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
                Visite, devis chiffré, réalisation soignée, garantie 2 ans
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Une méthode simple et transparente, adaptée aux petits
                chantiers. Pas de surprise sur la facture, pas de promesses sur
                des prestations que nous ne réalisons pas.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Visite et chiffrage
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Visite sur place ou évaluation par photos : nature du
                  support, accès, contraintes (copropriété, voie publique).
                  Si le chantier relève du gros œuvre, nous le disons tout de
                  suite.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Devis avec délai
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Devis personnalisé sous 24 heures ouvrées, ligne par ligne,
                  avec délai d&apos;intervention chiffré. Vous validez par
                  e-mail, nous bloquons une date ferme dans le planning.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Réalisation soignée
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Protection des sols et abords, préparation du support,
                  mortier dosé selon l&apos;usage, finition propre. Évacuation
                  des gravats incluse, chantier laissé net en fin de journée.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Garantie 2 ans sur intervention
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Réception du chantier avec le client, photos avant/après,
                  facture détaillée. Garantie de 2 ans sur la tenue de la
                  prestation et couverture décennale pour les ouvrages
                  concernés.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SPECIFICITES CHABLAIS / LEMAN */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités Chablais et Léman
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  La maçonnerie ne se traite pas pareil au bord du Léman
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Le bâti ancien des rives du Léman, les hivers humides du
                  Chablais et la proximité du lac imposent des choix
                  techniques précis. Quatre points à connaître avant
                  d&apos;intervenir.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Fissures sur bâti ancien :</strong> les
                      maisons en pierre des rives du Léman bougent avec les
                      mouvements de terrain. Une fissure se traite après
                      diagnostic d&apos;origine, en respectant la respiration
                      du mur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Joints pierre traditionnels :</strong> à Yvoire,
                      Évian ou Saint-Gingolph, le jointoiement se fait à la
                      chaux et au sable local, pas au ciment moderne, pour
                      respecter l&apos;esthétique et la perméance du mur en
                      pierre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Cycles gel-dégel hivernaux :</strong> les
                      terrasses, dalles béton et chapes du Chablais subissent
                      des cycles gel-dégel sévères. Le dosage du mortier et la
                      formulation du béton doivent en tenir compte pour
                      éviter l&apos;éclatement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Traitement hydrofuge en bord de lac :</strong>
                      l&apos;humidité ambiante près du Léman pénètre les
                      supports poreux. Un traitement hydrofuge de finition
                      est requis sur murets, dalles et joints exposés pour
                      préserver l&apos;ouvrage.
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

        {/* INTERVENTIONS TYPES ET DEVIS */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos interventions types et devis
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Ce que nous prenons en charge, ce que nous ne faisons pas
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Nous travaillons le créneau des petits travaux de maçonnerie.
                Pour le gros œuvre, la construction neuve ou un ravalement de
                façade complet, nous ne sommes pas la bonne adresse, et nous
                préférons vous le dire avant le devis.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-green-700">
                  Couvert par GH Services
                </span>
                <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight">
                  Petite maçonnerie
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-6">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Reprise de fissure de mur (enduit, parpaing, pierre)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Scellement de boîte aux lettres, poteau, garde-corps,
                    enseigne
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Construction de muret bas (clôture, jardinière, séparation)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Dalle béton de terrasse, dalle d&apos;abri de jardin
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Chape ciment lissée ou de ragréage
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Jointoiement de mur en pierre (chaux, sable local)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Reprise d&apos;enduit de façade localisé
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Pose de dalles d&apos;extérieur (terrasse, allée)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Aménagement d&apos;entrée de garage (seuil, bordure)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Pose ou remplacement de regard d&apos;eaux usées
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream/5 p-7 text-cream ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Non couvert
                </span>
                <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight">
                  Gros œuvre et construction neuve
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-cream/85">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    Construction neuve d&apos;une maison ou d&apos;une
                    extension
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    Fondations, dalles porteuses, planchers structurels
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    Murs de soutènement structurels, reprise en sous-œuvre
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    Ravalement de façade complet d&apos;une maison
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    Agrandissement, surélévation, ouverture porteuse
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    Démolition lourde, gros terrassement
                  </li>
                </ul>
                <p className="mt-5 text-xs leading-6 text-cream/70">
                  Pour ces chantiers, nous vous orientons vers une entreprise
                  de gros œuvre du Chablais. Pas de mauvaise surprise sur le
                  devis ni sur la décennale.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Tarification
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Devis personnalisé sous 24 h, garantie 2 ans sur
                  l&apos;intervention
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Chaque chantier est unique : support, accès, finition
                  attendue. Nous établissons un devis détaillé, ligne par
                  ligne, sans engagement.
                </p>
              </div>
              <a
                href="#devis"
                className="mt-4 inline-flex items-center rounded-full bg-orange px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark md:mt-0"
              >
                Recevoir mon devis
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
                Maçon de proximité dans le Chablais et la rive sud du Léman
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre équipe se déplace dans tout le bassin lémanique français,
                de la périphérie genevoise à Saint-Gingolph. Frais de
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
                href="/fin-de-chantier-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage fin de chantier
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Remise à neuf après nos petits travaux maçonnés : retrait
                  des poussières de ciment, lessivage, vitres et sols
                  impeccables.
                </p>
              </Link>
              <Link
                href="/entretien-espaces-verts-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Entretien espaces verts
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Préparation du terrain avant pose de dalles ou construction
                  d&apos;un muret, remise en état du jardin après chantier.
                </p>
              </Link>
              <Link
                href="/debarras-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Débarras de gravats
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Évacuation des gravats, dépôt en déchetterie agréée du
                  Chablais. Service complémentaire à nos petits travaux de
                  maçonnerie.
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
                    Recevez votre devis petite maçonnerie
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre besoin : nature du support, dimensions
                    approximatives, photos si possible. Réponse chiffrée sous
                    24 heures ouvrées, garantie 2 ans sur la prestation.
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
                serviceLabel="Petite maçonnerie"
                source="maconnerie_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
