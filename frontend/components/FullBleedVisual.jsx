import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FullBleedVisual({
  image,
  alt,
  eyebrow,
  title,
  text,
  ctaLabel,
  ctaHref,
  minHeight = 'min-h-[70vh]',
}) {
  return (
    <section className={`relative isolate overflow-hidden ${minHeight} flex items-end md:items-center`}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        unoptimized
        className="object-cover hero-kenburns-slow"
      />
      <div className="hero-overlay absolute inset-0" />
      <div data-aos="fade-up" className="relative z-10 container-main py-16 md:py-24 max-w-3xl">
        {eyebrow && <p className="section-label text-white/80">{eyebrow}</p>}
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {text && <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl mb-6">{text}</p>}
        {ctaLabel && (
          <Link href={ctaHref} className="btn-primary">
            {ctaLabel} <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </section>
  );
}
