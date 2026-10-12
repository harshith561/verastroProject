// UNPUBLISHED DRAFT — Original Investments Page content preserved privately
// Not for public display. Investments removed from public scope.

import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import FullBleedVisual from '@/components/FullBleedVisual';
import CTASection from '@/components/CTASection';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Property & Infrastructure Investments | Verastro Infra (Draft)',
  robots: { index: false, follow: false },
};

export default function InvestmentsDraftPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.commercialProperty}
        alt="Draft investments hero"
        eyebrow="Investments (Draft)"
        title="Property & Infrastructure Investment Support"
        text="Development-oriented consultation for commercial, residential, and asset-backed projects."
      />
      {/* Preserved draft content */}
    </PageLayout>
  );
}
