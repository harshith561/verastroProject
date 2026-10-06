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
 * Send contact form email
 * @param {Object} data - Contact form data
 */
export async function sendContactEmail(data) {
  const transporter = createTransporter();
  const { name, email, phone, company, service, location, message } = data;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #101A3A; border-bottom: 2px solid #20B9AD; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${name}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${company || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${service}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Location:</td><td style="padding: 8px;">${location}</td></tr>
      </table>
      <h3 style="color: #101A3A; margin-top: 20px;">Project Description</h3>
      <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #20B9AD; line-height: 1.6;">
        ${message}
      </p>
      <hr style="margin-top: 30px; border: none; border-top: 1px solid #e5e7eb;" />
      <p style="color: #6b7280; font-size: 12px;">
        This message was sent via the VERASTRO INFRA contact form at verastroinfra.com
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"VERASTRO INFRA" <${process.env.SMTP_FROM}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `Contact Form: ${name} — ${service}`,
    html,
  });
}

/**
 * Send consultation request email
 * @param {Object} data - Consultation form data
 */
export async function sendConsultationEmail(data) {
  const transporter = createTransporter();
  const { name, email, phone, company, service, location, message } = data;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #101A3A; border-bottom: 2px solid #20B9AD; padding-bottom: 10px;">
        New Consultation Request
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${name}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${company || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${service}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Location:</td><td style="padding: 8px;">${location}</td></tr>
      </table>
      <h3 style="color: #101A3A; margin-top: 20px;">Message</h3>
      <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #20B9AD; line-height: 1.6;">
        ${message}
      </p>
      <hr style="margin-top: 30px; border: none; border-top: 1px solid #e5e7eb;" />
      <p style="color: #6b7280; font-size: 12px;">
        This message was sent via the VERASTRO INFRA consultation form at verastroinfra.com
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"VERASTRO INFRA" <${process.env.SMTP_FROM}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `Consultation Request: ${name} — ${service}`,
    html,
  });
}

/**
 * Send career application email with resume attachment
 * @param {Object} data - Career form data
 * @param {{ buffer: Buffer, filename: string, mimetype: string }} resumeFile
 */
export async function sendCareerEmail(data, resumeFile) {
  const transporter = createTransporter();
  const { name, email, phone, position, message } = data;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #101A3A; border-bottom: 2px solid #20B9AD; padding-bottom: 10px;">
        New Career Application
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
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
        This application was submitted via the VERASTRO INFRA careers page at verastroinfra.com
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"VERASTRO INFRA" <${process.env.SMTP_FROM}>`,
    to: process.env.CAREERS_EMAIL,
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
