import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { events, gallery, offerings, photos, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="stage">
        <div className="stage-copy">
          <div>
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
          </div>
          <p className="stage-meta">{site.area}</p>
        </div>
        <figure className="stage-photo">
          <img
            src={photos.salmon.src}
            alt={photos.salmon.alt}
            width={photos.salmon.width}
            height={photos.salmon.height}
            fetchPriority="high"
          />
          {photos.salmon.credit ? <figcaption>{photos.salmon.credit}</figcaption> : null}
        </figure>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, copy) => (
            <div className="ticker-group" key={copy}>
              {Array.from({ length: 4 }).map((__, index) => (
                <span key={index}>{site.mantra}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="split" aria-labelledby="about-heading">
        <div className="split-copy">
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
        <figure className="split-photo">
          <img src={photos.plate.src} alt={photos.plate.alt} width={photos.plate.width} height={photos.plate.height} />
        </figure>
      </section>

      <section className="chapter" aria-labelledby="offerings-heading">
        <div className="chapter-head">
          <p className="eyebrow">Classes and catering</p>
          <h2 id="offerings-heading">Exquisite Catering Creations</h2>
        </div>
        {offerings.map((item) => (
          <article className={Number(item.index) % 2 === 0 ? "band-row is-flip" : "band-row"} key={item.index}>
            <figure>
              <img src={item.photo.src} alt={item.photo.alt} width={item.photo.width} height={item.photo.height} />
            </figure>
            <div className="band-copy">
              <p className="index">{item.index}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {"credit" in item.photo && item.photo.credit ? <p className="photo-credit">{item.photo.credit}</p> : null}
            </div>
          </article>
        ))}
      </section>

      <section className="statement">
        <figure>
          <img src={photos.wings.src} alt={photos.wings.alt} width={photos.wings.width} height={photos.wings.height} />
        </figure>
        <blockquote>
          <p>Modern South African-inspired dishes, crafted with passion and expertise.</p>
        </blockquote>
      </section>

      <section className="chapter" aria-labelledby="gallery-heading">
        <div className="chapter-head">
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

      <section className="chapter" aria-labelledby="events-heading">
        <div className="chapter-head chapter-head-wide">
          <div>
            <p className="eyebrow">Events</p>
            <h2 id="events-heading">No events at the moment</h2>
          </div>
          <div>
            <p>
              The classes Second Plate has published are listed here, with registration closed. Each one was held in
              Polokwane.
            </p>
            <Link className="text-link" href="/events">
              View the classes
            </Link>
          </div>
        </div>
        <ol className="board">
          {events.map((event) => (
            <li key={event.slug}>
              <Link href={`/events/${event.slug}`}>
                <span className="board-date">{event.shortDate}</span>
                <strong>{event.title}</strong>
                <span className="board-city">{event.city}</span>
                <span className="board-status">Registration closed</span>
                <img src={event.image} alt="" width={event.width} height={event.height} />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="journal" aria-labelledby="journal-heading">
        <p className="eyebrow">Our Blog</p>
        <div>
          <h2 id="journal-heading">Check back soon</h2>
          <p>Once posts are published, you’ll see them here.</p>
        </div>
        <Link className="text-link" href="/blog">
          View All Posts
        </Link>
      </section>

      <section className="connect" aria-labelledby="connect-heading">
        <figure className="connect-photo">
          <img
            src={photos.cocktails.src}
            alt={photos.cocktails.alt}
            width={photos.cocktails.width}
            height={photos.cocktails.height}
          />
          {photos.cocktails.credit ? <figcaption>{photos.cocktails.credit}</figcaption> : null}
        </figure>
        <div className="connect-panel">
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
          <ContactForm />
        </div>
      </section>
    </>
  );
}
