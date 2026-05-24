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
  title: "Nettoyage fin de chantier à Thonon-les-Bains",
  description:
    "Nettoyage après travaux à Thonon, Évian et Léman. Aspirateur HEPA, lessivage, retrait poussière béton. Remise des clés impeccable. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/fin-de-chantier-thonon`,
  },
  openGraph: {
    title: "Nettoyage fin de chantier à Thonon-les-Bains",
    description:
      "Nettoyage après travaux à Thonon, Évian et Léman. Aspirateur HEPA, lessivage, retrait poussière béton. Remise des clés impeccable.",
    url: `${SITE_URL}/fin-de-chantier-thonon`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-etat-lieux.jpg",
        width: 1600,
        height: 900,
        alt: "Nettoyage de fin de chantier à Thonon-les-Bains, intérieur remis à neuf après travaux",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Maîtres d'ouvrage particuliers",
    desc: "Maison neuve, extension, rénovation lourde. Remise en propreté avant emménagement et activation des contrats énergie.",
  },
  {
    title: "Artisans et entreprises BTP",
    desc: "Sous-traitance du nettoyage post-chantier pour gros œuvre, second œuvre, plaquistes, peintres. Facture pro avec TVA récupérable.",
  },
  {
    title: "Agences immobilières",
    desc: "Biens neufs à livrer, appartements rénovés avant mise en location, vitrines de programmes à présenter aux acquéreurs.",
  },
  {
    title: "Promoteurs immobiliers",
    desc: "Programmes neufs sur Thonon, Évian, Annemasse. Nettoyage de réception de chantier avant remise des clés acquéreurs.",
  },
  {
    title: "Syndics de copropriété",
    desc: "Parties communes après ravalement, cage d'escalier après réfection, hall d'entrée après travaux. Intervention coordonnée.",
  },
  {
    title: "Commerces et bureaux en travaux",
    desc: "Boutiques, restaurants, locaux pros rouverts après rénovation. Reprise d'activité sans poussière résiduelle.",
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
    q: "Quand intervenez-vous après travaux ?",
    a: "Idéalement juste après la dépose des protections de sol et le départ du dernier corps d'état, avant la pose du mobilier. Nous planifions sur la date de réception de chantier annoncée par le maître d'œuvre, avec un créneau confirmé 7 jours avant. Une intervention plus tardive (après installation des meubles) reste possible mais augmente le temps de travail.",
  },
  {
    q: "Évacuez-vous les déchets BTP ?",
    a: "Nous évacuons les petits résidus de chantier (cartons, films plastiques, chutes de placo) vers la déchetterie professionnelle de Thonon ou Marin. Les gros volumes (gravats, gros œuvre) restent à la charge des entreprises BTP ou peuvent être traités via notre service débarras, en complément, avec benne dédiée et bordereau de suivi.",
  },
  {
    q: "Combien de temps prend un nettoyage de fin de chantier ?",
    a: "Comptez environ 1 heure par 10 à 15 m² pour un chantier standard (peinture refaite, sols neufs). Pour un T3 de 70 m² après rénovation complète, prévoyez une journée à 2 intervenants. Un local commercial de 100 m² après gros œuvre demande 1,5 à 2 jours. Le devis précise toujours le nombre d'heures engagées.",
  },
  {
    q: "Aspirateur HEPA, c'est obligatoire ?",
    a: "Sur un chantier récent, la poussière de béton, de plâtre et de bois est extrêmement fine et passe à travers les aspirateurs domestiques classiques. Le filtre HEPA H13 (efficacité 99,95 %) retient ces particules et évite leur redéposition sur les surfaces propres. C'est la norme pro recommandée par l'INRS pour les locaux livrés à des occupants.",
  },
  {
    q: "Vous nettoyez aussi les vitres salies par les travaux ?",
    a: "Oui, les vitres sont systématiquement incluses dans le forfait fin de chantier : retrait des étiquettes adhésives, traces de peinture, projections de plâtre, résidus de scotch. Nous travaillons à l'eau osmosée et à la perche pour un résultat sans traces, intérieur et extérieur jusqu'à 12 m de hauteur.",
  },
  {
    q: "Quelle assurance pour les pros du BTP ?",
    a: "GH Services dispose d'une RC pro couvrant les dommages éventuels causés sur le chantier (rayure d'un sol, dégât des eaux). Nous fournissons l'attestation aux entreprises BTP et aux maîtres d'œuvre qui en font la demande. Notre numéro SIRET et l'extrait Kbis sont également disponibles pour les marchés publics ou les appels d'offres.",
  },
  {
    q: "Travaillez-vous le week-end ?",
    a: "Oui, en cas d'urgence de remise des clés ou de livraison contractuelle datée, nous intervenons le samedi et le dimanche, sans majoration de tarif pour les clients pros sous contrat-cadre. Pour les particuliers, une majoration de 25 % s'applique le dimanche et les jours fériés. À planifier au moins 5 jours à l'avance.",
  },
  {
    q: "Quel est le délai pour obtenir un devis ?",
    a: "24 heures ouvrées après réception de votre demande (formulaire, e-mail ou téléphone). Pour un chantier de plus de 200 m² ou un programme neuf, une visite technique gratuite est organisée sous 48 h, avec devis détaillé remis dans la foulée. Le devis inclut le nombre d'heures, le matériel mobilisé et les frais de déchetterie éventuels.",
  },
];

const TESTIMONIALS = [
  {
    author: "Debrot Raymond",
    date: "Mars 2026",
    body: "GH Services s'est occupé du nettoyage de notre maison avant la vente. Nous sommes extrêmement satisfaits de leur travail. Le résultat est impeccable et le prix est exactement conforme au devis.",
  },
  {
    author: "Christophe Lacroix",
    date: "Octobre 2025",
    body: "Suite au départ d'un locataire, mon appartement a été rendu dans un état lamentable. L'équipe de GH Services a fait un travail extraordinaire pour le rendre dans l'état initial.",
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
  "@id": `${SITE_URL}/fin-de-chantier-thonon#service`,
  name: "Nettoyage de fin de chantier à Thonon-les-Bains",
  serviceType: "Nettoyage de fin de chantier",
  description:
    "Nettoyage de fin de chantier professionnel après travaux : aspirateur HEPA, lessivage des sols, retrait des poussières de béton et de plâtre, vitres incluses. Particuliers, artisans BTP, promoteurs et syndics sur Thonon, Évian, Annemasse et tout le Chablais lémanique.",
  url: `${SITE_URL}/fin-de-chantier-thonon`,
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
  "@id": `${SITE_URL}/fin-de-chantier-thonon#faq`,
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
      name: "Nettoyage de fin de chantier à Thonon",
      item: `${SITE_URL}/fin-de-chantier-thonon`,
    },
  ],
};

export default function FinDeChantierThononPage() {
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
              alt="Intérieur après travaux à Thonon-les-Bains, parquet vide prêt pour la remise des clés"
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
              Nettoyage de fin de chantier à{" "}
              <span className="text-orange">Thonon-les-Bains</span>{" "}
              et en région lémanique
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Nettoyage après travaux et remise en propreté avant livraison des
              clés sur Thonon, Évian et tout le Chablais. Aspirateur HEPA H13,
              lessivage des sols, retrait de la poussière de béton et de
              plâtre, vitres et menuiseries incluses. Particuliers, artisans
              BTP, promoteurs et syndics. Devis personnalisé sous 24 heures.
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
                Aspirateur HEPA H13
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Lessivage sols et menuiseries
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                TVA récupérable pour les pros
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
                Particuliers, BTP, promoteurs, syndics, commerces
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le nettoyage post-chantier intervient à un moment précis du
                planning travaux : après le départ des corps d&apos;état,
                avant la pose du mobilier et la remise des clés. Nous nous
                adaptons aux contraintes de chaque profil.
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
                Quatre étapes pour un dépoussiérage chantier propre et complet
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le nettoyage de réception de chantier ne tolère aucune
                approximation : la poussière fine de béton et de plâtre
                ressort plusieurs jours après le passage si elle n&apos;est
                pas correctement traitée. Voici notre process en quatre temps.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Diagnostic chantier
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Visite ou photos du site, identification du niveau de
                  salissure (léger, standard, après gros œuvre), repérage des
                  protections à déposer, calcul des heures et du matériel à
                  mobiliser.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Évacuation des gros résidus
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Retrait des films de protection, scotchs, cartons, chutes de
                  placo, restes d&apos;emballage. Tri sélectif et évacuation
                  en déchetterie pro du Chablais avec bordereau de suivi pour
                  les pros.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Aspiration HEPA et lessivage
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Aspiration intégrale des sols, plinthes, radiateurs, coffres
                  de volets, gaines techniques avec filtre HEPA H13. Lessivage
                  des sols, portes, menuiseries et plinthes. Détartrage des
                  sanitaires posés.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Contrôle remise des clés
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Inspection pièce par pièce à la lampe rasante, finition des
                  zones critiques (angles, seuils, vitres), validation avec
                  le maître d&apos;œuvre ou le client. Garantie satisfait
                  ou refait sous 48 heures.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SPECIFICITES CHABLAIS */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités Chablais et Léman
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Le contexte local change la donne sur un fin de chantier BTP
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Un chantier livré à Thonon ne se nettoie pas exactement
                  comme à Lyon ou à Paris. Le climat, les matériaux locaux et
                  les filières de déchets ont leurs particularités, à
                  intégrer dans le planning.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Poussière calcaire des sols neufs :</strong>{" "}
                      les chapes liquides et bétons régionaux laissent un
                      voile blanc tenace, à neutraliser au lessivage avant
                      pose du revêtement final.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Humidité du Chablais :</strong> avant
                      peinture ou seconde couche, l&apos;air ambiant
                      saturé d&apos;humidité du lac doit être pris en
                      compte. Nous adaptons les temps de séchage entre
                      lessivage et finition.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Gestion DEEE et déchets BTP locaux :</strong>{" "}
                      partenariat avec les déchetteries pro de Thonon et
                      Marin pour l&apos;évacuation des résidus, avec
                      bordereau de suivi conforme à la REP bâtiment 2022.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Climat alpin et séchage :</strong> en
                      hiver, les températures basses ralentissent
                      l&apos;évaporation. Nous coordonnons aération et
                      passages successifs pour livrer un sol sec et sans
                      auréoles.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/lac-leman.jpg"
                  alt="Vue du Lac Léman depuis Thonon-les-Bains, contexte climatique du Chablais pour les chantiers BTP"
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
                Forfaits et tarification
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Trois niveaux de prestation, devis personnalisé sous 24 h
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Tarifs au m² calculés selon l&apos;état du chantier et le
                niveau de finition attendu. Nous établissons un devis détaillé
                après diagnostic, qui précise le volume horaire, le matériel
                mobilisé et l&apos;évacuation éventuelle des déchets.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-green-700">
                  Niveau 1
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Chantier léger
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Rafraîchissement, peinture, petits travaux ponctuels.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Aspiration sols et plinthes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Lessivage des surfaces verticales
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Vitres et menuiseries incluses
                  </li>
                </ul>
              </div>

              <div className="relative rounded-3xl bg-orange p-7 text-cream ring-2 ring-orange/40">
                <span className="absolute -top-3 right-6 rounded-full bg-cream px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-orange">
                  Le plus demandé
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-cream/90">
                  Niveau 2
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Chantier standard
                </h3>
                <p className="mt-2 text-sm text-cream/85">
                  Rénovation complète, changement de sols, cuisine, salle de
                  bains.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Aspirateur HEPA H13 systématique
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Détartrage sanitaires et robinetterie
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Lessivage portes, plinthes, radiateurs
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Niveau 3
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Après gros œuvre
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Construction neuve, extension, démolition, chantiers
                  poussiéreux.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Évacuation déchets BTP en déchetterie pro
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Double passage aspiration HEPA
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Bordereau de suivi pour les pros
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Devis 24 h
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Tarif au m² selon le niveau de salissure
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Diagnostic gratuit sur site ou par photos, devis détaillé
                  sous 24 heures ouvrées. Pas de surprise, pas de
                  supplément caché : tout est cadré avant intervention.
                </p>
              </div>
              <a
                href="#devis"
                className="mt-4 inline-flex items-center justify-center rounded-2xl bg-orange px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark md:mt-0"
              >
                Demander mon devis
              </a>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  TVA récupérable pour les pros
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Artisans BTP, promoteurs, agences et syndics récupèrent la
                  TVA sur nos factures. Numéro SIRET, RC pro et extrait Kbis
                  fournis sur demande, conformes aux marchés privés et
                  publics du Chablais.
                </p>
              </div>
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Particuliers et maîtres d&apos;ouvrage
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Pour les particuliers à domicile, certaines prestations
                  d&apos;entretien régulier entrent dans le cadre des
                  services à la personne avec crédit d&apos;impôt. À
                  préciser au moment du devis selon votre situation.
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
                Nos équipes interviennent dans tout le bassin lémanique
                français, de Genève à Saint-Gingolph, pour les chantiers
                neufs, les rénovations et les programmes immobiliers. Frais
                de déplacement offerts jusqu&apos;à 25 km autour de
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
                Vos questions sur le nettoyage post-chantier
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
                  Lavage à l&apos;eau osmosée et à la perche carbone, sans
                  traces. Particuliers, copropriétés, vérandas et vitrines.
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
                  Préparation à la remise des clés en fin de bail, vitres
                  incluses, pour récupérer 100 % de votre caution.
                </p>
              </Link>
              <Link
                href="/debarras-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Débarras Thonon
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Évacuation de gros volumes, gravats, encombrants, déchets
                  BTP, en complément d&apos;une fin de chantier ou avant
                  vente.
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
                    Recevez votre devis nettoyage fin de chantier
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre chantier (surface, type de travaux,
                    date de réception, niveau de salissure). Réponse chiffrée
                    sous 24 heures ouvrées, devis détaillé.
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
                  Merci de ne pas téléphoner ni envoyer d&apos;e-mail pour
                  une candidature, les demandes spontanées ne sont pas
                  traitées.
                </div>
              </aside>

              <ServiceQuoteForm
                serviceLabel="Nettoyage fin de chantier"
                source="finchantier_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
