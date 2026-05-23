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
  title: "Entreprise de nettoyage à Anthy-sur-Léman",
  description:
    "Nettoyage et ménage à Anthy-sur-Léman, rive sud du Léman. Villas, résidences secondaires, copros. Équipe à 10 min depuis Thonon. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-anthy-sur-leman`,
  },
  openGraph: {
    title: "Entreprise de nettoyage à Anthy-sur-Léman",
    description:
      "Nettoyage et ménage à Anthy-sur-Léman, rive sud du Léman. Villas pieds dans l'eau, résidences secondaires, copros petites unités. Équipe à 10 minutes depuis Thonon. Devis sous 24 heures.",
    url: `${SITE_URL}/nettoyage-anthy-sur-leman`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/lac-leman-7.jpg",
        width: 1600,
        height: 900,
        alt: "Port d'Anthy-sur-Léman et rive sud du lac, zone d'intervention GH Services",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Propriétaires villas pieds dans l'eau",
    desc: "Demeures lacustres avec accès direct au Léman, pontons privés et jardins clos descendant vers la berge. Entretien hebdomadaire ou bimensuel, vitrages face lac, terrasses bois, escaliers de jardin.",
  },
  {
    title: "Résidences secondaires lacustres",
    desc: "Maisons fermées la moitié de l'année par des familles parisiennes, lyonnaises ou genevoises. Ouverture avant arrivée, fermeture après départ, contrats annuels avec passages mensuels d'aération.",
  },
  {
    title: "Retraités vue Léman",
    desc: "Propriétaires installés à l'année dans le bourg d'Anthy, souvent dans des pavillons des années 70 rénovés. Ménage hebdomadaire, repassage, courses ponctuelles, entretien vitres deux fois par an.",
  },
  {
    title: "Copros petites unités",
    desc: "Résidences en R+2 ou R+3 sur la rive du Léman, 6 à 18 lots, halls, ascenseurs, locaux poubelles, sas vélos. Contrat syndic mensuel ou bimestriel, communication directe avec le conseil syndical.",
  },
  {
    title: "Bailleurs saisonniers",
    desc: "Propriétaires et conciergeries locatives Airbnb, Abritel, Booking sur la commune. Turnover entre 11 h et 14 h, contrôle visuel post départ, photos du logement remis, signalement des éventuelles dégradations.",
  },
  {
    title: "Hôtellerie boutique",
    desc: "Maisons d'hôtes, hôtels indépendants et tables avec chambres situés à proximité du port. Ménage quotidien des chambres, parties communes, soin particulier aux boiseries et aux pierres apparentes.",
  },
];

const COMMUNES_VOISINES = [
  "Anthy-sur-Léman",
  "Margencel",
  "Sciez",
  "Allinges",
  "Thonon-les-Bains",
  "Yvoire",
  "Excenevex",
  "Massongy",
];

const INTERVENTION_POINTS = [
  {
    title: "10 minutes depuis Thonon centre",
    desc: "Notre équipe est basée à Thonon-les-Bains et rejoint Anthy en 10 minutes par la D33. Les contrats récurrents sont planifiés sans frais de déplacement, et nous mutualisons les passages avec les autres prestations du secteur.",
  },
  {
    title: "Intervention discrète résidentielle",
    desc: "Sur les villas et résidences secondaires, nos intervenants travaillent en tenue identifiée mais sans signalétique sonore : véhicule garé à l'écart, aspirateurs basse vibration, pas de musique. Le voisinage ne perçoit pas la prestation.",
  },
  {
    title: "Gestion des volets et alarmes",
    desc: "Pour les propriétaires absents, nous prenons en charge la rotation jour-nuit des volets, l'activation et la désactivation des centrales d'alarme, la fermeture des portes-fenêtres et la vérification de la porte de garage en fin de mission.",
  },
  {
    title: "Partenariat conciergeries",
    desc: "Nous travaillons en sous-traitance de plusieurs conciergeries de la rive sud pour la partie ménage et turnover locatif. Process écrit, photos transmises dans l'heure suivant la fin de prestation, facturation mensuelle groupée.",
  },
];

const SPECIFICITES = [
  {
    title: "Embruns lacustres forts façade nord",
    desc: "Les vents dominants poussent l'humidité du lac sur les façades exposées au nord. Vitres et appuis se couvrent vite d'un voile minéral blanchâtre. L'eau osmosée et un rythme de passage rapproché sont indispensables sur ces orientations.",
  },
  {
    title: "Accès direct port et plage municipale",
    desc: "Le bourg s'organise autour du port d'Anthy et de la plage municipale, très fréquentés de mi-juin à mi-septembre. Nous calons les interventions tôt le matin pour préserver le stationnement et limiter la gêne aux riverains.",
  },
  {
    title: "Parquets huilés villas",
    desc: "Beaucoup de villas lacustres ont opté pour des parquets chêne ou mélèze huilés. Aucun produit ménager standard n'est utilisé sur ces sols : savon spécial bois huilé en dilution faible, balai mouilleur essoré, nourrissage annuel proposé.",
  },
  {
    title: "Climat humide automne printemps",
    desc: "D'octobre à avril, l'humidité de la rive favorise mousses, filaments verts et taches noires sur les terrasses bois et les murets côté nord. Traitement biodégradable préventif annuel pour ralentir la réapparition de 12 à 18 mois.",
  },
];

const SERVICES = [
  {
    title: "Ménage régulier maison",
    href: "/menage-thonon-les-bains",
    desc: "Forfait hebdomadaire ou bimensuel pour les villas et pavillons d'Anthy. Pièces de vie, sanitaires, cuisine, sols, dépoussiérage et repassage en option. Tarif éligible au crédit d'impôt 50 % services à la personne.",
  },
  {
    title: "Résidence secondaire et conciergerie",
    href: "/nettoyage-chalets-leman",
    desc: "Contrat annuel pour maison fermée plusieurs mois : visites mensuelles d'aération, ouverture saisonnière, fermeture automne, gestion des artisans, compte rendu photos envoyé au propriétaire.",
  },
  {
    title: "Nettoyage vitres et baies lac",
    href: "/nettoyage-vitres-thonon",
    desc: "Vitrages plein cintre face au Léman, baies coulissantes, vérandas et garde-corps verre. Lavage à l'eau osmosée pour neutraliser les embruns minéraux propres à la rive sud.",
  },
  {
    title: "Fin de bail et remise état",
    href: "/nettoyage-fin-de-bail-annemasse",
    desc: "Nettoyage approfondi avant état des lieux sortant, joints, dégraissage cuisine, calcaire salle de bains, vitres, parquets. Engagement satisfait ou refait avant remise des clés au bailleur.",
  },
  {
    title: "Nettoyage textiles à domicile",
    href: "/nettoyage-textiles-thonon",
    desc: "Canapés tissu, fauteuils, têtes de lit, matelas et tapis. Injection-extraction sur place, séchage rapide grâce à la ventilation des baies entrouvertes, retrait des odeurs lac et fumée bois.",
  },
  {
    title: "Fin de chantier après travaux",
    href: "/fin-de-chantier-thonon",
    desc: "Remise à neuf après rénovation d'une villa lémanique : retrait des poussières fines, traces de peinture sur vitres, résidus de joint silicone, contrôle vitre par vitre avant livraison maître d'ouvrage.",
  },
  {
    title: "Copropriétés rive sud",
    href: "/nettoyage-coproprietes-thonon",
    desc: "Halls, ascenseurs, cages d'escalier, locaux poubelles, sas vélos. Passage hebdomadaire ou bimensuel selon le volume, contrat syndic adapté, interlocuteur unique pour le conseil syndical.",
  },
  {
    title: "Espaces verts et terrasses",
    href: "/entretien-espaces-verts-thonon",
    desc: "Tonte, taille de haies, ramassage feuilles d'automne, soufflage allées et terrasses bois. Passage calé sur les arrivées et départs des propriétaires de résidences secondaires.",
  },
  {
    title: "Débarras hors saison",
    href: "/debarras-thonon",
    desc: "Évacuation de mobilier extérieur abîmé, vieux pédalo ou paddle, vélos, jouets jardin, déchets verts en fin d'automne. Tri sélectif et dépôt en déchetterie intercommunale du Bas-Chablais.",
  },
];

const TESTIMONIALS = [
  {
    author: "Genève Expat",
    date: "Mai 2025",
    body: "Nous avons fait appel aux services de nettoyage de GH Services à notre entière satisfaction. Il s'agissait du nettoyage de notre maison avant remise des clés.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif et avec lequel le contact a été très agréable.",
  },
  {
    author: "Shacy Will",
    date: "Avril 2025",
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top. Je recommande cette société avec qui j'espère continuer de travailler.",
  },
];

const FAQ = [
  {
    q: "Vous proposez une conciergerie pour absence longue à Anthy ?",
    a: "Oui. Pour les propriétaires absents plusieurs mois (Genève, Paris, étranger), nous proposons un contrat de gestion résidence secondaire avec passage mensuel ou bimestriel. À chaque visite : aération complète, contrôle des pièces, ouverture des volets, vidage des eaux stagnantes, relève du courrier, et envoi d'un compte rendu photos dans la journée. C'est la formule la plus demandée à Anthy.",
  },
  {
    q: "Les villas pieds dans l'eau souffrent d'humidité, comment vous gérez ?",
    a: "Les maisons en contact direct avec la rive du Léman concentrent l'humidité, surtout en demi-saison. Nous combinons aération séquencée à chaque passage, traitement antimoisissures préventif sur les joints sanitaire et silicone, et vérification des grilles de ventilation. Pour les caves et pièces enterrées, nous proposons un déshumidificateur d'appoint en hivernage.",
  },
  {
    q: "Le port d'Anthy crée des embruns, vos lavages tiennent combien de temps ?",
    a: "Les façades exposées au lac, surtout côté nord, reçoivent des projections fines qui laissent un voile minéral en séchant. Sur une villa rive Anthy, un lavage de vitres tient en moyenne 4 à 6 semaines en extérieur, contre 8 à 12 semaines en intérieur. Nous proposons des forfaits trimestriels qui couvrent printemps, été, automne avec un passage gratuit en cas de salissure anormale entre deux interventions.",
  },
  {
    q: "Quelle est la distance entre votre base et Anthy-sur-Léman ?",
    a: "Notre base logistique se trouve à Thonon-les-Bains. La liaison par la D33 puis la D33A prend en moyenne 10 minutes hors heures de pointe, 12 à 15 minutes en saison estivale. Aucun frais de déplacement n'est facturé pour les contrats récurrents ou les prestations programmées dans une tournée du secteur.",
  },
  {
    q: "Comment gérez-vous les clés et l'alarme d'une maison vide ?",
    a: "Pour chaque propriétaire absent, nous mettons en place un protocole écrit : trousseau remis sous décharge signée, boîte à clés à code installée à un endroit discret, ou clé déposée chez un voisin référent. Le code d'alarme est conservé dans un coffre numérique chiffré, accessible uniquement à la référente de votre maison. Chaque entrée et sortie est tracée dans un journal d'accès.",
  },
  {
    q: "Mes parquets huilés exigent un produit précis, vous savez les entretenir ?",
    a: "Oui. Sur les parquets chêne, mélèze ou sapin huilés, nous bannissons les produits ménagers du commerce qui laissent auréoles et film gras. Nous utilisons un savon spécifique bois huilé dilué à faible dose, appliqué au balai mouilleur essoré au maximum. Une fois par an, nous proposons un nourrissage à l'huile dure adaptée à l'essence du parquet, qui conserve la patine d'origine.",
  },
  {
    q: "Notre syndic gère une petite copro à Anthy, vous facturez comment ?",
    a: "Pour les copropriétés de 6 à 30 lots, nous proposons un contrat annuel avec passages calibrés sur le volume des parties communes. Facturation mensuelle au syndic avec une seule ligne de prestation, attestation annuelle URSSAF, certificat d'assurance responsabilité civile pro renouvelé chaque janvier. Un seul interlocuteur côté GH Services pour le conseil syndical.",
  },
  {
    q: "Pouvez-vous faire la remise en état après une location saisonnière ?",
    a: "Oui. Pour les propriétaires Airbnb, Abritel ou Booking, nous intervenons entre 11 h et 14 h pour respecter la fenêtre standard de turnover. Prestation complète : changement de literie si linge fourni, lessivage cuisine et sanitaires, vidage poubelles, contrôle visuel pièce par pièce, photos transmises au propriétaire avant l'arrivée du locataire suivant. Tarif forfaitaire par turnover, sans engagement de durée.",
  },
];

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/nettoyage-anthy-sur-leman#localbusiness`,
  name: "GH Services Anthy-sur-Léman",
  parentOrganization: { "@id": `${SITE_URL}/#localbusiness` },
  url: `${SITE_URL}/nettoyage-anthy-sur-leman`,
  telephone: "+33684665523",
  image: `${SITE_URL}/photos/cities/lac-leman-7.jpg`,
  priceRange: "€€",
  areaServed: COMMUNES_VOISINES.map((c) => ({ "@type": "City", name: c })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Anthy-sur-Léman",
    postalCode: "74200",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-anthy-sur-leman#service`,
  name: "Nettoyage à Anthy-sur-Léman",
  serviceType: "Entreprise de nettoyage",
  description:
    "Entreprise de nettoyage à Anthy-sur-Léman pour villas pieds dans l'eau, résidences secondaires lacustres, copropriétés rive sud, bailleurs saisonniers et hôtellerie boutique. Équipe basée à Thonon, intervention à 10 minutes.",
  url: `${SITE_URL}/nettoyage-anthy-sur-leman`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: COMMUNES_VOISINES.map((c) => ({ "@type": "City", name: c })),
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
  "@id": `${SITE_URL}/nettoyage-anthy-sur-leman#faq`,
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
      name: "Nettoyage à Anthy-sur-Léman",
      item: `${SITE_URL}/nettoyage-anthy-sur-leman`,
    },
  ],
};

export default function NettoyageAnthySurLemanPage() {
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
        {/* HERO V3 FULL-BLEED PHOTO */}
        <section className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden text-cream">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/cities/lac-leman-7.jpg"
              alt="Port d'Anthy-sur-Léman et rive sud du Léman au lever du jour"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brown/35" />
          </div>

          <div className="mx-auto w-full max-w-[1100px] px-6 pt-[160px] pb-24 text-center lg:px-12">
            <nav
              aria-label="Fil d'Ariane"
              className="mb-12 text-xs text-cream/75"
            >
              <Link href="/" className="hover:text-cream">
                Accueil
              </Link>
              <span className="mx-2 text-cream/40">/</span>
              <span className="text-cream/95">
                Entreprise de nettoyage à Anthy-sur-Léman
              </span>
            </nav>

            <p className="font-display text-[11px] font-bold uppercase tracking-[0.42em] text-cream/85">
              Rive sud du Léman, port d&apos;Anthy
            </p>
            <span
              aria-hidden
              className="mx-auto mt-5 block h-px w-14 bg-orange"
            />

            <h1 className="mt-7 font-display text-[38px] leading-[1.04] font-bold tracking-tight uppercase text-cream sm:text-[54px] md:text-[68px]">
              Entreprise de nettoyage à{" "}
              <span className="text-orange">Anthy-sur-Léman</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base text-cream/95 sm:text-lg">
              Société de nettoyage locale au service des villas pieds dans
              l&apos;eau, des résidences secondaires lacustres, des copropriétés
              du port et des bailleurs saisonniers. Équipe à 10 minutes depuis
              Thonon, devis sous 24 heures, contrats annuels à la carte.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#devis"
                className="inline-flex items-center rounded-full bg-orange px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_20px_44px_-12px_rgba(0,0,0,0.55)] transition-colors hover:bg-orange-dark"
                data-track="devis"
              >
                Demander un devis
              </a>
              <a
                href="tel:+33684665523"
                className="inline-flex items-center gap-3 rounded-full border-2 border-cream/45 bg-cream px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-brown backdrop-blur-md transition-colors hover:bg-cream/90"
              >
                <PhoneIcon className="h-4 w-4" />
                06 84 66 55 23
              </a>
            </div>

            <div className="mt-14 inline-flex items-center gap-2 text-xs text-cream/80">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5 text-yellow" />
                ))}
              </span>
              <span className="font-display font-semibold uppercase tracking-[0.18em]">
                17 avis 5 sur 5 sur Google
              </span>
            </div>
          </div>
        </section>

        {/* POUR QUI ANTHY */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Anthy
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Six profils typiques du bourg et du port
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Anthy-sur-Léman compte près de 2 800 habitants permanents et
                accueille chaque été des familles propriétaires lacustres venues
                de Paris, Lyon, Genève ou Londres. La demande de ménage
                Anthy-sur-Léman se concentre sur six profils bien identifiés.
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

        {/* NOTRE INTERVENTION A ANTHY */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre intervention à Anthy
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Quatre piliers du service Anthy-sur-Léman
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre entreprise nettoyage Anthy s&apos;appuie sur une équipe
                basée à Thonon, des process écrits pour propriétaires absents et
                un partenariat de confiance avec les conciergeries lacustres du
                secteur.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {INTERVENTION_POINTS.map((s) => (
                <li
                  key={s.title}
                  className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10"
                >
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brown">
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

        {/* SPECIFICITES ANTHY */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités Anthy-sur-Léman
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Quatre réalités locales à connaître
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Le village a son propre tempérament : embruns lacustres
                  marqués sur les façades nord, accès au port et à la plage
                  municipale très utilisé, parquets huilés dans la plupart des
                  villas et climat humide d&apos;octobre à avril.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  {SPECIFICITES.map((sp) => (
                    <li key={sp.title} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                      <span>
                        <strong>{sp.title} :</strong> {sp.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/lac-leman-8.jpg"
                  alt="Rive sud du Léman à proximité d'Anthy-sur-Léman, contexte d'intervention villas et copros"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NOS SERVICES A ANTHY */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos services à Anthy
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Neuf prestations pour propriétaires lacustres
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Du ménage hebdomadaire à la fin de bail Anthy en passant par la
                conciergerie villa Anthy, notre catalogue couvre tous les
                besoins d&apos;une maison de la rive sud. Les services
                techniques sont rattachés aux hubs Thonon de notre catalogue.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
                >
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brown/70">
                    {s.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNES VOISINES RIVE SUD */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Communes voisines rive sud
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Huit communes du Bas-Chablais lémanique
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Une seule tournée couvre la bande rive sud autour
                d&apos;Anthy : Margencel à l&apos;ouest, Sciez et Excenevex en
                allant vers Yvoire, Thonon à l&apos;est avec Allinges et
                Massongy en arrière-pays. Maillage pensé pour mutualiser les
                déplacements.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {COMMUNES_VOISINES.map((z) => (
                <li key={z}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 text-sm font-medium text-brown ring-1 ring-brown/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    {z}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Link
                href="/nettoyage-yvoire"
                className="group block rounded-2xl bg-cream-soft p-5 ring-1 ring-brown/10 transition-colors hover:bg-cream"
              >
                <p className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Village médiéval voisin
                </p>
                <p className="mt-1 font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage Yvoire
                </p>
              </Link>
              <Link
                href="/nettoyage-sciez"
                className="group block rounded-2xl bg-cream-soft p-5 ring-1 ring-brown/10 transition-colors hover:bg-cream"
              >
                <p className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Commune limitrophe
                </p>
                <p className="mt-1 font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Nettoyage Sciez
                </p>
              </Link>
              <Link
                href="/nettoyage-chalets-leman"
                className="group block rounded-2xl bg-cream-soft p-5 ring-1 ring-brown/10 transition-colors hover:bg-cream"
              >
                <p className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Spécialité Léman
                </p>
                <p className="mt-1 font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Chalets et résidences secondaires
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
                  Avis clients
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

        {/* GALERIE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Galerie Anthy
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Le décor de nos prestations
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 md:grid-rows-2 md:[grid-template-areas:'a_a''b_c']">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:aspect-auto md:[grid-area:a]">
                <Image
                  src="/photos/cities/lac-leman-7.jpg"
                  alt="Port d'Anthy-sur-Léman vu depuis la rive, secteur de villas et résidences secondaires"
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:[grid-area:b]">
                <Image
                  src="/photos/cities/lac-leman-8.jpg"
                  alt="Berges du Léman à proximité d'Anthy, copropriétés et villas lacustres"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:[grid-area:c]">
                <Image
                  src="/photos/cities/evian-3.jpg"
                  alt="Paysage lémanique côté Évian, axe Thonon Anthy résidences secondaires"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ANTHY */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ Anthy
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Questions fréquentes des propriétaires
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

        {/* CTA FINAL DEVIS */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Votre devis nettoyage Anthy-sur-Léman
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Indiquez l&apos;adresse à Anthy ou commune voisine, le type
                    de bien (villa pieds dans l&apos;eau, résidence secondaire,
                    copropriété, location saisonnière, hôtellerie boutique), la
                    surface et la fréquence souhaitée. Réponse chiffrée sous
                    24 heures ouvrées, avec proposition de planning annuel si
                    pertinent.
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
                    Équipe basée à Thonon-les-Bains, 10 minutes d&apos;Anthy par
                    la D33. Disponibilité 7 j/7 sur rendez-vous.
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
                serviceLabel="Nettoyage Anthy"
                source="anthy_hub"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
