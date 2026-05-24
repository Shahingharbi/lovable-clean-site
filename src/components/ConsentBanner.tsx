"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ghs-consent-v2";

type ConsentValue = "granted" | "denied" | null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function readConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === "granted" || value === "denied") return value;
  return null;
}

function applyConsent(value: "granted" | "denied") {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const current = readConsent();
    if (current === null) {
      setOpen(true);
    } else {
      applyConsent(current);
    }
  }, []);

  function handleAccept() {
    window.localStorage.setItem(STORAGE_KEY, "granted");
    applyConsent("granted");
    setOpen(false);
  }

  function handleRefuse() {
    window.localStorage.setItem(STORAGE_KEY, "denied");
    applyConsent("denied");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed inset-x-3 bottom-3 z-[200] mx-auto max-w-3xl rounded-2xl bg-brown px-5 py-4 text-cream shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-cream/15 md:inset-x-auto md:left-1/2 md:bottom-6 md:-translate-x-1/2"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <p className="text-sm leading-6 text-cream/90 md:flex-1">
          Nous utilisons des cookies pour mesurer l&apos;audience du site et
          optimiser nos publicités Google Ads. Vous pouvez accepter ou refuser.
          {" "}
          <a
            href="/politique-de-confidentialite"
            className="font-semibold text-orange underline-offset-2 hover:underline"
          >
            En savoir plus
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleRefuse}
            className="rounded-full border border-cream/30 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-cream/90 transition-colors hover:bg-cream/10"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-orange px-5 py-2 font-display text-xs font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
