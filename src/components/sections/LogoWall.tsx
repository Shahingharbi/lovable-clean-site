import { PinIcon } from "@/components/icons";

const ZONES = [
  "Thonon-les-Bains",
  "Évian-les-Bains",
  "Annemasse",
  "Douvaine",
  "Sciez",
  "Publier",
  "Bons-en-Chablais",
  "Anthy-sur-Léman",
  "Margencel",
  "Allinges",
  "Yvoire",
  "Excenevex",
  "Saint-Gingolph",
  "Lugrin",
  "Marin",
  "Neuvecelle",
  "Maxilly-sur-Léman",
  "Messery",
  "Nernier",
  "Chens-sur-Léman",
  "Saint-Paul-en-Chablais",
  "Genève",
];

export function LogoWall() {
  const all = [...ZONES, ...ZONES];
  return (
    <section id="zones" className="bg-cream py-16">
      <h3 className="text-center font-display text-2xl font-bold uppercase tracking-tight text-brown md:text-[28px]">
        Nous intervenons dans tout le Chablais et le Léman
      </h3>
      <div className="relative mt-12 overflow-hidden">
        <div className="marquee-track flex items-center gap-4">
          {all.map((zone, i) => (
            <div
              key={`${zone}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brown/10 bg-cream-soft px-5 py-2.5 text-sm font-semibold text-brown"
            >
              <PinIcon className="h-4 w-4 text-orange" />
              {zone}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}
