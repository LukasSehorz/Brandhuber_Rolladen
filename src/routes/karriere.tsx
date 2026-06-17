import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTASection, SectionEyebrow } from "@/components/site-layout";
import { Briefcase, Wrench, GraduationCap, Sparkles, ShieldCheck, Heart, Car, MapPin, ChevronDown, Check, ClipboardList, UserCheck, FileText } from "lucide-react";
import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Karriere – Stellenangebote | Brandhuber GmbH Dorfen" },
      { name: "description", content: "Werde Teil des Brandhuber-Teams in Dorfen. Offene Stellen für Rollladen- und Sonnenschutzmechatroniker, Monteure und Auszubildende. Quereinsteiger willkommen." },
      { property: "og:title", content: "Karriere bei Brandhuber GmbH" },
      { property: "og:url", content: "/karriere" },
    ],
    links: [{ rel: "canonical", href: "/karriere" }],
  }),
  component: Page,
});

type Job = {
  title: string;
  type: string;
  desc: string;
  aufgaben: string[];
  profil: string[];
  unterlagen: string[];
};

const jobs: Job[] = [
  {
    title: "Rollladen- und Sonnenschutzmechatroniker:in (m/w/d)",
    type: "Vollzeit · Unbefristet",
    desc: "Montage und Service von Rollläden, Raffstores, Markisen und Fenstern in der Region.",
    aufgaben: [
      "Montage und Inbetriebnahme von Rollläden, Raffstores, Markisen und Fenstern",
      "Wartung, Reparatur und Störungsbehebung an bestehenden Anlagen",
      "Elektrischer Anschluss von Motoren und Smart-Home-Steuerungen",
      "Aufmaß vor Ort und Beratung unserer Kund:innen",
    ],
    profil: [
      "Abgeschlossene Ausbildung als Rollladen- und Sonnenschutzmechatroniker:in oder vergleichbar",
      "Handwerkliches Geschick und technisches Verständnis",
      "Führerschein Klasse B",
      "Zuverlässigkeit und ein freundliches Auftreten beim Kunden",
    ],
    unterlagen: [
      "Lebenslauf",
      "Ausbildungs- und Arbeitszeugnisse",
      "Frühestmöglicher Eintrittstermin",
      "Gehaltsvorstellung (optional)",
    ],
  },
  {
    title: "Monteur:in für Fenster & Türen (m/w/d)",
    type: "Vollzeit · Unbefristet",
    desc: "Fachgerechter Austausch von Fenstern und Türen, inklusive Beiputz- und Dämmarbeiten.",
    aufgaben: [
      "Aus- und Einbau von Fenstern und Haustüren nach RAL-Richtlinien",
      "Beiputz-, Dämm- und Abdichtungsarbeiten",
      "Endkontrolle, Einstellung und Übergabe an die Kund:innen",
      "Saubere Dokumentation der ausgeführten Arbeiten",
    ],
    profil: [
      "Erfahrung im Fenster-/Türenbau oder handwerkliche Ausbildung (Schreiner, Maurer o. ä.)",
      "Sauberes, genaues und selbstständiges Arbeiten",
      "Führerschein Klasse B",
      "Freundlicher Umgang mit Kund:innen",
    ],
    unterlagen: [
      "Lebenslauf",
      "Relevante Arbeitszeugnisse",
      "Frühestmöglicher Eintrittstermin",
    ],
  },
  {
    title: "Auszubildende:r Rollladen- und Sonnenschutzmechatronik (m/w/d)",
    type: "Ausbildung · 3 Jahre",
    desc: "Starte deine Ausbildung in einem zukunftssicheren Handwerk – mit modernem Werkzeug und gutem Team.",
    aufgaben: [
      "Du lernst Montage, Wartung und Reparatur von Sonnenschutz- und Rollladenanlagen",
      "Begleitung erfahrener Kolleg:innen direkt auf der Baustelle",
      "Umgang mit modernen Werkzeugen, Motoren und Steuerungen",
      "Berufsschulunterricht ergänzt die Praxis im Betrieb",
    ],
    profil: [
      "Mindestens qualifizierender Mittelschulabschluss",
      "Interesse an Technik und Handwerk",
      "Handwerkliches Geschick und räumliches Vorstellungsvermögen",
      "Zuverlässigkeit, Motivation und Teamgeist",
    ],
    unterlagen: [
      "Lebenslauf",
      "Die letzten beiden Schulzeugnisse",
      "Ggf. Nachweise über Praktika",
    ],
  },
  {
    title: "Quereinsteiger:innen willkommen",
    type: "Vollzeit",
    desc: "Du hast handwerkliches Geschick? Wir bilden dich ein und freuen uns auf dich.",
    aufgaben: [
      "Strukturierte Einarbeitung in Montage und Service rund um Sonnenschutz, Fenster und Türen",
      "Schrittweise Übernahme eigener Aufgaben im Team",
      "Begleitung durch erfahrene Kolleg:innen vom ersten Tag an",
    ],
    profil: [
      "Handwerkliches Geschick und Freude an der Arbeit mit den Händen",
      "Lernbereitschaft und Motivation",
      "Führerschein Klasse B von Vorteil",
      "Zuverlässigkeit und Teamgeist",
    ],
    unterlagen: [
      "Kurzer Lebenslauf",
      "Ein paar Sätze, warum du wechseln möchtest",
    ],
  },
];

const benefits = [
  { icon: ShieldCheck, t: "Unbefristete Festanstellung" },
  { icon: Wrench, t: "Modernes Werkzeug & Fahrzeuge" },
  { icon: Heart, t: "Kollegiales, familiäres Team" },
  { icon: Sparkles, t: "Flache Hierarchien" },
  { icon: GraduationCap, t: "Weiterbildung gefördert" },
  { icon: MapPin, t: "Region statt Pendeln" },
  { icon: Car, t: "Dienstfahrzeug nach Vereinbarung" },
  { icon: Briefcase, t: "Zukunftssichere Branche" },
];

function Page() {
  const [selected, setSelected] = useState<string>("");
  const [openJob, setOpenJob] = useState<string | null>(null);

  const applyTo = (title: string) => {
    setSelected(title);
    document.getElementById("bewerbung")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Karriere"
        title="Werde Teil des Brandhuber-Teams."
        subtitle="Familiär. Regional. Modern. Bei uns arbeitest du nicht nur einen Job, sondern in einem Handwerk mit Zukunft."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-24 md:py-32">
        <div className="container-prose grid md:grid-cols-12 gap-16">
          <Reveal className="md:col-span-5">
            <SectionEyebrow>Warum Brandhuber</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl text-charcoal">Ein Team, das hält.</h2>
          </Reveal>
          <Reveal className="md:col-span-7 space-y-5 text-muted-foreground leading-relaxed" delay={0.1}>
            <p>Wir sind ein familiärer Fachbetrieb mit langer Tradition – und bleiben dabei modern. Unsere Mitarbeiter:innen sind oft schon viele Jahre dabei. Das ist kein Zufall.</p>
            <p>Bei uns wirst du gesehen. Du arbeitest mit gutem Werkzeug, in einem starken Team und in einer Region, die du nach Feierabend genießt – ohne stundenlanges Pendeln.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-greige">
        <div className="container-prose">
          <Reveal>
            <SectionEyebrow>Benefits</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl text-charcoal max-w-2xl">Was du bei uns bekommst.</h2>
          </Reveal>
          <Stagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.07} amount={0.15}>
            {benefits.map((b) => (
              <StaggerItem key={b.t} className="flex items-start gap-4" y={18}>
                <b.icon className="h-6 w-6 text-copper shrink-0 mt-0.5" strokeWidth={1.25} />
                <div className="text-charcoal text-sm">{b.t}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-prose">
          <Reveal>
            <SectionEyebrow>Offene Stellen</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl text-charcoal max-w-2xl mb-12">Aktuelle Positionen.</h2>
          </Reveal>
          <Stagger className="space-y-4" stagger={0.1}>
            {jobs.map((j) => {
              const isOpen = openJob === j.title;
              return (
                <StaggerItem
                  key={j.title}
                  className={`bg-card border transition-colors ${isOpen ? "border-copper" : "border-border hover:border-copper"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenJob(isOpen ? null : j.title)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-8 md:p-10 flex items-start gap-6"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-[0.2em] text-copper mb-2">{j.type}</div>
                      <h3 className="text-xl md:text-2xl text-charcoal">{j.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{j.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-charcoal/60">
                        {isOpen ? "Weniger anzeigen" : "Details ansehen"}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 shrink-0 text-charcoal transition-transform duration-300 ${isOpen ? "rotate-180 text-copper" : ""}`}
                      strokeWidth={1.25}
                    />
                  </button>

                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="px-8 md:px-10 pb-8 md:pb-10 border-t border-border pt-8 md:pt-10">
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                          <DetailColumn icon={ClipboardList} title="Deine Aufgaben" items={j.aufgaben} />
                          <DetailColumn icon={UserCheck} title="Dein Profil" items={j.profil} />
                          <DetailColumn icon={FileText} title="Deine Unterlagen" items={j.unterlagen} />
                        </div>
                        <button
                          type="button"
                          onClick={() => applyTo(j.title)}
                          className="mt-10 inline-flex items-center bg-charcoal text-background px-6 py-3 text-sm font-medium hover:bg-copper transition-colors"
                        >
                          Auf diese Stelle bewerben
                        </button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section id="bewerbung" className="py-24 md:py-32 bg-greige">
        <div className="container-prose grid md:grid-cols-12 gap-16">
          <Reveal className="md:col-span-5">
            <SectionEyebrow>Bewerbung</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl text-charcoal">Sag Hallo.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Initiativbewerbungen sind jederzeit willkommen. Lieber telefonisch? Ruf einfach an:
            </p>
            <a href="tel:080812142" className="mt-4 inline-block font-serif text-3xl text-copper">08081 2142</a>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.1}>
            <form className="bg-card border border-border p-8 md:p-10 space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Bewerbung gesendet – wir melden uns!"); }}>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="E-Mail" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Telefon" name="phone" type="tel" />
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-charcoal/70 mb-2">Position</label>
                <select value={selected} onChange={(e) => setSelected(e.target.value)} className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-copper">
                  <option value="">Bitte wählen</option>
                  {jobs.map((j) => <option key={j.title} value={j.title}>{j.title}</option>)}
                  <option value="initiativ">Initiativbewerbung</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-charcoal/70 mb-2">Nachricht</label>
              <textarea name="message" rows={5} className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-copper" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-charcoal/70 mb-2">Lebenslauf (PDF)</label>
              <input type="file" accept=".pdf" className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:border file:border-border file:bg-background file:text-charcoal" />
            </div>
            <label className="flex items-start gap-3 text-xs text-muted-foreground">
              <input type="checkbox" required className="mt-1" />
              Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.
            </label>
            <button type="submit" className="w-full bg-charcoal text-background py-4 text-sm font-medium hover:bg-copper transition-colors">
              Bewerbung absenden
            </button>
            </form>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

function DetailColumn({ icon: Icon, title, items }: { icon: typeof Check; title: string; items: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-5">
        <Icon className="h-5 w-5 text-copper shrink-0" strokeWidth={1.5} />
        <h4 className="text-xs uppercase tracking-[0.2em] text-charcoal">{title}</h4>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
            <Check className="h-4 w-4 text-copper shrink-0 mt-0.5" strokeWidth={2} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-charcoal/70 mb-2">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-copper" />
    </div>
  );
}
