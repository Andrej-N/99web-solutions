import { chromium } from "playwright";
import fs from "node:fs";

const svg = fs.readFileSync("src/app/icon.svg", "utf8");
const browser = await chromium.launch();

for (const size of [16, 32, 48, 256]) {
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });
  const sized = svg.replace("<svg ", `<svg width="${size}" height="${size}" `);
  await page.setContent(`<style>*{margin:0;padding:0}</style>${sized}`);
  await page.screenshot({ path: `scripts/shots/fav-${size}.png`, omitBackground: true });
  await page.close();
}

await browser.close();
console.log("done");
