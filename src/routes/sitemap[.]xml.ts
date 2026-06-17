import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/lib/services";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/unternehmen", priority: "0.8" },
          { path: "/leistungen", priority: "0.9" },
          { path: "/referenzen", priority: "0.7" },
          { path: "/karriere", priority: "0.7" },
          { path: "/kontakt", priority: "0.8" },
          { path: "/glossar", priority: "0.5" },
          { path: "/impressum", priority: "0.3" },
          { path: "/datenschutz", priority: "0.3" },
          ...services.map((s) => ({ path: `/leistungen/${s.slug}`, priority: "0.8" })),
        ];

        const urls = paths.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <priority>${e.priority}</priority>\n  </url>`);
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
