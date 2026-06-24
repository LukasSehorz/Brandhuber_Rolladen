import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-background/80 section-dark">
      <div className="container-prose py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/logo.png"
            alt="Brandhuber GmbH"
            className="h-9 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="mt-4 text-sm leading-relaxed text-background/60 max-w-xs">
            Ihr Fachbetrieb für Rollladen, Sonnenschutz und Fenster. Aus Dorfen für die Landkreise Erding, Mühldorf, Ebersberg und München.
          </p>
          <div className="mt-6 h-px w-12 bg-copper" />
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-background mb-5">Leistungen</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/leistungen/$slug" params={{ slug: s.slug }} className="text-background/70 hover:text-copper transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-background mb-5">Unternehmen</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/unternehmen" className="text-background/70 hover:text-copper transition-colors">Über uns</Link></li>
            <li><Link to="/referenzen" className="text-background/70 hover:text-copper transition-colors">Referenzen</Link></li>
            <li><Link to="/karriere" className="text-background/70 hover:text-copper transition-colors">Karriere</Link></li>
            <li><Link to="/kontakt" className="text-background/70 hover:text-copper transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-background mb-5">Kontakt</h4>
          <address className="not-italic text-sm space-y-2 text-background/70">
            <div>BRANDHUBER GmbH</div>
            <div>Erdinger Str. 15A<br />84405 Dorfen</div>
            <div className="pt-2">
              <a href="tel:080812142" className="block hover:text-copper">Tel. 08081 2142</a>
              <div>Fax 08081 4533</div>
            </div>
          </address>
          <h4 className="text-xs uppercase tracking-[0.2em] text-background mt-6 mb-3">Öffnungszeiten</h4>
          <div className="text-sm text-background/70">
            Mo–Fr 08:00 – 17:00<br />
            Sa nach Vereinbarung
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <div>© {new Date().getFullYear()} BRANDHUBER GmbH</div>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-copper">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-copper">Datenschutz</Link>
            <Link to="/glossar" className="hover:text-copper">Glossar</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
