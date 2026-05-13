import {
  ShieldIcon,
  FlagIcon,
  GridPlusIcon,
  ChatBubbleIcon,
  ZapIcon,
  LeafCheckIcon,
} from "@/components/icons";

const ENGAGEMENTS = [
  {
    icon: ShieldIcon,
    title: "Assurance pro",
    description:
      "RC professionnelle et garantie décennale pour intervenir en toute sérénité chez vous.",
  },
  {
    icon: FlagIcon,
    title: "Local et de proximité",
    description:
      "Entreprise basée à Thonon-les-Bains, équipe française, intervention sur tout le Chablais et la région lémanique.",
  },
  {
    icon: GridPlusIcon,
    title: "Sur mesure",
    description:
      "Devis adapté à votre besoin, ponctuel ou récurrent, particulier comme professionnel.",
  },
  {
    icon: ChatBubbleIcon,
    title: "Un seul contact",
    description:
      "Un interlocuteur dédié de la prise de contact à la livraison du chantier. Pas de bot, pas de filtre.",
  },
  {
    icon: ZapIcon,
    title: "Réactivité",
    description:
      "Devis sous 24 h ouvrées, intervention possible en 48 h, urgences traitées en priorité.",
  },
  {
    icon: LeafCheckIcon,
    title: "Engagement éco",
    description:
      "Produits adaptés et respectueux des occupants, tri et valorisation systématiques sur les débarras.",
  },
];

export function Engagements() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="text-center font-display text-4xl font-bold uppercase tracking-tight text-brown sm:text-5xl md:text-[64px] md:leading-[1.05]">
          Nos engagements
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base text-brown/75 md:text-lg">
          Six promesses tenues sur chaque chantier, du studio en location à la
          copropriété de 80 lots.
        </p>
        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
          {ENGAGEMENTS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-orange text-cream shadow-[0_18px_30px_-12px_rgba(37,99,235,0.4)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-brown md:text-xl">
                {title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-brown/85">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
