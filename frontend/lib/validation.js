import { z } from 'zod';

const phoneRegex = /^[+\d\s\-().]{7,20}$/;

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(phoneRegex, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  company: z.string().max(100).optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  location: z.string().min(1, 'Please select a location'),
  message: z
    .string()
    .min(10, 'Please provide a brief project description (at least 10 characters)')
    .max(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the privacy policy to continue' }),
  }),
  honeypot: z.string().max(0).optional(),
});

export const consultationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(phoneRegex, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  company: z.string().max(100).optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  location: z.string().min(1, 'Please select a location'),
  message: z.string().min(10, 'Please describe your needs').max(2000),
  honeypot: z.string().max(0).optional(),
});

export const careerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(phoneRegex, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  position: z.string().min(1, 'Please select a position'),
  message: z.string().max(2000).optional().or(z.literal('')),
  honeypot: z.string().max(0).optional(),
});

// Allowed MIME types and extensions for project photo uploads
export const ALLOWED_PROJECT_FILES = {
  mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  extensions: ['.jpg', '.jpeg', '.png', '.webp', '.pdf'],
  maxSizeMB: 10,
};

// Allowed MIME types and extensions for resume uploads
export const ALLOWED_RESUME_FILES = {
  mimeTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
  extensions: ['.pdf', '.doc', '.docx'],
  maxSizeMB: 5,
};

/**
 * Validate a file against allowed types and size
 * @param {File} file
 * @param {{ mimeTypes: string[], extensions: string[], maxSizeMB: number }} rules
 * @returns {{ valid: boolean, error?: string }}
 */
export function validateFile(file, rules) {
  if (!file) return { valid: true };

  const ext = '.' + file.name.split('.').pop()?.toLowerCase();
  const sizeMB = file.size / (1024 * 1024);

  if (!rules.extensions.includes(ext)) {
    return {
      valid: false,
      error: `Invalid file type. Allowed: ${rules.extensions.join(', ')}`,
    };
  }

  if (!rules.mimeTypes.includes(file.type)) {
    return { valid: false, error: 'Invalid file format detected.' };
  }

  if (sizeMB > rules.maxSizeMB) {
    return {
      valid: false,
      error: `File too large. Maximum size is ${rules.maxSizeMB}MB.`,
    };
  }

  return { valid: true };
}
