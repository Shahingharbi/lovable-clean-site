import { ZapIcon, ShieldIcon, GridPlusIcon } from "@/components/icons";

const REASONS = [
  {
    icon: ZapIcon,
    title: "Réactivité 24 h",
    description:
      "Devis sous 24 h ouvrées et intervention rapide, même en urgence : dégât des eaux, sinistre, départ de locataire, fin de chantier.",
  },
  {
    icon: ShieldIcon,
    title: "Travail garanti",
    description:
      "Engagement résultat sur chaque chantier. Retouche gratuite si besoin, équipe formée, matériel pro, produits adaptés.",
  },
  {
    icon: GridPlusIcon,
    title: "Une seule équipe",
    description:
      "Vitres, copropriété, fin de chantier, textiles, débarras, espaces verts : un interlocuteur unique pour tous vos besoins.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="text-center font-display text-4xl font-bold uppercase tracking-tight text-brown sm:text-5xl md:text-[56px] md:leading-[1.05]">
          Pourquoi choisir GH Services
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base text-brown/75 md:text-lg">
          Plus de 15 ans d'expérience à Thonon-les-Bains, une note 5 sur 5 sur
          Google, un engagement clair : un travail bien fait, sur la durée.
        </p>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-orange text-cream shadow-[0_18px_30px_-12px_rgba(37,99,235,0.4)]">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-brown md:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-base leading-7 text-brown/85">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
