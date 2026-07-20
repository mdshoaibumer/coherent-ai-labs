import { useEffect } from "react";
import { generateSEO } from "../lib/seo";
import { BlogHero } from "../components/sections/blog/BlogHero";
import { BlogGrid } from "../components/sections/blog/BlogGrid";
import { NewsletterSignup } from "../components/sections/blog/NewsletterSignup";

export function Blog() {
  useEffect(() => {
    const seo = generateSEO({
      title: "Engineering Blog | Coherent AI Labs",
      description: "Technical deep dives, architectural teardowns, and engineering insights on building scalable AI infrastructure."
    });
    document.title = seo.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, []);

  return (
    <>
      <BlogHero />
      <BlogGrid />
      <NewsletterSignup />
    </>
  );
}
