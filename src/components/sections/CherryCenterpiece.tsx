import Image from "next/image";
import Link from "next/link";
import { SparkleSmallIcon } from "@/components/icons";

export function CherryCenterpiece() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-[1408px] px-4 lg:px-12">
        <div className="relative overflow-hidden rounded-[48px]">
          <Image
            src="/photos/cherry-pro.jpg"
            alt="Intérieur impeccable après prestation GH Services"
            width={1408}
            height={760}
            className="h-[560px] w-full object-cover md:h-[720px]"
          />
          <div className="absolute inset-0 bg-brown/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-cream">
            <h2 className="relative font-display text-5xl font-bold uppercase leading-[1] tracking-tight text-cream sm:text-6xl md:text-[88px] lg:text-[104px]">
              <span className="block">{"propre, "}</span>
              <span className="block">{"net, "}</span>
              <span className="block">irréprochable</span>
              <SparkleSmallIcon className="absolute -right-4 top-[40%] h-12 w-12 text-cream md:-right-8" />
            </h2>
            <p className="mt-6 max-w-xl text-base text-cream/90 md:text-lg">
              Un travail soigné, des produits adaptés, un résultat livré dans
              les délais. Et un suivi humain à chaque étape.
            </p>
            <Link
              href="#contact"
              className="mt-10 inline-flex items-center rounded-full bg-orange px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark"
            >
              Mon devis en 2 minutes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
