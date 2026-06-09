"use client";

import { useLang } from "@/lib/i18n";
import { contact } from "@/lib/content";

export function Footer() {
  const { t } = useLang();
  const year = 2026;

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#process", label: t.nav.process },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer
      className="relative z-20 border-t border-white/10"
      style={{ background: "var(--foreground)", color: "var(--background)" }}
    >
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center text-[17px] tracking-tight">
              <span className="font-light">Cherry</span>
              <span className="font-bold">Stone</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/55">{t.footer.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-white/65">
            <a href={`mailto:${contact.email}`} className="block transition-colors hover:text-white">
              {contact.email}
            </a>
            <a href={`tel:${contact.phoneHref}`} className="nums mt-1 block transition-colors hover:text-white">
              {contact.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span className="nums">© {year} CherryStone. {t.footer.rights}</span>
          <span>Beograd, RS</span>
        </div>
      </div>
    </footer>
  );
}
