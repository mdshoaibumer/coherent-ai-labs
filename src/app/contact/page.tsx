import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Engineering | Coherent AI Labs",
  description: "Request a technical discovery call with our senior engineering architects."
};



import { ContactForm } from "../../components/sections/contact/ContactForm";

export default function Contact() {
  

  return (
    <div className="pt-24">
      <ContactForm />
    </div>
  );
}
