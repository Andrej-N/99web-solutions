"use client";

import { CosmicSpectrum } from "@/components/ui/cosmos-spectrum";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t } = useLang();
  return (
    <CosmicSpectrum
      color="sunset"
      blur
      eyebrow={t.hero.eyebrow}
      heading={t.hero.heading}
      statement={t.hero.statement}
      hint={t.hero.hint}
    />
  );
}
