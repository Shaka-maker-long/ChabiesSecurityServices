import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { events, photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Cooking classes published by Second Plate in Polokwane, including kids’ and teens’ classes. Registration is closed.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero title="Events" lede="No events at the moment." photo={photos.grazing} />
      <div className="events-page">
        <p className="lede">
          These are the cooking classes Second Plate has published. Dates below are the ones on the original listings,
          and registration is closed.
        </p>
        <ol className="event-index">
          {events.map((event) => (
            <li key={event.slug}>
              <Link href={`/events/${event.slug}`}>
                <img src={event.image} alt="" width={event.width} height={event.height} />
                <div>
                  <p>
                    {event.shortDate}
                    <span>{event.city}</span>
                  </p>
                  <h2>{event.title}</h2>
                  <p>{event.summary}</p>
                  <span className="text-link">Details</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
