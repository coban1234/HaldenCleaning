export const prerender = false;

import type { APIRoute } from "astro";
import { brand } from "../../data/brand";
import { frequencyLabels, serviceLabels, type Frequency, type ServiceLevel } from "../../data/pricing";
import {
  bookingEmail,
  isEmail,
  type BookingPayload,
} from "../../lib/booking-email";

const services = Object.keys(serviceLabels) as ServiceLevel[];
const frequencies = Object.keys(frequencyLabels) as Frequency[];

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asNumber(value: unknown) {
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : NaN;
}

export const POST: APIRoute = async ({ request }) => {
  const key = import.meta.env.RESEND_API_KEY as string | undefined;
  const from = (import.meta.env.BOOKING_FROM as string | undefined) || `HalderCleaning <${brand.email}>`;
  const ops = (import.meta.env.BOOKING_OPS_EMAIL as string | undefined) || brand.email;

  if (!key) {
    return json({ ok: false, error: "Booking email is not configured yet." }, 503);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid booking." }, 400);
  }

  const email = asString(body.email).toLowerCase();
  const name = asString(body.name);
  const address = asString(body.address);
  const service = asString(body.service) as ServiceLevel;
  const freq = asString(body.freq) as Frequency;
  const addons = Array.isArray(body.addons) ? body.addons.filter((id): id is string => typeof id === "string") : [];

  if (!name || !address || !isEmail(email)) {
    return json({ ok: false, error: "Name, address and a valid email are required." }, 400);
  }
  if (!services.includes(service) || !frequencies.includes(freq)) {
    return json({ ok: false, error: "Choose a service and frequency." }, 400);
  }

  const payload: BookingPayload = {
    name,
    email,
    phone: asString(body.phone),
    address,
    access: asString(body.access),
    notes: asString(body.notes),
    pets: asString(body.pets),
    parking: asString(body.parking),
    sqft: asString(body.sqft),
    beds: asNumber(body.beds) || 2,
    baths: asNumber(body.baths) || 2,
    service,
    freq,
    addons,
    date: asString(body.date),
    price: body.price == null ? null : asNumber(body.price),
    duration: asString(body.duration) || "Quoted after a walkthrough",
  };

  const message = bookingEmail(payload);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [payload.email],
      bcc: ops && ops !== payload.email ? [ops] : undefined,
      subject: message.subject,
      html: message.html,
      text: message.text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend error", res.status, detail);
    return json({ ok: false, error: "We could not send the confirmation. Try again." }, 502);
  }

  return json({ ok: true, email: payload.email });
};

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
