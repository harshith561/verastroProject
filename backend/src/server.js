import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.post('/api/contact', upload.single('projectFile'), async (req, res) => {
  try {
    const { name, email, phone, company, service, location, message, honeypot } = req.body;
    
    if (honeypot) return res.status(200).json({ success: true, message: 'Received' });

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const mailOptions = {
      from: `"Verastro Infra Projects" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${name} - ${service}`,
      html,
    };

    if (req.file) {
      mailOptions.attachments = [{
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: req.file.mimetype,
      }];
    }

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

app.post('/api/careers', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, position, message, honeypot } = req.body;

    if (honeypot) return res.status(200).json({ success: true, message: 'Received' });

    const html = `
      <h2>New Career Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const mailOptions = {
      from: `"Verastro Infra Projects" <${process.env.SMTP_FROM}>`,
      to: process.env.CAREERS_EMAIL,
      replyTo: email,
      subject: `Career Application: ${name} - ${position}`,
      html,
    };

    if (req.file) {
      mailOptions.attachments = [{
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: req.file.mimetype,
      }];
    }

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Application sent successfully' });
  } catch (error) {
    console.error('Careers error:', error);
    res.status(500).json({ success: false, message: 'Failed to send application' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
