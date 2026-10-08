import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { verifySmtp } from './config/mailer.js';
import consultationRoutes from './routes/consultation.js';
import careersRoutes from './routes/careers.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api/consultation', consultationRoutes);
app.use('/api/careers', careersRoutes);

app.use((err, req, res, next) => {
  if (err) {
    console.error(err.message);

    const message =
      err.code === 'LIMIT_FILE_SIZE'
        ? 'File is too large. Maximum size is 10MB.'
        : err.message === 'Unsupported file type'
        ? 'Unsupported file type.'
        : 'Invalid form submission.';

    return res.status(400).json({
      success: false,
      message,
    });
  }

  next();
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    verifySmtp();
  });
}

export default app;