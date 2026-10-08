import nodemailer from 'nodemailer';

const port = parseInt(process.env.SMTP_PORT || '587', 10);

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

export const verifySmtp = () =>
  transporter.verify((err) => {
    if (err) console.log('SMTP error:', err.message);
    else console.log('SMTP ready to send emails');
  });

export const toAttachment = (file) =>
  file
    ? [{ filename: file.originalname, content: file.buffer, contentType: file.mimetype }]
    : [];
    