import { consultationSchema } from '@/lib/validation';
import { sendConsultationEmail } from '@/lib/smtp';
import { isSpam, checkRateLimit, getClientIp } from '@/lib/utils';

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
      company: formData.get('company') || '',
      service: formData.get('service') || '',
      location: formData.get('location') || '',
      message: formData.get('message') || '',
      honeypot: formData.get('honeypot') || '',
    };

    if (isSpam(body.honeypot)) {
      return Response.json({ success: true, message: 'Message received.' }, { status: 200 });
    }

    const result = consultationSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return Response.json(
        { success: false, message: 'Please correct the errors below.', errors },
        { status: 400 }
      );
    }

    await sendConsultationEmail(result.data);

    return Response.json(
      { success: true, message: 'Your consultation request has been received. We will be in touch shortly.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Consultation form error:', err);
    return Response.json(
      { success: false, message: 'An error occurred. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
