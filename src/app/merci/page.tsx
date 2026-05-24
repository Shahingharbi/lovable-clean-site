"use client";

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneIcon, CheckIcon } from "@/components/icons";
import {
  readAndClearFormUserData,
  normalizeEmail,
  normalizePhoneFr,
} from "@/lib/enhanced-conversions";

const PHONE_DISPLAY = "06 84 66 55 23";
const PHONE_TEL = "+33684665523";
const WHATSAPP_URL = "https://wa.me/33684665523";
const ADS_FORM_SEND_TO = "AW-17969657087/HevKCL2W37IcEP_pzPhC";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export default function MerciPage() {
  useEffect(() => {
    // Push to dataLayer (GTM-ready, even if user refused consent for Ads)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "form_submit_success", source: "contact_form" });

    // Enhanced Conversions: fournir email + phone hachés par gtag avant
    // l'event conversion pour améliorer le taux de matching post-cookies.
    const userData = readAndClearFormUserData();
    if (typeof window.gtag === "function") {
      if (userData) {
        const email = normalizeEmail(userData.email);
        const phone = normalizePhoneFr(userData.phone);
        const payload: Record<string, string> = {};
        if (email) payload.email = email;
        if (phone) payload.phone_number = phone;
        if (email || phone) {
          window.gtag("set", "user_data", payload);
        }
      }
      // Fire Google Ads conversion (will be no-op if consent is denied)
      window.gtag("event", "conversion", {
        send_to: ADS_FORM_SEND_TO,
      });
    }
  }, []);

  return (
    <>
      <Script id="merci-noindex" strategy="beforeInteractive">
        {`(function(){var m=document.createElement('meta');m.name='robots';m.content='noindex,follow';document.head.appendChild(m);})();`}
      </Script>
      <Header />
      <main className="bg-cream pt-[140px] pb-24">
        <section className="mx-auto max-w-[860px] px-6 lg:px-12">
          <div className="rounded-[40px] bg-cream-soft p-8 ring-1 ring-brown/10 md:p-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange/15 px-4 py-2 ring-1 ring-orange/30">
              <CheckIcon className="h-4 w-4 text-orange" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-orange">
                Demande reçue
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-brown sm:text-5xl md:text-[60px]">
              Merci, votre demande
              <br />
              est bien reçue.
            </h1>

            <p className="mt-6 text-base text-brown/80 md:text-lg">
              Notre équipe vous recontacte sous 24 heures ouvrées pour votre
              devis gratuit. Vous recevrez par e-mail le récapitulatif de
              votre demande.
            </p>

            <div className="mt-10 rounded-3xl bg-cream p-6 ring-1 ring-brown/10 md:p-8">
              <p className="font-display text-base font-bold uppercase tracking-tight text-brown">
                Besoin d&apos;une réponse plus rapide ?
              </p>
              <p className="mt-2 text-sm text-brown/75 md:text-base">
                Appelez-nous directement (lun à sam, 7 h à 19 h) ou écrivez
                sur WhatsApp.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-orange px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream shadow-[0_18px_30px_-12px_rgba(37,99,235,0.45)] transition-colors hover:bg-orange-dark"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Appeler le {PHONE_DISPLAY}
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.04 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.42-8.43Zm-8.48 18.31a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.75.98 1-3.65-.23-.38a9.86 9.86 0 0 1-1.5-5.26c0-5.45 4.43-9.88 9.87-9.88 2.64 0 5.12 1.03 6.99 2.9a9.81 9.81 0 0 1 2.9 6.99c0 5.45-4.43 9.88-9.9 9.88Zm5.42-7.4c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.79.37c-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.88 1.22 3.08.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z"/>
                  </svg>
                  WhatsApp
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brown/15 bg-cream px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-brown transition-colors hover:bg-brown hover:text-cream"
                >
                  Retour à l&apos;accueil
                </Link>
              </div>
            </div>

            <p className="mt-8 text-sm text-brown/60">
              Demande enregistrée par GH Services, 5 avenue des Prés Verts,
              74200 Thonon-les-Bains. Conforme RGPD, vos données ne sont
              utilisées que pour répondre à votre demande.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
