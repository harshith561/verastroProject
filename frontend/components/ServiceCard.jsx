import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, showLink = true }) {
  return (
    <div data-aos="fade-up" className="card card-hover flex flex-col h-full">
      <div className="mb-3">
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded"
          style={{ backgroundColor: 'rgba(32,185,173,0.1)', color: 'var(--color-teal)' }}
        >
          Service
        </span>
      </div>
      <h3
        className="text-base font-semibold mb-2"
        style={{ color: 'var(--color-navy)' }}
      >
        {service.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{service.shortDescription}</p>
      {showLink && (
        <div className="mt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: 'var(--color-teal)' }}
            aria-label={`Learn more about ${service.title}`}
          >
            Learn more <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}
