import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Second Plate is a catering company that also offers cooking classes for adults and kids, with a focus on sustainable, seasonal cooking.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Welcome"
        lede="We are a catering company but we also offer classes for adults and kids."
        photo={photos.chili}
      />
      <article className="prose-page">
        <p className="lede">
          Our mission is to bring people together through the joy of cooking and to inspire creativity in the kitchen.
          Get ready to embark on a flavorful journey filled with delicious dishes and culinary inspiration.
        </p>
        <figure className="about-plate">
          <img src={photos.plate.src} alt={photos.plate.alt} width={photos.plate.width} height={photos.plate.height} />
          <figcaption>Plated meal published by Second Plate.</figcaption>
        </figure>
        <h2>Passion for Cooking</h2>
        <div className="pillars">
          <section>
            <h3>Empowering Culinary Enthusiasts</h3>
            <p>
              We are passionate about sharing our love for cooking with individuals of all ages. Our mission is to
              empower people to explore their culinary skills, experiment with new flavors, and embrace the joy of
              cooking in their own kitchens.
            </p>
          </section>
          <section>
            <h3>Culinary Education</h3>
            <p>
              At Second Plate, we are committed to providing culinary education and promoting the importance of
              sustainable cooking practices. We strive to offer classes that utilize seasonal, locally-sourced
              ingredients and encourage eco-friendly cooking techniques for the well-being of our planet.
            </p>
          </section>
        </div>
        <aside className="about-aside">
          <img src="/images/mark.png" alt="" width={512} height={512} />
          <div>
            <p className="eyebrow">{site.wordmark}</p>
            <p>
              Classes and catering are based in {site.area}. The address published with the studio is {site.address}.
            </p>
            <p>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <br />
              <a href={site.emailHref}>{site.email}</a>
            </p>
          </div>
        </aside>
      </article>
    </>
  );
}
