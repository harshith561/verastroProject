'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{ backgroundColor: 'var(--color-navy)' }}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Verastro Infra Projects — Home">
            <Image
              src="https://verastrotechnologies.com/wp-content/uploads/2022/08/cropped-Verastrotechnologies_symbol-removebg-preview.png"
              alt="Verastro logo"
              width={36}
              height={36}
              className="object-contain"
              unoptimized
            />
            <div className="leading-tight">
              <div className="text-white font-semibold text-sm leading-none">Verastro</div>
              <div className="text-xs leading-none" style={{ color: 'var(--color-teal-light)' }}>
                Infra Projects
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-3 py-1.5 rounded text-sm ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/consultation"
              className="hidden sm:inline-flex btn-primary text-sm px-4 py-2"
              id="header-consultation-cta"
            >
              Request a Consultation
            </Link>

            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t"
          style={{ backgroundColor: 'var(--color-navy-secondary)', borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <nav className="container-main py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 rounded text-sm font-medium ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t mt-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <Link
                href="/consultation"
                className="btn-primary w-full justify-center"
                id="mobile-consultation-cta"
              >
                Request a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
