import { brand } from "../data/brand";
import {
  addOns,
  frequencyLabels,
  serviceLabels,
  type Frequency,
  type ServiceLevel,
} from "../data/pricing";
import { rooms } from "../data/rooms";
import { team } from "../data/team";

export type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  address: string;
  access: string;
  notes: string;
  pets: string;
  parking: string;
  sqft: string;
  beds: number;
  baths: number;
  service: ServiceLevel;
  freq: Frequency;
  addons: string[];
  date: string;
  teamId: string;
  price: number | null;
  duration: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmail(value: string) {
  return emailPattern.test(value.trim());
}

export function personName(teamId: string) {
  return team.find((person) => person.id === teamId)?.name ?? "Assigned at confirmation";
}

export function addonLabels(ids: string[]) {
  return addOns.filter((item) => ids.includes(item.id)).map((item) => `${item.label} (+$${item.price})`);
}

export function scopeRows(service: ServiceLevel) {
  return rooms.map((room) => ({
    name: room.name,
    checks: room.included[service].map((item) => item.label),
  }));
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function bookingEmail(payload: BookingPayload) {
  const walkthrough = payload.price == null;
  const person = personName(payload.teamId);
  const extras = addonLabels(payload.addons);
  const scope = scopeRows(payload.service);
  const priceLine = walkthrough ? "Quoted after a walkthrough" : `$${payload.price} flat`;
  const serviceLine = `${serviceLabels[payload.service]} · ${frequencyLabels[payload.freq]}`;
  const dateLine = payload.date || "To be confirmed";
  const subject = walkthrough
    ? `Walkthrough requested — ${brand.name}`
    : `Booking confirmed — ${serviceLabels[payload.service]} · ${priceLine}`;

  const scopeHtml = scope
    .map(
      (room) => `
        <tr>
          <td style="padding:16px 0;border-top:1px solid #DED8CC;vertical-align:top;">
            <p style="margin:0 0 8px;font-family:Georgia,serif;font-size:16px;font-weight:600;color:#1E2420;">${escapeHtml(room.name)}</p>
            <p style="margin:0;font-family:sans-serif;font-size:14px;line-height:1.6;color:#5C665E;">${room.checks.map(escapeHtml).join(" · ")}</p>
          </td>
        </tr>`,
    )
    .join("");

  const html = `<!doctype html>
<html>
<body style="margin:0;background:#F6F4EF;color:#1E2420;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F6F4EF;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="padding:0 0 24px;font-family:sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#3A5A4A;font-weight:600;">
              ${escapeHtml(brand.name)}
            </td>
          </tr>
          <tr>
            <td style="font-family:Georgia,serif;font-size:32px;line-height:1.15;font-weight:600;padding-bottom:12px;">
              ${walkthrough ? "We have the walkthrough request." : "Your booking is confirmed."}
            </td>
          </tr>
          <tr>
            <td style="font-family:sans-serif;font-size:16px;line-height:1.6;color:#5C665E;padding-bottom:24px;">
              ${
                walkthrough
                  ? "Five-bed and unusual homes are priced after we see the space. A manager will confirm the time by email or phone."
                  : "This email is the document both sides work from. The number below is the number you pay."
              }
            </td>
          </tr>
          <tr>
            <td style="background:#FFFFFF;border:1px solid #DED8CC;border-radius:10px;padding:24px;">
              <p style="margin:0 0 4px;font-family:sans-serif;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#5C665E;font-weight:600;">Price</p>
              <p style="margin:0 0 16px;font-family:Georgia,serif;font-size:36px;line-height:1;color:#1E2420;">${escapeHtml(priceLine)}</p>
              <p style="margin:0 0 8px;font-family:sans-serif;font-size:15px;color:#1E2420;">${escapeHtml(serviceLine)}</p>
              <p style="margin:0 0 8px;font-family:sans-serif;font-size:15px;color:#5C665E;">${escapeHtml(payload.duration)}</p>
              <p style="margin:0 0 8px;font-family:sans-serif;font-size:15px;color:#5C665E;">Date: ${escapeHtml(dateLine)}</p>
              <p style="margin:0 0 8px;font-family:sans-serif;font-size:15px;color:#5C665E;">Team: ${escapeHtml(person)}</p>
              <p style="margin:0;font-family:sans-serif;font-size:15px;color:#5C665E;">Address: ${escapeHtml(payload.address || "On file")}</p>
              ${
                extras.length
                  ? `<p style="margin:16px 0 0;font-family:sans-serif;font-size:15px;color:#5C665E;">Add-ons: ${extras.map(escapeHtml).join(", ")}</p>`
                  : ""
              }
            </td>
          </tr>
          <tr>
            <td style="padding:32px 0 8px;font-family:Georgia,serif;font-size:22px;font-weight:600;">Room-by-room scope</td>
          </tr>
          <tr>
            <td>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${scopeHtml}</table>
            </td>
          </tr>
          <tr>
            <td style="padding-top:24px;font-family:sans-serif;font-size:14px;line-height:1.6;color:#5C665E;">
              Payment is taken at the visit. To cancel or move the date, email ${escapeHtml(brand.email)} or call ${escapeHtml(brand.phone)} with at least 24 hours’ notice.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    walkthrough ? "Walkthrough requested." : "Your booking is confirmed.",
    `Price: ${priceLine}`,
    serviceLine,
    payload.duration,
    `Date: ${dateLine}`,
    `Team: ${person}`,
    `Address: ${payload.address}`,
    extras.length ? `Add-ons: ${extras.join(", ")}` : "",
    "",
    "Room-by-room scope:",
    ...scope.flatMap((room) => [`${room.name}: ${room.checks.join("; ")}`]),
    "",
    `Cancel or move with 24 hours’ notice: ${brand.email} · ${brand.phone}`,
  ]
    .filter(Boolean)
    .join("\n");

  return { subject, html, text };
}
