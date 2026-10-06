import { careerSchema, ALLOWED_RESUME_FILES } from '@/lib/validation';
import { sendCareerEmail } from '@/lib/smtp';
import { sanitizeFilename, isSpam, checkRateLimit, getClientIp } from '@/lib/utils';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    if (!checkRateLimit(ip, 3, 60000)) {
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
      position: formData.get('position') || '',
      message: formData.get('message') || '',
      honeypot: formData.get('honeypot') || '',
    };

    if (isSpam(body.honeypot)) {
      return Response.json({ success: true, message: 'Application received.' }, { status: 200 });
    }

    const result = careerSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return Response.json(
        { success: false, message: 'Please correct the errors below.', errors },
        { status: 400 }
      );
    }

    // Handle resume file
    const resumeFile = formData.get('resume');
    let processedResume = null;

    if (!resumeFile || resumeFile.size === 0) {
      return Response.json(
        { success: false, message: 'Please attach your resume.' },
        { status: 400 }
      );
    }

    const sizeMB = resumeFile.size / (1024 * 1024);
    const ext = '.' + resumeFile.name.split('.').pop()?.toLowerCase();

    if (!ALLOWED_RESUME_FILES.extensions.includes(ext)) {
      return Response.json(
        { success: false, message: `Invalid resume format. Allowed: ${ALLOWED_RESUME_FILES.extensions.join(', ')}` },
        { status: 400 }
      );
    }

    if (!ALLOWED_RESUME_FILES.mimeTypes.includes(resumeFile.type)) {
      return Response.json(
        { success: false, message: 'Invalid file format detected.' },
        { status: 400 }
      );
    }

    if (sizeMB > ALLOWED_RESUME_FILES.maxSizeMB) {
      return Response.json(
        { success: false, message: `Resume file too large. Maximum size is ${ALLOWED_RESUME_FILES.maxSizeMB}MB.` },
        { status: 400 }
      );
    }

    const arrayBuffer = await resumeFile.arrayBuffer();
    processedResume = {
      buffer: Buffer.from(arrayBuffer),
      filename: sanitizeFilename(resumeFile.name),
      mimetype: resumeFile.type,
    };

    await sendCareerEmail(result.data, processedResume);

    return Response.json(
      { success: true, message: 'Your application has been submitted. We will review it and be in touch.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Career application error:', err);
    return Response.json(
      { success: false, message: 'An error occurred. Please try again or email your resume directly.' },
      { status: 500 }
    );
  }
}
