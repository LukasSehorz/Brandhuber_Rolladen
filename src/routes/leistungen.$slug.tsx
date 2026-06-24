import { Fragment } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, SectionEyebrow, PageHero, CTASection } from "@/components/site-layout";
import type { Service } from "@/lib/services";
import { services, getService } from "@/lib/services";
import { Check, ChevronRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/leistungen/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} – Brandhuber GmbH | Dorfen, Erding` : "Leistung";
    return {
      meta: [
        { title },
        { name: "description", content: s?.teaser ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: s?.teaser ?? "" },
        { property: "og:image", content: s?.image ?? "" },
        { property: "og:url", content: `/leistungen/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/leistungen/${params.slug}` }],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-prose py-32 text-center">
        <h1 className="text-4xl">Leistung nicht gefunden</h1>
        <Link to="/" className="mt-6 inline-block text-copper">← Zurück zur Startseite</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <div className="container-prose py-32 text-center">
        <h1 className="text-3xl">Etwas ist schiefgelaufen</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 text-copper">Erneut versuchen</button>
      </div>
    </SiteLayout>
  ),
});

function ServicePage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const related = service.related.map((slug: string) => services.find((s) => s.slug === slug)!).filter(Boolean);
  const detail = service.detail;

  return (
    <SiteLayout>
      {/* key per slug: remounts the whole detail subtree on navigation so the
          scroll-reveal animations (Stagger/Reveal) re-initialise instead of
          getting stuck at opacity:0 when switching between services. */}
      <Fragment key={service.slug}>
      <PageHero
        eyebrow="Leistung"
        title={service.title}
        subtitle={service.teaser}
        image={detail?.heroImage ?? service.image}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container-prose py-4 text-xs uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-copper">Start</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-charcoal">{service.title}</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="container-prose">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-copper mb-6">Im Überblick</div>
            <h2 className="text-3xl md:text-5xl text-charcoal">{detail?.leadTitle ?? service.title}</h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{detail?.lead ?? service.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Alternating sections */}
      {detail && (
        <div className="pb-12 md:pb-20">
          {detail.sections.map((sec, i) => {
            const reverse = i % 2 === 1;
            return (
              <section key={sec.heading} className="py-8 md:py-14">
                <div className="container-prose">
                  <div className="grid items-center md:grid-cols-12">
                    <Reveal className={`group md:col-span-7 ${reverse ? "md:order-2" : ""}`} y={36}>
                      <div className="aspect-[4/3] overflow-hidden shadow-xl">
                        <img src={sec.image} alt={sec.heading} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    </Reveal>
                    <Reveal
                      className={`relative z-10 -mt-10 md:mt-0 md:col-span-5 ${
                        reverse ? "md:order-1 md:-mr-16" : "md:-ml-16"
                      }`}
                      delay={0.15}
                    >
                      <div className="bg-background border border-border shadow-2xl p-8 md:p-12">
                        <div className="text-xs uppercase tracking-[0.3em] text-copper mb-4">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="font-serif text-2xl md:text-4xl text-charcoal">{sec.heading}</h3>
                        <p className="mt-5 text-muted-foreground leading-relaxed">{sec.body}</p>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* Highlights */}
      <section className="bg-greige border-t border-border py-20 md:py-28">
        <div className="container-prose">
          <Reveal className="text-xs uppercase tracking-[0.3em] text-copper mb-10">Ihre Vorteile</Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-x-12 gap-y-px" stagger={0.06} amount={0.15}>
            {service.highlights.map((h: string) => (
              <StaggerItem key={h} className="flex gap-4 border-t border-charcoal/15 py-5 text-charcoal/85" y={16}>
                <Check className="h-5 w-5 text-copper shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>{h}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />

      {/* Related */}
      {related.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container-prose">
            <Reveal>
              <SectionEyebrow>Passt auch dazu</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl text-charcoal mb-12">Verwandte Leistungen</h2>
            </Reveal>
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08} amount={0.15}>
              {related.map((r: Service) => (
                <StaggerItem key={r.slug}>
                  <Link to="/leistungen/$slug" params={{ slug: r.slug }} className="group block bg-card border border-border overflow-hidden hover:shadow-xl transition-all duration-500">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl text-charcoal">{r.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{r.teaser}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}
      </Fragment>
    </SiteLayout>
  );
}
