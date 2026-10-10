import Link from "next/link";

export default function NotFound() {
  return (
    <section className="empty-state">
      <p className="eyebrow">Second Plate</p>
      <h1>Page not found</h1>
      <p>The address does not match a page on this site.</p>
      <Link className="text-link" href="/">
        Return home
      </Link>
    </section>
  );
}
