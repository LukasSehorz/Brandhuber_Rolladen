import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTASection, SectionEyebrow } from "@/components/site-layout";
import { useState } from "react";
import { services } from "@/lib/services";
import { Reveal, Stagger, motion } from "@/components/motion";

const galleryItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen – Projekte | Brandhuber GmbH Dorfen" },
      { name: "description", content: "Ausgewählte Referenzprojekte aus Rollladen, Sonnenschutz, Fenster und Smart Home in den Landkreisen Erding, Mühldorf, Ebersberg und München." },
      { property: "og:title", content: "Referenzen – Brandhuber GmbH" },
      { property: "og:url", content: "/referenzen" },
    ],
    links: [{ rel: "canonical", href: "/referenzen" }],
  }),
  component: Page,
});

const gallery = [
  { img: "/references/modern-raffstores.jpg", cat: "raffstores", title: "Neubau mit Raffstores" },
  { img: "/references/fenster.jpg", cat: "fenster", title: "Fensterfront Neubau" },
  { img: "/references/modern-rollladen.jpg", cat: "rollladen", title: "Rollläden Neubau" },
  { img: "/references/raffstores.jpg", cat: "raffstores", title: "Raffstores Einfamilienhaus" },
  { img: "/references/markisen.jpg", cat: "markisen", title: "Terrassenmarkise" },
  { img: "/references/rollladen.jpg", cat: "rollladen", title: "Rollläden Sanierung" },
  { img: "/references/terrassendaecher.jpg", cat: "terrassendaecher", title: "Terrassendach" },
  { img: "/references/innenbeschattung.jpg", cat: "innenbeschattung", title: "Plissees Wohnzimmer" },
  { img: "/references/haustueren.jpg", cat: "haustueren", title: "Haustür Holz-Alu" },
  { img: "/references/rolltore.jpg", cat: "rolltore", title: "Aluminium-Rolltor" },
  { img: "/references/kastenisolierung.jpg", cat: "kastenisolierung", title: "Kastenisolierung" },
];

function Page() {
  const [filter, setFilter] = useState<string>("alle");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "alle" ? gallery : gallery.filter((g) => g.cat === filter);
  const cats = ["alle", ...Array.from(new Set(gallery.map((g) => g.cat)))];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Referenzen"
        title="Sehen Sie selbst."
        subtitle="Ein Auszug aus Projekten, die wir mit Sorgfalt geplant und mit eigenem Team realisiert haben."
        image="/references/fenster.jpg"
      />

      <section className="py-20">
        <div className="container-prose">
          <Reveal className="flex flex-wrap gap-2 mb-10">
            {cats.map((c) => {
              const label = c === "alle" ? "Alle" : services.find((s) => s.slug === c)?.title ?? c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.15em] border transition-colors ${
                    filter === c ? "bg-charcoal text-background border-charcoal" : "border-border text-charcoal/70 hover:border-copper hover:text-copper"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.06} amount={0.1}>
            {filtered.map((g) => (
              <motion.button
                key={g.img}
                onClick={() => setLightbox(g.img)}
                variants={galleryItem}
                className="group relative aspect-[4/3] overflow-hidden bg-greige"
              >
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors flex items-end p-6">
                  <div className="text-background text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs uppercase tracking-[0.2em] text-copper mb-1">{services.find((s) => s.slug === g.cat)?.title}</div>
                    {g.title}
                  </div>
                </div>
              </motion.button>
            ))}
          </Stagger>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}

      <CTASection />
    </SiteLayout>
  );
}
