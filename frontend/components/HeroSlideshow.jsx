'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { heroSlides } from '@/data/heroSlides';

const INTERVAL_MS = 5500;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return reduced;
}

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const touchStartX = useRef(null);

  const goTo = useCallback((nextIndex) => {
    setIndex(((nextIndex % heroSlides.length) + heroSlides.length) % heroSlides.length);
    setProgressKey((key) => key + 1);
  }, []);

  const step = useCallback((delta) => {
    setIndex((current) => (current + delta + heroSlides.length) % heroSlides.length);
    setProgressKey((key) => key + 1);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = window.setInterval(() => step(1), INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [index, reducedMotion, step]);

  const slide = heroSlides[index];

  const onTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current == null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    step(delta < 0 ? 1 : -1);
  };

  return (
    <section
      className="hero-slideshow relative isolate min-h-[100svh] w-full overflow-hidden"
      aria-label="Featured visual stories"
      aria-roledescription="carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Background images */}
      {heroSlides.map((item, slideIndex) => (
        <div
          key={item.id}
          role="img"
          aria-label={item.imageAlt}
          aria-hidden={slideIndex !== index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1200ms] ease-out ${slideIndex === index ? 'opacity-100 hero-kenburns' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      ))}

      {/* Dark gradient so text stays readable: bottom-up on mobile, left-to-right on desktop */}
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,15,30,0.9)_0%,rgba(8,15,30,0.5)_60%,rgba(8,15,30,0.2)_100%)] md:bg-[linear-gradient(90deg,rgba(8,15,30,0.85)_0%,rgba(8,15,30,0.6)_45%,rgba(8,15,30,0.15)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[100svh] items-end md:items-center">
        <div className="w-full px-6 md:px-12 lg:px-20 pt-24 pb-24 md:pb-28">
          <div key={slide.id} className="hero-copy mx-auto md:mx-0 max-w-2xl text-center md:text-left">
            <p className="section-label text-white/80">{slide.eyebrow}</p>
            <h1 className="whitespace-pre-line text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-4">
              {slide.headline}
            </h1>
            <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              {slide.supporting}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link href={slide.primaryCta.href} className="btn-primary" id={`hero-primary-${slide.id}`}>
                {slide.primaryCta.label} <ArrowRight size={16} />
              </Link>
              <Link href={slide.secondaryCta.href} className="btn-secondary" id={`hero-secondary-${slide.id}`}>
                {slide.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots and progress */}
      <div className="absolute bottom-6 md:bottom-25 left-0 right-0 z-20">
        <div className="flex w-full items-center justify-center md:justify-start gap-4 px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
            {heroSlides.map((item, slideIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={slideIndex === index}
                aria-label={`Show slide ${slideIndex + 1}: ${item.eyebrow}`}
                className={`h-3 w-3 rounded-full border border-white transition-all duration-300 ${slideIndex === index ? 'bg-white scale-110' : 'bg-transparent hover:bg-white/60'
                  }`}
                onClick={() => goTo(slideIndex)}
              />
            ))}
          </div>
          {!reducedMotion && (
            <div className="hero-progress hidden sm:block">
              <span key={progressKey} className="hero-progress-bar" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}