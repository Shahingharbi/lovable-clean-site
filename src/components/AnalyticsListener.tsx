"use client";

import { useEffect } from "react";
import {
  trackPhoneClick,
  trackEmailClick,
  trackDevisClick,
} from "@/lib/analytics";

/**
 * Écoute les clics sur tout le site et déclenche le bon tracker selon la cible.
 * - <a href="tel:…">  → trackPhoneClick
 * - <a href="mailto:…"> → trackEmailClick
 * - <a data-track="devis"> ou <button data-track="devis"> → trackDevisClick
 *
 * Pas besoin d'ajouter onClick sur chaque CTA : un seul listener au document.
 */
export function AnalyticsListener() {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a, button");
      if (!link) return;

      if (link instanceof HTMLAnchorElement) {
        const href = link.getAttribute("href") || "";
        if (href.startsWith("tel:")) {
          trackPhoneClick(inferSource(link));
          return;
        }
        if (href.startsWith("mailto:")) {
          trackEmailClick(inferSource(link));
          return;
        }
      }

      const trackAttr = link.getAttribute("data-track");
      if (trackAttr === "devis") {
        trackDevisClick(inferSource(link));
      }
    }

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}

function inferSource(el: Element): string {
  // Cherche la section parent la plus proche pour étiqueter l'origine du clic
  const section = el.closest("section, header, footer");
  if (!section) return "unknown";
  return section.id || section.tagName.toLowerCase();
}
