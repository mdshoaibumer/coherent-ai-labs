export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function generateSEO({ title, description, image, url, type = 'website' }: SEOProps) {
  const baseTitle = 'Coherent AI Labs';
  const fullTitle = `${title} | ${baseTitle}`;
  const baseUrl = 'https://coherentailabs.com';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      type,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: image ? [image] : [],
    },
  };
}
