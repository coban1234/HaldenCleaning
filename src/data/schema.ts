import { brand } from "./brand";

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${brand.domain}/#business`,
    name: brand.legalName,
    url: brand.domain,
    telephone: brand.phone,
    email: brand.email,
    image: `${brand.domain}/brand/halden-logo-on-chalk.png`,
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
    provider: {
      "@type": "LocalBusiness",
      "@id": `${brand.domain}/#business`,
      name: brand.legalName,
    },
    areaServed: "Metro Vancouver",
    url: `${brand.domain}${url}`,
  };
}
