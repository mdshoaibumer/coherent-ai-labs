import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog | Coherent AI Labs",
  description: "Technical deep dives, architectural teardowns, and engineering insights on building scalable AI infrastructure."
};



import { BlogHero } from "../../components/sections/blog/BlogHero";
import { BlogGrid } from "../../components/sections/blog/BlogGrid";
import { NewsletterSignup } from "../../components/sections/blog/NewsletterSignup";

export default function Blog() {
  

  return (
    <>
      <BlogHero />
      <BlogGrid />
      <NewsletterSignup />
    </>
  );
}
