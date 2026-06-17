import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Reveal, Stagger, StaggerItem, ParallaxImage } from "./motion";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-charcoal">
      <SiteHeader />
      <main className="flex-1 pt-[80px]">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative -mt-[80px] h-[60vh] min-h-[480px] w-full overflow-hidden">
      <ParallaxImage src={image} className="absolute left-0 top-[-10%] h-[120%] w-full object-cover" strength={6} />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/70" />
      <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
        <div className="container-prose">
          {eyebrow && (
            <div className="reveal text-xs uppercase tracking-[0.3em] text-copper mb-5">{eyebrow}</div>
          )}
          <h1 className="reveal max-w-3xl text-4xl md:text-6xl text-background" style={{ animationDelay: "100ms" }}>
            {title}
          </h1>
          {subtitle && (
            <p className="reveal mt-6 max-w-2xl text-lg text-background/85" style={{ animationDelay: "200ms" }}>
              {subtitle}
            </p>
          )}
          {actions && (
            <div className="reveal mt-9 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "300ms" }}>
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="bg-charcoal text-background py-24 md:py-32">
      <Stagger className="container-prose text-center" stagger={0.1}>
        <StaggerItem className="text-xs uppercase tracking-[0.3em] text-copper mb-6">Persönliche Beratung</StaggerItem>
        <StaggerItem>
          <h2 className="text-4xl md:text-5xl text-background max-w-3xl mx-auto">
            Lassen Sie uns über Ihr Projekt sprechen.
          </h2>
        </StaggerItem>
        <StaggerItem className="mt-6 text-background/70 max-w-xl mx-auto">
          Unverbindlich, persönlich und mit präzisem Aufmaß vor Ort. Wir nehmen uns Zeit für Ihr Vorhaben.
        </StaggerItem>
        <StaggerItem className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/kontakt"
            className="inline-flex items-center bg-copper hover:bg-background hover:text-charcoal text-background px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-500"
          >
            Angebot anfragen
          </a>
          <a
            href="tel:080812142"
            className="inline-flex items-center text-background/85 hover:text-copper px-4 py-4 text-sm transition-colors"
          >
            oder anrufen: <span className="ml-2 font-medium text-background">08081 2142</span>
          </a>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <div className="text-xs uppercase tracking-[0.3em] text-copper mb-5">{children}</div>;
}
