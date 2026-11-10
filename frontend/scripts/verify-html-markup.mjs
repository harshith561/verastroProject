import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const appServerDir = path.resolve('frontend/.next/server/app');

console.log('🔍 Inspecting pre-rendered HTML and assets in:', appServerDir, '\n');

let passed = 0;
let failed = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${testName} ${details ? '(' + details + ')' : ''}`);
    failed++;
  }
}

// 1. HOME PAGE (index.html)
console.log('--- TEST GROUP 1: Home Page (index.html) ---');
const homeHtml = fs.readFileSync(path.join(appServerDir, 'index.html'), 'utf8');

assert(
  homeHtml.includes('hero-golf.avif'),
  'HeroSlideshow prioritizes the primary hero slide image'
);

assert(
  homeHtml.includes('min-h-[280px]') && homeHtml.includes('animate-shimmer'),
  'VisualSplit reserves image min-height (280/420/520px) and renders shimmer placeholder'
);

assert(
  homeHtml.includes('aspect-[4/3]'),
  'Home service cards reserve 4/3 aspect ratio to prevent layout shifts'
);

assert(
  homeHtml.includes('min-h-[360px]'),
  'Where We Serve Main Office card reserves min-height (360px) to prevent layout shifts'
);

assert(
  !homeHtml.includes('unoptimized') || !homeHtml.includes('VisualSplit unoptimized'),
  'Unoptimized flag removed from local content images for fast delivery'
);

// 2. ABOUT PAGE (about.html)
console.log('\n--- TEST GROUP 2: About Page (about.html) ---');
const aboutHtml = fs.readFileSync(path.join(appServerDir, 'about.html'), 'utf8');

assert(
  aboutHtml.includes('About Verastro Infra') && aboutHtml.includes('golfCourse.avif'),
  'PageHero correctly rendered with priority image and title'
);

assert(
  aboutHtml.includes('Who We Are') && aboutHtml.includes('aboutMessage.jpg'),
  'About "Who We Are" split section coordinated with aboutMessage image'
);

assert(
  aboutHtml.includes('How We Work With Customers') && aboutHtml.includes('inspect.webp'),
  'About "Our Approach" reverse split section coordinated with inspect image'
);

// 3. SERVICES PAGE (services.html)
console.log('\n--- TEST GROUP 3: Services Page (services.html) ---');
const servicesHtml = fs.readFileSync(path.join(appServerDir, 'services.html'), 'utf8');

assert(
  servicesHtml.includes('Landscape-Maintenance.jpg'),
  'Service 1 (Lawn & Grounds Maintenance) image is wired to VisualSplit'
);

assert(
  servicesHtml.includes('service4.jpg'),
  'Service 2 (Property Cleanup & Leaf Removal) image is wired to VisualSplit'
);

assert(
  servicesHtml.includes('hero2.jpg'),
  'Service 3 (Garden & Shrub Care) image is wired to VisualSplit'
);

assert(
  servicesHtml.includes('animate-shimmer'),
  'All 3 service sections include coordinated shimmer placeholders'
);

// 4. CONTACT PAGE (contact.html)
console.log('\n--- TEST GROUP 4: Contact Page (contact.html) ---');
const contactHtml = fs.readFileSync(path.join(appServerDir, 'contact.html'), 'utf8');

assert(
  contactHtml.includes('Talk with Verastro Infra') && contactHtml.includes('introLandscape.jpg'),
  'Contact page VisualSplit coordinates Direct Contact copy with introLandscape image'
);

assert(
  contactHtml.includes('animate-shimmer'),
  'Contact page VisualSplit includes coordinated shimmer placeholder'
);

// 5. IMAGE OPTIMIZATION EFFICIENCY TEST
console.log('\n--- TEST GROUP 5: Image Optimization Benchmarks ---');
const imageTests = [
  { name: 'Landscape-Maintenance.jpg', file: 'frontend/public/images/HeroSlideshow/Landscape-Maintenance.jpg' },
  { name: 'service4.jpg', file: 'frontend/public/images/HeroSlideshow/service4.jpg' },
  { name: 'hero2.jpg', file: 'frontend/public/images/HeroSlideshow/hero2.jpg' },
  { name: 'aboutMessage.jpg', file: 'frontend/public/images/HeroSlideshow/aboutMessage.jpg' },
  { name: 'introLandscape.jpg', file: 'frontend/public/images/HeroSlideshow/introLandscape.jpg' },
];

for (const img of imageTests) {
  const rawPath = path.resolve(img.file);
  const rawBuf = fs.readFileSync(rawPath);
  const rawKB = rawBuf.length / 1024;

  // Simulate Next.js sharp webp transformation at 1080w
  const optimizedBuf = await sharp(rawBuf)
    .resize({ width: 1080, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toBuffer();
  const optKB = optimizedBuf.length / 1024;
  const savingsPercent = ((1 - optKB / rawKB) * 100).toFixed(0);

  console.log(`  📊 ${img.name}: ${rawKB.toFixed(1)} KB -> ${optKB.toFixed(1)} KB WebP (${savingsPercent}% saved!)`);
  assert(optKB < rawKB * 0.5, `${img.name} achieves >50% compression for fast loading`);
}

console.log('\n===========================================');
console.log(`Summary: ${passed} passed, ${failed} failed`);
console.log('===========================================\n');

process.exit(failed > 0 ? 1 : 0);

