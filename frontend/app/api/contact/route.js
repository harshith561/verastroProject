import { contactSchema, ALLOWED_PROJECT_FILES } from '@/lib/validation';
import { sendContactEmail } from '@/lib/smtp';
import { sanitizeFilename, isSpam, checkRateLimit, getClientIp } from '@/lib/utils';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    // Rate limiting
    const ip = getClientIp(request);
    if (!checkRateLimit(ip, 5, 60000)) {
      return Response.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    const body = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      phone: formData.get('phone') || '',
      company: formData.get('company') || '',
      service: formData.get('service') || '',
      location: formData.get('location') || '',
      message: formData.get('message') || '',
      consent: formData.get('consent') === 'true' ? true : undefined,
      honeypot: formData.get('honeypot') || '',
    };

    // Spam check
    if (isSpam(body.honeypot)) {
      return Response.json({ success: true, message: 'Message received.' }, { status: 200 });
    }

    // Validate
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return Response.json(
        { success: false, message: 'Please correct the errors below.', errors },
        { status: 400 }
      );
    }

    // Handle file upload (optional)
    const file = formData.get('projectFile');
    if (file && file.size > 0) {
      const sizeMB = file.size / (1024 * 1024);
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();

      if (!ALLOWED_PROJECT_FILES.extensions.includes(ext)) {
        return Response.json(
          { success: false, message: 'Invalid file type for project upload.' },
          { status: 400 }
        );
      }
      if (!ALLOWED_PROJECT_FILES.mimeTypes.includes(file.type)) {
        return Response.json(
          { success: false, message: 'Invalid file format.' },
          { status: 400 }
        );
      }
      if (sizeMB > ALLOWED_PROJECT_FILES.maxSizeMB) {
        return Response.json(
          { success: false, message: `File too large. Maximum size is ${ALLOWED_PROJECT_FILES.maxSizeMB}MB.` },
          { status: 400 }
        );
      }
      // File is valid — for now we just note it was uploaded
      // In production you could attach it to email or upload to storage
    }

    await sendContactEmail(result.data);

    return Response.json(
      { success: true, message: 'Your message has been sent. We will respond within 24 business hours.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact form error:', err);
    return Response.json(
      { success: false, message: 'An error occurred. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
