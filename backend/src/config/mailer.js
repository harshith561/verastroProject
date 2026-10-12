import nodemailer from 'nodemailer';

const port = parseInt(process.env.SMTP_PORT || '587', 10);
const host = process.env.SMTP_HOST || 'smtp.gmail.com';
const user = process.env.SMTP_USER || process.env.MAIL_USER || '';
const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || '';
const secure = process.env.SMTP_SECURE === 'true' || port === 465;

export const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: user && pass ? { user, pass } : undefined,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

export const verifySmtp = async () => {
  if (!user || !pass) {
    console.log('ℹ SMTP Notice: Credentials not fully configured in environment variables.');
    return false;
  }
  try {
    await transporter.verify();
    console.log(`✓ SMTP server connected and ready: ${host}:${port} (${user})`);
    return true;
  } catch (err) {
    console.warn('⚠ SMTP verification notice:', err.message);
    return false;
  }
};

export const toAttachment = (file) =>
  file
    ? [{ filename: file.originalname, content: file.buffer, contentType: file.mimetype }]
    : [];