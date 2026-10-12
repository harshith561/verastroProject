// UNPUBLISHED DRAFT — Original Engineering Page content preserved privately
// Not for public display. Public replacement is /service-coordination

import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import VisualSplit from '@/components/VisualSplit';
import CTASection from '@/components/CTASection';
import { visualImages } from '@/data/heroSlides';

export const metadata = {
  title: 'Engineering & Construction Services | Verastro Infra (Draft)',
  robots: { index: false, follow: false },
};

const capabilities = [
  'Site grading',
  'Site preparation',
  'Drainage & erosion control',
  'Quantity takeoffs',
  'Paver / hardscape layouts',
  'Site-development coordination',
  'Turf / sod planning',
  'Layouts & technical documentation',
];

const tools = [
  'AutoCAD Civil 3D',
  'Drone surveys',
  'GIS',
];

const engineeringProcess = [
  { step: '01', title: 'Assess', description: 'Understand the property and requirements.' },
  { step: '02', title: 'Plan', description: 'Develop practical project strategies.' },
  { step: '03', title: 'Design', description: 'Prepare layouts, documentation and technical support.' },
  { step: '04', title: 'Execute', description: 'Coordinate field implementation within approved scopes.' },
  { step: '05', title: 'Deliver', description: 'Complete the work with quality control and final coordination.' },
];

export default function EngineeringDraftPage() {
  return (
    <PageLayout>
      <PageHero
        image={visualImages.aboutApproach}
        alt="Draft engineering hero"
        eyebrow="Engineering (Draft)"
        title="Engineering & Site Development"
        text="Technical planning and field coordination for practical, well-documented site solutions."
      />
      {/* Preserved draft content */}
    </PageLayout>
  );
}
