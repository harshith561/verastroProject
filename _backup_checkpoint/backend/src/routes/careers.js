import { Router } from 'express';
import { transporter, toAttachment } from '../config/mailer.js';
import { upload } from '../middleware/upload.js';

const router = Router();

// Future recruitment mailbox configuration
const recruitmentRecipient = process.env.CAREERS_MAIL_TO || 'manideep@verastro.com';

// Closed position list
const CLOSED_POSITIONS = [
  'Civil Engineer – PE',
  'Civil Engineering Analyst / Project Assistant',
  'Civil CAD Technician',
  'Civil Project Engineer',
  'General Application',
];

router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, position, message, honeypot } = req.body;

    if (honeypot) return res.json({ success: true, message: 'Application received.' });

    // BACKEND ENFORCEMENT: Reject applications for all closed positions (all current positions are closed)
    // No current openings are active at this time.
    return res.status(400).json({
      success: false,
      message:
        'No current openings. We are not hiring at this time. Please check back for future opportunities.',
    });

    /* =========================================================================
     * PRESERVED RECRUITMENT WORKFLOW (For future reopening authorized by owner)
     * Recipient: manideep@verastro.com
     * =========================================================================
    if (!name || !email || !position || !req.file) {
      return res.status(400).json({ success: false, message: 'Required fields missing.' });
    }

    await transporter.sendMail({
      from: `"Verastro Infra Recruitment" <${process.env.SMTP_USER}>`,
      to: recruitmentRecipient,
      replyTo: email,
      subject: `Job application: ${position} - ${name}`,
      text:
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nPosition: ${position}\n\n` +
        `Cover message:\n${message || '-'}`,
      attachments: toAttachment(req.file),
    });

    try {
      await transporter.sendMail({
        from: `"Verastro Infra Recruitment" <${process.env.SMTP_USER}>`,
        to: email,
        replyTo: recruitmentRecipient,
        subject: 'We received your application',
        text:
          `Hi ${name},\n\nThank you for your interest in Verastro Infra. ` +
          `Our hiring team will review your application when opportunities become available.\n\n` +
          `Regards,\nVerastro Infra Recruitment\n(904) 302-9170`,
      });
    } catch (err) {
      console.error('Confirmation email failed:', err.message);
    }

    res.json({ success: true, message: 'Application received.' });
    ========================================================================= */
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "We couldn't process your request. Please try again or call (904) 302-9170.",
    });
  }
});

export default router;