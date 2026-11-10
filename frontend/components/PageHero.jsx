'use client';

import Image from 'next/image';
import useSynchronizedMedia from '@/lib/useSynchronizedMedia';

export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  text,
  minHeight = 'min-h-[55vh] md:min-h-[70vh]',
}) {
  const { isLoaded, imgRef, handleLoad, handleError } = useSynchronizedMedia(image, {
    priority: true,
    timeout: 3000,
  });

  return (
    <section
      className={`relative -mt-16 ${minHeight} flex items-end overflow-hidden bg-[#101A3A]`}
      aria-label={`${title} page header`}
    >
      {/* Background image placeholder shimmer */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[#101A3A] transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      <Image
        ref={imgRef}
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        onLoad={handleLoad}
        onError={handleError}
        className={`object-cover hero-kenburns-slow transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Hero text content coordinated with image presentation */}
      <div
        className={`relative z-20 w-full px-6 md:px-12 lg:px-20 py-16 md:py-20 transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center lg:text-left">
          {eyebrow && <p className="section-label text-[#F3B44A]">{eyebrow}</p>}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 max-w-3xl mx-auto lg:mx-0">
            {title}
          </h1>
          {text && (
            <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-auto mx-auto lg:mx-0">
              {text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
