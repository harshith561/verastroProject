import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import consultationRoutes from './routes/consultation.js';
import careersRoutes from './routes/careers.js';
import { verifySmtp } from './config/mailer.js';

const app = express();
const port = process.env.PORT || 5000;

// Security: Disable X-Powered-By
app.disable('x-powered-by');

// Security Headers Middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  next();
});

const allowedOrigins = [
  'https://verastroinfra.com',
  'https://www.verastroinfra.com',
  'https://verastro-project.vercel.app',
  'http://localhost:3000',
  'http://localhost:5173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

// Payload size limit to prevent Denial of Service
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// In-Memory Rate Limiting for API routes
const ipRateLimit = new Map();
const rateLimitMiddleware = (req, res, next) => {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 10; // Max 10 requests per minute per IP

  const record = ipRateLimit.get(ip) || { count: 0, resetAt: now + windowMs };
  if (now > record.resetAt) {
    record.count = 1;
    record.resetAt = now + windowMs;
  } else {
    record.count += 1;
  }
  ipRateLimit.set(ip, record);

  if (record.count > maxRequests) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  }
  next();
};

app.use('/api', rateLimitMiddleware);

app.get('/health', (req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

// Mount routes (supporting both /api/consultation and /api/contact)
app.use('/api/consultation', consultationRoutes);
app.use('/api/contact', consultationRoutes);
app.use('/api/careers', careersRoutes);

// Central error handler (Never leak server stack traces in production)
app.use((err, req, res, next) => {
  console.error('API Error:', err.message || err);

  const message =
    err.code === 'LIMIT_FILE_SIZE'
      ? 'File is too large. Maximum size is 10MB.'
      : err.message === 'Unsupported file type'
        ? 'Unsupported file type.'
        : err.message === 'Not allowed by CORS'
          ? 'Not allowed by CORS.'
          : 'Invalid form submission or server error.';

  res.status(err.status || 400).json({
    success: false,
    message,
  });
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`✓ Verastro Infra backend running on port ${port}`);
    verifySmtp();
  });
}

export default app;
