import Image from "next/image";

export function Showcase() {
  return (
    <section className="bg-cream pt-24 pb-12">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="text-center font-display text-4xl font-bold uppercase tracking-tight text-brown sm:text-5xl md:text-[64px] md:leading-[1.05] lg:text-[80px]">
          {"un nettoyage "}
          <br />
          <span className="text-brown/40">qui se voit, qui dure</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base text-brown/75 md:text-lg">
          Plus de 15 ans à entretenir maisons, copropriétés et locaux pros sur
          le Chablais et le Léman. Une équipe de proximité, du matériel pro,
          un travail soigné jusqu'au dernier détail.
        </p>

        <div className="relative mt-16 overflow-hidden rounded-[40px] bg-peach shadow-[0_30px_80px_-30px_rgba(11,27,44,0.4)]">
          <Image
            src="/photos/showcase-team.jpg"
            alt="Équipe GH Services en intervention de nettoyage professionnel"
            width={1600}
            height={920}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>
    </section>
  );
}
