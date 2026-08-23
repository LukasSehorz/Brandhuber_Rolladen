import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/** JSON-Response-Helfer */
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

/** HTML-escapen für die E-Mail */
const esc = (s: unknown) =>
  String(s ?? "").replace(
    /[&<>"]/g,
    (c) => (({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }) as Record<string, string>)[c],
  );

type Payload = {
  formType?: "kontakt" | "bewerbung";
  name?: string;
  email?: string;
  phone?: string;
  betreff?: string;
  position?: string;
  message?: string;
  company?: string; // Honeypot – muss leer bleiben
  attachment?: { filename?: string; content?: string } | null;
};

// max. Anhang (Base64) ~ 5 MB, damit wir unter dem Function-Body-Limit bleiben
const MAX_ATTACHMENT_B64 = 5_000_000;

export const Route = createFileRoute("/api/anfrage")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.RESEND_API_KEY;
        const from = process.env.RESEND_FROM;
        const to = process.env.RESEND_TO;

        if (!apiKey || !from || !to) {
          console.error("Resend-Konfiguration fehlt (RESEND_API_KEY / RESEND_FROM / RESEND_TO).");
          return json({ ok: false, error: "Der E-Mail-Versand ist derzeit nicht konfiguriert." }, 500);
        }

        let body: Payload;
        try {
          body = (await request.json()) as Payload;
        } catch {
          return json({ ok: false, error: "Ungültige Anfrage." }, 400);
        }

        // Honeypot: von Bots ausgefülltes, für Menschen unsichtbares Feld
        if (body.company && body.company.trim() !== "") {
          return json({ ok: true });
        }

        const name = (body.name || "").trim();
        const email = (body.email || "").trim();
        const message = (body.message || "").trim();
        const phone = (body.phone || "").trim();
        const isBewerbung = body.formType === "bewerbung";
        const extra = (body.betreff || body.position || "").trim();

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!name || !emailOk || (!isBewerbung && !message)) {
          return json(
            { ok: false, error: "Bitte füllen Sie Name, E-Mail und Nachricht korrekt aus." },
            400,
          );
        }

        const label = isBewerbung ? "Bewerbung" : "Anfrage";
        const subject = `Neue ${label} über die Website: ${name}${extra ? " · " + extra : ""}`;

        const rows: [string, string][] = [
          ["Name", name],
          ["E-Mail", email],
          ...(phone ? ([["Telefon", phone]] as [string, string][]) : []),
          ...(extra ? ([[isBewerbung ? "Position" : "Betreff", extra]] as [string, string][]) : []),
        ];

        const html = `<!doctype html>
<html><body style="margin:0;background:#f4f1ec;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#1c1c1a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;background:#ffffff;border:1px solid #e5e1da;">
    <tr><td style="background:#1c1c1a;color:#ffffff;padding:22px 28px;font-size:12px;letter-spacing:2px;text-transform:uppercase;">
      Brandhuber GmbH &middot; Neue ${esc(label)} &uuml;ber die Website
    </td></tr>
    <tr><td style="padding:26px 28px 8px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:7px 0;color:#6b6b66;width:120px;vertical-align:top;">${esc(k)}</td><td style="padding:7px 0;font-weight:600;">${esc(v)}</td></tr>`,
          )
          .join("")}
      </table>
    </td></tr>
    <tr><td style="padding:8px 28px 26px;">
      <div style="margin-top:12px;padding-top:20px;border-top:1px solid #e5e1da;">
        <div style="color:#6b6b66;font-size:13px;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">Nachricht</div>
        <div style="white-space:pre-wrap;line-height:1.65;">${esc(message || "(keine Nachricht angegeben)")}</div>
      </div>
    </td></tr>
    <tr><td style="padding:16px 28px;background:#f4f1ec;color:#6b6b66;font-size:12px;line-height:1.5;">
      Gesendet &uuml;ber das Website-Formular von brandhuber.gmbh.<br/>
      Auf &bdquo;Antworten&ldquo; klicken schreibt direkt an ${esc(name)} (${esc(email)}).
    </td></tr>
  </table>
</body></html>`;

        const mail: Record<string, unknown> = {
          from,
          to: [to],
          reply_to: email,
          subject,
          html,
        };

        // optionaler Anhang (z. B. Lebenslauf-PDF beim Karriere-Formular)
        if (body.attachment?.content && body.attachment.filename) {
          if (body.attachment.content.length > MAX_ATTACHMENT_B64) {
            return json({ ok: false, error: "Die angehängte Datei ist zu groß (max. 3,5 MB)." }, 400);
          }
          mail.attachments = [
            { filename: body.attachment.filename, content: body.attachment.content },
          ];
        }

        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(mail),
          });

          if (!res.ok) {
            const detail = await res.text().catch(() => "");
            console.error("Resend-Fehler:", res.status, detail);
            return json(
              { ok: false, error: "Der Versand ist fehlgeschlagen. Bitte später erneut versuchen oder rufen Sie uns an." },
              502,
            );
          }
        } catch (err) {
          console.error("Resend-Request fehlgeschlagen:", err);
          return json(
            { ok: false, error: "Der Versand ist fehlgeschlagen. Bitte später erneut versuchen oder rufen Sie uns an." },
            502,
          );
        }

        return json({ ok: true });
      },
    },
  },
});
