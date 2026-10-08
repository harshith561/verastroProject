import { Router } from 'express';
import { transporter, toAttachment } from '../config/mailer.js';
import { upload } from '../middleware/upload.js';

const router = Router();

router.post('/', upload.single('projectFile'), async (req, res) => {
  try {
    const { name, email, phone, company, service, location, message, honeypot } = req.body;

    if (honeypot) return res.json({ success: true, message: 'Request received.' });

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Required fields missing.' });
    }

    await transporter.sendMail({
      from: `"VERASTRO INFRA Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      text:
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nCompany: ${company || '-'}\n` +
        `Service: ${service || '-'}\nLocation: ${location || '-'}\n\nProject description:\n${message}`,
      attachments: toAttachment(req.file),
    });

    try {
      await transporter.sendMail({
        from: `"VERASTRO INFRA" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'We received your consultation request',
        text:
          `Hi ${name},\n\nThank you for contacting VERASTRO INFRA. We have received your request ` +
          `and our team will respond within 24 business hours.\n\nRegards,\nVERASTRO INFRA\n(904) 302-9170`,
      });
    } catch (err) {
      console.error('Confirmation email failed:', err.message);
    }

    res.json({ success: true, message: 'Request received.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "We couldn't send your request. Please try again or call (904) 302-9170.",
    });
  }
});

export default router;