'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { careerSchema } from '@/lib/validation';
import { CheckCircle, AlertCircle, Loader2, ArrowRight, Check, FileText } from 'lucide-react';
import { jobListings } from '@/data/jobs';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function CareerForm({ defaultPosition = '' }) {
  const [status, setStatus] = useState('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [fileName, setFileName] = useState('');

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(careerSchema),
    defaultValues: { position: defaultPosition },
  });

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, val]) => {
        if (key !== 'resume' && val !== undefined && val !== null) {
          formData.append(key, String(val));
        }
      });
      const resumeFile = getValues('resume')?.[0];
      if (resumeFile) {
        formData.append('resume', resumeFile);
      }

      const res = await fetch(`${API_URL}/api/careers`, {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setServerMessage(json.message);
      } else {
        setStatus('error');
        setServerMessage(json.message || "We couldn't send your application. Please try again.");
      }
    } catch {
      setStatus('error');
      setServerMessage(
        "We couldn't send your application. Please try again. If the issue continues, call (904) 302-9170 or email inquiries@verastroinfra.com."
      );
    }
  };

  const { ref: fileRef, ...fileRest } = register('resume');

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
            <p className="text-sm font-semibold text-green-900 mb-1">Application received.</p>
            <p className="text-sm text-green-800">Your application has been sent to our team.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 rounded bg-red-50 border border-red-200">
          <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-800 leading-relaxed">{serverMessage}</p>
        </div>
      )}

      <div>
        <label htmlFor="career-name" className="form-label">Name</label>
        <input
          id="career-name"
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
        <label htmlFor="career-email" className="form-label">Email</label>
        <input
          id="career-email"
          type="email"
          autoComplete="email"
          className={`form-input ${errors.email ? 'error' : ''}`}
          placeholder="you@example.com"
          {...register('email')}
          disabled={locked}
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="career-phone" className="form-label">Phone</label>
        <input
          id="career-phone"
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
        <label htmlFor="career-position" className="form-label">Position</label>
        <select
          id="career-position"
          className={`form-input ${errors.position ? 'error' : ''}`}
          {...register('position')}
          disabled={locked}
        >
          <option value="">Select a position</option>
          {jobListings.map((job) => (
            <option key={job.id} value={job.title}>{job.title}</option>
          ))}
          <option value="General Application">General Application</option>
        </select>
        {errors.position && <p className="form-error">{errors.position.message}</p>}
      </div>

      <div>
        <label htmlFor="career-resume" className="form-label">Resume</label>
        <div className="relative">
          <input
            id="career-resume"
            type="file"
            accept=".pdf,.doc,.docx"
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
          <div className={`border border-gray-300 rounded p-4 flex flex-col items-start gap-1 bg-gray-50 ${locked ? 'opacity-60' : ''}`}>
            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-navy)' }}>
              <FileText size={16} style={{ color: 'var(--color-teal)' }} />
              {fileName || 'Choose a file'}
            </div>
            <p className="text-xs text-gray-500 mt-1 pl-6">PDF, DOC, DOCX</p>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="career-message" className="form-label">Cover Message</label>
        <textarea
          id="career-message"
          rows={4}
          className="form-input resize-y"
          placeholder="Tell us briefly about yourself and your interest in this position..."
          {...register('message')}
          disabled={locked}
        />
      </div>

      <div className="mt-2">
        <button
          type="submit"
          disabled={locked}
          className="btn-primary w-full justify-center disabled:opacity-80"
          id="career-form-submit"
        >
          {status === 'loading' && (
            <>
              Submitting Application...
              <Loader2 size={16} className="animate-spin ml-2" />
            </>
          )}
          {status === 'success' && (
            <>
              Application Submitted
              <Check size={16} className="ml-2" />
            </>
          )}
          {status === 'error' && (
            <>
              Try Again
              <ArrowRight size={16} className="ml-2" />
            </>
          )}
          {status === 'idle' && 'Submit Application'}
        </button>
        {status === 'loading' && (
          <p className="text-xs text-gray-500 mt-3">Please wait while your application is sent.</p>
        )}
      </div>
    </form>
  );
}