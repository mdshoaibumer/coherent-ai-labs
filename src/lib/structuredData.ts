export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Coherent AI Labs",
    "url": "https://coherentailabs.com",
    "logo": "https://coherentailabs.com/favicon.svg",
    "description": "Enterprise AI Solutions & Intelligent Automation",
    "sameAs": [
      "https://twitter.com/coherentailabs",
      "https://linkedin.com/company/coherentailabs",
      "https://github.com/coherentailabs"
    ]
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };
}
