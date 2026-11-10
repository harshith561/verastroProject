import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function LocationCard({ location }) {
  return (
    <article data-aos="fade-up" className="relative overflow-hidden min-h-[220px] group">
      {location.image && (
        <Image
          src={location.image}
          alt={location.imageAlt || `${location.city} office`}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          unoptimized
          className="object-cover img-zoom-hover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,26,58,0.88)] via-[rgba(16,26,58,0.45)] to-transparent" />
      <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-end p-6">
        <div className="flex items-center gap-2 mb-3">
          <MapPin size={16} style={{ color: 'var(--color-teal-light)' }} />
          {location.label && (
            <span
              className="text-xs px-2 py-0.5 rounded font-medium"
              style={{ backgroundColor: 'rgba(32,185,173,0.18)', color: 'var(--color-teal-light)' }}
            >
              {location.label}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{location.state}</h3>
        <p className="text-sm text-gray-200 leading-relaxed">
          {location.address}
          <br />
          {location.city}
        </p>
      </div>
    </article>
  );
}
