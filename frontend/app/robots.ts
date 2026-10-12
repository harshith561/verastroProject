import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verastroinfra.com';

  const isPreview =
    process.env.VERCEL_ENV === 'preview' ||
    siteUrl.includes('vercel.app');

  if (isPreview) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/investments', '/engineering'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
