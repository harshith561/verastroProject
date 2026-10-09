import Link from 'next/link';
import { HardHat, AlertTriangle, ArrowLeft } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-950 relative overflow-hidden">
        {/* Background Accent Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-verastro-dark bg-opacity-50 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-verastro-teal bg-opacity-5 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-900 border border-gray-800 mb-8">
            <HardHat className="w-12 h-12 text-verastro-teal" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter">
            4<span className="text-verastro-teal">0</span>4
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            Under Construction
          </h2>
          
          <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">
            Looks like you've navigated to a work zone. The page you are looking for doesn't exist or has been moved to a new site plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-verastro-teal hover:bg-teal-500 text-gray-900 font-bold px-8 py-4 rounded transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(32,185,173,0.3)]"
            >
              <ArrowLeft className="w-5 h-5" />
              Return to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded transition-all duration-300"
            >
              <AlertTriangle className="w-5 h-5" />
              Report an Issue
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
