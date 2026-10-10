import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/images/logo.png" alt="Second Plate" width={1271} height={210} />
        <p>{site.mantra}</p>
      </div>
      <div className="footer-col">
        <h2>Visit</h2>
        <p>{site.area}</p>
        <p>
          <a href={site.mapsHref}>{site.address}</a>
        </p>
      </div>
      <div className="footer-col">
        <h2>Contact</h2>
        <p>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </p>
        <p>
          <a href={site.emailHref}>{site.email}</a>
        </p>
      </div>
      <div className="footer-col">
        <h2>Explore</h2>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
