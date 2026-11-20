type GA4Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event" | "js" | "config", eventName: string | Date, params?: GA4Params) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params: GA4Params = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

export function trackBookingStart(serviceType: string): void {
  trackEvent("booking_start", {
    service_type: serviceType,
  });
}

export function trackBookingComplete(serviceType: string, value?: number): void {
  const params: GA4Params = {
    service_type: serviceType,
  };

  if (typeof value === "number" && Number.isFinite(value) && value >= 0) {
    params.value = value;
    params.currency = "CAD";
  }

  trackEvent("booking_complete", params);
}

export function trackQuoteSubmitted(serviceType: string): void {
  trackEvent("generate_lead", {
    service_type: serviceType,
  });
}

export function trackPhoneClick(): void {
  trackEvent("click_to_call", {
    contact_method: "phone",
  });
}
