import nodemailer from 'nodemailer';

/**
 * Create a reusable transporter object using SMTP transport.
 * Credentials are read from server-side environment variables only.
 */
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

/**
 * Send contact / quote request email
 * @param {Object} data - Form data
 * @param {{ buffer: Buffer, filename: string, mimetype: string }} [attachment] - Optional uploaded file
 */
export async function sendContactEmail(data, attachment = null) {
  const transporter = createTransporter();
  const {
    name,
    email,
    phone,
    serviceAddress,
    propertyType,
    groundsSize,
    frequencyPreference,
    service,
    location,
    message,
  } = data;

  const recipient = process.env.CONTACT_EMAIL || 'inquries@verastro.com';
  const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER || 'inquries@verastro.com';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="color: #101A3A; border-bottom: 2px solid #20B9AD; padding-bottom: 10px;">
        New Maintenance Quote Request
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr><td style="padding: 8px; font-weight: bold; width: 160px;">Customer Name:</td><td style="padding: 8px;">${name}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Service Requested:</td><td style="padding: 8px;">${service}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Florida Service Area:</td><td style="padding: 8px;">${location}</td></tr>
        ${serviceAddress ? `<tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Property Address / City / ZIP:</td><td style="padding: 8px;">${serviceAddress}</td></tr>` : ''}
        ${propertyType ? `<tr><td style="padding: 8px; font-weight: bold;">Property Type:</td><td style="padding: 8px;">${propertyType}</td></tr>` : ''}
        ${groundsSize ? `<tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Approximate Grounds Size:</td><td style="padding: 8px;">${groundsSize}</td></tr>` : ''}
        ${frequencyPreference ? `<tr><td style="padding: 8px; font-weight: bold;">Preference:</td><td style="padding: 8px;">${frequencyPreference}</td></tr>` : ''}
      </table>
      <h3 style="color: #101A3A; margin-top: 20px;">Service Requirements</h3>
      <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #20B9AD; line-height: 1.6; white-space: pre-wrap;">
        ${message}
      </p>
      <hr style="margin-top: 30px; border: none; border-top: 1px solid #e5e7eb;" />
      <p style="color: #6b7280; font-size: 12px;">
        Submitted via the Verastro Infra website (verastroinfra.com). Destination: inquries@verastro.com.
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"Verastro Infra Website" <${fromAddress}>`,
    to: recipient,
    replyTo: email,
    subject: `Quote Request: ${name} — ${service}`,
    html,
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

  await transporter.sendMail(mailOptions);
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
 * @param {Object} data - Career form data
 * @param {{ buffer: Buffer, filename: string, mimetype: string }} resumeFile
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
        <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${name}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Position:</td><td style="padding: 8px;">${position}</td></tr>
      </table>
      ${
        message
          ? `<h3 style="color: #101A3A; margin-top: 20px;">Cover Message</h3>
        <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #20B9AD; line-height: 1.6;">${message}</p>`
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
