import Link from 'next/link';
import { Compass, ArrowLeft, Mail, Phone, Wrench, Info, Briefcase } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Page Not Found | Verastro Infra',
  description: 'The requested page could not be found on Verastro Infra.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[75vh] flex items-center justify-center bg-gray-950 relative overflow-hidden py-20">
        {/* Background Accent Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#101A3A] bg-opacity-50 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#20B9AD] bg-opacity-5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 border border-gray-800 mb-6 shadow-inner">
            <Compass className="w-10 h-10 text-[#20B9AD]" />
          </div>

          <p className="text-xs font-bold tracking-widest uppercase text-[#4CCFC1] mb-2">
            Error 404
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
            Page Not Found
          </h1>

          <p className="text-gray-300 max-w-lg mx-auto mb-8 text-base md:text-lg leading-relaxed">
            The page you are looking for does not exist, has been removed, or was moved to another location.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#20B9AD] hover:bg-teal-400 text-gray-950 font-bold px-8 py-3.5 rounded transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(32,185,173,0.3)]"
            >
              <ArrowLeft className="w-5 h-5" />
              Return to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-200 hover:text-white px-8 py-3.5 rounded transition-all duration-300 bg-white/5"
            >
              <Mail className="w-5 h-5" />
              Contact Our Office
            </Link>
          </div>

          {/* Quick Helpful Navigation Links */}
          <div className="pt-8 border-t border-gray-800 text-left">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">
              Explore Important Pages
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <Link
                href="/services"
                className="flex items-center gap-2 p-3 rounded bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-[#20B9AD] transition-all"
              >
                <Wrench size={14} className="text-[#20B9AD]" />
                <span>Services</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 p-3 rounded bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-[#20B9AD] transition-all"
              >
                <Info size={14} className="text-[#20B9AD]" />
                <span>About Us</span>
              </Link>
              <Link
                href="/careers"
                className="flex items-center gap-2 p-3 rounded bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-[#20B9AD] transition-all"
              >
                <Briefcase size={14} className="text-[#20B9AD]" />
                <span>Careers</span>
              </Link>
              <Link
                href="/consultation"
                className="flex items-center gap-2 p-3 rounded bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-[#20B9AD] transition-all"
              >
                <Phone size={14} className="text-[#20B9AD]" />
                <span>Request Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
