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

const META_DESCRIPTION =
  "Aide ménagère à Évian, crédit d'impôt 50%. Ménage régulier, repassage, résidences secondaires. Équipe locale Thonon, équipe stable. Devis 24 h.";

export const metadata: Metadata = {
  title: "Société de ménage à Évian-les-Bains",
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/menage-evian-les-bains`,
  },
  openGraph: {
    title: "Société de ménage à Évian-les-Bains",
    description: META_DESCRIPTION,
    url: `${SITE_URL}/menage-evian-les-bains`,
    type: "website",
    locale: "fr_FR",
    siteName: "GH Services",
    images: [
      {
        url: "/photos/cities/evian-3.jpg",
        width: 1600,
        height: 900,
        alt: "Société de ménage GH Services à Évian-les-Bains, quartier des Mateirons",
      },
    ],
  },
};

type Persona = { title: string; desc: string };
type Approach = { title: string; desc: string };
type Specificity = { title: string; desc: string };
type FaqItem = { q: string; a: string };
type Testimonial = { author: string; date: string; city?: string; body: string };

const PERSONAS: Persona[] = [
  {
    title: "Retraités installés aux Mateirons",
    desc: "Couples retraités à l'année sur les hauteurs des Mateirons et de la route des Princes, dans des villas avec vue Léman. Ménage à domicile hebdomadaire, repassage des draps et chemises, intervenant stable que vous voyez chaque semaine à la même heure.",
  },
  {
    title: "Familles actives du quartier centre",
    desc: "Foyers actifs dans le centre d'Évian, autour du Palais Lumière et de la rue Nationale. Aide ménagère bi-mensuelle pour soulager les soirs de semaine, options vitres intérieures et repassage à domicile inclus dans le crédit d'impôt 50%.",
  },
  {
    title: "Résidences secondaires saisonnières Lugrin",
    desc: "Propriétaires absents 9 mois par an sur Lugrin, Maxilly et la côte vers Saint-Gingolph. Ouverture de villa au printemps, ménage entre chaque venue de la famille, fermeture en automne. Gestion clés et codes d'alarme intégrée à l'abonnement.",
  },
  {
    title: "Professions libérales en cabinet",
    desc: "Médecins, avocats et notaires d'Évian qui veulent un logement impeccable sans gérer l'embauche d'un employé direct. Société de ménage Évian déclarée, intervenant fixe, attestation Urssaf, paiement CESU préfinancé accepté.",
  },
  {
    title: "Expatriés Genève en villégiature",
    desc: "Cadres binationaux installés côté Genève ou Vaud, propriétaires d'un pied-à-terre évianais utilisé week-ends et vacances scolaires. Remise en état avant chaque venue, compte rendu par e-mail, intervention même en votre absence.",
  },
  {
    title: "Locations longue durée hauteur Évian",
    desc: "Locataires de villa ou de chalet ancien sur les hauteurs d'Évian, Neuvecelle ou Champanges, qui souhaitent une femme de ménage Évian récurrente. Forfait hebdomadaire ou bi-mensuel selon la surface, sans engagement de durée.",
  },
];

const APPROACH: Approach[] = [
  {
    title: "Équipe stable contractuelle",
    desc: "Nos intervenants sont salariés déclarés de GH Services, la grande majorité en CDI. Concrètement, c'est la même aide ménagère qui revient chez vous chaque semaine à Évian. Elle connaît le tour des pièces, vos préférences de produits, l'ordre dans lequel vous voulez les chambres faites, et les zones que vous souhaitez approfondir.",
  },
  {
    title: "Planning fixe hebdomadaire ou bimensuel",
    desc: "Jour et créneau horaire arrêtés ensemble dès la mise en place. Vous savez par exemple que votre ménage à domicile a lieu chaque mardi de 9 h à 12 h, ou un mercredi sur deux. Ce planning fixe rassure les retraités d'Évian-Mateirons et structure la semaine des familles actives du centre.",
  },
  {
    title: "Gestion clés et codes alarmes",
    desc: "Pour les propriétaires de résidences secondaires de Lugrin ou les expatriés genevois qui ne sont pas là à chaque passage, protocole clés strict : trousseau numéroté, registre signé, codes d'alarme stockés en coffre. Nous entrons, intervenons, réarmons et envoyons un compte rendu par e-mail le jour même.",
  },
  {
    title: "Repassage à domicile inclus si demandé",
    desc: "Le repassage à domicile s'intègre directement aux heures du forfait ménage régulier crédit impôt Évian, donc dans le crédit d'impôt 50%. Chemises, draps, linge délicat. Pour les familles avec enfants à Évian centre, c'est souvent l'option qui change tout dans le quotidien.",
  },
];

const SPECIFICITIES: Specificity[] = [
  {
    title: "Présence forte de résidences secondaires lacustres",
    desc: "Près d'un logement sur trois en bord de Léman entre Évian et Lugrin sert de résidence secondaire utilisée quelques semaines par an. Cela impose une logique de ménage par cycle d'ouverture et fermeture, pas seulement par fréquence hebdomadaire, et un interlocuteur capable d'agir à distance.",
  },
  {
    title: "Climat humide d'automne renforçant l'entretien",
    desc: "Le brouillard du lac d'octobre à mars génère une humidité élevée dans les villas de la rive sud, surtout celles posées en première ligne face au Léman. Pour les logements peu occupés, un passage mensuel de ventilation et de chauffe limite l'apparition de moisissures aux angles extérieurs des chambres.",
  },
  {
    title: "Parquets huilés des villas Mateirons",
    desc: "De nombreuses villas anciennes du quartier des Mateirons et de la route de Bernex possèdent des parquets huilés en chêne ou en sapin. Sur ces surfaces, jamais d'eau stagnante, jamais de détergent agressif. Microfibre humide juste essorée, savon neutre, protocole écrit dans votre dossier client.",
  },
  {
    title: "Propriétaires souvent absents, autonomie équipe",
    desc: "Beaucoup de propriétaires évianais vivent à Genève, Paris ou Lyon une partie du temps. Notre équipe agit donc en autonomie complète : ouverture du logement, intervention, contrôle qualité interne avec grille pièce par pièce, fermeture sécurisée, compte rendu numérique. Vous gardez la maîtrise sans devoir être présent.",
  },
];

const ZONES: string[] = [
  "Évian-les-Bains",
  "Publier",
  "Amphion",
  "Maxilly-sur-Léman",
  "Lugrin",
  "Neuvecelle",
  "Marin",
  "Champanges",
  "Larringes",
  "Bernex",
];

const FAQ: FaqItem[] = [
  {
    q: "Comment fonctionne le crédit d'impôt pour un particulier d'Évian-les-Bains ?",
    a: "Le ménage à domicile à Évian relève des services à la personne (SAP). Comme partout en France, vous bénéficiez d'un crédit d'impôt de 50% sur les sommes versées, plafond habituel de 12 000 € par an. Grâce à l'avance immédiate Urssaf, vous ne réglez réellement que la moitié dès l'envoi de la facture, sans attendre la déclaration annuelle. Que vous habitiez aux Mateirons, à Neuvecelle ou rue Nationale, l'attestation Urssaf est transmise chaque année.",
  },
  {
    q: "Mon logement Évian est une résidence secondaire absente une grande partie de l'année, comment ça marche ?",
    a: "C'est une demande très fréquente sur la rive sud du Léman. Nous mettons en place un cycle annuel précis pour votre résidence secondaire : ouverture de la villa au printemps (grand nettoyage, terrasses, vitres intérieures), passages d'entretien à chaque venue de la famille, puis fermeture en automne (vidange frigos, housses, dépoussiérage profond). Entre deux, un passage mensuel d'aération limite les odeurs de renfermé et les traces d'humidité dans les chambres.",
  },
  {
    q: "Vous récupérez les clés et les codes d'alarme pour entrer en notre absence ?",
    a: "Oui. Pour les propriétaires expatriés à Genève ou pour les résidences secondaires de Lugrin, nous utilisons un protocole clés et codes alarme rigoureux. Trousseau numéroté conservé en coffre à l'agence, registre des sorties signé à chaque intervention, codes d'alarme stockés séparément des clés. Nous entrons, intervenons, réarmons l'alarme, ferment à clé, et vous recevez un compte rendu par e-mail dans la journée.",
  },
  {
    q: "Quels produits utilisez-vous sur un parquet huilé d'une villa des Mateirons ?",
    a: "De nombreuses villas anciennes des Mateirons et de la route de Bernex ont des parquets huilés chêne ou sapin. Sur ces sols, nous proscrivons toute javel, tout acide, tout détergent à base de pétrole. Nous utilisons uniquement des savons neutres en pH adaptés aux bois huilés, microfibre humide juste essorée, jamais d'eau stagnante, jamais de vapeur. Ce protocole est validé avec vous lors de la visite et écrit noir sur blanc dans votre dossier client pour que tout intervenant le respecte.",
  },
  {
    q: "Quelle différence entre un planning hebdomadaire et un planning bimensuel ?",
    a: "Pour une famille active du centre d'Évian dans un T4 ou T5, le rythme hebdomadaire de 3 à 4 heures reste le plus confortable, surtout avec enfants et option repassage à domicile. Pour un couple de retraités aux Mateirons dans une grande villa peu occupée la journée, un passage bimensuel de 4 à 5 heures suffit largement. Pour une résidence secondaire utilisée week-ends, on combine plutôt mensuel d'entretien et passages à la demande avant arrivée.",
  },
  {
    q: "Quelle distance entre votre base de Thonon et Évian-les-Bains ?",
    a: "Notre siège est à Thonon-les-Bains, à environ 10 minutes d'Évian par la RD1005 route du lac. Comptez 5 minutes pour Publier et Amphion, 6 minutes pour Marin, 8 à 12 minutes pour Maxilly et Lugrin, 15 à 20 minutes pour Champanges, Larringes ou Bernex sur le plateau de Gavot. Aucun frais de déplacement n'est appliqué jusqu'à 25 km autour de Thonon, ce qui englobe toutes les communes de la rive sud listées sur cette page.",
  },
  {
    q: "Que se passe-t-il si mon aide ménagère est en vacances ou en arrêt maladie ?",
    a: "C'est l'avantage d'une société de ménage Évian par rapport à un emploi direct ou à une plateforme. En cas de congés ou d'arrêt de votre intervenante habituelle, nous mobilisons une remplaçante salariée briefée sur votre dossier, votre tour des pièces et vos préférences produits, ou nous décalons la prestation à votre convenance. Vous n'avez aucune démarche RH à gérer, c'est nous qui assurons la continuité de service, y compris en plein été pendant la haute saison thermale.",
  },
  {
    q: "Je suis expatrié à Genève en villégiature à Évian, comment se passe la mise en place ?",
    a: "Beaucoup de nos clients sont des expatriés genevois ou lausannois propriétaires d'un pied-à-terre évianais. Pour vous, mise en place 100% à distance : devis sur photos et plan transmis par e-mail, validation par signature électronique, premier passage assuré par un responsable qui calera le tour des pièces et vous enverra des photos. Ensuite, planning fixe, compte rendu après chaque intervention, contact WhatsApp ou e-mail pour les ajustements. Facturation en euros, attestation Urssaf française pour le crédit d'impôt.",
  },
];

const TESTIMONIALS: Testimonial[] = [
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
  "@id": `${SITE_URL}/menage-evian-les-bains#service`,
  name: "Société de ménage à Évian-les-Bains",
  serviceType: "Services à la personne, ménage à domicile",
  description:
    "Société de ménage Évian-les-Bains. Aide ménagère, femme de ménage, ménage à domicile, repassage, résidences secondaires. Équipe locale Thonon, équipe stable salariée, crédit d'impôt 50%, CESU préfinancé accepté, attestation Urssaf annuelle.",
  url: `${SITE_URL}/menage-evian-les-bains`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: [
    { "@type": "City", name: "Évian-les-Bains" },
    ...ZONES.filter((c) => c !== "Évian-les-Bains").map((c) => ({
      "@type": "City",
      name: c,
    })),
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    description:
      "Devis personnalisé sous 24 h. Crédit d'impôt 50% applicable aux particuliers, CESU préfinancé accepté, attestation Urssaf annuelle fournie.",
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
  "@id": `${SITE_URL}/menage-evian-les-bains#faq`,
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
      name: "Société de ménage à Évian-les-Bains",
      item: `${SITE_URL}/menage-evian-les-bains`,
    },
  ],
};

export default function MenageEvianLesBainsPage() {
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
        {/* SECTION 1 - HERO V1 BROWN */}
        <section className="relative isolate overflow-hidden bg-brown pb-20 pt-12 text-cream md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/cities/evian-3.jpg"
              alt="Société de ménage GH Services en intervention à Évian-les-Bains, quartier des Mateirons"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brown/95 via-brown/75 to-brown/40" />
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

            <h1 className="mt-6 max-w-3xl font-display text-[36px] leading-[1.05] font-bold tracking-tight uppercase text-cream sm:text-[48px] md:text-[60px]">
              Société de ménage à{" "}
              <span className="text-orange">Évian-les-Bains</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-cream/95 sm:text-lg">
              GH Services est une société de ménage Évian-les-Bains basée à 10
              minutes, à Thonon. Notre différence : une équipe stable et
              salariée déclarée, un planning fixe hebdomadaire ou bimensuel, et
              un protocole pensé pour les villas vue Léman, les appartements du
              centre et les résidences secondaires lacustres. Aide ménagère
              Évian, femme de ménage Évian pour résidence principale, ménage
              régulier crédit impôt Évian pour expatriés genevois, repassage à
              domicile, services à la personne, crédit d&apos;impôt 50%, CESU
              préfinancé accepté, attestation Urssaf annuelle fournie.
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
                Crédit d&apos;impôt 50%
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Équipe stable Thonon
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Résidences secondaires gérées
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 2 - POUR QUI A EVIAN */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Pour qui à Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Six profils typiques de ménage à domicile Évian
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                À la différence d&apos;une plateforme nationale, notre approche
                de société de ménage Évian-les-Bains commence par le profil
                client. Sur la rive sud, ce profil n&apos;est jamais le même
                entre un retraité installé aux Mateirons et un expatrié genevois
                en villégiature à Lugrin. Voici les six configurations que nous
                rencontrons toutes les semaines.
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

        {/* SECTION 3 - NOTRE APPROCHE MENAGE EVIAN */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Notre approche ménage Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Quatre piliers d&apos;une agence de ménage Évian fiable
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Beaucoup de propriétaires évianais ont déjà testé une
                plateforme, une auto-entrepreneuse ponctuelle ou un emploi
                direct via CESU. Notre logique d&apos;aide ménagère Évian
                repose sur quatre piliers qui se voient dès le premier mois.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {APPROACH.map((a, i) => (
                <li
                  key={a.title}
                  className="rounded-3xl bg-cream p-7 ring-1 ring-brown/10"
                >
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                    Pilier {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-brown">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brown/75">
                    {a.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 4 - SPECIFICITES MENAGE EVIAN */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Spécificités ménage Évian
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Quatre repères propres au ménage à domicile Évian
                </h2>
                <p className="mt-5 text-base text-brown/75 md:text-lg">
                  Faire le ménage à Évian, ce n&apos;est pas exactement la
                  même chose qu&apos;à Thonon ou Annemasse. Voici quatre
                  réalités locales que notre équipe stable observe chaque
                  semaine sur la rive sud du Léman.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-brown/85 md:text-base">
                  {SPECIFICITIES.map((sp) => (
                    <li key={sp.title} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                      <span>
                        <strong>{sp.title} : </strong>
                        {sp.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/evian-6.jpg"
                  alt="Centre d'Évian-les-Bains, secteur ménage à domicile pour familles actives et professions libérales"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - TARIFS ET CREDIT IMPOT 50% */}
        <section id="tarifs" className="bg-brown py-20 text-cream">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Tarifs et crédit d&apos;impôt 50%
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-cream sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Votre ménage à domicile Évian, coût réel divisé par deux
              </h2>
              <p className="mt-5 text-base text-cream/85 md:text-lg">
                Le ménage à domicile relève du dispositif des services à la
                personne (SAP). En tant que particulier domicilié fiscalement
                en France, vous bénéficiez d&apos;un crédit d&apos;impôt de 50%
                sur les sommes versées à une société de ménage déclarée comme
                la nôtre. Concrètement, une heure facturée 30 € vous coûte
                réellement 15 € net après crédit d&apos;impôt. Grâce à
                l&apos;avance immédiate Urssaf activée sur votre compte
                particulier emploi, vous ne décaissez que la moitié dès
                l&apos;envoi de la facture, sans attendre la déclaration
                annuelle de revenus.
              </p>
              <p className="mt-4 text-base text-cream/85 md:text-lg">
                Le dispositif s&apos;applique à toutes les heures de ménage
                régulier crédit impôt Évian, y compris le repassage à domicile
                inclus dans la prestation, l&apos;entretien des vitres
                intérieures et le nettoyage de l&apos;intérieur des
                électroménagers. Le CESU préfinancé fourni par votre
                employeur, votre caisse de retraite ou la mairie est accepté
                en complément. Vous recevez chaque année, automatiquement, une
                attestation Urssaf reprenant le total annuel à reporter sur
                votre déclaration.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Devis 24 h
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Devis personnalisé 24 h
                </p>
                <p className="mt-3 text-sm text-cream/80">
                  Tarif chiffré sous 24 h ouvrées après visite ou échange de
                  photos pour les expatriés genevois. Détail des heures, de la
                  fréquence, des options.
                </p>
              </div>
              <div className="rounded-3xl bg-orange p-7 text-cream ring-2 ring-orange/40">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-cream/90">
                  Avantage SAP
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight">
                  -50% crédit d&apos;impôt
                </p>
                <p className="mt-3 text-sm text-cream/90">
                  Avance immédiate Urssaf, vous ne payez que la moitié dès la
                  facture. CESU préfinancé accepté en complément.
                </p>
              </div>
              <div className="rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/20 backdrop-blur-md">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-orange">
                  Attestation
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-cream">
                  Attestation Urssaf annuelle fournie
                </p>
                <p className="mt-3 text-sm text-cream/80">
                  Document fiscal récapitulatif transmis chaque début
                  d&apos;année, à reporter directement sur votre déclaration
                  de revenus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - ZONES D'INTERVENTION */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Zones d&apos;intervention
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Femme de ménage Évian et dix communes de la rive sud
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Notre périmètre de ménage à domicile Évian couvre Évian
                centre, la côte vers Saint-Gingolph et le plateau de Gavot.
                Pas de frais de déplacement jusqu&apos;à 25 km autour de
                Thonon, ce qui englobe l&apos;intégralité des dix communes
                listées ci-dessous.
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

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <Link
                href="/menage-thonon-les-bains"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Voir : société de ménage Thonon-les-Bains
              </Link>
              <Link
                href="/nettoyage-evian-les-bains"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Voir : entreprise de nettoyage Évian
              </Link>
              <Link
                href="/nettoyage-chalets-leman"
                className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-4 py-2 font-medium text-brown ring-1 ring-brown/10 transition-colors hover:bg-orange hover:text-cream"
              >
                Voir : nettoyage chalets Léman
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7 - TEMOIGNAGES */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Avis vérifiés
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                  Témoignages clients société de ménage Évian
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

        {/* SECTION 8 - GALERIE */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                Galerie ménage Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Évian-les-Bains, terrain quotidien de notre équipe
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] ring-1 ring-brown/10 md:row-span-2 md:aspect-auto">
                <Image
                  src="/photos/cities/evian-3.jpg"
                  alt="Vue d'Évian-les-Bains, secteur quotidien de notre société de ménage à domicile"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/cities/evian-6.jpg"
                  alt="Centre d'Évian-les-Bains, résidences accompagnées par GH Services en ménage régulier"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-brown/10">
                <Image
                  src="/photos/showcase-team.jpg"
                  alt="Équipe stable salariée GH Services en intervention ménage à domicile à Évian"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 - FAQ MENAGE EVIAN */}
        <section className="bg-cream-soft py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-12">
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                FAQ ménage Évian
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                Vos questions sur le ménage à Évian-les-Bains
              </h2>
              <p className="mt-5 text-base text-brown/75 md:text-lg">
                Huit questions concrètes qui reviennent le plus souvent de la
                part des propriétaires évianais, des résidents secondaires de
                Lugrin et des expatriés genevois en villégiature.
              </p>
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

        {/* SECTION 10 - CTA DEVIS */}
        <section id="devis" className="bg-cream py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <aside className="space-y-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
                    Devis sous 24 h
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05]">
                    Recevez votre devis ménage Évian
                  </h2>
                  <p className="mt-5 text-base text-brown/75 md:text-lg">
                    Précisez la commune (Évian, Publier, Amphion, Maxilly,
                    Lugrin ou autre rive sud), la surface, la fréquence
                    souhaitée (hebdomadaire, bimensuelle, ponctuelle) et la
                    configuration (résidence principale ou résidence
                    secondaire). Tarif personnalisé sous 24 h ouvrées, crédit
                    d&apos;impôt 50% déjà simulé.
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
                    devis ménage Évian sous 24 h.
                  </p>
                </a>

                <div className="rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-xs leading-relaxed text-red-900">
                  <strong>Aucun recrutement en cours.</strong>{" "}
                  Merci de ne pas téléphoner ni envoyer d&apos;e-mail pour une
                  candidature, les demandes spontanées ne sont pas traitées.
                </div>
              </aside>

              <ServiceQuoteForm
                serviceLabel="Ménage Évian"
                source="menage_evian"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
