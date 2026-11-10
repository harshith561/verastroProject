const MAIN_OFFICE_QUERY = '10151 Deerwood Park Blvd, Building 200, Suite 250, Jacksonville, FL 32256';

export default function GoogleMapEmbed({
  query = MAIN_OFFICE_QUERY,
  title = 'Verastro Infra Main Office — Jacksonville, FL',
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const encoded = encodeURIComponent(query);
  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encoded}`
    : `https://maps.google.com/maps?q=${encoded}&z=16&output=embed`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encoded}`;

  return (
    <div className="flex flex-col h-full min-h-[320px] md:min-h-[420px]">
      <div className="relative flex-1 overflow-hidden rounded-sm bg-gray-100">
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={directionsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-sm font-medium hover:underline inline-flex items-center gap-1.5"
        style={{ color: 'var(--color-teal)' }}
      >
        <span>View Main Office on Google Maps</span>
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}
