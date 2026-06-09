"use client";

import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { contact } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      className="relative z-20"
      style={{ background: "var(--foreground)", color: "var(--background)" }}
    >
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:py-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <Reveal>
              <p className="nums mb-5 text-[11px] uppercase tracking-[0.28em] text-accent">
                {t.contact.kicker}
              </p>
              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                {t.contact.title}
              </h2>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-white/65">
                {t.contact.intro}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:pt-2">
            <Reveal delay={0.1}>
              <div className="divide-y divide-white/12 border-y border-white/12">
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center justify-between gap-4 py-6 transition-colors"
                >
                  <div>
                    <div className="nums mb-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
                      {t.contact.emailLabel}
                    </div>
                    <div className="text-xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                      {contact.email}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>

                <a
                  href={`tel:${contact.phoneHref}`}
                  className="group flex items-center justify-between gap-4 py-6 transition-colors"
                >
                  <div>
                    <div className="nums mb-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
                      {t.contact.phoneLabel}
                    </div>
                    <div className="nums text-xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                      {contact.phoneDisplay}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </div>
              <p className="mt-6 text-sm text-white/50">{t.contact.availability}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
