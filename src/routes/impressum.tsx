import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [{ title: "Impressum – Brandhuber GmbH" }, { property: "og:url", content: "/impressum" }],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Rechtliches" title="Impressum" image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" />
      <section className="py-24">
        <div className="container-prose max-w-3xl prose prose-stone space-y-6 text-charcoal/85">
          <p className="text-sm text-muted-foreground italic">Hinweis: Diese rechtlichen Inhalte werden vom Auftraggeber final geliefert.</p>
          <h2 className="text-2xl">Angaben gemäß § 5 TMG</h2>
          <p>BRANDHUBER GmbH<br />Erdinger Str. 15A<br />84405 Dorfen</p>
          <h2 className="text-2xl">Kontakt</h2>
          <p>Telefon: 08081 2142<br />Fax: 08081 4533<br />E-Mail: [bitte ergänzen]</p>
          <h2 className="text-2xl">Vertretungsberechtigte Geschäftsführung</h2>
          <p>[Name der Geschäftsführung]</p>
          <h2 className="text-2xl">Registereintrag</h2>
          <p>Amtsgericht [...] / HRB [...]</p>
          <h2 className="text-2xl">Umsatzsteuer-ID</h2>
          <p>DE[...]</p>
          <h2 className="text-2xl">Haftungsausschluss</h2>
          <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
