import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));

await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);

// 1. hero top
await page.screenshot({ path: `${OUT}/01-hero.png` });

// 2. scroll into the spectrum rise
await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.6));
await page.waitForTimeout(1500);
await page.screenshot({ path: `${OUT}/02-spectrum.png` });

// 3. services
await page.evaluate(() => document.querySelector("#services")?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/03-services.png` });

// 4. process
await page.evaluate(() => document.querySelector("#process")?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/04-process.png` });

// 5. portfolio
await page.evaluate(() => document.querySelector("#work")?.scrollIntoView());
await page.waitForTimeout(1500);
await page.screenshot({ path: `${OUT}/05-work.png` });
await page.evaluate(() => window.scrollBy(0, 700));
await page.waitForTimeout(1000);
await page.screenshot({ path: `${OUT}/05b-work.png` });

// 6. contact
await page.evaluate(() => document.querySelector("#contact")?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/06-contact.png` });

// 7. full page
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/07-full.png`, fullPage: true });

// mobile
await page.setViewportSize({ width: 390, height: 844 });
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/08-mobile-hero.png` });
await page.evaluate(() => document.querySelector("#work")?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/09-mobile-work.png` });

await browser.close();
console.log("ERRORS:", errors.length ? JSON.stringify(errors, null, 2) : "none");
console.log("done");
