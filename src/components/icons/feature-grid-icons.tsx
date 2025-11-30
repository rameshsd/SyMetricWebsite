'use client';

import * as React from 'react';

export type IconProps = { className?: string };

const PRIMARY_COLOR = "#bc10b6";
const SECONDARY_COLOR = "white";

const RawSVG: React.FC<{ svg: string; className?: string }> = ({ svg, className }) => (
  <span
    className={className}
    style={{ display: 'inline-block' }}
    dangerouslySetInnerHTML={{
      __html: svg.replace('<svg', '<svg class="h-full w-full" stroke="currentColor"')
    }}
  />
);

const SVG_PROPS = `viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;

export const IdentityAccessIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><path d="M12 2L5 5v5c0 5.5 3.5 10 7 10s7-4.5 7-10V5l-7-3z" /><circle cx="12" cy="10" r="3" /></svg>`}
  />
);

export const OrganizationIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}>
      <rect stroke="${PRIMARY_COLOR}" x="7" y="6" width="10" height="12" rx="1" />
      <path stroke="${PRIMARY_COLOR}" d="M6 6l6-3l6 3" />
      <rect stroke="${SECONDARY_COLOR}" x="3" y="10" width="3" height="8" rx="1" />
      <rect stroke="${SECONDARY_COLOR}" x="18" y="10" width="3" height="8" rx="1" />
      <rect stroke="${SECONDARY_COLOR}" x="11" y="12" width="2" height="6" />
      <path stroke="${SECONDARY_COLOR}" d="M9 9h2M13 9h2M9 11h2M13 11h2" />
    </svg>`}
  />
);

export const CustomerManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" /></svg>`}
  />
);

export const StudyIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>`}
  />
);

export const SiteIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}>
      <rect stroke="${PRIMARY_COLOR}" x="4" y="6" width="16" height="14" rx="2" />
      <rect stroke="${SECONDARY_COLOR}" x="10" y="4" width="4" height="4" />
      <path stroke="${SECONDARY_COLOR}" d="M12 5v2M11 6h2" />
      <rect stroke="${SECONDARY_COLOR}" x="10" y="14" width="4" height="6" />
      <path stroke="${SECONDARY_COLOR}" d="M7 10h3M7 12h3M14 10h3M14 12h3" />
    </svg>`}
  />
);

export const SuppliesIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}>
      <path stroke="${PRIMARY_COLOR}" d="M9 5a3 3 0 0 1 4.24 0l2.83 2.83a3 3 0 0 1 0 4.24l-1.41 1.41a3 3 0 0 1-4.24 0L7.59 10.5a3 3 0 0 1 0-4.24L9 5z" />
      <path stroke="${SECONDARY_COLOR}" d="M10.5 6.5l4 4" />
      <circle stroke="${SECONDARY_COLOR}" cx="7" cy="17" r="3" />
      <path stroke="${SECONDARY_COLOR}" d="M5.5 17h3" />
    </svg>`}
  />
);

export const SubjectIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></svg>`}
  />
);

export const DataManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>`}
  />
);

export const LabIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><path d="M10 2h4" /><path d="M9 2v3l-3 4v9a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5v-9l-3-4V2" /><path d="M9 9h6" /></svg>`}
  />
);

export const MedicalCodingIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 16.5l-2-2.5 2-2.5" /><path d="M15 16.5l2-2.5-2-2.5" /></svg>`}
  />
);

export const ReportsIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><path d="M8 6h8" /><path d="M8 10h4" /><path d="M10 18v-1a2 2 0 0 1 2-2h4" /><path d="M10 18a2 2 0 1 0-4 0" /><path d="M18 18a2 2 0 1 0-4 0" /><path d="M4 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /></svg>`}
  />
);

export const DigitalLearningIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}>
      <rect stroke="${PRIMARY_COLOR}" x="3" y="7" width="18" height="12" rx="2" />
      <path stroke="${PRIMARY_COLOR}" d="M2 19h20" />
      <path stroke="${SECONDARY_COLOR}" d="M12 6l6 3l-6 3l-6-3l6-3z" />
      <path stroke="${SECONDARY_COLOR}" d="M12 9v3" />
      <path stroke="${SECONDARY_COLOR}" d="M15 10.5v2" />
    </svg>`}
  />
);

export const DataServicesIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}>
      <ellipse stroke="${PRIMARY_COLOR}" cx="12" cy="5" rx="6" ry="2.5" />
      <path stroke="${PRIMARY_COLOR}" d="M6 5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5" />
      <path stroke="${PRIMARY_COLOR}" d="M6 9v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V9" />
      <path stroke="${SECONDARY_COLOR}" d="M5 17h3l-1 1.5A3 3 0 0 0 7 21" />
      <path stroke="${SECONDARY_COLOR}" d="M19 17h-3l1 1.5A3 3 0 0 1 17 21" />
    </svg>`}
  />
);

export const SampleManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>`}
  />
);

export const LabelManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`}
  />
);

export const HelpSupportIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg ${SVG_PROPS}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>`}
  />
);