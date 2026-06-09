# 99web Solutions

Marketing sajt za 99web Solutions (izrada veb sajtova i veb aplikacija).

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- shadcn struktura (`src/components/ui`)
- Motion (Framer Motion) za scroll reveal animacije
- GSAP + ScrollTrigger (preko CDN) za hero spektar animaciju
- lucide-react za ikonice

## Pokretanje
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produkcijski build
npm start        # serviranje builda
```

## Struktura
```
src/
  app/
    layout.tsx         # fontovi (Geist, Geist Mono, Newsreader), metadata, providers, nav
    page.tsx           # kompozicija sekcija
    globals.css        # tokeni teme (light minimal, topla paleta)
  components/
    ui/
      cosmos-spectrum.tsx  # hero spektar (scroll-scrub, props-driven)
      reveal.tsx           # IntersectionObserver reveal wrapper
    site/
      nav.tsx          # sticky frosted nav + EN/SR toggle
      hero.tsx         # hero koji puni cosmos-spectrum dvojezicnim tekstom
      services.tsx     # editorial numerisana lista usluga + stat strip
      process.tsx      # 4 koraka procesa
      portfolio.tsx    # bento grid sa pravim screenshotovima sajtova
      contact.tsx      # tamna zavrsna sekcija (email + telefon)
      footer.tsx
  lib/
    i18n.tsx           # LanguageProvider (EN/SR), localStorage
    content.ts         # sav tekst na EN i SR + podaci o projektima
    utils.ts           # cn()
  types/global.d.ts    # window.gsap / ScrollTrigger tipovi

scripts/
  shoot.mjs            # Playwright skripta koja hvata screenshotove portfolio sajtova
public/portfolio/      # generisani screenshotovi (urbanova, enzahome, anchor, luxbudva, mariclaw, swastha)
```

## Portfolio screenshotovi
Screenshotovi se generisu sa pravih sajtova:
```bash
node scripts/shoot.mjs
```

## Jezik
Dvojezicno EN / SR. Prebacivanje u nav-u (EN/SR), izbor se pamti u localStorage.
Sav tekst je u `src/lib/content.ts`.
# 99web-solutions
