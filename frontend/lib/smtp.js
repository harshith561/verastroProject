import nodemailer from 'nodemailer';

/**
 * HTML Escaping helper to prevent email injection
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Create a reusable transporter object using SMTP transport.
 * Credentials are read from server-side environment variables only.
 * Supports both SMTP_PASS and SMTP_PASSWORD, and SMTP_USER and MAIL_USER.
 */
function createTransporter() {
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER || process.env.MAIL_USER || '';
  const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || '';
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

/**
 * Send contact / quote request email with rich HTML formatting
 * Sends notification to team and auto-confirmation to customer
 * @param {Object} data - Form data
 * @param {{ buffer: Buffer, filename: string, mimetype: string }} [attachment] - Optional uploaded file
 */
export async function sendContactEmail(data, attachment = null) {
  const transporter = createTransporter();

  const name = escapeHtml(data.name || 'Not provided');
  const email = escapeHtml(data.email || 'Not provided');
  const phone = escapeHtml(data.phone || 'Not provided');
  const company = escapeHtml(data.company || 'Not provided');
  const service = escapeHtml(data.service || 'Lawn & Grounds Maintenance');
  const location = escapeHtml(data.location || 'Florida');
  const serviceAddress = escapeHtml(data.serviceAddress || 'Not provided');
  const propertyType = escapeHtml(data.propertyType || 'Not specified');
  const groundsSize = escapeHtml(data.groundsSize || 'Not specified');
  const frequencyPreference = escapeHtml(data.frequencyPreference || 'Not specified');
  const preferredSchedule = escapeHtml(data.preferredSchedule || 'Not specified');
  const message = escapeHtml(data.message || 'No additional details provided.');

  const fileInfo = attachment
    ? `${escapeHtml(attachment.filename)} (${(attachment.buffer.length / (1024 * 1024)).toFixed(2)} MB)`
    : null;

  const recipient = process.env.MAIL_TO || process.env.CONTACT_EMAIL || 'inquries@verastro.com';
  const fromAddress =
    process.env.SMTP_FROM || process.env.SMTP_USER || 'inquries@verastro.com';

  // 1. Internal Team Notification HTML
  const internalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Maintenance Quote Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td style="background-color: #101A3A; border-top: 4px solid #20B9AD; padding: 28px 32px;">
              <div style="font-size: 20px; font-weight: 800; letter-spacing: 0.12em; color: #ffffff; text-transform: uppercase;">
                VERASTRO <span style="color: #20B9AD;">INFRA</span>
              </div>
              <div style="color: #94a3b8; font-size: 13px; margin-top: 4px;">
                Florida Landscaping &amp; Property Maintenance
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 700; color: #101A3A;">
                New Maintenance Quote Request
              </h1>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 24px;">
                <tr><td colspan="2" style="background-color: #0f172a; padding: 10px 16px; font-size: 12px; font-weight: 700; color: #ffffff; text-transform: uppercase;">Customer Details</td></tr>
                <tr><td width="38%" style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Name:</td><td width="62%" style="padding: 10px 16px; font-size: 14px; font-weight: 600; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${name}</td></tr>
                <tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Email:</td><td style="padding: 10px 16px; font-size: 14px; color: #0284c7; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td></tr>
                <tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone:</td><td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${data.phone ? `<a href="tel:${phone}" style="color: #101A3A; text-decoration: none;">${phone}</a>` : 'Not provided'}</td></tr>
                ${data.company ? `<tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569;">Company:</td><td style="padding: 10px 16px; font-size: 14px; color: #101A3A;">${company}</td></tr>` : ''}
              </table>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 24px;">
                <tr><td colspan="2" style="background-color: #0f172a; padding: 10px 16px; font-size: 12px; font-weight: 700; color: #ffffff; text-transform: uppercase;">Service Scope</td></tr>
                <tr><td width="38%" style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Service Requested:</td><td width="62%" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #20B9AD; border-bottom: 1px solid #e2e8f0;">${service}</td></tr>
                <tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Florida Region:</td><td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${location}</td></tr>
                <tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Property Address:</td><td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${serviceAddress}</td></tr>
                <tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Property Type:</td><td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${propertyType}</td></tr>
                <tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Grounds Size:</td><td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${groundsSize}</td></tr>
                <tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Frequency Preference:</td><td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${frequencyPreference}</td></tr>
                <tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569;">Preferred Schedule:</td><td style="padding: 10px 16px; font-size: 14px; color: #101A3A;">${preferredSchedule}</td></tr>
              </table>
              <div style="margin-bottom: 24px;">
                <div style="font-size: 13px; font-weight: 700; color: #101A3A; text-transform: uppercase; margin-bottom: 8px;">Service Requirements</div>
                <div style="background-color: #f8fafc; border-left: 4px solid #20B9AD; border: 1px solid #e2e8f0; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</div>
              </div>
              ${fileInfo ? `<div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 12px 16px; margin-bottom: 24px; font-size: 13px; color: #1e40af;"><strong>Attachment:</strong> ${fileInfo}</div>` : ''}
              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 12px 16px; font-size: 13px; color: #166534;">
                &#9993; <strong>Reply directly</strong> to this email to contact <strong>${name}</strong> at <a href="mailto:${email}" style="color: #166534; font-weight: 700;">${email}</a>.
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; font-size: 12px; color: #64748b;">
              Verastro Infra &bull; Jacksonville, FL Main Office &bull; Destination: <code>inquries@verastro.com</code>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const internalText =
    `NEW MAINTENANCE QUOTE REQUEST — VERASTRO INFRA\n` +
    `================================================\n\n` +
    `Name: ${data.name || '-'}\nEmail: ${data.email || '-'}\nPhone: ${data.phone || '-'}\nCompany: ${data.company || '-'}\n\n` +
    `Service: ${data.service || '-'}\nRegion: ${data.location || '-'}\nAddress: ${data.serviceAddress || '-'}\n` +
    `Property Type: ${data.propertyType || '-'}\nGrounds Size: ${data.groundsSize || '-'}\n` +
    `Frequency: ${data.frequencyPreference || '-'}\nSchedule: ${data.preferredSchedule || '-'}\n\n` +
    `Requirements:\n${data.message || '-'}\n\n` +
    (fileInfo ? `Attachment: ${fileInfo}\n\n` : '') +
    `Reply to: ${data.email}`;

  const mailOptions = {
    from: `"Verastro Infra Website" <${fromAddress}>`,
    to: recipient,
    replyTo: data.email,
    subject: `Quote Request: ${data.name} — ${data.service || 'Grounds Maintenance'}`,
    text: internalText,
    html: internalHtml,
  };

  if (attachment) {
    mailOptions.attachments = [
      {
        filename: attachment.filename,
        content: attachment.buffer,
        contentType: attachment.mimetype,
      },
    ];
  }

  // Send internal notification to inquries@verastro.com
  await transporter.sendMail(mailOptions);

  // Send auto-reply confirmation to customer
  try {
    const customerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote Request Received</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td style="background-color: #101A3A; border-top: 4px solid #20B9AD; padding: 28px 32px;">
              <div style="font-size: 20px; font-weight: 800; letter-spacing: 0.12em; color: #ffffff; text-transform: uppercase;">
                VERASTRO <span style="color: #20B9AD;">INFRA</span>
              </div>
              <div style="color: #94a3b8; font-size: 13px; margin-top: 4px;">
                Florida Landscaping, Grounds Care &amp; Property Maintenance
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 700; color: #101A3A;">
                Thank you for contacting Verastro Infra
              </h1>
              <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155; line-height: 1.6;">
                Hi <strong>${name}</strong>,
              </p>
              <p style="margin: 0 0 24px 0; font-size: 15px; color: #334155; line-height: 1.6;">
                We have received your maintenance quote request. Our team will contact you to discuss your request.
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 24px;">
                <tr><td colspan="2" style="background-color: #101A3A; padding: 10px 16px; font-size: 12px; font-weight: 700; color: #ffffff; text-transform: uppercase;">Request Summary</td></tr>
                <tr><td width="42%" style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Service Requested:</td><td width="58%" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #20B9AD; border-bottom: 1px solid #e2e8f0;">${service}</td></tr>
                <tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Service Area:</td><td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${location}</td></tr>
                <tr><td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569;">Frequency Preference:</td><td style="padding: 10px 16px; font-size: 14px; color: #101A3A;">${frequencyPreference}</td></tr>
              </table>
              <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 16px 20px;">
                <div style="font-size: 13px; font-weight: 700; color: #101A3A; text-transform: uppercase; margin-bottom: 6px;">Main Office &amp; Inquiries</div>
                <div style="font-size: 13px; color: #334155; line-height: 1.6;">
                  10151 Deerwood Park Blvd, Building 200, Suite 250<br>
                  Jacksonville, FL 32256<br>
                  <strong>Phone:</strong> <a href="tel:+19043029170" style="color: #0284c7; text-decoration: none;">(904) 302-9170</a><br>
                  <strong>Email:</strong> <a href="mailto:inquries@verastro.com" style="color: #0284c7; text-decoration: none;">inquries@verastro.com</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #101A3A; padding: 24px 32px; font-size: 12px; color: #94a3b8; text-align: center; line-height: 1.6;">
              <div style="color: #ffffff; font-weight: 700; font-size: 13px; margin-bottom: 4px;">Verastro Infra</div>
              <div>A division of Verastro Inc.<br>Landscaping, grounds care &amp; property maintenance.</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const customerText =
      `Thank you for contacting Verastro Infra\n\n` +
      `Hi ${data.name},\n\n` +
      `We have received your maintenance quote request. Our team will contact you to discuss your request.\n\n` +
      `Request Summary:\n` +
      `- Service: ${data.service}\n` +
      `- Area: ${data.location}\n\n` +
      `Main Office:\n` +
      `10151 Deerwood Park Blvd, Building 200, Suite 250, Jacksonville, FL 32256\n` +
      `(904) 302-9170 | inquries@verastro.com\n\n` +
      `Regards,\n` +
      `Verastro Infra\n` +
      `A division of Verastro Inc.`;

    await transporter.sendMail({
      from: `"Verastro Infra" <${fromAddress}>`,
      to: data.email,
      replyTo: 'inquries@verastro.com',
      subject: 'We received your maintenance quote request — Verastro Infra',
      text: customerText,
      html: customerHtml,
    });
  } catch (confErr) {
    console.warn('Customer auto-reply skipped or failed:', confErr.message);
  }
}

/**
 * Send consultation / quote request email (alias)
 */
export async function sendConsultationEmail(data, attachment = null) {
  return sendContactEmail(data, attachment);
}

/**
 * Send career application email with resume attachment (Preserved for future recruitment workflow)
 * Recipient: manideep@verastro.com
 */
export async function sendCareerEmail(data, resumeFile) {
  const transporter = createTransporter();
  const { name, email, phone, position, message } = data;

  const recruitmentRecipient = process.env.CAREERS_EMAIL || 'manideep@verastro.com';
  const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER || 'inquries@verastro.com';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="color: #101A3A; border-bottom: 2px solid #20B9AD; padding-bottom: 10px;">
        Career Application (Archived Workflow)
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${escapeHtml(name)}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${escapeHtml(phone || 'Not provided')}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Position:</td><td style="padding: 8px;">${escapeHtml(position)}</td></tr>
      </table>
      ${
        message
          ? `<h3 style="color: #101A3A; margin-top: 20px;">Cover Message</h3>
        <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #20B9AD; line-height: 1.6;">${escapeHtml(message)}</p>`
          : ''
      }
      <hr style="margin-top: 30px; border: none; border-top: 1px solid #e5e7eb;" />
      <p style="color: #6b7280; font-size: 12px;">
        Submitted via the Verastro Infra careers page. Recruitment mailbox: manideep@verastro.com.
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"Verastro Infra Recruitment" <${fromAddress}>`,
    to: recruitmentRecipient,
    replyTo: email,
    subject: `Career Application: ${name} — ${position}`,
    html,
  };

  if (resumeFile) {
    mailOptions.attachments = [
      {
        filename: resumeFile.filename,
        content: resumeFile.buffer,
        contentType: resumeFile.mimetype,
      },
    ];
  }

  await transporter.sendMail(mailOptions);
}
