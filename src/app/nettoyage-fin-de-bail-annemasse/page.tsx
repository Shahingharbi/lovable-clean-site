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
  title: "Nettoyage fin de bail à Annemasse",
  description:
    "Nettoyage état des lieux sortant à Annemasse. Récupérez 100% caution. Intervention 48h, agences immo Annemasse Ambilly. Devis 24 h.",
  alternates: {
    canonical: `${SITE_URL}/nettoyage-fin-de-bail-annemasse`,
  },
  openGraph: {
    title: "Nettoyage fin de bail à Annemasse",
    description:
      "Nettoyage état des lieux sortant à Annemasse. Récupérez 100% caution. Intervention 48h, agences immo Annemasse Ambilly. Devis 24 h.",
    url: `${SITE_URL}/nettoyage-fin-de-bail-annemasse`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/service-etat-lieux.jpg",
        width: 1600,
        height: 900,
        alt: "Nettoyage fin de bail à Annemasse, remise des clés et récupération de la caution",
      },
    ],
  },
};

const PERSONAS = [
  {
    title: "Frontaliers retour France",
    desc: "Travailleurs frontaliers d'Annemasse qui repartent vivre côté français (Lyon, Annecy, province) après quelques années de bail. Vous quittez votre T2 rue de Genève ou Ambilly avec un calendrier serré : nous prenons en charge le nettoyage état des lieux sortant complet pour libérer la caution sous 1 mois.",
  },
  {
    title: "Frontaliers retour Suisse",
    desc: "Travailleurs frontaliers qui se réinstallent côté Vaud ou Genève après plusieurs années à Annemasse. Vous gérez votre remise des clés à distance : photos transmises, devis sous 24h, intervention en votre absence, attestation envoyée par e-mail au bailleur ou à l'agence immobilière du Genevois.",
  },
  {
    title: "Étudiants universités Genève",
    desc: "Étudiants partant des campus de Genève (UNIGE, HEAD, HEG) qui rendent leur studio ou T1 meublé à Annemasse en fin d'année universitaire. Forfait rapide adapté à la petite surface, intervention entre les partiels et le départ, validation contradictoire avec l'agence ou le bailleur particulier.",
  },
  {
    title: "Jeunes actifs en mutation pro",
    desc: "Jeunes actifs ayant signé un nouveau contrat hors Genevois (Lyon, Paris, Suisse alémanique) avec préavis serré. Préparation complète du T2 ou T3 à Annemasse avant la remise des clés, photos avant et après pour récupérer 100% du dépôt de garantie face au bailleur.",
  },
  {
    title: "Familles déménageant en province",
    desc: "Familles installées à Annemasse depuis plusieurs années qui retournent en province (Bretagne, Aquitaine, Sud-Ouest) pour raisons familiales. Nettoyage fin de bail maison T4 ou T5 avec garage, jardin, four et hotte intensivement utilisés : devis personnalisé sous 24h.",
  },
  {
    title: "Expatriés courte durée (1-3 ans)",
    desc: "Expatriés internationaux ayant occupé un meublé à Annemasse pour une mission de 1 à 3 ans côté Genève. Coordination en anglais possible, prise en charge clé en main, attestation transmise à l'agence immobilière d'Annemasse pour libérer rapidement le dépôt de garantie.",
  },
];

const PERSONA_PROPRIETAIRE = {
  title: "Propriétaires bailleurs entre deux locataires",
  desc: "Propriétaires d'Annemasse, Ambilly ou Gaillard qui relouent rapidement leur bien après le départ d'un locataire. Remise en état conforme aux attentes du nouvel entrant, dans le cadre de la grille de vétusté du décret n° 87-712 et de la loi ALUR. Facturation directe au bailleur.",
};

const PERSONAS_FULL = [...PERSONAS, PERSONA_PROPRIETAIRE];

const METHODE = [
  {
    step: "Étape 1",
    title: "Visite état initial avec photos",
    desc: "Visite gratuite sur Annemasse ou envoi de photos à distance pour les frontaliers déjà partis côté Suisse. Inventaire pièce par pièce : cuisine, salle de bain, vitres, sols, joints, four, hotte. Identification précise des points qui plombent une caution.",
  },
  {
    step: "Étape 2",
    title: "Devis ferme sous 24h",
    desc: "Devis chiffré et ferme reçu par e-mail sous 24h ouvrées, valable 30 jours. Tarif transparent par typologie (studio, T2, T3, maison), aucune surprise. Vous validez en un clic, nous bloquons la date d'intervention.",
  },
  {
    step: "Étape 3",
    title: "Intervention 48h avant remise des clés",
    desc: "Intervention planifiée 48h avant la remise des clés à l'agence ou au bailleur, une fois le logement entièrement vidé. Traitement complet checklist agence immo Annemasse : four, hotte, joints calcaire, VMC, sols, vitres. Lundi au samedi.",
  },
  {
    step: "Étape 4",
    title: "Validation contradictoire bailleur",
    desc: "Validation finale avec photos avant et après remises par e-mail, attestation de prestation pour le dossier d'état des lieux sortant. Possibilité d'être présent à la remise des clés avec l'agence ou le bailleur pour défendre la conformité, restitution caution sous 1 mois.",
  },
];

const SPECIFICITES = [
  {
    title: "Rotation forte locataires frontaliers",
    desc: "Le marché locatif d'Annemasse tourne plus vite que partout dans le Chablais : arrivées et départs constants liés au bassin d'emploi de Genève. Les bailleurs ne tolèrent aucun délai et facturent chaque journée de remise en état entre deux locataires.",
  },
  {
    title: "Agences immo nombreuses gare Annemasse exigeantes",
    desc: "Les cabinets de gestion locative concentrés autour de la gare Annemasse, place de la Libération et rue de Genève appliquent des checklists strictes. Joints silicone, four, hotte, calcaire WC : la moindre zone oubliée déclenche une retenue sur le dépôt de garantie.",
  },
  {
    title: "T2 et studios étudiants en majorité",
    desc: "Le parc locatif d'Annemasse est dominé par les T2 et les studios destinés aux frontaliers et étudiants des universités de Genève. Nous avons des forfaits adaptés à ces typologies réduites, avec interventions express sur petites surfaces et tarification claire.",
  },
  {
    title: "État des lieux minutieux côté résidents suisses",
    desc: "Les locataires retournant en Suisse savent que leur état des lieux sortant Annemasse est scruté à la loupe : la culture du soin du logement côté suisse impose un niveau de finition supérieur. Nous appliquons ce standard pour sécuriser la caution dans tous les cas.",
  },
];

const TARIFS = [
  {
    type: "Studio",
    surface: "Jusqu'à 30 m²",
    prix: "à partir 180€",
    desc: "Studio étudiant ou frontalier rue de Genève, secteur gare CEVA, autour des universités de Genève. Cuisine équipée, salle de bain, vitres, joints, VMC. Demi-journée d'intervention.",
  },
  {
    type: "T2",
    surface: "30 à 50 m²",
    prix: "à partir 250€",
    desc: "T2 frontalier majoritaire à Annemasse, Ambilly, Ville-la-Grand. Cuisine séparée, salle de bain, vitres intérieures et extérieures, sols, joints calcaire. Journée d'intervention.",
  },
  {
    type: "T3",
    surface: "50 à 75 m²",
    prix: "à partir 320€",
    desc: "T3 familial pour jeunes actifs en mutation et familles déménageant province. Cuisine, deux salles d'eau possibles, vitres complètes, sols, joints, VMC, électroménager. Journée à journée et demie.",
  },
  {
    type: "Maison",
    surface: "T4 et +",
    prix: "Devis personnalisé 24h",
    desc: "Maison de ville ou T4/T5 sur Cranves-Sales, Vétraz-Monthoux, Bonne. Prestation sur mesure avec garage, jardin, double étage. Devis chiffré sous 24h après visite ou photos.",
  },
];

const ZONES = [
  "Annemasse",
  "Ambilly",
  "Ville-la-Grand",
  "Étrembières",
  "Vétraz-Monthoux",
  "Gaillard",
  "Bonne",
  "Cranves-Sales",
  "Lucinges",
  "Juvigny",
];

const TESTIMONIALS = [
  {
    author: "Christophe Lacroix",
    role: "Locataire départ frontalier",
    date: "Octobre 2025",
    body: "Suite à mon départ d'Annemasse pour la Suisse, j'ai confié le nettoyage fin de bail à GH Services. Le logement a été rendu impeccable, l'agence n'a rien retenu sur la caution. Photos avant et après très utiles, attestation transmise rapidement.",
  },
  {
    author: "Debrot Raymond",
    role: "Vente après fin de bail",
    date: "Mars 2026",
    body: "GH Services s'est occupé du nettoyage de notre maison à Vétraz-Monthoux avant la vente, juste après le départ du locataire. Nous sommes extrêmement satisfaits de leur travail. Le résultat est impeccable et le prix est exactement conforme au devis.",
  },
  {
    author: "Genève Expat",
    role: "Remise des clés à distance",
    date: "Mai 2025",
    body: "Mission terminée à Genève, retour à l'étranger : GH Services a géré le nettoyage de notre T3 d'Annemasse sans notre présence. Photos transmises par e-mail, validation contradictoire avec l'agence. Caution récupérée à 100% sous trois semaines.",
  },
];

const FAQ = [
  {
    q: "Quel délai d'intervention en urgence à Annemasse, 48h c'est possible ?",
    a: "Oui, nous intervenons en 48h pour la majorité des fins de bail urgentes à Annemasse, du lundi au samedi. Le créneau idéal reste 48h avant la remise des clés, une fois le logement totalement vidé : cela laisse aux joints, sols et électroménager le temps de sécher. Pour les frontaliers contraints par leurs horaires Genève, nous proposons aussi des interventions en soirée ou très tôt le matin sur Annemasse, Ambilly et Ville-la-Grand. Réponse sous 24h après votre demande de devis.",
  },
  {
    q: "Les agences immobilières d'Annemasse sont-elles très exigeantes ?",
    a: "Oui, plus encore qu'à Thonon ou Évian. Les cabinets de gestion locative regroupés autour de la gare d'Annemasse, place de la Libération et rue de Genève appliquent des checklists strictes : joints silicone douche, four à l'intérieur, hotte aspirante avec filtres démontés, calcaire WC et robinetterie, VMC, traces de meubles sur murs. La moindre zone oubliée justifie une retenue sur le dépôt de garantie. Notre méthode reprend exactement cette checklist agence immo, point par point, pour neutraliser tout motif de retenue.",
  },
  {
    q: "Combien coûte un nettoyage fin de bail T2 frontalier à Annemasse ?",
    a: "Un T2 frontalier classique d'Annemasse ou Ambilly (30 à 50 m², cuisine séparée, salle de bain, deux chambres) démarre à 250 € pour un état standard. Le tarif final dépend du niveau d'encrassement four et hotte, de l'importance du calcaire dans la salle de bain et aux WC, et de la présence éventuelle de moisissures sur les joints. Nous établissons un devis ferme sous 24h après photos ou visite, valable 30 jours, sans engagement.",
  },
  {
    q: "Studio étudiant universités Genève, quel forfait à Annemasse ?",
    a: "Pour un studio étudiant à Annemasse (jusqu'à 30 m²) loué pendant les études aux universités de Genève (UNIGE, HEAD, HEG, HES-SO), le forfait démarre à 180 €. La prestation couvre cuisine équipée, salle de bain, vitres intérieures et extérieures accessibles, joints, sols et VMC. Demi-journée d'intervention, parfaitement compatible avec les calendriers universitaires et les départs en fin d'année. Devis sous 24h, paiement après prestation.",
  },
  {
    q: "Garantissez-vous la récupération de la caution sur Annemasse ?",
    a: "Nous ne pouvons pas garantir contractuellement la restitution intégrale de la caution puisque celle-ci dépend du bailleur ou de l'agence, mais notre méthode est conçue pour neutraliser tout motif de retenue. Reportage photo avant et après zone par zone, application stricte de la checklist 7 zones bailleurs Annemasse, attestation détaillée, présence possible à la remise des clés. Sur les centaines d'états des lieux sortant traités, la quasi-totalité de nos clients récupèrent 100% du dépôt de garantie sous 1 mois (loi ALUR).",
  },
  {
    q: "Joints de la salle de bain, quelles habitudes des bailleurs d'Annemasse ?",
    a: "C'est le piège n° 1 sur Annemasse : eau particulièrement dure côté Genevois, calcaire blanchâtre tenace sur les joints silicone de la douche et de la baignoire, dépôts noirs si ventilation insuffisante. Les bailleurs d'Annemasse contrôlent systématiquement ces joints lors de l'état des lieux sortant. Nous appliquons un détartrant pro biodégradable, blanchissons les joints, retraitons les silicones encrassés ou refaisons un mince filet là où c'est nécessaire, pour rendre une salle de bain visuellement neuve.",
  },
  {
    q: "Quelle distance depuis Thonon pour une intervention à Annemasse ?",
    a: "Annemasse se situe à environ 40 minutes de Thonon-les-Bains par la voie rapide, et nous intervenons quotidiennement sur le Genevois français : Annemasse, Ambilly, Ville-la-Grand, Gaillard, Vétraz-Monthoux, Cranves-Sales, Étrembières, Bonne, Lucinges, Juvigny. Frais de déplacement offerts dans tout l'Annemasse Agglomération. Notre base reste Thonon, ce qui nous permet de couvrir l'ensemble du Chablais et du Genevois français avec la même équipe et le même niveau d'exigence.",
  },
  {
    q: "Pouvez-vous intervenir le samedi sur Annemasse pour un état des lieux lundi matin ?",
    a: "Oui, le samedi est notre créneau le plus demandé sur Annemasse, notamment par les frontaliers qui rendent les clés le lundi matin avant de partir travailler à Genève. Intervention complète samedi matin ou samedi après-midi, séchage le dimanche, état des lieux sortant le lundi matin sans stress. Réservation à anticiper de quelques jours pour bloquer le créneau. Devis sous 24h, planning confirmé immédiatement après votre validation.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/nettoyage-fin-de-bail-annemasse#service`,
  name: "Nettoyage fin de bail état des lieux à Annemasse",
  serviceType: "Nettoyage fin de bail état des lieux",
  description:
    "Nettoyage fin de bail et état des lieux sortant à Annemasse et dans le Genevois français. Intervention 48h, checklist agence immo, photos avant et après, attestation pour récupérer la caution dans le cadre de la loi ALUR.",
  url: `${SITE_URL}/nettoyage-fin-de-bail-annemasse`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: [
    { "@type": "City", name: "Annemasse" },
    ...ZONES.filter((z) => z !== "Annemasse").map((c) => ({
      "@type": "City",
      name: c,
    })),
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    description:
      "Studio à partir de 180€, T2 à partir de 250€, T3 à partir de 320€, maison sur devis sous 24h.",
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
  "@id": `${SITE_URL}/nettoyage-fin-de-bail-annemasse#faq`,
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
      name: "Nettoyage fin de bail à Annemasse",
      item: `${SITE_URL}/nettoyage-fin-de-bail-annemasse`,
    },
  ],
};

export default function NettoyageFinDeBailAnnemassePage() {
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
        {/* 1. HERO V1 brown gradient */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/service-etat-lieux.jpg"
              alt="Nettoyage fin de bail à Annemasse, remise des clés et récupération de la caution"
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
              Nettoyage fin de bail à{" "}
              <span className="text-orange">Annemasse</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              Frontaliers qui repartent côté Suisse ou côté France, étudiants
              des universités de Genève, jeunes actifs en mutation : à
              Annemasse, la remise des clés se prépare. Notre nettoyage état des
              lieux sortant suit la checklist agence immo Annemasse (cuisine,
              hotte, joints calcaire, vitres, sols, VMC), récupérer caution
              Annemasse devient simple. Intervention 48h avant remise des clés,
              photos avant et après, attestation pour le bailleur. Fin de bail
              express 48h Annemasse possible, devis sous 24 heures.
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
                Intervention 48h
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Checklist agence immo Annemasse
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Photos avant et après
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Caution récupérée
              </li>
            </ul>
          </div>
        </section>

        {/* 2. POUR QUI fin de bail Annemasse */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui fin de bail Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Frontaliers, étudiants, familles : qui quitte vraiment Annemasse
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                La fin de bail à Annemasse touche d&apos;abord les frontaliers
                qui quittent vite leur logement (mutation Genève, retour France,
                retour Suisse), les étudiants des universités de Genève en fin
                d&apos;année, les jeunes actifs en mutation pro et les familles
                qui repartent en province. Chaque profil a sa contrainte
                calendrier, son standard d&apos;agence et son enjeu de caution.
                Nous adaptons notre nettoyage état des lieux Annemasse à votre
                situation, pour récupérer caution Annemasse sans stress.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PERSONAS_FULL.map((p) => (
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

        {/* 3. NOTRE METHODE fin de bail */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre méthode fin de bail
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                4 étapes pour récupérer caution Annemasse sous 1 mois
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Une procédure inspirée des checklists agences immobilières du
                Genevois et calibrée pour la rotation rapide des locataires
                frontaliers d&apos;Annemasse. Chaque zone est traitée,
                photographiée, validée contradictoirement avec l&apos;agence ou
                le bailleur. Le dossier photo sert de preuve lors de
                l&apos;état des lieux sortant et accélère la restitution du
                dépôt de garantie dans le cadre de la loi ALUR.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {METHODE.map((m) => (
                <li
                  key={m.title}
                  className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10"
                >
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                    {m.step}
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

        {/* 4. SPECIFICITES Annemasse */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités Annemasse
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  4 pièges locaux à anticiper avant la remise des clés
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Annemasse n&apos;est pas Thonon ni Évian : tissu urbain dense,
                  forte rotation frontalière, eau très calcaire côté Genevois.
                  Connaître les pièges locaux, c&apos;est concentrer le
                  nettoyage là où l&apos;agence regarde en premier.
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
                  alt="Annemasse, secteur Genevois, intervention fin de bail état des lieux sortant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. TARIFS fin de bail */}
        <section className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Tarifs fin de bail
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Tarifs transparents par typologie de logement Annemasse
              </h2>
              <p className="mt-5 text-base text-cream/80 md:text-lg">
                Tarifs estimatifs pour un état standard sur Annemasse et le
                Genevois français, valables pour les cas les plus fréquents (T2
                frontalier, studio étudiant, T3 famille). Le devis final, ferme
                et chiffré, est envoyé sous 24h après photos ou visite. Aucun
                supplément caché, aucun frais de déplacement dans
                l&apos;Annemasse Agglomération.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {TARIFS.map((t) => (
                <article
                  key={t.type}
                  className="flex flex-col rounded-3xl bg-cream/5 p-7 ring-1 ring-cream/15"
                >
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                    {t.surface}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-cream">
                    {t.type}
                  </h3>
                  <p className="mt-4 font-display text-xl font-bold tracking-tight text-orange">
                    {t.prix}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-cream/85">
                    {t.desc}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md md:flex md:items-center md:gap-8">
              <div className="md:flex-1">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/70">
                  Estimation
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Tarifs « à partir de » donnés à titre indicatif pour un état
                  standard.
                </p>
                <p className="mt-2 text-sm text-cream/80">
                  Montant final ajusté selon l&apos;encrassement du four, le
                  niveau de calcaire et la présence de moisissures. Devis ferme
                  sous 24h après photos.
                </p>
              </div>
              <a
                href="#devis"
                className="mt-4 inline-flex items-center rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark md:mt-0"
              >
                Devis sous 24h
              </a>
            </div>
          </div>
        </section>

        {/* 6. ZONES intervention Genevois */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones d&apos;intervention
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Annemasse et 9 communes voisines du Genevois français
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Nous intervenons sur Annemasse et l&apos;ensemble du Genevois
                français, de la frontière suisse au pied du Salève. Frais de
                déplacement offerts dans le rayon Annemasse Agglomération.
                Intervention urgence 48h disponible sur toutes ces communes.
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
                  Avis clients fin de bail Annemasse
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Ils ont récupéré 100% de leur caution
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
                      {t.role} . {t.date}
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
                En image
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Nos chantiers fin de bail à Annemasse
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Un aperçu de nos interventions sur Annemasse, Ambilly,
                Ville-la-Grand pour des frontaliers retour France, des étudiants
                Genève et des familles en mutation pro. Photos avant et après
                pour chaque chantier.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:col-span-2 md:aspect-[16/10]">
                <Image
                  src="/photos/service-etat-lieux.jpg"
                  alt="Nettoyage état des lieux sortant à Annemasse, cuisine prête pour la remise des clés"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                  <Image
                    src="/photos/cities/ville-5.jpg"
                    alt="Annemasse, fin de bail express 48h pour un appartement frontalier"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                  <Image
                    src="/photos/cities/ville-2.jpg"
                    alt="Genevois, copropriété Annemasse Ambilly, nettoyage avant remise des clés"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ Annemasse hyperlocales */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ fin de bail Annemasse
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Vos questions hyperlocales sur la fin de bail à Annemasse
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
              Pages liées
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-brown sm:text-3xl md:text-[36px] md:leading-[1.1]">
              Compléter votre fin de bail à Annemasse
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link
                href="/etat-des-lieux-sortant-thonon"
                className="group block rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  État des lieux sortant Thonon (hub service)
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  La page hub fin de bail sur le Chablais : checklist 7 zones,
                  loi ALUR, grille de vétusté et photos avant et après pour
                  récupérer la caution.
                </p>
              </Link>
              <Link
                href="/nettoyage-annemasse"
                className="group block rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Entreprise de nettoyage Annemasse (hub ville)
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Présentation complète de nos prestations sur Annemasse :
                  bureaux, copropriétés, frontaliers, commerces, syndic. Hub
                  ville pour le Genevois.
                </p>
              </Link>
              <Link
                href="/debarras-annemasse"
                className="group block rounded-3xl bg-cream-soft p-6 ring-1 ring-brown/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-20px_rgba(11,27,44,0.18)]"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-brown group-hover:text-orange">
                  Débarras Annemasse avant fin de bail
                </h3>
                <p className="mt-2 text-sm text-brown/70">
                  Vider le logement avant l&apos;intervention de nettoyage :
                  meubles, encombrants, déchetterie. Combiné idéal avec le
                  nettoyage fin de bail.
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
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Devis fin de bail Annemasse en 24 heures
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Indiquez-nous la surface du logement, le nombre de pièces,
                    la date prévue de la remise des clés et joignez quelques
                    photos. Réponse chiffrée sous 24 h ouvrées, intervention
                    sous 48 h pour les fins de bail express Annemasse. Studio,
                    T2 frontalier, T3 famille ou maison Cranves-Sales : nous
                    couvrons tous les cas du Genevois français.
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
                    Annemasse, Ambilly, Ville-la-Grand, Gaillard inclus.
                  </p>
                </a>

                <div className="rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-xs leading-relaxed text-red-900">
                  <strong>Aucun recrutement en cours.</strong> Merci de ne pas
                  téléphoner ni envoyer d&apos;e-mail pour une candidature, les
                  demandes spontanées ne sont pas traitées.
                </div>
              </aside>

              <ServiceQuoteForm
                serviceLabel="Fin de bail Annemasse"
                source="fin_bail_annemasse"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
