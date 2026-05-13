import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Showcase } from "@/components/sections/Showcase";
import { LogoWall } from "@/components/sections/LogoWall";
import { TripleIntro } from "@/components/sections/TripleIntro";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { SubCardCarousel } from "@/components/sections/SubCardCarousel";
import { CherryCenterpiece } from "@/components/sections/CherryCenterpiece";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reviews } from "@/components/sections/Reviews";
import { Resources } from "@/components/sections/Resources";
import { FAQ } from "@/components/sections/FAQ";
import { BigCTA } from "@/components/sections/BigCTA";
import { Engagements } from "@/components/sections/Engagements";
import { ContactCTA } from "@/components/sections/ContactCTA";
import type { FeatureBlock, FeatureCard } from "@/types";

const RESIDENTIEL_BLOCK: FeatureBlock = {
  eyebrow: "Particuliers et locataires",
  title: "Du studio à la villa",
  description:
    "Nettoyage de fin de bail, départ de locataire, ménage de printemps, vitres extérieures et vérandas, déménagement clé en main. Un travail soigné qui vous fait récupérer votre caution et garde votre maison saine.",
  ctaLabel: "Devis pour mon logement",
  ctaHref: "/contact",
  image: "/photos/service-etat-lieux.jpg",
  imageAlt: "Logement remis en état après nettoyage GH Services",
};

const RESIDENTIEL_CARDS: FeatureCard[] = [
  {
    title: "Vitres et vérandas",
    description:
      "Vitres, verrières, vitrines. Sans traces, en hauteur ou en accès difficile.",
    image: "/photos/service-vitres.jpg",
    imageAlt: "Nettoyage de vitre sans traces",
    href: "/contact",
  },
  {
    title: "Fin de bail",
    description:
      "Tout ce que les bailleurs inspectent : joints, hotte, plinthes, four, sanitaires.",
    image: "/photos/service-etat-lieux.jpg",
    imageAlt: "Nettoyage de fin de bail",
    href: "/contact",
  },
  {
    title: "Canapés, matelas, tapis",
    description:
      "Extraction profonde, sans résidu. Élimination des allergènes et acariens.",
    image: "/photos/service-textile.jpg",
    imageAlt: "Nettoyage de canapé en textile",
    href: "/contact",
  },
  {
    title: "Anti humidité",
    description:
      "Murs, plafonds, salles d'eau. Traitement curatif et préventif durable.",
    image: "/photos/service-humidite.jpg",
    imageAlt: "Traitement anti humidité",
    href: "/contact",
  },
];

const PRO_BLOCK: FeatureBlock = {
  eyebrow: "Syndics, agences, pros",
  title: "Copropriétés et locaux pros",
  description:
    "Halls, cages d'escalier, parkings, locaux techniques, bureaux et commerces. Contrats syndic, gestionnaires d'immeubles, ou interventions ponctuelles selon votre besoin.",
  ctaLabel: "Étudier mon contrat",
  ctaHref: "/contact",
  image: "/photos/service-coproprietes.jpg",
  imageAlt: "Nettoyage de hall d'immeuble en copropriété",
  reversed: true,
};

const PRO_CARDS: FeatureCard[] = [
  {
    title: "Parties communes",
    description:
      "Halls, escaliers, paliers, ascenseurs. Entretien régulier ou ponctuel.",
    image: "/photos/service-coproprietes.jpg",
    imageAlt: "Cage d'escalier nettoyée",
    href: "/contact",
  },
  {
    title: "Fin de chantier",
    description:
      "Après travaux, sinistre, rénovation. Locaux livrés prêts à recevoir.",
    image: "/photos/service-etat-lieux.jpg",
    imageAlt: "Local après fin de chantier",
    href: "/contact",
  },
  {
    title: "Débarras",
    description:
      "Caves, garages, locaux pros. Tri, valorisation, recyclage responsables.",
    image: "/photos/service-debarras.jpg",
    imageAlt: "Espace vidé après débarras",
    href: "/contact",
  },
  {
    title: "Espaces verts",
    description:
      "Tonte, taille, désherbage, allées. Contrats à l'année pour syndics et entreprises.",
    image: "/photos/service-espaces-verts.jpg",
    imageAlt: "Espaces verts entretenus",
    href: "/contact",
  },
  {
    title: "Petite maçonnerie",
    description:
      "Murets, dalles, chapes, rampes, clôtures. Finitions soignées garanties.",
    image: "/photos/service-maconnerie.jpg",
    imageAlt: "Petite maçonnerie finitions",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <Hero />
        <Stats />
        <Showcase />
        <LogoWall />
        <TripleIntro />
        <SectorsGrid />

        <section>
          <FeatureRow block={RESIDENTIEL_BLOCK} />
          <SubCardCarousel items={RESIDENTIEL_CARDS} />
          <FeatureRow block={PRO_BLOCK} />
          <SubCardCarousel items={PRO_CARDS} />
        </section>

        <CherryCenterpiece />
        <WhyChoose />
        <Process />
        <Partners />
        <Testimonials />
        <Reviews />
        <Resources />
        <FAQ />
        <BigCTA />
        <Engagements />
        <ContactCTA />
      </main>
      <Footer />
      <ChatBubble />
    </>
  );
}
