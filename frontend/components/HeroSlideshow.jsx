'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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

  const step = useCallback(
    (delta) => {
      setIndex((current) => (current + delta + heroSlides.length) % heroSlides.length);
      setProgressKey((key) => key + 1);
    },
    []
  );

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
      {heroSlides.map((item, slideIndex) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            slideIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={slideIndex !== index}
        >
          <Image
            src={item.image}
            alt=""
            fill
            priority={slideIndex === 0}
            sizes="100vw"
            unoptimized
            className={`object-cover ${slideIndex === index ? 'hero-kenburns' : ''}`}
          />
        </div>
      ))}

      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 flex min-h-[100svh] items-end md:items-center">
        <div className="container-main w-full pt-24 pb-24 md:pb-28">
          <div
            key={slide.id}
            className="hero-copy max-w-2xl"
          >
            <p className="section-label text-white/80">{slide.eyebrow}</p>
            <h1 className="whitespace-pre-line text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-5">
              {slide.headline}
            </h1>
            <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              {slide.supporting}
            </p>
            <div className="flex flex-wrap gap-3">
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

      <div className="absolute inset-y-0 left-0 z-20 hidden md:flex items-center pl-3 lg:pl-5">
        <button
          type="button"
          className="hero-control"
          onClick={() => step(-1)}
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 z-20 hidden md:flex items-center pr-3 lg:pr-5">
        <button
          type="button"
          className="hero-control"
          onClick={() => step(1)}
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="container-main flex items-center gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
            {heroSlides.map((item, slideIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={slideIndex === index}
                aria-label={`Show slide ${slideIndex + 1}: ${item.eyebrow}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  slideIndex === index ? 'w-10 bg-white' : 'w-3 bg-white/40 hover:bg-white/70'
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
          <div className="ml-auto flex md:hidden items-center gap-2">
            <button type="button" className="hero-control" onClick={() => step(-1)} aria-label="Previous slide">
              <ArrowLeft size={16} />
            </button>
            <button type="button" className="hero-control" onClick={() => step(1)} aria-label="Next slide">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
