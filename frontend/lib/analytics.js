/**
 * Analytics Utility for Google Analytics 4 (GA4)
 * Compliant with privacy guidelines — strictly omits PII (names, emails, phone numbers).
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

/**
 * Log a custom GA4 event safely
 * @param {string} action
 * @param {object} params
 */
export function trackEvent(action, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function' && GA_MEASUREMENT_ID) {
    window.gtag('event', action, params);
  }
}

/**
 * Track Call to Action (CTA) click
 * @param {string} ctaLabel
 * @param {string} destination
 */
export function trackCtaClick(ctaLabel, destination) {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaLabel,
    destination_url: destination,
  });
}

/**
 * Track successful form submission (No PII passed)
 * @param {'quote_request' | 'contact_inquiry'} formType
 * @param {string} [serviceCategory]
 */
export function trackFormSubmission(formType, serviceCategory = '') {
  trackEvent('form_submission_success', {
    event_category: 'lead',
    form_name: formType,
    service_selected: serviceCategory || 'unspecified',
  });
}

