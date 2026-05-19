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
  ClockIcon,
  ShieldIcon,
  WindowIcon,
  SofaIcon,
  HouseRefreshIcon,
  BuildingIcon,
  TruckIcon,
  LeafIcon,
  BrickIcon,
  SprayIcon,
} from "@/components/icons";

const SITE_URL = "https://www.ghservices.fr";

export const metadata: Metadata = {
  title: "Entreprise de nettoyage à Douvaine et Bas-Chablais | GH Services",
  description:
    "Société de nettoyage à Douvaine, frontière suisse. Particuliers, copros, frontaliers, commerces. Intervention rapide depuis Thonon. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-douvaine`,
  },
  openGraph: {
    title: "Entreprise de nettoyage à Douvaine | GH Services",
    description:
      "Société de nettoyage à Douvaine, frontière suisse. Particuliers, copros, frontaliers, commerces. Intervention rapide depuis Thonon.",
    url: `${SITE_URL}/nettoyage-douvaine`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/ville-3.jpg",
        width: 1600,
        height: 900,
        alt: "Entreprise de nettoyage à Douvaine, Bas-Chablais frontière suisse",
      },
    ],
  },
};

const KPIS = [
  { value: "15 ans", label: "d'expérience sur le Chablais" },
  { value: "24 h", label: "pour recevoir votre devis" },
  { value: "7 j/7", label: "joignables au téléphone" },
  { value: "5 sur 5", label: "note Google vérifiée" },
];

const PERSONAS = [
  {
    title: "Frontaliers genevois",
    desc: "Travailleurs sur Genève via la RD1005 ou la sortie A40 Bossey. Créneaux soir, samedi ou jours fériés suisses, remise des clés possible.",
  },
  {
    title: "Copropriétés résidentielles",
    desc: "Petits collectifs du centre de Douvaine et lotissements de la plaine. Halls, cages d'escalier, locaux poubelles, contrats syndic réguliers.",
  },
  {
    title: "Commerces du centre",
    desc: "Boutiques, restaurants, agences bancaires de la rue du Centre et de l'avenue de Genève. Passage en horaires d'ouverture ou de fermeture.",
  },
  {
    title: "Agences immobilières",
    desc: "Préparation de biens à la location ou à la vente, états des lieux entrants et sortants, photos pro après ménage. Partenariats long terme.",
  },
  {
    title: "Bailleurs aux frontaliers",
    desc: "Propriétaires qui louent à la clientèle franco-suisse. Rotation rapide entre locataires, factures détaillées pour comptabilité.",
  },
  {
    title: "Professions libérales",
    desc: "Cabinets médicaux, dentaires, kinés, notaires, avocats du centre de Douvaine. Hygiène stricte, intervention avant ou après les consultations.",
  },
];

const SPECIFICITES = [
  {
    title: "Demande créneaux soir et week-end",
    desc: "Près de la moitié des actifs de Douvaine travaillent en Suisse. Les logements sont vides la journée, l'accueil se fait souvent après 18 h ou le samedi. Notre planning intègre ces contraintes.",
  },
  {
    title: "Pollens forts au printemps",
    desc: "La plaine du Bas-Chablais entre Douvaine et le Léman est très exposée aux pollens d'avril à juin (bouleaux, peupliers, graminées). Les vitres et baies se voilent vite, nous renforçons les passages au printemps.",
  },
  {
    title: "Communes voisines accessibles",
    desc: "Loisin, Veigy-Foncenex, Massongy, Chens-sur-Léman et Yvoire sont à moins de 10 minutes par la route principale. Nous regroupons les tournées pour limiter les frais de déplacement.",
  },
  {
    title: "Zone commerciale en expansion",
    desc: "Le pôle commercial autour de la zone d'activités attire de nouvelles enseignes. Nous suivons les locaux pros, vitrines neuves, bureaux et locaux techniques avec des contrats adaptés aux ouvertures récentes.",
  },
];

const METHOD = [
  {
    title: "Proximité Thonon",
    desc: "Notre base est à 20 minutes par la D1005. Intervention rapide en cas d'urgence, dégât des eaux, état des lieux de dernière minute ou nettoyage post-fête.",
    Icon: TruckIcon,
  },
  {
    title: "Horaires adaptés frontaliers",
    desc: "Démarrage tôt le matin, fin tardive en soirée, samedi matin systématique. Vous n'avez pas à poser un jour de congé pour nous accueillir.",
    Icon: ClockIcon,
  },
  {
    title: "Contrats syndic ou ponctuel",
    desc: "Contrat mensuel pour les copropriétés et commerces, prestation unique pour les particuliers, fin de bail, gros ménage de printemps. Facture détaillée toujours fournie.",
    Icon: ShieldIcon,
  },
  {
    title: "Équipe stable et formée",
    desc: "Les mêmes intervenants reviennent chez vous, ce qui assure la régularité du résultat. Formation hygiène, sécurité, protocoles produits et port des EPI.",
    Icon: CheckIcon,
  },
];

const SERVICES = [
  {
    title: "Ménage à domicile",
    desc: "Entretien régulier des maisons et appartements de Douvaine, fréquence hebdomadaire ou bimensuelle.",
    Icon: HouseRefreshIcon,
    href: "/menage-thonon-les-bains",
  },
  {
    title: "Nettoyage de vitres",
    desc: "Lavage de vitres à l'eau osmosée, vérandas, baies, sans calcaire ni trace, jusqu'à 12 mètres.",
    Icon: WindowIcon,
    href: "/nettoyage-vitres-thonon",
  },
  {
    title: "Fin de bail et état des lieux",
    desc: "Remise des clés impeccable pour récupérer votre dépôt de garantie, attestation de prestation fournie.",
    Icon: SprayIcon,
    href: "/nettoyage-vitres-thonon",
  },
  {
    title: "Nettoyage de copropriétés",
    desc: "Parties communes, halls, escaliers, ascenseurs, vide-ordures. Contrat syndic avec cahier de présence.",
    Icon: BuildingIcon,
    href: "/nettoyage-coproprietes-thonon",
  },
  {
    title: "Nettoyage fin de chantier",
    desc: "Remise à neuf après travaux, dépoussiérage poussières fines, retrait de peinture, finitions vitres.",
    Icon: BrickIcon,
    href: "/fin-de-chantier-thonon",
  },
  {
    title: "Débarras maison et cave",
    desc: "Vidage complet de maison, garage, grenier, cave avant vente ou succession. Tri, don, recyclage.",
    Icon: SofaIcon,
    href: "/debarras-thonon",
  },
  {
    title: "Nettoyage textiles",
    desc: "Canapés, matelas, fauteuils, tapis, sièges auto. Injection-extraction sur place, séchage en quelques heures.",
    Icon: LeafIcon,
    href: "/nettoyage-textiles-thonon",
  },
  {
    title: "Nettoyage de commerce",
    desc: "Boutiques, restaurants, bureaux, salles d'attente de cabinet. Passage avant ou après l'ouverture au public.",
    Icon: SparkleSmallIcon,
    href: "/nettoyage-coproprietes-thonon",
  },
  {
    title: "Chalets et résidences secondaires",
    desc: "Préparation avant arrivée, ménage de départ, remise en service après l'hiver pour les biens du Léman.",
    Icon: HouseRefreshIcon,
    href: "/nettoyage-chalets-leman",
  },
];

const COMMUNES = [
  "Douvaine",
  "Massongy",
  "Loisin",
  "Veigy-Foncenex",
  "Chens-sur-Léman",
  "Yvoire",
  "Excenevex",
  "Sciez",
  "Margencel",
  "Bons-en-Chablais",
];

const TESTIMONIALS = [
  {
    author: "Christophe Lacroix",
    date: "Mars 2025",
    city: "Douvaine",
    body: "Une équipe sérieuse qui a parfaitement nettoyé notre maison avant la remise des clés. Devis clair, horaires respectés, factures détaillées. Très bonne expérience du début à la fin.",
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

const FAQ = [
  {
    q: "Quels horaires proposez-vous aux frontaliers travaillant en Suisse ?",
    a: "Nous démarrons les interventions dès 6 h 30 le matin et nous proposons des créneaux jusqu'à 20 h en semaine. Le samedi matin et après-midi sont disponibles sur réservation. La majorité de nos clients frontaliers de Douvaine choisissent un passage le jeudi en fin de journée ou le samedi matin, créneaux ouverts toute l'année.",
  },
  {
    q: "À quelle distance se trouve Genève depuis Douvaine ?",
    a: "Douvaine est à environ 20 kilomètres du centre de Genève par la RD1005 puis la douane de Veigy ou celle de Hermance. Comptez 25 à 35 minutes hors heures de pointe, 45 minutes à 1 heure le matin et le soir aux heures frontalières. Cette position explique notre clientèle majoritairement franco-suisse.",
  },
  {
    q: "Vous intervenez aussi depuis la sortie A40 Bossey ?",
    a: "Oui. Pour nos clients qui empruntent l'A40 par la sortie Bossey ou Saint-Julien-en-Genevois, nous synchronisons l'intervention avec leur retour de Suisse. Nous avons l'habitude de patienter quelques minutes à l'entrée si le passage de douane est ralenti, sans frais supplémentaire pour ces décalages courts.",
  },
  {
    q: "Le week-end est-il vraiment possible pour un nettoyage à Douvaine ?",
    a: "Oui. Nous travaillons le samedi matin et après-midi toute l'année, et le dimanche pour des urgences (état des lieux de dernière minute, dégât des eaux, location courte durée). Comptez une majoration de 25 pourcent le dimanche et les jours fériés français, communiquée dans le devis.",
  },
  {
    q: "Vous gérez les contrats avec les syndics de Douvaine ?",
    a: "Oui. Nous travaillons avec plusieurs syndics du Bas-Chablais sur des copropriétés de Douvaine, Massongy et Sciez. Cahier de présence signé, attestation d'assurance fournie, RC pro et décennale à jour. Devis sur appel d'offres possible, facture mensuelle TTC avec détail des prestations.",
  },
  {
    q: "Intervenez-vous à Loisin et Veigy-Foncenex le même jour ?",
    a: "Oui. Loisin est à 4 minutes de Douvaine, Veigy à 8 minutes, et Massongy à 5 minutes. Nous groupons les tournées sur la matinée ou l'après-midi pour optimiser les déplacements. Aucun frais supplémentaire pour ces communes voisines tant que la prestation reste sur la même demi-journée.",
  },
  {
    q: "Un frontalier payé en CHF peut-il régler la facture en euros ?",
    a: "Toutes nos factures sont émises en euros, TVA française. Les paiements se font par virement SEPA depuis un compte en euros, par chèque français ou par CB. Si vous êtes payé en CHF en Suisse, nous vous recommandons de transférer la somme nécessaire sur votre compte français avant l'échéance, le taux de change n'étant pas appliqué de notre côté.",
  },
  {
    q: "Combien de temps mettez-vous pour rejoindre Douvaine depuis Thonon ?",
    a: "Notre base opérationnelle est à Thonon-les-Bains. Par la RD1005, nous sommes au centre de Douvaine en 18 à 25 minutes hors heures de pointe, 30 minutes en heure d'affluence. Cette proximité nous permet d'assurer des interventions le jour même pour les urgences et de garder des prix maîtrisés sur le secteur du Bas-Chablais.",
  },
];

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/nettoyage-douvaine#localbusiness`,
  name: "GH Services Douvaine",
  parentOrganization: { "@id": `${SITE_URL}/#localbusiness` },
  url: `${SITE_URL}/nettoyage-douvaine`,
  telephone: "+33684665523",
  areaServed: COMMUNES.map((c) => ({ "@type": "City", name: c })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Douvaine",
    addressRegion: "Haute-Savoie",
    postalCode: "74140",
    addressCountry: "FR",
  },
  priceRange: "€€",
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-douvaine#service`,
  name: "Entreprise de nettoyage à Douvaine",
  serviceType: "Nettoyage et ménage",
  description:
    "Société de nettoyage à Douvaine et dans le Bas-Chablais : particuliers, copropriétés, commerces, frontaliers travaillant en Suisse. Ménage, vitres, fin de bail, débarras.",
  url: `${SITE_URL}/nettoyage-douvaine`,
  provider: { "@id": `${SITE_URL}/nettoyage-douvaine#localbusiness` },
  areaServed: COMMUNES.map((c) => ({ "@type": "City", name: c })),
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
  "@id": `${SITE_URL}/nettoyage-douvaine#faq`,
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
      name: "Nettoyage à Douvaine",
      item: `${SITE_URL}/nettoyage-douvaine`,
    },
  ],
};

export default function NettoyageDouvainePage() {
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
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d'Ariane"
          className="bg-cream pt-[120px] pb-2 md:pt-[140px]"
        >
          <div className="mx-auto max-w-[1280px] px-6 text-xs text-brown/60 lg:px-12">
            <Link href="/" className="hover:text-orange">
              Accueil
            </Link>
            <span className="mx-2 text-brown/30">/</span>
            <span className="text-brown/75">Nettoyage à Douvaine</span>
          </div>
        </nav>

        {/* HERO V4 GEOMETRIC SPLIT */}
        <section className="bg-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid overflow-hidden rounded-[40px] ring-1 ring-brown/10 lg:grid-cols-2">
              {/* Left : copy block */}
              <div className="bg-cream-soft p-8 sm:p-12 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 ring-1 ring-brown/10">
                  <span className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow" />
                    ))}
                  </span>
                  <span className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-brown">
                    17 avis 5 sur 5
                  </span>
                  <GoogleGIcon className="h-4 w-4" />
                </div>

                <h1 className="mt-6 font-display text-[34px] leading-[1.05] font-bold tracking-tight uppercase text-brown sm:text-[42px] lg:text-[52px]">
                  Entreprise de nettoyage à{" "}
                  <span className="text-orange">Douvaine</span> et Bas-Chablais
                </h1>

                <p className="mt-6 text-base text-brown/80 sm:text-lg">
                  Société de nettoyage installée à Thonon-les-Bains, nous
                  intervenons à Douvaine et dans toutes les communes du
                  Bas-Chablais. Particuliers, copropriétés, frontaliers
                  travaillant à Genève et commerces du centre. Devis chiffré
                  sous 24 heures, intervention rapide par la RD1005.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#devis"
                    className="inline-flex items-center rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_18px_40px_-12px_rgba(234,88,12,0.45)] transition-colors hover:bg-orange-dark"
                    data-track="devis"
                  >
                    Demander un devis
                  </a>
                  <a
                    href="tel:+33684665523"
                    className="inline-flex items-center gap-3 rounded-full border-2 border-brown/15 bg-cream px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-brown transition-colors hover:border-brown hover:bg-brown hover:text-cream"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    06 84 66 55 23
                  </a>
                </div>
              </div>

              {/* Right : full-bleed image */}
              <div className="relative min-h-[320px] lg:min-h-0">
                <Image
                  src="/photos/cities/ville-3.jpg"
                  alt="Vue du centre de Douvaine, secteur frontalier du Bas-Chablais"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* KPI cards under hero */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {KPIS.map((k) => (
                <div
                  key={k.label}
                  className="rounded-2xl bg-cream-soft px-6 py-5 ring-1 ring-brown/10"
                >
                  <p className="font-display text-3xl font-bold tracking-tight text-orange">
                    {k.value}
                  </p>
                  <p className="mt-1 text-sm text-brown/70">{k.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POUR QUI */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Douvaine
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Six profils que nous accompagnons au quotidien
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Douvaine vit au rythme de la frontière suisse. Notre clientèle
                locale mélange frontaliers genevois, propriétaires bailleurs,
                copropriétés et commerces récents. Chaque profil a ses
                contraintes horaires, ses attentes et son budget. Nous adaptons
                la prestation à chaque cas.
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

        {/* COMMENT ON INTERVIENT */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Comment on intervient à Douvaine
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Quatre engagements pour le Bas-Chablais
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre fonctionnement est pensé pour la réalité du secteur
                frontalier. Logistique courte depuis Thonon, créneaux étendus
                pour s'aligner sur les horaires des navetteurs vers Genève,
                contrats souples et équipe stable que vous reconnaissez à
                chaque passage.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {METHOD.map((m, i) => (
                <li
                  key={m.title}
                  className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange text-cream">
                    <m.Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-4 inline-block font-display text-xs font-bold uppercase tracking-wider text-orange">
                    Point {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brown/75">
                    {m.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SPECIFICITES DOUVAINE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités de Douvaine
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Le Bas-Chablais n'est pas un secteur comme les autres
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Une décennie d'interventions entre Thonon et Genève nous a
                  donné une lecture précise du secteur. Quatre facteurs locaux
                  pèsent sur la manière de planifier et de réaliser les
                  prestations à Douvaine et alentour.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  {SPECIFICITES.map((s) => (
                    <li key={s.title} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                      <span>
                        <strong>{s.title} :</strong> {s.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/ville-5.jpg"
                  alt="Plaine du Bas-Chablais entre Douvaine et le Léman, contexte d'intervention"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos services à Douvaine
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Neuf prestations pour particuliers et pros
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Une seule équipe, un seul interlocuteur, neuf savoir-faire. Du
                ménage à domicile au débarras complet de maison, en passant par
                le nettoyage de fin de bail si vous quittez votre logement de
                Douvaine pour Genève ou ailleurs. Cliquez sur chaque carte pour
                en savoir plus sur la prestation.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange text-cream">
                    <s.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brown/75">
                    {s.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNES VOISINES */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Communes voisines Bas-Chablais
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                De Douvaine à Yvoire, tout le secteur lémanique
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre rayon d'action couvre l'ensemble du Bas-Chablais
                lémanique, de la frontière suisse aux portes de Thonon. Frais
                de déplacement offerts dans tout ce périmètre, planning
                regroupé pour optimiser les coûts.
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

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Link
                href="/nettoyage-annemasse"
                className="group block rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage à Annemasse
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Plus à l'est de Genève, autre pôle frontalier majeur.
                </p>
              </Link>
              <Link
                href="/nettoyage-sciez"
                className="group block rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage à Sciez
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Commune voisine sur la rive sud du Léman, à 10 minutes.
                </p>
              </Link>
              <Link
                href="/menage-thonon-les-bains"
                className="group block rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Ménage à Thonon-les-Bains
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Notre base historique, 20 minutes de Douvaine par la D1005.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* TEMOIGNAGES */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Avis clients secteur Léman
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Ce que disent nos clients du Bas-Chablais
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

        {/* GALERIE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Galerie Douvaine
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Le secteur où nous intervenons
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Douvaine, sa plaine agricole, son centre commerçant et la rive
                sud du Léman toute proche. Trois clichés pour situer le
                terrain de jeu quotidien de notre équipe.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 md:grid-rows-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:row-span-2 md:aspect-auto">
                <Image
                  src="/photos/cities/ville-3.jpg"
                  alt="Centre de Douvaine, ambiance urbaine du Bas-Chablais"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/ville-5.jpg"
                  alt="Rue commerçante du Bas-Chablais, secteur frontalier"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/lac-leman-2.jpg"
                  alt="Rive sud du Lac Léman à proximité de Douvaine"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ Douvaine
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Questions fréquentes des frontaliers et habitants
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

        {/* DEVIS */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Recevez votre devis nettoyage à Douvaine
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Indiquez-nous le type de prestation (ménage régulier,
                    vitres, fin de bail, débarras, commerce) et vos contraintes
                    horaires de frontalier. Réponse chiffrée sous 24 heures
                    ouvrées, devis détaillé et sans engagement.
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
                    Disponible 7 j/7. Réponse immédiate en heures ouvrées
                    françaises.
                  </p>
                </a>

                <div className="rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-xs leading-relaxed text-red-900">
                  <strong>Aucun recrutement en cours.</strong>{" "}
                  Merci de ne pas téléphoner ni envoyer d&apos;e-mail pour une
                  candidature, les demandes spontanées ne sont pas traitées.
                </div>
              </aside>

              <ServiceQuoteForm
                serviceLabel="Nettoyage Douvaine"
                source="douvaine_hub"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
