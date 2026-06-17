import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTASection } from "@/components/site-layout";

export const Route = createFileRoute("/glossar")({
  head: () => ({
    meta: [
      { title: "Glossar – Fachbegriffe Sonnenschutz & Fenster | Brandhuber GmbH" },
      { name: "description", content: "Wichtige Fachbegriffe rund um Rollladen, Sonnenschutz, Fenster und Smart Home – verständlich erklärt." },
      { property: "og:url", content: "/glossar" },
    ],
    links: [{ rel: "canonical", href: "/glossar" }],
  }),
  component: Page,
});

const terms = [
  { t: "Raffstore", d: "Außenliegender, lamellenförmiger Sonnenschutz mit verstellbaren Lamellen zur präzisen Tageslichtlenkung." },
  { t: "Aufsatzrollladen", d: "Rollladen, der auf dem Fenster sitzt und im Mauerwerk integriert ist – ideal für den Neubau." },
  { t: "Vorbaurollladen", d: "Rollladen, der vor der Fassade montiert wird – die typische Nachrüstlösung im Bestand." },
  { t: "Holz-Alu-Fenster", d: "Fenster mit Holz im Innenbereich und Aluminium im Außenbereich – warm innen, wetterfest außen." },
  { t: "Wärmeverbundsystem (WDVS)", d: "Außenliegende Dämmung der Fassade, oft kombiniert mit Fenstertausch und Rollladenkasten-Dämmung." },
  { t: "Kastenisolierung", d: "Nachträgliche Dämmung leerer oder bestehender Rollladenkästen zur Reduzierung von Wärmebrücken." },
  { t: "TaHoma®", d: "Smart-Home-System von Somfy zur Steuerung von Sonnenschutz, Beleuchtung und Sicherheit." },
  { t: "RC2 / RC3", d: "Widerstandsklassen für einbruchhemmende Bauteile nach DIN EN 1627 – höhere Klasse = höherer Schutz." },
  { t: "Beiputzarbeiten", d: "Verputzarbeiten am Fensteranschluss nach Montage – damit sich das neue Fenster sauber in die Wand einfügt." },
  { t: "Kassettenmarkise", d: "Markise, deren Tuch und Mechanik bei Nichtgebrauch komplett in einer Kassette geschützt sind." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Wissen" title="Glossar" subtitle="Wichtige Begriffe rund um Sonnenschutz, Fenster und Smart Home – kompakt erklärt." image="https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&fit=crop&w=2000&q=80" />
      <section className="py-24">
        <div className="container-prose max-w-3xl">
          <dl className="divide-y divide-border">
            {terms.map((t) => (
              <div key={t.t} className="py-8 grid md:grid-cols-3 gap-4">
                <dt className="font-serif text-2xl text-charcoal">{t.t}</dt>
                <dd className="md:col-span-2 text-muted-foreground leading-relaxed">{t.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
