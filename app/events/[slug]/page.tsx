import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEvent, site } from "@/lib/site";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "Event" };
  return {
    title: event.title,
    description: event.summary,
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <article className="event-detail">
      <p className="crumb">
        <Link href="/events">Events</Link>
      </p>
      <div className="event-layout">
        <figure>
          <img src={event.image} alt={event.imageAlt} width={event.width} height={event.height} />
        </figure>
        <div>
          <p className="eyebrow">{event.city}</p>
          <h1>{event.title}</h1>
          <dl className="facts">
            <div>
              <dt>Date</dt>
              <dd>{event.when}</dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>{event.time}</dd>
            </div>
            <div>
              <dt>Place</dt>
              <dd>{event.place}</dd>
            </div>
            <div>
              <dt>Who</dt>
              <dd>{event.audience}</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>{event.price}</dd>
            </div>
          </dl>
          {event.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {event.skills ? (
            <>
              <h2>Skills in the class</h2>
              <ul>
                {event.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </>
          ) : null}
          {event.listingNote ? <p className="listing-note">{event.listingNote}</p> : null}
          {event.ticket ? <p className="ticket-note">{event.ticket}</p> : null}
          <p className="rsvp">
            RSVP on <a href={site.phoneHref}>{site.phoneDisplay}</a> or{" "}
            <a href={site.emailHref}>{site.email}</a>.
          </p>
        </div>
      </div>
    </article>
  );
}
