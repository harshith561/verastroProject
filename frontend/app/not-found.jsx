import Link from 'next/link';
import { Compass, ArrowLeft, Mail } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Page Not Found | Verastro Infra',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-950 relative overflow-hidden">
        {/* Background Accent Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#101A3A] bg-opacity-50 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#20B9AD] bg-opacity-5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 border border-gray-800 mb-8">
            <Compass className="w-10 h-10 text-[#20B9AD]" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter">
            4<span className="text-[#20B9AD]">0</span>4
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto mb-10 text-base md:text-lg leading-relaxed">
            The page you are looking for does not exist or has been moved to a new destination.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#20B9AD] hover:bg-teal-500 text-gray-950 font-bold px-8 py-3.5 rounded transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(32,185,173,0.3)]"
            >
              <ArrowLeft className="w-5 h-5" />
              Return to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3.5 rounded transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
