import { brand } from "../data/brand";
import { href } from "./href";

export type BookingRequest = Record<string, unknown>;

async function readJson(res: Response) {
  const type = res.headers.get("content-type") || "";
  if (!type.includes("json")) return null;
  try {
    return (await res.json()) as { ok?: boolean; success?: string | boolean; email?: string; error?: string };
  } catch {
    return null;
  }
}

export async function submitBooking(payload: BookingRequest) {
  const body = JSON.stringify(payload);

  try {
    const res = await fetch(href("/api/book/"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    const data = await readJson(res);
    if (res.ok && data?.ok) return { ok: true as const, email: data.email };
  } catch {
    /* Hostinger static hosting has no /api/book/ — fall through. */
  }

  try {
    const res = await fetch(href("/book-send.php"), {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body,
    });
    const data = await readJson(res);
    if (res.ok && data?.ok) return { ok: true as const, email: data.email || String(payload.email || "") };
  } catch {
    /* PHP mailer missing — fall through. */
  }

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(brand.email)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `HaldenCleaning booking — ${payload.name}`,
        _template: "table",
        _captcha: false,
        _replyto: payload.email,
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        address: payload.address,
        date: payload.date,
        service: payload.service,
        frequency: payload.freq,
        beds: payload.beds,
        baths: payload.baths,
        sqft: payload.sqft,
        addons: Array.isArray(payload.addons) ? payload.addons.join(", ") : "",
        parking: payload.parking,
        pets: payload.pets,
        access: payload.access,
        notes: payload.notes,
        price: payload.price,
      }),
    });
    const data = await readJson(res);
    if (res.ok && data && data.success) return { ok: true as const, email: String(payload.email || "") };
  } catch {
    /* FormSubmit unavailable. */
  }

  return { ok: false as const };
}
