import { readdir } from 'node:fs/promises';
import { basename, dirname, extname, join } from 'node:path';
import sharp from 'sharp';

const MAX_WIDTH = 1400;
const WEBP_QUALITY = 82;
const INPUT_DIR = join(process.cwd(), 'public/resources/projects');

const rasterExt = new Set(['.jpg', '.jpeg', '.png']);

const files = (await readdir(INPUT_DIR))
  .filter((name) => rasterExt.has(extname(name).toLowerCase()))
  .sort();

if (files.length === 0) {
  console.log('No raster images in', INPUT_DIR);
  process.exit(0);
}

for (const name of files) {
  const input = join(INPUT_DIR, name);
  const outName = `${basename(name, extname(name))}.webp`;
  const output = join(INPUT_DIR, outName);

  const meta = await sharp(input).metadata();
  const resized = sharp(input).rotate();
  if (meta.width && meta.width > MAX_WIDTH) {
    resized.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  const info = await resized.webp({ quality: WEBP_QUALITY }).toFile(output);
  const { unlink } = await import('node:fs/promises');
  await unlink(input);

  console.log(
    `${name} → ${outName} (${info.width}×${info.height}, ${(info.size / 1024).toFixed(0)} KiB)`,
  );
}
