import type { Metadata } from "next";
import "../index.css";
import { Providers } from "./providers";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Coherent AI Labs | Enterprise AI Solutions & Intelligent Automation",
  description: "Coherent AI Labs engineers AI-native software, intelligent automation, and modern digital platforms that help organizations work smarter and scale faster.",
  openGraph: {
    type: "website",
    url: "https://coherentailabs.com/",
    title: "Coherent AI Labs | Enterprise AI Solutions",
    description: "We engineer AI-native software, intelligent automation, and modern digital platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coherent AI Labs | Enterprise AI Solutions",
    description: "We engineer AI-native software, intelligent automation, and modern digital platforms.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#020202] text-white antialiased selection:bg-white/20">
        <div className="flex min-h-screen flex-col overflow-x-hidden text-[#eaeaea]">
          <Providers>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
