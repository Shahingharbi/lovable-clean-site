import Link from "next/link";
import { SparkleSmallIcon, PhoneIcon } from "@/components/icons";

export function BigCTA() {
  return (
    <section className="bg-cream py-12">
      <div className="mx-auto max-w-[1408px] px-4 lg:px-12">
        <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-orange to-orange-dark px-6 py-20 text-center text-cream md:px-16 md:py-24">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(80% 60% at 0% 0%, rgba(255,255,255,0.25), transparent 60%)",
            }}
          />
          <h2 className="relative mx-auto max-w-5xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-[60px] lg:text-[68px]">
            <SparkleSmallIcon className="mr-3 inline-block h-8 w-8 align-middle text-cream md:h-12 md:w-12" />
            {"Vos locaux méritent un nettoyage à la hauteur, "}
            <span className="block opacity-90">parlons-en aujourd'hui.</span>
          </h2>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contact"
              data-track="devis"
              className="inline-flex items-center rounded-full border-2 border-cream px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-cream hover:text-orange"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33684665523"
              className="inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-orange transition-colors hover:bg-brown hover:text-cream"
            >
              <PhoneIcon className="h-4 w-4" />
              06 84 66 55 23
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
