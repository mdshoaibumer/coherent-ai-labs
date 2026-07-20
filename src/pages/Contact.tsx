import { useEffect } from "react";
import { generateSEO } from "../lib/seo";
import { ContactForm } from "../components/sections/contact/ContactForm";

export function Contact() {
  useEffect(() => {
    const seo = generateSEO({
      title: "Contact Engineering | Coherent AI Labs",
      description: "Request a technical discovery call with our senior engineering architects."
    });
    document.title = seo.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, []);

  return (
    <div className="pt-24">
      <ContactForm />
    </div>
  );
}
