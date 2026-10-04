import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

// Minimal PNG encoder in pure Node standard library
function createPng(width, height, getRgba) {
  // PNG signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // CRC calculation table
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) {
        c = 0xedb88320 ^ (c >>> 1);
      } else {
        c = c >>> 1;
      }
    }
    crcTable[n] = c;
  }

  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(8 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const typeAndData = buf.subarray(4, 8 + len);
    buf.writeUInt32BE(crc32(typeAndData), 8 + len);
    return buf;
  }

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bits per channel
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // Deflate
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Non-interlaced
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // Raw image data with filter byte 0 at beginning of each row
  const rawData = Buffer.alloc(height * (1 + width * 4));
  let offset = 0;

  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // No filter
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getRgba(x, y, width, height);
      rawData[offset++] = r;
      rawData[offset++] = g;
      rawData[offset++] = b;
      rawData[offset++] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Draw Dam Icon with Floodgate and Hydrodynamic Cyan Wave
function damPixelRenderer(isMaskable) {
  return (x, y, w, h) => {
    const nx = x / w; // 0 to 1
    const ny = y / h; // 0 to 1

    // For maskable, safe zone is inner 80%, so background fills 100%
    const cx = nx - 0.5;
    const cy = ny - 0.5;
    const distCenter = Math.sqrt(cx * cx + cy * cy);

    // Deep Dark Navy Background
    let r = Math.round(2 + ny * 10);
    let g = Math.round(6 + ny * 18);
    let b = Math.round(23 + ny * 30);
    let a = 255;

    // Corner radius for non-maskable
    if (!isMaskable && distCenter > 0.48) {
      // Rounded corner check
      const cornerR = 0.22;
      const cornerX = Math.abs(cx) - (0.5 - cornerR);
      const cornerY = Math.abs(cy) - (0.5 - cornerR);
      if (cornerX > 0 && cornerY > 0) {
        if (Math.sqrt(cornerX * cornerX + cornerY * cornerY) > cornerR) {
          return [0, 0, 0, 0];
        }
      }
    }

    // Outer subtle cyan border
    if (!isMaskable && (nx < 0.03 || nx > 0.97 || ny < 0.03 || ny > 0.97)) {
      return [56, 189, 248, 120];
    }

    // Scale coordinates inside safe margin if maskable
    const scale = isMaskable ? 0.72 : 0.88;
    const sx = 0.5 + cx / scale;
    const sy = 0.5 + cy / scale;

    if (sx >= 0 && sx <= 1 && sy >= 0 && sy <= 1) {
      // Top Satellite / Drone Beacon Light at (0.5, 0.22)
      const beaconDist = Math.hypot(sx - 0.5, sy - 0.22);
      if (beaconDist < 0.035) {
        return [56, 189, 248, 255];
      }
      if (beaconDist < 0.08 && Math.abs(beaconDist - 0.06) < 0.008) {
        return [14, 165, 233, 200];
      }

      // Dam Crest Barrier (Wall from sy=0.38 to sy=0.75)
      const damLeft = 0.32 - (sy - 0.38) * 0.12;
      const damRight = 0.68 + (sy - 0.38) * 0.12;

      if (sy >= 0.38 && sy <= 0.75 && sx >= damLeft && sx <= damRight) {
        // Concrete wall color
        r = 30;
        g = 41;
        b = 59;

        // Vertical flood spillway gates (columns)
        const gateSlot = Math.sin((sx - 0.5) * 45);
        if (Math.abs(gateSlot) > 0.45) {
          // Water discharge chutes glowing bright cyan!
          const waveGlow = Math.sin(sy * 30 + sx * 15);
          return [6, 182, 212, 245];
        } else {
          // Concrete buttress pier
          return [51, 65, 85, 255];
        }
      }

      // Reservoir Water above dam (sy < 0.38 and inside reservoir basin)
      if (sy < 0.38 && sy > 0.30 && sx > 0.33 && sx < 0.67) {
        return [2, 132, 199, 230];
      }

      // Dynamic Downstream Wave at Bottom (sy >= 0.75 to 0.88)
      if (sy >= 0.75 && sy <= 0.88) {
        const waveCurve = Math.sin((sx + 0.2) * 12) * 0.03 + 0.78;
        if (sy >= waveCurve && sy <= waveCurve + 0.08) {
          return [56, 189, 248, 240];
        }
      }

      // India Tricolor Strip at Top (sy between 0.12 and 0.14, sx between 0.38 and 0.62)
      if (sy >= 0.12 && sy <= 0.14) {
        if (sx >= 0.38 && sx < 0.46) {
          return [255, 153, 51, 255]; // Saffron
        } else if (sx >= 0.46 && sx < 0.54) {
          return [255, 255, 255, 255]; // White
        } else if (sx >= 0.54 && sx <= 0.62) {
          return [19, 136, 8, 255]; // Green
        }
      }
    }

    return [r, g, b, a];
  };
}

// Generate files in public directory
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. 192x192 PNG
const png192 = createPng(192, 192, damPixelRenderer(false));
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), png192);

// 2. 512x512 PNG
const png512 = createPng(512, 512, damPixelRenderer(false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), png512);

// 3. 512x512 Maskable PNG
const pngMaskable512 = createPng(512, 512, damPixelRenderer(true));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), pngMaskable512);

// 4. Apple Touch Icon 180x180 PNG
const pngApple180 = createPng(180, 180, damPixelRenderer(false));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngApple180);

console.log('Successfully generated all PWA Android PNG icons in /public!');
