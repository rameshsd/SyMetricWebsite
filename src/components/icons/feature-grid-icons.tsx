'use client';

import * as React from 'react';

export type IconProps = { className?: string };

// ----------------------------------------------------
// GLOBAL COLOR
// ----------------------------------------------------
const PRIMARY_COLOR = "hsl(var(--primary))";
const FILL_COLOR = "hsl(var(--primary) / 0.2)"; // A light tint of the primary color


// SVG wrapper
const RawSVG: React.FC<{ svg: string; className?: string }> = ({ svg, className }) => (
  <span
    className={className}
    style={{ display: 'inline-block' }}
    dangerouslySetInnerHTML={{
      __html: svg.replace(
        '<svg',
        `<svg class="h-full w-full" stroke-linecap="round" stroke-linejoin="round"`
      )
    }}
  />
);

const SVG_BASE = `viewBox="0 0 24 24"`;

// ====================================================
// 1. Identity & Access
// ====================================================
export const IdentityAccessIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke="${PRIMARY_COLOR}" stroke-width="2" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="${FILL_COLOR}" />
    <circle cx="12" cy="12" r="1.5" fill="${PRIMARY_COLOR}" stroke="none" />
  </svg>`} />
);

// ====================================================
// 2. Organization Management (Buildings)
// ====================================================
export const OrganizationIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" fill="${FILL_COLOR}" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>`} />
);


// ====================================================
// 3. Customer Management
// ====================================================
export const CustomerManagementIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="${FILL_COLOR}" />
    <circle cx="8.5" cy="7" r="4" fill="${FILL_COLOR}" />
    <path d="M20 8v6" />
    <path d="M23 11h-6" />
  </svg>`} />
);

// ====================================================
// 4. Study Management
// ====================================================
export const StudyIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke="${PRIMARY_COLOR}" stroke-width="2" fill="none">
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" fill="${FILL_COLOR}" />
    <circle cx="12" cy="12" r="4" fill="${PRIMARY_COLOR}" stroke="none" />
  </svg>`} />
);

// ====================================================
// 5. Site Management (Hospital)
// ====================================================
export const SiteIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="${FILL_COLOR}" />
    <circle cx="12" cy="10" r="3" fill="${PRIMARY_COLOR}" stroke="none" />
  </svg>`} />
);

// ====================================================
// 6. Clinical Supplies Management (Capsule + Tablet)
// ====================================================
export const SuppliesIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="${FILL_COLOR}" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>`} />
);

// ====================================================
// 7. Subject Management
// ====================================================
export const SubjectIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <circle cx="12" cy="8" r="4" fill="${FILL_COLOR}" />
    <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" fill="${FILL_COLOR}" />
  </svg>`} />
);

// ====================================================
// 8. Data Management
// ====================================================
export const DataManagementIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="${FILL_COLOR}"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" fill="${FILL_COLOR}"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="${FILL_COLOR}"/>
  </svg>`} />
);

// ====================================================
// 9. Lab Management
// ====================================================
export const LabIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <path d="M10 2h4" />
    <path d="M9 2v3l-3 4v9a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-9l-3-4V2" fill="${FILL_COLOR}"/>
    <path d="M9 9h6" />
  </svg>`} />
);

// ====================================================
// 10. Medical Coding
// ====================================================
export const MedicalCodingIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2V8z" fill="${FILL_COLOR}"/>
    <polyline points="14 2 14 8 20 8" />
    <path d="M9 16.5l-2-2.5 2-2.5" />
    <path d="M15 16.5l2-2.5-2-2.5" />
  </svg>`} />
);

// ====================================================
// 11. Reports (CLEAN VERSION)
// ====================================================
export const ReportsIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <rect x="4" y="2" width="16" height="20" rx="2" fill="${FILL_COLOR}"/>
    <path d="M8 7h8" />
    <path d="M8 11h6" />
    <path d="M8 15h4" />
  </svg>`} />
);

// ====================================================
// 12. Digital Learning
// ====================================================
export const DigitalLearningIcon = ({ className }: IconProps) => (
    <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <rect x="3" y="4" width="18" height="12" rx="2" fill="${FILL_COLOR}"/>
    <path d="M21 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
    <path d="M12 12V8" />
    <path d="M10 8h4" />
    <path d="M7 2v2" />
    <path d="M17 2v2" />
  </svg>`} />
);

// ====================================================
// 13. Data Services
// ====================================================
export const DataServicesIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <path d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
    <path d="M20.2 7.8l-1.4-1.4" />
    <path d="M3.8 17.2l-1.4-1.4" />
    <path d="M17.2 20.2l-1.4-1.4" />
    <path d="M8.2 5.8l-1.4-1.4" />
    <circle cx="12" cy="12" r="10" fill="${FILL_COLOR}"/>
  </svg>`} />
);

// ====================================================
// 14. Sample Management
// ====================================================
export const SampleManagementIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2V7.5L14.5 2z" fill="${FILL_COLOR}"/>
    <polyline points="14 2 14 8 20 8" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
  </svg>`} />
);

// ====================================================
// 15. Label Management
// ====================================================
export const LabelManagementIcon = ({ className }: IconProps) => (
    <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" fill="${FILL_COLOR}"/>
    <line x1="7" y1="7" x2="7.01" y2="7" stroke-width="2.5" />
  </svg>`} />
);


// ====================================================
// 16. Help &amp; Support
// ====================================================
export const HelpSupportIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${PRIMARY_COLOR}" fill="none">
    <circle cx="12" cy="12" r="10" fill="${FILL_COLOR}"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2 -3 3 -3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>`} />
);
