import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SiteLayout, PageHero, SectionEyebrow } from "@/components/site-layout";
import { services } from "@/lib/services";
import { Phone, Printer, MapPin, Clock, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Reveal } from "@/components/motion";

const search = z.object({ leistung: z.string().optional() });

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Erdinger%20Stra%C3%9Fe%2015A%2C%2084405%20Dorfen&z=15&output=embed";
const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Erdinger+Stra%C3%9Fe+15A,+84405+Dorfen";

export const Route = createFileRoute("/kontakt")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Kontakt – Brandhuber GmbH | Dorfen, Erdinger Str. 15A" },
      { name: "description", content: "Kontaktieren Sie die Brandhuber GmbH in Dorfen. Telefon 08081 2142. Persönliche Beratung für Rollladen, Sonnenschutz und Fenster in Bayern." },
      { property: "og:title", content: "Kontakt – Brandhuber GmbH" },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Page,
});

function Page() {
  const { leistung } = Route.useSearch();
  const [betreff, setBetreff] = useState(leistung ?? "");
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir."
        subtitle="Persönlich, unverbindlich und immer mit Zeit für Ihr Anliegen."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
        actions={
          <>
            <a
              href="#anfrage"
              className="inline-flex items-center justify-center gap-2 bg-background px-8 py-4 text-sm font-medium tracking-wide text-charcoal transition-colors duration-500 hover:bg-charcoal hover:text-background"
            >
              Anfrage senden <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:080812142"
              className="inline-flex items-center justify-center gap-2 border border-background/40 px-8 py-4 text-sm tracking-wide text-background transition-colors duration-500 hover:border-background hover:bg-background hover:text-charcoal"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} /> 08081 2142
            </a>
          </>
        }
      />

      {/* FORM + CONTACT CARD */}
      <section id="anfrage" className="scroll-mt-28 py-24 md:py-32">
        <div className="container-prose grid items-start gap-x-16 gap-y-14 md:grid-cols-12">
          {/* Form */}
          <Reveal className="md:col-span-7">
            <SectionEyebrow>Anfrage</SectionEyebrow>
            <h2 className="mb-4 text-3xl md:text-4xl text-charcoal">Ihre Nachricht an uns.</h2>
            <p className="mb-12 max-w-md text-muted-foreground leading-relaxed">
              Schildern Sie uns kurz Ihr Vorhaben – wir melden uns zeitnah mit einer persönlichen Einschätzung.
            </p>

            {sent ? (
              <div className="border-l-2 border-copper bg-greige p-10">
                <h3 className="text-2xl text-charcoal">Vielen Dank.</h3>
                <p className="mt-3 text-muted-foreground">Wir haben Ihre Anfrage erhalten und melden uns in Kürze persönlich bei Ihnen.</p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="E-Mail" name="email" type="email" required />
                </div>
                <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  <Field label="Telefon" name="phone" type="tel" />
                  <div>
                    <FieldLabel htmlFor="betreff">Betreff / Leistung</FieldLabel>
                    <div className="relative">
                      <select
                        id="betreff"
                        value={betreff}
                        onChange={(e) => setBetreff(e.target.value)}
                        className="w-full appearance-none border-0 border-b border-border bg-transparent pb-3 pr-8 text-base text-charcoal transition-colors duration-300 focus:border-copper focus:outline-none"
                      >
                        <option value="">Bitte wählen</option>
                        <option value="allgemein">Allgemeine Anfrage</option>
                        {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                      </select>
                      <ChevronDownIcon className="pointer-events-none absolute right-0 top-1 h-4 w-4 text-charcoal/40" />
                    </div>
                  </div>
                </div>
                <div>
                  <FieldLabel htmlFor="message" required>Nachricht</FieldLabel>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none border-0 border-b border-border bg-transparent pb-3 text-base text-charcoal placeholder:text-muted-foreground/40 transition-colors duration-300 focus:border-copper focus:outline-none"
                    placeholder="Worum geht es?"
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-copper" />
                  Ich habe die <a href="/datenschutz" className="text-charcoal underline decoration-copper/40 underline-offset-2 hover:decoration-copper">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.
                </label>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-charcoal px-9 py-4 text-sm font-medium tracking-wide text-background transition-colors duration-500 hover:bg-copper"
                >
                  Anfrage senden
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </Reveal>

          {/* Contact card (dark) */}
          <aside className="md:col-span-5">
            <Reveal className="bg-charcoal p-8 sm:p-10 lg:p-12 section-dark" y={36}>
              <SectionEyebrow>Anschrift</SectionEyebrow>
              <address className="not-italic font-serif text-2xl leading-snug text-background">
                BRANDHUBER GmbH<br />
                Erdinger Str. 15A<br />
                84405 Dorfen
              </address>

              <div className="mt-10 border-t border-background/10">
                <ContactRow icon={Phone} label="Telefon" value="08081 2142" href="tel:080812142" />
                <ContactRow icon={Printer} label="Fax" value="08081 4533" />
                <ContactRow icon={Clock} label="Öffnungszeiten" value={<>Mo–Fr 08:00 – 17:00<br />Sa nach Vereinbarung</>} />
                <ContactRow icon={MapPin} label="Einzugsgebiet" value="Erding, Mühldorf, Ebersberg & München" />
              </div>

              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 bg-background px-6 py-4 text-sm font-medium tracking-wide text-charcoal transition-colors duration-500 hover:bg-charcoal hover:text-background"
              >
                Route planen <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-24 md:pb-32">
        <div className="container-prose">
          <Reveal className="mb-8">
            <SectionEyebrow>Standort</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl text-charcoal">Mitten in Dorfen.</h2>
          </Reveal>
          <Reveal className="relative overflow-hidden border border-border" y={36}>
            <iframe
              title="Standort Brandhuber GmbH – Erdinger Str. 15A, 84405 Dorfen"
              src={MAPS_EMBED}
              className="h-[340px] w-full md:h-[440px] grayscale-[0.55] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[280px]">
              <div className="pointer-events-auto border border-border bg-background/95 p-6 shadow-xl backdrop-blur-sm">
                <div className="text-[0.65rem] uppercase tracking-[0.25em] text-copper">Brandhuber GmbH</div>
                <address className="not-italic mt-2 leading-relaxed text-charcoal">
                  Erdinger Str. 15A<br />84405 Dorfen
                </address>
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-4 inline-flex items-center text-sm uppercase tracking-[0.15em] text-charcoal"
                >
                  Route planen <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function FieldLabel({ htmlFor, required, children }: { htmlFor: string; required?: boolean; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2.5 block text-[0.7rem] uppercase tracking-[0.22em] text-charcoal/55">
      {children}
      {required && <span className="text-copper"> *</span>}
    </label>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <FieldLabel htmlFor={name} required={required}>{label}</FieldLabel>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-0 border-b border-border bg-transparent pb-3 text-base text-charcoal placeholder:text-muted-foreground/40 transition-colors duration-300 focus:border-copper focus:outline-none"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-background/15 text-copper transition-colors duration-300 group-hover:border-copper/60">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <span>
        <span className="block text-[0.62rem] uppercase tracking-[0.25em] text-background/45">{label}</span>
        <span className="mt-1 block text-base leading-snug text-background">{value}</span>
      </span>
    </>
  );
  const base = "group flex items-center gap-4 border-b border-background/10 py-5";
  return href ? (
    <a href={href} className={`${base} transition-colors duration-300 hover:bg-background/[0.03]`}>
      {inner}
    </a>
  ) : (
    <div className={base}>{inner}</div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
