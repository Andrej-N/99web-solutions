import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = "public/portfolio";
mkdirSync(OUT, { recursive: true });

const sites = [
  { slug: "urbanova", url: "https://urbanovarealty.com/index.html" },
  { slug: "mariclaw", url: "https://www.mariclaw.rs/sr-Latn/" },
  { slug: "swastha", url: "https://www.swastha.rs/" },
  { slug: "anchor", url: "https://www.anchorapartmentshn.com/index.html#building" },
  { slug: "luxbudva", url: "https://www.apartmaniluxbudva.com/" },
  { slug: "enzahome", url: "https://enza-home.rs/" },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

for (const s of sites) {
  const page = await ctx.newPage();
  try {
    console.log("shooting", s.slug);
    await page.goto(s.url, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
    await page.waitForTimeout(3500);
    await page.screenshot({ path: `${OUT}/${s.slug}.png` });
    console.log("ok", s.slug);
  } catch (e) {
    console.log("FAIL", s.slug, e.message);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("done");
