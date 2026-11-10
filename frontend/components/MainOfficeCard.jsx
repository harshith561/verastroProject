'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import useSynchronizedMedia from '@/lib/useSynchronizedMedia';

export default function MainOfficeCard({ office }) {
  const { isLoaded, imgRef, handleLoad, handleError } = useSynchronizedMedia(office.image, {
    priority: false,
    timeout: 3500,
  });

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-[#101A3A] text-white flex-1 flex flex-col justify-between min-h-[360px]">
      {/* Background Shimmer Placeholder */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[#101A3A] animate-shimmer transition-opacity duration-500 ease-out z-0 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      <Image
        ref={imgRef}
        src={office.image}
        alt={office.imageAlt || 'Jacksonville Main Office'}
        fill
        loading="lazy"
        sizes="(max-width: 1024px) 100vw, 60vw"
        onLoad={handleLoad}
        onError={handleError}
        className={`object-cover transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1226] via-[#0B1226]/80 to-transparent z-10" />

      {/* Top Badge */}
      <div
        className={`relative z-20 p-6 sm:p-8 flex items-center justify-between transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#20B9AD]/20 border border-[#20B9AD]/40 text-xs font-bold text-[#4CCFC1] tracking-wider uppercase">
          <MapPin size={13} />
          {office.label || 'Main Office'}
        </div>
        <span className="text-xs text-gray-300 font-medium hidden sm:inline">
          Duval County, FL
        </span>
      </div>

      {/* Bottom Details */}
      <div
        className={`relative z-20 p-6 sm:p-8 transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Jacksonville Main Office
        </h3>
        <p className="text-sm text-gray-300 mb-6 leading-relaxed max-w-lg">
          {office.address}
          <br />
          <span className="text-white font-medium">{office.city}</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-6 border-t border-white/10 text-xs sm:text-sm">
          <a
            href="tel:+19043029170"
            className="flex items-center gap-2.5 text-gray-200 hover:text-white transition-colors p-2 rounded bg-white/5 hover:bg-white/10"
          >
            <Phone size={15} className="text-[#20B9AD] shrink-0" />
            <span>(904) 302-9170</span>
          </a>
          <a
            href="mailto:inquries@verastro.com"
            className="flex items-center gap-2.5 text-gray-200 hover:text-white transition-colors p-2 rounded bg-white/5 hover:bg-white/10"
          >
            <Mail size={15} className="text-[#20B9AD] shrink-0" />
            <span className="truncate">inquries@verastro.com</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://maps.google.com/?q=10151+Deerwood+Park+Blvd,+Building+200,+Suite+250,+Jacksonville,+FL+32256"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-2.5 px-4"
            id="home-office-directions-btn"
          >
            <Navigation size={14} /> Get Directions
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white px-4 py-2.5 rounded border border-white/20 hover:bg-white/10 transition-colors"
            id="home-office-contact-btn"
          >
            Contact Office
          </Link>
        </div>
      </div>
    </div>
  );
}

