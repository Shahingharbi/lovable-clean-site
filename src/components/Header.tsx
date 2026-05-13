"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GHLogo, PhoneIcon, MenuIcon, ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Services", href: "/#services" },
  { label: "Zones", href: "/#zones" },
  { label: "Avis", href: "/#avis" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[99] pt-[20px] md:pt-[28px]">
        <div className="px-4">
          <div
            className={cn(
              "mx-auto flex h-[80px] max-w-[1408px] items-center justify-between rounded-[24px] px-5 transition-colors duration-300 md:h-[92px] md:px-8",
              scrolled
                ? "bg-cream/95 shadow-[0_8px_30px_-12px_rgba(11,27,44,0.18)] backdrop-blur-md"
                : "bg-cream/20 backdrop-blur-[3px]",
            )}
          >
            <Link href="/" aria-label="GH Services, accueil" className="flex items-center">
              <GHLogo className="h-14 w-auto md:h-16 lg:h-20" />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_ITEMS.slice(0, -1).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "font-display text-[15px] font-bold uppercase tracking-tight transition-colors hover:text-orange",
                    scrolled ? "text-brown" : "text-cream",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+33684665523"
                className={cn(
                  "hidden items-center gap-2 font-display text-[15px] font-bold transition-colors lg:flex",
                  scrolled ? "text-brown" : "text-cream",
                )}
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange text-cream">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                06 84 66 55 23
              </a>
              <Link
                href="/contact"
                data-track="devis"
                className="hidden rounded-full bg-orange px-5 py-3 font-display text-[13px] font-bold uppercase tracking-tight text-cream transition-colors hover:bg-orange-dark md:inline-flex"
              >
                Devis gratuit
              </Link>
              <button
                type="button"
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-2xl transition-colors lg:hidden",
                  scrolled
                    ? "bg-brown/5 text-brown hover:bg-brown/10"
                    : "bg-cream/15 text-cream hover:bg-cream/25",
                )}
              >
                <MenuIcon className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[120] transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-brown/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 flex h-full w-[85%] max-w-md flex-col bg-cream p-6 shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <GHLogo className="h-14 w-auto" />
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-2xl bg-brown/5 text-brown hover:bg-brown/10"
            >
              <span className="text-2xl leading-none">×</span>
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-lg font-bold uppercase tracking-tight text-brown transition-colors hover:bg-cream-soft hover:text-orange"
              >
                {item.label}
                <ArrowRightIcon className="h-5 w-5 opacity-50" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-8">
            <a
              href="tel:+33684665523"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-brown px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-brown-dark"
            >
              <PhoneIcon className="h-4 w-4" />
              06 84 66 55 23
            </a>
            <Link
              href="/contact"
              data-track="devis"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-orange px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-orange-dark"
            >
              Devis gratuit
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
