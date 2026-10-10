import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { events, gallery, offerings, photos, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <img
          src={photos.salmon.src}
          alt={photos.salmon.alt}
          width={photos.salmon.width}
          height={photos.salmon.height}
          fetchPriority="high"
        />
        <div className="scrim" />
        <div className="hero-copy">
          <p className="eyebrow">{site.wordmark}</p>
          <h1>{site.tagline}</h1>
          <p className="mantra">{site.mantra}</p>
          <div className="hero-actions">
            <Link className="btn btn-fill" href="/contact">
              Get Started
            </Link>
            <Link className="btn" href="/about">
              Discover More
            </Link>
          </div>
          {photos.salmon.credit ? <p className="photo-credit">{photos.salmon.credit}</p> : null}
        </div>
      </section>

      <section className="intro" aria-labelledby="about-heading">
        <div className="intro-copy">
          <p className="eyebrow">Second Plate</p>
          <h2 id="about-heading">About Us</h2>
          <p>
            Second Plate is your ultimate destination for culinary exploration and catering services. We take pride in
            offering diverse cooking classes and creating delectable dishes for various events. Our focus on sustainable
            and locally sourced ingredients sets us apart, ensuring that every meal is not only delicious but also
            environmentally conscious.
          </p>
          <p className="pull">Embark on a flavorful journey with us!</p>
          <Link className="text-link" href="/about">
            Discover More
          </Link>
        </div>
        <figure className="intro-figure">
          <img src={photos.plate.src} alt={photos.plate.alt} width={photos.plate.width} height={photos.plate.height} />
        </figure>
      </section>

      <section className="offerings" aria-labelledby="offerings-heading">
        <div className="section-head">
          <p className="eyebrow">Classes and catering</p>
          <h2 id="offerings-heading">Exquisite Catering Creations</h2>
        </div>
        {offerings.map((item) => (
          <article className="offering" key={item.index}>
            <figure>
              <img
                src={item.photo.src}
                alt={item.photo.alt}
                width={item.photo.width}
                height={item.photo.height}
              />
              {"credit" in item.photo && item.photo.credit ? <figcaption>{item.photo.credit}</figcaption> : null}
            </figure>
            <div className="offering-copy">
              <p className="index">{item.index}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="band">
        <img src={photos.wings.src} alt="" width={photos.wings.width} height={photos.wings.height} />
        <div className="scrim" />
        <blockquote>
          <p>Modern South African-inspired dishes, crafted with passion and expertise.</p>
        </blockquote>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-heading">
        <div className="section-head">
          <p className="eyebrow">Photography</p>
          <h2 id="gallery-heading">Gallery</h2>
        </div>
        <div className="mosaic">
          {gallery.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
              {photo.credit ? <figcaption>{photo.credit}</figcaption> : null}
            </figure>
          ))}
        </div>
      </section>

      <section className="events-tease" aria-labelledby="events-heading">
        <div>
          <p className="eyebrow">Events</p>
          <h2 id="events-heading">No events at the moment</h2>
          <p>
            The classes Second Plate has published are listed here, with registration closed. Each one was held in
            Polokwane.
          </p>
          <Link className="text-link" href="/events">
            View the classes
          </Link>
        </div>
        <ol>
          {events.slice(0, 3).map((event) => (
            <li key={event.slug}>
              <Link href={`/events/${event.slug}`}>
                <span>{event.shortDate}</span>
                <strong>{event.title}</strong>
                <em>{event.city}</em>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="journal" aria-labelledby="journal-heading">
        <p className="eyebrow">Our Blog</p>
        <h2 id="journal-heading">Check back soon</h2>
        <p>Once posts are published, you’ll see them here.</p>
        <Link className="text-link" href="/blog">
          View All Posts
        </Link>
      </section>

      <section className="contact-band" aria-labelledby="connect-heading">
        <div className="contact-copy">
          <p className="eyebrow">Connect with Us</p>
          <h2 id="connect-heading">Connect with Us</h2>
          <p>
            Have a query or simply want to connect? Reach out to us and let&apos;s discuss how we can bring the essence
            of global flavors to your events and cooking classes.
          </p>
          <address>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
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
