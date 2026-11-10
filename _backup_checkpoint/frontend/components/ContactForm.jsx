'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteSchema, APPROVED_SERVICES, FLORIDA_SERVICE_REGIONS } from '@/lib/validation';
import { CheckCircle, AlertCircle, Loader2, ArrowRight, Check, UploadCloud } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

const PROPERTY_TYPES = [
  'Residential Property',
  'Commercial Property',
  'HOA / Community Common Grounds',
  'Rental / Multi-Family Property',
  'Other',
];

const GROUNDS_SIZES = [
  'Under 0.25 acre',
  '0.25 to 0.5 acre',
  '0.5 to 1 acre',
  '1 to 2 acres',
  'Over 2 acres',
  'Not sure',
];

const FREQUENCY_OPTIONS = [
  'One-Time Service',
  'Weekly Maintenance',
  'Bi-Weekly Maintenance',
  'Monthly Upkeep',
  'Service Coordination Discussion',
];

export default function ContactForm({ submitLabel = 'Request a Quote' }) {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('');
  const [fileName, setFileName] = useState('');

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(quoteSchema),
    defaultValues: { consent: false },
  });

  const onSubmit = async (data) => {
    setStatus('loading');
    setServerMessage('');
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

      const endpoint = API_URL ? `${API_URL}/api/consultation` : '/api/consultation';
      let res;
      try {
        res = await fetch(endpoint, {
          method: 'POST',
          body: formData,
        });
      } catch (fetchErr) {
        // Fallback to internal Next.js route if external API_URL is unreachable
        if (API_URL) {
          res = await fetch('/api/consultation', {
            method: 'POST',
            body: formData,
          });
        } else {
          throw fetchErr;
        }
      }

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setServerMessage(json.message || 'Our team will contact you to discuss your request.');
      } else {
        setStatus('error');
        setServerMessage(json.message || "We couldn't send your request. Please try again.");
      }
    } catch {
      setStatus('error');
      setServerMessage(
        "We couldn't send your request. Please try again. If the issue continues, call (904) 302-9170 or email inquries@verastro.com."
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
      {/* Honeypot anti-spam */}
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
            <p className="text-sm font-semibold text-green-900 mb-1">
              Thank you. Your request has been received.
            </p>
            <p className="text-sm text-green-800">
              {serverMessage || 'Our team will contact you to discuss your request.'}
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 rounded bg-red-50 border border-red-200">
          <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-800 leading-relaxed">{serverMessage}</p>
        </div>
      )}

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="form-label">
            Full Name *
          </label>
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
          <label htmlFor="contact-email" className="form-label">
            Email Address *
          </label>
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

      {/* Phone and Florida Service Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="form-label">
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            className={`form-input ${errors.phone ? 'error' : ''}`}
            placeholder="(904) 000-0000"
            {...register('phone')}
            disabled={locked}
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-location" className="form-label">
            Florida Service Area *
          </label>
          <select
            id="contact-location"
            className={`form-input ${errors.location ? 'error' : ''}`}
            {...register('location')}
            disabled={locked}
          >
            <option value="">Select Florida Area</option>
            {FLORIDA_SERVICE_REGIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          {errors.location && <p className="form-error">{errors.location.message}</p>}
        </div>
      </div>

      {/* Service Requested and Service Preference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-service" className="form-label">
            Service Requested *
          </label>
          <select
            id="contact-service"
            className={`form-input ${errors.service ? 'error' : ''}`}
            {...register('service')}
            disabled={locked}
          >
            <option value="">Select a service</option>
            {APPROVED_SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className="form-error">{errors.service.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-frequency" className="form-label">
            Service Preference
          </label>
          <select
            id="contact-frequency"
            className="form-input"
            {...register('frequencyPreference')}
            disabled={locked}
          >
            <option value="">Select preference (one-time or recurring)</option>
            {FREQUENCY_OPTIONS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Florida Property Address & Property Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-address" className="form-label">
            Florida Property Address or City/ZIP
          </label>
          <input
            id="contact-address"
            type="text"
            className="form-input"
            placeholder="e.g., Jacksonville, FL 32256"
            {...register('serviceAddress')}
            disabled={locked}
          />
        </div>
        <div>
          <label htmlFor="contact-property-type" className="form-label">
            Property Type
          </label>
          <select
            id="contact-property-type"
            className="form-input"
            {...register('propertyType')}
            disabled={locked}
          >
            <option value="">Select property type</option>
            {PROPERTY_TYPES.map((pt) => (
              <option key={pt} value={pt}>
                {pt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Approximate Grounds Size */}
      <div>
        <label htmlFor="contact-grounds-size" className="form-label">
          Approximate Grounds Size
        </label>
        <select
          id="contact-grounds-size"
          className="form-input"
          {...register('groundsSize')}
          disabled={locked}
        >
          <option value="">Select approximate size</option>
          {GROUNDS_SIZES.map((sz) => (
            <option key={sz} value={sz}>
              {sz}
            </option>
          ))}
        </select>
      </div>

      {/* Service Requirements (formerly Project Description) */}
      <div>
        <label htmlFor="contact-message" className="form-label">
          Service Requirements *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          className={`form-input resize-y ${errors.message ? 'error' : ''}`}
          placeholder="Describe the maintenance tasks needed (e.g., routine lawn mowing, edging, garden bed weeding, leaf cleanup, scheduling preference)."
          {...register('message')}
          disabled={locked}
        />
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>

      {/* Supporting Photo / Document Upload */}
      <div>
        <label htmlFor="contact-file" className="form-label">
          Property Photo or Site Overview (Optional)
        </label>
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
          <div
            className={`border border-dashed border-gray-300 rounded p-4 flex flex-col items-start gap-1 bg-gray-50 ${
              locked ? 'opacity-60' : ''
            }`}
          >
            <div
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--color-navy)' }}
            >
              <UploadCloud size={16} style={{ color: 'var(--color-teal)' }} />
              {fileName || 'Choose a file or drag it here'}
            </div>
            <p className="text-xs text-gray-500 mt-1 pl-6">
              Supported formats: JPG, JPEG, PNG, WEBP, PDF (max 10MB)
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Consent */}
      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded border-gray-300 flex-shrink-0"
            style={{ accentColor: 'var(--color-teal)' }}
            {...register('consent')}
            disabled={locked}
          />
          <span className="text-xs text-gray-600 leading-relaxed">
            I consent to Verastro Infra storing and using this information to respond to my quote request. I have read the Privacy Policy.
          </span>
        </label>
        {errors.consent && <p className="form-error mt-1">{errors.consent.message}</p>}
      </div>

      {/* Submit Button */}
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
              Submitting Request...
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
          {status === 'idle' && submitLabel}
        </button>
        {status === 'loading' && (
          <p className="text-xs text-gray-500 mt-3">Please wait while your request is processed.</p>
        )}
      </div>
    </form>
  );
}