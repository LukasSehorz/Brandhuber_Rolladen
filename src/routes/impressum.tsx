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
          <h2 className="text-2xl">Angaben gemäß § 5 TMG</h2>
          <p>Brandhuber Fenster- und Rollladenbau GmbH<br />Erdinger Straße 15A<br />84405 Dorfen</p>
          <h2 className="text-2xl">Geschäftsführer</h2>
          <p>Christopher Ortler</p>
          <h2 className="text-2xl">Umsatzsteuer-ID-Nummer</h2>
          <p>DE 224649886</p>
          <h2 className="text-2xl">Verantwortlich gemäß TMG</h2>
          <p>Christopher Ortler<br />Tel. 08081 2142<br />E-Mail: info@brandhuber.gmbh</p>
          <h2 className="text-2xl">Fotos</h2>
          <p>Brandhuber GmbH, Alulux, Niederhofer, DiHa, Markilux, Somfy, Neher, Roto</p>
          <h2 className="text-2xl">Website</h2>
          <p>Stefan Brandhuber, www.flowstateai.de</p>
          <h2 className="text-2xl">Haftungsausschlußerklärung</h2>
          <p>Für Inhalte externer Webseiten, die mit Links von dieser Site erreichbar sind, übernehmen wir keine Haftung.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
