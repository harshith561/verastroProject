import Image from 'next/image';

export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  text,
  minHeight = 'min-h-[55vh] md:min-h-[70vh]',
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

      <div
        data-aos="fade-up"
        className="relative w-full px-6 md:px-12 lg:px-20 py-16 md:py-20"
      >
        <div className="text-center lg:text-left">
          {eyebrow && 
          <p className="section-label text-[#F3B44A]">{eyebrow}</p>
          }
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