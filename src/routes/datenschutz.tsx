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
          <h2 className="text-2xl">Geltungsbereich</h2>
          <p>Diese Datenschutzerklärung soll Sie als Nutzer dieser Website gemäß Bundesdatenschutzgesetz und Telemediengesetz über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten durch die Websitebetreiberin Brandhuber GmbH informieren.</p>
          <p>Wir nehmen Ihren Datenschutz sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Vorschriften.</p>
          <p>Bedenken Sie, dass die Datenübertragung im Internet grundsätzlich mit Sicherheitslücken bedacht sein kann. Ein vollumfänglicher Schutz vor dem Zugriff durch Fremde ist nicht realisierbar.</p>
          <h2 className="text-2xl">Zugriffsdaten</h2>
          <p>Der Seitenprovider erhebt Daten über Zugriffe auf die Seite und speichert diese als „Server-Logfiles“ ab. Folgende Daten werden so protokolliert:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Besuchte Website</li>
            <li>Uhrzeit zum Zeitpunkt des Zugriffes</li>
            <li>Menge der gesendeten Daten in Byte</li>
            <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
            <li>Verwendeter Browser</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Verwendete IP-Adresse</li>
          </ul>
          <p>Die erhobenen Daten dienen lediglich statistischen Auswertungen und zur Verbesserung der Website. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.</p>
          <h2 className="text-2xl">Umgang mit Kontaktdaten</h2>
          <p>Nehmen Sie mit uns durch das angebotene Kontaktformular Verbindung auf, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese Daten nicht an Dritte weitergegeben.</p>
          <h2 className="text-2xl">Einsatz von Cookies</h2>
          <p>Auf unseren Webseiten verwenden wir i.d.R. keine Cookies. Zur technischen Sitzungssteuerung werden aber sog. Session-Cookies eingesetzt, die Daten im Speicher Ihres Browsers ablegen. Diese Daten sind nicht personenbezogen. Diese kleine Textdatei ist ein Merker, über den Sie der Webserver von anderen Nutzern unterscheiden kann. Wir weisen darauf hin, dass in jeder gängigen Browsersoftware Funktionen zur Verwaltung bzw. Deaktivierung von Cookies zur Verfügung stehen.</p>
          <h2 className="text-2xl">Rechte des Nutzers: Auskunft, Berichtigung und Löschung</h2>
          <p>Sie als Nutzer erhalten auf Antrag Ihrerseits kostenlose Auskunft darüber, welche personenbezogenen Daten über Sie gespeichert wurden. Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur Aufbewahrung von Daten (z. B. Vorratsdatenspeicherung) kollidiert, haben Sie ein Anrecht auf Berichtigung falscher Daten und auf die Sperrung oder Löschung Ihrer personenbezogenen Daten.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
