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
          <h2 className="text-2xl">Kontakt- und Bewerbungsformular (E-Mail-Versand)</h2>
          <p>Wenn Sie uns über ein Formular auf dieser Website (Kontakt oder Bewerbung) eine Nachricht senden, verarbeiten wir die von Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Nachricht sowie ggf. hochgeladene Unterlagen) ausschließlich zur Bearbeitung und Beantwortung Ihrer Anfrage. Für den technischen Versand dieser Nachrichten per E-Mail setzen wir den Dienst Resend (Resend, Inc., USA) als Auftragsverarbeiter ein. Ihre Daten werden dabei ausschließlich zum Zweck der Zustellung verarbeitet und nicht ohne Ihre Einwilligung an sonstige Dritte weitergegeben. Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b und lit. f DSGVO.</p>
          <h2 className="text-2xl">Cookies und Einwilligung</h2>
          <p>Diese Website verwendet Cookies und vergleichbare Technologien. Technisch notwendige Cookies (z. B. zur Sitzungssteuerung) sind für den Betrieb erforderlich und werden ohne gesonderte Einwilligung eingesetzt; sie sind nicht personenbezogen auswertbar. Nicht notwendige Cookies unterteilen wir in die Kategorien Statistik (Reichweitenmessung, siehe „Google Tag Manager") und Marketing. Für diese setzen wir Cookies bzw. verarbeiten entsprechende Daten erst, nachdem Sie über unseren Cookie-Hinweis aktiv und getrennt pro Kategorie eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG); standardmäßig sind diese Kategorien deaktiviert. Ihre Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft über den Link „Cookie-Einstellungen" im Footer widerrufen werden. In den Einstellungen Ihres Browsers können Sie Cookies zudem verwalten oder löschen.</p>
          <h2 className="text-2xl">Google Tag Manager &amp; Reichweitenmessung</h2>
          <p>Zur Auswertung des Nutzungsverhaltens und zur laufenden Verbesserung unserer Website nutzen wir den Google Tag Manager (Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Der Tag Manager selbst setzt keine Cookies, dient aber der Einbindung und Verwaltung nachgelagerter Dienste zur Reichweitenmessung (z. B. Google Analytics). Diese Dienste werden – ebenso wie der Tag Manager – erst geladen und aktiv, nachdem Sie über den Cookie-Hinweis eingewilligt haben. Ohne Ihre Einwilligung findet keine solche Auswertung statt und es werden keine entsprechenden Cookies gesetzt.</p>
          <p>Im Rahmen dieser Dienste kann es zu einer Übermittlung personenbezogener Daten (u. a. gekürzte IP-Adresse, Nutzungsdaten) an Google und gegebenenfalls in die USA kommen. Google stützt Datenübermittlungen in die USA auf das EU-US Data Privacy Framework bzw. auf Standardvertragsklauseln. Rechtsgrundlage der Verarbeitung ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen" im Footer widerrufen.</p>
          <h2 className="text-2xl">Rechte des Nutzers: Auskunft, Berichtigung und Löschung</h2>
          <p>Sie als Nutzer erhalten auf Antrag Ihrerseits kostenlose Auskunft darüber, welche personenbezogenen Daten über Sie gespeichert wurden. Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur Aufbewahrung von Daten (z. B. Vorratsdatenspeicherung) kollidiert, haben Sie ein Anrecht auf Berichtigung falscher Daten und auf die Sperrung oder Löschung Ihrer personenbezogenen Daten.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
