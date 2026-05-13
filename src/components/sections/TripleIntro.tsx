import { LeafCheckIcon, SparkleSmallIcon } from "@/components/icons";

const POINTS = [
  "Devis gratuit sous 24 h",
  "Équipe locale formée",
  "Engagement résultat",
];

export function TripleIntro() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
        <div className="relative inline-block">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brown sm:text-4xl md:text-[44px] md:leading-[1.05] lg:text-[52px]">
            {"un seul prestataire, "}
            <br />
            tous vos chantiers de propreté
          </h2>
          <SparkleSmallIcon className="absolute -right-10 top-2 h-10 w-10 text-orange md:-right-14" />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-base text-brown/75 md:text-lg">
          Particuliers, syndics, agences immobilières, commerces, bureaux : nous
          gérons toutes vos prestations de propreté avec un interlocuteur unique
          et des tarifs transparents.
        </p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-base font-medium text-brown md:text-lg">
          {POINTS.map((p) => (
            <li key={p} className="inline-flex items-center gap-2">
              <LeafCheckIcon className="h-5 w-5 text-orange" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
