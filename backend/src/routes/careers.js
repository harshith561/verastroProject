import { Router } from 'express';
import { transporter, toAttachment } from '../config/mailer.js';
import { upload } from '../middleware/upload.js';

const router = Router();

router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, position, message, honeypot } = req.body;

    if (honeypot) return res.json({ success: true, message: 'Application received.' });

    if (!name || !email || !position || !req.file) {
      return res.status(400).json({ success: false, message: 'Required fields missing.' });
    }

    await transporter.sendMail({
      from: `"VERASTRO INFRA Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Job application: ${position} - ${name}`,
      text:
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nPosition: ${position}\n\n` +
        `Cover message:\n${message || '-'}`,
      attachments: toAttachment(req.file),
    });

    try {
      await transporter.sendMail({
        from: `"VERASTRO INFRA" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'We received your application',
        text:
          `Hi ${name},\n\nThank you for applying for ${position} at VERASTRO INFRA. ` +
          `Our hiring team will review your application and contact you if there is a fit.\n\nRegards,\nVERASTRO INFRA`,
      });
    } catch (err) {
      console.error('Confirmation email failed:', err.message);
    }

    res.json({ success: true, message: 'Application received.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "We couldn't send your application. Please try again or call (904) 302-9170.",
    });
  }
});

export default router;