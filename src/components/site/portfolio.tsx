"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const spans: Record<string, string> = {
  urbanova: "lg:col-span-7",
  enzahome: "lg:col-span-5",
  anchor: "lg:col-span-5",
  luxbudva: "lg:col-span-7",
  mariclaw: "lg:col-span-6",
  swastha: "lg:col-span-6",
};

export function Portfolio() {
  const { t, lang } = useLang();

  return (
    <section id="work" className="relative z-20 border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:py-36">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="nums mb-5 text-[11px] uppercase tracking-[0.28em] text-accent">
              {t.portfolio.kicker}
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.7rem]">
              {t.portfolio.title}
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              {t.portfolio.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 lg:grid-cols-12">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} className={cn("lg:col-span-6", spans[p.slug])}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
                  <Image
                    src={p.image}
                    alt={`${p.name} website`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {/* status pill */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-border bg-background/85 px-3 py-1.5 text-[11px] font-medium text-foreground backdrop-blur-md">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        p.status === "live" ? "bg-[#4d7c5a]" : "bg-accent",
                      )}
                    />
                    {p.status === "live" ? t.portfolio.live : t.portfolio.building}
                  </div>
                  {/* hover visit chip */}
                  <div className="absolute right-4 top-4 flex translate-y-1 items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-medium text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {t.portfolio.visit}
                    <ArrowUpRight size={13} />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {p.name}
                  </h3>
                  <span className="nums shrink-0 text-xs text-muted-foreground">
                    {p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.type[lang]}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
