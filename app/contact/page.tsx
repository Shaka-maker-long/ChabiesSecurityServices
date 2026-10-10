import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach Second Plate on ${site.phoneDisplay} or ${site.email}. Polokwane and surrounding, with an address at Lynnwood Bridge, Pretoria.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Connect with Us"
        lede="Have a query or simply want to connect?"
        photo={photos.cocktails}
      />
      <section className="contact-page">
        <div className="contact-copy">
          <p>
            Reach out to us and let&apos;s discuss how we can bring the essence of global flavors to your events and
            cooking classes.
          </p>
          <address>
            <a className="phone-display" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a href={site.emailHref}>{site.email}</a>
            <span>{site.area}</span>
            <a href={site.mapsHref}>{site.address}</a>
          </address>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
