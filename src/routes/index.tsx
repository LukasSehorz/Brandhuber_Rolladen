import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteLayout, CTASection, SectionEyebrow } from "@/components/site-layout";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";
import { ArrowRight, MapPin, Award, Wrench, Users } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const heroSlides = [
  {
    slug: "rollladen",
    image: "/hero/rollladen.png",
    eyebrow: "Schutz rund ums Jahr",
    title: "Rollladen",
    cta: "Mehr zu Rollladen",
  },
  {
    slug: "raffstores",
    image: "/hero/sonnenschutz.png",
    eyebrow: "Tageslicht lenken",
    title: "Sonnenschutz",
    cta: "Mehr zu Sonnenschutz",
  },
  {
    slug: "fenster",
    image: "/hero/fenster.png",
    eyebrow: "Internorm [1st] window partner",
    title: "Fenster & Türen",
    cta: "Mehr zu Fenster & Türen",
  },
];

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setActive((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearTimeout(id);
  }, [active]);

  const slide = heroSlides[active];

  return (
    <section className="relative -mt-[80px] h-screen min-h-[640px] w-full overflow-hidden">
      {heroSlides.map((s, i) => (
        <div
          key={s.slug}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-charcoal/20 to-charcoal/80" />

      <div className="relative h-full container-prose flex flex-col justify-end pb-20 md:pb-28">
        <div
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.45)" }}
        >
          <div key={active} className="reveal">
            <div className="text-xs uppercase tracking-[0.35em] text-copper mb-5">{slide.eyebrow}</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-background">{slide.title}</h1>
          </div>
          <Link
            to="/leistungen/$slug"
            params={{ slug: slide.slug }}
            className="link-underline group inline-flex items-center whitespace-nowrap pb-2 text-sm uppercase tracking-[0.2em] text-background"
          >
            {slide.cta}
            <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {heroSlides.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}: ${s.title}`}
            className={`h-[3px] transition-all duration-500 ${i === active ? "w-10 bg-background" : "w-5 bg-background/40 hover:bg-background/70"}`}
          />
        ))}
      </div>
    </section>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brandhuber GmbH – Rollladen, Sonnenschutz, Fenster | Dorfen" },
      { name: "description", content: "Traditionsreicher Fachbetrieb für Rollladen, Sonnenschutz, Fenster, Türen und Smart Home. Internorm [1st] window partner in Dorfen, Bayern." },
      { property: "og:title", content: "Brandhuber GmbH – Fachbetrieb in Dorfen" },
      { property: "og:description", content: "Schatten. Sicherheit. Stil. Seit Jahrzehnten Ihr Fachbetrieb für Rollladen, Sonnenschutz und Fenster im Landkreis Erding." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <HeroSlider />

      {/* INTERNORM */}
      <section className="py-24 md:py-32">
        <div className="container-prose grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <Stagger stagger={0.1}>
            <StaggerItem>
              <SectionEyebrow>Internorm · [1st] window partner</SectionEyebrow>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mt-6 max-w-xl text-4xl md:text-5xl text-charcoal">
                Internorm – Europas Nr.&nbsp;1 für Fenster und Haustüren
              </h2>
            </StaggerItem>

            <StaggerItem className="mt-10 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                <strong className="font-medium text-charcoal">Internorm</strong> ist Europas führende Fenstermarke – ein österreichisches Familienunternehmen, das seit Jahrzehnten für kompromisslose Qualität steht. Ob <strong className="font-medium text-charcoal">Kunststoff- oder Holz-Alu-Fenster</strong>: Spitzenwerte bei <strong className="font-medium text-charcoal">Wärmedämmung, Sicherheit und Schallschutz</strong> treffen auf klares, zeitloses Design.
              </p>
              <p>
                Als ausgezeichneter <strong className="font-medium text-charcoal">[1st] window partner</strong> – der höchsten Partnerstufe – führen wir das <strong className="font-medium text-charcoal">komplette Internorm-Programm</strong>. In unserer Ausstellung in Dorfen beraten wir Sie persönlich und ausführlich. Lieferung und Montage kommen aus einer Hand – inklusive <strong className="font-medium text-charcoal">Beiputz, Dämmung, Einstellung und Einweisung</strong>.
              </p>
            </StaggerItem>

            <StaggerItem>
              <Link
                to="/leistungen/$slug"
                params={{ slug: "fenster" }}
                className="link-underline mt-10 inline-flex items-center text-charcoal text-sm uppercase tracking-[0.2em]"
              >
                Mehr zu Fenster &amp; Türen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </StaggerItem>
          </Stagger>

          {/* Image — offset window-reveal frame */}
          <Reveal className="group relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end" y={36}>
            {/* thin offset outline echoing a window frame */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full border border-copper/45 sm:-bottom-6 sm:-right-6"
            />

            {/* photo */}
            <div className="relative aspect-[4/5] overflow-hidden bg-greige">
              <img
                src="/internorm/internorm-fenster.jpg"
                alt="Internorm Fenster mit schmalen Rahmen in einem hellen, modernen Wohnraum mit Blick in den Garten"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
            </div>

            {/* partner seal */}
            <div className="absolute -left-4 bottom-10 bg-charcoal px-6 py-5 sm:-left-6">
              <div className="font-serif text-lg leading-none text-background">Internorm</div>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="h-px w-5 bg-copper" />
                <span className="text-[0.6rem] uppercase tracking-[0.28em] text-copper">[1st] Partner</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 md:py-32 bg-greige">
        <div className="container-prose">
          <Reveal className="mb-16">
            <SectionEyebrow>Leistungen</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl text-charcoal max-w-2xl">
              Alles rund um Fenster, Schatten und Sicherheit.
            </h2>
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08} amount={0.1}>
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY BRANDHUBER */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container-prose">
          <Reveal className="max-w-3xl">
            <SectionEyebrow>Warum Brandhuber</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl text-charcoal">
              Vier Versprechen, die wir täglich einlösen.
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Qualität ist für uns kein Schlagwort, sondern Handarbeit – von der ersten Beratung bis zur sauberen Übergabe.
            </p>
          </Reveal>

          <Stagger className="mt-16 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1} amount={0.15}>
            {[
              {
                icon: Users,
                title: "Persönliche Beratung",
                text: "Ein fester Ansprechpartner – vom ersten Gespräch bis zur Übergabe.",
                image: "/why/beratung.jpg",
                alt: "Persönliche Beratung im Ausstellungsraum – Fachberater zeigt einem Kunden Fenster-Querschnitt und Stoffmuster für den Sonnenschutz",
              },
              {
                icon: Wrench,
                title: "Maßgefertigt",
                text: "Jedes Produkt nach Aufmaß für Ihr Objekt, ohne Standardkompromisse.",
                image: "/why/massanfertigung.jpg",
                alt: "Maßaufnahme vor Ort – Handwerker misst eine Fensteröffnung exakt mit dem Bandmaß und notiert die Maße",
              },
              {
                icon: Award,
                title: "Fachgerechte Montage",
                text: "Eigenes Montageteam, sauber, termintreu und mit Beiputzarbeiten.",
                image: "/why/montage.jpg",
                alt: "Fachgerechte Montage – Monteur befestigt einen Raffstore an der Fassade eines modernen Hauses",
              },
              {
                icon: MapPin,
                title: "Regional verwurzelt",
                text: "Für die Landkreise Erding, Mühldorf, Ebersberg und München.",
                image: "/why/region.jpg",
                alt: "Oberbayerische Ortschaft mit Kirchturm im Abendlicht – das Einzugsgebiet der Brandhuber GmbH",
              },
            ].map((v, i) => (
              <StaggerItem key={v.title} className="group">
                {/* Foto im Hochformat mit überlappender Ziffer */}
                <div className="relative overflow-hidden bg-greige">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  {/* Verlauf für Lesbarkeit der Ziffer */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-transparent"
                  />
                  {/* Index-Ziffer (Editorial) */}
                  <span className="absolute bottom-2.5 left-4 font-serif text-5xl leading-none text-background transition-colors duration-500 group-hover:text-copper">
                    0{i + 1}
                  </span>
                  {/* Icon-Chip */}
                  <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-background/85 backdrop-blur-sm">
                    <v.icon className="h-4 w-4 text-copper" strokeWidth={1.5} />
                  </span>
                </div>

                <span className="mt-6 block h-px w-8 bg-copper" />
                <h3 className="mt-4 text-xl text-charcoal">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-charcoal py-20">
        <div className="container-prose">
          <Reveal className="text-center text-xs uppercase tracking-[0.3em] text-background/50 mb-10">
            Wir arbeiten mit den führenden Herstellern
          </Reveal>
          <Stagger className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6" stagger={0.07}>
            {["Internorm", "Somfy", "Alulux", "Warema", "TaHoma", "VELUX"].map((p) => (
              <StaggerItem key={p} className="font-serif text-2xl text-background/75 hover:text-copper transition-colors duration-300" y={16}>
                {p}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* REFERENCES TEASER */}
      <section className="py-24 md:py-32 bg-greige">
        <div className="container-prose">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <SectionEyebrow>Referenzen</SectionEyebrow>
              <h2 className="text-4xl md:text-5xl text-charcoal">Ausgewählte Projekte</h2>
            </div>
            <Link to="/referenzen" className="link-underline text-sm uppercase tracking-[0.2em] text-charcoal whitespace-nowrap">
              Alle Referenzen <ArrowRight className="inline ml-2 h-4 w-4" />
            </Link>
          </Reveal>
          <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-4" stagger={0.08} amount={0.1}>
            {[
              "/references/modern-raffstores.jpg",
              "/references/modern-rollladen.jpg",
              "/references/markisen.jpg",
              "/references/haustueren.jpg",
              "/references/fenster.jpg",
              "/references/innenbeschattung.jpg",
            ].map((src, i) => (
              <StaggerItem key={src} className={`group overflow-hidden ${i === 0 ? "col-span-2 md:row-span-2 md:col-span-2" : ""} aspect-[4/3]`}>
                <img
                  src={src}
                  alt="Referenzprojekt"
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-24 md:py-32">
        <div className="container-prose grid md:grid-cols-2 gap-16 items-center">
          <Stagger stagger={0.1}>
            <StaggerItem>
              <SectionEyebrow>Einzugsgebiet</SectionEyebrow>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-4xl md:text-5xl text-charcoal">Vor Ort. Für Ihre Region.</h2>
            </StaggerItem>
            <StaggerItem className="mt-6 text-muted-foreground leading-relaxed">
              Von unserem Standort in Dorfen sind wir schnell bei Ihnen – in den Landkreisen Erding, Mühldorf, Ebersberg und München. Kurze Wege, persönliche Termine, verlässlicher Service.
            </StaggerItem>
            <StaggerItem className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {["Erding", "Mühldorf am Inn", "Ebersberg", "München"].map((r) => (
                <div key={r} className="flex items-center gap-3 text-charcoal/80">
                  <MapPin className="h-4 w-4 text-copper" />
                  {r}
                </div>
              ))}
            </StaggerItem>
          </Stagger>
          <Reveal className="aspect-[4/3] bg-greige border border-border overflow-hidden" y={36}>
            <img
              src="/einzugsgebiet.svg"
              alt="Einzugsgebiet der Brandhuber GmbH: Landkreise Erding, Mühldorf, Ebersberg und München rund um den Standort Dorfen"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
