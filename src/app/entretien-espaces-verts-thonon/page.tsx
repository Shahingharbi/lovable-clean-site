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
  title: "Entretien d'espaces verts à Thonon",
  description:
    "Tonte pelouse, taille haie, débroussaillage et élagage à Thonon, Évian et Léman. Contrat annuel transparent. Crédit impôt 50% inclus. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/entretien-espaces-verts-thonon`,
  },
  openGraph: {
    title: "Entretien d'espaces verts à Thonon",
    description:
      "Tonte pelouse, taille haie, débroussaillage et élagage à Thonon, Évian et Léman. Contrat annuel transparent. Crédit impôt 50% inclus. Devis 24 h.",
    url: `${SITE_URL}/entretien-espaces-verts-thonon`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-espaces-verts.jpg",
        width: 1600,
        height: 900,
        alt: "Jardinier paysagiste GH Services en intervention à Thonon-les-Bains",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Maisons individuelles",
    desc: "Pelouse, haies, massifs, arbres fruitiers et potager. Crédit impôt 50% pour les services à domicile, attestation Urssaf fournie automatiquement.",
  },
  {
    title: "Copropriétés avec jardin",
    desc: "Espaces verts collectifs, pelouses communes, haies de séparation, bacs plantés. Compte rendu photo après chaque passage pour le syndic.",
  },
  {
    title: "Résidences secondaires",
    desc: "Entretien jardin résidence secondaire en votre absence sur Yvoire, Excenevex, Sciez. Visite mensuelle, rapport et photos envoyés par e-mail.",
  },
  {
    title: "Hôtels et chambres d'hôtes",
    desc: "Pelouse impeccable avant chaque saison, taille de haie nette, massifs fleuris. Passages tôt le matin pour ne pas gêner la clientèle.",
  },
  {
    title: "Commerces avec terrasse",
    desc: "Jardinières, bacs plantés, terrasses végétalisées, arrière-cours. Entretien hebdomadaire ou bimensuel selon la saison touristique.",
  },
  {
    title: "Syndics multi-immeubles",
    desc: "Contrat annuel cadré pour plusieurs résidences, planning unique, facturation centralisée, interlocuteur dédié pour chaque copropriété.",
  },
];

const STEPS = [
  {
    n: "Étape 1",
    title: "Visite et devis",
    desc: "Visite sur place dans la semaine, relevé des surfaces, repérage des haies, arbres, massifs et points d'eau. Devis personnalisé sous 24 h envoyé par e-mail.",
  },
  {
    n: "Étape 2",
    title: "Planning annuel par saison",
    desc: "Calendrier d'intervention défini sur 12 mois : tonte, taille de haie, débroussaillage, ramassage feuilles automne, désherbage thermique sans produit.",
  },
  {
    n: "Étape 3",
    title: "Intervention au calendrier",
    desc: "Passage à la date convenue, matériel pro thermique et batterie, évacuation des déchets verts en déchèterie agréée du Chablais incluse.",
  },
  {
    n: "Étape 4",
    title: "Compte rendu et photos",
    desc: "Photos avant et après envoyées par e-mail, point sur les remarques (maladies, branches à élaguer, arrosage). Facture mensuelle ou par intervention.",
  },
];

const LEMAN_POINTS = [
  {
    title: "Pollen massif mars à juin",
    desc: "Bouleaux, peupliers et graminées colmatent les filtres et la coupe des tondeuses. Nous nettoyons le matériel après chaque passage et adaptons la hauteur de coupe pour préserver le moteur.",
  },
  {
    title: "Mulching obligatoire en zone Léman",
    desc: "En bord de lac, le mulching est privilégié pour réduire les déchets verts collectés par les communes. L'herbe finement broyée fertilise naturellement la pelouse, sans aller en déchèterie.",
  },
  {
    title: "Tailles avant gel hivernal de novembre",
    desc: "Sur le Chablais, le gel arrive dès la mi-novembre. Nous programmons les dernières tailles de haies et la taille des arbres fruitiers avant cette date pour éviter le délavement des plaies.",
  },
  {
    title: "Arrosage raisonné, contraintes PPRI",
    desc: "Les zones soumises au Plan de Prévention du Risque Inondation des rives du Léman imposent un arrosage maîtrisé. Programmation tôt le matin, paillage des massifs, choix de végétaux adaptés.",
  },
];

const PRESTATIONS = [
  {
    label: "Tonte de pelouse",
    rythme: "Hebdomadaire, quinzaine ou mensuelle",
    notes: "Mulching ou ramassage selon configuration, finition au coupe-bordures, soufflage des allées.",
  },
  {
    label: "Taille de haie",
    rythme: "1 à 3 passages par an",
    notes: "Taille de formation au printemps, taille d'entretien en juin, taille de remise en forme en septembre.",
  },
  {
    label: "Élagage arbres fruitiers",
    rythme: "1 passage hivernal",
    notes: "Pommiers, poiriers, cerisiers, pruniers. Taille de fructification et taille sanitaire, désinfection des outils.",
  },
  {
    label: "Ramassage feuilles automne",
    rythme: "2 à 4 passages d'octobre à décembre",
    notes: "Souffleur thermique, évacuation, nettoyage des gouttières basses incluses sur demande.",
  },
  {
    label: "Débroussaillage",
    rythme: "1 à 2 passages par an",
    notes: "Talus, friches, abords de clôtures, obligations légales de débroussaillement, débroussailleuse à dos.",
  },
  {
    label: "Plantation et massifs",
    rythme: "À la demande",
    notes: "Création de massifs, plantation d'arbustes, paillage, amendement organique, choix d'essences locales.",
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
    q: "Quelle fréquence pour la tonte ?",
    a: "De mars à octobre, comptez une tonte hebdomadaire pour une pelouse d'agrément, une tonte tous les quinze jours pour un gazon utilitaire, et une tonte mensuelle pour un grand terrain. De novembre à février, la croissance ralentit et 1 à 2 passages d'entretien suffisent. Nous adaptons la fréquence à la saison dans le contrat annuel.",
  },
  {
    q: "Le crédit impôt 50%, ça marche comment ?",
    a: "L'entretien de jardin chez les particuliers entre dans le cadre des services à la personne. Vous récupérez 50% du montant TTC payé sous forme de crédit d'impôt, dans la limite de 5 000 € de dépenses par an pour le petit jardinage. Nous fournissons automatiquement l'attestation fiscale Urssaf en janvier, à joindre à votre déclaration de revenus.",
  },
  {
    q: "Vous utilisez des produits chimiques ?",
    a: "Non. Nous travaillons sans glyphosate ni herbicide chimique. Le désherbage est réalisé manuellement, mécaniquement ou par désherbage thermique sans produit (brûleur à gaz). Le mulching et le paillage naturel limitent durablement les repousses, sans rejet polluant pour les nappes du Léman.",
  },
  {
    q: "Vous taillez les haies en été ?",
    a: "Oui, mais avec précaution. Nous évitons les périodes de forte chaleur qui brûlent les plaies de coupe, et nous respectons la période de nidification des oiseaux (15 mars au 31 juillet pour les haies abritant une faune protégée). Les tailles d'entretien légères sont réalisées en juin, les tailles franches en septembre ou en mars.",
  },
  {
    q: "Vous gérez l'évacuation des déchets verts ?",
    a: "Oui, c'est inclus dans le devis. Les déchets verts sont transportés en déchèterie agréée du Chablais (SIDEFAGE) ou en plateforme de compostage. Pour les pelouses traitées en mulching, l'herbe reste sur place et fertilise naturellement le sol, ce qui supprime l'évacuation et réduit le coût.",
  },
  {
    q: "Faut-il être présent pendant l'intervention ?",
    a: "Non, sauf pour le premier rendez-vous. Une fois le devis signé et les accès convenus (portail, code, clé), nous intervenons en autonomie. Vous recevez un compte rendu photo après chaque passage. C'est l'idéal pour les actifs et les résidences secondaires.",
  },
  {
    q: "Pouvez-vous gérer ma résidence secondaire à distance ?",
    a: "Oui, c'est l'une de nos spécialités sur les rives du Léman. Nous prenons en charge la clé, intervenons selon le planning défini, envoyons photos et compte rendu par e-mail, et signalons toute anomalie (volet ouvert, fuite, intrusion). Idéal pour les propriétaires basés à Genève, Lausanne, Paris ou à l'étranger.",
  },
  {
    q: "Vous travaillez le week-end ?",
    a: "Nous privilégions les interventions du lundi au vendredi pour le respect du voisinage et les arrêtés municipaux qui limitent l'usage du matériel motorisé le dimanche. Le samedi matin reste possible sur demande, notamment pour les commerces et hôtels en haute saison.",
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
    body: "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif.",
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
  "@id": `${SITE_URL}/entretien-espaces-verts-thonon#service`,
  name: "Entretien d'espaces verts",
  serviceType: "Entretien d'espaces verts et jardinage",
  description:
    "Entretien d'espaces verts à Thonon-les-Bains : tonte pelouse, taille de haie, débroussaillage, élagage d'arbres fruitiers, ramassage des feuilles, désherbage thermique sans produit. Contrat annuel transparent pour particuliers, copropriétés, hôtels et résidences secondaires sur tout le Chablais lémanique.",
  url: `${SITE_URL}/entretien-espaces-verts-thonon`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    description:
      "Devis personnalisé sous 24 h. Crédit impôt 50% pour les particuliers, attestation Urssaf fournie.",
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
  "@id": `${SITE_URL}/entretien-espaces-verts-thonon#faq`,
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
      name: "Entretien d'espaces verts à Thonon",
      item: `${SITE_URL}/entretien-espaces-verts-thonon`,
    },
  ],
};

export default function EntretienEspacesVertsThononPage() {
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
              Entretien d&apos;espaces verts à Thonon
            </span>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/service-espaces-verts.jpg"
              alt="Jardinier paysagiste GH Services tondant une pelouse à Thonon-les-Bains"
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
              Entretien d&apos;espaces verts à{" "}
              <span className="text-orange">Thonon-les-Bains</span> et Léman
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Jardinier à Thonon pour la tonte de pelouse, la taille de haie, le
              débroussaillage, l&apos;élagage d&apos;arbres fruitiers et le
              ramassage des feuilles d&apos;automne. Désherbage thermique sans
              produit, mulching adapté au climat lémanique, contrat annuel
              transparent. Particuliers, copropriétés et hôtels du Chablais :
              vous bénéficiez du crédit impôt 50% sur l&apos;ensemble des
              prestations à domicile, attestation Urssaf fournie. Devis
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
                Crédit impôt 50%
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Sans produit chimique
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Contrat sans engagement
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
                Jardinier Thonon pour particuliers, syndics et professionnels
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Paysagiste du Chablais, nous entretenons aussi bien le jardin
                d&apos;une villa au bord du Léman qu&apos;un parc de copropriété
                de plusieurs milliers de m². Six profils types nous confient
                leur entretien annuel.
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
                Planning annuel cadré, jamais d&apos;improvisation
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Un jardin entretenu n&apos;est pas une succession
                d&apos;interventions ponctuelles : c&apos;est un calendrier
                cohérent sur 12 mois, qui suit le rythme des saisons du Chablais
                et anticipe pollens, gel et croissance estivale.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <li
                  key={s.title}
                  className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10"
                >
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                    {s.n}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brown/75">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SPECIFICITES CHABLAIS / LEMAN */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités du Chablais
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Un jardin lémanique ne s&apos;entretient pas comme ailleurs
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Pollens du printemps, microclimat humide, gel précoce, plan de
                  prévention des risques d&apos;inondation : le Chablais impose
                  un savoir-faire local que nos équipes maîtrisent depuis des
                  années.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  {LEMAN_POINTS.map((point) => (
                    <li key={point.title} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                      <span>
                        <strong>{point.title} :</strong> {point.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/lac-leman.jpg"
                  alt="Vue sur le lac Léman, contexte d'intervention paysagiste de GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRESTATIONS & CONTRATS */}
        <section id="prestations" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos prestations et contrats
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Tonte, taille, élagage, débroussaillage et plantation
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Toutes les prestations d&apos;entretien sont intégrables dans un
                contrat annuel jardin. Chaque ligne est chiffrée séparément dans
                le devis personnalisé sous 24 h, vous gardez la main sur ce que
                vous souhaitez ajouter ou retirer.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl ring-1 ring-cream/15">
              <table className="w-full text-left text-sm">
                <thead className="bg-cream/10 font-display text-xs font-bold uppercase tracking-wider text-cream/90">
                  <tr>
                    <th className="px-5 py-4">Prestation</th>
                    <th className="hidden px-5 py-4 md:table-cell">
                      Fréquence type
                    </th>
                    <th className="px-5 py-4">Détail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream/10 bg-brown/40">
                  {PRESTATIONS.map((p) => (
                    <tr key={p.label}>
                      <td className="px-5 py-4 align-top font-display text-sm font-bold uppercase tracking-tight text-cream">
                        {p.label}
                      </td>
                      <td className="hidden px-5 py-4 align-top text-sm text-cream/80 md:table-cell">
                        {p.rythme}
                      </td>
                      <td className="px-5 py-4 align-top text-sm text-cream/80">
                        <span className="block text-xs text-cream/60 md:hidden">
                          {p.rythme}
                        </span>
                        {p.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Contrat annuel transparent au passage
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Vous payez à l&apos;intervention réalisée, jamais en avance.
                  Pas de pénalité de résiliation. Réajustement saisonnier
                  possible chaque trimestre selon la croissance réelle.
                </p>
              </div>
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Crédit impôt 50% automatique
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Pour les particuliers, le crédit impôt 50% s&apos;applique à
                  toutes nos prestations à domicile. Attestation fiscale Urssaf
                  fournie en janvier, à joindre à votre déclaration.
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
                Paysagiste Chablais et rive sud du Léman
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nos équipes interviennent dans tout le bassin lémanique
                français, de Genève à Saint-Gingolph. Frais de déplacement
                offerts jusqu&apos;à 25 km autour de Thonon-les-Bains.
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
                href="/nettoyage-coproprietes-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage copropriétés
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Parties communes intérieures et extérieures, halls, cages
                  d&apos;escalier, contrats syndic cadrés au volume.
                </p>
              </Link>
              <Link
                href="/debarras-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Débarras
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Débarras de maison, cave, grenier, garage et jardin.
                  Évacuation, tri et valorisation en filière agréée du Chablais.
                </p>
              </Link>
              <Link
                href="/petite-maconnerie-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Petite maçonnerie
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Murets, dalles de terrasse, bordures de massif, pose de
                  clôtures. Travaux complémentaires à l&apos;entretien du
                  jardin.
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
                    Recevez votre devis entretien de jardin
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre besoin (surface de pelouse, mètres de
                    haie, fréquence souhaitée). Réponse chiffrée sous 24 heures
                    ouvrées, crédit impôt 50% inclus pour les particuliers.
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
                serviceLabel="Entretien espaces verts"
                source="espaces-verts_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
