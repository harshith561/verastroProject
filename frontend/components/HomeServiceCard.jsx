'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import useSynchronizedMedia from '@/lib/useSynchronizedMedia';

export default function HomeServiceCard({ service }) {
  const { isLoaded, imgRef, handleLoad, handleError } = useSynchronizedMedia(service.image, {
    priority: false,
    timeout: 3500,
  });

  return (
    <Link
      href={service.href}
      className="group relative block aspect-[4/3] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 bg-slate-100"
      aria-label={`View Service: ${service.title}`}
    >
      {/* Background Shimmer Placeholder */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 animate-shimmer transition-opacity duration-500 ease-out z-0 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      <Image
        ref={imgRef}
        src={service.image}
        alt={service.imageAlt}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onLoad={handleLoad}
        onError={handleError}
        className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1226]/95 via-[#0B1226]/40 to-transparent transition-opacity group-hover:opacity-90 z-10" />

      {/* Synchronized card text */}
      <div
        className={`absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left z-20 transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h3 className="text-lg font-bold text-white mb-1.5 transition-colors group-hover:text-[#4CCFC1]">
          {service.title}
        </h3>
        <p className="text-xs md:text-sm text-gray-200 leading-relaxed line-clamp-2 mb-3">
          {service.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4CCFC1] group-hover:translate-x-1 transition-transform duration-300">
          View Service <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

