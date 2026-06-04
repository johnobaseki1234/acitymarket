// Generates icon-192.png and icon-512.png using pure Node.js (no dependencies)
// Produces a simple navy shield icon with "AC" text

const fs = require('fs');

function makePNG(size) {
    // We'll create a minimal valid PNG using raw bytes
    // Background: #1e3a5f (navy), white "AC" text approximated as a white circle + letters

    // For simplicity, generate a solid navy square PNG programmatically
    const width = size, height = size;

    function crc32(buf) {
        let crc = 0xFFFFFFFF;
        const table = [];
        for (let i = 0; i < 256; i++) {
            let c = i;
            for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
            table[i] = c;
        }
        for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
        return (crc ^ 0xFFFFFFFF) >>> 0;
    }

    function chunk(type, data) {
        const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
        const t = Buffer.from(type);
        const crcBuf = Buffer.concat([t, data]);
        const c = Buffer.alloc(4); c.writeUInt32BE(crc32(crcBuf));
        return Buffer.concat([len, t, data, c]);
    }

    function deflate(data) {
        // Minimal zlib-style uncompressed deflate block
        const blocks = [];
        let offset = 0;
        while (offset < data.length) {
            const blockSize = Math.min(65535, data.length - offset);
            const isLast = (offset + blockSize >= data.length) ? 1 : 0;
            const block = Buffer.alloc(5 + blockSize);
            block[0] = isLast;
            block.writeUInt16LE(blockSize, 1);
            block.writeUInt16LE(~blockSize & 0xFFFF, 3);
            data.copy(block, 5, offset, offset + blockSize);
            blocks.push(block);
            offset += blockSize;
        }
        // adler32
        let s1 = 1, s2 = 0;
        for (let i = 0; i < data.length; i++) { s1 = (s1 + data[i]) % 65521; s2 = (s2 + s1) % 65521; }
        const adler = Buffer.alloc(4); adler.writeUInt32BE((s2 << 16) | s1);
        const header = Buffer.from([0x78, 0x01]); // zlib header
        return Buffer.concat([header, ...blocks, adler]);
    }

    // Build image data: navy bg (#1e3a5f) with a white circle and "AC" drawn pixel-by-pixel
    const r = 0x1e, g = 0x3a, b = 0x5f; // navy
    const rows = [];
    const cx = width / 2, cy = height / 2;
    const circleR = size * 0.38;
    const letterW = size * 0.08;

    for (let y = 0; y < height; y++) {
        const row = Buffer.alloc(1 + width * 3); // filter byte + RGB
        row[0] = 0; // no filter
        for (let x = 0; x < width; x++) {
            const dx = x - cx, dy = y - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            let pr = r, pg = g, pb = b;

            // White circle
            if (dist < circleR) { pr = 255; pg = 255; pb = 255; }

            // Draw navy "A" inside the circle (left letter)
            const ax = cx - size * 0.12, ay = cy;
            const lx = x - ax, ly = y - ay;
            const h = size * 0.28;
            const halfW = size * 0.14;
            // A: two diagonal strokes + crossbar
            const leftEdge = Math.abs(lx + halfW * (ly / h) - (-halfW)) < letterW;
            const rightEdge = Math.abs(lx - halfW * (ly / h) + halfW) < letterW * 0.8;
            const crossbar = Math.abs(ly) < letterW * 0.6 && Math.abs(lx) < halfW * 0.5;
            if (dist < circleR && ly > -h && ly < h * 0.1 && (leftEdge || rightEdge || crossbar)) {
                pr = r; pg = g; pb = b;
            }

            // Draw navy "C" inside the circle (right letter)
            const ccx = cx + size * 0.10, ccy = cy;
            const cr2 = size * 0.11;
            const cdx = x - ccx, cdy = y - ccy;
            const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
            const angle = Math.atan2(cdy, cdx) * 180 / Math.PI;
            if (dist < circleR && cdist < cr2 && cdist > cr2 - letterW && !(angle > -40 && angle < 40)) {
                pr = r; pg = g; pb = b;
            }

            row[1 + x * 3] = pr;
            row[1 + x * 3 + 1] = pg;
            row[1 + x * 3 + 2] = pb;
        }
        rows.push(row);
    }

    const imageData = deflate(Buffer.concat(rows));

    const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4);
    ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

    return Buffer.concat([
        sig,
        chunk('IHDR', ihdr),
        chunk('IDAT', imageData),
        chunk('IEND', Buffer.alloc(0))
    ]);
}

fs.writeFileSync('C:/Users/User/Documents/codes/acitymarket/icon-192.png', makePNG(192));
fs.writeFileSync('C:/Users/User/Documents/codes/acitymarket/icon-512.png', makePNG(512));
console.log('Icons generated: icon-192.png and icon-512.png');
