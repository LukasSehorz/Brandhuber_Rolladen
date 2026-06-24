import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/leistungen/$slug"
      params={{ slug: service.slug }}
      className="group flex h-full flex-col bg-card border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] shrink-0 overflow-hidden bg-muted">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl md:text-2xl text-charcoal">{service.title}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-charcoal/40 group-hover:text-copper group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.teaser}</p>
        <div className="mt-auto pt-5 text-xs uppercase tracking-[0.2em] text-copper">Mehr erfahren</div>
      </div>
    </Link>
  );
}
