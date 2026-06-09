"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/ui/reveal";

export function Process() {
  const { t } = useLang();

  return (
    <section
      id="process"
      className="relative z-20 border-t border-border"
      style={{ background: "var(--background-elevated)" }}
    >
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:py-36">
        <Reveal className="max-w-2xl">
          <p className="nums mb-5 text-[11px] uppercase tracking-[0.28em] text-accent">
            {t.process.kicker}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.7rem]">
            {t.process.title}
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            {t.process.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="flex h-full flex-col bg-background p-7 md:p-8">
                <div className="mb-8 flex items-center gap-3">
                  <span className="nums text-sm font-medium text-accent">0{i + 1}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
