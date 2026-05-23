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
  title: "Déménagement à Thonon-les-Bains",
  description:
    "Déménagement local à Thonon, Évian et Chablais. Petits et moyens volumes, monte-meuble, emballage. Combo nettoyage fin de bail. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/demenagement-thonon`,
  },
  openGraph: {
    title: "Déménagement à Thonon-les-Bains",
    description:
      "Déménagement local à Thonon, Évian et Chablais. Petits et moyens volumes, monte-meuble, emballage. Combo nettoyage fin de bail. Devis 24 h.",
    url: `${SITE_URL}/demenagement-thonon`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-demenagement.jpg",
        width: 1600,
        height: 900,
        alt: "Déménageurs en intervention à Thonon-les-Bains",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Étudiants studio et T2",
    desc: "Premier emménagement, rentrée universitaire, retour au domicile parental. Petit volume, équipe rapide, tarif maîtrisé pour budget étudiant.",
  },
  {
    title: "Jeunes familles, premier emménagement",
    desc: "Achat d'un appartement ou d'une petite maison sur Thonon, Allinges ou Publier. Transport meubles soignés, démontage et remontage du lit bébé inclus.",
  },
  {
    title: "Retraités vers logement plus petit",
    desc: "Passage d'une maison à un appartement de plain-pied. Manutention douce, conseil sur les meubles à conserver, combo débarras possible.",
  },
  {
    title: "Locataires en changement d'adresse",
    desc: "Déménagement étudiant, mutation locale, séparation. Combo nettoyage fin de bail pour récupérer la caution dans le même créneau.",
  },
  {
    title: "Propriétaires, achat d'une maison",
    desc: "Transport du contenu d'un appartement vers une maison du Chablais. Monte-meuble pour les étages sans ascenseur, protection des sols neufs.",
  },
  {
    title: "Frontaliers travaillant à Genève",
    desc: "Installation côté France (Thonon, Douvaine, Bons-en-Chablais). Prestation locale uniquement, sans passage de douane suisse.",
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
    q: "Vous faites du transfrontalier France-Suisse ?",
    a: "Non, GH Services est un déménageur local du Chablais. Nous intervenons uniquement côté France, sur Thonon, Évian, Annemasse, Douvaine et les communes voisines. Pour un déménagement transfrontalier vers Genève, Lausanne ou ailleurs en Suisse, avec passage de douane et formalités, nous vous orientons vers un partenaire dédié spécialisé sur ce type de transport.",
  },
  {
    q: "À quoi sert le monte-meuble ?",
    a: "Le monte-meuble est une plateforme élévatrice qui hisse vos meubles directement par la fenêtre ou le balcon, jusqu'à 6 ou 7 étages. Indispensable dans les immeubles anciens du centre de Thonon sans ascenseur, ou quand les cages d'escalier sont trop étroites pour un canapé d'angle, un matelas king size ou une armoire massive. Il évite la casse et accélère considérablement le chargement.",
  },
  {
    q: "Combien coûte un déménagement studio ?",
    a: "Le tarif dépend du volume réel (cube), de la distance entre les deux adresses, du nombre d'étages, de la présence ou non d'un ascenseur et de la nécessité d'un monte-meuble. Pour un studio classique local, sans contrainte particulière, le budget est très accessible. Nous établissons un devis personnalisé sous 24 h, fixe et sans surprise, après visite sur place ou simple envoi de photos.",
  },
  {
    q: "Le combo nettoyage est-il inclus ?",
    a: "Non, c'est une option mais c'est notre vraie particularité. Nous sommes l'un des rares prestataires du Chablais à proposer dans la même journée le déménagement et le nettoyage de fin de bail du logement quitté. Vous gagnez un temps précieux, vous évitez de coordonner deux prestataires différents et vous maximisez vos chances de récupérer 100 % de votre caution.",
  },
  {
    q: "Vous emballez les cartons ?",
    a: "Oui, sur demande. Soit nous fournissons uniquement les cartons et le matériel d'emballage (papier bulle, adhésif, housses matelas), soit notre équipe vient sur place et emballe l'intégralité de vos affaires fragiles : vaisselle, verrerie, livres, objets de décoration. Cette option d'emballage carton est facturée en supplément et chiffrée dès le devis.",
  },
  {
    q: "Vous démontez les meubles ?",
    a: "Oui. Le démontage et remontage des meubles standards (lits, armoires en kit, étagères, table de salle à manger) est inclus dans la prestation de manutention. Pour les meubles complexes (cuisines équipées, dressings sur-mesure, lits mezzanines), nous le précisons au devis. Toute la visserie est conservée dans un sachet identifié par meuble.",
  },
  {
    q: "Quelle assurance pour les meubles transportés ?",
    a: "Toute prestation de transport meubles est couverte par notre assurance responsabilité civile professionnelle. En cas de dommage causé par notre équipe pendant la manutention ou le transport, nous prenons en charge la réparation ou le remplacement à valeur équivalente. Les conditions précises et plafonds sont rappelés sur chaque devis.",
  },
  {
    q: "Quel délai pour réserver ?",
    a: "Pour un déménagement local petit ou moyen volume, comptez 2 à 3 semaines d'anticipation en période normale, et 4 à 6 semaines pendant les pics (fin juin, fin août, début septembre, fin d'année). En dépannage, nous essayons toujours de dégager un créneau sous 7 jours si le planning le permet. Réservation ferme à la signature du devis.",
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
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/demenagement-thonon#service`,
  name: "Déménagement local à Thonon-les-Bains",
  serviceType: "Déménagement local",
  description:
    "Prestation de déménagement local sur Thonon-les-Bains, Évian et le Chablais. Petits et moyens volumes : studio, T2, T3, maison. Monte-meuble, emballage carton, démontage et remontage des meubles. Combo nettoyage fin de bail pour récupérer la caution.",
  url: `${SITE_URL}/demenagement-thonon`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: ZONES.map((c) => ({ "@type": "City", name: c })),
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    description: "Devis personnalisé sous 24 h, fixe et sans surprise",
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
  "@id": `${SITE_URL}/demenagement-thonon#faq`,
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
      name: "Déménagement à Thonon",
      item: `${SITE_URL}/demenagement-thonon`,
    },
  ],
};

export default function DemenagementThononPage() {
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
            <span className="text-brown/75">Déménagement à Thonon</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/service-demenagement.jpg"
              alt="Équipe de déménageurs GH Services chargeant un camion à Thonon-les-Bains"
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
              Déménagement local à{" "}
              <span className="text-orange">Thonon-les-Bains</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Déménageur du Chablais spécialisé dans les petits et moyens
              volumes : studio, T2, T3, maison. Nous prenons en charge le
              transport des meubles, la manutention, le monte-meuble si
              nécessaire et l&apos;emballage carton sur demande. Notre vraie
              différence sur Thonon : le combo déménagement plus nettoyage de
              fin de bail dans la même journée, pour récupérer votre caution
              sans coordonner deux prestataires. Devis personnalisé et fixe
              sous 24 h.
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
                Devis fixe sous 24 h
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Combo nettoyage fin de bail
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Monte-meuble disponible
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
                Étudiants, familles, retraités, frontaliers
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre prestation de déménagement local s&apos;adresse aux
                particuliers du Chablais qui ont besoin d&apos;une équipe
                sérieuse pour un petit ou moyen volume, sans le coût
                d&apos;un déménageur national.
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
                Quatre étapes claires, du devis à la remise des clés
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Une organisation simple, pensée pour un déménagement local
                sans stress. Vous savez à l&apos;avance qui fait quoi, quand,
                et combien ça coûte.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 1
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Devis sur visite ou photos
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Visite gratuite sur place ou simple envoi de photos et
                  d&apos;une liste de meubles. Estimation du volume,
                  identification des contraintes (étages, monte-meuble,
                  emballage). Devis fixe sous 24 h.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 2
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Préparation et emballage
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Si vous le souhaitez, fourniture des cartons et matériel ou
                  emballage complet par notre équipe. Protection des meubles
                  fragiles, housses matelas, papier bulle pour la verrerie et
                  la décoration.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 3
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Transport et manutention
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Démontage des meubles, chargement, transport jusqu&apos;à
                  la nouvelle adresse, déchargement, remontage. Monte-meuble
                  installé si l&apos;ascenseur manque ou si la cage
                  d&apos;escalier est trop étroite.
                </p>
              </li>
              <li className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Étape 4
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                  Combo nettoyage fin de bail
                </h3>
                <p className="mt-3 text-sm leading-6 text-brown/75">
                  Option exclusive : pendant que l&apos;équipe finit de
                  charger, une seconde équipe nettoie le logement quitté pour
                  la remise des clés. Vous récupérez votre caution sans
                  retour sur place.
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
                  Déménager dans le Chablais, ce qu&apos;il faut anticiper
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Quinze ans d&apos;intervention sur le bassin lémanique nous
                  ont appris à repérer les pièges spécifiques de la région.
                  Quatre points à valider avant la date de déménagement.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Chemins étroits des villages du lac :</strong>{" "}
                      Yvoire, Saint-Gingolph, certains hameaux d&apos;Évian
                      ont des ruelles inaccessibles à un grand camion. Nous
                      adaptons le véhicule au gabarit réel des accès.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>
                        Immeubles anciens du centre de Thonon :
                      </strong>{" "}
                      beaucoup n&apos;ont pas d&apos;ascenseur et les cages
                      d&apos;escalier sont étroites. Le monte-meuble devient
                      obligatoire pour les gros meubles d&apos;un T3 ou
                      d&apos;une maison.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>Résidences secondaires saisonnières :</strong>{" "}
                      en fin de saison, beaucoup de propriétaires déménagent
                      vers leur résidence principale. Planning serré
                      d&apos;avril à octobre, anticipez la réservation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                    <span>
                      <strong>
                        Combo nettoyage pour récupérer la caution :
                      </strong>{" "}
                      les agences immobilières locales sont strictes sur
                      l&apos;état des lieux sortant. Coupler déménagement et
                      nettoyage de fin de bail évite la retenue sur dépôt de
                      garantie.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/lac-leman.jpg"
                  alt="Vue du lac Léman, zone d'intervention de GH Services Déménagement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FORFAITS & COMBO */}
        <section id="forfaits" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Nos forfaits et combo nettoyage
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Petits et moyens volumes uniquement, devis fixe sous 24 h
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Nous sommes un déménageur local du Chablais, pas un acteur
                national. Cela veut dire des équipes réactives, une
                connaissance fine du terrain, et un tarif maîtrisé pour les
                logements jusqu&apos;à la taille d&apos;une maison familiale.
                Notre offre signature reste le combo déménagement plus
                nettoyage fin de bail : nos concurrents du secteur ne le font
                pas dans la même journée.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Studio
                </span>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Petit volume
                </p>
                <p className="mt-1 text-sm text-brown/70">
                  Idéal déménagement étudiant
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Lit, bureau, électroménager
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Manutention 2 personnes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Demi-journée en moyenne
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  T2
                </span>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Volume couple
                </p>
                <p className="mt-1 text-sm text-brown/70">
                  Couple ou jeune célibataire
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Salon, chambre, cuisine équipée
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Démontage et remontage inclus
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Monte-meuble si étage sans ascenseur
                  </li>
                </ul>
              </div>

              <div className="relative rounded-3xl bg-orange p-7 text-cream ring-2 ring-orange/40">
                <span className="absolute -top-3 right-6 rounded-full bg-cream px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-orange">
                  Le plus demandé
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-cream/90">
                  T3
                </span>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Moyen volume
                </p>
                <p className="mt-1 text-sm text-cream/80">
                  Famille 3 à 4 personnes
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    2 chambres, salon, cuisine
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Équipe de 3, journée complète
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                    Combo nettoyage fin de bail dispo
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-cream p-7 text-brown ring-1 ring-cream/20">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Maison
                </span>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Volume familial
                </p>
                <p className="mt-1 text-sm text-brown/70">
                  Maison locale, étage simple
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Pièces multiples, garage, cave
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Équipe renforcée, monte-meuble
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    Combo débarras possible
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Notre vraie différence
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Combo déménagement plus nettoyage fin de bail
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Dans la même journée, deux équipes coordonnées : une qui
                  charge, une qui nettoie le logement quitté. Vous économisez
                  un prestataire et vous récupérez votre caution sans aller
                  retour. Devis fixe sous 24 h, sans surprise.
                </p>
              </div>
              <div className="mt-4 inline-flex flex-col gap-2 rounded-2xl bg-orange px-6 py-4 md:mt-0">
                <span className="font-display text-base font-bold tracking-tight text-cream">
                  Devis personnalisé
                </span>
                <span className="text-sm font-medium text-cream/90">
                  sous 24 h
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
                Tout le Chablais et la rive sud du Léman, côté France
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Prestation de déménagement local uniquement. Pour un trajet
                transfrontalier (passage de douane FR/CH) ou un transport
                longue distance national, nous vous orientons vers un
                partenaire dédié spécialisé.
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
                  Après emménagement, remise à neuf complète : dépoussiérage,
                  retrait des résidus de peinture, nettoyage des vitres.
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
                  Le combo idéal de votre déménagement : remise des clés
                  impeccable pour récupérer 100 % de votre caution.
                </p>
              </Link>
              <Link
                href="/debarras-thonon"
                className="group block rounded-3xl bg-cream p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Débarras avant ou après
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Évacuation des meubles, encombrants et déchets avant ou
                  après déménagement, avec tri pour recyclage et dons.
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
                    Recevez votre devis déménagement
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Indiquez le type de logement (studio, T2, T3, maison),
                    les deux adresses, les étages et la présence ou non
                    d&apos;un ascenseur. Précisez si vous voulez le combo
                    nettoyage fin de bail. Réponse chiffrée sous 24 heures
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
                serviceLabel="Déménagement"
                source="demenagement_thonon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
