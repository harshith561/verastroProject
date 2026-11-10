// =============================================================================
// Careers & Job Listings Data
// All 4 positions are marked as Closed with location set to Jacksonville, FL.
// Removed legacy Arkansas, Bentonville, Rogers, hybrid/remote, and multi-location labels.
// Full descriptions and draft history preserved for future authorized reopening.
// =============================================================================

export const noOpeningsMessage =
  'No current openings. We are not hiring at this time. Please check back for future opportunities.';

// Open positions array is empty — all jobs removed from public open-jobs list
export const jobListings = [];

// Archived positions (all 4 jobs closed, preserved for future hiring records)
export const closedJobListings = [
  {
    id: 'civil-engineer-pe',
    title: 'Civil Engineer – PE',
    location: 'Jacksonville, FL',
    status: 'Closed',
    type: 'Full-Time',
    onSite: true,
    remote: false,
    revisionNote:
      'FLAGGED FOR REVISION BEFORE REOPENING: Previous descriptions referenced Northwest Arkansas and required Arkansas PE licensure. Changing the location field alone leaves contradictory content. Prior to any future reopening, duties must be updated to Florida commercial operations in Jacksonville, FL, and licensure requirement revised to Florida PE (or adjusted as appropriate for the scope).',
    description:
      'Archived position. Licensed engineering role previously evaluated for site infrastructure planning. Position is currently closed.',
    responsibilities: [
      'Lead civil engineering design and documentation within approved scopes',
      'Prepare site layouts and technical documentation',
      'Coordinate with municipal authorities and project stakeholders',
      'Ensure compliance with applicable codes and standards',
    ],
    qualifications: [
      'Professional Engineer (PE) licensure (requires revision for Florida before reopening)',
      'Experience in civil infrastructure and site planning',
      'Proficiency in technical design tools',
    ],
    // Preserved original draft records prior to closure
    draftHistory: {
      originalLocation: 'Rogers / Bentonville, Arkansas',
      originalDescription:
        'We are seeking a licensed Professional Engineer to lead civil engineering projects across site development, drainage, grading, and infrastructure coordination in the Northwest Arkansas region.',
      originalResponsibilities: [
        'Lead civil engineering design and documentation for site development projects',
        'Prepare grading plans, drainage designs, and utility layouts',
        'Coordinate with local municipalities, agencies, and project stakeholders',
        'Review and sign engineering documents within licensed scope',
        'Manage project schedules, submittals, and technical deliverables',
        'Provide technical guidance to project teams and field staff',
        'Ensure compliance with applicable codes, standards, and regulations',
      ],
      originalQualifications: [
        'Licensed Professional Engineer (PE) in Arkansas or ability to obtain reciprocal licensure',
        'Minimum 5 years of civil engineering experience in site development or infrastructure',
        'Proficiency in AutoCAD Civil 3D',
        'Strong knowledge of grading, drainage, and site utility systems',
        'Experience with local permitting and municipal coordination',
        'Excellent written and verbal communication skills',
        'Ability to manage multiple projects simultaneously',
      ],
    },
  },
  {
    id: 'civil-engineering-analyst',
    title: 'Civil Engineering Analyst / Project Assistant',
    location: 'Jacksonville, FL',
    status: 'Closed',
    type: 'Full-Time',
    onSite: true,
    remote: false,
    description:
      'Archived position. Technical analysis and coordination support. Position is currently closed.',
    responsibilities: [
      'Support technical documentation and submittal tracking',
      'Assist with correspondence records and project files',
      'Coordinate with field teams and stakeholders',
    ],
    qualifications: [
      'Degree in engineering, construction management, or related field',
      'Strong organizational and communication skills',
      'Detail-oriented documentation capability',
    ],
    draftHistory: {
      originalLocation: 'Bentonville, Arkansas',
      originalDescription:
        'Support our engineering and project management teams with technical analysis, documentation, and field coordination for active site development and infrastructure projects.',
      originalResponsibilities: [
        'Assist with preparation of engineering calculations, reports, and quantity takeoffs',
        'Support project documentation, submittal tracking, and permit coordination',
        'Coordinate with field teams, vendors, and project stakeholders',
        'Maintain project files, schedules, and correspondence records',
        'Assist in site visits and field observations as required',
        'Prepare drawings and technical documentation under engineer supervision',
      ],
      originalQualifications: [
        "Bachelor's degree in Civil Engineering, Construction Management, or related field",
        '0–3 years of experience in civil engineering or site development',
        'Familiarity with AutoCAD or Civil 3D preferred',
        'Strong organizational and communication skills',
        'Ability to work effectively in a collaborative team environment',
        'Detail-oriented with strong analytical and problem-solving skills',
      ],
    },
  },
  {
    id: 'civil-cad-technician',
    title: 'Civil CAD Technician',
    location: 'Jacksonville, FL',
    status: 'Closed',
    type: 'Full-Time',
    onSite: true,
    remote: false,
    description:
      'Archived position. Technical drafting and drawing preparation. Position is currently closed.',
    responsibilities: [
      'Prepare and revise technical site drawings',
      'Maintain organized drawing files and document revision records',
      'Support field teams with plan interpretation',
    ],
    qualifications: [
      'Proficiency in CAD design tools',
      'Experience in site drafting and layout conventions',
      'Strong attention to detail',
    ],
    draftHistory: {
      originalLocation: 'Bentonville, Arkansas',
      originalDescription:
        'Prepare civil engineering drawings, site plans, and technical documentation using AutoCAD Civil 3D in support of site development and infrastructure projects.',
      originalResponsibilities: [
        'Prepare and revise civil engineering drawings including grading, drainage, and site plans',
        'Create quantity takeoffs and material schedules from engineering plans',
        'Coordinate drawing sets with engineering and project management teams',
        'Maintain organized drawing files and document revision records',
        'Support field teams with plan interpretation and technical documentation',
        'Assist with GIS data entry and site mapping tasks',
      ],
      originalQualifications: [
        'Proficiency in AutoCAD Civil 3D required',
        '1–3 years of experience as a CAD technician in civil or site engineering',
        'Knowledge of civil engineering drawing standards and conventions',
        'Experience with site grading, drainage, or utility plan preparation preferred',
        'Strong attention to detail and accuracy',
        'Ability to work independently and meet project deadlines',
      ],
    },
  },
  {
    id: 'civil-project-engineer',
    title: 'Civil Project Engineer',
    location: 'Jacksonville, FL',
    status: 'Closed',
    type: 'Full-Time',
    onSite: true,
    remote: false,
    description:
      'Archived position. Project coordination and scheduling support. Position is currently closed.',
    responsibilities: [
      'Manage deliverables and technical timelines',
      'Coordinate permitting and regulatory submittals',
      'Communicate project status to internal teams',
    ],
    qualifications: [
      'Degree in civil engineering or related field',
      'Experience in project coordination and schedule tracking',
      'Strong communication skills',
    ],
    draftHistory: {
      originalLocation: 'Bentonville, AR / Jacksonville, FL / Hybrid / Remote',
      originalDescription:
        'Manage and coordinate civil engineering tasks for active site development, infrastructure, and land development projects across multiple state locations.',
      originalResponsibilities: [
        'Manage civil engineering deliverables for site development and infrastructure projects',
        'Coordinate with PEs, CAD technicians, and project management staff',
        'Prepare and review grading, drainage, and utility engineering documentation',
        'Coordinate permitting, agency review, and regulatory submissions',
        'Track project schedules, budgets, and technical deliverables',
        'Communicate project status to internal teams and external stakeholders',
        'Support field coordination and construction observation activities',
      ],
      originalQualifications: [
        "Bachelor's degree in Civil Engineering",
        '3–7 years of experience in civil engineering, site development, or land development',
        'Proficiency in AutoCAD Civil 3D',
        'Experience managing multiple concurrent projects and deadlines',
        'Strong knowledge of site grading, drainage, and utility systems',
        'PE license preferred but not required',
        'Excellent project management and communication skills',
      ],
    },
  },
];

// Alias for semantic clarity
export const archivedJobListings = closedJobListings;

