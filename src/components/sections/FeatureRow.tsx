import Image from "next/image";
import Link from "next/link";
import type { FeatureBlock } from "@/types";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";

export function FeatureRow({ block }: { block: FeatureBlock }) {
  return (
    <section className="bg-cream py-6">
      <div className="mx-auto max-w-[1408px] px-4 lg:px-12">
        <div className="relative overflow-hidden rounded-[40px] bg-brown text-cream">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(120% 100% at 100% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)",
            }}
          />
          <div
            className={cn(
              "relative grid items-center gap-8 px-6 py-12 sm:px-12 md:py-16 lg:grid-cols-2 lg:px-16 lg:py-20",
              block.reversed && "lg:[&>div:first-child]:order-2",
            )}
          >
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-orange">
                {block.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-[44px] md:leading-[1.05] lg:text-[56px]">
                {block.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-cream/85 md:text-lg">
                {block.description}
              </p>
              <div className="mt-8">
                <Link
                  href={block.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark"
                >
                  {block.ctaLabel}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
              <Image
                src={block.image}
                alt={block.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
