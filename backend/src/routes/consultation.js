import { Router } from 'express';
import { transporter, toAttachment } from '../config/mailer.js';
import { upload } from '../middleware/upload.js';

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

    if (honeypot) return res.json({ success: true, message: 'Request received.' });

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Required fields missing.' });
    }

    // Send notification email to inquries@verastro.com
    await transporter.sendMail({
      from: `"Verastro Infra Website" <${process.env.SMTP_USER}>`,
      to: generalRecipient,
      replyTo: email,
      subject: `Maintenance Quote Request from ${name}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || '-'}\n` +
        `Company / Organization: ${company || '-'}\n` +
        `Florida Location / Region: ${location || '-'}\n` +
        `Property Address: ${serviceAddress || '-'}\n` +
        `Property Type: ${propertyType || '-'}\n` +
        `Approximate Grounds Size: ${groundsSize || '-'}\n` +
        `Frequency Preference: ${frequencyPreference || '-'}\n` +
        `Preferred Schedule: ${preferredSchedule || '-'}\n` +
        `Service Requested: ${service || '-'}\n\n` +
        `Service Requirements:\n${message}`,
      attachments: toAttachment(req.file),
    });

    // Send confirmation to customer
    try {
      await transporter.sendMail({
        from: `"Verastro Infra" <${process.env.SMTP_USER}>`,
        to: email,
        replyTo: 'inquries@verastro.com',
        subject: 'We received your maintenance quote request',
        text:
          `Hi ${name},\n\n` +
          `Thank you for contacting Verastro Infra. We have received your request and our team will contact you to discuss your request.\n\n` +
          `Main Office:\n` +
          `10151 Deerwood Park Blvd, Building 200, Suite 250, Jacksonville, FL 32256\n` +
          `(904) 302-9170 | inquries@verastro.com\n\n` +
          `Regards,\n` +
          `Verastro Infra\nA division of Verastro Inc.`,
      });
    } catch (err) {
      console.error('Confirmation email failed:', err.message);
    }

    res.json({
      success: true,
      message: 'Request received. Our team will contact you to discuss your request.',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "We couldn't send your request. Please try again or call (904) 302-9170 or email inquries@verastro.com.",
    });
  }
});

export default router;