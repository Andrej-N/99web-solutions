"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative z-20 border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:py-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Left: header */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="nums mb-5 text-[11px] uppercase tracking-[0.28em] text-accent">
                  {t.services.kicker}
                </p>
                <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.7rem]">
                  {t.services.title}
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  {t.services.intro}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right: numbered list */}
          <div className="md:col-span-8">
            <div className="border-t border-border">
              {t.services.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="group grid grid-cols-[auto_1fr] gap-5 border-b border-border py-8 transition-colors hover:bg-muted/40 sm:gap-10 sm:px-3">
                    <span className="nums pt-1 text-sm text-muted-foreground transition-colors group-hover:text-accent">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-28 md:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-8 text-center sm:py-10">
              <div className="nums text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {s.n}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
