'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/lib/validation';
import { CheckCircle, AlertCircle, Loader2, ArrowRight, Check, UploadCloud } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const SERVICE_OPTIONS = [
  'Land Development',
  'Subdivision & Plot Layout Design',
  'Infrastructure Development',
  'Property Investment Consulting',
  'Site Development & Utilities',
  'Project Management & Support',
  'Site Grading & Leveling',
  'Sod & Turf Installation',
  'Paver & Hardscape',
  'Drainage & Erosion Control',
  'Other',
];

const LOCATION_OPTIONS = [
  'Delaware',
  'Florida',
  'Texas',
  'Arkansas',
  'Other / Multiple Locations',
];

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('');
  const [fileName, setFileName] = useState('');

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { consent: false },
  });

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, val]) => {
        if (key !== 'projectFile' && val !== undefined && val !== null) {
          formData.append(key, String(val));
        }
      });
      const projectFile = getValues('projectFile')?.[0];
      if (projectFile) {
        formData.append('projectFile', projectFile);
      }

      const res = await fetch(`${API_URL}/api/consultation`, {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setServerMessage(json.message);
      } else {
        setStatus('error');
        setServerMessage(json.message || "We couldn't send your request. Please try again.");
      }
    } catch {
      setStatus('error');
      setServerMessage(
        "We couldn't send your request. Please try again. If the issue continues, call (904) 302-9170 or email inquiries@verastroinfra.com."
      );
    }
  };

  const { ref: fileRef, ...fileRest } = register('projectFile');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const locked = status === 'loading' || status === 'success';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Honeypot */}
      <input
        type="text"
        {...register('honeypot')}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {status === 'success' && (
        <div className="flex items-start gap-3 p-4 rounded bg-green-50 border border-green-200">
          <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-teal)' }} />
          <div>
            <p className="text-sm font-semibold text-green-900 mb-1">Thank you. Your request has been received.</p>
            <p className="text-sm text-green-800">Our team responds within 24 business hours.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 rounded bg-red-50 border border-red-200">
          <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-800 leading-relaxed">{serverMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="form-label">Name</label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="Your full name"
            {...register('name')}
            disabled={locked}
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="form-label">Email</label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="you@example.com"
            {...register('email')}
            disabled={locked}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="form-label">Phone</label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            className={`form-input ${errors.phone ? 'error' : ''}`}
            placeholder="Your phone number"
            {...register('phone')}
            disabled={locked}
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-company" className="form-label">Company</label>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            className="form-input"
            placeholder="Company or organization"
            {...register('company')}
            disabled={locked}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-service" className="form-label">Service</label>
          <select
            id="contact-service"
            className={`form-input ${errors.service ? 'error' : ''}`}
            {...register('service')}
            disabled={locked}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p className="form-error">{errors.service.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-location" className="form-label">Location</label>
          <select
            id="contact-location"
            className={`form-input ${errors.location ? 'error' : ''}`}
            {...register('location')}
            disabled={locked}
          >
            <option value="">Select a location</option>
            {LOCATION_OPTIONS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
          {errors.location && <p className="form-error">{errors.location.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="form-label">Project Description</label>
        <textarea
          id="contact-message"
          rows={4}
          className={`form-input resize-y ${errors.message ? 'error' : ''}`}
          placeholder="Tell us about the property, project scope and requirements."
          {...register('message')}
          disabled={locked}
        />
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-file" className="form-label">Project Photo / Drawing Upload</label>
        <div className="relative">
          <input
            id="contact-file"
            type="file"
            accept=".jpg,.jpeg,.png,.webp,.pdf"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-default"
            {...fileRest}
            ref={(e) => {
              fileRef(e);
            }}
            onChange={(e) => {
              fileRest.onChange(e);
              handleFileChange(e);
            }}
            disabled={locked}
          />
          <div className={`border border-dashed border-gray-300 rounded p-4 flex flex-col items-start gap-1 bg-gray-50 ${locked ? 'opacity-60' : ''}`}>
            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-navy)' }}>
              <UploadCloud size={16} style={{ color: 'var(--color-teal)' }} />
              {fileName || 'Choose a file or drag it here'}
            </div>
            <p className="text-xs text-gray-500 mt-1 pl-6">JPG, JPEG, PNG, WEBP, PDF</p>
          </div>
        </div>
      </div>

      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded border-gray-300 flex-shrink-0"
            style={{ accentColor: 'var(--color-teal)' }}
            {...register('consent')}
            disabled={locked}
          />
          <span className="text-xs text-gray-500">
            I consent to VERASTRO INFRA using this information to respond to my inquiry. I have read the Privacy Policy.
          </span>
        </label>
        {errors.consent && <p className="form-error mt-1">{errors.consent.message}</p>}
      </div>

      <div className="mt-2">
        <button
          type="submit"
          disabled={locked}
          className="btn-primary w-full sm:w-auto justify-center disabled:opacity-80"
          style={locked || status === 'error' ? { width: '100%' } : {}}
          id="contact-form-submit"
        >
          {status === 'loading' && (
            <>
              Sending Request...
              <Loader2 size={16} className="animate-spin ml-2" />
            </>
          )}
          {status === 'success' && (
            <>
              Request Submitted
              <Check size={16} className="ml-2" />
            </>
          )}
          {status === 'error' && (
            <>
              Try Again
              <ArrowRight size={16} className="ml-2" />
            </>
          )}
          {status === 'idle' && 'Request a Consultation'}
        </button>
        {status === 'loading' && (
          <p className="text-xs text-gray-500 mt-3">Please wait while your request is sent.</p>
        )}
      </div>
    </form>
  );
}