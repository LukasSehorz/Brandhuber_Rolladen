import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTASection, SectionEyebrow } from "@/components/site-layout";
import { MapPin, Phone, Map } from "lucide-react";
import { Reveal, Stagger, StaggerItem, CountUp, motion } from "@/components/motion";

export const Route = createFileRoute("/unternehmen")({
  head: () => ({
    meta: [
      { title: "Unternehmen – Brandhuber GmbH | Handwerk mit Anspruch seit 1969" },
      { name: "description", content: "Die Brandhuber GmbH in Dorfen: seit 1969 Ihr Fachbetrieb für Fenster, Sonnenschutz, Toranlagen, Alarmanlagen und Hausautomation in den Landkreisen Erding, Mühldorf, Ebersberg und München." },
      { property: "og:title", content: "Unternehmen – Brandhuber GmbH" },
      { property: "og:url", content: "/unternehmen" },
    ],
    links: [{ rel: "canonical", href: "/unternehmen" }],
  }),
  component: Page,
});

const werte = [
  { n: "01", t: "Persönlich", d: "Ein fester Ansprechpartner über das gesamte Projekt – wir beraten Sie individuell und ausführlich." },
  { n: "02", t: "Geschult", d: "Durch regelmäßige Schulungen unserer Mitarbeiter sorgen wir für technisches Know-how im modernen Handwerk." },
  { n: "03", t: "Verlässlich", d: "Ob Neubau, Reparatur oder Wartung – termintreu und auch nach der Montage für Sie da." },
];

const team = [
  { name: "Familie Brandhuber", role: "Geschäftsführung", phone: "08081 2142" },
  { name: "Vertrieb & Beratung", role: "Persönlich für Sie da", phone: "08081 2142" },
  { name: "Aufmaß & Planung", role: "Technische Aufnahme", phone: "08081 2142" },
  { name: "Montage-Team", role: "Eigene Monteure", phone: "08081 2142" },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Unternehmen"
        title="Handwerk mit Anspruch."
        subtitle="Seit 1969 Ihr Fachbetrieb aus Dorfen – mit über 50 Jahren Erfahrung rund um Fenster, Sonnenschutz, Tore und Sicherheit."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
        actions={
          <>
            <Link
              to="/kontakt"
              className="inline-flex items-center bg-copper text-background px-7 py-3.5 text-sm font-medium hover:bg-background hover:text-charcoal transition-colors duration-300"
            >
              Beratung anfragen
            </Link>
            <a
              href="tel:080812142"
              className="inline-flex items-center gap-2 border border-background/40 text-background px-7 py-3.5 text-sm font-medium hover:bg-background hover:text-charcoal transition-colors duration-300"
            >
              <Phone className="h-4 w-4" /> 08081 2142
            </a>
          </>
        }
      />

      {/* Story */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container-prose grid md:grid-cols-12 gap-14 md:gap-20 items-center">
          <Reveal className="md:col-span-5 relative" y={36}>
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-copper/40 hidden md:block" aria-hidden />
            <div className="relative overflow-hidden">
              <motion.img
                src="/img/unternehmen/werkstatt-handwerk.jpg"
                alt="Handwerker beim präzisen Aufmaß eines modernen Fensters"
                className="w-full aspect-[2/3] object-cover"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="absolute -bottom-6 left-6 bg-charcoal text-background px-6 py-5 shadow-xl"
            >
              <div className="font-serif text-4xl leading-none">
                <CountUp to={1969} from={1900} />
              </div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-background/70">gegründet</div>
            </motion.div>
          </Reveal>
          <Stagger className="md:col-span-7" stagger={0.1}>
            <StaggerItem>
              <SectionEyebrow>Über uns</SectionEyebrow>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl text-charcoal">Tradition, die sich weiterentwickelt.</h2>
            </StaggerItem>
            <StaggerItem className="mt-7 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Die Brandhuber GmbH ist Ihr Ansprechpartner in den Landkreisen Erding, Mühldorf, Ebersberg und München – rund um Fenster, Sonnenschutz, Toranlagen, Alarmanlagen und Hausautomation.
              </p>
              <p>
                Qualität seit 1969: Über 50 Jahre Praxis und Erfahrung, vom Rollladen über Markisen bis hin zu Garagentoren. Aus einem klassischen Handwerksbetrieb ist ein modernes Fachunternehmen geworden – ohne zu vergessen, woher es kommt.
              </p>
              <p>
                Wir beraten Sie individuell, planen mit Sorgfalt und montieren mit dem eigenen Team. So entstehen Lösungen, die nicht nur am Tag der Übergabe überzeugen, sondern über Jahre.
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Anspruch / layered images */}
      <section className="py-24 md:py-32 bg-greige overflow-hidden">
        <div className="container-prose grid md:grid-cols-12 gap-14 md:gap-20 items-center">
          <Reveal className="md:col-span-6 relative md:order-2" y={36}>
            <div className="overflow-hidden">
              <motion.img
                src="/img/unternehmen/haus-sonnenschutz.jpg"
                alt="Modernes Wohnhaus mit Sonnenschutz und Fensterlösungen"
                className="w-full aspect-[3/2] object-cover"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <motion.img
              src="/img/unternehmen/detail-raffstore.jpg"
              alt="Detailaufnahme eines modernen Raffstore-Sonnenschutzes"
              className="absolute -bottom-10 -left-4 w-2/5 aspect-square object-cover border-4 border-greige shadow-2xl hidden sm:block"
              loading="lazy"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.06 }}
            />
          </Reveal>
          <Stagger className="md:col-span-6 md:order-1" stagger={0.1}>
            <StaggerItem>
              <SectionEyebrow>Anspruch</SectionEyebrow>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl text-charcoal">Modernes Handwerk, regional verwurzelt.</h2>
            </StaggerItem>
            <StaggerItem className="mt-7 text-muted-foreground leading-relaxed">
              Wir verbinden jahrzehntelange Erfahrung mit aktueller Technik. Premium-Produkte, sauber verarbeitet – inklusive allem, was dazugehört: Beiputz, Dämmung, Einstellung und Einweisung.
            </StaggerItem>
            <StaggerItem className="mt-8 flex flex-wrap gap-3">
              {["Neubau", "Reparatur", "Wartung"].map((tag) => (
                <span key={tag} className="inline-flex items-center border border-border px-4 py-2 text-sm text-charcoal">
                  {tag}
                </span>
              ))}
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Werte */}
      <section className="py-24 md:py-32">
        <div className="container-prose grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Dunkle Ankerkarte – liefert den Kontrast */}
          <Reveal className="lg:col-span-4 bg-charcoal text-background p-10 md:p-12 flex flex-col justify-between min-h-[320px] relative overflow-hidden" y={36}>
            <motion.div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-copper/10 blur-2xl"
              aria-hidden
              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-copper mb-6">Werte</div>
              <h2 className="text-4xl md:text-5xl text-background leading-[1.05]">Was uns<br />wichtig ist.</h2>
            </div>
            <p className="relative mt-10 text-background/60 leading-relaxed">
              Drei Grundsätze, die unsere Arbeit seit 1969 prägen – vom ersten Gespräch bis zur Wartung.
            </p>
          </Reveal>

          {/* Werte als Editorial-Liste mit übergroßen Ziffern */}
          <Stagger className="lg:col-span-8 border-t border-border" stagger={0.14}>
            {werte.map((v) => (
              <StaggerItem
                key={v.t}
                className="group grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-5 sm:gap-8 items-start py-8 md:py-10 border-b border-border"
              >
                <div className="font-serif text-5xl sm:text-6xl leading-none text-copper/30 transition-colors duration-300 group-hover:text-copper tabular-nums">
                  {v.n}
                </div>
                <div className="transition-transform duration-300 group-hover:translate-x-2">
                  <h3 className="text-2xl md:text-3xl text-charcoal">{v.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-greige overflow-hidden">
        <div className="container-prose">
          <Reveal>
            <SectionEyebrow>Team</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl text-charcoal max-w-2xl">Die Menschen hinter Brandhuber.</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <Reveal className="md:col-span-7 relative" y={36}>
              <div className="absolute inset-0 -translate-x-4 -translate-y-4 border border-copper/40 hidden md:block" aria-hidden />
              <div className="relative h-full overflow-hidden">
                <motion.img
                  src="/img/unternehmen/team-werkstatt.jpg"
                  alt="Werkstatt und Arbeitsumgebung des Brandhuber-Teams"
                  className="h-full w-full object-cover aspect-[3/2] md:aspect-auto md:min-h-[360px]"
                  loading="lazy"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </Reveal>
            <Stagger className="md:col-span-5 flex flex-col justify-center border-t border-border" stagger={0.1}>
              {team.map((m) => (
                <StaggerItem
                  key={m.name}
                  className="group flex items-center justify-between gap-4 py-5 border-b border-border"
                >
                  <div className="transition-transform duration-300 group-hover:translate-x-1.5">
                    <h3 className="text-lg text-charcoal">{m.name}</h3>
                    <div className="text-sm text-copper mt-0.5">{m.role}</div>
                  </div>
                  <a
                    href={`tel:${m.phone.replace(/\s/g, "")}`}
                    className="shrink-0 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-charcoal transition-colors"
                  >
                    <Phone className="h-4 w-4" /> {m.phone}
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Standort */}
      <section className="py-16 md:py-20 border-t border-border">
        <Stagger className="container-prose grid sm:grid-cols-3 gap-10" stagger={0.12}>
          <StaggerItem className="flex gap-4">
            <MapPin className="h-6 w-6 text-copper shrink-0" strokeWidth={1.25} />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-charcoal/60">Standort</div>
              <div className="mt-2 text-charcoal">Erdinger Str. 15A<br />84405 Dorfen</div>
              <div className="mt-1 text-xs text-muted-foreground">Seit Dezember 2023 in neuen Räumlichkeiten</div>
            </div>
          </StaggerItem>
          <StaggerItem className="flex gap-4">
            <Phone className="h-6 w-6 text-copper shrink-0" strokeWidth={1.25} />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-charcoal/60">Telefon</div>
              <a href="tel:080812142" className="mt-2 block font-serif text-2xl text-charcoal hover:text-copper transition-colors">08081 2142</a>
            </div>
          </StaggerItem>
          <StaggerItem className="flex gap-4">
            <Map className="h-6 w-6 text-copper shrink-0" strokeWidth={1.25} />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-charcoal/60">Einsatzgebiet</div>
              <div className="mt-2 text-charcoal leading-relaxed">Erding · Mühldorf · Ebersberg · München</div>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
