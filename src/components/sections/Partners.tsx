import {
  ShieldIcon,
  ClockIcon,
  LeafCheckIcon,
  CheckIcon,
  PhoneIcon,
  SparkleSmallIcon,
  GoogleGIcon,
} from "@/components/icons";

const GUARANTEES = [
  {
    icon: ShieldIcon,
    label: "Assurance pro",
    sub: "RC Pro et décennale",
  },
  {
    icon: ClockIcon,
    label: "Devis sous 24 h",
    sub: "Réponse rapide",
  },
  {
    icon: CheckIcon,
    label: "Engagement résultat",
    sub: "Retouche offerte",
  },
  {
    icon: LeafCheckIcon,
    label: "Produits éco",
    sub: "Respect des occupants",
  },
  {
    icon: PhoneIcon,
    label: "Disponible 7 j/7",
    sub: "Urgences acceptées",
  },
  {
    icon: SparkleSmallIcon,
    label: "Travail soigné",
    sub: "Finitions garanties",
  },
  {
    icon: GoogleGIcon,
    label: "5/5 sur Google",
    sub: "17 avis vérifiés",
  },
];

export function Partners() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h3 className="text-center font-display text-2xl font-bold uppercase tracking-tight text-brown md:text-[32px] md:leading-[1.1]">
          {"Nos garanties, "}
          <br />
          votre tranquillité
        </h3>
        <div className="mt-12 grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {GUARANTEES.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl bg-cream-soft px-4 py-6 text-center ring-1 ring-black/5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange text-cream">
                <Icon className="h-5 w-5" />
              </span>
              <p className="font-display text-sm font-bold uppercase tracking-tight text-brown">
                {label}
              </p>
              <p className="text-xs leading-5 text-brown/65">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
