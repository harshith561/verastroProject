import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
  children,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden">
      <div
        className={`relative min-h-[280px] md:min-h-[420px] lg:min-h-[520px] overflow-hidden group ${
          reverse ? 'lg:order-2' : ''
        }`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          unoptimized
          className="object-cover img-zoom-hover"
        />
        {overlay && <div className="absolute inset-0 bg-black/10" />}
      </div>
      <div
        className={`flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 ${reverse ? 'lg:order-1' : ''}`}
        style={{ backgroundColor: reverse ? 'var(--color-warm-white)' : '#fff' }}
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
          <div className="mt-2">
            <Link href={ctaHref} className="btn-outline">
              {ctaLabel} <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
