import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { footerLinks } from '@/data/navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-navy)' }} className="text-gray-300">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="Verastro Infra Projects">
              <Image
                src="https://verastrotechnologies.com/wp-content/uploads/2022/08/cropped-Verastrotechnologies_symbol-removebg-preview.png"
                alt="Verastro logo"
                width={36}
                height={36}
                className="object-contain"
                unoptimized
              />
              <div>
                <div className="text-white font-semibold text-sm leading-none">Verastro</div>
                <div className="text-xs leading-none mt-0.5" style={{ color: 'var(--color-teal-light)' }}>
                  Infra Projects
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              A division of Verastro Inc.<br />
              Engineering, site development &amp; outdoor infrastructure.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+19043029170"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={14} />
                (904) 302-9170
              </a>
              <a
                href="mailto:inquiries@verastroinfra.com"
                className="flex items-center gap-2 transition-colors"
                style={{ color: 'var(--color-teal-light)' }}
              >
                <Mail size={14} />
                inquiries@verastroinfra.com
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Locations</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <p>&copy; {year} Verastro Infra Projects, a division of Verastro Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
