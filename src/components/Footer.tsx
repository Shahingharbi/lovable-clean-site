import Link from "next/link";
import { GHLogo, PhoneIcon, MailIcon, PinIcon } from "@/components/icons";

const SERVICES_COL: { label: string; href: string }[] = [
  { label: "Nettoyage de vitres", href: "/nettoyage-vitres-thonon" },
  { label: "Fin de chantier", href: "/fin-de-chantier-thonon" },
  { label: "Copropriétés et halls", href: "/nettoyage-coproprietes-thonon" },
  { label: "Nettoyage de textiles", href: "/nettoyage-textiles-thonon" },
  { label: "Anti humidité et moisissures", href: "/traitement-humidite-thonon" },
  { label: "Débarras éco-responsable", href: "/debarras-thonon" },
  { label: "Espaces verts", href: "/entretien-espaces-verts-thonon" },
  { label: "Petite maçonnerie", href: "/petite-maconnerie-thonon" },
  { label: "Déménagement", href: "/demenagement-thonon" },
  { label: "Société de ménage", href: "/menage-thonon-les-bains" },
  { label: "Chalets et résidences", href: "/nettoyage-chalets-leman" },
  { label: "État des lieux sortant", href: "/etat-des-lieux-sortant-thonon" },
];

const ZONES_COL: { label: string; href: string }[] = [
  { label: "Thonon-les-Bains", href: "/" },
  { label: "Évian-les-Bains", href: "/nettoyage-evian-les-bains" },
  { label: "Annemasse", href: "/nettoyage-annemasse" },
  { label: "Douvaine", href: "/nettoyage-douvaine" },
  { label: "Sciez", href: "/nettoyage-sciez" },
  { label: "Publier", href: "/nettoyage-publier" },
  { label: "Bons-en-Chablais", href: "/nettoyage-bons-en-chablais" },
  { label: "Anthy-sur-Léman", href: "/nettoyage-anthy-sur-leman" },
  { label: "Yvoire", href: "/nettoyage-yvoire" },
];

const COMPANY_COL = [
  { label: "À propos", href: "#a-propos" },
  { label: "Nos avis Google", href: "#avis" },
  { label: "Ressources et blog", href: "#ressources" },
  { label: "Demander un devis", href: "#contact" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-brown py-20 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span
          className="font-display font-bold uppercase tracking-tighter text-orange/15"
          style={{ fontSize: "clamp(140px, 22vw, 320px)", lineHeight: 1 }}
        >
          GH SERVICES
        </span>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <GHLogo className="h-20 w-auto brightness-0 invert md:h-24" />
            <p className="mt-6 max-w-sm text-sm leading-6 text-cream/80">
              Votre partenaire multiservices de confiance en région lémanique.
              Nettoyage professionnel, fin de chantier, copropriétés et entretien
              à Thonon-les-Bains, Évian, Annemasse et tout le Chablais.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-cream/85">
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <a href="tel:+33684665523" className="hover:text-orange">
                  06 84 66 55 23
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <a href="mailto:contact@ghservices.fr" className="hover:text-orange">
                  contact@ghservices.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <span>
                  5 avenue des Prés Verts,
                  <br />
                  74200 Thonon-les-Bains
                </span>
              </li>
            </ul>
          </div>

          <FooterColumn label="Services" items={SERVICES_COL} />
          <FooterColumn label="Zones d'intervention" items={ZONES_COL} />
          <FooterColumn label="GH Services" items={COMPANY_COL} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 text-sm text-cream/70 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} GH Services. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link href="/mentions-legales" className="hover:text-orange">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite" className="hover:text-orange">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-orange">
                Devis gratuit
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-4 text-xs text-cream/55">
          Site conçu par Shahin Gharbi,{" "}
          <a
            href="https://shahingharbi.com/creation-site-internet-thonon"
            target="_blank"
            rel="noopener"
            className="underline decoration-cream/30 underline-offset-2 transition-colors hover:text-orange hover:decoration-orange"
          >
            création de site internet à Thonon-les-Bains
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-base font-bold uppercase tracking-tight text-cream">
        {label}
      </h4>
      <ul className="mt-4 space-y-2 text-sm text-cream/75">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="transition-colors hover:text-orange">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
