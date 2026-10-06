import { MapPin, Building2 } from 'lucide-react';

export default function LocationCard({ location }) {
  return (
    <div data-aos="fade-up" className="card flex flex-col gap-2">
      <div className="flex items-start gap-2">
        <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-teal)' }} />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--color-navy)' }}>
              {location.state}
            </h3>
            {location.label && (
              <span
                className="text-xs px-2 py-0.5 rounded font-medium"
                style={{ backgroundColor: 'rgba(32,185,173,0.1)', color: 'var(--color-teal)' }}
              >
                {location.label}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {location.address}
            <br />
            {location.city}
          </p>
        </div>
      </div>
    </div>
  );
}
