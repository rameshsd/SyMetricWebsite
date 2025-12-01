
'use client';

import * as React from 'react';

export type IconProps = { className?: string };

// ----------------------------------------------------
// GLOBAL COLOR
// ----------------------------------------------------
const ICON_COLOR = "currentColor";
const SECONDARY_COLOR = "hsla(var(--primary-foreground), 0.8)";


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
  <RawSVG className={className} svg={`<svg ${SVG_BASE}>
    <path stroke="${ICON_COLOR}" stroke-width="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" />
    <circle cx="12" cy="12" r="1.5" fill="${SECONDARY_COLOR}" stroke="none" />
  </svg>`} />
);

// ====================================================
// 2. Organization Management (Buildings)
// ====================================================
export const OrganizationIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE}>
    <rect x="5" y="7" width="14" height="12" rx="2" stroke="${ICON_COLOR}" stroke-width="2" fill="none"/>
    <path stroke="${ICON_COLOR}" stroke-width="2" d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
    <circle cx="9.5" cy="13" r="1" fill="${SECONDARY_COLOR}" stroke="none" />
    <circle cx="14.5" cy="13" r="1" fill="${SECONDARY_COLOR}" stroke="none" />
  </svg>`} />
);


// ====================================================
// 3. Customer Management
// ====================================================
export const CustomerManagementIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${ICON_COLOR}" fill="none">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6" stroke="${SECONDARY_COLOR}" />
    <path d="M23 11h-6" stroke="${SECONDARY_COLOR}" />
  </svg>`} />
);

// ====================================================
// 4. Study Management
// ====================================================
export const StudyIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE}>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="${ICON_COLOR}" stroke-width="2" fill="none" />
    <circle cx="12" cy="12" r="4" fill="${SECONDARY_COLOR}" stroke="none" />
  </svg>`} />
);

// ====================================================
// 5. Site Management (Hospital)
// ====================================================
export const SiteIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="${ICON_COLOR}" stroke-width="2" fill="none" />
    <circle cx="12" cy="10" r="3" fill="${SECONDARY_COLOR}" stroke="none" />
  </svg>`} />
);

// ====================================================
// 6. Clinical Supplies Management (Capsule + Tablet)
// ====================================================
export const SuppliesIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="${ICON_COLOR}" stroke-width="2" fill="none" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="${SECONDARY_COLOR}" stroke-width="2" />
    <line x1="12" y1="22.08" x2="12" y2="12" stroke="${SECONDARY_COLOR}" stroke-width="2" />
  </svg>`} />
);

// ====================================================
// 7. Subject Management
// ====================================================
export const SubjectIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE}>
    <circle cx="12" cy="8" r="4" fill="${SECONDARY_COLOR}" stroke="none" />
    <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" stroke="${ICON_COLOR}" stroke-width="2" fill="none" />
  </svg>`} />
);

// ====================================================
// 8. Data Management
// ====================================================
export const DataManagementIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${ICON_COLOR}" fill="none">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>`} />
);

// ====================================================
// 9. Lab Management
// ====================================================
export const LabIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${ICON_COLOR}" fill="none">
    <path d="M10 2h4" />
    <path d="M9 2v3l-3 4v9a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-9l-3-4V2" />
    <path d="M9 9h6" stroke="${SECONDARY_COLOR}" />
  </svg>`} />
);

// ====================================================
// 10. Medical Coding
// ====================================================
export const MedicalCodingIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${ICON_COLOR}" fill="none">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M9 16.5l-2-2.5 2-2.5" stroke="${SECONDARY_COLOR}" />
    <path d="M15 16.5l2-2.5-2-2.5" stroke="${SECONDARY_COLOR}" />
  </svg>`} />
);

// ====================================================
// 11. Reports (CLEAN VERSION)
// ====================================================
export const ReportsIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${ICON_COLOR}" fill="none">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M8 7h8" stroke="${SECONDARY_COLOR}" />
    <path d="M8 11h6" stroke="${SECONDARY_COLOR}" />
    <path d="M8 15h4" stroke="${SECONDARY_COLOR}" />
  </svg>`} />
);

// ====================================================
// 12. Digital Learning (Laptop + Cap)
// ====================================================
export const DigitalLearningIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${ICON_COLOR}" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M1 21h22" />
    <path d="M3 13h18" />
    <path d="M12 6l-6 2.5 6 2.5 6-2.5-6-2.5z" stroke="${SECONDARY_COLOR}" />
    <path d="M12 6v3" stroke="${SECONDARY_COLOR}" />
  </svg>`} />
);

// ====================================================
// 13. Data Services + Flow Arrows (FIXED)
// ====================================================
export const DataServicesIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${ICON_COLOR}" fill="none">
    <ellipse cx="12" cy="5" rx="6" ry="2.3" />
    <path d="M6 5v4c0 1.3 2.7 2.3 6 2.3s6-1 6-2.3V5" />
    <path d="M6 9v4c0 1.3 2.7 2.3 6 2.3s6-1 6-2.3V9" />
    <path d="M5 17h3l-1.2 1.8A3 3 0 0 0 7 21" stroke="${SECONDARY_COLOR}" />
    <path d="M19 17h-3l1.2 1.8A3 3 0 0 1 17 21" stroke="${SECONDARY_COLOR}" />
  </svg>`} />
);

// ====================================================
// 14. Sample Management
// ====================================================
export const SampleManagementIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${ICON_COLOR}" fill="none">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M9 12h6" stroke="${SECONDARY_COLOR}" />
    <path d="M12 9v6" stroke="${SECONDARY_COLOR}" />
  </svg>`} />
);

// ====================================================
// 15. Label Management
// ====================================================
export const LabelManagementIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${ICON_COLOR}" fill="none">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49 -8.49l9.19 -9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1 -2.83 -2.83l8.49 -8.48" />
  </svg>`} />
);

// ====================================================
// 16. Help & Support
// ====================================================
export const HelpSupportIcon = ({ className }: IconProps) => (
  <RawSVG className={className} svg={`<svg ${SVG_BASE} stroke-width="2" stroke="${ICON_COLOR}" fill="none">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2 -3 3 -3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>`} />
);


