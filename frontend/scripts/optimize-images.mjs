import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Disable sharp cache on Windows so files are never locked
sharp.cache(false);

const dir = path.resolve('frontend/public/images/HeroSlideshow');
const files = fs.readdirSync(dir);

console.log(`Checking ${files.length} images in ${dir}...`);

async function optimize() {
  let totalSaved = 0;
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const filePath = path.join(dir, file);
    const originalBuffer = fs.readFileSync(filePath);
    const sizeKB = originalBuffer.length / 1024;

    if (originalBuffer.length > 200 * 1024) {
      console.log(`Optimizing ${file} (${(sizeKB / 1024).toFixed(2)} MB)...`);
      const image = sharp(originalBuffer);
      const metadata = await image.metadata();

      let pipeline = sharp(originalBuffer);
      if (metadata.width && metadata.width > 1920) {
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
      }

      let optimizedBuffer;
      if (ext === '.png') {
        optimizedBuffer = await pipeline.png({ quality: 82, compressionLevel: 8 }).toBuffer();
      } else {
        optimizedBuffer = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
      }

      if (optimizedBuffer.length < originalBuffer.length) {
        fs.writeFileSync(filePath, optimizedBuffer);
        const saved = originalBuffer.length - optimizedBuffer.length;
        totalSaved += saved;
        console.log(`  ✓ Compressed to ${(optimizedBuffer.length / 1024).toFixed(1)} KB (Saved ${(saved / 1024).toFixed(1)} KB)`);
      }
    }
  }
  console.log(`\n🎉 Total space saved: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB!`);
}

optimize().catch(console.error);
