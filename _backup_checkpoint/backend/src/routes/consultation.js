import { Router } from 'express';
import { transporter, toAttachment } from '../config/mailer.js';
import { upload } from '../middleware/upload.js';
import {
  buildInternalQuoteEmail,
  buildCustomerConfirmationEmail,
} from '../config/emailTemplates.js';

const router = Router();

const generalRecipient = process.env.MAIL_TO || 'inquries@verastro.com';

router.post('/', upload.single('projectFile'), async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      serviceAddress,
      propertyType,
      groundsSize,
      frequencyPreference,
      preferredSchedule,
      service,
      location,
      message,
      honeypot,
    } = req.body;

    // Honeypot anti-spam protection
    if (honeypot) {
      return res.json({ success: true, message: 'Request received.' });
    }

    // Required fields validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required to submit a quote request.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    const submissionData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      company: company ? company.trim() : '',
      serviceAddress: serviceAddress ? serviceAddress.trim() : '',
      propertyType: propertyType || '',
      groundsSize: groundsSize || '',
      frequencyPreference: frequencyPreference || '',
      preferredSchedule: preferredSchedule || '',
      service: service || 'Lawn & Grounds Maintenance',
      location: location || 'Florida',
      message: message ? message.trim() : '',
    };

    // 1. Build & Send Internal Notification Email (Receiver)
    const internalMail = buildInternalQuoteEmail(submissionData, req.file);
    const senderAddress =
      process.env.SMTP_FROM || process.env.SMTP_USER || 'inquries@verastro.com';

    await transporter.sendMail({
      from: `"Verastro Infra Website" <${senderAddress}>`,
      to: generalRecipient,
      replyTo: submissionData.email,
      subject: internalMail.subject,
      text: internalMail.text,
      html: internalMail.html,
      attachments: toAttachment(req.file),
    });

    // 2. Build & Send Customer Confirmation Auto-Responder (Sender)
    try {
      const customerMail = buildCustomerConfirmationEmail(submissionData);
      await transporter.sendMail({
        from: `"Verastro Infra" <${senderAddress}>`,
        to: submissionData.email,
        replyTo: 'inquries@verastro.com',
        subject: customerMail.subject,
        text: customerMail.text,
        html: customerMail.html,
      });
    } catch (confErr) {
      console.warn('Customer auto-confirmation email skipped or failed:', confErr.message);
    }

    return res.json({
      success: true,
      message: 'Request received. Our team will contact you to discuss your request.',
    });
  } catch (err) {
    console.error('Quote submission error:', err);
    return res.status(500).json({
      success: false,
      message:
        "We couldn't send your request. Please try again, or reach us directly at (904) 302-9170 or inquries@verastro.com.",
    });
  }
});

export default router;