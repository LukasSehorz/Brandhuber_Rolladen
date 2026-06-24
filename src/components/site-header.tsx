import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";

type NavItem = { to?: string; label: string; hasMenu?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Start" },
  { to: "/unternehmen", label: "Unternehmen" },
  { label: "Leistungen", hasMenu: true },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/karriere", label: "Karriere" },
  { to: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // "solid" = opaque header: when scrolled OR when the mobile menu is open.
  // Keeps the logo/links/hamburger readable instead of dark-on-dark over the hero.
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-prose flex items-center justify-between gap-3 sm:gap-6" style={{ paddingBlock: scrolled ? "0.875rem" : "1.5rem", transition: "padding 400ms ease" }}>
        <Link to="/" className="flex items-center gap-3 group min-w-0" aria-label="Brandhuber GmbH – Startseite">
          <img src="/logo.png" alt="Brandhuber GmbH" className="h-6 sm:h-8 md:h-9 w-auto max-w-full" />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-sm">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              {item.hasMenu ? (
                <span className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 transition-colors cursor-default ${solid ? "text-charcoal/80 group-hover:text-charcoal" : "text-white/90 group-hover:text-white"}`}>
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </span>
              ) : (
                <Link
                  to={item.to as string}
                  activeOptions={{ exact: item.to === "/" }}
                  className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 transition-colors ${solid ? "text-charcoal/80 hover:text-charcoal data-[status=active]:bg-white data-[status=active]:text-charcoal data-[status=active]:shadow-sm" : "text-white/90 hover:text-white data-[status=active]:bg-charcoal data-[status=active]:text-white"}`}
                >
                  {item.label}
                </Link>
              )}
              {item.hasMenu && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-background border border-border shadow-2xl p-6 grid grid-cols-2 gap-x-8 gap-y-2 w-[480px]">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/leistungen/$slug"
                        params={{ slug: s.slug }}
                        className="text-sm text-charcoal/75 hover:text-copper transition-colors py-1"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:080812142" className="hidden md:inline-flex items-center gap-2 text-sm text-charcoal/80 hover:text-copper transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-medium">08081 2142</span>
          </a>
          <Link
            to="/kontakt"
            className="hidden md:inline-flex items-center bg-charcoal text-background px-5 py-2.5 text-sm font-medium hover:bg-copper transition-colors duration-500"
          >
            Angebot anfragen
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden -mr-1 grid h-10 w-10 shrink-0 place-items-center rounded-md transition-colors ${solid ? "text-charcoal hover:bg-charcoal/5" : "bg-charcoal/60 text-white ring-1 ring-white/15 backdrop-blur-sm"}`}
            aria-label="Menü"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu — sibling of <header> so its fixed positioning is viewport-relative
          (a backdrop-filter on the header would otherwise become its containing block). */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-background border-t border-border overflow-y-auto transition-all duration-500 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container-prose py-8 flex flex-col gap-1">
          {nav.map((item) =>
            item.hasMenu ? (
              <div key={item.label} className="border-b border-border">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-4 text-left font-serif text-xl text-charcoal"
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pb-4 pl-2 flex flex-col gap-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        onClick={() => setOpen(false)}
                        to="/leistungen/$slug"
                        params={{ slug: s.slug }}
                        className="py-1.5 text-sm text-charcoal/75"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                onClick={() => setOpen(false)}
                to={item.to as string}
                className="py-4 font-serif text-xl text-charcoal border-b border-border"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="mt-8 flex flex-col gap-3">
            <a href="tel:080812142" className="flex items-center gap-2 text-charcoal">
              <Phone className="h-4 w-4 text-copper" /> 08081 2142
            </a>
            <Link to="/kontakt" onClick={() => setOpen(false)} className="bg-charcoal text-background px-5 py-3 text-center text-sm font-medium">
              Angebot anfragen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
