// Original procedural planet; runs off the main thread instead of downloading
// 3.52 MB of samples. Geometry, surface bands and point density match the
// Python source model. A fixed seed keeps the composition stable across visits.
export function generatePlanet() {
  let state = 42817;
  const random = () => {
    let n = state += 0x6D2B79F5;
    n = Math.imul(n ^ n >>> 15, n | 1);
    n ^= n + Math.imul(n ^ n >>> 7, n | 61);
    return ((n ^ n >>> 14) >>> 0) / 4294967296;
  };
  let spare = null;
  const gaussian = () => {
    if (spare !== null) { const n = spare; spare = null; return n; }
    const angle = random() * Math.PI * 2;
    const radius = Math.sqrt(-2 * Math.log(1 - random()));
    spare = Math.sin(angle) * radius;
    return Math.cos(angle) * radius;
  };
  const count = 220000;
  const binary = new ArrayBuffer(count * 16);
  const data = new DataView(binary);
  const sinTilt = Math.sin(.68), cosTilt = Math.cos(.68);
  const sinRoll = Math.sin(-.34), cosRoll = Math.cos(-.34);
  let index = 0;
  const orient = (x, y, z) => {
    const tiltedY = y * cosTilt - z * sinTilt;
    return [x * cosRoll - tiltedY * sinRoll,
      x * sinRoll + tiltedY * cosRoll, y * sinTilt + z * cosTilt];
  };
  const sample = (x, y, z, nx, ny, nz, tone) => {
    const position = orient(x, y, z), normal = orient(nx, ny, nz);
    const offset = index++ * 16;
    for (let k = 0; k < 3; k++) {
      data.setFloat32(offset + k * 4, position[k], true);
      data.setInt8(offset + 12 + k, Math.round(Math.max(-1, Math.min(1, normal[k])) * 127));
    }
    data.setUint8(offset + 15, Math.round(Math.max(0, Math.min(1, tone)) * 255));
  };
  for (let i = 0; i < 110000; i++) {
    const latitude = random() * 2 - 1, angle = random() * Math.PI * 2;
    const radius = .735 + gaussian() * .0018;
    const side = Math.sqrt(1 - latitude * latitude);
    const x = side * Math.cos(angle), z = side * Math.sin(angle);
    const band = Math.sin(latitude * 38 + Math.sin(angle * 3) * .6);
    const fine = Math.sin(latitude * 89 + angle * .3);
    const tone = .69 + band * .13 + fine * .045 + (random() * .11 - .055);
    sample(x * radius, latitude * radius * .91, z * radius, x, latitude, z, tone);
  }
  for (const [start, end, amount, tone] of [
    [1, 1.17, 30000, .55], [1.19, 1.38, 55000, .88], [1.43, 1.53, 25000, .67],
  ]) {
    for (let i = 0; i < amount; i++) {
      const radius = Math.sqrt(start * start + random() * (end * end - start * start));
      const angle = random() * Math.PI * 2, height = gaussian() * .003;
      const grooves = .78 + .22 * Math.sin(radius * 265) ** 2;
      sample(radius * Math.cos(angle), height, radius * Math.sin(angle),
        0, height >= 0 ? 1 : -1, 0, tone * grooves * (.85 + random() * .15));
    }
  }
  // Shuffle complete records so the phone's first 100k samples still include
  // every surface and ring band. Transfer the buffer without a copy.
  const records = new Uint32Array(binary);
  for (let i = count - 1; i > 0; i--) {
    const other = Math.floor(random() * (i + 1));
    for (let k = 0; k < 4; k++) {
      const slot = i * 4 + k, target = other * 4 + k;
      const value = records[slot]; records[slot] = records[target]; records[target] = value;
    }
  }
  return binary;
}

if (typeof self !== "undefined") {
  self.onmessage = () => {
    const started = performance.now();
    const binary = generatePlanet();
    self.postMessage({ binary, points: 220000, generationMs: performance.now() - started }, [binary]);
  };
}
