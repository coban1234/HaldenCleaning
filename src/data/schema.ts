import { brand } from "./brand";

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: brand.legalName,
    url: brand.domain,
    telephone: brand.phone,
    email: brand.email,
    areaServed: ["Vancouver", "Burnaby", "Richmond", "North Vancouver", "Surrey", "Coquitlam"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    priceRange: "$$",
  };
}

export function serviceLd(name: string, url: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "LocalBusiness", name: brand.legalName },
    areaServed: "Metro Vancouver",
    url: `${brand.domain}${url}`,
  };
}
