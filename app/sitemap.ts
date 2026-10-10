import type { MetadataRoute } from "next";
import { events } from "@/lib/site";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/events", "/blog", "/contact", ...events.map((event) => `/events/${event.slug}`)];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2025-08-06"),
  }));
}
