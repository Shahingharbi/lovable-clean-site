import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Engagements } from "@/components/sections/Engagements";
import { StarIcon, GoogleGIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact, demande de devis gratuit",
  description:
    "Contactez GH Services à Thonon-les-Bains. Devis gratuit sous 24 h pour vos prestations de nettoyage : vitres, copropriétés, fin de chantier, textiles, déménagement. Téléphone 06 84 66 55 23, email contact@ghservices.fr.",
  alternates: { canonical: "https://www.ghservices.fr/contact" },
  openGraph: {
    title: "Contact, demande de devis gratuit | GH Services",
    description:
      "Demandez votre devis gratuit à GH Services Thonon-les-Bains. Réponse sous 24 h ouvrées. Téléphone 06 84 66 55 23.",
    url: "https://www.ghservices.fr/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <section className="relative isolate overflow-hidden bg-brown text-cream">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/photos/showcase-team.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brown/90 via-brown/70 to-brown/40" />
          </div>

          <div className="mx-auto max-w-[1408px] px-6 pt-[180px] pb-24 lg:px-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 ring-1 ring-cream/20 backdrop-blur-md">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow" />
                  ))}
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-cream">
                  5 sur 5 sur Avis Google
                </span>
                <GoogleGIcon className="h-4 w-4" />
              </div>

              <h1 className="mt-8 font-display text-[40px] leading-[1.05] font-bold tracking-tight uppercase text-cream sm:text-[56px] md:text-[72px] lg:text-[84px]">
                Demandez votre
                <br />
                <span className="text-orange">devis gratuit</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-medium text-cream/95 sm:text-xl">
                Réponse sous 24 h ouvrées. Pour un besoin urgent, dégât des
                eaux, sinistre ou départ précipité de locataire, appelez-nous
                directement, nous décrochons.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+33684665523"
                  className="inline-flex items-center gap-3 rounded-full bg-orange px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_18px_40px_-12px_rgba(37,99,235,0.55)] transition-colors hover:bg-orange-dark"
                >
                  <PhoneIcon className="h-4 w-4" />
                  06 84 66 55 23
                </a>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-[60px] bg-cream"
            style={{ borderTopLeftRadius: "60px", borderTopRightRadius: "60px" }}
          />
        </section>

        <ContactCTA />
        <Engagements />
      </main>
      <Footer />
      <ChatBubble />
    </>
  );
}
