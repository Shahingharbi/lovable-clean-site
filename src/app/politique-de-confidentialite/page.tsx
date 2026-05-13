import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de GH Services, entreprise de nettoyage à Thonon-les-Bains. Données collectées, finalités, conservation, droits RGPD et cookies.",
  alternates: { canonical: "https://www.ghservices.fr/politique-de-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <section className="bg-brown py-32 text-cream">
          <div className="mx-auto max-w-[960px] px-6 pt-12 lg:px-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange">
              Vos données, notre responsabilité
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-cream sm:text-5xl md:text-[64px] md:leading-[1.05]">
              Politique de confidentialité
            </h1>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-[960px] px-6 lg:px-12">
            <div className="prose prose-lg max-w-none text-brown/85">
              <Block title="Responsable du traitement">
                <p>
                  Les données collectées sur ce site sont traitées par
                  <strong> GH Services</strong>, 5 avenue des Prés Verts,
                  74200 Thonon-les-Bains, France.
                </p>
                <p>
                  Pour toute question relative à vos données :
                  contact@ghservices.fr ou 06 84 66 55 23.
                </p>
              </Block>

              <Block title="Données collectées">
                <p>
                  Lorsque vous remplissez notre formulaire de contact ou de
                  demande de devis, nous collectons les informations
                  suivantes :
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1.5">
                  <li>Nom et prénom</li>
                  <li>Adresse e-mail</li>
                  <li>Numéro de téléphone (facultatif)</li>
                  <li>Service souhaité</li>
                  <li>Description de votre besoin</li>
                </ul>
              </Block>

              <Block title="Finalités du traitement">
                <p>
                  Vos données sont utilisées exclusivement pour :
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1.5">
                  <li>Répondre à votre demande de contact ou de devis</li>
                  <li>Établir un devis personnalisé</li>
                  <li>Planifier et suivre une éventuelle intervention</li>
                  <li>Vous tenir informé du traitement de votre demande</li>
                </ul>
                <p className="mt-3">
                  Aucune donnée n&apos;est utilisée à des fins de prospection
                  commerciale automatisée. Aucune donnée n&apos;est revendue
                  à des tiers.
                </p>
              </Block>

              <Block title="Base légale">
                <p>
                  Le traitement repose sur votre consentement (case à cocher
                  lors de l&apos;envoi du formulaire) et sur l&apos;exécution
                  de mesures précontractuelles à votre demande, conformément
                  au Règlement général sur la protection des données (RGPD).
                </p>
              </Block>

              <Block title="Durée de conservation">
                <p>
                  Vos données sont conservées :
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1.5">
                  <li>3 ans à compter du dernier contact pour les prospects</li>
                  <li>10 ans après la fin de la relation contractuelle pour les clients (obligation légale comptable)</li>
                </ul>
              </Block>

              <Block title="Sous-traitants">
                <p>
                  L&apos;envoi des formulaires est traité par
                  <strong> EmailJS</strong> (service tiers de transmission
                  d&apos;e-mails). Le site est hébergé par
                  <strong> Vercel Inc.</strong> Ces prestataires sont liés par
                  des accords garantissant la confidentialité et la sécurité
                  de vos données.
                </p>
              </Block>

              <Block title="Vos droits">
                <p>
                  Conformément au RGPD et à la loi Informatique et libertés,
                  vous disposez des droits suivants :
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1.5">
                  <li>Droit d&apos;accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit d&apos;opposition</li>
                </ul>
                <p className="mt-3">
                  Pour exercer ces droits, écrivez-nous à
                  contact@ghservices.fr. Vous disposez également d&apos;un
                  droit de réclamation auprès de la CNIL (www.cnil.fr).
                </p>
              </Block>

              <Block title="Cookies">
                <p>
                  Ce site utilise un nombre minimal de cookies, exclusivement
                  techniques (fonctionnement du formulaire, préférences
                  d&apos;affichage). Aucun cookie publicitaire ni de
                  traçage tiers n&apos;est déposé sans votre consentement.
                </p>
              </Block>

              <Block title="Sécurité">
                <p>
                  Nous mettons en œuvre les mesures techniques et
                  organisationnelles appropriées pour protéger vos données
                  contre la perte, l&apos;accès non autorisé ou la
                  divulgation. Toutes les communications avec ce site sont
                  chiffrées (HTTPS).
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
