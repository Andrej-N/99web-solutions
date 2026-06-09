import fs from "node:fs";

const inputs = [16, 32, 48].map((s) => ({
  size: s,
  data: fs.readFileSync(`scripts/shots/fav-${s}.png`),
}));

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(inputs.length, 4);

const entries = [];
let offset = 6 + 16 * inputs.length;
for (const { size, data } of inputs) {
  const e = Buffer.alloc(16);
  e.writeUInt8(size === 256 ? 0 : size, 0);
  e.writeUInt8(size === 256 ? 0 : size, 1);
  e.writeUInt8(0, 2); // palette
  e.writeUInt8(0, 3); // reserved
  e.writeUInt16LE(1, 4); // planes
  e.writeUInt16LE(32, 6); // bpp
  e.writeUInt32LE(data.length, 8);
  e.writeUInt32LE(offset, 12);
  entries.push(e);
  offset += data.length;
}

fs.writeFileSync(
  "src/app/favicon.ico",
  Buffer.concat([header, ...entries, ...inputs.map((i) => i.data)]),
);
console.log("favicon.ico:", fs.statSync("src/app/favicon.ico").size, "bytes");
