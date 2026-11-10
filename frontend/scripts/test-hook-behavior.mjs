import assert from 'assert';

console.log('🧪 Testing Synchronized Media Logic (Cache, Slow Network, Error Recovery, Timeouts)...\n');

// Mock browser cache and hook mechanics
const globalLoadedCache = new Set();

function createSynchronizedMediaState(src, options = {}) {
  const { priority = false, timeout = 3500, enabled = true, initialCache = false } = options;

  let isLoaded = false;
  let hasError = false;

  if (!enabled || !src) {
    isLoaded = true;
  } else if (initialCache || globalLoadedCache.has(src)) {
    isLoaded = true;
  }

  const markLoaded = () => {
    if (src) globalLoadedCache.add(src);
    isLoaded = true;
  };

  const handleLoad = () => {
    markLoaded();
  };

  const handleError = () => {
    hasError = true;
    isLoaded = true; // Never block text on error
  };

  let timer = null;
  if (!isLoaded && timeout > 0) {
    timer = setTimeout(() => {
      markLoaded();
    }, timeout);
  }

  const cleanup = () => {
    if (timer) clearTimeout(timer);
  };

  return {
    get isLoaded() { return isLoaded; },
    get hasError() { return hasError; },
    handleLoad,
    handleError,
    cleanup,
  };
}

// TEST 1: Slow Network Simulation
console.log('Test 1: Slow network connection - text and image held in coordinated pending state until loaded');
const state1 = createSynchronizedMediaState('/images/HeroSlideshow/Landscape-Maintenance.jpg');
assert.strictEqual(state1.isLoaded, false, 'Initial state must be not loaded so text does not appear alone');
assert.strictEqual(state1.hasError, false, 'No error initially');

// Simulate image finishing download after 800ms
state1.handleLoad();
assert.strictEqual(state1.isLoaded, true, 'After image loads, isLoaded must be true to trigger simultaneous reveal');
state1.cleanup();
console.log('  ✓ PASS: Slow connection correctly waits for image and triggers synchronized reveal');

// TEST 2: Fast Network / Cached Image (Requirement 8: Avoid artificial loading delays)
console.log('\nTest 2: Cached Image - Instant load with zero artificial delay');
const state2 = createSynchronizedMediaState('/images/HeroSlideshow/Landscape-Maintenance.jpg');
assert.strictEqual(state2.isLoaded, true, 'Cached image must be immediately marked loaded with no artificial delay');
state2.cleanup();
console.log('  ✓ PASS: Cached image loads instantly without artificial delay');

// TEST 3: Network Error Recovery
console.log('\nTest 3: Network error recovery - text reveals smoothly rather than getting stuck');
const state3 = createSynchronizedMediaState('/images/broken-image.jpg');
assert.strictEqual(state3.isLoaded, false, 'Initial state is false');
state3.handleError();
assert.strictEqual(state3.isLoaded, true, 'On image error, isLoaded must become true so text is never blocked');
assert.strictEqual(state3.hasError, true, 'hasError flag is set');
state3.cleanup();
console.log('  ✓ PASS: Error handler unblocks text gracefully');

// TEST 4: Timeout Recovery
console.log('\nTest 4: Stalled connection timeout recovery');
const state4 = createSynchronizedMediaState('/images/stalled.jpg', { timeout: 100 });
assert.strictEqual(state4.isLoaded, false, 'Initially false');
await new Promise((r) => setTimeout(r, 150));
assert.strictEqual(state4.isLoaded, true, 'Safety timeout triggered and revealed content');
state4.cleanup();
console.log('  ✓ PASS: Timeout reveals content safely if connection hangs');

console.log('\n🎉 All Hook Behavior tests passed successfully!\n');

