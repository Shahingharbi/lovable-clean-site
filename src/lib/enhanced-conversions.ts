// Enhanced Conversions helpers for Google Ads.
//
// Flow:
// 1. ContactCTA / ServiceQuoteForm capture submission data into sessionStorage
//    (storeFormUserData) just before routing to /merci.
// 2. /merci reads sessionStorage on mount, sends hashed user_data to gtag,
//    then fires the conversion event, then clears sessionStorage.
//
// Google's gtag automatically SHA-256 hashes email and phone before sending,
// so plaintext values never leave the user's browser.

const STORAGE_KEY = "ghs-form-user-data";

export type StoredUserData = {
  email?: string;
  phone?: string;
};

export function storeFormUserData(data: StoredUserData) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore (private browsing, full quota, etc.)
  }
}

export function readAndClearFormUserData(): StoredUserData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    window.sessionStorage.removeItem(STORAGE_KEY);
    return JSON.parse(raw) as StoredUserData;
  } catch {
    return null;
  }
}

// Normalise a French phone to E.164 (+33XXXXXXXXX). Returns null if unrecognised.
export function normalizePhoneFr(raw: string | undefined | null): string | null {
  if (!raw) return null;
  let p = raw.replace(/[\s().+\-]/g, "");
  if (!p) return null;
  if (p.startsWith("00")) p = p.slice(2);
  if (p.startsWith("33")) {
    // already international
  } else if (p.startsWith("0")) {
    p = "33" + p.slice(1);
  } else if (p.length === 9) {
    p = "33" + p;
  } else {
    return null;
  }
  if (!/^33\d{9}$/.test(p)) return null;
  return "+" + p;
}

export function normalizeEmail(raw: string | undefined | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return null;
  return trimmed;
}
