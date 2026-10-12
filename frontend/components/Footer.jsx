import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { footerLinks } from '@/data/navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-navy)' }} className="text-gray-300">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="Verastro Infra">
              <Image
                src="https://verastrotechnologies.com/wp-content/uploads/2022/08/cropped-Verastrotechnologies_symbol-removebg-preview.png"
                alt="Verastro logo"
                width={36}
                height={36}
                className="object-contain"
                unoptimized
              />
              <div className="leading-tight flex flex-col justify-center">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-[1.1rem] tracking-wide text-white drop-shadow-md">
                    Verastro
                  </span>
                  <span
                    className="font-semibold text-[1.1rem] tracking-wide"
                    style={{ color: 'var(--color-teal-light)' }}
                  >
                    Infra
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-sm text-gray-400 mb-3 leading-relaxed">
              A division of Verastro Inc.<br />
              Landscaping, grounds care &amp; property maintenance.
            </p>

            <div className="mb-4 text-xs text-gray-400 leading-relaxed">
              <p className="font-semibold text-gray-300 flex items-center gap-1.5 mb-1">
                <MapPin size={13} style={{ color: 'var(--color-teal-light)' }} />
                Main Office:
              </p>
              <p className="pl-4">
                10151 Deerwood Park Blvd, Building 200, Suite 250<br />
                Jacksonville, FL 32256
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+19043029170"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={14} />
                (904) 302-9170
              </a>
              <a
                href="mailto:inquries@verastro.com"
                className="flex items-center gap-2 transition-colors"
                style={{ color: 'var(--color-teal-light)' }}
              >
                <Mail size={14} />
                inquries@verastro.com
              </a>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/verastrousa" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={18} />
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

          {/* Service Area */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Florida Service Area</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.serviceAreas.map((link) => (
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
          <p>&copy; {year} Verastro Infra, a division of Verastro Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <p>
              Powered by{' '}
              <a
                href="https://digitalverto.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4CCFC1] hover:text-white transition-colors duration-200"
              >
                Digital Verto
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
