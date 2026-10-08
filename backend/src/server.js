import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import consultationRoutes from './routes/consultation.js';
import careersRoutes from './routes/careers.js';

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  'https://verastro-project.vercel.app',
  'http://localhost:3000',
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
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.use('/api/consultation', consultationRoutes);
app.use('/api/careers', careersRoutes);

app.use((err, req, res, next) => {
  console.error(err);

  const message =
    err.code === 'LIMIT_FILE_SIZE'
      ? 'File is too large. Maximum size is 10MB.'
      : err.message === 'Unsupported file type'
        ? 'Unsupported file type.'
        : 'Invalid form submission.';

  res.status(400).json({
    success: false,
    message,
  });
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;