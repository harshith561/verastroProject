'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import useSynchronizedMedia from '@/lib/useSynchronizedMedia';

export default function VisualSplit({
  image,
  alt,
  eyebrow,
  title,
  text,
  ctaLabel,
  ctaHref = '/services',
  reverse = false,
  overlay = false,
  headingAs: Heading = 'h2',
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  children,
}) {
  const { isLoaded, imgRef, handleLoad, handleError } = useSynchronizedMedia(image, {
    priority,
    timeout: 3500,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden relative">
      {/* Visual / Image Column */}
      <div
        className={`relative min-h-[280px] md:min-h-[420px] lg:min-h-[520px] overflow-hidden group bg-slate-100 ${
          reverse ? 'lg:order-2' : ''
        }`}
      >
        {/* Placeholder shimmer skeleton while image is loading */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 animate-shimmer transition-opacity duration-500 ease-out z-0 ${
            isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />

        <Image
          ref={imgRef}
          src={image}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={`object-cover img-zoom-hover relative z-10 transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {overlay && <div className="absolute inset-0 bg-black/10 z-20" />}
      </div>

      {/* Content / Text Column */}
      <div
        className={`relative flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 ${
          reverse ? 'lg:order-1' : ''
        }`}
        style={{ backgroundColor: reverse ? 'var(--color-warm-white)' : '#fff' }}
      >
        {/* Coordinated Text Content: Fades in simultaneously with image */}
        <div
          className={`transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none select-none'
          }`}
        >
          {eyebrow && <p className="section-label">{eyebrow}</p>}
          {title && (
            <Heading className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'var(--color-navy)' }}>
              {title}
            </Heading>
          )}
          {text && <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">{text}</p>}
          {children}
          {ctaLabel && (
            <div className="mt-6 flex justify-center">
              <Link href={ctaHref} className="btn-outline">
                {ctaLabel} <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>

        {/* Coordinated Skeleton: Shown while image is loading so text does not appear alone */}
        {!isLoaded && (
          <div
            aria-hidden="true"
            className="absolute inset-0 px-6 py-12 md:px-12 lg:px-16 flex flex-col justify-center pointer-events-none"
          >
            {eyebrow && <div className="w-28 h-4 bg-slate-200/80 rounded animate-pulse mb-3" />}
            <div className="w-4/5 h-8 bg-slate-200/80 rounded animate-pulse mb-3" />
            <div className="w-3/5 h-8 bg-slate-200/80 rounded animate-pulse mb-6" />
            <div className="w-full h-4 bg-slate-200/70 rounded animate-pulse mb-2.5" />
            <div className="w-11/12 h-4 bg-slate-200/70 rounded animate-pulse mb-2.5" />
            <div className="w-2/3 h-4 bg-slate-200/70 rounded animate-pulse mb-6" />
            {children && (
              <div className="space-y-3 mb-6">
                <div className="w-3/4 h-4 bg-slate-200/70 rounded animate-pulse" />
                <div className="w-2/3 h-4 bg-slate-200/70 rounded animate-pulse" />
                <div className="w-4/5 h-4 bg-slate-200/70 rounded animate-pulse" />
              </div>
            )}
            {ctaLabel && (
              <div className="mt-4 flex justify-center">
                <div className="w-36 h-10 bg-slate-200/80 rounded animate-pulse" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
