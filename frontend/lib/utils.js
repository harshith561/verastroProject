/**
 * Sanitize a filename to remove potentially dangerous characters.
 * @param {string} filename
 * @returns {string}
 */
export function sanitizeFilename(filename) {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/\.{2,}/g, '.')
    .slice(0, 100);
}

/**
 * Format bytes to a readable string
 * @param {number} bytes
 * @returns {string}
 */
export function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

/**
 * Simple honeypot check — returns true if the honeypot field is filled
 * @param {string} honeypotValue
 * @returns {boolean}
 */
export function isSpam(honeypotValue) {
  return Boolean(honeypotValue && honeypotValue.trim().length > 0);
}

/**
 * Rate limit map (in-memory, resets on server restart)
 */
const rateLimitMap = new Map();

/**
 * Basic in-memory rate limiting
 * @param {string} ip
 * @param {number} maxRequests - max requests in window
 * @param {number} windowMs - window duration in ms
 * @returns {boolean} true if request is allowed
 */
export function checkRateLimit(ip, maxRequests = 5, windowMs = 60000) {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { count: 0, resetAt: now + windowMs };

  if (now > record.resetAt) {
    record.count = 1;
    record.resetAt = now + windowMs;
  } else {
    record.count += 1;
  }

  rateLimitMap.set(ip, record);
  return record.count <= maxRequests;
}

/**
 * Get client IP from request headers
 * @param {Request} request
 * @returns {string}
 */
export function getClientIp(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}
