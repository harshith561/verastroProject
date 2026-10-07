import Image from 'next/image';

export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  text,
  minHeight = 'min-h-[52vh] md:min-h-[64vh]',
}) {
  return (
    <section
      className={`relative -mt-16 ${minHeight} flex items-end overflow-hidden`}
      aria-label={`${title} page header`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        unoptimized
        className="object-cover hero-kenburns-slow"
      />
      <div className="hero-overlay absolute inset-0" />
      <div data-aos="fade-up" className="relative container-main py-16 md:py-20">
        {eyebrow && <p className="section-label text-white/80">{eyebrow}</p>}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 max-w-3xl">{title}</h1>
        {text && (
          <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl">{text}</p>
        )}
      </div>
    </section>
  );
}
