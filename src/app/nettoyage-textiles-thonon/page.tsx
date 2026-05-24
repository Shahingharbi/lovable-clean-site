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
    "Nettoyage canapé, tapis et moquette à Thonon",
  description:
    "Nettoyage canapés tissu/cuir, tapis, matelas, moquettes à domicile à Thonon. Injection-extraction, anti-acariens, séchage rapide. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-textiles-thonon`,
  },
  openGraph: {
    title:
      "Nettoyage canapé, tapis et moquette à Thonon",
    description:
      "Nettoyage canapés tissu/cuir, tapis, matelas, moquettes à domicile à Thonon. Injection-extraction, anti-acariens, séchage rapide.",
    url: `${SITE_URL}/nettoyage-textiles-thonon`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-textile.jpg",
        width: 1600,
        height: 900,
        alt: "Nettoyage professionnel de canapés, tapis et moquettes à Thonon-les-Bains",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Familles avec enfants",
    desc: "Canapés tissu chargés en miettes, jus, feutres, salissures quotidiennes. Traitement anti-acariens et produits sans solvant pour préserver la santé des plus jeunes.",
  },
  {
    title: "Propriétaires de canapés cuir",
    desc: "Nettoyage doux du cuir véritable, nourrissage et protection. Produits adaptés cuir lisse, nubuck et cuir pleine fleur, sans agresser la patine.",
  },
  {
    title: "Locataires fin de bail",
    desc: "Remise en état des moquettes et canapés inclus dans le mobilier loué. Indispensable pour récupérer 100 % de la caution lors de l'état des lieux sortant.",
  },
  {
    title: "Hôtels et chambres d'hôtes",
    desc: "Matelas, têtes de lit, fauteuils de chambre, rideaux, moquettes de couloir. Rotation rapide entre deux séjours, séchage en moins de 2 heures.",
  },
  {
    title: "Restaurants",
    desc: "Banquettes, chaises tissu, moquettes de salle. Détachage spécifique vin, gras, café. Intervention de nuit ou hors service possible à Thonon, Évian, Yvoire.",
  },
  {
    title: "Allergiques aux acariens",
    desc: "Traitement vapeur 65 °C sur matelas, canapés et tapis. Élimination des acariens et de leurs déjections, sans biocide. Recommandé en cas d'asthme ou de rhinite.",
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

const SUPPORTS = [
  {
    name: "Canapé 2 places",
    detail: "Tissu ou microfibre, assises et dossiers, traitement anti-acariens inclus.",
  },
  {
    name: "Canapé 3 places",
    detail: "Tissu, microfibre ou cuir. Coussins déhoussables traités séparément si besoin.",
  },
  {
    name: "Fauteuil et bergère",
    detail: "Shampoing fauteuil par injection-extraction, séchage rapide air comprimé.",
  },
  {
    name: "Matelas simple ou double",
    detail: "Traitement vapeur 65 °C anti-acariens, désinfection en profondeur, sans biocide.",
  },
  {
    name: "Tapis au m²",
    detail: "Tapis machine, tapis berbère, kilim, tapis de chalet en laine. Diagnostic fibre préalable.",
  },
  {
    name: "Moquette pièce ou domicile complet",
    detail: "Injection-extraction sur moquette collée ou tendue, détachage localisé compris.",
  },
  {
    name: "Rideaux et voilages",
    detail: "Nettoyage en place ou en atelier selon la matière, sans démontage des tringles.",
  },
];

const FAQ = [
  {
    q: "Combien de temps de séchage après injection-extraction ?",
    a: "Sur un canapé tissu, comptez 3 à 5 heures avant remise en service complète, et 1 à 2 heures pour un usage normal grâce à notre système d'extraction haute dépression et à la finition à l'air comprimé. Pour une moquette, prévoyez 4 à 8 heures avec aération de la pièce. La pièce reste utilisable, simplement évitez les chaussures et les chaussettes blanches sur la zone traitée.",
  },
  {
    q: "Traitez-vous le cuir véritable ?",
    a: "Oui. Le cuir lisse, le cuir pleine fleur et la croûte de cuir nécessitent un protocole spécifique : nettoyage à la mousse sèche, rinçage micro-fibre, puis nourrissage par crème spéciale cuir. Nous ne pratiquons pas l'injection-extraction sur cuir véritable, technique réservée aux textiles. Le nubuck et le cuir suédé exigent un test préalable sur zone cachée.",
  },
  {
    q: "Pouvez-vous enlever une tache de vin sèche ?",
    a: "Dans la majorité des cas, oui. Une tache de vin rouge (Apremont, Mondeuse, Gamay) fixée depuis plusieurs semaines reste traitable par pré-détachage à pH alcalin puis injection-extraction. Le taux de réussite dépend de la fibre (laine, coton, polyester), du fait que la tache ait été lavée à l'eau chaude (à éviter) et de l'ancienneté. Nous évaluons la tache avant intervention, sans engagement.",
  },
  {
    q: "Vous intervenez à domicile ou en atelier ?",
    a: "À domicile dans 95 % des cas : canapés, matelas, moquettes collées ou tendues, fauteuils, tapis volumineux. Notre matériel professionnel d'injection-extraction est entièrement transportable. Pour les tapis fragiles, berbères ou en soie, nous pouvons proposer un enlèvement en atelier pour un traitement par immersion contrôlée.",
  },
  {
    q: "Vos produits sont écologiques ?",
    a: "Oui. Nous travaillons avec des détergents biodégradables certifiés Ecolabel, sans solvant chloré, sans phosphate et sans parfum allergène. Pour le traitement anti-acariens, nous privilégions la vapeur sèche à 65 °C, sans biocide. Compatible familles avec enfants en bas âge, animaux de compagnie et personnes allergiques.",
  },
  {
    q: "Faut-il déplacer les meubles ?",
    a: "Pour le nettoyage d'un canapé ou d'un fauteuil seul, aucun déplacement n'est nécessaire. Pour une moquette pièce complète, nous déplaçons les meubles légers (chaises, petites tables) sans surcoût et protégeons les pieds des meubles lourds avec des cales étanches le temps du séchage. Les armoires et bibliothèques peuvent rester en place, nous nettoyons jusqu'au ras.",
  },
  {
    q: "Vos prestations sont-elles éligibles au crédit d'impôt ?",
    a: "Oui pour les particuliers, à domicile. Le nettoyage de canapés, tapis, matelas et moquettes entre dans le cadre des services à la personne agréés. Vous récupérez 50 % du montant TTC sous forme de crédit d'impôt, attestation fiscale fournie automatiquement en fin d'année. Non applicable aux professionnels et locaux commerciaux.",
  },
  {
    q: "Quel délai d'intervention ?",
    a: "Devis chiffré sous 24 heures à partir de photos ou d'une visite. Intervention planifiée sous 5 à 10 jours selon votre disponibilité et la période. En urgence (fin de bail, dégât, état des lieux), nous proposons des créneaux sous 48 à 72 heures dans la limite des plannings. Pour les hôtels, planning récurrent négocié en début de saison.",
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
  "@id": `${SITE_URL}/nettoyage-textiles-thonon#service`,
  name: "Nettoyage canapé, tapis et moquette à Thonon-les-Bains",
  serviceType: "Nettoyage de textiles",
  description:
    "Nettoyage professionnel de canapés tissu et cuir, tapis berbères et machine, matelas anti-acariens, moquettes domicile par injection-extraction. Intervention à domicile sur Thonon, Évian et tout le Chablais lémanique.",
  url: `${SITE_URL}/nettoyage-textiles-thonon`,
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
  "@id": `${SITE_URL}/nettoyage-textiles-thonon#faq`,
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
      name: "Nettoyage canapé, tapis et moquette à Thonon",
      item: `${SITE_URL}/nettoyage-textiles-thonon`,
    },
  ],
};

export default function NettoyageTextilesThononPage() {
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
              src="/photos/service-textile.jpg"
              alt="Nettoyage de canapé tissu par injection-extraction à Thonon-les-Bains"
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
              Nettoyage de canapés, tapis et moquettes à{" "}
              <span className="text-orange">Thonon-les-Bains</span>{" "}
              et en région lémanique
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Nettoyage canapé tissu et cuir, tapis berbère, moquette à
              domicile, matelas anti-acariens, fauteuil et rideaux. Méthode
              professionnelle par injection-extraction haute dépression,
              vapeur sèche 65 °C et détachage ciblé sur les taches courantes
              (vin rouge, café, gras, encre). Intervention à domicile à
              Thonon, Évian et tout le Chablais lémanique. Devis personnalisé
              sous 24 heures.
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
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />À
                domicile
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Séchage rapide
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Anti-acariens
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
                Familles, hôteliers, restaurateurs, allergiques
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre service de nettoyage textile s&apos;adresse à tous
                ceux qui veulent retrouver la propreté, l&apos;hygiène et
                l&apos;aspect d&apos;origine de leurs canapés, fauteuils,
                tapis, matelas et moquettes, sans les remplacer.
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
                Injection-extraction et vapeur 65 °C, séchage rapide
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Quatre étapes professionnelles pour un nettoyage en
                profondeur, sans détrempage de la mousse, sans auréole et
                sans risque pour la fibre. Méthode validée sur tissu,
                microfibre, laine, cuir et synthétique.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Diagnostic fibre
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Identification de la composition (laine, coton,
                  polyester, microfibre, cuir), test de solidité des
                  couleurs sur zone cachée et choix du protocole adapté.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Aspiration et pré-traitement
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Aspiration profonde HEPA pour retirer poussières, poils et
                  acariens, puis pré-détachage des zones marquées avec un
                  pré-spray adapté au pH de la fibre.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Injection-extraction ou vapeur 65 °C
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Injection d&apos;eau tiède et de détergent biodégradable
                  puis extraction immédiate par dépression. Vapeur sèche
                  65 °C en finition pour les matelas et l&apos;anti-acariens.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Séchage rapide air comprimé
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Soufflage air comprimé sur les zones humides, brossage de
                  redressement des fibres. Remise en service en 1 à 2 h
                  pour un canapé, 4 à 8 h pour une moquette.
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
                  Spécificités du Chablais
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Les textiles du Chablais souffrent différemment
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Climat humide du Léman, vie en altitude, gastronomie
                  savoyarde et compagnons à quatre pattes : les textiles
                  d&apos;intérieur du Chablais accumulent des salissures
                  bien spécifiques. Quatre points à connaître.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Humidité ambiante :</strong> le climat humide
                      du Chablais favorise le développement des acariens
                      dans les matelas, canapés et moquettes. Un traitement
                      vapeur 65 °C annuel est fortement recommandé.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Fibres naturelles de chalet :</strong> tapis
                      berbères, kilims, tapis en laine épaisse de chalet
                      d&apos;altitude. Fibres délicates qui exigent un pH
                      neutre et un séchage maîtrisé.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Taches courantes de la région :</strong> vin
                      d&apos;Apremont, café, gras de raclette et fondue,
                      chocolat fondu. Chaque tache a son détergent et son
                      ordre de traitement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Poils d&apos;animaux et randonnée :</strong>
                      {" "}chiens de famille rentrant boueux, terre, brins
                      d&apos;herbe et sève sur les canapés. Aspiration HEPA
                      avant injection-extraction.
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

        {/* PRESTATIONS TEXTILE */}
        <section id="prestations" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos prestations textile
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Supports traités par GH Services
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Devis personnalisé sous 24 heures après envoi de photos ou
                visite sur place. Le tarif dépend de la dimension, de la
                fibre, du niveau d&apos;encrassement et du nombre de taches
                à traiter.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl bg-cream ring-1 ring-cream/20">
              <table className="w-full text-left text-sm text-brown">
                <thead className="bg-cream-soft">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-display text-xs font-bold uppercase tracking-wider text-brown"
                    >
                      Support
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-display text-xs font-bold uppercase tracking-wider text-brown"
                    >
                      Méthode
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brown/10">
                  {SUPPORTS.map((s) => (
                    <tr key={s.name}>
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-display text-sm font-bold uppercase tracking-tight text-brown"
                      >
                        {s.name}
                      </th>
                      <td className="px-6 py-4 text-brown/75">{s.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Devis personnalisé sous 24 h après photos
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Envoyez-nous 2 ou 3 photos de chaque support à traiter
                  par e-mail ou WhatsApp. Réponse chiffrée détaillée sous
                  24 heures ouvrées, sans engagement.
                </p>
              </div>
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                  Crédit d&apos;impôt 50 % à domicile
                </h3>
                <p className="mt-2 text-sm text-cream/80">
                  Le nettoyage de textiles à domicile entre dans le cadre
                  des services à la personne agréés. Particuliers : 50 % du
                  montant TTC remboursé en crédit d&apos;impôt, attestation
                  fournie automatiquement.
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
                Nous nous déplaçons sur tout le bassin lémanique français,
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
                href="/menage-thonon-les-bains"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Ménage à domicile
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Entretien régulier de votre logement à Thonon, du
                  ponctuel à l&apos;hebdomadaire, crédit d&apos;impôt 50 %.
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
                  Préparation à la remise des clés, moquette et canapés
                  inclus, pour récupérer 100 % de votre caution.
                </p>
              </Link>
              <Link
                href="/fin-de-chantier-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage fin de chantier
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Remise à neuf après travaux, dépoussiérage profond,
                  retrait des résidus de peinture et plâtre.
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
                    Recevez votre devis nettoyage textiles
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre besoin (canapé, tapis, matelas,
                    moquette, dimensions, type de taches). Joignez 2 ou 3
                    photos si possible. Réponse chiffrée sous 24 heures
                    ouvrées.
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
                serviceLabel="Nettoyage textiles"
                source="textiles_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
