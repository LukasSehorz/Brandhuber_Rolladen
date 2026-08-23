import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "cookie-consent"; // "granted" | "denied"
const GTM_ID = "GTM-NSBLXKZR";

/**
 * Lädt den Google Tag Manager – bewusst ERST nach Einwilligung, nicht beim
 * Seitenaufruf (DSGVO/§ 25 TTDSG: keine nicht-notwendigen Skripte/Cookies ohne
 * vorherige Einwilligung).
 */
function loadGtm() {
  const w = window as unknown as { __gtmLoaded?: boolean; dataLayer?: unknown[] };
  if (w.__gtmLoaded) return;
  w.__gtmLoaded = true;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(s, first);
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* localStorage nicht verfügbar */
    }
    if (saved === "granted") loadGtm();
    if (saved !== "granted" && saved !== "denied") setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {
      /* ignore */
    }
    if (granted) loadGtm();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-border bg-background/97 backdrop-blur"
    >
      <div className="container-prose flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Wir verwenden Cookies. Technisch notwendige Cookies sind für den Betrieb erforderlich.
          Zusätzlich möchten wir – nur mit Ihrer Einwilligung – Statistik-Cookies (Google Tag Manager)
          einsetzen, um die Website zu verbessern. Mehr dazu in der{" "}
          <Link to="/datenschutz" className="text-charcoal underline decoration-copper/40 underline-offset-2 hover:decoration-copper">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose(false)}
            className="border border-border px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-greige"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="bg-charcoal px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-copper"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
