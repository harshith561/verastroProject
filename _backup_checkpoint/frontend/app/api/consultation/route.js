import { quoteSchema, ALLOWED_PROJECT_FILES } from '@/lib/validation';
import { sendConsultationEmail } from '@/lib/smtp';
import { sanitizeFilename, isSpam, checkRateLimit, getClientIp } from '@/lib/utils';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
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
      serviceAddress: formData.get('serviceAddress') || '',
      propertyType: formData.get('propertyType') || '',
      groundsSize: formData.get('groundsSize') || '',
      frequencyPreference: formData.get('frequencyPreference') || '',
      preferredSchedule: formData.get('preferredSchedule') || '',
      service: formData.get('service') || '',
      location: formData.get('location') || '',
      message: formData.get('message') || '',
      honeypot: formData.get('honeypot') || '',
    };

    if (isSpam(body.honeypot)) {
      return Response.json({ success: true, message: 'Request received.' }, { status: 200 });
    }

    const result = quoteSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return Response.json(
        { success: false, message: 'Please correct the errors below.', errors },
        { status: 400 }
      );
    }

    // Optional property photo / document upload
    const file = formData.get('projectFile');
    let processedFile = null;
    if (file && file.size > 0) {
      const sizeMB = file.size / (1024 * 1024);
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();

      if (
        !ALLOWED_PROJECT_FILES.extensions.includes(ext) ||
        !ALLOWED_PROJECT_FILES.mimeTypes.includes(file.type) ||
        sizeMB > ALLOWED_PROJECT_FILES.maxSizeMB
      ) {
        return Response.json(
          { success: false, message: 'Invalid or oversized file attachment.' },
          { status: 400 }
        );
      }

      const arrayBuffer = await file.arrayBuffer();
      processedFile = {
        buffer: Buffer.from(arrayBuffer),
        filename: sanitizeFilename(file.name),
        mimetype: file.type,
      };
    }

    await sendConsultationEmail(result.data, processedFile);

    return Response.json(
      {
        success: true,
        message: 'Your request has been received. Our team will contact you to discuss your request.',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('Consultation form error:', err);
    return Response.json(
      {
        success: false,
        message: 'An error occurred. Please try again or email us at inquries@verastro.com.',
      },
      { status: 500 }
    );
  }
}
