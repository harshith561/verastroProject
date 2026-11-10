/**
 * HTML and Plain Text Email Templates for Verastro Infra
 * Optimized for desktop and mobile email clients (Gmail, Outlook, Apple Mail, iOS/Android)
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
 * Builds the internal team notification email (receiver)
 */
export function buildInternalQuoteEmail(data, file) {
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

  const fileInfo = file
    ? `${escapeHtml(file.originalname)} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`
    : null;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Maintenance Quote Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04); border: 1px solid #e2e8f0;" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #101A3A; border-top: 4px solid #20B9AD; padding: 28px 32px; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-size: 20px; font-weight: 800; letter-spacing: 0.12em; color: #ffffff;">
                      Verastro <span style="color: #20B9AD;">Infra</span>
                    </div>
                    <div style="color: #94a3b8; font-size: 13px; margin-top: 4px; letter-spacing: 0.02em;">
                      Florida Landscaping &amp; Property Maintenance
                    </div>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="background-color: rgba(32, 185, 173, 0.15); color: #20B9AD; border: 1px solid rgba(32, 185, 173, 0.4); font-size: 11px; font-weight: 600; padding: 5px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block;">
                      New Quote Request
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              <h1 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 700; color: #101A3A; line-height: 1.3;">
                Maintenance Quote Request Details
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748b; line-height: 1.5;">
                A new service inquiry has been submitted through the website. Click &ldquo;Reply&rdquo; to respond directly to the customer.
              </p>

              <!-- Customer Info Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 24px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="background-color: #0f172a; padding: 10px 16px; font-size: 12px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.05em;">
                    Customer Information
                  </td>
                </tr>
                <tr>
                  <td width="38%" style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Full Name:</td>
                  <td width="62%" style="padding: 10px 16px; font-size: 14px; font-weight: 600; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Email:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #0284c7; border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${email}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">
                    ${data.phone ? `<a href="tel:${phone}" style="color: #101A3A; text-decoration: none; font-weight: 500;">${phone}</a>` : 'Not provided'}
                  </td>
                </tr>
                ${data.company ? `
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569;">Company:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A;">${company}</td>
                </tr>` : ''}
              </table>

              <!-- Property & Service Scope Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 24px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="background-color: #0f172a; padding: 10px 16px; font-size: 12px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.05em;">
                    Property &amp; Service Requirements
                  </td>
                </tr>
                <tr>
                  <td width="38%" style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Service Requested:</td>
                  <td width="62%" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #20B9AD; border-bottom: 1px solid #e2e8f0;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Florida Region:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${location}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Property Address:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${serviceAddress}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Property Type:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${propertyType}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Grounds Size:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${groundsSize}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Frequency Preference:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${frequencyPreference}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569;">Preferred Schedule:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A;">${preferredSchedule}</td>
                </tr>
              </table>

              <!-- Requirements / Message Card -->
              <div style="margin-bottom: 24px;">
                <div style="font-size: 13px; font-weight: 700; color: #101A3A; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
                  Service Scope Details &amp; Notes
                </div>
                <div style="background-color: #f8fafc; border-left: 4px solid #20B9AD; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b; border-radius: 0 6px 6px 0; white-space: pre-wrap;">
${message}
                </div>
              </div>

              ${fileInfo ? `
              <!-- Attachment Banner -->
              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 12px 16px; margin-bottom: 24px; font-size: 13px; color: #1e40af;">
                <strong>Attached Document / Photo:</strong> ${fileInfo}
              </div>` : ''}

              <!-- Direct Reply Callout -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 12px 16px;">
                <tr>
                  <td style="font-size: 13px; color: #166534; line-height: 1.5;">
                    &#9993; <strong>Reply-To Configured:</strong> Hit &ldquo;Reply&rdquo; in your email client to message <strong>${name}</strong> directly at <a href="mailto:${email}" style="color: #166534; font-weight: 700;">${email}</a>.
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; font-size: 12px; color: #64748b; line-height: 1.6;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <strong>Verastro Infra</strong> &bull; Jacksonville, FL Main Office<br>
                    Automated notification sent to <code>inquries@verastro.com</code> via <a href="https://verastroinfra.com" style="color: #64748b; text-decoration: none;">verastroinfra.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text =
    `NEW MAINTENANCE QUOTE REQUEST — Verastro Infra\n` +
    `================================================\n\n` +
    `CUSTOMER INFORMATION:\n` +
    `Name: ${data.name || '-'}\n` +
    `Email: ${data.email || '-'}\n` +
    `Phone: ${data.phone || '-'}\n` +
    `Company: ${data.company || '-'}\n\n` +
    `PROPERTY & SERVICE SCOPE:\n` +
    `Service Requested: ${data.service || '-'}\n` +
    `Florida Region: ${data.location || '-'}\n` +
    `Property Address: ${data.serviceAddress || '-'}\n` +
    `Property Type: ${data.propertyType || '-'}\n` +
    `Approximate Grounds Size: ${data.groundsSize || '-'}\n` +
    `Frequency Preference: ${data.frequencyPreference || '-'}\n` +
    `Preferred Schedule: ${data.preferredSchedule || '-'}\n\n` +
    `SERVICE REQUIREMENTS / NOTES:\n` +
    `${data.message || '-'}\n\n` +
    (fileInfo ? `ATTACHMENT: ${fileInfo}\n\n` : '') +
    `Reply directly to this email to respond to ${data.email}.`;

  return {
    subject: `Quote Request: ${data.name} — ${data.service || 'Grounds Maintenance'}`,
    html,
    text,
  };
}

/**
 * Builds the customer auto-reply confirmation email (sender)
 */
export function buildCustomerConfirmationEmail(data) {
  const name = escapeHtml(data.name || 'there');
  const service = escapeHtml(data.service || 'Lawn & Grounds Maintenance');
  const location = escapeHtml(data.location || 'Florida');
  const frequencyPreference = escapeHtml(data.frequencyPreference || 'Routine Grounds Care');
  const preferredSchedule = escapeHtml(data.preferredSchedule || 'To be confirmed');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote Request Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04); border: 1px solid #e2e8f0;" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #101A3A; border-top: 4px solid #20B9AD; padding: 28px 32px; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-size: 20px; font-weight: 800; letter-spacing: 0.12em; color: #ffffff; text-transform: uppercase;">
                      Verastro <span style="color: #20B9AD;">Infra</span>
                    </div>
                    <div style="color: #94a3b8; font-size: 13px; margin-top: 4px; letter-spacing: 0.02em;">
                      Florida Landscaping, Grounds Care &amp; Property Maintenance
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 700; color: #101A3A; line-height: 1.3;">
                Thank you for contacting Verastro Infra
              </h1>
              
              <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155; line-height: 1.6;">
                Hi <strong>${name}</strong>,
              </p>
              
              <p style="margin: 0 0 24px 0; font-size: 15px; color: #334155; line-height: 1.6;">
                We have received your maintenance quote request. Our team will contact you to discuss your request, clarify scope details, and assist with scheduling.
              </p>

              <!-- Request Summary Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 28px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="background-color: #101A3A; padding: 10px 16px; font-size: 12px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.05em;">
                    Your Request Summary
                  </td>
                </tr>
                <tr>
                  <td width="42%" style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Service Requested:</td>
                  <td width="58%" style="padding: 10px 16px; font-size: 14px; font-weight: 700; color: #20B9AD; border-bottom: 1px solid #e2e8f0;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Service Area:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${location}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0;">Frequency Preference:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A; border-bottom: 1px solid #e2e8f0;">${frequencyPreference}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 600; color: #475569;">Preferred Schedule:</td>
                  <td style="padding: 10px 16px; font-size: 14px; color: #101A3A;">${preferredSchedule}</td>
                </tr>
              </table>

              <!-- What Happens Next Process -->
              <div style="margin-bottom: 28px;">
                <h2 style="margin: 0 0 14px 0; font-size: 15px; font-weight: 700; color: #101A3A; text-transform: uppercase; letter-spacing: 0.05em;">
                  What Happens Next
                </h2>
                
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td width="32" style="vertical-align: top; padding-right: 12px; padding-bottom: 14px;">
                      <div style="width: 28px; height: 28px; background-color: #20B9AD; color: #ffffff; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; font-size: 13px;">1</div>
                    </td>
                    <td style="vertical-align: top; padding-bottom: 14px;">
                      <div style="font-size: 14px; font-weight: 600; color: #101A3A;">Scope &amp; Requirements Review</div>
                      <div style="font-size: 13px; color: #64748b; margin-top: 2px;">We examine your property details and grounds care requirements.</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="32" style="vertical-align: top; padding-right: 12px; padding-bottom: 14px;">
                      <div style="width: 28px; height: 28px; background-color: #20B9AD; color: #ffffff; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; font-size: 13px;">2</div>
                    </td>
                    <td style="vertical-align: top; padding-bottom: 14px;">
                      <div style="font-size: 14px; font-weight: 600; color: #101A3A;">Direct Consultation</div>
                      <div style="font-size: 13px; color: #64748b; margin-top: 2px;">Our team reaches out via phone or email to discuss options and scheduling.</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="32" style="vertical-align: top; padding-right: 12px;">
                      <div style="width: 28px; height: 28px; background-color: #20B9AD; color: #ffffff; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 700; font-size: 13px;">3</div>
                    </td>
                    <td style="vertical-align: top;">
                      <div style="font-size: 14px; font-weight: 600; color: #101A3A;">Confirmed Scope &amp; Schedule</div>
                      <div style="font-size: 13px; color: #64748b; margin-top: 2px;">We establish transparent expectations and confirm your service dates.</div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Main Office Contact Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 16px 20px;">
                <tr>
                  <td>
                    <div style="font-size: 13px; font-weight: 700; color: #101A3A; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">
                      Main Office &amp; Inquiries
                    </div>
                    <div style="font-size: 13px; color: #334155; line-height: 1.6;">
                      10151 Deerwood Park Blvd, Building 200, Suite 250<br>
                      Jacksonville, FL 32256<br>
                      <strong>Phone:</strong> <a href="tel:+19043029170" style="color: #0284c7; text-decoration: none;">(904) 302-9170</a><br>
                      <strong>Email:</strong> <a href="mailto:inquries@verastro.com" style="color: #0284c7; text-decoration: none;">inquries@verastro.com</a>
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #101A3A; padding: 24px 32px; font-size: 12px; color: #94a3b8; line-height: 1.6; text-align: center;">
              <div style="color: #ffffff; font-weight: 700; font-size: 13px; margin-bottom: 4px;">
                Verastro Infra
              </div>
              <div style="color: #94a3b8; font-size: 12px;">
                A division of Verastro Inc.<br>
                Landscaping, grounds care &amp; property maintenance.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text =
    `Thank you for contacting Verastro Infra\n\n` +
    `Hi ${name},\n\n` +
    `We have received your maintenance quote request. Our team will contact you to discuss your request.\n\n` +
    `REQUEST SUMMARY:\n` +
    `- Service Requested: ${service}\n` +
    `- Service Area: ${location}\n` +
    `- Frequency Preference: ${frequencyPreference}\n` +
    `- Preferred Schedule: ${preferredSchedule}\n\n` +
    `MAIN OFFICE:\n` +
    `10151 Deerwood Park Blvd, Building 200, Suite 250\n` +
    `Jacksonville, FL 32256\n` +
    `Phone: (904) 302-9170\n` +
    `Email: inquries@verastro.com\n\n` +
    `Regards,\n` +
    `Verastro Infra\n` +
    `A division of Verastro Inc.\n` +
    `Landscaping, grounds care & property maintenance.`;

  return {
    subject: 'We received your maintenance quote request — Verastro Infra',
    html,
    text,
  };
}
