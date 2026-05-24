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
  title: "Nettoyage de canapé et tapis à Annemasse",
  description:
    "Nettoyage canapé, tapis, matelas, moquette à Annemasse. Injection-extraction pro, détachage, anti-acariens. Intervention 48 h. Devis gratuit.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-canape-annemasse`,
  },
  openGraph: {
    title: "Nettoyage de canapé et tapis à Annemasse",
    description:
      "Nettoyage canapé, tapis, matelas, moquette à Annemasse. Injection-extraction pro, détachage, anti-acariens. Intervention 48 h. Devis gratuit.",
    url: `${SITE_URL}/nettoyage-canape-annemasse`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-textile.jpg",
        width: 1600,
        height: 900,
        alt: "Nettoyage de canapé tissu et tapis à Annemasse par injection-extraction",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Familles avec jeunes enfants",
    desc: "Quartiers résidentiels d'Annemasse, Ville-la-Grand et Vétraz-Monthoux. Canapés tissu marqués par miettes, jus de fruits, feutres et chocolat. Traitement vapeur 65 °C sans biocide, produits hypoallergéniques compatibles avec la peau sensible des tout-petits.",
  },
  {
    title: "Propriétaires de chats et chiens",
    desc: "Maîtres de Cranves-Sales, Lucinges et Bonne dont les compagnons à quatre pattes laissent poils, traces de pattes, salive et parfois urine sur les canapés et tapis. Aspiration HEPA poils incrustés, détachage enzymatique urine, désodorisation profonde.",
  },
  {
    title: "Appartements meublés frontaliers post-location",
    desc: "Studios et T2 meublés autour de la gare CEVA Léman Express, loués courte durée à des frontaliers genevois. Remise nette des canapés convertibles, matelas et tapis entre deux locataires, dossier photo transmis au bailleur ou à l'agence d'Annemasse.",
  },
  {
    title: "Hôtellerie boutique secteur gare",
    desc: "Petits hôtels, chambres d'hôtes et appart-hôtels proches de la gare d'Annemasse et de la frontière. Têtes de lit, fauteuils de chambre, banquettes de couloir, moquettes des étages. Rotation rapide entre deux séjours, séchage en 2 heures maximum.",
  },
  {
    title: "Restaurants et brasseries",
    desc: "Brasseries du centre-ville, place de la Libération, rue de Genève. Banquettes en tissu, chaises capitonnées, moquettes de salle. Détachage ciblé vin, gras, café, sauces. Intervention de nuit ou hors service possible pour ne pas perturber l'exploitation.",
  },
  {
    title: "Bureaux et moquettes pollution A40",
    desc: "Sièges sociaux et plateaux tertiaires du Genevois, secteur ZAE des Erables et Étrembières. Moquettes de bureau qui captent les particules fines de l'A40 et des axes routiers chargés. Nettoyage injection-extraction annuel pour préserver l'hygiène respiratoire des collaborateurs.",
  },
];

const STEPS = [
  {
    n: "Étape 1",
    title: "Diagnostic fibre et tache",
    desc: "Identification de la composition (tissu, microfibre, laine, cuir, alcantara), test de solidité des couleurs sur zone cachée, repérage des taches anciennes ou récentes. Choix du protocole adapté à votre canapé ou tapis à Annemasse.",
  },
  {
    n: "Étape 2",
    title: "Prétraitement détachant adapté",
    desc: "Application d'un pré-spray adapté au pH de la fibre et à la nature de la tache (gras, vin, urine animal, encre). Temps de pose contrôlé, brossage doux des zones marquées, sans agression du tissu ni des coutures.",
  },
  {
    n: "Étape 3",
    title: "Injection-extraction eau chaude",
    desc: "Injection d'eau chaude et de détergent doux biodégradable au cœur de la fibre, puis extraction immédiate par dépression haute puissance. Méthode professionnelle qui décolle saletés, acariens et résidus de tache sans détremper la mousse.",
  },
  {
    n: "Étape 4",
    title: "Séchage 4 à 12 h selon densité",
    desc: "Soufflage à l'air comprimé sur les zones humides, brossage de redressement des fibres. Séchage complet en 4 à 6 h pour un canapé tissu, 8 à 12 h pour un matelas double ou une moquette épaisse de bureau. Pièce utilisable rapidement.",
  },
];

const SPECIFICS = [
  "Forte rotation des appartements meublés frontaliers d'Annemasse : entre deux locataires courte durée, les canapés convertibles et matelas exigent une remise nette professionnelle pour relouer en confiance et préserver la note du logement.",
  "Climat humide en hiver côté Genevois : les moquettes de bureau sèchent lentement après un dégât ou un nettoyage maison. Notre extraction haute dépression et notre finition air comprimé garantissent un séchage rapide même par temps froid.",
  "Taches d'urine animale fréquentes chez les propriétaires de meublés : chats, chatons, chiots laissent des auréoles enzymatiques que seul un détachant biologique adapté peut neutraliser. Traitement ciblé sans odeur résiduelle.",
  "Pollution de l'A40 et des axes routiers du Genevois : les particules fines se déposent sur les tapis et moquettes des bureaux du centre d'Annemasse. Un nettoyage annuel par injection-extraction préserve l'hygiène respiratoire et limite les allergies.",
];

const PRICES = [
  {
    name: "Canapé 2 places",
    detail: "Tissu, microfibre ou alcantara. Assises, dossiers et accoudoirs traités, anti-acariens vapeur inclus.",
    price: "à partir de 80 €",
  },
  {
    name: "Canapé 3 places",
    detail: "Tissu ou cuir. Coussins déhoussables traités séparément si besoin, nourrissage cuir compris pour le cuir véritable.",
    price: "à partir de 110 €",
  },
  {
    name: "Tapis au m²",
    detail: "Tapis machine, tapis berbère, kilim, descente de lit en laine. Diagnostic fibre préalable, traitement à plat ou en atelier.",
    price: "à partir de 18 € / m²",
  },
  {
    name: "Matelas simple ou double",
    detail: "Traitement vapeur sèche 65 °C anti-acariens, désinfection en profondeur, sans biocide. Idéal allergies et jeunes enfants.",
    price: "à partir de 60 € l'unité",
  },
  {
    name: "Moquette au m²",
    detail: "Injection-extraction sur moquette collée ou tendue, détachage localisé pollution et taches courantes compris.",
    price: "à partir de 12 € / m²",
  },
];

const ZONES = [
  "Annemasse",
  "Ambilly",
  "Étrembières",
  "Ville-la-Grand",
  "Vétraz-Monthoux",
  "Gaillard",
  "Cranves-Sales",
  "Bonne",
  "Lucinges",
  "Juvigny",
];

const FAQ = [
  {
    q: "Vous traitez les taches d'urine animale à Annemasse ?",
    a: "Oui. C'est une demande fréquente chez les propriétaires de chats et de chiens du Genevois, à Cranves-Sales, Bonne et Lucinges notamment. Nous utilisons un détachant enzymatique qui décompose l'acide urique au cœur de la fibre. Le traitement se fait en trois temps : neutralisation enzymatique, injection-extraction à l'eau chaude, finition désodorisante. Aucun résidu d'odeur, même au retour du chauffage. Plus la tache est récente, meilleur est le résultat, mais nous récupérons aussi des canapés marqués depuis plusieurs mois.",
  },
  {
    q: "Mon appartement meublé est en fin de location frontalière, vous intervenez en urgence ?",
    a: "Oui. Les rotations d'appartements meublés courte durée autour de la gare CEVA d'Annemasse et à Ambilly imposent souvent un nettoyage rapide entre deux locataires frontaliers. Nous proposons des créneaux sous 48 à 72 heures sur le canapé, le convertible, le matelas et la moquette. Photos avant et après transmises au bailleur ou à l'agence, attestation d'intervention fournie pour valider la remise au propre auprès du locataire entrant.",
  },
  {
    q: "Vous nettoyez les canapés en cuir et en alcantara ?",
    a: "Oui pour les deux fibres, avec des protocoles différents. Le cuir véritable (lisse, pleine fleur) est nettoyé à la mousse sèche puis nourri à la crème spéciale cuir, jamais en injection-extraction. L'alcantara, fibre suédée synthétique très répandue sur les canapés design vendus à Annemasse, demande un test préalable sur zone cachée, puis un nettoyage doux par micro-mousse à pH neutre suivi d'un brossage de redressement. Le nubuck et le cuir suédé naturel sont également pris en charge sur devis personnalisé.",
  },
  {
    q: "Ma moquette de bureau est noircie par la pollution de l'A40, vous pouvez la récupérer ?",
    a: "Oui dans la grande majorité des cas. Les plateaux tertiaires d'Annemasse, Étrembières et Vétraz-Monthoux proches de l'A40 captent des particules fines qui s'incrustent au fil des mois dans les moquettes en fibres bouclées. Nous procédons à une aspiration HEPA en profondeur, puis à une injection-extraction haute dépression avec détergent dégraissant doux. Résultat visible dès la première intervention, hygiène respiratoire restaurée. Nous recommandons un cycle annuel pour les bureaux fortement fréquentés.",
  },
  {
    q: "Le traitement matelas anti-acariens est-il efficace pour les allergies ?",
    a: "Oui. Notre traitement vapeur sèche à 65 °C élimine les acariens, leurs œufs et leurs déjections, sans biocide ni produit allergène. C'est une réponse particulièrement adaptée aux familles d'Annemasse et du Genevois dont un membre souffre d'asthme, de rhinite allergique ou d'eczéma. Recommandé une à deux fois par an sur les matelas adultes, deux à trois fois sur les matelas d'enfant. Compatible avec tous les types de matelas (ressorts, mousse, latex, mémoire de forme).",
  },
  {
    q: "Quel est le temps de séchage après votre intervention ?",
    a: "Pour un canapé tissu standard à Annemasse, comptez 4 à 6 heures avant remise en service complète, et environ 1 à 2 heures pour un usage normal grâce à notre extraction haute dépression. Un matelas double sèche en 6 à 8 heures, idéalement en aérant la chambre. Une moquette de bureau plus épaisse demande 8 à 12 heures selon la densité et la température ambiante. Le climat humide hivernal du Genevois peut allonger légèrement ces délais, c'est pourquoi nous planifions souvent les interventions le matin pour un séchage en journée.",
  },
  {
    q: "Vos produits sont-ils compatibles avec mes enfants en bas âge ?",
    a: "Oui. Nous utilisons exclusivement des détergents biodégradables certifiés Ecolabel, sans solvant chloré, sans phosphate, sans parfum allergène et sans tensioactif agressif. Pour les familles avec nourrissons ou jeunes enfants à Annemasse, Ville-la-Grand ou Vétraz-Monthoux, nous privilégions la vapeur sèche à 65 °C qui désinfecte sans biocide. Tous nos produits sont sécurisés pour la peau sensible et les voies respiratoires des tout-petits, et compatibles avec les animaux de compagnie présents dans la pièce.",
  },
  {
    q: "Vous intervenez depuis Thonon, quel est le délai de déplacement ?",
    a: "Notre base technique est à Thonon-les-Bains, à environ 35 minutes d'Annemasse par l'autoroute A40 ou la route du lac. Les déplacements sont offerts sur tout le secteur d'Annemasse, Ambilly, Ville-la-Grand, Gaillard, Étrembières, Vétraz-Monthoux, Cranves-Sales, Bonne, Lucinges et Juvigny. Pour les autres communes du Genevois, un forfait kilométrique modéré peut s'appliquer, toujours indiqué clairement dans le devis. Réponse chiffrée sous 24 heures, intervention planifiée sous 48 à 72 heures selon votre disponibilité.",
  },
];

const TESTIMONIALS = [
  {
    author: "Coline Chambert-Protat",
    date: "2024",
    body: "Intervention rapide pour traiter des moisissures sur un canapé tissu. Résultat impeccable, plus aucune trace ni odeur, équipe sérieuse et professionnelle. Je recommande sans hésiter pour Annemasse.",
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

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-canape-annemasse#service`,
  name: "Nettoyage de canapé, tapis et matelas à Annemasse",
  serviceType: "Nettoyage de textiles canapé tapis matelas",
  description:
    "Nettoyage professionnel de canapés tissu, cuir et alcantara, tapis, matelas anti-acariens et moquettes à Annemasse et tout le Genevois. Injection-extraction haute dépression, détachage ciblé, vapeur sèche 65 °C, produits hypoallergéniques. Intervention sous 48 heures.",
  url: `${SITE_URL}/nettoyage-canape-annemasse`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: [
    { "@type": "City", name: "Annemasse" },
    ...ZONES.slice(1).map((c) => ({ "@type": "City", name: c })),
  ],
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
  "@id": `${SITE_URL}/nettoyage-canape-annemasse#faq`,
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
      name: "Nettoyage de canapé et tapis à Annemasse",
      item: `${SITE_URL}/nettoyage-canape-annemasse`,
    },
  ],
};

export default function NettoyageCanapeAnnemassePage() {
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
        {/* 1. HERO V1 BROWN */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/service-textile.jpg"
              alt="Nettoyage de canapé tissu par injection-extraction à Annemasse"
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
              Nettoyage de canapé, tapis et matelas à{" "}
              <span className="text-orange">Annemasse</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Nettoyage canapé tissu, cuir et alcantara, lavage tapis,
              détachage urine animaux, traitement anti-acariens matelas,
              shampouineuse moquette bureau à Annemasse et tout le Genevois.
              Méthode professionnelle par injection-extraction, vapeur sèche
              65 °C et détergents hypoallergéniques. Idéal ménages
              frontaliers, familles avec jeunes enfants et propriétaires de
              chats et chiens. Intervention sous 48 heures, devis gratuit.
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
                Intervention 48 h
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Anti-acariens vapeur
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Produits hypoallergéniques
              </li>
            </ul>
          </div>
        </section>

        {/* 2. POUR QUI TEXTILES ANNEMASSE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Familles, frontaliers, hôteliers, bureaux du Genevois
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Le nettoyage textile à Annemasse répond à des usages très
                locaux : forte rotation des meublés frontaliers, propriétaires
                d&apos;animaux dans les pavillons de Cranves-Sales, familles
                avec enfants en bas âge, bureaux exposés à la pollution de
                l&apos;A40. Six profils que nous accompagnons toute
                l&apos;année.
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

        {/* 3. NOTRE METHODE TEXTILES */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre méthode textiles
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Injection-extraction, shampouineuse pro et vapeur 65 °C
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Quatre étapes maîtrisées pour un nettoyage en profondeur de
                vos canapés, tapis, matelas et moquettes à Annemasse, sans
                détrempage, sans auréole et sans risque pour la fibre. Méthode
                validée sur tissu, microfibre, laine, cuir véritable et
                alcantara.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <li
                  key={s.n}
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

        {/* 4. SPECIFICITES ANNEMASSE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités d&apos;Annemasse
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Pourquoi les textiles d&apos;Annemasse souffrent différemment
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Le Genevois français cumule plusieurs contraintes qui pèsent
                  sur les canapés, tapis et moquettes : rotation locative
                  intense, humidité hivernale, animaux de compagnie et trafic
                  routier de l&apos;A40. Quatre points à connaître avant de
                  nous appeler.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  {SPECIFICS.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/ville-3.jpg"
                  alt="Rue d'Annemasse, contexte d'intervention nettoyage canapé et tapis GH Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. TARIFS TEXTILES ANNEMASSE */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Tarifs textiles à Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Prix indicatifs canapé, tapis, matelas, moquette
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Tarifs de base hors taches anciennes lourdes, configurations
                spéciales ou cuir véritable. Pour une configuration
                particulière (canapé d&apos;angle XL, tapis fragile, urine
                animale incrustée), un devis personnalisé est transmis sous 24
                heures.
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
                      Détail
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-display text-xs font-bold uppercase tracking-wider text-brown"
                    >
                      Tarif
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brown/10">
                  {PRICES.map((p) => (
                    <tr key={p.name}>
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-display text-sm font-bold uppercase tracking-tight text-brown"
                      >
                        {p.name}
                      </th>
                      <td className="px-6 py-4 text-brown/75">{p.detail}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-display text-sm font-bold text-orange">
                        {p.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/15">
              <h3 className="font-display text-base font-bold uppercase tracking-tight text-cream">
                Devis personnalisé sous 24 h
              </h3>
              <p className="mt-2 text-sm text-cream/80">
                Pour une configuration spéciale à Annemasse (canapé
                d&apos;angle six places, banquette restaurant, tapis berbère
                ancien, moquette de bureau supérieure à 100 m², détachage
                urine animale étendue), envoyez-nous deux ou trois photos par
                e-mail ou WhatsApp. Réponse chiffrée détaillée sous 24 heures
                ouvrées, sans engagement.
              </p>
            </div>
          </div>
        </section>

        {/* 6. ZONES INTERVENTION */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones d&apos;intervention
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Tout le Genevois français autour d&apos;Annemasse
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous nous déplaçons depuis Thonon sur tout le bassin
                annemassien et le Genevois, sans frais kilométriques sur les
                communes ci-dessous. Dix villes couvertes pour le nettoyage de
                canapé, tapis, matelas et moquette.
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

        {/* 7. TEMOIGNAGES */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Avis vérifiés
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Clients d&apos;Annemasse et du Léman
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

        {/* 8. GALERIE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Galerie
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Interventions textiles et secteur d&apos;Annemasse
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-brown/10">
                <Image
                  src="/photos/service-textile.jpg"
                  alt="Nettoyage de canapé tissu par injection-extraction à Annemasse"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/ville-3.jpg"
                  alt="Rue résidentielle d'Annemasse, secteur d'intervention canapé tapis"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/ville-4.jpg"
                  alt="Quartier d'Annemasse couvert pour le nettoyage textile à domicile"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ CANAPE ANNEMASSE */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ canapé Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Vos questions sur le nettoyage textile à Annemasse
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

        {/* SERVICES CONNEXES */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
              Pour aller plus loin
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-brown sm:text-3xl md:text-[36px] md:leading-[1.1]">
              Nos autres pages utiles
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link
                href="/nettoyage-textiles-thonon"
                className="group block rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Hub textile à Thonon
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Méthode complète injection-extraction sur canapé, tapis,
                  matelas et moquette pour tout le Chablais lémanique.
                </p>
              </Link>
              <Link
                href="/nettoyage-annemasse"
                className="group block rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Entreprise de nettoyage Annemasse
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Vue d&apos;ensemble de nos prestations à Annemasse :
                  bureaux, copropriétés, vitres, fin de bail, particuliers.
                </p>
              </Link>
              <Link
                href="/menage-annemasse"
                className="group block rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Ménage à domicile Annemasse
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Entretien régulier de votre logement à Annemasse, du
                  ponctuel à l&apos;hebdomadaire, crédit d&apos;impôt 50 %.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* 10. CTA DEVIS */}
        <section id="devis" className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis gratuit sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Recevez votre devis canapé à Annemasse
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Décrivez-nous votre besoin : canapé tissu cuir alcantara,
                    tapis, matelas, moquette de bureau, dimensions, type de
                    taches (urine animale, vin, gras, encre). Joignez deux ou
                    trois photos si possible. Réponse chiffrée sous 24 heures
                    ouvrées, intervention sous 48 à 72 heures.
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
                    Disponible 7 j/7. Réponse immédiate en heures ouvrées,
                    intervention à Annemasse et tout le Genevois.
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
                serviceLabel="Nettoyage canapé Annemasse"
                source="canape_annemasse"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
