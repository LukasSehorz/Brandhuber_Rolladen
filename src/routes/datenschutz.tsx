import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [{ title: "Datenschutz – Brandhuber GmbH" }, { property: "og:url", content: "/datenschutz" }],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Rechtliches" title="Datenschutz" image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" />
      <section className="py-24">
        <div className="container-prose max-w-3xl space-y-6 text-charcoal/85">
          <p className="text-sm text-muted-foreground italic">Hinweis: Diese rechtlichen Inhalte werden vom Auftraggeber final geliefert.</p>
          <h2 className="text-2xl">1. Datenschutz auf einen Blick</h2>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p>
          <h2 className="text-2xl">2. Verantwortliche Stelle</h2>
          <p>BRANDHUBER GmbH, Erdinger Str. 15A, 84405 Dorfen, Tel. 08081 2142.</p>
          <h2 className="text-2xl">3. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>Beim Besuch unserer Website werden automatisch Informationen durch den Browser an den Server unserer Website gesendet (Server-Log-Dateien).</p>
          <h2 className="text-2xl">4. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
