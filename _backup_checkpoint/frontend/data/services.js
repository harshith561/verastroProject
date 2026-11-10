// Core approved services for Verastro Infra (Florida Landscaping & Outdoor Maintenance)
export const servicesList = [
  {
    id: 'lawn-grounds-maintenance',
    title: 'Lawn & Grounds Maintenance',
    image: '/images/HeroSlideshow/Landscape-Maintenance.jpg',
    imageAlt: 'Well-maintained turf and garden grounds at a Florida property',
    shortDescription:
      'Lawn mowing, edging, manual weeding, and routine outdoor upkeep.',
    description:
      'Keep outdoor areas tidy with lawn mowing, edging, manual weeding, and routine grounds upkeep. We confirm the tasks and visit frequency before service begins.',
    features: [
      'Lawn mowing',
      'Lawn and walkway edging',
      'Manual weeding of beds and borders',
      'Routine watering, where included in the agreed scope',
    ],
  },
  {
    id: 'property-cleanup-leaf-removal',
    title: 'Property Cleanup & Leaf Removal',
    image: '/images/HeroSlideshow/service4.jpg',
    imageAlt: 'Freshly cleared and tidy outdoor property grounds',
    shortDescription:
      'Leaf collection, loose debris removal, and cleanup of garden beds and walkways.',
    description:
      'Refresh outdoor areas with a one-time cleanup or scheduled leaf removal. The agreed scope can include gathering fallen leaves, removing loose organic debris, clearing garden beds, and sweeping walkways.',
    features: [
      'Leaf collection from lawns and beds',
      'Loose organic debris collection',
      'Manual weeding and removal of dead vegetation from garden beds',
      'Walkway and driveway sweeping',
    ],
  },
  {
    id: 'garden-shrub-care',
    title: 'Garden & Shrub Care',
    image: '/images/HeroSlideshow/hero2.jpg',
    imageAlt: 'Cared-for garden beds and decorative shrubs',
    shortDescription:
      'Manual weeding, small-shrub trimming, and garden-bed cleanup.',
    description:
      'Maintain tidy garden beds and landscaped borders with hands-on care. Services include manual weeding, routine trimming of small shrubs and hedges, and bed cleanup.',
    features: [
      'Manual weed removal',
      'Small-shrub and hedge trimming',
      'Garden-bed raking and border cleanup',
      'Reporting visible plant concerns to the customer',
    ],
  },
];

// Alias for backwards compatibility
export const mainServices = servicesList;

// Home page service overview cards
export const homeServiceCards = [
  {
    id: 'lawn-grounds-maintenance',
    title: 'Lawn & Grounds Maintenance',
    description: 'Lawn mowing, edging, manual weeding, and routine outdoor upkeep.',
    href: '/services#lawn-grounds-maintenance',
    image: '/images/HeroSlideshow/Landscape-Maintenance.jpg',
    imageAlt: 'Lawn mowing, edging, and grounds maintenance',
  },
  {
    id: 'property-cleanup-leaf-removal',
    title: 'Property Cleanup & Leaf Removal',
    description: 'Leaf collection, loose debris removal, and cleanup of garden beds and walkways.',
    href: '/services#property-cleanup-leaf-removal',
    image: '/images/HeroSlideshow/service4.jpg',
    imageAlt: 'Leaf collection and property cleanup',
  },
  {
    id: 'garden-shrub-care',
    title: 'Garden & Shrub Care',
    description: 'Manual weeding, small-shrub trimming, and garden-bed cleanup.',
    href: '/services#garden-shrub-care',
    image: '/images/HeroSlideshow/hero2.jpg',
    imageAlt: 'Garden beds, small-shrub trimming and upkeep',
  },
];

// Service Schedule Comparison (One-Time vs. Recurring)
export const serviceScheduleComparison = {
  heading: 'Choose Your Service Schedule',
  introduction:
    'Book a single visit or arrange ongoing maintenance. Tasks and pricing are confirmed before work begins.',
  oneTime: {
    title: 'One-Time Service',
    description:
      'For a specific cleanup, seasonal upkeep, or an individual maintenance need. We agree on the work and provide a quote for the visit.',
    bullets: [
      'Defined tasks for a single visit',
      'Scheduling based on availability',
      'Quote confirmed before work begins',
    ],
    buttonLabel: 'Request a One-Time Quote',
    buttonHref: '/consultation',
  },
  recurring: {
    title: 'Recurring Maintenance',
    description:
      'For properties that need regular upkeep. We agree on the tasks and visit frequency based on the property’s requirements.',
    bullets: [
      'Agreed maintenance tasks',
      'Visit frequency suited to the property',
      'Updates when scheduling changes',
    ],
    buttonLabel: 'Discuss a Maintenance Plan',
    buttonHref: '/consultation',
  },
};

// Service delivery process (From Inquiry to Completion)
export const deliveryProcess = [
  {
    step: '01',
    title: 'Share Your Requirements',
    description:
      'Tell us the location, the work you need, and your preferred timing. Include photos or relevant documents where helpful.',
  },
  {
    step: '02',
    title: 'Agree on Scope & Quote',
    description:
      'We review the request and confirm the included tasks, exclusions, pricing, and responsibilities.',
  },
  {
    step: '03',
    title: 'Schedule the Work',
    description:
      'We agree on timing and confirm any access arrangements or information needed before work begins.',
  },
  {
    step: '04',
    title: 'Receive Updates',
    description:
      'We communicate progress, scheduling changes, and completion of the agreed work.',
  },
];

// Service support contact section
export const serviceSupportContent = {
  heading: 'Questions or Schedule Changes?',
  paragraph:
    'Contact our team by phone or email to request a schedule change or raise a service concern. Please include your property address or project reference so we can identify the request.',
  buttonLabel: 'Contact Us',
  buttonHref: '/contact',
};

// Unpublished draft services preserved privately (NOT exposed on public pages)
export const unpublishedServicesDraft = [
  {
    id: 'land-development-draft',
    title: 'Land Development (Draft)',
    note: 'Excluded from public launch scope. Preserved privately.',
  },
  {
    id: 'civil-engineering-draft',
    title: 'Civil Engineering (Draft)',
    note: 'Excluded from public launch scope. Preserved privately.',
  },
  {
    id: 'site-grading-draft',
    title: 'Site Grading & Leveling (Draft)',
    note: 'Excluded from public launch scope. Preserved privately.',
  },
  {
    id: 'sod-turf-installation-draft',
    title: 'Sod & Turf Renovation (Draft)',
    note: 'Held unpublished until owner verifies scope and licensing.',
  },
  {
    id: 'paver-hardscape-draft',
    title: 'Paver & Hardscape Installation (Draft)',
    note: 'Excluded from public launch scope. Preserved privately.',
  },
  {
    id: 'drainage-erosion-control-draft',
    title: 'Drainage & Erosion Control (Draft)',
    note: 'Excluded from public launch scope. Preserved privately.',
  },
  {
    id: 'property-investment-consulting-draft',
    title: 'Property Investment Consulting (Draft)',
    note: 'Excluded from public launch scope. Preserved privately.',
  },
];
