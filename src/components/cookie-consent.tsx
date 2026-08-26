import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "cookie-consent-v2";

type Consent = { statistics: boolean; marketing: boolean };

/**
 * Aktualisiert den Google-Consent-Status. GTM selbst wird bereits im <head>
 * (Consent Mode v2, Standard = „denied") geladen; hier melden wir nur die
 * getroffene Auswahl pro Kategorie an Google.
 */
function applyConsent(c: Consent) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("consent", "update", {
    analytics_storage: c.statistics ? "granted" : "denied",
    ad_storage: c.marketing ? "granted" : "denied",
    ad_user_data: c.marketing ? "granted" : "denied",
    ad_personalization: c.marketing ? "granted" : "denied",
  });
}

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as Partial<Consent>;
    return { statistics: !!p.statistics, marketing: !!p.marketing };
  } catch {
    return null;
  }
}

function saveConsent(c: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  } catch {
    /* ignore */
  }
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Consent-Default + Wiederanwendung einer gespeicherten Auswahl passieren
    // bereits im <head>-Init-Script (vor GTM). Hier nur den Banner zeigen,
    // falls noch keine Entscheidung getroffen wurde.
    if (!readConsent()) setOpen(true);
    const reopen = () => {
      const cur = readConsent();
      setStatistics(cur?.statistics ?? false);
      setMarketing(cur?.marketing ?? false);
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  const commit = (c: Consent) => {
    saveConsent(c);
    applyConsent(c);
    setOpen(false);
    setDetails(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-border bg-background/97 backdrop-blur"
    >
      <div className="container-prose py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Wir verwenden Cookies. <strong className="font-medium text-charcoal">Notwendige</strong> Cookies sind
            für den Betrieb erforderlich. Mit Ihrer Einwilligung nutzen wir zusätzlich{" "}
            <strong className="font-medium text-charcoal">Statistik</strong>- und{" "}
            <strong className="font-medium text-charcoal">Marketing</strong>-Cookies, um die Website zu verbessern.
            Sie entscheiden pro Kategorie und können Ihre Auswahl jederzeit ändern. Mehr in der{" "}
            <Link
              to="/datenschutz"
              className="text-charcoal underline decoration-copper/40 underline-offset-2 hover:decoration-copper"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <button
              type="button"
              onClick={() => commit({ statistics: false, marketing: false })}
              className="border border-border px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-greige"
            >
              Alle ablehnen
            </button>
            <button
              type="button"
              onClick={() => setDetails((v) => !v)}
              aria-expanded={details}
              className="border border-border px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-greige"
            >
              Einstellungen
            </button>
            <button
              type="button"
              onClick={() => commit({ statistics: true, marketing: true })}
              className="bg-charcoal px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-copper"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>

        {details && (
          <div className="mt-5 border-t border-border pt-5">
            <div className="grid gap-5 sm:grid-cols-3">
              <label className="flex items-start gap-3">
                <input type="checkbox" checked disabled className="mt-0.5 h-4 w-4 shrink-0 accent-charcoal" />
                <span>
                  <span className="block text-sm font-medium text-charcoal">Notwendig</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                    Immer aktiv – für den technischen Betrieb der Website erforderlich.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={statistics}
                  onChange={(e) => setStatistics(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-charcoal"
                />
                <span>
                  <span className="block text-sm font-medium text-charcoal">Statistik</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                    Anonyme Reichweitenmessung (Google Tag Manager / Analytics) zur Verbesserung der Website.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-charcoal"
                />
                <span>
                  <span className="block text-sm font-medium text-charcoal">Marketing</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                    Für personalisierte Inhalte und Anzeigen (z. B. Remarketing).
                  </span>
                </span>
              </label>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => commit({ statistics, marketing })}
                className="bg-charcoal px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-copper"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
