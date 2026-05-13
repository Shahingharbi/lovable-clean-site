import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de GH Services, entreprise de nettoyage à Thonon-les-Bains. Identification de l'éditeur, hébergeur, responsable de publication et propriété intellectuelle.",
  alternates: { canonical: "https://www.ghservices.fr/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <section className="bg-brown py-32 text-cream">
          <div className="mx-auto max-w-[960px] px-6 pt-12 lg:px-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
              Informations légales
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-cream sm:text-5xl md:text-[64px] md:leading-[1.05]">
              Mentions légales
            </h1>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-[960px] px-6 lg:px-12">
            <div className="prose prose-lg max-w-none text-brown/85">
              <Block title="Éditeur du site">
                <p>
                  <strong>GH Services</strong>, entreprise individuelle.
                  <br />
                  5 avenue des Prés Verts, 74200 Thonon-les-Bains, France.
                </p>
                <p>
                  Téléphone : 06 84 66 55 23
                  <br />
                  E-mail : contact@ghservices.fr
                </p>
                <p>
                  Directeur de la publication : Monsieur Hassen Gharbi.
                </p>
              </Block>

              <Block title="Hébergement">
                <p>
                  Le présent site est hébergé par <strong>Vercel Inc.</strong>,
                  340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
                </p>
              </Block>

              <Block title="Propriété intellectuelle">
                <p>
                  L&apos;ensemble du contenu de ce site (textes, photographies,
                  logos, identité visuelle, structure) est la propriété de GH
                  Services ou de ses partenaires. Toute reproduction, même
                  partielle, est interdite sans autorisation écrite préalable.
                </p>
                <p>
                  Les avis clients reproduits sur ce site proviennent de la
                  fiche Avis Google de l&apos;entreprise et de retours clients
                  authentiques. Les noms des contributeurs sont publiés tels
                  qu&apos;ils figurent sur la plateforme d&apos;origine.
                </p>
              </Block>

              <Block title="Responsabilité">
                <p>
                  GH Services s&apos;efforce de tenir les informations de ce
                  site à jour mais ne saurait être tenue pour responsable des
                  erreurs, omissions ou indisponibilités. Les tarifs et
                  disponibilités sont susceptibles d&apos;évoluer sans préavis.
                </p>
              </Block>

              <Block title="Liens hypertextes">
                <p>
                  Ce site peut contenir des liens vers des sites externes. GH
                  Services n&apos;exerce aucun contrôle sur ces sites et
                  décline toute responsabilité quant à leur contenu.
                </p>
              </Block>

              <Block title="Médiation à la consommation">
                <p>
                  Conformément à l&apos;article L. 612-1 du Code de la
                  consommation, le client peut recourir gratuitement à un
                  médiateur de la consommation. Pour toute réclamation, merci
                  de contacter d&apos;abord GH Services à
                  contact@ghservices.fr.
                </p>
              </Block>

              <Block title="Droit applicable">
                <p>
                  Les présentes mentions légales sont régies par le droit
                  français. En cas de litige, les tribunaux français seront
                  seuls compétents.
                </p>
              </Block>

              <p className="mt-12 text-sm text-brown/60">
                Dernière mise à jour : mai 2026.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 first:mt-0">
      <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-brown md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-base leading-7">{children}</div>
    </div>
  );
}
