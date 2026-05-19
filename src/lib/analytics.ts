// Tracking centralisé pour Google Ads + dataLayer (GTM-ready)
//
// Pour activer les conversions Google Ads :
// 1. Crée 2 actions de conversion dans ads.google.com → Outils → Conversions :
//    - "Click téléphone"  → catégorie "Demande de contact"
//    - "Formulaire envoyé" → catégorie "Soumission de formulaire de prospects"
// 2. Choisis "Ajouter manuellement avec du code" (pas Tag Manager pour l'instant)
// 3. Google te donne un ID au format "AW-17969657087/AbCdEfGh1234" pour chacune.
// 4. Remplace les valeurs `REPLACE_…` ci-dessous par tes vrais IDs.
//
// Tant que les IDs sont en placeholder, le tracking dataLayer fonctionne déjà
// (Microsoft Clarity + GTM si un jour tu en ajoutes un), seul l'envoi vers
// Google Ads reste dormant, donc 0 risque de doubler les conversions.

export const ADS_CONVERSION = {
  // Click sur un numéro tel:+33…
  phone: "AW-17969657087/REPLACE_WITH_PHONE_LABEL",
  // Formulaire de contact soumis avec succès (EmailJS status 200)
  form: "AW-17969657087/REPLACE_WITH_FORM_LABEL",
};

// Valeur estimée d'un lead (euros). À ajuster selon ton CA moyen par lead.
const LEAD_VALUES = {
  phone: 30,
  form: 50,
};

type WindowWithGtag = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
};

function isConfigured(id: string) {
  return id && !id.includes("REPLACE_");
}

function pushDataLayer(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as WindowWithGtag;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
}

function sendAdsConversion(sendTo: string, value: number) {
  if (typeof window === "undefined") return;
  if (!isConfigured(sendTo)) return;
  const w = window as WindowWithGtag;
  if (typeof w.gtag !== "function") return;
  w.gtag("event", "conversion", {
    send_to: sendTo,
    value,
    currency: "EUR",
  });
}

export function trackPhoneClick(source = "unknown") {
  pushDataLayer("phone_click", { source });
  sendAdsConversion(ADS_CONVERSION.phone, LEAD_VALUES.phone);
}

export function trackEmailClick(source = "unknown") {
  pushDataLayer("email_click", { source });
}

export function trackFormSubmit(source = "contact_form") {
  pushDataLayer("form_submit", { source });
  sendAdsConversion(ADS_CONVERSION.form, LEAD_VALUES.form);
}

export function trackDevisClick(source = "unknown") {
  pushDataLayer("devis_cta_click", { source });
}
