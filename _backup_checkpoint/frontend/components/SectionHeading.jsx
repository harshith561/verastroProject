export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'text-center items-center mx-auto'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-left items-start';

  return (
    <div data-aos="fade-up" className={`flex flex-col ${alignClass} ${className}`}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'text-center' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
