"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="header-inner">
        <Link href="/" className="logo-link" aria-label="Second Plate, home">
          <img src="/images/logo.png" alt="" width={1271} height={210} />
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-label">{open ? "Close" : "Menu"}</span>
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
        <nav id="site-nav" className={open ? "is-open" : undefined} aria-label="Primary">
          <ul>
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a className="header-phone" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
