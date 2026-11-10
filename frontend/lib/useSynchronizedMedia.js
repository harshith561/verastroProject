'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// In-memory global cache of image URLs that have completed loading in this session.
// Prevents re-triggering loading skeletons on back/forward navigation or revisits.
const globalLoadedCache = new Set();

/**
 * Reusable React hook for coordinating synchronized visibility between images and related text.
 *
 * @param {string} src - The image source URL.
 * @param {object} [options]
 * @param {boolean} [options.priority=false] - Whether this image is above the fold.
 * @param {number} [options.timeout=3500] - Safety fallback timeout in ms after which content reveals even if image stalled.
 * @param {boolean} [options.enabled=true] - Whether synchronization is active (defaults to true).
 * @returns {{
 *   isLoaded: boolean,
 *   hasError: boolean,
 *   imgRef: import('react').RefObject<HTMLImageElement | null>,
 *   handleLoad: () => void,
 *   handleError: () => void
 * }}
 */
export function useSynchronizedMedia(src, options = {}) {
  const { priority = false, timeout = 3500, enabled = true } = options;

  const [isLoaded, setIsLoaded] = useState(() => {
    if (!enabled || !src) return true;
    if (typeof window !== 'undefined' && globalLoadedCache.has(src)) {
      return true;
    }
    return false;
  });

  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  const markLoaded = useCallback(() => {
    if (src) globalLoadedCache.add(src);
    setIsLoaded(true);
  }, [src]);

  const handleLoad = useCallback(() => {
    markLoaded();
  }, [markLoaded]);

  const handleError = useCallback(() => {
    setHasError(true);
    // On error, reveal content so text is never permanently blocked
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!enabled || !src) {
      setIsLoaded(true);
      return undefined;
    }

    // Check if URL was already marked loaded in global cache
    if (globalLoadedCache.has(src)) {
      setIsLoaded(true);
      return undefined;
    }

    // Check if the underlying HTML <img> has already finished loading (e.g. from browser cache)
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      markLoaded();
      return undefined;
    }

    // Safety timeout: ensure text is never blocked indefinitely if network stalls
    const timer = window.setTimeout(() => {
      markLoaded();
    }, timeout);

    return () => {
      window.clearTimeout(timer);
    };
  }, [src, enabled, timeout, markLoaded]);

  return {
    isLoaded,
    hasError,
    imgRef,
    handleLoad,
    handleError,
  };
}

export default useSynchronizedMedia;

