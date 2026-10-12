'use client';

import { noOpeningsMessage } from '@/data/jobs';
import { AlertCircle } from 'lucide-react';

export { default as CareerFormDraft } from './drafts/CareerFormDraft';

export default function CareerForm() {
  return (
    <div className="flex flex-col gap-4 p-6 rounded bg-gray-50 border border-gray-200 text-center sm:text-left">
      <div className="flex items-start gap-3">
        <AlertCircle size={20} className="text-gray-500 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Applications Closed
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {noOpeningsMessage}
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 border-t pt-3 mt-2">
        General company inquiries can be directed to our main office via{' '}
        <a href="mailto:inquries@verastro.com" className="text-teal-700 font-medium hover:underline">
          inquries@verastro.com
        </a>. Please note that applications are not accepted while hiring is closed.
      </p>

      {/* =========================================================================
       * PRESERVED APPLICATION WORKFLOW DRAFT (Preserved for future authorized reopening)
       * Recruitment mailbox: manideep@verastro.com
       * Component: CareerFormDraft from '@/components/drafts/CareerFormDraft'
       * ========================================================================= */}
    </div>
  );
}