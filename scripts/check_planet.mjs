import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

// Import the dependency-free worker generator in Node without needing a
// package.json or changing how the browser's native modules are served.
const source = readFileSync(new URL("../preview/vendor/orocoa/home/assets/planet-worker.js", import.meta.url));
const { generatePlanet } = await import("data:text/javascript;base64," + source.toString("base64"));
const binary = generatePlanet();
assert.equal(binary.byteLength, 220000 * 16);
const data = new DataView(binary);
let body = 0, phoneBody = 0;
for (let i = 0; i < 220000; i++) {
  const xyz = [0, 1, 2].map(k => data.getFloat32(i * 16 + k * 4, true));
  assert(xyz.every(Number.isFinite), "All particle coordinates must be finite");
  const radius = Math.hypot(...xyz);
  assert(radius > .6 && radius < 1.6, "Particles must remain on the intended planet and rings");
  if (radius < .9) { body++; if (i < 100000) phoneBody++; }
  const normal = [0, 1, 2].map(k => data.getInt8(i * 16 + 12 + k) / 127);
  assert(Math.abs(Math.hypot(...normal) - 1) < .015, "Surface normals must remain normalized");
}
assert.equal(body, 110000);
assert(Math.abs(phoneBody - 50000) < 1000, "Phone budget must retain both the body and rings");
const hash = value => createHash("sha256").update(new Uint8Array(value)).digest("hex");
assert.equal(hash(binary), hash(generatePlanet()), "The planet must be deterministic");
console.log("Checked generated planet: 220,000 finite samples, surface normals, phone coverage and deterministic output.");
