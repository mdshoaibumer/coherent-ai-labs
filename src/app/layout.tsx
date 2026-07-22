import type { Metadata } from 'next';
import '../globals.css';
import { Providers } from './providers';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { StickyMobileCTA } from '../components/layout/StickyMobileCTA';

export const metadata: Metadata = {
  title: 'Coherent AI Labs | Enterprise AI Solutions & Intelligent Automation',
  description:
    'Coherent AI Labs engineers AI-native software, intelligent automation, and modern digital platforms that help organizations work smarter and scale faster.',
  metadataBase: new URL('https://coherentailabs.com'),
  openGraph: {
    type: 'website',
    url: 'https://coherentailabs.com/',
    title: 'Coherent AI Labs | Enterprise AI Solutions',
    description:
      'We engineer AI-native software, intelligent automation, and modern digital platforms.',
    siteName: 'Coherent AI Labs',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coherent AI Labs | Enterprise AI Solutions',
    description:
      'We engineer AI-native software, intelligent automation, and modern digital platforms.',
    creator: '@coherentailabs',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://coherentailabs.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Coherent AI Labs',
              url: 'https://coherentailabs.com',
              logo: 'https://coherentailabs.com/favicon.svg',
              description:
                'Enterprise AI Solutions & Intelligent Automation. We engineer AI-native software, intelligent automation, and modern digital platforms.',
              foundingDate: '2024',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'contact@coherentailabs.com',
              },
              sameAs: [
                'https://twitter.com/coherentailabs',
                'https://linkedin.com/company/coherentailabs',
                'https://github.com/coherentailabs',
              ],
              knowsAbout: [
                'Artificial Intelligence',
                'AI Agents',
                'Enterprise Software',
                'Workflow Automation',
                'RAG Systems',
                'LLM Integration',
                'Cloud Engineering',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'AI Engineering Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'AI Agents',
                      description: 'Autonomous multi-agent systems for enterprise workflows',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Workflow Automation',
                      description: 'End-to-end intelligent business process automation',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Enterprise Software',
                      description: 'Bespoke full-stack applications with AI-native architecture',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Web Applications',
                      description: 'High-performance, accessible web experiences',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Mobile Applications',
                      description: 'Native iOS and Android with offline-first architecture',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Cloud Engineering',
                      description: 'Scalable, secure infrastructure design and deployment',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
            <StickyMobileCTA />
          </Providers>
        </div>
      </body>
    </html>
  );
}
