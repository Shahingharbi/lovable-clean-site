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
  title: "Nettoyage de copropriétés à Thonon-les-Bains",
  description:
    "Nettoyage de parties communes à Thonon. Halls, cages d'escalier, parkings. Contrats syndic clairs, urgence AG en 48 h. Devis transparent.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-coproprietes-thonon`,
  },
  openGraph: {
    title: "Nettoyage de copropriétés à Thonon-les-Bains",
    description:
      "Nettoyage de parties communes à Thonon. Halls, cages d'escalier, parkings. Contrats syndic clairs, urgence AG en 48 h.",
    url: `${SITE_URL}/nettoyage-coproprietes-thonon`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-coproprietes.jpg",
        width: 1600,
        height: 900,
        alt: "Nettoyage de parties communes d'immeuble à Thonon-les-Bains",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Syndics professionnels",
    desc: "Cabinets de gestion immobilière du Chablais. Reporting mensuel, facturation au passage, intervenants identifiables et planning conforme aux décisions d'AG.",
  },
  {
    title: "Syndics bénévoles",
    desc: "Copropriétés gérées par un copropriétaire référent. Contrats simples, sans engagement de durée, facturation forfaitaire claire et attestation fiscale annuelle.",
  },
  {
    title: "Conseils syndicaux",
    desc: "Membres élus en charge du contrôle de gestion. Nous fournissons un cahier de suivi signé à chaque passage, consultable lors des audits du conseil.",
  },
  {
    title: "Bailleurs sociaux",
    desc: "Résidences gérées par un organisme HLM ou une foncière. Habitués aux cahiers des charges détaillés, aux délais de tolérance et aux contrôles qualité réguliers.",
  },
  {
    title: "Agences immobilières",
    desc: "Mandats de gestion locative sur des petits immeubles, résidences services ou meublés saisonniers. Coordination avec votre gestionnaire et passages adaptés au turnover.",
  },
  {
    title: "Copropriétaires en gestion directe",
    desc: "Petites copropriétés de 2 à 8 lots sans syndic. Devis par lot, paiement réparti, conformité aux règles de TVA, aucune mauvaise surprise sur la quote-part.",
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
    q: "Quelle est la fréquence recommandée pour un immeuble ?",
    a: "Pour un immeuble standard de 10 à 30 lots à Thonon, comptez un passage hebdomadaire sur les halls et cages d'escalier, et une intervention bi-mensuelle pour les parkings sous-sol. Les résidences touristiques de la rive Léman, à fort turnover, justifient souvent un planning bi-hebdomadaire en haute saison (juillet, août, vacances scolaires). Nous adaptons la fréquence après l'audit des parties communes.",
  },
  {
    q: "Avez-vous une RC pro adaptée syndic ?",
    a: "Oui. Notre responsabilité civile professionnelle couvre les interventions en parties communes de copropriétés, y compris les dommages matériels sur sols (marbre, parquet, carrelage), garde-corps, ascenseurs et équipements collectifs. L'attestation à jour est fournie au syndic avant signature du contrat, et renouvelée chaque année.",
  },
  {
    q: "Combien de temps pour intervenir pré-AG ?",
    a: "Sur demande d'un syndic ou d'un conseil syndical, nous intervenons sous 48 heures ouvrées pour un nettoyage complet des parties communes avant une assemblée générale. Cela inclut hall d'entrée, cage d'escalier, ascenseur, locaux poubelles et abords immédiats. Idéal pour accueillir les copropriétaires dans une copropriété mise en valeur.",
  },
  {
    q: "Vous gérez aussi vitres et locaux poubelles ?",
    a: "Oui. Nos prestations parties communes couvrent par défaut sols, escaliers, mains courantes, boîtes aux lettres, interphones, miroirs et portes. En option, nous ajoutons le lavage des vitres du hall, la désinfection des locaux poubelles (avec produits virucides aux normes EN 14476), le nettoyage de l'ascenseur (cabine, parois, miroirs, sol) et le balayage des parkings sous-sol.",
  },
  {
    q: "Pouvez-vous remplacer une équipe défaillante en urgence ?",
    a: "Oui. Si votre prestataire actuel a déposé le bilan, manqué plusieurs passages ou rendu un travail non conforme, nous reprenons le contrat sous 5 à 10 jours ouvrés. Un état des lieux contradictoire est réalisé avec le conseil syndical, puis un planning de rattrapage est proposé pour remettre les parties communes au niveau attendu avant prise de relais.",
  },
  {
    q: "Vos prix sont indexés ?",
    a: "Nos contrats annuels prévoient une révision tarifaire une fois par an, indexée sur l'indice INSEE des prix des services de nettoyage. Cette clause est transparente, plafonnée et communiquée à l'avance au gestionnaire de copropriété. Aucun rattrapage rétroactif, aucune hausse cachée entre deux échéances.",
  },
  {
    q: "Vous fournissez attestation pour AG ?",
    a: "Oui. Nous remettons chaque année au syndic une attestation récapitulative (passages effectués, taux de réalisation, faits marquants) à présenter lors de l'assemblée générale. Ce document facilite la reddition des comptes et le vote du renouvellement du contrat par les copropriétaires.",
  },
  {
    q: "Et les escaliers en marbre ou parquet ?",
    a: "Nous adaptons les produits et méthodes à chaque sol. Marbre : pH neutre, microfibre humide, aucun acide. Parquet ciré ou vitrifié : aspiration puis nettoyage à sec ou très peu humide. Pierre naturelle de la rive Léman : protocole spécifique pour éviter les remontées de sel. Notre référent qualité contrôle le respect des protocoles à chaque audit.",
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
  "@id": `${SITE_URL}/nettoyage-coproprietes-thonon#service`,
  name: "Nettoyage de copropriétés à Thonon-les-Bains",
  serviceType: "Nettoyage de copropriétés",
  description:
    "Entretien régulier des parties communes d'immeuble : halls, cages d'escalier, ascenseurs, parkings sous-sol, locaux poubelles. Contrats syndic, intervention pré-AG sous 48 h, RC pro à jour. Thonon, Évian, Annemasse et tout le Chablais.",
  url: `${SITE_URL}/nettoyage-coproprietes-thonon`,
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
  "@id": `${SITE_URL}/nettoyage-coproprietes-thonon#faq`,
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
      name: "Nettoyage copropriétés Thonon",
      item: `${SITE_URL}/nettoyage-coproprietes-thonon`,
    },
  ],
};

export default function NettoyageCoproprietesThononPage() {
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
            <span className="text-brown/75">
              Nettoyage copropriétés Thonon
            </span>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/service-coproprietes.jpg"
              alt="Nettoyage des parties communes d'un immeuble en copropriété à Thonon-les-Bains"
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
              Nettoyage de copropriétés à{" "}
              <span className="text-orange">Thonon-les-Bains</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Entretien professionnel des parties communes d&apos;immeuble :
              halls, cages d&apos;escalier, ascenseurs, parkings sous-sol et
              locaux poubelles. Contrats syndic clairs, intervention pré-AG
              sous 48 h, RC pro à jour. Thonon, Évian, Annemasse et tout le
              Chablais. Devis personnalisé sous 24 heures.
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
                Contrats syndic transparents
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Intervention pré-AG sous 48 h
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                RC pro à jour, attestation annuelle
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
                Syndics, conseils syndicaux, bailleurs, gestionnaires
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous intervenons sur tous les profils de copropriété du
                Chablais : petits immeubles de centre-ville à Thonon, grandes
                résidences avec ascenseur et parking sous-sol, résidences
                saisonnières en rive Léman, immeubles HLM gérés par bailleur
                social. Chaque type d&apos;organisation a ses contraintes,
                nous adaptons le contrat de nettoyage en conséquence.
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
                Audit, planning, checklist signée, compte rendu au syndic
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le nettoyage de parties communes ne se résume pas à un coup
                d&apos;aspirateur dans la cage d&apos;escalier. C&apos;est un
                contrat de service, avec obligations de moyens, traçabilité et
                reddition de comptes annuelle au syndic et au conseil
                syndical. Notre méthode est conçue pour cela.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Audit parties communes
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Visite avec le syndic ou un membre du conseil syndical.
                  Relevé des surfaces, types de sols, équipements, ascenseur,
                  parking sous-sol, locaux poubelles. Photos, métrés, points
                  de vigilance.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Planning hebdo, quinzaine, mensuel
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Construction d&apos;un planning de passage adapté au volume
                  de flux : hebdomadaire pour halls très fréquentés, bi-mensuel
                  pour étages, mensuel pour parkings. Calendrier remis au
                  gestionnaire de copropriété avant signature.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Intervention avec checklist signée
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Chaque passage est tracé sur un cahier de suivi affiché dans
                  le hall, signé et daté. Le conseil syndical peut le consulter
                  à tout moment. Photos avant/après sur demande pour les
                  contrats importants.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Compte rendu mensuel au syndic
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Récapitulatif mensuel envoyé par e-mail au gestionnaire :
                  passages effectués, taux de réalisation, anomalies relevées
                  (dégradations, dépôts sauvages, ampoules grillées) pour
                  facilitation de la prise de décision en bureau du syndic.
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
                  Une copropriété à Thonon ne se gère pas comme à Lyon
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Le bassin lémanique a ses contraintes propres : forte
                  saisonnalité touristique, immeubles en rive avec apports
                  minéraux du lac, AG souvent décalées sur le calendrier
                  scolaire genevois, exigences réglementaires de la Haute
                  Savoie. Quatre points concrets à connaître.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>
                        Fréquentation des immeubles touristiques rive Léman :
                      </strong>{" "}
                      les résidences avec locations saisonnières (Thonon
                      Rives, Anthy, Sciez, Yvoire) voient leur flux x3 en
                      juillet et août. Planning renforcé indispensable sur ces
                      mois.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Terre et sable des résidences saisonnières :</strong>{" "}
                      vacanciers, randonneurs, baigneurs ramènent boue,
                      gravillons, sable de plage. Tapis brosses, double
                      aspiration et nettoyage humide des escaliers
                      indispensables en saison.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Conformité aux PV d&apos;AG locaux :</strong>{" "}
                      certaines AG du Chablais votent des produits écolabel,
                      l&apos;interdiction de l&apos;eau de Javel, ou des
                      horaires précis (entre 7 h et 9 h pour ne pas gêner les
                      copropriétaires en télétravail genevois). Nous respectons.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Intervention pré-AG en 48 h :</strong> avant
                      chaque assemblée générale, nous proposons un passage de
                      remise en valeur du hall, des cages d&apos;escalier et
                      du local AG. Les copropriétaires arrivent dans un
                      immeuble net et le vote du renouvellement de contrat se
                      passe mieux.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/lac-leman.jpg"
                  alt="Vue du Lac Léman depuis Thonon, contexte des copropriétés gérées par GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTRATS COPROPRIETE */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos contrats de copropriété
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Trois fréquences, un devis personnalisé sous 24 h
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Pas de tarif standardisé affiché en ligne : chaque copropriété
                est unique (surface des parties communes, nombre d&apos;étages,
                présence d&apos;ascenseur ou de parking sous-sol, fréquentation,
                type de sols). Nous proposons trois fréquences de base, puis un
                devis personnalisé sous 24 h après visite ou photos.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-green-700">
                  Hebdomadaire
                </span>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight text-brown">
                  1 passage par semaine
                </p>
                <p className="mt-1 text-sm text-brown/60">
                  Idéal immeubles à fort flux
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Hall, escaliers, ascenseur, paliers
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Sortie et rentrée des poubelles
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Adapté résidences saisonnières et tertiaire
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
                <p className="mt-3 font-display text-2xl font-bold tracking-tight text-cream">
                  2 passages par mois
                </p>
                <p className="mt-1 text-sm text-cream/80">
                  Le format standard des copropriétés
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Parties communes intégrales
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Lavage humide des sols, mains courantes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Boîtes aux lettres, interphones, miroirs
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Mensuel
                </span>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight text-brown">
                  1 passage par mois
                </p>
                <p className="mt-1 text-sm text-brown/60">
                  Petites copropriétés calmes
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Passage approfondi
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Coût annuel maîtrisé
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Idéal 2 à 8 lots, syndic bénévole
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Tarification
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Devis personnalisé sous 24 h, contrats annuels clairs
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Chaque copropriété est devisée individuellement. Pas de
                  facturation à la surprise : forfait mensuel fixe, basé sur le
                  planning convenu, facturé au passage effectif. Sans
                  engagement de durée au-delà de l&apos;année en cours.
                </p>
              </div>
              <div className="mt-4 inline-flex items-baseline gap-2 rounded-2xl bg-orange px-6 py-4 md:mt-0">
                <span className="font-display text-2xl font-bold tracking-tight text-cream">
                  24 h
                </span>
                <span className="text-sm font-medium text-cream/90">
                  pour recevoir un devis
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Contrat sans engagement de durée
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Préavis de résiliation d&apos;un mois après la première année,
                  conforme aux usages du nettoyage en copropriété. Un syndic
                  qui change, une AG qui revote, et le contrat évolue sans
                  pénalité.
                </p>
              </div>
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Facturation au passage, RC pro à jour
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Facture mensuelle détaillée envoyée au gestionnaire de
                  copropriété, accompagnée du relevé des passages. Attestation
                  de responsabilité civile professionnelle fournie à chaque
                  renouvellement annuel.
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
                Notre équipe intervient sur les copropriétés de tout le bassin
                lémanique français, de Genève à Saint-Gingolph. Tournée
                hebdomadaire optimisée, déplacement inclus dans le forfait pour
                les communes à 25 km autour de Thonon-les-Bains.
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
                Les questions des syndics et conseils syndicaux
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
              Autres prestations pour syndic et copropriété
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link
                href="/nettoyage-vitres-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage de vitres pour immeuble
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Halls vitrés, garde-corps verre, fenêtres des cages
                  d&apos;escalier, façades de copropriété, eau osmosée et
                  perche fibre carbone jusqu&apos;à 12 m.
                </p>
              </Link>
              <Link
                href="/entretien-espaces-verts-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Entretien espaces verts copro
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Pelouses, haies, massifs et abords d&apos;immeuble. Contrat
                  annuel coordonné avec le planning des parties communes pour
                  un seul prestataire copropriété.
                </p>
              </Link>
              <Link
                href="/fin-de-chantier-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage fin de chantier immeuble
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Remise en service après travaux votés en AG : ravalement,
                  réfection de cage d&apos;escalier, rénovation
                  d&apos;ascenseur, retrait des résidus de chantier.
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
                    Devis nettoyage copropriété personnalisé
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre copropriété (nombre de lots, étages,
                    présence d&apos;ascenseur ou de parking sous-sol,
                    fréquence souhaitée, urgence pré-AG éventuelle). Réponse
                    chiffrée par e-mail sous 24 heures ouvrées, transmise au
                    syndic ou au conseil syndical.
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
                        Ligne syndic dédiée
                      </p>
                      <p className="font-display text-2xl font-bold tracking-tight">
                        06 84 66 55 23
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-cream/80">
                    Disponible 7 j/7. Réponse immédiate en heures ouvrées,
                    interlocuteur unique pour tous vos immeubles.
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
                serviceLabel="Nettoyage copropriétés"
                source="copros_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
